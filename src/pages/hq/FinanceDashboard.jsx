// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { 
// //   IndianRupee, CreditCard, FileText, 
// //   PieChart, LogOut, Download, 
// //   ArrowUpRight, Receipt, Activity
// // } from "lucide-react";

// // const FinanceDashboard = () => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");
// //     navigate("/");
// //   };

// //   // Mock data for UI layout
// //   const recentTransactions = [
// //     { id: "INV-2041", store: "Gadget Hub", amount: "₹8,999", date: "Today", status: "PAID" },
// //     { id: "INV-2040", store: "The Book Nook", amount: "₹2,999", date: "Yesterday", status: "PAID" },
// //     { id: "INV-2039", store: "Sneakerhead Inc", amount: "₹14,999", date: "Oct 12", status: "OVERDUE" },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex relative overflow-hidden selection:bg-emerald-200 selection:text-emerald-900">
      
// //       {/* Light Glass Ambient Background */}
// //       <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
// //       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

// //       {/* Role-Specific Sidebar */}
// //       <aside className="w-72 relative z-20 bg-white/40 backdrop-blur-2xl border-r border-white/60 flex flex-col justify-between shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
// //         <div className="p-8">
// //           <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/60">
// //             <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-200">
// //               <IndianRupee className="text-white w-5 h-5" />
// //             </div>
// //             <div>
// //               <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Finance Ops</h2>
// //               <p className="text-[10px] text-emerald-600 font-mono tracking-widest font-bold">REVENUE & BILLING</p>
// //             </div>
// //           </div>

// //           <nav className="space-y-3">
// //             <SidebarItem icon={Activity} label="Revenue Overview" active />
// //             <SidebarItem icon={Receipt} label="Invoices & Billing" />
// //             <SidebarItem icon={CreditCard} label="Payment Gateways" />
// //             <SidebarItem icon={PieChart} label="Churn & Analytics" />
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
// //         <header className="mb-10 flex justify-between items-end">
// //           <div>
// //             <h1 className="text-2xl font-black text-slate-900 tracking-wide">Financial Command Center</h1>
// //             <p className="text-sm text-slate-500 mt-1">Monitor MRR, handle billing disputes, and track overarching corporate cash flow.</p>
// //           </div>
// //           <button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-sm px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all">
// //             <Download size={16} /> Export CSV
// //           </button>
// //         </header>

// //         {/* KPIs */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
// //           <FinanceMetricCard title="Current MRR" value="₹4,28,500" icon={IndianRupee} />
// //           <MetricCard title="Outstanding Invoices" value="₹34,000" icon={FileText} color="amber" />
// //           <MetricCard title="Net Retention Rate" value="104.2%" icon={PieChart} color="emerald" />
// //         </div>

// //         {/* Transactions Table */}
// //         <div className="bg-white/50 border border-white/80 rounded-[2rem] backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
// //           <div className="px-8 py-6 border-b border-white/60 flex justify-between items-center bg-white/40">
// //             <h2 className="text-lg font-black text-slate-800 tracking-wide">Recent SaaS Billing</h2>
// //           </div>

// //           <div className="overflow-x-auto">
// //             <table className="w-full text-left border-collapse">
// //               <thead>
// //                 <tr className="bg-slate-100/50 text-[11px] uppercase tracking-[0.15em] text-slate-500 font-extrabold border-b border-white/60">
// //                   <th className="px-8 py-5">Invoice No.</th>
// //                   <th className="px-8 py-5">Tenant Store</th>
// //                   <th className="px-8 py-5">Amount</th>
// //                   <th className="px-8 py-5">Status</th>
// //                   <th className="px-8 py-5 text-right">Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-white/60">
// //                 {recentTransactions.map((tx) => (
// //                   <tr key={tx.id} className="hover:bg-white/60 transition-colors">
// //                     <td className="px-8 py-5">
// //                       <p className="font-mono text-xs font-bold text-slate-600">{tx.id}</p>
// //                       <p className="text-[10px] text-slate-400 font-mono mt-0.5">{tx.date}</p>
// //                     </td>
// //                     <td className="px-8 py-5 font-bold text-slate-800">{tx.store}</td>
// //                     <td className="px-8 py-5 font-black text-slate-700">{tx.amount}</td>
// //                     <td className="px-8 py-5">
// //                       <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border shadow-sm ${
// //                         tx.status === 'PAID' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
// //                         'bg-rose-100 text-rose-700 border-rose-200'
// //                       }`}>
// //                         {tx.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-8 py-5 text-right">
// //                       <button className="text-emerald-600 hover:bg-emerald-50 border border-transparent hover:border-emerald-200 transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold">
// //                         View Receipt <ArrowUpRight size={14} />
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
// //     active ? "bg-white/80 text-emerald-700 shadow-sm border border-white" : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
// //   }`}>
// //     <Icon size={16} className={active ? "text-emerald-600" : "text-slate-400"} /> {label}
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

