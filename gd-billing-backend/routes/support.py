# from pydantic import BaseModel
# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session
# from sqlalchemy import desc
# from database import get_db
# from dependencies import get_current_store
# import models

# router = APIRouter(tags=["Support"])



# @router.post("/api/tickets")
# def create_support_ticket(
#     ticket_data: TicketCreate,
#     db: Session = Depends(get_db),
#     current_store: models.StoreDB = Depends(get_current_store)
# ):
#     new_ticket = models.TicketDB(
#         store_id=current_store.id,
#         subject=ticket_data.subject,
#         description=ticket_data.description
#     )
#     db.add(new_ticket)
#     db.commit()
    
#     # Here you could also trigger an email to your IT Support Team via SendGrid/AWS SES
    
#     return {"message": "Ticket raised successfully", "ticket_id": new_ticket.id}



# @router.get("/api/hq/tickets")
# def get_all_support_tickets(db: Session = Depends(get_db)):
#     # Join the Ticket table with the Store table so the IT team knows who is complaining
#     tickets = db.query(
#         models.TicketDB.id,
#         models.TicketDB.subject,
#         models.TicketDB.description,
#         models.TicketDB.status,
#         models.TicketDB.created_at,
#         models.StoreDB.storeName
#     ).join(models.StoreDB, models.TicketDB.store_id == models.StoreDB.id)\
#      .order_by(desc(models.TicketDB.created_at)).all()
    
#     return [
#         {
#             "id": t.id, 
#             "subject": t.subject, 
#             "description": t.description, 
#             "status": t.status, 
#             "created_at": t.created_at.isoformat() if t.created_at else None, 
#             "storeName": t.storeName
#         } for t in tickets
#     ]

# # Ensure this endpoint is under the router that is included in your main.py
# @router.get("/api/hq/tickets")
# def get_all_support_tickets(db: Session = Depends(get_db)):
#     # Join the Ticket table with the Store table to get the store name
#     tickets = db.query(
#         models.TicketDB.id,
#         models.TicketDB.subject,
#         models.TicketDB.description,
#         models.TicketDB.status,
#         models.TicketDB.created_at,
#         models.StoreDB.storeName
#     ).join(models.StoreDB, models.TicketDB.store_id == models.StoreDB.id)\
#      .order_by(desc(models.TicketDB.created_at)).all()
    
#     return [
#         {
#             "id": t.id, 
#             "subject": t.subject, 
#             "description": t.description, 
#             "status": t.status, 
#             "created_at": t.created_at.isoformat() if t.created_at else None, 
#             "storeName": t.storeName
#         } for t in tickets
#     ]