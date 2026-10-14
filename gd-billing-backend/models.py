# # # # models.py
# # # from pydantic import BaseModel, EmailStr, Field
# # # from typing import Optional

# # # class StoreRegistration(BaseModel):
# # #     storeName: str = Field(..., min_length=2)
# # #     ownerName: str = Field(..., min_length=2)
# # #     email: EmailStr
# # #     password: str = Field(..., min_length=6)

# # # class StoreLogin(BaseModel):
# # #     email: EmailStr
# # #     password: str

# # # class StoreSettings(BaseModel):
# # #     storeName: str
# # #     ownerName: str
# # #     email: str
# # #     phone: Optional[str] = ""
# # #     address: Optional[str] = ""
# # #     gstin: Optional[str] = ""
# # #     currency: str = "INR"

# # # class TokenResponse(BaseModel):
# # #     access_token: str
# # #     token_type: str = "bearer"
# # #     store_id: str

# # # models.py
# # from sqlalchemy import Column, Integer, String, Boolean, JSON, Float, ForeignKey, DateTime
# # from sqlalchemy.orm import declarative_base
# # from pydantic import BaseModel, EmailStr, Field
# # from typing import Optional, List
# # from database import Base
# # from sqlalchemy.orm import relationship
# # from datetime import datetime, timezone

# # # --- SQLAlchemy Database Model ---
# # # class StoreDB(Base):
# # #     __tablename__ = "stores"

# # #     id = Column(Integer, primary_key=True, index=True)
# # #     storeName = Column(String, index=True)
# # #     ownerName = Column(String)
# # #     email = Column(String, unique=True, index=True)
# # #     password = Column(String)
# # #     phone = Column(String, default="")
# # #     address = Column(String, default="")
# # #     gstin = Column(String, default="")
# # #     currency = Column(String, default="INR")
# # class StoreDB(Base):
# #     __tablename__ = "stores"

# #     id = Column(Integer, primary_key=True, index=True)
# #     storeName = Column(String, index=True)
# #     ownerName = Column(String)
# #     email = Column(String, unique=True, index=True)
# #     password = Column(String)
# #     phone = Column(String, default="")
# #     address = Column(String, default="")
# #     gstin = Column(String, default="")
# #     currency = Column(String, default="INR")
    
# #     # Onboarding & Dynamic Store Data
# #     is_onboarded = Column(Boolean, default=False)
# #     inventory = Column(JSON, default=list)  # Stores products added during setup
# #     staff = Column(JSON, default=list)      # Stores staff members added during setup

# # # --- Pydantic API Schemas ---
# # class StoreRegistration(BaseModel):
# #      storeName: str = Field(..., min_length=2)
# #      ownerName: str = Field(..., min_length=2)
# #      email: EmailStr
# #      password: str = Field(..., min_length=6)

# # class StoreLogin(BaseModel):
# #      email: EmailStr
# #      password: str

# # class StoreSettings(BaseModel):
# #      storeName: str
# #      ownerName: str
# #      email: str
# #      phone: Optional[str] = ""
# #      address: Optional[str] = ""
# #      gstin: Optional[str] = ""
# #      currency: str = "INR"

# #      class Config:
# #          from_attributes = True

# # class TokenResponse(BaseModel):
# #      access_token: str
# #      token_type: str = "bearer"
# #      store_id: str

# # # # Pydantic Schemas for Onboarding Setup
# # class SetupWizardData(BaseModel):
# #      phone: Optional[str] = ""
# #      address: Optional[str] = ""
# #      gstin: Optional[str] = ""
# #      currency: Optional[str] = "INR"
# #      inventory: Optional[List[dict]] = []
# #      staff: Optional[List[dict]] = []

# # # --- New SQLAlchemy Models ---

# # class ProductDB(Base):
# #     __tablename__ = "products"

# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
# #     name = Column(String, index=True)
# #     category = Column(String, default="General")
# #     price = Column(Float)
# #     stock = Column(Integer, default=0)
# #     barcode = Column(String, nullable=True)

# # class InvoiceDB(Base):
# #     __tablename__ = "invoices"

# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
# #     customer_name = Column(String, default="Walk-in Customer")
# #     customer_phone = Column(String, nullable=True)
# #     total_amount = Column(Float)
# #     payment_method = Column(String, default="UPI")
# #     created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

# #     items = relationship("InvoiceItemDB", backref="invoice")

# # class InvoiceItemDB(Base):
# #     __tablename__ = "invoice_items"

# #     id = Column(Integer, primary_key=True, index=True)
# #     invoice_id = Column(Integer, ForeignKey("invoices.id"))
# #     product_id = Column(Integer, ForeignKey("products.id"))
# #     quantity = Column(Integer)
# #     price_at_time = Column(Float) # Stores the price in case product price changes later


# # # --- New Pydantic API Schemas ---

# # class ProductCreate(BaseModel):
# #     name: str = Field(..., min_length=2)
# #     category: str = "General"
# #     price: float = Field(..., gt=0)
# #     stock: int = Field(default=0, ge=0)
# #     barcode: str | None = None

# # class ProductResponse(ProductCreate):
# #     id: int
# #     store_id: int

# #     class Config:
# #         from_attributes = True

# # class InvoiceItemCreate(BaseModel):
# #     product_id: int
# #     quantity: int = Field(..., gt=0)
# #     price_at_time: float

