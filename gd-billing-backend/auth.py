# # # auth.py
# # import os
# # from datetime import datetime, timedelta
# # from passlib.context import CryptContext
# # from jose import jwt
# # from dotenv import load_dotenv

# # load_dotenv()

# # SECRET_KEY = os.getenv("JWT_SECRET")
# # ALGORITHM = "HS256"
# # ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 30  # 30 days

# # pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# # def verify_password(plain_password: str, hashed_password: str) -> bool:
# #     return pwd_context.verify(plain_password, hashed_password)

# # def get_password_hash(password: str) -> str:
# #     return pwd_context.hash(password)

# # def create_access_token(data: dict) -> str:
# #     to_encode = data.copy()
# #     expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
# #     to_encode.update({"exp": expire})
# #     encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
# #     return encoded_jwt




# # def get_current_store(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
# #     """
# #     Decodes the JWT token, extracts the user ID, and fetches the Store from the database.
# #     """
# #     credentials_exception = HTTPException(
# #         status_code=status.HTTP_401_UNAUTHORIZED,
# #         detail="Could not validate credentials",
# #         headers={"WWW-Authenticate": "Bearer"},
# #     )
    
# #     try:
# #         # Decode the token using the constants already in your auth.py
# #         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        
# #         # NOTE: If your token payload uses "id" or "email" instead of "sub", change this key!
# #         store_id: str = payload.get("sub") 
# #         print(f"DEBUG - Decoded Store ID: {store_id}")
        
# #         if store_id is None:
# #             print("DEBUG - Token decoded but 'sub' was missing.") # ADD THIS
# #             raise credentials_exception
            
# #     except JWTError:
# #         print(f"DEBUG - JWT Decode Error: {e}") # ADD THIS
# #         raise credentials_exception
        
# #     # Query the database for the store
# #     store = db.query(StoreDB).filter(StoreDB.id == store_id).first()
    
# #     if store is None:
# #         print(f"DEBUG - Store ID {store_id} not found in database.") # ADD THIS
# #         raise credentials_exception
        
# #     return store


# # def get_current_store(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
# #     print("\n--- NEW REQUEST TRIGGERED ---")
# #     print(f"DEBUG 1 - Token arrived: {token[:15]}...")
    
# #     credentials_exception = HTTPException(
# #         status_code=status.HTTP_401_UNAUTHORIZED,
# #         detail="Could not validate credentials",
# #         headers={"WWW-Authenticate": "Bearer"},
# #     )
    
# #     try:
# #         # Decode the token
# #         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
# #         print(f"DEBUG 2 - Full Token Payload: {payload}")
        
# #         store_id = payload.get("sub") 
# #         print(f"DEBUG 3 - Extracted ID: {store_id}")
        
# #         if store_id is None:
# #             print("❌ ERROR: No 'sub' found in token payload.")
# #             raise credentials_exception
            
# #     except JWTError as e:
# #         print(f"❌ ERROR: JWT Decode Failed - {str(e)}")
# #         raise credentials_exception
        
# #     # Attempt 1: Standard query
# #     store = db.query(StoreDB).filter(StoreDB.id == store_id).first()
    
# #     # Attempt 2: Integer query (The Fix)
# #     # If the standard query fails because store_id is a string like "1", cast it to an int.
# #     if store is None and str(store_id).isdigit():
# #         print(f"DEBUG 4 - String lookup failed. Retrying as Integer {int(store_id)}...")
# #         store = db.query(StoreDB).filter(StoreDB.id == int(store_id)).first()
        
# #     if store is None:
# #         print(f"❌ ERROR: ID {store_id} does not exist in the database.")
# #         raise credentials_exception
        
# #     print(f"✅ SUCCESS: Access granted for {store.email} | Superadmin: {store.is_superadmin}")
# #     print("---------------------------\n")
    
# #     return store

# # def get_current_store(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
# #     print("\n--- NEW REQUEST TRIGGERED ---")
# #     print(f"DEBUG 1 - Token arrived: {token[:15]}...")
    
# #     credentials_exception = HTTPException(
# #         status_code=status.HTTP_401_UNAUTHORIZED,
# #         detail="Could not validate credentials",
# #         headers={"WWW-Authenticate": "Bearer"},
# #     )
    
# #     try:
# #         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
# #         print(f"DEBUG 2 - Full Token Payload: {payload}")
        
# #         user_id = payload.get("sub") 
# #         print(f"DEBUG 3 - Extracted ID: {user_id}")
        
# #         if user_id is None:
# #             print("❌ ERROR: No 'sub' found in token payload.")
# #             raise credentials_exception
            
