// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";
// import DashboardCard from "../components/dashboard/DashboardCard";
// import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
// import QuickActions from "../components/dashboard/QuickActions";
// import RecentActivities from "../components/dashboard/RecentActivities";
// import SalesChart from "../components/dashboard/SalesChart";
// import logo from "../assets/logo.jpg";

// const ConstructionDashboard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const [dashboardData, setDashboardData] = useState({
//     profile: null,
//     metrics: {
//       activeProjects: "0",
//       pendingEstimates: "0",
//       projectExpenses: "₹0",
//       grossBilled: "₹0",
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
//             activeProjects: "8", // Mocked Construction Metric
//             pendingEstimates: "14", // Mocked Construction Metric
//             projectExpenses: formatCurr(realTotalRevenue * 0.65), // Mocked burn rate
//             grossBilled: formatCurr(realTotalRevenue),
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
//               Construction ERP
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

//         {/* CONSTRUCTION Metric Cards Grid */}
//         <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
//           <DashboardCard title="Active Projects" value={dashboardData.metrics.activeProjects} change="On Schedule" positive={true} type="orders" onClick={() => navigate('/orders')} />
//           <DashboardCard title="Pending Estimates" value={dashboardData.metrics.pendingEstimates} change="Awaiting Approval" positive={false} type="customers" onClick={() => navigate('/quotations')} />
//           <DashboardCard title="Project Expenses" value={dashboardData.metrics.projectExpenses} change="Material Costs" positive={false} type="stock" onClick={() => navigate('/expenses')} />
//           <DashboardCard title="Gross Billed" value={dashboardData.metrics.grossBilled} change="Live" positive={true} type="sales" onClick={() => navigate('/invoices')} />
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

// export default ConstructionDashboard;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, LogOut, Settings, HardHat, Building2, Hammer } from "lucide-react";
import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivities from "../components/dashboard/RecentActivities";
import SalesChart from "../components/dashboard/SalesChart";
import logo from "../assets/logo.jpg";

const ConstructionDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [dashboardData, setDashboardData] = useState({
    profile: null,
    metrics: {
      activeProjects: "0",
      pendingEstimates: "0",
      projectExpenses: "₹0",
      grossBilled: "₹0",
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
            activeProjects: "8", 
            pendingEstimates: "14", 
            projectExpenses: formatCurr(realTotalRevenue * 0.65), 
            grossBilled: formatCurr(realTotalRevenue),
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

  const profileName = dashboardData.profile?.ownerName || "Site Supervisor";
  const profileInitial = profileName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-stone-100 font-sans relative overflow-hidden flex flex-col items-center">
      
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-6">
        
        {/* Heavy-Duty App Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-stone-900 border-b-4 border-amber-500 px-6 py-5 rounded-sm shadow-xl relative overflow-hidden">
          
          {/* Subtle Warning Stripes Pattern */}
          <div className="absolute top-0 right-0 bottom-0 w-64 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)' }}>
          </div>

          <div className="flex items-center gap-5 relative z-10">
            <div className="h-14 w-14 bg-amber-500 rounded-sm flex items-center justify-center shadow-inner border-2 border-amber-600 shrink-0 text-stone-900">
              <HardHat size={30} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 size={14} className="text-amber-500" />
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Project Command</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">
                Construction ERP
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4 self-start sm:self-auto relative z-10">
            <div className="flex items-center gap-2 bg-stone-800 px-4 py-2 border-2 border-stone-700 rounded-sm hidden sm:flex">
              <Hammer size={14} className="text-stone-400" />
              <span className="text-[11px] font-bold text-stone-300 uppercase tracking-widest">{profileName}</span>
            </div>

            <div className="relative flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-sm border-2 border-stone-700 bg-stone-800 hover:bg-stone-700 hover:border-amber-500 transition-colors cursor-pointer">
              <Bell size={18} className="text-stone-300" />
              <span className="absolute top-2 right-2 h-[10px] w-[10px] bg-amber-500 border-2 border-stone-800"></span>
            </div>
            
            <div className="relative">
              <div 
                onClick={() => setShowProfileMenu(!showProfileMenu)} 
                className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-sm bg-amber-500 text-[15px] font-black text-stone-900 cursor-pointer hover:bg-amber-400 transition-colors border-2 border-amber-600 shadow-md"
              >
                {profileInitial}
              </div>
              
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-sm border-2 border-stone-900 bg-white shadow-2xl p-2 z-50">
                  <div className="px-3 py-3 border-b-2 border-stone-100 mb-2 bg-stone-50">
                    <p className="text-[14px] font-black text-stone-900 truncate uppercase">{profileName}</p>
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mt-1">Site Supervisor</p>
                  </div>
                  <button onClick={() => { setShowProfileMenu(false); navigate('/settings'); }} className="w-full flex items-center gap-3 px-3 py-3 text-[12px] font-bold text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors rounded-sm">
                    <Settings size={14} /> System Configuration
                  </button>
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-3 text-[12px] font-bold text-rose-600 hover:bg-rose-50 transition-colors rounded-sm mt-1">
                    <LogOut size={14} /> Terminate Session
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CONSTRUCTION Metric Cards Grid */}
        <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-4">
          <DashboardCard title="Active Projects" value={dashboardData.metrics.activeProjects} change="On Schedule" positive={true} type="orders" onClick={() => navigate('/orders')} />
          <DashboardCard title="Pending Estimates" value={dashboardData.metrics.pendingEstimates} change="Awaiting Approval" positive={false} type="customers" onClick={() => navigate('/quotations')} />
          <DashboardCard title="Project Expenses" value={dashboardData.metrics.projectExpenses} change="Material Costs" positive={false} type="stock" onClick={() => navigate('/expenses')} />
          <DashboardCard title="Gross Billed" value={dashboardData.metrics.grossBilled} change="Live" positive={true} type="sales" onClick={() => navigate('/invoices')} />
        </div>

        {/* Charts & Activities Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.55fr_.8fr] gap-6">
          <div className="flex flex-col h-full bg-white border-2 border-stone-200 rounded-sm p-1 shadow-sm">
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

export default ConstructionDashboard;