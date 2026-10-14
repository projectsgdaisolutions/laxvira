// // // // import { Navigate, Route, Routes } from "react-router-dom";

// // // // import Login from "../pages/Login";
// // // // import Signup from "../pages/Signup";
// // // // import LandingPage from "../pages/LandingPage";

// // // // import Dashboard from "../pages/Dashboard";
// // // // import Billing from "../pages/Billing";
// // // // import Products from "../pages/Products";
// // // // import AddProduct from "../pages/AddProduct";
// // // // import Customers from "../pages/Customers";
// // // // import CustomerDetails from "../pages/CustomerDetails";
// // // // import Invoice from "../pages/Invoice";
// // // // import Reports from "../pages/Reports";
// // // // import ComingSoon from "../pages/ComingSoon";
// // // // import Settings from "../pages/Settings";   
// // // // import Staff from "../pages/Staff"; 
// // // // import Returns from "../pages/Returns";
// // // // import Suppliers from "../pages/Suppliers";
// // // // import Expenses from "../pages/Expenses";
// // // // import Offers from "../pages/Offers";
// // // // import Sales from "../pages/Sales";
// // // // import Forecast from "../pages/Forecast";
// // // // import Orders from "../pages/Orders";
// // // // import SetupWizard from "../pages/SetupWizard";
// // // // import Inventory from "../pages/Inventory";
// // // // import Invoices from "../pages/Invoices";
// // // // import CreateQuotation from "../pages/CreateQuotation";
// // // // import Quotations from "../pages/Quotations";
// // // // import QuotationDetail from "../pages/QuotationDetail";
// // // // import PublicInvoice from "../pages/PublicInvoice";
// // // // import CRM from "../pages/CRM";
// // // // import CreateExpense from '../pages/CreateExpense';
// // // // import CreateInvoice from "../pages/CreateInvoice";
// // // // import CreateCustomer from "../pages/CreateCustomer";
  
// // // // import MainLayout from "../layouts/MainLayout";
// // // // import ProtectedRoute from "../components/ProtectedRoute";//my addition

// // // // const AppRoutes = () => {
// // // //   return (
// // // //     <Routes>
// // // //       {/* Public */}

// // // //       <Route path="/" element={<Navigate to="/login" replace />} />
// // // //       <Route path="/login" element={<Login />} />
// // // //       <Route path="/signup" element={<Signup />} />

// // // //       {/* Protected Layout */}
// // // //       <Route element={<ProtectedRoute />}> {/* <-- Added ProtectedRoute wrapper */}
// // // //       <Route element={<MainLayout />}>
// // // //         <Route path="/dashboard" element={<Dashboard />} />
// // // //         <Route path="/billing" element={<Billing />} />
// // // //         {/* <Route path="/orders" element={<ComingSoon title="Orders" />} /> */}
// // // //         <Route path="/orders" element={<Orders />} />
// // // //         {/* <Route path="/sales" element={<ComingSoon title="Sales" />} /> */}
// // // //         <Route path="/sales" element={<Sales />} />
// // // //         <Route path="/products" element={<Products />} />
// // // //         <Route path="/products/new" element={<AddProduct />} />
// // // //         <Route path="/customers" element={<Customers />} />
// // // //         <Route path="/customers/:id" element={<CustomerDetails />} />
// // // //         {/* <Route path="/suppliers" element={<ComingSoon title="Suppliers" />} /> */}
// // // //         <Route path="/suppliers" element={<Suppliers />} />
// // // //         <Route path="/reports" element={<Reports />} />
// // // //         {/* <Route path="/expenses" element={<ComingSoon title="Expenses" />} /> */}
// // // //         <Route path="/expenses" element={<Expenses />} />
// // // //         {/* <Route path="/offers" element={<ComingSoon title="Offers" />} /> */}
// // // //         <Route path="/offers" element={<Offers />} />
// // // //         {/* <Route path="/returns" element={<ComingSoon title="Returns" />} /> */}
// // // //         <Route path="/returns" element={<Returns />} />
// // // //         {/* <Route path="/staff" element={<ComingSoon title="Staff" />} /> */}
// // // //         <Route path="/staff" element={<Staff />} />
// // // //         {/* <Route path="/settings" element={<ComingSoon title="Settings" />} /> */}
// // // //         <Route path="/settings" element={<Settings />} /> {/* <-- Updated route */}
// // // //         {/* <Route path="/forecast" element={<ComingSoon title="Forecast & Insights" />} /> */}
// // // //         <Route path="/forecast" element={<Forecast />} />
// // // //         <Route path="/invoice/:id" element={<Invoice />} />
// // // //         <Route path="/setup-wizard" element={<SetupWizard />} />
// // // //         <Route path="/inventory" element={<Inventory />} />
// // // //         <Route path="/invoices" element={<Invoices />} />
// // // //         <Route path="/quotations/new" element={<CreateQuotation />} />
// // // //         <Route path="/quotations" element={<Quotations />} />
// // // //         <Route path="/quotation/:id" element={<QuotationDetail />} />
// // // //         <Route path="/p/invoice/:token" element={<PublicInvoice />} />
// // // //         <Route path="/crm" element={<CRM />} />
// // // //         <Route path="/create-expense" element={<CreateExpense />} />
// // // //         <Route path="/create-invoice" element={<CreateInvoice />} />
// // // //         <Route path="/customers/new" element={<CreateCustomer />} />
// // // //         <Route path="/" element={<LandingPage />} />
// // // //       </Route>
// // // //     </Route>
// // // //   </Routes>
// // // //   );
// // // // };