# # class InvoiceCreate(BaseModel):
# #     customer_name: str = "Walk-in Customer"
# #     customer_phone: str | None = None
# #     total_amount: float
# #     payment_method: str = "UPI"
# #     items: list[InvoiceItemCreate]

# # from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Boolean, Enum
# # from sqlalchemy.orm import relationship
# # from datetime import datetime, timezone
# # import enum
# # from database import Base # Assuming you have a Base mapped in database.py
# # from pydantic import BaseModel, Field, EmailStr
# # from typing import List, Optional
# # from datetime import datetime




# # # # --- Pydantic API Schemas ---
# # class StoreRegistration(BaseModel):
# #      storeName: str = Field(..., min_length=2)
# #      ownerName: str = Field(..., min_length=2)
# #      email: EmailStr
# #      password: str = Field(..., min_length=6)

# # class StoreLogin(BaseModel):
# #      email: EmailStr
# #      password: str

# # class StoreSettings(BaseModel):
# #      storeName: str
# #      ownerName: str
# #      email: str
# #      phone: Optional[str] = ""
# #      address: Optional[str] = ""
# #      gstin: Optional[str] = ""
# #      currency: str = "INR"

# #      class Config:
# #          from_attributes = True

# # class TokenResponse(BaseModel):
# #      access_token: str
# #      token_type: str = "bearer"
# #      store_id: str

# # # # Pydantic Schemas for Onboarding Setup
# # class SetupWizardData(BaseModel):
# #      phone: Optional[str] = ""
# #      address: Optional[str] = ""
# #      gstin: Optional[str] = ""
# #      currency: Optional[str] = "INR"
# #      inventory: Optional[List[dict]] = []
# #      staff: Optional[List[dict]] = []

# # # --- CUSTOMER SCHEMAS ---
# # class CustomerCreate(BaseModel):
# #     company_name: str = Field(..., min_length=2)
# #     contact_person: Optional[str] = None
# #     email: Optional[str] = None
# #     phone: Optional[str] = None
# #     billing_address: str
# #     shipping_address: Optional[str] = None
# #     gstin: Optional[str] = None
# #     place_of_supply: Optional[str] = None

# # class CustomerResponse(CustomerCreate):
# #     id: int
# #     store_id: int
# #     class Config:
# #         from_attributes = True

# # # --- DOCUMENT ITEM SCHEMAS ---
# # class DocumentItemCreate(BaseModel):
# #     product_id: Optional[int] = None
# #     name: str
# #     hsn_sac_code: Optional[str] = None
# #     quantity: float
# #     unit: str = "pcs"
# #     rate: float
# #     discount_amount: float = 0.0
# #     tax_rate: float
# #     tax_amount: float
# #     total_amount: float

# # # --- QUOTATION SCHEMAS ---
# # class QuotationCreate(BaseModel):
# #     customer_id: int
# #     valid_until: Optional[datetime] = None
# #     subtotal: float
# #     discount_total: float = 0.0
# #     tax_total: float
# #     grand_total: float
# #     terms_conditions: Optional[str] = None
# #     notes: Optional[str] = None
# #     items: List[DocumentItemCreate]

# # # --- INVOICE SCHEMAS ---
# # class InvoiceCreate(QuotationCreate):
# #     quotation_id: Optional[int] = None
# #     due_date: Optional[datetime] = None
# #     amount_paid: float = 0.0
# #     payment_method: Optional[str] = None

# # # --- ENUMS ---
# # class DocumentStatus(str, enum.Enum):
# #     DRAFT = "Draft"
# #     SENT = "Sent"
# #     VIEWED = "Viewed"
# #     ACCEPTED = "Accepted"
# #     REJECTED = "Rejected"
# #     CONVERTED = "Converted" # For Quotations turned into Invoices

# # class InvoiceStatus(str, enum.Enum):
# #     UNPAID = "Unpaid"
# #     PARTIAL = "Partial"
# #     PAID = "Paid"
# #     OVERDUE = "Overdue"

# # # --- CORE B2B ENTITIES ---

# # class StoreDB(Base):
# #     __tablename__ = "stores"
# #     id = Column(Integer, primary_key=True, index=True)
# #     storeName = Column(String, index=True)
# #     ownerName = Column(String)
# #     phone = Column(String)
# #     email = Column(String, unique=True, index=True)
# #     address = Column(String)
# #     gstin = Column(String, nullable=True)
# #     currency = Column(String, default="INR")
# #     hashed_password = Column(String)
# #     is_onboarded = Column(Boolean, default=False)

# # class CustomerDB(Base):
# #     __tablename__ = "customers"
# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
# #     company_name = Column(String, index=True)
# #     contact_person = Column(String, nullable=True)
# #     email = Column(String, nullable=True)
# #     phone = Column(String, nullable=True)
# #     billing_address = Column(String)
# #     shipping_address = Column(String, nullable=True)
# #     gstin = Column(String, nullable=True)
# #     place_of_supply = Column(String, nullable=True) # E.g., "Maharashtra(27)"
# #     created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

