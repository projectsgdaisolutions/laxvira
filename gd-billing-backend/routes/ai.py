
# import json
# import io
# from datetime import datetime
# from typing import Optional
# from PIL import Image
# from google import genai
# from google.genai import types

# from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Query
# from sqlalchemy.orm import Session
# from sqlalchemy import desc

# from database import get_db
# from dependencies import get_current_store
# import models
# import schemas

# # 3. Initialize the router (This replaces 'app = FastAPI()')
# router = APIRouter()


# @router.post("/api/ai/parse-receipt", response_model=ExtractedReceipt)
# async def parse_receipt(file: UploadFile = File(...)):
#     if not file.content_type.startswith("image/"):
#         raise HTTPException(status_code=400, detail="File must be an image")

#     try:
#         image_bytes = await file.read()
#         image = Image.open(io.BytesIO(image_bytes))

#         client = genai.Client()

#         prompt = """
#         Analyze this receipt image. It may be crumpled or poorly lit.
#         Extract the vendor name, date (YYYY-MM-DD), line items (with quantities and rates), subtotal, tax, and grand total.
#         If a value is obscured, use your best logical deduction.
#         Return exactly the requested JSON structure.
#         """

#         # 1. Instantiate a stateful chat session to satisfy the SDK's AFC requirement
#         chat = client.chats.create(
#             model='gemini-3.6-flash', # 2. Bumped from 1.5 to 2.5 to fix the 404 Not Found
#             config=types.GenerateContentConfig(
#                 response_mime_type="application/json",
#                 response_schema=ExtractedReceipt,
#                 temperature=0.1,
#             )
#         )

#         # 3. Send the image and prompt through the chat interface
#         response = chat.send_message([image, prompt])

#         extracted_data = json.loads(response.text)
#         return extracted_data

#     except Exception as e:
#         print(f"Gemini AI Error: {e}")
#         raise HTTPException(status_code=500, detail="Failed to parse receipt using AI")

# @router.get("/api/ai/natural-search")
# def natural_language_search(
#     q: str = Query(..., description="The natural language search query"),
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     try:
#         q_lower = q.lower().strip()
#         base_query = db.query(InvoiceDB).filter(InvoiceDB.store_id == current_store.id)
        
#         # Keywords that should NOT be strictly filtered in the database
#         ignore_words = ["invoice", "invoices", "all", "show", "get", "find", "me"]

#         # 1. THE HYBRID ROUTER: Does this query need AI?
#         time_triggers = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 
#                          'today', 'yesterday', 'last', 'this', 'past', 'month', 'week', 'year', 'days', 'between', 'from']
        
#         needs_ai = any(word in q_lower for word in time_triggers)

#         # ==========================================
#         # FAST PATH: Standard SQL (Instant Response)
#         # ==========================================
#         if not needs_ai:
#             print(f"⚡ FAST PATH Search: '{q}'")
#             if q_lower not in ignore_words:
#                 search_term = f"%{q}%"
#                 base_query = base_query.filter(
#                     (InvoiceDB.invoice_number.ilike(search_term)) | 
#                     (InvoiceDB.customer_name.ilike(search_term))
#                 )
            
#             invoices = base_query.order_by(desc(InvoiceDB.created_at)).limit(50).all()
#             return {
#                 "intent": {"query_type": "standard", "search_keyword": q},
#                 "results": [
#                     {
#                         "id": inv.id,
#                         "invoice_number": inv.invoice_number,
#                         "date": (inv.issue_date or inv.created_at).isoformat() if (inv.issue_date or inv.created_at) else "",
#                         "customer_name": inv.customer_name,
#                         "total_amount": inv.total_amount,
#                         "payment_method": inv.payment_method
#                     } for inv in invoices
#                 ]
#             }

#         # ==========================================
#         # SLOW PATH: AI Intent Extraction
#         # ==========================================
#         print(f"🤖 AI PATH Search Triggered: '{q}'")
#         client = genai.Client()
#         prompt = f"""
#         Analyze this search query: "{q}"
#         Today's current date is {datetime.now().strftime('%Y-%m-%d')}.
#         Extract any specific dates mentioned (convert terms like 'yesterday' or '3rd october' into explicit YYYY-MM-DD format).
#         Also extract any specific search keywords (like names or ID numbers), but DO NOT include generic words like 'invoice', 'show', 'get', or 'all'.
#         """