// // // // export default AppRoutes;

// // // import { Navigate, Route, Routes } from "react-router-dom";

// // // import Login from "../pages/Login";
// // // import Signup from "../pages/Signup";
// // // import LandingPage from "../pages/LandingPage";

// // // import Dashboard from "../pages/Dashboard";
// // // import Billing from "../pages/Billing";
// // // import Products from "../pages/Products";
// // // import AddProduct from "../pages/AddProduct";
// // // import Customers from "../pages/Customers";
// // // import CustomerDetails from "../pages/CustomerDetails";
// // // import Invoice from "../pages/Invoice";
// // // import Reports from "../pages/Reports";
// // // import ComingSoon from "../pages/ComingSoon";
// // // import Settings from "../pages/Settings";   
// // // import Staff from "../pages/Staff"; 
// // // import Returns from "../pages/Returns";
// // // import Suppliers from "../pages/Suppliers";
// // // import Expenses from "../pages/Expenses";
// // // import Offers from "../pages/Offers";
// // // import Sales from "../pages/Sales";
// // // import Forecast from "../pages/Forecast";
// // // import Orders from "../pages/Orders";
// // // import SetupWizard from "../pages/SetupWizard";
// // // import Inventory from "../pages/Inventory";
// // // import Invoices from "../pages/Invoices";
// // // import CreateQuotation from "../pages/CreateQuotation";
// // // import Quotations from "../pages/Quotations";
// // // import QuotationDetail from "../pages/QuotationDetail";
// // // import PublicInvoice from "../pages/PublicInvoice";
// // // import CRM from "../pages/CRM";
// // // import CreateExpense from '../pages/CreateExpense';
// // // import CreateInvoice from "../pages/CreateInvoice";
// // // import CreateCustomer from "../pages/CreateCustomer";
// // // import SuperadminDashboard from "../pages/SuperadminDashboard";
// // // import Subscription from "../pages/Subscription";
// // // import HQRouter from '../pages/hq/HQRouter';
// // // import StaffManager from '../pages/StaffManager';
  
// // // import MainLayout from "../layouts/MainLayout";
// // // import ProtectedRoute from "../components/ProtectedRoute";

// // // const AppRoutes = () => {
// // //   return (
// // //     <Routes>
// // //       {/* --- PUBLIC ROUTES --- */}
// // //       {/* 1. Landing Page opens at root */}
// // //       <Route path="/" element={<LandingPage />} />
      
// // //       {/* 2. Auth Routes */}
// // //       <Route path="/login" element={<Login />} />
// // //       <Route path="/signup" element={<Signup />} />

// // //       {/* 3. Public Invoice Link (Clients do not need to log in to pay) */}
// // //       <Route path="/p/invoice/:token" element={<PublicInvoice />} />

