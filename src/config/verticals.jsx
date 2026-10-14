// // import React, { lazy, Suspense } from "react";
// // import { 
// //   LayoutDashboard, FileText, Users, Receipt, 
// //   Package, HardHat, Pill, Briefcase, 
// //   Utensils, Car, Calendar, Activity
// // } from "lucide-react";

// // import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// // import RentalDashboard from "../pages/RentalDashboard";

// // // Lazy Load Modules to prevent bundle bloat
// // const WholesaleDashboard = lazy(() => import("../pages/WholesaleDashboard"));

// // // Placeholder for industries not yet built
// // const ConstructionDashboard = lazy(() => import("../pages/ConstructionDashboard")); 
// // const LegalDashboard = lazy(() => import("../pages/LegalDashboard"));
// // const RestaurantDashboard = lazy(() => import("../pages/RestaurantDashboard"));
// // const PharmacyDashboard = lazy(() => import("../pages/PharmacyDashboard"));
// // export const VERTICAL_CONFIG = {
// //   WHOLESALE: {
// //     id: "WHOLESALE",
// //     name: "Wholesale & Distribution",
// //     DashboardComponent: WholesaleDashboard,
// //     sidebar: [
// //       { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
// //       { name: "Inventory", path: "/inventory", icon: Package },
// //       { name: "Quotations", path: "/quotations", icon: FileText },
// //       { name: "Invoices", path: "/invoices", icon: Receipt },
// //       {name: "Customers", path: "/Customers", icon: Receipt},
      
// //     ]
// //   },
// //   LEGAL: {
// //     id: "LEGAL",
// //     name: "Lawyers & Legal Practices",
// //     DashboardComponent: LegalDashboard,
// //     sidebar: [
// //       { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
// //       { name: "Case Files", path: "/documents", icon: Briefcase },
// //       { name: "Clients", path: "/customers", icon: Users },
// //       { name: "Retainers", path: "/invoices", icon: Receipt },
// //     ]
// //   },
// //   RESTAURANT: {
// //     id: "RESTAURANT",
// //     name: "Restaurant & F&B",
// //     DashboardComponent: RestaurantDashboard, 
// //     sidebar: [
// //       { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
// //       { name: "Live Orders", path: "/orders", icon: Utensils },
// //       { name: "Menu & Recipes", path: "/inventory", icon: FileText },
// //       { name: "Billing", path: "/invoices", icon: Receipt },
// //     ]
// //   },
// //   CONSTRUCTION: {
// //     id: "CONSTRUCTION",
// //     name: "Construction & Contractors",
// //     DashboardComponent: ConstructionDashboard, 
// //     sidebar: [
// //       { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
// //       { name: "Active Projects", path: "/projects", icon: HardHat },
// //       { name: "Subcontractors", path: "/customers", icon: Users },
// //       { name: "Milestone Billing", path: "/invoices", icon: Receipt },
// //     ]
// //   },
// //   PHARMACY: {
// //     id: "PHARMACY",
// //     name: "Pharmacy & Healthcare",
// //     DashboardComponent: PharmacyDashboard, 
// //     sidebar: [
// //       { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
// //       { name: "Dispensary", path: "/inventory", icon: Pill },
// //       { name: "Patient CRM", path: "/customers", icon: Activity },
// //       { name: "Invoices", path: "/invoices", icon: Receipt },
// //     ]
// //   },
// //   RENTAL: {
// //     id: "RENTAL",
// //     name: "Equipment & Fleet Rental",
// //     DashboardComponent: RentalDashboard, 
// //     sidebar: [
// //       { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
// //       { name: "Asset Fleet", path: "/inventory", icon: Car },
// //       { name: "Bookings", path: "/orders", icon: Calendar },
// //       { name: "Invoices", path: "/invoices", icon: Receipt },
// //     ]
// //   }
// // };

// // export const getUserVertical = () => {
// //   try {
// //     const userStr = localStorage.getItem("user");
// //     if (!userStr) return VERTICAL_CONFIG.WHOLESALE;
    
// //     const user = JSON.parse(userStr);
// //     const industry = (user?.industry || "WHOLESALE").toUpperCase();
    
// //     return VERTICAL_CONFIG[industry] || VERTICAL_CONFIG.WHOLESALE;
// //   } catch (error) {
// //     console.error("Failed to parse user vertical config:", error);
// //     return VERTICAL_CONFIG.WHOLESALE;
// //   }
// // };

