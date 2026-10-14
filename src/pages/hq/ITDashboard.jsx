// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   Headphones, Search, KeyRound, LogIn, LogOut, 
//   ShieldCheck, AlertTriangle, Terminal, CheckCircle2 
// } from "lucide-react";

// const ITDashboard = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [selectedStore, setSelectedStore] = useState(null);
//   const [newPassword, setNewPassword] = useState("");
//   const [statusMessage, setStatusMessage] = useState(null);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };


  
//   // Search client stores
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchQuery.trim()) return;
//     setIsSearching(true);
//     setStatusMessage(null);

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/hq/support/tenants/search?query=${encodeURIComponent(searchQuery)}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error("Search failed");
//       const data = await res.json();
//       setSearchResults(data);
//     } catch (err) {
//       setStatusMessage({ type: "error", text: err.message });
//     } finally {
//       setIsSearching(false);
//     }
//   };

//   // Reset store password
//   const handleResetPassword = async (storeId) => {
//     if (!newPassword || newPassword.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }
//     if (!window.confirm("Are you sure you want to force-reset this store's password?")) return;

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/hq/support/tenants/${storeId}/reset-password`, {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}` 
//         },
//         body: JSON.stringify({ new_password: newPassword })
//       });
//       if (!res.ok) throw new Error("Password reset failed");
//       setStatusMessage({ type: "success", text: `Password updated successfully for store ID ${storeId}` });
//       setNewPassword("");
//       setSelectedStore(null);
//     } catch (err) {
//       setStatusMessage({ type: "error", text: err.message });
//     }
//   };

//   // Impersonate store for debugging
//   const handleImpersonate = async (storeId) => {
//     if (!window.confirm("You are about to enter this store's environment for debugging. Proceed?")) return;

//     try {
//       const adminToken = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/hq/support/impersonate/${storeId}`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${adminToken}` }
//       });
//       if (!res.ok) throw new Error("Impersonation session rejected");
      
//       const data = await res.json();
//       localStorage.setItem("superadmin_token", adminToken); // Backup admin token
//       localStorage.setItem("token", data.access_token);
//       window.location.href = "/dashboard"; // Drop directly into merchant dashboard
//     } catch (err) {
//       setStatusMessage({ type: "error", text: err.message });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#030712] text-slate-100 font-sans flex">
      
//       {/* IT Support Specialized Sidebar */}
//       <aside className="w-72 bg-[#0A1128] border-r border-white/10 flex flex-col justify-between p-6">
//         <div>
//           <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
//             <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
//               <Headphones size={22} />
//             </div>
//             <div>
//               <h2 className="text-sm font-black uppercase tracking-wider text-white">IT Support</h2>
//               <p className="text-[10px] text-amber-400 font-mono tracking-widest">HELPDECK & DEBUG</p>
//             </div>
//           </div>

//           <nav className="space-y-2">
//             <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-transparent border border-amber-500/30 text-white font-bold text-xs uppercase tracking-wider">
//               <Terminal size={16} className="text-amber-400" /> Tenant Lookup
//             </div>
//           </nav>
//         </div>

//         <div className="border-t border-white/10 pt-4">
//           <button 
//             onClick={handleLogout}
//             className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-rose-500/10 text-slate-300 hover:text-rose-400 border border-white/10 transition-all text-xs font-bold uppercase tracking-wider"
//           >
//             <LogOut size={15} /> Exit Portal
//           </button>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 p-10 overflow-y-auto">
//         <header className="mb-8">
//           <h1 className="text-2xl font-black text-white tracking-wide">Technical Support Console</h1>
//           <p className="text-sm text-slate-400 mt-1">Search client accounts, troubleshoot access issues, and execute authorized debugging sessions.</p>
//         </header>

//         {statusMessage && (
//           <div className={`mb-6 p-4 rounded-2xl border text-xs font-medium flex items-center gap-3 ${
//             statusMessage.type === 'error' ? 'bg-rose-500/10 border-rose-500/30 text-rose-300' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
//           }`}>
//             {statusMessage.type === 'error' ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
//             {statusMessage.text}
//           </div>
//         )}