# #     except JWTError as e:
# #         print(f"❌ ERROR: JWT Decode Failed - {str(e)}")
# #         raise credentials_exception
        
# #     # --- STEP A: Check if the token belongs to a Tenant Staff Member (Manager, Cashier, etc.) ---
# #     staff_member = db.query(TenantStaff).filter(TenantStaff.id == user_id).first()
# #     if staff_member is None and str(user_id).isdigit():
# #         staff_member = db.query(TenantStaff).filter(TenantStaff.id == int(user_id)).first()
        
# #     if staff_member is not None:
# #         print(f"✅ SUCCESS: Access granted for Staff Employee {staff_member.email} | Role: {staff_member.tenant_role}")
# #         print("---------------------------\n")
# #         return staff_member

# #     # --- STEP B: Fallback to Root Store Admin (StoreDB) ---
# #     store = db.query(StoreDB).filter(StoreDB.id == user_id).first()
# #     if store is None and str(user_id).isdigit():
# #         print(f"DEBUG 4 - String lookup failed. Retrying StoreDB as Integer {int(user_id)}...")
# #         store = db.query(StoreDB).filter(StoreDB.id == int(user_id)).first()
        
# #     if store is not None:
# #         print(f"✅ SUCCESS: Access granted for Store Admin {store.email}")
# #         print("---------------------------\n")
# #         return store
        
# #     print(f"❌ ERROR: ID {user_id} does not exist in database as Store or Staff.")
# #     raise credentials_exception










# # auth.py
# import os
# from datetime import datetime, timedelta, timezone
# from jose import jwt
# import bcrypt
# from dotenv import load_dotenv
# from fastapi import Depends, HTTPException, status
# from fastapi.security import OAuth2PasswordBearer
# from sqlalchemy.orm import Session
# from jose import JWTError

# from database import get_db
# from models import StoreDB,TenantStaff, StaffUser


# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/login")

# load_dotenv()

# SECRET_KEY = os.getenv("JWT_SECRET", "super_secret_development_key_12345")
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 30  # 30 days

# def verify_password(plain_password: str, hashed_password: str) -> bool:
#     # bcrypt expects byte strings
#     return bcrypt.checkpw(
#         plain_password.encode('utf-8'), 
#         hashed_password.encode('utf-8')
#     )

# def get_password_hash(password: str) -> str:
#     # Generate a salt and hash the password
#     salt = bcrypt.gensalt()
#     hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
#     return hashed.decode('utf-8')

# def create_access_token(data: dict) -> str:
#     to_encode = data.copy()
#     expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     to_encode.update({"exp": expire})
#     return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# def get_current_store(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
#     credentials_exception = HTTPException(
#         status_code=status.HTTP_401_UNAUTHORIZED,
#         detail="Could not validate credentials",
#         headers={"WWW-Authenticate": "Bearer"},
#     )
    
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         user_id = payload.get("sub")
#         # CRITICAL FIX: Extract the role directly from the token
#         tenant_role = payload.get("tenant_role") 
        
#         if user_id is None:
#             raise credentials_exception
            
#     except JWTError:
#         raise credentials_exception
        
#     # Safely cast to integer for the database query
#     user_id_int = int(user_id) if str(user_id).isdigit() else user_id
        
#     # ROUTE A: The token explicitly belongs to an Employee
#     if tenant_role in ["MANAGER", "CASHIER", "INVENTORY"]:
#         staff = db.query(TenantStaff).filter(TenantStaff.id == user_id_int).first()
#         if staff:
#             return staff

#     # ROUTE B: The token belongs to a Store Admin / Owner (or fallback)
#     store = db.query(StoreDB).filter(StoreDB.id == user_id_int).first()
#     if store:
#         return store
        
#     raise credentials_exception



import os
from datetime import datetime, timedelta, timezone
from jose import jwt, JWTError
import bcrypt
from dotenv import load_dotenv
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from database import get_db
from models import StoreDB, TenantStaff, StaffUser

load_dotenv()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login/initiate")
SECRET_KEY = os.getenv("JWT_SECRET", "super_secret_development_key_12345")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 30  

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

def get_password_hash(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def get_current_store(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
        tenant_role = payload.get("tenant_role") 
        
        if user_id is None:
            raise credentials_exception
            
    except JWTError:
        raise credentials_exception
        
    user_id_int = int(user_id) if str(user_id).isdigit() else user_id
        
    if tenant_role in ["MANAGER", "CASHIER", "INVENTORY"]:
        staff = db.query(TenantStaff).filter(TenantStaff.id == user_id_int).first()
        if staff:
            return staff

    store = db.query(StoreDB).filter(StoreDB.id == user_id_int).first()
    if store:
        return store
        
    raise credentials_exception