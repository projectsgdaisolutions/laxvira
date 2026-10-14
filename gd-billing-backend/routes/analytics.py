
# import pickle
# import pandas as pd
# from datetime import datetime, timedelta, timezone

# from fastapi import APIRouter, Depends, HTTPException, Query
# from sqlalchemy.orm import Session
# from sqlalchemy import func, desc

# from database import get_db
# from dependencies import get_current_store, require_tier
# import models
# import schemas


# # 3. Initialize the router (This replaces 'app = FastAPI()')
# router = APIRouter()
# #updates sales
# @app.get("/api/analytics/sales")
# def get_sales_analytics(
#     date_range: str = Query("month"),
#     db: Session = Depends(get_db),
#     current_store: dict = Depends(get_current_store)
# ):
#     now = datetime.now(timezone.utc)
    
#     # Calculate start date based on range filter
#     if date_range == "today":
#         start_date = now.replace(hour=0, minute=0, second=0, microsecond=0)
#     elif date_range == "week":
#         start_date = now - timedelta(days=now.weekday())
#         start_date = start_date.replace(hour=0, minute=0, second=0, microsecond=0)
#     else: # month - use the first day of the current month
#         start_date = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

#     # 1. Fetch Invoices using issue_date with fallback to created_at
#     invoices = db.query(InvoiceDB).filter(
#         InvoiceDB.store_id == current_store.id
#     ).all()
    
#     # Filter in-memory to safely handle date field variations safely
#     filtered_invoices = []
#     for inv in invoices:
#         inv_date = inv.issue_date or inv.created_at
#         if inv_date:
#             # Make sure inv_date is timezone-aware for comparison
#             if inv_date.tzinfo is None:
#                 inv_date = inv_date.replace(tzinfo=timezone.utc)
#             if date_range == "all" or inv_date >= start_date:
#                 filtered_invoices.append(inv)

#     total_sales = sum(inv.total_amount for inv in filtered_invoices)

#     # 2. Group Sales Trends by Date
#     trends_dict = {}
#     for inv in filtered_invoices:
#         inv_date = inv.issue_date or inv.created_at
#         date_str = inv_date.strftime("%d %b") if inv_date else "Unknown"
#         trends_dict[date_str] = trends_dict.get(date_str, 0) + inv.total_amount
    
#     sales_trends = [{"date": k, "sales": v} for k, v in trends_dict.items()]

#     # 3. Top Products using SQLAlchemy JOIN and GROUP_BY
#     top_items_query = db.query(
#         ProductDB.name, 
#         func.sum(InvoiceItemDB.quantity * InvoiceItemDB.price_at_time).label("total_amount")
#     ).join(InvoiceItemDB, ProductDB.id == InvoiceItemDB.product_id)\
#      .join(InvoiceDB, InvoiceItemDB.invoice_id == InvoiceDB.id)\
#      .filter(InvoiceDB.store_id == current_store.id)\
#      .group_by(ProductDB.id)\
#      .order_by(desc("total_amount"))\
#      .limit(5).all()

#     top_products = [{"name": item.name, "amount": item.total_amount} for item in top_items_query]

#     # 4. Profit & Loss Margins
#     cogs = total_sales * 0.65
#     gross_profit = total_sales - cogs
#     expenses = 0 if total_sales == 0 else (total_sales * 0.10)
#     net_profit = gross_profit - expenses

#     return {
#         "total_sales": total_sales,
#         "trends": sales_trends,
#         "top_products": top_products,
#         "summary": {
#             "total_sales": total_sales,
#             "cogs": cogs,
#             "gross_profit": gross_profit,
#             "expenses": expenses,
#             "net_profit": net_profit,
#             "gross_margin_pct": (gross_profit / total_sales * 100) if total_sales > 0 else 0,
#             "net_margin_pct": (net_profit / total_sales * 100) if total_sales > 0 else 0
#         }
#     }


# @app.get("/api/dashboard")
# def get_dashboard_summary(
#     db: Session = Depends(get_db),
#     current_store: dict = Depends(get_current_store)
# ):
#     now = datetime.now(timezone.utc)
#     today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    
#     # 1. Fetch both Invoices and Expenses for the current store
#     invoices = db.query(InvoiceDB).filter(
#         InvoiceDB.store_id == current_store.id
#     ).all()
    
#     expenses = db.query(ExpenseDB).filter(
#         ExpenseDB.store_id == current_store.id
#     ).all()
    
