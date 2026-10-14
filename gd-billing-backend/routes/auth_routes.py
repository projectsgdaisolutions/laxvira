


# # # import bcrypt
# # # from datetime import datetime, timedelta, timezone
# # # from typing import Optional

# # # from fastapi import APIRouter, Depends, HTTPException, status
# # # from sqlalchemy.orm import Session

# # # from database import get_db
# # # from auth import verify_password, get_password_hash, create_access_token
# # # from auth_utils import OTP_STORE, generate_otp, send_otp_email
# # # import models
# # # import schemas

# # # # 3. Initialize the router (This replaces 'app = FastAPI()')
# # # router = APIRouter()
# # # @app.post("/api/auth/register")
# # # def register_store(store_data: StoreRegistration, db: Session = Depends(get_db)):
# # #     # 1. Check if store already exists
# # #     existing_store = db.query(StoreDB).filter(StoreDB.email == store_data.email).first()
# # #     if existing_store:
# # #         raise HTTPException(status_code=400, detail="Email already registered")
    
# # #     # 2. Hash the password
# # #     hashed_pwd = get_password_hash(store_data.password)
    
# # #     # 3. Create the store using ONLY the fields from StoreRegistration
# # #     # new_store = StoreDB(
# # #     #     storeName=store_data.storeName,
# # #     #     email=store_data.email,
# # #     #     hashed_password=hashed_pwd
# # #     #     # REMOVED: ownerName, phone, address, etc. 
# # #     #     # These are nullable in the DB and will be filled out in the Setup Wizard.
# # #     # )
# # #     trial_expiry = datetime.now(timezone.utc) + timedelta(days=5)

# # #     new_store = StoreDB(
# # #         storeName=store_data.storeName,
# # #         email=store_data.email,
# # #         hashed_password=hashed_pwd,
# # #         subscription_tier=store_data.tier,      # Save their chosen trial tier
# # #         subscription_status="TRIAL",            # Mark them explicitly as a Trial
# # #         trial_ends_at=trial_expiry              # Lock in the 5-day window
# # #     )
    
# # #     db.add(new_store)
# # #     db.commit()
# # #     db.refresh(new_store)
    
# # #     return {"message": "Store registered successfully with 5-day trial"}


# # # # --- STEP 1: VERIFY CREDENTIALS & SEND OTP ---
# # # @app.post("/api/auth/login/initiate")
# # # def initiate_login(credentials: StoreLogin, db: Session = Depends(get_db)):
# # #     user = None
# # #     user_type = None

# # #     # 1. Check Store Owners
# # #     store = db.query(StoreDB).filter(StoreDB.email == credentials.email).first()
# # #     if store and verify_password(credentials.password, store.hashed_password):
# # #         user = store
# # #         user_type = "OWNER"
    
# # #     # 2. Check HQ Staff (Superadmin)
# # #     if not user:
# # #         hq_staff = db.query(StaffUser).filter(StaffUser.email == credentials.email).first()
# # #         if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
# # #             user = hq_staff
# # #             user_type = "HQ_STAFF"

# # #     # 3. Check Tenant Staff (Employees)
# # #     if not user:
# # #         tenant_staff = db.query(TenantStaff).filter(TenantStaff.email == credentials.email).first()
# # #         if tenant_staff and verify_password(credentials.password, tenant_staff.hashed_password):
# # #             if not tenant_staff.is_active:
# # #                 raise HTTPException(status_code=403, detail="Employee account is deactivated.")
# # #             user = tenant_staff
# # #             user_type = "TENANT_STAFF"

# # #     if not user:
# # #         raise HTTPException(status_code=401, detail="Invalid email or password")

# # #     # Generate and Store OTP
# # #     otp = generate_otp()
    
# # #     # Store temporary session data needed to construct the JWT later
# # #     OTP_STORE[credentials.email] = {
# # #         "otp": otp,
# # #         "expires_at": datetime.utcnow() + timedelta(minutes=5),
# # #         "user_data": {
# # #             "id": user.id,
# # #             "email": user.email,
# # #             "user_type": user_type,
# # #             # Pass up specific attributes based on the user type
# # #             "store_id": getattr(user, "store_id", user.id if user_type == "OWNER" else None),
# # #             "role": getattr(user, "hq_role", getattr(user, "tenant_role", "OWNER")),
# # #             # --- ADD THESE 3 NEW LINES ---
# # #                 "subscription_status": getattr(store, 'subscription_status', 'TRIAL'),
# # #                 "trial_ends_at": store.trial_ends_at.isoformat() if getattr(store, 'trial_ends_at', None) else None,
# # #                 "tier": getattr(store, 'subscription_tier', 'BASIC')
# # #         }
# # #     }

# # #     # Send Email
# # #     send_otp_email(credentials.email, otp)
    
# # #     # DEV ONLY: Print OTP to console to avoid actual email limits during testing
# # #     print(f"--- DEVELOPMENT OTP FOR {credentials.email} IS {otp} ---")

# # #     return {"message": "OTP sent successfully to email", "requires_otp": True}


# # # # --- STEP 2: VERIFY OTP & ISSUE JWT ---
# # # @app.post("/api/auth/login/verify")
# # # def verify_login_otp(req: OTPVerifyRequest):
# # #     session = OTP_STORE.get(req.email)

# # #     if not session:
# # #         raise HTTPException(status_code=400, detail="OTP session expired or invalid. Please login again.")
    
# # #     if datetime.utcnow() > session["expires_at"]:
# # #         del OTP_STORE[req.email]
# # #         raise HTTPException(status_code=400, detail="OTP expired.")

# # #     if session["otp"] != req.otp:
# # #         raise HTTPException(status_code=401, detail="Incorrect OTP.")

