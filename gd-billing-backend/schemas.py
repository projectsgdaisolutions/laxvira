# # from pydantic import BaseModel, Field, EmailStr
# # from typing import List, Optional
# # from datetime import datetime
# # from models import IndustryType

# # class UserLoginData(BaseModel):
# #     id: int
# #     email: str
# #     is_hq_staff: Optional[bool] = False
# #     hq_role: Optional[str] = "TENANT"
# #     tier: str = "BASIC"
# #     subscription_status: str = "TRIAL"
# #     trial_ends_at: Optional[str] = None
    
# #     # --- ADD THESE TO PREVENT FASTAPI FROM STRIPPING THEM ---
# #     industry: str = "WHOLESALE" 
# #     storeName: str = ""

# # class StoreUpdate(BaseModel):
# #     storeName: str
# #     ownerName: str
# #     phone: str
# #     address: str
# #     gstin: str
# #     currency: str


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

# # class TenantStaffCreate(BaseModel):
# #     name: str
# #     email: str
# #     password: str
# #     tenant_role: str # MANAGER, CASHIER, INVENTORY


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


# # class TierUpdate(BaseModel):
# #     tier: str

# # class ProvisionTenant(BaseModel):
# #     storeName: str
# #     email: str
# #     password: str
# #     tier: str

# # class SearchIntent(BaseModel):
# #     query_type: str = Field(description="The type of entity being searched, e.g., 'invoice', 'customer', 'product'")
# #     target_date: Optional[str] = Field(None, description="Specific date mentioned in YYYY-MM-DD format if applicable")
# #     start_date: Optional[str] = Field(None, description="Start date for a range in YYYY-MM-DD format")
# #     end_date: Optional[str] = Field(None, description="End date for a range in YYYY-MM-DD format")
# #     search_keyword: Optional[str] = Field(None, description="Any name, invoice number, or text keyword mentioned")


# # # ==========================================
# # # 3. PYDANTIC SCHEMAS
# # # ==========================================
# # # --- Auth & Store ---
# # class StoreRegistration(BaseModel):
# #     storeName: str
# #     email: str
# #     password: str
# #     tier: str = "GROWTH"

# # class StoreLogin(BaseModel):
# #     email: str
# #     password: str

# # class UserLoginData(BaseModel):
# #     id: int
# #     email: str
# #     is_hq_staff: Optional[bool] = False
# #     hq_role: Optional[str] = "TENANT"

# # class TokenResponse(BaseModel):
# #     access_token: str
# #     token_type: str
# #     user: UserLoginData

# # class StoreSettings(BaseModel):
# #     storeName: Optional[str] = None
# #     ownerName: Optional[str] = None
# #     phone: Optional[str] = None
# #     address: Optional[str] = None
# #     gstin: Optional[str] = None
# #     currency: Optional[str] = "INR"

# # class SetupWizardData(BaseModel):
# #     phone: str
# #     address: str
# #     gstin: Optional[str] = None
# #     currency: str = "INR"

# # class StoreUpdate(BaseModel):
# #     storeName: str
# #     ownerName: str
# #     phone: str
# #     address: str
# #     gstin: Optional[str] = None
# #     currency: str = "INR"
# #     email: Optional[str] = None

# # # --- Products ---
# # class ProductCreate(BaseModel):
# #     name: str = Field(..., min_length=2)
# #     category: str = "General"
# #     description: Optional[str] = None
# #     item_type: str = "Goods"
# #     hsn_sac_code: Optional[str] = None
# #     price: float = Field(..., gt=0)
# #     tax_rate: float = 18.0
# #     unit: str = "pcs"
# #     stock: int = Field(default=0, ge=0)
# #     barcode: Optional[str] = None

# # #remaining to add to a file 
# # class ProductResponse(ProductCreate):
# #     id: int
# #     store_id: int
# #     class Config:
# #         from_attributes = True

# # # --- Customers ---
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

# # # --- Invoices (Retail POS Compatible) ---
# # class InvoiceItemCreate(BaseModel):
# #     product_id: int
# #     quantity: int = Field(..., gt=0)
# #     price_at_time: float

# # class InvoiceCreate(BaseModel):
# #     customer_name: str = "Walk-in Customer"
# #     customer_phone: Optional[str] = None
# #     total_amount: float
# #     payment_method: str = "UPI"
# #     items: List[InvoiceItemCreate]

# # # --- Refrens B2B Document Schemas ---
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