#         response = client.models.generate_content(
#             model='gemini-2.5-flash',
#             contents=prompt,
#             config=types.GenerateContentConfig(
#                 response_mime_type="application/json",
#                 response_schema=SearchIntent,
#                 temperature=0.0
#             ),
#         )

#         intent = json.loads(response.text)
#         print(f"🧠 AI Parsed Intent:", intent)

#         # Handle Extracted Date Filtering
#         if intent.get("target_date"):
#             target_dt = datetime.strptime(intent["target_date"], "%Y-%m-%d")
#             start_of_day = target_dt.replace(hour=0, minute=0, second=0, microsecond=0)
#             end_of_day = target_dt.replace(hour=23, minute=59, second=59, microsecond=999999)
#             base_query = base_query.filter(
#                 (InvoiceDB.created_at >= start_of_day) & (InvoiceDB.created_at <= end_of_day)
#             )

#         # Handle Extracted Range Filtering
#         elif intent.get("start_date") and intent.get("end_date"):
#             start_dt = datetime.strptime(intent["start_date"], "%Y-%m-%d").replace(hour=0, minute=0, second=0)
#             end_dt = datetime.strptime(intent["end_date"], "%Y-%m-%d").replace(hour=23, minute=59, second=59)
#             base_query = base_query.filter(
#                 (InvoiceDB.created_at >= start_dt) & (InvoiceDB.created_at <= end_dt)
#             )

#         # Handle Extracted Keywords (Filtering out generic terms)
#         extracted_keyword = intent.get("search_keyword")
#         if extracted_keyword and str(extracted_keyword).lower() not in ignore_words:
#             kw = f"%{extracted_keyword}%"
#             base_query = base_query.filter(
#                 (InvoiceDB.invoice_number.ilike(kw)) | 
#                 (InvoiceDB.customer_name.ilike(kw))
#             )

#         invoices = base_query.order_by(desc(InvoiceDB.created_at)).limit(50).all()

#         return {
#             "intent": intent,
#             "results": [
#                 {
#                     "id": inv.id,
#                     "invoice_number": inv.invoice_number,
#                     "date": (inv.issue_date or inv.created_at).isoformat() if (inv.issue_date or inv.created_at) else "",
#                     "customer_name": inv.customer_name,
#                     "total_amount": inv.total_amount,
#                     "payment_method": inv.payment_method
#                 } for inv in invoices
#             ]
#         }

#     except Exception as e:
#         print(f"❌ Natural Search Error: {str(e)}")
#         # Safe Fallback to standard 50 recent invoices on any error
#         fallback_invoices = db.query(InvoiceDB).filter(InvoiceDB.store_id == current_store.id).order_by(desc(InvoiceDB.created_at)).limit(50).all()
#         return {
#             "intent": {"error": str(e)},
#             "results": [
#                 {
#                     "id": inv.id,
#                     "invoice_number": inv.invoice_number,
#                     "date": (inv.issue_date or inv.created_at).isoformat() if (inv.issue_date or inv.created_at) else "",
#                     "customer_name": inv.customer_name,
#                     "total_amount": inv.total_amount,
#                     "payment_method": inv.payment_method
#                 } for inv in fallback_invoices
#             ]
#         }

import json
import requests
import os
import io
from datetime import datetime
from typing import Optional
from PIL import Image, ImageOps
from google import genai
from google.genai import types
import asyncio
import traceback
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Query, Request
from sqlalchemy.orm import Session
from sqlalchemy import desc
from jose import jwt
from auth import SECRET_KEY, ALGORITHM
from database import get_db
from dependencies import get_current_store
import models
import schemas
from pydantic import BaseModel
from typing import List, Optional
import traceback
from dotenv import load_dotenv
from google.genai.errors import APIError
import numpy as np
from paddleocr import PaddleOCR
import cv2
 

load_dotenv()

ocr = PaddleOCR(use_angle_cls=True, lang="en")

router = APIRouter(prefix="/api/ai", tags=["AI Processing"])


