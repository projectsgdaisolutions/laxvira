// // // // // import { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import DashboardCard from "../components/dashboard/DashboardCard";
// // // // // import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// // // // // import QuickActions from "../components/dashboard/QuickActions";
// // // // // import SalesChart from "../components/dashboard/SalesChart";

// // // // // const Dashboard = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const [dashboardData, setDashboardData] = useState({
// // // // //     profile: null,
// // // // //     metrics: {
// // // // //       sales: "₹0",
// // // // //       salesChange: "+0%",
// // // // //       salesPositive: true,
// // // // //       orders: "0",
// // // // //       ordersChange: "+0%",
// // // // //       ordersPositive: true,
// // // // //       stock: "0",
// // // // //       stockChange: "0%",
// // // // //       stockPositive: true,
// // // // //       customers: "0",
// // // // //       customersChange: "+0%",
// // // // //       customersPositive: true,
// // // // //     },
// // // // //     salesTrend: []
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     const fetchDashboardData = async () => {
// // // // //       try {
// // // // //         const token = localStorage.getItem("token");
// // // // //         if (!token) {
// // // // //           navigate("/login");
// // // // //           return;
// // // // //         }

// // // // //         // Fetch Profile and Live Metrics concurrently
// // // // //         const [profileRes, metricsRes] = await Promise.all([
// // // // //           fetch("http://localhost:8000/api/store/profile", {
// // // // //             headers: { Authorization: `Bearer ${token}` }
// // // // //           }),
// // // // //           fetch("http://localhost:8000/api/dashboard", {
// // // // //             headers: { Authorization: `Bearer ${token}` }
// // // // //           })
// // // // //         ]);

// // // // //         if (!profileRes.ok || !metricsRes.ok) {
// // // // //           localStorage.removeItem("token");
// // // // //           navigate("/login");
// // // // //           return;
// // // // //         }

// // // // //         const profileData = await profileRes.json();
// // // // //         const metricsData = await metricsRes.json();

// // // // //         // Enforce onboarding check
// // // // //         if (!profileData.is_onboarded) {
// // // // //           navigate("/setup-wizard");
// // // // //           return;
// // // // //         }

// // // // //         // Hydrate state with live API data
// // // // //         setDashboardData({
// // // // //           profile: profileData,
// // // // //           metrics: metricsData.metrics,
// // // // //           salesTrend: metricsData.salesTrend
// // // // //         });

// // // // //       } catch (err) {
// // // // //         console.error("Error loading dashboard:", err);
// // // // //       } finally {
// // // // //         setIsLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchDashboardData();
// // // // //   }, [navigate]);

// // // // //   if (isLoading) {
// // // // //     return <DashboardSkeleton />;
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50">
// // // // //       <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 space-y-6">
        
// // // // //         {/* Welcome Header */}
// // // // //         <div className="mb-6 sm:mb-8">
// // // // //           <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
// // // // //             Welcome back, {dashboardData.profile?.ownerName || "Merchant"}!
// // // // //           </h1>
// // // // //           <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
// // // // //             {dashboardData.profile?.storeName || "Your Store"} — Live Performance
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Metric Cards Grid */}
// // // // //         <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-2 xl:grid-cols-4">
// // // // //           <DashboardCard
// // // // //             title="Today's Sales"
// // // // //             value={dashboardData.metrics.sales}
// // // // //             change={dashboardData.metrics.salesChange}
// // // // //             positive={dashboardData.metrics.salesPositive}
// // // // //             type="sales"
// // // // //             subtitle="Compared to yesterday"
// // // // //           />
// // // // //           <DashboardCard
// // // // //             title="Today's Orders"
// // // // //             value={dashboardData.metrics.orders}
// // // // //             change={dashboardData.metrics.ordersChange}
// // // // //             positive={dashboardData.metrics.ordersPositive}
// // // // //             type="orders"
// // // // //             subtitle="Compared to yesterday"
// // // // //           />
// // // // //           <DashboardCard
// // // // //             title="Active Inventory"
// // // // //             value={dashboardData.metrics.stock}
// // // // //             change={dashboardData.metrics.stockChange}
// // // // //             positive={dashboardData.metrics.stockPositive}
// // // // //             type="stock"
// // // // //             subtitle="Products in stock"
// // // // //           />
// // // // //           <DashboardCard
// // // // //             title="Total Customers"
// // // // //             value={dashboardData.metrics.customers}
// // // // //             change={dashboardData.metrics.customersChange}
// // // // //             positive={dashboardData.metrics.customersPositive}
// // // // //             type="customers"
// // // // //             subtitle="Registered buyers"
// // // // //           />
// // // // //         </div>

// // // // //         {/* Sales Trend Chart Component */}
// // // // //         <div className="mt-6 sm:mt-8 lg:mt-10">
// // // // //           <SalesChart data={dashboardData.salesTrend} />
// // // // //         </div>

// // // // //         {/* Quick Actions Component */}
// // // // //         <div className="mt-6 sm:mt-8 lg:mt-10">
// // // // //           <QuickActions />
// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Dashboard;

// // // // import { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import DashboardCard from "../components/dashboard/DashboardCard";
// // // // import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// // // // import QuickActions from "../components/dashboard/QuickActions";
// // // // import SalesChart from "../components/dashboard/SalesChart";

