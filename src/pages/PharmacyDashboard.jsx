// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";
// import DashboardCard from "../components/dashboard/DashboardCard";
// import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// import QuickActions from "../components/dashboard/QuickActions";
// import RecentActivities from "../components/dashboard/RecentActivities";
// import SalesChart from "../components/dashboard/SalesChart";
// import logo from "../assets/logo.jpg";

// const PharmacyDashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const [dashboardData, setDashboardData] = useState({
//     profile: null,
//     metrics: {
//       dailyDispensed: "₹0",
//       expiringSoon: "0",
//       scriptsFilled: "0",
//       lowStock: "0",
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
//             dailyDispensed: formatCurr(realTotalRevenue / 30),
//             expiringSoon: "24", // Mocked expiry
//             scriptsFilled: "142", // Mocked POS scripts
//             lowStock: metricsData.low_stock_count || "0",
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
//               Pharmacy POS & Inventory
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

//         {/* PHARMACY Metric Cards Grid */}
//         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
//           <DashboardCard title="Daily Dispensary" value={dashboardData.metrics.dailyDispensed} change="Live" positive={true} type="sales" onClick={() => navigate('/pos')} />
//           <DashboardCard title="Expiring Soon" value={dashboardData.metrics.expiringSoon} change="Next 30 Days" positive={false} type="orders" onClick={() => navigate('/inventory')} />
//           <DashboardCard title="Scripts Filled" value={dashboardData.metrics.scriptsFilled} change="Today" positive={true} type="customers" onClick={() => navigate('/reports')} />
//           <DashboardCard title="Low Stock Drugs" value={dashboardData.metrics.lowStock} change="Action Required" positive={false} type="stock" onClick={() => navigate('/inventory')} />
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

// export default PharmacyDashboard;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, LogOut, Settings, Pill, Activity, ShieldPlus } from "lucide-react";
import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import SalesChart from "../components/dashboard/SalesChart";
import logo from "../assets/logo.jpg";

const PharmacyDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [dashboardData, setDashboardData] = useState({
    profile: null,
    metrics: {
      dailyDispensed: "₹0",
      expiringSoon: "0",
      scriptsFilled: "0",
      lowStock: "0",
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
            dailyDispensed: formatCurr(realTotalRevenue / 30),
            expiringSoon: "24", 
            scriptsFilled: "142", 
            lowStock: metricsData.low_stock_count || "0",
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

  const profileName = dashboardData.profile?.ownerName || "Head Pharmacist";
  const profileInitial = profileName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-[#F0FDF8] font-sans relative overflow-hidden flex flex-col items-center">
      
      {/* Clinical Gradient Overlay (Sea Foam & Cyan) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>

      <div className="pointer-events-none fixed top-1/2 left-[55%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] opacity-[0.02] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
        {/* Medical App Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-5 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
              <ShieldPlus size={28} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Activity size={14} className="text-teal-600 animate-pulse" />
                <span className="text-[10px] font-bold text-teal-600 uppercase tracking-[0.15em]">Dispensary Active</span>
              </div>
              <h1 className="text-[26px] md:text-[32px] font-black text-slate-800 tracking-tight leading-none">
                Pharmacy POS & Inventory
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4 self-start sm:self-auto">
            <div className="flex items-center gap-2 bg-teal-50/80 px-4 py-2 rounded-xl border border-teal-100/50">
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">{profileName}</span>
            </div>

            <div className="relative flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl border border-slate-200/60 bg-white hover:bg-teal-50 hover:border-teal-200 transition-colors cursor-pointer shadow-sm">
              <Bell size={18} className="text-slate-600" />
              <span className="absolute top-2 right-2 h-[10px] w-[10px] rounded-full bg-rose-500 border-2 border-white"></span>
            </div>
            
            <div className="relative">
              <div 
                onClick={() => setShowProfileMenu(!showProfileMenu)} 
                className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl bg-teal-600 text-[14px] font-bold text-white shadow-md cursor-pointer hover:bg-teal-700 transition-colors"
              >
                {profileInitial}
              </div>
              
              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-teal-100 bg-white/95 backdrop-blur-xl shadow-xl p-2 z-50">
                   <div className="px-3 py-3 border-b border-slate-100 mb-2">
                    <p className="text-[14px] font-black text-slate-800 truncate">{profileName}</p>
                    <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mt-1">Chief Pharmacist</p>
                  </div>
                  <button onClick={() => { setShowProfileMenu(false); navigate('/settings'); }} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors">
                    <Settings size={14} /> Clinic Settings
                  </button>
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors">
                    <LogOut size={14} /> Secure Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PHARMACY Metric Cards Grid */}
        <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
          <DashboardCard title="Daily Dispensary" value={dashboardData.metrics.dailyDispensed} change="Live" positive={true} type="sales" onClick={() => navigate('/pos')} />
          <DashboardCard title="Expiring Soon" value={dashboardData.metrics.expiringSoon} change="Next 30 Days" positive={false} type="orders" onClick={() => navigate('/inventory')} />
          <DashboardCard title="Scripts Filled" value={dashboardData.metrics.scriptsFilled} change="Today" positive={true} type="customers" onClick={() => navigate('/reports')} />
          <DashboardCard title="Low Stock Drugs" value={dashboardData.metrics.lowStock} change="Action Required" positive={false} type="stock" onClick={() => navigate('/inventory')} />
        </div>

        {/* Charts & Activities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-5">
          <div className="flex flex-col h-full bg-white/70 backdrop-blur-xl border border-teal-100/50 rounded-3xl p-2 shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
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

export default PharmacyDashboard;