// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from "react-router-dom";
// // import { 
// //   LayoutDashboard, Users, UserRound, CreditCard, 
// //   ShieldCheck, LineChart, Settings, LogOut, 
// //   Search, Bell, ArrowUpRight, TrendingUp, ArrowUpRightFromCircle,
// //   Globe, Building2, Activity, IndianRupee, ShieldAlert,
// //   UserPlus, Lock, Mail, User, Loader2, Layers, Briefcase,
// //   Smartphone, Clock, Save, Server, Database, CheckCircle,
// //   Moon, Sun, ChevronRight
// // } from 'lucide-react';
// // import logo from '../assets/logo.jpg';

// // const SuperAdminDashboard = () => {
// //   const navigate = useNavigate();
  
// //   // --- PRESERVED STATE MANAGEMENT ---
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [activeTab, setActiveTab] = useState("tenants");
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const [hqData, setHqData] = useState({
// //     metrics: { total_tenants: 0, active_trials: 0, paying_customers: 0, estimated_mrr_inr: 0 },
// //     stores: []
// //   });

// //   const [staffList, setStaffList] = useState([]);
// //   const [isStaffLoading, setIsStaffLoading] = useState(false);
// //   const [isSubmittingStaff, setIsSubmittingStaff] = useState(false);
// //   const [staffError, setStaffError] = useState(null);
// //   const [staffFormData, setStaffFormData] = useState({
// //     name: '', email: '', password: '', hq_role: 'SALES'
// //   });

// //   // --- NEW HEADER UI STATE ---
// //   const [showProfileMenu, setShowProfileMenu] = useState(false);
// //   const [showNotifications, setShowNotifications] = useState(false);

// //   // --- NEW STATE FOR ADDED TABS & THEME ---
// //   const [isDarkMode, setIsDarkMode] = useState(false); // Default to Light Mode
  
// //   const [subscriptionPrices, setSubscriptionPrices] = useState({
// //     BASIC: 999,
// //     GROWTH: 2499,
// //     ENTERPRISE: 4999
// //   });
// //   const [isSavingPrices, setIsSavingPrices] = useState(false);
// //   const [systemSettings, setSystemSettings] = useState({
// //     maintenanceMode: false,
// //     newRegistrations: true,
// //     emailNotifications: true,
// //   });

// //   // --- PRESERVED API LOGIC ---
// //   useEffect(() => {
// //     const fetchHqData = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) {
// //           navigate("/");
// //           return;
// //         }

// //         const [metricsRes, storesRes] = await Promise.all([
// //           fetch("http://localhost:8000/api/hq/metrics", { headers: { Authorization: `Bearer ${token}` } }),
// //           fetch("http://localhost:8000/api/hq/stores", { headers: { Authorization: `Bearer ${token}` } })
// //         ]);

// //         if (metricsRes.status === 403 || storesRes.status === 403) {
// //           navigate("/dashboard");
// //           return;
// //         }

// //         const metrics = await metricsRes.json();
// //         const stores = await storesRes.json();
// //         setHqData({ metrics, stores });
// //       } catch (err) {
// //         console.error("Failed to load HQ data:", err);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
// //     fetchHqData();
// //   }, [navigate]);

// //   const fetchStaff = async () => {
// //     setIsStaffLoading(true);
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await fetch('http://localhost:8000/api/hq/staff', { headers: { Authorization: `Bearer ${token}` } });
// //       if (!res.ok) throw new Error("Failed to load staff directory");
// //       const data = await res.json();
// //       setStaffList(data);
// //     } catch (err) {
// //       setStaffError(err.message);
// //     } finally {
// //       setIsStaffLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (activeTab === "staff") fetchStaff();
// //   }, [activeTab]);

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   const handleImpersonate = async (storeId) => {
// //     if (!window.confirm("Initialize secure impersonation session?")) return;
// //     try {
// //       const adminToken = localStorage.getItem("token");
// //       const response = await fetch(`http://localhost:8000/api/hq/impersonate/${storeId}`, {
// //         method: "POST", headers: { Authorization: `Bearer ${adminToken}` }
// //       });
// //       if (!response.ok) throw new Error("Impersonation rejected by server");

// //       const data = await response.json();
// //       localStorage.setItem("superadmin_token", adminToken);
// //       localStorage.setItem("token", data.access_token);
// //       window.location.href = "/dashboard";
// //     } catch (err) {
// //       console.error("Impersonation failed:", err);
// //       alert("Failed to initialize impersonation session.");
// //     }
// //   };

// //   const handleStaffInputChange = (e) => {
// //     setStaffFormData({ ...staffFormData, [e.target.name]: e.target.value });
// //   };

// //   const handleCreateStaff = async (e) => {
// //     e.preventDefault();
// //     setIsSubmittingStaff(true);
// //     setStaffError(null);
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await fetch('http://localhost:8000/api/hq/staff', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
// //         body: JSON.stringify(staffFormData)
// //       });
// //       if (!res.ok) {
// //         const errData = await res.json();
// //         throw new Error(errData.detail || "Failed to create staff account");
// //       }
// //       setStaffFormData({ name: '', email: '', password: '', hq_role: 'SALES' });
// //       await fetchStaff();
// //     } catch (err) {
// //       setStaffError(err.message);
// //     } finally {
// //       setIsSubmittingStaff(false);
// //     }
// //   };

// //   const handlePriceChange = (tier, value) => {
// //     setSubscriptionPrices(prev => ({ ...prev, [tier]: Number(value) }));
// //   };

// //   const handleSavePrices = () => {
// //     setIsSavingPrices(true);
// //     setTimeout(() => {
// //       setIsSavingPrices(false);
// //       alert("Subscription pricing updated successfully across all regions.");
// //     }, 800);
// //   };

// //   const toggleSetting = (key) => {
// //     setSystemSettings(prev => ({ ...prev, [key]: !prev[key] }));
// //   };

// //   const filteredStores = hqData.stores.filter(store => 
// //     store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     store.email.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const filteredStaff = staffList.filter(staff => 
// //     staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     staff.email.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const navItems = [
// //     { id: 'tenants', name: 'Tenants', icon: Layers },
// //     { id: 'staff', name: 'Staff Matrix', icon: Briefcase },
// //     { id: 'subscriptions', name: 'Subscriptions', icon: CreditCard },
// //     { id: 'analytics', name: 'Analytics', icon: LineChart },
// //     { id: 'settings', name: 'Settings', icon: Settings },
// //   ];

// //   if (isLoading) {
// //     return (
// //       <div className={`min-h-screen flex items-center justify-center font-sans ${isDarkMode ? 'bg-[#050f1a]' : 'bg-slate-50'}`}>
// //         <div className="animate-pulse flex flex-col items-center">
// //           <ShieldAlert className="text-[#C5A059] w-14 h-14 mb-4 animate-bounce" />
// //           <p className={`font-bold tracking-[0.2em] uppercase text-sm ${isDarkMode ? 'text-[#C5A059]' : 'text-slate-500'}`}>Initializing Core...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Dynamic Theme Classes
// //   const theme = {
// //     bg: isDarkMode ? 'bg-[#050f1a]' : 'bg-slate-50',
// //     containerBg: isDarkMode ? 'bg-[#0f172a]/40 backdrop-blur-[40px]' : 'bg-white',
// //     sidebarBg: isDarkMode ? 'bg-slate-900/20' : 'bg-slate-50',
// //     border: isDarkMode ? 'border-white/10' : 'border-slate-200',
// //     borderSoft: isDarkMode ? 'border-white/5' : 'border-slate-100',
// //     textMain: isDarkMode ? 'text-white' : 'text-slate-900',
// //     textSub: isDarkMode ? 'text-slate-400' : 'text-slate-500',
// //     cardBg: isDarkMode ? 'bg-white/5 backdrop-blur-md' : 'bg-white',
// //     hoverBg: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-50',
// //     inputBg: isDarkMode ? 'bg-black/20' : 'bg-slate-50',
// //   };

// //   return (
// //     <div className={`min-h-screen w-full p-4 sm:p-6 flex items-center justify-center font-sans transition-colors duration-300 ${theme.bg}`}>
      
// //       {/* --- AMBIENT VOLUMETRIC LIGHTING (Only visible in dark mode) --- */}
// //       {isDarkMode && (
// //         <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-500">
// //           <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0369a1]/30 rounded-full blur-[120px] mix-blend-screen"></div>
// //           <div className="absolute top-[-10%] left-[30%] w-[600px] h-[600px] bg-[#38bdf8]/15 rounded-full blur-[100px] mix-blend-screen"></div>
// //           <div className="absolute top-[20%] -right-[10%] w-[700px] h-[700px] bg-[#C5A059]/15 rounded-full blur-[120px] mix-blend-screen"></div>
// //         </div>
// //       )}

// //       {/* --- MAIN DASHBOARD CONTAINER --- */}
// //       <div className={`w-full max-w-[1600px] h-[calc(100vh-48px)] border shadow-xl rounded-[2.5rem] flex relative overflow-hidden transition-colors duration-300 ${theme.containerBg} ${theme.border}`}>
        
// //         {/* --- LEFT SIDEBAR --- */}
// //         <aside className={`w-64 border-r flex flex-col p-6 shrink-0 transition-colors duration-300 ${theme.sidebarBg} ${theme.border}`}>
// //           <div className="flex items-center gap-3 mb-10 pl-2">
// //             <img src={logo} alt="Laxvira" className={`w-8 h-8 rounded-lg object-contain p-0.5 shadow-sm border ${isDarkMode ? 'bg-white/90 border-transparent' : 'bg-white border-slate-200'}`} />
// //             <span className={`font-black tracking-widest text-lg ${theme.textMain}`}>LAXVIRA HQ</span>
// //           </div>

// //           <div className="mb-8 pl-2">
// //             <span className="bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-sm">
// //               SYS.ADMIN
// //             </span>
// //           </div>

// //           <nav className="flex-1 space-y-2">
// //             {navItems.map((item) => {
// //               const Icon = item.icon;
// //               const isActive = activeTab === item.id;
// //               return (
// //                 <button
// //                   key={item.id}
// //                   onClick={() => setActiveTab(item.id)}
// //                   className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
// //                     isActive 
// //                       ? 'bg-[#C5A059]/10 text-[#C5A059] shadow-sm' 
// //                       : `${theme.textSub} hover:${theme.textMain} ${theme.hoverBg}`
// //                   }`}
// //                 >
// //                   <Icon size={18} className={isActive ? 'text-[#C5A059]' : theme.textSub} />
// //                   {item.name}
// //                 </button>
// //               );
// //             })}
// //           </nav>

// //           {/* Sidebar Logout Removed from here to conform with Account Dropdown mapping */}
// //         </aside>

// //         {/* --- MAIN CONTENT AREA --- */}
// //         <main className={`flex-1 flex flex-col overflow-hidden relative transition-colors duration-300 ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}>
          
// //           {/* --- GLOBAL WATERMARK --- */}
// //           <div className={`absolute inset-0 pointer-events-none flex items-center justify-center z-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-[0.02] mix-blend-screen' : 'opacity-[0.03] mix-blend-multiply'}`}>
// //             <img src={logo} alt="Laxvira" className="w-[600px] h-[600px] object-contain grayscale -rotate-12" />
// //           </div>

// //           <header className={`h-24 px-10 flex items-center justify-end gap-5 border-b shrink-0 transition-colors duration-300 relative z-50 ${theme.borderSoft}`}>
            
// //             {/* Global Search Bar */}
// //             <div className={`flex items-center gap-2 rounded-full border px-4 py-2.5 transition-all duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 focus-within:border-[#C5A059]' : 'bg-slate-50 border-slate-200 focus-within:border-[#C5A059]'}`}>
// //               <Search size={16} className={theme.textSub} />
// //               <input 
// //                 type="text"
// //                 value={searchTerm}
// //                 onChange={(e) => {
// //                   setSearchTerm(e.target.value);
// //                   // Auto-switch to Tenants tab if typing and not currently on a searchable view
// //                   if (activeTab !== 'tenants' && activeTab !== 'staff' && e.target.value !== '') {
// //                     setActiveTab('tenants');
// //                   }
// //                 }}
// //                 placeholder="Search matrix..."
// //                 className={`bg-transparent border-none outline-none text-sm w-48 placeholder:${theme.textSub} ${theme.textMain}`}
// //               />
// //             </div>

// //             <button 
// //               onClick={() => setIsDarkMode(!isDarkMode)}
// //               className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-900'}`}
// //               title="Toggle Theme"
// //             >
// //               {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
// //             </button>

// //             {/* Notifications Dropdown */}
// //             <div className="relative">
// //               <button 
// //                 onClick={() => setShowNotifications(!showNotifications)}
// //                 className={`w-10 h-10 rounded-full border flex items-center justify-center relative transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-900'}`}
// //               >
// //                 <Bell size={18} />
// //                 <span className={`absolute top-2 right-2.5 w-2 h-2 rounded-full bg-rose-500 border-2 ${isDarkMode ? 'border-[#1e2a3b]' : 'border-white'}`}></span>
// //               </button>

// //               {showNotifications && (
// //                 <>
// //                   <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
// //                   <div className={`absolute right-0 mt-3 w-72 rounded-2xl border shadow-xl p-4 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-100'}`}>
// //                     <h4 className={`text-sm font-black mb-3 ${theme.textMain}`}>System Alerts</h4>
// //                     <div className="space-y-3">
// //                       <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
// //                         <p className={`text-xs font-bold ${theme.textMain}`}>New Tenant Provisioned</p>
// //                         <p className={`text-[10px] mt-1 ${theme.textSub}`}>Acme Corp initiated a standard trial environment.</p>
// //                       </div>
// //                       <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
// //                         <p className={`text-xs font-bold ${theme.textMain}`}>Architecture Update</p>
// //                         <p className={`text-[10px] mt-1 ${theme.textSub}`}>v2.4 core routing deployed successfully.</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </>
// //               )}
// //             </div>

// //             {/* Profile Dropdown */}
// //             <div className="relative">
// //               <div 
// //                 onClick={() => setShowProfileMenu(!showProfileMenu)}
// //                 className={`flex items-center gap-3 pl-5 border-l cursor-pointer group transition-colors duration-300 ${theme.borderSoft}`}
// //               >
// //                 <div className={`w-10 h-10 rounded-full border-2 overflow-hidden shadow-sm transition-colors ${isDarkMode ? 'bg-slate-700 border-white/10 group-hover:border-[#C5A059]/50' : 'bg-slate-100 border-slate-200 group-hover:border-[#C5A059]'}`}>
// //                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="Admin" className="w-full h-full object-cover" />
// //                 </div>
// //               </div>

// //               {showProfileMenu && (
// //                 <>
// //                   <div className="fixed inset-0 z-40" onClick={() => setShowProfileMenu(false)} />
// //                   <div className={`absolute right-0 mt-3 w-56 rounded-2xl border shadow-xl p-2 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-100'}`}>
// //                     <div className={`px-3 py-2.5 border-b mb-2 ${theme.borderSoft}`}>
// //                       <p className={`text-[13px] font-black truncate ${theme.textMain}`}>Super Admin</p>
// //                       <p className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${theme.textSub}`}>HQ Access</p>
// //                     </div>
                    
// //                     <button 
// //                       onClick={() => { setShowProfileMenu(false); setActiveTab('settings'); }}
// //                       className={`w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold rounded-xl transition-colors ${isDarkMode ? 'text-slate-300 hover:bg-white/10 hover:text-[#C5A059]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#C5A059]'}`}
// //                     >
// //                       <Settings size={14} /> Global Settings
// //                     </button>
                    
// //                     <button 
// //                       onClick={handleLogout}
// //                       className={`w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold rounded-xl transition-colors ${isDarkMode ? 'text-rose-400 hover:bg-rose-500/10' : 'text-rose-500 hover:bg-rose-50'}`}
// //                     >
// //                       <LogOut size={14} /> Sign Out
// //                     </button>
// //                   </div>
// //                 </>
// //               )}
// //             </div>
// //           </header>

// //           <div className="flex-1 overflow-y-auto p-10 relative z-10">
            
// //             {/* =========================================================
// //                 TENANTS VIEW 
// //                 ========================================================= */}
// //             {activeTab === "tenants" && (
// //               <div className="space-y-10 animate-fadeIn">
                
// //                 {/* Stats Row */}
// //                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
// //                   <StatCard title="Monthly Revenue" value={`₹${hqData.metrics.estimated_mrr_inr.toLocaleString("en-IN")}`} icon={IndianRupee} isGold isDarkMode={isDarkMode} theme={theme} />
// //                   <StatCard title="Total Tenants" value={hqData.metrics.total_tenants} icon={Building2} isDarkMode={isDarkMode} theme={theme} />
// //                   <StatCard title="Active Customers" value={hqData.metrics.paying_customers} icon={Users} isDarkMode={isDarkMode} theme={theme} />
// //                   <StatCard title="Trials Provisioned" value={hqData.metrics.active_trials} icon={Activity} isDarkMode={isDarkMode} theme={theme} />
// //                 </div>

// //                 {/* Tenant Directory Table */}
// //                 <div className={`border shadow-sm rounded-[2.5rem] p-8 flex flex-col transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
// //                   <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
// //                     <div>
// //                       <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>Tenant Directory</h2>
// //                       <p className={`text-sm font-medium ${theme.textSub}`}>Real-time ecosystem tracking and environment impersonation.</p>
// //                     </div>
// //                   </div>

// //                   <div className="overflow-x-auto">
// //                     <table className="w-full text-left border-collapse">
// //                       <thead>
// //                         <tr className={`border-b text-[10px] font-black tracking-widest uppercase ${theme.borderSoft} ${theme.textSub}`}>
// //                           <th className="pb-4 pl-4 font-black">Workspace</th>
// //                           <th className="pb-4">Admin Contact</th>
// //                           <th className="pb-4">Region</th>
// //                           <th className="pb-4">Subscription</th>
// //                           <th className="pb-4 text-right pr-4">Access</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody className="text-sm font-medium">
// //                         {filteredStores.length === 0 ? (
// //                           <tr>
// //                             <td colSpan="5" className={`py-16 text-center ${theme.textSub}`}>No tenants found matching criteria.</td>
// //                           </tr>
// //                         ) : (
// //                           filteredStores.map((store, index) => (
// //                             <tr key={store.id || index} className={`border-b transition-colors group ${theme.borderSoft} ${theme.hoverBg}`}>
// //                               <td className="py-5 pl-4">
// //                                 <p className={`font-bold mb-0.5 ${theme.textMain}`}>{store.name}</p>
// //                                 <p className={`text-xs font-mono ${theme.textSub}`}>{store.name.toLowerCase().replace(/\s+/g, '')}.laxvira.com</p>
// //                               </td>
// //                               <td className={`py-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{store.email}</td>
// //                               <td className="py-5">
// //                                 <div className={`flex items-center gap-2 text-xs ${theme.textSub}`}>
// //                                   <Globe size={14} /> AP-South-1
// //                                 </div>
// //                               </td>
// //                               <td className="py-5">
// //                                 <div className="flex items-center gap-3">
// //                                   <div className={`px-2.5 py-1 rounded text-[10px] font-black tracking-widest uppercase border ${
// //                                     store.tier === 'ENTERPRISE' ? (isDarkMode ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'bg-purple-50 text-purple-600 border-purple-200') :
// //                                     store.tier === 'GROWTH' ? (isDarkMode ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-600 border-blue-200') :
// //                                     store.tier === 'BASIC' ? (isDarkMode ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-50 text-emerald-600 border-emerald-200') :
// //                                     (isDarkMode ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-amber-50 text-amber-600 border-amber-200')
// //                                   }`}>
// //                                     {store.tier || 'TRIAL'}
// //                                   </div>
// //                                   <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase ${
// //                                     store.status === 'ACTIVE' ? 'text-emerald-600' : 'text-rose-600'
// //                                   }`}>
// //                                     <span className={`w-1.5 h-1.5 rounded-full ${store.status === 'ACTIVE' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
// //                                     {store.status || 'ACTIVE'}
// //                                   </span>
// //                                 </div>
// //                               </td>
// //                               <td className="py-5 text-right pr-4">
// //                                 <button 
// //                                   onClick={() => handleImpersonate(store.id)}
// //                                   className={`border px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 ml-auto group/btn transition-all shadow-sm ${
// //                                     isDarkMode ? 'bg-white/5 border-white/10 text-white hover:border-[#C5A059] hover:text-[#C5A059]' : 'bg-white border-slate-200 text-slate-700 hover:border-[#C5A059] hover:text-[#C5A059]'
// //                                   }`}
// //                                 >
// //                                   Impersonate 
// //                                   <ArrowUpRightFromCircle size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
// //                                 </button>
// //                               </td>
// //                             </tr>
// //                           ))
// //                         )}
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* =========================================================
// //                 STAFF VIEW 
// //                 ========================================================= */}
// //             {activeTab === "staff" && (
// //               <div className="space-y-10 animate-fadeIn">
// //                 <div className="flex flex-col xl:flex-row gap-8 items-start">
                  
// //                   {/* Provisioning Form Card */}
// //                   <div className="w-full xl:w-1/3">
// //                     <div className={`border shadow-sm rounded-[2rem] p-8 transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
// //                       <h2 className={`text-xl font-black mb-2 flex items-center gap-2.5 ${theme.textMain}`}>
// //                         <UserPlus className="text-[#C5A059]" size={22} /> Provision Identity
// //                       </h2>
// //                       <p className={`text-xs mb-8 leading-relaxed ${theme.textSub}`}>Generate secure IAM credentials for departmental routing.</p>
                      
// //                       {staffError && (
// //                         <div className={`mb-6 p-4 rounded-xl border text-xs font-semibold shadow-sm ${isDarkMode ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-rose-50 border-rose-200 text-rose-600'}`}>
// //                           {staffError}
// //                         </div>
// //                       )}

// //                       <form onSubmit={handleCreateStaff} className="space-y-5">
// //                         <div>
// //                           <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Legal Name</label>
// //                           <div className="relative">
// //                             <User size={18} className={`absolute left-4 top-3 ${theme.textSub}`} />
// //                             <input 
// //                               type="text" required name="name" value={staffFormData.name} onChange={handleStaffInputChange}
// //                               className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
// //                               placeholder="e.g. Alex Mercer"
// //                             />
// //                           </div>
// //                         </div>

// //                         <div>
// //                           <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Corporate Email</label>
// //                           <div className="relative">
// //                             <Mail size={18} className={`absolute left-4 top-3 ${theme.textSub}`} />
// //                             <input 
// //                               type="email" required name="email" value={staffFormData.email} onChange={handleStaffInputChange}
// //                               className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
// //                               placeholder="alex@laxvira.com"
// //                             />
// //                           </div>
// //                         </div>

// //                         <div>
// //                           <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Initial Password</label>
// //                           <div className="relative">
// //                             <Lock size={18} className={`absolute left-4 top-3 ${theme.textSub}`} />
// //                             <input 
// //                               type="password" required name="password" minLength={8} value={staffFormData.password} onChange={handleStaffInputChange}
// //                               className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
// //                               placeholder="••••••••"
// //                             />
// //                           </div>
// //                         </div>

// //                         <div>
// //                           <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Routing Role</label>
// //                           <select 
// //                             name="hq_role" required value={staffFormData.hq_role} onChange={handleStaffInputChange}
// //                             className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all cursor-pointer ${theme.inputBg} ${theme.borderSoft} ${theme.textMain} ${isDarkMode ? '[&>option]:bg-slate-800' : ''}`}
// //                           >
// //                             <option value="SALES">Sales (Account Executive)</option>
// //                             <option value="FINANCE">Finance & Billing</option>
// //                             <option value="IT_SUPPORT">IT / Technical Support</option>
// //                             <option value="SUPERADMIN">System Administrator</option>
// //                           </select>
// //                         </div>

// //                         <button 
// //                           type="submit" disabled={isSubmittingStaff}
// //                           className={`w-full mt-2 font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 ${isDarkMode ? 'bg-[#C5A059]/20 hover:bg-[#C5A059] border border-[#C5A059]/50 hover:text-[#050f1a] text-white' : 'bg-[#C5A059] hover:bg-[#b08d4a] text-white shadow-md shadow-[#C5A059]/20'}`}
// //                         >
// //                           {isSubmittingStaff ? <Loader2 size={18} className="animate-spin mr-2" /> : <UserPlus size={18} className="mr-2" />}
// //                           Authorize Identity
// //                         </button>
// //                       </form>
// //                     </div>
// //                   </div>

// //                   {/* Staff Directory Table */}
// //                   <div className="w-full xl:w-2/3">
// //                     <div className={`border shadow-sm rounded-[2.5rem] overflow-hidden flex flex-col h-full transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
// //                       <div className={`px-8 py-6 border-b flex justify-between items-center transition-colors duration-300 ${theme.borderSoft} ${isDarkMode ? 'bg-black/20' : 'bg-slate-50/50'}`}>
// //                         <div>
// //                           <h2 className={`text-xl font-black tracking-wide ${theme.textMain}`}>Identity Matrix</h2>
// //                           <p className={`text-xs mt-1 ${theme.textSub}`}>Active personnel routing logic and security status.</p>
// //                         </div>
// //                         <span className="bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
// //                           {filteredStaff.length} Authenticated
// //                         </span>
// //                       </div>

// //                       {isStaffLoading ? (
// //                         <div className="p-16 flex justify-center"><Loader2 className="animate-spin text-[#C5A059]" size={32} /></div>
// //                       ) : (
// //                         <div className="overflow-x-auto p-2">
// //                           <table className="w-full text-left border-collapse">
// //                             <thead>
// //                               <tr className={`text-[11px] uppercase tracking-[0.15em] font-extrabold border-b ${theme.borderSoft} ${theme.textSub}`}>
// //                                 <th className="px-8 py-5">Personnel</th>
// //                                 <th className="px-8 py-5">Department</th>
// //                                 <th className="px-8 py-5">Security</th>
// //                                 <th className="px-8 py-5 text-right">Status</th>
// //                               </tr>
// //                             </thead>
// //                             <tbody className="text-sm">
// //                               {filteredStaff.map((staff) => (
// //                                 <tr key={staff.id} className={`transition-colors border-b last:border-0 ${theme.borderSoft} ${theme.hoverBg}`}>
// //                                   <td className="px-8 py-5">
// //                                     <div className="flex items-center gap-4">
// //                                       <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm ${isDarkMode ? 'bg-slate-800 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
// //                                         {staff.name.substring(0, 2).toUpperCase()}
// //                                       </div>
// //                                       <div>
// //                                         <p className={`font-bold text-sm ${theme.textMain}`}>{staff.name}</p>
// //                                         <p className={`text-xs font-mono mt-0.5 ${theme.textSub}`}>{staff.email}</p>
// //                                       </div>
// //                                     </div>
// //                                   </td>
// //                                   <td className="px-8 py-5">
// //                                     <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border ${
// //                                       staff.hq_role === 'SUPERADMIN' ? (isDarkMode ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-red-50 text-red-600 border-red-200') :
// //                                       staff.hq_role === 'SALES' ? (isDarkMode ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-600 border-blue-200') :
// //                                       staff.hq_role === 'FINANCE' ? (isDarkMode ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-50 text-emerald-600 border-emerald-200') :
// //                                       (isDarkMode ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-amber-50 text-amber-600 border-amber-200')
// //                                     }`}>
// //                                       {staff.hq_role.replace('_', ' ')}
// //                                     </span>
// //                                   </td>
// //                                   <td className="px-8 py-5">
// //                                     <div className="flex flex-col gap-1.5">
// //                                       <span className={`flex items-center gap-1.5 text-xs font-medium ${theme.textSub}`}>
// //                                         <Smartphone size={14} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} /> 2FA Pending
// //                                       </span>
// //                                       <span className={`flex items-center gap-1.5 text-[10px] ${theme.textSub}`}>
// //                                         <Clock size={12} /> Last active: Just now
// //                                       </span>
// //                                     </div>
// //                                   </td>
// //                                   <td className="px-8 py-5 text-right">
// //                                     <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-200'}`}>
// //                                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
// //                                     </div>
// //                                   </td>
// //                                 </tr>
// //                               ))}
// //                               {filteredStaff.length === 0 && (
// //                                 <tr>
// //                                   <td colSpan="4" className={`px-8 py-12 text-center text-sm font-medium ${theme.textSub}`}>No personnel authenticated yet.</td>
// //                                 </tr>
// //                               )}
// //                             </tbody>
// //                           </table>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* =========================================================
// //                 SUBSCRIPTIONS VIEW 
// //                 ========================================================= */}
// //             {activeTab === "subscriptions" && (
// //               <div className="space-y-8 animate-fadeIn max-w-5xl">
// //                 <div>
// //                   <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>Pricing configuration</h2>
// //                   <p className={`text-sm font-medium ${theme.textSub}`}>Adjust the base MRR pricing for all regional tenants.</p>
// //                 </div>

// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //                   {Object.entries(subscriptionPrices).map(([tier, price]) => (
// //                     <div key={tier} className={`border rounded-[2rem] p-8 shadow-sm flex flex-col relative overflow-hidden group transition-all duration-300 hover:shadow-lg ${theme.cardBg} ${theme.border}`}>
// //                       <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] opacity-50 group-hover:opacity-100 transition-opacity"></div>
// //                       <div className="flex justify-between items-center mb-6">
// //                         <h3 className={`text-sm font-black uppercase tracking-widest ${theme.textSub}`}>{tier}</h3>
// //                         <CreditCard size={20} className={`${isDarkMode ? 'text-slate-600' : 'text-slate-300'} group-hover:text-[#C5A059] transition-colors`} />
// //                       </div>
                      
// //                       <div className="flex items-center gap-2 mb-8">
// //                         <span className={`font-bold text-xl ${theme.textSub}`}>₹</span>
// //                         <input 
// //                           type="number" 
// //                           value={price}
// //                           onChange={(e) => handlePriceChange(tier, e.target.value)}
// //                           className={`text-4xl font-black w-full bg-transparent border-none outline-none focus:ring-0 p-0 ${theme.textMain}`}
// //                         />
// //                         <span className={`text-sm font-bold self-end mb-1 ${theme.textSub}`}>/mo</span>
// //                       </div>

// //                       <ul className="space-y-3 mb-8 flex-1">
// //                         <li className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><CheckCircle size={14} className="text-emerald-500" /> Standard features</li>
// //                         <li className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><CheckCircle size={14} className="text-emerald-500" /> 99.9% Uptime SLA</li>
// //                         <li className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><CheckCircle size={14} className="text-emerald-500" /> Email Support</li>
// //                       </ul>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 <div className={`flex justify-end pt-4 border-t ${theme.borderSoft}`}>
// //                   <button 
// //                     onClick={handleSavePrices}
// //                     disabled={isSavingPrices}
// //                     className={`px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all disabled:opacity-70 ${isDarkMode ? 'bg-[#C5A059]/20 hover:bg-[#C5A059] border border-[#C5A059]/50 text-white hover:text-[#050f1a]' : 'bg-[#C5A059] hover:bg-[#b08d4a] text-white shadow-md shadow-[#C5A059]/20'}`}
// //                   >
// //                     {isSavingPrices ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
// //                     {isSavingPrices ? "Deploying Changes..." : "Save & Deploy Pricing"}
// //                   </button>
// //                 </div>
// //               </div>
// //             )}

// //             {/* =========================================================
// //                 ANALYTICS VIEW 
// //                 ========================================================= */}
// //             {activeTab === "analytics" && (
// //               <div className="space-y-8 animate-fadeIn">
// //                 <div>
// //                   <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>System Telemetry</h2>
// //                   <p className={`text-sm font-medium ${theme.textSub}`}>Resource utilization and aggregate metrics.</p>
// //                 </div>
                
// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //                   {/* Server Load Mock */}
// //                   <div className={`border rounded-[2rem] p-8 shadow-sm transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
// //                     <div className="flex items-center gap-3 mb-8">
// //                       <Server className="text-[#C5A059]" size={20} />
// //                       <h3 className={`font-bold ${theme.textMain}`}>AP-South-1 Cluster Load</h3>
// //                     </div>
// //                     <div className="space-y-6">
// //                       <div>
// //                         <div className="flex justify-between text-sm font-bold mb-2">
// //                           <span className={theme.textSub}>CPU Usage</span>
// //                           <span className={theme.textMain}>64%</span>
// //                         </div>
// //                         <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
// //                           <div className="bg-[#C5A059] h-2 rounded-full w-[64%]"></div>
// //                         </div>
// //                       </div>
// //                       <div>
// //                         <div className="flex justify-between text-sm font-bold mb-2">
// //                           <span className={theme.textSub}>Memory Allocation</span>
// //                           <span className={theme.textMain}>82%</span>
// //                         </div>
// //                         <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
// //                           <div className="bg-rose-500 h-2 rounded-full w-[82%]"></div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Database Stats Mock */}
// //                   <div className={`border rounded-[2rem] p-8 shadow-sm transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
// //                     <div className="flex items-center gap-3 mb-8">
// //                       <Database className="text-blue-500" size={20} />
// //                       <h3 className={`font-bold ${theme.textMain}`}>Database I/O</h3>
// //                     </div>
// //                     <div className="flex items-end gap-6 mb-4">
// //                       <div className="flex-1">
// //                         <p className={`text-xs font-bold mb-1 ${theme.textSub}`}>Read Ops/sec</p>
// //                         <p className={`text-3xl font-black ${theme.textMain}`}>12,450</p>
// //                       </div>
// //                       <div className={`flex-1 border-l pl-6 ${theme.borderSoft}`}>
// //                         <p className={`text-xs font-bold mb-1 ${theme.textSub}`}>Write Ops/sec</p>
// //                         <p className={`text-3xl font-black ${theme.textMain}`}>3,892</p>
// //                       </div>
// //                     </div>
// //                     <div className={`mt-6 pt-6 border-t flex items-center text-sm text-emerald-500 font-bold ${theme.borderSoft}`}>
// //                       <TrendingUp size={16} className="mr-2" /> +14% compared to yesterday
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* =========================================================
// //                 SETTINGS VIEW 
// //                 ========================================================= */}
// //             {activeTab === "settings" && (
// //               <div className="space-y-8 animate-fadeIn max-w-3xl">
// //                 <div>
// //                   <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>Global Preferences</h2>
// //                   <p className={`text-sm font-medium ${theme.textSub}`}>Manage environment variables and operational flags.</p>
// //                 </div>

// //                 <div className={`border shadow-sm rounded-[2rem] overflow-hidden transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
// //                   <div className={`p-8 border-b flex justify-between items-center transition-colors ${theme.borderSoft} ${theme.hoverBg}`}>
// //                     <div>
// //                       <h4 className={`font-bold ${theme.textMain}`}>Maintenance Mode</h4>
// //                       <p className={`text-xs mt-1 ${theme.textSub}`}>Suspend all tenant logins and show maintenance screen.</p>
// //                     </div>
// //                     <button 
// //                       onClick={() => toggleSetting('maintenanceMode')}
// //                       className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${systemSettings.maintenanceMode ? 'bg-rose-500' : (isDarkMode ? 'bg-slate-700' : 'bg-slate-200')}`}
// //                     >
// //                       <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${systemSettings.maintenanceMode ? 'left-7' : 'left-1'}`}></span>
// //                     </button>
// //                   </div>

// //                   <div className={`p-8 border-b flex justify-between items-center transition-colors ${theme.borderSoft} ${theme.hoverBg}`}>
// //                     <div>
// //                       <h4 className={`font-bold ${theme.textMain}`}>Allow New Tenant Registrations</h4>
// //                       <p className={`text-xs mt-1 ${theme.textSub}`}>Accept new sign-ups from the main landing page.</p>
// //                     </div>
// //                     <button 
// //                       onClick={() => toggleSetting('newRegistrations')}
// //                       className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${systemSettings.newRegistrations ? 'bg-emerald-500' : (isDarkMode ? 'bg-slate-700' : 'bg-slate-200')}`}
// //                     >
// //                       <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${systemSettings.newRegistrations ? 'left-7' : 'left-1'}`}></span>
// //                     </button>
// //                   </div>

// //                   <div className={`p-8 flex justify-between items-center transition-colors ${theme.hoverBg}`}>
// //                     <div>
// //                       <h4 className={`font-bold ${theme.textMain}`}>System Alert Emails</h4>
// //                       <p className={`text-xs mt-1 ${theme.textSub}`}>Send critical architecture alerts to the SuperAdmin email group.</p>
// //                     </div>
// //                     <button 
// //                       onClick={() => toggleSetting('emailNotifications')}
// //                       className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${systemSettings.emailNotifications ? 'bg-blue-500' : (isDarkMode ? 'bg-slate-700' : 'bg-slate-200')}`}
// //                     >
// //                       <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${systemSettings.emailNotifications ? 'left-7' : 'left-1'}`}></span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // // --- REUSABLE METRIC CARD (Upgraded for interactivity & dual-theme) ---
// // const StatCard = ({ title, value, icon: Icon, isGold, isDarkMode, theme }) => (
// //   <div className={`rounded-[2rem] border p-6 flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${theme.cardBg} ${theme.border} ${isDarkMode ? 'hover:border-[#C5A059]/40' : 'hover:border-slate-300'}`}>
    
// //     {/* Interactive Hover Glow (Follows cursor concept via CSS hover) */}
// //     <div className={`absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none transition-all duration-500 blur-3xl opacity-0 group-hover:opacity-30 ${isGold ? 'bg-[#C5A059]' : 'bg-blue-500'}`}></div>

// //     <div className="flex justify-between items-start relative z-10">
// //       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border transition-all duration-300 ${
// //         isGold 
// //           ? (isDarkMode ? 'bg-[#C5A059]/10 border-[#C5A059]/20 group-hover:bg-[#C5A059]/20 group-hover:scale-110' : 'bg-[#C5A059]/10 border-[#C5A059]/20 group-hover:bg-[#C5A059]/20 group-hover:scale-110') 
// //           : (isDarkMode ? 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110' : 'bg-blue-50 border-blue-100 group-hover:bg-blue-100 group-hover:scale-110')
// //       }`}>
// //         <Icon size={20} className={`${isGold ? 'text-[#C5A059]' : (isDarkMode ? 'text-blue-400' : 'text-blue-600')} transition-colors`} />
// //       </div>
      
// //       {/* Slide-in View Details interaction */}
// //       <div className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center text-[10px] font-bold uppercase tracking-widest text-[#C5A059] cursor-pointer">
// //         View <ChevronRight size={12} />
// //       </div>
// //     </div>
    
// //     <div className="relative z-10">
// //       <p className={`text-xs font-bold mb-1 transition-colors ${theme.textSub}`}>{title}</p>
// //       <div className="flex items-end gap-3">
// //         <h3 className={`text-3xl font-black transition-colors ${theme.textMain}`}>{value}</h3>
// //       </div>
// //     </div>
// //   </div>
// // );

// // export default SuperAdminDashboard;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { 
//   LayoutDashboard, Users, UserRound, CreditCard, 
//   ShieldCheck, LineChart, Settings, LogOut, 
//   Search, Bell, ArrowUpRight, TrendingUp, ArrowUpRightFromCircle,
//   Globe, Building2, Activity, IndianRupee, ShieldAlert,
//   UserPlus, Lock, Mail, User, Loader2, Layers, Briefcase,
//   Smartphone, Clock, Save, Server, Database, CheckCircle,
//   Moon, Sun, ChevronRight, Plus, Crown, X
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// const SuperAdminDashboard = () => {
//   const navigate = useNavigate();
  
//   // --- PRESERVED STATE MANAGEMENT ---
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("tenants");
//   const [searchTerm, setSearchTerm] = useState("");

//   const [hqData, setHqData] = useState({
//     metrics: { total_tenants: 0, active_trials: 0, paying_customers: 0, estimated_mrr_inr: 0 },
//     stores: []
//   });

//   const [staffList, setStaffList] = useState([]);
//   const [isStaffLoading, setIsStaffLoading] = useState(false);
//   const [isSubmittingStaff, setIsSubmittingStaff] = useState(false);
//   const [staffError, setStaffError] = useState(null);
//   const [staffFormData, setStaffFormData] = useState({
//     name: '', email: '', password: '', hq_role: 'SALES'
//   });

//   // --- NEW HEADER UI STATE ---
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);

//   // --- THEME & SETTINGS STATE ---
//   const [isDarkMode, setIsDarkMode] = useState(false); 
  
//   const [subscriptionPrices, setSubscriptionPrices] = useState({
//     BASIC: 999,
//     GROWTH: 2499,
//     ENTERPRISE: 4999
//   });
//   const [isSavingPrices, setIsSavingPrices] = useState(false);
//   const [systemSettings, setSystemSettings] = useState({
//     maintenanceMode: false,
//     newRegistrations: true,
//     emailNotifications: true,
//   });

//   // --- NEW: MANUAL PROVISIONING & OVERRIDE STATE ---
//   const [showProvisionModal, setShowProvisionModal] = useState(false);
//   const [showEditSubModal, setShowEditSubModal] = useState(false);
//   const [activeStoreForSub, setActiveStoreForSub] = useState(null);
//   const [isSubmittingOverride, setIsSubmittingOverride] = useState(false);

//   const [newTenantForm, setNewTenantForm] = useState({
//     storeName: '', email: '', password: '', tier: 'ENTERPRISE'
//   });
//   const [editSubForm, setEditSubForm] = useState({ tier: 'ENTERPRISE', isFree: true });

//   // --- PRESERVED API LOGIC ---
//   useEffect(() => {
//     const fetchHqData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/");
//           return;
//         }

//         const [metricsRes, storesRes] = await Promise.all([
//           fetch("http://localhost:8000/api/hq/metrics", { headers: { Authorization: `Bearer ${token}` } }),
//           fetch("http://localhost:8000/api/hq/stores", { headers: { Authorization: `Bearer ${token}` } })
//         ]);

//         if (metricsRes.status === 403 || storesRes.status === 403) {
//           navigate("/dashboard");
//           return;
//         }

//         const metrics = await metricsRes.json();
//         const stores = await storesRes.json();
//         setHqData({ metrics, stores });
//       } catch (err) {
//         console.error("Failed to load HQ data:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchHqData();
//   }, [navigate]);

//   const fetchStaff = async () => {
//     setIsStaffLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch('http://localhost:8000/api/hq/staff', { headers: { Authorization: `Bearer ${token}` } });
//       if (!res.ok) throw new Error("Failed to load staff directory");
//       const data = await res.json();
//       setStaffList(data);
//     } catch (err) {
//       setStaffError(err.message);
//     } finally {
//       setIsStaffLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (activeTab === "staff") fetchStaff();
//   }, [activeTab]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const handleImpersonate = async (storeId) => {
//     if (!window.confirm("Initialize secure impersonation session?")) return;
//     try {
//       const adminToken = localStorage.getItem("token");
//       const response = await fetch(`http://localhost:8000/api/hq/impersonate/${storeId}`, {
//         method: "POST", headers: { Authorization: `Bearer ${adminToken}` }
//       });
//       if (!response.ok) throw new Error("Impersonation rejected by server");

//       const data = await response.json();
//       localStorage.setItem("superadmin_token", adminToken);
//       localStorage.setItem("token", data.access_token);
//       window.location.href = "/dashboard";
//     } catch (err) {
//       console.error("Impersonation failed:", err);
//       alert("Failed to initialize impersonation session.");
//     }
//   };

//   const handleStaffInputChange = (e) => {
//     setStaffFormData({ ...staffFormData, [e.target.name]: e.target.value });
//   };

//   const handleCreateStaff = async (e) => {
//     e.preventDefault();
//     setIsSubmittingStaff(true);
//     setStaffError(null);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch('http://localhost:8000/api/hq/staff', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//         body: JSON.stringify(staffFormData)
//       });
//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.detail || "Failed to create staff account");
//       }
//       setStaffFormData({ name: '', email: '', password: '', hq_role: 'SALES' });
//       await fetchStaff();
//     } catch (err) {
//       setStaffError(err.message);
//     } finally {
//       setIsSubmittingStaff(false);
//     }
//   };

//   const handlePriceChange = (tier, value) => {
//     setSubscriptionPrices(prev => ({ ...prev, [tier]: Number(value) }));
//   };

//   const handleSavePrices = () => {
//     setIsSavingPrices(true);
//     setTimeout(() => {
//       setIsSavingPrices(false);
//       alert("Subscription pricing updated successfully across all regions.");
//     }, 800);
//   };

//   const toggleSetting = (key) => {
//     setSystemSettings(prev => ({ ...prev, [key]: !prev[key] }));
//   };

//   // --- NEW: OVERRIDE HANDLERS ---
//   // const handleProvisionTenant = async (e) => {
//   //   e.preventDefault();
//   //   setIsSubmittingOverride(true);
//   //   try {
//   //     // Mocking Backend Call for Free Provisioning
//   //     await new Promise(resolve => setTimeout(resolve, 800));
      
//   //     const newStore = {
//   //       id: Date.now(),
//   //       name: newTenantForm.storeName,
//   //       email: newTenantForm.email,
//   //       tier: newTenantForm.tier,
//   //       status: 'ACTIVE'
//   //     };

//   //     setHqData(prev => ({
//   //       ...prev, 
//   //       metrics: { ...prev.metrics, total_tenants: prev.metrics.total_tenants + 1 },
//   //       stores: [newStore, ...prev.stores]
//   //     }));

//   //     setShowProvisionModal(false);
//   //     setNewTenantForm({ storeName: '', email: '', password: '', tier: 'ENTERPRISE' });
//   //   } catch (err) {
//   //     alert("Failed to provision tenant.");
//   //   } finally {
//   //     setIsSubmittingOverride(false);
//   //   }
//   // };

//   // const handleUpdateSubscription = async (e) => {
//   //   e.preventDefault();
//   //   setIsSubmittingOverride(true);
//   //   try {
//   //     // Mocking Backend Call for Override
//   //     await new Promise(resolve => setTimeout(resolve, 600));

//   //     setHqData(prev => ({
//   //       ...prev,
//   //       stores: prev.stores.map(store => 
//   //         store.id === activeStoreForSub.id 
//   //           ? { ...store, tier: editSubForm.tier, status: 'ACTIVE' } 
//   //           : store
//   //       )
//   //     }));

//   //     setShowEditSubModal(false);
//   //     setActiveStoreForSub(null);
//   //   } catch (err) {
//   //     alert("Failed to update subscription.");
//   //   } finally {
//   //     setIsSubmittingOverride(false);
//   //   }
//   // };

//   const handleProvisionTenant = async (e) => {
//     e.preventDefault();
//     setIsSubmittingOverride(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/hq/stores/provision`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//         body: JSON.stringify({
//             storeName: newTenantForm.storeName,
//             email: newTenantForm.email,
//             password: newTenantForm.password,
//             tier: newTenantForm.tier
//         })
//       });

//       if (!res.ok) throw new Error("Failed to provision tenant");
//       const newStore = await res.json();

//       setHqData(prev => ({
//         ...prev, 
//         metrics: { ...prev.metrics, total_tenants: prev.metrics.total_tenants + 1 },
//         stores: [newStore, ...prev.stores]
//       }));

//       setShowProvisionModal(false);
//       setNewTenantForm({ storeName: '', email: '', password: '', tier: 'ENTERPRISE' });
//     } catch (err) {
//       alert("Failed to provision tenant.");
//     } finally {
//       setIsSubmittingOverride(false);
//     }
//   };

//   const handleUpdateSubscription = async (e) => {
//     e.preventDefault();
//     setIsSubmittingOverride(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/hq/stores/${activeStoreForSub.id}/tier`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//         body: JSON.stringify({ tier: editSubForm.tier })
//       });

//       if (!res.ok) throw new Error("Failed to update subscription");

//       setHqData(prev => ({
//         ...prev,
//         stores: prev.stores.map(store => 
//           store.id === activeStoreForSub.id 
//             ? { ...store, tier: editSubForm.tier, status: 'ACTIVE' } 
//             : store
//         )
//       }));

//       setShowEditSubModal(false);
//       setActiveStoreForSub(null);
//     } catch (err) {
//       alert("Failed to update subscription.");
//     } finally {
//       setIsSubmittingOverride(false);
//     }
//   };

//   const filteredStores = hqData.stores.filter(store => 
//     store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     store.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredStaff = staffList.filter(staff => 
//     staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     staff.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const navItems = [
//     { id: 'tenants', name: 'Tenants', icon: Layers },
//     { id: 'staff', name: 'Staff Matrix', icon: Briefcase },
//     { id: 'subscriptions', name: 'Subscriptions', icon: CreditCard },
//     { id: 'analytics', name: 'Analytics', icon: LineChart },
//     { id: 'settings', name: 'Settings', icon: Settings },
//   ];

//   if (isLoading) {
//     return (
//       <div className={`min-h-screen flex items-center justify-center font-sans ${isDarkMode ? 'bg-[#050f1a]' : 'bg-slate-50'}`}>
//         <div className="animate-pulse flex flex-col items-center">
//           <ShieldAlert className="text-[#C5A059] w-14 h-14 mb-4 animate-bounce" />
//           <p className={`font-bold tracking-[0.2em] uppercase text-sm ${isDarkMode ? 'text-[#C5A059]' : 'text-slate-500'}`}>Initializing Core...</p>
//         </div>
//       </div>
//     );
//   }

//   // Dynamic Theme Classes
//   const theme = {
//     bg: isDarkMode ? 'bg-[#050f1a]' : 'bg-slate-50',
//     containerBg: isDarkMode ? 'bg-[#0f172a]/40 backdrop-blur-[40px]' : 'bg-white',
//     sidebarBg: isDarkMode ? 'bg-slate-900/20' : 'bg-slate-50',
//     border: isDarkMode ? 'border-white/10' : 'border-slate-200',
//     borderSoft: isDarkMode ? 'border-white/5' : 'border-slate-100',
//     textMain: isDarkMode ? 'text-white' : 'text-slate-900',
//     textSub: isDarkMode ? 'text-slate-400' : 'text-slate-500',
//     cardBg: isDarkMode ? 'bg-white/5 backdrop-blur-md' : 'bg-white',
//     hoverBg: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-50',
//     inputBg: isDarkMode ? 'bg-black/20' : 'bg-slate-50',
//     modalOverlay: 'fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity',
//   };

//   return (
//     <div className={`min-h-screen w-full p-4 sm:p-6 flex items-center justify-center font-sans transition-colors duration-300 ${theme.bg}`}>
      
//       {/* --- AMBIENT VOLUMETRIC LIGHTING (Only visible in dark mode) --- */}
//       {isDarkMode && (
//         <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-500">
//           <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0369a1]/30 rounded-full blur-[120px] mix-blend-screen"></div>
//           <div className="absolute top-[-10%] left-[30%] w-[600px] h-[600px] bg-[#38bdf8]/15 rounded-full blur-[100px] mix-blend-screen"></div>
//           <div className="absolute top-[20%] -right-[10%] w-[700px] h-[700px] bg-[#C5A059]/15 rounded-full blur-[120px] mix-blend-screen"></div>
//         </div>
//       )}

//       {/* --- MAIN DASHBOARD CONTAINER --- */}
//       <div className={`w-full max-w-[1600px] h-[calc(100vh-48px)] border shadow-xl rounded-[2.5rem] flex relative overflow-hidden transition-colors duration-300 ${theme.containerBg} ${theme.border}`}>
        
//         {/* --- LEFT SIDEBAR --- */}
//         <aside className={`w-64 border-r flex flex-col p-6 shrink-0 transition-colors duration-300 ${theme.sidebarBg} ${theme.border}`}>
//           <div className="flex items-center gap-3 mb-10 pl-2">
//             <img src={logo} alt="Laxvira" className={`w-8 h-8 rounded-lg object-contain p-0.5 shadow-sm border ${isDarkMode ? 'bg-white/90 border-transparent' : 'bg-white border-slate-200'}`} />
//             <span className={`font-black tracking-widest text-lg ${theme.textMain}`}>LAXVIRA HQ</span>
//           </div>

//           <div className="mb-8 pl-2">
//             <span className="bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-sm">
//               SYS.ADMIN
//             </span>
//           </div>

//           <nav className="flex-1 space-y-2">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = activeTab === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveTab(item.id)}
//                   className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
//                     isActive 
//                       ? 'bg-[#C5A059]/10 text-[#C5A059] shadow-sm' 
//                       : `${theme.textSub} hover:${theme.textMain} ${theme.hoverBg}`
//                   }`}
//                 >
//                   <Icon size={18} className={isActive ? 'text-[#C5A059]' : theme.textSub} />
//                   {item.name}
//                 </button>
//               );
//             })}
//           </nav>
//         </aside>

//         {/* --- MAIN CONTENT AREA --- */}
//         <main className={`flex-1 flex flex-col overflow-hidden relative transition-colors duration-300 ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}>
          
//           <div className={`absolute inset-0 pointer-events-none flex items-center justify-center z-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-[0.02] mix-blend-screen' : 'opacity-[0.03] mix-blend-multiply'}`}>
//             <img src={logo} alt="Laxvira" className="w-[600px] h-[600px] object-contain grayscale -rotate-12" />
//           </div>

//           <header className={`h-24 px-10 flex items-center justify-end gap-5 border-b shrink-0 transition-colors duration-300 relative z-50 ${theme.borderSoft}`}>
            
//             {/* Global Search Bar */}
//             <div className={`flex items-center gap-2 rounded-full border px-4 py-2.5 transition-all duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 focus-within:border-[#C5A059]' : 'bg-slate-50 border-slate-200 focus-within:border-[#C5A059]'}`}>
//               <Search size={16} className={theme.textSub} />
//               <input 
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   if (activeTab !== 'tenants' && activeTab !== 'staff' && e.target.value !== '') {
//                     setActiveTab('tenants');
//                   }
//                 }}
//                 placeholder="Search matrix..."
//                 className={`bg-transparent border-none outline-none text-sm w-48 placeholder:${theme.textSub} ${theme.textMain}`}
//               />
//             </div>

//             <button 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-900'}`}
//               title="Toggle Theme"
//             >
//               {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Notifications Dropdown */}
//             <div className="relative">
//               <button 
//                 onClick={() => setShowNotifications(!showNotifications)}
//                 className={`w-10 h-10 rounded-full border flex items-center justify-center relative transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-900'}`}
//               >
//                 <Bell size={18} />
//                 <span className={`absolute top-2 right-2.5 w-2 h-2 rounded-full bg-rose-500 border-2 ${isDarkMode ? 'border-[#1e2a3b]' : 'border-white'}`}></span>
//               </button>

//               {showNotifications && (
//                 <>
//                   <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
//                   <div className={`absolute right-0 mt-3 w-72 rounded-2xl border shadow-xl p-4 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-100'}`}>
//                     <h4 className={`text-sm font-black mb-3 ${theme.textMain}`}>System Alerts</h4>
//                     <div className="space-y-3">
//                       <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
//                         <p className={`text-xs font-bold ${theme.textMain}`}>New Tenant Provisioned</p>
//                         <p className={`text-[10px] mt-1 ${theme.textSub}`}>Acme Corp initiated a standard trial environment.</p>
//                       </div>
//                       <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
//                         <p className={`text-xs font-bold ${theme.textMain}`}>Architecture Update</p>
//                         <p className={`text-[10px] mt-1 ${theme.textSub}`}>v2.4 core routing deployed successfully.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* Profile Dropdown */}
//             <div className="relative">
//               <div 
//                 onClick={() => setShowProfileMenu(!showProfileMenu)}
//                 className={`flex items-center gap-3 pl-5 border-l cursor-pointer group transition-colors duration-300 ${theme.borderSoft}`}
//               >
//                 <div className={`w-10 h-10 rounded-full border-2 overflow-hidden shadow-sm transition-colors ${isDarkMode ? 'bg-slate-700 border-white/10 group-hover:border-[#C5A059]/50' : 'bg-slate-100 border-slate-200 group-hover:border-[#C5A059]'}`}>
//                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="Admin" className="w-full h-full object-cover" />
//                 </div>
//               </div>

//               {showProfileMenu && (
//                 <>
//                   <div className="fixed inset-0 z-40" onClick={() => setShowProfileMenu(false)} />
//                   <div className={`absolute right-0 mt-3 w-56 rounded-2xl border shadow-xl p-2 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-100'}`}>
//                     <div className={`px-3 py-2.5 border-b mb-2 ${theme.borderSoft}`}>
//                       <p className={`text-[13px] font-black truncate ${theme.textMain}`}>Super Admin</p>
//                       <p className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${theme.textSub}`}>HQ Access</p>
//                     </div>
                    
//                     <button 
//                       onClick={() => { setShowProfileMenu(false); setActiveTab('settings'); }}
//                       className={`w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold rounded-xl transition-colors ${isDarkMode ? 'text-slate-300 hover:bg-white/10 hover:text-[#C5A059]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#C5A059]'}`}
//                     >
//                       <Settings size={14} /> Global Settings
//                     </button>
                    
//                     <button 
//                       onClick={handleLogout}
//                       className={`w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold rounded-xl transition-colors ${isDarkMode ? 'text-rose-400 hover:bg-rose-500/10' : 'text-rose-500 hover:bg-rose-50'}`}
//                     >
//                       <LogOut size={14} /> Sign Out
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </header>

//           <div className="flex-1 overflow-y-auto p-10 relative z-10">
            
//             {/* =========================================================
//                 TENANTS VIEW 
//                 ========================================================= */}
//             {activeTab === "tenants" && (
//               <div className="space-y-10 animate-fadeIn">
                
//                 {/* Stats Row */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//                   <StatCard title="Monthly Revenue" value={`₹${hqData.metrics.estimated_mrr_inr.toLocaleString("en-IN")}`} icon={IndianRupee} isGold isDarkMode={isDarkMode} theme={theme} />
//                   <StatCard title="Total Tenants" value={hqData.metrics.total_tenants} icon={Building2} isDarkMode={isDarkMode} theme={theme} />
//                   <StatCard title="Active Customers" value={hqData.metrics.paying_customers} icon={Users} isDarkMode={isDarkMode} theme={theme} />
//                   <StatCard title="Trials Provisioned" value={hqData.metrics.active_trials} icon={Activity} isDarkMode={isDarkMode} theme={theme} />
//                 </div>

//                 {/* Tenant Directory Table */}
//                 <div className={`border shadow-sm rounded-[2.5rem] p-8 flex flex-col transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
//                   <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
//                     <div>
//                       <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>Tenant Directory</h2>
//                       <p className={`text-sm font-medium ${theme.textSub}`}>Real-time ecosystem tracking and environment impersonation.</p>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       {/* --- NEW: PROVISION TENANT BUTTON --- */}
//                       <button 
//                         onClick={() => setShowProvisionModal(true)}
//                         className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all ${isDarkMode ? 'bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 hover:bg-[#C5A059] hover:text-slate-900' : 'bg-[#C5A059] text-white hover:bg-[#a68444]'}`}
//                       >
//                         <Plus size={16} /> Provision Tenant
//                       </button>

//                       <div className={`flex items-center border rounded-full px-4 py-2.5 w-full lg:w-64 focus-within:border-[#C5A059] focus-within:ring-1 focus-within:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft}`}>
//                         <Search size={16} className={`${theme.textSub} shrink-0`} />
//                         <input 
//                           type="text" 
//                           value={searchTerm} 
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           placeholder="Search stores..." 
//                           className={`bg-transparent border-none outline-none text-sm w-full px-3 placeholder:${theme.textSub} ${theme.textMain}`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="overflow-x-auto">
//                     <table className="w-full text-left border-collapse">
//                       <thead>
//                         <tr className={`border-b text-[10px] font-black tracking-widest uppercase ${theme.borderSoft} ${theme.textSub}`}>
//                           <th className="pb-4 pl-4 font-black">Workspace</th>
//                           <th className="pb-4">Admin Contact</th>
//                           <th className="pb-4">Region</th>
//                           <th className="pb-4">Subscription</th>
//                           <th className="pb-4 text-right pr-4">Access</th>
//                         </tr>
//                       </thead>
//                       <tbody className="text-sm font-medium">
//                         {filteredStores.length === 0 ? (
//                           <tr>
//                             <td colSpan="5" className={`py-16 text-center ${theme.textSub}`}>No tenants found matching criteria.</td>
//                           </tr>
//                         ) : (
//                           filteredStores.map((store, index) => (
//                             <tr key={store.id || index} className={`border-b transition-colors group ${theme.borderSoft} ${theme.hoverBg}`}>
//                               <td className="py-5 pl-4">
//                                 <p className={`font-bold mb-0.5 ${theme.textMain}`}>{store.name}</p>
//                                 <p className={`text-xs font-mono ${theme.textSub}`}>{store.name.toLowerCase().replace(/\s+/g, '')}.laxvira.com</p>
//                               </td>
//                               <td className={`py-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{store.email}</td>
//                               <td className="py-5">
//                                 <div className={`flex items-center gap-2 text-xs ${theme.textSub}`}>
//                                   <Globe size={14} /> AP-South-1
//                                 </div>
//                               </td>
//                               <td className="py-5">
//                                 <div className="flex items-center gap-3">
//                                   <div className={`px-2.5 py-1 rounded text-[10px] font-black tracking-widest uppercase border ${
//                                     store.tier === 'ENTERPRISE' ? (isDarkMode ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'bg-purple-50 text-purple-600 border-purple-200') :
//                                     store.tier === 'GROWTH' ? (isDarkMode ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-600 border-blue-200') :
//                                     store.tier === 'BASIC' ? (isDarkMode ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-50 text-emerald-600 border-emerald-200') :
//                                     (isDarkMode ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-amber-50 text-amber-600 border-amber-200')
//                                   }`}>
//                                     {store.tier || 'TRIAL'}
//                                   </div>
//                                   <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase ${
//                                     store.status === 'ACTIVE' ? 'text-emerald-600' : 'text-rose-600'
//                                   }`}>
//                                     <span className={`w-1.5 h-1.5 rounded-full ${store.status === 'ACTIVE' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
//                                     {store.status || 'ACTIVE'}
//                                   </span>
//                                 </div>
//                               </td>
//                               <td className="py-5 text-right pr-4">
//                                 <div className="flex items-center justify-end gap-2">
//                                   {/* --- NEW: OVERRIDE SUBSCRIPTION BUTTON --- */}
//                                   <button 
//                                     onClick={() => {
//                                       setActiveStoreForSub(store);
//                                       setEditSubForm({ tier: store.tier || 'BASIC', isFree: true });
//                                       setShowEditSubModal(true);
//                                     }}
//                                     title="Modify Subscription Access"
//                                     className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
//                                       isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:text-[#C5A059] hover:border-[#C5A059]' : 'bg-white border-slate-200 text-slate-500 hover:text-[#C5A059] hover:border-[#C5A059]'
//                                     }`}
//                                   >
//                                     <Crown size={15} />
//                                   </button>
                                  
//                                   <button 
//                                     onClick={() => handleImpersonate(store.id)}
//                                     className={`border px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 group/btn transition-all shadow-sm ${
//                                       isDarkMode ? 'bg-white/5 border-white/10 text-white hover:border-[#C5A059] hover:text-[#C5A059]' : 'bg-white border-slate-200 text-slate-700 hover:border-[#C5A059] hover:text-[#C5A059]'
//                                     }`}
//                                   >
//                                     Impersonate 
//                                     <ArrowUpRightFromCircle size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
//                                   </button>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* =========================================================
//                 STAFF VIEW 
//                 ========================================================= */}
//             {activeTab === "staff" && (
//               <div className="space-y-10 animate-fadeIn">
//                 <div className="flex flex-col xl:flex-row gap-8 items-start">
                  
//                   {/* Provisioning Form Card */}
//                   <div className="w-full xl:w-1/3">
//                     <div className={`border shadow-sm rounded-[2rem] p-8 transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
//                       <h2 className={`text-xl font-black mb-2 flex items-center gap-2.5 ${theme.textMain}`}>
//                         <UserPlus className="text-[#C5A059]" size={22} /> Provision Identity
//                       </h2>
//                       <p className={`text-xs mb-8 leading-relaxed ${theme.textSub}`}>Generate secure IAM credentials for departmental routing.</p>
                      
//                       {staffError && (
//                         <div className={`mb-6 p-4 rounded-xl border text-xs font-semibold shadow-sm ${isDarkMode ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-rose-50 border-rose-200 text-rose-600'}`}>
//                           {staffError}
//                         </div>
//                       )}

//                       <form onSubmit={handleCreateStaff} className="space-y-5">
//                         <div>
//                           <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Legal Name</label>
//                           <div className="relative">
//                             <User size={18} className={`absolute left-4 top-3 ${theme.textSub}`} />
//                             <input 
//                               type="text" required name="name" value={staffFormData.name} onChange={handleStaffInputChange}
//                               className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
//                               placeholder="e.g. Alex Mercer"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Corporate Email</label>
//                           <div className="relative">
//                             <Mail size={18} className={`absolute left-4 top-3 ${theme.textSub}`} />
//                             <input 
//                               type="email" required name="email" value={staffFormData.email} onChange={handleStaffInputChange}
//                               className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
//                               placeholder="alex@laxvira.com"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Initial Password</label>
//                           <div className="relative">
//                             <Lock size={18} className={`absolute left-4 top-3 ${theme.textSub}`} />
//                             <input 
//                               type="password" required name="password" minLength={8} value={staffFormData.password} onChange={handleStaffInputChange}
//                               className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
//                               placeholder="••••••••"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Routing Role</label>
//                           <select 
//                             name="hq_role" required value={staffFormData.hq_role} onChange={handleStaffInputChange}
//                             className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all cursor-pointer ${theme.inputBg} ${theme.borderSoft} ${theme.textMain} ${isDarkMode ? '[&>option]:bg-slate-800' : ''}`}
//                           >
//                             <option value="SALES">Sales (Account Executive)</option>
//                             <option value="FINANCE">Finance & Billing</option>
//                             <option value="IT_SUPPORT">IT / Technical Support</option>
//                             <option value="SUPERADMIN">System Administrator</option>
//                           </select>
//                         </div>

//                         <button 
//                           type="submit" disabled={isSubmittingStaff}
//                           className={`w-full mt-2 font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 ${isDarkMode ? 'bg-[#C5A059]/20 hover:bg-[#C5A059] border border-[#C5A059]/50 hover:text-[#050f1a] text-white' : 'bg-[#C5A059] hover:bg-[#b08d4a] text-white shadow-md shadow-[#C5A059]/20'}`}
//                         >
//                           {isSubmittingStaff ? <Loader2 size={18} className="animate-spin mr-2" /> : <UserPlus size={18} className="mr-2" />}
//                           Authorize Identity
//                         </button>
//                       </form>
//                     </div>
//                   </div>

//                   {/* Staff Directory Table */}
//                   <div className="w-full xl:w-2/3">
//                     <div className={`border shadow-sm rounded-[2.5rem] overflow-hidden flex flex-col h-full transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
//                       <div className={`px-8 py-6 border-b flex justify-between items-center transition-colors duration-300 ${theme.borderSoft} ${isDarkMode ? 'bg-black/20' : 'bg-slate-50/50'}`}>
//                         <div>
//                           <h2 className={`text-xl font-black tracking-wide ${theme.textMain}`}>Identity Matrix</h2>
//                           <p className={`text-xs mt-1 ${theme.textSub}`}>Active personnel routing logic and security status.</p>
//                         </div>
//                         <span className="bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
//                           {filteredStaff.length} Authenticated
//                         </span>
//                       </div>

//                       {isStaffLoading ? (
//                         <div className="p-16 flex justify-center"><Loader2 className="animate-spin text-[#C5A059]" size={32} /></div>
//                       ) : (
//                         <div className="overflow-x-auto p-2">
//                           <table className="w-full text-left border-collapse">
//                             <thead>
//                               <tr className={`text-[11px] uppercase tracking-[0.15em] font-extrabold border-b ${theme.borderSoft} ${theme.textSub}`}>
//                                 <th className="px-8 py-5">Personnel</th>
//                                 <th className="px-8 py-5">Department</th>
//                                 <th className="px-8 py-5">Security</th>
//                                 <th className="px-8 py-5 text-right">Status</th>
//                               </tr>
//                             </thead>
//                             <tbody className="text-sm">
//                               {filteredStaff.map((staff) => (
//                                 <tr key={staff.id} className={`transition-colors border-b last:border-0 ${theme.borderSoft} ${theme.hoverBg}`}>
//                                   <td className="px-8 py-5">
//                                     <div className="flex items-center gap-4">
//                                       <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm ${isDarkMode ? 'bg-slate-800 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
//                                         {staff.name.substring(0, 2).toUpperCase()}
//                                       </div>
//                                       <div>
//                                         <p className={`font-bold text-sm ${theme.textMain}`}>{staff.name}</p>
//                                         <p className={`text-xs font-mono mt-0.5 ${theme.textSub}`}>{staff.email}</p>
//                                       </div>
//                                     </div>
//                                   </td>
//                                   <td className="px-8 py-5">
//                                     <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border ${
//                                       staff.hq_role === 'SUPERADMIN' ? (isDarkMode ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-red-50 text-red-600 border-red-200') :
//                                       staff.hq_role === 'SALES' ? (isDarkMode ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-600 border-blue-200') :
//                                       staff.hq_role === 'FINANCE' ? (isDarkMode ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-50 text-emerald-600 border-emerald-200') :
//                                       (isDarkMode ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-amber-50 text-amber-600 border-amber-200')
//                                     }`}>
//                                       {staff.hq_role.replace('_', ' ')}
//                                     </span>
//                                   </td>
//                                   <td className="px-8 py-5">
//                                     <div className="flex flex-col gap-1.5">
//                                       <span className={`flex items-center gap-1.5 text-xs font-medium ${theme.textSub}`}>
//                                         <Smartphone size={14} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} /> 2FA Pending
//                                       </span>
//                                       <span className={`flex items-center gap-1.5 text-[10px] ${theme.textSub}`}>
//                                         <Clock size={12} /> Last active: Just now
//                                       </span>
//                                     </div>
//                                   </td>
//                                   <td className="px-8 py-5 text-right">
//                                     <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-200'}`}>
//                                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
//                                     </div>
//                                   </td>
//                                 </tr>
//                               ))}
//                               {filteredStaff.length === 0 && (
//                                 <tr>
//                                   <td colSpan="4" className={`px-8 py-12 text-center text-sm font-medium ${theme.textSub}`}>No personnel authenticated yet.</td>
//                                 </tr>
//                               )}
//                             </tbody>
//                           </table>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* =========================================================
//                 SUBSCRIPTIONS VIEW 
//                 ========================================================= */}
//             {activeTab === "subscriptions" && (
//               <div className="space-y-8 animate-fadeIn max-w-5xl">
//                 <div>
//                   <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>Pricing configuration</h2>
//                   <p className={`text-sm font-medium ${theme.textSub}`}>Adjust the base MRR pricing for all regional tenants.</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   {Object.entries(subscriptionPrices).map(([tier, price]) => (
//                     <div key={tier} className={`border rounded-[2rem] p-8 shadow-sm flex flex-col relative overflow-hidden group transition-all duration-300 hover:shadow-lg ${theme.cardBg} ${theme.border}`}>
//                       <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                       <div className="flex justify-between items-center mb-6">
//                         <h3 className={`text-sm font-black uppercase tracking-widest ${theme.textSub}`}>{tier}</h3>
//                         <CreditCard size={20} className={`${isDarkMode ? 'text-slate-600' : 'text-slate-300'} group-hover:text-[#C5A059] transition-colors`} />
//                       </div>
                      
//                       <div className="flex items-center gap-2 mb-8">
//                         <span className={`font-bold text-xl ${theme.textSub}`}>₹</span>
//                         <input 
//                           type="number" 
//                           value={price}
//                           onChange={(e) => handlePriceChange(tier, e.target.value)}
//                           className={`text-4xl font-black w-full bg-transparent border-none outline-none focus:ring-0 p-0 ${theme.textMain}`}
//                         />
//                         <span className={`text-sm font-bold self-end mb-1 ${theme.textSub}`}>/mo</span>
//                       </div>

//                       <ul className="space-y-3 mb-8 flex-1">
//                         <li className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><CheckCircle size={14} className="text-emerald-500" /> Standard features</li>
//                         <li className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><CheckCircle size={14} className="text-emerald-500" /> 99.9% Uptime SLA</li>
//                         <li className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><CheckCircle size={14} className="text-emerald-500" /> Email Support</li>
//                       </ul>
//                     </div>
//                   ))}
//                 </div>

//                 <div className={`flex justify-end pt-4 border-t ${theme.borderSoft}`}>
//                   <button 
//                     onClick={handleSavePrices}
//                     disabled={isSavingPrices}
//                     className={`px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all disabled:opacity-70 ${isDarkMode ? 'bg-[#C5A059]/20 hover:bg-[#C5A059] border border-[#C5A059]/50 text-white hover:text-[#050f1a]' : 'bg-[#C5A059] hover:bg-[#b08d4a] text-white shadow-md shadow-[#C5A059]/20'}`}
//                   >
//                     {isSavingPrices ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
//                     {isSavingPrices ? "Deploying Changes..." : "Save & Deploy Pricing"}
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* =========================================================
//                 ANALYTICS VIEW 
//                 ========================================================= */}
//             {activeTab === "analytics" && (
//               <div className="space-y-8 animate-fadeIn">
//                 <div>
//                   <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>System Telemetry</h2>
//                   <p className={`text-sm font-medium ${theme.textSub}`}>Resource utilization and aggregate metrics.</p>
//                 </div>
                
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {/* Server Load Mock */}
//                   <div className={`border rounded-[2rem] p-8 shadow-sm transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
//                     <div className="flex items-center gap-3 mb-8">
//                       <Server className="text-[#C5A059]" size={20} />
//                       <h3 className={`font-bold ${theme.textMain}`}>AP-South-1 Cluster Load</h3>
//                     </div>
//                     <div className="space-y-6">
//                       <div>
//                         <div className="flex justify-between text-sm font-bold mb-2">
//                           <span className={theme.textSub}>CPU Usage</span>
//                           <span className={theme.textMain}>64%</span>
//                         </div>
//                         <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
//                           <div className="bg-[#C5A059] h-2 rounded-full w-[64%]"></div>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="flex justify-between text-sm font-bold mb-2">
//                           <span className={theme.textSub}>Memory Allocation</span>
//                           <span className={theme.textMain}>82%</span>
//                         </div>
//                         <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
//                           <div className="bg-rose-500 h-2 rounded-full w-[82%]"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Database Stats Mock */}
//                   <div className={`border rounded-[2rem] p-8 shadow-sm transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
//                     <div className="flex items-center gap-3 mb-8">
//                       <Database className="text-blue-500" size={20} />
//                       <h3 className={`font-bold ${theme.textMain}`}>Database I/O</h3>
//                     </div>
//                     <div className="flex items-end gap-6 mb-4">
//                       <div className="flex-1">
//                         <p className={`text-xs font-bold mb-1 ${theme.textSub}`}>Read Ops/sec</p>
//                         <p className={`text-3xl font-black ${theme.textMain}`}>12,450</p>
//                       </div>
//                       <div className={`flex-1 border-l pl-6 ${theme.borderSoft}`}>
//                         <p className={`text-xs font-bold mb-1 ${theme.textSub}`}>Write Ops/sec</p>
//                         <p className={`text-3xl font-black ${theme.textMain}`}>3,892</p>
//                       </div>
//                     </div>
//                     <div className={`mt-6 pt-6 border-t flex items-center text-sm text-emerald-500 font-bold ${theme.borderSoft}`}>
//                       <TrendingUp size={16} className="mr-2" /> +14% compared to yesterday
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* =========================================================
//                 SETTINGS VIEW 
//                 ========================================================= */}
//             {activeTab === "settings" && (
//               <div className="space-y-8 animate-fadeIn max-w-3xl">
//                 <div>
//                   <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>Global Preferences</h2>
//                   <p className={`text-sm font-medium ${theme.textSub}`}>Manage environment variables and operational flags.</p>
//                 </div>

//                 <div className={`border shadow-sm rounded-[2rem] overflow-hidden transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
//                   <div className={`p-8 border-b flex justify-between items-center transition-colors ${theme.borderSoft} ${theme.hoverBg}`}>
//                     <div>
//                       <h4 className={`font-bold ${theme.textMain}`}>Maintenance Mode</h4>
//                       <p className={`text-xs mt-1 ${theme.textSub}`}>Suspend all tenant logins and show maintenance screen.</p>
//                     </div>
//                     <button 
//                       onClick={() => toggleSetting('maintenanceMode')}
//                       className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${systemSettings.maintenanceMode ? 'bg-rose-500' : (isDarkMode ? 'bg-slate-700' : 'bg-slate-200')}`}
//                     >
//                       <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${systemSettings.maintenanceMode ? 'left-7' : 'left-1'}`}></span>
//                     </button>
//                   </div>

//                   <div className={`p-8 border-b flex justify-between items-center transition-colors ${theme.borderSoft} ${theme.hoverBg}`}>
//                     <div>
//                       <h4 className={`font-bold ${theme.textMain}`}>Allow New Tenant Registrations</h4>
//                       <p className={`text-xs mt-1 ${theme.textSub}`}>Accept new sign-ups from the main landing page.</p>
//                     </div>
//                     <button 
//                       onClick={() => toggleSetting('newRegistrations')}
//                       className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${systemSettings.newRegistrations ? 'bg-emerald-500' : (isDarkMode ? 'bg-slate-700' : 'bg-slate-200')}`}
//                     >
//                       <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${systemSettings.newRegistrations ? 'left-7' : 'left-1'}`}></span>
//                     </button>
//                   </div>

//                   <div className={`p-8 flex justify-between items-center transition-colors ${theme.hoverBg}`}>
//                     <div>
//                       <h4 className={`font-bold ${theme.textMain}`}>System Alert Emails</h4>
//                       <p className={`text-xs mt-1 ${theme.textSub}`}>Send critical architecture alerts to the SuperAdmin email group.</p>
//                     </div>
//                     <button 
//                       onClick={() => toggleSetting('emailNotifications')}
//                       className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${systemSettings.emailNotifications ? 'bg-blue-500' : (isDarkMode ? 'bg-slate-700' : 'bg-slate-200')}`}
//                     >
//                       <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${systemSettings.emailNotifications ? 'left-7' : 'left-1'}`}></span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//           </div>
//         </main>
//       </div>

//       {/* --- MODALS (PROVISIONING & SUBSCRIPTION OVERRIDE) --- */}
      
//       {/* 1. Provision New Store Modal */}
//       {showProvisionModal && (
//         <div className={theme.modalOverlay}>
//           <div className={`w-full max-w-md border rounded-[2rem] p-8 shadow-2xl relative ${theme.cardBg} ${theme.border}`}>
//             <button onClick={() => setShowProvisionModal(false)} className={`absolute top-6 right-6 ${theme.textSub} hover:${theme.textMain}`}>
//               <X size={20} />
//             </button>
//             <h3 className={`text-xl font-black mb-1 ${theme.textMain}`}>Manual Provisioning</h3>
//             <p className={`text-xs mb-6 ${theme.textSub}`}>Bypass gateway and generate a complimentary tenant instance.</p>
            
//             <form onSubmit={handleProvisionTenant} className="space-y-4">
//               <div>
//                 <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Store/Company Name</label>
//                 <input 
//                   type="text" required
//                   value={newTenantForm.storeName} onChange={(e) => setNewTenantForm({...newTenantForm, storeName: e.target.value})}
//                   className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
//                 />
//               </div>
//               <div>
//                 <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Admin Email</label>
//                 <input 
//                   type="email" required
//                   value={newTenantForm.email} onChange={(e) => setNewTenantForm({...newTenantForm, email: e.target.value})}
//                   className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
//                 />
//               </div>
//               <div>
//                 <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Initial Password</label>
//                 <input 
//                   type="password" required minLength={6}
//                   value={newTenantForm.password} onChange={(e) => setNewTenantForm({...newTenantForm, password: e.target.value})}
//                   className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
//                 />
//               </div>
//               <div>
//                 <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Complimentary Tier</label>
//                 <select 
//                   value={newTenantForm.tier} onChange={(e) => setNewTenantForm({...newTenantForm, tier: e.target.value})}
//                   className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all cursor-pointer ${theme.inputBg} ${theme.borderSoft} ${theme.textMain} ${isDarkMode ? '[&>option]:bg-slate-800' : ''}`}
//                 >
//                   <option value="BASIC">Basic Edition</option>
//                   <option value="GROWTH">Growth Edition</option>
//                   <option value="ENTERPRISE">Enterprise Edition</option>
//                 </select>
//               </div>
//               <button 
//                 type="submit" disabled={isSubmittingOverride}
//                 className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50"
//               >
//                 {isSubmittingOverride ? <Loader2 size={16} className="animate-spin mr-2"/> : <CheckCircle size={16} className="mr-2"/>}
//                 Provision & Grant Access
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* 2. Edit Existing Store Subscription Modal */}
//       {showEditSubModal && activeStoreForSub && (
//         <div className={theme.modalOverlay}>
//           <div className={`w-full max-w-md border rounded-[2rem] p-8 shadow-2xl relative ${theme.cardBg} ${theme.border}`}>
//             <button onClick={() => { setShowEditSubModal(false); setActiveStoreForSub(null); }} className={`absolute top-6 right-6 ${theme.textSub} hover:${theme.textMain}`}>
//               <X size={20} />
//             </button>
//             <h3 className={`text-xl font-black mb-1 ${theme.textMain}`}>Override Access Level</h3>
//             <p className={`text-xs mb-6 ${theme.textSub}`}>Modifying subscription for <strong>{activeStoreForSub.name}</strong>.</p>
            
//             <form onSubmit={handleUpdateSubscription} className="space-y-4">
//               <div>
//                 <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Select New Tier</label>
//                 <select 
//                   value={editSubForm.tier} onChange={(e) => setEditSubForm({...editSubForm, tier: e.target.value})}
//                   className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all cursor-pointer ${theme.inputBg} ${theme.borderSoft} ${theme.textMain} ${isDarkMode ? '[&>option]:bg-slate-800' : ''}`}
//                 >
//                   <option value="TRIAL">Trial (Restricted)</option>
//                   <option value="BASIC">Basic Edition</option>
//                   <option value="GROWTH">Growth Edition</option>
//                   <option value="ENTERPRISE">Enterprise Edition</option>
//                 </select>
//               </div>
              
//               {/* Visual toggle confirming this is a free override */}
//               <div className={`p-4 rounded-xl border flex gap-3 items-center mt-2 ${isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'}`}>
//                 <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
//                 <div>
//                   <p className={`text-xs font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>Complimentary Override Active</p>
//                   <p className={`text-[10px] mt-0.5 ${isDarkMode ? 'text-emerald-500/70' : 'text-emerald-600/70'}`}>This action bypasses the standard payment gateway.</p>
//                 </div>
//               </div>

//               <button 
//                 type="submit" disabled={isSubmittingOverride}
//                 className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50"
//               >
//                 {isSubmittingOverride ? <Loader2 size={16} className="animate-spin mr-2"/> : <Crown size={16} className="mr-2"/>}
//                 Confirm Update
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// // --- REUSABLE METRIC CARD (Upgraded for interactivity & dual-theme) ---
// const StatCard = ({ title, value, icon: Icon, isGold, isDarkMode, theme }) => (
//   <div className={`rounded-[2rem] border p-6 flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${theme.cardBg} ${theme.border} ${isDarkMode ? 'hover:border-[#C5A059]/40' : 'hover:border-slate-300'}`}>
    
//     {/* Interactive Hover Glow (Follows cursor concept via CSS hover) */}
//     <div className={`absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none transition-all duration-500 blur-3xl opacity-0 group-hover:opacity-30 ${isGold ? 'bg-[#C5A059]' : 'bg-blue-500'}`}></div>

//     <div className="flex justify-between items-start relative z-10">
//       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border transition-all duration-300 ${
//         isGold 
//           ? (isDarkMode ? 'bg-[#C5A059]/10 border-[#C5A059]/20 group-hover:bg-[#C5A059]/20 group-hover:scale-110' : 'bg-[#C5A059]/10 border-[#C5A059]/20 group-hover:bg-[#C5A059]/20 group-hover:scale-110') 
//           : (isDarkMode ? 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110' : 'bg-blue-50 border-blue-100 group-hover:bg-blue-100 group-hover:scale-110')
//       }`}>
//         <Icon size={20} className={`${isGold ? 'text-[#C5A059]' : (isDarkMode ? 'text-blue-400' : 'text-blue-600')} transition-colors`} />
//       </div>
      
//       {/* Slide-in View Details interaction */}
//       <div className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center text-[10px] font-bold uppercase tracking-widest text-[#C5A059] cursor-pointer">
//         View <ChevronRight size={12} />
//       </div>
//     </div>
    
//     <div className="relative z-10">
//       <p className={`text-xs font-bold mb-1 transition-colors ${theme.textSub}`}>{title}</p>
//       <div className="flex items-end gap-3">
//         <h3 className={`text-3xl font-black transition-colors ${theme.textMain}`}>{value}</h3>
//       </div>
//     </div>
//   </div>
// );

// export default SuperAdminDashboard;
//perfect tull here

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, Users, UserRound, CreditCard, 
  ShieldCheck, LineChart, Settings, LogOut, 
  Search, Bell, ArrowUpRight, TrendingUp, ArrowUpRightFromCircle,
  Globe, Building2, Activity, IndianRupee, ShieldAlert,
  UserPlus, Lock, Mail, User, Loader2, Layers, Briefcase,
  Smartphone, Clock, Save, Server, Database, CheckCircle,
  Moon, Sun, ChevronRight, Plus, Crown, X,
  Package, Scale, HardHat, ChefHat, Truck, ShieldPlus
} from 'lucide-react';
import logo from '../assets/logo.jpg';

const INDUSTRY_CONFIG = [
  { id: 'WHOLESALE', name: 'Wholesale & Retail', icon: Package },
  { id: 'LEGAL', name: 'Legal & Consulting', icon: Scale },
  { id: 'CONSTRUCTION', name: 'Construction', icon: HardHat },
  { id: 'RESTAURANT', name: 'Restaurant & F&B', icon: ChefHat },
  { id: 'PHARMACY', name: 'Pharmacy & Clinical', icon: ShieldPlus },
  { id: 'RENTAL', name: 'Equipment & Fleet', icon: Truck }
];

const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("tenants");
  const [searchTerm, setSearchTerm] = useState("");

  const [hqData, setHqData] = useState({
    metrics: { total_tenants: 0, active_trials: 0, paying_customers: 0, estimated_mrr_inr: 0 },
    stores: []
  });

  const [staffList, setStaffList] = useState([]);
  const [isStaffLoading, setIsStaffLoading] = useState(false);
  const [isSubmittingStaff, setIsSubmittingStaff] = useState(false);
  const [staffError, setStaffError] = useState(null);
  const [staffFormData, setStaffFormData] = useState({
    name: '', email: '', password: '', hq_role: 'SALES'
  });

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); 
  
  // Industry-Specific Pricing State
  const [activePricingIndustry, setActivePricingIndustry] = useState('WHOLESALE');
  const [subscriptionPrices, setSubscriptionPrices] = useState({
    WHOLESALE: { BASIC: 999, GROWTH: 2499, ENTERPRISE: 4999 },
    LEGAL: { BASIC: 1999, GROWTH: 4999, ENTERPRISE: 8999 },
    CONSTRUCTION: { BASIC: 1499, GROWTH: 3999, ENTERPRISE: 7999 },
    RESTAURANT: { BASIC: 999, GROWTH: 1999, ENTERPRISE: 3999 },
    PHARMACY: { BASIC: 1299, GROWTH: 2999, ENTERPRISE: 6999 },
    RENTAL: { BASIC: 1099, GROWTH: 2599, ENTERPRISE: 5499 }
  });
  const [isSavingPrices, setIsSavingPrices] = useState(false);
  
  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    newRegistrations: true,
    emailNotifications: true,
  });

  const [showProvisionModal, setShowProvisionModal] = useState(false);
  const [showEditSubModal, setShowEditSubModal] = useState(false);
  const [activeStoreForSub, setActiveStoreForSub] = useState(null);
  const [isSubmittingOverride, setIsSubmittingOverride] = useState(false);

  const [newTenantForm, setNewTenantForm] = useState({
    storeName: '', email: '', password: '', tier: 'ENTERPRISE', industry: 'WHOLESALE'
  });
  const [editSubForm, setEditSubForm] = useState({ tier: 'ENTERPRISE', isFree: true });

  useEffect(() => {
    const fetchHqData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/");
          return;
        }

        const [metricsRes, storesRes] = await Promise.all([
          fetch("http://localhost:8000/api/hq/metrics", { headers: { Authorization: `Bearer ${token}` } }),
          fetch("http://localhost:8000/api/hq/stores", { headers: { Authorization: `Bearer ${token}` } })
        ]);

        if (metricsRes.status === 403 || storesRes.status === 403) {
          navigate("/dashboard");
          return;
        }

        const metrics = await metricsRes.json();
        const stores = await storesRes.json();
        setHqData({ metrics, stores });
      } catch (err) {
        console.error("Failed to load HQ data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHqData();
  }, [navigate]);

  const fetchStaff = async () => {
    setIsStaffLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch('http://localhost:8000/api/hq/staff', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error("Failed to load staff directory");
      const data = await res.json();
      setStaffList(data);
    } catch (err) {
      setStaffError(err.message);
    } finally {
      setIsStaffLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "staff") fetchStaff();
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleImpersonate = async (storeId) => {
    if (!window.confirm("Initialize secure impersonation session?")) return;
    try {
      const adminToken = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8000/api/hq/impersonate/${storeId}`, {
        method: "POST", headers: { Authorization: `Bearer ${adminToken}` }
      });
      if (!response.ok) throw new Error("Impersonation rejected by server");

      const data = await response.json();
      localStorage.setItem("superadmin_token", adminToken);
      localStorage.setItem("token", data.access_token);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Impersonation failed:", err);
      alert("Failed to initialize impersonation session.");
    }
  };

  const handleStaffInputChange = (e) => {
    setStaffFormData({ ...staffFormData, [e.target.name]: e.target.value });
  };

  const handleCreateStaff = async (e) => {
    e.preventDefault();
    setIsSubmittingStaff(true);
    setStaffError(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch('http://localhost:8000/api/hq/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(staffFormData)
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Failed to create staff account");
      }
      setStaffFormData({ name: '', email: '', password: '', hq_role: 'SALES' });
      await fetchStaff();
    } catch (err) {
      setStaffError(err.message);
    } finally {
      setIsSubmittingStaff(false);
    }
  };

  const handlePriceChange = (tier, value) => {
    setSubscriptionPrices(prev => ({
      ...prev,
      [activePricingIndustry]: {
        ...prev[activePricingIndustry],
        [tier]: Number(value)
      }
    }));
  };

  // const handleSavePrices = () => {
  //   setIsSavingPrices(true);
  //   setTimeout(() => {
  //     setIsSavingPrices(false);
  //     alert("Industry-specific subscription pricing updated successfully across all regions.");
  //   }, 800);
  // };

  // 1. Fetch current rates on mount inside your useEffect or a dedicated function:
useEffect(() => {
  const fetchPricing = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/pricing/");
      if (res.ok) {
        const data = await res.json();
        if (Object.keys(data).length > 0) {
          setSubscriptionPrices(prev => ({ ...prev, ...data }));
        }
      }
    } catch (err) {
      console.error("Failed to load initial pricing matrix:", err);
    }
  };
  fetchPricing();
}, []);

// 2. Replace the handleSavePrices function with real POST dispatch:
const handleSavePrices = async () => {
  setIsSavingPrices(true);
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:8000/api/pricing/bulk-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(subscriptionPrices)
    });

    if (!res.ok) throw new Error("Failed to commit pricing updates.");

    alert("Pricing matrix committed to database. Tenant checkout rates updated.");
  } catch (err) {
    console.error("Pricing update failed:", err);
    alert("Error updating pricing. Verify backend connection.");
  } finally {
    setIsSavingPrices(false);
  }
};

  const toggleSetting = (key) => {
    setSystemSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleProvisionTenant = async (e) => {
    e.preventDefault();
    setIsSubmittingOverride(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/hq/stores/provision`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
            storeName: newTenantForm.storeName,
            email: newTenantForm.email,
            password: newTenantForm.password,
            tier: newTenantForm.tier,
            industry: newTenantForm.industry
        })
      });

      if (!res.ok) throw new Error("Failed to provision tenant");
      const newStore = await res.json();

      setHqData(prev => ({
        ...prev, 
        metrics: { ...prev.metrics, total_tenants: prev.metrics.total_tenants + 1 },
        stores: [newStore, ...prev.stores]
      }));

      setShowProvisionModal(false);
      setNewTenantForm({ storeName: '', email: '', password: '', tier: 'ENTERPRISE', industry: 'WHOLESALE' });
    } catch (err) {
      alert("Failed to provision tenant.");
    } finally {
      setIsSubmittingOverride(false);
    }
  };

  const handleUpdateSubscription = async (e) => {
    e.preventDefault();
    setIsSubmittingOverride(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/hq/stores/${activeStoreForSub.id}/tier`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ tier: editSubForm.tier })
      });

      if (!res.ok) throw new Error("Failed to update subscription");

      setHqData(prev => ({
        ...prev,
        stores: prev.stores.map(store => 
          store.id === activeStoreForSub.id 
            ? { ...store, tier: editSubForm.tier, status: 'ACTIVE' } 
            : store
        )
      }));

      setShowEditSubModal(false);
      setActiveStoreForSub(null);
    } catch (err) {
      alert("Failed to update subscription.");
    } finally {
      setIsSubmittingOverride(false);
    }
  };

  const filteredStores = hqData.stores.filter(store => 
    store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStaff = staffList.filter(staff => 
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navItems = [
    { id: 'tenants', name: 'Tenants', icon: Layers },
    { id: 'staff', name: 'Staff Matrix', icon: Briefcase },
    { id: 'subscriptions', name: 'Subscriptions', icon: CreditCard },
    { id: 'analytics', name: 'Analytics', icon: LineChart },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center font-sans ${isDarkMode ? 'bg-[#050f1a]' : 'bg-slate-50'}`}>
        <div className="animate-pulse flex flex-col items-center">
          <ShieldAlert className="text-[#C5A059] w-14 h-14 mb-4 animate-bounce" />
          <p className={`font-bold tracking-[0.2em] uppercase text-sm ${isDarkMode ? 'text-[#C5A059]' : 'text-slate-500'}`}>Initializing Core...</p>
        </div>
      </div>
    );
  }

  const theme = {
    bg: isDarkMode ? 'bg-[#050f1a]' : 'bg-slate-50',
    containerBg: isDarkMode ? 'bg-[#0f172a]/40 backdrop-blur-[40px]' : 'bg-white',
    sidebarBg: isDarkMode ? 'bg-slate-900/20' : 'bg-slate-50',
    border: isDarkMode ? 'border-white/10' : 'border-slate-200',
    borderSoft: isDarkMode ? 'border-white/5' : 'border-slate-100',
    textMain: isDarkMode ? 'text-white' : 'text-slate-900',
    textSub: isDarkMode ? 'text-slate-400' : 'text-slate-500',
    cardBg: isDarkMode ? 'bg-white/5 backdrop-blur-md' : 'bg-white',
    hoverBg: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-50',
    inputBg: isDarkMode ? 'bg-black/20' : 'bg-slate-50',
    modalOverlay: 'fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity',
  };

  return (
    <div className={`min-h-screen w-full p-4 sm:p-6 flex items-center justify-center font-sans transition-colors duration-300 ${theme.bg}`}>
      
      {isDarkMode && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-500">
          <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0369a1]/30 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute top-[-10%] left-[30%] w-[600px] h-[600px] bg-[#38bdf8]/15 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute top-[20%] -right-[10%] w-[700px] h-[700px] bg-[#C5A059]/15 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>
      )}

      <div className={`w-full max-w-[1600px] h-[calc(100vh-48px)] border shadow-xl rounded-[2.5rem] flex relative overflow-hidden transition-colors duration-300 ${theme.containerBg} ${theme.border}`}>
        
        <aside className={`w-64 border-r flex flex-col p-6 shrink-0 transition-colors duration-300 ${theme.sidebarBg} ${theme.border}`}>
          <div className="flex items-center gap-3 mb-10 pl-2">
            <img src={logo} alt="Laxvira" className={`w-8 h-8 rounded-lg object-contain p-0.5 shadow-sm border ${isDarkMode ? 'bg-white/90 border-transparent' : 'bg-white border-slate-200'}`} />
            <span className={`font-black tracking-widest text-lg ${theme.textMain}`}>LAXVIRA HQ</span>
          </div>

          <div className="mb-8 pl-2">
            <span className="bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-sm">
              SYS.ADMIN
            </span>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#C5A059]/10 text-[#C5A059] shadow-sm' 
                      : `${theme.textSub} hover:${theme.textMain} ${theme.hoverBg}`
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-[#C5A059]' : theme.textSub} />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </aside>

        <main className={`flex-1 flex flex-col overflow-hidden relative transition-colors duration-300 ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}>
          
          <div className={`absolute inset-0 pointer-events-none flex items-center justify-center z-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-[0.02] mix-blend-screen' : 'opacity-[0.03] mix-blend-multiply'}`}>
            <img src={logo} alt="Laxvira" className="w-[600px] h-[600px] object-contain grayscale -rotate-12" />
          </div>

          <header className={`h-24 px-10 flex items-center justify-end gap-5 border-b shrink-0 transition-colors duration-300 relative z-50 ${theme.borderSoft}`}>
            
            <div className={`flex items-center gap-2 rounded-full border px-4 py-2.5 transition-all duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 focus-within:border-[#C5A059]' : 'bg-slate-50 border-slate-200 focus-within:border-[#C5A059]'}`}>
              <Search size={16} className={theme.textSub} />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (activeTab !== 'tenants' && activeTab !== 'staff' && e.target.value !== '') {
                    setActiveTab('tenants');
                  }
                }}
                placeholder="Search matrix..."
                className={`bg-transparent border-none outline-none text-sm w-48 placeholder:${theme.textSub} ${theme.textMain}`}
              />
            </div>

            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-900'}`}
              title="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center relative transition-colors duration-300 ${isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-900'}`}
              >
                <Bell size={18} />
                <span className={`absolute top-2 right-2.5 w-2 h-2 rounded-full bg-rose-500 border-2 ${isDarkMode ? 'border-[#1e2a3b]' : 'border-white'}`}></span>
              </button>

              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                  <div className={`absolute right-0 mt-3 w-72 rounded-2xl border shadow-xl p-4 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-100'}`}>
                    <h4 className={`text-sm font-black mb-3 ${theme.textMain}`}>System Alerts</h4>
                    <div className="space-y-3">
                      <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                        <p className={`text-xs font-bold ${theme.textMain}`}>New Tenant Provisioned</p>
                        <p className={`text-[10px] mt-1 ${theme.textSub}`}>Acme Corp initiated a standard trial environment.</p>
                      </div>
                      <div className={`p-3 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                        <p className={`text-xs font-bold ${theme.textMain}`}>Architecture Update</p>
                        <p className={`text-[10px] mt-1 ${theme.textSub}`}>v2.4 core routing deployed successfully.</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="relative">
              <div 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className={`flex items-center gap-3 pl-5 border-l cursor-pointer group transition-colors duration-300 ${theme.borderSoft}`}
              >
                <div className={`w-10 h-10 rounded-full border-2 overflow-hidden shadow-sm transition-colors ${isDarkMode ? 'bg-slate-700 border-white/10 group-hover:border-[#C5A059]/50' : 'bg-slate-100 border-slate-200 group-hover:border-[#C5A059]'}`}>
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="Admin" className="w-full h-full object-cover" />
                </div>
              </div>

              {showProfileMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowProfileMenu(false)} />
                  <div className={`absolute right-0 mt-3 w-56 rounded-2xl border shadow-xl p-2 z-50 transition-colors ${isDarkMode ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-100'}`}>
                    <div className={`px-3 py-2.5 border-b mb-2 ${theme.borderSoft}`}>
                      <p className={`text-[13px] font-black truncate ${theme.textMain}`}>Super Admin</p>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${theme.textSub}`}>HQ Access</p>
                    </div>
                    
                    <button 
                      onClick={() => { setShowProfileMenu(false); setActiveTab('settings'); }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold rounded-xl transition-colors ${isDarkMode ? 'text-slate-300 hover:bg-white/10 hover:text-[#C5A059]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#C5A059]'}`}
                    >
                      <Settings size={14} /> Global Settings
                    </button>
                    
                    <button 
                      onClick={handleLogout}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold rounded-xl transition-colors ${isDarkMode ? 'text-rose-400 hover:bg-rose-500/10' : 'text-rose-500 hover:bg-rose-50'}`}
                    >
                      <LogOut size={14} /> Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-10 relative z-10">
            
            {activeTab === "tenants" && (
              <div className="space-y-10 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  <StatCard title="Monthly Revenue" value={`₹${hqData.metrics.estimated_mrr_inr.toLocaleString("en-IN")}`} icon={IndianRupee} isGold isDarkMode={isDarkMode} theme={theme} />
                  <StatCard title="Total Tenants" value={hqData.metrics.total_tenants} icon={Building2} isDarkMode={isDarkMode} theme={theme} />
                  <StatCard title="Active Customers" value={hqData.metrics.paying_customers} icon={Users} isDarkMode={isDarkMode} theme={theme} />
                  <StatCard title="Trials Provisioned" value={hqData.metrics.active_trials} icon={Activity} isDarkMode={isDarkMode} theme={theme} />
                </div>

                <div className={`border shadow-sm rounded-[2.5rem] p-8 flex flex-col transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                    <div>
                      <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>Tenant Directory</h2>
                      <p className={`text-sm font-medium ${theme.textSub}`}>Real-time ecosystem tracking and environment impersonation.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setShowProvisionModal(true)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all ${isDarkMode ? 'bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 hover:bg-[#C5A059] hover:text-slate-900' : 'bg-[#C5A059] text-white hover:bg-[#a68444]'}`}
                      >
                        <Plus size={16} /> Provision Tenant
                      </button>

                      <div className={`flex items-center border rounded-full px-4 py-2.5 w-full lg:w-64 focus-within:border-[#C5A059] focus-within:ring-1 focus-within:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft}`}>
                        <Search size={16} className={`${theme.textSub} shrink-0`} />
                        <input 
                          type="text" 
                          value={searchTerm} 
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search stores..." 
                          className={`bg-transparent border-none outline-none text-sm w-full px-3 placeholder:${theme.textSub} ${theme.textMain}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className={`border-b text-[10px] font-black tracking-widest uppercase ${theme.borderSoft} ${theme.textSub}`}>
                          <th className="pb-4 pl-4 font-black">Workspace</th>
                          <th className="pb-4">Admin Contact</th>
                          <th className="pb-4">Region</th>
                          <th className="pb-4">Subscription</th>
                          <th className="pb-4 text-right pr-4">Access</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm font-medium">
                        {filteredStores.length === 0 ? (
                          <tr>
                            <td colSpan="5" className={`py-16 text-center ${theme.textSub}`}>No tenants found matching criteria.</td>
                          </tr>
                        ) : (
                          filteredStores.map((store, index) => (
                            <tr key={store.id || index} className={`border-b transition-colors group ${theme.borderSoft} ${theme.hoverBg}`}>
                              <td className="py-5 pl-4">
                                <p className={`font-bold mb-0.5 ${theme.textMain}`}>{store.name}</p>
                                <p className={`text-xs font-mono ${theme.textSub}`}>{store.name.toLowerCase().replace(/\s+/g, '')}.laxvira.com</p>
                              </td>
                              <td className={`py-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{store.email}</td>
                              <td className="py-5">
                                <div className={`flex items-center gap-2 text-xs ${theme.textSub}`}>
                                  <Globe size={14} /> AP-South-1
                                </div>
                              </td>
                              <td className="py-5">
                                <div className="flex items-center gap-3">
                                  <div className={`px-2.5 py-1 rounded text-[10px] font-black tracking-widest uppercase border ${
                                    store.tier === 'ENTERPRISE' ? (isDarkMode ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'bg-purple-50 text-purple-600 border-purple-200') :
                                    store.tier === 'GROWTH' ? (isDarkMode ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-600 border-blue-200') :
                                    store.tier === 'BASIC' ? (isDarkMode ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-50 text-emerald-600 border-emerald-200') :
                                    (isDarkMode ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-amber-50 text-amber-600 border-amber-200')
                                  }`}>
                                    {store.tier || 'TRIAL'}
                                  </div>
                                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase ${
                                    store.status === 'ACTIVE' ? 'text-emerald-600' : 'text-rose-600'
                                  }`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${store.status === 'ACTIVE' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                                    {store.status || 'ACTIVE'}
                                  </span>
                                </div>
                              </td>
                              <td className="py-5 text-right pr-4">
                                <div className="flex items-center justify-end gap-2">
                                  <button 
                                    onClick={() => {
                                      setActiveStoreForSub(store);
                                      setEditSubForm({ tier: store.tier || 'BASIC', isFree: true });
                                      setShowEditSubModal(true);
                                    }}
                                    title="Modify Subscription Access"
                                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                                      isDarkMode ? 'bg-white/5 border-white/10 text-slate-300 hover:text-[#C5A059] hover:border-[#C5A059]' : 'bg-white border-slate-200 text-slate-500 hover:text-[#C5A059] hover:border-[#C5A059]'
                                    }`}
                                  >
                                    <Crown size={15} />
                                  </button>
                                  
                                  <button 
                                    onClick={() => handleImpersonate(store.id)}
                                    className={`border px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 group/btn transition-all shadow-sm ${
                                      isDarkMode ? 'bg-white/5 border-white/10 text-white hover:border-[#C5A059] hover:text-[#C5A059]' : 'bg-white border-slate-200 text-slate-700 hover:border-[#C5A059] hover:text-[#C5A059]'
                                    }`}
                                  >
                                    Impersonate 
                                    <ArrowUpRightFromCircle size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "staff" && (
              <div className="space-y-10 animate-fadeIn">
                <div className="flex flex-col xl:flex-row gap-8 items-start">
                  
                  <div className="w-full xl:w-1/3">
                    <div className={`border shadow-sm rounded-[2rem] p-8 transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
                      <h2 className={`text-xl font-black mb-2 flex items-center gap-2.5 ${theme.textMain}`}>
                        <UserPlus className="text-[#C5A059]" size={22} /> Provision Identity
                      </h2>
                      <p className={`text-xs mb-8 leading-relaxed ${theme.textSub}`}>Generate secure IAM credentials for departmental routing.</p>
                      
                      {staffError && (
                        <div className={`mb-6 p-4 rounded-xl border text-xs font-semibold shadow-sm ${isDarkMode ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-rose-50 border-rose-200 text-rose-600'}`}>
                          {staffError}
                        </div>
                      )}

                      <form onSubmit={handleCreateStaff} className="space-y-5">
                        <div>
                          <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Legal Name</label>
                          <div className="relative">
                            <User size={18} className={`absolute left-4 top-3 ${theme.textSub}`} />
                            <input 
                              type="text" required name="name" value={staffFormData.name} onChange={handleStaffInputChange}
                              className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
                              placeholder="e.g. Alex Mercer"
                            />
                          </div>
                        </div>

                        <div>
                          <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Corporate Email</label>
                          <div className="relative">
                            <Mail size={18} className={`absolute left-4 top-3 ${theme.textSub}`} />
                            <input 
                              type="email" required name="email" value={staffFormData.email} onChange={handleStaffInputChange}
                              className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
                              placeholder="alex@laxvira.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Initial Password</label>
                          <div className="relative">
                            <Lock size={18} className={`absolute left-4 top-3 ${theme.textSub}`} />
                            <input 
                              type="password" required name="password" minLength={8} value={staffFormData.password} onChange={handleStaffInputChange}
                              className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
                              placeholder="••••••••"
                            />
                          </div>
                        </div>

                        <div>
                          <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Routing Role</label>
                          <select 
                            name="hq_role" required value={staffFormData.hq_role} onChange={handleStaffInputChange}
                            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all cursor-pointer ${theme.inputBg} ${theme.borderSoft} ${theme.textMain} ${isDarkMode ? '[&>option]:bg-slate-800' : ''}`}
                          >
                            <option value="SALES">Sales (Account Executive)</option>
                            <option value="FINANCE">Finance & Billing</option>
                            <option value="IT_SUPPORT">IT / Technical Support</option>
                            <option value="SUPERADMIN">System Administrator</option>
                          </select>
                        </div>

                        <button 
                          type="submit" disabled={isSubmittingStaff}
                          className={`w-full mt-2 font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 ${isDarkMode ? 'bg-[#C5A059]/20 hover:bg-[#C5A059] border border-[#C5A059]/50 hover:text-[#050f1a] text-white' : 'bg-[#C5A059] hover:bg-[#b08d4a] text-white shadow-md shadow-[#C5A059]/20'}`}
                        >
                          {isSubmittingStaff ? <Loader2 size={18} className="animate-spin mr-2" /> : <UserPlus size={18} className="mr-2" />}
                          Authorize Identity
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="w-full xl:w-2/3">
                    <div className={`border shadow-sm rounded-[2.5rem] overflow-hidden flex flex-col h-full transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
                      <div className={`px-8 py-6 border-b flex justify-between items-center transition-colors duration-300 ${theme.borderSoft} ${isDarkMode ? 'bg-black/20' : 'bg-slate-50/50'}`}>
                        <div>
                          <h2 className={`text-xl font-black tracking-wide ${theme.textMain}`}>Identity Matrix</h2>
                          <p className={`text-xs mt-1 ${theme.textSub}`}>Active personnel routing logic and security status.</p>
                        </div>
                        <span className="bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                          {filteredStaff.length} Authenticated
                        </span>
                      </div>

                      {isStaffLoading ? (
                        <div className="p-16 flex justify-center"><Loader2 className="animate-spin text-[#C5A059]" size={32} /></div>
                      ) : (
                        <div className="overflow-x-auto p-2">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className={`text-[11px] uppercase tracking-[0.15em] font-extrabold border-b ${theme.borderSoft} ${theme.textSub}`}>
                                <th className="px-8 py-5">Personnel</th>
                                <th className="px-8 py-5">Department</th>
                                <th className="px-8 py-5">Security</th>
                                <th className="px-8 py-5 text-right">Status</th>
                              </tr>
                            </thead>
                            <tbody className="text-sm">
                              {filteredStaff.map((staff) => (
                                <tr key={staff.id} className={`transition-colors border-b last:border-0 ${theme.borderSoft} ${theme.hoverBg}`}>
                                  <td className="px-8 py-5">
                                    <div className="flex items-center gap-4">
                                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm ${isDarkMode ? 'bg-slate-800 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                                        {staff.name.substring(0, 2).toUpperCase()}
                                      </div>
                                      <div>
                                        <p className={`font-bold text-sm ${theme.textMain}`}>{staff.name}</p>
                                        <p className={`text-xs font-mono mt-0.5 ${theme.textSub}`}>{staff.email}</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-8 py-5">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border ${
                                      staff.hq_role === 'SUPERADMIN' ? (isDarkMode ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-red-50 text-red-600 border-red-200') :
                                      staff.hq_role === 'SALES' ? (isDarkMode ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-600 border-blue-200') :
                                      staff.hq_role === 'FINANCE' ? (isDarkMode ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-50 text-emerald-600 border-emerald-200') :
                                      (isDarkMode ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-amber-50 text-amber-600 border-amber-200')
                                    }`}>
                                      {staff.hq_role.replace('_', ' ')}
                                    </span>
                                  </td>
                                  <td className="px-8 py-5">
                                    <div className="flex flex-col gap-1.5">
                                      <span className={`flex items-center gap-1.5 text-xs font-medium ${theme.textSub}`}>
                                        <Smartphone size={14} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} /> 2FA Pending
                                      </span>
                                      <span className={`flex items-center gap-1.5 text-[10px] ${theme.textSub}`}>
                                        <Clock size={12} /> Last active: Just now
                                      </span>
                                    </div>
                                  </td>
                                  <td className="px-8 py-5 text-right">
                                    <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-200'}`}>
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
                                    </div>
                                  </td>
                                </tr>
                              ))}
                              {filteredStaff.length === 0 && (
                                <tr>
                                  <td colSpan="4" className={`px-8 py-12 text-center text-sm font-medium ${theme.textSub}`}>No personnel authenticated yet.</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "subscriptions" && (
              <div className="space-y-8 animate-fadeIn max-w-5xl">
                <div>
                  <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>Pricing configuration</h2>
                  <p className={`text-sm font-medium ${theme.textSub}`}>Adjust the base MRR pricing for specific regional industries.</p>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                  {INDUSTRY_CONFIG.map(ind => (
                    <button
                      key={ind.id}
                      onClick={() => setActivePricingIndustry(ind.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                        activePricingIndustry === ind.id
                          ? 'bg-[#C5A059] text-white shadow-md'
                          : isDarkMode 
                            ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-700' 
                            : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
                      }`}
                    >
                      <ind.icon size={16} />
                      {ind.name}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Object.entries(subscriptionPrices[activePricingIndustry]).map(([tier, price]) => (
                    <div key={tier} className={`border rounded-[2rem] p-8 shadow-sm flex flex-col relative overflow-hidden group transition-all duration-300 hover:shadow-lg ${theme.cardBg} ${theme.border}`}>
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className={`text-sm font-black uppercase tracking-widest ${theme.textSub}`}>{tier}</h3>
                        <CreditCard size={20} className={`${isDarkMode ? 'text-slate-600' : 'text-slate-300'} group-hover:text-[#C5A059] transition-colors`} />
                      </div>
                      
                      <div className="flex items-center gap-2 mb-8">
                        <span className={`font-bold text-xl ${theme.textSub}`}>₹</span>
                        <input 
                          type="number" 
                          value={price}
                          onChange={(e) => handlePriceChange(tier, e.target.value)}
                          className={`text-4xl font-black w-full bg-transparent border-none outline-none focus:ring-0 p-0 ${theme.textMain}`}
                        />
                        <span className={`text-sm font-bold self-end mb-1 ${theme.textSub}`}>/mo</span>
                      </div>

                      <ul className="space-y-3 mb-8 flex-1">
                        <li className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><CheckCircle size={14} className="text-emerald-500" /> Standard features</li>
                        <li className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><CheckCircle size={14} className="text-emerald-500" /> 99.9% Uptime SLA</li>
                        <li className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}><CheckCircle size={14} className="text-emerald-500" /> Email Support</li>
                      </ul>
                    </div>
                  ))}
                </div>

                <div className={`flex justify-end pt-4 border-t ${theme.borderSoft}`}>
                  <button 
                    onClick={handleSavePrices}
                    disabled={isSavingPrices}
                    className={`px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all disabled:opacity-70 ${isDarkMode ? 'bg-[#C5A059]/20 hover:bg-[#C5A059] border border-[#C5A059]/50 text-white hover:text-[#050f1a]' : 'bg-[#C5A059] hover:bg-[#b08d4a] text-white shadow-md shadow-[#C5A059]/20'}`}
                  >
                    {isSavingPrices ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                    {isSavingPrices ? "Deploying Changes..." : "Save & Deploy Pricing"}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>System Telemetry</h2>
                  <p className={`text-sm font-medium ${theme.textSub}`}>Resource utilization and aggregate metrics.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className={`border rounded-[2rem] p-8 shadow-sm transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
                    <div className="flex items-center gap-3 mb-8">
                      <Server className="text-[#C5A059]" size={20} />
                      <h3 className={`font-bold ${theme.textMain}`}>AP-South-1 Cluster Load</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm font-bold mb-2">
                          <span className={theme.textSub}>CPU Usage</span>
                          <span className={theme.textMain}>64%</span>
                        </div>
                        <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
                          <div className="bg-[#C5A059] h-2 rounded-full w-[64%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm font-bold mb-2">
                          <span className={theme.textSub}>Memory Allocation</span>
                          <span className={theme.textMain}>82%</span>
                        </div>
                        <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
                          <div className="bg-rose-500 h-2 rounded-full w-[82%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`border rounded-[2rem] p-8 shadow-sm transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
                    <div className="flex items-center gap-3 mb-8">
                      <Database className="text-blue-500" size={20} />
                      <h3 className={`font-bold ${theme.textMain}`}>Database I/O</h3>
                    </div>
                    <div className="flex items-end gap-6 mb-4">
                      <div className="flex-1">
                        <p className={`text-xs font-bold mb-1 ${theme.textSub}`}>Read Ops/sec</p>
                        <p className={`text-3xl font-black ${theme.textMain}`}>12,450</p>
                      </div>
                      <div className={`flex-1 border-l pl-6 ${theme.borderSoft}`}>
                        <p className={`text-xs font-bold mb-1 ${theme.textSub}`}>Write Ops/sec</p>
                        <p className={`text-3xl font-black ${theme.textMain}`}>3,892</p>
                      </div>
                    </div>
                    <div className={`mt-6 pt-6 border-t flex items-center text-sm text-emerald-500 font-bold ${theme.borderSoft}`}>
                      <TrendingUp size={16} className="mr-2" /> +14% compared to yesterday
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-8 animate-fadeIn max-w-3xl">
                <div>
                  <h2 className={`text-2xl font-black mb-1 ${theme.textMain}`}>Global Preferences</h2>
                  <p className={`text-sm font-medium ${theme.textSub}`}>Manage environment variables and operational flags.</p>
                </div>

                <div className={`border shadow-sm rounded-[2rem] overflow-hidden transition-colors duration-300 ${theme.cardBg} ${theme.border}`}>
                  <div className={`p-8 border-b flex justify-between items-center transition-colors ${theme.borderSoft} ${theme.hoverBg}`}>
                    <div>
                      <h4 className={`font-bold ${theme.textMain}`}>Maintenance Mode</h4>
                      <p className={`text-xs mt-1 ${theme.textSub}`}>Suspend all tenant logins and show maintenance screen.</p>
                    </div>
                    <button 
                      onClick={() => toggleSetting('maintenanceMode')}
                      className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${systemSettings.maintenanceMode ? 'bg-rose-500' : (isDarkMode ? 'bg-slate-700' : 'bg-slate-200')}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${systemSettings.maintenanceMode ? 'left-7' : 'left-1'}`}></span>
                    </button>
                  </div>

                  <div className={`p-8 border-b flex justify-between items-center transition-colors ${theme.borderSoft} ${theme.hoverBg}`}>
                    <div>
                      <h4 className={`font-bold ${theme.textMain}`}>Allow New Tenant Registrations</h4>
                      <p className={`text-xs mt-1 ${theme.textSub}`}>Accept new sign-ups from the main landing page.</p>
                    </div>
                    <button 
                      onClick={() => toggleSetting('newRegistrations')}
                      className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${systemSettings.newRegistrations ? 'bg-emerald-500' : (isDarkMode ? 'bg-slate-700' : 'bg-slate-200')}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${systemSettings.newRegistrations ? 'left-7' : 'left-1'}`}></span>
                    </button>
                  </div>

                  <div className={`p-8 flex justify-between items-center transition-colors ${theme.hoverBg}`}>
                    <div>
                      <h4 className={`font-bold ${theme.textMain}`}>System Alert Emails</h4>
                      <p className={`text-xs mt-1 ${theme.textSub}`}>Send critical architecture alerts to the SuperAdmin email group.</p>
                    </div>
                    <button 
                      onClick={() => toggleSetting('emailNotifications')}
                      className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${systemSettings.emailNotifications ? 'bg-blue-500' : (isDarkMode ? 'bg-slate-700' : 'bg-slate-200')}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${systemSettings.emailNotifications ? 'left-7' : 'left-1'}`}></span>
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {showProvisionModal && (
        <div className={theme.modalOverlay}>
          <div className={`w-full max-w-md border rounded-[2rem] p-8 shadow-2xl relative ${theme.cardBg} ${theme.border}`}>
            <button onClick={() => setShowProvisionModal(false)} className={`absolute top-6 right-6 ${theme.textSub} hover:${theme.textMain}`}>
              <X size={20} />
            </button>
            <h3 className={`text-xl font-black mb-1 ${theme.textMain}`}>Manual Provisioning</h3>
            <p className={`text-xs mb-6 ${theme.textSub}`}>Bypass gateway and generate a complimentary tenant instance.</p>
            
            <form onSubmit={handleProvisionTenant} className="space-y-4">
              <div>
                <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Store/Company Name</label>
                <input 
                  type="text" required
                  value={newTenantForm.storeName} onChange={(e) => setNewTenantForm({...newTenantForm, storeName: e.target.value})}
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
                />
              </div>
              <div>
                <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Admin Email</label>
                <input 
                  type="email" required
                  value={newTenantForm.email} onChange={(e) => setNewTenantForm({...newTenantForm, email: e.target.value})}
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
                />
              </div>
              <div>
                <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Initial Password</label>
                <input 
                  type="password" required minLength={6}
                  value={newTenantForm.password} onChange={(e) => setNewTenantForm({...newTenantForm, password: e.target.value})}
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all ${theme.inputBg} ${theme.borderSoft} ${theme.textMain}`}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Industry</label>
                  <select 
                    value={newTenantForm.industry} onChange={(e) => setNewTenantForm({...newTenantForm, industry: e.target.value})}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all cursor-pointer ${theme.inputBg} ${theme.borderSoft} ${theme.textMain} ${isDarkMode ? '[&>option]:bg-slate-800' : ''}`}
                  >
                    {INDUSTRY_CONFIG.map(ind => (
                      <option key={ind.id} value={ind.id}>{ind.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Complimentary Tier</label>
                  <select 
                    value={newTenantForm.tier} onChange={(e) => setNewTenantForm({...newTenantForm, tier: e.target.value})}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all cursor-pointer ${theme.inputBg} ${theme.borderSoft} ${theme.textMain} ${isDarkMode ? '[&>option]:bg-slate-800' : ''}`}
                  >
                    <option value="BASIC">Basic Edition</option>
                    <option value="GROWTH">Growth Edition</option>
                    <option value="ENTERPRISE">Enterprise Edition</option>
                  </select>
                </div>
              </div>
              <button 
                type="submit" disabled={isSubmittingOverride}
                className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50"
              >
                {isSubmittingOverride ? <Loader2 size={16} className="animate-spin mr-2"/> : <CheckCircle size={16} className="mr-2"/>}
                Provision & Grant Access
              </button>
            </form>
          </div>
        </div>
      )}

      {showEditSubModal && activeStoreForSub && (
        <div className={theme.modalOverlay}>
          <div className={`w-full max-w-md border rounded-[2rem] p-8 shadow-2xl relative ${theme.cardBg} ${theme.border}`}>
            <button onClick={() => { setShowEditSubModal(false); setActiveStoreForSub(null); }} className={`absolute top-6 right-6 ${theme.textSub} hover:${theme.textMain}`}>
              <X size={20} />
            </button>
            <h3 className={`text-xl font-black mb-1 ${theme.textMain}`}>Override Access Level</h3>
            <p className={`text-xs mb-6 ${theme.textSub}`}>Modifying subscription for <strong>{activeStoreForSub.name}</strong>.</p>
            
            <form onSubmit={handleUpdateSubscription} className="space-y-4">
              <div>
                <label className={`block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 ${theme.textSub}`}>Select New Tier</label>
                <select 
                  value={editSubForm.tier} onChange={(e) => setEditSubForm({...editSubForm, tier: e.target.value})}
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/20 transition-all cursor-pointer ${theme.inputBg} ${theme.borderSoft} ${theme.textMain} ${isDarkMode ? '[&>option]:bg-slate-800' : ''}`}
                >
                  <option value="TRIAL">Trial (Restricted)</option>
                  <option value="BASIC">Basic Edition</option>
                  <option value="GROWTH">Growth Edition</option>
                  <option value="ENTERPRISE">Enterprise Edition</option>
                </select>
              </div>
              
              <div className={`p-4 rounded-xl border flex gap-3 items-center mt-2 ${isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'}`}>
                <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
                <div>
                  <p className={`text-xs font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>Complimentary Override Active</p>
                  <p className={`text-[10px] mt-0.5 ${isDarkMode ? 'text-emerald-500/70' : 'text-emerald-600/70'}`}>This action bypasses the standard payment gateway.</p>
                </div>
              </div>

              <button 
                type="submit" disabled={isSubmittingOverride}
                className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50"
              >
                {isSubmittingOverride ? <Loader2 size={16} className="animate-spin mr-2"/> : <Crown size={16} className="mr-2"/>}
                Confirm Update
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

const StatCard = ({ title, value, icon: Icon, isGold, isDarkMode, theme }) => (
  <div className={`rounded-[2rem] border p-6 flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${theme.cardBg} ${theme.border} ${isDarkMode ? 'hover:border-[#C5A059]/40' : 'hover:border-slate-300'}`}>
    
    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none transition-all duration-500 blur-3xl opacity-0 group-hover:opacity-30 ${isGold ? 'bg-[#C5A059]' : 'bg-blue-500'}`}></div>

    <div className="flex justify-between items-start relative z-10">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border transition-all duration-300 ${
        isGold 
          ? (isDarkMode ? 'bg-[#C5A059]/10 border-[#C5A059]/20 group-hover:bg-[#C5A059]/20 group-hover:scale-110' : 'bg-[#C5A059]/10 border-[#C5A059]/20 group-hover:bg-[#C5A059]/20 group-hover:scale-110') 
          : (isDarkMode ? 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110' : 'bg-blue-50 border-blue-100 group-hover:bg-blue-100 group-hover:scale-110')
      }`}>
        <Icon size={20} className={`${isGold ? 'text-[#C5A059]' : (isDarkMode ? 'text-blue-400' : 'text-blue-600')} transition-colors`} />
      </div>
      
      <div className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center text-[10px] font-bold uppercase tracking-widest text-[#C5A059] cursor-pointer">
        View <ChevronRight size={12} />
      </div>
    </div>
    
    <div className="relative z-10">
      <p className={`text-xs font-bold mb-1 transition-colors ${theme.textSub}`}>{title}</p>
      <div className="flex items-end gap-3">
        <h3 className={`text-3xl font-black transition-colors ${theme.textMain}`}>{value}</h3>
      </div>
    </div>
  </div>
);

export default SuperAdminDashboard;