// // //       {/* --- PROTECTED SAAS ROUTES --- */}
// // //       <Route element={<ProtectedRoute />}>
// // //         <Route element={<MainLayout />}>
// // //           <Route path="/dashboard" element={<Dashboard />} />
// // //           <Route path="/billing" element={<Billing />} />
// // //           <Route path="/orders" element={<Orders />} />
// // //           <Route path="/sales" element={<Sales />} />
// // //           <Route path="/products" element={<Products />} />
// // //           <Route path="/products/new" element={<AddProduct />} />
// // //           <Route path="/customers" element={<Customers />} />
// // //           <Route path="/customers/:id" element={<CustomerDetails />} />
// // //           <Route path="/suppliers" element={<Suppliers />} />
// // //           <Route path="/reports" element={<Reports />} />
// // //           <Route path="/expenses" element={<Expenses />} />
// // //           <Route path="/offers" element={<Offers />} />
// // //           <Route path="/returns" element={<Returns />} />
// // //           <Route path="/staff" element={<Staff />} />
// // //           <Route path="/settings" element={<Settings />} /> 
// // //           <Route path="/forecast" element={<Forecast />} />
// // //           <Route path="/invoice/:id" element={<Invoice />} />
// // //           <Route path="/setup-wizard" element={<SetupWizard />} />
// // //           <Route path="/inventory" element={<Inventory />} />
// // //           <Route path="/invoices" element={<Invoices />} />
// // //           <Route path="/quotations/new" element={<CreateQuotation />} />
// // //           <Route path="/quotations" element={<Quotations />} />
// // //           <Route path="/quotation/:id" element={<QuotationDetail />} />
// // //           <Route path="/crm" element={<CRM />} />
// // //           <Route path="/create-expense" element={<CreateExpense />} />
// // //           <Route path="/create-invoice" element={<CreateInvoice />} />
// // //           <Route path="/customers/new" element={<CreateCustomer />} />
// // //           <Route path="/hq/dashboard" element={<SuperadminDashboard />} />
// // //           <Route path="/subscription" element={<Subscription />} />
// // //           {/* --- Internal SaaS Staff Portal --- */}
// // //                   {/* This wildcard route catches any URL starting with /hq and passes it to your role guard */}
// // //                   <Route path="/hq/*" element={<HQRouter />} />
                  
// // //                   <Route path="/unauthorized" element={
// // //                     <div className="min-h-screen flex items-center justify-center bg-gray-50 text-red-600 font-bold">
// // //                       403 - Unauthorized Access
// // //                     </div>
// // //                   } />
                
// // //           {/* <Route path="/hq/dashboard" element={<SuperadminDashboard/>}/>  */}
// // //         </Route>
// // //       </Route>
      
// // //       {/* Fallback for undefined routes */}
// // //       <Route path="*" element={<Navigate to="/" replace />} />
// // //     </Routes>
// // //   );
// // // };

// // // export default AppRoutes;

// // import { Navigate, Route, Routes, Outlet } from "react-router-dom";

// // import Login from "../pages/Login";
// // import Signup from "../pages/Signup";
// // import LandingPage from "../pages/LandingPage";

// // import Dashboard from "../pages/Dashboard";
// // import Billing from "../pages/Billing";
// // import Products from "../pages/Products";
// // import AddProduct from "../pages/AddProduct";
// // import Customers from "../pages/Customers";
// // import CustomerDetails from "../pages/CustomerDetails";
// // import Invoice from "../pages/Invoice";
// // import Reports from "../pages/Reports";
// // import ComingSoon from "../pages/ComingSoon";
// // import Settings from "../pages/Settings";   
// // import Staff from "../pages/Staff"; 
// // import Returns from "../pages/Returns";
// // import Suppliers from "../pages/Suppliers";
// // import Expenses from "../pages/Expenses";
// // import Offers from "../pages/Offers";
// // import Sales from "../pages/Sales";
// // import Forecast from "../pages/Forecast";
// // import Orders from "../pages/Orders";
// // import SetupWizard from "../pages/SetupWizard";
// // import Inventory from "../pages/Inventory";
// // import Invoices from "../pages/Invoices";
// // import CreateQuotation from "../pages/CreateQuotation";
// // import Quotations from "../pages/Quotations";
// // import QuotationDetail from "../pages/QuotationDetail";
// // import PublicInvoice from "../pages/PublicInvoice";
// // import CRM from "../pages/CRM";
// // import CreateExpense from '../pages/CreateExpense';
// // import CreateInvoice from "../pages/CreateInvoice";
// // import CreateCustomer from "../pages/CreateCustomer";
// // import SuperadminDashboard from "../pages/SuperadminDashboard";
// // import Subscription from "../pages/Subscription";
// // import HQRouter from '../pages/hq/HQRouter';
// // import StaffManager from '../pages/StaffManager';
// // import ITDashboard from "../pages/hq/ITDashboard";
  