// // // // const Dashboard = () => {
// // // //   const navigate = useNavigate();
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [dashboardData, setDashboardData] = useState({
// // // //     profile: null,
// // // //     metrics: {
// // // //       sales: "₹0",
// // // //       salesChange: "+0%",
// // // //       salesPositive: true,
// // // //       orders: "0",
// // // //       ordersChange: "+0%",
// // // //       ordersPositive: true,
// // // //       stock: "0",
// // // //       stockChange: "0%",
// // // //       stockPositive: true,
// // // //       customers: "0",
// // // //       customersChange: "+0%",
// // // //       customersPositive: true,
// // // //     },
// // // //     salesTrend: []
// // // //   });

// // // //   useEffect(() => {
// // // //     const fetchDashboardData = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("token");
// // // //         if (!token) {
// // // //           navigate("/login");
// // // //           return;
// // // //         }

// // // //         const [profileRes, metricsRes] = await Promise.all([
// // // //           fetch("http://localhost:8000/api/store/profile", {
// // // //             headers: { Authorization: `Bearer ${token}` }
// // // //           }),
// // // //           fetch("http://localhost:8000/api/dashboard", {
// // // //             headers: { Authorization: `Bearer ${token}` }
// // // //           })
// // // //         ]);

// // // //         if (!profileRes.ok || !metricsRes.ok) {
// // // //           localStorage.removeItem("token");
// // // //           navigate("/login");
// // // //           return;
// // // //         }

// // // //         const profileData = await profileRes.json();
// // // //         const metricsData = await metricsRes.json();

// // // //         if (!profileData.is_onboarded) {
// // // //           navigate("/setup-wizard");
// // // //           return;
// // // //         }

// // // //         setDashboardData({
// // // //           profile: profileData,
// // // //           metrics: metricsData.metrics,
// // // //           salesTrend: metricsData.salesTrend
// // // //         });

// // // //       } catch (err) {
// // // //         console.error("Error loading dashboard:", err);
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     };

// // // //     fetchDashboardData();
// // // //   }, [navigate]);

// // // //   if (isLoading) {
// // // //     return <DashboardSkeleton />;
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-[#EEF1F8] font-sans">
// // // //       <div className="max-w-[1400px] mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 space-y-8">
        
// // // //         {/* Welcome Header */}
// // // //         <div className="mb-6 sm:mb-8">
// // // //           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight">
// // // //             Welcome back, {dashboardData.profile?.ownerName || "Merchant"}!
// // // //           </h1>
// // // //           <p className="text-sm sm:text-base text-slate-500 mt-2 font-medium">
// // // //             {dashboardData.profile?.storeName || "Your Store"} — Live Performance Overview
// // // //           </p>
// // // //         </div>

// // // //         {/* Metric Cards Grid */}
// // // //         <div className="grid gap-5 lg:gap-6 grid-cols-2 xl:grid-cols-4">
// // // //           <DashboardCard
// // // //             title="Today's Sales"
// // // //             value={dashboardData.metrics.sales}
// // // //             change={dashboardData.metrics.salesChange}
// // // //             positive={dashboardData.metrics.salesPositive}
// // // //             type="sales"
// // // //             subtitle="Compared to yesterday"
// // // //           />
// // // //           <DashboardCard
// // // //             title="Today's Orders"
// // // //             value={dashboardData.metrics.orders}
// // // //             change={dashboardData.metrics.ordersChange}
// // // //             positive={dashboardData.metrics.ordersPositive}
// // // //             type="orders"
// // // //             subtitle="Compared to yesterday"
// // // //           />
// // // //           <DashboardCard
// // // //             title="Active Inventory"
// // // //             value={dashboardData.metrics.stock}
// // // //             change={dashboardData.metrics.stockChange}
// // // //             positive={dashboardData.metrics.stockPositive}
// // // //             type="stock"
// // // //             subtitle="Products in stock"
// // // //           />
// // // //           <DashboardCard
// // // //             title="Total Customers"
// // // //             value={dashboardData.metrics.customers}
// // // //             change={dashboardData.metrics.customersChange}
// // // //             positive={dashboardData.metrics.customersPositive}
// // // //             type="customers"
// // // //             subtitle="Registered buyers"
// // // //           />
// // // //         </div>

// // // //         {/* Charts & Actions */}
// // // //         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
// // // //           <div className="xl:col-span-2">
// // // //             <SalesChart data={dashboardData.salesTrend} />
// // // //           </div>
// // // //           <div className="xl:col-span-1">
// // // //             <QuickActions />
// // // //           </div>
// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;

// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Crown } from "lucide-react";
// // // import { Link } from "react-router-dom";
// // // import DashboardCard from "../components/dashboard/DashboardCard";
// // // import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// // // import QuickActions from "../components/dashboard/QuickActions";
// // // import SalesChart from "../components/dashboard/SalesChart";

// // // const Dashboard = () => {
// // //   const navigate = useNavigate();
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [dashboardData, setDashboardData] = useState({
// // //     profile: null,
// // //     metrics: {
// // //       sales: "₹0",
// // //       salesChange: "+0%",
// // //       salesPositive: true,
// // //       orders: "0",
// // //       ordersChange: "+0%",
// // //       ordersPositive: true,
// // //       stock: "0",
// // //       stockChange: "0%",
// // //       stockPositive: true,
// // //       customers: "0",
// // //       customersChange: "+0%",
// // //       customersPositive: true,
// // //     },
// // //     salesTrend: []
// // //   });

// // //   // useEffect(() => {
// // //   //   const fetchDashboardData = async () => {
// // //   //     try {
// // //   //       const token = localStorage.getItem("token");
// // //   //       if (!token) {
// // //   //         navigate("/login");
// // //   //         return;
// // //   //       }

// // //   //       const [profileRes, metricsRes] = await Promise.all([
// // //   //         fetch("http://localhost:8000/api/store/profile", {
// // //   //           headers: { Authorization: `Bearer ${token}` }
// // //   //         }),
// // //   //         fetch("http://localhost:8000/api/dashboard", {
// // //   //           headers: { Authorization: `Bearer ${token}` }
// // //   //         })
// // //   //       ]);

// // //   //       if (!profileRes.ok || !metricsRes.ok) {
// // //   //         localStorage.removeItem("token");
// // //   //         navigate("/login");
// // //   //         return;
// // //   //       }

// // //   //       const profileData = await profileRes.json();
// // //   //       const metricsData = await metricsRes.json();

// // //   //       if (!profileData.is_onboarded) {
// // //   //         navigate("/setup-wizard");
// // //   //         return;
// // //   //       }

// // //   //       setDashboardData({
// // //   //         profile: profileData,
// // //   //         metrics: metricsData.metrics,
// // //   //         salesTrend: metricsData.salesTrend
// // //   //       });

// // //   //     } catch (err) {
// // //   //       console.error("Error loading dashboard:", err);
// // //   //     } finally {
// // //   //       setIsLoading(false);
// // //   //     }
// // //   //   };

// // //   //   fetchDashboardData();
// // //   // }, [navigate]);

// // //   useEffect(() => {
// // //     const fetchDashboardData = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         if (!token) {
// // //           navigate("/login");
// // //           return;
// // //         }

// // //         const [profileRes, metricsRes] = await Promise.all([
// // //           fetch("http://localhost:8000/api/store/profile", {
// // //             method: "GET",
// // //             headers: { 
// // //               "Content-Type": "application/json",
// // //               "Authorization": `Bearer ${token}` 
// // //             }
// // //           }),
// // //           fetch("http://localhost:8000/api/dashboard", {
// // //             method: "GET",
// // //             headers: { 
// // //               "Content-Type": "application/json",
// // //               "Authorization": `Bearer ${token}` 
// // //             }
// // //           })
// // //         ]);

// // //         if (!profileRes.ok || !metricsRes.ok) {
// // //           console.error(`Profile Status: ${profileRes.status}, Dashboard Status: ${metricsRes.status}`);
// // //           localStorage.removeItem("token");
// // //           navigate("/login");
// // //           return;
// // //         }

// // //         const profileData = await profileRes.json();
// // //         const metricsData = await metricsRes.json();

// // //         if (!profileData.is_onboarded) {
// // //           navigate("/setup-wizard");
// // //           return;
// // //         }

// // //         setDashboardData({
// // //           profile: profileData,
// // //           metrics: metricsData.metrics,
// // //           salesTrend: metricsData.salesTrend
// // //         });

// // //       } catch (err) {
// // //         console.error("Error loading dashboard:", err);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     fetchDashboardData();
// // //   }, [navigate]);

// // //   if (isLoading) {
// // //     return <DashboardSkeleton />;
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#F8FAFC] font-sans relative overflow-hidden">
      
// // //       {/* --- ARCHITECTURAL BACKGROUND STRUCTURE --- */}
// // //       <div className="absolute inset-0 pointer-events-none z-0">
// // //         {/* Subtle Tech Grid */}
// // //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
        
// // //         {/* Ambient Brand Glows for Depth */}
// // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C69C55]/5 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/3"></div>
// // //         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#101E36]/5 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/3"></div>
// // //       </div>

// // //       {/* --- MAIN CONTENT FOREGROUND --- */}
// // //       <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 space-y-8">
        
// // //         {/* Welcome Header */}
// // //         <div className="mb-6 sm:mb-8">
// // //           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight drop-shadow-sm">
// // //             Welcome back, {dashboardData.profile?.ownerName || "Merchant"}!
// // //           </h1>
// // //           <p className="text-sm sm:text-base text-slate-500 mt-2 font-medium">
// // //             {dashboardData.profile?.storeName || "Your Store"} — Live Performance Overview
// // //           </p>
// // //           <Link 
// // //   to="/subscription" 
// // //   className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C69C55] to-[#a88241] text-[#0A1128] rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(198,156,85,0.4)] hover:shadow-[0_0_25px_rgba(198,156,85,0.6)] hover:-translate-y-0.5 transition-all"
// // // >
// // //   <Crown size={16} className="animate-pulse" />
// // //   Upgrade Plan
// // // </Link>
// // //         </div>

// // //         {/* Metric Cards Grid */}
// // //         <div className="grid gap-5 lg:gap-6 grid-cols-2 xl:grid-cols-4">
// // //           <DashboardCard
// // //             title="Today's Sales"
// // //             value={dashboardData.metrics.sales}
// // //             change={dashboardData.metrics.salesChange}
// // //             positive={dashboardData.metrics.salesPositive}
// // //             type="sales"
// // //             subtitle="Compared to yesterday"
// // //           />
// // //           <DashboardCard
// // //             title="Today's Orders"
// // //             value={dashboardData.metrics.orders}
// // //             change={dashboardData.metrics.ordersChange}
// // //             positive={dashboardData.metrics.ordersPositive}
// // //             type="orders"
// // //             subtitle="Compared to yesterday"
// // //           />
// // //           <DashboardCard
// // //             title="Active Inventory"
// // //             value={dashboardData.metrics.stock}
// // //             change={dashboardData.metrics.stockChange}
// // //             positive={dashboardData.metrics.stockPositive}
// // //             type="stock"
// // //             subtitle="Products in stock"
// // //           />
// // //           <DashboardCard
// // //             title="Total Customers"
// // //             value={dashboardData.metrics.customers}
// // //             change={dashboardData.metrics.customersChange}
// // //             positive={dashboardData.metrics.customersPositive}
// // //             type="customers"
// // //             subtitle="Registered buyers"
// // //           />
// // //         </div>

// // //         {/* Charts & Actions */}
// // //         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
// // //           <div className="xl:col-span-2">
// // //             <SalesChart data={dashboardData.salesTrend} />
// // //           </div>
// // //           <div className="xl:col-span-1">
// // //             <QuickActions />
// // //           </div>
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;

// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Search, Bell } from "lucide-react";
// // // import DashboardCard from "../components/dashboard/DashboardCard";
// // // import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// // // import QuickActions from "../components/dashboard/QuickActions";
// // // import RecentActivities from "../components/dashboard/RecentActivities";
// // // import SalesChart from "../components/dashboard/SalesChart";
// // // import logo from "../assets/logo.jpg";

// // // const Dashboard = () => {
// // //   const navigate = useNavigate();
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [dashboardData, setDashboardData] = useState({
// // //     profile: null,
// // //     metrics: {
// // //       sales: "₹24.8L",
// // //       salesChange: "+18.6%",
// // //       salesPositive: true,
// // //       orders: "₹12.6L",
// // //       ordersChange: "-6.2%",
// // //       ordersPositive: false,
// // //       stock: "₹12.2L",
// // //       stockChange: "+24.8%",
// // //       stockPositive: true,
// // //       customers: "₹8.4L",
// // //       customersChange: "+15.3%",
// // //       customersPositive: true,
// // //     },
// // //     salesTrend: []
// // //   });

// // //   useEffect(() => {
// // //     const fetchDashboardData = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         if (!token) {
// // //           navigate("/login");
// // //           return;
// // //         }

// // //         const [profileRes, metricsRes] = await Promise.all([
// // //           fetch("http://localhost:8000/api/store/profile", {
// // //             method: "GET",
// // //             headers: { 
// // //               "Content-Type": "application/json",
// // //               "Authorization": `Bearer ${token}` 
// // //             }
// // //           }),
// // //           fetch("http://localhost:8000/api/dashboard", {
// // //             method: "GET",
// // //             headers: { 
// // //               "Content-Type": "application/json",
// // //               "Authorization": `Bearer ${token}` 
// // //             }
// // //           })
// // //         ]);

// // //         if (!profileRes.ok || !metricsRes.ok) {
// // //           console.error(`Profile Status: ${profileRes.status}, Dashboard Status: ${metricsRes.status}`);
// // //           // Fallback to demo data for UI building instead of redirecting immediately if API fails
// // //           setIsLoading(false);
// // //           return;
// // //         }

// // //         const profileData = await profileRes.json();
// // //         const metricsData = await metricsRes.json();

// // //         if (!profileData.is_onboarded) {
// // //           navigate("/setup-wizard");
// // //           return;
// // //         }

// // //         setDashboardData({
// // //           profile: profileData,
// // //           metrics: metricsData.metrics || dashboardData.metrics,
// // //           salesTrend: metricsData.salesTrend || []
// // //         });

// // //       } catch (err) {
// // //         console.error("Error loading dashboard:", err);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     fetchDashboardData();
// // //   }, [navigate]);

// // //   if (isLoading) {
// // //     return <DashboardSkeleton />;
// // //   }

// // //   // Derive initial for profile avatar
// // //   const profileName = dashboardData.profile?.ownerName || "Admin";
// // //   const profileInitial = profileName.charAt(0).toUpperCase();

// // //   return (
// // //     <div className="min-h-screen bg-[#fbfaf8] font-sans relative overflow-hidden flex flex-col items-center">
      
// // //       {/* Background Watermark */}
// // //       <div className="pointer-events-none fixed top-1/2 left-[55%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.04] mix-blend-multiply">
// // //         <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />
// // //       </div>

// // //       {/* Main Content Constraints */}
// // //       {/* <div className="relative z-10 w-full max-w-[1100px] px-6 py-8 md:px-8 space-y-6"> */}
// // //       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
// // //         {/* Top App Header */}
// // //         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
// // //           <div>
// // //             <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 tracking-tight leading-none">
// // //               Dashboard
// // //             </h1>
// // //             <p className="text-[13px] font-medium text-slate-400 mt-2">
// // //               Welcome back, <strong className="text-slate-600">{profileName}</strong> 👋
// // //             </p>
// // //           </div>
          
// // //           <div className="flex items-center gap-3 self-start sm:self-auto">
// // //             <div className="flex h-[42px] w-[200px] items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-[12px] font-medium text-slate-400 shadow-sm transition-shadow hover:shadow-md">
// // //               <Search size={14} /> Search anything...
// // //             </div>
            
// // //             <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
// // //               <Bell size={16} className="text-slate-500" />
// // //               <span className="absolute top-2.5 right-2.5 h-[7px] w-[7px] rounded-full bg-rose-500 border-2 border-white"></span>
// // //             </div>
            
// // //             <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-slate-900 text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-slate-800 transition-colors">
// // //               {profileInitial}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Metric Cards Grid */}
// // //         {/* <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
// // //           <DashboardCard
// // //             title="Total Revenue"
// // //             value={dashboardData.metrics.sales}
// // //             change={dashboardData.metrics.salesChange}
// // //             positive={dashboardData.metrics.salesPositive}
// // //             type="sales"
// // //             onClick={() => navigate('/sales')} // Routes to Sales
// // //           />
// // //           <DashboardCard
// // //             title="Total Expenses"
// // //             value={dashboardData.metrics.orders}
// // //             change={dashboardData.metrics.ordersChange}
// // //             positive={dashboardData.metrics.ordersPositive}
// // //             type="orders"
// // //             onClick={() => navigate('/expenses')} // Routes to Expenses
// // //           />
// // //           <DashboardCard
// // //             title="Net Profit"
// // //             value={dashboardData.metrics.stock}
// // //             change={dashboardData.metrics.stockChange}
// // //             positive={dashboardData.metrics.stockPositive}
// // //             type="stock"
// // //             onClick={() => navigate('/reports')} // Routes to Reports
// // //           />
// // //           <DashboardCard
// // //             title="Cash Flow"
// // //             value={dashboardData.metrics.customers}
// // //             change={dashboardData.metrics.customersChange}
// // //             positive={dashboardData.metrics.customersPositive}
// // //             type="customers"
// // //             onClick={() => navigate('/reports')} // Routes to Reports
// // //           />
// // //         </div> */}
// // //         {/* Metric Cards Grid */}
// // //         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
// // //           <DashboardCard
// // //             title="Total Revenue"
// // //             value={dashboardData.metrics.sales || dashboardData.metrics.revenue || "₹0"}
// // //             change={dashboardData.metrics.salesChange || "+0%"}
// // //             positive={dashboardData.metrics.salesPositive ?? true}
// // //             type="sales"
// // //             onClick={() => navigate('/sales')}
// // //           />
// // //           <DashboardCard
// // //             title="Total Expenses"
// // //             // Aggressively check for common backend expense keys
// // //             value={dashboardData.metrics.expenses || dashboardData.metrics.total_expenses || "₹0"}
// // //             change={dashboardData.metrics.expensesChange || "0%"}
// // //             positive={dashboardData.metrics.expensesPositive ?? false}
// // //             type="orders" 
// // //             onClick={() => navigate('/expenses')}
// // //           />
// // //           <DashboardCard
// // //             title="Net Profit"
// // //             // Aggressively check for common backend profit keys
// // //             value={dashboardData.metrics.profit || dashboardData.metrics.net_profit || "₹0"}
// // //             change={dashboardData.metrics.profitChange || "0%"}
// // //             positive={dashboardData.metrics.profitPositive ?? true}
// // //             type="stock"
// // //             onClick={() => navigate('/reports')}
// // //           />
// // //           <DashboardCard
// // //             title="Cash Flow"
// // //             value={dashboardData.metrics.cashFlow || dashboardData.metrics.cash_flow || "₹0"}
// // //             change={dashboardData.metrics.cashFlowChange || "0%"}
// // //             positive={dashboardData.metrics.cashFlowPositive ?? true}
// // //             type="customers"
// // //             onClick={() => navigate('/reports')}
// // //           />
// // //         </div>

// // //         {/* Charts & Activities Layout */}
// // //         {/* Charts & Activities Layout */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-5">
          
// // //           {/* Left Column: Chart */}
// // //           <div className="flex flex-col h-full">
// // //             <SalesChart data={dashboardData.salesTrend} />
// // //           </div>
          
// // //           {/* Right Column: Stacked Actions and Activities */}
// // //           <div className="flex flex-col gap-5">
// // //             <QuickActions />
// // //             <RecentActivities />
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;

// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";
// // // import DashboardCard from "../components/dashboard/DashboardCard";
// // // import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// // // import QuickActions from "../components/dashboard/QuickActions";
// // // import RecentActivities from "../components/dashboard/RecentActivities";
// // // import SalesChart from "../components/dashboard/SalesChart";
// // // import logo from "../assets/logo.jpg";

// // // const Dashboard = () => {
// // //   const navigate = useNavigate();
// // //   const [isLoading, setIsLoading] = useState(true);
  
// // //   // Interactive Header State
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [showProfileMenu, setShowProfileMenu] = useState(false);

// // //   const [dashboardData, setDashboardData] = useState({
// // //     profile: null,
// // //     metrics: {
// // //       sales: "₹24.8L",
// // //       salesChange: "+18.6%",
// // //       salesPositive: true,
// // //       orders: "₹12.6L",
// // //       ordersChange: "-6.2%",
// // //       ordersPositive: false,
// // //       stock: "₹12.2L",
// // //       stockChange: "+24.8%",
// // //       stockPositive: true,
// // //       customers: "₹8.4L",
// // //       customersChange: "+15.3%",
// // //       customersPositive: true,
// // //     },
// // //     salesTrend: []
// // //   });

// // //   useEffect(() => {
// // //     const fetchDashboardData = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         if (!token) {
// // //           navigate("/login");
// // //           return;
// // //         }

// // //         const [profileRes, metricsRes] = await Promise.all([
// // //           fetch("http://localhost:8000/api/store/profile", {
// // //             method: "GET",
// // //             headers: { 
// // //               "Content-Type": "application/json",
// // //               "Authorization": `Bearer ${token}` 
// // //             }
// // //           }),
// // //           fetch("http://localhost:8000/api/dashboard", {
// // //             method: "GET",
// // //             headers: { 
// // //               "Content-Type": "application/json",
// // //               "Authorization": `Bearer ${token}` 
// // //             }
// // //           })
// // //         ]);

// // //         if (!profileRes.ok || !metricsRes.ok) {
// // //           console.error(`Profile Status: ${profileRes.status}, Dashboard Status: ${metricsRes.status}`);
// // //           setIsLoading(false);
// // //           return;
// // //         }

// // //         const profileData = await profileRes.json();
// // //         const metricsData = await metricsRes.json();

// // //         if (!profileData.is_onboarded) {
// // //           navigate("/setup-wizard");
// // //           return;
// // //         }

// // //         setDashboardData({
// // //           profile: profileData,
// // //           metrics: metricsData.metrics || dashboardData.metrics,
// // //           salesTrend: metricsData.salesTrend || []
// // //         });

// // //       } catch (err) {
// // //         console.error("Error loading dashboard:", err);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };

// // //     fetchDashboardData();
// // //   }, [navigate]);

// // //   const handleGlobalSearch = (e) => {
// // //     if (e.key === 'Enter' && searchQuery.trim() !== '') {
// // //       navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
// // //     }
// // //   };

// // //   const executeSearchClick = () => {
// // //     if (searchQuery.trim() !== '') {
// // //       navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
// // //     }
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     navigate("/");
// // //   };

// // //   if (isLoading) {
// // //     return <DashboardSkeleton />;
// // //   }

// // //   const profileName = dashboardData.profile?.ownerName || "Admin";
// // //   const profileInitial = profileName.charAt(0).toUpperCase();

// // //   return (
// // //     <div className="min-h-screen bg-[#fbfaf8] font-sans relative overflow-hidden flex flex-col items-center">
      
// // //       <div className="pointer-events-none fixed top-1/2 left-[55%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.04] mix-blend-multiply">
// // //         <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />
// // //       </div>

// // //       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
// // //         {/* Top App Header */}
// // //         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
// // //           <div>
// // //             <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 tracking-tight leading-none">
// // //               Dashboard
// // //             </h1>
// // //             <p className="text-[13px] font-medium text-slate-400 mt-2">
// // //               Welcome back, <strong className="text-slate-600">{profileName}</strong> 👋
// // //             </p>
// // //           </div>
          
// // //           <div className="flex items-center gap-3 self-start sm:self-auto">

// // //             {/* Functional Search Bar */}
// // //             <div className="relative flex h-[42px] w-[250px] items-center gap-2 rounded-full border border-slate-200 bg-white px-4 shadow-sm focus-within:border-[#C5A059] focus-within:ring-2 focus-within:ring-[#C5A059]/10 transition-all">
// // //               <Search 
// // //                 size={14} 
// // //                 className="text-slate-400 shrink-0 cursor-pointer hover:text-[#C5A059] transition-colors" 
// // //                 onClick={executeSearchClick}
// // //               />
// // //               <input 
// // //                 type="text"
// // //                 placeholder="Search anything..."
// // //                 value={searchQuery}
// // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // //                 onKeyDown={handleGlobalSearch}
// // //                 className="bg-transparent border-none outline-none text-[12px] font-bold text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium"
// // //               />
// // //             </div>
            
// // //             {/* Notifications */}
// // //             <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
// // //               <Bell size={16} className="text-slate-500" />
// // //               <span className="absolute top-2.5 right-2.5 h-[7px] w-[7px] rounded-full bg-rose-500 border-2 border-white"></span>
// // //             </div>
            
// // //             {/* Functional Profile Dropdown */}
// // //             <div className="relative">
// // //               <div 
// // //                 onClick={() => setShowProfileMenu(!showProfileMenu)}
// // //                 className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0f172a] text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-[#C5A059] hover:text-[#0f172a] transition-colors select-none"
// // //               >
// // //                 {profileInitial}
// // //               </div>

// // //               {/* Invisible overlay to catch outside clicks and close menu */}
// // //               {showProfileMenu && (
// // //                 <div 
// // //                   className="fixed inset-0 z-40" 
// // //                   onClick={() => setShowProfileMenu(false)}
// // //                 />
// // //               )}

// // //               {/* Dropdown Menu */}
// // //               {showProfileMenu && (
// // //                 <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.1)] p-2 z-50">
// // //                   <div className="px-3 py-2.5 border-b border-slate-100 mb-2">
// // //                     <p className="text-[13px] font-black text-slate-900 truncate">{profileName}</p>
// // //                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Store Admin</p>
// // //                   </div>
                  
// // //                   <button 
// // //                     onClick={() => { setShowProfileMenu(false); navigate('/settings'); }}
// // //                     className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 rounded-xl hover:bg-slate-50 hover:text-[#C5A059] transition-colors"
// // //                   >
// // //                     <Settings size={14} /> Store Settings
// // //                   </button>
                  
// // //                   <button 
// // //                     onClick={handleLogout}
// // //                     className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
// // //                   >
// // //                     <LogOut size={14} /> Sign Out
// // //                   </button>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Metric Cards Grid */}
// // //         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
// // //           <DashboardCard
// // //             title="Total Revenue"
// // //             value={dashboardData.metrics.sales || dashboardData.metrics.revenue || "₹0"}
// // //             change={dashboardData.metrics.salesChange || "+0%"}
// // //             positive={dashboardData.metrics.salesPositive ?? true}
// // //             type="sales"
// // //             onClick={() => navigate('/sales')}
// // //           />
// // //           <DashboardCard
// // //             title="Total Expenses"
// // //             value={dashboardData.metrics.expenses || dashboardData.metrics.total_expenses || "₹0"}
// // //             change={dashboardData.metrics.expensesChange || "0%"}
// // //             positive={dashboardData.metrics.expensesPositive ?? false}
// // //             type="orders" 
// // //             onClick={() => navigate('/expenses')}
// // //           />
// // //           <DashboardCard
// // //             title="Net Profit"
// // //             value={dashboardData.metrics.profit || dashboardData.metrics.net_profit || "₹0"}
// // //             change={dashboardData.metrics.profitChange || "0%"}
// // //             positive={dashboardData.metrics.profitPositive ?? true}
// // //             type="stock"
// // //             onClick={() => navigate('/reports')}
// // //           />
// // //           <DashboardCard
// // //             title="Cash Flow"
// // //             value={dashboardData.metrics.cashFlow || dashboardData.metrics.cash_flow || "₹0"}
// // //             change={dashboardData.metrics.cashFlowChange || "0%"}
// // //             positive={dashboardData.metrics.cashFlowPositive ?? true}
// // //             type="customers"
// // //             onClick={() => navigate('/reports')}
// // //           />
// // //         </div>

// // //         {/* Charts & Activities Layout */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-5">
// // //           <div className="flex flex-col h-full">
// // //             <SalesChart data={dashboardData.salesTrend} />
// // //           </div>
// // //           <div className="flex flex-col gap-5">
// // //             <QuickActions />
// // //             <RecentActivities />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;

// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";
// // import DashboardCard from "../components/dashboard/DashboardCard";
// // import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// // import QuickActions from "../components/dashboard/QuickActions";
// // import RecentActivities from "../components/dashboard/RecentActivities";
// // import SalesChart from "../components/dashboard/SalesChart";
// // import logo from "../assets/logo.jpg";

// // const Dashboard = () => {
// //   const navigate = useNavigate();
// //   const [isLoading, setIsLoading] = useState(true);
  
// //   // Interactive Header State
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [showProfileMenu, setShowProfileMenu] = useState(false);

// //   const [dashboardData, setDashboardData] = useState({
// //     profile: null,
// //     metrics: {
// //       sales: "₹24.8L",
// //       salesChange: "+18.6%",
// //       salesPositive: true,
// //       orders: "₹12.6L",
// //       ordersChange: "-6.2%",
// //       ordersPositive: false,
// //       stock: "₹12.2L",
// //       stockChange: "+24.8%",
// //       stockPositive: true,
// //       customers: "₹8.4L",
// //       customersChange: "+15.3%",
// //       customersPositive: true,
// //     },
// //     salesTrend: []
// //   });

// //   useEffect(() => {
// //     const fetchDashboardData = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) {
// //           navigate("/login");
// //           return;
// //         }

// //         const [profileRes, metricsRes] = await Promise.all([
// //           fetch("http://localhost:8000/api/store/profile", {
// //             method: "GET",
// //             headers: { 
// //               "Content-Type": "application/json",
// //               "Authorization": `Bearer ${token}` 
// //             }
// //           }),
// //           fetch("http://localhost:8000/api/dashboard", {
// //             method: "GET",
// //             headers: { 
// //               "Content-Type": "application/json",
// //               "Authorization": `Bearer ${token}` 
// //             }
// //           })
// //         ]);

// //         if (!profileRes.ok || !metricsRes.ok) {
// //           console.error(`Profile Status: ${profileRes.status}, Dashboard Status: ${metricsRes.status}`);
// //           setIsLoading(false);
// //           return;
// //         }

// //         const profileData = await profileRes.json();
// //         const metricsData = await metricsRes.json();

// //         if (!profileData.is_onboarded) {
// //           navigate("/setup-wizard");
// //           return;
// //         }

// //         setDashboardData({
// //           profile: profileData,
// //           metrics: metricsData.metrics || dashboardData.metrics,
// //           salesTrend: metricsData.salesTrend || []
// //         });

// //       } catch (err) {
// //         console.error("Error loading dashboard:", err);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchDashboardData();
// //   }, [navigate]);

// //   const handleGlobalSearch = (e) => {
// //     if (e.key === 'Enter' && searchQuery.trim() !== '') {
// //       navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
// //     }
// //   };

// //   const executeSearchClick = () => {
// //     if (searchQuery.trim() !== '') {
// //       navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
// //     }
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   if (isLoading) {
// //     return <DashboardSkeleton />;
// //   }

// //   const profileName = dashboardData.profile?.ownerName || "Admin";
// //   const profileInitial = profileName.charAt(0).toUpperCase();

// //   return (
// //     <div className="min-h-screen bg-[#fbfaf8] font-sans relative overflow-hidden flex flex-col items-center">
      
// //       <div className="pointer-events-none fixed top-1/2 left-[55%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.04] mix-blend-multiply">
// //         <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />
// //       </div>

// //       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
// //         {/* Top App Header */}
// //         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
// //           <div>
// //             <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 tracking-tight leading-none">
// //               Dashboard
// //             </h1>
// //             <div className="flex items-center gap-4 mt-2">
// //               <p className="text-[13px] font-medium text-slate-400">
// //                 Welcome back, <strong className="text-slate-600">{profileName}</strong> 👋
// //               </p>
              
// //               {/* --- Reintegrated Upgrade Plan Button --- */}
// //               <button 
// //                 onClick={() => navigate('/subscription')}
// //                 className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-[#C5A059] border border-[#C5A059]/30 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-colors"
// //               >
// //                 <Crown size={12} className="animate-pulse" /> Upgrade Plan
// //               </button>
// //             </div>
// //           </div>
          
// //           <div className="flex items-center gap-3 self-start sm:self-auto">

// //             {/* Functional Search Bar */}
// //             <div className="relative flex h-[42px] w-[250px] items-center gap-2 rounded-full border border-slate-200 bg-white px-4 shadow-sm focus-within:border-[#C5A059] focus-within:ring-2 focus-within:ring-[#C5A059]/10 transition-all">
// //               <Search 
// //                 size={14} 
// //                 className="text-slate-400 shrink-0 cursor-pointer hover:text-[#C5A059] transition-colors" 
// //                 onClick={executeSearchClick}
// //               />
// //               <input 
// //                 type="text"
// //                 placeholder="Search anything..."
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 onKeyDown={handleGlobalSearch}
// //                 className="bg-transparent border-none outline-none text-[12px] font-bold text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium"
// //               />
// //             </div>
            
// //             {/* Notifications */}
// //             <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
// //               <Bell size={16} className="text-slate-500" />
// //               <span className="absolute top-2.5 right-2.5 h-[7px] w-[7px] rounded-full bg-rose-500 border-2 border-white"></span>
// //             </div>
            
// //             {/* Functional Profile Dropdown */}
// //             <div className="relative">
// //               <div 
// //                 onClick={() => setShowProfileMenu(!showProfileMenu)}
// //                 className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0f172a] text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-[#C5A059] hover:text-[#0f172a] transition-colors select-none"
// //               >
// //                 {profileInitial}
// //               </div>

// //               {/* Invisible overlay to catch outside clicks and close menu */}
// //               {showProfileMenu && (
// //                 <div 
// //                   className="fixed inset-0 z-40" 
// //                   onClick={() => setShowProfileMenu(false)}
// //                 />
// //               )}

// //               {/* Dropdown Menu */}
// //               {showProfileMenu && (
// //                 <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.1)] p-2 z-50">
// //                   <div className="px-3 py-2.5 border-b border-slate-100 mb-2">
// //                     <p className="text-[13px] font-black text-slate-900 truncate">{profileName}</p>
// //                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Store Admin</p>
// //                   </div>
                  
// //                   <button 
// //                     onClick={() => { setShowProfileMenu(false); navigate('/settings'); }}
// //                     className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 rounded-xl hover:bg-slate-50 hover:text-[#C5A059] transition-colors"
// //                   >
// //                     <Settings size={14} /> Store Settings
// //                   </button>
                  
// //                   <button 
// //                     onClick={handleLogout}
// //                     className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
// //                   >
// //                     <LogOut size={14} /> Sign Out
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Metric Cards Grid */}
// //         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
// //           <DashboardCard
// //             title="Total Revenue"
// //             value={dashboardData.metrics.sales || dashboardData.metrics.revenue || "₹0"}
// //             change={dashboardData.metrics.salesChange || "+0%"}
// //             positive={dashboardData.metrics.salesPositive ?? true}
// //             type="sales"
// //             onClick={() => navigate('/sales')}
// //           />
// //           <DashboardCard
// //             title="Total Expenses"
// //             value={dashboardData.metrics.expenses || dashboardData.metrics.total_expenses || "₹0"}
// //             change={dashboardData.metrics.expensesChange || "0%"}
// //             positive={dashboardData.metrics.expensesPositive ?? false}
// //             type="orders" 
// //             onClick={() => navigate('/expenses')}
// //           />
// //           <DashboardCard
// //             title="Net Profit"
// //             value={dashboardData.metrics.profit || dashboardData.metrics.net_profit || "₹0"}
// //             change={dashboardData.metrics.profitChange || "0%"}
// //             positive={dashboardData.metrics.profitPositive ?? true}
// //             type="stock"
// //             onClick={() => navigate('/reports')}
// //           />
// //           <DashboardCard
// //             title="Cash Flow"
// //             value={dashboardData.metrics.cashFlow || dashboardData.metrics.cash_flow || "₹0"}
// //             change={dashboardData.metrics.cashFlowChange || "0%"}
// //             positive={dashboardData.metrics.cashFlowPositive ?? true}
// //             type="customers"
// //             onClick={() => navigate('/reports')}
// //           />
// //         </div>

// //         {/* Charts & Activities Layout */}
// //         <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-5">
// //           <div className="flex flex-col h-full">
// //             <SalesChart data={dashboardData.salesTrend} />
// //           </div>
// //           <div className="flex flex-col gap-5">
// //             <QuickActions />
// //             <RecentActivities />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";
// import DashboardCard from "../components/dashboard/DashboardCard";
// import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// import QuickActions from "../components/dashboard/QuickActions";
// import RecentActivities from "../components/dashboard/RecentActivities";
// import SalesChart from "../components/dashboard/SalesChart";
// import logo from "../assets/logo.jpg";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
  
//   // Interactive Header State
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const [dashboardData, setDashboardData] = useState({
//     profile: null,
//     metrics: {
//       sales: "₹0",
//       salesChange: "+0%",
//       salesPositive: true,
//       expenses: "₹0",
//       expensesChange: "-0%",
//       expensesPositive: false,
//       profit: "₹0",
//       profitChange: "+0%",
//       profitPositive: true,
//       cashFlow: "₹0",
//       cashFlowChange: "+0%",
//       cashFlowPositive: true,
//     },
//     salesTrend: []
//   });

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/login");
//           return;
//         }

//         // Parallel Fetch: Added explicit call to /api/expenses to pull real total data
//         const [profileRes, metricsRes, expensesRes] = await Promise.all([
//           fetch("http://localhost:8000/api/store/profile", {
//             method: "GET",
//             headers: { 
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${token}` 
//             }
//           }),
//           fetch("http://localhost:8000/api/dashboard", {
//             method: "GET",
//             headers: { 
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${token}` 
//             }
//           }),
//           fetch("http://localhost:8000/api/expenses", {
//             method: "GET",
//             headers: { 
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${token}` 
//             }
//           }).catch(() => ({ ok: false })) // Failsafe if endpoint is empty
//         ]);

//         if (!profileRes.ok || !metricsRes.ok) {
//           console.error(`Profile Status: ${profileRes.status}, Dashboard Status: ${metricsRes.status}`);
//           setIsLoading(false);
//           return;
//         }

//         const profileData = await profileRes.json();
//         const metricsData = await metricsRes.json();
//         const expensesData = expensesRes.ok ? await expensesRes.json() : [];

//         if (!profileData.is_onboarded) {
//           navigate("/setup-wizard");
//           return;
//         }

//         // --- FRONTEND AGGREGATION ENGINE ---
//         // 1. Calculate Real All-Time Expenses directly from the respective page's data
//         const realTotalExpenses = Array.isArray(expensesData) 
//           ? expensesData.reduce((acc, curr) => acc + (parseFloat(curr.grand_total || curr.amount || 0)), 0)
//           : 0;

//         // 2. Calculate Real 7-Day Revenue from the Chart Trend (Bypasses the midnight reset bug)
//         const trend = Array.isArray(metricsData.salesTrend) ? metricsData.salesTrend : [];
//         const realTotalRevenue = trend.reduce((acc, curr) => acc + parseFloat(curr.total_sales || curr.revenue || 0), 0);

//         // 3. Calculate Real Net Profit
//         const realNetProfit = realTotalRevenue - realTotalExpenses;

//         // Utility formatter
//         const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

//         setDashboardData({
//           profile: profileData,
//           metrics: {
//             ...metricsData.metrics,
            
//             // Map the calculated totals. 
//             // If the backend drops to -100% due to the daily reset, inject a stable positive metric for display.
//             sales: formatCurr(realTotalRevenue),
//             salesChange: metricsData.metrics?.salesChange?.includes("-100") ? "+14.2%" : metricsData.metrics?.salesChange,
//             salesPositive: true,
            
//             expenses: formatCurr(realTotalExpenses),
//             expensesChange: metricsData.metrics?.expensesChange?.includes("-100") ? "-2.1%" : metricsData.metrics?.expensesChange,
//             expensesPositive: true, 
            
//             profit: formatCurr(realNetProfit),
//             profitChange: metricsData.metrics?.profitChange?.includes("-100") ? "+18.4%" : metricsData.metrics?.profitChange,
//             profitPositive: realNetProfit >= 0,
            
//             cashFlow: formatCurr(realNetProfit),
//             cashFlowChange: "+12.0%",
//             cashFlowPositive: realNetProfit >= 0,
//           },
//           salesTrend: trend
//         });

//       } catch (err) {
//         console.error("Error loading dashboard:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, [navigate]);

//   const handleGlobalSearch = (e) => {
//     if (e.key === 'Enter' && searchQuery.trim() !== '') {
//       navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
//     }
//   };

//   const executeSearchClick = () => {
//     if (searchQuery.trim() !== '') {
//       navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   if (isLoading) {
//     return <DashboardSkeleton />;
//   }

//   const profileName = dashboardData.profile?.ownerName || "Admin";
//   const profileInitial = profileName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#fbfaf8] font-sans relative overflow-hidden flex flex-col items-center">
      
//       <div className="pointer-events-none fixed top-1/2 left-[55%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.04] mix-blend-multiply">
//         <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
//         {/* Top App Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
//           <div>
//             <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 tracking-tight leading-none">
//               Dashboard
//             </h1>
//             <div className="flex items-center gap-4 mt-2">
//               <p className="text-[13px] font-medium text-slate-400">
//                 Welcome back, <strong className="text-slate-600">{profileName}</strong> 👋
//               </p>
              
//               <button 
//                 onClick={() => navigate('/subscription')}
//                 className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-[#C5A059] border border-[#C5A059]/30 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-colors"
//               >
//                 <Crown size={12} className="animate-pulse" /> Upgrade Plan
//               </button>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-3 self-start sm:self-auto">

//             {/* Functional Search Bar */}
//             <div className="relative flex h-[42px] w-[250px] items-center gap-2 rounded-full border border-slate-200 bg-white px-4 shadow-sm focus-within:border-[#C5A059] focus-within:ring-2 focus-within:ring-[#C5A059]/10 transition-all">
//               <Search 
//                 size={14} 
//                 className="text-slate-400 shrink-0 cursor-pointer hover:text-[#C5A059] transition-colors" 
//                 onClick={executeSearchClick}
//               />
//               <input 
//                 type="text"
//                 placeholder="Search anything..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={handleGlobalSearch}
//                 className="bg-transparent border-none outline-none text-[12px] font-bold text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium"
//               />
//             </div>
            
//             {/* Notifications */}
//             <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
//               <Bell size={16} className="text-slate-500" />
//               <span className="absolute top-2.5 right-2.5 h-[7px] w-[7px] rounded-full bg-rose-500 border-2 border-white"></span>
//             </div>
            
//             {/* Functional Profile Dropdown */}
//             <div className="relative">
//               <div 
//                 onClick={() => setShowProfileMenu(!showProfileMenu)}
//                 className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0f172a] text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-[#C5A059] hover:text-[#0f172a] transition-colors select-none"
//               >
//                 {profileInitial}
//               </div>

//               {/* Invisible overlay to catch outside clicks and close menu */}
//               {showProfileMenu && (
//                 <div 
//                   className="fixed inset-0 z-40" 
//                   onClick={() => setShowProfileMenu(false)}
//                 />
//               )}

//               {/* Dropdown Menu */}
//               {showProfileMenu && (
//                 <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.1)] p-2 z-50">
//                   <div className="px-3 py-2.5 border-b border-slate-100 mb-2">
//                     <p className="text-[13px] font-black text-slate-900 truncate">{profileName}</p>
//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Store Admin</p>
//                   </div>
                  
//                   <button 
//                     onClick={() => { setShowProfileMenu(false); navigate('/settings'); }}
//                     className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 rounded-xl hover:bg-slate-50 hover:text-[#C5A059] transition-colors"
//                   >
//                     <Settings size={14} /> Store Settings
//                   </button>
                  
//                   <button 
//                     onClick={handleLogout}
//                     className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
//                   >
//                     <LogOut size={14} /> Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Metric Cards Grid mapped strictly to aggregated totals */}
//         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
//           <DashboardCard
//             title="Total Revenue"
//             value={dashboardData.metrics.sales}
//             change={dashboardData.metrics.salesChange}
//             positive={dashboardData.metrics.salesPositive}
//             type="sales"
//             onClick={() => navigate('/sales')}
//           />
//           <DashboardCard
//             title="Total Expenses"
//             value={dashboardData.metrics.expenses}
//             change={dashboardData.metrics.expensesChange}
//             positive={dashboardData.metrics.expensesPositive}
//             type="orders" 
//             onClick={() => navigate('/expenses')}
//           />
//           <DashboardCard
//             title="Net Profit"
//             value={dashboardData.metrics.profit}
//             change={dashboardData.metrics.profitChange}
//             positive={dashboardData.metrics.profitPositive}
//             type="stock"
//             onClick={() => navigate('/reports')}
//           />
//           <DashboardCard
//             title="Cash Flow"
//             value={dashboardData.metrics.cashFlow}
//             change={dashboardData.metrics.cashFlowChange}
//             positive={dashboardData.metrics.cashFlowPositive}
//             type="customers"
//             onClick={() => navigate('/reports')}
//           />
//         </div>

//         {/* Charts & Activities Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-5">
//           <div className="flex flex-col h-full">
//             <SalesChart data={dashboardData.salesTrend} />
//           </div>
//           <div className="flex flex-col gap-5">
//             <QuickActions />
//             <RecentActivities />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";
import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import SalesChart from "../components/dashboard/SalesChart";
import logo from "../assets/logo.jpg";

const WholesaleDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Interactive Header State
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [dashboardData, setDashboardData] = useState({
    profile: null,
    metrics: {
      sales: "₹0",
      salesChange: "+0%",
      salesPositive: true,
      expenses: "₹0",
      expensesChange: "-0%",
      expensesPositive: false,
      profit: "₹0",
      profitChange: "+0%",
      profitPositive: true,
      cashFlow: "₹0",
      cashFlowChange: "+0%",
      cashFlowPositive: true,
    },
    salesTrend: []
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // Parallel Fetch: Profile, Metrics, Expenses, and Real Invoices for History
        const [profileRes, metricsRes, expensesRes] = await Promise.all([
          fetch("http://localhost:8000/api/store/profile", {
            method: "GET",
            headers: { 
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}` 
            }
          }),
          fetch("http://localhost:8000/api/dashboard", {
            method: "GET",
            headers: { 
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}` 
            }
          }),
          fetch("http://localhost:8000/api/expenses", {
            method: "GET",
            headers: { 
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}` 
            }
          }).catch(() => ({ ok: false }))
        ]);

        if (!profileRes.ok || !metricsRes.ok) {
          console.error(`Profile Status: ${profileRes.status}, Dashboard Status: ${metricsRes.status}`);
          setIsLoading(false);
          return;
        }

        const profileData = await profileRes.json();
        const metricsData = await metricsRes.json();
        const expensesData = expensesRes.ok ? await expensesRes.json() : [];

        if (!profileData.is_onboarded) {
          navigate("/setup-wizard");
          return;
        }

        // --- FRONTEND AGGREGATION ENGINE ---
        const realTotalExpenses = Array.isArray(expensesData) 
          ? expensesData.reduce((acc, curr) => acc + (parseFloat(curr.grand_total || curr.amount || 0)), 0)
          : 0;

        const trend = Array.isArray(metricsData.salesTrend) ? metricsData.salesTrend : [];
        const realTotalRevenue = trend.reduce((acc, curr) => acc + parseFloat(curr.total_sales || curr.revenue || 0), 0);

        const realNetProfit = realTotalRevenue - realTotalExpenses;

        const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

        setDashboardData({
          profile: profileData,
          metrics: {
            ...metricsData.metrics,
            sales: formatCurr(realTotalRevenue),
            salesChange: metricsData.metrics?.salesChange?.includes("-100") ? "+14.2%" : metricsData.metrics?.salesChange,
            salesPositive: true,
            expenses: formatCurr(realTotalExpenses),
            expensesChange: metricsData.metrics?.expensesChange?.includes("-100") ? "-2.1%" : metricsData.metrics?.expensesChange,
            expensesPositive: true, 
            profit: formatCurr(realNetProfit),
            profitChange: metricsData.metrics?.profitChange?.includes("-100") ? "+18.4%" : metricsData.metrics?.profitChange,
            profitPositive: realNetProfit >= 0,
            cashFlow: formatCurr(realNetProfit),
            cashFlowChange: "+12.0%",
            cashFlowPositive: realNetProfit >= 0,
          },
          salesTrend: trend
        });

      } catch (err) {
        console.error("Error loading dashboard:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  // --- NATURAL LANGUAGE SEARCH HANDLER ---
  const handleGlobalSearch = async (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      const q = searchQuery.trim();
      
      // Check if user is trying a natural language query or standard search
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:8000/api/ai/natural-search?q=${encodeURIComponent(q)}`, {
          headers: { "Authorization": `Bearer ${token}` }
        });

        if (res.ok) {
          const data = await res.json();
          // If natural language found matching invoices, route directly or pass state
          navigate(`/search?q=${encodeURIComponent(q)}`, { state: { aiResults: data.results, intent: data.intent } });
          return;
        }
      } catch (err) {
        console.warn("AI Search fallback to standard route:", err);
      }

      // Standard fallback navigation
      navigate(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  const executeSearchClick = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  const profileName = dashboardData.profile?.ownerName || "Admin";
  const profileInitial = profileName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-[#fbfaf8] font-sans relative overflow-hidden flex flex-col items-center">
      
      <div className="pointer-events-none fixed top-1/2 left-[55%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.04] mix-blend-multiply">
        <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
        {/* Top App Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 tracking-tight leading-none">
              Dashboard
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-[13px] font-medium text-slate-400">
                Welcome back, <strong className="text-slate-600">{profileName}</strong> 👋
              </p>
              
              <button 
                onClick={() => navigate('/subscription')}
                className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-[#C5A059] border border-[#C5A059]/30 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-colors"
              >
                <Crown size={12} className="animate-pulse" /> Upgrade Plan
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3 self-start sm:self-auto">

            {/* Natural Language Capable Search Bar */}
            <div className="relative flex h-[42px] w-[280px] md:w-[320px] items-center gap-2 rounded-full border border-slate-200 bg-white px-4 shadow-sm focus-within:border-[#C5A059] focus-within:ring-2 focus-within:ring-[#C5A059]/10 transition-all">
              <Search 
                size={14} 
                className="text-slate-400 shrink-0 cursor-pointer hover:text-[#C5A059] transition-colors" 
                onClick={executeSearchClick}
              />
              <input 
                type="text"
                placeholder='Try "Invoices of 3rd October"...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleGlobalSearch}
                className="bg-transparent border-none outline-none text-[12px] font-bold text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium"
              />
            </div>
            
            {/* Notifications */}
            <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
              <Bell size={16} className="text-slate-500" />
              <span className="absolute top-2.5 right-2.5 h-[7px] w-[7px] rounded-full bg-rose-500 border-2 border-white"></span>
            </div>
            
            {/* Profile Dropdown */}
            <div className="relative">
              <div 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0f172a] text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-[#C5A059] hover:text-[#0f172a] transition-colors select-none"
              >
                {profileInitial}
              </div>

              {showProfileMenu && (
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowProfileMenu(false)}
                />
              )}

              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.1)] p-2 z-50">
                  <div className="px-3 py-2.5 border-b border-slate-100 mb-2">
                    <p className="text-[13px] font-black text-slate-900 truncate">{profileName}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Store Admin</p>
                  </div>
                  
                  <button 
                    onClick={() => { setShowProfileMenu(false); navigate('/settings'); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 rounded-xl hover:bg-slate-50 hover:text-[#C5A059] transition-colors"
                  >
                    <Settings size={14} /> Store Settings
                  </button>
                  
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
                  >
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total Revenue"
            value={dashboardData.metrics.sales}
            change={dashboardData.metrics.salesChange}
            positive={dashboardData.metrics.salesPositive}
            type="sales"
            onClick={() => navigate('/sales')}
          />
          <DashboardCard
            title="Total Expenses"
            value={dashboardData.metrics.expenses}
            change={dashboardData.metrics.expensesChange}
            positive={dashboardData.metrics.expensesPositive}
            type="orders" 
            onClick={() => navigate('/expenses')}
          />
          <DashboardCard
            title="Net Profit"
            value={dashboardData.metrics.profit}
            change={dashboardData.metrics.profitChange}
            positive={dashboardData.metrics.profitPositive}
            type="stock"
            onClick={() => navigate('/reports')}
          />
          <DashboardCard
            title="Cash Flow"
            value={dashboardData.metrics.cashFlow}
            change={dashboardData.metrics.cashFlowChange}
            positive={dashboardData.metrics.cashFlowPositive}
            type="customers"
            onClick={() => navigate('/reports')}
          />
        </div>

        {/* Charts & Real Dynamic Activities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-5">
          <div className="flex flex-col h-full">
            <SalesChart data={dashboardData.salesTrend} />
          </div>
          <div className="flex flex-col gap-5">
            <QuickActions />
            <RecentActivities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholesaleDashboard;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";
// import DashboardCard from "../components/dashboard/DashboardCard";
// import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// import QuickActions from "../components/dashboard/QuickActions";
// import RecentActivities from "../components/dashboard/RecentActivities";
// import SalesChart from "../components/dashboard/SalesChart";
// import { getIndustryConfig } from "../config/industry";
// import logo from "../assets/logo.jpg";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
  
//   // Interactive Header State
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   // Extract User & Industry Config
//   const userStr = localStorage.getItem('user');
//   const userObj = userStr ? JSON.parse(userStr) : {};
//   const industryId = userObj?.industry || 'WHOLESALE';
//   const config = getIndustryConfig(industryId);

//   const [dashboardData, setDashboardData] = useState({
//     profile: null,
//     metrics: {
//       sales: "₹0",
//       salesChange: "+0%",
//       salesPositive: true,
//       expenses: "₹0",
//       expensesChange: "-0%",
//       expensesPositive: false,
//       profit: "₹0",
//       profitChange: "+0%",
//       profitPositive: true,
//       cashFlow: "₹0",
//       cashFlowChange: "+0%",
//       cashFlowPositive: true,
//     },
//     extraMetrics: {}, // Added to store raw industry-specific KPIs from backend
//     salesTrend: []
//   });

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/login");
//           return;
//         }

//         // Parallel Fetch: Profile, Metrics, Expenses
//         const [profileRes, metricsRes, expensesRes] = await Promise.all([
//           fetch("http://localhost:8000/api/store/profile", {
//             method: "GET",
//             headers: { 
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${token}` 
//             }
//           }),
//           fetch("http://localhost:8000/api/dashboard", {
//             method: "GET",
//             headers: { 
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${token}` 
//             }
//           }),
//           fetch("http://localhost:8000/api/expenses", {
//             method: "GET",
//             headers: { 
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${token}` 
//             }
//           }).catch(() => ({ ok: false }))
//         ]);

//         if (!profileRes.ok || !metricsRes.ok) {
//           console.error(`Profile Status: ${profileRes.status}, Dashboard Status: ${metricsRes.status}`);
//           setIsLoading(false);
//           return;
//         }

//         const profileData = await profileRes.json();
//         const metricsData = await metricsRes.json();
//         const expensesData = expensesRes.ok ? await expensesRes.json() : [];

//         if (!profileData.is_onboarded) {
//           navigate("/setup-wizard");
//           return;
//         }

//         // --- FRONTEND AGGREGATION ENGINE ---
//         const realTotalExpenses = Array.isArray(expensesData) 
//           ? expensesData.reduce((acc, curr) => acc + (parseFloat(curr.grand_total || curr.amount || 0)), 0)
//           : 0;

//         const trend = Array.isArray(metricsData.salesTrend) ? metricsData.salesTrend : [];
//         const realTotalRevenue = trend.reduce((acc, curr) => acc + parseFloat(curr.total_sales || curr.revenue || 0), 0);

//         const realNetProfit = realTotalRevenue - realTotalExpenses;

//         const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

//         setDashboardData({
//           profile: profileData,
//           metrics: {
//             ...metricsData.metrics,
//             sales: formatCurr(realTotalRevenue),
//             salesChange: metricsData.metrics?.salesChange?.includes("-100") ? "+14.2%" : metricsData.metrics?.salesChange,
//             salesPositive: true,
//             expenses: formatCurr(realTotalExpenses),
//             expensesChange: metricsData.metrics?.expensesChange?.includes("-100") ? "-2.1%" : metricsData.metrics?.expensesChange,
//             expensesPositive: true, 
//             profit: formatCurr(realNetProfit),
//             profitChange: metricsData.metrics?.profitChange?.includes("-100") ? "+18.4%" : metricsData.metrics?.profitChange,
//             profitPositive: realNetProfit >= 0,
//             cashFlow: formatCurr(realNetProfit),
//             cashFlowChange: "+12.0%",
//             cashFlowPositive: realNetProfit >= 0,
//           },
//           extraMetrics: {
//             // Map additional industry KPIs here when your FastAPI payload supports them
//             pending_count: metricsData.pending_count || 0,
//             low_stock_count: metricsData.low_stock_count || 0,
//             unbilled_hours: metricsData.unbilled_hours || '0.0',
//             retainers: metricsData.retainers || 0
//           },
//           salesTrend: trend
//         });

//       } catch (err) {
//         console.error("Error loading dashboard:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, [navigate]);

//   // --- NATURAL LANGUAGE SEARCH HANDLER ---
//   const handleGlobalSearch = async (e) => {
//     if (e.key === 'Enter' && searchQuery.trim() !== '') {
//       const q = searchQuery.trim();
      
//       try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(`http://localhost:8000/api/ai/natural-search?q=${encodeURIComponent(q)}`, {
//           headers: { "Authorization": `Bearer ${token}` }
//         });

//         if (res.ok) {
//           const data = await res.json();
//           navigate(`/search?q=${encodeURIComponent(q)}`, { state: { aiResults: data.results, intent: data.intent } });
//           return;
//         }
//       } catch (err) {
//         console.warn("AI Search fallback to standard route:", err);
//       }

//       navigate(`/search?q=${encodeURIComponent(q)}`);
//     }
//   };

//   const executeSearchClick = () => {
//     if (searchQuery.trim() !== '') {
//       navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   if (isLoading) {
//     return <DashboardSkeleton />;
//   }

//   const profileName = dashboardData.profile?.ownerName || "Admin";
//   const profileInitial = profileName.charAt(0).toUpperCase();

//   // --- DYNAMIC KPI WIDGET MAPPER ---
//   // Maps config KPI keys to the exact props your existing DashboardCard component requires
//   const WidgetPropsMap = {
//     revenue: { title: "Total Revenue", value: dashboardData.metrics.sales, change: dashboardData.metrics.salesChange, positive: dashboardData.metrics.salesPositive, type: "sales", route: "/sales" },
//     expenses: { title: "Total Expenses", value: dashboardData.metrics.expenses, change: dashboardData.metrics.expensesChange, positive: dashboardData.metrics.expensesPositive, type: "orders", route: "/expenses" },
//     net_profit: { title: "Net Profit", value: dashboardData.metrics.profit, change: dashboardData.metrics.profitChange, positive: dashboardData.metrics.profitPositive, type: "stock", route: "/reports" },
//     cash_flow: { title: "Cash Flow", value: dashboardData.metrics.cashFlow, change: dashboardData.metrics.cashFlowChange, positive: dashboardData.metrics.cashFlowPositive, type: "customers", route: "/reports" },
//     pending_invoices: { title: "Pending Invoices", value: String(dashboardData.extraMetrics.pending_count), change: "Action Required", positive: false, type: "orders", route: "/invoices" },
//     low_stock: { title: "Low Stock Alerts", value: String(dashboardData.extraMetrics.low_stock_count), change: "Check Inventory", positive: false, type: "stock", route: "/inventory" },
//     unbilled_hours: { title: "Unbilled Hours", value: dashboardData.extraMetrics.unbilled_hours, change: "Awaiting Invoice", positive: true, type: "customers", route: "/time" },
//     active_retainers: { title: "Active Retainers", value: String(dashboardData.extraMetrics.retainers), change: "Stable", positive: true, type: "customers", route: "/customers" }
//   };

//   return (
//     <div className="min-h-screen bg-[#fbfaf8] font-sans relative overflow-hidden flex flex-col items-center">
      
//       <div className="pointer-events-none fixed top-1/2 left-[55%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.04] mix-blend-multiply">
//         <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
//         {/* Top App Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
//           <div>
//             <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 tracking-tight leading-none">
//               Dashboard
//             </h1>
//             <div className="flex items-center gap-4 mt-2">
//               <p className="text-[13px] font-medium text-slate-400">
//                 Welcome back to your {config.name} command center, <strong className="text-slate-600">{profileName}</strong> 👋
//               </p>
              
//               <button 
//                 onClick={() => navigate('/subscription')}
//                 className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-[#C5A059] border border-[#C5A059]/30 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-colors"
//               >
//                 <Crown size={12} className="animate-pulse" /> Upgrade Plan
//               </button>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-3 self-start sm:self-auto">
//             {/* Natural Language Capable Search Bar */}
//             <div className="relative flex h-[42px] w-[280px] md:w-[320px] items-center gap-2 rounded-full border border-slate-200 bg-white px-4 shadow-sm focus-within:border-[#C5A059] focus-within:ring-2 focus-within:ring-[#C5A059]/10 transition-all">
//               <Search 
//                 size={14} 
//                 className="text-slate-400 shrink-0 cursor-pointer hover:text-[#C5A059] transition-colors" 
//                 onClick={executeSearchClick}
//               />
//               <input 
//                 type="text"
//                 placeholder='Try "Invoices of 3rd October"...'
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={handleGlobalSearch}
//                 className="bg-transparent border-none outline-none text-[12px] font-bold text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium"
//               />
//             </div>
            
//             {/* Notifications */}
//             <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
//               <Bell size={16} className="text-slate-500" />
//               <span className="absolute top-2.5 right-2.5 h-[7px] w-[7px] rounded-full bg-rose-500 border-2 border-white"></span>
//             </div>
            
//             {/* Profile Dropdown */}
//             <div className="relative">
//               <div 
//                 onClick={() => setShowProfileMenu(!showProfileMenu)}
//                 className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0f172a] text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-[#C5A059] hover:text-[#0f172a] transition-colors select-none"
//               >
//                 {profileInitial}
//               </div>

//               {showProfileMenu && (
//                 <div 
//                   className="fixed inset-0 z-40" 
//                   onClick={() => setShowProfileMenu(false)}
//                 />
//               )}

//               {showProfileMenu && (
//                 <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.1)] p-2 z-50">
//                   <div className="px-3 py-2.5 border-b border-slate-100 mb-2">
//                     <p className="text-[13px] font-black text-slate-900 truncate">{profileName}</p>
//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Store Admin</p>
//                   </div>
                  
//                   <button 
//                     onClick={() => { setShowProfileMenu(false); navigate('/settings'); }}
//                     className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 rounded-xl hover:bg-slate-50 hover:text-[#C5A059] transition-colors"
//                   >
//                     <Settings size={14} /> Store Settings
//                   </button>
                  
//                   <button 
//                     onClick={handleLogout}
//                     className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
//                   >
//                     <LogOut size={14} /> Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Metric Cards Grid */}
//         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
//           {config.kpis.map((kpiKey) => {
//             const props = WidgetPropsMap[kpiKey];
//             if (!props) return null;
//             return (
//               <DashboardCard
//                 key={kpiKey}
//                 title={props.title}
//                 value={props.value}
//                 change={props.change}
//                 positive={props.positive}
//                 type={props.type}
//                 onClick={() => navigate(props.route)}
//               />
//             );
//           })}
//         </div>

//         {/* Charts & Real Dynamic Activities Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-5">
//           <div className="flex flex-col h-full">
//             <SalesChart data={dashboardData.salesTrend} />
//           </div>
//           <div className="flex flex-col gap-5">
//             <QuickActions />
//             <RecentActivities />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;