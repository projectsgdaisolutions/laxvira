// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getUserVertical } from '../config/verticals';
// import { Lock, ArrowRight, Activity, ShieldPlus, Truck, Map, Scale, Briefcase, ChefHat, HardHat } from 'lucide-react';
// import logo from "../assets/logo.jpg";

// // --- DATA REGISTRY FROM SPECIFICATIONS ---
// const FEATURE_DATA = {
//   RESTAURANT: [
//     { id: "floorplan", name: "Table & Floorplan Management", desc: "Real-time state management for seating, reservations, and active orders." },
//     { id: "kds", name: "Kitchen Display System (KDS)", desc: "WebSocket-based or polling-based ticket routing to backend displays." },
//     { id: "recipes", name: "Menu & Recipe Costing", desc: "BOM equivalent for recipes, mapping ingredients to inventory deduction." },
//     { id: "split-billing", name: "Split Billing & Tips Processing", desc: "Multi-tender transaction support and automated tip ledger distribution." },
//     { id: "aggregators", name: "Online Order Aggregation", desc: "Webhook listeners for third-party aggregators (Swiggy, Zomato, UberEats)." },
//     { id: "inventory", name: "Ingredient-Level Inventory", desc: "Granular stock tracking with low-threshold alerts based on recipe consumption." },
//     { id: "qr", name: "QR Code Ordering", desc: "Dynamic QR generation linking to tenant-specific isolated menus." }
//   ],
//   CONSTRUCTION: [
//     { id: "milestones", name: "Milestone-Based Billing", desc: "State-driven invoice generation triggered by project completion percentages." },
//     { id: "subcontractors", name: "Subcontractor Ledgers", desc: "Multi-party payout tracking and expense reconciliation workflows." },
//     { id: "equipment", name: "Equipment & Asset Logs", desc: "CRUD operations for heavy machinery usage, downtime, and depreciation." },
//     { id: "labor", name: "Labor & Timesheet Tracking", desc: "Hourly rate multipliers mapped to specific project IDs and worker profiles." },
//     { id: "bom", name: "Bill of Materials (BOM) Estimator", desc: "Algorithmic cost prediction based on historical supplier pricing." },
//     { id: "compliance", name: "Compliance Document Storage", desc: "Secure S3/blob storage for permits, blueprints, and safety certifications." },
//     { id: "profitability", name: "Project Profitability Forecasting", desc: "Predictive analytics comparing burn rate against milestone payouts." }
//   ],
//   LEGAL: [
//     { id: "escrow", name: "Trust & Escrow Accounting", desc: "Strictly segregated ledger nodes to comply with legal fund-handling regulations." },
//     { id: "hours", name: "Billable Hours Tracker", desc: "Start/stop timer chron jobs mapped directly to client case IDs." },
//     { id: "retainers", name: "Retainer Balance Automation", desc: "Automated invoice deduction from prepaid balances with low-fund alerts." },
//     { id: "cases", name: "Case File Management", desc: "Document version control and encrypted metadata tagging for legal discovery." },
//     { id: "portal", name: "Secure Client Portal", desc: "Role-based access control (RBAC) allowing external clients to view documents." },
//     { id: "conflicts", name: "Conflict of Interest Checks", desc: "Regex and fuzzy-search algorithms querying historical client databases." },
//     { id: "scheduling", name: "Court Date Scheduling", desc: "ICS calendar generation and SMS/Email cron jobs for deadline reminders." }
//   ],
//   RENTAL: [
//     { id: "availability", name: "Asset Availability Matrix", desc: "Time-series database queries to prevent double-booking across date ranges." },
//     { id: "deposit", name: "Security Deposit Ledger", desc: "Automated hold/release webhook triggers via the payment gateway API." },
//     { id: "pricing", name: "Dynamic Pricing Engine", desc: "Algorithmic rate adjustments for weekends, peak seasons, or extended durations." },
//     { id: "maintenance", name: "Maintenance Ticketing", desc: "Automated asset state changes based on damage reports." },
//     { id: "waivers", name: "Digital Liability Waivers", desc: "e-Signature capture and PDF generation stored immutably." },
//     { id: "penalties", name: "Late Return Penalties", desc: "Automated cron jobs calculating hourly/daily overage fees and auto-billing." },
//     { id: "telematics", name: "Telematics/GPS Integration", desc: "Ingestion pipelines for IoT location data and mileage tracking." }
//   ],
//   PHARMACY: [
//     { id: "expiry", name: "Batch & Expiry Tracking", desc: "FIFO inventory algorithms preventing expired item checkout." },
//     { id: "compliance", name: "Scheduled Drug Compliance", desc: "Audit logging and mandatory license input validations for restricted substances." },
//     { id: "rx", name: "Rx Digital Storage", desc: "Encrypted upload and linking of scanned prescriptions to patient profiles." },
//     { id: "insurance", name: "Health Insurance Exports", desc: "Formatted CSV/XML generation matching standard medical claim requirements." },
//     { id: "refills", name: "Refill Reminders", desc: "Scheduled SMS/Email dispatch based on dosage frequency and days supplied." },
//     { id: "suppliers", name: "Supplier API Integrations", desc: "Direct EDI or REST connections for automated restocking." },
//     { id: "crm", name: "Patient CRM & Teleconsult", desc: "Integrated health history logs and generation of secure payment links." }
//   ]
// };

