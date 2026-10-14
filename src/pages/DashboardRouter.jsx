import React, { Suspense } from "react";
import { getUserVertical } from "../config/verticals";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";


const DashboardRouter = () => {
  // 1. Evaluate the logged-in user's industry
  const currentVertical = getUserVertical();
  
  // 2. Extract the polymorphic component reference
  const TargetDashboard = currentVertical.DashboardComponent;

  // 3. Render the target inside a Suspense boundary to support lazy loading
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <TargetDashboard />
    </Suspense>
  );
};

export default DashboardRouter;