// // import MainLayout from "../layouts/MainLayout";
// // import ProtectedRoute from "../components/ProtectedRoute";
// // import Sidebar from "../components/Sidebar";
// // import SearchResults from "../pages/SearchResults";
// // import ChatbotWidget from "../pages/ChatBotWidget";
// // import TrialGuard from "../components/TrialGuard";
// // import TierGuard from "../components/TierGuard";



// // const AppRoutes = () => {
// //   return (
// //     <>
// //     <Routes>
// //       {/* --- PUBLIC ROUTES --- */}
// //       <Route path="/" element={<LandingPage />} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/signup" element={<Signup />} />
// //       <Route path="/p/invoice/:token" element={<PublicInvoice />} />

// //       {/* --- SUPERADMIN / HQ ROUTES (Isolated from Store MainLayout) --- */}
// //       <Route element={<ProtectedRoute />}>
// //       <Route path="/hq/support" element={<ITDashboard />} />
// //         <Route path="/hq/dashboard" element={<SuperadminDashboard />} />
// //         <Route path="/hq/staff" element={<StaffManager />} />
// //         <Route path="/hq/*" element={<HQRouter />} />
// //       </Route>

// //       {/* --- STANDARD STORE TENANT ROUTES --- */}
// //       {/* --- STANDARD STORE TENANT ROUTES --- */}
// // <Route element={<ProtectedRoute />}>
// //   <Route element={<TrialGuard><MainLayout /></TrialGuard>}>
// //     {/* Basic Tier Routes (Open to all) */}
// //     <Route path="/dashboard" element={<Dashboard />} />
// //     <Route path="/billing" element={<Billing />} />
// //     <Route path="/invoices" element={<Invoices />} />
// //     <Route path="/invoice/:id" element={<Invoice />} />
// //     <Route path="/create-invoice" element={<CreateInvoice />} />
// //     <Route path="/customers" element={<Customers />} />
// //     <Route path="/customers/new" element={<CreateCustomer />} />
// //     <Route path="/customers/:id" element={<CustomerDetails />} />
// //     <Route path="/reports" element={<Reports />} />
// //     <Route path="/returns" element={<Returns />} />
// //     <Route path="/settings" element={<Settings />} />
// //     <Route path="/subscription" element={<Subscription />} />

// //     {/* Growth Tier Routes (Quotations & Inventory) */}
// //     <Route path="/inventory" element={<TierGuard requiredTier="GROWTH"><Inventory /></TierGuard>} />
// //     <Route path="/products" element={<TierGuard requiredTier="GROWTH"><Products /></TierGuard>} />
// //     <Route path="/products/new" element={<TierGuard requiredTier="GROWTH"><AddProduct /></TierGuard>} />
// //     <Route path="/quotations" element={<TierGuard requiredTier="GROWTH"><Quotations /></TierGuard>} />
// //     <Route path="/quotations/new" element={<TierGuard requiredTier="GROWTH"><CreateQuotation /></TierGuard>} />
// //     <Route path="/quotation/:id" element={<TierGuard requiredTier="GROWTH"><QuotationDetail /></TierGuard>} />

// //     {/* Enterprise Tier Routes (Expenses & Forecasts) */}
// //     <Route path="/expenses" element={<TierGuard requiredTier="ENTERPRISE"><Expenses /></TierGuard>} />
// //     <Route path="/create-expense" element={<TierGuard requiredTier="ENTERPRISE"><CreateExpense /></TierGuard>} />
// //     <Route path="/forecast" element={<TierGuard requiredTier="ENTERPRISE"><Forecast /></TierGuard>} />
// //   </Route>
// // </Route>

