# # # main.py
# # import os
# # from fastapi import FastAPI, HTTPException, Depends, status, APIRouter, UploadFile, File
# # from fastapi.middleware.cors import CORSMiddleware
# # from fastapi.security import OAuth2PasswordBearer
# # from sqlalchemy.orm import Session, joinedload, relationship
# # from jose import jwt, JWTError
# # from datetime import datetime, timedelta, timezone
# # from sqlalchemy import func, desc, distinct, extract,Column, Integer, String, Float, ForeignKey, DateTime
# # from fastapi import Query
# # from pydantic import BaseModel
# # import jwt
# # import pickle
# # import pandas as pd
# # import uuid
# # from routes import hq
# # from routes import subscriptions
# # from typing import List, Optional
# # import bcrypt
# # import random
# # import smtplib
# # from email.mime.text import MIMEText
# # from email.mime.multipart import MIMEMultipart
# # from auth_utils import OTP_STORE, generate_otp, send_otp_email

# # from auth import verify_password, create_access_token

# # from google import genai
# # from google.genai import types
# # from PIL import Image
# # import io
# # import json



# # import models
# # from database import engine, get_db, Base
# # from models import StoreRegistration, StoreLogin, StoreSettings, TokenResponse, StoreDB, ExpenseDB, ExpenseItemDB, VendorDB, StaffUser, TenantStaff, OTPVerifyRequest
# # # from auth import get_password_hash, verify_password, create_access_token, SECRET_KEY, ALGORITHM
# # from auth import get_password_hash, verify_password, create_access_token, get_current_store, SECRET_KEY, ALGORITHM
# # from models import SetupWizardData
# # from models import ProductDB, ProductCreate, ProductResponse, InvoiceDB, InvoiceItemDB, InvoiceCreate,InvoiceStatus
# # from models import ProductDB
# # from models import (
# #     CustomerDB, CustomerCreate, CustomerResponse,
# #     QuotationDB, QuotationItemDB, QuotationCreate, DocumentStatus
# # )
# # from dependencies import get_current_store

# # # # --- JWT Configuration ---
# # # SECRET_KEY = "your-super-secret-key-change-this-in-production"  # Ensure this exists
# # # ALGORITHM = "HS256"                                             # Ensure this exists
# # # ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7                       # ADD THIS LINE (7 days expiry)


# # # # a
# # # # ... your SECRET_KEY and ALGORITHM configurations ...

# # # def create_access_token(data: dict, expires_delta: timedelta | None = None):
# # #     to_encode = data.copy()
    
# # #     # Check if an explicit expiration time was passed
# # #     if expires_delta:
# # #         expire = datetime.now(timezone.utc) + expires_delta
# # #     else:
# # #         # Default to 15 minutes if nothing is passed
# # #         expire = datetime.now(timezone.utc) + timedelta(minutes=15)
        
# # #     to_encode.update({"exp": expire})
    
# # #     # Generate the JWT string
# # #     encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
# # #     return encoded_jwt



# # # This single line creates the SQLite .db file and tables automatically!
# # models.Base.metadata.create_all(bind=engine)

# # app = FastAPI(title="GD Billing Identity API")

# # app.include_router(hq.router)
# # app.include_router(subscriptions.router)

# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=["http://localhost:5173", "http://localhost:3000"], 
# #     allow_credentials=True,
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )

# # oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

# # # async def get_current_store(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
# # #     credentials_exception = HTTPException(
# # #         status_code=status.HTTP_401_UNAUTHORIZED,
# # #         detail="Could not validate credentials",
# # #         headers={"WWW-Authenticate": "Bearer"},
# # #     )
# # #     try:
# # #         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
# # #         email: str = payload.get("sub")
# # #         if email is None:
# # #             raise credentials_exception
# # #     except JWTError:
# # #         raise credentials_exception

# # #     except jwt.exceptions.DecodeError:
# # #         raise HTTPException(status_code=401, detail="Invalid authentication token format.")
# # #     except jwt.ExpiredSignatureError:
# # #         raise HTTPException(status_code=401, detail="Authentication token has expired.")
# # #     except Exception as e:
# # #         raise HTTPException(status_code=401, detail="Could not validate credentials.")
        
# # #     store = db.query(StoreDB).filter(StoreDB.email == email).first()
# # #     if store is None:
# # #         raise credentials_exception
# # #     return store

# # # @app.post("/api/auth/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
# # # def register_store(store_data: StoreRegistration, db: Session = Depends(get_db)):
# # #     db_store = db.query(StoreDB).filter(StoreDB.email == store_data.email).first()
# # #     if db_store:
# # #         raise HTTPException(status_code=400, detail="Email already registered")

# # #     hashed_password = get_password_hash(store_data.password)
# # #     new_store = StoreDB(
# # #         storeName=store_data.storeName,
# # #         ownerName=store_data.ownerName,
# # #         email=store_data.email,
# # #         password=hashed_password
# # #     )
    
# # #     db.add(new_store)
# # #     db.commit()
# # #     db.refresh(new_store)
    
# # #     access_token = create_access_token(data={"sub": new_store.email})
# # #     return {"access_token": access_token, "store_id": str(new_store.id)}

# # # Add this nested schema
# # class UserLoginData(BaseModel):
# #     id: int
# #     email: str
# #     is_hq_staff: Optional[bool] = False
# #     hq_role: Optional[str] = "TENANT"



# # @app.post("/api/auth/register")
# # def register_store(store_data: StoreRegistration, db: Session = Depends(get_db)):
# #     # 1. Check if store already exists
# #     existing_store = db.query(StoreDB).filter(StoreDB.email == store_data.email).first()
# #     if existing_store:
# #         raise HTTPException(status_code=400, detail="Email already registered")
    
# #     # 2. Hash the password
# #     hashed_pwd = get_password_hash(store_data.password)
    
# #     # 3. Create the store using ONLY the fields from StoreRegistration
# #     # new_store = StoreDB(
# #     #     storeName=store_data.storeName,
# #     #     email=store_data.email,
# #     #     hashed_password=hashed_pwd
# #     #     # REMOVED: ownerName, phone, address, etc. 
# #     #     # These are nullable in the DB and will be filled out in the Setup Wizard.
# #     # )
# #     trial_expiry = datetime.now(timezone.utc) + timedelta(days=5)

# #     new_store = StoreDB(
# #         storeName=store_data.storeName,
# #         email=store_data.email,
# #         hashed_password=hashed_pwd,
# #         subscription_tier=store_data.tier,      # Save their chosen trial tier
# #         subscription_status="TRIAL",            # Mark them explicitly as a Trial
# #         trial_ends_at=trial_expiry              # Lock in the 5-day window
# #     )
    
# #     db.add(new_store)
# #     db.commit()
# #     db.refresh(new_store)
    
# #     return {"message": "Store registered successfully with 5-day trial"}

# # # @app.post("/api/auth/login", response_model=TokenResponse)
# # # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):
# # #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
# # #     if not store or not verify_password(credentials.password, store.password):
# # #         raise HTTPException(status_code=401, detail="Incorrect email or password")
        
# # #     access_token = create_access_token(data={"sub": store.email})
# # #     return {"access_token": access_token, "store_id": str(store.id)}

# # # @app.post("/api/auth/login", response_model=TokenResponse)
# # # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):
# # #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
    
# # #     # FIX IS HERE: Changed store.password to store.hashed_password
# # #     if not store or not verify_password(credentials.password, store.hashed_password):
# # #         raise HTTPException(
# # #             status_code=401,
# # #             detail="Incorrect email or password",
# # #             headers={"WWW-Authenticate": "Bearer"},
# # #         )
    
# # #     # Generate JWT token
# # #     access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
# # #     access_token = create_access_token(
# # #         data={"sub": store.email}, expires_delta=access_token_expires
# # #     )
    
# # #     return {"access_token": access_token, "token_type": "bearer"}

# # # @app.post("/api/auth/login", response_model=TokenResponse)
# # # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):
# # #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
    
# # #     if not store or not verify_password(credentials.password, store.hashed_password):
# # #         raise HTTPException(
# # #             status_code=401,
# # #             detail="Incorrect email or password",
# # #             headers={"WWW-Authenticate": "Bearer"},
# # #         )
    
   
# # #     access_token = create_access_token(
# # #         data={"sub": str(store.id)} 
# # #     )
    
# # #     return {"access_token": access_token, "token_type": "bearer"}

# # # @app.post("/api/auth/login", response_model=TokenResponse)
# # # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):
# # #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
    
# # #     if not store or not verify_password(credentials.password, store.hashed_password):
# # #         raise HTTPException(
# # #             status_code=401,
# # #             detail="Incorrect email or password",
# # #             headers={"WWW-Authenticate": "Bearer"},
# # #         )
    
# # #     access_token = create_access_token(
# # #         data={"sub": str(store.id)} 
# # #     )
    
# # #     return {
# # #         "access_token": access_token, 
# # #         "token_type": "bearer",
# # #         "user": {
# # #             "id": store.id,
# # #             "email": store.email,
# # #             "is_hq_staff": getattr(store, 'is_hq_staff', False),
# # #             "hq_role": getattr(store, 'hq_role', 'TENANT')
# # #         }
# # #     }

# # # @app.post("/api/auth/login", response_model=TokenResponse)
# # # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):

# # #     # 1. Check HQ Superadmin/Staff
# # #     hq_staff = db.query(StaffUser).filter(StaffUser.email == credentials.email).first()
# # #     if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
# # #         access_token = create_access_token(data={"sub": str(hq_staff.id), "role": hq_staff.hq_role, "is_staff": True})
# # #         return {
# # #             "access_token": access_token,
# # #             "token_type": "bearer",
# # #             "user": {
# # #                 "id": hq_staff.id, "email": hq_staff.email, "is_hq_staff": True, "hq_role": hq_staff.hq_role
# # #             }
# # #         }

# # #     # 2. Check Root Store Admin (Owner)
# # #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
# # #     if store and verify_password(credentials.password, store.hashed_password):
# # #         # The Store Admin gets the root store ID and the "STORE_ADMIN" role
# # #         access_token = create_access_token(data={"sub": str(store.id), "is_staff": False, "tenant_role": "STORE_ADMIN"})
# # #         return {
# # #             "access_token": access_token, 
# # #             "token_type": "bearer",
# # #             "user": {
# # #                 "id": store.id, "email": store.email, "is_hq_staff": False, "hq_role": "TENANT", "tenant_role": "STORE_ADMIN"
# # #             }
# # #         }

# # #     # 3. Check Tenant Employee (Cashier, Manager, Inventory)
# # #     tenant_employee = db.query(TenantStaff).filter(TenantStaff.email == credentials.email).first()
# # #     if tenant_employee and verify_password(credentials.password, tenant_employee.hashed_password):
# # #         if not tenant_employee.is_active:
# # #             raise HTTPException(status_code=403, detail="Account disabled.")
            
# # #         # Bind the token to the PARENT store's ID, so they see the store's data, not their own ID
# # #         # access_token = create_access_token(data={"sub": str(tenant_employee.store_id), "is_staff": False, "tenant_role": tenant_employee.tenant_role})
# # #         access_token = create_access_token(data={
# # #             "sub": str(tenant_employee.id), 
# # #             "store_id": str(tenant_employee.store_id),
# # #             "is_staff": False, 
# # #             "tenant_role": tenant_employee.tenant_role
# # #         })
# # #         return {
# # #             "access_token": access_token, 
# # #             "token_type": "bearer",
# # #             "user": {
# # #                 "id": tenant_employee.id, 
# # #                 "store_id": tenant_employee.store_id,
# # #                 "email": tenant_employee.email, 
# # #                 "is_hq_staff": False, 
# # #                 "hq_role": "TENANT",
# # #                 "tenant_role": tenant_employee.tenant_role # MANAGER, CASHIER, INVENTORY
# # #             }
# # #         }

# # #     # If it fails all three
# # #     raise HTTPException(
# # #         status_code=401, detail="Incorrect email or password", headers={"WWW-Authenticate": "Bearer"},
# # #     )
    
# # #     # # 1. Check if the login belongs to an Internal Staff Member (StaffUser table)
# # #     # staff = db.query(StaffUser).filter(StaffUser.email == credentials.email).first()
# # #     # if staff and verify_password(credentials.password, staff.hashed_password):
# # #     #     access_token = create_access_token(
# # #     #         data={"sub": str(staff.id), "role": staff.hq_role, "is_staff": True}
# # #     #     )
# # #     #     return {
# # #     #         "access_token": access_token,
# # #     #         "token_type": "bearer",
# # #     #         "user": {
# # #     #             "id": staff.id,
# # #     #             "email": staff.email,
# # #     #             "is_hq_staff": True,
# # #     #             "hq_role": staff.hq_role
# # #     #         }
# # #     #     }

# # #     # # 2. Fallback to standard merchant store login (StoreDB table)
# # #     # store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
    
# # #     # if not store or not verify_password(credentials.password, store.hashed_password):
# # #     #     raise HTTPException(
# # #     #         status_code=401,
# # #     #         detail="Incorrect email or password",
# # #     #         headers={"WWW-Authenticate": "Bearer"},
# # #     #     )
    
# # #     # access_token = create_access_token(
# # #     #     data={"sub": str(store.id), "is_staff": False} 
# # #     # )
    
# # #     # return {
# # #     #     "access_token": access_token, 
# # #     #     "token_type": "bearer",
# # #     #     "user": {
# # #     #         "id": store.id,
# # #     #         "email": store.email,
# # #     #         "is_hq_staff": False,
# # #     #         "hq_role": "TENANT"
# # #     #     }
# # #     # }

# # # # --- Fetch Store Profile & Dashboard Data ---
# # # # @app.get("/api/store/profile")
# # # # def get_store_profile(current_store: dict = Depends(get_current_store)):
# # # #     return {
# # # #         "storeName": current_store.storeName,
# # # #         "ownerName": current_store.ownerName,
# # # #         "email": current_store.email,
# # # #         "phone": current_store.phone,
# # # #         "address": current_store.address,
# # # #         "gstin": current_store.gstin,
# # # #         "currency": current_store.currency,
# # # #         "is_onboarded": current_store.is_onboarded,
# # # #         "is_superadmin": current_store.is_superadmin
# # # #         # "inventory": current_store.inventory or [],
# # # #         # "staff": current_store.staff or []
# # # #     }

# # @app.get("/api/store/profile")
# # def get_store_profile(current_user = Depends(get_current_store)):
    
# #     # 1. Check if the user is a Tenant Employee (Cashier, Manager, Inventory)
# #     # The TenantStaff model has the 'tenant_role' attribute.
# #     if hasattr(current_user, 'tenant_role'):
# #         return {
# #             "id": current_user.id,
# #             "store_id": current_user.store_id,
# #             "name": current_user.name,
# #             "email": current_user.email,
# #             "tenant_role": current_user.tenant_role, # <-- CRITICAL FOR SIDEBAR
# #             "is_superadmin": False,
# #             "is_onboarded": True,
# #             # Provide safe fallbacks so the frontend doesn't break
# #             "storeName": "Store Staff",
# #             "ownerName": current_user.name 
# #         }
        
# #     # 2. Otherwise, the user is the Store Admin (Owner) from StoreDB
# #     return {
# #         "id": current_user.id,
# #         "storeName": current_user.storeName,
# #         "ownerName": current_user.ownerName,
# #         "email": current_user.email,
# #         "phone": current_user.phone,
# #         "address": getattr(current_user, 'address', None),
# #         "gstin": getattr(current_user, 'gstin', None),
# #         "currency": getattr(current_user, 'currency', 'INR'),
# #         "is_onboarded": getattr(current_user, 'is_onboarded', False),
# #         "is_superadmin": getattr(current_user, 'is_superadmin', False),
# #         "tenant_role": "STORE_ADMIN", # <-- CRITICAL FOR SIDEBAR
# #         # --- NEW TRIAL FIELDS ---
# #         "subscription_tier": getattr(current_user, 'subscription_tier', 'BASIC'),
# #         "subscription_status": getattr(current_user, 'subscription_status', 'TRIAL'),
# #         "trial_ends_at": getattr(current_user, 'trial_ends_at', None)
# #     }

# # # --- Save Onboarding Setup Wizard Data ---
# # @app.post("/api/store/setup")
# # def save_store_setup(setup_data: SetupWizardData, current_store: dict = Depends(get_current_store), db: Session = Depends(get_db)):
# #     # Update store settings with onboarding details
# #     current_store.phone = setup_data.phone or current_store.phone
# #     current_store.address = setup_data.address or current_store.address
# #     current_store.gstin = setup_data.gstin or current_store.gstin
# #     current_store.currency = setup_data.currency or current_store.currency
# #     # current_store.inventory = setup_data.inventory
# #     # current_store.staff = setup_data.staff
# #     current_store.is_onboarded = True  # Mark setup complete so wizard doesn't show again
    
# #     db.commit()
# #     return {"message": "Setup completed successfully", "is_onboarded": True}


# # @app.post("/api/store/setup")
# # async def complete_store_setup(
# #     setup_data: SetupWizardData, 
# #     db: Session = Depends(get_db), 
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Update the store's details
# #     current_store.phone = setup_data.phone
# #     current_store.address = setup_data.address
# #     current_store.gstin = setup_data.gstin
# #     current_store.currency = setup_data.currency
    
# #     # Flip the onboarding flag to True so they never see the wizard again
# #     current_store.is_onboarded = True
    
# #     db.commit()
# #     db.refresh(current_store)
    
# #     return {"message": "Setup complete", "is_onboarded": current_store.is_onboarded}


# # # --- INVENTORY ROUTES ---

