// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, Bell, LogOut, Settings, Crown, Utensils, Receipt, Users, AlertTriangle } from "lucide-react";
// import DashboardCard from "../components/dashboard/DashboardCard";
// import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// import QuickActions from "../components/dashboard/QuickActions";
// import RecentActivities from "../components/dashboard/RecentActivities";
// import SalesChart from "../components/dashboard/SalesChart";
// import logo from "../assets/logo.jpg";

// const RestaurantDashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const [dashboardData, setDashboardData] = useState({
//     profile: null,
//     metrics: {
//       dailySales: "₹0",
//       activeOrders: "0",
//       avgOrderValue: "₹0",
//       lowIngredients: "0",
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

//         const [profileRes, metricsRes] = await Promise.all([
//           fetch("http://localhost:8000/api/store/profile", {
//             headers: { "Authorization": `Bearer ${token}` }
//           }),
//           fetch("http://localhost:8000/api/dashboard", {
//             headers: { "Authorization": `Bearer ${token}` }
//           })
//         ]);

//         if (!profileRes.ok || !metricsRes.ok) {
//           setIsLoading(false);
//           return;
//         }

//         const profileData = await profileRes.json();
//         const metricsData = await metricsRes.json();

//         if (!profileData.is_onboarded) {
//           navigate("/setup-wizard");
//           return;
//         }

//         const trend = Array.isArray(metricsData.salesTrend) ? metricsData.salesTrend : [];
//         const realTotalRevenue = trend.reduce((acc, curr) => acc + parseFloat(curr.total_sales || curr.revenue || 0), 0);
        
//         // Mocking Restaurant specific calculations based on available data
//         // You will eventually update the backend to return exact restaurant metrics
//         const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

//         setDashboardData({
//           profile: profileData,
//           metrics: {
//             dailySales: formatCurr(realTotalRevenue / 30), // Mocked daily average
//             activeOrders: "12", // Pending POS orders
//             avgOrderValue: formatCurr(450), // Mocked AOV
//             lowIngredients: metricsData.low_stock_count || "0",
//           },
//           salesTrend: trend
//         });

//       } catch (err) {
//         console.error("Error loading restaurant dashboard:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   if (isLoading) return <DashboardSkeleton />;

//   const profileName = dashboardData.profile?.ownerName || "Admin";
//   const profileInitial = profileName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-[#fbfaf8] font-sans relative overflow-hidden flex flex-col items-center">
//       <div className="pointer-events-none fixed top-1/2 left-[55%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.04] mix-blend-multiply">
//         <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
//         {/* Top App Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
//           <div>
//             <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 tracking-tight leading-none">
//               Restaurant POS
//             </h1>
//             <div className="flex items-center gap-4 mt-2">
//               <p className="text-[13px] font-medium text-slate-400">
//                 Shift started. Welcome back, <strong className="text-slate-600">{profileName}</strong> 👋
//               </p>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-3 self-start sm:self-auto">
//             <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
//               <Bell size={16} className="text-slate-500" />
//             </div>
            
//             {/* Profile Dropdown */}
//             <div className="relative">
//               <div 
//                 onClick={() => setShowProfileMenu(!showProfileMenu)}
//                 className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0f172a] text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-[#C5A059]"
//               >
//                 {profileInitial}
//               </div>

//               {showProfileMenu && (
//                 <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white shadow-lg p-2 z-50">
//                   <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50">
//                     <LogOut size={14} /> Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* RESTAURANT Metric Cards Grid */}
//         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
//           <DashboardCard
//             title="Today's Sales"
//             value={dashboardData.metrics.dailySales}
//             change="Live"
//             positive={true}
//             type="sales"
//             onClick={() => navigate('/sales')}
//           />
//           <DashboardCard
//             title="Active Orders"
//             value={dashboardData.metrics.activeOrders}
//             change="Kitchen Prep"
//             positive={true}
//             type="orders" 
//             onClick={() => navigate('/pos')}
//           />
//           <DashboardCard
//             title="Avg Order Value"
//             value={dashboardData.metrics.avgOrderValue}
//             change="+5.2%"
//             positive={true}
//             type="customers"
//             onClick={() => navigate('/reports')}
//           />
//           <DashboardCard
//             title="Low Ingredients"
//             value={dashboardData.metrics.lowIngredients}
//             change="Needs Restock"
//             positive={false}
//             type="stock"
//             onClick={() => navigate('/inventory')}
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

// export default RestaurantDashboard;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, LogOut, Settings, Utensils, ChefHat } from "lucide-react";
import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import SalesChart from "../components/dashboard/SalesChart";
import logo from "../assets/logo.jpg";

const RestaurantDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [dashboardData, setDashboardData] = useState({
    profile: null,
    metrics: {
      dailySales: "₹0",
      activeOrders: "0",
      avgOrderValue: "₹0",
      lowIngredients: "0",
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

        const [profileRes, metricsRes] = await Promise.all([
          fetch("http://localhost:8000/api/store/profile", {
            headers: { "Authorization": `Bearer ${token}` }
          }),
          fetch("http://localhost:8000/api/dashboard", {
            headers: { "Authorization": `Bearer ${token}` }
          })
        ]);

        if (!profileRes.ok || !metricsRes.ok) {
          setIsLoading(false);
          return;
        }

        const profileData = await profileRes.json();
        const metricsData = await metricsRes.json();

        if (!profileData.is_onboarded) {
          navigate("/setup-wizard");
          return;
        }

        const trend = Array.isArray(metricsData.salesTrend) ? metricsData.salesTrend : [];
        const realTotalRevenue = trend.reduce((acc, curr) => acc + parseFloat(curr.total_sales || curr.revenue || 0), 0);
        
        const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

        setDashboardData({
          profile: profileData,
          metrics: {
            dailySales: formatCurr(realTotalRevenue / 30), 
            activeOrders: "12", 
            avgOrderValue: formatCurr(450), 
            lowIngredients: metricsData.low_stock_count || "0",
          },
          salesTrend: trend
        });

      } catch (err) {
        console.error("Error loading restaurant dashboard:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (isLoading) return <DashboardSkeleton />;

  const profileName = dashboardData.profile?.ownerName || "Admin";
  const profileInitial = profileName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative overflow-hidden flex flex-col items-center">
      
      {/* Ambient Glassmorphism Background Orbs */}
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      <div className="pointer-events-none absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0"></div>
      <div className="pointer-events-none absolute bottom-[-10%] left-[20%] w-[700px] h-[500px] bg-amber-300/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 z-0"></div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
        {/* Dynamic Fluid Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0">
              <ChefHat size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-[28px] md:text-[34px] font-black text-slate-900 tracking-tight leading-none mb-1">
                Restaurant POS
              </h1>
              <p className="text-[13px] font-semibold text-slate-500">
                Shift active. Welcome back, <strong className="text-orange-600">{profileName}</strong> 👋
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 self-start sm:self-auto">
            <div className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm shadow-sm cursor-pointer hover:bg-white transition-all hover:shadow-md hover:-translate-y-0.5">
              <Bell size={18} className="text-slate-600" />
              <span className="absolute top-2.5 right-2.5 h-[10px] w-[10px] rounded-full bg-rose-500 border-2 border-white"></span>
            </div>
            
            <div className="relative">
              <div 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 text-[15px] font-bold text-white shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200 ring-2 ring-transparent hover:ring-orange-500/30"
              >
                {profileInitial}
              </div>

              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-56 rounded-3xl border border-white/60 bg-white/95 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-2 z-50">
                  <div className="px-4 py-3 border-b border-slate-100/80 mb-2">
                    <p className="text-[14px] font-black text-slate-900 truncate">{profileName}</p>
                    <p className="text-[11px] font-bold text-orange-500 uppercase tracking-widest mt-0.5">Floor Manager</p>
                  </div>
                  <button onClick={() => { setShowProfileMenu(false); navigate('/settings'); }} className="w-full flex items-center gap-3 px-4 py-3 text-[13px] font-bold text-slate-600 rounded-2xl hover:bg-orange-50 hover:text-orange-600 transition-colors">
                    <Settings size={16} /> Terminal Settings
                  </button>
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-[13px] font-bold text-rose-600 rounded-2xl hover:bg-rose-50 transition-colors mt-1">
                    <LogOut size={16} /> End Shift
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid gap-5 md:gap-6 grid-cols-2 lg:grid-cols-4">
          <DashboardCard title="Today's Sales" value={dashboardData.metrics.dailySales} change="Live Tracking" positive={true} type="sales" onClick={() => navigate('/sales')} />
          <DashboardCard title="Active Orders" value={dashboardData.metrics.activeOrders} change="Kitchen Prep" positive={true} type="orders" onClick={() => navigate('/pos')} />
          <DashboardCard title="Avg Order Value" value={dashboardData.metrics.avgOrderValue} change="Dining & Delivery" positive={true} type="customers" onClick={() => navigate('/reports')} />
          <DashboardCard title="Low Ingredients" value={dashboardData.metrics.lowIngredients} change="Needs Restock" positive={false} type="stock" onClick={() => navigate('/inventory')} />
        </div>

        {/* Charts & Activities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-6">
          <div className="flex flex-col h-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <SalesChart data={dashboardData.salesTrend} />
          </div>
          <div className="flex flex-col gap-6">
            <QuickActions />
            <RecentActivities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;