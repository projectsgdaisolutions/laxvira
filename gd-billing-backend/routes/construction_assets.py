from datetime import date, datetime
from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query,UploadFile, File, Form
from pydantic import BaseModel, Field
import uuid

router = APIRouter(prefix="/api/construction/assets", tags=["Construction Assets"])

# In-memory store fallback or replace with your MongoDB/motor collection:
# db = get_database()["construction_assets"]

class AssetSchema(BaseModel):
    id: str = Field(..., description="Asset Matrix ID e.g. EQ-042")
    name: str
    category: str
    status: str = Field(default="ACTIVE")  # ACTIVE, MAINTENANCE, RETIRED
    site: str
    hours_logged: float = 0.0
    next_service: str
    condition: int = Field(ge=0, le=100, default=100)

class AssetCreate(AssetSchema):
    pass

class TelemetryUpdate(BaseModel):
    additional_hours: float
    new_condition: Optional[int] = Field(None, ge=0, le=100)
    status: Optional[str] = None

# Initial seed data
ASSET_DB: dict[str, dict] = {
    "EQ-042": {
        "id": "EQ-042",
        "name": "CAT 320 Excavator",
        "category": "Earthmoving",
        "status": "ACTIVE",
        "site": "Highland Commercial",
        "hours_logged": 1450.0,
        "next_service": "2026-10-15",
        "condition": 85,
    },
    "EQ-089": {
        "id": "EQ-089",
        "name": "Komatsu D61 Dozer",
        "category": "Earthmoving",
        "status": "MAINTENANCE",
        "site": "Service Yard A",
        "hours_logged": 3200.0,
        "next_service": "2026-09-08",
        "condition": 40,
    },
    "EQ-112": {
        "id": "EQ-112",
        "name": "JLG 800AJ Boom Lift",
        "category": "Aerial",
        "status": "ACTIVE",
        "site": "Sector 4 Residential",
        "hours_logged": 890.0,
        "next_service": "2026-11-20",
        "condition": 92,
    },
}

@router.get("", response_model=List[AssetSchema])
async def list_assets(q: Optional[str] = Query(None, description="Search by ID, name, or site")):
    assets = list(ASSET_DB.values())
    if q:
        query_str = q.lower()
        assets = [
            a for a in assets
            if query_str in a["id"].lower()
            or query_str in a["name"].lower()
            or query_str in a["site"].lower()
            or query_str in a["category"].lower()
        ]
    return assets

@router.post("", response_model=AssetSchema, status_code=201)
async def create_asset(payload: AssetCreate):
    if payload.id in ASSET_DB:
        raise HTTPException(status_code=400, detail=f"Asset ID {payload.id} already exists.")
    ASSET_DB[payload.id] = payload.model_dump()
    return ASSET_DB[payload.id]

@router.patch("/{asset_id}/telemetry", response_model=AssetSchema)
async def update_telemetry(asset_id: str, telemetry: TelemetryUpdate):
    if asset_id not in ASSET_DB:
        raise HTTPException(status_code=404, detail="Asset not found")
    
    asset = ASSET_DB[asset_id]
    asset["hours_logged"] += telemetry.additional_hours
    if telemetry.new_condition is not None:
        asset["condition"] = telemetry.new_condition
    if telemetry.status:
        asset["status"] = telemetry.status.upper()
        
    return asset

# --- Append to routes/construction_assets.py ---

class BomMaterial(BaseModel):
    id: int
    category: str
    item: str
    unit: str
    quantity: float
    rate: float
    margin: float

class BomMaterialCreate(BaseModel):
    category: str
    item: str
    unit: str
    quantity: float
    rate: float
    margin: float

# Initial seed data for BOM
BOM_DB: dict[int, dict] = {
    1: {"id": 1, "category": "Structural", "item": "Rebar TMT 12mm", "unit": "Tonne", "quantity": 12, "rate": 58000, "margin": 15},
    2: {"id": 2, "category": "Masonry", "item": "AAC Blocks 600x200x150", "unit": "Cubic Meter", "quantity": 85, "rate": 3200, "margin": 18},
    3: {"id": 3, "category": "Concrete", "item": "Ready Mix M30 Grade", "unit": "Cubic Meter", "quantity": 240, "rate": 4500, "margin": 10},
}
BOM_ID_COUNTER = 4