# # class OTPVerifyRequest(BaseModel):
# #     email: str
# #     otp: str



# # class ChatMessage(BaseModel):
# #     message: str

# # class StoreRegister(BaseModel):
# #     storeName: str
# #     email: EmailStr
# #     password: str
# #     industry_type: str
# #     selected_tier: str  # e.g., "BASIC", "GROWTH", "ENTERPRISE"

# # class TicketCreate(BaseModel):
# #     subject: str
# #     description: str

# # class TicketStatusUpdate(BaseModel):
# #     status: str


# from pydantic import BaseModel, Field, EmailStr
# from typing import List, Optional
# from datetime import datetime

# # ==========================================
# # AUTH & USER SCHEMAS
# # ==========================================
# class StoreRegister(BaseModel):
#     storeName: str
#     email: EmailStr
#     password: str
#     industry_type: str
#     selected_tier: str 

# class StoreLogin(BaseModel):
#     email: str
#     password: str

# class OTPVerifyRequest(BaseModel):
#     email: str
#     otp: str

# class UserLoginData(BaseModel):
#     id: int
#     email: str
#     is_hq_staff: bool = False
#     hq_role: str = "TENANT"
#     tier: str = "BASIC"
#     subscription_status: str = "TRIAL"
#     trial_ends_at: Optional[str] = None
#     industry: str = "WHOLESALE" 
#     storeName: str = ""

# class TokenResponse(BaseModel):
#     access_token: str
#     token_type: str
#     user: UserLoginData

# class TenantStaffCreate(BaseModel):
#     name: str
#     email: str
#     password: str
#     tenant_role: str 

# # ==========================================
# # STORE & CONFIGURATION
# # ==========================================
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
#     gstin: str
#     currency: str
#     email: Optional[str] = None

# class TierUpdate(BaseModel):
#     tier: str

# class ProvisionTenant(BaseModel):
#     storeName: str
#     email: str
#     password: str
#     tier: str

# # ==========================================
# # PRODUCTS & CUSTOMERS
# # ==========================================
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

# class ProductResponse(ProductCreate):
#     id: int
#     store_id: int
#     class Config:
#         from_attributes = True

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

# # ==========================================
# # INVOICES & QUOTATIONS
# # ==========================================
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

# # ==========================================
# # EXPENSES
# # ==========================================
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

# # ==========================================
# # TICKETS, AI & MISC
# # ==========================================
# class TicketCreate(BaseModel):
#     subject: str
#     description: str

# class TicketStatusUpdate(BaseModel):
#     status: str

# class ChatMessage(BaseModel):
#     message: str

# class SearchIntent(BaseModel):
#     query_type: str = Field(description="The type of entity being searched")
#     target_date: Optional[str] = Field(None, description="Specific date in YYYY-MM-DD")
#     start_date: Optional[str] = Field(None, description="Start date in YYYY-MM-DD")
#     end_date: Optional[str] = Field(None, description="End date in YYYY-MM-DD")
#     search_keyword: Optional[str] = Field(None, description="Name, ID, or keyword")


from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime

# ==========================================
# AUTH & USER SCHEMAS
# ==========================================
class UserLoginData(BaseModel):
    id: int
    email: str
    is_hq_staff: bool = False
    hq_role: str = "TENANT"
    tier: str = "BASIC"
    subscription_status: str = "TRIAL"
    trial_ends_at: Optional[str] = None
    industry: str = "WHOLESALE" 
    storeName: str = ""

class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    user: UserLoginData

class StoreRegister(BaseModel):
    storeName: str
    email: EmailStr
    password: str
    industry_type: str
    selected_tier: str 

class StoreLogin(BaseModel):
    email: str
    password: str

class OTPVerifyRequest(BaseModel):
    email: str
    otp: str

class TenantStaffCreate(BaseModel):
    name: str
    email: str
    password: str
    tenant_role: str 

# ==========================================
# STORE CONFIGURATION
# ==========================================
class StoreSettings(BaseModel):
    storeName: Optional[str] = None
    ownerName: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    gstin: Optional[str] = None
    currency: Optional[str] = "INR"

class SetupWizardData(BaseModel):
    phone: str
    address: str
    gstin: Optional[str] = None
    currency: str = "INR"

class StoreUpdate(BaseModel):
    storeName: str
    ownerName: str
    phone: str
    address: str
    gstin: str
    currency: str
    email: Optional[str] = None