// const IndustryFeatureHub = () => {
//   const { featureId } = useParams();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [industryKey, setIndustryKey] = useState("WHOLESALE");

//   useEffect(() => {
//     const userStr = localStorage.getItem("user");
//     if (userStr) {
//       const parsed = JSON.parse(userStr);
//       setUser(parsed);
//       setIndustryKey((parsed.industry || "WHOLESALE").toUpperCase());
//     }
//   }, []);

//   const renderFeatureList = (features, ThemeCard) => (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12">
//       {features.map((feat) => (
//         <ThemeCard key={feat.id} feature={feat} isActive={featureId === feat.id} userTier={user?.tier || "GROWTH"} />
//       ))}
//     </div>
//   );

//   // --- INDUSTRY THEME ROUTER ---
//   switch (industryKey) {
//     case "LEGAL":
//       return (
//         <LegalWrapper>
//           {renderFeatureList(FEATURE_DATA.LEGAL, LegalCard)}
//         </LegalWrapper>
//       );
//     case "CONSTRUCTION":
//       return (
//         <ConstructionWrapper>
//           {renderFeatureList(FEATURE_DATA.CONSTRUCTION, ConstructionCard)}
//         </ConstructionWrapper>
//       );
//     case "RESTAURANT":
//       return (
//         <RestaurantWrapper>
//           {renderFeatureList(FEATURE_DATA.RESTAURANT, RestaurantCard)}
//         </RestaurantWrapper>
//       );
//     case "RENTAL":
//       return (
//         <RentalWrapper>
//           {renderFeatureList(FEATURE_DATA.RENTAL, RentalCard)}
//         </RentalWrapper>
//       );
//     case "PHARMACY":
//       return (
//         <PharmacyWrapper>
//           {renderFeatureList(FEATURE_DATA.PHARMACY, PharmacyCard)}
//         </PharmacyWrapper>
//       );
//     default:
//       return (
//         <div className="min-h-screen flex items-center justify-center bg-slate-50">
//           <p>Wholesale features module pending.</p>
//         </div>
//       );
//   }
// };

// // ==========================================
// // 3. UI WRAPPERS & CARDS (Theming Engine)
// // ==========================================

// // --- LEGAL (Pearson Hardman Theme) ---
// const LegalWrapper = ({ children }) => (
//   <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
//     <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
//       <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//     </div>
//     <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
//       <h1 className="text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none border-b-2 border-[#2B2B2B] pb-6">
//         Practice Capabilities
//       </h1>
//     </div>
//     {children}
//   </div>
// );

