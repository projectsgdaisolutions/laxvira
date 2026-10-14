from datetime import datetime, timedelta, timezone
from sqlalchemy.orm import Session
from database import SessionLocal
from models import InvoiceDB, InvoiceItemDB, InvoiceStatus

db = SessionLocal()
store_id = 1

# 1. Create a past invoice with specific products (Cross-sell & Stock simulation)
past_date = datetime.now(timezone.utc) - timedelta(days=2)

invoice = InvoiceDB(
    store_id=store_id,
    customer_name="Retail Grocery Partner",
    invoice_number="INV-INSIGHT-01",
    issue_date=past_date,
    subtotal=5000.0,
    tax_total=500.0,
    grand_total=5500.0,
    status=InvoiceStatus.PAID
)
db.add(invoice)
db.flush() # Flush to get invoice.id

# 2. Add line items that trigger low stock and cross-sell patterns
items_data = [
    {"name": "Tata Salt 1kg", "qty": 2, "rate": 500.0},
    {"name": "Maggi 2-Min Noodles 70g", "qty": 3, "rate": 300.0},
    {"name": "Saffola Gold Oil 1L", "qty": 1, "rate": 3400.0}
]

for item in items_data:
    db.add(InvoiceItemDB(
        invoice_id=invoice.id,
        name=item["name"],
        quantity=item["qty"],
        rate=item["rate"],
        total_amount=item["qty"] * item["rate"]
    ))

db.commit()
db.close()
print("Successfully seeded inventory items and transaction history for restock/cross-sell testing!")