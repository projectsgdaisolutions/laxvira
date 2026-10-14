
# import bcrypt
# from typing import Optional

# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session

# from database import get_db
# from dependencies import get_current_store, require_tier
# import models
# import schemas

# # 3. Initialize the router (This replaces 'app = FastAPI()')
# router = APIRouter()

# @router.get("/api/store/profile")
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


# # --- Settings Update Route ---
# @router.put("/api/store/profile")
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




# ########2 of them same needs fix#####
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

import bcrypt
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from dependencies import get_current_store, require_tier
import models
import schemas

# Initialize the router
router = APIRouter(tags=["Store Management"])

@router.get("/api/store/profile")
def get_store_profile(current_user = Depends(get_current_store)):

    # 1. Safely extract industry
    raw_industry = getattr(current_user, 'industry_type', 'WHOLESALE')
    industry_str = raw_industry.value if hasattr(raw_industry, 'value') else str(raw_industry)
    # 1. Check if the user is a Tenant Employee (Cashier, Manager, Inventory)
    # The TenantStaff model has the 'tenant_role' attribute.
    if hasattr(current_user, 'tenant_role'):
        return {
            "id": current_user.id,
            "store_id": current_user.store_id,
            "name": current_user.name,
            "email": current_user.email,
            "tenant_role": current_user.tenant_role, # <-- CRITICAL FOR SIDEBAR
            "is_superadmin": False,
            "is_onboarded": True,
            # Provide safe fallbacks so the frontend doesn't break
            "storeName": "Store Staff",
            "ownerName": current_user.name 
        }
        
    # 2. Otherwise, the user is the Store Admin (Owner) from StoreDB
    return {
        "id": current_user.id,
        "storeName": current_user.storeName,
        "ownerName": current_user.ownerName,
        "email": current_user.email,
        "phone": current_user.phone,
        "address": getattr(current_user, 'address', None),
        "gstin": getattr(current_user, 'gstin', None),
        "currency": getattr(current_user, 'currency', 'INR'),
        "is_onboarded": getattr(current_user, 'is_onboarded', False),
        "is_superadmin": getattr(current_user, 'is_superadmin', False),
        "industry": industry_str,
        "tenant_role": "STORE_ADMIN", # <-- CRITICAL FOR SIDEBAR

        # --- NEW TRIAL FIELDS ---
        "subscription_tier": getattr(current_user, 'subscription_tier', 'BASIC'),
        "subscription_status": getattr(current_user, 'subscription_status', 'TRIAL'),
        "trial_ends_at": getattr(current_user, 'trial_ends_at', None)
    }


# --- Settings Update Route ---
@router.put("/api/store/profile")
def update_store_profile(
    update_data: schemas.StoreUpdate,
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    current_store.storeName = update_data.storeName
    current_store.ownerName = update_data.ownerName
    current_store.phone = update_data.phone
    current_store.address = update_data.address
    current_store.gstin = update_data.gstin
    current_store.currency = update_data.currency
    
    db.commit()
    db.refresh(current_store)
    
    return {"message": "Profile updated successfully", "storeName": current_store.storeName}


# --- Save Onboarding Setup Wizard Data ---
# Note: Consolidated the duplicate /api/store/setup endpoints into a single functional one.
@router.post("/api/store/setup")
async def complete_store_setup(
    setup_data: schemas.SetupWizardData, 
    db: Session = Depends(get_db), 
    current_store: models.StoreDB = Depends(get_current_store)
):
    # Update the store's details with fallbacks to avoid wiping existing data
    current_store.phone = setup_data.phone or current_store.phone
    current_store.address = setup_data.address or current_store.address
    current_store.gstin = setup_data.gstin or current_store.gstin
    current_store.currency = setup_data.currency or current_store.currency
    
    # Flip the onboarding flag to True so they never see the wizard again
    current_store.is_onboarded = True
    
    db.commit()
    db.refresh(current_store)
    
    return {"message": "Setup complete", "is_onboarded": current_store.is_onboarded}


@router.get("/api/store/staff")
def get_store_staff(
    db: Session = Depends(get_db),
    current_user: models.StoreDB = Depends(get_current_store)
):
    # Only the Store Admin (root account) can fetch this list
    if getattr(current_user, 'hq_role', 'TENANT') != 'TENANT':
        raise HTTPException(status_code=403, detail="Only store admins can view staff.")

    staff = db.query(models.TenantStaff).filter(models.TenantStaff.store_id == current_user.id).all()
    return [
        {
            "id": s.id,
            "name": s.name,
            "email": s.email,
            "tenant_role": s.tenant_role,
            "is_active": s.is_active
        } for s in staff
    ]

@router.post("/api/store/staff")
def create_store_staff(
    payload: schemas.TenantStaffCreate,
    db: Session = Depends(get_db),
    current_user: models.StoreDB = Depends(get_current_store)
):
    # Security Check: Ensure only the root store admin is creating staff
    if getattr(current_user, 'hq_role', 'TENANT') != 'TENANT':
        raise HTTPException(status_code=403, detail="Only store admins can provision staff.")

    # Prevent email collisions across the entire platform
    existing_store = db.query(models.StoreDB).filter(models.StoreDB.email == payload.email).first()
    existing_staff = db.query(models.TenantStaff).filter(models.TenantStaff.email == payload.email).first()
    if existing_store or existing_staff:
        raise HTTPException(status_code=400, detail="Email is already registered.")

    hashed_pw = bcrypt.hashpw(payload.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    new_staff = models.TenantStaff(
        store_id=current_user.id, # Bind strictly to the admin's store ID
        name=payload.name,
        email=payload.email,
        hashed_password=hashed_pw,
        tenant_role=payload.tenant_role
    )

    db.add(new_staff)
    db.commit()
    db.refresh(new_staff)

    return {"message": "Staff member provisioned successfully.", "id": new_staff.id}


# --- INVENTORY ROUTES ---

@router.post("/api/inventory", response_model=schemas.ProductResponse, dependencies=[Depends(require_tier("GROWTH"))])
def create_product(
    product: schemas.ProductCreate, 
    db: Session = Depends(get_db), 
    current_store: models.StoreDB = Depends(get_current_store)
):
    new_product = models.ProductDB(
        store_id=current_store.id,
        name=product.name,
        category=product.category,
        price=product.price,
        stock=product.stock,
        barcode=product.barcode
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product


@router.get("/api/inventory", response_model=list[schemas.ProductResponse], dependencies=[Depends(require_tier("GROWTH"))])
def get_inventory(
    db: Session = Depends(get_db), 
    current_store: models.StoreDB = Depends(get_current_store)
):
    products = db.query(models.ProductDB).filter(models.ProductDB.store_id == current_store.id).all()
    return products