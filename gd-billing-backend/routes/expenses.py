
# from datetime import datetime, timezone
# from typing import List, Optional

# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session

# from database import get_db
# from dependencies import get_current_store, require_tier
# import models
# import schemas

# # 3. Initialize the router (This replaces 'app = FastAPI()')
# router = APIRouter()


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

from datetime import datetime, timezone
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from dependencies import get_current_store, require_tier
import models
import schemas

# Initialize the router
router = APIRouter(tags=["Expenses"])

@router.get("/api/expenses" , dependencies=[Depends(require_tier("ENTERPRISE"))])
def get_expenses(
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    expenses = db.query(models.ExpenseDB)\
        .filter(models.ExpenseDB.store_id == current_store.id)\
        .order_by(models.ExpenseDB.purchase_date.desc())\
        .all()
        
    # Return clean mapped representation matching your database columns
    return [
        {
            "id": exp.id,
            "expense_number": exp.expense_number,
            "invoice_number": exp.invoice_number,
            "po_number": exp.po_number,
            "purchase_date": exp.purchase_date,
            "due_date": exp.due_date,
            "document_title": exp.document_title,
            "subtitle": exp.subtitle,
            "vendor_name": exp.vendor_name,
            "subtotal": exp.subtotal,
            "tax_total": exp.tax_total,
            "cgst_total": exp.cgst_total,
            "sgst_total": exp.sgst_total,
            "grand_total": exp.grand_total,
            "is_recurring": exp.is_recurring,
            "recurring_cycle": exp.recurring_cycle,
            "items": [
                {
                    "name": item.name,
                    "hsn": item.hsn,
                    "gst_rate": item.gst_rate,
                    "qty": item.qty,
                    "rate": item.rate,
                    "amount": item.amount,
                    "cgst": item.cgst,
                    "sgst": item.sgst,
                    "total": item.total,
                    "description": item.description
                } for item in exp.items
            ]
        }
        for exp in expenses
    ]

@router.post("/api/expenses" , dependencies=[Depends(require_tier("ENTERPRISE"))])
def create_expense(
    payload: schemas.ExpenseCreateSchema,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    try:
        # 1. Create Main Expense Record
        db_expense = models.ExpenseDB(
            store_id=current_store.id,
            expense_number=payload.expense_number,
            invoice_number=payload.invoice_number,
            po_number=payload.po_number,
            purchase_date=payload.purchase_date,
            due_date=payload.due_date,
            document_title=payload.document_title,
            subtitle=payload.subtitle,
            vendor_id=payload.vendor_id,
            vendor_name=payload.vendor_name,
            subtotal=payload.subtotal,
            tax_total=payload.tax_total,
            cgst_total=payload.cgst_total,
            sgst_total=payload.sgst_total,
            grand_total=payload.grand_total,
            payment_method=payload.payment_method,
            notes=payload.notes,
            is_recurring=1 if payload.is_recurring else 0,
            recurring_cycle=payload.recurring_cycle
        )
        
        db.add(db_expense)
        db.flush() # Flushes to generate the db_expense.id for child item relationships

        # 2. Create Child Line Items
        for item in payload.items:
            db_item = models.ExpenseItemDB(
                expense_id=db_expense.id,
                name=item.name or "Unnamed Item",
                hsn=item.hsn,
                gst_rate=item.gst_rate,
                qty=item.qty,
                rate=item.rate,
                amount=item.amount,
                cgst=item.cgst,
                sgst=item.sgst,
                total=item.total,
                description=item.description
            )
            db.add(db_item)

        db.commit()
        db.refresh(db_expense)
        
        return {"message": "Expense created successfully", "expense_id": db_expense.id}

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Database commit error: {str(e)}")

@router.get("/api/vendors")
def get_vendors(
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    # Fetch vendors belonging to the active store
    vendors = db.query(models.VendorDB).filter(models.VendorDB.store_id == current_store.id).all()
    
    return [
        {
            "id": v.id,
            "name": v.name,
            "gstin": v.gstin,
            "address": v.address,
            "phone": v.phone,
            "email": v.email
        } 
        for v in vendors
    ]

# --- FastAPI Endpoints ---

@router.get("/api/suppliers", dependencies=[Depends(require_tier("GROWTH"))])
def get_suppliers(db: Session = Depends(get_db), current_store: models.StoreDB = Depends(get_current_store)):
    suppliers = db.query(models.SupplierDB).filter(models.SupplierDB.store_id == current_store.id).all()
    if not suppliers:
        # Seed default demo suppliers if empty for instant usability
        defaults = [
            models.SupplierDB(store_id=current_store.id, name="Rajesh Beverages Pvt.Ltd.", contact_person="Rajesh Kumar", phone="+91 11566788009", products_supplied="Soft Drinks, Juices, Water"),
            models.SupplierDB(store_id=current_store.id, name="Shiv Distributors", contact_person="Suresh Yadav", phone="+91 55555788009", products_supplied="Atta, Rice, Pulses"),
            models.SupplierDB(store_id=current_store.id, name="Good Morning Dairy", contact_person="Meena Patel", phone="+91 1152288009", products_supplied="Milk, Curd, Paneer, Butter")
        ]
        db.add_all(defaults)
        db.commit()
        suppliers = db.query(models.SupplierDB).filter(models.SupplierDB.store_id == current_store.id).all()
        
    return [
        {
            "id": s.id,
            "name": s.name,
            "contact": s.contact_person,
            "phone": s.phone,
            "products": s.products_supplied.split(", ") if s.products_supplied else [],
            "initial": "".join([n[0] for n in s.name.split()[:2]]).upper(),
            "bg": "bg-blue-100 text-blue-600"
        } for s in suppliers
    ]

@router.post("/api/purchase-orders", dependencies=[Depends(require_tier("GROWTH"))])
def create_purchase_order(
    po_data: dict,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    new_po = models.PurchaseOrderDB(
        store_id=current_store.id,
        supplier_name=po_data.get("supplier_name"),
        contact_person=po_data.get("contact_person"),
        phone=po_data.get("phone"),
        expected_date=po_data.get("expected_date"),
        notes=po_data.get("notes"),
        subtotal=po_data.get("subtotal", 0.0),
        tax_total=po_data.get("tax_total", 0.0),
        discount_total=po_data.get("discount_total", 0.0),
        grand_total=po_data.get("grand_total", 0.0)
    )
    db.add(new_po)
    db.flush()

    for item in po_data.get("items", []):
        db.add(models.PurchaseOrderItemDB(
            po_id=new_po.id,
            name=item.get("name"),
            unit=item.get("unit"),
            stock=item.get("stock", 0),
            price=item.get("price", 0.0),
            qty=item.get("qty", 1),
            amount=item.get("amount", 0.0)
        ))

    db.commit()
    return {"message": "Purchase order created successfully", "po_id": new_po.id}