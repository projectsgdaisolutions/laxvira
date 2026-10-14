// ============================================================================
// src/data/invoices.js
// Dummy invoice data source for the Billing System (Frontend-only phase).
//
// BACKEND INTEGRATION NOTE:
// This static array simulates the response shape of:
//   GET /invoice/:id        -> returns a single invoice object (see below)
//   GET /invoice            -> (optional) returns invoices[] for listing
//
// The Backend Developer only needs to replace the data source
// (this "invoices" array) with a live API call. The shape of a single
// invoice object below is the CONTRACT the UI (Invoice.jsx) depends on.
// Do not change field names without updating Invoice.jsx accordingly.
// ============================================================================

export const invoices = [
  {
    "id": "INV-0001",
    "invoiceNumber": "SKR/2026-27/1024",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-01",
    "time": "10:15 AM",
    "customer": {
      "id": "CUST-001",
      "name": "Rohan Deshmukh",
      "phone": "+91 98765 43210",
      "email": "rohan.deshmukh@gmail.com",
      "address": "Flat 302, Sunrise Apartments, Kothrud, Pune, Maharashtra - 411038",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Basmati Rice 5kg",
        "sku": "GRO-RIC-005",
        "hsnCode": "1006",
        "qty": 2,
        "unit": "Bag",
        "price": 650.0,
        "gst": 5,
        "amount": 1300.0
      },
      {
        "id": "ITM-02",
        "name": "Philips LED Bulb 9W",
        "sku": "ELE-LED-009",
        "hsnCode": "8539",
        "qty": 2,
        "unit": "Pcs",
        "price": 99.0,
        "gst": 18,
        "amount": 198.0
      }
    ],
    "paymentMethod": "Cash",
    "transactionId": "",
    "salesPerson": "Ramesh Kadam",
    "subtotal": 1498.0,
    "discount": 0.0,
    "taxableAmount": 1498.0,
    "cgst": 50.32,
    "sgst": 50.32,
    "igst": 0.0,
    "grandTotal": 1599.0,
    "amountInWords": "Rupees One Thousand Five Hundred Ninety Nine Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0002",
    "invoiceNumber": "SKR/2026-27/1025",
    "invoiceType": "Tax Invoice",
    "date": "2026-07-02",
    "time": "11:42 AM",
    "customer": {
      "id": "CUST-002",
      "name": "Priya Sharma",
      "phone": "+91 91234 56780",
      "email": "priya.sharma@yahoo.com",
      "address": "23, Green Park Society, Baner, Pune, Maharashtra - 411045",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Kissan Mixed Fruit Jam 500g",
        "sku": "GRO-JAM-500",
        "hsnCode": "2007",
        "qty": 5,
        "unit": "Jar",
        "price": 145.0,
        "gst": 12,
        "amount": 725.0
      },
      {
        "id": "ITM-02",
        "name": "Toor Dal 1kg",
        "sku": "GRO-DAL-001",
        "hsnCode": "0713",
        "qty": 4,
        "unit": "Pkt",
        "price": 140.0,
        "gst": 5,
        "amount": 560.0
      }
    ],
    "paymentMethod": "UPI",
    "transactionId": "TXN2026070137",
    "salesPerson": "Suresh Patil",
    "subtotal": 1285.0,
    "discount": 0.0,
    "taxableAmount": 1285.0,
    "cgst": 57.5,
    "sgst": 57.5,
    "igst": 0.0,
    "grandTotal": 1400.0,
    "amountInWords": "Rupees One Thousand Four Hundred Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0003",
    "invoiceNumber": "SKR/2026-27/1026",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-03",
    "time": "02:05 PM",
    "customer": {
      "id": "CUST-003",
      "name": "Vikram Enterprises",
      "phone": "+91 90210 98765",
      "email": "accounts@vikramenterprises.in",
      "address": "Shop 5, Industrial Estate, Bhosari, Pune, Maharashtra - 411026",
      "gstNumber": "27AAFCV5678L1ZP"
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Toor Dal 1kg",
        "sku": "GRO-DAL-001",
        "hsnCode": "0713",
        "qty": 2,
        "unit": "Pkt",
        "price": 140.0,
        "gst": 5,
        "amount": 280.0
      },
      {
        "id": "ITM-02",
        "name": "Dove Soap (Pack of 4)",
        "sku": "PER-SOP-004",
        "hsnCode": "3401",
        "qty": 5,
        "unit": "Pack",
        "price": 220.0,
        "gst": 18,
        "amount": 1100.0
      }
    ],
    "paymentMethod": "Credit Card",
    "transactionId": "TXN2026070174",
    "salesPerson": "Meena Rane",
    "subtotal": 1380.0,
    "discount": 0.0,
    "taxableAmount": 1380.0,
    "cgst": 106.0,
    "sgst": 106.0,
    "igst": 0.0,
    "grandTotal": 1592.0,
    "amountInWords": "Rupees One Thousand Five Hundred Ninety Two Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0004",
    "invoiceNumber": "SKR/2026-27/1027",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-04",
    "time": "04:30 PM",
    "customer": {
      "id": "CUST-004",
      "name": "Anita Joshi",
      "phone": "+91 99887 65432",
      "email": "anita.joshi@outlook.com",
      "address": "B-14, Lakeview Residency, Aundh, Pune, Maharashtra - 411007",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Kissan Mixed Fruit Jam 500g",
        "sku": "GRO-JAM-500",
        "hsnCode": "2007",
        "qty": 4,
        "unit": "Jar",
        "price": 145.0,
        "gst": 12,
        "amount": 580.0
      },
      {
        "id": "ITM-02",
        "name": "Maggi Noodles (Pack of 12)",
        "sku": "GRO-MAG-012",
        "hsnCode": "1902",
        "qty": 5,
        "unit": "Pack",
        "price": 168.0,
        "gst": 12,
        "amount": 840.0
      },
      {
        "id": "ITM-03",
        "name": "Surf Excel 1kg",
        "sku": "HOU-DET-001",
        "hsnCode": "3402",
        "qty": 3,
        "unit": "Pkt",
        "price": 145.0,
        "gst": 18,
        "amount": 435.0
      }
    ],
    "paymentMethod": "Debit Card",
    "transactionId": "TXN2026070211",
    "salesPerson": "Ganesh More",
    "subtotal": 1855.0,
    "discount": 0.0,
    "taxableAmount": 1855.0,
    "cgst": 124.35,
    "sgst": 124.35,
    "igst": 0.0,
    "grandTotal": 2104.0,
    "amountInWords": "Rupees Two Thousand One Hundred Four Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Pending"
  },
  {
    "id": "INV-0005",
    "invoiceNumber": "SKR/2026-27/1028",
    "invoiceType": "Tax Invoice",
    "date": "2026-07-05",
    "time": "09:50 AM",
    "customer": {
      "id": "CUST-005",
      "name": "Sagar Traders",
      "phone": "+91 98123 45670",
      "email": "sagar.traders@rediffmail.com",
      "address": "45, Market Yard, Gultekdi, Pune, Maharashtra - 411037",
      "gstNumber": "27AAGFS1122M1Z9"
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Maggi Noodles (Pack of 12)",
        "sku": "GRO-MAG-012",
        "hsnCode": "1902",
        "qty": 2,
        "unit": "Pack",
        "price": 168.0,
        "gst": 12,
        "amount": 336.0
      },
      {
        "id": "ITM-02",
        "name": "Amul Butter 500g",
        "sku": "DAI-BUT-500",
        "hsnCode": "0405",
        "qty": 2,
        "unit": "Pkt",
        "price": 265.0,
        "gst": 12,
        "amount": 530.0
      },
      {
        "id": "ITM-03",
        "name": "Philips LED Bulb 9W",
        "sku": "ELE-LED-009",
        "hsnCode": "8539",
        "qty": 3,
        "unit": "Pcs",
        "price": 99.0,
        "gst": 18,
        "amount": 297.0
      }
    ],
    "paymentMethod": "Net Banking",
    "transactionId": "TXN2026070248",
    "salesPerson": "Ramesh Kadam",
    "subtotal": 1163.0,
    "discount": 0.0,
    "taxableAmount": 1163.0,
    "cgst": 78.69,
    "sgst": 78.69,
    "igst": 0.0,
    "grandTotal": 1320.0,
    "amountInWords": "Rupees One Thousand Three Hundred Twenty Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0006",
    "invoiceNumber": "SKR/2026-27/1029",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-06",
    "time": "01:20 PM",
    "customer": {
      "id": "CUST-006",
      "name": "Neha Kulkarni",
      "phone": "+91 97654 32109",
      "email": "neha.kulkarni@gmail.com",
      "address": "12, Prabhat Road, Deccan, Pune, Maharashtra - 411004",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Britannia Biscuits (Family Pack)",
        "sku": "GRO-BIS-001",
        "hsnCode": "1905",
        "qty": 3,
        "unit": "Pack",
        "price": 95.0,
        "gst": 18,
        "amount": 285.0
      },
      {
        "id": "ITM-02",
        "name": "Tata Salt 1kg",
        "sku": "GRO-SLT-001",
        "hsnCode": "2501",
        "qty": 3,
        "unit": "Pkt",
        "price": 28.0,
        "gst": 5,
        "amount": 84.0
      }
    ],
    "paymentMethod": "Cash",
    "transactionId": "",
    "salesPerson": "Suresh Patil",
    "subtotal": 369.0,
    "discount": 18.45,
    "taxableAmount": 350.55,
    "cgst": 26.36,
    "sgst": 26.37,
    "igst": 0.0,
    "grandTotal": 403.0,
    "amountInWords": "Rupees Four Hundred Three Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Refunded"
  },
  {
    "id": "INV-0007",
    "invoiceNumber": "SKR/2026-27/1030",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-07",
    "time": "03:10 PM",
    "customer": {
      "id": "CUST-007",
      "name": "Amit Patil",
      "phone": "+91 96543 21098",
      "email": "amit.patil@gmail.com",
      "address": "7, Karve Nagar, Pune, Maharashtra - 411052",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Havells Extension Board",
        "sku": "ELE-EXT-006",
        "hsnCode": "8544",
        "qty": 4,
        "unit": "Pcs",
        "price": 450.0,
        "gst": 18,
        "amount": 1800.0
      },
      {
        "id": "ITM-02",
        "name": "Tata Salt 1kg",
        "sku": "GRO-SLT-001",
        "hsnCode": "2501",
        "qty": 1,
        "unit": "Pkt",
        "price": 28.0,
        "gst": 5,
        "amount": 28.0
      }
    ],
    "paymentMethod": "UPI",
    "transactionId": "TXN2026070322",
    "salesPerson": "Meena Rane",
    "subtotal": 1828.0,
    "discount": 91.4,
    "taxableAmount": 1736.6,
    "cgst": 154.56,
    "sgst": 154.57,
    "igst": 0.0,
    "grandTotal": 2046.0,
    "amountInWords": "Rupees Two Thousand Forty Six Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0008",
    "invoiceNumber": "SKR/2026-27/1031",
    "invoiceType": "Tax Invoice",
    "date": "2026-07-08",
    "time": "05:45 PM",
    "customer": {
      "id": "CUST-008",
      "name": "Om Sai Distributors",
      "phone": "+91 95432 10987",
      "email": "omsai.distributors@gmail.com",
      "address": "Plot 9, MIDC, Chakan, Pune, Maharashtra - 410501",
      "gstNumber": "27AAKFO3344N1ZR"
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Dove Soap (Pack of 4)",
        "sku": "PER-SOP-004",
        "hsnCode": "3401",
        "qty": 2,
        "unit": "Pack",
        "price": 220.0,
        "gst": 18,
        "amount": 440.0
      },
      {
        "id": "ITM-02",
        "name": "Toor Dal 1kg",
        "sku": "GRO-DAL-001",
        "hsnCode": "0713",
        "qty": 3,
        "unit": "Pkt",
        "price": 140.0,
        "gst": 5,
        "amount": 420.0
      },
      {
        "id": "ITM-03",
        "name": "Sunflower Oil 1L",
        "sku": "GRO-OIL-001",
        "hsnCode": "1512",
        "qty": 1,
        "unit": "Bottle",
        "price": 165.0,
        "gst": 5,
        "amount": 165.0
      },
      {
        "id": "ITM-04",
        "name": "Amul Butter 500g",
        "sku": "DAI-BUT-500",
        "hsnCode": "0405",
        "qty": 2,
        "unit": "Pkt",
        "price": 265.0,
        "gst": 12,
        "amount": 530.0
      }
    ],
    "paymentMethod": "Credit Card",
    "transactionId": "TXN2026070359",
    "salesPerson": "Ganesh More",
    "subtotal": 1555.0,
    "discount": 0.0,
    "taxableAmount": 1555.0,
    "cgst": 86.03,
    "sgst": 86.02,
    "igst": 0.0,
    "grandTotal": 1727.0,
    "amountInWords": "Rupees One Thousand Seven Hundred Twenty Seven Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0009",
    "invoiceNumber": "SKR/2026-27/1032",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-09",
    "time": "10:00 AM",
    "customer": {
      "id": "CUST-001",
      "name": "Rohan Deshmukh",
      "phone": "+91 98765 43210",
      "email": "rohan.deshmukh@gmail.com",
      "address": "Flat 302, Sunrise Apartments, Kothrud, Pune, Maharashtra - 411038",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Philips LED Bulb 9W",
        "sku": "ELE-LED-009",
        "hsnCode": "8539",
        "qty": 3,
        "unit": "Pcs",
        "price": 99.0,
        "gst": 18,
        "amount": 297.0
      },
      {
        "id": "ITM-02",
        "name": "Havells Extension Board",
        "sku": "ELE-EXT-006",
        "hsnCode": "8544",
        "qty": 2,
        "unit": "Pcs",
        "price": 450.0,
        "gst": 18,
        "amount": 900.0
      },
      {
        "id": "ITM-03",
        "name": "Nescafe Coffee 200g",
        "sku": "GRO-COF-200",
        "hsnCode": "2101",
        "qty": 6,
        "unit": "Jar",
        "price": 385.0,
        "gst": 12,
        "amount": 2310.0
      },
      {
        "id": "ITM-04",
        "name": "Toor Dal 1kg",
        "sku": "GRO-DAL-001",
        "hsnCode": "0713",
        "qty": 3,
        "unit": "Pkt",
        "price": 140.0,
        "gst": 5,
        "amount": 420.0
      },
      {
        "id": "ITM-05",
        "name": "Colgate Toothpaste 200g",
        "sku": "PER-TPC-200",
        "hsnCode": "3306",
        "qty": 6,
        "unit": "Pcs",
        "price": 110.0,
        "gst": 18,
        "amount": 660.0
      }
    ],
    "paymentMethod": "Debit Card",
    "transactionId": "TXN2026070396",
    "salesPerson": "Ramesh Kadam",
    "subtotal": 4587.0,
    "discount": 0.0,
    "taxableAmount": 4587.0,
    "cgst": 316.23,
    "sgst": 316.23,
    "igst": 0.0,
    "grandTotal": 5219.0,
    "amountInWords": "Rupees Five Thousand Two Hundred Nineteen Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0010",
    "invoiceNumber": "SKR/2026-27/1033",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-10",
    "time": "12:30 PM",
    "customer": {
      "id": "CUST-002",
      "name": "Priya Sharma",
      "phone": "+91 91234 56780",
      "email": "priya.sharma@yahoo.com",
      "address": "23, Green Park Society, Baner, Pune, Maharashtra - 411045",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Kissan Mixed Fruit Jam 500g",
        "sku": "GRO-JAM-500",
        "hsnCode": "2007",
        "qty": 4,
        "unit": "Jar",
        "price": 145.0,
        "gst": 12,
        "amount": 580.0
      },
      {
        "id": "ITM-02",
        "name": "Surf Excel 1kg",
        "sku": "HOU-DET-001",
        "hsnCode": "3402",
        "qty": 4,
        "unit": "Pkt",
        "price": 145.0,
        "gst": 18,
        "amount": 580.0
      },
      {
        "id": "ITM-03",
        "name": "Colgate Toothpaste 200g",
        "sku": "PER-TPC-200",
        "hsnCode": "3306",
        "qty": 3,
        "unit": "Pcs",
        "price": 110.0,
        "gst": 18,
        "amount": 330.0
      }
    ],
    "paymentMethod": "Net Banking",
    "transactionId": "TXN2026070433",
    "salesPerson": "Suresh Patil",
    "subtotal": 1490.0,
    "discount": 0.0,
    "taxableAmount": 1490.0,
    "cgst": 116.7,
    "sgst": 116.7,
    "igst": 0.0,
    "grandTotal": 1723.0,
    "amountInWords": "Rupees One Thousand Seven Hundred Twenty Three Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Pending"
  },
  {
    "id": "INV-0011",
    "invoiceNumber": "SKR/2026-27/1034",
    "invoiceType": "Tax Invoice",
    "date": "2026-07-11",
    "time": "02:55 PM",
    "customer": {
      "id": "CUST-003",
      "name": "Vikram Enterprises",
      "phone": "+91 90210 98765",
      "email": "accounts@vikramenterprises.in",
      "address": "Shop 5, Industrial Estate, Bhosari, Pune, Maharashtra - 411026",
      "gstNumber": "27AAFCV5678L1ZP"
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Sunflower Oil 1L",
        "sku": "GRO-OIL-001",
        "hsnCode": "1512",
        "qty": 3,
        "unit": "Bottle",
        "price": 165.0,
        "gst": 5,
        "amount": 495.0
      },
      {
        "id": "ITM-02",
        "name": "Surf Excel 1kg",
        "sku": "HOU-DET-001",
        "hsnCode": "3402",
        "qty": 4,
        "unit": "Pkt",
        "price": 145.0,
        "gst": 18,
        "amount": 580.0
      },
      {
        "id": "ITM-03",
        "name": "Kissan Mixed Fruit Jam 500g",
        "sku": "GRO-JAM-500",
        "hsnCode": "2007",
        "qty": 3,
        "unit": "Jar",
        "price": 145.0,
        "gst": 12,
        "amount": 435.0
      },
      {
        "id": "ITM-04",
        "name": "Britannia Biscuits (Family Pack)",
        "sku": "GRO-BIS-001",
        "hsnCode": "1905",
        "qty": 1,
        "unit": "Pack",
        "price": 95.0,
        "gst": 18,
        "amount": 95.0
      }
    ],
    "paymentMethod": "Cash",
    "transactionId": "",
    "salesPerson": "Meena Rane",
    "subtotal": 1605.0,
    "discount": 0.0,
    "taxableAmount": 1605.0,
    "cgst": 99.22,
    "sgst": 99.23,
    "igst": 0.0,
    "grandTotal": 1803.0,
    "amountInWords": "Rupees One Thousand Eight Hundred Three Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0012",
    "invoiceNumber": "SKR/2026-27/1035",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-12",
    "time": "04:15 PM",
    "customer": {
      "id": "CUST-004",
      "name": "Anita Joshi",
      "phone": "+91 99887 65432",
      "email": "anita.joshi@outlook.com",
      "address": "B-14, Lakeview Residency, Aundh, Pune, Maharashtra - 411007",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Dove Soap (Pack of 4)",
        "sku": "PER-SOP-004",
        "hsnCode": "3401",
        "qty": 6,
        "unit": "Pack",
        "price": 220.0,
        "gst": 18,
        "amount": 1320.0
      },
      {
        "id": "ITM-02",
        "name": "Prestige Pressure Cooker 5L",
        "sku": "HOU-COO-005",
        "hsnCode": "7615",
        "qty": 4,
        "unit": "Pcs",
        "price": 1650.0,
        "gst": 18,
        "amount": 6600.0
      },
      {
        "id": "ITM-03",
        "name": "Britannia Biscuits (Family Pack)",
        "sku": "GRO-BIS-001",
        "hsnCode": "1905",
        "qty": 2,
        "unit": "Pack",
        "price": 95.0,
        "gst": 18,
        "amount": 190.0
      },
      {
        "id": "ITM-04",
        "name": "Havells Extension Board",
        "sku": "ELE-EXT-006",
        "hsnCode": "8544",
        "qty": 3,
        "unit": "Pcs",
        "price": 450.0,
        "gst": 18,
        "amount": 1350.0
      }
    ],
    "paymentMethod": "UPI",
    "transactionId": "TXN2026070507",
    "salesPerson": "Ganesh More",
    "subtotal": 9460.0,
    "discount": 0.0,
    "taxableAmount": 9460.0,
    "cgst": 851.4,
    "sgst": 851.4,
    "igst": 0.0,
    "grandTotal": 11163.0,
    "amountInWords": "Rupees Eleven Thousand One Hundred Sixty Three Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Refunded"
  },
  {
    "id": "INV-0013",
    "invoiceNumber": "SKR/2026-27/1036",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-13",
    "time": "11:05 AM",
    "customer": {
      "id": "CUST-005",
      "name": "Sagar Traders",
      "phone": "+91 98123 45670",
      "email": "sagar.traders@rediffmail.com",
      "address": "45, Market Yard, Gultekdi, Pune, Maharashtra - 411037",
      "gstNumber": "27AAGFS1122M1Z9"
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Kissan Mixed Fruit Jam 500g",
        "sku": "GRO-JAM-500",
        "hsnCode": "2007",
        "qty": 5,
        "unit": "Jar",
        "price": 145.0,
        "gst": 12,
        "amount": 725.0
      },
      {
        "id": "ITM-02",
        "name": "Philips LED Bulb 9W",
        "sku": "ELE-LED-009",
        "hsnCode": "8539",
        "qty": 4,
        "unit": "Pcs",
        "price": 99.0,
        "gst": 18,
        "amount": 396.0
      },
      {
        "id": "ITM-03",
        "name": "Maggi Noodles (Pack of 12)",
        "sku": "GRO-MAG-012",
        "hsnCode": "1902",
        "qty": 3,
        "unit": "Pack",
        "price": 168.0,
        "gst": 12,
        "amount": 504.0
      }
    ],
    "paymentMethod": "Credit Card",
    "transactionId": "TXN2026070544",
    "salesPerson": "Ramesh Kadam",
    "subtotal": 1625.0,
    "discount": 0.0,
    "taxableAmount": 1625.0,
    "cgst": 109.38,
    "sgst": 109.38,
    "igst": 0.0,
    "grandTotal": 1844.0,
    "amountInWords": "Rupees One Thousand Eight Hundred Forty Four Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0014",
    "invoiceNumber": "SKR/2026-27/1037",
    "invoiceType": "Tax Invoice",
    "date": "2026-07-14",
    "time": "01:40 PM",
    "customer": {
      "id": "CUST-006",
      "name": "Neha Kulkarni",
      "phone": "+91 97654 32109",
      "email": "neha.kulkarni@gmail.com",
      "address": "12, Prabhat Road, Deccan, Pune, Maharashtra - 411004",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Parachute Coconut Oil 500ml",
        "sku": "PER-OIL-500",
        "hsnCode": "1513",
        "qty": 1,
        "unit": "Bottle",
        "price": 175.0,
        "gst": 18,
        "amount": 175.0
      },
      {
        "id": "ITM-02",
        "name": "Prestige Pressure Cooker 5L",
        "sku": "HOU-COO-005",
        "hsnCode": "7615",
        "qty": 1,
        "unit": "Pcs",
        "price": 1650.0,
        "gst": 18,
        "amount": 1650.0
      },
      {
        "id": "ITM-03",
        "name": "Toor Dal 1kg",
        "sku": "GRO-DAL-001",
        "hsnCode": "0713",
        "qty": 2,
        "unit": "Pkt",
        "price": 140.0,
        "gst": 5,
        "amount": 280.0
      }
    ],
    "paymentMethod": "Debit Card",
    "transactionId": "TXN2026070581",
    "salesPerson": "Suresh Patil",
    "subtotal": 2105.0,
    "discount": 0.0,
    "taxableAmount": 2105.0,
    "cgst": 171.25,
    "sgst": 171.25,
    "igst": 0.0,
    "grandTotal": 2448.0,
    "amountInWords": "Rupees Two Thousand Four Hundred Forty Eight Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  },
  {
    "id": "INV-0015",
    "invoiceNumber": "SKR/2026-27/1038",
    "invoiceType": "Retail Invoice",
    "date": "2026-07-15",
    "time": "03:25 PM",
    "customer": {
      "id": "CUST-007",
      "name": "Amit Patil",
      "phone": "+91 96543 21098",
      "email": "amit.patil@gmail.com",
      "address": "7, Karve Nagar, Pune, Maharashtra - 411052",
      "gstNumber": ""
    },
    "store": {
      "name": "Shree Krishna Retail Store",
      "address": "12, MG Road, Andheri West, Mumbai, Maharashtra - 400058",
      "phone": "+91 98200 11223",
      "gstNumber": "27ABCDE1234F1Z5"
    },
    "items": [
      {
        "id": "ITM-01",
        "name": "Toor Dal 1kg",
        "sku": "GRO-DAL-001",
        "hsnCode": "0713",
        "qty": 5,
        "unit": "Pkt",
        "price": 140.0,
        "gst": 5,
        "amount": 700.0
      },
      {
        "id": "ITM-02",
        "name": "Britannia Biscuits (Family Pack)",
        "sku": "GRO-BIS-001",
        "hsnCode": "1905",
        "qty": 3,
        "unit": "Pack",
        "price": 95.0,
        "gst": 18,
        "amount": 285.0
      },
      {
        "id": "ITM-03",
        "name": "Parachute Coconut Oil 500ml",
        "sku": "PER-OIL-500",
        "hsnCode": "1513",
        "qty": 5,
        "unit": "Bottle",
        "price": 175.0,
        "gst": 18,
        "amount": 875.0
      },
      {
        "id": "ITM-04",
        "name": "Bajaj Ceiling Fan 1200mm",
        "sku": "ELE-FAN-1200",
        "hsnCode": "8414",
        "qty": 1,
        "unit": "Pcs",
        "price": 1850.0,
        "gst": 18,
        "amount": 1850.0
      },
      {
        "id": "ITM-05",
        "name": "Surf Excel 1kg",
        "sku": "HOU-DET-001",
        "hsnCode": "3402",
        "qty": 6,
        "unit": "Pkt",
        "price": 145.0,
        "gst": 18,
        "amount": 870.0
      }
    ],
    "paymentMethod": "Net Banking",
    "transactionId": "TXN2026070618",
    "salesPerson": "Meena Rane",
    "subtotal": 4580.0,
    "discount": 0.0,
    "taxableAmount": 4580.0,
    "cgst": 366.7,
    "sgst": 366.7,
    "igst": 0.0,
    "grandTotal": 5313.0,
    "amountInWords": "Rupees Five Thousand Three Hundred Thirteen Only",
    "bankDetails": {
      "bankName": "HDFC Bank",
      "accountNumber": "50100234567890",
      "ifsc": "HDFC0001234"
    },
    "status": "Paid"
  }
];

// ----------------------------------------------------------------------------
// Helper accessor.
//
// CURRENT: synchronous lookup against the dummy array above.
// LATER:   Backend Developer replaces the body of this function with:
//
//   export const getInvoiceById = async (id) => {
//     const res = await fetch(`/invoice/${id}`);
//     if (!res.ok) throw new Error("Invoice not found");
//     return res.json();
//   };
//
// Invoice.jsx already calls this as `getInvoiceById(id)` inside a useEffect,
// so switching it to an async/fetch-based implementation requires NO changes
// to the component beyond what is already handled by the loading/error state.
// ----------------------------------------------------------------------------
// TODO BACKEND: GET /invoice/:id
export const getInvoiceById = (id) => {
  const found = invoices.find((invoice) => invoice.id === id);
  return found || null;
};