@router.post("/extract-receipt")
async def extract_receipt(request: Request):
    try:
        form = await request.form()
        
        uploaded_files = [v for v in form.values() if hasattr(v, "filename")]
        if not uploaded_files:
            raise HTTPException(status_code=400, detail="No file found in the request.")
            
        file = uploaded_files[0]
        contents = await file.read()
        
        # Convert the raw uploaded bytes into an OpenCV image matrix for PaddleOCR
        nparr = np.frombuffer(contents, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if img is None:
            raise HTTPException(status_code=400, detail="Uploaded file is not a valid image.")
        
        # Run OCR on the decoded image matrix
        ocr_result = ocr.ocr(img, cls=True)
        
        extracted_text = ""
        if ocr_result:
            extracted_text = " ".join([line[1][0] for block in ocr_result if block for line in block])

        if not extracted_text.strip():
            raise HTTPException(status_code=400, detail="No readable text found on the receipt.")

        # Query the local Ollama SLM
        ollama_response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "laxvira-invoice",
                "prompt": f"Extract the invoice details from this text:\n\n{extracted_text}",
                "format": "json",
                "stream": False,
            },
            timeout=60
        )

        if ollama_response.status_code != 200:
            raise HTTPException(status_code=500, detail="Local SLM inference failed.")

        # Strip potential markdown fences and parse the JSON payload
        raw_result = ollama_response.json().get("response", "{}")
        raw_result = raw_result.strip().removeprefix("```json").removesuffix("```").strip()
        parsed_data = json.loads(raw_result)

        return {
            "status": "success",
            "data": parsed_data
        }

    except requests.exceptions.ConnectionError:
        raise HTTPException(status_code=503, detail="Ollama service is not running.")
    except Exception as e:
        # Print the exact exception to the Uvicorn terminal for debugging
        print(f"\n[SERVER ERROR] {str(e)}\n")
        raise HTTPException(status_code=500, detail=str(e))

# @router.post("/extract-receipt")
# async def extract_receipt(file: UploadFile = File(...)):
#     try:
#         # 1. Read the uploaded receipt image bytes
#         contents = await file.read()
        
#         # 2. Run your existing local OCR engine to extract raw text
#         # (Use your existing OCR logic here, e.g., paddleocr / easyocr)
#         ocr_result = ocr.ocr(contents, cls=True)
#         extracted_text = " ".join([line[1][0] for block in ocr_result if block for line in block])

#         if not extracted_text.strip():
#             raise HTTPException(status_code=400, detail="No readable text found on the receipt.")

#         # 3. Query your local fine-tuned Ollama model
#         ollama_response = requests.post(
#             "http://localhost:11434/api/generate",
#             json={
#                 "model": "laxvira-invoice",
#                 "prompt": f"Extract the invoice details from this text:\n\n{extracted_text}",
#                 "format": "json",
#                 "stream": False,
#             },
#             timeout=60
#         )

#         if ollama_response.status_code != 200:
#             raise HTTPException(status_code=500, detail="Local SLM inference failed.")

#         parsed_data = json.loads(ollama_response.json().get("response", "{}"))

#         # 4. Return the structured payload to the React frontend
#         return {
#             "status": "success",
#             "data": parsed_data
#         }

#     except requests.exceptions.ConnectionError:
#         raise HTTPException(
#             status_code=503, 
#             detail="Ollama service is not running. Please start Ollama."
#         )
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# class OCRPayload(BaseModel):
#     ocr_text: str

# @router.post("/parse")
# def parse_invoice(payload: OCRPayload):
#     try:
#         response = requests.post(
#             "http://localhost:11434/api/generate",
#             json={
#                 "model": "laxvira-invoice",
#                 "prompt": f"Extract the invoice details from this text:\n\n{payload.ocr_text}",
#                 "format": "json",
#                 "stream": False,
#             },
#             timeout=60
#         )
        
#         if response.status_code != 200:
#             raise HTTPException(status_code=500, detail="Failed to communicate with local model.")

#         raw_result = response.json().get("response", "{}")
#         parsed_json = json.loads(raw_result)
        
#         return {
#             "status": "success",
#             "data": parsed_json
#         }

#     except requests.exceptions.ConnectionError:
#         raise HTTPException(status_code=503, detail="Ollama service is not running on localhost:11434.")
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


