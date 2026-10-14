# import os
# import hmac
# import hashlib
# from fastapi import APIRouter, Depends, HTTPException, Request
# from sqlalchemy.orm import Session
# import razorpay
# from datetime import datetime, timedelta
# from dotenv import load_dotenv
# from database import get_db
# from models import StoreDB
# from auth import get_current_store
# from pathlib import Path

# # load_dotenv()

# env_path = Path(__file__).resolve().parent.parent / ".env"
# load_dotenv(dotenv_path=env_path)

# router = APIRouter()

# # Initialize Razorpay Client
# razorpay_client = razorpay.Client(
#     auth=(os.getenv("RAZORPAY_KEY_ID"), os.getenv("RAZORPAY_KEY_SECRET"))
# )

# TIER_PRICING = {
#     "BASIC": {"monthly": 59900, "annual": 49900 * 12},      # Amounts in paise
#     "GROWTH": {"monthly": 119900, "annual": 99900 * 12},
#     "ENTERPRISE": {"monthly": 299900, "annual": 249900 * 12}
# }

# @router.post("/api/subscriptions/create-order")
# def create_subscription_order(
#     payload: dict, 
#     db: Session = Depends(get_db), 
#     current_store: StoreDB = Depends(get_current_store)
# ):

#     key_id = os.getenv("RAZORPAY_KEY_ID")
#     key_secret = os.getenv("RAZORPAY_KEY_SECRET")
    
#     # Debug print to ensure Python actually sees the keys
#     print(f"DEBUG - Key ID loaded: {key_id}")
    
#     if not key_id or not key_secret:
#         raise HTTPException(status_code=500, detail="Server missing Razorpay credentials")

#     # 2. Initialize client inside the route
#     client = razorpay.Client(auth=(key_id, key_secret))
    
#     tier = payload.get("tier", "GROWTH").upper()
#     billing_cycle = payload.get("cycle", "annual") 
    
#     if tier not in TIER_PRICING:
#         raise HTTPException(status_code=400, detail="Invalid subscription tier.")

#     amount_in_paise = TIER_PRICING[tier][billing_cycle]

#     order_data = {
#         "amount": amount_in_paise,
#         "currency": "INR",
#         "receipt": f"rcpt_{current_store.id}_{int(datetime.now().timestamp())}",
#         "notes": {
#             "store_id": current_store.id,
#             "tier": tier,
#             "cycle": billing_cycle
#         }
#     }
    
#     try:
#         order = client.order.create(data=order_data)
#         return {"order_id": order["id"], "amount": amount_in_paise, "currency": "INR"}
#     except Exception as e:
#         print(f"❌ RAZORPAY API ERROR: {str(e)}") 
#         raise HTTPException(status_code=500, detail=str(e))
#     # tier = payload.get("tier", "GROWTH").upper()
#     # billing_cycle = payload.get("cycle", "annual") # 'monthly' or 'annual'
    
#     # if tier not in TIER_PRICING:
#     #     raise HTTPException(status_code=400, detail="Invalid subscription tier.")

#     # amount_in_paise = TIER_PRICING[tier][billing_cycle]

#     # # Create the order on Razorpay's servers
#     # order_data = {
#     #     "amount": amount_in_paise,
#     #     "currency": "INR",
#     #     "receipt": f"rcpt_{current_store.id}_{int(datetime.now().timestamp())}",
#     #     "notes": {
#     #         "store_id": current_store.id,
#     #         "tier": tier,
#     #         "cycle": billing_cycle
#     #     }
#     # }
    
#     # try:
#     #     order = razorpay_client.order.create(data=order_data)
#     #     return {"order_id": order["id"], "amount": amount_in_paise, "currency": "INR"}
#     # except Exception as e:
#     #     print(f"❌ RAZORPAY API ERROR: {str(e)}")
#     #     raise HTTPException(status_code=500, detail=str(e))


# @router.post("/api/webhooks/razorpay")
# async def razorpay_webhook(request: Request, db: Session = Depends(get_db)):
#     """
#     Public, unauthenticated endpoint. Security relies entirely on HMAC SHA256 signature verification.
#     """
#     webhook_secret = os.getenv("RAZORPAY_WEBHOOK_SECRET")
#     signature = request.headers.get("x-razorpay-signature")
    
#     if not signature:
#         raise HTTPException(status_code=400, detail="Missing signature header")

#     payload = await request.body()
    
#     # 1. Verify the cryptographic signature
#     expected_sig = hmac.new(
#         webhook_secret.encode('utf-8'), 
#         payload, 
#         hashlib.sha256
#     ).hexdigest()

