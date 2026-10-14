import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";

// --- LEGAL MODULES ---
const TrustAccounting = lazy(() => import("../pages/legal/TrustAccounting"));
const CourtScheduling = lazy(() => import("../pages/legal/CourtScheduling"));
const BillableHours = lazy(() => import("../pages/legal/BillableHours"));
const CaseManagement = lazy(() => import("../pages/legal/CaseManagement"));
const ConflictChecks = lazy(() => import("../pages/legal/ConflictChecks"));
const RetainerAutomation = lazy(() => import("../pages/legal/RetainerAutomation"));
const ClientPortal = lazy(() => import("../pages/legal/ClientPortal"));

// // --- RESTAURANT MODULES ---
// // const KdsBoard = lazy(() => import("../pages/restaurant/KdsBoard"));
// --- RESTAURANT IMPORTS ---
const TableManager = lazy(() => import("../pages/restaurant/TableManager"));
const KdsBoard = lazy(() => import("../pages/restaurant/KdsBoard"));
const RecipeCosting = lazy(() => import("../pages/restaurant/RecipeCosting"));
const SplitBilling = lazy(() => import("../pages/restaurant/SplitBilling"));
const OnlineAggregators = lazy(() => import("../pages/restaurant/OnlineAggregators"));
const IngredientInventory = lazy(() => import("../pages/restaurant/IngredientInventory"));
const QrMenuBuilder = lazy(() => import("../pages/restaurant/QrMenuBuilder"));


// --- RENTAL MODULES ---
// const AssetMatrix = lazy(() => import("../pages/rental/AssetMatrix"));



// --- RENTAL IMPORTS ---
const AssetMatrix = lazy(() => import("../pages/rental/AssetMatrix"));
const SecurityDepositLedger = lazy(() => import("../pages/rental/SecurityDepositLedger"));
const DynamicPricing = lazy(() => import("../pages/rental/DynamicPricing"));
const MaintenanceTickets = lazy(() => import("../pages/rental/MaintenanceTickets"));
const LiabilityWaivers = lazy(() => import("../pages/rental/LiabilityWaivers"));
const LatePenalties = lazy(() => import("../pages/rental/LatePenalties"));
const TelematicsGps = lazy(() => import("../pages/rental/TelematicsGps"));

// --- PHARMACY MODULES ---
const BatchExpiryTracking = lazy(() => import("../pages/pharmacy/BatchExpiryTracking"));
const DigitalRx = lazy(() => import("../pages/pharmacy/DigitalRx"));
const DrugCompliance = lazy(() => import("../pages/pharmacy/DrugCompliance"));
const InsuranceExports = lazy(() => import("../pages/pharmacy/InsuranceExports"));
const PatientCrm = lazy(() => import("../pages/pharmacy/PatientCrm"));
const RefillReminders = lazy(() => import("../pages/pharmacy/RefillReminders"));
const SupplierEdi = lazy(() => import("../pages/pharmacy/SupplierEdi"));

// --- CONSTRUCTION MODULES ---
// const MilestoneBilling = lazy(() => import("../pages/construction/MilestoneBilling"));
const MilestoneBilling = lazy(() => import("../pages/construction/MilestoneBilling"));
const BomEstimator = lazy(() => import("../pages/construction/BomEstimator"));
const AssetLogs = lazy(() => import("../pages/construction/AssetLogs"));
const ComplianceStorage = lazy(() => import("../pages/construction/ComplianceStorage"));
const LaborTimesheets = lazy(() => import("../pages/construction/LaborTimesheets"));
const ProfitabilityForecast = lazy(() => import("../pages/construction/ProfitabilityForecast"));
const SubcontractorLedgers = lazy(() => import("../pages/construction/SubcontractorLedgers"));

const ProductionFeatureRouter = () => {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <Routes>
        {/* LEGAL ROUTES */}
        <Route path="/escrow" element={<TrustAccounting />} />
        <Route path="/scheduling" element={<CourtScheduling />} />
        <Route path="/hours" element={<BillableHours />} />
        <Route path="/cases" element={<CaseManagement />} />
        <Route path="/conflicts" element={<ConflictChecks />} />
        <Route path="/retainers" element={<RetainerAutomation />} />
        <Route path="/portal" element={<ClientPortal />} />

        {/* RESTAURANT ROUTES */}
        {/* <Route path="/kds" element={<KdsBoard />} /> */}
            <Route path="/floorplan" element={<TableManager />} />
<Route path="/kds" element={<KdsBoard />} />
<Route path="/recipes" element={<RecipeCosting />} />
<Route path="/split-billing" element={<SplitBilling />} />
<Route path="/aggregators" element={<OnlineAggregators />} />
<Route path="/inventory" element={<IngredientInventory />} />
<Route path="/qr" element={<QrMenuBuilder />} />
        {/* RENTAL ROUTES */}
        {/* <Route path="/availability" element={<AssetMatrix />} /> */}
        <Route path="/availability" element={<AssetMatrix />} />
<Route path="/deposit" element={<SecurityDepositLedger />} />
<Route path="/pricing" element={<DynamicPricing />} />
<Route path="/maintenance" element={<MaintenanceTickets />} />
<Route path="/waivers" element={<LiabilityWaivers />} />
<Route path="/penalties" element={<LatePenalties />} />
<Route path="/telematics" element={<TelematicsGps />} />

        {/* PHARMACY ROUTES */}
        <Route path="/expiry" element={<BatchExpiryTracking />} />
        <Route path="/rx-compliance" element={<DrugCompliance />} />
        <Route path="/rx" element={<DigitalRx />} />
        <Route path="/insurance" element={<InsuranceExports />} />
        <Route path="/refills" element={<RefillReminders />} />
        <Route path="/suppliers" element={<SupplierEdi />} />
        <Route path="/crm" element={<PatientCrm />} />
        

        {/* CONSTRUCTION ROUTES */}
        {/* <Route path="/milestones" element={<MilestoneBilling />} /> */}
        {/* CONSTRUCTION ROUTES */}
<Route path="/milestones" element={<MilestoneBilling />} />
<Route path="/subcontractors" element={<SubcontractorLedgers />} />
<Route path="/equipment" element={<AssetLogs />} />
<Route path="/labor" element={<LaborTimesheets />} />
<Route path="/bom" element={<BomEstimator />} />
<Route path="/site-compliance" element={<ComplianceStorage />} />
<Route path="/profitability" element={<ProfitabilityForecast />} />
      </Routes>
    </Suspense>
  );
};

export default ProductionFeatureRouter;