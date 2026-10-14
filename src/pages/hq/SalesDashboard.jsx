// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { 
// //   Target, TrendingUp, Users, PhoneCall, 
// //   Mail, Calendar, LogOut, CheckCircle2, 
// //   AlertCircle, Briefcase, ChevronRight
// // } from "lucide-react";

// // const SalesDashboard = () => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");
// //     navigate("/");
// //   };

// //   // Mock data for UI layout
// //   const activeTrials = [
// //     { id: 1, name: "Urban Threads", email: "hello@urbanthreads.com", daysLeft: 3, status: "HOT" },
// //     { id: 2, name: "TechNova Gadgets", email: "admin@technova.in", daysLeft: 12, status: "WARM" },
// //     { id: 3, name: "Café Mocha", email: "orders@cafemocha.com", daysLeft: 1, status: "CRITICAL" },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex relative overflow-hidden selection:bg-blue-200 selection:text-blue-900">
      
// //       {/* Light Glass Ambient Background */}
// //       <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
// //       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

// //       {/* Role-Specific Sidebar */}
// //       <aside className="w-72 relative z-20 bg-white/40 backdrop-blur-2xl border-r border-white/60 flex flex-col justify-between shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
// //         <div className="p-8">
// //           <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/60">
// //             <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-sky-600 shadow-lg shadow-blue-200">
// //               <Target className="text-white w-5 h-5" />
// //             </div>
// //             <div>
// //               <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Sales Ops</h2>
// //               <p className="text-[10px] text-blue-600 font-mono tracking-widest font-bold">PIPELINE & GROWTH</p>
// //             </div>
// //           </div>

// //           <nav className="space-y-3">
// //             <SidebarItem icon={Briefcase} label="Active Pipeline" active />
// //             <SidebarItem icon={Users} label="Trial Accounts" />
// //             <SidebarItem icon={PhoneCall} label="Call Schedules" />
// //             <SidebarItem icon={TrendingUp} label="Conversion Metrics" />
// //           </nav>
// //         </div>

// //         <div className="p-6 border-t border-white/60 bg-white/20">
// //           <button 
// //             onClick={handleLogout}
// //             className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/60 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-white/80 hover:border-rose-200 transition-all text-xs font-bold uppercase tracking-wider shadow-sm"
// //           >
// //             <LogOut size={15} /> Sign Out
// //           </button>
// //         </div>
// //       </aside>

// //       {/* Main Content Area */}
// //       <main className="flex-1 relative z-10 p-10 overflow-y-auto">
// //         <header className="mb-10">
// //           <h1 className="text-2xl font-black text-slate-900 tracking-wide">Account Executive Console</h1>
// //           <p className="text-sm text-slate-500 mt-1">Track trial conversions, outreach tasks, and monthly recurring revenue targets.</p>
// //         </header>

// //         {/* KPIs */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
// //           <SalesMetricCard title="Trials Closing Soon" value="14" icon={AlertCircle} color="amber" />
// //           <MetricCard title="New Leads (This Week)" value="28" icon={Users} color="blue" />
// //           <MetricCard title="Conversion Rate" value="34.2%" icon={Target} color="emerald" />
// //         </div>

// //         {/* Pipeline Table */}
// //         <div className="bg-white/50 border border-white/80 rounded-[2rem] backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
// //           <div className="px-8 py-6 border-b border-white/60 flex justify-between items-center bg-white/40">
// //             <h2 className="text-lg font-black text-slate-800 tracking-wide">High-Priority Trials</h2>
// //             <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider">
// //               View All <ChevronRight size={14} />
// //             </button>
// //           </div>