#     # 2. Initialize tracking variables
#     today_sales = 0
#     today_orders = 0
#     yesterday_sales = 0
#     yesterday_orders = 0
    
#     today_expenses = 0
#     yesterday_expenses = 0
    
#     # 3. Setup 7-day rolling window dictionary to hold both metrics
#     week_start = today_start - timedelta(days=6)
#     trend_dict = {}
#     for i in range(7):
#         day = week_start + timedelta(days=i)
#         # Store a nested dict instead of a single integer
#         trend_dict[day.strftime("%d %b")] = {"sales": 0, "expenses": 0}

#     # 4. Process Invoices (Revenue)
#     for inv in invoices:
#         inv_date = inv.issue_date or inv.created_at
#         if not inv_date:
#             continue
#         if inv_date.tzinfo is None:
#             inv_date = inv_date.replace(tzinfo=timezone.utc)
            
#         if inv_date >= today_start:
#             today_sales += inv.total_amount
#             today_orders += 1
#         elif today_start - timedelta(days=1) <= inv_date < today_start:
#             yesterday_sales += inv.total_amount
#             yesterday_orders += 1
            
#         day_str = inv_date.strftime("%d %b")
#         if day_str in trend_dict:
#             trend_dict[day_str]["sales"] += inv.total_amount

#     # 5. Process Expenses (Outflow)
#     for exp in expenses:
#         # Match the date field you save in your React payload (purchase_date)
#         exp_date = exp.purchase_date or exp.created_at
#         if not exp_date:
#             continue
#         if exp_date.tzinfo is None:
#             exp_date = exp_date.replace(tzinfo=timezone.utc)
            
#         if exp_date >= today_start:
#             today_expenses += exp.grand_total
#         elif today_start - timedelta(days=1) <= exp_date < today_start:
#             yesterday_expenses += exp.grand_total
            
#         day_str = exp_date.strftime("%d %b")
#         if day_str in trend_dict:
#             trend_dict[day_str]["expenses"] += exp.grand_total

#     # 6. Calculate Net Profit
#     today_profit = today_sales - today_expenses
#     yesterday_profit = yesterday_sales - yesterday_expenses

#     # 7. Keep original helper function intact
#     def calc_change(current, previous):
#         if previous == 0:
#             return "+100%" if current > 0 else "0%"
#         change = ((current - previous) / previous) * 100
#         sign = "+" if change >= 0 else ""
#         return f"{sign}{change:.1f}%"
        
#     # 8. Keep original sub-queries intact
#     active_stock = db.query(ProductDB).filter(
#         ProductDB.store_id == current_store.id,
#         ProductDB.stock > 0
#     ).count()
    
#     unique_customers = db.query(InvoiceDB.customer_name).filter(
#         InvoiceDB.store_id == current_store.id,
#         InvoiceDB.customer_name != "Walk-in Customer",
#         InvoiceDB.customer_name != None,
#         InvoiceDB.customer_name != ""
#     ).distinct().count()
    
#     # 9. Map the trend dictionary to the format expected by Recharts
#     sales_trend = [
#         {
#             "date": k, 
#             "total_sales": v["sales"], 
#             "total_expenses": v["expenses"],
#             "profit": v["sales"] - v["expenses"]
#         } for k, v in trend_dict.items()
#     ]
    
#     return {
#         "metrics": {
#             # Revenue Card
#             "sales": f"₹{today_sales:,.0f}",
#             "salesChange": calc_change(today_sales, yesterday_sales),
#             "salesPositive": today_sales >= yesterday_sales,
            
#             # Expenses Card
#             "expenses": f"₹{today_expenses:,.0f}",
#             "expensesChange": calc_change(today_expenses, yesterday_expenses),
#             "expensesPositive": today_expenses <= yesterday_expenses, # Lower expenses are logically positive
            
#             # Profit Card
#             "profit": f"₹{today_profit:,.0f}",
#             "profitChange": calc_change(today_profit, yesterday_profit),
#             "profitPositive": today_profit >= yesterday_profit,
            
#             # Customers/Cash Flow Card
#             "customers": str(unique_customers),
#             "customersChange": "Total", 
#             "customersPositive": True,
            