// // const FinanceMetricCard = ({ title, value, icon: Icon }) => (
// //   <div className="bg-gradient-to-br from-emerald-600 to-teal-700 border border-emerald-400 rounded-[2rem] p-8 shadow-[0_15px_40px_-10px_rgba(16,185,129,0.4)] relative overflow-hidden text-white">
// //     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
// //     <div className="flex justify-between items-start mb-6 relative z-10">
// //       <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-emerald-100">{title}</h3>
// //       <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
// //         <Icon size={22} />
// //       </div>
// //     </div>
// //     <div className="text-3xl font-black tracking-tight relative z-10">{value}</div>
// //   </div>
// // );

// // export default FinanceDashboard;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   IndianRupee, CreditCard, FileText, 
//   PieChart, LogOut, Download, 
//   ArrowUpRight, Receipt, Activity, Users, AlertCircle
// } from "lucide-react";

// const FinanceDashboard = () => {
//   const navigate = useNavigate();
//   const [metrics, setMetrics] = useState({ estimated_mrr_inr: 0, paying_customers: 0, active_trials: 0 });
//   const [stores, setStores] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchFinanceData();
//   }, []);

//   const fetchFinanceData = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };

//       const [metricsRes, storesRes] = await Promise.all([
//         fetch("http://localhost:8000/api/hq/metrics", { headers }),
//         fetch("http://localhost:8000/api/hq/stores", { headers })
//       ]);

//       if (metricsRes.ok) {
//         const mData = await metricsRes.json();
//         setMetrics(mData);
//       }
//       if (storesRes.ok) {
//         const sData = await storesRes.json();
//         setStores(sData);
//       }
//     } catch (error) {
//       console.error("Failed to load finance data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   const handleExportCSV = () => {
//     const headers = "Store ID,Store Name,Email,Tier,Status\n";
//     const rows = stores.map(s => `${s.id},"${s.name}","${s.email}",${s.tier},${s.status}`).join("\n");
//     const blob = new Blob([headers + rows], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `laxvira_finance_report_${new Date().toISOString().split('T')[0]}.csv`;
//     a.click();
//   };

//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount || 0);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex relative overflow-hidden selection:bg-emerald-200 selection:text-emerald-900">

//       {/* Light Glass Ambient Background */}
//       <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

//       {/* Role-Specific Sidebar */}
//       <aside className="w-72 relative z-20 bg-white/40 backdrop-blur-2xl border-r border-white/60 flex flex-col justify-between shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
//         <div className="p-8">
//           <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/60">
//             <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-200">
//               <IndianRupee className="text-white w-5 h-5" />
//             </div>
//             <div>
//               <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Finance Ops</h2>
//               <p className="text-[10px] text-emerald-600 font-mono tracking-widest font-bold">REVENUE & BILLING</p>
//             </div>
//           </div>

//           <nav className="space-y-3">
//             <SidebarItem icon={Activity} label="Revenue Overview" active />
//             <SidebarItem icon={Receipt} label="Tenant Subscriptions" />
//             <SidebarItem icon={CreditCard} label="Payment Gateways" />
//             <SidebarItem icon={PieChart} label="Churn & Analytics" />
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
//         <header className="mb-10 flex justify-between items-end">
//           <div>
//             <h1 className="text-2xl font-black text-slate-900 tracking-wide">Financial Command Center</h1>
//             <p className="text-sm text-slate-500 mt-1">Monitor MRR, handle billing disputes, and track overarching corporate cash flow.</p>
//           </div>
//           <button 
//             onClick={handleExportCSV}
//             className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-sm px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
//           >
//             <Download size={16} /> Export CSV
//           </button>
//         </header>