@router.get("/bom", response_model=List[BomMaterial])
async def get_bom_materials():
    return list(BOM_DB.values())

@router.post("/bom/save")
async def save_bom(materials: List[BomMaterial]):
    global BOM_DB
    BOM_DB.clear()
    for m in materials:
        BOM_DB[m.id] = m.model_dump()
    return {"status": "success"}

@router.post("/bom/item", response_model=BomMaterial)
async def add_bom_item(item: BomMaterialCreate):
    global BOM_ID_COUNTER
    new_item = item.model_dump()
    new_item["id"] = BOM_ID_COUNTER
    BOM_DB[BOM_ID_COUNTER] = new_item
    BOM_ID_COUNTER += 1
    return new_item


class ComplianceDoc(BaseModel):
    id: str
    title: str
    category: str
    project: str
    expiry: str
    status: str

# Initial seed data for Compliance Documents
COMPLIANCE_DB: dict[str, dict] = {
    "DOC-991": {"id": "DOC-991", "title": "Environmental Clearance - Phase 1", "category": "Permits", "project": "Highland Commercial", "expiry": "2027-01-01", "status": "VALID"},
    "DOC-992": {"id": "DOC-992", "title": "Heavy Crane Operation License", "category": "Safety Certifications", "project": "Global", "expiry": "2026-09-20", "status": "EXPIRING SOON"},
    "DOC-993": {"id": "DOC-993", "title": "Structural Blueprints v4.2", "category": "Engineering", "project": "Sector 4 Residential", "expiry": "N/A", "status": "VALID"},
}

@router.get("/compliance", response_model=List[ComplianceDoc])
async def list_compliance_docs(q: Optional[str] = Query(None, description="Search by title, ID, or project")):
    docs = list(COMPLIANCE_DB.values())
    if q:
        query_str = q.lower()
        docs = [
            d for d in docs
            if query_str in d["title"].lower()
            or query_str in d["id"].lower()
            or query_str in d["project"].lower()
            or query_str in d["category"].lower()
        ]
    return docs

@router.post("/compliance", response_model=ComplianceDoc)
async def upload_compliance_doc(
    title: str = Form(...),
    category: str = Form(...),
    project: str = Form(...),
    expiry: str = Form(...),
    file: UploadFile = File(...)
):
    # Generate a unique ID like DOC-A1B2
    doc_id = f"DOC-{uuid.uuid4().hex[:4].upper()}"
    
    # Calculate status based on expiry
    status = "VALID"
    if expiry != "N/A":
        try:
            exp_date = datetime.strptime(expiry, "%Y-%m-%d").date()
            days_left = (exp_date - date.today()).days
            if days_left < 0:
                status = "EXPIRED"
            elif days_left <= 30:
                status = "EXPIRING SOON"
        except ValueError:
            pass
            
    new_doc = {
        "id": doc_id,
        "title": title,
        "category": category,
        "project": project,
        "expiry": expiry,
        "status": status,
        # In a real app, you would save await file.read() to S3 or local disk here
    }
    
    COMPLIANCE_DB[doc_id] = new_doc
    return new_doc

@router.get("/compliance/{doc_id}/download")
async def download_compliance_doc(doc_id: str):
    if doc_id not in COMPLIANCE_DB:
        raise HTTPException(status_code=404, detail="Document not found")
    # Mocking a download action - in reality, return a FileResponse
    return {"message": "Download initiated", "file_data": COMPLIANCE_DB[doc_id]}



# --- Append to routes/construction_assets.py ---

class LaborTimesheet(BaseModel):
    id: str
    name: str
    trade: str
    project: str
    hours: float
    rate: float
    overtime: float

class LaborTimesheetCreate(BaseModel):
    name: str
    trade: str
    project: str
    hours: float
    rate: float
    overtime: float