# # @app.post("/api/inventory", response_model=ProductResponse)
# # def create_product(
# #     product: ProductCreate, 
# #     db: Session = Depends(get_db), 
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     new_product = ProductDB(
# #         store_id=current_store.id,
# #         name=product.name,
# #         category=product.category,
# #         price=product.price,
# #         stock=product.stock,
# #         barcode=product.barcode
# #     )
# #     db.add(new_product)
# #     db.commit()
# #     db.refresh(new_product)
# #     return new_product

# # @app.get("/api/inventory", response_model=list[ProductResponse])
# # def get_inventory(
# #     db: Session = Depends(get_db), 
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     products = db.query(ProductDB).filter(ProductDB.store_id == current_store.id).all()
# #     return products


# # # --- BILLING ROUTES ---

# # @app.post("/api/billing/checkout")
# # def process_billing(
# #     invoice_data: InvoiceCreate, 
# #     db: Session = Depends(get_db), 
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # 1. Create the main invoice record
# #     new_invoice = InvoiceDB(
# #         store_id=current_store.id,
# #         customer_name=invoice_data.customer_name,
# #         customer_phone=invoice_data.customer_phone,
# #         total_amount=invoice_data.total_amount,
# #         payment_method=invoice_data.payment_method
# #     )
# #     db.add(new_invoice)
# #     db.flush() # Flushes to get the new_invoice.id without committing the transaction yet

# #     # 2. Add all items and deduct from stock
# #     for item in invoice_data.items:
# #         # Create line item
# #         db_item = InvoiceItemDB(
# #             invoice_id=new_invoice.id,
# #             product_id=item.product_id,
# #             quantity=item.quantity,
# #             price_at_time=item.price_at_time
# #         )
# #         db.add(db_item)
        
# #         # Deduct stock
# #         product = db.query(ProductDB).filter(ProductDB.id == item.product_id).first()
# #         if product and product.stock >= item.quantity:
# #             product.stock -= item.quantity
# #         else:
# #             db.rollback()
# #             raise HTTPException(status_code=400, detail=f"Not enough stock for {product.name if product else 'Unknown Item'}")

# #     # 3. Finalize transaction
# #     db.commit()
# #     return {"message": "Payment Confirmed", "invoice_id": new_invoice.id}


# # # @app.get("/api/invoices/{invoice_id}")
# # # def get_invoice(
# # #     invoice_id: int, 
# # #     db: Session = Depends(get_db), 
# # #     current_store: StoreDB = Depends(get_current_store)
# # # ):
# # #     # Fetch the invoice ensuring it belongs to the logged-in store
# # #     invoice = db.query(InvoiceDB).filter(
# # #         InvoiceDB.id == invoice_id, 
# # #         InvoiceDB.store_id == current_store.id
# # #     ).first()

# # #     if not invoice:
# # #         raise HTTPException(status_code=404, detail="Invoice not found")

# # #     # Build the items list by joining with ProductDB to get the actual product names
# # #     items_data = []
# # #     for item in invoice.items:
# # #         product = db.query(ProductDB).filter(ProductDB.id == item.product_id).first()
# # #         items_data.append({
# # #             "id": item.id,
# # #             "name": product.name if product else "Unknown Product",
# # #             "quantity": item.quantity,
# # #             "price": item.price_at_time,
# # #             "amount": item.quantity * item.price_at_time
# # #         })

# # #     # Construct a complete JSON response mapping to the frontend's requirements
# # #     return {
# # #         "id": invoice.id,
# # #         "date": invoice.created_at.isoformat(),
# # #         "customer": {
# # #             "name": invoice.customer_name,
# # #             "phone": invoice.customer_phone or "N/A",
# # #             "address": "Walk-in" if invoice.customer_name == "Walk-in Customer" else ""
# # #         },
# # #         "store": {
# # #             "name": current_store.storeName,
# # #             "address": current_store.address,
# # #             "phone": current_store.phone,
# # #             "gstNumber": current_store.gstin
# # #         },
# # #         "paymentMethod": invoice.payment_method,
# # #         "grandTotal": invoice.total_amount,
# # #         "items": items_data
# # #     }

# # # @app.get("/api/analytics/sales")
# # # def get_sales_analytics(
# # #     date_range: str = Query("month"),
# # #     db: Session = Depends(get_db),
# # #     current_store: dict = Depends(get_current_store)
# # # ):
# # #     now = datetime.now(timezone.utc)
    
# # #     # Calculate start date based on range filter
# # #     if date_range == "today":
# # #         start_date = now.replace(hour=0, minute=0, second=0, microsecond=0)
# # #     elif date_range == "week":
# # #         start_date = now - timedelta(days=now.weekday())
# # #         start_date = start_date.replace(hour=0, minute=0, second=0, microsecond=0)
# # #     else: # month
# # #         start_date = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

# # #     # 1. Fetch Invoices
# # #     invoices = db.query(InvoiceDB).filter(
# # #         InvoiceDB.store_id == current_store.id,
# # #         InvoiceDB.created_at >= start_date
# # #     ).all()

# # #     total_sales = sum(inv.total_amount for inv in invoices)

# # #     # 2. Group Sales Trends by Date (Python-side aggregation for SQLite compatibility)
# # #     trends_dict = {}
# # #     for inv in invoices:
# # #         date_str = inv.created_at.strftime("%d %b")
# # #         trends_dict[date_str] = trends_dict.get(date_str, 0) + inv.total_amount
    
# # #     # Sort trends chronologically
# # #     sales_trends = [{"date": k, "sales": v} for k, v in trends_dict.items()]

# # #     # 3. Top Products using SQLAlchemy JOIN and GROUP_BY
# # #     top_items_query = db.query(
# # #         ProductDB.name, 
# # #         func.sum(InvoiceItemDB.quantity * InvoiceItemDB.price_at_time).label("total_amount")
# # #     ).join(InvoiceItemDB, ProductDB.id == InvoiceItemDB.product_id)\
# # #      .join(InvoiceDB, InvoiceItemDB.invoice_id == InvoiceDB.id)\
# # #      .filter(InvoiceDB.store_id == current_store.id, InvoiceDB.created_at >= start_date)\
# # #      .group_by(ProductDB.id)\
# # #      .order_by(desc("total_amount"))\
# # #      .limit(5).all()

# # #     top_products = [{"name": item.name, "amount": item.total_amount} for item in top_items_query]

# # #     # 4. Profit & Loss (Simulated margins for UI completeness)
# # #     cogs = total_sales * 0.65
# # #     gross_profit = total_sales - cogs
# # #     expenses = 0 if total_sales == 0 else (total_sales * 0.10)
# # #     net_profit = gross_profit - expenses

# # #     return {
# # #         "total_sales": total_sales,
# # #         "trends": sales_trends,
# # #         "top_products": top_products,
# # #         "summary": {
# # #             "total_sales": total_sales,
# # #             "cogs": cogs,
# # #             "gross_profit": gross_profit,
# # #             "expenses": expenses,
# # #             "net_profit": net_profit,
# # #             "gross_margin_pct": (gross_profit / total_sales * 100) if total_sales > 0 else 0,
# # #             "net_margin_pct": (net_profit / total_sales * 100) if total_sales > 0 else 0
# # #         }
# # #     }

# # #updates sales
# # @app.get("/api/analytics/sales")
# # def get_sales_analytics(
# #     date_range: str = Query("month"),
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     now = datetime.now(timezone.utc)
    
# #     # Calculate start date based on range filter
# #     if date_range == "today":
# #         start_date = now.replace(hour=0, minute=0, second=0, microsecond=0)
# #     elif date_range == "week":
# #         start_date = now - timedelta(days=now.weekday())
# #         start_date = start_date.replace(hour=0, minute=0, second=0, microsecond=0)
# #     else: # month - use the first day of the current month
# #         start_date = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

# #     # 1. Fetch Invoices using issue_date with fallback to created_at
# #     invoices = db.query(InvoiceDB).filter(
# #         InvoiceDB.store_id == current_store.id
# #     ).all()
    
# #     # Filter in-memory to safely handle date field variations safely
# #     filtered_invoices = []
# #     for inv in invoices:
# #         inv_date = inv.issue_date or inv.created_at
# #         if inv_date:
# #             # Make sure inv_date is timezone-aware for comparison
# #             if inv_date.tzinfo is None:
# #                 inv_date = inv_date.replace(tzinfo=timezone.utc)
# #             if date_range == "all" or inv_date >= start_date:
# #                 filtered_invoices.append(inv)

# #     total_sales = sum(inv.total_amount for inv in filtered_invoices)

# #     # 2. Group Sales Trends by Date
# #     trends_dict = {}
# #     for inv in filtered_invoices:
# #         inv_date = inv.issue_date or inv.created_at
# #         date_str = inv_date.strftime("%d %b") if inv_date else "Unknown"
# #         trends_dict[date_str] = trends_dict.get(date_str, 0) + inv.total_amount
    
# #     sales_trends = [{"date": k, "sales": v} for k, v in trends_dict.items()]

# #     # 3. Top Products using SQLAlchemy JOIN and GROUP_BY
# #     top_items_query = db.query(
# #         ProductDB.name, 
# #         func.sum(InvoiceItemDB.quantity * InvoiceItemDB.price_at_time).label("total_amount")
# #     ).join(InvoiceItemDB, ProductDB.id == InvoiceItemDB.product_id)\
# #      .join(InvoiceDB, InvoiceItemDB.invoice_id == InvoiceDB.id)\
# #      .filter(InvoiceDB.store_id == current_store.id)\
# #      .group_by(ProductDB.id)\
# #      .order_by(desc("total_amount"))\
# #      .limit(5).all()

# #     top_products = [{"name": item.name, "amount": item.total_amount} for item in top_items_query]

# #     # 4. Profit & Loss Margins
# #     cogs = total_sales * 0.65
# #     gross_profit = total_sales - cogs
# #     expenses = 0 if total_sales == 0 else (total_sales * 0.10)
# #     net_profit = gross_profit - expenses

# #     return {
# #         "total_sales": total_sales,
# #         "trends": sales_trends,
# #         "top_products": top_products,
# #         "summary": {
# #             "total_sales": total_sales,
# #             "cogs": cogs,
# #             "gross_profit": gross_profit,
# #             "expenses": expenses,
# #             "net_profit": net_profit,
# #             "gross_margin_pct": (gross_profit / total_sales * 100) if total_sales > 0 else 0,
# #             "net_margin_pct": (net_profit / total_sales * 100) if total_sales > 0 else 0
# #         }
# #     }

# # # @app.get("/api/dashboard")
# # # def get_dashboard_summary(
# # #     db: Session = Depends(get_db),
# # #     current_store: dict = Depends(get_current_store)
# # # ):
# # #     now = datetime.now(timezone.utc)
# # #     today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
# # #     yesterday_start = today_start - timedelta(days=1)
    
# # #     # 1. Fetch Today's and Yesterday's Invoices
# # #     today_invoices = db.query(InvoiceDB).filter(
# # #         InvoiceDB.store_id == current_store.id,
# # #         InvoiceDB.created_at >= today_start
# # #     ).all()
    
# # #     yesterday_invoices = db.query(InvoiceDB).filter(
# # #         InvoiceDB.store_id == current_store.id,
# # #         InvoiceDB.created_at >= yesterday_start,
# # #         InvoiceDB.created_at < today_start
# # #     ).all()
    
# # #     today_sales = sum(inv.total_amount for inv in today_invoices)
# # #     yesterday_sales = sum(inv.total_amount for inv in yesterday_invoices)
    
# # #     today_orders = len(today_invoices)
# # #     yesterday_orders = len(yesterday_invoices)
    
# # #     # Helper for Percentage Change
# # #     def calc_change(current, previous):
# # #         if previous == 0:
# # #             return "+100%" if current > 0 else "0%"
# # #         change = ((current - previous) / previous) * 100
# # #         sign = "+" if change >= 0 else ""
# # #         return f"{sign}{change:.1f}%"
        
# # #     # 2. Fetch Active Inventory (Products with stock > 0)
# # #     active_stock = db.query(ProductDB).filter(
# # #         ProductDB.store_id == current_store.id,
# # #         ProductDB.stock > 0
# # #     ).count()
    
# # #     # 3. Fetch Unique Customers
# # #     unique_customers = db.query(InvoiceDB.customer_name).filter(
# # #         InvoiceDB.store_id == current_store.id,
# # #         InvoiceDB.customer_name != "Walk-in Customer",
# # #         InvoiceDB.customer_name != None,
# # #         InvoiceDB.customer_name != ""
# # #     ).distinct().count()
    
# # #     # 4. Generate 7-Day Rolling Trend for the Chart
# # #     week_start = today_start - timedelta(days=6)
# # #     week_invoices = db.query(InvoiceDB).filter(
# # #         InvoiceDB.store_id == current_store.id,
# # #         InvoiceDB.created_at >= week_start
# # #     ).all()
    
# # #     trend_dict = {}
# # #     for i in range(7):
# # #         day = week_start + timedelta(days=i)
# # #         trend_dict[day.strftime("%d %b")] = 0
        
# # #     for inv in week_invoices:
# # #         day_str = inv.created_at.strftime("%d %b")
# # #         if day_str in trend_dict:
# # #             trend_dict[day_str] += inv.total_amount
            
# # #     sales_trend = [{"date": k, "total_sales": v} for k, v in trend_dict.items()]
    
# # #     return {
# # #         "metrics": {
# # #             "sales": f"₹{today_sales:,.0f}",
# # #             "salesChange": calc_change(today_sales, yesterday_sales),
# # #             "salesPositive": today_sales >= yesterday_sales,
# # #             "orders": str(today_orders),
# # #             "ordersChange": calc_change(today_orders, yesterday_orders),
# # #             "ordersPositive": today_orders >= yesterday_orders,
# # #             "stock": str(active_stock),
# # #             "stockChange": "Active", 
# # #             "stockPositive": True,
# # #             "customers": str(unique_customers),
# # #             "customersChange": "Total", 
# # #             "customersPositive": True
# # #         },
# # #         "salesTrend": sales_trend
# # #     }

# # ##new dashboard
# # # @app.get("/api/dashboard")
# # # def get_dashboard_summary(
# # #     db: Session = Depends(get_db),
# # #     current_store: dict = Depends(get_current_store)
# # # ):
# # #     now = datetime.now(timezone.utc)
# # #     today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    
# # #     invoices = db.query(InvoiceDB).filter(
# # #         InvoiceDB.store_id == current_store.id
# # #     ).all()
    
# # #     today_sales = 0
# # #     today_orders = 0
# # #     yesterday_sales = 0
# # #     yesterday_orders = 0
    
# # #     week_start = today_start - timedelta(days=6)
# # #     trend_dict = {}
# # #     for i in range(7):
# # #         day = week_start + timedelta(days=i)
# # #         trend_dict[day.strftime("%d %b")] = 0

# # #     for inv in invoices:
# # #         inv_date = inv.issue_date or inv.created_at
# # #         if not inv_date:
# # #             continue
# # #         if inv_date.tzinfo is None:
# # #             inv_date = inv_date.replace(tzinfo=timezone.utc)
            
# # #         # Check if today
# # #         if inv_date >= today_start:
# # #             today_sales += inv.total_amount
# # #             today_orders += 1
# # #         elif today_start - timedelta(days=1) <= inv_date < today_start:
# # #             yesterday_sales += inv.total_amount
# # #             yesterday_orders += 1
            
# # #         # Check if within 7-day rolling window
# # #         day_str = inv_date.strftime("%d %b")
# # #         if day_str in trend_dict:
# # #             trend_dict[day_str] += inv.total_amount

# # #     def calc_change(current, previous):
# # #         if previous == 0:
# # #             return "+100%" if current > 0 else "0%"
# # #         change = ((current - previous) / previous) * 100
# # #         sign = "+" if change >= 0 else ""
# # #         return f"{sign}{change:.1f}%"
        
# # #     active_stock = db.query(ProductDB).filter(
# # #         ProductDB.store_id == current_store.id,
# # #         ProductDB.stock > 0
# # #     ).count()
    
# # #     unique_customers = db.query(InvoiceDB.customer_name).filter(
# # #         InvoiceDB.store_id == current_store.id,
# # #         InvoiceDB.customer_name != "Walk-in Customer",
# # #         InvoiceDB.customer_name != None,
# # #         InvoiceDB.customer_name != ""
# # #     ).distinct().count()
    
# # #     sales_trend = [{"date": k, "total_sales": v} for k, v in trend_dict.items()]
    
# # #     return {
# # #         "metrics": {
# # #             "sales": f"₹{today_sales:,.0f}",
# # #             "salesChange": calc_change(today_sales, yesterday_sales),
# # #             "salesPositive": today_sales >= yesterday_sales,
# # #             "orders": str(today_orders),
# # #             "ordersChange": calc_change(today_orders, yesterday_orders),
# # #             "ordersPositive": today_orders >= yesterday_orders,
# # #             "stock": str(active_stock),
# # #             "stockChange": "Active", 
# # #             "stockPositive": True,
# # #             "customers": str(unique_customers),
# # #             "customersChange": "Total", 
# # #             "customersPositive": True
# # #         },
# # #         "salesTrend": sales_trend
# # #     }


# # @app.get("/api/dashboard")
# # def get_dashboard_summary(
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     now = datetime.now(timezone.utc)
# #     today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    
# #     # 1. Fetch both Invoices and Expenses for the current store
# #     invoices = db.query(InvoiceDB).filter(
# #         InvoiceDB.store_id == current_store.id
# #     ).all()
    
# #     expenses = db.query(ExpenseDB).filter(
# #         ExpenseDB.store_id == current_store.id
# #     ).all()
    
# #     # 2. Initialize tracking variables
# #     today_sales = 0
# #     today_orders = 0
# #     yesterday_sales = 0
# #     yesterday_orders = 0
    
# #     today_expenses = 0
# #     yesterday_expenses = 0
    
# #     # 3. Setup 7-day rolling window dictionary to hold both metrics
# #     week_start = today_start - timedelta(days=6)
# #     trend_dict = {}
# #     for i in range(7):
# #         day = week_start + timedelta(days=i)
# #         # Store a nested dict instead of a single integer
# #         trend_dict[day.strftime("%d %b")] = {"sales": 0, "expenses": 0}

# #     # 4. Process Invoices (Revenue)
# #     for inv in invoices:
# #         inv_date = inv.issue_date or inv.created_at
# #         if not inv_date:
# #             continue
# #         if inv_date.tzinfo is None:
# #             inv_date = inv_date.replace(tzinfo=timezone.utc)
            
# #         if inv_date >= today_start:
# #             today_sales += inv.total_amount
# #             today_orders += 1
# #         elif today_start - timedelta(days=1) <= inv_date < today_start:
# #             yesterday_sales += inv.total_amount
# #             yesterday_orders += 1
            
# #         day_str = inv_date.strftime("%d %b")
# #         if day_str in trend_dict:
# #             trend_dict[day_str]["sales"] += inv.total_amount

# #     # 5. Process Expenses (Outflow)
# #     for exp in expenses:
# #         # Match the date field you save in your React payload (purchase_date)
# #         exp_date = exp.purchase_date or exp.created_at
# #         if not exp_date:
# #             continue
# #         if exp_date.tzinfo is None:
# #             exp_date = exp_date.replace(tzinfo=timezone.utc)
            
# #         if exp_date >= today_start:
# #             today_expenses += exp.grand_total
# #         elif today_start - timedelta(days=1) <= exp_date < today_start:
# #             yesterday_expenses += exp.grand_total
            
# #         day_str = exp_date.strftime("%d %b")
# #         if day_str in trend_dict:
# #             trend_dict[day_str]["expenses"] += exp.grand_total

# #     # 6. Calculate Net Profit
# #     today_profit = today_sales - today_expenses
# #     yesterday_profit = yesterday_sales - yesterday_expenses

# #     # 7. Keep original helper function intact
# #     def calc_change(current, previous):
# #         if previous == 0:
# #             return "+100%" if current > 0 else "0%"
# #         change = ((current - previous) / previous) * 100
# #         sign = "+" if change >= 0 else ""
# #         return f"{sign}{change:.1f}%"
        
# #     # 8. Keep original sub-queries intact
# #     active_stock = db.query(ProductDB).filter(
# #         ProductDB.store_id == current_store.id,
# #         ProductDB.stock > 0
# #     ).count()
    
# #     unique_customers = db.query(InvoiceDB.customer_name).filter(
# #         InvoiceDB.store_id == current_store.id,
# #         InvoiceDB.customer_name != "Walk-in Customer",
# #         InvoiceDB.customer_name != None,
# #         InvoiceDB.customer_name != ""
# #     ).distinct().count()
    
# #     # 9. Map the trend dictionary to the format expected by Recharts
# #     sales_trend = [
# #         {
# #             "date": k, 
# #             "total_sales": v["sales"], 
# #             "total_expenses": v["expenses"],
# #             "profit": v["sales"] - v["expenses"]
# #         } for k, v in trend_dict.items()
# #     ]
    
# #     return {
# #         "metrics": {
# #             # Revenue Card
# #             "sales": f"₹{today_sales:,.0f}",
# #             "salesChange": calc_change(today_sales, yesterday_sales),
# #             "salesPositive": today_sales >= yesterday_sales,
            
# #             # Expenses Card
# #             "expenses": f"₹{today_expenses:,.0f}",
# #             "expensesChange": calc_change(today_expenses, yesterday_expenses),
# #             "expensesPositive": today_expenses <= yesterday_expenses, # Lower expenses are logically positive
            
# #             # Profit Card
# #             "profit": f"₹{today_profit:,.0f}",
# #             "profitChange": calc_change(today_profit, yesterday_profit),
# #             "profitPositive": today_profit >= yesterday_profit,
            
# #             # Customers/Cash Flow Card
# #             "customers": str(unique_customers),
# #             "customersChange": "Total", 
# #             "customersPositive": True,
            
# #             # Legacy keys kept for safety in case other components still read them
# #             "orders": str(today_orders),
# #             "ordersChange": calc_change(today_orders, yesterday_orders),
# #             "ordersPositive": today_orders >= yesterday_orders,
# #             "stock": str(active_stock),
# #             "stockChange": "Active", 
# #             "stockPositive": True,
# #         },
# #         "salesTrend": sales_trend
# #     }

# # @app.get("/api/invoices")
# # def get_all_invoices(
# #     db: Session = Depends(get_db), 
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     invoices = db.query(InvoiceDB).filter(
# #         InvoiceDB.store_id == current_store.id
# #     ).order_by(desc(InvoiceDB.created_at)).all()
    
# #     return [
# #         {
# #             "id": inv.id,
# #             "date": inv.created_at.isoformat(),
# #             "customer_name": inv.customer_name,
# #             "total_amount": inv.total_amount,
# #             "payment_method": inv.payment_method
# #         }
# #         for inv in invoices
# #     ]


# # # --- Schema for Settings Update ---
# # class StoreUpdate(BaseModel):
# #     storeName: str
# #     ownerName: str
# #     phone: str
# #     address: str
# #     gstin: str
# #     currency: str

# # # --- Settings Update Route ---
# # @app.put("/api/store/profile")
# # def update_store_profile(
# #     update_data: StoreUpdate,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     current_store.storeName = update_data.storeName
# #     current_store.ownerName = update_data.ownerName
# #     current_store.phone = update_data.phone
# #     current_store.address = update_data.address
# #     current_store.gstin = update_data.gstin
# #     current_store.currency = update_data.currency
    
# #     db.commit()
# #     db.refresh(current_store)
    
# #     return {"message": "Profile updated successfully", "storeName": current_store.storeName}

# # # ==========================================
# # # B2B CUSTOMER ENDPOINTS
# # # ==========================================

# # @app.post("/api/customers", response_model=CustomerResponse)
# # def create_customer(
# #     customer: CustomerCreate,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     new_customer = CustomerDB(
# #         store_id=current_store.id,
# #         company_name=customer.company_name,
# #         contact_person=customer.contact_person,
# #         email=customer.email,
# #         phone=customer.phone,
# #         billing_address=customer.billing_address,
# #         shipping_address=customer.shipping_address,
# #         gstin=customer.gstin,
# #         place_of_supply=customer.place_of_supply
# #     )
# #     db.add(new_customer)
# #     db.commit()
# #     db.refresh(new_customer)
# #     return new_customer

# # @app.get("/api/customers", response_model=list[CustomerResponse])
# # def get_customers(
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     return db.query(CustomerDB).filter(CustomerDB.store_id == current_store.id).all()

# # # ==========================================
# # # QUOTATION / ESTIMATE ENDPOINTS
# # # ==========================================

# # @app.post("/api/quotations" , dependencies=[Depends(require_tier("GROWTH"))])
# # def create_quotation(
# #     quote_data: QuotationCreate,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Auto-generate quote number (e.g., QT-000001)
# #     count = db.query(QuotationDB).filter(QuotationDB.store_id == current_store.id).count()
# #     quote_number = f"QT-{(count + 1):06d}"

# #     new_quote = QuotationDB(
# #         store_id=current_store.id,
# #         customer_id=quote_data.customer_id,
# #         quotation_number=quote_number,
# #         valid_until=quote_data.valid_until,
# #         subtotal=quote_data.subtotal,
# #         discount_total=quote_data.discount_total,
# #         tax_total=quote_data.tax_total,
# #         grand_total=quote_data.grand_total,
# #         terms_conditions=quote_data.terms_conditions,
# #         notes=quote_data.notes,
# #         status=DocumentStatus.DRAFT
# #     )
# #     db.add(new_quote)
# #     db.flush()

# #     for item in quote_data.items:
# #         db_item = QuotationItemDB(
# #             quotation_id=new_quote.id,
# #             product_id=item.product_id,
# #             name=item.name,
# #             hsn_sac_code=item.hsn_sac_code,
# #             quantity=item.quantity,
# #             unit=item.unit,
# #             rate=item.rate,
# #             discount_amount=item.discount_amount,
# #             tax_rate=item.tax_rate,
# #             tax_amount=item.tax_amount,
# #             total_amount=item.total_amount
# #         )
# #         db.add(db_item)

# #     db.commit()
# #     return {"message": "Quotation created successfully", "id": new_quote.id, "quotation_number": quote_number}

# # @app.get("/api/quotations" , dependencies=[Depends(require_tier("GROWTH"))])
# # def get_quotations(
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     quotes = db.query(QuotationDB).filter(QuotationDB.store_id == current_store.id).order_by(QuotationDB.id.desc()).all()
    
# #     result = []
# #     for q in quotes:
# #         customer = db.query(CustomerDB).filter(CustomerDB.id == q.customer_id).first()
# #         result.append({
# #             "id": q.id,
# #             "quotation_number": q.quotation_number,
# #             "company_name": customer.company_name if customer else "Unknown Client",
# #             "issue_date": q.issue_date.isoformat(),
# #             "grand_total": q.grand_total,
# #             "status": q.status.value
# #         })
# #     return result


# # @app.post("/api/quotations/{quotation_id}/convert")
# # def convert_quotation_to_invoice(
# #     quotation_id: int,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # 1. Validate the quotation exists and is owned by the store
# #     quotation = db.query(QuotationDB).filter(
# #         QuotationDB.id == quotation_id, 
# #         QuotationDB.store_id == current_store.id
# #     ).first()
    
# #     if not quotation:
# #         raise HTTPException(status_code=404, detail="Quotation not found")
        
# #     # 2. Prevent duplicate conversions
# #     if quotation.status == DocumentStatus.CONVERTED:
# #         raise HTTPException(status_code=400, detail="Quotation has already been converted to an invoice")
        
# #     # 3. Fetch Customer details for denormalized invoice fields
# #     customer = db.query(CustomerDB).filter(CustomerDB.id == quotation.customer_id).first()
# #     customer_name = customer.company_name if customer else "B2B Client"
# #     customer_phone = customer.phone if customer else None

# #     # 4. Generate a sequential B2B Invoice Number
# #     count = db.query(InvoiceDB).filter(InvoiceDB.store_id == current_store.id).count()
# #     invoice_number = f"INV-{(count + 1):06d}"

# #     # 5. Create the parent Invoice record
# #     new_invoice = InvoiceDB(
# #         store_id=current_store.id,
# #         customer_id=quotation.customer_id,
# #         customer_name=customer_name,
# #         customer_phone=customer_phone,
# #         quotation_id=quotation.id,
# #         invoice_number=invoice_number,
# #         subtotal=quotation.subtotal,
# #         discount_total=quotation.discount_total,
# #         tax_total=quotation.tax_total,
# #         total_amount=quotation.grand_total,
# #         grand_total=quotation.grand_total,
# #         terms_conditions=quotation.terms_conditions,
# #         notes=quotation.notes,
# #         status=InvoiceStatus.UNPAID
# #     )
# #     db.add(new_invoice)
# #     db.flush() # Flush to get the new_invoice.id for the line items

# #     # 6. Deep copy the line items
# #     for q_item in quotation.items:
# #         inv_item = InvoiceItemDB(
# #             invoice_id=new_invoice.id,
# #             product_id=q_item.product_id,
# #             name=q_item.name,
# #             hsn_sac_code=q_item.hsn_sac_code,
# #             quantity=q_item.quantity,
# #             unit=q_item.unit,
# #             rate=q_item.rate,
# #             price_at_time=q_item.rate, # Ensures backward compatibility with retail POS queries
# #             discount_amount=q_item.discount_amount,
# #             tax_rate=q_item.tax_rate,
# #             tax_amount=q_item.tax_amount,
# #             total_amount=q_item.total_amount
# #         )
# #         db.add(inv_item)

# #     # 7. Transition the quotation state
# #     quotation.status = DocumentStatus.CONVERTED
    
# #     db.commit()
    
# #     return {
# #         "message": "Quotation converted successfully", 
# #         "invoice_id": new_invoice.id, 
# #         "invoice_number": invoice_number
# #     }

# # # @app.get("/api/invoices/{invoice_id}")
# # # def get_invoice_detail(
# # #     invoice_id: int,
# # #     db: Session = Depends(get_db),
# # #     current_store: StoreDB = Depends(get_current_store)
# # # ):
# # #     # Fetch invoice and eagerly load items to prevent N+1 query problems
# # #     invoice = db.query(InvoiceDB).options(joinedload(InvoiceDB.items)).filter(
# # #         InvoiceDB.id == invoice_id,
# # #         InvoiceDB.store_id == current_store.id
# # #     ).first()
    
# # #     if not invoice:
# # #         raise HTTPException(status_code=404, detail="Invoice not found")
        
# # #     customer = db.query(CustomerDB).filter(CustomerDB.id == invoice.customer_id).first()
    
# # #     return {
# # #         "store": {
# # #             "storeName": current_store.storeName,
# # #             "address": current_store.address,
# # #             "phone": current_store.phone,
# # #             "email": current_store.email,
# # #             "gstin": current_store.gstin
# # #         },
# # #         "customer": {
# # #             "company_name": customer.company_name if customer else invoice.customer_name,
# # #             "billing_address": customer.billing_address if customer else None,
# # #             "gstin": customer.gstin if customer else None,
# # #             "place_of_supply": customer.place_of_supply if customer else None,
# # #             "phone": invoice.customer_phone
# # #         },
# # #         "invoice": {
# # #             "invoice_number": invoice.invoice_number or f"#{invoice.id:06d}",
# # #             "issue_date": invoice.issue_date,
# # #             "due_date": invoice.due_date,
# # #             "subtotal": invoice.subtotal,
# # #             "tax_total": invoice.tax_total,
# # #             "grand_total": invoice.grand_total,
# # #             "notes": invoice.notes,
# # #             "terms_conditions": invoice.terms_conditions,
# # #             "status": invoice.status.value
# # #         },
# # #         "items": [
# # #             {
# # #                 "name": item.name,
# # #                 "hsn_sac_code": item.hsn_sac_code,
# # #                 "quantity": item.quantity,
# # #                 "rate": item.price_at_time or item.rate, # Fallback for older retail records
# # #                 "tax_rate": item.tax_rate,
# # #                 "tax_amount": item.tax_amount,
# # #                 "total_amount": item.total_amount
# # #             } for item in invoice.items
# # #         ]
# # #     }


# # ##changed inovice page
# # # @app.get("/api/invoices/{invoice_id}")
# # # def get_invoice_detail(
# # #     invoice_id: int,
# # #     db: Session = Depends(get_db),
# # #     current_store: StoreDB = Depends(get_current_store)
# # # ):
# # #     # Fetch invoice and eagerly load items to prevent N+1 query problems
# # #     invoice = db.query(InvoiceDB).options(joinedload(InvoiceDB.items)).filter(
# # #         InvoiceDB.id == invoice_id,
# # #         InvoiceDB.store_id == current_store.id
# # #     ).first()
    
# # #     if not invoice:
# # #         raise HTTPException(status_code=404, detail="Invoice not found")
        
# # #     customer = db.query(CustomerDB).filter(CustomerDB.id == invoice.customer_id).first()
    
# # #     return {
# # #         "store": {
# # #             "storeName": current_store.storeName,
# # #             "address": current_store.address or "",
# # #             "phone": current_store.phone or "",
# # #             "email": current_store.email or "",
# # #             "gstin": current_store.gstin or ""
# # #         },
# # #         "customer": {
# # #             "company_name": customer.company_name if customer else (invoice.customer_name or "Walk-in Customer"),
# # #             "billing_address": customer.billing_address if customer else "",
# # #             "gstin": customer.gstin if customer else "",
# # #             "place_of_supply": customer.place_of_supply if customer else "",
# # #             "phone": invoice.customer_phone or ""
# # #         },
# # #         "invoice": {
# # #             # "invoice_number": invoice.invoice_number or f"#{invoice.id:06d}",
# # #             "invoice_number": str(invoice.invoice_number) if invoice.invoice_number else f"#{invoice.id:06d}",
# # #             "issue_date": invoice.issue_date.isoformat() if invoice.issue_date else None,
# # #             "due_date": invoice.due_date.isoformat() if invoice.due_date else None,
# # #             "subtotal": float(invoice.subtotal or 0.0),
# # #             "tax_total": float(invoice.tax_total or 0.0),
# # #             "grand_total": float(invoice.grand_total or 0.0),
# # #             "notes": invoice.notes,
# # #             "terms_conditions": invoice.terms_conditions,
# # #             # Safely extract the Enum value whether it is a string or an Enum object
# # #             "status": invoice.status.value if hasattr(invoice.status, 'value') else str(invoice.status)
# # #         },
# # #         "items": [
# # #             {
# # #                 "name": item.name or "Item",
# # #                 "hsn_sac_code": item.hsn_sac_code or "-",
# # #                 "quantity": float(item.quantity or 1.0),
# # #                 # Safely fallback to price_at_time for legacy retail POS compatibility
# # #                 "rate": float(item.rate if item.rate is not None else (item.price_at_time or 0.0)), 
# # #                 "tax_rate": float(item.tax_rate or 0.0),
# # #                 "tax_amount": float(item.tax_amount or 0.0),
# # #                 "total_amount": float(item.total_amount or 0.0)
# # #             } for item in invoice.items
# # #         ]
# # #     }

# # from sqlalchemy.orm import joinedload

# # @app.get("/api/invoices/{invoice_id}")
# # def get_invoice_detail(
# #     invoice_id: int,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Eagerly load items to prevent N+1 queries
# #     invoice = db.query(InvoiceDB).options(joinedload(InvoiceDB.items)).filter(
# #         InvoiceDB.id == invoice_id,
# #         InvoiceDB.store_id == current_store.id
# #     ).first()
    
# #     if not invoice:
# #         raise HTTPException(status_code=404, detail="Invoice not found")
        
# #     customer = db.query(CustomerDB).filter(CustomerDB.id == invoice.customer_id).first()
    
# #     # Structure must perfectly match the React frontend expectations
# #     return {
# #         "store": {
# #             "storeName": current_store.storeName,
# #             "address": current_store.address or "",
# #             "phone": current_store.phone or "",
# #             "email": current_store.email or "",
# #             "gstin": current_store.gstin or ""
# #         },
# #         "customer": {
# #             "company_name": customer.company_name if customer else (invoice.customer_name or "Walk-in Client"),
# #             "billing_address": customer.billing_address if customer else "",
# #             "gstin": customer.gstin if customer else "",
# #             "place_of_supply": customer.place_of_supply if customer else "",
# #             "phone": invoice.customer_phone or ""
# #         },
# #         "invoice": {
# #             "invoice_number": str(invoice.invoice_number) if invoice.invoice_number else f"#{invoice.id:06d}",
# #             "issue_date": invoice.issue_date.isoformat() if invoice.issue_date else None,
# #             "due_date": invoice.due_date.isoformat() if invoice.due_date else None,
# #             "subtotal": float(invoice.subtotal or 0.0),
# #             "tax_total": float(invoice.tax_total or 0.0),
# #             "grand_total": float(invoice.grand_total or 0.0),
# #             "amount_paid": float(invoice.amount_paid or 0.0),
# #             "balance_due": float(invoice.balance_due if invoice.balance_due is not None else (invoice.grand_total or 0.0)),
# #             "notes": invoice.notes,
# #             "terms_conditions": invoice.terms_conditions,
# #             "status": invoice.status.value if hasattr(invoice.status, 'value') else str(invoice.status),
# #             "template_id": invoice.template_id or "classic",
# #             "theme_color": invoice.theme_color or "#4f46e5"
# #         },
# #         "items": [
# #             {
# #                 "name": item.name or "Unknown Product",
# #                 "hsn_sac_code": item.hsn_sac_code or "-",
# #                 "quantity": float(item.quantity or 1.0),
# #                 "rate": float(item.rate if item.rate is not None else (item.price_at_time or 0.0)), 
# #                 "tax_rate": float(item.tax_rate or 0.0),
# #                 "tax_amount": float(item.tax_amount or 0.0),
# #                 "total_amount": float(item.total_amount or 0.0)
# #             } for item in invoice.items
# #         ]
# #     }

# # @app.get("/api/quotations/{quotation_id}")
# # def get_quotation_detail(
# #     quotation_id: int,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Eagerly load items to prevent N+1 queries
# #     quotation = db.query(QuotationDB).options(joinedload(QuotationDB.items)).filter(
# #         QuotationDB.id == quotation_id,
# #         QuotationDB.store_id == current_store.id
# #     ).first()
    
# #     if not quotation:
# #         raise HTTPException(status_code=404, detail="Quotation not found")
        
# #     customer = db.query(CustomerDB).filter(CustomerDB.id == quotation.customer_id).first()
    
# #     return {
# #         "store": {
# #             "storeName": current_store.storeName,
# #             "address": current_store.address or "",
# #             "phone": current_store.phone or "",
# #             "email": current_store.email or "",
# #             "gstin": current_store.gstin or "",
# #             "logo": quotation.store_logo or ""
# #         },
# #         "customer": {
# #             "company_name": customer.company_name if customer else "Unknown Client",
# #             "billing_address": customer.billing_address if customer else "",
# #             "gstin": customer.gstin if customer else "",
# #             "place_of_supply": customer.place_of_supply if customer else "",
# #             "phone": customer.phone if customer else ""
# #         },
# #         "quotation": {
# #             "quotation_number": str(quotation.quotation_number) if quotation.quotation_number else f"QT-{quotation.id:06d}",
# #             "issue_date": quotation.issue_date.isoformat() if quotation.issue_date else None,
# #             "valid_until": quotation.valid_until.isoformat() if quotation.valid_until else None,
# #             "subtotal": float(quotation.subtotal or 0.0),
# #             "tax_total": float(quotation.tax_total or 0.0),
# #             "grand_total": float(quotation.grand_total or 0.0),
# #             "notes": quotation.notes,
# #             "terms_conditions": quotation.terms_conditions,
# #             "status": quotation.status.value if hasattr(quotation.status, 'value') else str(quotation.status)
# #         },
# #         "items": [
# #             {
# #                 "name": item.name or "Unknown Product",
# #                 "hsn_sac_code": item.hsn_sac_code or "-",
# #                 "quantity": float(item.quantity or 1.0),
# #                 "rate": float(item.rate or 0.0), 
# #                 "tax_rate": float(item.tax_rate or 0.0),
# #                 "tax_amount": float(item.tax_amount or 0.0),
# #                 "total_amount": float(item.total_amount or 0.0)
# #             } for item in quotation.items
# #         ]
# #     }



# # # ==========================================
# # # MACHINE LEARNING MODEL INITIALIZATION
# # # ==========================================
# # # Attempt to load the model into memory at startup
# # try:
# #     with open("xgboost_retail_model.pkl", "rb") as f:
# #         sales_model = pickle.load(f)
# #         print("XGBoost model loaded successfully.")
# # except FileNotFoundError:
# #     sales_model = None
# #     print("Warning: sales_model.pkl not found. Forecast endpoint will return mock/empty data.")

# # # ==========================================
# # # FORECAST ENDPOINT
# # # ==========================================
# # @app.get("/api/forecast")
# # def get_sales_forecast(
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     if sales_model is None:
# #         raise HTTPException(status_code=503, detail="Forecast model is unavailable.")

# #     # 1. Pull historical sales aggregated by day for the store
# #     historical_sales = db.query(
# #         func.date(InvoiceDB.issue_date).label("date"),
# #         func.sum(InvoiceDB.grand_total).label("daily_total")
# #     ).filter(
# #         InvoiceDB.store_id == current_store.id
# #     ).group_by(
# #         func.date(InvoiceDB.issue_date)
# #     ).order_by(
# #         func.date(InvoiceDB.issue_date).asc()
# #     ).all()

# #     if not historical_sales:
# #         return {"historical": [], "forecast": []}

# #     # 2. Convert to Pandas DataFrame
# #     df = pd.DataFrame(historical_sales, columns=["date", "daily_total"])
# #     df['date'] = pd.to_datetime(df['date'])
# #     df['daily_total'] = df['daily_total'].astype(float)

# #     # Ensure a continuous date range (fill missing days with 0 sales if necessary)
# #     df = df.set_index('date').resample('D').asfreq().fillna(0).reset_index()

# #     # 3. Generate the exact feature matrix matching the expected columns:
# #     # ['month', 'year', 'quarter', 'lag_1', 'lag_2', 'lag_3', 'rolling_mean_3', 'rolling_std_3']
# #     df['month'] = df['date'].dt.month
# #     df['year'] = df['date'].dt.year
# #     df['quarter'] = df['date'].dt.quarter
    
# #     # Create lag features
# #     df['lag_1'] = df['daily_total'].shift(1)
# #     df['lag_2'] = df['daily_total'].shift(2)
# #     df['lag_3'] = df['daily_total'].shift(3)
    
# #     # Create rolling statistics (window = 3)
# #     df['rolling_mean_3'] = df['daily_total'].rolling(window=3).mean()
# #     df['rolling_std_3'] = df['daily_total'].rolling(window=3).std()

# #     # Drop rows with NaN values created by shifts/rolling windows
# #     df_clean = df.dropna().copy()

# #     if df_clean.empty:
# #         raise HTTPException(
# #             status_code=400, 
# #             detail="Not enough historical invoice data to generate lag features. You need at least 4 days of sales."
# #         )

# #     # 4. Define feature columns strictly matching model expectations
# #     features = ['month', 'year', 'quarter', 'lag_1', 'lag_2', 'lag_3', 'rolling_mean_3', 'rolling_std_3']
    
# #     try:
# #         X = df_clean[features]
# #         predictions = sales_model.predict(X)
# #         df_clean['predicted_sales'] = predictions
# #     except Exception as e:
# #         raise HTTPException(status_code=500, detail=f"Inference execution failed: {str(e)}")

# #     # 5. Format payload for frontend charting
# #     historical_payload = []
# #     forecast_payload = []

# #     for _, row in df_clean.iterrows():
# #         historical_payload.append({
# #             "date": row['date'].strftime("%Y-%m-%d"),
# #             "actual_sales": float(row['daily_total'])
# #         })
# #         forecast_payload.append({
# #             "date": row['date'].strftime("%Y-%m-%d"),
# #             "predicted_sales": float(row['predicted_sales'])
# #         })

# #     return {
# #         "historical": historical_payload,
# #         "forecast": forecast_payload
# #     }


# # @app.get("/api/forecast/restock")
# # def get_restock_suggestions(
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Aggregate total quantity sold per product to find high-velocity items
# #     popular_items = db.query(
# #         InvoiceItemDB.name,
# #         func.sum(InvoiceItemDB.quantity).label("total_sold")
# #     ).join(InvoiceDB, InvoiceItemDB.invoice_id == InvoiceDB.id).filter(
# #         InvoiceDB.store_id == current_store.id
# #     ).group_by(
# #         InvoiceItemDB.name
# #     ).order_by(desc("total_sold")).limit(3).all()

# #     if not popular_items:
# #         return []

# #     suggestions = []
# #     for idx, item in enumerate(popular_items):
# #         suggestions.append({
# #             "id": idx + 1,
# #             "name": item.name,
# #             "status": "Low Stock" if idx < 2 else "Stock running low",
# #             "statusColor": "bg-red-100 text-red-600" if idx < 2 else "bg-amber-100 text-amber-700",
# #             "urgencyColor": "bg-red-50 border-red-200 text-red-700" if idx < 2 else "bg-amber-50 border-amber-200 text-amber-700",
# #             "days": idx + 3,
# #             "current": 6,
# #             "desc": f"Reorder {item.name} likely to run out soon based on velocity",
# #             "iconColor": "bg-orange-100"
# #         })
# #     return suggestions


# # @app.get("/api/forecast/cross-sell")
# # def get_cross_sell_patterns(
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Fetch distinct line item pairs appearing in the same invoices
# #     invoices = db.query(InvoiceDB).filter(InvoiceDB.store_id == current_store.id).all()
    
# #     pairs = {}
# #     for inv in invoices:
# #         names = [item.name for item in inv.items if item.name]
# #         for i in range(len(names)):
# #             for j in range(i + 1, len(names)):
# #                 pair = tuple(sorted([names[i], names[j]]))
# #                 pairs[pair] = pairs.get(pair, 0) + 1

# #     if not pairs:
# #         return []

# #     sorted_pairs = sorted(pairs.items(), key=lambda x: x[1], reverse=True)
    
# #     cross_sells = []
# #     for idx, (pair, count) in enumerate(sorted_pairs[:3]):
# #         cross_sells.append({
# #             "id": idx + 1,
# #             "item1": pair[0],
# #             "item2": pair[1],
# #             "pct": f"{min(60 + (count * 10), 95)}%",
# #             "c1": "bg-yellow-100",
# #             "c2": "bg-red-100"
# #         })
# #     return cross_sells


# # # --- SQLAlchemy Models (Add to models.py or main.py) ---
# # class SupplierDB(Base):
# #     __tablename__ = "suppliers"
# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"))
# #     name = Column(String, nullable=False)
# #     contact_person = Column(String)
# #     phone = Column(String)
# #     products_supplied = Column(String) # Comma-separated or string list representation

# # class PurchaseOrderDB(Base):
# #     __tablename__ = "purchase_orders"
# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"))
# #     supplier_name = Column(String)
# #     contact_person = Column(String)
# #     phone = Column(String)
# #     expected_date = Column(String)
# #     notes = Column(String)
# #     subtotal = Column(Float, default=0.0)
# #     tax_total = Column(Float, default=0.0)
# #     discount_total = Column(Float, default=0.0)
# #     grand_total = Column(Float, default=0.0)
# #     items = relationship("PurchaseOrderItemDB", cascade="all, delete-orphan")

# # class PurchaseOrderItemDB(Base):
# #     __tablename__ = "purchase_order_items"
# #     id = Column(Integer, primary_key=True, index=True)
# #     po_id = Column(Integer, ForeignKey("purchase_orders.id"))
# #     name = Column(String)
# #     unit = Column(String)
# #     stock = Column(Float)
# #     price = Column(Float)
# #     qty = Column(Float)
# #     amount = Column(Float)


# # # --- FastAPI Endpoints ---

# # @app.get("/api/suppliers")
# # def get_suppliers(db: Session = Depends(get_db), current_store: StoreDB = Depends(get_current_store)):
# #     suppliers = db.query(SupplierDB).filter(SupplierDB.store_id == current_store.id).all()
# #     if not suppliers:
# #         # Seed default demo suppliers if empty for instant usability
# #         defaults = [
# #             SupplierDB(store_id=current_store.id, name="Rajesh Beverages Pvt.Ltd.", contact_person="Rajesh Kumar", phone="+91 11566788009", products_supplied="Soft Drinks, Juices, Water"),
# #             SupplierDB(store_id=current_store.id, name="Shiv Distributors", contact_person="Suresh Yadav", phone="+91 55555788009", products_supplied="Atta, Rice, Pulses"),
# #             SupplierDB(store_id=current_store.id, name="Good Morning Dairy", contact_person="Meena Patel", phone="+91 1152288009", products_supplied="Milk, Curd, Paneer, Butter")
# #         ]
# #         db.add_all(defaults)
# #         db.commit()
# #         suppliers = db.query(SupplierDB).filter(SupplierDB.store_id == current_store.id).all()
        
# #     return [
# #         {
# #             "id": s.id,
# #             "name": s.name,
# #             "contact": s.contact_person,
# #             "phone": s.phone,
# #             "products": s.products_supplied.split(", ") if s.products_supplied else [],
# #             "initial": "".join([n[0] for n in s.name.split()[:2]]).upper(),
# #             "bg": "bg-blue-100 text-blue-600"
# #         } for s in suppliers
# #     ]

# # @app.post("/api/purchase-orders")
# # def create_purchase_order(
# #     po_data: dict,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     new_po = PurchaseOrderDB(
# #         store_id=current_store.id,
# #         supplier_name=po_data.get("supplier_name"),
# #         contact_person=po_data.get("contact_person"),
# #         phone=po_data.get("phone"),
# #         expected_date=po_data.get("expected_date"),
# #         notes=po_data.get("notes"),
# #         subtotal=po_data.get("subtotal", 0.0),
# #         tax_total=po_data.get("tax_total", 0.0),
# #         discount_total=po_data.get("discount_total", 0.0),
# #         grand_total=po_data.get("grand_total", 0.0)
# #     )
# #     db.add(new_po)
# #     db.flush()

# #     for item in po_data.get("items", []):
# #         db.add(PurchaseOrderItemDB(
# #             po_id=new_po.id,
# #             name=item.get("name"),
# #             unit=item.get("unit"),
# #             stock=item.get("stock", 0),
# #             price=item.get("price", 0.0),
# #             qty=item.get("qty", 1),
# #             amount=item.get("amount", 0.0)
# #         ))

# #     db.commit()
# #     return {"message": "Purchase order created successfully", "po_id": new_po.id}



# # # 1. Add the Expense Model
# # # class ExpenseDB(Base):
# # #     __tablename__ = "expenses"
# # #     id = Column(Integer, primary_key=True, index=True)
# # #     store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
# # #     vendor_name = Column(String, nullable=False)
# # #     category = Column(String, nullable=False)
# # #     amount = Column(Float, nullable=False)
# # #     expense_date = Column(DateTime, default=func.now())
# # #     payment_method = Column(String)
# # #     reference_number = Column(String)
# # #     notes = Column(String)

# # # class ExpenseDB(Base):
# # #     __tablename__ = "expenses"
# # #     id = Column(Integer, primary_key=True, index=True)
# # #     store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
# # #     expense_number = Column(String, nullable=False)
# # #     vendor_name = Column(String, nullable=False)
# # #     purchase_date = Column(DateTime, default=func.now())
# # #     due_date = Column(DateTime, nullable=True)
# # #     subtotal = Column(Float, default=0.0)
# # #     tax_total = Column(Float, default=0.0)
# # #     grand_total = Column(Float, default=0.0)
# # #     payment_method = Column(String, default="Bank Transfer")
# # #     notes = Column(String)
    
# # #     # Establish relationship to items
# # #     items = relationship("ExpenseItemDB", back_populates="expense", cascade="all, delete-orphan")

# # # class ExpenseItemDB(Base):
# # #     __tablename__ = "expense_items"
# # #     id = Column(Integer, primary_key=True, index=True)
# # #     expense_id = Column(Integer, ForeignKey("expenses.id"), nullable=False)
# # #     name = Column(String, nullable=False)
# # #     hsn_sac_code = Column(String)
# # #     quantity = Column(Float, default=1.0)
# # #     rate = Column(Float, default=0.0)
# # #     tax_rate = Column(Float, default=0.0)
# # #     total_amount = Column(Float, default=0.0)

# # #     expense = relationship("ExpenseDB", back_populates="items")





# # # 2. Add the Endpoints
# # # @app.get("/api/expenses")
# # # def get_expenses(db: Session = Depends(get_db), current_store: dict = Depends(get_current_store)):
# # #     expenses = db.query(ExpenseDB).filter(ExpenseDB.store_id == current_store.id).order_by(ExpenseDB.purchase_date.desc()).all()
    
# # #     return [
# # #         {
# # #             "id": exp.id,
# # #             "vendor_name": exp.vendor_name,
# # #             "category": exp.category,
# # #             "amount": exp.amount,
# # #             "date": exp.expense_date.isoformat() if exp.expense_date else None,
# # #             "payment_method": exp.payment_method,
# # #             "reference_number": exp.reference_number,
# # #             "notes": exp.notes
# # #         } for exp in expenses
# # #     ]

# # # @app.post("/api/expenses")
# # # def create_expense(
# # #     expense_data: dict,
# # #     db: Session = Depends(get_db),
# # #     current_store: dict = Depends(get_current_store)
# # # ):
    
    
# # #     new_expense = ExpenseDB(
# # #         store_id=current_store.id,
# # #         expense_number=payload.get("expense_number", f"EXP-{int(datetime.now().timestamp())}"),
# # #         vendor_name=expense_data.get("vendor_name", "Unknown Vendor"),
# # #         category=expense_data.get("category", "Uncategorized"),
# # #         amount=float(expense_data.get("amount", 0.0)),
# # #         expense_date=datetime.fromisoformat(expense_data.get("date")) if expense_data.get("date") else func.now(),
# # #         payment_method=expense_data.get("payment_method", "Bank Transfer"),
# # #         reference_number=expense_data.get("reference_number", ""),
# # #         notes=expense_data.get("notes", "")
# # #     )
    
# # #     db.add(new_expense)
# # #     db.commit()
# # #     return {"message": "Expense recorded successfully", "expense_id": new_expense.id}


# # @app.get("/api/expenses" , dependencies=[Depends(require_tier("ENTERPRISE"))])
# # def get_expenses(
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     expenses = db.query(ExpenseDB)\
# #         .filter(ExpenseDB.store_id == current_store.id)\
# #         .order_by(ExpenseDB.purchase_date.desc())\
# #         .all()
        
# #     # Return clean mapped representation matching your database columns
# #     return [
# #         {
# #             "id": exp.id,
# #             "expense_number": exp.expense_number,
# #             "invoice_number": exp.invoice_number,
# #             "po_number": exp.po_number,
# #             "purchase_date": exp.purchase_date,
# #             "due_date": exp.due_date,
# #             "document_title": exp.document_title,
# #             "subtitle": exp.subtitle,
# #             "vendor_name": exp.vendor_name,
# #             "subtotal": exp.subtotal,
# #             "tax_total": exp.tax_total,
# #             "cgst_total": exp.cgst_total,
# #             "sgst_total": exp.sgst_total,
# #             "grand_total": exp.grand_total,
# #             "is_recurring": exp.is_recurring,
# #             "recurring_cycle": exp.recurring_cycle,
# #             "items": [
# #                 {
# #                     "name": item.name,
# #                     "hsn": item.hsn,
# #                     "gst_rate": item.gst_rate,
# #                     "qty": item.qty,
# #                     "rate": item.rate,
# #                     "amount": item.amount,
# #                     "cgst": item.cgst,
# #                     "sgst": item.sgst,
# #                     "total": item.total,
# #                     "description": item.description
# #                 } for item in exp.items
# #             ]
# #         }
# #         for exp in expenses
# #     ]

# # class ExpenseItemSchema(BaseModel):
# #     name: str
# #     hsn: Optional[str] = ""
# #     gst_rate: Optional[float] = 18.0
# #     qty: Optional[float] = 1.0
# #     rate: Optional[float] = 0.0
# #     amount: Optional[float] = 0.0
# #     cgst: Optional[float] = 0.0
# #     sgst: Optional[float] = 0.0
# #     total: Optional[float] = 0.0
# #     description: Optional[str] = ""

# # class ExpenseCreateSchema(BaseModel):
# #     expense_number: str
# #     invoice_number: Optional[str] = ""
# #     po_number: Optional[str] = ""
# #     purchase_date: datetime
# #     due_date: Optional[datetime] = None
# #     document_title: Optional[str] = "Expense"
# #     subtitle: Optional[str] = ""
# #     vendor_id: Optional[int] = None
# #     vendor_name: Optional[str] = "Unknown Vendor"
# #     subtotal: float
# #     tax_total: float
# #     cgst_total: Optional[float] = 0.0
# #     sgst_total: Optional[float] = 0.0
# #     grand_total: float
# #     payment_method: Optional[str] = "Bank Transfer"
# #     notes: Optional[str] = ""
# #     items: List[ExpenseItemSchema]
# #     is_recurring: Optional[bool] = False
# #     recurring_cycle: Optional[str] = None






# # # @app.post("/api/expenses")
# # # def create_expense(
# # #     payload: dict,
# # #     db: Session = Depends(get_db),
# # #     current_store: dict = Depends(get_current_store)
# # # ):
# # #     # 1. Create the main document
# # #     new_expense = ExpenseDB(
# # #         store_id=current_store.id,
# # #         expense_number=payload.get("expense_number", f"EXP-{int(datetime.now().timestamp())}"),
# # #         vendor_name=payload.get("vendor_name", "Unknown Vendor"),
# # #         purchase_date=datetime.fromisoformat(payload.get("purchase_date")) if payload.get("purchase_date") else func.now(),
# # #         subtotal=float(payload.get("subtotal", 0.0)),
# # #         tax_total=float(payload.get("tax_total", 0.0)),
# # #         grand_total=float(payload.get("grand_total", 0.0)),
# # #         notes=payload.get("notes", "")
# # #     )
    
# # #     db.add(new_expense)
# # #     db.flush() # Flush to assign new_expense.id

# # #     # 2. Create the associated line items
# # #     items_data = payload.get("items", [])
# # #     # for item in items_data:
# # #     #     new_item = ExpenseItemDB(
# # #     #         expense_id=new_expense.id,
# # #     #         name=item.get("name", "Item"),
# # #     #         hsn_sac_code=item.get("hsn", ""),
# # #     #         quantity=float(item.get("qty", 1.0)),
# # #     #         rate=float(item.get("rate", 0.0)),
# # #     #         tax_rate=float(item.get("gst", 0.0)),
# # #     #         total_amount=float(item.get("total", 0.0))
# # #     #     )
# # #     #     db.add(new_item)

# # #     # db.commit()

# # #     for item in payload.items:
# # #             # Handle both dictionary access or Pydantic attribute access safely
# # #             item_data = item.dict() if hasattr(item, 'dict') else item
            
# # #             db_item = ExpenseItemDB(
# # #                 expense_id=db_expense.id,
# # #                 name=item_data.get("name") or "Unnamed Expense",
# # #                 hsn=item_data.get("hsn") or item_data.get("hsn_sac_code") or "",
# # #                 gst_rate=float(item_data.get("gst_rate", 18.0)),
# # #                 qty=float(item_data.get("qty", 1.0)),
# # #                 rate=float(item_data.get("rate", 0.0)),
# # #                 amount=float(item_data.get("amount", 0.0)),
# # #                 cgst=float(item_data.get("cgst", 0.0)),
# # #                 sgst=float(item_data.get("sgst", 0.0)),
# # #                 total=float(item_data.get("total", 0.0)),
# # #                 description=item_data.get("description", "")
# # #             )
# # #             db.add(db_item)

# # #     db.commit()
# # #     return {"message": "Expense recorded successfully", "expense_id": new_expense.id}


# # @app.post("/api/expenses" , dependencies=[Depends(require_tier("ENTERPRISE"))])
# # def create_expense(
# #     expense_data: ExpenseCreateSchema,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     try:
# #         # 1. Create Main Expense Record
# #         db_expense = ExpenseDB(
# #             store_id=current_store.id,
# #             expense_number=expense_data.expense_number,
# #             invoice_number=expense_data.invoice_number,
# #             po_number=expense_data.po_number,
# #             purchase_date=expense_data.purchase_date,
# #             due_date=expense_data.due_date,
# #             document_title=expense_data.document_title,
# #             subtitle=expense_data.subtitle,
# #             vendor_id=expense_data.vendor_id,
# #             subtotal=expense_data.subtotal,
# #             tax_total=expense_data.tax_total,
# #             cgst_total=expense_data.cgst_total,
# #             sgst_total=expense_data.sgst_total,
# #             grand_total=expense_data.grand_total,
# #             is_recurring=1 if expense_data.is_recurring else 0,
# #             recurring_cycle=expense_data.recurring_cycle
# #         )
        
# #         db.add(db_expense)
# #         db.flush() # Flushes to generate db_expense.id

# #         # 2. Iterate safely over the list of items
# #         item_list = expense_data.items if isinstance(expense_data.items, list) else []

# #         for item in item_list:
# #             db_item = ExpenseItemDB(
# #                 expense_id=db_expense.id,
# #                 name=item.name or "Unnamed Item",
# #                 hsn=item.hsn or "",
# #                 gst_rate=float(item.gst_rate or 0.0),
# #                 qty=float(item.qty or 1.0),
# #                 rate=float(item.rate or 0.0),
# #                 amount=float(item.amount or 0.0),
# #                 cgst=float(item.cgst or 0.0),
# #                 sgst=float(item.sgst or 0.0),
# #                 total=float(item.total or 0.0),
# #                 description=item.description or ""
# #             )
# #             db.add(db_item)

# #         db.commit()
# #         db.refresh(db_expense)
        
# #         return {"message": "Expense created successfully", "expense_id": db_expense.id}

# #     except Exception as e:
# #         db.rollback()
# #         raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

# # @app.get("/api/public/invoices/{token}")
# # def get_public_invoice(token: str, db: Session = Depends(get_db)):
# #     # Notice we removed the `current_store` dependency so external clients can access it
# #     invoice = db.query(InvoiceDB).filter(InvoiceDB.public_token == token).first()
    
# #     if not invoice:
# #         raise HTTPException(status_code=404, detail="Invoice not found or link expired")
        
# #     # Fetch related data
# #     store = db.query(StoreDB).filter(StoreDB.id == invoice.store_id).first()
    
# #     # Fetch items
# #     items = db.query(InvoiceItemDB).filter(InvoiceItemDB.invoice_id == invoice.id).all()
    
# #     # Do not return sensitive internal data, only what the client needs to see
# #     return {
# #         "store": {
# #             "storeName": store.storeName,
# #             "address": store.address,
# #             "phone": store.phone,
# #             "email": store.email,
# #             "gstin": store.gstin
# #         },
# #         "invoice": {
# #             "invoice_number": invoice.invoice_number,
# #             "issue_date": invoice.issue_date,
# #             "due_date": invoice.due_date,
# #             "subtotal": invoice.subtotal,
# #             "tax_total": invoice.tax_total,
# #             "grand_total": invoice.grand_total,
# #             "amount_paid": invoice.amount_paid,
# #             "balance_due": invoice.balance_due,
# #             "status": invoice.status,
# #             "notes": invoice.notes,
# #             "terms_conditions": invoice.terms_conditions,
# #             "template_id": invoice.template_id or "classic",
# #             "theme_color": invoice.theme_color or "#4f46e5"
# #         },
# #         "customer": {
# #             "company_name": invoice.customer_name,
# #             # include other customer details saved on the invoice if available
# #         },
# #         "items": [
# #             {
# #                 "name": item.name,
# #                 "quantity": item.quantity,
# #                 "rate": item.rate,
# #                 "tax_rate": item.tax_rate,
# #                 "hsn_sac_code": getattr(item, "hsn_sac_code", "")
# #             } for item in items
# #         ]
# #     }

# # @app.post("/api/quotations/{quotation_id}/convert-to-invoice")
# # def convert_quotation_to_invoice(
# #     quotation_id: int,
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     # 1. Fetch the Quotation
# #     quotation = db.query(QuotationDB).filter(
# #         QuotationDB.id == quotation_id,
# #         QuotationDB.store_id == current_store.id
# #     ).first()
    
# #     if not quotation:
# #         raise HTTPException(status_code=404, detail="Quotation not found")
        
# #     if quotation.status == "INVOICED":
# #         raise HTTPException(status_code=400, detail="This quotation has already been converted to an invoice.")

# #     # 2. Create the New Invoice
# #     new_invoice = InvoiceDB(
# #         store_id=current_store.id,
# #         customer_name=quotation.customer_name,
# #         customer_phone=quotation.customer_phone,
# #         quotation_id=quotation.id, # Relational link back to the quote
# #         invoice_number=f"INV-{quotation.quotation_number.split('-')[-1] if quotation.quotation_number else quotation.id}",
# #         issue_date=func.now(),
# #         subtotal=quotation.subtotal,
# #         discount_total=quotation.discount_total,
# #         tax_total=quotation.tax_total,
# #         grand_total=quotation.grand_total,
# #         amount_paid=0.0,
# #         balance_due=quotation.grand_total,
# #         status=InvoiceStatus.UNPAID,
# #         public_token=uuid.uuid4().hex,
# #         notes=quotation.notes,
# #         terms_conditions=quotation.terms_conditions
# #     )
    
# #     db.add(new_invoice)
# #     db.flush() # Flush to get the new invoice.id

# #     # 3. Copy all Line Items
# #     quotation_items = db.query(QuotationItemDB).filter(QuotationItemDB.quotation_id == quotation.id).all()
    
# #     for q_item in quotation_items:
# #         new_inv_item = InvoiceItemDB(
# #             invoice_id=new_invoice.id,
# #             product_id=q_item.product_id,
# #             name=q_item.name,
# #             quantity=q_item.quantity,
# #             rate=q_item.rate,
# #             tax_rate=q_item.tax_rate,
# #             hsn_sac_code=getattr(q_item, 'hsn_sac_code', ''),
# #             total_amount=q_item.total_amount
# #         )
# #         db.add(new_inv_item)

# #     # 4. Update Quotation Status
# #     quotation.status = "INVOICED"
    
# #     db.commit()
    
# #     return {
# #         "message": "Quotation successfully converted to Invoice",
# #         "invoice_id": new_invoice.id
# #     }



# # class LeadDB(Base):
# #     __tablename__ = "leads"
# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
# #     contact_name = Column(String, nullable=False)
# #     company_name = Column(String)
# #     email = Column(String)
# #     phone = Column(String)
# #     estimated_value = Column(Float, default=0.0)
# #     stage = Column(String, default="LEAD") # LEAD, CONTACTED, PROPOSAL, WON, LOST
# #     notes = Column(String)
# #     created_at = Column(DateTime, default=func.now())


# # @app.post("/api/leads")
# # def create_lead(
# #     lead_data: dict,
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     new_lead = LeadDB(
# #         store_id=current_store.id,
# #         contact_name=lead_data.get("contact_name"),
# #         company_name=lead_data.get("company_name", ""),
# #         email=lead_data.get("email", ""),
# #         phone=lead_data.get("phone", ""),
# #         estimated_value=float(lead_data.get("estimated_value", 0.0)),
# #         stage="LEAD",
# #         notes=lead_data.get("notes", "")
# #     )
# #     db.add(new_lead)
# #     db.commit()
# #     return {"message": "Lead captured successfully", "lead_id": new_lead.id}

# # @app.put("/api/leads/{lead_id}/stage")
# # def update_lead_stage(
# #     lead_id: int,
# #     stage_data: dict,
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     lead = db.query(LeadDB).filter(LeadDB.id == lead_id, LeadDB.store_id == current_store.id).first()
# #     if not lead:
# #         raise HTTPException(status_code=404, detail="Lead not found")
        
# #     lead.stage = stage_data.get("stage")
# #     db.commit()
# #     return {"message": f"Lead moved to {lead.stage}"}



# # @app.post("/api/invoices")
# # def create_invoice(
# #     payload: dict,
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     # 1. Safely parse the incoming JS ISO strings into Python datetime objects
# #     raw_issue = payload.get("issue_date")
# #     raw_due = payload.get("due_date")
    
# #     parsed_issue_date = datetime.fromisoformat(raw_issue.replace('Z', '+00:00')) if raw_issue else datetime.utcnow()
# #     parsed_due_date = datetime.fromisoformat(raw_due.replace('Z', '+00:00')) if raw_due else datetime.utcnow()

# #     # 2. Create the parent Invoice document
# #     new_invoice = InvoiceDB(
# #         store_id=current_store.id,
# #         invoice_number=payload.get("invoice_number"),
# #         customer_name=payload.get("customer_name", "Walk-in"),
# #         issue_date=parsed_issue_date,
# #         due_date=parsed_due_date,
# #         subtotal=float(payload.get("subtotal", 0.0)),
# #         tax_total=float(payload.get("tax_total", 0.0)),
# #         grand_total=float(payload.get("grand_total", 0.0)),
# #         status=payload.get("status", "UNPAID"),
# #         template_id=payload.get("template_id", "classic"),
# #         theme_color=payload.get("theme_color", "#4f46e5")
# #     )
    
# #     db.add(new_invoice)
# #     db.flush() # Flush to assign the primary key (new_invoice.id)

# #     # 3. Create and link the child Invoice Items
# #     items_data = payload.get("items", [])
# #     for item in items_data:
# #         db_item = InvoiceItemDB(
# #             invoice_id=new_invoice.id,
# #             name=item.get("name", "Unknown Item"),
# #             hsn_sac_code=item.get("hsn", ""),
# #             quantity=float(item.get("qty", 1.0)),
# #             rate=float(item.get("rate", 0.0)),
# #             tax_rate=float(item.get("gst", 0.0)),
# #             total_amount=float(item.get("total", 0.0))
# #         )
# #         db.add(db_item)

# #     # 4. Commit the transaction
# #     db.commit()
# #     return {"message": "Invoice created successfully", "invoice_id": new_invoice.id}

# # # ==========================================
# # # SUPERADMIN BOOTSTRAP (Use once, then delete)
# # # ==========================================
# # @app.post("/api/bootstrap-superadmin")
# # def make_me_superadmin(email: str, db: Session = Depends(get_db)):
# #     """
# #     Temporary endpoint to elevate your personal account.
# #     Pass your login email in the JSON body: {"email": "your@email.com"}
# #     """
# #     store = db.query(StoreDB).filter(StoreDB.email == email).first()
# #     if not store:
# #         return {"error": "Store not found"}
    
# #     store.is_superadmin = True
# #     db.commit()
# #     return {"message": f"{email} is now a Superadmin."}




# # @app.post("/api/expenses")
# # def create_expense(
# #     payload: ExpenseCreateSchema,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     try:
# #         # 1. Create Main Expense Record
# #         db_expense = ExpenseDB(
# #             store_id=current_store.id,
# #             expense_number=payload.expense_number,
# #             invoice_number=payload.invoice_number,
# #             po_number=payload.po_number,
# #             purchase_date=payload.purchase_date,
# #             due_date=payload.due_date,
# #             document_title=payload.document_title,
# #             subtitle=payload.subtitle,
# #             vendor_id=payload.vendor_id,
# #             vendor_name=payload.vendor_name,
# #             subtotal=payload.subtotal,
# #             tax_total=payload.tax_total,
# #             cgst_total=payload.cgst_total,
# #             sgst_total=payload.sgst_total,
# #             grand_total=payload.grand_total,
# #             payment_method=payload.payment_method,
# #             notes=payload.notes,
# #             is_recurring=1 if payload.is_recurring else 0,
# #             recurring_cycle=payload.recurring_cycle
# #         )
        
# #         db.add(db_expense)
# #         db.flush() # Flushes to generate the db_expense.id for child item relationships

# #         # 2. Create Child Line Items
# #         for item in payload.items:
# #             db_item = ExpenseItemDB(
# #                 expense_id=db_expense.id,
# #                 name=item.name or "Unnamed Item",
# #                 hsn=item.hsn,
# #                 gst_rate=item.gst_rate,
# #                 qty=item.qty,
# #                 rate=item.rate,
# #                 amount=item.amount,
# #                 cgst=item.cgst,
# #                 sgst=item.sgst,
# #                 total=item.total,
# #                 description=item.description
# #             )
# #             db.add(db_item)

# #         db.commit()
# #         db.refresh(db_expense)
        
# #         return {"message": "Expense created successfully", "expense_id": db_expense.id}

# #     except Exception as e:
# #         db.rollback()
# #         raise HTTPException(status_code=500, detail=f"Database commit error: {str(e)}")
    


# # @app.get("/api/vendors")
# # def get_vendors(
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Fetch vendors belonging to the active store
# #     vendors = db.query(VendorDB).filter(VendorDB.store_id == current_store.id).all()
    
# #     return [
# #         {
# #             "id": v.id,
# #             "name": v.name,
# #             "gstin": v.gstin,
# #             "address": v.address,
# #             "phone": v.phone,
# #             "email": v.email
# #         } 
# #         for v in vendors
# #     ]

# # class TenantStaffCreate(BaseModel):
# #     name: str
# #     email: str
# #     password: str
# #     tenant_role: str # MANAGER, CASHIER, INVENTORY

# # @app.get("/api/store/staff")
# # def get_store_staff(
# #     db: Session = Depends(get_db),
# #     current_user: StoreDB = Depends(get_current_store)
# # ):
# #     # Only the Store Admin (root account) can fetch this list
# #     if getattr(current_user, 'hq_role', 'TENANT') != 'TENANT':
# #         raise HTTPException(status_code=403, detail="Only store admins can view staff.")

# #     staff = db.query(TenantStaff).filter(TenantStaff.store_id == current_user.id).all()
# #     return [
# #         {
# #             "id": s.id,
# #             "name": s.name,
# #             "email": s.email,
# #             "tenant_role": s.tenant_role,
# #             "is_active": s.is_active
# #         } for s in staff
# #     ]

# # @app.post("/api/store/staff")
# # def create_store_staff(
# #     payload: TenantStaffCreate,
# #     db: Session = Depends(get_db),
# #     current_user: StoreDB = Depends(get_current_store)
# # ):
# #     # Security Check: Ensure only the root store admin is creating staff
# #     if getattr(current_user, 'hq_role', 'TENANT') != 'TENANT':
# #         raise HTTPException(status_code=403, detail="Only store admins can provision staff.")

# #     # Prevent email collisions across the entire platform
# #     existing_store = db.query(StoreDB).filter(StoreDB.email == payload.email).first()
# #     existing_staff = db.query(TenantStaff).filter(TenantStaff.email == payload.email).first()
# #     if existing_store or existing_staff:
# #         raise HTTPException(status_code=400, detail="Email is already registered.")

# #     hashed_pw = bcrypt.hashpw(payload.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

# #     new_staff = TenantStaff(
# #         store_id=current_user.id, # Bind strictly to the admin's store ID
# #         name=payload.name,
# #         email=payload.email,
# #         hashed_password=hashed_pw,
# #         tenant_role=payload.tenant_role
# #     )

# #     db.add(new_staff)
# #     db.commit()
# #     db.refresh(new_staff)

# #     return {"message": "Staff member provisioned successfully.", "id": new_staff.id}



# # # --- STEP 1: VERIFY CREDENTIALS & SEND OTP ---
# # @app.post("/api/auth/login/initiate")
# # def initiate_login(credentials: StoreLogin, db: Session = Depends(get_db)):
# #     user = None
# #     user_type = None

# #     # 1. Check Store Owners
# #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
# #     if store and verify_password(credentials.password, store.hashed_password):
# #         user = store
# #         user_type = "OWNER"
    
# #     # 2. Check HQ Staff (Superadmin)
# #     if not user:
# #         hq_staff = db.query(StaffUser).filter(StaffUser.email == credentials.email).first()
# #         if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
# #             user = hq_staff
# #             user_type = "HQ_STAFF"

# #     # 3. Check Tenant Staff (Employees)
# #     if not user:
# #         tenant_staff = db.query(TenantStaff).filter(TenantStaff.email == credentials.email).first()
# #         if tenant_staff and verify_password(credentials.password, tenant_staff.hashed_password):
# #             if not tenant_staff.is_active:
# #                 raise HTTPException(status_code=403, detail="Employee account is deactivated.")
# #             user = tenant_staff
# #             user_type = "TENANT_STAFF"

# #     if not user:
# #         raise HTTPException(status_code=401, detail="Invalid email or password")

# #     # Generate and Store OTP
# #     otp = generate_otp()
    
# #     # Store temporary session data needed to construct the JWT later
# #     OTP_STORE[credentials.email] = {
# #         "otp": otp,
# #         "expires_at": datetime.utcnow() + timedelta(minutes=5),
# #         "user_data": {
# #             "id": user.id,
# #             "email": user.email,
# #             "user_type": user_type,
# #             # Pass up specific attributes based on the user type
# #             "store_id": getattr(user, "store_id", user.id if user_type == "OWNER" else None),
# #             "role": getattr(user, "hq_role", getattr(user, "tenant_role", "OWNER")),
# #             # --- ADD THESE 3 NEW LINES ---
# #                 "subscription_status": getattr(store, 'subscription_status', 'TRIAL'),
# #                 "trial_ends_at": store.trial_ends_at.isoformat() if getattr(store, 'trial_ends_at', None) else None,
# #                 "tier": getattr(store, 'subscription_tier', 'BASIC')
# #         }
# #     }

# #     # Send Email
# #     send_otp_email(credentials.email, otp)
    
# #     # DEV ONLY: Print OTP to console to avoid actual email limits during testing
# #     print(f"--- DEVELOPMENT OTP FOR {credentials.email} IS {otp} ---")

# #     return {"message": "OTP sent successfully to email", "requires_otp": True}


# # # --- STEP 2: VERIFY OTP & ISSUE JWT ---
# # @app.post("/api/auth/login/verify")
# # def verify_login_otp(req: OTPVerifyRequest):
# #     session = OTP_STORE.get(req.email)

# #     if not session:
# #         raise HTTPException(status_code=400, detail="OTP session expired or invalid. Please login again.")
    
# #     if datetime.utcnow() > session["expires_at"]:
# #         del OTP_STORE[req.email]
# #         raise HTTPException(status_code=400, detail="OTP expired.")

# #     if session["otp"] != req.otp:
# #         raise HTTPException(status_code=401, detail="Incorrect OTP.")

# #     # OTP is valid! Construct JWT payload using the stored session data
# #     user_data = session["user_data"]
    
# #     token_payload = {
# #         "sub": str(user_data["id"]),
# #         "email": user_data["email"],
# #         "user_type": user_data["user_type"],
# #         "store_id": user_data["store_id"],
# #         "role": user_data["role"]
# #     }

# #     # Generate standard JWT (Assuming you have this function from your original setup)
# #     access_token = create_access_token(data=token_payload)

# #     # Clean up OTP store
# #     del OTP_STORE[req.email]

# #     return {
# #         "access_token": access_token,
# #         "token_type": "bearer",
# #         "user": user_data
# #     }



# # @app.post("/api/admin/fix-legacy-trials")
# # def fix_legacy_trials(db: Session = Depends(get_db)):
# #     """
# #     TEMPORARY SCRIPT: Run this once to fix old database entries.
# #     """
# #     stores = db.query(StoreDB).all()
# #     updated_count = 0
    
# #     for store in stores:
# #         # If they don't have a trial end date, give them 5 days starting NOW.
# #         if not store.trial_ends_at:
# #             store.trial_ends_at = datetime.now(timezone.utc) + timedelta(days=5)
# #             store.subscription_status = "TRIAL"
            
# #             # If they don't have a tier, default them to GROWTH
# #             if not store.subscription_tier:
# #                 store.subscription_tier = "GROWTH"
                
# #             updated_count += 1
            
# #     db.commit()
    
# #     return {"message": f"Successfully updated {updated_count} legacy stores with a 5-day trial."}



# # # 1. Define the Strict JSON Schema for the AI
# # class ReceiptItem(BaseModel):
# #     description: str
# #     quantity: float
# #     rate: float
# #     total: float

# # class ExtractedReceipt(BaseModel):
# #     vendor_name: str
# #     date: str
# #     subtotal: float
# #     tax_amount: float
# #     grand_total: float
# #     items: List[ReceiptItem]

# # # 2. Define the Endpoint
# # # @app.post("/api/ai/parse-receipt", response_model=ExtractedReceipt)
# # # async def parse_receipt(file: UploadFile = File(...)):
# # #     if not file.content_type.startswith("image/"):
# # #         raise HTTPException(status_code=400, detail="File must be an image")

# # #     try:
# # #         # Read the uploaded image into memory
# # #         image_bytes = await file.read()
# # #         image = Image.open(io.BytesIO(image_bytes))

# # #         # Initialize the Gemini Client (auto-detects GEMINI_API_KEY from env)
# # #         client = genai.Client()

# # #         # Build the prompt
# # #         prompt = """
# # #         Analyze this receipt image. It may be crumpled or poorly lit.
# # #         Extract the vendor name, date (YYYY-MM-DD), line items (with quantities and rates), subtotal, tax, and grand total.
# # #         If a value is obscured, use your best logical deduction.
# # #         Return exactly the requested JSON structure.
# # #         """

# # #         # Call Gemini 1.5 Flash with Structured Outputs
# # #         response = client.models.generate_content(
# # #             model='gemini-1.5-flash',
# # #             contents=[image, prompt],
# # #             config=types.GenerateContentConfig(
# # #                 response_mime_type="application/json",
# # #                 response_schema=ExtractedReceipt,
# # #                 temperature=0.1, # Low temperature forces factual extraction over creativity
# # #             ),
# # #         )

# # #         # Parse the AI string response directly into JSON
# # #         extracted_data = json.loads(response.text)
# # #         return extracted_data

# # #     except Exception as e:
# # #         print(f"Gemini AI Error: {e}")
# # #         raise HTTPException(status_code=500, detail="Failed to parse receipt using AI")


# # @app.post("/api/ai/parse-receipt", response_model=ExtractedReceipt)
# # async def parse_receipt(file: UploadFile = File(...)):
# #     if not file.content_type.startswith("image/"):
# #         raise HTTPException(status_code=400, detail="File must be an image")

# #     try:
# #         image_bytes = await file.read()
# #         image = Image.open(io.BytesIO(image_bytes))

# #         client = genai.Client()

# #         prompt = """
# #         Analyze this receipt image. It may be crumpled or poorly lit.
# #         Extract the vendor name, date (YYYY-MM-DD), line items (with quantities and rates), subtotal, tax, and grand total.
# #         If a value is obscured, use your best logical deduction.
# #         Return exactly the requested JSON structure.
# #         """

# #         # 1. Instantiate a stateful chat session to satisfy the SDK's AFC requirement
# #         chat = client.chats.create(
# #             model='gemini-3.6-flash', # 2. Bumped from 1.5 to 2.5 to fix the 404 Not Found
# #             config=types.GenerateContentConfig(
# #                 response_mime_type="application/json",
# #                 response_schema=ExtractedReceipt,
# #                 temperature=0.1,
# #             )
# #         )

# #         # 3. Send the image and prompt through the chat interface
# #         response = chat.send_message([image, prompt])

# #         extracted_data = json.loads(response.text)
# #         return extracted_data

# #     except Exception as e:
# #         print(f"Gemini AI Error: {e}")
# #         raise HTTPException(status_code=500, detail="Failed to parse receipt using AI")


# # # 1. Define Tier Weight Hierarchy
# # TIER_LEVELS = {
# #     "BASIC": 1,
# #     "GROWTH": 2,
# #     "ENTERPRISE": 3
# # }

# # # 2. Reusable FastAPI Dependency
# # def require_tier(required_tier: str):
# #     def dependency(current_user = Depends(get_current_store)):
# #         # SuperAdmin always bypasses restrictions
# #         if getattr(current_user, 'is_superadmin', False):
# #             return current_user

# #         user_tier = getattr(current_user, 'subscription_tier', 'BASIC')
        
# #         user_level = TIER_LEVELS.get(user_tier, 1)
# #         required_level = TIER_LEVELS.get(required_tier, 1)

# #         if user_level < required_level:
# #             raise HTTPException(
# #                 status_code=status.HTTP_403_FORBIDDEN,
# #                 detail=f"This feature requires the {required_tier} plan. Please upgrade your subscription."
# #             )
# #         return current_user
# #     return dependency


# # main.py
# import os
# from fastapi import FastAPI, HTTPException, Depends, status, APIRouter, UploadFile, File
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.security import OAuth2PasswordBearer
# from sqlalchemy.orm import Session, joinedload, relationship
# from jose import jwt, JWTError
# from datetime import datetime, timedelta, timezone
# from sqlalchemy import func, desc, distinct, extract,Column, Integer, String, Float, ForeignKey, DateTime
# from fastapi import Query
# from pydantic import BaseModel, Field
# import jwt
# import pickle
# import pandas as pd
# import uuid
# from routes import hq
# from routes import subscriptions
# from typing import List, Optional
# import bcrypt
# import random
# import smtplib
# from email.mime.text import MIMEText
# from email.mime.multipart import MIMEMultipart
# from auth_utils import OTP_STORE, generate_otp, send_otp_email

# from auth import verify_password, create_access_token

# from google import genai
# from google.genai import types
# from PIL import Image
# import io
# import json



# import models
# from database import engine, get_db, Base
# from models import StoreRegistration, StoreLogin, StoreSettings, TokenResponse, StoreDB, ExpenseDB, ExpenseItemDB, VendorDB, StaffUser, TenantStaff, OTPVerifyRequest
# # from auth import get_password_hash, verify_password, create_access_token, SECRET_KEY, ALGORITHM
# from auth import get_password_hash, verify_password, create_access_token, get_current_store, SECRET_KEY, ALGORITHM
# from models import SetupWizardData
# from models import ProductDB, ProductCreate, ProductResponse, InvoiceDB, InvoiceItemDB, InvoiceCreate,InvoiceStatus
# from models import ProductDB
# from models import (
#     CustomerDB, CustomerCreate, CustomerResponse,
#     QuotationDB, QuotationItemDB, QuotationCreate, DocumentStatus
# )
# from dependencies import get_current_store

# # =================================================================
# # --- SUBSCRIPTION TIER ENFORCEMENT ENGINE ---
# # Must be defined here so routes below can utilize it in decorators
# # =================================================================

# # 1. Define Tier Weight Hierarchy
# # TIER_LEVELS = {
# #     "BASIC": 1,
# #     "GROWTH": 2,
# #     "ENTERPRISE": 3
# # }

# # # 2. Reusable FastAPI Dependency
# # def require_tier(required_tier: str):
# #     def dependency(current_user = Depends(get_current_store)):
# #         # SuperAdmin always bypasses restrictions
# #         if getattr(current_user, 'is_superadmin', False):
# #             return current_user

# #         user_tier = getattr(current_user, 'subscription_tier', 'BASIC')
        
# #         user_level = TIER_LEVELS.get(user_tier, 1)
# #         required_level = TIER_LEVELS.get(required_tier, 1)

# #         if user_level < required_level:
# #             raise HTTPException(
# #                 status_code=status.HTTP_403_FORBIDDEN,
# #                 detail=f"This feature requires the {required_tier} plan. Please upgrade your subscription."
# #             )
# #         return current_user
# #     return dependency


# # 1. Define Tier Weight Hierarchy
# TIER_LEVELS = {
#     "BASIC": 1,
#     "GROWTH": 2,
#     "ENTERPRISE": 3
# }

# # 2. Reusable FastAPI Dependency
# def require_tier(required_tier: str):
#     def dependency(current_user = Depends(get_current_store), db: Session = Depends(get_db)):
#         # SuperAdmin always bypasses restrictions
#         if getattr(current_user, 'is_superadmin', False):
#             return current_user

#         # Safely get the tier
#         raw_tier = getattr(current_user, 'subscription_tier', None)
        
#         # If logged in as an employee (TenantStaff), fetch the parent store's tier
#         if not raw_tier and hasattr(current_user, 'store_id'):
#             parent_store = db.query(StoreDB).filter(StoreDB.id == current_user.store_id).first()
#             raw_tier = parent_store.subscription_tier if parent_store else 'BASIC'
            
#         # FORCE UPPERCASE to match the dictionary keys perfectly
#         user_tier = (raw_tier or 'BASIC').upper()
#         req_tier = required_tier.upper()
        
#         user_level = TIER_LEVELS.get(user_tier, 1)
#         required_level = TIER_LEVELS.get(req_tier, 1)

#         if user_level < required_level:
#             raise HTTPException(
#                 status_code=status.HTTP_403_FORBIDDEN,
#                 detail=f"This feature requires the {required_tier} plan. Please upgrade your subscription."
#             )
#         return current_user
#     return dependency

# # # --- JWT Configuration ---
# # SECRET_KEY = "your-super-secret-key-change-this-in-production"  # Ensure this exists
# # ALGORITHM = "HS256"                                             # Ensure this exists
# # ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7                        # ADD THIS LINE (7 days expiry)


# # # a
# # # ... your SECRET_KEY and ALGORITHM configurations ...

# # def create_access_token(data: dict, expires_delta: timedelta | None = None):
# #     to_encode = data.copy()
    
# #     # Check if an explicit expiration time was passed
# #     if expires_delta:
# #         expire = datetime.now(timezone.utc) + expires_delta
# #     else:
# #         # Default to 15 minutes if nothing is passed
# #         expire = datetime.now(timezone.utc) + timedelta(minutes=15)
        
# #     to_encode.update({"exp": expire})
    
# #     # Generate the JWT string
# #     encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
# #     return encoded_jwt



# # This single line creates the SQLite .db file and tables automatically!
# models.Base.metadata.create_all(bind=engine)

# app = FastAPI(title="GD Billing Identity API")

# app.include_router(hq.router)
# app.include_router(subscriptions.router)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173", "http://localhost:3000"], 
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

# # async def get_current_store(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
# #     credentials_exception = HTTPException(
# #         status_code=status.HTTP_401_UNAUTHORIZED,
# #         detail="Could not validate credentials",
# #         headers={"WWW-Authenticate": "Bearer"},
# #     )
# #     try:
# #         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
# #         email: str = payload.get("sub")
# #         if email is None:
# #             raise credentials_exception
# #     except JWTError:
# #         raise credentials_exception

# #     except jwt.exceptions.DecodeError:
# #         raise HTTPException(status_code=401, detail="Invalid authentication token format.")
# #     except jwt.ExpiredSignatureError:
# #         raise HTTPException(status_code=401, detail="Authentication token has expired.")
# #     except Exception as e:
# #         raise HTTPException(status_code=401, detail="Could not validate credentials.")
        
# #     store = db.query(StoreDB).filter(StoreDB.email == email).first()
# #     if store is None:
# #         raise credentials_exception
# #     return store

# # @app.post("/api/auth/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
# # def register_store(store_data: StoreRegistration, db: Session = Depends(get_db)):
# #     db_store = db.query(StoreDB).filter(StoreDB.email == store_data.email).first()
# #     if db_store:
# #         raise HTTPException(status_code=400, detail="Email already registered")

# #     hashed_password = get_password_hash(store_data.password)
# #     new_store = StoreDB(
# #         storeName=store_data.storeName,
# #         ownerName=store_data.ownerName,
# #         email=store_data.email,
# #         password=hashed_password
# #     )
    
# #     db.add(new_store)
# #     db.commit()
# #     db.refresh(new_store)
    
# #     access_token = create_access_token(data={"sub": new_store.email})
# #     return {"access_token": access_token, "store_id": str(new_store.id)}

# # Add this nested schema
# class UserLoginData(BaseModel):
#     id: int
#     email: str
#     is_hq_staff: Optional[bool] = False
#     hq_role: Optional[str] = "TENANT"



# @app.post("/api/auth/register")
# def register_store(store_data: StoreRegistration, db: Session = Depends(get_db)):
#     # 1. Check if store already exists
#     existing_store = db.query(StoreDB).filter(StoreDB.email == store_data.email).first()
#     if existing_store:
#         raise HTTPException(status_code=400, detail="Email already registered")
    
#     # 2. Hash the password
#     hashed_pwd = get_password_hash(store_data.password)
    
#     # 3. Create the store using ONLY the fields from StoreRegistration
#     # new_store = StoreDB(
#     #     storeName=store_data.storeName,
#     #     email=store_data.email,
#     #     hashed_password=hashed_pwd
#     #     # REMOVED: ownerName, phone, address, etc. 
#     #     # These are nullable in the DB and will be filled out in the Setup Wizard.
#     # )
#     trial_expiry = datetime.now(timezone.utc) + timedelta(days=5)

#     new_store = StoreDB(
#         storeName=store_data.storeName,
#         email=store_data.email,
#         hashed_password=hashed_pwd,
#         subscription_tier=store_data.tier,      # Save their chosen trial tier
#         subscription_status="TRIAL",            # Mark them explicitly as a Trial
#         trial_ends_at=trial_expiry              # Lock in the 5-day window
#     )
    
#     db.add(new_store)
#     db.commit()
#     db.refresh(new_store)
    
#     return {"message": "Store registered successfully with 5-day trial"}

# # @app.post("/api/auth/login", response_model=TokenResponse)
# # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):
# #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
# #     if not store or not verify_password(credentials.password, store.password):
# #         raise HTTPException(status_code=401, detail="Incorrect email or password")
        
# #     access_token = create_access_token(data={"sub": store.email})
# #     return {"access_token": access_token, "store_id": str(store.id)}

# # @app.post("/api/auth/login", response_model=TokenResponse)
# # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):
# #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
    
# #     # FIX IS HERE: Changed store.password to store.hashed_password
# #     if not store or not verify_password(credentials.password, store.hashed_password):
# #         raise HTTPException(
# #             status_code=401,
# #             detail="Incorrect email or password",
# #             headers={"WWW-Authenticate": "Bearer"},
# #         )
    
# #     # Generate JWT token
# #     access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
# #     access_token = create_access_token(
# #         data={"sub": store.email}, expires_delta=access_token_expires
# #     )
    
# #     return {"access_token": access_token, "token_type": "bearer"}

# # @app.post("/api/auth/login", response_model=TokenResponse)
# # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):
# #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
    
# #     if not store or not verify_password(credentials.password, store.hashed_password):
# #         raise HTTPException(
# #             status_code=401,
# #             detail="Incorrect email or password",
# #             headers={"WWW-Authenticate": "Bearer"},
# #         )
    
   
# #     access_token = create_access_token(
# #         data={"sub": str(store.id)} 
# #     )
    
# #     return {"access_token": access_token, "token_type": "bearer"}

# # @app.post("/api/auth/login", response_model=TokenResponse)
# # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):
# #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
    
# #     if not store or not verify_password(credentials.password, store.hashed_password):
# #         raise HTTPException(
# #             status_code=401,
# #             detail="Incorrect email or password",
# #             headers={"WWW-Authenticate": "Bearer"},
# #         )
    
# #     access_token = create_access_token(
# #         data={"sub": str(store.id)} 
# #     )
    
# #     return {
# #         "access_token": access_token, 
# #         "token_type": "bearer",
# #         "user": {
# #             "id": store.id,
# #             "email": store.email,
# #             "is_hq_staff": getattr(store, 'is_hq_staff', False),
# #             "hq_role": getattr(store, 'hq_role', 'TENANT')
# #         }
# #     }

# # @app.post("/api/auth/login", response_model=TokenResponse)
# # def login_store(credentials: StoreLogin, db: Session = Depends(get_db)):

# #     # 1. Check HQ Superadmin/Staff
# #     hq_staff = db.query(StaffUser).filter(StaffUser.email == credentials.email).first()
# #     if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
# #         access_token = create_access_token(data={"sub": str(hq_staff.id), "role": hq_staff.hq_role, "is_staff": True})
# #         return {
# #             "access_token": access_token,
# #             "token_type": "bearer",
# #             "user": {
# #                 "id": hq_staff.id, "email": hq_staff.email, "is_hq_staff": True, "hq_role": hq_staff.hq_role
# #             }
# #         }

# #     # 2. Check Root Store Admin (Owner)
# #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
# #     if store and verify_password(credentials.password, store.hashed_password):
# #         # The Store Admin gets the root store ID and the "STORE_ADMIN" role
# #         access_token = create_access_token(data={"sub": str(store.id), "is_staff": False, "tenant_role": "STORE_ADMIN"})
# #         return {
# #             "access_token": access_token, 
# #             "token_type": "bearer",
# #             "user": {
# #                 "id": store.id, "email": store.email, "is_hq_staff": False, "hq_role": "TENANT", "tenant_role": "STORE_ADMIN"
# #             }
# #         }

# #     # 3. Check Tenant Employee (Cashier, Manager, Inventory)
# #     tenant_employee = db.query(TenantStaff).filter(TenantStaff.email == credentials.email).first()
# #     if tenant_employee and verify_password(credentials.password, tenant_employee.hashed_password):
# #         if not tenant_employee.is_active:
# #             raise HTTPException(status_code=403, detail="Account disabled.")
            
# #         # Bind the token to the PARENT store's ID, so they see the store's data, not their own ID
# #         # access_token = create_access_token(data={"sub": str(tenant_employee.store_id), "is_staff": False, "tenant_role": tenant_employee.tenant_role})
# #         access_token = create_access_token(data={
# #             "sub": str(tenant_employee.id), 
# #             "store_id": str(tenant_employee.store_id),
# #             "is_staff": False, 
# #             "tenant_role": tenant_employee.tenant_role
# #         })
# #         return {
# #             "access_token": access_token, 
# #             "token_type": "bearer",
# #             "user": {
# #                 "id": tenant_employee.id, 
# #                 "store_id": tenant_employee.store_id,
# #                 "email": tenant_employee.email, 
# #                 "is_hq_staff": False, 
# #                 "hq_role": "TENANT",
# #                 "tenant_role": tenant_employee.tenant_role # MANAGER, CASHIER, INVENTORY
# #             }
# #         }

# #     # If it fails all three
# #     raise HTTPException(
# #         status_code=401, detail="Incorrect email or password", headers={"WWW-Authenticate": "Bearer"},
# #     )
    
# #     # # 1. Check if the login belongs to an Internal Staff Member (StaffUser table)
# #     # staff = db.query(StaffUser).filter(StaffUser.email == credentials.email).first()
# #     # if staff and verify_password(credentials.password, staff.hashed_password):
# #     #     access_token = create_access_token(
# #     #         data={"sub": str(staff.id), "role": staff.hq_role, "is_staff": True}
# #     #     )
# #     #     return {
# #     #         "access_token": access_token,
# #     #         "token_type": "bearer",
# #     #         "user": {
# #     #             "id": staff.id,
# #     #             "email": staff.email,
# #     #             "is_hq_staff": True,
# #     #             "hq_role": staff.hq_role
# #     #         }
# #     #     }

# #     # # 2. Fallback to standard merchant store login (StoreDB table)
# #     # store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
    
# #     # if not store or not verify_password(credentials.password, store.hashed_password):
# #     #     raise HTTPException(
# #     #         status_code=401,
# #     #         detail="Incorrect email or password",
# #     #         headers={"WWW-Authenticate": "Bearer"},
# #     #     )
    
# #     # access_token = create_access_token(
# #     #     data={"sub": str(store.id), "is_staff": False} 
# #     # )
    
# #     # return {
# #     #     "access_token": access_token, 
# #     #     "token_type": "bearer",
# #     #     "user": {
# #     #         "id": store.id,
# #     #         "email": store.email,
# #     #         "is_hq_staff": False,
# #     #         "hq_role": "TENANT"
# #     #     }
# #     # }

# # # --- Fetch Store Profile & Dashboard Data ---
# # # @app.get("/api/store/profile")
# # # def get_store_profile(current_store: dict = Depends(get_current_store)):
# # #     return {
# # #         "storeName": current_store.storeName,
# # #         "ownerName": current_store.ownerName,
# # #         "email": current_store.email,
# # #         "phone": current_store.phone,
# # #         "address": current_store.address,
# # #         "gstin": current_store.gstin,
# # #         "currency": current_store.currency,
# # #         "is_onboarded": current_store.is_onboarded,
# # #         "is_superadmin": current_store.is_superadmin
# # #         # "inventory": current_store.inventory or [],
# # #         # "staff": current_store.staff or []
# # #     }

# @app.get("/api/store/profile")
# def get_store_profile(current_user = Depends(get_current_store)):
    
#     # 1. Check if the user is a Tenant Employee (Cashier, Manager, Inventory)
#     # The TenantStaff model has the 'tenant_role' attribute.
#     if hasattr(current_user, 'tenant_role'):
#         return {
#             "id": current_user.id,
#             "store_id": current_user.store_id,
#             "name": current_user.name,
#             "email": current_user.email,
#             "tenant_role": current_user.tenant_role, # <-- CRITICAL FOR SIDEBAR
#             "is_superadmin": False,
#             "is_onboarded": True,
#             # Provide safe fallbacks so the frontend doesn't break
#             "storeName": "Store Staff",
#             "ownerName": current_user.name 
#         }
        
#     # 2. Otherwise, the user is the Store Admin (Owner) from StoreDB
#     return {
#         "id": current_user.id,
#         "storeName": current_user.storeName,
#         "ownerName": current_user.ownerName,
#         "email": current_user.email,
#         "phone": current_user.phone,
#         "address": getattr(current_user, 'address', None),
#         "gstin": getattr(current_user, 'gstin', None),
#         "currency": getattr(current_user, 'currency', 'INR'),
#         "is_onboarded": getattr(current_user, 'is_onboarded', False),
#         "is_superadmin": getattr(current_user, 'is_superadmin', False),
#         "tenant_role": "STORE_ADMIN", # <-- CRITICAL FOR SIDEBAR
#         # --- NEW TRIAL FIELDS ---
#         "subscription_tier": getattr(current_user, 'subscription_tier', 'BASIC'),
#         "subscription_status": getattr(current_user, 'subscription_status', 'TRIAL'),
#         "trial_ends_at": getattr(current_user, 'trial_ends_at', None)
#     }

# # --- Save Onboarding Setup Wizard Data ---
# @app.post("/api/store/setup")
# def save_store_setup(setup_data: SetupWizardData, current_store: dict = Depends(get_current_store), db: Session = Depends(get_db)):
#     # Update store settings with onboarding details
#     current_store.phone = setup_data.phone or current_store.phone
#     current_store.address = setup_data.address or current_store.address
#     current_store.gstin = setup_data.gstin or current_store.gstin
#     current_store.currency = setup_data.currency or current_store.currency
#     # current_store.inventory = setup_data.inventory
#     # current_store.staff = setup_data.staff
#     current_store.is_onboarded = True  # Mark setup complete so wizard doesn't show again
    
#     db.commit()
#     return {"message": "Setup completed successfully", "is_onboarded": True}


# @app.post("/api/store/setup")
# async def complete_store_setup(
#     setup_data: SetupWizardData, 
#     db: Session = Depends(get_db), 
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # Update the store's details
#     current_store.phone = setup_data.phone
#     current_store.address = setup_data.address
#     current_store.gstin = setup_data.gstin
#     current_store.currency = setup_data.currency
    
#     # Flip the onboarding flag to True so they never see the wizard again
#     current_store.is_onboarded = True
    
#     db.commit()
#     db.refresh(current_store)
    
#     return {"message": "Setup complete", "is_onboarded": current_store.is_onboarded}


# # --- INVENTORY ROUTES ---

# @app.post("/api/inventory", response_model=ProductResponse, dependencies=[Depends(require_tier("GROWTH"))])
# def create_product(
#     product: ProductCreate, 
#     db: Session = Depends(get_db), 
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     new_product = ProductDB(
#         store_id=current_store.id,
#         name=product.name,
#         category=product.category,
#         price=product.price,
#         stock=product.stock,
#         barcode=product.barcode
#     )
#     db.add(new_product)
#     db.commit()
#     db.refresh(new_product)
#     return new_product

# @app.get("/api/inventory", response_model=list[ProductResponse], dependencies=[Depends(require_tier("GROWTH"))])
# def get_inventory(
#     db: Session = Depends(get_db), 
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     products = db.query(ProductDB).filter(ProductDB.store_id == current_store.id).all()
#     return products


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


# # @app.get("/api/invoices/{invoice_id}")
# # def get_invoice(
# #     invoice_id: int, 
# #     db: Session = Depends(get_db), 
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Fetch the invoice ensuring it belongs to the logged-in store
# #     invoice = db.query(InvoiceDB).filter(
# #         InvoiceDB.id == invoice_id, 
# #         InvoiceDB.store_id == current_store.id
# #     ).first()

# #     if not invoice:
# #         raise HTTPException(status_code=404, detail="Invoice not found")

# #     # Build the items list by joining with ProductDB to get the actual product names
# #     items_data = []
# #     for item in invoice.items:
# #         product = db.query(ProductDB).filter(ProductDB.id == item.product_id).first()
# #         items_data.append({
# #             "id": item.id,
# #             "name": product.name if product else "Unknown Product",
# #             "quantity": item.quantity,
# #             "price": item.price_at_time,
# #             "amount": item.quantity * item.price_at_time
# #         })

# #     # Construct a complete JSON response mapping to the frontend's requirements
# #     return {
# #         "id": invoice.id,
# #         "date": invoice.created_at.isoformat(),
# #         "customer": {
# #             "name": invoice.customer_name,
# #             "phone": invoice.customer_phone or "N/A",
# #             "address": "Walk-in" if invoice.customer_name == "Walk-in Customer" else ""
# #         },
# #         "store": {
# #             "name": current_store.storeName,
# #             "address": current_store.address,
# #             "phone": current_store.phone,
# #             "gstNumber": current_store.gstin
# #         },
# #         "paymentMethod": invoice.payment_method,
# #         "grandTotal": invoice.total_amount,
# #         "items": items_data
# #     }

# # @app.get("/api/analytics/sales")
# # def get_sales_analytics(
# #     date_range: str = Query("month"),
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     now = datetime.now(timezone.utc)
    
# #     # Calculate start date based on range filter
# #     if date_range == "today":
# #         start_date = now.replace(hour=0, minute=0, second=0, microsecond=0)
# #     elif date_range == "week":
# #         start_date = now - timedelta(days=now.weekday())
# #         start_date = start_date.replace(hour=0, minute=0, second=0, microsecond=0)
# #     else: # month
# #         start_date = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

# #     # 1. Fetch Invoices
# #     invoices = db.query(InvoiceDB).filter(
# #         InvoiceDB.store_id == current_store.id,
# #         InvoiceDB.created_at >= start_date
# #     ).all()

# #     total_sales = sum(inv.total_amount for inv in invoices)

# #     # 2. Group Sales Trends by Date (Python-side aggregation for SQLite compatibility)
# #     trends_dict = {}
# #     for inv in invoices:
# #         date_str = inv.created_at.strftime("%d %b")
# #         trends_dict[date_str] = trends_dict.get(date_str, 0) + inv.total_amount
    
# #     # Sort trends chronologically
# #     sales_trends = [{"date": k, "sales": v} for k, v in trends_dict.items()]

# #     # 3. Top Products using SQLAlchemy JOIN and GROUP_BY
# #     top_items_query = db.query(
# #         ProductDB.name, 
# #         func.sum(InvoiceItemDB.quantity * InvoiceItemDB.price_at_time).label("total_amount")
# #     ).join(InvoiceItemDB, ProductDB.id == InvoiceItemDB.product_id)\
# #      .join(InvoiceDB, InvoiceItemDB.invoice_id == InvoiceDB.id)\
# #      .filter(InvoiceDB.store_id == current_store.id, InvoiceDB.created_at >= start_date)\
# #      .group_by(ProductDB.id)\
# #      .order_by(desc("total_amount"))\
# #      .limit(5).all()

# #     top_products = [{"name": item.name, "amount": item.total_amount} for item in top_items_query]

# #     # 4. Profit & Loss (Simulated margins for UI completeness)
# #     cogs = total_sales * 0.65
# #     gross_profit = total_sales - cogs
# #     expenses = 0 if total_sales == 0 else (total_sales * 0.10)
# #     net_profit = gross_profit - expenses

# #     return {
# #         "total_sales": total_sales,
# #         "trends": sales_trends,
# #         "top_products": top_products,
# #         "summary": {
# #             "total_sales": total_sales,
# #             "cogs": cogs,
# #             "gross_profit": gross_profit,
# #             "expenses": expenses,
# #             "net_profit": net_profit,
# #             "gross_margin_pct": (gross_profit / total_sales * 100) if total_sales > 0 else 0,
# #             "net_margin_pct": (net_profit / total_sales * 100) if total_sales > 0 else 0
# #         }
# #     }

# #updates sales
# @app.get("/api/analytics/sales")
# def get_sales_analytics(
#     date_range: str = Query("month"),
#     db: Session = Depends(get_db),
#     current_store: dict = Depends(get_current_store)
# ):
#     now = datetime.now(timezone.utc)
    
#     # Calculate start date based on range filter
#     if date_range == "today":
#         start_date = now.replace(hour=0, minute=0, second=0, microsecond=0)
#     elif date_range == "week":
#         start_date = now - timedelta(days=now.weekday())
#         start_date = start_date.replace(hour=0, minute=0, second=0, microsecond=0)
#     else: # month - use the first day of the current month
#         start_date = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

#     # 1. Fetch Invoices using issue_date with fallback to created_at
#     invoices = db.query(InvoiceDB).filter(
#         InvoiceDB.store_id == current_store.id
#     ).all()
    
#     # Filter in-memory to safely handle date field variations safely
#     filtered_invoices = []
#     for inv in invoices:
#         inv_date = inv.issue_date or inv.created_at
#         if inv_date:
#             # Make sure inv_date is timezone-aware for comparison
#             if inv_date.tzinfo is None:
#                 inv_date = inv_date.replace(tzinfo=timezone.utc)
#             if date_range == "all" or inv_date >= start_date:
#                 filtered_invoices.append(inv)

#     total_sales = sum(inv.total_amount for inv in filtered_invoices)

#     # 2. Group Sales Trends by Date
#     trends_dict = {}
#     for inv in filtered_invoices:
#         inv_date = inv.issue_date or inv.created_at
#         date_str = inv_date.strftime("%d %b") if inv_date else "Unknown"
#         trends_dict[date_str] = trends_dict.get(date_str, 0) + inv.total_amount
    
#     sales_trends = [{"date": k, "sales": v} for k, v in trends_dict.items()]

#     # 3. Top Products using SQLAlchemy JOIN and GROUP_BY
#     top_items_query = db.query(
#         ProductDB.name, 
#         func.sum(InvoiceItemDB.quantity * InvoiceItemDB.price_at_time).label("total_amount")
#     ).join(InvoiceItemDB, ProductDB.id == InvoiceItemDB.product_id)\
#      .join(InvoiceDB, InvoiceItemDB.invoice_id == InvoiceDB.id)\
#      .filter(InvoiceDB.store_id == current_store.id)\
#      .group_by(ProductDB.id)\
#      .order_by(desc("total_amount"))\
#      .limit(5).all()

#     top_products = [{"name": item.name, "amount": item.total_amount} for item in top_items_query]

#     # 4. Profit & Loss Margins
#     cogs = total_sales * 0.65
#     gross_profit = total_sales - cogs
#     expenses = 0 if total_sales == 0 else (total_sales * 0.10)
#     net_profit = gross_profit - expenses

#     return {
#         "total_sales": total_sales,
#         "trends": sales_trends,
#         "top_products": top_products,
#         "summary": {
#             "total_sales": total_sales,
#             "cogs": cogs,
#             "gross_profit": gross_profit,
#             "expenses": expenses,
#             "net_profit": net_profit,
#             "gross_margin_pct": (gross_profit / total_sales * 100) if total_sales > 0 else 0,
#             "net_margin_pct": (net_profit / total_sales * 100) if total_sales > 0 else 0
#         }
#     }

# # @app.get("/api/dashboard")
# # def get_dashboard_summary(
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     now = datetime.now(timezone.utc)
# #     today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
# #     yesterday_start = today_start - timedelta(days=1)
    
# #     # 1. Fetch Today's and Yesterday's Invoices
# #     today_invoices = db.query(InvoiceDB).filter(
# #         InvoiceDB.store_id == current_store.id,
# #         InvoiceDB.created_at >= today_start
# #     ).all()
    
# #     yesterday_invoices = db.query(InvoiceDB).filter(
# #         InvoiceDB.store_id == current_store.id,
# #         InvoiceDB.created_at >= yesterday_start,
# #         InvoiceDB.created_at < today_start
# #     ).all()
    
# #     today_sales = sum(inv.total_amount for inv in today_invoices)
# #     yesterday_sales = sum(inv.total_amount for inv in yesterday_invoices)
    
# #     today_orders = len(today_invoices)
# #     yesterday_orders = len(yesterday_invoices)
    
# #     # Helper for Percentage Change
# #     def calc_change(current, previous):
# #         if previous == 0:
# #             return "+100%" if current > 0 else "0%"
# #         change = ((current - previous) / previous) * 100
# #         sign = "+" if change >= 0 else ""
# #         return f"{sign}{change:.1f}%"
        
# #     # 2. Fetch Active Inventory (Products with stock > 0)
# #     active_stock = db.query(ProductDB).filter(
# #         ProductDB.store_id == current_store.id,
# #         ProductDB.stock > 0
# #     ).count()
    
# #     # 3. Fetch Unique Customers
# #     unique_customers = db.query(InvoiceDB.customer_name).filter(
# #         InvoiceDB.store_id == current_store.id,
# #         InvoiceDB.customer_name != "Walk-in Customer",
# #         InvoiceDB.customer_name != None,
# #         InvoiceDB.customer_name != ""
# #     ).distinct().count()
    
# #     # 4. Generate 7-Day Rolling Trend for the Chart
# #     week_start = today_start - timedelta(days=6)
# #     week_invoices = db.query(InvoiceDB).filter(
# #         InvoiceDB.store_id == current_store.id,
# #         InvoiceDB.created_at >= week_start
# #     ).all()
    
# #     trend_dict = {}
# #     for i in range(7):
# #         day = week_start + timedelta(days=i)
# #         trend_dict[day.strftime("%d %b")] = 0
        
# #     for inv in week_invoices:
# #         day_str = inv.created_at.strftime("%d %b")
# #         if day_str in trend_dict:
# #             trend_dict[day_str] += inv.total_amount
            
# #     sales_trend = [{"date": k, "total_sales": v} for k, v in trend_dict.items()]
    
# #     return {
# #         "metrics": {
# #             "sales": f"₹{today_sales:,.0f}",
# #             "salesChange": calc_change(today_sales, yesterday_sales),
# #             "salesPositive": today_sales >= yesterday_sales,
# #             "orders": str(today_orders),
# #             "ordersChange": calc_change(today_orders, yesterday_orders),
# #             "ordersPositive": today_orders >= yesterday_orders,
# #             "stock": str(active_stock),
# #             "stockChange": "Active", 
# #             "stockPositive": True,
# #             "customers": str(unique_customers),
# #             "customersChange": "Total", 
# #             "customersPositive": True
# #         },
# #         "salesTrend": sales_trend
# #     }

# ##new dashboard
# # @app.get("/api/dashboard")
# # def get_dashboard_summary(
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     now = datetime.now(timezone.utc)
# #     today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    
# #     invoices = db.query(InvoiceDB).filter(
# #         InvoiceDB.store_id == current_store.id
# #     ).all()
    
# #     today_sales = 0
# #     today_orders = 0
# #     yesterday_sales = 0
# #     yesterday_orders = 0
    
# #     week_start = today_start - timedelta(days=6)
# #     trend_dict = {}
# #     for i in range(7):
# #         day = week_start + timedelta(days=i)
# #         trend_dict[day.strftime("%d %b")] = 0

# #     for inv in invoices:
# #         inv_date = inv.issue_date or inv.created_at
# #         if not inv_date:
# #             continue
# #         if inv_date.tzinfo is None:
# #             inv_date = inv_date.replace(tzinfo=timezone.utc)
            
# #         # Check if today
# #         if inv_date >= today_start:
# #             today_sales += inv.total_amount
# #             today_orders += 1
# #         elif today_start - timedelta(days=1) <= inv_date < today_start:
# #             yesterday_sales += inv.total_amount
# #             yesterday_orders += 1
            
# #         # Check if within 7-day rolling window
# #         day_str = inv_date.strftime("%d %b")
# #         if day_str in trend_dict:
# #             trend_dict[day_str] += inv.total_amount

# #     def calc_change(current, previous):
# #         if previous == 0:
# #             return "+100%" if current > 0 else "0%"
# #         change = ((current - previous) / previous) * 100
# #         sign = "+" if change >= 0 else ""
# #         return f"{sign}{change:.1f}%"
        
# #     active_stock = db.query(ProductDB).filter(
# #         ProductDB.store_id == current_store.id,
# #         ProductDB.stock > 0
# #     ).count()
    
# #     unique_customers = db.query(InvoiceDB.customer_name).filter(
# #         InvoiceDB.store_id == current_store.id,
# #         InvoiceDB.customer_name != "Walk-in Customer",
# #         InvoiceDB.customer_name != None,
# #         InvoiceDB.customer_name != ""
# #     ).distinct().count()
    
# #     sales_trend = [{"date": k, "total_sales": v} for k, v in trend_dict.items()]
    
# #     return {
# #         "metrics": {
# #             "sales": f"₹{today_sales:,.0f}",
# #             "salesChange": calc_change(today_sales, yesterday_sales),
# #             "salesPositive": today_sales >= yesterday_sales,
# #             "orders": str(today_orders),
# #             "ordersChange": calc_change(today_orders, yesterday_orders),
# #             "ordersPositive": today_orders >= yesterday_orders,
# #             "stock": str(active_stock),
# #             "stockChange": "Active", 
# #             "stockPositive": True,
# #             "customers": str(unique_customers),
# #             "customersChange": "Total", 
# #             "customersPositive": True
# #         },
# #         "salesTrend": sales_trend
# #     }


# @app.get("/api/dashboard")
# def get_dashboard_summary(
#     db: Session = Depends(get_db),
#     current_store: dict = Depends(get_current_store)
# ):
#     now = datetime.now(timezone.utc)
#     today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    
#     # 1. Fetch both Invoices and Expenses for the current store
#     invoices = db.query(InvoiceDB).filter(
#         InvoiceDB.store_id == current_store.id
#     ).all()
    
#     expenses = db.query(ExpenseDB).filter(
#         ExpenseDB.store_id == current_store.id
#     ).all()
    
#     # 2. Initialize tracking variables
#     today_sales = 0
#     today_orders = 0
#     yesterday_sales = 0
#     yesterday_orders = 0
    
#     today_expenses = 0
#     yesterday_expenses = 0
    
#     # 3. Setup 7-day rolling window dictionary to hold both metrics
#     week_start = today_start - timedelta(days=6)
#     trend_dict = {}
#     for i in range(7):
#         day = week_start + timedelta(days=i)
#         # Store a nested dict instead of a single integer
#         trend_dict[day.strftime("%d %b")] = {"sales": 0, "expenses": 0}

#     # 4. Process Invoices (Revenue)
#     for inv in invoices:
#         inv_date = inv.issue_date or inv.created_at
#         if not inv_date:
#             continue
#         if inv_date.tzinfo is None:
#             inv_date = inv_date.replace(tzinfo=timezone.utc)
            
#         if inv_date >= today_start:
#             today_sales += inv.total_amount
#             today_orders += 1
#         elif today_start - timedelta(days=1) <= inv_date < today_start:
#             yesterday_sales += inv.total_amount
#             yesterday_orders += 1
            
#         day_str = inv_date.strftime("%d %b")
#         if day_str in trend_dict:
#             trend_dict[day_str]["sales"] += inv.total_amount

#     # 5. Process Expenses (Outflow)
#     for exp in expenses:
#         # Match the date field you save in your React payload (purchase_date)
#         exp_date = exp.purchase_date or exp.created_at
#         if not exp_date:
#             continue
#         if exp_date.tzinfo is None:
#             exp_date = exp_date.replace(tzinfo=timezone.utc)
            
#         if exp_date >= today_start:
#             today_expenses += exp.grand_total
#         elif today_start - timedelta(days=1) <= exp_date < today_start:
#             yesterday_expenses += exp.grand_total
            
#         day_str = exp_date.strftime("%d %b")
#         if day_str in trend_dict:
#             trend_dict[day_str]["expenses"] += exp.grand_total

#     # 6. Calculate Net Profit
#     today_profit = today_sales - today_expenses
#     yesterday_profit = yesterday_sales - yesterday_expenses

#     # 7. Keep original helper function intact
#     def calc_change(current, previous):
#         if previous == 0:
#             return "+100%" if current > 0 else "0%"
#         change = ((current - previous) / previous) * 100
#         sign = "+" if change >= 0 else ""
#         return f"{sign}{change:.1f}%"
        
#     # 8. Keep original sub-queries intact
#     active_stock = db.query(ProductDB).filter(
#         ProductDB.store_id == current_store.id,
#         ProductDB.stock > 0
#     ).count()
    
#     unique_customers = db.query(InvoiceDB.customer_name).filter(
#         InvoiceDB.store_id == current_store.id,
#         InvoiceDB.customer_name != "Walk-in Customer",
#         InvoiceDB.customer_name != None,
#         InvoiceDB.customer_name != ""
#     ).distinct().count()
    
#     # 9. Map the trend dictionary to the format expected by Recharts
#     sales_trend = [
#         {
#             "date": k, 
#             "total_sales": v["sales"], 
#             "total_expenses": v["expenses"],
#             "profit": v["sales"] - v["expenses"]
#         } for k, v in trend_dict.items()
#     ]
    
#     return {
#         "metrics": {
#             # Revenue Card
#             "sales": f"₹{today_sales:,.0f}",
#             "salesChange": calc_change(today_sales, yesterday_sales),
#             "salesPositive": today_sales >= yesterday_sales,
            
#             # Expenses Card
#             "expenses": f"₹{today_expenses:,.0f}",
#             "expensesChange": calc_change(today_expenses, yesterday_expenses),
#             "expensesPositive": today_expenses <= yesterday_expenses, # Lower expenses are logically positive
            
#             # Profit Card
#             "profit": f"₹{today_profit:,.0f}",
#             "profitChange": calc_change(today_profit, yesterday_profit),
#             "profitPositive": today_profit >= yesterday_profit,
            
#             # Customers/Cash Flow Card
#             "customers": str(unique_customers),
#             "customersChange": "Total", 
#             "customersPositive": True,
            
#             # Legacy keys kept for safety in case other components still read them
#             "orders": str(today_orders),
#             "ordersChange": calc_change(today_orders, yesterday_orders),
#             "ordersPositive": today_orders >= yesterday_orders,
#             "stock": str(active_stock),
#             "stockChange": "Active", 
#             "stockPositive": True,
#         },
#         "salesTrend": sales_trend
#     }

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


# # --- Schema for Settings Update ---
# class StoreUpdate(BaseModel):
#     storeName: str
#     ownerName: str
#     phone: str
#     address: str
#     gstin: str
#     currency: str

# # --- Settings Update Route ---
# @app.put("/api/store/profile")
# def update_store_profile(
#     update_data: StoreUpdate,
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     current_store.storeName = update_data.storeName
#     current_store.ownerName = update_data.ownerName
#     current_store.phone = update_data.phone
#     current_store.address = update_data.address
#     current_store.gstin = update_data.gstin
#     current_store.currency = update_data.currency
    
#     db.commit()
#     db.refresh(current_store)
    
#     return {"message": "Profile updated successfully", "storeName": current_store.storeName}

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

# # @app.get("/api/invoices/{invoice_id}")
# # def get_invoice_detail(
# #     invoice_id: int,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Fetch invoice and eagerly load items to prevent N+1 query problems
# #     invoice = db.query(InvoiceDB).options(joinedload(InvoiceDB.items)).filter(
# #         InvoiceDB.id == invoice_id,
# #         InvoiceDB.store_id == current_store.id
# #     ).first()
    
# #     if not invoice:
# #         raise HTTPException(status_code=404, detail="Invoice not found")
        
# #     customer = db.query(CustomerDB).filter(CustomerDB.id == invoice.customer_id).first()
    
# #     return {
# #         "store": {
# #             "storeName": current_store.storeName,
# #             "address": current_store.address,
# #             "phone": current_store.phone,
# #             "email": current_store.email,
# #             "gstin": current_store.gstin
# #         },
# #         "customer": {
# #             "company_name": customer.company_name if customer else invoice.customer_name,
# #             "billing_address": customer.billing_address if customer else None,
# #             "gstin": customer.gstin if customer else None,
# #             "place_of_supply": customer.place_of_supply if customer else None,
# #             "phone": invoice.customer_phone
# #         },
# #         "invoice": {
# #             "invoice_number": invoice.invoice_number or f"#{invoice.id:06d}",
# #             "issue_date": invoice.issue_date,
# #             "due_date": invoice.due_date,
# #             "subtotal": invoice.subtotal,
# #             "tax_total": invoice.tax_total,
# #             "grand_total": invoice.grand_total,
# #             "notes": invoice.notes,
# #             "terms_conditions": invoice.terms_conditions,
# #             "status": invoice.status.value
# #         },
# #         "items": [
# #             {
# #                 "name": item.name,
# #                 "hsn_sac_code": item.hsn_sac_code,
# #                 "quantity": item.quantity,
# #                 "rate": item.price_at_time or item.rate, # Fallback for older retail records
# #                 "tax_rate": item.tax_rate,
# #                 "tax_amount": item.tax_amount,
# #                 "total_amount": item.total_amount
# #             } for item in invoice.items
# #         ]
# #     }


# ##changed inovice page
# # @app.get("/api/invoices/{invoice_id}")
# # def get_invoice_detail(
# #     invoice_id: int,
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     # Fetch invoice and eagerly load items to prevent N+1 query problems
# #     invoice = db.query(InvoiceDB).options(joinedload(InvoiceDB.items)).filter(
# #         InvoiceDB.id == invoice_id,
# #         InvoiceDB.store_id == current_store.id
# #     ).first()
    
# #     if not invoice:
# #         raise HTTPException(status_code=404, detail="Invoice not found")
        
# #     customer = db.query(CustomerDB).filter(CustomerDB.id == invoice.customer_id).first()
    
# #     return {
# #         "store": {
# #             "storeName": current_store.storeName,
# #             "address": current_store.address or "",
# #             "phone": current_store.phone or "",
# #             "email": current_store.email or "",
# #             "gstin": current_store.gstin or ""
# #         },
# #         "customer": {
# #             "company_name": customer.company_name if customer else (invoice.customer_name or "Walk-in Customer"),
# #             "billing_address": customer.billing_address if customer else "",
# #             "gstin": customer.gstin if customer else "",
# #             "place_of_supply": customer.place_of_supply if customer else "",
# #             "phone": invoice.customer_phone or ""
# #         },
# #         "invoice": {
# #             # "invoice_number": invoice.invoice_number or f"#{invoice.id:06d}",
# #             "invoice_number": str(invoice.invoice_number) if invoice.invoice_number else f"#{invoice.id:06d}",
# #             "issue_date": invoice.issue_date.isoformat() if invoice.issue_date else None,
# #             "due_date": invoice.due_date.isoformat() if invoice.due_date else None,
# #             "subtotal": float(invoice.subtotal or 0.0),
# #             "tax_total": float(invoice.tax_total or 0.0),
# #             "grand_total": float(invoice.grand_total or 0.0),
# #             "notes": invoice.notes,
# #             "terms_conditions": invoice.terms_conditions,
# #             # Safely extract the Enum value whether it is a string or an Enum object
# #             "status": invoice.status.value if hasattr(invoice.status, 'value') else str(invoice.status)
# #         },
# #         "items": [
# #             {
# #                 "name": item.name or "Item",
# #                 "hsn_sac_code": item.hsn_sac_code or "-",
# #                 "quantity": float(item.quantity or 1.0),
# #                 # Safely fallback to price_at_time for legacy retail POS compatibility
# #                 "rate": float(item.rate if item.rate is not None else (item.price_at_time or 0.0)), 
# #                 "tax_rate": float(item.tax_rate or 0.0),
# #                 "tax_amount": float(item.tax_amount or 0.0),
# #                 "total_amount": float(item.total_amount or 0.0)
# #             } for item in invoice.items
# #         ]
# #     }

# from sqlalchemy.orm import joinedload

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

# @app.get("/api/quotations/{quotation_id}", dependencies=[Depends(require_tier("GROWTH"))])
# def get_quotation_detail(
#     quotation_id: int,
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # Eagerly load items to prevent N+1 queries
#     quotation = db.query(QuotationDB).options(joinedload(QuotationDB.items)).filter(
#         QuotationDB.id == quotation_id,
#         QuotationDB.store_id == current_store.id
#     ).first()
    
#     if not quotation:
#         raise HTTPException(status_code=404, detail="Quotation not found")
        
#     customer = db.query(CustomerDB).filter(CustomerDB.id == quotation.customer_id).first()
    
#     return {
#         "store": {
#             "storeName": current_store.storeName,
#             "address": current_store.address or "",
#             "phone": current_store.phone or "",
#             "email": current_store.email or "",
#             "gstin": current_store.gstin or "",
#             "logo": quotation.store_logo or ""
#         },
#         "customer": {
#             "company_name": customer.company_name if customer else "Unknown Client",
#             "billing_address": customer.billing_address if customer else "",
#             "gstin": customer.gstin if customer else "",
#             "place_of_supply": customer.place_of_supply if customer else "",
#             "phone": customer.phone if customer else ""
#         },
#         "quotation": {
#             "quotation_number": str(quotation.quotation_number) if quotation.quotation_number else f"QT-{quotation.id:06d}",
#             "issue_date": quotation.issue_date.isoformat() if quotation.issue_date else None,
#             "valid_until": quotation.valid_until.isoformat() if quotation.valid_until else None,
#             "subtotal": float(quotation.subtotal or 0.0),
#             "tax_total": float(quotation.tax_total or 0.0),
#             "grand_total": float(quotation.grand_total or 0.0),
#             "notes": quotation.notes,
#             "terms_conditions": quotation.terms_conditions,
#             "status": quotation.status.value if hasattr(quotation.status, 'value') else str(quotation.status)
#         },
#         "items": [
#             {
#                 "name": item.name or "Unknown Product",
#                 "hsn_sac_code": item.hsn_sac_code or "-",
#                 "quantity": float(item.quantity or 1.0),
#                 "rate": float(item.rate or 0.0), 
#                 "tax_rate": float(item.tax_rate or 0.0),
#                 "tax_amount": float(item.tax_amount or 0.0),
#                 "total_amount": float(item.total_amount or 0.0)
#             } for item in quotation.items
#         ]
#     }



# # ==========================================
# # MACHINE LEARNING MODEL INITIALIZATION
# # ==========================================
# # Attempt to load the model into memory at startup
# try:
#     with open("xgboost_retail_model.pkl", "rb") as f:
#         sales_model = pickle.load(f)
#         print("XGBoost model loaded successfully.")
# except FileNotFoundError:
#     sales_model = None
#     print("Warning: sales_model.pkl not found. Forecast endpoint will return mock/empty data.")

# # ==========================================
# # FORECAST ENDPOINT
# # ==========================================
# @app.get("/api/forecast", dependencies=[Depends(require_tier("ENTERPRISE"))])
# def get_sales_forecast(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     if sales_model is None:
#         raise HTTPException(status_code=503, detail="Forecast model is unavailable.")

#     # 1. Pull historical sales aggregated by day for the store
#     historical_sales = db.query(
#         func.date(InvoiceDB.issue_date).label("date"),
#         func.sum(InvoiceDB.grand_total).label("daily_total")
#     ).filter(
#         InvoiceDB.store_id == current_store.id
#     ).group_by(
#         func.date(InvoiceDB.issue_date)
#     ).order_by(
#         func.date(InvoiceDB.issue_date).asc()
#     ).all()

#     if not historical_sales:
#         return {"historical": [], "forecast": []}

#     # 2. Convert to Pandas DataFrame
#     df = pd.DataFrame(historical_sales, columns=["date", "daily_total"])
#     df['date'] = pd.to_datetime(df['date'])
#     df['daily_total'] = df['daily_total'].astype(float)

#     # Ensure a continuous date range (fill missing days with 0 sales if necessary)
#     df = df.set_index('date').resample('D').asfreq().fillna(0).reset_index()

#     # 3. Generate the exact feature matrix matching the expected columns:
#     # ['month', 'year', 'quarter', 'lag_1', 'lag_2', 'lag_3', 'rolling_mean_3', 'rolling_std_3']
#     df['month'] = df['date'].dt.month
#     df['year'] = df['date'].dt.year
#     df['quarter'] = df['date'].dt.quarter
    
#     # Create lag features
#     df['lag_1'] = df['daily_total'].shift(1)
#     df['lag_2'] = df['daily_total'].shift(2)
#     df['lag_3'] = df['daily_total'].shift(3)
    
#     # Create rolling statistics (window = 3)
#     df['rolling_mean_3'] = df['daily_total'].rolling(window=3).mean()
#     df['rolling_std_3'] = df['daily_total'].rolling(window=3).std()

#     # Drop rows with NaN values created by shifts/rolling windows
#     df_clean = df.dropna().copy()

#     if df_clean.empty:
#         raise HTTPException(
#             status_code=400, 
#             detail="Not enough historical invoice data to generate lag features. You need at least 4 days of sales."
#         )

#     # 4. Define feature columns strictly matching model expectations
#     features = ['month', 'year', 'quarter', 'lag_1', 'lag_2', 'lag_3', 'rolling_mean_3', 'rolling_std_3']
    
#     try:
#         X = df_clean[features]
#         predictions = sales_model.predict(X)
#         df_clean['predicted_sales'] = predictions
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Inference execution failed: {str(e)}")

#     # 5. Format payload for frontend charting
#     historical_payload = []
#     forecast_payload = []

#     for _, row in df_clean.iterrows():
#         historical_payload.append({
#             "date": row['date'].strftime("%Y-%m-%d"),
#             "actual_sales": float(row['daily_total'])
#         })
#         forecast_payload.append({
#             "date": row['date'].strftime("%Y-%m-%d"),
#             "predicted_sales": float(row['predicted_sales'])
#         })

#     return {
#         "historical": historical_payload,
#         "forecast": forecast_payload
#     }


# @app.get("/api/forecast/restock", dependencies=[Depends(require_tier("ENTERPRISE"))])
# def get_restock_suggestions(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # Aggregate total quantity sold per product to find high-velocity items
#     popular_items = db.query(
#         InvoiceItemDB.name,
#         func.sum(InvoiceItemDB.quantity).label("total_sold")
#     ).join(InvoiceDB, InvoiceItemDB.invoice_id == InvoiceDB.id).filter(
#         InvoiceDB.store_id == current_store.id
#     ).group_by(
#         InvoiceItemDB.name
#     ).order_by(desc("total_sold")).limit(3).all()

#     if not popular_items:
#         return []

#     suggestions = []
#     for idx, item in enumerate(popular_items):
#         suggestions.append({
#             "id": idx + 1,
#             "name": item.name,
#             "status": "Low Stock" if idx < 2 else "Stock running low",
#             "statusColor": "bg-red-100 text-red-600" if idx < 2 else "bg-amber-100 text-amber-700",
#             "urgencyColor": "bg-red-50 border-red-200 text-red-700" if idx < 2 else "bg-amber-50 border-amber-200 text-amber-700",
#             "days": idx + 3,
#             "current": 6,
#             "desc": f"Reorder {item.name} likely to run out soon based on velocity",
#             "iconColor": "bg-orange-100"
#         })
#     return suggestions


# @app.get("/api/forecast/cross-sell", dependencies=[Depends(require_tier("ENTERPRISE"))])
# def get_cross_sell_patterns(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # Fetch distinct line item pairs appearing in the same invoices
#     invoices = db.query(InvoiceDB).filter(InvoiceDB.store_id == current_store.id).all()
    
#     pairs = {}
#     for inv in invoices:
#         names = [item.name for item in inv.items if item.name]
#         for i in range(len(names)):
#             for j in range(i + 1, len(names)):
#                 pair = tuple(sorted([names[i], names[j]]))
#                 pairs[pair] = pairs.get(pair, 0) + 1

#     if not pairs:
#         return []

#     sorted_pairs = sorted(pairs.items(), key=lambda x: x[1], reverse=True)
    
#     cross_sells = []
#     for idx, (pair, count) in enumerate(sorted_pairs[:3]):
#         cross_sells.append({
#             "id": idx + 1,
#             "item1": pair[0],
#             "item2": pair[1],
#             "pct": f"{min(60 + (count * 10), 95)}%",
#             "c1": "bg-yellow-100",
#             "c2": "bg-red-100"
#         })
#     return cross_sells


# # --- SQLAlchemy Models (Add to models.py or main.py) ---
# class SupplierDB(Base):
#     __tablename__ = "suppliers"
#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"))
#     name = Column(String, nullable=False)
#     contact_person = Column(String)
#     phone = Column(String)
#     products_supplied = Column(String) # Comma-separated or string list representation

# class PurchaseOrderDB(Base):
#     __tablename__ = "purchase_orders"
#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"))
#     supplier_name = Column(String)
#     contact_person = Column(String)
#     phone = Column(String)
#     expected_date = Column(String)
#     notes = Column(String)
#     subtotal = Column(Float, default=0.0)
#     tax_total = Column(Float, default=0.0)
#     discount_total = Column(Float, default=0.0)
#     grand_total = Column(Float, default=0.0)
#     items = relationship("PurchaseOrderItemDB", cascade="all, delete-orphan")

# class PurchaseOrderItemDB(Base):
#     __tablename__ = "purchase_order_items"
#     id = Column(Integer, primary_key=True, index=True)
#     po_id = Column(Integer, ForeignKey("purchase_orders.id"))
#     name = Column(String)
#     unit = Column(String)
#     stock = Column(Float)
#     price = Column(Float)
#     qty = Column(Float)
#     amount = Column(Float)


# # --- FastAPI Endpoints ---

# @app.get("/api/suppliers", dependencies=[Depends(require_tier("GROWTH"))])
# def get_suppliers(db: Session = Depends(get_db), current_store: StoreDB = Depends(get_current_store)):
#     suppliers = db.query(SupplierDB).filter(SupplierDB.store_id == current_store.id).all()
#     if not suppliers:
#         # Seed default demo suppliers if empty for instant usability
#         defaults = [
#             SupplierDB(store_id=current_store.id, name="Rajesh Beverages Pvt.Ltd.", contact_person="Rajesh Kumar", phone="+91 11566788009", products_supplied="Soft Drinks, Juices, Water"),
#             SupplierDB(store_id=current_store.id, name="Shiv Distributors", contact_person="Suresh Yadav", phone="+91 55555788009", products_supplied="Atta, Rice, Pulses"),
#             SupplierDB(store_id=current_store.id, name="Good Morning Dairy", contact_person="Meena Patel", phone="+91 1152288009", products_supplied="Milk, Curd, Paneer, Butter")
#         ]
#         db.add_all(defaults)
#         db.commit()
#         suppliers = db.query(SupplierDB).filter(SupplierDB.store_id == current_store.id).all()
        
#     return [
#         {
#             "id": s.id,
#             "name": s.name,
#             "contact": s.contact_person,
#             "phone": s.phone,
#             "products": s.products_supplied.split(", ") if s.products_supplied else [],
#             "initial": "".join([n[0] for n in s.name.split()[:2]]).upper(),
#             "bg": "bg-blue-100 text-blue-600"
#         } for s in suppliers
#     ]

# @app.post("/api/purchase-orders", dependencies=[Depends(require_tier("GROWTH"))])
# def create_purchase_order(
#     po_data: dict,
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     new_po = PurchaseOrderDB(
#         store_id=current_store.id,
#         supplier_name=po_data.get("supplier_name"),
#         contact_person=po_data.get("contact_person"),
#         phone=po_data.get("phone"),
#         expected_date=po_data.get("expected_date"),
#         notes=po_data.get("notes"),
#         subtotal=po_data.get("subtotal", 0.0),
#         tax_total=po_data.get("tax_total", 0.0),
#         discount_total=po_data.get("discount_total", 0.0),
#         grand_total=po_data.get("grand_total", 0.0)
#     )
#     db.add(new_po)
#     db.flush()

#     for item in po_data.get("items", []):
#         db.add(PurchaseOrderItemDB(
#             po_id=new_po.id,
#             name=item.get("name"),
#             unit=item.get("unit"),
#             stock=item.get("stock", 0),
#             price=item.get("price", 0.0),
#             qty=item.get("qty", 1),
#             amount=item.get("amount", 0.0)
#         ))

#     db.commit()
#     return {"message": "Purchase order created successfully", "po_id": new_po.id}



# # 1. Add the Expense Model
# # class ExpenseDB(Base):
# #     __tablename__ = "expenses"
# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
# #     vendor_name = Column(String, nullable=False)
# #     category = Column(String, nullable=False)
# #     amount = Column(Float, nullable=False)
# #     expense_date = Column(DateTime, default=func.now())
# #     payment_method = Column(String)
# #     reference_number = Column(String)
# #     notes = Column(String)

# # class ExpenseDB(Base):
# #     __tablename__ = "expenses"
# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
# #     expense_number = Column(String, nullable=False)
# #     vendor_name = Column(String, nullable=False)
# #     purchase_date = Column(DateTime, default=func.now())
# #     due_date = Column(DateTime, nullable=True)
# #     subtotal = Column(Float, default=0.0)
# #     tax_total = Column(Float, default=0.0)
# #     grand_total = Column(Float, default=0.0)
# #     payment_method = Column(String, default="Bank Transfer")
# #     notes = Column(String)
    
# #     # Establish relationship to items
# #     items = relationship("ExpenseItemDB", back_populates="expense", cascade="all, delete-orphan")

# # class ExpenseItemDB(Base):
# #     __tablename__ = "expense_items"
# #     id = Column(Integer, primary_key=True, index=True)
# #     expense_id = Column(Integer, ForeignKey("expenses.id"), nullable=False)
# #     name = Column(String, nullable=False)
# #     hsn_sac_code = Column(String)
# #     quantity = Column(Float, default=1.0)
# #     rate = Column(Float, default=0.0)
# #     tax_rate = Column(Float, default=0.0)
# #     total_amount = Column(Float, default=0.0)

# #     expense = relationship("ExpenseDB", back_populates="items")





# # 2. Add the Endpoints
# # @app.get("/api/expenses")
# # def get_expenses(db: Session = Depends(get_db), current_store: dict = Depends(get_current_store)):
# #     expenses = db.query(ExpenseDB).filter(ExpenseDB.store_id == current_store.id).order_by(ExpenseDB.purchase_date.desc()).all()
    
# #     return [
# #         {
# #             "id": exp.id,
# #             "vendor_name": exp.vendor_name,
# #             "category": exp.category,
# #             "amount": exp.amount,
# #             "date": exp.expense_date.isoformat() if exp.expense_date else None,
# #             "payment_method": exp.payment_method,
# #             "reference_number": exp.reference_number,
# #             "notes": exp.notes
# #         } for exp in expenses
# #     ]

# # @app.post("/api/expenses")
# # def create_expense(
# #     expense_data: dict,
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
    
    
# #     new_expense = ExpenseDB(
# #         store_id=current_store.id,
# #         expense_number=payload.get("expense_number", f"EXP-{int(datetime.now().timestamp())}"),
# #         vendor_name=expense_data.get("vendor_name", "Unknown Vendor"),
# #         category=expense_data.get("category", "Uncategorized"),
# #         amount=float(expense_data.get("amount", 0.0)),
# #         expense_date=datetime.fromisoformat(expense_data.get("date")) if expense_data.get("date") else func.now(),
# #         payment_method=expense_data.get("payment_method", "Bank Transfer"),
# #         reference_number=expense_data.get("reference_number", ""),
# #         notes=expense_data.get("notes", "")
# #     )
    
# #     db.add(new_expense)
# #     db.commit()
# #     return {"message": "Expense recorded successfully", "expense_id": new_expense.id}


# @app.get("/api/expenses" , dependencies=[Depends(require_tier("ENTERPRISE"))])
# def get_expenses(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     expenses = db.query(ExpenseDB)\
#         .filter(ExpenseDB.store_id == current_store.id)\
#         .order_by(ExpenseDB.purchase_date.desc())\
#         .all()
        
#     # Return clean mapped representation matching your database columns
#     return [
#         {
#             "id": exp.id,
#             "expense_number": exp.expense_number,
#             "invoice_number": exp.invoice_number,
#             "po_number": exp.po_number,
#             "purchase_date": exp.purchase_date,
#             "due_date": exp.due_date,
#             "document_title": exp.document_title,
#             "subtitle": exp.subtitle,
#             "vendor_name": exp.vendor_name,
#             "subtotal": exp.subtotal,
#             "tax_total": exp.tax_total,
#             "cgst_total": exp.cgst_total,
#             "sgst_total": exp.sgst_total,
#             "grand_total": exp.grand_total,
#             "is_recurring": exp.is_recurring,
#             "recurring_cycle": exp.recurring_cycle,
#             "items": [
#                 {
#                     "name": item.name,
#                     "hsn": item.hsn,
#                     "gst_rate": item.gst_rate,
#                     "qty": item.qty,
#                     "rate": item.rate,
#                     "amount": item.amount,
#                     "cgst": item.cgst,
#                     "sgst": item.sgst,
#                     "total": item.total,
#                     "description": item.description
#                 } for item in exp.items
#             ]
#         }
#         for exp in expenses
#     ]

# class ExpenseItemSchema(BaseModel):
#     name: str
#     hsn: Optional[str] = ""
#     gst_rate: Optional[float] = 18.0
#     qty: Optional[float] = 1.0
#     rate: Optional[float] = 0.0
#     amount: Optional[float] = 0.0
#     cgst: Optional[float] = 0.0
#     sgst: Optional[float] = 0.0
#     total: Optional[float] = 0.0
#     description: Optional[str] = ""

# class ExpenseCreateSchema(BaseModel):
#     expense_number: str
#     invoice_number: Optional[str] = ""
#     po_number: Optional[str] = ""
#     purchase_date: datetime
#     due_date: Optional[datetime] = None
#     document_title: Optional[str] = "Expense"
#     subtitle: Optional[str] = ""
#     vendor_id: Optional[int] = None
#     vendor_name: Optional[str] = "Unknown Vendor"
#     subtotal: float
#     tax_total: float
#     cgst_total: Optional[float] = 0.0
#     sgst_total: Optional[float] = 0.0
#     grand_total: float
#     payment_method: Optional[str] = "Bank Transfer"
#     notes: Optional[str] = ""
#     items: List[ExpenseItemSchema]
#     is_recurring: Optional[bool] = False
#     recurring_cycle: Optional[str] = None






# # @app.post("/api/expenses")
# # def create_expense(
# #     payload: dict,
# #     db: Session = Depends(get_db),
# #     current_store: dict = Depends(get_current_store)
# # ):
# #     # 1. Create the main document
# #     new_expense = ExpenseDB(
# #         store_id=current_store.id,
# #         expense_number=payload.get("expense_number", f"EXP-{int(datetime.now().timestamp())}"),
# #         vendor_name=payload.get("vendor_name", "Unknown Vendor"),
# #         purchase_date=datetime.fromisoformat(payload.get("purchase_date")) if payload.get("purchase_date") else func.now(),
# #         subtotal=float(payload.get("subtotal", 0.0)),
# #         tax_total=float(payload.get("tax_total", 0.0)),
# #         grand_total=float(payload.get("grand_total", 0.0)),
# #         notes=payload.get("notes", "")
# #     )
    
# #     db.add(new_expense)
# #     db.flush() # Flush to assign new_expense.id

# #     # 2. Create the associated line items
# #     items_data = payload.get("items", [])
# #     # for item in items_data:
# #     #     new_item = ExpenseItemDB(
# #     #         expense_id=new_expense.id,
# #     #         name=item.get("name", "Item"),
# #     #         hsn_sac_code=item.get("hsn", ""),
# #     #         quantity=float(item.get("qty", 1.0)),
# #     #         rate=float(item.get("rate", 0.0)),
# #     #         tax_rate=float(item.get("gst", 0.0)),
# #     #         total_amount=float(item.get("total", 0.0))
# #     #     )
# #     #     db.add(new_item)

# #     # db.commit()

# #     for item in payload.items:
# #             # Handle both dictionary access or Pydantic attribute access safely
# #             item_data = item.dict() if hasattr(item, 'dict') else item
            
# #             db_item = ExpenseItemDB(
# #                 expense_id=db_expense.id,
# #                 name=item_data.get("name") or "Unnamed Expense",
# #                 hsn=item_data.get("hsn") or item_data.get("hsn_sac_code") or "",
# #                 gst_rate=float(item_data.get("gst_rate", 18.0)),
# #                 qty=float(item_data.get("qty", 1.0)),
# #                 rate=float(item_data.get("rate", 0.0)),
# #                 amount=float(item_data.get("amount", 0.0)),
# #                 cgst=float(item_data.get("cgst", 0.0)),
# #                 sgst=float(item_data.get("sgst", 0.0)),
# #                 total=float(item_data.get("total", 0.0)),
# #                 description=item_data.get("description", "")
# #             )
# #             db.add(db_item)

# #     db.commit()
# #     return {"message": "Expense recorded successfully", "expense_id": new_expense.id}


# @app.post("/api/expenses" , dependencies=[Depends(require_tier("ENTERPRISE"))])
# def create_expense(
#     payload: ExpenseCreateSchema,
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     try:
#         # 1. Create Main Expense Record
#         db_expense = ExpenseDB(
#             store_id=current_store.id,
#             expense_number=payload.expense_number,
#             invoice_number=payload.invoice_number,
#             po_number=payload.po_number,
#             purchase_date=payload.purchase_date,
#             due_date=payload.due_date,
#             document_title=payload.document_title,
#             subtitle=payload.subtitle,
#             vendor_id=payload.vendor_id,
#             vendor_name=payload.vendor_name,
#             subtotal=payload.subtotal,
#             tax_total=payload.tax_total,
#             cgst_total=payload.cgst_total,
#             sgst_total=payload.sgst_total,
#             grand_total=payload.grand_total,
#             payment_method=payload.payment_method,
#             notes=payload.notes,
#             is_recurring=1 if payload.is_recurring else 0,
#             recurring_cycle=payload.recurring_cycle
#         )
        
#         db.add(db_expense)
#         db.flush() # Flushes to generate the db_expense.id for child item relationships

#         # 2. Create Child Line Items
#         for item in payload.items:
#             db_item = ExpenseItemDB(
#                 expense_id=db_expense.id,
#                 name=item.name or "Unnamed Item",
#                 hsn=item.hsn,
#                 gst_rate=item.gst_rate,
#                 qty=item.qty,
#                 rate=item.rate,
#                 amount=item.amount,
#                 cgst=item.cgst,
#                 sgst=item.sgst,
#                 total=item.total,
#                 description=item.description
#             )
#             db.add(db_item)

#         db.commit()
#         db.refresh(db_expense)
        
#         return {"message": "Expense created successfully", "expense_id": db_expense.id}

#     except Exception as e:
#         db.rollback()
#         raise HTTPException(status_code=500, detail=f"Database commit error: {str(e)}")
    


# @app.get("/api/vendors")
# def get_vendors(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # Fetch vendors belonging to the active store
#     vendors = db.query(VendorDB).filter(VendorDB.store_id == current_store.id).all()
    
#     return [
#         {
#             "id": v.id,
#             "name": v.name,
#             "gstin": v.gstin,
#             "address": v.address,
#             "phone": v.phone,
#             "email": v.email
#         } 
#         for v in vendors
#     ]

# class TenantStaffCreate(BaseModel):
#     name: str
#     email: str
#     password: str
#     tenant_role: str # MANAGER, CASHIER, INVENTORY

# @app.get("/api/store/staff")
# def get_store_staff(
#     db: Session = Depends(get_db),
#     current_user: StoreDB = Depends(get_current_store)
# ):
#     # Only the Store Admin (root account) can fetch this list
#     if getattr(current_user, 'hq_role', 'TENANT') != 'TENANT':
#         raise HTTPException(status_code=403, detail="Only store admins can view staff.")

#     staff = db.query(TenantStaff).filter(TenantStaff.store_id == current_user.id).all()
#     return [
#         {
#             "id": s.id,
#             "name": s.name,
#             "email": s.email,
#             "tenant_role": s.tenant_role,
#             "is_active": s.is_active
#         } for s in staff
#     ]

# @app.post("/api/store/staff")
# def create_store_staff(
#     payload: TenantStaffCreate,
#     db: Session = Depends(get_db),
#     current_user: StoreDB = Depends(get_current_store)
# ):
#     # Security Check: Ensure only the root store admin is creating staff
#     if getattr(current_user, 'hq_role', 'TENANT') != 'TENANT':
#         raise HTTPException(status_code=403, detail="Only store admins can provision staff.")

#     # Prevent email collisions across the entire platform
#     existing_store = db.query(StoreDB).filter(StoreDB.email == payload.email).first()
#     existing_staff = db.query(TenantStaff).filter(TenantStaff.email == payload.email).first()
#     if existing_store or existing_staff:
#         raise HTTPException(status_code=400, detail="Email is already registered.")

#     hashed_pw = bcrypt.hashpw(payload.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

#     new_staff = TenantStaff(
#         store_id=current_user.id, # Bind strictly to the admin's store ID
#         name=payload.name,
#         email=payload.email,
#         hashed_password=hashed_pw,
#         tenant_role=payload.tenant_role
#     )

#     db.add(new_staff)
#     db.commit()
#     db.refresh(new_staff)

#     return {"message": "Staff member provisioned successfully.", "id": new_staff.id}



# # --- STEP 1: VERIFY CREDENTIALS & SEND OTP ---
# @app.post("/api/auth/login/initiate")
# def initiate_login(credentials: StoreLogin, db: Session = Depends(get_db)):
#     user = None
#     user_type = None

#     # 1. Check Store Owners
#     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
#     if store and verify_password(credentials.password, store.hashed_password):
#         user = store
#         user_type = "OWNER"
    
#     # 2. Check HQ Staff (Superadmin)
#     if not user:
#         hq_staff = db.query(StaffUser).filter(StaffUser.email == credentials.email).first()
#         if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
#             user = hq_staff
#             user_type = "HQ_STAFF"

#     # 3. Check Tenant Staff (Employees)
#     if not user:
#         tenant_staff = db.query(TenantStaff).filter(TenantStaff.email == credentials.email).first()
#         if tenant_staff and verify_password(credentials.password, tenant_staff.hashed_password):
#             if not tenant_staff.is_active:
#                 raise HTTPException(status_code=403, detail="Employee account is deactivated.")
#             user = tenant_staff
#             user_type = "TENANT_STAFF"

#     if not user:
#         raise HTTPException(status_code=401, detail="Invalid email or password")

#     # Generate and Store OTP
#     otp = generate_otp()
    
#     # Store temporary session data needed to construct the JWT later
#     OTP_STORE[credentials.email] = {
#         "otp": otp,
#         "expires_at": datetime.utcnow() + timedelta(minutes=5),
#         "user_data": {
#             "id": user.id,
#             "email": user.email,
#             "user_type": user_type,
#             # Pass up specific attributes based on the user type
#             "store_id": getattr(user, "store_id", user.id if user_type == "OWNER" else None),
#             "role": getattr(user, "hq_role", getattr(user, "tenant_role", "OWNER")),
#             # --- ADD THESE 3 NEW LINES ---
#                 "subscription_status": getattr(store, 'subscription_status', 'TRIAL'),
#                 "trial_ends_at": store.trial_ends_at.isoformat() if getattr(store, 'trial_ends_at', None) else None,
#                 "tier": getattr(store, 'subscription_tier', 'BASIC')
#         }
#     }

#     # Send Email
#     send_otp_email(credentials.email, otp)
    
#     # DEV ONLY: Print OTP to console to avoid actual email limits during testing
#     print(f"--- DEVELOPMENT OTP FOR {credentials.email} IS {otp} ---")

#     return {"message": "OTP sent successfully to email", "requires_otp": True}


# # --- STEP 2: VERIFY OTP & ISSUE JWT ---
# @app.post("/api/auth/login/verify")
# def verify_login_otp(req: OTPVerifyRequest):
#     session = OTP_STORE.get(req.email)

#     if not session:
#         raise HTTPException(status_code=400, detail="OTP session expired or invalid. Please login again.")
    
#     if datetime.utcnow() > session["expires_at"]:
#         del OTP_STORE[req.email]
#         raise HTTPException(status_code=400, detail="OTP expired.")

#     if session["otp"] != req.otp:
#         raise HTTPException(status_code=401, detail="Incorrect OTP.")

#     # OTP is valid! Construct JWT payload using the stored session data
#     user_data = session["user_data"]
    
#     token_payload = {
#         "sub": str(user_data["id"]),
#         "email": user_data["email"],
#         "user_type": user_data["user_type"],
#         "store_id": user_data["store_id"],
#         "role": user_data["role"]
#     }

#     # Generate standard JWT (Assuming you have this function from your original setup)
#     access_token = create_access_token(data=token_payload)

#     # Clean up OTP store
#     del OTP_STORE[req.email]

#     return {
#         "access_token": access_token,
#         "token_type": "bearer",
#         "user": user_data
#     }



# @app.post("/api/admin/fix-legacy-trials")
# def fix_legacy_trials(db: Session = Depends(get_db)):
#     """
#     TEMPORARY SCRIPT: Run this once to fix old database entries.
#     """
#     stores = db.query(StoreDB).all()
#     updated_count = 0
    
#     for store in stores:
#         # If they don't have a trial end date, give them 5 days starting NOW.
#         if not store.trial_ends_at:
#             store.trial_ends_at = datetime.now(timezone.utc) + timedelta(days=5)
#             store.subscription_status = "TRIAL"
            
#             # If they don't have a tier, default them to GROWTH
#             if not store.subscription_tier:
#                 store.subscription_tier = "GROWTH"
                
#             updated_count += 1
            
#     db.commit()
    
#     return {"message": f"Successfully updated {updated_count} legacy stores with a 5-day trial."}



# # 1. Define the Strict JSON Schema for the AI
# class ReceiptItem(BaseModel):
#     description: str
#     quantity: float
#     rate: float
#     total: float

# class ExtractedReceipt(BaseModel):
#     vendor_name: str
#     date: str
#     subtotal: float
#     tax_amount: float
#     grand_total: float
#     items: List[ReceiptItem]

# # 2. Define the Endpoint
# # @app.post("/api/ai/parse-receipt", response_model=ExtractedReceipt)
# # async def parse_receipt(file: UploadFile = File(...)):
# #     if not file.content_type.startswith("image/"):
# #         raise HTTPException(status_code=400, detail="File must be an image")

# #     try:
# #         # Read the uploaded image into memory
# #         image_bytes = await file.read()
# #         image = Image.open(io.BytesIO(image_bytes))

# #         # Initialize the Gemini Client (auto-detects GEMINI_API_KEY from env)
# #         client = genai.Client()

# #         # Build the prompt
# #         prompt = """
# #         Analyze this receipt image. It may be crumpled or poorly lit.
# #         Extract the vendor name, date (YYYY-MM-DD), line items (with quantities and rates), subtotal, tax, and grand total.
# #         If a value is obscured, use your best logical deduction.
# #         Return exactly the requested JSON structure.
# #         """

# #         # Call Gemini 1.5 Flash with Structured Outputs
# #         response = client.models.generate_content(
# #             model='gemini-1.5-flash',
# #             contents=[image, prompt],
# #             config=types.GenerateContentConfig(
# #                 response_mime_type="application/json",
# #                 response_schema=ExtractedReceipt,
# #                 temperature=0.1, # Low temperature forces factual extraction over creativity
# #             ),
# #         )

# #         # Parse the AI string response directly into JSON
# #         extracted_data = json.loads(response.text)
# #         return extracted_data

# #     except Exception as e:
# #         print(f"Gemini AI Error: {e}")
# #         raise HTTPException(status_code=500, detail="Failed to parse receipt using AI")


# @app.post("/api/ai/parse-receipt", response_model=ExtractedReceipt)
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



# class LeadDB(Base):
#     __tablename__ = "leads"
#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
#     contact_name = Column(String, nullable=False)
#     company_name = Column(String)
#     email = Column(String)
#     phone = Column(String)
#     estimated_value = Column(Float, default=0.0)
#     stage = Column(String, default="LEAD") # LEAD, CONTACTED, PROPOSAL, WON, LOST
#     notes = Column(String)
#     created_at = Column(DateTime, default=func.now())


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

# # ==========================================
# # SUPERADMIN BOOTSTRAP (Use once, then delete)
# # ==========================================
# @app.post("/api/bootstrap-superadmin")
# def make_me_superadmin(email: str, db: Session = Depends(get_db)):
#     """
#     Temporary endpoint to elevate your personal account.
#     Pass your login email in the JSON body: {"email": "your@email.com"}
#     """
#     store = db.query(StoreDB).filter(StoreDB.email == email).first()
#     if not store:
#         return {"error": "Store not found"}
    
#     store.is_superadmin = True
#     db.commit()
#     return {"message": f"{email} is now a Superadmin."}



# class TierUpdate(BaseModel):
#     tier: str

# @app.put("/api/hq/stores/{store_id}/tier")
# def update_store_tier(store_id: int, payload: TierUpdate, db: Session = Depends(get_db)):
#     store = db.query(StoreDB).filter(StoreDB.id == store_id).first()
#     if not store:
#         raise HTTPException(status_code=404, detail="Store not found")
    
#     store.subscription_tier = payload.tier
#     store.subscription_status = "ACTIVE" # Clear the TRIAL status
#     db.commit()
#     return {"message": "Store upgraded successfully"}

# class ProvisionTenant(BaseModel):
#     storeName: str
#     email: str
#     password: str
#     tier: str

# @app.post("/api/hq/stores/provision")
# def provision_tenant(payload: ProvisionTenant, db: Session = Depends(get_db)):
#     existing = db.query(StoreDB).filter(StoreDB.email == payload.email).first()
#     if existing:
#         raise HTTPException(status_code=400, detail="Email already exists")
        
#     hashed_pwd = get_password_hash(payload.password)
#     new_store = StoreDB(
#         storeName=payload.storeName,
#         email=payload.email,
#         hashed_password=hashed_pwd,
#         subscription_tier=payload.tier,
#         subscription_status="ACTIVE"
#     )
#     db.add(new_store)
#     db.commit()
#     db.refresh(new_store)
    
#     return {
#         "id": new_store.id,
#         "name": new_store.storeName,
#         "email": new_store.email,
#         "tier": new_store.subscription_tier,
#         "status": new_store.subscription_status
#     }


# # 1. Define the structured schema for what the AI should extract from natural language
# class SearchIntent(BaseModel):
#     query_type: str = Field(description="The type of entity being searched, e.g., 'invoice', 'customer', 'product'")
#     target_date: Optional[str] = Field(None, description="Specific date mentioned in YYYY-MM-DD format if applicable")
#     start_date: Optional[str] = Field(None, description="Start date for a range in YYYY-MM-DD format")
#     end_date: Optional[str] = Field(None, description="End date for a range in YYYY-MM-DD format")
#     search_keyword: Optional[str] = Field(None, description="Any name, invoice number, or text keyword mentioned")

# # @app.get("/api/ai/natural-search")
# # def natural_language_search(
# #     q: str = Query(..., description="The natural language search query"),
# #     db: Session = Depends(get_db),
# #     current_store: StoreDB = Depends(get_current_store)
# # ):
# #     try:
# #         # Initialize the Gemini client
# #         client = genai.Client()
        
# #         prompt = f"""
# #         Analyze this search query from a store management system: "{q}"
# #         Today's current date is {datetime.now().strftime('%Y-%m-%d')}.
# #         Extract the search intent, any dates (convert relative terms like 'yesterday' or '3rd october' into explicit YYYY-MM-DD format assuming current year 2026), and any keywords.
# #         """

# #         # Call Gemini with Structured Outputs
# #         response = client.models.generate_content(
# #             model='gemini-2.5-flash',
# #             contents=prompt,
# #             config=types.GenerateContentConfig(
# #                 response_mime_type="application/json",
# #                 response_schema=SearchIntent,
# #                 temperature=0.0 # Zero temperature for strict deterministic extraction
# #             ),
# #         )

# #         intent = json.loads(response.text)
        
# #         # 2. Translate extracted intent into a dynamic database query
# #         query = db.query(InvoiceDB).filter(InvoiceDB.store_id == current_store.id)

# #         # Handle Date Filtering
# #         if intent.get("target_date"):
# #             target_dt = datetime.strptime(intent["target_date"], "%Y-%m-%d")
# #             start_of_day = target_dt.replace(hour=0, minute=0, second=0, microsecond=0)
# #             end_of_day = target_dt.replace(hour=23, minute=59, second=59, microsecond=999999)
# #             query = query.filter(InvoiceDB.created_at >= start_of_day, InvoiceDB.created_at <= end_of_day)

# #         # Handle Keywords (Invoice number, customer name, etc.)
# #         if intent.get("search_keyword"):
# #             keyword = f"%{intent['search_keyword']}%"
# #             query = query.filter(
# #                 (InvoiceDB.invoice_number.ilike(keyword)) | 
# #                 (InvoiceDB.customer_name.ilike(keyword))
# #             )

# #         invoices = query.order_by(desc(InvoiceDB.created_at)).all()

# #         return {
# #             "intent": intent,
# #             "results": [
# #                 {
# #                     "id": inv.id,
# #                     "invoice_number": inv.invoice_number,
# #                     "date": inv.created_at.isoformat(),
# #                     "customer_name": inv.customer_name,
# #                     "total_amount": inv.total_amount,
# #                     "payment_method": inv.payment_method
# #                 } for inv in invoices
# #             ]
# #         }

# #     except Exception as e:
# #         print(f"Natural Search AI Error: {str(e)}")
# #         raise HTTPException(status_code=500, detail="Failed to process natural language search.")

# @app.get("/api/ai/natural-search")
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


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Database and Models
from database import engine
import models

# Import compartmentalized routes
from routes import (
    auth_routes,
    store,
    billing,
    expenses,
    analytics,
    ai,
    hq,
    subscriptions,
    pricing,
construction_assets,
legal_assets, pharmacy_assets, rental_assets, restaurant_assets)
from dotenv import load_dotenv
load_dotenv() # Loads the GEMINI_API_KEY into os.environ

# Initialize Database tables automatically if they don't exist
models.Base.metadata.create_all(bind=engine)

# Initialize FastAPI App
app = FastAPI(
    title="GD Billing Identity API",
    description="Modular backend for the Laxvira B2B & Retail Platform",
    version="2.0.0"
)

# CORS Middleware Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Wire up all route compartments
app.include_router(auth_routes.router)
app.include_router(store.router)
app.include_router(billing.router)
app.include_router(expenses.router)
app.include_router(analytics.router)
app.include_router(ai.router)
app.include_router(hq.router)
app.include_router(subscriptions.router)
app.include_router(pricing.router)
app.include_router(construction_assets.router)
app.include_router(legal_assets.router)
app.include_router(pharmacy_assets.router)
app.include_router(rental_assets.router)
app.include_router(restaurant_assets.router)

# Optional: Add a simple health check route at the root for easy uptime monitoring
@app.get("/", tags=["System"])
def health_check():
    return {"status": "online", "message": "GD Billing API is running."}