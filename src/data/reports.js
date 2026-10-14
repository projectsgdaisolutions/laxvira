// src/data/reports.js

// TODO BACKEND: Replace this static export with live data fetched from:
// GET /reports/dashboard      -> summary
// GET /reports/sales          -> salesTrend
// GET /reports/top-products   -> topProducts
// GET /reports/profit-loss    -> profitLoss
// GET /reports (payment split) -> paymentMethods

export const reportsData = {
  summary: {
    totalRevenue: 1284650,
    totalOrders: 3842,
    totalCustomers: 1276,
    profit: 386420,
    expenses: 898230,
    averageOrderValue: 334.36,
    growthPercentage: 12.8,
  },

  salesTrend: [
    { date: "01 Jul", sales: 32400, orders: 96 },
    { date: "02 Jul", sales: 28900, orders: 88 },
    { date: "03 Jul", sales: 35200, orders: 104 },
    { date: "04 Jul", sales: 41100, orders: 122 },
    { date: "05 Jul", sales: 38700, orders: 115 },
    { date: "06 Jul", sales: 45300, orders: 134 },
    { date: "07 Jul", sales: 49800, orders: 148 },
    { date: "08 Jul", sales: 43200, orders: 128 },
    { date: "09 Jul", sales: 39600, orders: 118 },
    { date: "10 Jul", sales: 46700, orders: 139 },
    { date: "11 Jul", sales: 52300, orders: 156 },
    { date: "12 Jul", sales: 48900, orders: 145 },
    { date: "13 Jul", sales: 55100, orders: 163 },
    { date: "14 Jul", sales: 58400, orders: 172 },
  ],

  topProducts: [
    {
      id: "PRD-1001",
      name: "Basmati Rice 5kg",
      category: "Grocery",
      quantitySold: 842,
      revenue: 210500,
      profit: 52625,
    },
    {
      id: "PRD-1002",
      name: "Sunflower Cooking Oil 1L",
      category: "Grocery",
      quantitySold: 674,
      revenue: 94360,
      profit: 18872,
    },
    {
      id: "PRD-1003",
      name: "Toned Milk 1L",
      category: "Dairy",
      quantitySold: 1258,
      revenue: 62900,
      profit: 12580,
    },
    {
      id: "PRD-1004",
      name: "Whole Wheat Atta 10kg",
      category: "Grocery",
      quantitySold: 396,
      revenue: 158400,
      profit: 31680,
    },
    {
      id: "PRD-1005",
      name: "Assorted Biscuits Pack",
      category: "Snacks",
      quantitySold: 921,
      revenue: 73680,
      profit: 22104,
    },
    {
      id: "PRD-1006",
      name: "Detergent Powder 2kg",
      category: "Household",
      quantitySold: 534,
      revenue: 106800,
      profit: 26700,
    },
    {
      id: "PRD-1007",
      name: "Green Tea Box 100g",
      category: "Beverages",
      quantitySold: 412,
      revenue: 49440,
      profit: 14832,
    },
  ],

  profitLoss: [
    { month: "Feb", income: 168000, expense: 118000, profit: 50000 },
    { month: "Mar", income: 174500, expense: 121300, profit: 53200 },
    { month: "Apr", income: 181200, expense: 129800, profit: 51400 },
    { month: "May", income: 196800, expense: 138900, profit: 57900 },
    { month: "Jun", income: 204300, expense: 142600, profit: 61700 },
    { month: "Jul", income: 219850, expense: 149420, profit: 70430 },
  ],

  paymentMethods: [
    { method: "UPI", amount: 578100, percentage: 45 },
    { method: "Cash", amount: 321200, percentage: 25 },
    { method: "Card", amount: 257000, percentage: 20 },
    { method: "Credit / Ledger", amount: 128350, percentage: 10 },
  ],
};