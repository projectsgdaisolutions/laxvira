// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";
// import DashboardCard from "../components/dashboard/DashboardCard";
// import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// import QuickActions from "../components/dashboard/QuickActions";
// import RecentActivities from "../components/dashboard/RecentActivities";
// import SalesChart from "../components/dashboard/SalesChart";
// import logo from "../assets/logo.jpg";
// import Header from "../components/Header";

// const LegalDashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const [dashboardData, setDashboardData] = useState({
//     profile: null,
//     metrics: {
//       unbilledHours: "0.0",
//       activeRetainers: "0",
//       trustBalance: "₹0",
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
//             unbilledHours: "42.5", // Mocked Legal Metric
//             activeRetainers: "18", // Mocked Legal Metric
//             trustBalance: formatCurr(250000), // Mocked Legal Metric
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
//         <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
//         <Header 
//           title="Practice Management" 
//           subtitle={`Welcome back, ${profileName} 👋`}
//           showUpgrade={true} 
//         />
          
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
//                   <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50">
//                     <LogOut size={14} /> Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* LEGAL Metric Cards Grid */}
//         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
//           <DashboardCard title="Unbilled Hours" value={dashboardData.metrics.unbilledHours} change="Awaiting Invoice" positive={true} type="customers" onClick={() => navigate('/reports')} />
//           <DashboardCard title="Active Retainers" value={dashboardData.metrics.activeRetainers} change="Stable" positive={true} type="orders" onClick={() => navigate('/customers')} />
//           <DashboardCard title="Trust Balance" value={dashboardData.metrics.trustBalance} change="Client Funds" positive={true} type="stock" onClick={() => navigate('/reports')} />
//           <DashboardCard title="Monthly Revenue" value={dashboardData.metrics.monthlyRevenue} change="Live" positive={true} type="sales" onClick={() => navigate('/sales')} />
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

// export default LegalDashboard;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, LogOut, Settings, Scale, Briefcase } from "lucide-react";
import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import SalesChart from "../components/dashboard/SalesChart";
import logo from "../assets/logo.jpg";

const LegalDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [dashboardData, setDashboardData] = useState({
    profile: null,
    metrics: {
      unbilledHours: "0.0",
      activeRetainers: "0",
      trustBalance: "₹0",
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
            unbilledHours: "42.5", 
            activeRetainers: "18", 
            trustBalance: formatCurr(250000), 
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

  const profileName = dashboardData.profile?.ownerName || "Senior Partner";
  const profileInitial = profileName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans relative overflow-hidden flex flex-col items-center">
      
      {/* High-End Watermark Background */}
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
        {/* Authoritative App Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#2B2B2B] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Scale size={18} className="text-[#8B2626]" />
              <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Legal Operations</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">
              Practice Management
            </h1>
            <p className="text-[14px] font-medium text-slate-500 mt-3 font-sans">
              Welcome to chambers, <strong className="text-[#2B2B2B]">{profileName}</strong>.
            </p>
          </div>
          
          <div className="flex items-center gap-4 self-start sm:self-auto mb-1">
            <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-none border border-slate-300 bg-white cursor-pointer hover:border-[#2B2B2B] hover:bg-slate-50 transition-all">
              <Bell size={18} className="text-[#2B2B2B]" />
              <span className="absolute top-2 right-2 h-[8px] w-[8px] rounded-full bg-[#8B2626]"></span>
            </div>
            
            <div className="relative">
              <div 
                onClick={() => setShowProfileMenu(!showProfileMenu)} 
                className="flex h-[42px] px-4 shrink-0 items-center justify-center rounded-none bg-[#2B2B2B] text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-[#8B2626] transition-colors border border-[#2B2B2B]"
              >
                {profileInitial}
              </div>
              
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-none border border-slate-200 bg-white shadow-xl p-2 z-50">
                  <div className="px-3 py-3 border-b border-slate-100 mb-2">
                    <p className="text-[13px] font-black text-[#2B2B2B] truncate">{profileName}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Managing Partner</p>
                  </div>
                  <button onClick={() => { setShowProfileMenu(false); navigate('/settings'); }} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 hover:bg-slate-50 hover:text-[#8B2626] transition-colors">
                    <Settings size={14} /> Chambers Settings
                  </button>
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-700 hover:bg-rose-50 transition-colors">
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* LEGAL Metric Cards Grid */}
        <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4">
          <DashboardCard title="Unbilled Hours" value={dashboardData.metrics.unbilledHours} change="Awaiting Invoice" positive={true} type="customers" onClick={() => navigate('/reports')} />
          <DashboardCard title="Active Retainers" value={dashboardData.metrics.activeRetainers} change="Stable" positive={true} type="orders" onClick={() => navigate('/customers')} />
          <DashboardCard title="Trust Balance" value={dashboardData.metrics.trustBalance} change="Client Funds" positive={true} type="stock" onClick={() => navigate('/reports')} />
          <DashboardCard title="Monthly Revenue" value={dashboardData.metrics.monthlyRevenue} change="Live" positive={true} type="sales" onClick={() => navigate('/sales')} />
        </div>

        {/* Charts & Activities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-6">
          <div className="flex flex-col h-full rounded-none shadow-sm border border-slate-200 bg-white">
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

export default LegalDashboard;