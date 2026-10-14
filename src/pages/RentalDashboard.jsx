// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";
// import DashboardCard from "../components/dashboard/DashboardCard";
// import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// import QuickActions from "../components/dashboard/QuickActions";
// import RecentActivities from "../components/dashboard/RecentActivities";
// import SalesChart from "../components/dashboard/SalesChart";
// import logo from "../assets/logo.jpg";

// const RentalDashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const [dashboardData, setDashboardData] = useState({
//     profile: null,
//     metrics: {
//       activeRentals: "0",
//       overdueReturns: "0",
//       depositsHeld: "₹0",
//       monthlyRevenue: "₹0",
//     },
//     salesTrend: []
//   });

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) { navigate("/login"); return; }

//         const [profileRes, metricsRes] = await Promise.all([
//           fetch("http://localhost:8000/api/store/profile", { headers: { "Authorization": `Bearer ${token}` } }),
//           fetch("http://localhost:8000/api/dashboard", { headers: { "Authorization": `Bearer ${token}` } })
//         ]);

//         if (!profileRes.ok || !metricsRes.ok) { setIsLoading(false); return; }

//         const profileData = await profileRes.json();
//         const metricsData = await metricsRes.json();

//         if (!profileData.is_onboarded) { navigate("/setup-wizard"); return; }

//         const trend = Array.isArray(metricsData.salesTrend) ? metricsData.salesTrend : [];
//         const realTotalRevenue = trend.reduce((acc, curr) => acc + parseFloat(curr.total_sales || curr.revenue || 0), 0);
//         const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

//         setDashboardData({
//           profile: profileData,
//           metrics: {
//             activeRentals: "35", // Mocked Rental Metric
//             overdueReturns: "3", // Mocked Rental Metric
//             depositsHeld: formatCurr(145000), // Mocked security deposits
//             monthlyRevenue: formatCurr(realTotalRevenue),
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

//   const handleLogout = () => { localStorage.removeItem("token"); navigate("/"); };

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
//               Fleet & Rental Management
//             </h1>
//             <div className="flex items-center gap-4 mt-2">
//               <p className="text-[13px] font-medium text-slate-400">
//                 Welcome back, <strong className="text-slate-600">{profileName}</strong> 👋
//               </p>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-3 self-start sm:self-auto">
//             <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
//               <Bell size={16} className="text-slate-500" />
//             </div>
            
//             <div className="relative">
//               <div onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0f172a] text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-[#C5A059]">
//                 {profileInitial}
//               </div>
//               {showProfileMenu && (
//                 <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white shadow-lg p-2 z-50">
//                   <button onClick={() => { setShowProfileMenu(false); navigate('/settings'); }} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 rounded-xl hover:bg-slate-50 hover:text-[#C5A059] transition-colors">
//                     <Settings size={14} /> Store Settings
//                   </button>
//                   <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors">
//                     <LogOut size={14} /> Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* RENTAL Metric Cards Grid */}
//         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
//           <DashboardCard title="Active Rentals" value={dashboardData.metrics.activeRentals} change="Out on Lease" positive={true} type="orders" onClick={() => navigate('/orders')} />
//           <DashboardCard title="Overdue Returns" value={dashboardData.metrics.overdueReturns} change="Action Required" positive={false} type="stock" onClick={() => navigate('/returns')} />
//           <DashboardCard title="Deposits Held" value={dashboardData.metrics.depositsHeld} change="Liabilities" positive={true} type="customers" onClick={() => navigate('/reports')} />
//           <DashboardCard title="Monthly Revenue" value={dashboardData.metrics.monthlyRevenue} change="Live" positive={true} type="sales" onClick={() => navigate('/invoices')} />
//         </div>

//         {/* Charts & Activities Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-5">
//           <div className="flex flex-col h-full"><SalesChart data={dashboardData.salesTrend} /></div>
//           <div className="flex flex-col gap-5"><QuickActions /><RecentActivities /></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RentalDashboard;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, LogOut, Settings, Truck, Map, Key } from "lucide-react";
import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import SalesChart from "../components/dashboard/SalesChart";
import logo from "../assets/logo.jpg";

const RentalDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [dashboardData, setDashboardData] = useState({
    profile: null,
    metrics: {
      activeRentals: "0",
      overdueReturns: "0",
      depositsHeld: "₹0",
      monthlyRevenue: "₹0",
    },
    salesTrend: []
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) { navigate("/login"); return; }

        const [profileRes, metricsRes] = await Promise.all([
          fetch("http://localhost:8000/api/store/profile", { headers: { "Authorization": `Bearer ${token}` } }),
          fetch("http://localhost:8000/api/dashboard", { headers: { "Authorization": `Bearer ${token}` } })
        ]);

        if (!profileRes.ok || !metricsRes.ok) { setIsLoading(false); return; }

        const profileData = await profileRes.json();
        const metricsData = await metricsRes.json();

        if (!profileData.is_onboarded) { navigate("/setup-wizard"); return; }

        const trend = Array.isArray(metricsData.salesTrend) ? metricsData.salesTrend : [];
        const realTotalRevenue = trend.reduce((acc, curr) => acc + parseFloat(curr.total_sales || curr.revenue || 0), 0);
        const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

        setDashboardData({
          profile: profileData,
          metrics: {
            activeRentals: "35",
            overdueReturns: "3", 
            depositsHeld: formatCurr(145000), 
            monthlyRevenue: formatCurr(realTotalRevenue),
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

  const handleLogout = () => { localStorage.removeItem("token"); navigate("/"); };

  if (isLoading) return <DashboardSkeleton />;

  const profileName = dashboardData.profile?.ownerName || "Dispatcher";
  const profileInitial = profileName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative overflow-hidden flex flex-col items-center">
      
      {/* Telemetry/Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="pointer-events-none fixed top-1/2 left-[55%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
        {/* Command Center Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Truck size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">Fleet Operations Live</span>
              </div>
              <h1 className="text-[26px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">
                Asset & Rental Management
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4 self-start sm:self-auto">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 border border-slate-200">
              <Map size={14} className="text-slate-500" />
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">{profileName}</span>
            </div>

            <div className="relative flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer">
              <Bell size={16} className="text-slate-600" />
              <span className="absolute top-2 right-2 h-[8px] w-[8px] rounded-full bg-rose-500"></span>
            </div>
            
            <div className="relative">
              <div 
                onClick={() => setShowProfileMenu(!showProfileMenu)} 
                className="flex h-[38px] w-[38px] shrink-0 items-center justify-center bg-indigo-600 text-[13px] font-bold text-white cursor-pointer hover:bg-indigo-700 transition-colors"
              >
                {profileInitial}
              </div>
              
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 border border-slate-200 bg-white shadow-lg p-2 z-50">
                  <button onClick={() => { setShowProfileMenu(false); navigate('/settings'); }} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                    <Settings size={14} /> System Config
                  </button>
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-600 hover:bg-rose-50 transition-colors">
                    <LogOut size={14} /> Terminate Session
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RENTAL Metric Cards Grid */}
        <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
          <DashboardCard title="Active Rentals" value={dashboardData.metrics.activeRentals} change="Out on Lease" positive={true} type="orders" onClick={() => navigate('/orders')} />
          <DashboardCard title="Overdue Returns" value={dashboardData.metrics.overdueReturns} change="Action Required" positive={false} type="stock" onClick={() => navigate('/returns')} />
          <DashboardCard title="Deposits Held" value={dashboardData.metrics.depositsHeld} change="Liabilities" positive={true} type="customers" onClick={() => navigate('/reports')} />
          <DashboardCard title="Monthly Revenue" value={dashboardData.metrics.monthlyRevenue} change="Live Tracking" positive={true} type="sales" onClick={() => navigate('/invoices')} />
        </div>

        {/* Charts & Activities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-5">
          <div className="flex flex-col h-full bg-white border border-slate-200 p-1">
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

export default RentalDashboard;