// //           <div className="overflow-x-auto">
// //             <table className="w-full text-left border-collapse">
// //               <thead>
// //                 <tr className="bg-slate-100/50 text-[11px] uppercase tracking-[0.15em] text-slate-500 font-extrabold border-b border-white/60">
// //                   <th className="px-8 py-5">Prospect Store</th>
// //                   <th className="px-8 py-5">Trial Status</th>
// //                   <th className="px-8 py-5">Lead Temp</th>
// //                   <th className="px-8 py-5 text-right">Outreach</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-white/60">
// //                 {activeTrials.map((store) => (
// //                   <tr key={store.id} className="hover:bg-white/60 transition-colors">
// //                     <td className="px-8 py-5">
// //                       <p className="font-bold text-slate-800">{store.name}</p>
// //                       <p className="text-[10px] text-slate-400 font-mono mt-0.5">{store.email}</p>
// //                     </td>
// //                     <td className="px-8 py-5">
// //                       <span className={`text-xs font-bold flex items-center gap-1.5 ${store.daysLeft <= 3 ? 'text-rose-600' : 'text-amber-600'}`}>
// //                         <Calendar size={14} /> {store.daysLeft} Days Left
// //                       </span>
// //                     </td>
// //                     <td className="px-8 py-5">
// //                       <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border shadow-sm ${
// //                         store.status === 'HOT' ? 'bg-rose-100 text-rose-700 border-rose-200' :
// //                         store.status === 'WARM' ? 'bg-amber-100 text-amber-700 border-amber-200' :
// //                         'bg-slate-100 text-slate-700 border-slate-200'
// //                       }`}>
// //                         {store.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-8 py-5 text-right space-x-2">
// //                       <button className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 shadow-sm transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold">
// //                         <Mail size={14} /> Email
// //                       </button>
// //                       <button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold">
// //                         <PhoneCall size={14} /> Call
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // const SidebarItem = ({ icon: Icon, label, active }) => (
// //   <div className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
// //     active ? "bg-white/80 text-blue-700 shadow-sm border border-white" : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
// //   }`}>
// //     <Icon size={16} className={active ? "text-blue-600" : "text-slate-400"} /> {label}
// //   </div>
// // );

// // const MetricCard = ({ title, value, icon: Icon, color }) => (
// //   <div className="bg-white/60 border border-white/80 rounded-[2rem] p-8 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
// //     <div className="flex justify-between items-start mb-6">
// //       <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-slate-500">{title}</h3>
// //       <div className={`p-3 rounded-2xl bg-white border shadow-sm text-${color}-600 border-${color}-100`}>
// //         <Icon size={22} />
// //       </div>
// //     </div>
// //     <div className="text-3xl font-black text-slate-800 tracking-tight">{value}</div>
// //   </div>
// // );

// // const SalesMetricCard = ({ title, value, icon: Icon }) => (
// //   <div className="bg-gradient-to-br from-blue-600 to-sky-700 border border-blue-400 rounded-[2rem] p-8 shadow-[0_15px_40px_-10px_rgba(37,99,235,0.4)] relative overflow-hidden text-white">
// //     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
// //     <div className="flex justify-between items-start mb-6 relative z-10">
// //       <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-100">{title}</h3>
// //       <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
// //         <Icon size={22} />
// //       </div>
// //     </div>
// //     <div className="text-3xl font-black tracking-tight relative z-10">{value}</div>
// //   </div>
// // );

// // export default SalesDashboard;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   Target, TrendingUp, Users, PhoneCall, 
//   Mail, Calendar, LogOut, AlertCircle, 
//   Briefcase, ChevronRight, IndianRupee, ArrowUpRight
// } from "lucide-react";

// const SalesDashboard = () => {
//   const navigate = useNavigate();
//   const [trials, setTrials] = useState([]);
//   const [metrics, setMetrics] = useState({ active_trials: 0, estimated_mrr_inr: 0, paying_customers: 0 });
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchSalesData();
//   }, []);