# # class ProductDB(Base):
# #     __tablename__ = "products"
# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
# #     name = Column(String, index=True)
# #     description = Column(String, nullable=True)
# #     item_type = Column(String, default="Goods") # "Goods" or "Service"
# #     hsn_sac_code = Column(String, nullable=True)
# #     price = Column(Float)
# #     tax_rate = Column(Float, default=18.0) # GST %
# #     unit = Column(String, default="pcs") # pcs, hours, kg, etc.
# #     stock = Column(Integer, default=0)
# #     barcode = Column(String, nullable=True)

# # # --- DOCUMENTS ---

# # class QuotationDB(Base):
# #     __tablename__ = "quotations"
# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
# #     customer_id = Column(Integer, ForeignKey("customers.id"), index=True)
    
# #     quotation_number = Column(String, unique=True, index=True)
# #     issue_date = Column(DateTime, default=lambda: datetime.now(timezone.utc))
# #     valid_until = Column(DateTime, nullable=True)
    
# #     subtotal = Column(Float, default=0.0)
# #     discount_total = Column(Float, default=0.0)
# #     tax_total = Column(Float, default=0.0)
# #     grand_total = Column(Float, default=0.0)
    
# #     terms_conditions = Column(String, nullable=True)
# #     notes = Column(String, nullable=True)
# #     status = Column(Enum(DocumentStatus), default=DocumentStatus.DRAFT)
    
# #     items = relationship("QuotationItemDB", backref="quotation", cascade="all, delete-orphan")

# # class QuotationItemDB(Base):
# #     __tablename__ = "quotation_items"
# #     id = Column(Integer, primary_key=True, index=True)
# #     quotation_id = Column(Integer, ForeignKey("quotations.id"))
# #     product_id = Column(Integer, ForeignKey("products.id"), nullable=True)
    
# #     # Snapshot data (in case product price/tax changes later)
# #     name = Column(String)
# #     hsn_sac_code = Column(String, nullable=True)
# #     quantity = Column(Float)
# #     unit = Column(String)
# #     rate = Column(Float)
# #     discount_amount = Column(Float, default=0.0)
# #     tax_rate = Column(Float)
# #     tax_amount = Column(Float)
# #     total_amount = Column(Float)

# # class InvoiceDB(Base):
# #     __tablename__ = "invoices"
# #     id = Column(Integer, primary_key=True, index=True)
# #     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
# #     customer_id = Column(Integer, ForeignKey("customers.id"), index=True)
# #     quotation_id = Column(Integer, ForeignKey("quotations.id"), nullable=True) # If converted from Quote
    
# #     invoice_number = Column(String, unique=True, index=True)
# #     issue_date = Column(DateTime, default=lambda: datetime.now(timezone.utc))
# #     due_date = Column(DateTime, nullable=True)
    
# #     subtotal = Column(Float, default=0.0)
# #     discount_total = Column(Float, default=0.0)
# #     tax_total = Column(Float, default=0.0)
# #     grand_total = Column(Float, default=0.0)
# #     amount_paid = Column(Float, default=0.0)
    
# #     terms_conditions = Column(String, nullable=True)
# #     notes = Column(String, nullable=True)
# #     payment_method = Column(String, nullable=True)
# #     status = Column(Enum(InvoiceStatus), default=InvoiceStatus.UNPAID)
    
# #     items = relationship("InvoiceItemDB", backref="invoice", cascade="all, delete-orphan")

# # class InvoiceItemDB(Base):
# #     __tablename__ = "invoice_items"
# #     id = Column(Integer, primary_key=True, index=True)
# #     invoice_id = Column(Integer, ForeignKey("invoices.id"))
# #     product_id = Column(Integer, ForeignKey("products.id"), nullable=True)
    
# #     name = Column(String)
# #     hsn_sac_code = Column(String, nullable=True)
# #     quantity = Column(Float)
# #     unit = Column(String)
# #     rate = Column(Float)
# #     discount_amount = Column(Float, default=0.0)
# #     tax_rate = Column(Float)
# #     tax_amount = Column(Float)
# #     total_amount = Column(Float)

# import enum
# from datetime import datetime, timezone, timedelta
# from typing import List, Optional
# from pydantic import BaseModel, Field
# from sqlalchemy import Column, Integer, String, Float, Text, ForeignKey, DateTime, Boolean, Enum as SQLEnum
# from sqlalchemy.orm import relationship
# from sqlalchemy.sql import func
# from database import Base
# import uuid


# # ==========================================
# # 1. ENUMS
# # ==========================================
# class DocumentStatus(str, enum.Enum):
#     DRAFT = "Draft"
#     SENT = "Sent"
#     VIEWED = "Viewed"
#     ACCEPTED = "Accepted"
#     REJECTED = "Rejected"
#     CONVERTED = "Converted"

# class InvoiceStatus(str, enum.Enum):
#     UNPAID = "Unpaid"
#     PARTIAL = "Partial"
#     PAID = "Paid"
#     OVERDUE = "Overdue"

# # Define the allowed industries
# class IndustryType(str, enum.Enum):
#     WHOLESALE = "WHOLESALE"
#     RESTAURANT = "RESTAURANT"
#     CONSTRUCTION = "CONSTRUCTION"
#     LEGAL = "LEGAL"
#     RENTAL = "RENTAL"
#     PHARMACY = "PHARMACY"

