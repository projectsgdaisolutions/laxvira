from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from datetime import datetime

router = APIRouter(prefix="/api/pharmacy", tags=["Pharmacy Operations"])

# --- Models ---
class InventoryItem(BaseModel): id: str; drug: str; supplier: str; qty: int; expiry: str; status: str
class Prescription(BaseModel): id: str; patient: str; doctor: str; date: str; status: str; type: str
class ComplianceLog(BaseModel): id: str; drug: str; schedule: str; patient: str; rx: str; prescriber: str; timestamp: str; pharmacist: str; verified: bool
class InsuranceClaim(BaseModel): id: str; payer: str; total: float; count: int; status: str
class Patient(BaseModel): id: str; name: str; dob: str; last_visit: str; active_rx: int
class RefillReminder(BaseModel): id: int; patient: str; drug: str; days_left: int; channel: str; auto: bool
class PurchaseOrder(BaseModel): id: str; vendor: str; items: int; total: float; status: str

# --- Seed Databases ---
DB = {
    "inventory": [
        {"id": "BCH-8821", "drug": "Amoxicillin 500mg", "supplier": "PharmaCorp", "qty": 450, "expiry": "2026-10-15", "status": "SAFE"},
        {"id": "BCH-8822", "drug": "Lisinopril 10mg", "supplier": "MedSupply Inc.", "qty": 120, "expiry": "2026-09-30", "status": "EXPIRING SOON"},
        {"id": "BCH-8823", "drug": "Atorvastatin 20mg", "supplier": "PharmaCorp", "qty": 50, "expiry": "2026-08-01", "status": "EXPIRED"}
    ],
    "prescriptions": [
        {"id": "RX-44816", "patient": "Michael Ross", "doctor": "Dr. H. Specter", "date": "2026-09-11", "status": "PENDING REVIEW", "type": "E-Prescribe"},
        {"id": "RX-44817", "patient": "Rachel Zane", "doctor": "Dr. R. Zane", "date": "2026-09-10", "status": "DISPENSED", "type": "Scanned PDF"}
    ],
    "compliance": [
        {"id": "AUD-0991", "drug": "Oxycodone 10mg", "schedule": "C-II", "patient": "John Doe", "rx": "RX-44812", "prescriber": "Dr. A. Smith (DEA: AS1234567)", "timestamp": "2026-09-11 09:14 AM", "pharmacist": "J. Pearson", "verified": True},
        {"id": "AUD-0992", "drug": "Alprazolam 1mg", "schedule": "C-IV", "patient": "Jane Roe", "rx": "RX-44815", "prescriber": "Dr. B. Jones (DEA: BJ7654321)", "timestamp": "2026-09-11 10:05 AM", "pharmacist": "J. Pearson", "verified": True}
    ],
    "insurance": [
        {"id": "CLM-9001", "payer": "BlueCross Health", "total": 1450.0, "count": 12, "status": "READY"},
        {"id": "CLM-9002", "payer": "Medicare Part D", "total": 3200.0, "count": 45, "status": "READY"}
    ],
    "patients": [
        {"id": "PAT-001", "name": "Donna Paulsen", "dob": "1980-08-12", "last_visit": "2026-09-01", "active_rx": 3},
        {"id": "PAT-002", "name": "Katrina Bennett", "dob": "1985-11-22", "last_visit": "2026-08-15", "active_rx": 1}
    ],
    "reminders": [
        {"id": 1, "patient": "Louis Litt", "drug": "Metformin 500mg", "days_left": 3, "channel": "SMS", "auto": True},
        {"id": 2, "patient": "Harvey Specter", "drug": "Lisinopril 10mg", "days_left": 1, "channel": "Email", "auto": False}
    ],
    "supplier_edi": [
        {"id": "PO-7781", "vendor": "McKesson Corp", "items": 12, "total": 45000.0, "status": "SYNCED"},
        {"id": "PO-7782", "vendor": "AmerisourceBergen", "items": 3, "total": 12000.0, "status": "PENDINGEDI"}
    ]
}


# --- Endpoints ---
@router.get("/{module}")
async def get_module_data(module: str):
    if module not in DB: raise HTTPException(404, "Module not found")
    return {"records": DB[module]}

@router.delete("/inventory/{batch_id}")
async def remove_expired_batch(batch_id: str):
    DB["inventory"] = [i for i in DB["inventory"] if i["id"] != batch_id]
    return {"status": "success"}

@router.patch("/prescriptions/{rx_id}/dispense")
async def dispense_rx(rx_id: str):
    for rx in DB["prescriptions"]:
        if rx["id"] == rx_id: rx["status"] = "DISPENSED"
    return {"status": "success"}

@router.post("/reminders/{rem_id}/dispatch")
async def dispatch_reminder(rem_id: int):
    DB["reminders"] = [r for r in DB["reminders"] if r["id"] != rem_id]
    return {"status": "dispatched"}

@router.patch("/supplier-edi/{po_id}/transmit")
async def transmit_edi(po_id: str):
    for po in DB["supplier_edi"]:
        if po["id"] == po_id: po["status"] = "SYNCED"
    return {"status": "transmitted"}