// const LegalCard = ({ feature, isActive }) => (
//   <div className={`border p-8 transition-all cursor-pointer rounded-none flex flex-col justify-between ${
//     isActive ? "border-[#8B2626] shadow-xl bg-white" : "border-slate-300 bg-[#FDFBF7] hover:border-[#2B2B2B] hover:bg-white"
//   }`}>
//     <div>
//       <div className="flex items-center gap-3 mb-4 text-[#8B2626]">
//         <Scale size={20} />
//         <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Module</span>
//       </div>
//       <h3 className="text-xl font-serif text-[#2B2B2B] mb-3">{feature.name}</h3>
//       <p className="text-sm font-medium text-slate-500 leading-relaxed">{feature.desc}</p>
//     </div>
//     <div className="mt-8 flex items-center gap-2 text-[#2B2B2B] font-bold text-xs uppercase tracking-widest group">
//       Initialize Workflow <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//     </div>
//   </div>
// );

// // --- CONSTRUCTION (Industrial Theme) ---
// const ConstructionWrapper = ({ children }) => (
//   <div className="min-h-screen bg-stone-100 font-sans relative flex flex-col items-center">
//     <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
//     <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
//       <h1 className="text-[36px] font-black text-stone-900 tracking-tight uppercase border-l-8 border-amber-500 pl-4 bg-white p-4 shadow-sm">
//         System Modules
//       </h1>
//     </div>
//     {children}
//   </div>
// );

// const ConstructionCard = ({ feature, isActive }) => (
//   <div className={`border-2 p-6 transition-all cursor-pointer rounded-sm flex flex-col justify-between ${
//     isActive ? "border-amber-500 shadow-lg bg-stone-900 text-white" : "border-stone-300 bg-white hover:border-stone-900"
//   }`}>
//     <div>
//       <HardHat size={24} className={isActive ? "text-amber-500 mb-4" : "text-stone-400 mb-4"} />
//       <h3 className={`text-lg font-black uppercase mb-2 ${isActive ? "text-white" : "text-stone-900"}`}>{feature.name}</h3>
//       <p className={`text-sm font-medium leading-relaxed ${isActive ? "text-stone-400" : "text-stone-500"}`}>{feature.desc}</p>
//     </div>
//     <div className={`mt-6 flex items-center gap-2 font-black text-xs uppercase tracking-widest ${isActive ? "text-amber-500" : "text-stone-900"}`}>
//       Execute <ArrowRight size={14} />
//     </div>
//   </div>
// );

// // --- RESTAURANT (Glassmorphism Theme) ---
// const RestaurantWrapper = ({ children }) => (
//   <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//     <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
//     <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0"></div>
//     <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
//       <h1 className="text-[34px] font-black text-slate-900 tracking-tight bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
//         Kitchen & Floor Operations
//       </h1>
//     </div>
//     {children}
//   </div>
// );

// const RestaurantCard = ({ feature, isActive }) => (
//   <div className={`p-6 transition-all cursor-pointer rounded-3xl border flex flex-col justify-between backdrop-blur-xl ${
//     isActive ? "border-orange-400 shadow-[0_10px_40px_rgb(249,115,22,0.15)] bg-white/95" : "border-white/80 bg-white/60 hover:bg-white/90 hover:-translate-y-1 shadow-sm"
//   }`}>
//     <div>
//       <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-5 ${isActive ? "bg-gradient-to-br from-orange-400 to-rose-500 text-white shadow-lg" : "bg-orange-50 text-orange-500"}`}>
//         <ChefHat size={20} />
//       </div>
//       <h3 className="text-xl font-black text-slate-900 mb-2">{feature.name}</h3>
//       <p className="text-sm font-semibold text-slate-500 leading-relaxed">{feature.desc}</p>
//     </div>
//   </div>
// );