# # #     # OTP is valid! Construct JWT payload using the stored session data
# # #     user_data = session["user_data"]
    
# # #     token_payload = {
# # #         "sub": str(user_data["id"]),
# # #         "email": user_data["email"],
# # #         "user_type": user_data["user_type"],
# # #         "store_id": user_data["store_id"],
# # #         "role": user_data["role"]
# # #     }

# # #     # Generate standard JWT (Assuming you have this function from your original setup)
# # #     access_token = create_access_token(data=token_payload)

# # #     # Clean up OTP store
# # #     del OTP_STORE[req.email]

# # #     return {
# # #         "access_token": access_token,
# # #         "token_type": "bearer",
# # #         "user": user_data
# # #     }


# # import bcrypt
# # from datetime import datetime, timedelta, timezone
# # from typing import Optional

# # from fastapi import APIRouter, Depends, HTTPException, status
# # from sqlalchemy.orm import Session

# # from database import get_db
# # from auth import verify_password, get_password_hash, create_access_token
# # from auth_utils import OTP_STORE, generate_otp, send_otp_email
# # import models
# # import schemas

# # router = APIRouter(tags=["Authentication"])

# # # @router.post("/api/auth/register")
# # # def register_store(store_data: schemas.StoreRegistration, db: Session = Depends(get_db)):
# # #     # 1. Check if store already exists
# # #     existing_store = db.query(models.StoreDB).filter(models.StoreDB.email == store_data.email).first()
# # #     if existing_store:
# # #         raise HTTPException(status_code=400, detail="Email already registered")
    
# # #     # 2. Hash the password
# # #     hashed_pwd = get_password_hash(store_data.password)
    
# # #     # 3. Create the store using ONLY the fields from StoreRegistration
# # #     # new_store = models.StoreDB(
# # #     #     storeName=store_data.storeName,
# # #     #     email=store_data.email,
# # #     #     hashed_password=hashed_pwd
# # #     #     # REMOVED: ownerName, phone, address, etc. 
# # #     #     # These are nullable in the DB and will be filled out in the Setup Wizard.
# # #     # )
# # #     trial_expiry = datetime.now(timezone.utc) + timedelta(days=5)

# # #     new_store = models.StoreDB(
# # #         storeName=store_data.storeName,
# # #         email=store_data.email,
# # #         hashed_password=hashed_pwd,
# # #         subscription_tier=store_data.tier,      # Save their chosen trial tier
# # #         subscription_status="TRIAL",            # Mark them explicitly as a Trial
# # #         trial_ends_at=trial_expiry              # Lock in the 5-day window
# # #     )
    
# # #     db.add(new_store)
# # #     db.commit()
# # #     db.refresh(new_store)
    
# # #     return {"message": "Store registered successfully with 5-day trial"}

# # @router.post("/api/auth/register")
# # def register_store(payload: schemas.StoreRegister, db: Session = Depends(get_db)):
# #     # 1. Check if email already exists
# #     existing_store = db.query(models.StoreDB).filter(models.StoreDB.email == payload.email).first()
# #     if existing_store:
# #         raise HTTPException(status_code=400, detail="Email already registered")

# #     # 2. Setup 14-Day Trial limit
# #     trial_expiration = datetime.utcnow() + timedelta(days=14)

# #     # 3. Create the store with industry context and exact trial mapping
# #     new_store = models.StoreDB(
# #         storeName=payload.storeName,
# #         email=payload.email,
# #         hashed_password=get_password_hash(payload.password),
# #         industry_type=payload.industry_type,
# #         subscription_tier=payload.selected_tier.upper(),  # e.g., "GROWTH" so features unlock
# #         subscription_status="TRIAL",                      # Flags the system that payment is pending
# #         trial_ends_at=trial_expiration
# #     )
    
# #     db.add(new_store)
# #     db.commit()
# #     db.refresh(new_store)

# #     # 4. Generate JWT Token carrying the industry payload
# #     access_token = create_access_token(
# #         data={
# #             "sub": new_store.email, 
# #             "store_id": new_store.id,
# #             "industry": new_store.industry_type.value,
# #             "tier": new_store.subscription_tier,
# #             "status": "TRIAL"
# #         }
# #     )

# #     return {
# #         "access_token": access_token, 
# #         "token_type": "bearer",
# #         "user": {
# #             "id": new_store.id,
# #             "name": new_store.storeName,
# #             "industry": new_store.industry_type.value,
# #             "tier": new_store.subscription_tier,
# #             "status": "TRIAL"
# #         }
# #     }


# # # # --- STEP 1: VERIFY CREDENTIALS & SEND OTP ---
# # # @router.post("/api/auth/login/initiate")
# # # def initiate_login(credentials: schemas.StoreLogin, db: Session = Depends(get_db)):
# # #     user = None
# # #     user_type = None

# # #     # 1. Check Store Owners
# # #     store = db.query(models.StoreDB).filter(models.StoreDB.email == credentials.email).first()
# # #     if store and verify_password(credentials.password, store.hashed_password):
# # #         user = store
# # #         user_type = "OWNER"
    
# # #     # 2. Check HQ Staff (Superadmin)
# # #     if not user:
# # #         hq_staff = db.query(models.StaffUser).filter(models.StaffUser.email == credentials.email).first()
# # #         if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
# # #             user = hq_staff
# # #             user_type = "HQ_STAFF"

# # #     # 3. Check Tenant Staff (Employees)
# # #     if not user:
# # #         tenant_staff = db.query(models.TenantStaff).filter(models.TenantStaff.email == credentials.email).first()
# # #         if tenant_staff and verify_password(credentials.password, tenant_staff.hashed_password):
# # #             if not tenant_staff.is_active:
# # #                 raise HTTPException(status_code=403, detail="Employee account is deactivated.")
# # #             user = tenant_staff
# # #             user_type = "TENANT_STAFF"