// import React, { lazy, Suspense } from "react";
// import { 
//   LayoutDashboard, FileText, Users, Receipt, 
//   Package, HardHat, Pill, Briefcase, 
//   Utensils, Car, Calendar, Activity,
//   Scale, Clock, CreditCard, FolderLock, ShieldPlus,
//   Map, ChefHat, Bell, AlertTriangle, FileSignature,
//   Hammer, Truck
// } from "lucide-react";

// import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// import RentalDashboard from "../pages/RentalDashboard";

// // Lazy Load Modules to prevent bundle bloat
// const WholesaleDashboard = lazy(() => import("../pages/WholesaleDashboard"));
// const ConstructionDashboard = lazy(() => import("../pages/ConstructionDashboard")); 
// const LegalDashboard = lazy(() => import("../pages/LegalDashboard"));
// const RestaurantDashboard = lazy(() => import("../pages/RestaurantDashboard"));
// const PharmacyDashboard = lazy(() => import("../pages/PharmacyDashboard"));

// export const VERTICAL_CONFIG = {
//   WHOLESALE: {
//     id: "WHOLESALE",
//     name: "Wholesale & Distribution",
//     DashboardComponent: WholesaleDashboard,
//     sidebar: [
//       { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
//       { name: "Inventory", path: "/inventory", icon: Package },
//       { name: "Quotations", path: "/quotations", icon: FileText },
//       { name: "Invoices", path: "/invoices", icon: Receipt },
//       { name: "Customers", path: "/customers", icon: Users },
//     ]
//   },
//   LEGAL: {
//     id: "LEGAL",
//     name: "Lawyers & Legal Practices",
//     DashboardComponent: LegalDashboard,
//     sidebar: [
//       { name: "Chambers", path: "/dashboard", icon: LayoutDashboard },
//       { name: "Trust Accounting", path: "/features/escrow", icon: Scale },
//       { name: "Billable Hours", path: "/features/hours", icon: Clock },
//       { name: "Retainer Balances", path: "/features/retainers", icon: CreditCard },
//       { name: "Case Files", path: "/features/cases", icon: FolderLock },
//       { name: "Client Portal", path: "/features/portal", icon: Users },
//       { name: "Conflict Checks", path: "/features/conflicts", icon: ShieldPlus },
//       { name: "Court Calendar", path: "/features/scheduling", icon: Calendar }
//     ]
//   },
//   RESTAURANT: {
//     id: "RESTAURANT",
//     name: "Restaurant & F&B",
//     DashboardComponent: RestaurantDashboard, 
//     sidebar: [
//       { name: "Floor Terminal", path: "/dashboard", icon: LayoutDashboard },
//       { name: "Table Manager", path: "/features/floorplan", icon: Map },
//       { name: "Kitchen Display", path: "/features/kds", icon: ChefHat },
//       { name: "Recipe Costing", path: "/features/recipes", icon: Utensils },
//       { name: "Split Billing", path: "/features/split-billing", icon: Receipt },
//       { name: "Online Orders", path: "/features/aggregators", icon: Bell },
//       { name: "Stock Alerts", path: "/features/inventory", icon: AlertTriangle },
//       { name: "QR Menus", path: "/features/qr", icon: FileText }
//     ]
//   },
//   CONSTRUCTION: {
//     id: "CONSTRUCTION",
//     name: "Construction & Contractors",
//     DashboardComponent: ConstructionDashboard, 
//     sidebar: [
//       { name: "Command Center", path: "/dashboard", icon: LayoutDashboard },
//       { name: "Milestone Billing", path: "/features/milestones", icon: Receipt },
//       { name: "Subcontractors", path: "/features/subcontractors", icon: Users },
//       { name: "Asset Logs", path: "/features/equipment", icon: Truck },
//       { name: "Labor Tracking", path: "/features/labor", icon: Clock },
//       { name: "BOM Estimator", path: "/features/bom", icon: Hammer },
//       { name: "Compliance Docs", path: "/features/compliance", icon: FolderLock },
//       { name: "Profitability", path: "/features/profitability", icon: Activity }
//     ]
//   },
//   PHARMACY: {
//     id: "PHARMACY",
//     name: "Pharmacy & Healthcare",
//     DashboardComponent: PharmacyDashboard, 
//     sidebar: [
//       { name: "Dispensary", path: "/dashboard", icon: LayoutDashboard },
//       { name: "Expiry Tracking", path: "/features/expiry", icon: AlertTriangle },
//       { name: "Drug Compliance", path: "/features/compliance", icon: ShieldPlus },
//       { name: "Digital Rx", path: "/features/rx", icon: FileSignature },
//       { name: "Insurance Claims", path: "/features/insurance", icon: FileText },
//       { name: "Refill Reminders", path: "/features/refills", icon: Clock },
//       { name: "EDI Suppliers", path: "/features/suppliers", icon: Truck },
//       { name: "Patient CRM", path: "/features/crm", icon: Users }
//     ]
//   },
//   RENTAL: {
//     id: "RENTAL",
//     name: "Equipment & Fleet Rental",
//     DashboardComponent: RentalDashboard, 
//     sidebar: [
//       { name: "Dispatch Board", path: "/dashboard", icon: LayoutDashboard },
//       { name: "Availability Matrix", path: "/features/availability", icon: Calendar },
//       { name: "Security Deposits", path: "/features/deposit", icon: ShieldPlus },
//       { name: "Dynamic Pricing", path: "/features/pricing", icon: CreditCard },
//       { name: "Maintenance", path: "/features/maintenance", icon: Hammer },
//       { name: "Liability Waivers", path: "/features/waivers", icon: FileSignature },
//       { name: "Late Penalties", path: "/features/penalties", icon: AlertTriangle },
//       { name: "GPS Telematics", path: "/features/telematics", icon: Map }
//     ]
//   }
// };