// // --- PHARMACY (Clinical Theme) ---
// const PharmacyWrapper = ({ children }) => (
//   <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
//     <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
//     <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
//       <h1 className="text-[32px] font-black text-slate-800 tracking-tight bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-sm flex items-center gap-4">
//         <ShieldPlus size={28} className="text-teal-500" /> Clinical Operations
//       </h1>
//     </div>
//     {children}
//   </div>
// );

// const PharmacyCard = ({ feature, isActive }) => (
//   <div className={`p-6 transition-all cursor-pointer rounded-3xl border flex flex-col justify-between backdrop-blur-xl ${
//     isActive ? "border-teal-400 shadow-[0_10px_30px_rgb(20,184,166,0.15)] bg-white" : "border-teal-100/50 bg-white/70 hover:bg-white hover:border-teal-200 shadow-sm"
//   }`}>
//     <div>
//       <Activity size={24} className={isActive ? "text-teal-500 mb-4 animate-pulse" : "text-teal-300 mb-4"} />
//       <h3 className="text-lg font-black text-slate-800 mb-2">{feature.name}</h3>
//       <p className="text-sm font-medium text-slate-500 leading-relaxed">{feature.desc}</p>
//     </div>
//   </div>
// );

// // --- RENTAL (Logistics Theme) ---
// const RentalWrapper = ({ children }) => (
//   <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//     <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
//     <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
//       <h1 className="text-[32px] font-black text-slate-900 tracking-tight bg-white border border-slate-200 border-l-4 border-l-indigo-600 p-5 shadow-sm flex items-center gap-4">
//         <Truck size={24} className="text-indigo-600" /> Fleet Modules
//       </h1>
//     </div>
//     {children}
//   </div>
// );

// const RentalCard = ({ feature, isActive }) => (
//   <div className={`p-6 transition-all cursor-pointer border flex flex-col justify-between bg-white ${
//     isActive ? "border-indigo-600 shadow-md ring-1 ring-indigo-600" : "border-slate-200 hover:border-indigo-400 hover:shadow-sm"
//   }`}>
//     <div>
//       <Map size={20} className={isActive ? "text-indigo-600 mb-4" : "text-slate-400 mb-4"} />
//       <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.name}</h3>
//       <p className="text-sm font-medium text-slate-500 leading-relaxed">{feature.desc}</p>
//     </div>
//   </div>
// );

// export default IndustryFeatureHub;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Activity, ShieldPlus, Truck, Map, Scale, 
  ChefHat, HardHat, ArrowLeft, Search, Filter, Plus, 
  MoreVertical, FileText
} from 'lucide-react';
import logo from "../assets/logo.jpg";

