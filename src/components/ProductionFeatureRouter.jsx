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

// --- RESTAURANT MODULES ---
const KdsBoard = lazy(() => import("../pages/restaurant/KdsBoard"));

// --- RENTAL MODULES ---
const AssetMatrix = lazy(() => import("../pages/rental/AssetMatrix"));

// --- PHARMACY MODULES ---
const BatchExpiryTracking = lazy(() => import("../pages/pharmacy/BatchExpiryTracking"));

// --- CONSTRUCTION MODULES ---
const MilestoneBilling = lazy(() => import("../pages/construction/MilestoneBilling"));

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
        <Route path="/kds" element={<KdsBoard />} />

        {/* RENTAL ROUTES */}
        <Route path="/availability" element={<AssetMatrix />} />

        {/* PHARMACY ROUTES */}
        <Route path="/expiry" element={<BatchExpiryTracking />} />

        {/* CONSTRUCTION ROUTES */}
        <Route path="/milestones" element={<MilestoneBilling />} />
      </Routes>
    </Suspense>
  );
};

export default ProductionFeatureRouter;