//   const fetchSalesData = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { 
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}` 
//       };

//       // Fetch both stores and financial metrics
//       const [storesRes, metricsRes] = await Promise.all([
//         fetch("http://localhost:8000/api/hq/stores", { headers }),
//         fetch("http://localhost:8000/api/hq/metrics", { headers })
//       ]);

//       if (metricsRes.ok) {
//         const mData = await metricsRes.json();
//         setMetrics(mData);
//       }

//       if (storesRes.ok) {
//         const sData = await storesRes.json();
        
//         // Filter and process Trial accounts
//         const activeTrialStores = sData
//           .filter(store => store.tier === "TRIAL" || store.status === "TRIAL")
//           .map(store => {
//             const today = new Date();
//             const endDate = new Date(store.trial_ends);
//             const daysLeft = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
            
//             let status = "COLD";
//             if (daysLeft <= 2) status = "HOT";
//             else if (daysLeft <= 5) status = "WARM";

//             return {
//               ...store,
//               daysLeft: daysLeft > 0 ? daysLeft : 0,
//               leadStatus: daysLeft < 0 ? "EXPIRED" : status
//             };
//           })
//           .sort((a, b) => a.daysLeft - b.daysLeft); // Sort by urgency

//         setTrials(activeTrialStores);
//       }
//     } catch (error) {
//       console.error("Failed to load sales data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleUpgradeToPaid = async (storeId, storeName) => {
//     if (!window.confirm(`Close the deal? Upgrade ${storeName} to a paid GROWTH plan?`)) return;

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/hq/stores/${storeId}/tier`, {
//         method: "PUT",
//         headers: { 
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}` 
//         },
//         body: JSON.stringify({ tier: "GROWTH" })
//       });

//       if (res.ok) {
//         alert("Deal Closed! Store upgraded successfully.");
//         fetchSalesData(); // Refresh data to remove from trial list and update MRR
//       } else {
//         const err = await res.json();
//         alert(`Upgrade failed: ${err.detail || 'Unknown error'}`);
//       }
//     } catch (err) {
//       alert("Network error processing the upgrade.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount || 0);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex relative overflow-hidden selection:bg-blue-200 selection:text-blue-900">
      
//       {/* Light Glass Ambient Background */}
//       <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

//       {/* Role-Specific Sidebar */}
//       <aside className="w-72 relative z-20 bg-white/40 backdrop-blur-2xl border-r border-white/60 flex flex-col justify-between shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
//         <div className="p-8">
//           <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/60">
//             <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-sky-600 shadow-lg shadow-blue-200">
//               <Target className="text-white w-5 h-5" />
//             </div>
//             <div>
//               <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Sales Ops</h2>
//               <p className="text-[10px] text-blue-600 font-mono tracking-widest font-bold">PIPELINE & GROWTH</p>
//             </div>
//           </div>

//           <nav className="space-y-3">
//             <SidebarItem icon={Briefcase} label="Active Pipeline" active />
//             <SidebarItem icon={Users} label="Trial Accounts" />
//             <SidebarItem icon={IndianRupee} label="Financial Overview" />
//             <SidebarItem icon={TrendingUp} label="Conversion Metrics" />
//           </nav>
//         </div>

//         <div className="p-6 border-t border-white/60 bg-white/20">
//           <button 
//             onClick={handleLogout}
//             className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/60 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-white/80 hover:border-rose-200 transition-all text-xs font-bold uppercase tracking-wider shadow-sm"
//           >
//             <LogOut size={15} /> Sign Out
//           </button>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 relative z-10 p-10 overflow-y-auto">
//         <header className="mb-10">
//           <h1 className="text-2xl font-black text-slate-900 tracking-wide">Account Executive Console</h1>
//           <p className="text-sm text-slate-500 mt-1">Track trial conversions, outreach tasks, and manage financial revenue targets.</p>
//         </header>

//         {/* KPIs */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//           <SalesMetricCard 
//             title="Trials Closing Soon" 
//             value={isLoading ? "..." : trials.filter(t => t.daysLeft <= 3).length} 
//             icon={AlertCircle} 
//           />
//           <MetricCard 
//             title="Total Active Trials" 
//             value={isLoading ? "..." : trials.length} 
//             icon={Users} 
//             color="blue" 
//           />
//           <MetricCard 
//             title="Current MRR" 
//             value={isLoading ? "..." : formatCurrency(metrics.estimated_mrr_inr)} 
//             icon={IndianRupee} 
//             color="emerald" 
//           />
//         </div>

//         {/* Pipeline Table */}
//         <div className="bg-white/50 border border-white/80 rounded-[2rem] backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
//           <div className="px-8 py-6 border-b border-white/60 flex justify-between items-center bg-white/40">
//             <h2 className="text-lg font-black text-slate-800 tracking-wide">High-Priority Trials Pipeline</h2>
//             <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider">
//               View All <ChevronRight size={14} />
//             </button>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-slate-100/50 text-[11px] uppercase tracking-[0.15em] text-slate-500 font-extrabold border-b border-white/60">
//                   <th className="px-8 py-5">Prospect Store</th>
//                   <th className="px-8 py-5">Trial Status</th>
//                   <th className="px-8 py-5">Lead Temp</th>
//                   <th className="px-8 py-5 text-right">Sales Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-white/60">
//                 {isLoading ? (
//                   <tr>
//                     <td colSpan="4" className="px-8 py-12 text-center text-slate-500 text-sm font-bold">
//                       Loading active pipeline...
//                     </td>
//                   </tr>
//                 ) : trials.length === 0 ? (
//                   <tr>
//                     <td colSpan="4" className="px-8 py-12 text-center text-slate-500 text-sm font-bold">
//                       No active trials in the pipeline.
//                     </td>
//                   </tr>
//                 ) : (
//                   trials.map((store) => (
//                     <tr key={store.id} className="hover:bg-white/60 transition-colors">
//                       <td className="px-8 py-5">
//                         <p className="font-bold text-slate-800">{store.name}</p>
//                         <p className="text-[10px] text-slate-400 font-mono mt-0.5">{store.email}</p>
//                       </td>
//                       <td className="px-8 py-5">
//                         <span className={`text-xs font-bold flex items-center gap-1.5 ${store.leadStatus === 'EXPIRED' ? 'text-rose-600' : store.daysLeft <= 3 ? 'text-amber-600' : 'text-emerald-600'}`}>
//                           <Calendar size={14} /> 
//                           {store.leadStatus === 'EXPIRED' ? "Trial Expired" : `${store.daysLeft} Days Left`}
//                         </span>
//                       </td>
//                       <td className="px-8 py-5">
//                         <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border shadow-sm ${
//                           store.leadStatus === 'HOT' || store.leadStatus === 'EXPIRED' ? 'bg-rose-100 text-rose-700 border-rose-200' :
//                           store.leadStatus === 'WARM' ? 'bg-amber-100 text-amber-700 border-amber-200' :
//                           'bg-slate-100 text-slate-700 border-slate-200'
//                         }`}>
//                           {store.leadStatus}
//                         </span>
//                       </td>
//                       <td className="px-8 py-5 text-right space-x-2 whitespace-nowrap">
//                         <a 
//                           href={`mailto:${store.email}?subject=Your Laxvira Trial`}
//                           className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 shadow-sm transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold"
//                         >
//                           <Mail size={14} /> Email
//                         </a>
//                         <button 
//                           onClick={() => handleUpgradeToPaid(store.id, store.name)}
//                           className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold"
//                         >
//                           <ArrowUpRight size={14} /> Upgrade Plan
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// const SidebarItem = ({ icon: Icon, label, active }) => (
//   <div className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
//     active ? "bg-white/80 text-blue-700 shadow-sm border border-white" : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
//   }`}>
//     <Icon size={16} className={active ? "text-blue-600" : "text-slate-400"} /> {label}
//   </div>
// );