# Initial seed data for Labor & Timesheets
TIMESHEET_DB: dict[str, dict] = {
    "WRK-01": {"id": "WRK-01", "name": "Mike Alvarez", "trade": "Master Electrician", "project": "Highland Commercial", "hours": 42.5, "rate": 1250.0, "overtime": 4.0},
    "WRK-02": {"id": "WRK-02", "name": "David Chen", "trade": "Concrete Foreman", "project": "Sector 4 Residential", "hours": 40.0, "rate": 950.0, "overtime": 0.0},
    "WRK-03": {"id": "WRK-03", "name": "Sarah Jenkins", "trade": "Crane Operator", "project": "Highland Commercial", "hours": 38.0, "rate": 1100.0, "overtime": 2.0},
}

@router.get("/timesheets", response_model=List[LaborTimesheet])
async def list_timesheets(q: Optional[str] = Query(None, description="Search by name, trade, or project")):
    sheets = list(TIMESHEET_DB.values())
    if q:
        query_str = q.lower()
        sheets = [
            s for s in sheets
            if query_str in s["name"].lower()
            or query_str in s["trade"].lower()
            or query_str in s["project"].lower()
        ]
    return sheets

@router.post("/timesheets", response_model=LaborTimesheet)
async def log_shift_override(payload: LaborTimesheetCreate):
    # Generate sequential ID e.g., WRK-04
    new_id = f"WRK-{len(TIMESHEET_DB) + 1:02d}"
    new_sheet = payload.model_dump()
    new_sheet["id"] = new_id
    TIMESHEET_DB[new_id] = new_sheet
    return new_sheet

@router.post("/timesheets/process")
async def process_payroll_batch():
    # Mocking a heavy payroll batch processing task
    return {"message": f"Successfully processed payroll for {len(TIMESHEET_DB)} personnel."}


# --- Append to routes/construction_assets.py ---

class MilestoneProject(BaseModel):
    id: str
    name: str
    client: str
    contractValue: float
    billed: float
    currentPhase: str
    completion: int
    status: str

class ProjectContractCreate(BaseModel):
    name: str
    client: str
    contractValue: float
    currentPhase: str

# Initial seed data for Milestone Billing
MILESTONE_DB: dict[str, dict] = {
    "PRJ-801": {"id": "PRJ-801", "name": "Highland Commercial Complex", "client": "Apex Holdings", "contractValue": 12500000.0, "billed": 5000000.0, "currentPhase": "MEP Rough-in", "completion": 45, "status": "ON TRACK"},
    "PRJ-802": {"id": "PRJ-802", "name": "Sector 4 Residential", "client": "Oasis Dev", "contractValue": 8500000.0, "billed": 8000000.0, "currentPhase": "Final Finishes", "completion": 95, "status": "PENDING INVOICE"},
}

@router.get("/milestones", response_model=List[MilestoneProject])
async def list_milestones(q: Optional[str] = Query(None, description="Search by ID, project, or client")):
    projects = list(MILESTONE_DB.values())
    if q:
        query_str = q.lower()
        projects = [
            p for p in projects
            if query_str in p["id"].lower()
            or query_str in p["name"].lower()
            or query_str in p["client"].lower()
        ]
    return projects

@router.post("/milestones", response_model=MilestoneProject)
async def init_project_contract(payload: ProjectContractCreate):
    new_id = f"PRJ-{800 + len(MILESTONE_DB) + 1}"
    new_project = payload.model_dump()
    new_project.update({
        "id": new_id,
        "billed": 0.0,
        "completion": 0,
        "status": "ON TRACK"
    })
    MILESTONE_DB[new_id] = new_project
    return new_project

@router.patch("/milestones/{project_id}/invoice", response_model=MilestoneProject)
async def execute_invoice_draft(project_id: str, amount: float = Query(...)):
    if project_id not in MILESTONE_DB:
        raise HTTPException(status_code=404, detail="Project not found")
    
    project = MILESTONE_DB[project_id]
    project["billed"] += amount
    
    # Cap billing at contract value and auto-calculate completion percentage
    if project["billed"] >= project["contractValue"]:
        project["billed"] = project["contractValue"]
        project["completion"] = 100
        project["status"] = "COMPLETED"
    else:
        project["completion"] = int((project["billed"] / project["contractValue"]) * 100)
        project["status"] = "PENDING INVOICE" if project["completion"] > 80 else "ON TRACK"
        
    return project