// --- 1. DATA REGISTRY ---
const FEATURE_DATA = {
  RESTAURANT: [
    { id: "floorplan", name: "Table & Floorplan Management", desc: "Real-time state management for seating, reservations, and active orders." },
    { id: "kds", name: "Kitchen Display System (KDS)", desc: "WebSocket-based or polling-based ticket routing to backend displays." },
    { id: "recipes", name: "Menu & Recipe Costing", desc: "BOM equivalent for recipes, mapping ingredients to inventory deduction." },
    { id: "split-billing", name: "Split Billing & Tips Processing", desc: "Multi-tender transaction support and automated tip ledger distribution." },
    { id: "aggregators", name: "Online Order Aggregation", desc: "Webhook listeners for third-party aggregators (Swiggy, Zomato, UberEats)." },
    { id: "inventory", name: "Ingredient-Level Inventory", desc: "Granular stock tracking with low-threshold alerts based on recipe consumption." },
    { id: "qr", name: "QR Code Ordering", desc: "Dynamic QR generation linking to tenant-specific isolated menus." }
  ],
  CONSTRUCTION: [
    { id: "milestones", name: "Milestone-Based Billing", desc: "State-driven invoice generation triggered by project completion percentages." },
    { id: "subcontractors", name: "Subcontractor Ledgers", desc: "Multi-party payout tracking and expense reconciliation workflows." },
    { id: "equipment", name: "Equipment & Asset Logs", desc: "CRUD operations for heavy machinery usage, downtime, and depreciation." },
    { id: "labor", name: "Labor & Timesheet Tracking", desc: "Hourly rate multipliers mapped to specific project IDs and worker profiles." },
    { id: "bom", name: "Bill of Materials (BOM) Estimator", desc: "Algorithmic cost prediction based on historical supplier pricing." },
    { id: "compliance", name: "Compliance Document Storage", desc: "Secure S3/blob storage for permits, blueprints, and safety certifications." },
    { id: "profitability", name: "Project Profitability Forecasting", desc: "Predictive analytics comparing burn rate against milestone payouts." }
  ],
  LEGAL: [
    { id: "escrow", name: "Trust & Escrow Accounting", desc: "Strictly segregated ledger nodes to comply with legal fund-handling regulations." },
    { id: "hours", name: "Billable Hours Tracker", desc: "Start/stop timer chron jobs mapped directly to client case IDs." },
    { id: "retainers", name: "Retainer Balance Automation", desc: "Automated invoice deduction from prepaid balances with low-fund alerts." },
    { id: "cases", name: "Case File Management", desc: "Document version control and encrypted metadata tagging for legal discovery." },
    { id: "portal", name: "Secure Client Portal", desc: "Role-based access control (RBAC) allowing external clients to view documents." },
    { id: "conflicts", name: "Conflict of Interest Checks", desc: "Regex and fuzzy-search algorithms querying historical client databases." },
    { id: "scheduling", name: "Court Date Scheduling", desc: "ICS calendar generation and SMS/Email cron jobs for deadline reminders." }
  ],
  RENTAL: [
    { id: "availability", name: "Asset Availability Matrix", desc: "Time-series database queries to prevent double-booking across date ranges." },
    { id: "deposit", name: "Security Deposit Ledger", desc: "Automated hold/release webhook triggers via the payment gateway API." },
    { id: "pricing", name: "Dynamic Pricing Engine", desc: "Algorithmic rate adjustments for weekends, peak seasons, or extended durations." },
    { id: "maintenance", name: "Maintenance Ticketing", desc: "Automated asset state changes based on damage reports." },
    { id: "waivers", name: "Digital Liability Waivers", desc: "e-Signature capture and PDF generation stored immutably." },
    { id: "penalties", name: "Late Return Penalties", desc: "Automated cron jobs calculating hourly/daily overage fees and auto-billing." },
    { id: "telematics", name: "Telematics/GPS Integration", desc: "Ingestion pipelines for IoT location data and mileage tracking." }
  ],
  PHARMACY: [
    { id: "expiry", name: "Batch & Expiry Tracking", desc: "FIFO inventory algorithms preventing expired item checkout." },
    { id: "compliance", name: "Scheduled Drug Compliance", desc: "Audit logging and mandatory license input validations for restricted substances." },
    { id: "rx", name: "Rx Digital Storage", desc: "Encrypted upload and linking of scanned prescriptions to patient profiles." },
    { id: "insurance", name: "Health Insurance Exports", desc: "Formatted CSV/XML generation matching standard medical claim requirements." },
    { id: "refills", name: "Refill Reminders", desc: "Scheduled SMS/Email dispatch based on dosage frequency and days supplied." },
    { id: "suppliers", name: "Supplier API Integrations", desc: "Direct EDI or REST connections for automated restocking." },
    { id: "crm", name: "Patient CRM & Teleconsult", desc: "Integrated health history logs and generation of secure payment links." }
  ]
};

