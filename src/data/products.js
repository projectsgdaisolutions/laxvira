// =====================================================================================
// src/data/products.js
// Dummy product catalog for the Inventory / Product List page.
// -------------------------------------------------------------------------------------
// API PLACEHOLDER: this file will eventually be replaced entirely by a network call.
// Future (inside Products.jsx):
//   const { data } = await axios.get("/products");
// -------------------------------------------------------------------------------------
// `status` is derived automatically from `stock` vs `lowStockThreshold` so it never
// drifts out of sync with the real stock count:
//   stock === 0                     -> "Out of Stock"
//   0 < stock <= lowStockThreshold  -> "Low Stock"
//   stock > lowStockThreshold       -> "In Stock"
// =====================================================================================

const getStatus = (stock, lowStockThreshold) => {
  if (stock <= 0) return "Out of Stock";
  if (stock <= lowStockThreshold) return "Low Stock";
  return "In Stock";
};

const RAW_PRODUCTS = [
  { id: "P001", name: "Basmati Rice 5kg", sku: "SKU-1001", barcode: "8901030001", category: "Staples", brand: "India Gate", costPrice: 480, sellingPrice: 620, stock: 42, lowStockThreshold: 10, gstPercentage: 5, image: "🌾" },
  { id: "P002", name: "Toor Dal 1kg", sku: "SKU-1002", barcode: "8901030002", category: "Staples", brand: "Tata Sampann", costPrice: 110, sellingPrice: 145, stock: 60, lowStockThreshold: 15, gstPercentage: 5, image: "🫘" },
  { id: "P003", name: "Sunflower Oil 1L", sku: "SKU-1003", barcode: "8901030003", category: "Staples", brand: "Fortune", costPrice: 140, sellingPrice: 178, stock: 8, lowStockThreshold: 10, gstPercentage: 5, image: "🛢️" },
  { id: "P004", name: "Wheat Atta 5kg", sku: "SKU-1004", barcode: "8901030004", category: "Staples", brand: "Aashirvaad", costPrice: 195, sellingPrice: 245, stock: 50, lowStockThreshold: 12, gstPercentage: 5, image: "🌾" },
  { id: "P005", name: "Sugar 1kg", sku: "SKU-1005", barcode: "8901030005", category: "Staples", brand: "Madhur", costPrice: 38, sellingPrice: 48, stock: 0, lowStockThreshold: 20, gstPercentage: 5, image: "🍬" },
  { id: "P006", name: "Full Cream Milk 1L", sku: "SKU-1006", barcode: "8901030006", category: "Dairy", brand: "Amul", costPrice: 54, sellingPrice: 68, stock: 90, lowStockThreshold: 20, gstPercentage: 5, image: "🥛" },
  { id: "P007", name: "Amul Butter 500g", sku: "SKU-1007", barcode: "8901030007", category: "Dairy", brand: "Amul", costPrice: 210, sellingPrice: 265, stock: 28, lowStockThreshold: 10, gstPercentage: 12, image: "🧈" },
  { id: "P008", name: "Paneer 200g", sku: "SKU-1008", barcode: "8901030008", category: "Dairy", brand: "Mother Dairy", costPrice: 75, sellingPrice: 95, stock: 6, lowStockThreshold: 10, gstPercentage: 5, image: "🧀" },
  { id: "P009", name: "Curd 400g", sku: "SKU-1009", barcode: "8901030009", category: "Dairy", brand: "Nandini", costPrice: 34, sellingPrice: 45, stock: 40, lowStockThreshold: 15, gstPercentage: 5, image: "🥣" },
  { id: "P010", name: "Farm Eggs (12 pcs)", sku: "SKU-1010", barcode: "8901030010", category: "Dairy", brand: "Happy Hen", costPrice: 66, sellingPrice: 84, stock: 55, lowStockThreshold: 15, gstPercentage: 0, image: "🥚" },
  { id: "P011", name: "Tomato 1kg", sku: "SKU-1011", barcode: "8901030011", category: "Vegetables", brand: "Local Farm", costPrice: 24, sellingPrice: 38, stock: 70, lowStockThreshold: 15, gstPercentage: 0, image: "🍅" },
  { id: "P012", name: "Onion 1kg", sku: "SKU-1012", barcode: "8901030012", category: "Vegetables", brand: "Local Farm", costPrice: 20, sellingPrice: 32, stock: 75, lowStockThreshold: 15, gstPercentage: 0, image: "🧅" },
  { id: "P013", name: "Potato 1kg", sku: "SKU-1013", barcode: "8901030013", category: "Vegetables", brand: "Local Farm", costPrice: 18, sellingPrice: 28, stock: 85, lowStockThreshold: 15, gstPercentage: 0, image: "🥔" },
  { id: "P014", name: "Spinach Bunch", sku: "SKU-1014", barcode: "8901030014", category: "Vegetables", brand: "Local Farm", costPrice: 14, sellingPrice: 22, stock: 5, lowStockThreshold: 10, gstPercentage: 0, image: "🥬" },
  { id: "P015", name: "Capsicum 500g", sku: "SKU-1015", barcode: "8901030015", category: "Vegetables", brand: "Local Farm", costPrice: 22, sellingPrice: 34, stock: 30, lowStockThreshold: 10, gstPercentage: 0, image: "🫑" },
  { id: "P016", name: "Banana Dozen", sku: "SKU-1016", barcode: "8901030016", category: "Fruits", brand: "Local Farm", costPrice: 40, sellingPrice: 55, stock: 45, lowStockThreshold: 12, gstPercentage: 0, image: "🍌" },
  { id: "P017", name: "Apple 1kg (Shimla)", sku: "SKU-1017", barcode: "8901030017", category: "Fruits", brand: "Local Farm", costPrice: 150, sellingPrice: 195, stock: 38, lowStockThreshold: 10, gstPercentage: 0, image: "🍎" },
  { id: "P018", name: "Orange 1kg", sku: "SKU-1018", barcode: "8901030018", category: "Fruits", brand: "Local Farm", costPrice: 55, sellingPrice: 75, stock: 0, lowStockThreshold: 10, gstPercentage: 0, image: "🍊" },
  { id: "P019", name: "Grapes 500g", sku: "SKU-1019", barcode: "8901030019", category: "Fruits", brand: "Local Farm", costPrice: 45, sellingPrice: 62, stock: 20, lowStockThreshold: 8, gstPercentage: 0, image: "🍇" },
  { id: "P020", name: "Watermelon (Whole)", sku: "SKU-1020", barcode: "8901030020", category: "Fruits", brand: "Local Farm", costPrice: 60, sellingPrice: 85, stock: 14, lowStockThreshold: 6, gstPercentage: 0, image: "🍉" },
  { id: "P021", name: "Instant Noodles (Pack of 4)", sku: "SKU-1021", barcode: "8901030021", category: "Snacks", brand: "Maggi", costPrice: 42, sellingPrice: 56, stock: 100, lowStockThreshold: 20, gstPercentage: 12, image: "🍜" },
  { id: "P022", name: "Potato Chips 100g", sku: "SKU-1022", barcode: "8901030022", category: "Snacks", brand: "Lays", costPrice: 30, sellingPrice: 40, stock: 65, lowStockThreshold: 15, gstPercentage: 12, image: "🥔" },
  { id: "P023", name: "Biscuits Family Pack", sku: "SKU-1023", barcode: "8901030023", category: "Snacks", brand: "Parle-G", costPrice: 48, sellingPrice: 65, stock: 58, lowStockThreshold: 15, gstPercentage: 18, image: "🍪" },
  { id: "P024", name: "Namkeen Mix 200g", sku: "SKU-1024", barcode: "8901030024", category: "Snacks", brand: "Haldiram's", costPrice: 55, sellingPrice: 75, stock: 9, lowStockThreshold: 10, gstPercentage: 12, image: "🥨" },
  { id: "P025", name: "Popcorn Kernels 500g", sku: "SKU-1025", barcode: "8901030025", category: "Snacks", brand: "ACT II", costPrice: 60, sellingPrice: 82, stock: 25, lowStockThreshold: 10, gstPercentage: 12, image: "🍿" },
  { id: "P026", name: "Mineral Water 1L", sku: "SKU-1026", barcode: "8901030026", category: "Beverages", brand: "Bisleri", costPrice: 15, sellingPrice: 20, stock: 120, lowStockThreshold: 25, gstPercentage: 18, image: "💧" },
  { id: "P027", name: "Orange Juice 1L", sku: "SKU-1027", barcode: "8901030027", category: "Beverages", brand: "Real", costPrice: 95, sellingPrice: 125, stock: 33, lowStockThreshold: 10, gstPercentage: 12, image: "🧃" },
  { id: "P028", name: "Cola 750ml", sku: "SKU-1028", barcode: "8901030028", category: "Beverages", brand: "Coca-Cola", costPrice: 32, sellingPrice: 45, stock: 70, lowStockThreshold: 15, gstPercentage: 28, image: "🥤" },
  { id: "P029", name: "Instant Coffee 100g", sku: "SKU-1029", barcode: "8901030029", category: "Beverages", brand: "Nescafe", costPrice: 220, sellingPrice: 285, stock: 0, lowStockThreshold: 8, gstPercentage: 12, image: "☕" },
  { id: "P030", name: "Green Tea (25 bags)", sku: "SKU-1030", barcode: "8901030030", category: "Beverages", brand: "Lipton", costPrice: 110, sellingPrice: 145, stock: 18, lowStockThreshold: 10, gstPercentage: 12, image: "🍵" },
  { id: "P031", name: "Toothpaste 150g", sku: "SKU-1031", barcode: "8901030031", category: "Personal Care", brand: "Colgate", costPrice: 68, sellingPrice: 89, stock: 44, lowStockThreshold: 12, gstPercentage: 18, image: "🪥" },
  { id: "P032", name: "Shampoo 340ml", sku: "SKU-1032", barcode: "8901030032", category: "Personal Care", brand: "Head & Shoulders", costPrice: 210, sellingPrice: 275, stock: 22, lowStockThreshold: 8, gstPercentage: 18, image: "🧴" },
  { id: "P033", name: "Bath Soap (Pack of 4)", sku: "SKU-1033", barcode: "8901030033", category: "Personal Care", brand: "Dove", costPrice: 140, sellingPrice: 180, stock: 7, lowStockThreshold: 10, gstPercentage: 18, image: "🧼" },
  { id: "P034", name: "Hand Sanitizer 200ml", sku: "SKU-1034", barcode: "8901030034", category: "Personal Care", brand: "Dettol", costPrice: 85, sellingPrice: 110, stock: 36, lowStockThreshold: 10, gstPercentage: 18, image: "🧴" },
  { id: "P035", name: "Razor (Pack of 2)", sku: "SKU-1035", barcode: "8901030035", category: "Personal Care", brand: "Gillette", costPrice: 95, sellingPrice: 130, stock: 15, lowStockThreshold: 8, gstPercentage: 18, image: "🪒" },
  { id: "P036", name: "Dish Wash Liquid 500ml", sku: "SKU-1036", barcode: "8901030036", category: "Household", brand: "Vim", costPrice: 78, sellingPrice: 99, stock: 48, lowStockThreshold: 12, gstPercentage: 18, image: "🧽" },
  { id: "P037", name: "Detergent Powder 1kg", sku: "SKU-1037", barcode: "8901030037", category: "Household", brand: "Surf Excel", costPrice: 105, sellingPrice: 138, stock: 3, lowStockThreshold: 10, gstPercentage: 18, image: "🧺" },
  { id: "P038", name: "Floor Cleaner 1L", sku: "SKU-1038", barcode: "8901030038", category: "Household", brand: "Lizol", costPrice: 130, sellingPrice: 170, stock: 26, lowStockThreshold: 10, gstPercentage: 18, image: "🧴" },
  { id: "P039", name: "Garbage Bags (30 pcs)", sku: "SKU-1039", barcode: "8901030039", category: "Household", brand: "Ezee", costPrice: 60, sellingPrice: 82, stock: 54, lowStockThreshold: 15, gstPercentage: 18, image: "🗑️" },
  { id: "P040", name: "Air Freshener 300ml", sku: "SKU-1040", barcode: "8901030040", category: "Household", brand: "Godrej Aer", costPrice: 145, sellingPrice: 190, stock: 0, lowStockThreshold: 8, gstPercentage: 18, image: "🌬️" },
  { id: "P041", name: "Brown Bread 400g", sku: "SKU-1041", barcode: "8901030041", category: "Bakery", brand: "Britannia", costPrice: 38, sellingPrice: 50, stock: 32, lowStockThreshold: 12, gstPercentage: 5, image: "🍞" },
  { id: "P042", name: "Butter Croissant (Pack of 4)", sku: "SKU-1042", barcode: "8901030042", category: "Bakery", brand: "Monginis", costPrice: 95, sellingPrice: 130, stock: 9, lowStockThreshold: 10, gstPercentage: 5, image: "🥐" },
  { id: "P043", name: "Chocolate Muffins (Pack of 6)", sku: "SKU-1043", barcode: "8901030043", category: "Bakery", brand: "Cakezone", costPrice: 110, sellingPrice: 150, stock: 17, lowStockThreshold: 8, gstPercentage: 5, image: "🧁" },
  { id: "P044", name: "Burger Buns (Pack of 6)", sku: "SKU-1044", barcode: "8901030044", category: "Bakery", brand: "Britannia", costPrice: 42, sellingPrice: 58, stock: 24, lowStockThreshold: 10, gstPercentage: 5, image: "🍔" },
  { id: "P045", name: "Rusk 300g", sku: "SKU-1045", barcode: "8901030045", category: "Bakery", brand: "Britannia", costPrice: 45, sellingPrice: 60, stock: 40, lowStockThreshold: 12, gstPercentage: 5, image: "🍪" },
  { id: "P046", name: "Frozen Green Peas 500g", sku: "SKU-1046", barcode: "8901030046", category: "Frozen", brand: "Safal", costPrice: 55, sellingPrice: 75, stock: 29, lowStockThreshold: 10, gstPercentage: 5, image: "🟢" },
  { id: "P047", name: "Frozen French Fries 1kg", sku: "SKU-1047", barcode: "8901030047", category: "Frozen", brand: "McCain", costPrice: 145, sellingPrice: 190, stock: 6, lowStockThreshold: 10, gstPercentage: 12, image: "🍟" },
  { id: "P048", name: "Chicken Nuggets 500g", sku: "SKU-1048", barcode: "8901030048", category: "Frozen", brand: "Venky's", costPrice: 165, sellingPrice: 215, stock: 12, lowStockThreshold: 8, gstPercentage: 12, image: "🍗" },
  { id: "P049", name: "Veg Momos (12 pcs)", sku: "SKU-1049", barcode: "8901030049", category: "Frozen", brand: "ITC Feasters", costPrice: 105, sellingPrice: 140, stock: 0, lowStockThreshold: 10, gstPercentage: 12, image: "🥟" },
  { id: "P050", name: "Ice Cream Tub 700ml", sku: "SKU-1050", barcode: "8901030050", category: "Frozen", brand: "Amul", costPrice: 130, sellingPrice: 175, stock: 21, lowStockThreshold: 10, gstPercentage: 18, image: "🍨" },
];

// Attach the derived `status` field to every product so consumers never need to
// recompute it themselves.
export const products = RAW_PRODUCTS.map((product) => ({
  ...product,
  status: getStatus(product.stock, product.lowStockThreshold),
}));