#             # Legacy keys kept for safety in case other components still read them
#             "orders": str(today_orders),
#             "ordersChange": calc_change(today_orders, yesterday_orders),
#             "ordersPositive": today_orders >= yesterday_orders,
#             "stock": str(active_stock),
#             "stockChange": "Active", 
#             "stockPositive": True,
#         },
#         "salesTrend": sales_trend
#     }

# # ==========================================
# # FORECAST ENDPOINT
# # ==========================================
# @app.get("/api/forecast", dependencies=[Depends(require_tier("ENTERPRISE"))])
# def get_sales_forecast(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     if sales_model is None:
#         raise HTTPException(status_code=503, detail="Forecast model is unavailable.")

#     # 1. Pull historical sales aggregated by day for the store
#     historical_sales = db.query(
#         func.date(InvoiceDB.issue_date).label("date"),
#         func.sum(InvoiceDB.grand_total).label("daily_total")
#     ).filter(
#         InvoiceDB.store_id == current_store.id
#     ).group_by(
#         func.date(InvoiceDB.issue_date)
#     ).order_by(
#         func.date(InvoiceDB.issue_date).asc()
#     ).all()

#     if not historical_sales:
#         return {"historical": [], "forecast": []}

#     # 2. Convert to Pandas DataFrame
#     df = pd.DataFrame(historical_sales, columns=["date", "daily_total"])
#     df['date'] = pd.to_datetime(df['date'])
#     df['daily_total'] = df['daily_total'].astype(float)

#     # Ensure a continuous date range (fill missing days with 0 sales if necessary)
#     df = df.set_index('date').resample('D').asfreq().fillna(0).reset_index()

#     # 3. Generate the exact feature matrix matching the expected columns:
#     # ['month', 'year', 'quarter', 'lag_1', 'lag_2', 'lag_3', 'rolling_mean_3', 'rolling_std_3']
#     df['month'] = df['date'].dt.month
#     df['year'] = df['date'].dt.year
#     df['quarter'] = df['date'].dt.quarter
    
#     # Create lag features
#     df['lag_1'] = df['daily_total'].shift(1)
#     df['lag_2'] = df['daily_total'].shift(2)
#     df['lag_3'] = df['daily_total'].shift(3)
    
#     # Create rolling statistics (window = 3)
#     df['rolling_mean_3'] = df['daily_total'].rolling(window=3).mean()
#     df['rolling_std_3'] = df['daily_total'].rolling(window=3).std()

#     # Drop rows with NaN values created by shifts/rolling windows
#     df_clean = df.dropna().copy()

#     if df_clean.empty:
#         raise HTTPException(
#             status_code=400, 
#             detail="Not enough historical invoice data to generate lag features. You need at least 4 days of sales."
#         )

#     # 4. Define feature columns strictly matching model expectations
#     features = ['month', 'year', 'quarter', 'lag_1', 'lag_2', 'lag_3', 'rolling_mean_3', 'rolling_std_3']
    
#     try:
#         X = df_clean[features]
#         predictions = sales_model.predict(X)
#         df_clean['predicted_sales'] = predictions
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Inference execution failed: {str(e)}")

#     # 5. Format payload for frontend charting
#     historical_payload = []
#     forecast_payload = []

#     for _, row in df_clean.iterrows():
#         historical_payload.append({
#             "date": row['date'].strftime("%Y-%m-%d"),
#             "actual_sales": float(row['daily_total'])
#         })
#         forecast_payload.append({
#             "date": row['date'].strftime("%Y-%m-%d"),
#             "predicted_sales": float(row['predicted_sales'])
#         })

#     return {
#         "historical": historical_payload,
#         "forecast": forecast_payload
#     }


# @app.get("/api/forecast/restock", dependencies=[Depends(require_tier("ENTERPRISE"))])
# def get_restock_suggestions(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # Aggregate total quantity sold per product to find high-velocity items
#     popular_items = db.query(
#         InvoiceItemDB.name,
#         func.sum(InvoiceItemDB.quantity).label("total_sold")
#     ).join(InvoiceDB, InvoiceItemDB.invoice_id == InvoiceDB.id).filter(
#         InvoiceDB.store_id == current_store.id
#     ).group_by(
#         InvoiceItemDB.name
#     ).order_by(desc("total_sold")).limit(3).all()

#     if not popular_items:
#         return []

