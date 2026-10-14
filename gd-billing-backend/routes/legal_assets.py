import uuid
from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from datetime import date
import random

router = APIRouter(prefix="/api/legal", tags=["Legal Operations"])

class HourLogCreate(BaseModel):
    case_number: str
    date: str
    hours: float
    rate: float
    description: str

class HourLog(HourLogCreate):
    id: str

# Initial seed data for Billable Hours
HOURS_DB: dict[str, dict] = {
    "LOG-001": {
        "id": "LOG-001",
        "case_number": "CV-2026-892",
        "date": "2026-09-18",
        "hours": 2.5,
        "rate": 450.0,
        "description": "Deposition preparation and review of exhibits."
    },
    "LOG-002": {
        "id": "LOG-002",
        "case_number": "CR-2026-104",
        "date": "2026-09-19",
        "hours": 1.2,
        "rate": 500.0,
        "description": "Client consultation regarding plea agreement."
    },
}

@router.get("/hours")
async def get_logged_hours():
    # Return as a dictionary containing a 'records' list to match frontend expectations
    return {"records": list(HOURS_DB.values())}

@router.post("/hours")
async def log_billable_hours(payload: HourLogCreate):
    new_id = f"LOG-{uuid.uuid4().hex[:6].upper()}"
    new_record = payload.model_dump()
    new_record["id"] = new_id
    
    HOURS_DB[new_id] = new_record
    return {"status": "success", "record": new_record}

# --- Append to routes/legal_assets.py ---
from datetime import date

class CaseFileCreate(BaseModel):
    case_number: str
    client_name: str
    opposing_counsel: str
    practice_area: str
    status: str

# Initial seed data for Case Management
CASES_DB: dict[str, dict] = {
    "MAT-001": {
        "id": "MAT-001",
        "case_number": "CV-2026-892",
        "client_name": "TechFlow Inc.",
        "opposing_counsel": "Smith & Associates",
        "practice_area": "Intellectual Property",
        "status": "DISCOVERY",
        "open_date": "2026-03-15"
    },
    "MAT-002": {
        "id": "MAT-002",
        "case_number": "CR-2026-104",
        "client_name": "Marcus Johnson",
        "opposing_counsel": "State Prosecutor",
        "practice_area": "Criminal Defense",
        "status": "LITIGATION",
        "open_date": "2026-05-22"
    },
    "MAT-003": {
        "id": "MAT-003",
        "case_number": "PR-2026-451",
        "client_name": "Estate of H. Miller",
        "opposing_counsel": "Pro Se",
        "practice_area": "Probate & Estate",
        "status": "PRE-FILING",
        "open_date": "2026-08-10"
    }
}

@router.get("/cases")
async def get_cases():
    return {"records": list(CASES_DB.values())}

@router.post("/cases")
async def open_new_matter(payload: CaseFileCreate):
    new_id = f"MAT-{len(CASES_DB) + 1:03d}"
    new_case = payload.model_dump()
    new_case.update({
        "id": new_id,
        "open_date": date.today().isoformat()
    })
    CASES_DB[new_id] = new_case
    return {"status": "success", "record": new_case}

# --- Append to routes/legal_assets.py ---

class ClientPortalCreate(BaseModel):
    client: str
    email: str
    access_level: str

class ClientPortal(ClientPortalCreate):
    id: int
    last_login: str
    active: bool
    case_links: int

# Initial seed data for Client Portals
PORTALS_DB: dict[int, dict] = {
    1: {"id": 1, "client": "Jessica Pearson", "email": "j.pearson@specter.com", "access_level": "FULL_READ", "last_login": "Today, 09:14 AM", "active": True, "case_links": 2},
    2: {"id": 2, "client": "Robert Zane", "email": "rzane@zane.com", "access_level": "RESTRICTED", "last_login": "2026-09-02", "active": True, "case_links": 1},
    3: {"id": 3, "client": "Charles Forstman", "email": "c.forstman@invest.com", "access_level": "REVOKED", "last_login": "2025-11-14", "active": False, "case_links": 0},
}