# # #     if not user:
# # #         raise HTTPException(status_code=401, detail="Invalid email or password")

# # #     # Generate and Store OTP
# # #     otp = generate_otp()
    
# # #     # Store temporary session data needed to construct the JWT later
# # #     OTP_STORE[credentials.email] = {
# # #         "otp": otp,
# # #         "expires_at": datetime.utcnow() + timedelta(minutes=5),
# # #         "user_data": {
# # #             "id": user.id,
# # #             "email": user.email,
# # #             "user_type": user_type,
# # #             # Pass up specific attributes based on the user type
# # #             "store_id": getattr(user, "store_id", user.id if user_type == "OWNER" else None),
# # #             "role": getattr(user, "hq_role", getattr(user, "tenant_role", "OWNER")),
# # #             # --- ADD THESE 3 NEW LINES ---
# # #             "subscription_status": getattr(store, 'subscription_status', 'TRIAL'),
# # #             "trial_ends_at": store.trial_ends_at.isoformat() if getattr(store, 'trial_ends_at', None) else None,
# # #             "tier": getattr(store, 'subscription_tier', 'BASIC')
# # #         }
# # #     }

# # #     # Send Email
# # #     send_otp_email(credentials.email, otp)
    
# # #     # DEV ONLY: Print OTP to console to avoid actual email limits during testing
# # #     print(f"--- DEVELOPMENT OTP FOR {credentials.email} IS {otp} ---")

# # #     return {"message": "OTP sent successfully to email", "requires_otp": True}


# # # # --- STEP 2: VERIFY OTP & ISSUE JWT ---
# # # @router.post("/api/auth/login/verify")
# # # def verify_login_otp(req: schemas.OTPVerifyRequest):
# # #     session = OTP_STORE.get(req.email)

# # #     if not session:
# # #         raise HTTPException(status_code=400, detail="OTP session expired or invalid. Please login again.")
    
# # #     if datetime.utcnow() > session["expires_at"]:
# # #         del OTP_STORE[req.email]
# # #         raise HTTPException(status_code=400, detail="OTP expired.")

# # #     if session["otp"] != req.otp:
# # #         raise HTTPException(status_code=401, detail="Incorrect OTP.")

# # #     # OTP is valid! Construct JWT payload using the stored session data
# # #     user_data = session["user_data"]
    
# # #     token_payload = {
# # #         "sub": str(user_data["id"]),
# # #         "email": user_data["email"],
# # #         "user_type": user_data["user_type"],
# # #         "store_id": user_data["store_id"],
# # #         "role": user_data["role"]
# # #     }

# # #     # Generate standard JWT (Assuming you have this function from your original setup)
# # #     access_token = create_access_token(data=token_payload)

# # #     # Clean up OTP store
# # #     del OTP_STORE[req.email]

# # #     return {
# # #         "access_token": access_token,
# # #         "token_type": "bearer",
# # #         "user": user_data
# # #     }

# # # --- STEP 1: VERIFY CREDENTIALS & SEND OTP ---
# # @router.post("/api/auth/login/initiate")
# # def initiate_login(credentials: schemas.StoreLogin, db: Session = Depends(get_db)):
# #     user = None
# #     user_type = None
# #     parent_store = None # Explicitly track the parent store to avoid NoneType crashes

# #     # 1. Check Store Owners
# #     store = db.query(models.StoreDB).filter(models.StoreDB.email == credentials.email).first()
# #     if store and verify_password(credentials.password, store.hashed_password):
# #         user = store
# #         user_type = "OWNER"
# #         parent_store = store
    
# #     # 2. Check HQ Staff (Superadmin, Sales, Finance, IT)
# #     if not user:
# #         hq_staff = db.query(models.StaffUser).filter(models.StaffUser.email == credentials.email).first()
# #         if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
# #             user = hq_staff
# #             user_type = "HQ_STAFF"

# #     # 3. Check Tenant Staff (Employees like Cashier, Manager)
# #     if not user:
# #         tenant_staff = db.query(models.TenantStaff).filter(models.TenantStaff.email == credentials.email).first()
# #         if tenant_staff and verify_password(credentials.password, tenant_staff.hashed_password):
# #             if not tenant_staff.is_active:
# #                 raise HTTPException(status_code=403, detail="Employee account is deactivated.")
# #             user = tenant_staff
# #             user_type = "TENANT_STAFF"
# #             parent_store = db.query(models.StoreDB).filter(models.StoreDB.id == tenant_staff.store_id).first()

# #     if not user:
# #         raise HTTPException(status_code=401, detail="Invalid email or password")

# #     # Generate and Store OTP
# #     otp = generate_otp()
    
# #     # REPAIR: Reconstruct the exact JSON payload the React Router expects
# #     user_data = {
# #         "id": user.id,
# #         "email": user.email,
# #         "user_type": user_type,
# #         "is_hq_staff": user_type == "HQ_STAFF",
# #         "hq_role": getattr(user, "hq_role", "TENANT"),
# #         "tenant_role": getattr(user, "tenant_role", "STORE_ADMIN" if user_type == "OWNER" else None),
# #         "store_id": getattr(user, "store_id", user.id if user_type == "OWNER" else None),
# #     }

# #     # REPAIR: Safely append store subscription data ONLY if a parent store exists
# #     if parent_store:
# #         user_data["subscription_status"] = getattr(parent_store, 'subscription_status', 'TRIAL')
# #         user_data["trial_ends_at"] = parent_store.trial_ends_at.isoformat() if getattr(parent_store, 'trial_ends_at', None) else None
# #         user_data["tier"] = getattr(parent_store, 'subscription_tier', 'BASIC')
# #     else:
# #         # HQ Staff bypass tier restrictions
# #         user_data["subscription_status"] = "ACTIVE"
# #         user_data["trial_ends_at"] = None
# #         user_data["tier"] = "ENTERPRISE"

