// =====================================================================================
// src/data/customers.js
// Dummy customer catalog (with purchase history) for the Customer Management pages.
// -------------------------------------------------------------------------------------
// API PLACEHOLDER: this file will eventually be replaced entirely by a network call.
// Future (inside Customers.jsx / CustomerDetails.jsx):
//   const { data } = await axios.get("/customers");
//   const { data } = await axios.get(`/customers/${id}`);
// -------------------------------------------------------------------------------------
// The 50 customers below are generated deterministically (fixed seed) from small
// realistic building blocks (names, cities, payment methods) so the data reads like a
// real dataset rather than "Customer 1, Customer 2...". All aggregate fields
// (totalOrders, totalSpent, averageOrderValue, lastPurchase) are derived directly from
// each customer's own purchaseHistory so the numbers are always internally consistent.
// =====================================================================================

// ------------------------------- Seeded Random Helper ---------------------------------
// Deterministic pseudo-random generator so the dummy dataset is stable across reloads.
const createSeededRandom = (seed) => {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
};

const pick = (rng, list) => list[Math.floor(rng() * list.length)];
const randomInt = (rng, min, max) => Math.floor(rng() * (max - min + 1)) + min;

// ------------------------------- Building Blocks ---------------------------------------

const FIRST_NAMES = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Reyansh", "Krishna", "Ishaan",
  "Rohan", "Karan", "Ananya", "Diya", "Isha", "Kavya", "Meera", "Neha", "Priya",
  "Riya", "Sanya", "Tara", "Aman", "Farhan", "Imran", "Rajesh", "Sanjay",
  "Suresh", "Vikram", "Deepak", "Nikhil", "Manish", "Pooja", "Sneha", "Anjali",
  "Divya", "Kirti", "Lakshmi", "Nisha", "Radhika", "Shreya", "Swati",
];

const LAST_NAMES = [
  "Sharma", "Verma", "Gupta", "Mehta", "Shah", "Patel", "Reddy", "Nair", "Iyer",
  "Menon", "Kapoor", "Malhotra", "Chopra", "Bhatia", "Joshi", "Rao", "Pillai",
  "Agarwal", "Bansal", "Saxena",
];

const CITY_STATE_PINCODE = [
  { city: "Mumbai", state: "Maharashtra", pincodePrefix: "4000" },
  { city: "Pune", state: "Maharashtra", pincodePrefix: "4110" },
  { city: "Delhi", state: "Delhi", pincodePrefix: "1100" },
  { city: "Bengaluru", state: "Karnataka", pincodePrefix: "5600" },
  { city: "Hyderabad", state: "Telangana", pincodePrefix: "5000" },
  { city: "Chennai", state: "Tamil Nadu", pincodePrefix: "6000" },
  { city: "Kolkata", state: "West Bengal", pincodePrefix: "7000" },
  { city: "Ahmedabad", state: "Gujarat", pincodePrefix: "3800" },
  { city: "Jaipur", state: "Rajasthan", pincodePrefix: "3020" },
  { city: "Lucknow", state: "Uttar Pradesh", pincodePrefix: "2260" },
  { city: "Chandigarh", state: "Punjab", pincodePrefix: "1600" },
  { city: "Kochi", state: "Kerala", pincodePrefix: "6820" },
];

const STREET_NAMES = [
  "MG Road", "Park Street", "Station Road", "Ring Road", "Main Bazaar Road",
  "Church Street", "Gandhi Nagar", "Nehru Colony", "Lake View Road", "Hill Road",
];

const PAYMENT_METHODS = ["Cash", "UPI", "Card"];
const PURCHASE_STATUSES = ["Completed", "Completed", "Completed", "Pending", "Refunded"];
const CUSTOMER_STATUSES = ["Active", "Active", "Active", "Inactive"];
const GENDERS = ["Male", "Female"];
const AVATAR_PALETTE = ["🧑", "👩", "🧔", "👱‍♀️", "👨‍🦱", "👩‍🦰", "👴", "👵"];

// ------------------------------- Date Helpers -------------------------------------------

const formatDate = (date) => date.toISOString().slice(0, 10);

const daysAgo = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

// ------------------------------- Purchase History Generation ----------------------------

const generatePurchaseHistory = (rng, customerIndex) => {
  const orderCount = randomInt(rng, 2, 8);
  const history = [];

  for (let i = 0; i < orderCount; i += 1) {
    const daysBack = randomInt(rng, 1, 320);
    const items = randomInt(rng, 1, 12);
    const amount = randomInt(rng, 150, 6500);

    history.push({
      invoiceId: `INV-${String(customerIndex + 1).padStart(3, "0")}${String(i + 1).padStart(2, "0")}`,
      date: formatDate(daysAgo(daysBack)),
      items,
      amount,
      paymentMethod: pick(rng, PAYMENT_METHODS),
      status: pick(rng, PURCHASE_STATUSES),
    });
  }

  // Most recent purchase first — matches how a real order history feed would arrive.
  return history.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// ------------------------------- Customer Generation -------------------------------------

const generateCustomer = (index) => {
  const rng = createSeededRandom(1000 + index * 37);

  const firstName = pick(rng, FIRST_NAMES);
  const lastName = pick(rng, LAST_NAMES);
  const name = `${firstName} ${lastName}`;
  const location = pick(rng, CITY_STATE_PINCODE);
  const street = pick(rng, STREET_NAMES);
  const houseNumber = randomInt(rng, 1, 250);

  const purchaseHistory = generatePurchaseHistory(rng, index);
  const totalOrders = purchaseHistory.length;
  const totalSpent = purchaseHistory.reduce((sum, order) => sum + order.amount, 0);
  const averageOrderValue = totalOrders > 0 ? Math.round(totalSpent / totalOrders) : 0;
  const lastPurchase = purchaseHistory.length > 0 ? purchaseHistory[0].date : null;

  const createdAt = formatDate(daysAgo(randomInt(rng, 340, 900)));
  const hasGst = rng() > 0.7;

  return {
    id: `C${String(index + 1).padStart(3, "0")}`,
    customerCode: `CUST-${String(index + 1).padStart(4, "0")}`,
    avatar: pick(rng, AVATAR_PALETTE),
    name,
    mobile: `9${randomInt(rng, 100000000, 999999999)}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
    gender: pick(rng, GENDERS),
    address: `${houseNumber}, ${street}`,
    city: location.city,
    state: location.state,
    pincode: `${location.pincodePrefix}${randomInt(rng, 10, 99)}`,
    gstNumber: hasGst ? `27ABCDE${randomInt(rng, 1000, 9999)}F1Z${randomInt(rng, 1, 9)}` : "",
    loyaltyPoints: randomInt(rng, 0, 2500),
    status: pick(rng, CUSTOMER_STATUSES),
    totalOrders,
    totalSpent,
    averageOrderValue,
    lastPurchase,
    createdAt,
    purchaseHistory,
  };
};

// ------------------------------- Export ---------------------------------------------------

export const customers = Array.from({ length: 50 }, (_, index) => generateCustomer(index));