// const MetricCard = ({ title, value, icon: Icon, color }) => (
//   <div className="bg-white/60 border border-white/80 rounded-[2rem] p-8 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
//     <div className="flex justify-between items-start mb-6">
//       <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-slate-500">{title}</h3>
//       <div className={`p-3 rounded-2xl bg-white border shadow-sm text-${color}-600 border-${color}-100`}>
//         <Icon size={22} />
//       </div>
//     </div>
//     <div className="text-3xl font-black text-slate-800 tracking-tight">{value}</div>
//   </div>
// );

// const SalesMetricCard = ({ title, value, icon: Icon }) => (
//   <div className="bg-gradient-to-br from-blue-600 to-sky-700 border border-blue-400 rounded-[2rem] p-8 shadow-[0_15px_40px_-10px_rgba(37,99,235,0.4)] relative overflow-hidden text-white">
//     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
//     <div className="flex justify-between items-start mb-6 relative z-10">
//       <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-100">{title}</h3>
//       <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
//         <Icon size={22} />
//       </div>
//     </div>
//     <div className="text-3xl font-black tracking-tight relative z-10">{value}</div>
//   </div>
// );

// export default SalesDashboard;

import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Target, TrendingUp, Users, PhoneCall, 
  Mail, Calendar, LogOut, AlertCircle, 
  Briefcase, ChevronRight, IndianRupee, ArrowUpRight, BarChart3,
  CheckCircle2, Flame
} from "lucide-react";

const SalesDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pipeline"); 
  const [trials, setTrials] = useState([]);
  const [allStores, setAllStores] = useState([]);
  const [metrics, setMetrics] = useState({ active_trials: 0, estimated_mrr_inr: 0, paying_customers: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSalesData();
  }, []);

  const fetchSalesData = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const headers = { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
      };

      const [storesRes, metricsRes] = await Promise.all([
        fetch("http://localhost:8000/api/hq/stores", { headers }),
        fetch("http://localhost:8000/api/hq/metrics", { headers })
      ]);

      if (metricsRes.ok) {
        const mData = await metricsRes.json();
        setMetrics(mData);
      }

      if (storesRes.ok) {
        const sData = await storesRes.json();
        setAllStores(sData);
        
        const activeTrialStores = sData
          .filter(store => store.tier === "TRIAL" || store.status === "TRIAL")
          .map(store => {
            const today = new Date();
            const endDate = new Date(store.trial_ends);
            const daysLeft = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
            
            let status = "COLD";
            if (daysLeft <= 2) status = "HOT";
            else if (daysLeft <= 5) status = "WARM";

            return {
              ...store,
              daysLeft: daysLeft > 0 ? daysLeft : 0,
              leadStatus: daysLeft < 0 ? "EXPIRED" : status
            };
          })
          .sort((a, b) => a.daysLeft - b.daysLeft);

        setTrials(activeTrialStores);
      }
    } catch (error) {
      console.error("Failed to load sales data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpgradeToPaid = async (storeId, storeName) => {
    if (!window.confirm(`Close the deal? Upgrade ${storeName} to a paid GROWTH plan?`)) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/hq/stores/${storeId}/tier`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ tier: "GROWTH" })
      });

      if (res.ok) {
        alert("Deal Closed! Store upgraded successfully.");
        fetchSalesData(); 
      } else {
        const err = await res.json();
        alert(`Upgrade failed: ${err.detail || 'Unknown error'}`);
      }
    } catch (err) {
      alert("Network error processing the upgrade.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount || 0);
  };

  // Calculations for Advanced Tabs
  const potentialMrr = useMemo(() => trials.length * 2499, [trials]);
  const conversionRate = useMemo(() => {
    const total = metrics.paying_customers + metrics.active_trials;
    return total > 0 ? ((metrics.paying_customers / total) * 100).toFixed(1) : "0.0";
  }, [metrics]);

  // --- TAB RENDERERS ---
  const renderPipelineTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SalesMetricCard title="Trials Closing Soon" value={isLoading ? "..." : trials.filter(t => t.daysLeft <= 3).length} icon={AlertCircle} />
        <MetricCard title="Total Active Trials" value={isLoading ? "..." : trials.length} icon={Users} color="blue" />
        <MetricCard title="Current MRR" value={isLoading ? "..." : formatCurrency(metrics.estimated_mrr_inr)} icon={IndianRupee} color="emerald" />
      </div>

      <div className="bg-white/50 border border-white/80 rounded-[2rem] backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <div className="px-6 lg:px-8 py-6 border-b border-white/60 flex justify-between items-center bg-white/40">
          <h2 className="text-lg font-black text-slate-800 tracking-wide">High-Priority Trials Pipeline</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-100/50 text-[11px] uppercase tracking-[0.15em] text-slate-500 font-extrabold border-b border-white/60">
                <th className="px-6 lg:px-8 py-5">Prospect Store</th>
                <th className="px-6 lg:px-8 py-5">Trial Status</th>
                <th className="px-6 lg:px-8 py-5">Lead Temp</th>
                <th className="px-6 lg:px-8 py-5 text-right">Sales Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/60">
              {isLoading ? (
                <tr><td colSpan="4" className="px-8 py-12 text-center text-slate-500 text-sm font-bold">Loading active pipeline...</td></tr>
              ) : trials.length === 0 ? (
                <tr><td colSpan="4" className="px-8 py-12 text-center text-slate-500 text-sm font-bold">No active trials in the pipeline.</td></tr>
              ) : (
                trials.map((store) => (
                  <tr key={store.id} className="hover:bg-white/60 transition-colors">
                    <td className="px-6 lg:px-8 py-5">
                      <p className="font-bold text-slate-800">{store.name}</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate max-w-[120px] lg:max-w-[200px]">{store.email}</p>
                    </td>
                    <td className="px-6 lg:px-8 py-5">
                      <span className={`text-xs font-bold flex items-center gap-1.5 ${store.leadStatus === 'EXPIRED' ? 'text-rose-600' : store.daysLeft <= 3 ? 'text-amber-600' : 'text-emerald-600'}`}>
                        <Calendar size={14} /> 
                        {store.leadStatus === 'EXPIRED' ? "Trial Expired" : `${store.daysLeft} Days Left`}
                      </span>
                    </td>
                    <td className="px-6 lg:px-8 py-5">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border shadow-sm ${
                        store.leadStatus === 'HOT' || store.leadStatus === 'EXPIRED' ? 'bg-rose-100 text-rose-700 border-rose-200' :
                        store.leadStatus === 'WARM' ? 'bg-amber-100 text-amber-700 border-amber-200' :
                        'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {store.leadStatus}
                      </span>
                    </td>
                    <td className="px-6 lg:px-8 py-5 text-right space-x-2 whitespace-nowrap">
                      <a href={`mailto:${store.email}?subject=Your Laxvira Trial`} className="bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 shadow-sm transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold">
                        <Mail size={14} /> Email
                      </a>
                      <button onClick={() => handleUpgradeToPaid(store.id, store.name)} className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold">
                        <ArrowUpRight size={14} /> Upgrade
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );



  const renderTrialsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/50 border border-white/80 rounded-[2rem] backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <div className="px-6 lg:px-8 py-6 border-b border-white/60 flex justify-between items-center bg-white/40">
          <h2 className="text-lg font-black text-slate-800 tracking-wide">All Store Accounts Overview</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-100/50 text-[11px] uppercase tracking-[0.15em] text-slate-500 font-extrabold border-b border-white/60">
                <th className="px-6 lg:px-8 py-5">Store Name</th>
                <th className="px-6 lg:px-8 py-5">Current Tier</th>
                <th className="px-6 lg:px-8 py-5">Status</th>
                <th className="px-6 lg:px-8 py-5 text-right">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/60">
              {isLoading ? (
                <tr><td colSpan="4" className="px-8 py-12 text-center text-slate-500 text-sm font-bold">Loading store accounts...</td></tr>
              ) : allStores.length === 0 ? (
                <tr><td colSpan="4" className="px-8 py-12 text-center text-slate-500 text-sm font-bold">No accounts found.</td></tr>
              ) : (
                allStores.map((store) => (
                  <tr key={store.id} className="hover:bg-white/60 transition-colors">
                    <td className="px-6 lg:px-8 py-5 font-bold text-slate-800">{store.name}</td>
                    <td className="px-6 lg:px-8 py-5 font-black text-slate-700">{store.tier || 'BASIC'}</td>
                    <td className="px-6 lg:px-8 py-5">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border shadow-sm ${
                        store.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                        store.status === 'TRIAL' ? 'bg-amber-100 text-amber-700 border-amber-200' :
                        'bg-rose-100 text-rose-700 border-rose-200'
                      }`}>
                        {store.status || 'ACTIVE'}
                      </span>
                    </td>
                    <td className="px-6 lg:px-8 py-5 text-right">
                      <a href={`mailto:${store.email}`} className="text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold">
                        <Mail size={14} /> Send Email
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  // const renderTrialsTab = () => (
  //   <div className="space-y-6">
  //     <div className="bg-white/50 border border-white/80 rounded-[2rem] backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
  //       <div className="px-6 lg:px-8 py-6 border-b border-white/60 flex justify-between items-center bg-white/40">
  //         <h2 className="text-lg font-black text-slate-800 tracking-wide">All Store Accounts Overview</h2>
  //       </div>
  //       <div className="overflow-x-auto">
  //         <table className="w-full text-left border-collapse min-w-[700px]">
  //           <thead>
  //             <tr className="bg-slate-100/50 text-[11px] uppercase tracking-[0.15em] text-slate-500 font-extrabold border-b border-white/60">
  //               <th className="px-6 lg:px-8 py-5">Store Name</th>
  //               <th className="px-6 lg:px-8 py-5">Current Tier</th>
  //               <th className="px-6 lg:px-8 py-5">Status</th>
  //               <th className="px-6 lg:px-8 py-5 text-right">Contact</th>
  //             </tr>
  //           </thead>
  //           <tbody className="divide-y divide-white/60">
  //             {allStores.length === 0 ? (
  //               <tr><td colSpan="4" className="px-8 py-12 text-center text-slate-500 text-sm font-bold">No accounts found.</td></tr>
  //             ) : (
  //               allStores.map((store) => (
  //                 <tr key={store.id} className="hover:bg-white/60 transition-colors">
  //                   <td className="px-6 lg:px-8 py-5 font-bold text-slate-800">{store.name}</td>
  //                   <td className="px-6 lg:px-8 py-5 font-black text-slate-700">{store.tier || 'BASIC'}</td>
  //                   <td className="px-6 lg:px-8 py-5">
  //                     <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border shadow-sm ${
  //                       store.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
  //                       store.status === 'TRIAL' ? 'bg-amber-100 text-amber-700 border-amber-200' :
  //                       'bg-rose-100 text-rose-700 border-rose-200'
  //                     }`}>
  //                       {store.status || 'ACTIVE'}
  //                     </span>
  //                   </td>
  //                   <td className="px-6 lg:px-8 py-5 text-right">
  //                     <a href={`mailto:${store.email}`} className="text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold">
  //                       <Mail size={14} /> Send Email
  //                     </a>
  //                   </td>
  //                 </tr>
  //               ))
  //             )}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );

  const renderFinancialsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-sky-700 border border-blue-400 rounded-[2rem] p-8 shadow-xl text-white">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-100">Potential Pipeline MRR</h3>
            <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
              <Flame size={22} />
            </div>
          </div>
          <div className="text-4xl font-black tracking-tight">{formatCurrency(potentialMrr)}</div>
          <p className="text-blue-200 text-sm mt-4">Based on converting all {trials.length} active trials to the GROWTH plan.</p>
        </div>

        <div className="bg-white/60 border border-white/80 rounded-[2rem] p-8 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-slate-500">Sales Quota Attainment</h3>
            <div className="p-3 rounded-2xl bg-white border shadow-sm text-emerald-600 border-emerald-100">
              <CheckCircle2 size={22} />
            </div>
          </div>
          <div className="text-4xl font-black text-slate-800 tracking-tight">{formatCurrency(metrics.estimated_mrr_inr)}</div>
          
          <div className="mt-6">
            <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
              <span>Progress to Monthly Target (₹5,00,000)</span>
              <span>{Math.min(Math.round((metrics.estimated_mrr_inr / 500000) * 100), 100)}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full transition-all duration-1000" style={{width: `${Math.min((metrics.estimated_mrr_inr / 500000) * 100, 100)}%`}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMetricsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricCard title="Global Conversion Rate" value={`${conversionRate}%`} icon={Target} color="emerald" />
        <MetricCard title="Total Acquired Customers" value={metrics.paying_customers} icon={Briefcase} color="blue" />
      </div>

      <div className="bg-white/50 border border-white/80 rounded-[2rem] p-8 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <h2 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
          <TrendingUp size={20} className="text-purple-500"/> Conversion Velocity
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-800 text-lg">Average Time to Convert</h4>
            <p className="text-sm text-slate-500 mt-1">SaaS accounts currently take an average of <strong className="text-slate-800">2.4 days</strong> from trial start to paid upgrade.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-800 text-lg">Most Popular Initial Plan</h4>
            <p className="text-sm text-slate-500 mt-1"><strong className="text-blue-600">GROWTH Tier</strong> is selected by 68% of converting accounts upon trial expiration.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col lg:flex-row relative overflow-hidden selection:bg-blue-200 selection:text-blue-900">
      
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

      <aside className="w-full lg:w-72 shrink-0 relative z-20 bg-white/40 backdrop-blur-2xl border-b lg:border-b-0 lg:border-r border-white/60 flex flex-col lg:h-screen shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between lg:justify-start gap-3 mb-6 lg:mb-10 lg:pb-6 lg:border-b border-white/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-sky-600 shadow-lg shadow-blue-200 shrink-0">
                <Target className="text-white w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Sales Ops</h2>
                <p className="text-[10px] text-blue-600 font-mono tracking-widest font-bold hidden sm:block">PIPELINE & GROWTH</p>
              </div>
            </div>
            <button onClick={handleLogout} className="lg:hidden p-2 rounded-xl bg-white/60 text-rose-600 border border-white/80 shadow-sm">
              <LogOut size={18} />
            </button>
          </div>

          <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
            <SidebarItem icon={Briefcase} label="Active Pipeline" active={activeTab === "pipeline"} onClick={() => setActiveTab("pipeline")} />
            <SidebarItem icon={Users} label="All Store Accounts" active={activeTab === "trials"} onClick={() => setActiveTab("trials")} />
            <SidebarItem icon={IndianRupee} label="Financial Forecast" active={activeTab === "financials"} onClick={() => setActiveTab("financials")} />
            <SidebarItem icon={TrendingUp} label="Conversion Metrics" active={activeTab === "metrics"} onClick={() => setActiveTab("metrics")} />
          </nav>
        </div>

        <div className="hidden lg:block p-6 border-t border-white/60 bg-white/20">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/60 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-white/80 hover:border-rose-200 transition-all text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 relative z-10 p-4 sm:p-6 lg:p-10 h-screen overflow-y-auto">
        <header className="mb-6 lg:mb-10">
          <h1 className="text-2xl font-black text-slate-900 tracking-wide">Account Executive Console</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Track trial conversions, outreach tasks, and manage financial revenue targets.</p>
        </header>

        {activeTab === "pipeline" && renderPipelineTab()}
        {activeTab === "trials" && renderTrialsTab()}
        {activeTab === "financials" && renderFinancialsTab()}
        {activeTab === "metrics" && renderMetricsTab()}

      </main>
    </div>
  );
};