//         {/* Search Section */}
//         <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-xl mb-8">
//           <form onSubmit={handleSearch} className="flex gap-4">
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
//               <input 
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search tenant store by name or email address..."
//                 className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-all"
//               />
//             </div>
//             <button 
//               type="submit" disabled={isSearching}
//               className="bg-amber-500 hover:bg-amber-600 text-[#030712] font-black text-xs uppercase tracking-widest px-6 py-3 rounded-2xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
//             >
//               {isSearching ? "Searching..." : "Search Tenant"}
//             </button>
//           </form>
//         </div>

//         {/* Search Results Table */}
//         <div className="bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-xl overflow-hidden">
//           <div className="px-6 py-5 border-b border-white/10 flex justify-between items-center">
//             <h2 className="text-sm font-black text-white uppercase tracking-wider">Search Results</h2>
//             <span className="text-xs font-mono text-slate-400">{searchResults.length} matches found</span>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-white/[0.02] text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold border-b border-white/10">
//                   <th className="px-6 py-4">Store Name</th>
//                   <th className="px-6 py-4">Email</th>
//                   <th className="px-6 py-4">Tier</th>
//                   <th className="px-6 py-4 text-right">IT Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-white/5">
//                 {searchResults.map((store) => (
//                   <tr key={store.id} className="hover:bg-white/[0.03] transition-colors">
//                     <td className="px-6 py-4 font-bold text-white">{store.name}</td>
//                     <td className="px-6 py-4 text-slate-400 font-mono text-sm">{store.email}</td>
//                     <td className="px-6 py-4">
//                       <span className="bg-white/5 border border-white/10 text-slate-300 text-[10px] font-black px-2.5 py-1 rounded-lg">
//                         {store.tier}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right space-x-2">
//                       <button 
//                         onClick={() => setSelectedStore(selectedStore === store.id ? null : store.id)}
//                         className="bg-white/5 hover:bg-white/10 text-amber-400 border border-white/10 px-3 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5"
//                       >
//                         <KeyRound size={14} /> Reset Password
//                       </button>
//                       <button 
//                         onClick={() => handleImpersonate(store.id)}
//                         className="bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-[#030712] border border-amber-500/30 px-3 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5"
//                       >
//                         <LogIn size={14} /> Debug Session
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//                 {searchResults.length === 0 && (
//                   <tr>
//                     <td colSpan="4" className="px-6 py-12 text-center text-slate-500 text-sm">
//                       Enter a query above to locate a tenant store.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Inline Password Reset Drawer (Appears when a store is selected) */}
//         {selectedStore && (
//           <div className="mt-6 p-6 rounded-3xl bg-amber-500/5 border border-amber-500/30 backdrop-blur-xl flex items-center justify-between gap-4">
//             <div>
//               <h3 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-1">Force Password Reset</h3>
//               <p className="text-xs text-slate-400">Enter a secure temporary password for Store ID: {selectedStore}</p>
//             </div>
//             <div className="flex gap-3">
//               <input 
//                 type="password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="New password (min 6 chars)"
//                 className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
//               />
//               <button 
//                 onClick={() => handleResetPassword(selectedStore)}
//                 className="bg-amber-500 hover:bg-amber-600 text-[#030712] font-black text-xs uppercase tracking-wider px-5 py-2 rounded-xl transition-all"
//               >
//                 Confirm Reset
//               </button>
//               <button 
//                 onClick={() => setSelectedStore(null)}
//                 className="bg-white/5 text-slate-400 hover:text-white px-4 py-2 rounded-xl text-xs font-bold"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//       </main>
//     </div>
//   );
// };

// export default ITDashboard;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   Headphones, Search, KeyRound, LogIn, LogOut, 
//   ShieldCheck, AlertTriangle, Terminal, CheckCircle2,
//   Sun, Moon
// } from "lucide-react";

// const ITDashboard = () => {
//   const navigate = useNavigate();
//   const [theme, setTheme] = useState("dark");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [selectedStore, setSelectedStore] = useState(null);
//   const [newPassword, setNewPassword] = useState("");
//   const [statusMessage, setStatusMessage] = useState(null);