# --- Append to routes/construction_assets.py ---

class ProfitabilityProject(BaseModel):
    id: str
    name: str
    budget: float
    currentCost: float
    projectedCost: float
    margin: float
    trend: str

# Initial seed data for Profitability Forecast
PROFITABILITY_DB: dict[str, dict] = {
    "PRJ-801": {"id": "PRJ-801", "name": "Highland Commercial", "budget": 12500000.0, "currentCost": 4800000.0, "projectedCost": 11200000.0, "margin": 10.4, "trend": "up"},
    "PRJ-802": {"id": "PRJ-802", "name": "Sector 4 Residential", "budget": 8500000.0, "currentCost": 7900000.0, "projectedCost": 8900000.0, "margin": -4.7, "trend": "down"},
}

@router.get("/profitability", response_model=List[ProfitabilityProject])
async def get_profitability_forecast():
    # In a production environment, this route would dynamically calculate the margin 
    # and trend based on aggregating live timesheet costs, BOM expenses, and billed milestones.
    return list(PROFITABILITY_DB.values())

# --- Append to routes/construction_assets.py ---

class SubcontractorLedger(BaseModel):
    id: str
    name: str
    trade: str
    contract: float
    paid: float
    pending: float
    status: str

class SubcontractorCreate(BaseModel):
    name: str
    trade: str
    contract: float

# Initial seed data for Subcontractor Ledgers
LEDGER_DB: dict[str, dict] = {
    "SUB-01": {"id": "SUB-01", "name": "Apex Steel Works", "trade": "Structural Steel", "contract": 1200000.0, "paid": 800000.0, "pending": 400000.0, "status": "ACTIVE"},
    "SUB-02": {"id": "SUB-02", "name": "Metro HVAC Solutions", "trade": "MEP / HVAC", "contract": 650000.0, "paid": 650000.0, "pending": 0.0, "status": "CLEARED"},
    "SUB-03": {"id": "SUB-03", "name": "Precision Concrete", "trade": "Concrete Formwork", "contract": 2100000.0, "paid": 1000000.0, "pending": 1100000.0, "status": "ACTIVE"},
}

@router.get("/subcontractors", response_model=List[SubcontractorLedger])
async def list_subcontractor_ledgers(q: Optional[str] = Query(None, description="Search by name, trade, or ID")):
    ledgers = list(LEDGER_DB.values())
    if q:
        query_str = q.lower()
        ledgers = [
            l for l in ledgers
            if query_str in l["name"].lower()
            or query_str in l["trade"].lower()
            or query_str in l["id"].lower()
        ]
    return ledgers

@router.post("/subcontractors", response_model=SubcontractorLedger)
async def create_subcontractor_ledger(payload: SubcontractorCreate):
    new_id = f"SUB-{len(LEDGER_DB) + 1:02d}"
    new_ledger = payload.model_dump()
    new_ledger.update({
        "id": new_id,
        "paid": 0.0,
        "pending": payload.contract,
        "status": "ACTIVE"
    })
    LEDGER_DB[new_id] = new_ledger
    return new_ledger

@router.patch("/subcontractors/{ledger_id}/pay", response_model=SubcontractorLedger)
async def authorize_payout(ledger_id: str, amount: float = Query(...)):
    if ledger_id not in LEDGER_DB:
        raise HTTPException(status_code=404, detail="Ledger not found")
    
    ledger = LEDGER_DB[ledger_id]
    if amount > ledger["pending"]:
        raise HTTPException(status_code=400, detail="Payout exceeds pending balance")
        
    ledger["paid"] += amount
    ledger["pending"] -= amount
    
    if ledger["pending"] <= 0:
        ledger["pending"] = 0.0
        ledger["status"] = "CLEARED"
        
    return ledger