# #     # Store temporary session data
# #     OTP_STORE[credentials.email] = {
# #         "otp": otp,
# #         "expires_at": datetime.utcnow() + timedelta(minutes=5),
# #         "user_data": user_data
# #     }

# #     # Send Email
# #     send_otp_email(credentials.email, otp)
    
# #     # DEV ONLY
# #     print(f"--- DEVELOPMENT OTP FOR {credentials.email} IS {otp} ---")

# #     return {"message": "OTP sent successfully to email", "requires_otp": True}


# # # --- STEP 2: VERIFY OTP & ISSUE JWT ---
# # @router.post("/api/auth/login/verify")
# # def verify_login_otp(req: schemas.OTPVerifyRequest):
# #     session = OTP_STORE.get(req.email)

# #     if not session:
# #         raise HTTPException(status_code=400, detail="OTP session expired or invalid. Please login again.")
    
# #     if datetime.utcnow() > session["expires_at"]:
# #         del OTP_STORE[req.email]
# #         raise HTTPException(status_code=400, detail="OTP expired.")

# #     if session["otp"] != req.otp:
# #         raise HTTPException(status_code=401, detail="Incorrect OTP.")

# #     # OTP is valid!
# #     user_data = session["user_data"]
    
# #     # REPAIR: Construct the JWT payload to include the roles for backend dependencies
# #     token_payload = {
# #         "sub": str(user_data["id"]),
# #         "email": user_data["email"],
# #         "is_staff": user_data["is_hq_staff"],
# #         "role": user_data["hq_role"] if user_data["is_hq_staff"] else user_data["tenant_role"],
# #         "store_id": user_data["store_id"]
# #     }

# #     access_token = create_access_token(data=token_payload)

# #     # Clean up OTP store
# #     del OTP_STORE[req.email]

# #     return {
# #         "access_token": access_token,
# #         "token_type": "bearer",
# #         "user": user_data  # Frontend will now receive is_hq_staff and hq_role correctly
# #     }




# import bcrypt
# from datetime import datetime, timedelta, timezone
# from typing import Optional

# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlalchemy.orm import Session

# from database import get_db
# from auth import verify_password, get_password_hash, create_access_token
# from auth_utils import OTP_STORE, generate_otp, send_otp_email
# import models
# import schemas

# router = APIRouter(tags=["Authentication"])

# def extract_industry_value(store) -> str:
#     """Helper to safely extract industry string whether Enum or plain string."""
#     raw = getattr(store, "industry_type", getattr(store, "industry", "WHOLESALE"))
#     if hasattr(raw, "value"):
#         return str(raw.value).upper()
#     return str(raw).upper() if raw else "WHOLESALE"


# # @router.post("/api/auth/register")
# # def register_store(payload: schemas.StoreRegister, db: Session = Depends(get_db)):
# #     # 1. Check if email already exists
# #     existing_store = db.query(models.StoreDB).filter(models.StoreDB.email == payload.email).first()
# #     if existing_store:
# #         raise HTTPException(status_code=400, detail="Email already registered")

# #     # 2. Setup 14-Day Trial limit
# #     trial_expiration = datetime.utcnow() + timedelta(days=14)

# #     # 3. Create the store with industry context and exact trial mapping
# #     new_store = models.StoreDB(
# #         storeName=payload.storeName,
# #         email=payload.email,
# #         hashed_password=get_password_hash(payload.password),
# #         industry_type=payload.industry_type,
# #         subscription_tier=payload.selected_tier.upper(),
# #         subscription_status="TRIAL",
# #         trial_ends_at=trial_expiration
# #     )
    
# #     db.add(new_store)
# #     db.commit()
# #     db.refresh(new_store)

# #     industry_val = extract_industry_value(new_store)

# #     # 4. Generate JWT Token carrying the industry payload
# #     access_token = create_access_token(
# #         data={
# #             "sub": str(new_store.id),
# #             "email": new_store.email,
# #             "store_id": new_store.id,
# #             "industry": industry_val,
# #             "tier": new_store.subscription_tier,
# #             "status": "TRIAL"
# #         }
# #     )

# #     return {
# #         "access_token": access_token, 
# #         "token_type": "bearer",
# #         "user": {
# #             "id": new_store.id,
# #             "name": new_store.storeName,
# #             "storeName": new_store.storeName,
# #             "email": new_store.email,
# #             "industry": industry_val,
# #             "tier": new_store.subscription_tier,
# #             "status": "TRIAL",
# #             "subscription_status": "TRIAL",
# #             "trial_ends_at": trial_expiration.isoformat()
# #         }
# #     }

# # In auth.py (replace your register_store function)

# @router.post("/api/auth/register")
# def register_store(payload: schemas.StoreRegister, db: Session = Depends(get_db)):
#     # 1. Check if email already exists
#     existing_store = db.query(models.StoreDB).filter(models.StoreDB.email == payload.email).first()
#     if existing_store:
#         raise HTTPException(status_code=400, detail="Email already registered")

#     # 2. Setup 14-Day Trial limit
#     trial_expiration = datetime.utcnow() + timedelta(days=14)

#     # --- CRITICAL FIX: Convert string to strict SQLAlchemy Enum ---
#     try:
#         industry_enum = models.IndustryType(payload.industry_type.upper())
#     except ValueError:
#         industry_enum = models.IndustryType.WHOLESALE

#     # 3. Create the store
#     new_store = models.StoreDB(
#         storeName=payload.storeName,
#         email=payload.email,
#         hashed_password=get_password_hash(payload.password),
#         industry_type=industry_enum, # Safely mapped to Enum
#         subscription_tier=payload.selected_tier.upper(),
#         subscription_status="TRIAL",
#         trial_ends_at=trial_expiration
#     )
    