# # ==========================================
# # 2. SQLALCHEMY MODELS
# # ==========================================
# class StoreDB(Base):
#     __tablename__ = "stores"
#     id = Column(Integer, primary_key=True, index=True)
#     storeName = Column(String, index=True)
#     ownerName = Column(String, nullable=True)
#     phone = Column(String, nullable=True)
#     email = Column(String, unique=True, index=True)
#     address = Column(String, nullable=True)
#     gstin = Column(String, nullable=True)
#     currency = Column(String, default="INR")
#     hashed_password = Column(String)
#     is_onboarded = Column(Boolean, default=False)
#     subscription_tier = Column(String, default="TRIAL")
#     subscription_status = Column(String, default="ACTIVE")
#     trial_ends_at = Column(DateTime, default=lambda: datetime.utcnow() + timedelta(days=5))
#     is_superadmin = Column(Boolean, default=False)
#     is_hq_staff = Column(Boolean, default=False)
#     hq_role = Column(String, default="TENANT")
#     industry_type = Column(SQLEnum(IndustryType), default=IndustryType.WHOLESALE, nullable=False)
#     subscription_tier = Column(String, default="TRIAL")
#     subscription_status = Column(String, default="ACTIVE")
#     trial_ends_at = Column(DateTime, nullable=True)
#     # logo = Column(Text, nullable=True)

# class CustomerDB(Base):
#     __tablename__ = "customers"
#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
#     company_name = Column(String, index=True)
#     contact_person = Column(String, nullable=True)
#     email = Column(String, nullable=True)
#     phone = Column(String, nullable=True)
#     billing_address = Column(String, nullable=True)
#     shipping_address = Column(String, nullable=True)
#     gstin = Column(String, nullable=True)
#     place_of_supply = Column(String, nullable=True)
#     created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

# class ProductDB(Base):
#     __tablename__ = "products"
#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
#     name = Column(String, index=True)
#     category = Column(String, default="General")
#     description = Column(String, nullable=True)
#     item_type = Column(String, default="Goods")
#     hsn_sac_code = Column(String, nullable=True)
#     price = Column(Float)
#     tax_rate = Column(Float, default=18.0)
#     unit = Column(String, default="pcs")
#     stock = Column(Integer, default=0)
#     barcode = Column(String, nullable=True)

# class QuotationDB(Base):
#     __tablename__ = "quotations"
#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
#     customer_id = Column(Integer, ForeignKey("customers.id"), index=True, nullable=True)
    
#     quotation_number = Column(String, unique=True, index=True, nullable=True)
#     issue_date = Column(DateTime, default=lambda: datetime.now(timezone.utc))
#     valid_until = Column(DateTime, nullable=True)
    
#     subtotal = Column(Float, default=0.0)
#     discount_total = Column(Float, default=0.0)
#     tax_total = Column(Float, default=0.0)
#     grand_total = Column(Float, default=0.0)
    
#     terms_conditions = Column(String, nullable=True)
#     notes = Column(String, nullable=True)
#     status = Column(SQLEnum(DocumentStatus), default=DocumentStatus.DRAFT)
    
#     items = relationship("QuotationItemDB", backref="quotation", cascade="all, delete-orphan")
#     # Add these inside your class QuotationDB(Base):
#     template_id = Column(String, server_default="classic")
#     theme_color = Column(String, server_default="#0f172a")

# class QuotationItemDB(Base):
#     __tablename__ = "quotation_items"
#     id = Column(Integer, primary_key=True, index=True)
#     quotation_id = Column(Integer, ForeignKey("quotations.id"))
#     product_id = Column(Integer, ForeignKey("products.id"), nullable=True)
    
#     name = Column(String)
#     hsn_sac_code = Column(String, nullable=True)
#     quantity = Column(Float)
#     unit = Column(String, default="pcs")
#     rate = Column(Float)
#     discount_amount = Column(Float, default=0.0)
#     tax_rate = Column(Float, default=0.0)
#     tax_amount = Column(Float, default=0.0)
#     total_amount = Column(Float)

# class InvoiceDB(Base):
#     __tablename__ = "invoices"
#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"), index=True)
#     customer_id = Column(Integer, ForeignKey("customers.id"), index=True, nullable=True)
#     customer_name = Column(String, default="Walk-in Customer")
#     customer_phone = Column(String, nullable=True)
#     quotation_id = Column(Integer, ForeignKey("quotations.id"), nullable=True)
    
#     invoice_number = Column(String, nullable=True)
#     issue_date = Column(DateTime, default=lambda: datetime.now(timezone.utc))
#     created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
#     due_date = Column(DateTime, nullable=True)
    
#     subtotal = Column(Float, default=0.0)
#     discount_total = Column(Float, default=0.0)
#     tax_total = Column(Float, default=0.0)
#     total_amount = Column(Float, default=0.0)
#     grand_total = Column(Float, default=0.0)
#     amount_paid = Column(Float, default=0.0)
    
#     terms_conditions = Column(String, nullable=True)
#     notes = Column(String, nullable=True)
#     payment_method = Column(String, default="UPI")
#     status = Column(SQLEnum(InvoiceStatus), default=InvoiceStatus.UNPAID)
#     template_id = Column(String, default="classic")
#     theme_color = Column(String, default="#4f46e5")
#     items = relationship("InvoiceItemDB", backref="invoice", cascade="all, delete-orphan")

#     amount_paid = Column(Float, default=0.0)
#     balance_due = Column(Float, default=0.0)
#     payments = relationship("PaymentDB", back_populates="invoice", cascade="all, delete-orphan")
#     public_token = Column(String, unique=True, index=True, default=lambda: uuid.uuid4().hex)
    
    