//   const isDark = theme === "dark";

//   // Theme dictionary for clean JSX applying
//   const t = {
//     bgMain: isDark ? "bg-[#030712] text-slate-100" : "bg-slate-50 text-slate-800",
//     sidebar: isDark ? "bg-[#0A1128] border-white/10" : "bg-white border-slate-200",
//     heading: isDark ? "text-white" : "text-slate-900",
//     muted: isDark ? "text-slate-400" : "text-slate-500",
//     card: isDark ? "bg-white/[0.02] border-white/10" : "bg-white border-slate-200 shadow-sm",
//     input: isDark ? "bg-white/5 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900",
//     tableHeader: isDark ? "bg-white/[0.02] text-slate-400 border-white/10" : "bg-slate-50 text-slate-500 border-slate-200",
//     tableRowHover: isDark ? "hover:bg-white/[0.03]" : "hover:bg-slate-50",
//     divider: isDark ? "border-white/10" : "border-slate-200",
//     btnCancel: isDark ? "bg-white/5 text-slate-400 hover:text-white" : "bg-slate-100 text-slate-600 hover:text-slate-900",
//     btnLogOut: isDark ? "bg-white/5 hover:bg-rose-500/10 text-slate-300 hover:text-rose-400" : "bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-600",
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchQuery.trim()) return;
//     setIsSearching(true);
//     setStatusMessage(null);

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/hq/support/tenants/search?query=${encodeURIComponent(searchQuery)}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
      
//       if (res.status === 403) throw new Error("Access Denied: You do not have IT_SUPPORT privileges.");
//       if (!res.ok) throw new Error("Search failed to execute.");
      
//       const data = await res.json();
//       setSearchResults(data);
//     } catch (err) {
//       setStatusMessage({ type: "error", text: err.message });
//     } finally {
//       setIsSearching(false);
//     }
//   };

//   const handleResetPassword = async (storeId) => {
//     if (!newPassword || newPassword.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }
//     if (!window.confirm("Are you sure you want to force-reset this store's password?")) return;

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/hq/support/tenants/${storeId}/reset-password`, {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}` 
//         },
//         body: JSON.stringify({ new_password: newPassword })
//       });
//       if (!res.ok) throw new Error("Password reset failed");
//       setStatusMessage({ type: "success", text: `Password updated successfully for store ID ${storeId}` });
//       setNewPassword("");
//       setSelectedStore(null);
//     } catch (err) {
//       setStatusMessage({ type: "error", text: err.message });
//     }
//   };

//   const handleImpersonate = async (storeId) => {
//     if (!window.confirm("You are about to enter this store's environment for debugging. Proceed?")) return;

//     try {
//       const adminToken = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/hq/support/impersonate/${storeId}`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${adminToken}` }
//       });
//       if (!res.ok) throw new Error("Impersonation session rejected");
      
//       const data = await res.json();
//       localStorage.setItem("superadmin_token", adminToken);
//       localStorage.setItem("token", data.access_token);
//       window.location.href = "/dashboard";
//     } catch (err) {
//       setStatusMessage({ type: "error", text: err.message });
//     }
//   };

//   return (
//     <div className={`min-h-screen font-sans flex transition-colors duration-300 ${t.bgMain}`}>
      
//       {/* IT Support Specialized Sidebar */}
//       <aside className={`w-72 border-r flex flex-col justify-between p-6 transition-colors duration-300 ${t.sidebar}`}>
//         <div>
//           <div className={`flex items-center gap-3 mb-8 pb-6 border-b ${t.divider}`}>
//             <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
//               <Headphones size={22} />
//             </div>
//             <div>
//               <h2 className={`text-sm font-black uppercase tracking-wider ${t.heading}`}>IT Support</h2>
//               <p className="text-[10px] text-amber-500 font-mono tracking-widest">HELPDECK & DEBUG</p>
//             </div>
//           </div>