#     db.add(new_store)
#     db.commit()
#     db.refresh(new_store)

#     industry_val = extract_industry_value(new_store)

#     # 4. Generate JWT Token
#     access_token = create_access_token(
#         data={
#             "sub": str(new_store.id),
#             "email": new_store.email,
#             "store_id": new_store.id,
#             "industry": industry_val,
#             "tier": new_store.subscription_tier,
#             "status": "TRIAL"
#         }
#     )

#     return {
#         "access_token": access_token, 
#         "token_type": "bearer",
#         "user": {
#             "id": new_store.id,
#             "name": new_store.storeName,
#             "storeName": new_store.storeName,
#             "email": new_store.email,
#             "industry": industry_val,
#             "tier": new_store.subscription_tier,
#             "status": "TRIAL",
#             "subscription_status": "TRIAL",
#             "trial_ends_at": trial_expiration.isoformat()
#         }
#     }


# # --- STEP 1: VERIFY CREDENTIALS & SEND OTP ---
# @router.post("/api/auth/login/initiate")
# def initiate_login(credentials: schemas.StoreLogin, db: Session = Depends(get_db)):
#     user = None
#     user_type = None
#     parent_store = None 

#     # 1. Check Store Owners
#     store = db.query(models.StoreDB).filter(models.StoreDB.email == credentials.email).first()
#     if store and verify_password(credentials.password, store.hashed_password):
#         user = store
#         user_type = "OWNER"
#         parent_store = store
    
#     # 2. Check HQ Staff (Superadmin, Sales, Finance, IT)
#     if not user:
#         hq_staff = db.query(models.StaffUser).filter(models.StaffUser.email == credentials.email).first()
#         if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
#             user = hq_staff
#             user_type = "HQ_STAFF"

#     # 3. Check Tenant Staff (Employees like Cashier, Manager)
#     if not user:
#         tenant_staff = db.query(models.TenantStaff).filter(models.TenantStaff.email == credentials.email).first()
#         if tenant_staff and verify_password(credentials.password, tenant_staff.hashed_password):
#             if not tenant_staff.is_active:
#                 raise HTTPException(status_code=403, detail="Employee account is deactivated.")
#             user = tenant_staff
#             user_type = "TENANT_STAFF"
#             parent_store = db.query(models.StoreDB).filter(models.StoreDB.id == tenant_staff.store_id).first()

#     if not user:
#         raise HTTPException(status_code=401, detail="Invalid email or password")

#     # Generate and Store OTP
#     otp = generate_otp()
    
#     # user_data = {
#     #     "id": user.id,
#     #     "email": user.email,
#     #     "name": getattr(user, "name", getattr(parent_store, "storeName", "")),
#     #     "user_type": user_type,
#     #     "is_hq_staff": user_type == "HQ_STAFF",
#     #     "hq_role": getattr(user, "hq_role", "TENANT"),
#     #     "tenant_role": getattr(user, "tenant_role", "STORE_ADMIN" if user_type == "OWNER" else None),
#     #     "store_id": getattr(user, "store_id", user.id if user_type == "OWNER" else None),
#     # }

#     # # Safely append store subscription and vertical data
#     # if parent_store:
#     #     user_data["storeName"] = getattr(parent_store, "storeName", "")
#     #     # --- CRITICAL FIX: Inject industry from parent store ---
#     #     user_data["industry"] = extract_industry_value(parent_store)
#     #     user_data["subscription_status"] = getattr(parent_store, 'subscription_status', 'TRIAL')
#     #     user_data["trial_ends_at"] = parent_store.trial_ends_at.isoformat() if getattr(parent_store, 'trial_ends_at', None) else None
#     #     user_data["tier"] = getattr(parent_store, 'subscription_tier', 'BASIC')
#     # else:
#     #     # HQ Staff defaults
#     #     user_data["storeName"] = "HQ"
#     #     user_data["industry"] = "HQ"
#     #     user_data["subscription_status"] = "ACTIVE"
#     #     user_data["trial_ends_at"] = None
#     #     user_data["tier"] = "ENTERPRISE"

#     # # Store temporary session data
#     # OTP_STORE[credentials.email] = {
#     #     "otp": otp,
#     #     "expires_at": datetime.utcnow() + timedelta(minutes=5),
#     #     "user_data": user_data
#     # }

#     # send_otp_email(credentials.email, otp)
#     # print(f"--- DEVELOPMENT OTP FOR {credentials.email} IS {otp} ---")

#     # return {"message": "OTP sent successfully to email", "requires_otp": True}

#     user_data = {
#         "id": user.id,
#         "email": user.email,
#         "name": getattr(user, "name", getattr(parent_store, "storeName", "")),
#         "user_type": user_type,
#         "is_hq_staff": user_type == "HQ_STAFF",
#         "hq_role": getattr(user, "hq_role", "TENANT"),
#         "tenant_role": getattr(user, "tenant_role", "STORE_ADMIN" if user_type == "OWNER" else None),
#         "store_id": getattr(user, "store_id", user.id if user_type == "OWNER" else None),
#     }

#     # Safely append store subscription and vertical data
#     if parent_store:
#         user_data["storeName"] = getattr(parent_store, "storeName", "")
        
#         # --- FIX: Safely extract the SQLEnum value to a string ---
#         raw_industry = getattr(parent_store, 'industry_type', 'WHOLESALE')
#         user_data["industry"] = raw_industry.value if hasattr(raw_industry, 'value') else str(raw_industry)
        
