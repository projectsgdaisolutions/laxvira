import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import all your real HQ dashboards
import SuperadminDashboard from '../SuperadminDashboard'; 
import ITDashboard from './ITDashboard';
import SalesDashboard from './SalesDashboard';     // <-- Real component imported
import FinanceDashboard from './FinanceDashboard'; // <-- Real component imported

const HQRouter = () => {
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  // Level 1 Firewall: Eject non-staff
  if (!user || !user.is_hq_staff) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Routes>
      {/* Superadmin Route */}
      {user.hq_role === 'SUPERADMIN' && (
        <Route path="/dashboard" element={<SuperadminDashboard />} />
      )}

      {/* IT Support Route */}
      {(user.hq_role === 'IT_SUPPORT' || user.hq_role === 'SUPERADMIN') && (
        <Route path="/support" element={<ITDashboard />} />
      )}

      {/* Sales Route */}
      {(user.hq_role === 'SALES' || user.hq_role === 'SUPERADMIN') && (
        <Route path="/sales" element={<SalesDashboard />} />
      )}

      {/* Finance Route */}
      {(user.hq_role === 'FINANCE' || user.hq_role === 'SUPERADMIN') && (
        <Route path="/finance" element={<FinanceDashboard />} />
      )}

      {/* Catch-All Redirect */}
      <Route path="*" element={
        user.hq_role === 'SUPERADMIN' ? <Navigate to="/hq/dashboard" replace /> :
        user.hq_role === 'IT_SUPPORT' ? <Navigate to="/hq/support" replace /> :
        user.hq_role === 'SALES' ? <Navigate to="/hq/sales" replace /> :
        <Navigate to="/hq/finance" replace />
      } />
    </Routes>
  );
};

export default HQRouter;