# class InvoiceItemDB(Base):
#     __tablename__ = "invoice_items"
#     id = Column(Integer, primary_key=True, index=True)
#     invoice_id = Column(Integer, ForeignKey("invoices.id"))
#     product_id = Column(Integer, ForeignKey("products.id"), nullable=True)
    
#     name = Column(String, nullable=True)
#     hsn_sac_code = Column(String, nullable=True)
#     quantity = Column(Float, default=1.0)
#     unit = Column(String, default="pcs")
#     rate = Column(Float, nullable=True)
#     price_at_time = Column(Float, nullable=True)
#     discount_amount = Column(Float, default=0.0)
#     tax_rate = Column(Float, default=0.0)
#     tax_amount = Column(Float, default=0.0)
#     total_amount = Column(Float, nullable=True)

# # ==========================================
# # 3. PYDANTIC SCHEMAS
# # ==========================================

# # --- Auth & Store ---
# class StoreRegistration(BaseModel):
#     storeName: str
#     email: str
#     password: str
#     # tier: str = "GROWTH"
#     industry_type: str = "WHOLESALE"  # <-- ADD THIS: Tells FastAPI to accept the industry
#     selected_tier: str = "GROWTH"     # <-- RENAMED: Matches payload.selected_tier in auth_routes

# class StoreLogin(BaseModel):
#     email: str
#     password: str

# class UserLoginData(BaseModel):
#     id: int
#     email: str
#     is_hq_staff: Optional[bool] = False
#     hq_role: Optional[str] = "TENANT"
#     tier: str = "BASIC"
#     subscription_status: str = "TRIAL"
#     trial_ends_at: Optional[str] = None
        
#         # --- ADD THESE TO PREVENT FASTAPI FROM STRIPPING THEM ---
#     industry: str = "WHOLESALE" 
#     storeName: str = ""
    
# class TokenResponse(BaseModel):
#     access_token: str
#     token_type: str
#     user: UserLoginData

# class StoreSettings(BaseModel):
#     storeName: Optional[str] = None
#     ownerName: Optional[str] = None
#     phone: Optional[str] = None
#     address: Optional[str] = None
#     gstin: Optional[str] = None
#     currency: Optional[str] = "INR"

# class SetupWizardData(BaseModel):
#     phone: str
#     address: str
#     gstin: Optional[str] = None
#     currency: str = "INR"

# class StoreUpdate(BaseModel):
#     storeName: str
#     ownerName: str
#     phone: str
#     address: str
#     gstin: Optional[str] = None
#     currency: str = "INR"
#     email: Optional[str] = None

# # --- Products ---
# class ProductCreate(BaseModel):
#     name: str = Field(..., min_length=2)
#     category: str = "General"
#     description: Optional[str] = None
#     item_type: str = "Goods"
#     hsn_sac_code: Optional[str] = None
#     price: float = Field(..., gt=0)
#     tax_rate: float = 18.0
#     unit: str = "pcs"
#     stock: int = Field(default=0, ge=0)
#     barcode: Optional[str] = None


# #remaining to add to a file 
# class ProductResponse(ProductCreate):
#     id: int
#     store_id: int
#     class Config:
#         from_attributes = True

# # --- Customers ---
# class CustomerCreate(BaseModel):
#     company_name: str = Field(..., min_length=2)
#     contact_person: Optional[str] = None
#     email: Optional[str] = None
#     phone: Optional[str] = None
#     billing_address: str
#     shipping_address: Optional[str] = None
#     gstin: Optional[str] = None
#     place_of_supply: Optional[str] = None

# class CustomerResponse(CustomerCreate):
#     id: int
#     store_id: int
#     class Config:
#         from_attributes = True

# # --- Invoices (Retail POS Compatible) ---
# class InvoiceItemCreate(BaseModel):
#     product_id: int
#     quantity: int = Field(..., gt=0)
#     price_at_time: float

# class InvoiceCreate(BaseModel):
#     customer_name: str = "Walk-in Customer"
#     customer_phone: Optional[str] = None
#     total_amount: float
#     payment_method: str = "UPI"
#     items: List[InvoiceItemCreate]

# # --- Refrens B2B Document Schemas ---
# class DocumentItemCreate(BaseModel):
#     product_id: Optional[int] = None
#     name: str
#     hsn_sac_code: Optional[str] = None
#     quantity: float
#     unit: str = "pcs"
#     rate: float
#     discount_amount: float = 0.0
#     tax_rate: float
#     tax_amount: float
#     total_amount: float

# class QuotationCreate(BaseModel):
#     customer_id: int
#     valid_until: Optional[datetime] = None
#     subtotal: float
#     discount_total: float = 0.0
#     tax_total: float
#     grand_total: float
#     terms_conditions: Optional[str] = None
#     notes: Optional[str] = None
#     items: List[DocumentItemCreate]


# # 1. Update your Enum to include PARTIALLY_PAID
# class InvoiceStatus(str, enum.Enum):
#     DRAFT = "DRAFT"
#     UNPAID = "UNPAID"
#     PARTIALLY_PAID = "PARTIALLY_PAID"
#     PAID = "PAID"
#     CANCELLED = "CANCELLED"