//           <nav className="space-y-2">
//             <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 text-amber-600 dark:text-white font-bold text-xs uppercase tracking-wider">
//               <div className="flex items-center gap-3">
//                 <Terminal size={16} className="text-amber-500" /> Tenant Lookup
//               </div>
//             </div>
//           </nav>
//         </div>

//         <div className={`border-t pt-4 space-y-3 ${t.divider}`}>
//           <button 
//             onClick={() => setTheme(isDark ? "light" : "dark")}
//             className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider ${
//               isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
//             }`}
//           >
//             {isDark ? <Sun size={15} /> : <Moon size={15} />} 
//             {isDark ? "Light Mode" : "Dark Mode"}
//           </button>
          
//           <button 
//             onClick={handleLogout}
//             className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider ${t.btnLogOut}`}
//           >
//             <LogOut size={15} /> Exit Portal
//           </button>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 p-10 overflow-y-auto">
//         <header className="mb-8">
//           <h1 className={`text-2xl font-black tracking-wide ${t.heading}`}>Technical Support Console</h1>
//           <p className={`text-sm mt-1 ${t.muted}`}>Search client accounts, troubleshoot access issues, and execute authorized debugging sessions.</p>
//         </header>

//         {statusMessage && (
//           <div className={`mb-6 p-4 rounded-2xl border text-xs font-medium flex items-center gap-3 ${
//             statusMessage.type === 'error' ? 'bg-rose-500/10 border-rose-500/30 text-rose-500 dark:text-rose-300' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-300'
//           }`}>
//             {statusMessage.type === 'error' ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
//             {statusMessage.text}
//           </div>
//         )}

//         {/* Search Section */}
//         <div className={`border rounded-3xl p-6 mb-8 transition-colors duration-300 ${t.card}`}>
//           <form onSubmit={handleSearch} className="flex gap-4">
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
//               <input 
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search tenant store by name or email address..."
//                 className={`w-full border rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-all ${t.input}`}
//               />
//             </div>
//             <button 
//               type="submit" disabled={isSearching}
//               className="bg-amber-500 hover:bg-amber-600 text-white dark:text-[#030712] font-black text-xs uppercase tracking-widest px-6 py-3 rounded-2xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] disabled:opacity-70"
//             >
//               {isSearching ? "Searching..." : "Search Tenant"}
//             </button>
//           </form>
//         </div>

//         {/* Search Results Table */}
//         <div className={`border rounded-3xl overflow-hidden transition-colors duration-300 ${t.card}`}>
//           <div className={`px-6 py-5 border-b flex justify-between items-center ${t.divider}`}>
//             <h2 className={`text-sm font-black uppercase tracking-wider ${t.heading}`}>Search Results</h2>
//             <span className={`text-xs font-mono ${t.muted}`}>{searchResults.length} matches found</span>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className={`text-[10px] uppercase tracking-[0.2em] font-extrabold border-b ${t.tableHeader}`}>
//                   <th className="px-6 py-4">Store Name</th>
//                   <th className="px-6 py-4">Email</th>
//                   <th className="px-6 py-4">Tier</th>
//                   <th className="px-6 py-4 text-right">IT Actions</th>
//                 </tr>
//               </thead>
//               <tbody className={`divide-y ${isDark ? 'divide-white/5' : 'divide-slate-100'}`}>
//                 {searchResults.map((store) => (
//                   <tr key={store.id} className={`transition-colors ${t.tableRowHover}`}>
//                     <td className={`px-6 py-4 font-bold ${t.heading}`}>{store.name}</td>
//                     <td className={`px-6 py-4 font-mono text-sm ${t.muted}`}>{store.email}</td>
//                     <td className="px-6 py-4">
//                       <span className={`border text-[10px] font-black px-2.5 py-1 rounded-lg ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
//                         {store.tier}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right space-x-2">
//                       <button 
//                         onClick={() => setSelectedStore(selectedStore === store.id ? null : store.id)}
//                         className={`border px-3 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 ${
//                           isDark ? 'bg-white/5 hover:bg-white/10 text-amber-400 border-white/10' : 'bg-slate-50 hover:bg-slate-100 text-amber-600 border-slate-200'
//                         }`}
//                       >
//                         <KeyRound size={14} /> Reset Password
//                       </button>
//                       <button 
//                         onClick={() => handleImpersonate(store.id)}
//                         className="bg-amber-500/10 hover:bg-amber-500 text-amber-600 dark:text-amber-400 hover:text-white dark:hover:text-[#030712] border border-amber-500/30 px-3 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5"
//                       >
//                         <LogIn size={14} /> Debug Session
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//                 {searchResults.length === 0 && (
//                   <tr>
//                     <td colSpan="4" className={`px-6 py-12 text-center text-sm ${t.muted}`}>
//                       Enter a query above to locate a tenant store.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Inline Password Reset Drawer */}
//         {selectedStore && (
//           <div className="mt-6 p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-xl flex items-center justify-between gap-4">
//             <div>
//               <h3 className="text-xs font-black text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Force Password Reset</h3>
//               <p className={`text-xs ${t.muted}`}>Enter a secure temporary password for Store ID: {selectedStore}</p>
//             </div>
//             <div className="flex gap-3">
//               <input 
//                 type="password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="New password (min 6 chars)"
//                 className={`border rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-amber-500 ${t.input}`}
//               />
//               <button 
//                 onClick={() => handleResetPassword(selectedStore)}
//                 className="bg-amber-500 hover:bg-amber-600 text-white dark:text-[#030712] font-black text-xs uppercase tracking-wider px-5 py-2 rounded-xl transition-all"
//               >
//                 Confirm Reset
//               </button>
//               <button 
//                 onClick={() => setSelectedStore(null)}
//                 className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${t.btnCancel}`}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//       </main>
//     </div>
//   );
// };

