from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from datetime import datetime

router = APIRouter(prefix="/api/restaurant", tags=["Restaurant Operations"])

# --- Models ---
class Ingredient(BaseModel): id: str; name: str; category: str; qty: float; unit: str; threshold: float; status: str
class Ticket(BaseModel): id: str; table: str; status: str; items: List[str]; time: str; type: str
class Order(BaseModel): id: str; platform: str; time: str; items: int; value: float; status: str
class RecipeCreate(BaseModel): name: str; category: str; cost: float; price: float
class Recipe(RecipeCreate): id: str; margin: float
class Table(BaseModel): id: str; capacity: int; status: str; seated_at: Optional[str]; guest_count: int

# --- Seed Databases ---
DB = {
    "inventory": [
        {"id": "ING-01", "name": "00 Flour", "category": "Dry Goods", "qty": 45.0, "unit": "kg", "threshold": 10.0, "status": "GOOD"},
        {"id": "ING-02", "name": "Truffle Oil", "category": "Pantry", "qty": 2.0, "unit": "L", "threshold": 5.0, "status": "LOW STOCK"}
    ],
    "kds": [
        {"id": "ORD-101", "table": "T4", "status": "NEW", "items": ["2x Truffle Risotto", "1x Steak Frites (Med Rare)"], "time": "12m", "type": "DINE-IN"},
        {"id": "ORD-102", "table": "UberEats", "status": "COOKING", "items": ["1x Margherita Pizza", "2x Garlic Bread"], "time": "24m", "type": "DELIVERY"}
    ],
    "aggregators": [
        {"id": "SWG-89912", "platform": "Swiggy", "time": "10:41 AM", "items": 4, "value": 1250.0, "status": "ACCEPTED"},
        {"id": "ZOM-44123", "platform": "Zomato", "time": "10:45 AM", "items": 2, "value": 650.0, "status": "PENDING"}
    ],
    "recipes": [
        {"id": "R-01", "name": "Truffle Risotto", "category": "Mains", "cost": 185.50, "price": 850.0, "margin": 78.1},
        {"id": "R-02", "name": "Margherita Pizza", "category": "Mains", "cost": 95.00, "price": 450.0, "margin": 78.8},
        {"id": "R-03", "name": "Tiramisu", "category": "Desserts", "cost": 110.20, "price": 350.0, "margin": 68.5}
    ],
    "billing": {
        "table": "T4",
        "items": [
            {"name": "Truffle Risotto", "qty": 2, "price": 850.0},
            {"name": "Steak Frites", "qty": 1, "price": 1200.0},
            {"name": "House Wine (Glass)", "qty": 3, "price": 400.0}
        ]
    },
    "tables": [
        {"id": "T1", "capacity": 2, "status": "OCCUPIED", "seated_at": "18:30", "guest_count": 2},
        {"id": "T2", "capacity": 4, "status": "AVAILABLE", "seated_at": None, "guest_count": 0},
        {"id": "T3", "capacity": 4, "status": "RESERVED", "seated_at": "19:00", "guest_count": 4},
        {"id": "T4", "capacity": 6, "status": "OCCUPIED", "seated_at": "17:45", "guest_count": 5},
        {"id": "T5", "capacity": 2, "status": "AVAILABLE", "seated_at": None, "guest_count": 0},
        {"id": "T6", "capacity": 8, "status": "AVAILABLE", "seated_at": None, "guest_count": 0}
    ]
}

# --- Generic Getter ---
@router.get("/{module}")
async def get_restaurant_module(module: str):
    if module not in DB: raise HTTPException(404, "Module not found")
    return {"records": DB[module]} if isinstance(DB[module], list) else DB[module]

# --- Functional Actions ---
@router.patch("/inventory/{item_id}/restock")
async def restock_inventory(item_id: str):
    for item in DB["inventory"]:
        if item["id"] == item_id:
            item["qty"] += 20.0
            item["status"] = "GOOD" if item["qty"] > item["threshold"] else "LOW STOCK"
    return {"status": "success"}

@router.patch("/kds/{ticket_id}/advance")
async def advance_ticket_status(ticket_id: str):
    for t in DB["kds"]:
        if t["id"] == ticket_id:
            if t["status"] == "NEW": t["status"] = "COOKING"
            elif t["status"] == "COOKING": t["status"] = "READY"
            elif t["status"] == "READY": t["status"] = "SERVED"
    # Keep only active tickets
    DB["kds"] = [t for t in DB["kds"] if t["status"] != "SERVED"]
    return {"status": "success"}

@router.patch("/aggregators/{order_id}/accept")
async def accept_aggregator_order(order_id: str):
    for o in DB["aggregators"]:
        if o["id"] == order_id: o["status"] = "ACCEPTED"
    return {"status": "success"}

@router.post("/recipes")
async def create_recipe(payload: RecipeCreate):
    new_id = f"R-{len(DB['recipes']) + 1:02d}"
    margin = round(((payload.price - payload.cost) / payload.price) * 100, 1) if payload.price > 0 else 0
    new_recipe = payload.model_dump()
    new_recipe.update({"id": new_id, "margin": margin})
    DB["recipes"].append(new_recipe)
    return {"status": "success"}

@router.post("/billing/process")
async def process_payment(method: str = Query(...)):
    # Simulates clearing the current bill queue
    DB["billing"]["items"] = []
    return {"status": "paid", "method": method}

@router.patch("/tables/{table_id}/toggle")
async def toggle_table_status(table_id: str):
    cycle = {"AVAILABLE": "OCCUPIED", "OCCUPIED": "RESERVED", "RESERVED": "AVAILABLE"}
    for t in DB["tables"]:
        if t["id"] == table_id:
            t["status"] = cycle[t["status"]]
            t["seated_at"] = datetime.now().strftime("%H:%M") if t["status"] in ["OCCUPIED", "RESERVED"] else None
            t["guest_count"] = t["capacity"] if t["status"] != "AVAILABLE" else 0
    return {"status": "success"}