# # 2. Initialize the local OCR engine globally. 
# # Loading it here ensures the model weights stay in RAM across requests.
# # use_angle_cls=True handles receipts photographed at an angle.
# # ocr_engine = PaddleOCR(use_angle_cls=True, lang='en', show_log=False)
# ocr_engine = PaddleOCR(use_angle_cls=True, 
#     lang='en', 
#     enable_mkldnn=False)

# class ExtractedLineItem(BaseModel):
#     description: str
#     quantity: float
#     rate: float

# class ExtractedReceipt(BaseModel):
#     date: Optional[str] = ""
#     items: List[ExtractedLineItem]

# def process_image_for_ocr(image_bytes: bytes) -> np.ndarray:
#     """Converts uploaded bytes into a numpy array for PaddleOCR."""
#     img = Image.open(io.BytesIO(image_bytes))
#     img = ImageOps.exif_transpose(img)
    
#     # Standardize format and convert to numpy array (RGB)
#     if img.mode != "RGB":
#         img = img.convert("RGB")
    
#     return np.array(img)

# @router.post("/extract-receipt")
# async def extract_receipt_data(receipt: UploadFile = File(...)):
#     if not receipt.content_type.startswith("image/"):
#         raise HTTPException(status_code=400, detail="File must be an image")

#     try:
#         raw_bytes = await receipt.read()
        
#         # Step 1: Local OCR Extraction (Zero API Cost)
#         img_matrix = process_image_for_ocr(raw_bytes)
#         ocr_result = ocr_engine.ocr(img_matrix)
        
#         # Flatten the OCR output into a single unstructured text block
#         extracted_text_blocks = []
#         if ocr_result and ocr_result[0]:
#             for line in ocr_result[0]:
#                 text = line[1][0]  # line[1][0] contains the actual string
#                 extracted_text_blocks.append(text)
                
#         raw_receipt_text = "\n".join(extracted_text_blocks)

#         if not raw_receipt_text.strip():
#             raise ValueError("OCR failed to detect any text on the document.")

#         # Step 2: LLM Structuring (Text-Only Call)
#         prompt = f"""
#         You are a data extraction parser. I have used an OCR engine to extract the raw text from a receipt.
#         Map this raw text into the requested JSON schema.
#         Extract the invoice date (YYYY-MM-DD) and all purchase line items.
#         If line-item quantity is absent, default to 1.
#         If only the final line total is present, divide total by quantity to compute rate.

#         RAW OCR TEXT:
#         {raw_receipt_text}
#         """

#         # Using 1.5-flash for the text transformation
#         response = await client.aio.models.generate_content(
#             model='gemini-1.5-flash', 
#             contents=prompt,
#             config=types.GenerateContentConfig(
#                 response_mime_type="application/json",
#                 response_schema=ExtractedReceipt,
#                 temperature=0.0
#             )
#         )

#         if response.parsed:
#             return response.parsed.model_dump()
#         else:
#             cleaned_text = response.text.replace("```json", "").replace("```", "").strip()
#             return json.loads(cleaned_text)

#     except Exception as e:
#         print("\n--- OCR/AI HYBRID PIPELINE TRACEBACK ---")
#         traceback.print_exc()
#         print("----------------------------------------\n")
#         raise HTTPException(status_code=500, detail="Failed to process receipt.")
# class ExtractedLineItem(BaseModel):
#     description: str
#     quantity: float
#     rate: float

# class ExtractedReceipt(BaseModel):
#     date: Optional[str] = ""
#     items: List[ExtractedLineItem]

# def optimize_image(image_bytes: bytes) -> Image.Image:
#     img = Image.open(io.BytesIO(image_bytes))
#     img = ImageOps.exif_transpose(img)
#     img.thumbnail((1280, 1280), Image.Resampling.LANCZOS)
#     if img.mode != "RGB":
#         img = img.convert("RGB")
#     return img

# @router.post("/extract-receipt")
# async def extract_receipt_data(receipt: UploadFile = File(...)):
#     if not receipt.content_type.startswith("image/"):
#         raise HTTPException(status_code=400, detail="File must be an image")

#     try:
#         raw_bytes = await receipt.read()
#         optimized_img = optimize_image(raw_bytes)

#         prompt = (
#             "Extract the invoice date (YYYY-MM-DD) and all purchase line items. "
#             "If line-item quantity is absent, default to 1. "
#             "If only the final line total is present, divide total by quantity to compute rate."
#         )