// SidebarItem updated for mobile responsiveness
const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <div onClick={onClick} className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider cursor-pointer transition-all whitespace-nowrap shrink-0 ${
    active ? "bg-white/80 text-blue-700 shadow-sm border border-white" : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
  }`}>
    <Icon size={16} className={active ? "text-blue-600" : "text-slate-400"} /> {label}
  </div>
);

const MetricCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white/60 border border-white/80 rounded-[2rem] p-6 sm:p-8 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
    <div className="flex justify-between items-start mb-4 sm:mb-6">
      <h3 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] text-slate-500">{title}</h3>
      <div className={`p-2.5 sm:p-3 rounded-2xl bg-white border shadow-sm text-${color}-600 border-${color}-100`}>
        <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
      </div>
    </div>
    <div className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">{value}</div>
  </div>
);

const SalesMetricCard = ({ title, value, icon: Icon }) => (
  <div className="bg-gradient-to-br from-blue-600 to-sky-700 border border-blue-400 rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_40px_-10px_rgba(37,99,235,0.4)] relative overflow-hidden text-white">
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
    <div className="flex justify-between items-start mb-4 sm:mb-6 relative z-10">
      <h3 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] text-blue-100">{title}</h3>
      <div className="p-2.5 sm:p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
        <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
      </div>
    </div>
    <div className="text-2xl sm:text-3xl font-black tracking-tight relative z-10">{value}</div>
  </div>
);

export default SalesDashboard;