// export const getUserVertical = () => {
//   try {
//     const userStr = localStorage.getItem("user");
//     if (!userStr) return VERTICAL_CONFIG.WHOLESALE;
    
//     const user = JSON.parse(userStr);
//     const industry = (user?.industry || "WHOLESALE").toUpperCase();
    
//     return VERTICAL_CONFIG[industry] || VERTICAL_CONFIG.WHOLESALE;
//   } catch (error) {
//     console.error("Failed to parse user vertical config:", error);
//     return VERTICAL_CONFIG.WHOLESALE;
//   }
// };


import React, { lazy } from "react";
import { 
  LayoutDashboard, FileText, Users, Receipt, 
  Package, HardHat, Pill, Briefcase, 
  Utensils, Car, Calendar, Activity,
  Scale, Clock, CreditCard, FolderLock, ShieldPlus,
  Map, ChefHat, Bell, AlertTriangle, FileSignature,
  Hammer, Truck,
  Sheet
} from "lucide-react";

const WholesaleDashboard = lazy(() => import("../pages/WholesaleDashboard"));
const ConstructionDashboard = lazy(() => import("../pages/ConstructionDashboard")); 
const LegalDashboard = lazy(() => import("../pages/LegalDashboard"));
const RestaurantDashboard = lazy(() => import("../pages/RestaurantDashboard"));
const PharmacyDashboard = lazy(() => import("../pages/PharmacyDashboard"));
const RentalDashboard = lazy(() => import("../pages/RentalDashboard"));