# # 2. Add the Payment Ledger Model
# class PaymentDB(Base):
#     __tablename__ = "payments"
#     id = Column(Integer, primary_key=True, index=True)
#     invoice_id = Column(Integer, ForeignKey("invoices.id"), nullable=False)
#     amount = Column(Float, nullable=False)
#     payment_date = Column(DateTime, default=func.now())
#     payment_method = Column(String)  # e.g., "UPI", "Bank Transfer", "Cash"
#     reference_number = Column(String) # Transaction ID
#     notes = Column(String)
    
#     # Establish relationship back to Invoice
#     invoice = relationship("InvoiceDB", back_populates="payments")


# class ExpenseDB(Base):
#     __tablename__ = "expenses"

#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
#     expense_number = Column(String, unique=True, index=True, nullable=False)
#     invoice_number = Column(String, nullable=True)
#     po_number = Column(String, nullable=True)
#     purchase_date = Column(DateTime, nullable=False)
#     due_date = Column(DateTime, nullable=True)
#     document_title = Column(String, default="Expense")
#     subtitle = Column(String, nullable=True)
#     vendor_id = Column(Integer, ForeignKey("vendors.id"), nullable=True)
#     vendor_name = Column(String, nullable=True)
#     subtotal = Column(Float, default=0.0)
#     tax_total = Column(Float, default=0.0)
#     cgst_total = Column(Float, default=0.0)
#     sgst_total = Column(Float, default=0.0)
#     grand_total = Column(Float, default=0.0)
#     payment_method = Column(String, nullable=True)
#     notes = Column(Text, nullable=True)
#     is_recurring = Column(Integer, default=0) # 0 for False, 1 for True
#     recurring_cycle = Column(String, nullable=True)

#     items = relationship("ExpenseItemDB", back_populates="expense", cascade="all, delete-orphan")

# class ExpenseItemDB(Base):
#     __tablename__ = "expense_items"

#     id = Column(Integer, primary_key=True, index=True)
#     expense_id = Column(Integer, ForeignKey("expenses.id"), nullable=False)
#     name = Column(String, nullable=False)
#     hsn = Column(String, nullable=True)
#     gst_rate = Column(Float, default=0.0)
#     qty = Column(Float, default=1.0)
#     rate = Column(Float, default=0.0)
#     amount = Column(Float, default=0.0)
#     cgst = Column(Float, default=0.0)
#     sgst = Column(Float, default=0.0)
#     total = Column(Float, default=0.0)
#     description = Column(Text, nullable=True)

#     expense = relationship("ExpenseDB", back_populates="items")


# class VendorDB(Base):
#     __tablename__ = "vendors"

#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
#     name = Column(String, nullable=False)
#     gstin = Column(String, nullable=True)
#     address = Column(Text, nullable=True)
#     phone = Column(String, nullable=True)
#     email = Column(String, nullable=True)

# class StaffUser(Base):
#     __tablename__ = "staff_users"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String, nullable=False)
#     email = Column(String, unique=True, index=True, nullable=False)
#     hashed_password = Column(String, nullable=False)
#     hq_role = Column(String, nullable=False)  # SUPERADMIN, IT_SUPPORT, SALES, FINANCE
#     created_at = Column(DateTime, default=datetime.utcnow)

# class TenantStaff(Base):
#     __tablename__ = "tenant_staff"

#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id", ondelete="CASCADE"), nullable=False)
#     name = Column(String, nullable=False)
#     email = Column(String, unique=True, index=True, nullable=False)
#     hashed_password = Column(String, nullable=False)
    
#     # Roles: MANAGER, CASHIER, INVENTORY
#     tenant_role = Column(String, nullable=False) 
    
#     is_active = Column(Boolean, default=True)
#     created_at = Column(DateTime, default=datetime.utcnow)

#     # Establish relationship back to the parent store
#     store = relationship("StoreDB", backref="staff_members")



# class OTPVerifyRequest(BaseModel):
#     email: str
#     otp: str


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


# # Define the allowed industries
# class IndustryType(str, enum.Enum):
#     WHOLESALE = "WHOLESALE"
#     RESTAURANT = "RESTAURANT"
#     CONSTRUCTION = "CONSTRUCTION"
#     LEGAL = "LEGAL"
#     RENTAL = "RENTAL"
#     PHARMACY = "PHARMACY"


# class TicketDB(Base):
#     __tablename__ = "tickets"

#     id = Column(Integer, primary_key=True, index=True)
#     store_id = Column(Integer, ForeignKey("stores.id"))
#     subject = Column(String, nullable=False)
#     description = Column(Text, nullable=False)
#     status = Column(String, server_default="OPEN") # OPEN, IN_PROGRESS, RESOLVED
#     created_at = Column(DateTime(timezone=True), server_default=func.now())


import enum
import uuid
from datetime import datetime, timezone, timedelta
from sqlalchemy import Column, Integer, String, Float, Text, ForeignKey, DateTime, Boolean, Enum as SQLEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base

# ==========================================
# 1. ENUMS
# ==========================================
class DocumentStatus(str, enum.Enum):
    DRAFT = "Draft"
    SENT = "Sent"
    VIEWED = "Viewed"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"
    CONVERTED = "Converted"

class InvoiceStatus(str, enum.Enum):
    DRAFT = "DRAFT"
    UNPAID = "UNPAID"
    PARTIALLY_PAID = "PARTIALLY_PAID"
    PAID = "PAID"
    OVERDUE = "OVERDUE"
    CANCELLED = "CANCELLED"