#     if not hmac.compare_digest(expected_sig, signature):
#         raise HTTPException(status_code=400, detail="Invalid signature")

#     # 2. Parse the verified payload
#     data = await request.json()
#     event_type = data.get("event")

#     # 3. Handle successful payment capture
#     if event_type == "payment.captured":
#         payment_entity = data["payload"]["payment"]["entity"]
#         notes = payment_entity.get("notes", {})
        
#         store_id = notes.get("store_id")
#         tier = notes.get("tier")
#         cycle = notes.get("cycle")

#         if not store_id:
#             return {"status": "ignored", "reason": "No store_id in notes"}

#         # Upgrade the store in the database
#         store = db.query(StoreDB).filter(StoreDB.id == store_id).first()
#         if store:
#             store.subscription_tier = tier
#             store.subscription_status = "ACTIVE"
            
#             # Calculate next billing date
#             days_to_add = 365 if cycle == "annual" else 30
#             store.trial_ends_at = datetime.utcnow() + timedelta(days=days_to_add)
            
#             db.commit()
#             print(f"✅ SUCCESS: Store {store_id} upgraded to {tier}")

#     return {"status": "ok"}


import os
import hmac
import hashlib
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
import razorpay
from datetime import datetime, timedelta
from dotenv import load_dotenv
from database import get_db
from models import StoreDB
from auth import get_current_store
from pathlib import Path

env_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(dotenv_path=env_path)

router = APIRouter()

# Initialize Razorpay Client
razorpay_client = razorpay.Client(
    auth=(os.getenv("RAZORPAY_KEY_ID"), os.getenv("RAZORPAY_KEY_SECRET"))
)

TIER_PRICING = {
    "BASIC": {"monthly": 59900, "annual": 49900 * 12},      # Amounts in paise
    "GROWTH": {"monthly": 119900, "annual": 99900 * 12},
    "ENTERPRISE": {"monthly": 299900, "annual": 249900 * 12}
}

@router.post("/api/subscriptions/create-order")
def create_subscription_order(
    payload: dict, 
    db: Session = Depends(get_db), 
    current_store: StoreDB = Depends(get_current_store)
):

    key_id = os.getenv("RAZORPAY_KEY_ID")
    key_secret = os.getenv("RAZORPAY_KEY_SECRET")
    
    # Debug print to ensure Python actually sees the keys
    print(f"DEBUG - Key ID loaded: {key_id}")
    
    if not key_id or not key_secret:
        raise HTTPException(status_code=500, detail="Server missing Razorpay credentials")

    # 2. Initialize client inside the route
    client = razorpay.Client(auth=(key_id, key_secret))
    
    tier = payload.get("tier", "GROWTH").upper()
    billing_cycle = payload.get("cycle", "annual") 
    
    if tier not in TIER_PRICING:
        raise HTTPException(status_code=400, detail="Invalid subscription tier.")

    amount_in_paise = TIER_PRICING[tier][billing_cycle]

    order_data = {
        "amount": amount_in_paise,
        "currency": "INR",
        "receipt": f"rcpt_{current_store.id}_{int(datetime.now().timestamp())}",
        "notes": {
            "store_id": current_store.id,
            "tier": tier,
            "cycle": billing_cycle
        }
    }
    
    try:
        order = client.order.create(data=order_data)
        return {"order_id": order["id"], "amount": amount_in_paise, "currency": "INR"}
    except Exception as e:
        print(f"❌ RAZORPAY API ERROR: {str(e)}") 
        raise HTTPException(status_code=500, detail=str(e))