@router.get("/portals")
async def get_portals():
    return {"records": list(PORTALS_DB.values())}

@router.post("/portals")
async def generate_access_key(payload: ClientPortalCreate):
    new_id = max(PORTALS_DB.keys(), default=0) + 1
    new_portal = payload.model_dump()
    new_portal.update({
        "id": new_id,
        "last_login": "Never",
        "active": True,
        "case_links": 0
    })
    PORTALS_DB[new_id] = new_portal
    return {"status": "success", "record": new_portal}

@router.patch("/portals/{portal_id}/status")
async def toggle_portal_status(portal_id: int):
    if portal_id not in PORTALS_DB:
        raise HTTPException(status_code=404, detail="Portal identity not found")
    
    portal = PORTALS_DB[portal_id]
    portal["active"] = not portal["active"]
    
    if not portal["active"]:
        portal["access_level"] = "REVOKED"
    else:
        # Default to restricted upon restoration until manually upgraded
        portal["access_level"] = "RESTRICTED"
        
    return {"status": "success", "record": portal}

# --- Append to routes/legal_assets.py ---


class ConflictSearchQuery(BaseModel):
    query: str

class ConflictResult(BaseModel):
    id: int
    name: str
    type: str
    role: str
    case: str
    confidence: int
    date: str

# Simulated historical database for conflict checks
HISTORICAL_ENTITIES: List[dict] = [
    {"id": 1, "name": "Hardman & Co.", "type": "Corporate Entity", "role": "Former Client", "case": "CV-2024-112", "date": "2024-03-15"},
    {"id": 2, "name": "Daniel Hardman", "type": "Individual", "role": "Opposing Party", "case": "CV-2025-044", "date": "2025-11-20"},
    {"id": 3, "name": "Apex Holdings", "type": "Corporate Entity", "role": "Active Client", "case": "CV-2026-892", "date": "2026-01-10"},
    {"id": 4, "name": "Jessica Pearson", "type": "Individual", "role": "Co-Counsel", "case": "CR-2023-001", "date": "2023-05-11"},
    {"id": 5, "name": "TechFlow Inc.", "type": "Corporate Entity", "role": "Active Client", "case": "CV-2026-892", "date": "2026-03-15"}
]

@router.post("/conflicts/search")
async def search_conflicts(payload: ConflictSearchQuery):
    query_str = payload.query.lower()
    matches = []
    
    for entity in HISTORICAL_ENTITIES:
        # Simple simulation of fuzzy matching against entity name or case ID
        if query_str in entity["name"].lower() or query_str in entity["case"].lower():
            # Assign a calculated confidence score based on match precision
            confidence = 98 if query_str == entity["name"].lower() else random.randint(70, 95)
            
            match_result = entity.copy()
            match_result["confidence"] = confidence
            matches.append(match_result)
            
    # Sort matches by highest confidence descending
    matches.sort(key=lambda x: x["confidence"], reverse=True)
    
    return {"matches": matches}

# --- Append to routes/legal_assets.py ---

class DocketEntryCreate(BaseModel):
    date: str
    time: str
    case_number: str
    client_name: str
    hearing_type: str
    location: str
    judge: str

# Initial seed data for Court Scheduling
DOCKET_DB: dict[str, dict] = {
    "DOC-001": {
        "id": "DOC-001", "date": "2026-10-12", "time": "09:00", 
        "case_number": "CV-2026-104", "client_name": "Pearson v. Specter", 
        "hearing_type": "Motion for Summary Judgment", "location": "Courtroom 3B", "judge": "R. Kessler"
    },
    "DOC-002": {
        "id": "DOC-002", "date": "2026-10-15", "time": "14:30", 
        "case_number": "CV-2026-892", "client_name": "Zane LLC", 
        "hearing_type": "Discovery Status Conference", "location": "Chambers", "judge": "M. Patel"
    }
}