class IndustryType(str, enum.Enum):
    WHOLESALE = "WHOLESALE"
    RESTAURANT = "RESTAURANT"
    CONSTRUCTION = "CONSTRUCTION"
    LEGAL = "LEGAL"
    RENTAL = "RENTAL"
    PHARMACY = "PHARMACY"

# ==========================================
# 2. SQLALCHEMY MODELS
# ==========================================
class StoreDB(Base):
    __tablename__ = "stores"
    id = Column(Integer, primary_key=True, index=True)
    storeName = Column(String, index=True)
    ownerName = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    email = Column(String, unique=True, index=True)
    address = Column(String, nullable=True)
    gstin = Column(String, nullable=True)
    currency = Column(String, default="INR")
    hashed_password = Column(String)
    is_onboarded = Column(Boolean, default=False)
    is_superadmin = Column(Boolean, default=False)
    is_hq_staff = Column(Boolean, default=False)
    hq_role = Column(String, default="TENANT")
    industry_type = Column(SQLEnum(IndustryType), default=IndustryType.WHOLESALE, nullable=False)
    subscription_tier = Column(String, default="TRIAL")
    subscription_status = Column(String, default="ACTIVE")
    trial_ends_at = Column(DateTime, nullable=True)

class CustomerDB(Base):
    __tablename__ = "customers"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"), index=True)
    company_name = Column(String, index=True)
    contact_person = Column(String, nullable=True)
    email = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    billing_address = Column(String, nullable=True)
    shipping_address = Column(String, nullable=True)
    gstin = Column(String, nullable=True)
    place_of_supply = Column(String, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

class ProductDB(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"), index=True)
    name = Column(String, index=True)
    category = Column(String, default="General")
    description = Column(String, nullable=True)
    item_type = Column(String, default="Goods")
    hsn_sac_code = Column(String, nullable=True)
    price = Column(Float)
    tax_rate = Column(Float, default=18.0)
    unit = Column(String, default="pcs")
    stock = Column(Integer, default=0)
    barcode = Column(String, nullable=True)

class QuotationDB(Base):
    __tablename__ = "quotations"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"), index=True)
    customer_id = Column(Integer, ForeignKey("customers.id"), index=True, nullable=True)
    quotation_number = Column(String, unique=True, index=True, nullable=True)
    issue_date = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    valid_until = Column(DateTime, nullable=True)
    subtotal = Column(Float, default=0.0)
    discount_total = Column(Float, default=0.0)
    tax_total = Column(Float, default=0.0)
    grand_total = Column(Float, default=0.0)
    terms_conditions = Column(String, nullable=True)
    notes = Column(String, nullable=True)
    status = Column(SQLEnum(DocumentStatus), default=DocumentStatus.DRAFT)
    template_id = Column(String, server_default="classic")
    theme_color = Column(String, server_default="#0f172a")
    items = relationship("QuotationItemDB", backref="quotation", cascade="all, delete-orphan")

class QuotationItemDB(Base):
    __tablename__ = "quotation_items"
    id = Column(Integer, primary_key=True, index=True)
    quotation_id = Column(Integer, ForeignKey("quotations.id"))
    product_id = Column(Integer, ForeignKey("products.id"), nullable=True)
    name = Column(String)
    hsn_sac_code = Column(String, nullable=True)
    quantity = Column(Float)
    unit = Column(String, default="pcs")
    rate = Column(Float)
    discount_amount = Column(Float, default=0.0)
    tax_rate = Column(Float, default=0.0)
    tax_amount = Column(Float, default=0.0)
    total_amount = Column(Float)

class InvoiceDB(Base):
    __tablename__ = "invoices"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"), index=True)
    customer_id = Column(Integer, ForeignKey("customers.id"), index=True, nullable=True)
    customer_name = Column(String, default="Walk-in Customer")
    customer_phone = Column(String, nullable=True)
    quotation_id = Column(Integer, ForeignKey("quotations.id"), nullable=True)
    invoice_number = Column(String, nullable=True)
    issue_date = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    due_date = Column(DateTime, nullable=True)
    subtotal = Column(Float, default=0.0)
    discount_total = Column(Float, default=0.0)
    tax_total = Column(Float, default=0.0)
    total_amount = Column(Float, default=0.0)
    grand_total = Column(Float, default=0.0)
    terms_conditions = Column(String, nullable=True)
    notes = Column(String, nullable=True)
    payment_method = Column(String, default="UPI")
    status = Column(SQLEnum(InvoiceStatus), default=InvoiceStatus.UNPAID)
    template_id = Column(String, default="classic")
    theme_color = Column(String, default="#4f46e5")
    amount_paid = Column(Float, default=0.0)
    balance_due = Column(Float, default=0.0)
    public_token = Column(String, unique=True, index=True, default=lambda: uuid.uuid4().hex)
    
    items = relationship("InvoiceItemDB", backref="invoice", cascade="all, delete-orphan")
    payments = relationship("PaymentDB", back_populates="invoice", cascade="all, delete-orphan")

class InvoiceItemDB(Base):
    __tablename__ = "invoice_items"
    id = Column(Integer, primary_key=True, index=True)
    invoice_id = Column(Integer, ForeignKey("invoices.id"))
    product_id = Column(Integer, ForeignKey("products.id"), nullable=True)
    name = Column(String, nullable=True)
    hsn_sac_code = Column(String, nullable=True)
    quantity = Column(Float, default=1.0)
    unit = Column(String, default="pcs")
    rate = Column(Float, nullable=True)
    price_at_time = Column(Float, nullable=True)
    discount_amount = Column(Float, default=0.0)
    tax_rate = Column(Float, default=0.0)
    tax_amount = Column(Float, default=0.0)
    total_amount = Column(Float, nullable=True)

class PaymentDB(Base):
    __tablename__ = "payments"
    id = Column(Integer, primary_key=True, index=True)
    invoice_id = Column(Integer, ForeignKey("invoices.id"), nullable=False)
    amount = Column(Float, nullable=False)
    payment_date = Column(DateTime, default=func.now())
    payment_method = Column(String) 
    reference_number = Column(String)
    notes = Column(String)
    invoice = relationship("InvoiceDB", back_populates="payments")

class ExpenseDB(Base):
    __tablename__ = "expenses"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
    expense_number = Column(String, unique=True, index=True, nullable=False)
    invoice_number = Column(String, nullable=True)
    po_number = Column(String, nullable=True)
    purchase_date = Column(DateTime, nullable=False)
    due_date = Column(DateTime, nullable=True)
    document_title = Column(String, default="Expense")
    subtitle = Column(String, nullable=True)
    vendor_id = Column(Integer, ForeignKey("vendors.id"), nullable=True)
    vendor_name = Column(String, nullable=True)
    subtotal = Column(Float, default=0.0)
    tax_total = Column(Float, default=0.0)
    cgst_total = Column(Float, default=0.0)
    sgst_total = Column(Float, default=0.0)
    grand_total = Column(Float, default=0.0)
    payment_method = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
    is_recurring = Column(Integer, default=0) 
    recurring_cycle = Column(String, nullable=True)
    items = relationship("ExpenseItemDB", back_populates="expense", cascade="all, delete-orphan")

class ExpenseItemDB(Base):
    __tablename__ = "expense_items"
    id = Column(Integer, primary_key=True, index=True)
    expense_id = Column(Integer, ForeignKey("expenses.id"), nullable=False)
    name = Column(String, nullable=False)
    hsn = Column(String, nullable=True)
    gst_rate = Column(Float, default=0.0)
    qty = Column(Float, default=1.0)
    rate = Column(Float, default=0.0)
    amount = Column(Float, default=0.0)
    cgst = Column(Float, default=0.0)
    sgst = Column(Float, default=0.0)
    total = Column(Float, default=0.0)
    description = Column(Text, nullable=True)
    expense = relationship("ExpenseDB", back_populates="items")

class VendorDB(Base):
    __tablename__ = "vendors"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
    name = Column(String, nullable=False)
    gstin = Column(String, nullable=True)
    address = Column(Text, nullable=True)
    phone = Column(String, nullable=True)
    email = Column(String, nullable=True)

class StaffUser(Base):
    __tablename__ = "staff_users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    hq_role = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class TenantStaff(Base):
    __tablename__ = "tenant_staff"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id", ondelete="CASCADE"), nullable=False)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    tenant_role = Column(String, nullable=False) 
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    store = relationship("StoreDB", backref="staff_members")

class SupplierDB(Base):
    __tablename__ = "suppliers"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"))
    name = Column(String, nullable=False)
    contact_person = Column(String)
    phone = Column(String)
    products_supplied = Column(String) 

class PurchaseOrderDB(Base):
    __tablename__ = "purchase_orders"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"))
    supplier_name = Column(String)
    contact_person = Column(String)
    phone = Column(String)
    expected_date = Column(String)
    notes = Column(String)
    subtotal = Column(Float, default=0.0)
    tax_total = Column(Float, default=0.0)
    discount_total = Column(Float, default=0.0)
    grand_total = Column(Float, default=0.0)
    items = relationship("PurchaseOrderItemDB", cascade="all, delete-orphan")

class PurchaseOrderItemDB(Base):
    __tablename__ = "purchase_order_items"
    id = Column(Integer, primary_key=True, index=True)
    po_id = Column(Integer, ForeignKey("purchase_orders.id"))
    name = Column(String)
    unit = Column(String)
    stock = Column(Float)
    price = Column(Float)
    qty = Column(Float)
    amount = Column(Float)

class LeadDB(Base):
    __tablename__ = "leads"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"), nullable=False)
    contact_name = Column(String, nullable=False)
    company_name = Column(String)
    email = Column(String)
    phone = Column(String)
    estimated_value = Column(Float, default=0.0)
    stage = Column(String, default="LEAD") 
    notes = Column(String)
    created_at = Column(DateTime, default=func.now())

class TicketDB(Base):
    __tablename__ = "tickets"
    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, ForeignKey("stores.id"))
    subject = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    status = Column(String, server_default="OPEN")
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class IndustryPricingDB(Base):
    __tablename__ = "industry_pricing"

    id = Column(Integer, primary_key=True, index=True)
    industry = Column(String, unique=True, index=True, nullable=False)  # WHOLESALE, LEGAL, etc.
    basic_price = Column(Integer, default=999)
    growth_price = Column(Integer, default=2499)
    enterprise_price = Column(Integer, default=4999)