from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models
from pydantic import BaseModel
from typing import Dict

router = APIRouter(prefix="/api/pricing", tags=["Pricing Engine"])

class TierPricingSchema(BaseModel):
    BASIC: int
    GROWTH: int
    ENTERPRISE: int

# 1. Public / Tenant Endpoint: Get rates for a specific industry
@router.get("/{industry}")
def get_industry_pricing(industry: str, db: Session = Depends(get_db)):
    industry_upper = industry.upper()
    pricing = db.query(models.IndustryPricingDB).filter(models.IndustryPricingDB.industry == industry_upper).first()
    
    if not pricing:
        # Fallback defaults if not explicitly seeded
        return {"BASIC": 999, "GROWTH": 2499, "ENTERPRISE": 4999}
        
    return {
        "BASIC": pricing.basic_price,
        "GROWTH": pricing.growth_price,
        "ENTERPRISE": pricing.enterprise_price
    }

# 2. SuperAdmin Endpoint: Get all industry prices at once
@router.get("/")
def get_all_pricing(db: Session = Depends(get_db)):
    records = db.query(models.IndustryPricingDB).all()
    result = {}
    for r in records:
        result[r.industry] = {
            "BASIC": r.basic_price,
            "GROWTH": r.growth_price,
            "ENTERPRISE": r.enterprise_price
        }
    return result

# 3. SuperAdmin Endpoint: Bulk update industry rates
@router.post("/bulk-update")
def bulk_update_pricing(payload: Dict[str, TierPricingSchema], db: Session = Depends(get_db)):
    for ind, tiers in payload.items():
        record = db.query(models.IndustryPricingDB).filter(models.IndustryPricingDB.industry == ind.upper()).first()
        if not record:
            record = models.IndustryPricingDB(industry=ind.upper())
            db.add(record)
        
        record.basic_price = tiers.BASIC
        record.growth_price = tiers.GROWTH
        record.enterprise_price = tiers.ENTERPRISE
        
    db.commit()
    return {"status": "success", "message": "Pricing synced across all verticals"}