// //       {/* --- UTILITY ROUTES --- */}
// //       <Route path="/unauthorized" element={
// //         <div className="min-h-screen flex items-center justify-center bg-gray-50 text-red-600 font-bold">
// //           403 - Unauthorized Access
// //         </div>
// //       } />
      
// //       {/* Fallback for undefined routes */}
// //       <Route path="*" element={<Navigate to="/" replace />} />
// //     </Routes>
      
// //     <ChatbotWidget />
// //     </>
// //   );
// // };

// // export default AppRoutes;

// import { Navigate, Route, Routes } from "react-router-dom";

// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import LandingPage from "../pages/LandingPage";

// import DashboardRouter from "../pages/DashboardRouter";
// import Billing from "../pages/Billing";
// import Products from "../pages/Products";
// import AddProduct from "../pages/AddProduct";
// import Customers from "../pages/Customers";
// import CustomerDetails from "../pages/CustomerDetails";
// import Invoice from "../pages/Invoice";
// import Reports from "../pages/Reports";
// import ComingSoon from "../pages/ComingSoon";
// import Settings from "../pages/Settings";   
// import Staff from "../pages/Staff"; 
// import Returns from "../pages/Returns";
// import Suppliers from "../pages/Suppliers";
// import Expenses from "../pages/Expenses";
// import Offers from "../pages/Offers";
// import Sales from "../pages/Sales";
// import Forecast from "../pages/Forecast";
// import Orders from "../pages/Orders";
// import SetupWizard from "../pages/SetupWizard";
// import Inventory from "../pages/Inventory";
// import Invoices from "../pages/Invoices";
// import CreateQuotation from "../pages/CreateQuotation";
// import Quotations from "../pages/Quotations";
// import QuotationDetail from "../pages/QuotationDetail";
// import PublicInvoice from "../pages/PublicInvoice";
// import CRM from "../pages/CRM";
// import CreateExpense from '../pages/CreateExpense';
// import CreateInvoice from "../pages/CreateInvoice";
// import CreateCustomer from "../pages/CreateCustomer";
// import SuperadminDashboard from "../pages/SuperadminDashboard";
// import Subscription from "../pages/Subscription";
// import HQRouter from '../pages/hq/HQRouter';
// import StaffManager from '../pages/StaffManager';
// import ITDashboard from "../pages/hq/ITDashboard";

// import MainLayout from "../layouts/MainLayout";
// import ProtectedRoute from "../components/ProtectedRoute";
// import SearchResults from "../pages/SearchResults";
// import CaseDocuments from "../pages/CaseDocuments";

// // Import Global Features
// import ChatbotWidget from "../pages/ChatbotWidget";
// import TrialGuard from "../components/TrialGuard";
// import TierGuard from "../components/TierGuard";
// import HelpWidget from "../components/HelpWidget";

// const AppRoutes = () => {
//   return (
//     <>
//       <Routes>
//         {/* --- PUBLIC ROUTES --- */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/p/invoice/:token" element={<PublicInvoice />} />

//         {/* --- SUPERADMIN / HQ ROUTES (Isolated from Store MainLayout) --- */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/hq/support" element={<ITDashboard />} />
//           <Route path="/hq/dashboard" element={<SuperadminDashboard />} />
//           <Route path="/hq/staff" element={<StaffManager />} />
//           <Route path="/hq/*" element={<HQRouter />} />
//         </Route>

//         {/* --- STANDARD STORE TENANT ROUTES --- */}
//         <Route element={<ProtectedRoute />}>
//           <Route element={<TrialGuard><MainLayout /></TrialGuard>}>

//             <Route path="/quotations/:id/edit" element= {<CreateQuotation/>} />
            