#         response = await client.aio.models.generate_content(
#             model='gemini-1.5-flash', 
#             contents=[prompt, optimized_img],
#             config=types.GenerateContentConfig(
#                 response_mime_type="application/json",
#                 response_schema=ExtractedReceipt,
#                 temperature=0.0
#             )
#         )

#         if response.parsed:
#             return response.parsed.model_dump()
#         else:
#             cleaned_text = response.text.replace("```json", "").replace("```", "").strip()
#             return json.loads(cleaned_text)

#     except APIError as api_err:
#         print(f"API Provider Error: {api_err}")
#         # MOCK FALLBACK: Unblocks UI development when quotas are blown
#         print("Falling back to mock data to maintain development velocity...")
#         await asyncio.sleep(2) # Simulate network latency
#         return {
#             "date": "2026-09-12",
#             "items": [
#                 {"description": "Mocked Bulk Purchase (API Limit Reached)", "quantity": 10, "rate": 150.00},
#                 {"description": "Fallback Development Service", "quantity": 1, "rate": 5000.00}
#             ]
#         }
#     except Exception as e:
#         print("\n--- AI EXTRACTION CRASH TRACEBACK ---")
#         traceback.print_exc()
#         raise HTTPException(status_code=500, detail="Fatal extraction failure.")
# router = APIRouter(prefix="/api/ai", tags=["AI Processing"])

# # Instantiate the new client (Ensure GEMINI_API_KEY is in your .env or system vars)
# client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


# # Define strict schema for zero-overhead decoding
# class ExtractedLineItem(BaseModel):
#     description: str
#     quantity: float
#     rate: float

# class ExtractedReceipt(BaseModel):
#     date: Optional[str] = ""
#     items: List[ExtractedLineItem]

# def optimize_image(image_bytes: bytes) -> Image.Image:
#     """Downscales image in-place to save memory and tokens."""
#     img = Image.open(io.BytesIO(image_bytes))
#     img = ImageOps.exif_transpose(img)
    
#     # .thumbnail() resizes the image object in-place.
#     img.thumbnail((1280, 1280), Image.Resampling.LANCZOS)
    
#     if img.mode != "RGB":
#         img = img.convert("RGB")
        
#     # Return the image object directly. Do NOT save to a BytesIO buffer and reopen,
#     # as PIL lazy-loading will crash when the local buffer is garbage collected.
#     return img

# @router.post("/extract-receipt")
# async def extract_receipt_data(receipt: UploadFile = File(...)):
#     if not receipt.content_type.startswith("image/"):
#         raise HTTPException(status_code=400, detail="File must be an image")

#     try:
#         raw_bytes = await receipt.read()
#         optimized_img = optimize_image(raw_bytes)

#         prompt = (
#             "Extract the invoice date (YYYY-MM-DD) and all purchase line items. "
#             "If line-item quantity is absent, default to 1. "
#             "If only the final line total is present, divide total by quantity to compute rate."
#         )

#         response = await client.aio.models.generate_content(
#             model='gemini-1.5-flash',
#             contents=[prompt, optimized_img],
#             config=types.GenerateContentConfig(
#                 response_mime_type="application/json",
#                 response_schema=ExtractedReceipt,
#                 temperature=0.0
#             )
#         )

#         # Parse and return the structured JSON string
#         # return json.loads(response.text)
#         # 1. Safely extract the auto-parsed Pydantic object
#         if response.parsed:
#             extracted_dict = response.parsed.model_dump()
#         else:
#             # 2. Fallback regex strip if the model bypasses strict decoding
#             cleaned_text = response.text.replace("```json", "").replace("```", "").strip()
#             extracted_dict = json.loads(cleaned_text)

#         return extracted_dict

#     except Exception as e:
#         print("\n--- AI EXTRACTION CRASH TRACEBACK ---")
#         traceback.print_exc()
#         print("---------------------------------------\n")
#         raise HTTPException(status_code=500, detail="Failed to process receipt image. Check terminal for traceback.")
# @router.post("/extract-receipt")
# async def extract_receipt_data(receipt: UploadFile = File(...)):
#     if not receipt.content_type.startswith("image/"):
#         raise HTTPException(status_code=400, detail="File must be an image")

