
# import uuid
# from datetime import datetime, timezone
# from typing import List, Optional

# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session, joinedload
# from sqlalchemy import func, desc

# from database import get_db
# from dependencies import get_current_store, require_tier
# import models
# import schemas

# # 3. Initialize the router (This replaces 'app = FastAPI()')
# router = APIRouter()
# # --- BILLING ROUTES ---

# @app.post("/api/billing/checkout")
# def process_billing(
#     invoice_data: InvoiceCreate, 
#     db: Session = Depends(get_db), 
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # 1. Create the main invoice record
#     new_invoice = InvoiceDB(
#         store_id=current_store.id,
#         customer_name=invoice_data.customer_name,
#         customer_phone=invoice_data.customer_phone,
#         total_amount=invoice_data.total_amount,
#         payment_method=invoice_data.payment_method
#     )
#     db.add(new_invoice)
#     db.flush() # Flushes to get the new_invoice.id without committing the transaction yet

#     # 2. Add all items and deduct from stock
#     for item in invoice_data.items:
#         # Create line item
#         db_item = InvoiceItemDB(
#             invoice_id=new_invoice.id,
#             product_id=item.product_id,
#             quantity=item.quantity,
#             price_at_time=item.price_at_time
#         )
#         db.add(db_item)
        
#         # Deduct stock
#         product = db.query(ProductDB).filter(ProductDB.id == item.product_id).first()
#         if product and product.stock >= item.quantity:
#             product.stock -= item.quantity
#         else:
#             db.rollback()
#             raise HTTPException(status_code=400, detail=f"Not enough stock for {product.name if product else 'Unknown Item'}")

#     # 3. Finalize transaction
#     db.commit()
#     return {"message": "Payment Confirmed", "invoice_id": new_invoice.id}