//             {/* --- BASIC TIER ROUTES (Open to all) --- */}
//             <Route path="/dashboard" element={<DashboardRouter/>} />
//             <Route path="/billing" element={<Billing />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/sales" element={<Sales />} />
//             <Route path="/customers" element={<Customers />} />
//             <Route path="/customers/new" element={<CreateCustomer />} />
//             <Route path="/customers/:id" element={<CustomerDetails />} />
//             <Route path="/suppliers" element={<Suppliers />} />
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/offers" element={<Offers />} />
//             <Route path="/returns" element={<Returns />} />
//             <Route path="/settings" element={<Settings />} /> 
//             <Route path="/invoices" element={<Invoices />} />
//             <Route path="/invoice/:id" element={<Invoice />} />
//             <Route path="/create-invoice" element={<CreateInvoice />} />
//             <Route path="/setup-wizard" element={<SetupWizard />} />
//             <Route path="/crm" element={<CRM />} />
//             <Route path="/subscription" element={<Subscription />} />
//             <Route path="/search" element={<SearchResults />} />
//             {/* Inside your Routes block: */}
// <Route path="/documents" element={
//   <ProtectedRoute>
//     <CaseDocuments />
//   </ProtectedRoute>
// } />

            
//             {/* --- GROWTH TIER ROUTES --- */}
//             <Route path="/products" element={<TierGuard requiredTier="GROWTH"><Products /></TierGuard>} />
//             <Route path="/products/new" element={<TierGuard requiredTier="GROWTH"><AddProduct /></TierGuard>} />
//             <Route path="/inventory" element={<TierGuard requiredTier="GROWTH"><Inventory /></TierGuard>} />
//             <Route path="/quotations" element={<TierGuard requiredTier="GROWTH"><Quotations /></TierGuard>} />
//             <Route path="/quotations/new" element={<TierGuard requiredTier="GROWTH"><CreateQuotation /></TierGuard>} />
//             <Route path="/quotation/:id" element={<TierGuard requiredTier="GROWTH"><QuotationDetail /></TierGuard>} />
//             <Route path="/staff" element={<TierGuard requiredTier="GROWTH"><Staff /></TierGuard>} />

//             {/* --- ENTERPRISE TIER ROUTES --- */}
//             <Route path="/expenses" element={<TierGuard requiredTier="ENTERPRISE"><Expenses /></TierGuard>} />
//             <Route path="/create-expense" element={<TierGuard requiredTier="ENTERPRISE"><CreateExpense /></TierGuard>} />
//             <Route path="/forecast" element={<TierGuard requiredTier="ENTERPRISE"><Forecast /></TierGuard>} />

//           </Route>
//         </Route>

//         {/* --- UTILITY ROUTES --- */}
//         <Route path="/unauthorized" element={
//           <div className="min-h-screen flex items-center justify-center bg-gray-50 text-red-600 font-bold">
//             403 - Unauthorized Access
//           </div>
//         } />
//         <Route path="/coming-soon" element={<ComingSoon />} />
        

//         {/* Fallback for undefined routes */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       {/* --- GLOBAL CHATBOT --- */}
//       <HelpWidget />
//     </>
//   );
// };

// export default AppRoutes;
//all good till here

import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import LandingPage from "../pages/LandingPage";

import DashboardRouter from "../pages/DashboardRouter";
import Billing from "../pages/Billing";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import Customers from "../pages/Customers";
import CustomerDetails from "../pages/CustomerDetails";
import Invoice from "../pages/Invoice";
import Reports from "../pages/Reports";
import ComingSoon from "../pages/ComingSoon";
import Settings from "../pages/Settings";   
import Staff from "../pages/Staff"; 
import Returns from "../pages/Returns";
import Suppliers from "../pages/Suppliers";
import Expenses from "../pages/Expenses";
import Offers from "../pages/Offers";
import Sales from "../pages/Sales";
import Forecast from "../pages/Forecast";
import Orders from "../pages/Orders";
import SetupWizard from "../pages/SetupWizard";
import Inventory from "../pages/Inventory";
import Invoices from "../pages/Invoices";
import CreateQuotation from "../pages/CreateQuotation";
import Quotations from "../pages/Quotations";
import QuotationDetail from "../pages/QuotationDetail";
import PublicInvoice from "../pages/PublicInvoice";
import CRM from "../pages/CRM";
import CreateExpense from '../pages/CreateExpense';
import CreateInvoice from "../pages/CreateInvoice";
import CreateCustomer from "../pages/CreateCustomer";
import SuperadminDashboard from "../pages/SuperadminDashboard";
import Subscription from "../pages/Subscription";
import HQRouter from '../pages/hq/HQRouter';
import StaffManager from '../pages/StaffManager';
import ITDashboard from "../pages/hq/ITDashboard";
import SearchResults from "../pages/SearchResults";
import CaseDocuments from "../pages/CaseDocuments"; // Legal Vertical
import IndustryFeatureHub from "../pages/IndustryFeatureHub";
import ProductionFeatureRouter from "./ProductionFeatureRouter";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