#     try:
#         # Read the image file into memory
#         image_bytes = await receipt.read()
#         img = Image.open(io.BytesIO(image_bytes))

#         # Define the exact JSON schema your React frontend expects
#         prompt = """
#         You are a financial OCR extraction engine. Analyze the provided receipt or invoice image.
#         Extract the date and all line items. 
#         Format your response EXACTLY as a valid JSON object with this structure, and do not include markdown formatting or backticks:
#         {
#           "date": "YYYY-MM-DD",
#           "items": [
#             {
#               "description": "Item name",
#               "quantity": 2,
#               "rate": 150.00
#             }
#           ]
#         }
#         If a date is not found, leave it as an empty string. If quantity is missing, default to 1. 
#         Calculate the rate based on the total price divided by quantity if only the total is shown.
#         """

#         # Execute extraction using the new client syntax
#         response = client.models.generate_content(
#             model='gemini-1.5-flash',
#             contents=[prompt, img]
#         )
        
#         # Clean the response to ensure it's pure JSON
#         response_text = response.text.replace("```json", "").replace("```", "").strip()
        
#         extracted_data = json.loads(response_text)
#         return extracted_data

#     except Exception as e:
#         print(f"AI Extraction Error: {str(e)}")
#         raise HTTPException(status_code=500, detail="Failed to process receipt image")

# # router = APIRouter(tags=["AI Features"])
# router = APIRouter(prefix="/api/ai", tags=["AI Processing"])
# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# @router.post("/extract-receipt")
# async def extract_receipt_data(receipt: UploadFile = File(...)):
#     if not receipt.content_type.startswith("image/"):
#         raise HTTPException(status_code=400, detail="File must be an image")

#     try:
#         # Read the image file into memory
#         image_bytes = await receipt.read()
#         img = Image.open(io.BytesIO(image_bytes))

#         # Use the fast, multimodal model
#         model = genai.GenerativeModel('gemini-1.5-flash')

#         # Define the exact JSON schema your React frontend expects
#         prompt = """
#         You are a financial OCR extraction engine. Analyze the provided receipt or invoice image.
#         Extract the date and all line items. 
#         Format your response EXACTLY as a valid JSON object with this structure, and do not include markdown formatting or backticks:
#         {
#           "date": "YYYY-MM-DD",
#           "items": [
#             {
#               "description": "Item name",
#               "quantity": 2,
#               "rate": 150.00
#             }
#           ]
#         }
#         If a date is not found, leave it as an empty string. If quantity is missing, default to 1. 
#         Calculate the rate based on the total price divided by quantity if only the total is shown.
#         """

#         response = model.generate_content([prompt, img])
        
#         # Clean the response to ensure it's pure JSON (strip markdown blocks if the model adds them)
#         response_text = response.text.replace("```json", "").replace("```", "").strip()
        
#         extracted_data = json.loads(response_text)
#         return extracted_data

#     except Exception as e:
#         print(f"AI Extraction Error: {str(e)}")
#         raise HTTPException(status_code=500, detail="Failed to process receipt image")

# @router.post("/api/ai/parse-receipt", response_model=schemas.ExtractedReceipt)
# async def parse_receipt(file: UploadFile = File(...)):
#     if not file.content_type.startswith("image/"):
#         raise HTTPException(status_code=400, detail="File must be an image")

#     try:
#         image_bytes = await file.read()
#         image = Image.open(io.BytesIO(image_bytes))

#         client = genai.Client()

#         prompt = """
#         Analyze this receipt image. It may be crumpled or poorly lit.
#         Extract the vendor name, date (YYYY-MM-DD), line items (with quantities and rates), subtotal, tax, and grand total.
#         If a value is obscured, use your best logical deduction.
#         Return exactly the requested JSON structure.
#         """

#         # 1. Instantiate a stateful chat session to satisfy the SDK's AFC requirement
#         chat = client.chats.create(
#             model='gemini-2.5-flash',
#             config=types.GenerateContentConfig(
#                 response_mime_type="application/json",
#                 response_schema=schemas.ExtractedReceipt,
#                 temperature=0.1,
#             )
#         )

#         # 2. Send the image and prompt through the chat interface
#         response = chat.send_message([image, prompt])