# @app.get("/api/invoices")
# def get_all_invoices(
#     db: Session = Depends(get_db), 
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     invoices = db.query(InvoiceDB).filter(
#         InvoiceDB.store_id == current_store.id
#     ).order_by(desc(InvoiceDB.created_at)).all()
    
#     return [
#         {
#             "id": inv.id,
#             "date": inv.created_at.isoformat(),
#             "customer_name": inv.customer_name,
#             "total_amount": inv.total_amount,
#             "payment_method": inv.payment_method
#         }
#         for inv in invoices
#     ]


# @app.get("/api/invoices/{invoice_id}")
# def get_invoice_detail(
#     invoice_id: int,
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # Eagerly load items to prevent N+1 queries
#     invoice = db.query(InvoiceDB).options(joinedload(InvoiceDB.items)).filter(
#         InvoiceDB.id == invoice_id,
#         InvoiceDB.store_id == current_store.id
#     ).first()
    
#     if not invoice:
#         raise HTTPException(status_code=404, detail="Invoice not found")
        
#     customer = db.query(CustomerDB).filter(CustomerDB.id == invoice.customer_id).first()
    
#     # Structure must perfectly match the React frontend expectations
#     return {
#         "store": {
#             "storeName": current_store.storeName,
#             "address": current_store.address or "",
#             "phone": current_store.phone or "",
#             "email": current_store.email or "",
#             "gstin": current_store.gstin or ""
#         },
#         "customer": {
#             "company_name": customer.company_name if customer else (invoice.customer_name or "Walk-in Client"),
#             "billing_address": customer.billing_address if customer else "",
#             "gstin": customer.gstin if customer else "",
#             "place_of_supply": customer.place_of_supply if customer else "",
#             "phone": invoice.customer_phone or ""
#         },
#         "invoice": {
#             "invoice_number": str(invoice.invoice_number) if invoice.invoice_number else f"#{invoice.id:06d}",
#             "issue_date": invoice.issue_date.isoformat() if invoice.issue_date else None,
#             "due_date": invoice.due_date.isoformat() if invoice.due_date else None,
#             "subtotal": float(invoice.subtotal or 0.0),
#             "tax_total": float(invoice.tax_total or 0.0),
#             "grand_total": float(invoice.grand_total or 0.0),
#             "amount_paid": float(invoice.amount_paid or 0.0),
#             "balance_due": float(invoice.balance_due if invoice.balance_due is not None else (invoice.grand_total or 0.0)),
#             "notes": invoice.notes,
#             "terms_conditions": invoice.terms_conditions,
#             "status": invoice.status.value if hasattr(invoice.status, 'value') else str(invoice.status),
#             "template_id": invoice.template_id or "classic",
#             "theme_color": invoice.theme_color or "#4f46e5"
#         },
#         "items": [
#             {
#                 "name": item.name or "Unknown Product",
#                 "hsn_sac_code": item.hsn_sac_code or "-",
#                 "quantity": float(item.quantity or 1.0),
#                 "rate": float(item.rate if item.rate is not None else (item.price_at_time or 0.0)), 
#                 "tax_rate": float(item.tax_rate or 0.0),
#                 "tax_amount": float(item.tax_amount or 0.0),
#                 "total_amount": float(item.total_amount or 0.0)
#             } for item in invoice.items
#         ]
#     }


# @app.post("/api/invoices")
# def create_invoice(
#     payload: dict,
#     db: Session = Depends(get_db),
#     current_store: dict = Depends(get_current_store)
# ):
#     # 1. Safely parse the incoming JS ISO strings into Python datetime objects
#     raw_issue = payload.get("issue_date")
#     raw_due = payload.get("due_date")
    
#     parsed_issue_date = datetime.fromisoformat(raw_issue.replace('Z', '+00:00')) if raw_issue else datetime.utcnow()
#     parsed_due_date = datetime.fromisoformat(raw_due.replace('Z', '+00:00')) if raw_due else datetime.utcnow()

#     # 2. Create the parent Invoice document
#     new_invoice = InvoiceDB(
#         store_id=current_store.id,
#         invoice_number=payload.get("invoice_number"),
#         customer_name=payload.get("customer_name", "Walk-in"),
#         issue_date=parsed_issue_date,
#         due_date=parsed_due_date,
#         subtotal=float(payload.get("subtotal", 0.0)),
#         tax_total=float(payload.get("tax_total", 0.0)),
#         grand_total=float(payload.get("grand_total", 0.0)),
#         status=payload.get("status", "UNPAID"),
#         template_id=payload.get("template_id", "classic"),
#         theme_color=payload.get("theme_color", "#4f46e5")
#     )
    
#     db.add(new_invoice)
#     db.flush() # Flush to assign the primary key (new_invoice.id)

#     # 3. Create and link the child Invoice Items
#     items_data = payload.get("items", [])
#     for item in items_data:
#         db_item = InvoiceItemDB(
#             invoice_id=new_invoice.id,
#             name=item.get("name", "Unknown Item"),
#             hsn_sac_code=item.get("hsn", ""),
#             quantity=float(item.get("qty", 1.0)),
#             rate=float(item.get("rate", 0.0)),
#             tax_rate=float(item.get("gst", 0.0)),
#             total_amount=float(item.get("total", 0.0))
#         )
#         db.add(db_item)

#     # 4. Commit the transaction
#     db.commit()
#     return {"message": "Invoice created successfully", "invoice_id": new_invoice.id}

# @app.get("/api/public/invoices/{token}")
# def get_public_invoice(token: str, db: Session = Depends(get_db)):
#     # Notice we removed the `current_store` dependency so external clients can access it
#     invoice = db.query(InvoiceDB).filter(InvoiceDB.public_token == token).first()
    
#     if not invoice:
#         raise HTTPException(status_code=404, detail="Invoice not found or link expired")
        
#     # Fetch related data
#     store = db.query(StoreDB).filter(StoreDB.id == invoice.store_id).first()
    
#     # Fetch items
#     items = db.query(InvoiceItemDB).filter(InvoiceItemDB.invoice_id == invoice.id).all()
    
#     # Do not return sensitive internal data, only what the client needs to see
#     return {
#         "store": {
#             "storeName": store.storeName,
#             "address": store.address,
#             "phone": store.phone,
#             "email": store.email,
#             "gstin": store.gstin
#         },
#         "invoice": {
#             "invoice_number": invoice.invoice_number,
#             "issue_date": invoice.issue_date,
#             "due_date": invoice.due_date,
#             "subtotal": invoice.subtotal,
#             "tax_total": invoice.tax_total,
#             "grand_total": invoice.grand_total,
#             "amount_paid": invoice.amount_paid,
#             "balance_due": invoice.balance_due,
#             "status": invoice.status,
#             "notes": invoice.notes,
#             "terms_conditions": invoice.terms_conditions,
#             "template_id": invoice.template_id or "classic",
#             "theme_color": invoice.theme_color or "#4f46e5"
#         },
#         "customer": {
#             "company_name": invoice.customer_name,
#             # include other customer details saved on the invoice if available
#         },
#         "items": [
#             {
#                 "name": item.name,
#                 "quantity": item.quantity,
#                 "rate": item.rate,
#                 "tax_rate": item.tax_rate,
#                 "hsn_sac_code": getattr(item, "hsn_sac_code", "")
#             } for item in items
#         ]
#     }


# # ==========================================
# # QUOTATION / ESTIMATE ENDPOINTS
# # ==========================================

# @app.post("/api/quotations" , dependencies=[Depends(require_tier("GROWTH"))])
# def create_quotation(
#     quote_data: QuotationCreate,
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # Auto-generate quote number (e.g., QT-000001)
#     count = db.query(QuotationDB).filter(QuotationDB.store_id == current_store.id).count()
#     quote_number = f"QT-{(count + 1):06d}"

#     new_quote = QuotationDB(
#         store_id=current_store.id,
#         customer_id=quote_data.customer_id,
#         quotation_number=quote_number,
#         valid_until=quote_data.valid_until,
#         subtotal=quote_data.subtotal,
#         discount_total=quote_data.discount_total,
#         tax_total=quote_data.tax_total,
#         grand_total=quote_data.grand_total,
#         terms_conditions=quote_data.terms_conditions,
#         notes=quote_data.notes,
#         status=DocumentStatus.DRAFT
#     )
#     db.add(new_quote)
#     db.flush()

#     for item in quote_data.items:
#         db_item = QuotationItemDB(
#             quotation_id=new_quote.id,
#             product_id=item.product_id,
#             name=item.name,
#             hsn_sac_code=item.hsn_sac_code,
#             quantity=item.quantity,
#             unit=item.unit,
#             rate=item.rate,
#             discount_amount=item.discount_amount,
#             tax_rate=item.tax_rate,
#             tax_amount=item.tax_amount,
#             total_amount=item.total_amount
#         )
#         db.add(db_item)

#     db.commit()
#     return {"message": "Quotation created successfully", "id": new_quote.id, "quotation_number": quote_number}

# @app.get("/api/quotations" , dependencies=[Depends(require_tier("GROWTH"))])
# def get_quotations(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     quotes = db.query(QuotationDB).filter(QuotationDB.store_id == current_store.id).order_by(QuotationDB.id.desc()).all()
    
#     result = []
#     for q in quotes:
#         customer = db.query(CustomerDB).filter(CustomerDB.id == q.customer_id).first()
#         result.append({
#             "id": q.id,
#             "quotation_number": q.quotation_number,
#             "company_name": customer.company_name if customer else "Unknown Client",
#             "issue_date": q.issue_date.isoformat(),
#             "grand_total": q.grand_total,
#             "status": q.status.value
#         })
#     return result


# @app.post("/api/quotations/{quotation_id}/convert", dependencies=[Depends(require_tier("GROWTH"))])
# def convert_quotation_to_invoice(
#     quotation_id: int,
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # 1. Validate the quotation exists and is owned by the store
#     quotation = db.query(QuotationDB).filter(
#         QuotationDB.id == quotation_id, 
#         QuotationDB.store_id == current_store.id
#     ).first()
    
#     if not quotation:
#         raise HTTPException(status_code=404, detail="Quotation not found")
        
#     # 2. Prevent duplicate conversions
#     if quotation.status == DocumentStatus.CONVERTED:
#         raise HTTPException(status_code=400, detail="Quotation has already been converted to an invoice")
        
#     # 3. Fetch Customer details for denormalized invoice fields
#     customer = db.query(CustomerDB).filter(CustomerDB.id == quotation.customer_id).first()
#     customer_name = customer.company_name if customer else "B2B Client"
#     customer_phone = customer.phone if customer else None

#     # 4. Generate a sequential B2B Invoice Number
#     count = db.query(InvoiceDB).filter(InvoiceDB.store_id == current_store.id).count()
#     invoice_number = f"INV-{(count + 1):06d}"

#     # 5. Create the parent Invoice record
#     new_invoice = InvoiceDB(
#         store_id=current_store.id,
#         customer_id=quotation.customer_id,
#         customer_name=customer_name,
#         customer_phone=customer_phone,
#         quotation_id=quotation.id,
#         invoice_number=invoice_number,
#         subtotal=quotation.subtotal,
#         discount_total=quotation.discount_total,
#         tax_total=quotation.tax_total,
#         total_amount=quotation.grand_total,
#         grand_total=quotation.grand_total,
#         terms_conditions=quotation.terms_conditions,
#         notes=quotation.notes,
#         status=InvoiceStatus.UNPAID
#     )
#     db.add(new_invoice)
#     db.flush() # Flush to get the new_invoice.id for the line items

#     # 6. Deep copy the line items
#     for q_item in quotation.items:
#         inv_item = InvoiceItemDB(
#             invoice_id=new_invoice.id,
#             product_id=q_item.product_id,
#             name=q_item.name,
#             hsn_sac_code=q_item.hsn_sac_code,
#             quantity=q_item.quantity,
#             unit=q_item.unit,
#             rate=q_item.rate,
#             price_at_time=q_item.rate, # Ensures backward compatibility with retail POS queries
#             discount_amount=q_item.discount_amount,
#             tax_rate=q_item.tax_rate,
#             tax_amount=q_item.tax_amount,
#             total_amount=q_item.total_amount
#         )
#         db.add(inv_item)

#     # 7. Transition the quotation state
#     quotation.status = DocumentStatus.CONVERTED
    
#     db.commit()
    
#     return {
#         "message": "Quotation converted successfully", 
#         "invoice_id": new_invoice.id, 
#         "invoice_number": invoice_number
#     }


# @app.post("/api/quotations/{quotation_id}/convert-to-invoice", dependencies=[Depends(require_tier("GROWTH"))])
# def convert_quotation_to_invoice(
#     quotation_id: int,
#     db: Session = Depends(get_db),
#     current_store: dict = Depends(get_current_store)
# ):
#     # 1. Fetch the Quotation
#     quotation = db.query(QuotationDB).filter(
#         QuotationDB.id == quotation_id,
#         QuotationDB.store_id == current_store.id
#     ).first()
    
#     if not quotation:
#         raise HTTPException(status_code=404, detail="Quotation not found")
        
#     if quotation.status == "INVOICED":
#         raise HTTPException(status_code=400, detail="This quotation has already been converted to an invoice.")

#     # 2. Create the New Invoice
#     new_invoice = InvoiceDB(
#         store_id=current_store.id,
#         customer_name=quotation.customer_name,
#         customer_phone=quotation.customer_phone,
#         quotation_id=quotation.id, # Relational link back to the quote
#         invoice_number=f"INV-{quotation.quotation_number.split('-')[-1] if quotation.quotation_number else quotation.id}",
#         issue_date=func.now(),
#         subtotal=quotation.subtotal,
#         discount_total=quotation.discount_total,
#         tax_total=quotation.tax_total,
#         grand_total=quotation.grand_total,
#         amount_paid=0.0,
#         balance_due=quotation.grand_total,
#         status=InvoiceStatus.UNPAID,
#         public_token=uuid.uuid4().hex,
#         notes=quotation.notes,
#         terms_conditions=quotation.terms_conditions
#     )
    
#     db.add(new_invoice)
#     db.flush() # Flush to get the new invoice.id

#     # 3. Copy all Line Items
#     quotation_items = db.query(QuotationItemDB).filter(QuotationItemDB.quotation_id == quotation.id).all()
    
#     for q_item in quotation_items:
#         new_inv_item = InvoiceItemDB(
#             invoice_id=new_invoice.id,
#             product_id=q_item.product_id,
#             name=q_item.name,
#             quantity=q_item.quantity,
#             rate=q_item.rate,
#             tax_rate=q_item.tax_rate,
#             hsn_sac_code=getattr(q_item, 'hsn_sac_code', ''),
#             total_amount=q_item.total_amount
#         )
#         db.add(new_inv_item)

#     # 4. Update Quotation Status
#     quotation.status = "INVOICED"
    
#     db.commit()
    
#     return {
#         "message": "Quotation successfully converted to Invoice",
#         "invoice_id": new_invoice.id
#     }


# @app.post("/api/leads")
# def create_lead(
#     lead_data: dict,
#     db: Session = Depends(get_db),
#     current_store: dict = Depends(get_current_store)
# ):
#     new_lead = LeadDB(
#         store_id=current_store.id,
#         contact_name=lead_data.get("contact_name"),
#         company_name=lead_data.get("company_name", ""),
#         email=lead_data.get("email", ""),
#         phone=lead_data.get("phone", ""),
#         estimated_value=float(lead_data.get("estimated_value", 0.0)),
#         stage="LEAD",
#         notes=lead_data.get("notes", "")
#     )
#     db.add(new_lead)
#     db.commit()
#     return {"message": "Lead captured successfully", "lead_id": new_lead.id}

# @app.put("/api/leads/{lead_id}/stage")
# def update_lead_stage(
#     lead_id: int,
#     stage_data: dict,
#     db: Session = Depends(get_db),
#     current_store: dict = Depends(get_current_store)
# ):
#     lead = db.query(LeadDB).filter(LeadDB.id == lead_id, LeadDB.store_id == current_store.id).first()
#     if not lead:
#         raise HTTPException(status_code=404, detail="Lead not found")
        
#     lead.stage = stage_data.get("stage")
#     db.commit()
#     return {"message": f"Lead moved to {lead.stage}"}


# # ==========================================
# # B2B CUSTOMER ENDPOINTS
# # ==========================================

# @app.post("/api/customers", response_model=CustomerResponse)
# def create_customer(
#     customer: CustomerCreate,
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     new_customer = CustomerDB(
#         store_id=current_store.id,
#         company_name=customer.company_name,
#         contact_person=customer.contact_person,
#         email=customer.email,
#         phone=customer.phone,
#         billing_address=customer.billing_address,
#         shipping_address=customer.shipping_address,
#         gstin=customer.gstin,
#         place_of_supply=customer.place_of_supply
#     )
#     db.add(new_customer)
#     db.commit()
#     db.refresh(new_customer)
#     return new_customer

# @app.get("/api/customers", response_model=list[CustomerResponse])
# def get_customers(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     return db.query(CustomerDB).filter(CustomerDB.store_id == current_store.id).all()

import uuid
from datetime import datetime, timezone
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import func, desc

from database import get_db
from dependencies import get_current_store, require_tier
import models
import schemas
from pydantic import BaseModel


router = APIRouter(tags=["Billing"])

# --- BILLING ROUTES ---

@router.post("/api/billing/checkout")
def process_billing(
    invoice_data: schemas.InvoiceCreate, 
    db: Session = Depends(get_db), 
    current_store: models.StoreDB = Depends(get_current_store)
):
    # 1. Create the main invoice record
    new_invoice = models.InvoiceDB(
        store_id=current_store.id,
        customer_name=invoice_data.customer_name,
        customer_phone=invoice_data.customer_phone,
        total_amount=invoice_data.total_amount,
        payment_method=invoice_data.payment_method
    )
    db.add(new_invoice)
    db.flush() # Flushes to get the new_invoice.id without committing the transaction yet

    # 2. Add all items and deduct from stock
    for item in invoice_data.items:
        # Create line item
        db_item = models.InvoiceItemDB(
            invoice_id=new_invoice.id,
            product_id=item.product_id,
            quantity=item.quantity,
            price_at_time=item.price_at_time
        )
        db.add(db_item)
        
        # Deduct stock
        product = db.query(models.ProductDB).filter(models.ProductDB.id == item.product_id).first()
        if product and product.stock >= item.quantity:
            product.stock -= item.quantity
        else:
            db.rollback()
            raise HTTPException(status_code=400, detail=f"Not enough stock for {product.name if product else 'Unknown Item'}")

    # 3. Finalize transaction
    db.commit()
    return {"message": "Payment Confirmed", "invoice_id": new_invoice.id}


# @router.get("/api/invoices")
# def get_all_invoices(
#     db: Session = Depends(get_db), 
#     current_store: models.StoreDB = Depends(get_current_store)
# ):
#     invoices = db.query(models.InvoiceDB).filter(
#         models.InvoiceDB.store_id == current_store.id
#     ).order_by(desc(models.InvoiceDB.created_at)).all()
    
#     return [
#         {
#             "id": inv.id,
#             "date": inv.created_at.isoformat(),
#             "customer_name": inv.customer_name,
#             "total_amount": inv.total_amount,
#             "payment_method": inv.payment_method
#         }
#         for inv in invoices
#     ]

@router.get("/api/invoices")
def get_all_invoices(
    db: Session = Depends(get_db), 
    current_store: models.StoreDB = Depends(get_current_store)
):
    invoices = db.query(models.InvoiceDB).filter(
        models.InvoiceDB.store_id == current_store.id
    ).order_by(desc(models.InvoiceDB.created_at)).all()
    
    return [
        {
            "id": inv.id,
            "date": inv.created_at.isoformat(),
            "customer_name": inv.customer_name,
            # FIX: Prioritize grand_total from the new B2B creator, fallback to total_amount
            "total_amount": float(inv.grand_total or inv.total_amount or 0.0),
            "payment_method": inv.payment_method or "N/A"
        }
        for inv in invoices
    ]

@router.get("/api/invoices/{invoice_id}")
def get_invoice_detail(
    invoice_id: int,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    # Eagerly load items to prevent N+1 queries
    invoice = db.query(models.InvoiceDB).options(joinedload(models.InvoiceDB.items)).filter(
        models.InvoiceDB.id == invoice_id,
        models.InvoiceDB.store_id == current_store.id
    ).first()
    
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
        
    customer = db.query(models.CustomerDB).filter(models.CustomerDB.id == invoice.customer_id).first()
    
    # Structure must perfectly match the React frontend expectations
    return {
        "store": {
            "storeName": current_store.storeName,
            "address": current_store.address or "",
            "phone": current_store.phone or "",
            "email": current_store.email or "",
            "gstin": current_store.gstin or ""
        },
        "customer": {
            "company_name": customer.company_name if customer else (invoice.customer_name or "Walk-in Client"),
            "billing_address": customer.billing_address if customer else "",
            "gstin": customer.gstin if customer else "",
            "place_of_supply": customer.place_of_supply if customer else "",
            "phone": invoice.customer_phone or ""
        },
        "invoice": {
            "invoice_number": str(invoice.invoice_number) if invoice.invoice_number else f"#{invoice.id:06d}",
            "issue_date": invoice.issue_date.isoformat() if invoice.issue_date else None,
            "due_date": invoice.due_date.isoformat() if invoice.due_date else None,
            "subtotal": float(invoice.subtotal or 0.0),
            "tax_total": float(invoice.tax_total or 0.0),
            "grand_total": float(invoice.grand_total or 0.0),
            "amount_paid": float(invoice.amount_paid or 0.0),
            "balance_due": float(invoice.balance_due if invoice.balance_due is not None else (invoice.grand_total or 0.0)),
            "notes": invoice.notes,
            "terms_conditions": invoice.terms_conditions,
            "status": invoice.status.value if hasattr(invoice.status, 'value') else str(invoice.status),
            "template_id": invoice.template_id or "classic",
            "theme_color": invoice.theme_color or "#4f46e5"
        },
        "items": [
            {
                "name": item.name or "Unknown Product",
                "hsn_sac_code": item.hsn_sac_code or "-",
                "quantity": float(item.quantity or 1.0),
                "rate": float(item.rate if item.rate is not None else (item.price_at_time or 0.0)), 
                "tax_rate": float(item.tax_rate or 0.0),
                "tax_amount": float(item.tax_amount or 0.0),
                "total_amount": float(item.total_amount or 0.0)
            } for item in invoice.items
        ]
    }


@router.post("/api/invoices")
def create_invoice(
    payload: dict,
    db: Session = Depends(get_db),
    current_store: dict = Depends(get_current_store)
):
    # 1. Safely parse the incoming JS ISO strings into Python datetime objects
    raw_issue = payload.get("issue_date")
    raw_due = payload.get("due_date")
    
    parsed_issue_date = datetime.fromisoformat(raw_issue.replace('Z', '+00:00')) if raw_issue else datetime.utcnow()
    parsed_due_date = datetime.fromisoformat(raw_due.replace('Z', '+00:00')) if raw_due else datetime.utcnow()

    # 2. Create the parent Invoice document
    new_invoice = models.InvoiceDB(
        store_id=current_store.id if hasattr(current_store, 'id') else current_store.get("id"),
        invoice_number=payload.get("invoice_number"),
        customer_name=payload.get("customer_name", "Walk-in"),
        issue_date=parsed_issue_date,
        due_date=parsed_due_date,
        subtotal=float(payload.get("subtotal", 0.0)),
        tax_total=float(payload.get("tax_total", 0.0)),
        grand_total=float(payload.get("grand_total", 0.0)),
        status=payload.get("status", "UNPAID"),
        template_id=payload.get("template_id", "classic"),
        theme_color=payload.get("theme_color", "#4f46e5")
    )
    
    db.add(new_invoice)
    db.flush() # Flush to assign the primary key (new_invoice.id)

    # 3. Create and link the child Invoice Items
    items_data = payload.get("items", [])
    for item in items_data:
        db_item = models.InvoiceItemDB(
            invoice_id=new_invoice.id,
            name=item.get("name", "Unknown Item"),
            hsn_sac_code=item.get("hsn", ""),
            quantity=float(item.get("qty", 1.0)),
            rate=float(item.get("rate", 0.0)),
            tax_rate=float(item.get("gst", 0.0)),
            total_amount=float(item.get("total", 0.0))
        )
        db.add(db_item)

    # 4. Commit the transaction
    db.commit()
    return {"message": "Invoice created successfully", "invoice_id": new_invoice.id}


@router.get("/api/public/invoices/{token}")
def get_public_invoice(token: str, db: Session = Depends(get_db)):
    # Notice we removed the `current_store` dependency so external clients can access it
    invoice = db.query(models.InvoiceDB).filter(models.InvoiceDB.public_token == token).first()
    
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found or link expired")
        
    # Fetch related data
    store = db.query(models.StoreDB).filter(models.StoreDB.id == invoice.store_id).first()
    
    # Fetch items
    items = db.query(models.InvoiceItemDB).filter(models.InvoiceItemDB.invoice_id == invoice.id).all()
    
    # Do not return sensitive internal data, only what the client needs to see
    return {
        "store": {
            "storeName": store.storeName,
            "address": store.address,
            "phone": store.phone,
            "email": store.email,
            "gstin": store.gstin
        },
        "invoice": {
            "invoice_number": invoice.invoice_number,
            "issue_date": invoice.issue_date,
            "due_date": invoice.due_date,
            "subtotal": invoice.subtotal,
            "tax_total": invoice.tax_total,
            "grand_total": invoice.grand_total,
            "amount_paid": invoice.amount_paid,
            "balance_due": invoice.balance_due,
            "status": invoice.status,
            "notes": invoice.notes,
            "terms_conditions": invoice.terms_conditions,
            "template_id": invoice.template_id or "classic",
            "theme_color": invoice.theme_color or "#4f46e5"
        },
        "customer": {
            "company_name": invoice.customer_name,
            # include other customer details saved on the invoice if available
        },
        "items": [
            {
                "name": item.name,
                "quantity": item.quantity,
                "rate": item.rate,
                "tax_rate": item.tax_rate,
                "hsn_sac_code": getattr(item, "hsn_sac_code", "")
            } for item in items
        ]
    }


# ==========================================
# QUOTATION / ESTIMATE ENDPOINTS
# ==========================================

# @router.post("/api/quotations" , dependencies=[Depends(require_tier("GROWTH"))])
# def create_quotation(
#     quote_data: schemas.QuotationCreate,
#     db: Session = Depends(get_db),
#     current_store: models.StoreDB = Depends(get_current_store)
# ):
#     # Auto-generate quote number (e.g., QT-000001)
#     count = db.query(models.QuotationDB).filter(models.QuotationDB.store_id == current_store.id).count()
#     quote_number = f"QT-{(count + 1):06d}"

#     new_quote = models.QuotationDB(
#         store_id=current_store.id,
#         customer_id=quote_data.customer_id,
#         quotation_number=quote_number,
#         valid_until=quote_data.valid_until,
#         subtotal=quote_data.subtotal,
#         discount_total=quote_data.discount_total,
#         tax_total=quote_data.tax_total,
#         grand_total=quote_data.grand_total,
#         terms_conditions=quote_data.terms_conditions,
#         notes=quote_data.notes,
#         status=models.DocumentStatus.DRAFT
#     )
#     db.add(new_quote)
#     db.flush()

#     for item in quote_data.items:
#         db_item = models.QuotationItemDB(
#             quotation_id=new_quote.id,
#             product_id=item.product_id,
#             name=item.name,
#             hsn_sac_code=item.hsn_sac_code,
#             quantity=item.quantity,
#             unit=item.unit,
#             rate=item.rate,
#             discount_amount=item.discount_amount,
#             tax_rate=item.tax_rate,
#             tax_amount=item.tax_amount,
#             total_amount=item.total_amount
#         )
#         db.add(db_item)

#     db.commit()
#     return {"message": "Quotation created successfully", "id": new_quote.id, "quotation_number": quote_number}

@router.post("/api/quotations" , dependencies=[Depends(require_tier("GROWTH"))])
def create_quotation(
    quote_data: schemas.QuotationCreate,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    # 1. Safely calculate the next globally unique Quotation Number
    last_quote = db.query(models.QuotationDB).order_by(desc(models.QuotationDB.id)).first()

    if last_quote and last_quote.quotation_number and "-" in last_quote.quotation_number:
        try:
            last_num = int(last_quote.quotation_number.split("-")[1])
            quote_number = f"QT-{(last_num + 1):06d}"
        except ValueError:
            import time
            quote_number = f"QT-{int(time.time())}"
    else:
        quote_number = "QT-000001"

    new_quote = models.QuotationDB(
        store_id=current_store.id,
        customer_id=quote_data.customer_id,
        quotation_number=quote_number,
        valid_until=quote_data.valid_until,
        subtotal=quote_data.subtotal,
        discount_total=quote_data.discount_total,
        tax_total=quote_data.tax_total,
        grand_total=quote_data.grand_total,
        terms_conditions=quote_data.terms_conditions,
        notes=quote_data.notes,
        status=models.DocumentStatus.DRAFT
    )
    db.add(new_quote)
    db.flush()

    for item in quote_data.items:
        db_item = models.QuotationItemDB(
            quotation_id=new_quote.id,
            product_id=item.product_id,
            name=item.name,
            hsn_sac_code=item.hsn_sac_code,
            quantity=item.quantity,
            unit=item.unit,
            rate=item.rate,
            discount_amount=item.discount_amount,
            tax_rate=item.tax_rate,
            tax_amount=item.tax_amount,
            total_amount=item.total_amount
        )
        db.add(db_item)

    db.commit()
    return {"message": "Quotation created successfully", "id": new_quote.id, "quotation_number": quote_number}

@router.get("/api/quotations" , dependencies=[Depends(require_tier("GROWTH"))])
def get_quotations(
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    quotes = db.query(models.QuotationDB).filter(models.QuotationDB.store_id == current_store.id).order_by(models.QuotationDB.id.desc()).all()
    
    result = []
    for q in quotes:
        customer = db.query(models.CustomerDB).filter(models.CustomerDB.id == q.customer_id).first()
        result.append({
            "id": q.id,
            "quotation_number": q.quotation_number,
            "company_name": customer.company_name if customer else "Unknown Client",
            "issue_date": q.issue_date.isoformat(),
            "grand_total": q.grand_total,
            "status": q.status.value
        })
    return result

from sqlalchemy.orm import joinedload

@router.get("/api/quotations/{quotation_id}", dependencies=[Depends(require_tier("GROWTH"))])
def get_quotation_detail(
    quotation_id: int,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    # 1. Fetch quotation and eagerly load its items
    quotation = db.query(models.QuotationDB).options(joinedload(models.QuotationDB.items)).filter(
        models.QuotationDB.id == quotation_id,
        models.QuotationDB.store_id == current_store.id
    ).first()
    
    if not quotation:
        raise HTTPException(status_code=404, detail="Quotation not found")
        
    # 2. Fetch the linked customer
    customer = db.query(models.CustomerDB).filter(models.CustomerDB.id == quotation.customer_id).first()
    
    # 3. Return the exact JSON structure the React frontend expects
    return {
        "store": {
            "storeName": current_store.storeName,
            "address": current_store.address or "",
            "phone": current_store.phone or "",
            "email": current_store.email or "",
            "gstin": current_store.gstin or "",
            # Assuming you have a logo column in your store model
            "logo": getattr(current_store, 'logo', None) 
        },
        "customer": {
            "id": customer.id if customer else None,
            "company_name": customer.company_name if customer else "Unknown Client",
            "billing_address": customer.billing_address if customer else "",
            "phone": customer.phone if customer else "",
            "email": customer.email if customer else "",
            "gstin": customer.gstin if customer else ""
        },
        "quotation": {
            "id": quotation.id,
            "quotation_number": quotation.quotation_number,
            "document_title": "QUOTATION", 
            "issue_date": quotation.issue_date.isoformat() if quotation.issue_date else None,
            "valid_until": quotation.valid_until.isoformat() if quotation.valid_until else None,
            "subtotal": float(quotation.subtotal or 0.0),
            "discount_total": float(quotation.discount_total or 0.0),
            "tax_total": float(quotation.tax_total or 0.0),
            "grand_total": float(quotation.grand_total or 0.0),
            "notes": quotation.notes,
            "terms_conditions": quotation.terms_conditions,
            "status": quotation.status.value if hasattr(quotation.status, 'value') else str(quotation.status),
            "custom_fields": "[]" # Replace if you added custom_fields to your QuotationDB model
        },
        "items": [
            {
                "name": item.name,
                "hsn_sac_code": getattr(item, 'hsn_sac_code', '-'),
                "quantity": float(item.quantity or 1.0),
                "rate": float(item.rate or 0.0),
                "tax_rate": float(item.tax_rate or 0.0),
                "tax_amount": float(item.tax_amount or 0.0),
                "total_amount": float(item.total_amount or 0.0)
            } for item in quotation.items
        ]
    }

@router.post("/api/quotations/{quotation_id}/convert", dependencies=[Depends(require_tier("GROWTH"))])
def convert_quotation_to_invoice_old(
    quotation_id: int,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    # 1. Validate the quotation exists and is owned by the store
    quotation = db.query(models.QuotationDB).filter(
        models.QuotationDB.id == quotation_id, 
        models.QuotationDB.store_id == current_store.id
    ).first()
    
    if not quotation:
        raise HTTPException(status_code=404, detail="Quotation not found")
        
    # 2. Prevent duplicate conversions
    if quotation.status == models.DocumentStatus.CONVERTED:
        raise HTTPException(status_code=400, detail="Quotation has already been converted to an invoice")
        
    # 3. Fetch Customer details for denormalized invoice fields
    customer = db.query(models.CustomerDB).filter(models.CustomerDB.id == quotation.customer_id).first()
    customer_name = customer.company_name if customer else "B2B Client"
    customer_phone = customer.phone if customer else None

    # 4. Generate a sequential B2B Invoice Number
    count = db.query(models.InvoiceDB).filter(models.InvoiceDB.store_id == current_store.id).count()
    invoice_number = f"INV-{(count + 1):06d}"

    # 5. Create the parent Invoice record
    new_invoice = models.InvoiceDB(
        store_id=current_store.id,
        customer_id=quotation.customer_id,
        customer_name=customer_name,
        customer_phone=customer_phone,
        quotation_id=quotation.id,
        invoice_number=invoice_number,
        subtotal=quotation.subtotal,
        discount_total=quotation.discount_total,
        tax_total=quotation.tax_total,
        total_amount=quotation.grand_total,
        grand_total=quotation.grand_total,
        terms_conditions=quotation.terms_conditions,
        notes=quotation.notes,
        status=models.InvoiceStatus.UNPAID
    )
    db.add(new_invoice)
    db.flush() # Flush to get the new_invoice.id for the line items

    # 6. Deep copy the line items
    for q_item in quotation.items:
        inv_item = models.InvoiceItemDB(
            invoice_id=new_invoice.id,
            product_id=q_item.product_id,
            name=q_item.name,
            hsn_sac_code=q_item.hsn_sac_code,
            quantity=q_item.quantity,
            unit=q_item.unit,
            rate=q_item.rate,
            price_at_time=q_item.rate, # Ensures backward compatibility with retail POS queries
            discount_amount=q_item.discount_amount,
            tax_rate=q_item.tax_rate,
            tax_amount=q_item.tax_amount,
            total_amount=q_item.total_amount
        )
        db.add(inv_item)

    # 7. Transition the quotation state
    quotation.status = models.DocumentStatus.CONVERTED
    
    db.commit()
    
    return {
        "message": "Quotation converted successfully", 
        "invoice_id": new_invoice.id, 
        "invoice_number": invoice_number
    }


@router.post("/api/quotations/{quotation_id}/convert-to-invoice", dependencies=[Depends(require_tier("GROWTH"))])
def convert_quotation_to_invoice(
    quotation_id: int,
    db: Session = Depends(get_db),
    current_store: dict = Depends(get_current_store)
):
    store_id = current_store.id if hasattr(current_store, 'id') else current_store.get('id')
    # 1. Fetch the Quotation
    quotation = db.query(models.QuotationDB).filter(
        models.QuotationDB.id == quotation_id,
        models.QuotationDB.store_id == store_id
    ).first()
    
    if not quotation:
        raise HTTPException(status_code=404, detail="Quotation not found")
        
    if quotation.status == "INVOICED":
        raise HTTPException(status_code=400, detail="This quotation has already been converted to an invoice.")

    # 2. Create the New Invoice
    new_invoice = models.InvoiceDB(
        store_id=store_id,
        customer_name=quotation.customer_name,
        customer_phone=quotation.customer_phone,
        quotation_id=quotation.id, # Relational link back to the quote
        invoice_number=f"INV-{quotation.quotation_number.split('-')[-1] if quotation.quotation_number else quotation.id}",
        issue_date=func.now(),
        subtotal=quotation.subtotal,
        discount_total=quotation.discount_total,
        tax_total=quotation.tax_total,
        grand_total=quotation.grand_total,
        amount_paid=0.0,
        balance_due=quotation.grand_total,
        status=models.InvoiceStatus.UNPAID,
        public_token=uuid.uuid4().hex,
        notes=quotation.notes,
        terms_conditions=quotation.terms_conditions
    )
    
    db.add(new_invoice)
    db.flush() # Flush to get the new invoice.id

    # 3. Copy all Line Items
    quotation_items = db.query(models.QuotationItemDB).filter(models.QuotationItemDB.quotation_id == quotation.id).all()
    
    for q_item in quotation_items:
        new_inv_item = models.InvoiceItemDB(
            invoice_id=new_invoice.id,
            product_id=q_item.product_id,
            name=q_item.name,
            quantity=q_item.quantity,
            rate=q_item.rate,
            tax_rate=q_item.tax_rate,
            hsn_sac_code=getattr(q_item, 'hsn_sac_code', ''),
            total_amount=q_item.total_amount
        )
        db.add(new_inv_item)

    # 4. Update Quotation Status
    quotation.status = "INVOICED"
    
    db.commit()
    
    return {
        "message": "Quotation successfully converted to Invoice",
        "invoice_id": new_invoice.id
    }


@router.post("/api/leads")
def create_lead(
    lead_data: dict,
    db: Session = Depends(get_db),
    current_store: dict = Depends(get_current_store)
):
    new_lead = models.LeadDB(
        store_id=current_store.id if hasattr(current_store, 'id') else current_store.get('id'),
        contact_name=lead_data.get("contact_name"),
        company_name=lead_data.get("company_name", ""),
        email=lead_data.get("email", ""),
        phone=lead_data.get("phone", ""),
        estimated_value=float(lead_data.get("estimated_value", 0.0)),
        stage="LEAD",
        notes=lead_data.get("notes", "")
    )
    db.add(new_lead)
    db.commit()
    return {"message": "Lead captured successfully", "lead_id": new_lead.id}

@router.put("/api/leads/{lead_id}/stage")
def update_lead_stage(
    lead_id: int,
    stage_data: dict,
    db: Session = Depends(get_db),
    current_store: dict = Depends(get_current_store)
):
    store_id = current_store.id if hasattr(current_store, 'id') else current_store.get('id')
    lead = db.query(models.LeadDB).filter(models.LeadDB.id == lead_id, models.LeadDB.store_id == store_id).first()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
        
    lead.stage = stage_data.get("stage")
    db.commit()
    return {"message": f"Lead moved to {lead.stage}"}


# ==========================================
# B2B CUSTOMER ENDPOINTS
# ==========================================

@router.post("/api/customers", response_model=schemas.CustomerResponse)
def create_customer(
    customer: schemas.CustomerCreate,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    new_customer = models.CustomerDB(
        store_id=current_store.id,
        company_name=customer.company_name,
        contact_person=customer.contact_person,
        email=customer.email,
        phone=customer.phone,
        billing_address=customer.billing_address,
        shipping_address=customer.shipping_address,
        gstin=customer.gstin,
        place_of_supply=customer.place_of_supply
    )
    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)
    return new_customer

@router.get("/api/customers", response_model=list[schemas.CustomerResponse])
def get_customers(
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    return db.query(models.CustomerDB).filter(models.CustomerDB.store_id == current_store.id).all()



@router.put("/api/quotations/{quotation_id}", dependencies=[Depends(require_tier("GROWTH"))])
def update_quotation(
    quotation_id: int,
    payload: dict,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    # 1. Fetch existing quotation
    quotation = db.query(models.QuotationDB).filter(
        models.QuotationDB.id == quotation_id,
        models.QuotationDB.store_id == current_store.id
    ).first()

    if not quotation:
        raise HTTPException(status_code=404, detail="Quotation not found")
        
    # Prevent editing if it's already converted to a locked invoice
    if quotation.status in ["INVOICED", "CONVERTED"]:
        raise HTTPException(status_code=400, detail="Cannot edit a converted quotation")

    # 2. Update core fields safely
    quotation.customer_id = payload.get("customer_id", quotation.customer_id)
    
    valid_until = payload.get("valid_until")
    if valid_until:
        quotation.valid_until = datetime.fromisoformat(valid_until.replace('Z', '+00:00'))
        
    quotation.subtotal = float(payload.get("subtotal", quotation.subtotal))
    quotation.discount_total = float(payload.get("discount_total", quotation.discount_total))
    quotation.tax_total = float(payload.get("tax_total", quotation.tax_total))
    quotation.grand_total = float(payload.get("grand_total", quotation.grand_total))
    quotation.terms_conditions = payload.get("terms_conditions", quotation.terms_conditions)
    quotation.notes = payload.get("notes", quotation.notes)
    quotation.template_id = payload.get("template_id", quotation.template_id)
    quotation.theme_color = payload.get("theme_color", quotation.theme_color)
    
    # 3. Wipe old items and insert updated ones (cleanest way to handle item additions/removals)
    db.query(models.QuotationItemDB).filter(models.QuotationItemDB.quotation_id == quotation.id).delete()
    
    for item in payload.get("items", []):
        db_item = models.QuotationItemDB(
            quotation_id=quotation.id,
            product_id=item.get("product_id"),
            name=item.get("name", "Unknown Item"),
            hsn_sac_code=item.get("hsn_sac_code", ""),
            quantity=float(item.get("quantity", 1)),
            unit=item.get("unit", "pcs"),
            rate=float(item.get("rate", 0)),
            discount_amount=float(item.get("discount_amount", 0)),
            tax_rate=float(item.get("tax_rate", 0)),
            tax_amount=float(item.get("tax_amount", 0)),
            total_amount=float(item.get("total_amount", 0))
        )
        db.add(db_item)

    db.commit()
    return {"message": "Quotation updated successfully"}


class TicketCreate(BaseModel):
    subject: str
    description: str

@router.post("/api/tickets")
def create_support_ticket(
    ticket_data: TicketCreate,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    new_ticket = models.TicketDB(
        store_id=current_store.id,
        subject=ticket_data.subject,
        description=ticket_data.description
    )
    db.add(new_ticket)
    db.commit()
    
    # Here you could also trigger an email to your IT Support Team via SendGrid/AWS SES
    
    return {"message": "Ticket raised successfully", "ticket_id": new_ticket.id}