#         user_data["subscription_status"] = getattr(parent_store, 'subscription_status', 'TRIAL')
#         user_data["trial_ends_at"] = parent_store.trial_ends_at.isoformat() if getattr(parent_store, 'trial_ends_at', None) else None
#         user_data["tier"] = getattr(parent_store, 'subscription_tier', 'BASIC')
#         # --- THE FIX: Extract and append industry ---
#         raw_industry = getattr(parent_store, 'industry_type', 'WHOLESALE')
#         user_data["industry"] = raw_industry.value if hasattr(raw_industry, 'value') else str(raw_industry)
#     else:
#         # HQ Staff defaults
#         user_data["storeName"] = "HQ"
#         user_data["industry"] = "HQ"
#         user_data["subscription_status"] = "ACTIVE"
#         user_data["trial_ends_at"] = None
#         user_data["tier"] = "ENTERPRISE"

#     # Store temporary session data
#     OTP_STORE[credentials.email] = {
#         "otp": otp,
#         "expires_at": datetime.utcnow() + timedelta(minutes=5),
#         "user_data": user_data
#     }

#     send_otp_email(credentials.email, otp)
#     print(f"--- DEVELOPMENT OTP FOR {credentials.email} IS {otp} ---")

#     return {"message": "OTP sent successfully to email", "requires_otp": True}


# # --- STEP 2: VERIFY OTP & ISSUE JWT ---
# @router.post("/api/auth/login/verify")
# def verify_login_otp(req: schemas.OTPVerifyRequest):
#     session = OTP_STORE.get(req.email)

#     if not session:
#         raise HTTPException(status_code=400, detail="OTP session expired or invalid. Please login again.")
    
#     if datetime.utcnow() > session["expires_at"]:
#         del OTP_STORE[req.email]
#         raise HTTPException(status_code=400, detail="OTP expired.")

#     if session["otp"] != req.otp:
#         raise HTTPException(status_code=401, detail="Incorrect OTP.")

#     user_data = session["user_data"]
    
#     # # Construct JWT token payload
#     # token_payload = {
#     #     "sub": str(user_data["id"]),
#     #     "email": user_data["email"],
#     #     "is_staff": user_data["is_hq_staff"],
#     #     "role": user_data["hq_role"] if user_data["is_hq_staff"] else user_data["tenant_role"],
#     #     "store_id": user_data["store_id"],
#     #     "industry": user_data.get("industry", "WHOLESALE")
#     # }

#     # access_token = create_access_token(data=token_payload)
#     # del OTP_STORE[req.email]

#     # return {
#     #     "access_token": access_token,
#     #     "token_type": "bearer",
#     #     "user": user_data
#     # }

#     # Construct JWT token payload
#     token_payload = {
#         "sub": str(user_data["id"]),
#         "email": user_data["email"],
#         "is_staff": user_data["is_hq_staff"],
#         "role": user_data["hq_role"] if user_data["is_hq_staff"] else user_data["tenant_role"],
#         "store_id": user_data["store_id"],
#         # --- FIX: Embed industry securely in the JWT ---
#         "industry": user_data.get("industry", "WHOLESALE").upper() 
#     }

#     access_token = create_access_token(data=token_payload)
#     del OTP_STORE[req.email]

#     return {
#         "access_token": access_token,
#         "token_type": "bearer",
#         "user": user_data
#     }


# from datetime import datetime, timedelta, timezone
# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlalchemy.orm import Session

# from database import get_db
# from auth import verify_password, get_password_hash, create_access_token
# from auth_utils import OTP_STORE, generate_otp, send_otp_email
# import models
# import schemas

# router = APIRouter(tags=["Authentication"])

# def extract_industry_value(store) -> str:
#     raw = getattr(store, "industry_type", getattr(store, "industry", "WHOLESALE"))
#     if hasattr(raw, "value"):
#         return str(raw.value).upper()
#     return str(raw).upper() if raw else "WHOLESALE"


# @router.post("/api/auth/register", response_model=schemas.TokenResponse)
# def register_store(payload: schemas.StoreRegister, db: Session = Depends(get_db)):
#     existing_store = db.query(models.StoreDB).filter(models.StoreDB.email == payload.email).first()
#     if existing_store:
#         raise HTTPException(status_code=400, detail="Email already registered")

#     trial_expiration = datetime.utcnow() + timedelta(days=14)

#     try:
#         industry_enum = models.IndustryType(payload.industry_type.upper())
#     except ValueError:
#         industry_enum = models.IndustryType.WHOLESALE

#     new_store = models.StoreDB(
#         storeName=payload.storeName,
#         email=payload.email,
#         hashed_password=get_password_hash(payload.password),
#         industry_type=industry_enum, 
#         subscription_tier=payload.selected_tier.upper(),
#         subscription_status="TRIAL",
#         trial_ends_at=trial_expiration
#     )
    
#     db.add(new_store)
#     db.commit()
#     db.refresh(new_store)

#     industry_val = extract_industry_value(new_store)

#     user_data = {
#         "id": new_store.id,
#         "name": new_store.storeName,
#         "storeName": new_store.storeName,
#         "email": new_store.email,
#         "industry": industry_val,
#         "tier": new_store.subscription_tier,
#         "status": "TRIAL",
#         "subscription_status": "TRIAL",
#         "trial_ends_at": trial_expiration.isoformat()
#     }

#     access_token = create_access_token(
#         data={
#             "sub": str(new_store.id),
#             "email": new_store.email,
#             "store_id": new_store.id,
#             "industry": industry_val,
#             "tier": new_store.subscription_tier,
#             "status": "TRIAL"
#         }
#     )

#     return {
#         "access_token": access_token, 
#         "token_type": "bearer",
#         "user": user_data
#     }


# @router.post("/api/auth/login/initiate")
# def initiate_login(credentials: schemas.StoreLogin, db: Session = Depends(get_db)):
#     user = None
#     user_type = None
#     parent_store = None 

