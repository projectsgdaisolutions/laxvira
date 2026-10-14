import React from 'react';
import { Navigate } from 'react-router-dom';
import SuperAdminDashboard from '../SuperAdminDashboard';
import SalesDashboard from '../SalesDashboard';
import FinanceDashboard from '../FinanceDashboard';
import ITDashboard from '../ITDashboard';

const HQRouter = () => {
  // Safely parse local storage to prevent fatal crashes if unauthenticated
  const userStr = localStorage.getItem('user');
  if (!userStr) {
    return <Navigate to="/login" />;
  }

  const user = JSON.parse(userStr);

  // Kick normal clients back to the standard app
  if (!user.is_hq_staff) {
    return <Navigate to="/dashboard" />; 
  }

  // Route them to their specific workspace
  switch (user.hq_role) {
    case 'SUPERADMIN':
      return <SuperAdminDashboard />;
    case 'SALES':
      return <SalesDashboard />;
    case 'FINANCE':
      return <FinanceDashboard />;
    case 'IT_SUPPORT':
      return <ITDashboard />;
    default:
      return <Navigate to="/unauthorized" />;
  }
};

export default HQRouter;