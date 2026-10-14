import hashlib
from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from datetime import datetime

router = APIRouter(prefix="/api/rental", tags=["Rental Operations"])

# --- Seed Databases ---
DB = {
    "bookings": [
        {"id": "BK-1002", "asset": "JCB Backhoe Loader", "client": "Highland Construction", "start": "2026-09-12", "end": "2026-09-18", "status": "CONFIRMED"},
        {"id": "BK-1003", "asset": "Yamaha 20kW Generator", "client": "EventPro Ltd", "start": "2026-09-15", "end": "2026-09-16", "status": "DISPATCHED"}
    ],
    "pricing": [
        {"id": 1, "name": "Weekend Surge", "condition": "Day IN (Sat, Sun)", "multiplier": "+15%", "status": "ACTIVE"},
        {"id": 2, "name": "Long-Term Lease Discount", "condition": "Duration > 14 Days", "multiplier": "-20%", "status": "ACTIVE"},
        {"id": 3, "name": "High Demand Threshold", "condition": "Fleet Utilization > 80%", "multiplier": "+25%", "status": "INACTIVE"}
    ],
    "penalties": [
        {"id": "PEN-011", "booking": "BK-0991", "client": "Acme Corp", "hours_late": 14, "fee_accrued": 3500.0, "auto_billed": True},
        {"id": "PEN-012", "booking": "BK-0985", "client": "Stark Ind", "hours_late": 48, "fee_accrued": 12000.0, "auto_billed": False}
    ],
    "waivers": [
        {"id": "WAV-092", "booking": "BK-1002", "client": "Highland Construction", "date": "2026-09-12", "status": "SIGNED", "checksum": "0x8F9a...2b"},
        {"id": "WAV-093", "booking": "BK-1003", "client": "EventPro Ltd", "date": "2026-09-14", "status": "PENDING_SIG", "checksum": None}
    ],
    "maintenance": [
        {"id": "TKT-449", "asset": "Yamaha 20kW Generator", "issue": "Oil leak detected on return", "severity": "HIGH", "status": "IN_REPAIR"},
        {"id": "TKT-450", "asset": "JCB Backhoe Loader", "issue": "Routine 1000hr servicing", "severity": "LOW", "status": "QUEUED"}
    ],
    "deposits": [
        {"id": "DEP-8841", "booking": "BK-1002", "amount": 25000.0, "method": "Credit Card (Tokenized)", "status": "HOLD_ACTIVE", "date": "2026-09-12"},
        {"id": "DEP-8842", "booking": "BK-0994", "amount": 15000.0, "method": "UPI AutoPay", "status": "RELEASED", "date": "2026-09-10"},
        {"id": "DEP-8843", "booking": "BK-0988", "amount": 5000.0, "method": "Credit Card (Tokenized)", "status": "CAPTURED", "date": "2026-09-08", "note": "Damage to chassis"}
    ],
    "telematics": [
        {"id": "EQ-042", "type": "CAT 320", "lat": "19.0760° N", "lng": "72.8777° E", "status": "MOVING", "speed": "12 km/h", "fuel": "45%"},
        {"id": "EQ-089", "type": "Komatsu D61", "lat": "18.5204° N", "lng": "73.8567° E", "status": "IDLE", "speed": "0 km/h", "fuel": "82%"}
    ]
}

@router.get("/{module}")
async def get_rental_module(module: str):
    if module not in DB: raise HTTPException(404, "Module not found")
    return {"records": DB[module]}

class BookingCreate(BaseModel): asset: str; client: str; start: str; end: str
@router.post("/bookings")
async def create_booking(payload: BookingCreate):
    new_id = f"BK-{1000 + len(DB['bookings']) + 1}"
    b = payload.model_dump(); b["id"] = new_id; b["status"] = "CONFIRMED"
    DB["bookings"].append(b)
    return {"status": "success"}

class PricingCreate(BaseModel): name: str; condition: str; multiplier: str; status: str
@router.post("/pricing")
async def create_pricing_rule(payload: PricingCreate):
    new_id = len(DB["pricing"]) + 1
    r = payload.model_dump(); r["id"] = new_id
    DB["pricing"].append(r)
    return {"status": "success"}

@router.patch("/penalties/{pen_id}/charge")
async def charge_penalty(pen_id: str):
    for p in DB["penalties"]:
        if p["id"] == pen_id: p["auto_billed"] = True
    return {"status": "charged"}

@router.patch("/waivers/{wav_id}/sign")
async def sign_waiver(wav_id: str):
    for w in DB["waivers"]:
        if w["id"] == wav_id:
            w["status"] = "SIGNED"
            w["checksum"] = "0x" + hashlib.sha256(str(datetime.now()).encode()).hexdigest()[:8] + "...a1"
    return {"status": "signed"}

@router.patch("/maintenance/{tkt_id}/advance")
async def advance_ticket(tkt_id: str):
    for t in DB["maintenance"]:
        if t["id"] == tkt_id:
            if t["status"] == "QUEUED": t["status"] = "IN_REPAIR"
            elif t["status"] == "IN_REPAIR": t["status"] = "RESOLVED"
    return {"status": "advanced"}

@router.patch("/deposits/{dep_id}/action")
async def action_deposit(dep_id: str, action: str = Query(...)):
    for d in DB["deposits"]:
        if d["id"] == dep_id:
            if action == "release": d["status"] = "RELEASED"
            elif action == "capture": d["status"] = "CAPTURED"
    return {"status": "updated"}