@router.post("/api/webhooks/razorpay")
async def razorpay_webhook(request: Request, db: Session = Depends(get_db)):
    """
    Public, unauthenticated endpoint. Security relies entirely on HMAC SHA256 signature verification.
    """
    webhook_secret = os.getenv("RAZORPAY_WEBHOOK_SECRET")
    signature = request.headers.get("x-razorpay-signature")
    
    if not signature:
        raise HTTPException(status_code=400, detail="Missing signature header")

    payload = await request.body()
    
    # 1. Verify the cryptographic signature
    expected_sig = hmac.new(
        webhook_secret.encode('utf-8'), 
        payload, 
        hashlib.sha256
    ).hexdigest()

    if not hmac.compare_digest(expected_sig, signature):
        raise HTTPException(status_code=400, detail="Invalid signature")

    # 2. Parse the verified payload
    data = await request.json()
    event_type = data.get("event")

    # 3. Safely extract notes based on the specific event structure
    notes = {}
    if event_type in ["payment.captured", "payment.authorized"]:
        notes = data.get("payload", {}).get("payment", {}).get("entity", {}).get("notes", {})
    elif event_type == "order.paid":
        notes = data.get("payload", {}).get("order", {}).get("entity", {}).get("notes", {})
    else:
        return {"status": "ignored", "reason": f"Unhandled event type: {event_type}"}

    store_id = notes.get("store_id")
    tier = notes.get("tier")
    cycle = notes.get("cycle")

    if not store_id:
        return {"status": "ignored", "reason": "No store_id in notes"}

    # 4. Update the Database
    store = db.query(StoreDB).filter(StoreDB.id == int(store_id)).first()
    if store:
        store.subscription_tier = tier.upper()
        store.subscription_status = "ACTIVE"
        
        # Calculate next billing date
        days_to_add = 365 if cycle == "annual" else 30
        store.trial_ends_at = datetime.utcnow() + timedelta(days=days_to_add)
        
        db.commit()
        print(f"✅ SUCCESS: Store {store_id} upgraded to {tier.upper()}")

    return {"status": "ok"}



# Add this inside subscription.py
@router.post("/api/subscriptions/verify-payment")
def verify_payment(
    payload: dict,
    db: Session = Depends(get_db),
    current_store: StoreDB = Depends(get_current_store)
):
    key_secret = os.getenv("RAZORPAY_KEY_SECRET")
    
    razorpay_order_id = payload.get("razorpay_order_id")
    razorpay_payment_id = payload.get("razorpay_payment_id")
    razorpay_signature = payload.get("razorpay_signature")
    tier = payload.get("tier", "GROWTH").upper()
    cycle = payload.get("cycle", "annual")

    # 1. Verify the cryptographic signature synchronously
    msg = f"{razorpay_order_id}|{razorpay_payment_id}"
    expected_sig = hmac.new(
        key_secret.encode('utf-8'),
        msg.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()

    if not hmac.compare_digest(expected_sig, razorpay_signature):
        raise HTTPException(status_code=400, detail="Invalid payment signature")

    # 2. Signature is valid! Update the database immediately
    current_store.subscription_tier = tier
    current_store.subscription_status = "ACTIVE"
    
    days_to_add = 365 if cycle == "annual" else 30
    current_store.trial_ends_at = datetime.utcnow() + timedelta(days=days_to_add)
    
    db.commit()
    print(f"✅ SYNCHRONOUS SUCCESS: Store {current_store.id} upgraded to {tier}")

    return {"status": "success", "tier": tier}

# @router.post("/api/webhooks/razorpay")
# async def razorpay_webhook(request: Request, db: Session = Depends(get_db)):
#     """
#     Public, unauthenticated endpoint. Security relies entirely on HMAC SHA256 signature verification.
#     """
#     webhook_secret = os.getenv("RAZORPAY_WEBHOOK_SECRET")
#     signature = request.headers.get("x-razorpay-signature")
    
#     if not signature:
#         raise HTTPException(status_code=400, detail="Missing signature header")

#     payload = await request.body()
    
#     # 1. Verify the cryptographic signature
#     expected_sig = hmac.new(
#         webhook_secret.encode('utf-8'), 
#         payload, 
#         hashlib.sha256
#     ).hexdigest()

#     if not hmac.compare_digest(expected_sig, signature):
#         raise HTTPException(status_code=400, detail="Invalid signature")

#     # 2. Parse the verified payload
#     data = await request.json()
#     event_type = data.get("event")

#     # 3. Handle successful payment capture
#     # 
#     if event_type in ["payment.captured", "payment.authorized", "order.paid"]:
#         payment_entity = data["payload"]["payment"]["entity"]
#         notes = payment_entity.get("notes", {})
        
#         store_id = notes.get("store_id")
#         tier = notes.get("tier")
#         cycle = notes.get("cycle")

#         if not store_id:
#             return {"status": "ignored", "reason": "No store_id in notes"}

#         # --- FIX: Cast store_id to integer for exact SQL match ---
#         store = db.query(StoreDB).filter(StoreDB.id == int(store_id)).first()
#         if store:
#             store.subscription_tier = tier.upper() # Ensure uppercase saving
#             store.subscription_status = "ACTIVE"
            
#             # Calculate next billing date
#             days_to_add = 365 if cycle == "annual" else 30
#             store.trial_ends_at = datetime.utcnow() + timedelta(days=days_to_add)
            
#             db.commit()
#             print(f"✅ SUCCESS: Store {store_id} upgraded to {tier.upper()}")

#     return {"status": "ok"}