class TierUpdate(BaseModel):
    tier: str

class ProvisionTenant(BaseModel):
    storeName: str
    email: str
    password: str
    tier: str

# ==========================================
# PRODUCTS & CUSTOMERS
# ==========================================
class ProductCreate(BaseModel):
    name: str = Field(..., min_length=2)
    category: str = "General"
    description: Optional[str] = None
    item_type: str = "Goods"
    hsn_sac_code: Optional[str] = None
    price: float = Field(..., gt=0)
    tax_rate: float = 18.0
    unit: str = "pcs"
    stock: int = Field(default=0, ge=0)
    barcode: Optional[str] = None

class ProductResponse(ProductCreate):
    id: int
    store_id: int
    class Config:
        from_attributes = True

class CustomerCreate(BaseModel):
    company_name: str = Field(..., min_length=2)
    contact_person: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    billing_address: str
    shipping_address: Optional[str] = None
    gstin: Optional[str] = None
    place_of_supply: Optional[str] = None

class CustomerResponse(CustomerCreate):
    id: int
    store_id: int
    class Config:
        from_attributes = True

# ==========================================
# DOCUMENTS & INVOICES
# ==========================================
class InvoiceItemCreate(BaseModel):
    product_id: int
    quantity: int = Field(..., gt=0)
    price_at_time: float

class InvoiceCreate(BaseModel):
    customer_name: str = "Walk-in Customer"
    customer_phone: Optional[str] = None
    total_amount: float
    payment_method: str = "UPI"
    items: List[InvoiceItemCreate]

class DocumentItemCreate(BaseModel):
    product_id: Optional[int] = None
    name: str
    hsn_sac_code: Optional[str] = None
    quantity: float
    unit: str = "pcs"
    rate: float
    discount_amount: float = 0.0
    tax_rate: float
    tax_amount: float
    total_amount: float

class QuotationCreate(BaseModel):
    customer_id: int
    valid_until: Optional[datetime] = None
    subtotal: float
    discount_total: float = 0.0
    tax_total: float
    grand_total: float
    terms_conditions: Optional[str] = None
    notes: Optional[str] = None
    items: List[DocumentItemCreate]

# ==========================================
# EXPENSES
# ==========================================
class ExpenseItemSchema(BaseModel):
    name: str
    hsn: Optional[str] = ""
    gst_rate: Optional[float] = 18.0
    qty: Optional[float] = 1.0
    rate: Optional[float] = 0.0
    amount: Optional[float] = 0.0
    cgst: Optional[float] = 0.0
    sgst: Optional[float] = 0.0
    total: Optional[float] = 0.0
    description: Optional[str] = ""

class ExpenseCreateSchema(BaseModel):
    expense_number: str
    invoice_number: Optional[str] = ""
    po_number: Optional[str] = ""
    purchase_date: datetime
    due_date: Optional[datetime] = None
    document_title: Optional[str] = "Expense"
    subtitle: Optional[str] = ""
    vendor_id: Optional[int] = None
    vendor_name: Optional[str] = "Unknown Vendor"
    subtotal: float
    tax_total: float
    cgst_total: Optional[float] = 0.0
    sgst_total: Optional[float] = 0.0
    grand_total: float
    payment_method: Optional[str] = "Bank Transfer"
    notes: Optional[str] = ""
    items: List[ExpenseItemSchema]
    is_recurring: Optional[bool] = False
    recurring_cycle: Optional[str] = None

class ReceiptItem(BaseModel):
    description: str
    quantity: float
    rate: float
    total: float

class ExtractedReceipt(BaseModel):
    vendor_name: str
    date: str
    subtotal: float
    tax_amount: float
    grand_total: float
    items: List[ReceiptItem]

# ==========================================
# TICKETS & AI
# ==========================================
class TicketCreate(BaseModel):
    subject: str
    description: str

class TicketStatusUpdate(BaseModel):
    status: str

class ChatMessage(BaseModel):
    message: str

class SearchIntent(BaseModel):
    query_type: str = Field(description="The type of entity being searched")
    target_date: Optional[str] = Field(None, description="Specific date in YYYY-MM-DD")
    start_date: Optional[str] = Field(None, description="Start date in YYYY-MM-DD")
    end_date: Optional[str] = Field(None, description="End date in YYYY-MM-DD")
    search_keyword: Optional[str] = Field(None, description="Name, ID, or keyword")