#     store = db.query(models.StoreDB).filter(models.StoreDB.email == credentials.email).first()
#     if store and verify_password(credentials.password, store.hashed_password):
#         user = store
#         user_type = "OWNER"
#         parent_store = store
    
#     if not user:
#         hq_staff = db.query(models.StaffUser).filter(models.StaffUser.email == credentials.email).first()
#         if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
#             user = hq_staff
#             user_type = "HQ_STAFF"

#     if not user:
#         tenant_staff = db.query(models.TenantStaff).filter(models.TenantStaff.email == credentials.email).first()
#         if tenant_staff and verify_password(credentials.password, tenant_staff.hashed_password):
#             if not tenant_staff.is_active:
#                 raise HTTPException(status_code=403, detail="Employee account deactivated.")
#             user = tenant_staff
#             user_type = "TENANT_STAFF"
#             parent_store = db.query(models.StoreDB).filter(models.StoreDB.id == tenant_staff.store_id).first()

#     if not user:
#         raise HTTPException(status_code=401, detail="Invalid email or password")

#     otp = generate_otp()
    
#     user_data = {
#         "id": user.id,
#         "email": user.email,
#         "name": getattr(user, "name", getattr(parent_store, "storeName", "")),
#         "user_type": user_type,
#         "is_hq_staff": user_type == "HQ_STAFF",
#         "hq_role": getattr(user, "hq_role", "TENANT"),
#         "tenant_role": getattr(user, "tenant_role", "STORE_ADMIN" if user_type == "OWNER" else None),
#         "store_id": getattr(user, "store_id", user.id if user_type == "OWNER" else None),
#     }

#     if parent_store:
#         user_data["storeName"] = getattr(parent_store, "storeName", "")
#         raw_industry = getattr(parent_store, 'industry_type', 'WHOLESALE')
#         user_data["industry"] = raw_industry.value if hasattr(raw_industry, 'value') else str(raw_industry)
#         user_data["subscription_status"] = getattr(parent_store, 'subscription_status', 'TRIAL')
#         user_data["trial_ends_at"] = parent_store.trial_ends_at.isoformat() if getattr(parent_store, 'trial_ends_at', None) else None
#         user_data["tier"] = getattr(parent_store, 'subscription_tier', 'BASIC')
#     else:
#         user_data["storeName"] = "HQ"
#         user_data["industry"] = "HQ"
#         user_data["subscription_status"] = "ACTIVE"
#         user_data["trial_ends_at"] = None
#         user_data["tier"] = "ENTERPRISE"

#     OTP_STORE[credentials.email] = {
#         "otp": otp,
#         "expires_at": datetime.utcnow() + timedelta(minutes=5),
#         "user_data": user_data
#     }

#     send_otp_email(credentials.email, otp)
#     print(f"--- DEVELOPMENT OTP FOR {credentials.email} IS {otp} ---")

#     return {"message": "OTP sent successfully to email", "requires_otp": True}


# @router.post("/api/auth/login/verify", response_model=schemas.TokenResponse)
# def verify_login_otp(req: schemas.OTPVerifyRequest):
#     session = OTP_STORE.get(req.email)

#     if not session:
#         raise HTTPException(status_code=400, detail="OTP session expired or invalid.")
    
#     if datetime.utcnow() > session["expires_at"]:
#         del OTP_STORE[req.email]
#         raise HTTPException(status_code=400, detail="OTP expired.")

#     if session["otp"] != req.otp:
#         raise HTTPException(status_code=401, detail="Incorrect OTP.")

#     user_data = session["user_data"]
    
#     token_payload = {
#         "sub": str(user_data["id"]),
#         "email": user_data["email"],
#         "is_staff": user_data["is_hq_staff"],
#         "role": user_data["hq_role"] if user_data["is_hq_staff"] else user_data.get("tenant_role", "TENANT"),
#         "store_id": user_data.get("store_id"),
#         "industry": user_data.get("industry", "WHOLESALE").upper() 
#     }

#     access_token = create_access_token(data=token_payload)
#     del OTP_STORE[req.email]

#     return {
#         "access_token": access_token,
#         "token_type": "bearer",
#         "user": user_data
#     }


from datetime import datetime, timedelta, timezone
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database import get_db
from auth import verify_password, get_password_hash, create_access_token
from auth_utils import OTP_STORE, generate_otp, send_otp_email
import models
import schemas
from fastapi.responses import JSONResponse

router = APIRouter(tags=["Authentication"])

def extract_industry_value(store) -> str:
    raw = getattr(store, "industry_type", getattr(store, "industry", "WHOLESALE"))
    if hasattr(raw, "value"):
        return str(raw.value).upper()
    return str(raw).upper() if raw else "WHOLESALE"

