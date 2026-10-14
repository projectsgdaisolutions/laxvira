# from fastapi import Depends, HTTPException, status
# from datetime import datetime
# from sqlalchemy.orm import Session
# from database import get_db
# from auth import get_current_store
# from models import StoreDB


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

# async def require_active_subscription(current_store = Depends(get_current_store)):
#     """
#     The 402 Gateway: Protects standard app routes from expired trials.
#     Apply this Depends() to routes like creating invoices or products.
#     """
#     # 1. Superadmins bypass all billing locks
#     if current_store.is_superadmin:
#         return current_store

#     # 2. Check 5-Day Trial Expiration
#     if current_store.subscription_tier == "TRIAL":
#         if datetime.utcnow() > current_store.trial_ends_at:
#             raise HTTPException(
#                 status_code=status.HTTP_402_PAYMENT_REQUIRED,
#                 detail="Your 5-day trial has expired. Please upgrade to continue."
#             )
            
#     # 3. Check Manual Suspensions / Cancelled Plans
#     if current_store.subscription_status != "ACTIVE":
#         raise HTTPException(
#             status_code=status.HTTP_402_PAYMENT_REQUIRED,
#             detail="Your subscription is inactive. Please update your billing details."
#         )

#     return current_store

# async def get_current_superadmin(current_store = Depends(get_current_store)):
#     """
#     Strictly isolates HQ routes. 
#     Only allows users with the is_superadmin flag = True to proceed.
#     """
#     if not current_store.is_superadmin:
#         raise HTTPException(
#             status_code=status.HTTP_403_FORBIDDEN,
#             detail="Access denied. Superadmin privileges required."
#         )
#     return current_store

# # Define a hierarchy for your tiers
# TIER_LEVELS = {
#     "BASIC": 1,      # Tier 1: Invoicing
#     "GROWTH": 2,     # Tier 2: Invoicing, Quotations, Inventory
#     "ENTERPRISE": 3  # Tier 3: Everything
# }

# def require_tier(minimum_tier_name: str):
#     """
#     Dependency factory to restrict endpoints to specific subscription tiers.
#     """
#     def tier_checker(current_store = Depends(get_current_store)):
#         # Superadmins bypass all tier restrictions
#         if current_store.is_superadmin:
#             return current_store

#         user_tier_name = current_store.subscription_tier or "BASIC"
#         user_level = TIER_LEVELS.get(user_tier_name.upper(), 1)
#         required_level = TIER_LEVELS.get(minimum_tier_name.upper(), 1)

#         if user_level < required_level:
#             raise HTTPException(
#                 status_code=status.HTTP_403_FORBIDDEN,
#                 detail=f"Upgrade to {minimum_tier_name} plan to access this feature."
#             )
#         return current_store
        
#     return tier_checker


# def require_roles(allowed_roles: list[str]):
#     """
#     FastAPI Dependency to enforce Role-Based Access Control.
#     """
#     def role_checker(current_store = Depends(get_current_store)):
#         if not current_store.is_hq_staff:
#             raise HTTPException(status_code=403, detail="Standard tenants cannot access HQ routes.")
        
#         if current_store.hq_role not in allowed_roles:
#             raise HTTPException(status_code=403, detail=f"Access denied. Requires one of: {allowed_roles}")
        
#         return current_store
#     return role_checker


from fastapi import Depends, HTTPException, status
from datetime import datetime
from sqlalchemy.orm import Session
from database import get_db
from auth import get_current_store
from models import StoreDB
import models
from auth import oauth2_scheme, SECRET_KEY, ALGORITHM
from jose import jwt, JWTError

# 1. Define Tier Weight Hierarchy
TIER_LEVELS = {
    "BASIC": 1,      # Tier 1: Invoicing
    "GROWTH": 2,     # Tier 2: Invoicing, Quotations, Inventory
    "ENTERPRISE": 3  # Tier 3: Everything
}

# 2. Reusable FastAPI Dependency
def require_tier(required_tier: str):
    """
    Dependency factory to restrict endpoints to specific subscription tiers.
    """
    def dependency(current_user = Depends(get_current_store), db: Session = Depends(get_db)):
        # SuperAdmin always bypasses restrictions
        if getattr(current_user, 'is_superadmin', False):
            return current_user

        # Safely get the tier
        raw_tier = getattr(current_user, 'subscription_tier', None)
        
        # If logged in as an employee (TenantStaff), fetch the parent store's tier
        if not raw_tier and hasattr(current_user, 'store_id'):
            parent_store = db.query(StoreDB).filter(StoreDB.id == current_user.store_id).first()
            raw_tier = parent_store.subscription_tier if parent_store else 'BASIC'
            
        # FORCE UPPERCASE to match the dictionary keys perfectly
        user_tier = (raw_tier or 'BASIC').upper()
        req_tier = required_tier.upper()
        
        user_level = TIER_LEVELS.get(user_tier, 1)
        required_level = TIER_LEVELS.get(req_tier, 1)

        if user_level < required_level:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"This feature requires the {required_tier} plan. Please upgrade your subscription."
            )
        return current_user
    return dependency