// ==========================================
// 2. MAIN HUB COMPONENT
// ==========================================
const IndustryFeatureHub = () => {
  const { featureId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [industryKey, setIndustryKey] = useState("WHOLESALE");

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const parsed = JSON.parse(userStr);
      setUser(parsed);
      setIndustryKey((parsed.industry || "WHOLESALE").toUpperCase());
    }
  }, []);

  const features = FEATURE_DATA[industryKey] || [];
  const activeFeature = features.find(f => f.id === featureId);

  // If a specific feature is selected, render the Workspace. Otherwise, render the Directory Grid.
  const renderContent = (ThemeCard) => {
    if (activeFeature) {
      return <DynamicWorkspace feature={activeFeature} industry={industryKey} onBack={() => navigate('/features')} />;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12">
        {features.map((feat) => (
          <ThemeCard 
            key={feat.id} 
            feature={feat} 
            onClick={() => navigate(`/features/${feat.id}`)}
          />
        ))}
      </div>
    );
  };

  // --- INDUSTRY THEME ROUTER ---
  switch (industryKey) {
    case "LEGAL": return <LegalWrapper isWorkspace={!!activeFeature}>{renderContent(LegalCard)}</LegalWrapper>;
    case "CONSTRUCTION": return <ConstructionWrapper isWorkspace={!!activeFeature}>{renderContent(ConstructionCard)}</ConstructionWrapper>;
    case "RESTAURANT": return <RestaurantWrapper isWorkspace={!!activeFeature}>{renderContent(RestaurantCard)}</RestaurantWrapper>;
    case "RENTAL": return <RentalWrapper isWorkspace={!!activeFeature}>{renderContent(RentalCard)}</RentalWrapper>;
    case "PHARMACY": return <PharmacyWrapper isWorkspace={!!activeFeature}>{renderContent(PharmacyCard)}</PharmacyWrapper>;
    default: return <div className="min-h-screen flex items-center justify-center bg-slate-50"><p>Wholesale features module pending.</p></div>;
  }
};