#         extracted_data = json.loads(response.text)
#         return extracted_data

#     except Exception as e:
#         print(f"Gemini AI Error: {e}")
#         raise HTTPException(status_code=500, detail="Failed to parse receipt using AI")


@router.get("/api/ai/natural-search")
def natural_language_search(
    q: str = Query(..., description="The natural language search query"),
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    try:
        q_lower = q.lower().strip()
        base_query = db.query(models.InvoiceDB).filter(models.InvoiceDB.store_id == current_store.id)
        
        # Keywords that should NOT be strictly filtered in the database
        ignore_words = ["invoice", "invoices", "all", "show", "get", "find", "me"]

        # 1. THE HYBRID ROUTER: Does this query need AI?
        time_triggers = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 
                         'today', 'yesterday', 'last', 'this', 'past', 'month', 'week', 'year', 'days', 'between', 'from']
        
        needs_ai = any(word in q_lower for word in time_triggers)

        # ==========================================
        # FAST PATH: Standard SQL (Instant Response)
        # ==========================================
        if not needs_ai:
            print(f"⚡ FAST PATH Search: '{q}'")
            if q_lower not in ignore_words:
                search_term = f"%{q}%"
                base_query = base_query.filter(
                    (models.InvoiceDB.invoice_number.ilike(search_term)) | 
                    (models.InvoiceDB.customer_name.ilike(search_term))
                )
            
            invoices = base_query.order_by(desc(models.InvoiceDB.created_at)).limit(50).all()
            return {
                "intent": {"query_type": "standard", "search_keyword": q},
                "results": [
                    {
                        "id": inv.id,
                        "invoice_number": inv.invoice_number,
                        "date": (inv.issue_date or inv.created_at).isoformat() if (inv.issue_date or inv.created_at) else "",
                        "customer_name": inv.customer_name,
                        "total_amount": inv.total_amount,
                        "payment_method": inv.payment_method
                    } for inv in invoices
                ]
            }

        # ==========================================
        # SLOW PATH: AI Intent Extraction
        # ==========================================
        print(f"🤖 AI PATH Search Triggered: '{q}'")
        client = genai.Client()
        prompt = f"""
        Analyze this search query: "{q}"
        Today's current date is {datetime.now().strftime('%Y-%m-%d')}.
        Extract any specific dates mentioned (convert terms like 'yesterday' or '3rd october' into explicit YYYY-MM-DD format).
        Also extract any specific search keywords (like names or ID numbers), but DO NOT include generic words like 'invoice', 'show', 'get', or 'all'.
        """

        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=schemas.SearchIntent,
                temperature=0.0
            ),
        )

        intent = json.loads(response.text)
        print(f"🧠 AI Parsed Intent:", intent)

        # Handle Extracted Date Filtering
        if intent.get("target_date"):
            target_dt = datetime.strptime(intent["target_date"], "%Y-%m-%d")
            start_of_day = target_dt.replace(hour=0, minute=0, second=0, microsecond=0)
            end_of_day = target_dt.replace(hour=23, minute=59, second=59, microsecond=999999)
            base_query = base_query.filter(
                (models.InvoiceDB.created_at >= start_of_day) & (models.InvoiceDB.created_at <= end_of_day)
            )

        # Handle Extracted Range Filtering
        elif intent.get("start_date") and intent.get("end_date"):
            start_dt = datetime.strptime(intent["start_date"], "%Y-%m-%d").replace(hour=0, minute=0, second=0)
            end_dt = datetime.strptime(intent["end_date"], "%Y-%m-%d").replace(hour=23, minute=59, second=59)
            base_query = base_query.filter(
                (models.InvoiceDB.created_at >= start_dt) & (models.InvoiceDB.created_at <= end_dt)
            )

        # Handle Extracted Keywords (Filtering out generic terms)
        extracted_keyword = intent.get("search_keyword")
        if extracted_keyword and str(extracted_keyword).lower() not in ignore_words:
            kw = f"%{extracted_keyword}%"
            base_query = base_query.filter(
                (models.InvoiceDB.invoice_number.ilike(kw)) | 
                (models.InvoiceDB.customer_name.ilike(kw))
            )

        invoices = base_query.order_by(desc(models.InvoiceDB.created_at)).limit(50).all()

        return {
            "intent": intent,
            "results": [
                {
                    "id": inv.id,
                    "invoice_number": inv.invoice_number,
                    "date": (inv.issue_date or inv.created_at).isoformat() if (inv.issue_date or inv.created_at) else "",
                    "customer_name": inv.customer_name,
                    "total_amount": inv.total_amount,
                    "payment_method": inv.payment_method
                } for inv in invoices
            ]
        }

    except Exception as e:
        print(f"❌ Natural Search Error: {str(e)}")
        # Safe Fallback to standard 50 recent invoices on any error
        fallback_invoices = db.query(models.InvoiceDB).filter(models.InvoiceDB.store_id == current_store.id).order_by(desc(models.InvoiceDB.created_at)).limit(50).all()
        return {
            "intent": {"error": str(e)},
            "results": [
                {
                    "id": inv.id,
                    "invoice_number": inv.invoice_number,
                    "date": (inv.issue_date or inv.created_at).isoformat() if (inv.issue_date or inv.created_at) else "",
                    "customer_name": inv.customer_name,
                    "total_amount": inv.total_amount,
                    "payment_method": inv.payment_method
                } for inv in fallback_invoices
            ]
        }