#     suggestions = []
#     for idx, item in enumerate(popular_items):
#         suggestions.append({
#             "id": idx + 1,
#             "name": item.name,
#             "status": "Low Stock" if idx < 2 else "Stock running low",
#             "statusColor": "bg-red-100 text-red-600" if idx < 2 else "bg-amber-100 text-amber-700",
#             "urgencyColor": "bg-red-50 border-red-200 text-red-700" if idx < 2 else "bg-amber-50 border-amber-200 text-amber-700",
#             "days": idx + 3,
#             "current": 6,
#             "desc": f"Reorder {item.name} likely to run out soon based on velocity",
#             "iconColor": "bg-orange-100"
#         })
#     return suggestions


# @app.get("/api/forecast/cross-sell", dependencies=[Depends(require_tier("ENTERPRISE"))])
# def get_cross_sell_patterns(
#     db: Session = Depends(get_db),
#     current_store: StoreDB = Depends(get_current_store)
# ):
#     # Fetch distinct line item pairs appearing in the same invoices
#     invoices = db.query(InvoiceDB).filter(InvoiceDB.store_id == current_store.id).all()
    
#     pairs = {}
#     for inv in invoices:
#         names = [item.name for item in inv.items if item.name]
#         for i in range(len(names)):
#             for j in range(i + 1, len(names)):
#                 pair = tuple(sorted([names[i], names[j]]))
#                 pairs[pair] = pairs.get(pair, 0) + 1

#     if not pairs:
#         return []

#     sorted_pairs = sorted(pairs.items(), key=lambda x: x[1], reverse=True)
    
#     cross_sells = []
#     for idx, (pair, count) in enumerate(sorted_pairs[:3]):
#         cross_sells.append({
#             "id": idx + 1,
#             "item1": pair[0],
#             "item2": pair[1],
#             "pct": f"{min(60 + (count * 10), 95)}%",
#             "c1": "bg-yellow-100",
#             "c2": "bg-red-100"
#         })
#     return cross_sells

import pickle
import pandas as pd
from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import func, desc

from database import get_db
from dependencies import get_current_store, require_tier
import models
import schemas

# ==========================================
# MACHINE LEARNING MODEL INITIALIZATION
# ==========================================
# Attempt to load the model into memory at startup
try:
    with open("xgboost_retail_model.pkl", "rb") as f:
        sales_model = pickle.load(f)
        print("XGBoost model loaded successfully.")
except FileNotFoundError:
    sales_model = None
    print("Warning: xgboost_retail_model.pkl not found. Forecast endpoint will return mock/empty data.")


# Initialize the router
router = APIRouter(tags=["Analytics"])

# ==========================================
# ANALYTICS & DASHBOARD ENDPOINTS
# ==========================================