//         {/* KPIs */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//           <FinanceMetricCard 
//             title="Current MRR" 
//             value={isLoading ? "..." : formatCurrency(metrics.estimated_mrr_inr)} 
//             icon={IndianRupee} 
//           />
//           <MetricCard 
//             title="Paying Customers" 
//             value={isLoading ? "..." : metrics.paying_customers} 
//             icon={Users} 
//             color="emerald" 
//           />
//           <MetricCard 
//             title="Active Trials" 
//             value={isLoading ? "..." : metrics.active_trials} 
//             icon={Activity} 
//             color="amber" 
//           />
//         </div>

//         {/* Transactions Table */}
//         <div className="bg-white/50 border border-white/80 rounded-[2rem] backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
//           <div className="px-8 py-6 border-b border-white/60 flex justify-between items-center bg-white/40">
//             <h2 className="text-lg font-black text-slate-800 tracking-wide">Tenant Subscriptions & Billing</h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-slate-100/50 text-[11px] uppercase tracking-[0.15em] text-slate-500 font-extrabold border-b border-white/60">
//                   <th className="px-8 py-5">Store ID</th>
//                   <th className="px-8 py-5">Tenant Name</th>
//                   <th className="px-8 py-5">Plan Tier</th>
//                   <th className="px-8 py-5">Status</th>
//                   <th className="px-8 py-5 text-right">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-white/60">
//                 {isLoading ? (
//                   <tr><td colSpan="5" className="px-8 py-10 text-center text-slate-500 text-sm font-bold">Loading billing data...</td></tr>
//                 ) : stores.length === 0 ? (
//                   <tr><td colSpan="5" className="px-8 py-10 text-center text-slate-500 text-sm font-bold">No tenants found.</td></tr>
//                 ) : (
//                   stores.map((store) => (
//                     <tr key={store.id} className="hover:bg-white/60 transition-colors">
//                       <td className="px-8 py-5">
//                         <p className="font-mono text-xs font-bold text-slate-600">TENANT-{store.id.toString().padStart(4, '0')}</p>
//                         <p className="text-[10px] text-slate-400 font-mono mt-0.5">{store.email}</p>
//                       </td>
//                       <td className="px-8 py-5 font-bold text-slate-800">{store.name}</td>
//                       <td className="px-8 py-5 font-black text-slate-700">{store.tier}</td>
//                       <td className="px-8 py-5">
//                         <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border shadow-sm ${
//                           store.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
//                           store.status === 'TRIAL' ? 'bg-amber-100 text-amber-700 border-amber-200' :
//                           'bg-rose-100 text-rose-700 border-rose-200'
//                         }`}>
//                           {store.status}
//                         </span>
//                       </td>
//                       <td className="px-8 py-5 text-right">
//                         <button className="text-emerald-600 hover:bg-emerald-50 border border-transparent hover:border-emerald-200 transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold">
//                           Manage Billing <ArrowUpRight size={14} />
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
//     active ? "bg-white/80 text-emerald-700 shadow-sm border border-white" : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
//   }`}>
//     <Icon size={16} className={active ? "text-emerald-600" : "text-slate-400"} /> {label}
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

// const FinanceMetricCard = ({ title, value, icon: Icon }) => (
//   <div className="bg-gradient-to-br from-emerald-600 to-teal-700 border border-emerald-400 rounded-[2rem] p-8 shadow-[0_15px_40px_-10px_rgba(16,185,129,0.4)] relative overflow-hidden text-white">
//     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
//     <div className="flex justify-between items-start mb-6 relative z-10">
//       <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-emerald-100">{title}</h3>
//       <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
//         <Icon size={22} />
//       </div>
//     </div>
//     <div className="text-3xl font-black tracking-tight relative z-10">{value}</div>
//   </div>
// );

// export default FinanceDashboard;

import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { 
  IndianRupee, CreditCard, PieChart, LogOut, Download, 
  ArrowUpRight, Receipt, Activity, Users, 
  TrendingUp, AlertCircle, Settings2, BarChart3
} from "lucide-react";

const FinanceDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("subscriptions"); 
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Expanded state to hold real backend aggregations
  const [metrics, setMetrics] = useState({ 
    estimated_mrr_inr: 0, 
    paying_customers: 0, 
    active_trials: 0,
    ltv: 0,
    cac: 0,
    churn_rate: 0,
    nrr: 0,
    cashflow_history: []
  });

  useEffect(() => {
    fetchFinanceData();
  }, []);

  const fetchFinanceData = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const [metricsRes, storesRes] = await Promise.all([
        fetch("http://localhost:8000/api/hq/metrics", { headers }),
        fetch("http://localhost:8000/api/hq/stores", { headers })
      ]);

      if (metricsRes.ok) {
        const mData = await metricsRes.json();
        setMetrics(mData);
      }
      if (storesRes.ok) {
        const sData = await storesRes.json();
        setStores(sData);
      }
    } catch (error) {
      console.error("Failed to load finance data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleExportCSV = () => {
    const headers = "Store ID,Store Name,Email,Tier,Status\n";
    const rows = stores.map(s => `${s.id},"${s.name}","${s.email}",${s.tier},${s.status}`).join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `laxvira_finance_report_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount || 0);
  };

  // --- Dynamic Tier Calculations ---
  const tierDistribution = useMemo(() => {
    const enterprise = stores.filter(s => s.tier === 'ENTERPRISE' && s.status === 'ACTIVE').length;
    const growth = stores.filter(s => s.tier === 'GROWTH' && s.status === 'ACTIVE').length;
    const basic = stores.filter(s => s.tier === 'BASIC' && s.status === 'ACTIVE').length;
    const totalPaid = enterprise + growth + basic || 1; // Prevent division by zero
    
    return {
      enterprisePct: Math.round((enterprise / totalPaid) * 100),
      growthPct: Math.round((growth / totalPaid) * 100),
      basicPct: Math.round((basic / totalPaid) * 100)
    };
  }, [stores]);

  const ltvCacRatio = metrics.cac > 0 ? (metrics.ltv / metrics.cac).toFixed(1) : "0.0";

  // --- 1. SUBSCRIPTIONS TAB ---
  const renderSubscriptionsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FinanceMetricCard title="Current MRR" value={isLoading ? "..." : formatCurrency(metrics.estimated_mrr_inr)} icon={IndianRupee} />
        <MetricCard title="Paying Customers" value={isLoading ? "..." : metrics.paying_customers} icon={Users} color="emerald" />
        <MetricCard title="Active Trials" value={isLoading ? "..." : metrics.active_trials} icon={Activity} color="amber" />
      </div>

      <div className="bg-white/50 border border-white/80 rounded-[2rem] backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <div className="px-6 lg:px-8 py-6 border-b border-white/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/40">
          <h2 className="text-lg font-black text-slate-800 tracking-wide">Tenant Subscriptions & Billing</h2>
          <button onClick={handleExportCSV} className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-sm px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all w-full sm:w-auto justify-center">
            <Download size={16} /> Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-100/50 text-[11px] uppercase tracking-[0.15em] text-slate-500 font-extrabold border-b border-white/60">
                <th className="px-6 lg:px-8 py-5">Store ID</th>
                <th className="px-6 lg:px-8 py-5">Tenant Name</th>
                <th className="px-6 lg:px-8 py-5">Plan Tier</th>
                <th className="px-6 lg:px-8 py-5">Status</th>
                <th className="px-6 lg:px-8 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/60">
              {isLoading ? (
                <tr><td colSpan="5" className="px-8 py-10 text-center text-slate-500 text-sm font-bold">Loading billing data...</td></tr>
              ) : stores.length === 0 ? (
                <tr><td colSpan="5" className="px-8 py-10 text-center text-slate-500 text-sm font-bold">No tenants found.</td></tr>
              ) : (
                stores.map((store) => (
                  <tr key={store.id} className="hover:bg-white/60 transition-colors">
                    <td className="px-6 lg:px-8 py-5">
                      <p className="font-mono text-xs font-bold text-slate-600">TENANT-{store.id.toString().padStart(4, '0')}</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate max-w-[120px] lg:max-w-[200px]">{store.email}</p>
                    </td>
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
                      <button onClick={() => alert(`Billing management for ${store.name} will be available in the next patch.`)} className="text-emerald-600 hover:bg-emerald-50 border border-transparent hover:border-emerald-200 transition-all px-3 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold whitespace-nowrap">
                        Manage <ArrowUpRight size={14} />
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

  // --- 2. REVENUE OVERVIEW TAB ---
  const renderRevenueTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/60 border border-white/80 rounded-[2rem] p-8 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-slate-500">Annual Run Rate (ARR)</h3>
              <div className="text-4xl font-black text-slate-800 tracking-tight mt-2">{formatCurrency(metrics.estimated_mrr_inr * 12)}</div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border shadow-sm text-emerald-600 border-emerald-100">
              <TrendingUp size={28} />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Enterprise Tier Contribution</span> <span>{tierDistribution.enterprisePct}%</span></div>
              <div className="w-full bg-slate-100 rounded-full h-2.5"><div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000" style={{width: `${tierDistribution.enterprisePct}%`}}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Growth Tier Contribution</span> <span>{tierDistribution.growthPct}%</span></div>
              <div className="w-full bg-slate-100 rounded-full h-2.5"><div className="bg-teal-500 h-2.5 rounded-full transition-all duration-1000" style={{width: `${tierDistribution.growthPct}%`}}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1"><span>Basic Tier Contribution</span> <span>{tierDistribution.basicPct}%</span></div>
              <div className="w-full bg-slate-100 rounded-full h-2.5"><div className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000" style={{width: `${tierDistribution.basicPct}%`}}></div></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-[2rem] p-8 shadow-xl text-white">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.15em] text-slate-400 mb-6">Historical MRR Velocity</h3>
          <div className="h-[200px] flex items-end justify-between gap-2 border-b border-slate-700 pb-2">
            {metrics.cashflow_history && metrics.cashflow_history.length > 0 ? (
              metrics.cashflow_history.map((height, i) => (
                <div key={i} className="w-full relative group">
                  <div className="bg-emerald-500 hover:bg-emerald-400 rounded-t-sm transition-all w-full" style={{height: `${height}%`}}></div>
                </div>
              ))
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm font-bold">Awaiting historical data from backend...</div>
            )}
          </div>
          <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            <span>M-6</span><span>M-5</span><span>M-4</span><span>M-3</span><span>M-2</span><span>M-1</span><span>CUR</span>
          </div>
        </div>
      </div>
    </div>
  );

  // --- 3. PAYMENT GATEWAYS TAB ---
  const renderGatewaysTab = () => (
    <div className="space-y-6">
      <div className="bg-white/50 border border-white/80 rounded-[2rem] p-8 backdrop-blur-2xl shadow-sm">
        <h2 className="text-xl font-black text-slate-800 mb-6">Connected Gateways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-300 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-black text-xl">S</div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-lg">Active</span>
            </div>
            <h3 className="font-bold text-slate-800 text-lg">Stripe</h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">Primary global processor.</p>
            <button className="w-full py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 flex justify-center items-center gap-2">
              <Settings2 size={16} /> Configure
            </button>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-indigo-300 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-black text-xl">R</div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-lg">Active</span>
            </div>
            <h3 className="font-bold text-slate-800 text-lg">Razorpay</h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">Primary processor for INR & UPI.</p>
            <button className="w-full py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 flex justify-center items-center gap-2">
              <Settings2 size={16} /> Configure
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // --- 4. CHURN & ANALYTICS TAB ---
  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricCard title="Net Revenue Retention (NRR)" value={`${metrics.nrr}%`} icon={TrendingUp} color="emerald" />
        <MetricCard title="Monthly Churn Rate" value={`${metrics.churn_rate}%`} icon={AlertCircle} color="rose" />
      </div>

      <div className="bg-white/50 border border-white/80 rounded-[2rem] p-8 backdrop-blur-2xl shadow-sm">
        <h2 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2"><PieChart size={20} className="text-purple-500"/> Key Financial Metrics</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="font-bold text-slate-800">Customer Lifetime Value (LTV)</h4>
              <p className="text-xs text-slate-500 mt-1">Average revenue generated per tenant before cancellation.</p>
            </div>
            <div className="text-2xl font-black text-emerald-600">{formatCurrency(metrics.ltv)}</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="font-bold text-slate-800">Customer Acquisition Cost (CAC)</h4>
              <p className="text-xs text-slate-500 mt-1">Average cost to acquire a new paying tenant.</p>
            </div>
            <div className="text-2xl font-black text-amber-600">{formatCurrency(metrics.cac)}</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="font-bold text-slate-800">LTV to CAC Ratio</h4>
              <p className="text-xs text-slate-500 mt-1">Healthy SaaS benchmark is &gt; 3.0</p>
            </div>
            <div className="text-2xl font-black text-blue-600">{ltvCacRatio}x <span className="text-xs text-slate-400 ml-2 font-medium">calculated</span></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col lg:flex-row relative overflow-hidden selection:bg-emerald-200 selection:text-emerald-900">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-200/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

      <aside className="w-full lg:w-72 shrink-0 relative z-20 bg-white/40 backdrop-blur-2xl border-b lg:border-b-0 lg:border-r border-white/60 flex flex-col lg:h-screen shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between lg:justify-start gap-3 mb-6 lg:mb-10 lg:pb-6 lg:border-b border-white/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-200 shrink-0">
                <IndianRupee className="text-white w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">Finance Ops</h2>
                <p className="text-[10px] text-emerald-600 font-mono tracking-widest font-bold hidden sm:block">REVENUE & BILLING</p>
              </div>
            </div>
            <button onClick={handleLogout} className="lg:hidden p-2 rounded-xl bg-white/60 text-rose-600 border border-white/80 shadow-sm">
              <LogOut size={18} />
            </button>
          </div>

          <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
            <SidebarItem icon={Receipt} label="Tenant Subscriptions" active={activeTab === "subscriptions"} onClick={() => setActiveTab("subscriptions")} />
            <SidebarItem icon={BarChart3} label="Revenue Overview" active={activeTab === "revenue"} onClick={() => setActiveTab("revenue")} />
            <SidebarItem icon={CreditCard} label="Payment Gateways" active={activeTab === "gateways"} onClick={() => setActiveTab("gateways")} />
            <SidebarItem icon={PieChart} label="Churn & Analytics" active={activeTab === "analytics"} onClick={() => setActiveTab("analytics")} />
          </nav>
        </div>

        <div className="hidden lg:block p-6 border-t border-white/60 bg-white/20">
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/60 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-white/80 hover:border-rose-200 transition-all text-xs font-bold uppercase tracking-wider shadow-sm">
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 relative z-10 p-4 sm:p-6 lg:p-10 h-screen overflow-y-auto">
        <header className="mb-6 lg:mb-10">
          <h1 className="text-2xl font-black text-slate-900 tracking-wide">Financial Command Center</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Monitor MRR, handle billing disputes, and track overarching corporate cash flow.</p>
        </header>

        {activeTab === "subscriptions" && renderSubscriptionsTab()}
        {activeTab === "revenue" && renderRevenueTab()}
        {activeTab === "gateways" && renderGatewaysTab()}
        {activeTab === "analytics" && renderAnalyticsTab()}
      </main>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <div onClick={onClick} className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider cursor-pointer transition-all whitespace-nowrap shrink-0 ${
    active ? "bg-white/80 text-emerald-700 shadow-sm border border-white" : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
  }`}>
    <Icon size={16} className={active ? "text-emerald-600" : "text-slate-400"} /> {label}
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

const FinanceMetricCard = ({ title, value, icon: Icon }) => (
  <div className="bg-gradient-to-br from-emerald-600 to-teal-700 border border-emerald-400 rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_40px_-10px_rgba(16,185,129,0.4)] relative overflow-hidden text-white">
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
    <div className="flex justify-between items-start mb-4 sm:mb-6 relative z-10">
      <h3 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] text-emerald-100">{title}</h3>
      <div className="p-2.5 sm:p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
        <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
      </div>
    </div>
    <div className="text-2xl sm:text-3xl font-black tracking-tight relative z-10">{value}</div>
  </div>
);

export default FinanceDashboard;