export const VERTICAL_CONFIG = {
  WHOLESALE: {
    id: "WHOLESALE",
    name: "Wholesale & Distribution",
    DashboardComponent: WholesaleDashboard,
    sidebar: [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { name: "Inventory", path: "/inventory", icon: Package },
      { name: "Quotations", path: "/quotations", icon: FileText },
      { name: "Invoices", path: "/invoices", icon: Receipt },
      { name: "Customers", path: "/customers", icon: Users },
      {name : "Expenses" , path: "/expenses", icon: Sheet},
      {name: "Billing",  path: "/billing", icon:Receipt },
    {name: "Sales", path:"/Sales", icon: Truck}
    ]
  },
  LEGAL: {
    id: "LEGAL",
    name: "Lawyers & Legal Practices",
    DashboardComponent: LegalDashboard,
    sidebar: [
      { name: "Chambers", path: "/dashboard", icon: LayoutDashboard },
      { name: "Trust Accounting", path: "/features/escrow", icon: Scale },
      { name: "Billable Hours", path: "/features/hours", icon: Clock },
      { name: "Retainer Balances", path: "/features/retainers", icon: CreditCard },
      { name: "Case Files", path: "/features/cases", icon: FolderLock },
      { name: "Client Portal", path: "/features/portal", icon: Users },
      { name: "Conflict Checks", path: "/features/conflicts", icon: ShieldPlus },
      { name: "Court Calendar", path: "/features/scheduling", icon: Calendar }
    ]
  },
  RESTAURANT: {
    id: "RESTAURANT",
    name: "Restaurant & F&B",
    DashboardComponent: RestaurantDashboard, 
    sidebar: [
      { name: "Floor Terminal", path: "/dashboard", icon: LayoutDashboard },
      { name: "Table Manager", path: "/features/floorplan", icon: Map },
      { name: "Kitchen Display", path: "/features/kds", icon: ChefHat },
      { name: "Recipe Costing", path: "/features/recipes", icon: Utensils },
      { name: "Split Billing", path: "/features/split-billing", icon: Receipt },
      { name: "Online Orders", path: "/features/aggregators", icon: Bell },
      { name: "Stock Alerts", path: "/features/inventory", icon: AlertTriangle },
      { name: "QR Menus", path: "/features/qr", icon: FileText }
    ]
  },
  CONSTRUCTION: {
    id: "CONSTRUCTION",
    name: "Construction & Contractors",
    DashboardComponent: ConstructionDashboard, 
    sidebar: [
      { name: "Command Center", path: "/dashboard", icon: LayoutDashboard },
      { name: "Milestone Billing", path: "/features/milestones", icon: Receipt },
      { name: "Subcontractors", path: "/features/subcontractors", icon: Users },
      { name: "Asset Logs", path: "/features/equipment", icon: Truck },
      { name: "Labor Tracking", path: "/features/labor", icon: Clock },
      { name: "BOM Estimator", path: "/features/bom", icon: Hammer },
      // { name: "Compliance Docs", path: "/features/compliance", icon: FolderLock },
      { name: "Compliance Docs", path: "/features/site-compliance", icon: FolderLock },
      { name: "Profitability", path: "/features/profitability", icon: Activity }
    ]
  },
  PHARMACY: {
    id: "PHARMACY",
    name: "Pharmacy & Healthcare",
    DashboardComponent: PharmacyDashboard, 
    sidebar: [
      { name: "Dispensary", path: "/dashboard", icon: LayoutDashboard },
      { name: "Expiry Tracking", path: "/features/expiry", icon: AlertTriangle },
      // { name: "Drug Compliance", path: "/features/compliance", icon: ShieldPlus },
      { name: "Drug Compliance", path: "/features/rx-compliance", icon: ShieldPlus },
      { name: "Digital Rx", path: "/features/rx", icon: FileSignature },
      { name: "Insurance Claims", path: "/features/insurance", icon: FileText },
      { name: "Refill Reminders", path: "/features/refills", icon: Clock },
      { name: "EDI Suppliers", path: "/features/suppliers", icon: Truck },
      { name: "Patient CRM", path: "/features/crm", icon: Users }
    ]
  },
  RENTAL: {
    id: "RENTAL",
    name: "Equipment & Fleet Rental",
    DashboardComponent: RentalDashboard, 
    sidebar: [
      { name: "Dispatch Board", path: "/dashboard", icon: LayoutDashboard },
      { name: "Availability Matrix", path: "/features/availability", icon: Calendar },
      { name: "Security Deposits", path: "/features/deposit", icon: ShieldPlus },
      { name: "Dynamic Pricing", path: "/features/pricing", icon: CreditCard },
      { name: "Maintenance", path: "/features/maintenance", icon: Hammer },
      { name: "Liability Waivers", path: "/features/waivers", icon: FileSignature },
      { name: "Late Penalties", path: "/features/penalties", icon: AlertTriangle },
      { name: "GPS Telematics", path: "/features/telematics", icon: Map }
    ]
  }
};

export const getUserVertical = () => {
  try {
    const userStr = localStorage.getItem("user");
    if (!userStr) return VERTICAL_CONFIG.WHOLESALE;
    
    const user = JSON.parse(userStr);
    const industry = (user?.industry || "WHOLESALE").toUpperCase();
    
    return VERTICAL_CONFIG[industry] || VERTICAL_CONFIG.WHOLESALE;
  } catch (error) {
    console.error("Failed to parse user vertical config:", error);
    return VERTICAL_CONFIG.WHOLESALE;
  }
};