@router.get("/calendar")
async def get_docket_calendar():
    # In production, you would sort this by date/time before returning
    sorted_records = sorted(list(DOCKET_DB.values()), key=lambda x: (x["date"], x["time"]))
    return {"records": sorted_records}

@router.post("/calendar")
async def add_docket_entry(payload: DocketEntryCreate):
    new_id = f"DOC-{len(DOCKET_DB) + 1:03d}"
    new_entry = payload.model_dump()
    new_entry["id"] = new_id
    DOCKET_DB[new_id] = new_entry
    return {"status": "success", "record": new_entry}

# --- Append to routes/legal_assets.py ---

class RetainerCreate(BaseModel):
    case_number: str
    client: str
    current_balance: float
    threshold: float
    auto_replenish: bool

# Initial seed data for Retainer Automation
RETAINERS_DB: dict[int, dict] = {
    1: {"id": 1, "case_number": "CV-2026-104", "client": "Pearson v. Specter", "current_balance": 145000.0, "threshold": 50000.0, "auto_replenish": True, "last_deduction": "2026-09-08"},
    2: {"id": 2, "case_number": "CV-2026-892", "client": "Zane LLC", "current_balance": 12000.0, "threshold": 25000.0, "auto_replenish": False, "last_deduction": "2026-09-10"},
}

@router.get("/retainers")
async def get_retainers():
    return {"records": list(RETAINERS_DB.values())}

@router.post("/retainers")
async def link_retainer(payload: RetainerCreate):
    new_id = max(RETAINERS_DB.keys(), default=0) + 1
    new_record = payload.model_dump()
    new_record.update({
        "id": new_id,
        "last_deduction": "N/A"
    })
    RETAINERS_DB[new_id] = new_record
    return {"status": "success", "record": new_record}

@router.patch("/retainers/{retainer_id}/toggle")
async def toggle_auto_replenish(retainer_id: int):
    if retainer_id not in RETAINERS_DB:
        raise HTTPException(status_code=404, detail="Retainer not found")
    
    RETAINERS_DB[retainer_id]["auto_replenish"] = not RETAINERS_DB[retainer_id]["auto_replenish"]
    return {"status": "success", "record": RETAINERS_DB[retainer_id]}

# --- Append to routes/legal_assets.py ---
from datetime import datetime

class TrustLedgerCreate(BaseModel):
    client_name: str
    case_number: str
    ledger_balance: float

class TrustLedger(TrustLedgerCreate):
    id: str
    status: str
    last_audit_date: str

# Initial seed data for Trust & Escrow Accounting
TRUST_DB: dict[str, dict] = {
    "ESC-001": {
        "id": "ESC-001",
        "client_name": "Apex Holdings",
        "case_number": "CV-2026-892",
        "ledger_balance": 1500000.0,
        "status": "COMPLIANT",
        "last_audit_date": "2026-09-01T10:00:00Z"
    },
    "ESC-002": {
        "id": "ESC-002",
        "client_name": "Marcus Johnson",
        "case_number": "CR-2026-104",
        "ledger_balance": 25000.0,
        "status": "COMPLIANT",
        "last_audit_date": "2026-09-15T14:30:00Z"
    }
}

@router.get("/trust")
async def get_trust_ledgers():
    return {"records": list(TRUST_DB.values())}

@router.post("/trust")
async def create_trust_ledger(payload: TrustLedgerCreate):
    new_id = f"ESC-{len(TRUST_DB) + 1:03d}"
    new_ledger = payload.model_dump()
    new_ledger.update({
        "id": new_id,
        "status": "COMPLIANT",
        "last_audit_date": datetime.now().isoformat() + "Z"
    })
    TRUST_DB[new_id] = new_ledger
    return {"status": "success", "record": new_ledger}