@router.get("/api/analytics/sales")
def get_sales_analytics(
    date_range: str = Query("month"),
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    now = datetime.now(timezone.utc)
    
    # Calculate start date based on range filter
    if date_range == "today":
        start_date = now.replace(hour=0, minute=0, second=0, microsecond=0)
    elif date_range == "week":
        start_date = now - timedelta(days=now.weekday())
        start_date = start_date.replace(hour=0, minute=0, second=0, microsecond=0)
    else: # month - use the first day of the current month
        start_date = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

    # 1. Fetch Invoices using issue_date with fallback to created_at
    invoices = db.query(models.InvoiceDB).filter(
        models.InvoiceDB.store_id == current_store.id
    ).all()
    
    # Filter in-memory to safely handle date field variations safely
    filtered_invoices = []
    for inv in invoices:
        inv_date = inv.issue_date or inv.created_at
        if inv_date:
            # Make sure inv_date is timezone-aware for comparison
            if inv_date.tzinfo is None:
                inv_date = inv_date.replace(tzinfo=timezone.utc)
            if date_range == "all" or inv_date >= start_date:
                filtered_invoices.append(inv)

    total_sales = sum(inv.total_amount for inv in filtered_invoices)

    # 2. Group Sales Trends by Date
    trends_dict = {}
    for inv in filtered_invoices:
        inv_date = inv.issue_date or inv.created_at
        date_str = inv_date.strftime("%d %b") if inv_date else "Unknown"
        trends_dict[date_str] = trends_dict.get(date_str, 0) + inv.total_amount
    
    sales_trends = [{"date": k, "sales": v} for k, v in trends_dict.items()]

    # 3. Top Products using SQLAlchemy JOIN and GROUP_BY
    top_items_query = db.query(
        models.ProductDB.name, 
        func.sum(models.InvoiceItemDB.quantity * models.InvoiceItemDB.price_at_time).label("total_amount")
    ).join(models.InvoiceItemDB, models.ProductDB.id == models.InvoiceItemDB.product_id)\
     .join(models.InvoiceDB, models.InvoiceItemDB.invoice_id == models.InvoiceDB.id)\
     .filter(models.InvoiceDB.store_id == current_store.id)\
     .group_by(models.ProductDB.id)\
     .order_by(desc("total_amount"))\
     .limit(5).all()

    top_products = [{"name": item.name, "amount": item.total_amount} for item in top_items_query]

    # 4. Profit & Loss Margins
    cogs = total_sales * 0.65
    gross_profit = total_sales - cogs
    expenses = 0 if total_sales == 0 else (total_sales * 0.10)
    net_profit = gross_profit - expenses

    return {
        "total_sales": total_sales,
        "trends": sales_trends,
        "top_products": top_products,
        "summary": {
            "total_sales": total_sales,
            "cogs": cogs,
            "gross_profit": gross_profit,
            "expenses": expenses,
            "net_profit": net_profit,
            "gross_margin_pct": (gross_profit / total_sales * 100) if total_sales > 0 else 0,
            "net_margin_pct": (net_profit / total_sales * 100) if total_sales > 0 else 0
        }
    }


# @router.get("/api/dashboard")
# def get_dashboard_summary(
#     db: Session = Depends(get_db),
#     current_store: models.StoreDB = Depends(get_current_store)
# ):
#     now = datetime.now(timezone.utc)
#     today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    
#     # 1. Fetch both Invoices and Expenses for the current store
#     invoices = db.query(models.InvoiceDB).filter(
#         models.InvoiceDB.store_id == current_store.id
#     ).all()
    
#     expenses = db.query(models.ExpenseDB).filter(
#         models.ExpenseDB.store_id == current_store.id
#     ).all()
    
#     # 2. Initialize tracking variables
#     today_sales = 0
#     today_orders = 0
#     yesterday_sales = 0
#     yesterday_orders = 0
    
#     today_expenses = 0
#     yesterday_expenses = 0
    
#     # 3. Setup 7-day rolling window dictionary to hold both metrics
#     week_start = today_start - timedelta(days=6)
#     trend_dict = {}
#     for i in range(7):
#         day = week_start + timedelta(days=i)
#         # Store a nested dict instead of a single integer
#         trend_dict[day.strftime("%d %b")] = {"sales": 0, "expenses": 0}

#     # 4. Process Invoices (Revenue)
#     for inv in invoices:
#         inv_date = inv.issue_date or inv.created_at
#         if not inv_date:
#             continue
#         if inv_date.tzinfo is None:
#             inv_date = inv_date.replace(tzinfo=timezone.utc)
            
#         if inv_date >= today_start:
#             today_sales += inv.total_amount
#             today_orders += 1
#         elif today_start - timedelta(days=1) <= inv_date < today_start:
#             yesterday_sales += inv.total_amount
#             yesterday_orders += 1
            
#         day_str = inv_date.strftime("%d %b")
#         if day_str in trend_dict:
#             trend_dict[day_str]["sales"] += inv.total_amount

#     # 5. Process Expenses (Outflow)
#     for exp in expenses:
#         # Match the date field you save in your React payload (purchase_date)
#         exp_date = exp.purchase_date or exp.created_at
#         if not exp_date:
#             continue
#         if exp_date.tzinfo is None:
#             exp_date = exp_date.replace(tzinfo=timezone.utc)
            
#         if exp_date >= today_start:
#             today_expenses += exp.grand_total
#         elif today_start - timedelta(days=1) <= exp_date < today_start:
#             yesterday_expenses += exp.grand_total
            
#         day_str = exp_date.strftime("%d %b")
#         if day_str in trend_dict:
#             trend_dict[day_str]["expenses"] += exp.grand_total

#     # 6. Calculate Net Profit
#     today_profit = today_sales - today_expenses
#     yesterday_profit = yesterday_sales - yesterday_expenses

#     # 7. Keep original helper function intact
#     def calc_change(current, previous):
#         if previous == 0:
#             return "+100%" if current > 0 else "0%"
#         change = ((current - previous) / previous) * 100
#         sign = "+" if change >= 0 else ""
#         return f"{sign}{change:.1f}%"
        
#     # 8. Keep original sub-queries intact
#     active_stock = db.query(models.ProductDB).filter(
#         models.ProductDB.store_id == current_store.id,
#         models.ProductDB.stock > 0
#     ).count()
    
#     unique_customers = db.query(models.InvoiceDB.customer_name).filter(
#         models.InvoiceDB.store_id == current_store.id,
#         models.InvoiceDB.customer_name != "Walk-in Customer",
#         models.InvoiceDB.customer_name != None,
#         models.InvoiceDB.customer_name != ""
#     ).distinct().count()
    
#     # 9. Map the trend dictionary to the format expected by Recharts
#     sales_trend = [
#         {
#             "date": k, 
#             "total_sales": v["sales"], 
#             "total_expenses": v["expenses"],
#             "profit": v["sales"] - v["expenses"]
#         } for k, v in trend_dict.items()
#     ]
    
#     return {
#         "metrics": {
#             # Revenue Card
#             "sales": f"₹{today_sales:,.0f}",
#             "salesChange": calc_change(today_sales, yesterday_sales),
#             "salesPositive": today_sales >= yesterday_sales,
            
#             # Expenses Card
#             "expenses": f"₹{today_expenses:,.0f}",
#             "expensesChange": calc_change(today_expenses, yesterday_expenses),
#             "expensesPositive": today_expenses <= yesterday_expenses, # Lower expenses are logically positive
            
#             # Profit Card
#             "profit": f"₹{today_profit:,.0f}",
#             "profitChange": calc_change(today_profit, yesterday_profit),
#             "profitPositive": today_profit >= yesterday_profit,
            
#             # Customers/Cash Flow Card
#             "customers": str(unique_customers),
#             "customersChange": "Total", 
#             "customersPositive": True,
            
#             # Legacy keys kept for safety in case other components still read them
#             "orders": str(today_orders),
#             "ordersChange": calc_change(today_orders, yesterday_orders),
#             "ordersPositive": today_orders >= yesterday_orders,
#             "stock": str(active_stock),
#             "stockChange": "Active", 
#             "stockPositive": True,
#         },
#         "salesTrend": sales_trend
#     }

@router.get("/api/dashboard")
def get_dashboard_summary(
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    now = datetime.now(timezone.utc)
    today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    
    # 1. Fetch Core Financial Data
    invoices = db.query(models.InvoiceDB).filter(
        models.InvoiceDB.store_id == current_store.id
    ).all()
    
    expenses = db.query(models.ExpenseDB).filter(
        models.ExpenseDB.store_id == current_store.id
    ).all()
    
    today_sales, today_orders, yesterday_sales, yesterday_orders = 0, 0, 0, 0
    today_expenses, yesterday_expenses = 0, 0
    
    week_start = today_start - timedelta(days=6)
    trend_dict = { (week_start + timedelta(days=i)).strftime("%d %b"): {"sales": 0, "expenses": 0} for i in range(7) }

    # 2. Process Revenue & Orders
    for inv in invoices:
        inv_date = inv.issue_date or inv.created_at
        if not inv_date:
            continue
        if inv_date.tzinfo is None:
            inv_date = inv_date.replace(tzinfo=timezone.utc)
            
        if inv_date >= today_start:
            today_sales += inv.total_amount
            today_orders += 1
        elif today_start - timedelta(days=1) <= inv_date < today_start:
            yesterday_sales += inv.total_amount
            yesterday_orders += 1
            
        day_str = inv_date.strftime("%d %b")
        if day_str in trend_dict:
            trend_dict[day_str]["sales"] += inv.total_amount

    # 3. Process Expenses
    for exp in expenses:
        exp_date = exp.purchase_date or exp.created_at
        if not exp_date:
            continue
        if exp_date.tzinfo is None:
            exp_date = exp_date.replace(tzinfo=timezone.utc)
            
        if exp_date >= today_start:
            today_expenses += exp.grand_total
        elif today_start - timedelta(days=1) <= exp_date < today_start:
            yesterday_expenses += exp.grand_total
            
        day_str = exp_date.strftime("%d %b")
        if day_str in trend_dict:
            trend_dict[day_str]["expenses"] += exp.grand_total

    # 4. Financial Deltas
    today_profit = today_sales - today_expenses
    yesterday_profit = yesterday_sales - yesterday_expenses

    def calc_change(current, previous):
        if previous == 0:
            return "+100%" if current > 0 else "0%"
        change = ((current - previous) / previous) * 100
        sign = "+" if change >= 0 else ""
        return f"{sign}{change:.1f}%"
        
    # 5. Universal Aggregations
    active_stock = db.query(models.ProductDB).filter(
        models.ProductDB.store_id == current_store.id,
        models.ProductDB.stock > 0
    ).count()
    
    low_stock_count = db.query(models.ProductDB).filter(
        models.ProductDB.store_id == current_store.id,
        models.ProductDB.stock <= 10,
        models.ProductDB.stock > 0
    ).count()

    pending_invoices = db.query(models.InvoiceDB).filter(
        models.InvoiceDB.store_id == current_store.id,
        models.InvoiceDB.status.in_(["UNPAID", "DRAFT"])
    ).count()
    
    unique_customers = db.query(models.InvoiceDB.customer_name).filter(
        models.InvoiceDB.store_id == current_store.id,
        models.InvoiceDB.customer_name != "Walk-in Customer",
        models.InvoiceDB.customer_name != None
    ).distinct().count()
    
    # 6. Industry-Specific Routing
    # Uses the store's industry ENUM to determine which advanced metrics to calculate or mock
    industry = getattr(current_store, 'industry_type', 'WHOLESALE')
    if hasattr(industry, 'value'):
        industry = industry.value
        
    unbilled_hours = "0.0"
    retainers = 0

    if industry == "LEGAL":
        unbilled_hours = "42.5"  # To be replaced by TimeEntryDB query
        retainers = db.query(models.InvoiceDB).filter(
            models.InvoiceDB.store_id == current_store.id,
            models.InvoiceDB.status == "PARTIALLY_PAID" 
        ).count()
    elif industry == "CONSTRUCTION":
        # Placeholder for ProjectDB queries
        pass 
    
    sales_trend = [
        {
            "date": k, 
            "total_sales": v["sales"], 
            "total_expenses": v["expenses"],
            "profit": v["sales"] - v["expenses"]
        } for k, v in trend_dict.items()
    ]
    
    return {
        "metrics": {
            "sales": f"₹{today_sales:,.0f}",
            "salesChange": calc_change(today_sales, yesterday_sales),
            "salesPositive": today_sales >= yesterday_sales,
            
            "expenses": f"₹{today_expenses:,.0f}",
            "expensesChange": calc_change(today_expenses, yesterday_expenses),
            "expensesPositive": today_expenses <= yesterday_expenses, 
            
            "profit": f"₹{today_profit:,.0f}",
            "profitChange": calc_change(today_profit, yesterday_profit),
            "profitPositive": today_profit >= yesterday_profit,
            
            "customers": str(unique_customers),
            "customersChange": "Total", 
            "customersPositive": True,
            
            "orders": str(today_orders),
            "ordersChange": calc_change(today_orders, yesterday_orders),
            "ordersPositive": today_orders >= yesterday_orders,
            "stock": str(active_stock),
            "stockChange": "Active", 
            "stockPositive": True,
        },
        "salesTrend": sales_trend,
        # Flat extra keys explicitly caught by the React mapping engine
        "pending_count": pending_invoices,
        "low_stock_count": low_stock_count,
        "unbilled_hours": unbilled_hours,
        "retainers": retainers
    }

# ==========================================
# FORECAST ENDPOINT
# ==========================================
@router.get("/api/forecast", dependencies=[Depends(require_tier("ENTERPRISE"))])
def get_sales_forecast(
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    if sales_model is None:
        raise HTTPException(status_code=503, detail="Forecast model is unavailable.")

    # 1. Pull historical sales aggregated by day for the store
    historical_sales = db.query(
        func.date(models.InvoiceDB.issue_date).label("date"),
        func.sum(models.InvoiceDB.grand_total).label("daily_total")
    ).filter(
        models.InvoiceDB.store_id == current_store.id
    ).group_by(
        func.date(models.InvoiceDB.issue_date)
    ).order_by(
        func.date(models.InvoiceDB.issue_date).asc()
    ).all()

    if not historical_sales:
        return {"historical": [], "forecast": []}

    # 2. Convert to Pandas DataFrame
    df = pd.DataFrame(historical_sales, columns=["date", "daily_total"])
    df['date'] = pd.to_datetime(df['date'])
    df['daily_total'] = df['daily_total'].astype(float)

    # Ensure a continuous date range (fill missing days with 0 sales if necessary)
    df = df.set_index('date').resample('D').asfreq().fillna(0).reset_index()

    # 3. Generate the exact feature matrix matching the expected columns
    df['month'] = df['date'].dt.month
    df['year'] = df['date'].dt.year
    df['quarter'] = df['date'].dt.quarter
    
    # Create lag features
    df['lag_1'] = df['daily_total'].shift(1)
    df['lag_2'] = df['daily_total'].shift(2)
    df['lag_3'] = df['daily_total'].shift(3)
    
    # Create rolling statistics (window = 3)
    df['rolling_mean_3'] = df['daily_total'].rolling(window=3).mean()
    df['rolling_std_3'] = df['daily_total'].rolling(window=3).std()

    # Drop rows with NaN values created by shifts/rolling windows
    df_clean = df.dropna().copy()

    if df_clean.empty:
        raise HTTPException(
            status_code=400, 
            detail="Not enough historical invoice data to generate lag features. You need at least 4 days of sales."
        )

    # 4. Define feature columns strictly matching model expectations
    features = ['month', 'year', 'quarter', 'lag_1', 'lag_2', 'lag_3', 'rolling_mean_3', 'rolling_std_3']
    
    try:
        X = df_clean[features]
        predictions = sales_model.predict(X)
        df_clean['predicted_sales'] = predictions
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Inference execution failed: {str(e)}")

    # 5. Format payload for frontend charting
    historical_payload = []
    forecast_payload = []

    for _, row in df_clean.iterrows():
        historical_payload.append({
            "date": row['date'].strftime("%Y-%m-%d"),
            "actual_sales": float(row['daily_total'])
        })
        forecast_payload.append({
            "date": row['date'].strftime("%Y-%m-%d"),
            "predicted_sales": float(row['predicted_sales'])
        })

    return {
        "historical": historical_payload,
        "forecast": forecast_payload
    }


@router.get("/api/forecast/restock", dependencies=[Depends(require_tier("ENTERPRISE"))])
def get_restock_suggestions(
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    # Aggregate total quantity sold per product to find high-velocity items
    popular_items = db.query(
        models.InvoiceItemDB.name,
        func.sum(models.InvoiceItemDB.quantity).label("total_sold")
    ).join(models.InvoiceDB, models.InvoiceItemDB.invoice_id == models.InvoiceDB.id).filter(
        models.InvoiceDB.store_id == current_store.id
    ).group_by(
        models.InvoiceItemDB.name
    ).order_by(desc("total_sold")).limit(3).all()

    if not popular_items:
        return []

    suggestions = []
    for idx, item in enumerate(popular_items):
        suggestions.append({
            "id": idx + 1,
            "name": item.name,
            "status": "Low Stock" if idx < 2 else "Stock running low",
            "statusColor": "bg-red-100 text-red-600" if idx < 2 else "bg-amber-100 text-amber-700",
            "urgencyColor": "bg-red-50 border-red-200 text-red-700" if idx < 2 else "bg-amber-50 border-amber-200 text-amber-700",
            "days": idx + 3,
            "current": 6,
            "desc": f"Reorder {item.name} likely to run out soon based on velocity",
            "iconColor": "bg-orange-100"
        })
    return suggestions


@router.get("/api/forecast/cross-sell", dependencies=[Depends(require_tier("ENTERPRISE"))])
def get_cross_sell_patterns(
    db: Session = Depends(get_db),
    current_store: models.StoreDB = Depends(get_current_store)
):
    # Fetch distinct line item pairs appearing in the same invoices
    invoices = db.query(models.InvoiceDB).filter(models.InvoiceDB.store_id == current_store.id).all()
    
    pairs = {}
    for inv in invoices:
        names = [item.name for item in inv.items if item.name]
        for i in range(len(names)):
            for j in range(i + 1, len(names)):
                pair = tuple(sorted([names[i], names[j]]))
                pairs[pair] = pairs.get(pair, 0) + 1

    if not pairs:
        return []

    sorted_pairs = sorted(pairs.items(), key=lambda x: x[1], reverse=True)
    
    cross_sells = []
    for idx, (pair, count) in enumerate(sorted_pairs[:3]):
        cross_sells.append({
            "id": idx + 1,
            "item1": pair[0],
            "item2": pair[1],
            "pct": f"{min(60 + (count * 10), 95)}%",
            "c1": "bg-yellow-100",
            "c2": "bg-red-100"
        })
    return cross_sells