async def require_active_subscription(current_store = Depends(get_current_store)):
    """
    The 402 Gateway: Protects standard app routes from expired trials.
    Apply this Depends() to routes like creating invoices or products.
    """
    # 1. Superadmins bypass all billing locks
    if getattr(current_store, 'is_superadmin', False):
        return current_store

    # 2. Check 5-Day Trial Expiration
    if getattr(current_store, 'subscription_tier', 'BASIC') == "TRIAL":
        trial_ends = getattr(current_store, 'trial_ends_at', datetime.utcnow())
        if trial_ends and datetime.utcnow() > trial_ends:
            raise HTTPException(
                status_code=status.HTTP_402_PAYMENT_REQUIRED,
                detail="Your 5-day trial has expired. Please upgrade to continue."
            )
            
    # 3. Check Manual Suspensions / Cancelled Plans
    if getattr(current_store, 'subscription_status', 'ACTIVE') != "ACTIVE":
        raise HTTPException(
            status_code=status.HTTP_402_PAYMENT_REQUIRED,
            detail="Your subscription is inactive. Please update your billing details."
        )

    return current_store


async def get_current_superadmin(current_store = Depends(get_current_store)):
    """
    Strictly isolates HQ routes. 
    Only allows users with the is_superadmin flag = True to proceed.
    """
    if not getattr(current_store, 'is_superadmin', False):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access denied. Superadmin privileges required."
        )
    return current_store

def require_roles(allowed_roles: list[str]):
    """
    FastAPI Dependency to enforce Role-Based Access Control.
    Checks both StoreDB (Superadmins) and StaffUser (IT Support / HQ Staff).
    """
    def role_checker(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
        try:
            # 1. Decode token to find who is making the request
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            user_identifier = payload.get("sub") # Usually the ID or Email
            
            if not user_identifier:
                raise HTTPException(status_code=401, detail="Invalid authentication token.")
        except JWTError:
            raise HTTPException(status_code=401, detail="Invalid authentication token.")

        # 2. Check the HQ Staff table first (for IT_SUPPORT, SALES, etc.)
        staff = db.query(models.StaffUser).filter(
            (models.StaffUser.id == user_identifier) | 
            (models.StaffUser.email == str(user_identifier))
        ).first()
        
        if staff:
            if staff.hq_role in allowed_roles or staff.hq_role == "SUPERADMIN":
                return staff
            raise HTTPException(status_code=403, detail=f"Access denied. Requires one of: {allowed_roles}")

        # 3. Check the Stores table second (for Root Superadmins)
        store = db.query(models.StoreDB).filter(
            (models.StoreDB.id == user_identifier) | 
            (models.StoreDB.email == str(user_identifier))
        ).first()
        
        if store and getattr(store, 'is_superadmin', False):
            if "SUPERADMIN" in allowed_roles:
                return store

        # 4. If they are neither, reject them entirely
        raise HTTPException(status_code=403, detail="Standard tenants cannot access HQ routes.")
        
    return role_checker


def verify_vertical_limit(metric_key: str, required_amount: int = 1):
    def limit_checker(current_store: models.StoreDB = Depends(get_current_store), db: Session = Depends(get_db)):
        tier = current_store.subscription_tier
        industry = current_store.industry or "WHOLESALE"
        
        # Define hard ceilings per vertical tier
        limits_matrix = {
            "WHOLESALE": {"LOCAL_STOCKIST": 1, "REGIONAL_DISTRIBUTOR": 5, "NATIONAL_SUPPLY": 999},
            "CONSTRUCTION": {"INDEPENDENT_CONTRACTOR": 5, "PROJECT_BUILDER": 25, "ENTERPRISE_DEVELOPER": 999},
            "RENTAL": {"BOUTIQUE_RENTAL": 100, "COMMERCIAL_FLEET": 500, "ENTERPRISE_LEASING": 99999}
        }
        
        max_allowed = limits_matrix.get(industry, {}).get(tier, 1)
        
        # Current utilization count check
        if metric_key == "warehouses":
            current_count = db.query(models.WarehouseDB).filter(models.WarehouseDB.store_id == current_store.id).count()
        elif metric_key == "projects":
            current_count = db.query(models.ProjectDB).filter(models.ProjectDB.store_id == current_store.id).count()
        elif metric_key == "assets":
            current_count = db.query(models.AssetDB).filter(models.AssetDB.store_id == current_store.id).count()
        else:
            current_count = 0

        if (current_count + required_amount) > max_allowed:
            raise HTTPException(
                status_code=403, 
                detail=f"Vertical limit reached for {industry} on tier {tier}. Upgrade required to add more {metric_key}."
            )
        return True
    return limit_checker



# def require_roles(allowed_roles: list[str]):
#     """
#     FastAPI Dependency to enforce Role-Based Access Control.
#     """
#     def role_checker(current_user = Depends(get_current_store)):
#         # 1. Superadmins automatically get access if SUPERADMIN is in the allowed list
#         is_super = getattr(current_user, 'is_superadmin', False)
#         if is_super and "SUPERADMIN" in allowed_roles:
#             return current_user
            
#         # 2. Check Staff HQ roles (using getattr to prevent crashes on standard StoreDB users)
#         hq_role = getattr(current_user, 'hq_role', None)
        
#         if not hq_role:
#             raise HTTPException(status_code=403, detail="Standard tenants cannot access HQ routes.")
        
#         if hq_role not in allowed_roles:
#             raise HTTPException(status_code=403, detail=f"Access denied. Requires one of: {allowed_roles}")
        
#         return current_user
#     return role_checker