// export default ITDashboard;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Headphones, Search, KeyRound, LogIn, LogOut, 
  ShieldCheck, AlertTriangle, Terminal, CheckCircle2,
  Sun, Moon, Ticket, CheckCircle, Clock, Loader2
} from "lucide-react";

const ITDashboard = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState("tickets"); // 'tickets' | 'tenants'
  
  // Tenant Lookup States
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  
  // Ticketing States
  const [tickets, setTickets] = useState([]);
  const [isLoadingTickets, setIsLoadingTickets] = useState(true);

  // Global Status
  const [statusMessage, setStatusMessage] = useState(null);

  const isDark = theme === "dark";

  // Theme dictionary
  const t = {
    bgMain: isDark ? "bg-[#030712] text-slate-100" : "bg-slate-50 text-slate-800",
    sidebar: isDark ? "bg-[#0A1128] border-white/10" : "bg-white border-slate-200",
    heading: isDark ? "text-white" : "text-slate-900",
    muted: isDark ? "text-slate-400" : "text-slate-500",
    card: isDark ? "bg-white/[0.02] border-white/10" : "bg-white border-slate-200 shadow-sm",
    input: isDark ? "bg-white/5 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900",
    tableHeader: isDark ? "bg-white/[0.02] text-slate-400 border-white/10" : "bg-slate-50 text-slate-500 border-slate-200",
    tableRowHover: isDark ? "hover:bg-white/[0.03]" : "hover:bg-slate-50",
    divider: isDark ? "border-white/10" : "border-slate-200",
    btnCancel: isDark ? "bg-white/5 text-slate-400 hover:text-white" : "bg-slate-100 text-slate-600 hover:text-slate-900",
    btnLogOut: isDark ? "bg-white/5 hover:bg-rose-500/10 text-slate-300 hover:text-rose-400" : "bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-600",
    tabActive: isDark ? "bg-gradient-to-r from-amber-500/10 to-transparent border-amber-500/20 text-amber-500" : "bg-amber-50 border-amber-200 text-amber-700",
    tabInactive: isDark ? "border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5" : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100",
  };

  useEffect(() => {
    if (activeTab === "tickets") {
      fetchTickets();
    }
  }, [activeTab]);

  const fetchTickets = async () => {
    setIsLoadingTickets(true);
    setStatusMessage(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8000/api/hq/tickets", {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!res.ok) throw new Error("Failed to load IT tickets");
      const data = await res.json();
      setTickets(data);
    } catch (err) {
      setStatusMessage({ type: "error", text: err.message });
    } finally {
      setIsLoadingTickets(false);
    }
  };

  const handleResolveTicket = async (ticketId) => {
    if (!window.confirm("Are you sure you want to mark this issue as resolved?")) return;
    
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/hq/tickets/${ticketId}/status`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ status: "RESOLVED" })
      });
      
      if (!res.ok) throw new Error("Failed to update ticket status");
      
      setStatusMessage({ type: "success", text: `Ticket #${ticketId} has been resolved.` });
      fetchTickets(); // Refresh the table to show the green checkmark
    } catch (err) {
      setStatusMessage({ type: "error", text: err.message });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };


  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setStatusMessage(null);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/hq/support/tenants/search?query=${encodeURIComponent(searchQuery)}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // --- FIX: Read the actual backend error instead of hardcoding it ---
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.detail || `Request failed with status ${res.status}`);
      }
      
      const data = await res.json();
      setSearchResults(data);
    } catch (err) {
      setStatusMessage({ type: "error", text: err.message });
    } finally {
      setIsSearching(false);
    }
  };
  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   if (!searchQuery.trim()) return;
  //   setIsSearching(true);
  //   setStatusMessage(null);

  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await fetch(`http://localhost:8000/api/hq/support/tenants/search?query=${encodeURIComponent(searchQuery)}`, {
  //       headers: { Authorization: `Bearer ${token}` }
  //     });
      
  //     if (res.status === 403) throw new Error("Access Denied: You do not have IT_SUPPORT privileges.");
  //     if (!res.ok) throw new Error("Search failed to execute.");
      
  //     const data = await res.json();
  //     setSearchResults(data);
  //   } catch (err) {
  //     setStatusMessage({ type: "error", text: err.message });
  //   } finally {
  //     setIsSearching(false);
  //   }
  // };

  const handleResetPassword = async (storeId) => {
    if (!newPassword || newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    if (!window.confirm("Are you sure you want to force-reset this store's password?")) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/hq/support/tenants/${storeId}/reset-password`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ new_password: newPassword })
      });
      if (!res.ok) throw new Error("Password reset failed");
      setStatusMessage({ type: "success", text: `Password updated successfully for store ID ${storeId}` });
      setNewPassword("");
      setSelectedStore(null);
    } catch (err) {
      setStatusMessage({ type: "error", text: err.message });
    }
  };

  const handleImpersonate = async (storeId) => {
    if (!window.confirm("You are about to enter this store's environment for debugging. Proceed?")) return;

    try {
      const adminToken = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/hq/support/impersonate/${storeId}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      if (!res.ok) throw new Error("Impersonation session rejected");
      
      const data = await res.json();
      localStorage.setItem("superadmin_token", adminToken);
      localStorage.setItem("token", data.access_token);
      window.location.href = "/dashboard";
    } catch (err) {
      setStatusMessage({ type: "error", text: err.message });
    }
  };

  return (
    <div className={`min-h-screen font-sans flex transition-colors duration-300 ${t.bgMain}`}>
      
      {/* IT Support Specialized Sidebar */}
      <aside className={`w-72 border-r flex flex-col justify-between p-6 transition-colors duration-300 ${t.sidebar}`}>
        <div>
          <div className={`flex items-center gap-3 mb-8 pb-6 border-b ${t.divider}`}>
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
              <Headphones size={22} />
            </div>
            <div>
              <h2 className={`text-sm font-black uppercase tracking-wider ${t.heading}`}>IT Support</h2>
              <p className="text-[10px] text-amber-500 font-mono tracking-widest">HELPDESK & DEBUG</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab("tickets")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider border transition-colors ${activeTab === 'tickets' ? t.tabActive : t.tabInactive}`}
            >
              <Ticket size={16} className={activeTab === 'tickets' ? "text-amber-500" : ""} /> Ticket Queue
            </button>
            <button 
              onClick={() => setActiveTab("tenants")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider border transition-colors ${activeTab === 'tenants' ? t.tabActive : t.tabInactive}`}
            >
              <Terminal size={16} className={activeTab === 'tenants' ? "text-amber-500" : ""} /> Tenant Lookup
            </button>
          </nav>
        </div>

        <div className={`border-t pt-4 space-y-3 ${t.divider}`}>
          <button 
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider ${
              isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />} 
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
          
          <button 
            onClick={handleLogout}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider ${t.btnLogOut}`}
          >
            <LogOut size={15} /> Exit Portal
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-8">
          <h1 className={`text-2xl font-black tracking-wide ${t.heading}`}>
            {activeTab === 'tickets' ? "Support Ticket Queue" : "Technical Support Console"}
          </h1>
          <p className={`text-sm mt-1 ${t.muted}`}>
            {activeTab === 'tickets' 
              ? "Manage and resolve tenant bug reports and platform issues." 
              : "Search client accounts, troubleshoot access issues, and execute authorized debugging sessions."}
          </p>
        </header>

        {statusMessage && (
          <div className={`mb-6 p-4 rounded-2xl border text-xs font-medium flex items-center gap-3 ${
            statusMessage.type === 'error' ? 'bg-rose-500/10 border-rose-500/30 text-rose-500 dark:text-rose-300' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-300'
          }`}>
            {statusMessage.type === 'error' ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
            {statusMessage.text}
          </div>
        )}

        {/* =========================================
            TAB: TICKETS
        ========================================= */}
        {activeTab === 'tickets' && (
          <div className={`border rounded-3xl overflow-hidden transition-colors duration-300 ${t.card}`}>
            <div className={`px-6 py-5 border-b flex justify-between items-center ${t.divider}`}>
              <h2 className={`text-sm font-black uppercase tracking-wider ${t.heading}`}>Active Issues</h2>
              <button onClick={fetchTickets} className={`text-xs font-bold flex items-center gap-2 transition-colors ${t.muted} hover:text-amber-500`}>
                Refresh Queue
              </button>
            </div>

            {isLoadingTickets ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="animate-spin text-amber-500" size={32} />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`text-[10px] uppercase tracking-[0.2em] font-extrabold border-b ${t.tableHeader}`}>
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">Tenant Store</th>
                      <th className="px-6 py-4">Issue Summary</th>
                      <th className="px-6 py-4">Date Reported</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isDark ? 'divide-white/5' : 'divide-slate-100'}`}>
                    {tickets.length === 0 ? (
                      <tr>
                        <td colSpan="5" className={`px-6 py-12 text-center text-sm ${t.muted}`}>No tickets reported yet.</td>
                      </tr>
                    ) : (
                      tickets.map((ticket) => (
                        <tr key={ticket.id} className={`transition-colors ${t.tableRowHover}`}>
                          <td className={`px-6 py-4 font-mono font-bold text-xs ${t.muted}`}>#{ticket.id}</td>
                          <td className={`px-6 py-4 font-bold ${t.heading}`}>{ticket.storeName}</td>
                          <td className="px-6 py-4">
                            <p className={`font-bold text-sm ${t.heading}`}>{ticket.subject}</p>
                            <p className={`text-xs truncate max-w-xs ${t.muted}`}>{ticket.description}</p>
                          </td>
                          <td className={`px-6 py-4 font-mono text-xs ${t.muted}`}>
                            {new Date(ticket.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`flex items-center gap-1.5 w-max px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                              ticket.status === 'OPEN' 
                                ? (isDark ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-rose-50 text-rose-600 border border-rose-200')
                                : (isDark ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border border-emerald-200')
                            }`}>
                              {ticket.status === 'OPEN' ? <Clock size={12} /> : <CheckCircle size={12} />}
                              {ticket.status}
                            </span>
                          </td>
                          {/* --- ADD THIS NEW CELL --- */}
                          <td className="px-6 py-4 text-right">
                            {ticket.status === 'OPEN' && (
                              <button 
                                onClick={() => handleResolveTicket(ticket.id)}
                                className="bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 hover:text-white dark:hover:text-[#030712] border border-emerald-500/30 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all uppercase tracking-wider inline-flex items-center gap-1.5"
                              >
                                <CheckCircle2 size={14} /> Resolve
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* =========================================
            TAB: TENANT LOOKUP
        ========================================= */}
        {activeTab === 'tenants' && (
          <>
            {/* Search Section */}
            <div className={`border rounded-3xl p-6 mb-8 transition-colors duration-300 ${t.card}`}>
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tenant store by name or email address..."
                    className={`w-full border rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-all ${t.input}`}
                  />
                </div>
                <button 
                  type="submit" disabled={isSearching}
                  className="bg-amber-500 hover:bg-amber-600 text-white dark:text-[#030712] font-black text-xs uppercase tracking-widest px-6 py-3 rounded-2xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] disabled:opacity-70"
                >
                  {isSearching ? "Searching..." : "Search Tenant"}
                </button>
              </form>
            </div>

            {/* Search Results Table */}
            <div className={`border rounded-3xl overflow-hidden transition-colors duration-300 ${t.card}`}>
              <div className={`px-6 py-5 border-b flex justify-between items-center ${t.divider}`}>
                <h2 className={`text-sm font-black uppercase tracking-wider ${t.heading}`}>Search Results</h2>
                <span className={`text-xs font-mono ${t.muted}`}>{searchResults.length} matches found</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`text-[10px] uppercase tracking-[0.2em] font-extrabold border-b ${t.tableHeader}`}>
                      <th className="px-6 py-4">Store Name</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Tier</th>
                      <th className="px-6 py-4 text-right">IT Actions</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isDark ? 'divide-white/5' : 'divide-slate-100'}`}>
                    {searchResults.map((store) => (
                      <tr key={store.id} className={`transition-colors ${t.tableRowHover}`}>
                        <td className={`px-6 py-4 font-bold ${t.heading}`}>{store.name}</td>
                        <td className={`px-6 py-4 font-mono text-sm ${t.muted}`}>{store.email}</td>
                        <td className="px-6 py-4">
                          <span className={`border text-[10px] font-black px-2.5 py-1 rounded-lg ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                            {store.tier}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <button 
                            onClick={() => setSelectedStore(selectedStore === store.id ? null : store.id)}
                            className={`border px-3 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 ${
                              isDark ? 'bg-white/5 hover:bg-white/10 text-amber-400 border-white/10' : 'bg-slate-50 hover:bg-slate-100 text-amber-600 border-slate-200'
                            }`}
                          >
                            <KeyRound size={14} /> Reset Password
                          </button>
                          <button 
                            onClick={() => handleImpersonate(store.id)}
                            className="bg-amber-500/10 hover:bg-amber-500 text-amber-600 dark:text-amber-400 hover:text-white dark:hover:text-[#030712] border border-amber-500/30 px-3 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5"
                          >
                            <LogIn size={14} /> Debug Session
                          </button>
                        </td>
                      </tr>
                    ))}
                    {searchResults.length === 0 && (
                      <tr>
                        <td colSpan="4" className={`px-6 py-12 text-center text-sm ${t.muted}`}>
                          Enter a query above to locate a tenant store.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inline Password Reset Drawer */}
            {selectedStore && (
              <div className="mt-6 p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-xl flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xs font-black text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Force Password Reset</h3>
                  <p className={`text-xs ${t.muted}`}>Enter a secure temporary password for Store ID: {selectedStore}</p>
                </div>
                <div className="flex gap-3">
                  <input 
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New password (min 6 chars)"
                    className={`border rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-amber-500 ${t.input}`}
                  />
                  <button 
                    onClick={() => handleResetPassword(selectedStore)}
                    className="bg-amber-500 hover:bg-amber-600 text-white dark:text-[#030712] font-black text-xs uppercase tracking-wider px-5 py-2 rounded-xl transition-all"
                  >
                    Confirm Reset
                  </button>
                  <button 
                    onClick={() => setSelectedStore(null)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${t.btnCancel}`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </main>
    </div>
  );
};

export default ITDashboard;