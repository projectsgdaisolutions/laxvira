from database import SessionLocal
from models import StoreDB

def make_superadmin():
    db = SessionLocal()
    
    # PUT YOUR EXACT LOGIN EMAIL HERE
    admin_email = "abhishekghadmode1@gmail.com" 
    
    user = db.query(StoreDB).filter(StoreDB.email == admin_email).first()
    
    if not user:
        print(f"❌ Could not find an account with email: {admin_email}")
        return
        
    # Apply the new RBAC permissions
    user.is_hq_staff = True
    user.hq_role = "SUPERADMIN"
    
    db.commit()
    print(f"✅ Success! {admin_email} has been upgraded to HQ SUPERADMIN.")
    
if __name__ == "__main__":
    make_superadmin()