// Import Global Features
import HelpWidget from "../components/HelpWidget";
import TrialGuard from "../components/TrialGuard";
import TierGuard from "../components/TierGuard";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* --- PUBLIC ROUTES --- */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/p/invoice/:token" element={<PublicInvoice />} />

        {/* --- SUPERADMIN / HQ ROUTES (Isolated from Store MainLayout) --- */}
        <Route element={<ProtectedRoute />}>
          <Route path="/hq/support" element={<ITDashboard />} />
          <Route path="/hq/dashboard" element={<SuperadminDashboard />} />
          <Route path="/hq/staff" element={<StaffManager />} />
          <Route path="/hq/*" element={<HQRouter />} />
        </Route>

        {/* --- STANDARD STORE TENANT ROUTES --- */}
        <Route element={<ProtectedRoute />}>
          <Route element={<TrialGuard><MainLayout /></TrialGuard>}>
            
            {/* Dynamic Dashboard Engine */}
            <Route path="/dashboard" element={<DashboardRouter />} />
            {/* --- ADD THESE TWO NEW ROUTES --- */}
      {/* This catches clicks from the sidebar to specific features */}
      {/* <Route path="/features/:featureId" element={<IndustryFeatureHub />} /> */}
      {/* Fallback if they just go to /features */}
      {/* <Route path="/features" element={<IndustryFeatureHub />} /> */}
      <Route path="/features/*" element={<ProductionFeatureRouter />} />
            
            {/* --- SHARED CORE MODULES (Basic Tier) --- */}
            <Route path="/billing" element={<Billing />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/new" element={<CreateCustomer />} />
            <Route path="/customers/:id" element={<CustomerDetails />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/settings" element={<Settings />} /> 
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/create-invoice" element={<CreateInvoice />} />
            <Route path="/setup-wizard" element={<SetupWizard />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/quotations/:id/edit" element={<CreateQuotation />} />

            {/* --- VERTICAL-SPECIFIC MODULES --- */}
            {/* These are mounted globally. The Sidebar config ensures only the right industries see the links. */}
            <Route path="/documents" element={<CaseDocuments />} />

            {/* --- SCALED CAPABILITIES (Growth Tier) --- */}
            <Route path="/products" element={<TierGuard requiredTier="GROWTH"><Products /></TierGuard>} />
            <Route path="/products/new" element={<TierGuard requiredTier="GROWTH"><AddProduct /></TierGuard>} />
            <Route path="/inventory" element={<TierGuard requiredTier="GROWTH"><Inventory /></TierGuard>} />
            <Route path="/quotations" element={<TierGuard requiredTier="GROWTH"><Quotations /></TierGuard>} />
            <Route path="/quotations/new" element={<TierGuard requiredTier="GROWTH"><CreateQuotation /></TierGuard>} />
            <Route path="/quotation/:id" element={<TierGuard requiredTier="GROWTH"><QuotationDetail /></TierGuard>} />
            <Route path="/staff" element={<TierGuard requiredTier="GROWTH"><Staff /></TierGuard>} />

            {/* --- ADVANCED ERP (Enterprise Tier) --- */}
            <Route path="/expenses" element={<TierGuard requiredTier="ENTERPRISE"><Expenses /></TierGuard>} />
            <Route path="/create-expense" element={<TierGuard requiredTier="ENTERPRISE"><CreateExpense /></TierGuard>} />
            <Route path="/forecast" element={<TierGuard requiredTier="ENTERPRISE"><Forecast /></TierGuard>} />

          </Route>
        </Route>

        {/* --- UTILITY ROUTES --- */}
        <Route path="/unauthorized" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50 text-red-600 font-bold">
            403 - Unauthorized Access
          </div>
        } />
        <Route path="/coming-soon" element={<ComingSoon />} />
        
        {/* Fallback for undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* --- GLOBAL IT SUPPORT WIDGET --- */}
      <HelpWidget />
    </>
  );
};

export default AppRoutes;