# --- OPTIONAL AUTH DEPENDENCY ---
def get_optional_store(request: Request, db: Session = Depends(get_db)):
    """Silently parses the token if it exists, otherwise returns None for public users."""
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        return None
    
    token = auth_header.split(" ")[1]
    if token == "null": # Handle cases where frontend sends 'Bearer null'
        return None
        
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        store_id = payload.get("store_id") or payload.get("sub")
        if store_id:
            return db.query(models.StoreDB).filter(models.StoreDB.id == int(store_id)).first()
    except Exception:
        return None
    return None

# --- CHATBOT ENDPOINT ---
@router.post("/api/ai/chat")
def laxvira_chat_assistant(
    payload: schemas.ChatMessage,
    db: Session = Depends(get_db),
    current_store: Optional[models.StoreDB] = Depends(get_optional_store)
):
    try:
        client = genai.Client()
        
        # 1. Determine User State and Route the Prompt Logic
        if current_store is None:
            # STATE A: GUEST (Landing Page)
            system_instruction = """You are Laxvira AI. The user is a GUEST on our public landing page.
            RULES:
            1. Keep answers brief and high-level about Laxvira's core features (Billing, Inventory, AI, Reports).
            2. DO NOT provide specific business consulting or deep technical breakdowns.
            3. If they ask complex questions, politely tell them to "Start a 5-Day Free Trial" to unlock full AI capabilities.
            """
            contextualized_prompt = f"User Query: {payload.message}"
            
        else:
            # STATE B: AUTHENTICATED USER
            tier = (current_store.subscription_tier or "BASIC").upper()
            
            if tier in ["GROWTH", "ENTERPRISE"]:
                # STATE B1: PREMIUM ACCESS
                system_instruction = """You are Laxvira AI, an expert financial assistant. The user has PREMIUM access.
                RULES:
                1. Answer detailed questions about the platform, workflows, and their tier benefits comprehensively.
                2. If they ask for hyper-customized consulting for their unique niche (e.g. "What features are best for my exact travel business?"), tell them to contact support@laxvira.com for a dedicated strategy session.
                """
            else:
                # STATE B2: BASIC / TRIAL
                system_instruction = """You are Laxvira AI. The user is on the BASIC or TRIAL tier.
                RULES:
                1. Answer general questions about the platform.
                2. If they ask highly complex questions, ask for advanced analytical insights, or request custom workflows, inform them that advanced AI features are unlocked on the GROWTH tier and encourage them to upgrade.
                """
                
            contextualized_prompt = f"Context: The user is from store '{current_store.storeName}' on the '{tier}' tier.\n\nUser Query: {payload.message}"

        # 2. Execute the Chat Call
        chat = client.chats.create(
            model='gemini-3.6-flash',
            config=types.GenerateContentConfig(
                system_instruction=system_instruction,
                temperature=0.1,
            )
        )
        
        response = chat.send_message(contextualized_prompt)
        return {"reply": response.text}
        
    except Exception as e:
        print(f"Chatbot Inference Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process chat query.")