// ==========================================
// 3. DYNAMIC WORKSPACE SHELL
// ==========================================
const DynamicWorkspace = ({ feature, industry, onBack }) => {
  // Theme Dictionary for the Workspace Shell
  const themeStyles = {
    LEGAL: {
      backBtn: "text-[#2B2B2B] hover:bg-slate-200 rounded-none",
      header: "font-serif text-[#2B2B2B]",
      primaryBtn: "bg-[#2B2B2B] text-white rounded-none hover:bg-[#8B2626]",
      container: "bg-white border border-[#2B2B2B] rounded-none shadow-sm",
      tableHeader: "bg-[#FDFBF7] border-b border-[#2B2B2B] text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest",
    },
    CONSTRUCTION: {
      backBtn: "text-stone-800 hover:bg-amber-500 rounded-sm font-bold uppercase",
      header: "font-black text-stone-900 uppercase tracking-tight",
      primaryBtn: "bg-amber-500 text-stone-900 rounded-sm font-black uppercase border-2 border-stone-900 hover:bg-amber-400",
      container: "bg-white border-2 border-stone-300 rounded-sm shadow-md",
      tableHeader: "bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[12px]",
    },
    RESTAURANT: {
      backBtn: "text-slate-600 hover:bg-white/60 rounded-xl backdrop-blur-sm",
      header: "font-black text-slate-900",
      primaryBtn: "bg-gradient-to-r from-orange-400 to-rose-500 text-white rounded-xl shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform",
      container: "bg-white/70 backdrop-blur-2xl border border-white/80 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
      tableHeader: "bg-white/40 border-b border-white/50 text-slate-600 font-bold text-[12px]",
    },
    PHARMACY: {
      backBtn: "text-teal-700 hover:bg-teal-50 rounded-xl",
      header: "font-black text-slate-800",
      primaryBtn: "bg-teal-600 text-white rounded-xl shadow-md hover:bg-teal-700",
      container: "bg-white/80 backdrop-blur-xl border border-teal-100/50 rounded-3xl shadow-sm",
      tableHeader: "bg-teal-50/50 border-b border-teal-100/50 text-teal-800 font-bold text-[12px]",
    },
    RENTAL: {
      backBtn: "text-indigo-700 hover:bg-indigo-50 rounded-sm",
      header: "font-bold text-slate-900",
      primaryBtn: "bg-indigo-600 text-white rounded-sm hover:bg-indigo-700",
      container: "bg-white border border-slate-200 shadow-sm",
      tableHeader: "bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-wider",
    }
  };

  const currentTheme = themeStyles[industry];

  return (
    <div className="relative z-10 w-full max-w-[1600px] px-6 py-6 md:px-10 lg:px-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Navigation */}
      <button onClick={onBack} className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all mb-6 ${currentTheme.backBtn}`}>
        <ArrowLeft size={16} /> Return to Directory
      </button>

      {/* Workspace Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className={`text-3xl md:text-4xl ${currentTheme.header}`}>{feature.name}</h2>
          <p className="text-slate-500 mt-2 max-w-2xl">{feature.desc}</p>
        </div>
        <button className={`flex items-center gap-2 px-6 py-3 text-sm transition-all ${currentTheme.primaryBtn}`}>
          <Plus size={16} /> New Record
        </button>
      </div>

      {/* Main Data Container */}
      <div className={`w-full overflow-hidden flex flex-col min-h-[500px] ${currentTheme.container}`}>
        
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 gap-4 border-b border-black/5">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search records..." 
                className="w-full bg-slate-100/50 border border-slate-200/50 text-sm rounded-md pl-9 pr-4 py-2 outline-none focus:bg-white transition-colors"
              />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-md transition-colors"><Filter size={18} /></button>
          </div>
          <div className="flex gap-2">
             <span className="text-xs font-medium text-slate-400 self-center mr-2">System Live</span>
          </div>
        </div>

        {/* Dummy Table Data Scaffold */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={currentTheme.tableHeader}>
                <th className="p-4">ID Reference</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Modified</th>
                <th className="p-4">Assigned To</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((row) => (
                <tr key={row} className="border-b border-black/5 hover:bg-black/[0.02] transition-colors group">
                  <td className="p-4 text-sm font-medium text-slate-700">SYS-00{row}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700">
                      Active
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-500">Today, 10:4{row} AM</td>
                  <td className="p-4 text-sm text-slate-600 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">U</div>
                    System User
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-slate-800 transition-colors"><MoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-black/5 flex items-center justify-between text-xs font-medium text-slate-500">
          <span>Showing 5 of 24 records</span>
          <div className="flex gap-4">
            <button className="hover:text-slate-800">Previous</button>
            <button className="hover:text-slate-800">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
};


// ==========================================
// 4. THEME WRAPPERS & DIRECTORY CARDS
// ==========================================

// --- LEGAL ---
const LegalWrapper = ({ children, isWorkspace }) => (
  <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
    <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
      <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
    </div>
    {!isWorkspace && (
      <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
        <h1 className="text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none border-b-2 border-[#2B2B2B] pb-6">Practice Capabilities</h1>
      </div>
    )}
    {children}
  </div>
);

const LegalCard = ({ feature, onClick }) => (
  <div onClick={onClick} className="border border-slate-300 bg-[#FDFBF7] p-8 transition-all cursor-pointer rounded-none flex flex-col justify-between hover:border-[#2B2B2B] hover:bg-white group">
    <div>
      <div className="flex items-center gap-3 mb-4 text-[#8B2626]">
        <Scale size={20} />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Module</span>
      </div>
      <h3 className="text-xl font-serif text-[#2B2B2B] mb-3">{feature.name}</h3>
      <p className="text-sm font-medium text-slate-500 leading-relaxed">{feature.desc}</p>
    </div>
    <div className="mt-8 flex items-center gap-2 text-[#2B2B2B] font-bold text-xs uppercase tracking-widest">
      Initialize Workflow <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

// --- CONSTRUCTION ---
const ConstructionWrapper = ({ children, isWorkspace }) => (
  <div className="min-h-screen bg-stone-100 font-sans relative flex flex-col items-center">
    <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
    {!isWorkspace && (
      <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
        <h1 className="text-[36px] font-black text-stone-900 tracking-tight uppercase border-l-8 border-amber-500 pl-4 bg-white p-4 shadow-sm">System Modules</h1>
      </div>
    )}
    {children}
  </div>
);

const ConstructionCard = ({ feature, onClick }) => (
  <div onClick={onClick} className="border-2 border-stone-300 bg-white p-6 transition-all cursor-pointer rounded-sm flex flex-col justify-between hover:border-stone-900 group">
    <div>
      <HardHat size={24} className="text-stone-400 mb-4 group-hover:text-amber-500 transition-colors" />
      <h3 className="text-lg font-black uppercase mb-2 text-stone-900">{feature.name}</h3>
      <p className="text-sm font-medium leading-relaxed text-stone-500">{feature.desc}</p>
    </div>
    <div className="mt-6 flex items-center gap-2 font-black text-xs uppercase tracking-widest text-stone-900 group-hover:text-amber-600">
      Execute <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
    </div>
  </div>
);

// --- RESTAURANT ---
const RestaurantWrapper = ({ children, isWorkspace }) => (
  <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
    <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
    <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0"></div>
    {!isWorkspace && (
      <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
        <h1 className="text-[34px] font-black text-slate-900 tracking-tight bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">Kitchen & Floor Operations</h1>
      </div>
    )}
    {children}
  </div>
);

const RestaurantCard = ({ feature, onClick }) => (
  <div onClick={onClick} className="p-6 transition-all cursor-pointer rounded-3xl border border-white/80 bg-white/60 hover:bg-white/90 hover:-translate-y-1 shadow-sm flex flex-col justify-between backdrop-blur-xl group">
    <div>
      <div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-5 bg-orange-50 text-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-rose-500 group-hover:text-white transition-all shadow-sm">
        <ChefHat size={20} />
      </div>
      <h3 className="text-xl font-black text-slate-900 mb-2">{feature.name}</h3>
      <p className="text-sm font-semibold text-slate-500 leading-relaxed">{feature.desc}</p>
    </div>
  </div>
);

// --- PHARMACY ---
const PharmacyWrapper = ({ children, isWorkspace }) => (
  <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
    {!isWorkspace && (
      <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
        <h1 className="text-[32px] font-black text-slate-800 tracking-tight bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-sm flex items-center gap-4"><ShieldPlus size={28} className="text-teal-500" /> Clinical Operations</h1>
      </div>
    )}
    {children}
  </div>
);

const PharmacyCard = ({ feature, onClick }) => (
  <div onClick={onClick} className="p-6 transition-all cursor-pointer rounded-3xl border border-teal-100/50 bg-white/70 hover:bg-white hover:border-teal-200 shadow-sm flex flex-col justify-between backdrop-blur-xl group">
    <div>
      <Activity size={24} className="text-teal-300 mb-4 group-hover:text-teal-500 transition-colors" />
      <h3 className="text-lg font-black text-slate-800 mb-2">{feature.name}</h3>
      <p className="text-sm font-medium text-slate-500 leading-relaxed">{feature.desc}</p>
    </div>
  </div>
);

// --- RENTAL ---
const RentalWrapper = ({ children, isWorkspace }) => (
  <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
    <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    {!isWorkspace && (
      <div className="relative z-10 w-full max-w-[1600px] px-6 pt-12 pb-4">
        <h1 className="text-[32px] font-black text-slate-900 tracking-tight bg-white border border-slate-200 border-l-4 border-l-indigo-600 p-5 shadow-sm flex items-center gap-4"><Truck size={24} className="text-indigo-600" /> Fleet Modules</h1>
      </div>
    )}
    {children}
  </div>
);

const RentalCard = ({ feature, onClick }) => (
  <div onClick={onClick} className="p-6 transition-all cursor-pointer border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-sm flex flex-col justify-between group">
    <div>
      <Map size={20} className="text-slate-400 mb-4 group-hover:text-indigo-600 transition-colors" />
      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.name}</h3>
      <p className="text-sm font-medium text-slate-500 leading-relaxed">{feature.desc}</p>
    </div>
  </div>
);

export default IndustryFeatureHub;