# REMOVED: response_model=schemas.TokenResponse
# This forces FastAPI to output the raw dictionary without Pydantic stripping unknown keys
@router.post("/api/auth/register", response_model=dict)
def register_store(payload: schemas.StoreRegister, db: Session = Depends(get_db)):
    
    existing_store = db.query(models.StoreDB).filter(models.StoreDB.email == payload.email).first()
    if existing_store:
        raise HTTPException(status_code=400, detail="Email already registered")

    trial_expiration = datetime.utcnow() + timedelta(days=5)

    try:
        industry_enum = models.IndustryType(payload.industry_type.upper())
    except ValueError:
        industry_enum = models.IndustryType.WHOLESALE

    new_store = models.StoreDB(
        storeName=payload.storeName,
        email=payload.email,
        hashed_password=get_password_hash(payload.password),
        industry_type=industry_enum, 
        subscription_tier=payload.selected_tier.upper(),
        subscription_status="TRIAL",
        trial_ends_at=trial_expiration
    )
    
    db.add(new_store)
    db.commit()
    db.refresh(new_store)

    industry_val = extract_industry_value(new_store)

    # user_data = {
    #     "id": new_store.id,
    #     "name": new_store.storeName,
    #     "storeName": new_store.storeName,
    #     "email": new_store.email,
    #     "industry": industry_val,
    #     "tier": new_store.subscription_tier,
    #     "status": "TRIAL",
    #     "subscription_status": "TRIAL",
    #     "trial_ends_at": trial_expiration.isoformat()
    # }
    user_data = {
    "id": new_store.id,
    "email": new_store.email,
    "is_hq_staff": False,
    "hq_role": "TENANT",
    "tier": new_store.subscription_tier,
    "subscription_status": "TRIAL",
    "trial_ends_at": trial_expiration.isoformat(),
    "industry": industry_val,
    "storeName": new_store.storeName
}

    access_token = create_access_token(
        data={
            "sub": str(new_store.id),
            "email": new_store.email,
            "store_id": new_store.id,
            "industry": industry_val,
            "tier": new_store.subscription_tier,
            "status": "TRIAL"
        }
    )

    return JSONResponse(content={
        "access_token": access_token, 
        "token_type": "bearer",
        "user": user_data

    # return {
    #     "access_token": access_token, 
    #     "token_type": "bearer",
    #     "user": user_data
    } )


@router.post("/api/auth/login/initiate")
def initiate_login(credentials: schemas.StoreLogin, db: Session = Depends(get_db)):
    user = None
    user_type = None
    parent_store = None 

    store = db.query(models.StoreDB).filter(models.StoreDB.email == credentials.email).first()
    if store and verify_password(credentials.password, store.hashed_password):
        user = store
        user_type = "OWNER"
        parent_store = store
    
    if not user:
        hq_staff = db.query(models.StaffUser).filter(models.StaffUser.email == credentials.email).first()
        if hq_staff and verify_password(credentials.password, hq_staff.hashed_password):
            user = hq_staff
            user_type = "HQ_STAFF"

    if not user:
        tenant_staff = db.query(models.TenantStaff).filter(models.TenantStaff.email == credentials.email).first()
        if tenant_staff and verify_password(credentials.password, tenant_staff.hashed_password):
            if not tenant_staff.is_active:
                raise HTTPException(status_code=403, detail="Employee account deactivated.")
            user = tenant_staff
            user_type = "TENANT_STAFF"
            parent_store = db.query(models.StoreDB).filter(models.StoreDB.id == tenant_staff.store_id).first()

    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    otp = generate_otp()
    
    user_data = {
        "id": user.id,
        "email": user.email,
        "name": getattr(user, "name", getattr(parent_store, "storeName", "")),
        "user_type": user_type,
        "is_hq_staff": user_type == "HQ_STAFF",
        "hq_role": getattr(user, "hq_role", "TENANT"),
        "tenant_role": getattr(user, "tenant_role", "STORE_ADMIN" if user_type == "OWNER" else None),
        "store_id": getattr(user, "store_id", user.id if user_type == "OWNER" else None),
    }

    if parent_store:
        user_data["storeName"] = getattr(parent_store, "storeName", "")
        raw_industry = getattr(parent_store, 'industry_type', 'WHOLESALE')
        user_data["industry"] = raw_industry.value if hasattr(raw_industry, 'value') else str(raw_industry)
        user_data["subscription_status"] = getattr(parent_store, 'subscription_status', 'TRIAL')
        user_data["trial_ends_at"] = parent_store.trial_ends_at.isoformat() if getattr(parent_store, 'trial_ends_at', None) else None
        user_data["tier"] = getattr(parent_store, 'subscription_tier', 'BASIC')
    else:
        user_data["storeName"] = "HQ"
        user_data["industry"] = "HQ"
        user_data["subscription_status"] = "ACTIVE"
        user_data["trial_ends_at"] = None
        user_data["tier"] = "ENTERPRISE"

    OTP_STORE[credentials.email] = {
        "otp": otp,
        "expires_at": datetime.utcnow() + timedelta(minutes=5),
        "user_data": user_data
    }

    send_otp_email(credentials.email, otp)
    print(f"--- DEVELOPMENT OTP FOR {credentials.email} IS {otp} ---")

    return {"message": "OTP sent successfully to email", "requires_otp": True}


# REMOVED: response_model=schemas.TokenResponse
@router.post("/api/auth/login/verify")
def verify_login_otp(req: schemas.OTPVerifyRequest):
    session = OTP_STORE.get(req.email)

    if not session:
        raise HTTPException(status_code=400, detail="OTP session expired or invalid.")
    
    if datetime.utcnow() > session["expires_at"]:
        del OTP_STORE[req.email]
        raise HTTPException(status_code=400, detail="OTP expired.")

    if session["otp"] != req.otp:
        raise HTTPException(status_code=401, detail="Incorrect OTP.")

    user_data = session["user_data"]
    
    token_payload = {
        "sub": str(user_data["id"]),
        "email": user_data["email"],
        "is_staff": user_data["is_hq_staff"],
        "role": user_data["hq_role"] if user_data["is_hq_staff"] else user_data.get("tenant_role", "TENANT"),
        "store_id": user_data.get("store_id"),
        "industry": user_data.get("industry", "WHOLESALE").upper() 
    }

    access_token = create_access_token(data=token_payload)
    del OTP_STORE[req.email]

    # return {
    #     "access_token": access_token,
    #     "token_type": "bearer",
    #     "user": user_data
    # }

    # --- THE ULTIMATE BYPASS ---
    return JSONResponse(content={
        "access_token": access_token,
        "token_type": "bearer",
        "user": user_data
    })