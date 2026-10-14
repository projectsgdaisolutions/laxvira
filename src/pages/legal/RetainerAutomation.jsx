// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { CreditCard, Settings, Plus, Search, AlertCircle, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const RetainerAutomation = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [retainers, setRetainers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchRetainers();
//   }, []);

//   const fetchRetainers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) { navigate("/login"); return; }
      
//       const res = await fetch("http://localhost:8000/api/legal/retainers", {
//         headers: { "Authorization": `Bearer ${token}` }
//       });
      
//       if (res.ok) {
//         const json = await res.json();
//         setRetainers(json.records || []);
//       } else {
//         // Mock data for structural demonstration
//         setRetainers([
//           { id: 1, case_number: "CV-2026-104", client: "Pearson v. Specter", current_balance: 145000, threshold: 50000, auto_replenish: true, last_deduction: "2026-09-08" },
//           { id: 2, case_number: "CV-2026-892", client: "Zane LLC", current_balance: 12000, threshold: 25000, auto_replenish: false, last_deduction: "2026-09-10" },
//         ]);
//       }
//     } catch (err) {
//       console.error("Failed to load retainers:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7]"><Loader2 className="animate-spin text-[#8B2626]" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
//       <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
//         <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#2B2B2B] pb-6">
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <CreditCard size={18} className="text-[#8B2626]" />
//               <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Financial Workflows</span>
//             </div>
//             <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Retainer Balance Automation</h1>
//           </div>
//           <button className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md">
//             <Plus size={16} /> Link New Retainer
//           </button>
//         </div>

//         {/* Data Table Section */}
//         <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
//           <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
//             <div className="relative w-72">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//               <input 
//                 type="text" placeholder="Search case or client..." 
//                 value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
//               />
//             </div>
//             <button className="text-xs font-bold text-[#2B2B2B] uppercase tracking-wider flex items-center gap-2 hover:text-[#8B2626] transition-colors">
//               <Settings size={14} /> Global Thresholds
//             </button>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Matter</th>
//                 <th className="p-4">Available Balance</th>
//                 <th className="p-4">Replenish Threshold</th>
//                 <th className="p-4">Auto-Billing Status</th>
//                 <th className="p-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {retainers.map((row) => {
//                 const isLow = row.current_balance < row.threshold;
//                 const percentLeft = Math.min(100, Math.max(0, (row.current_balance / (row.threshold * 3)) * 100)); // Visual scale logic

//                 return (
//                   <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
//                     <td className="p-4">
//                       <p className="text-sm font-bold text-[#2B2B2B]">{row.case_number}</p>
//                       <p className="text-xs font-medium text-slate-500 mt-0.5">{row.client}</p>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex items-center gap-3">
//                         <span className={`text-sm font-black tabular-nums ${isLow ? 'text-rose-600' : 'text-emerald-700'}`}>
//                           {formatCurr(row.current_balance)}
//                         </span>
//                         {isLow && <AlertCircle size={14} className="text-rose-600" />}
//                       </div>
//                       <div className="w-32 h-1.5 bg-slate-200 mt-2 rounded-none overflow-hidden">
//                         <div 
//                           className={`h-full ${isLow ? 'bg-rose-500' : 'bg-[#2B2B2B]'}`} 
//                           style={{ width: `${percentLeft}%` }}
//                         />
//                       </div>
//                     </td>
//                     <td className="p-4 text-sm font-bold text-slate-600">{formatCurr(row.threshold)}</td>
//                     <td className="p-4">
//                       {row.auto_replenish ? (
//                         <span className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
//                           <CheckCircle2 size={12} /> Active
//                         </span>
//                       ) : (
//                         <span className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-300">
//                           Manual
//                         </span>
//                       )}
//                     </td>
//                     <td className="p-4 text-right">
//                       <button className="text-xs font-bold text-[#2B2B2B] hover:text-[#8B2626] uppercase tracking-widest flex items-center justify-end gap-1 w-full">
//                         Manage <ArrowRight size={14} />
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RetainerAutomation;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Settings, Plus, Search, AlertCircle, CheckCircle2, Loader2, ArrowRight, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/legal/retainers";

const RetainerAutomation = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [retainers, setRetainers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    case_number: "",
    client: "",
    current_balance: 0,
    threshold: 0,
    auto_replenish: true
  });

  useEffect(() => {
    fetchRetainers();
  }, []);

  const fetchRetainers = async () => {
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      
      if (res.ok) {
        const json = await res.json();
        setRetainers(json.records || []);
      }
    } catch (err) {
      console.error("Failed to load retainers:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLinkRetainer = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({
          ...formData,
          current_balance: parseFloat(formData.current_balance) || 0,
          threshold: parseFloat(formData.threshold) || 0,
        })
      });

      if (res.ok) {
        setIsModalOpen(false);
        setFormData({ case_number: "", client: "", current_balance: 0, threshold: 0, auto_replenish: true });
        fetchRetainers();
      }
    } catch (err) {
      console.error("Failed to link retainer:", err);
      alert("Error linking retainer account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleAutoBilling = async (id, currentStatus) => {
    if (!window.confirm(`Are you sure you want to ${currentStatus ? 'disable' : 'enable'} auto-replenishment for this matter?`)) return;
    
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(`${API_BASE}/${id}/toggle`, {
        method: "PATCH",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) fetchRetainers();
    } catch (err) {
      console.error("Failed to toggle auto-billing:", err);
    }
  };

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

  const filteredRetainers = retainers.filter(r => 
    r.case_number.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7]"><Loader2 className="animate-spin text-[#8B2626]" size={32} /></div>;

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#2B2B2B] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CreditCard size={18} className="text-[#8B2626]" />
              <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Financial Workflows</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Retainer Balance Automation</h1>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md"
          >
            <Plus size={16} /> Link New Retainer
          </button>
        </div>

        <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" placeholder="Search case or client..." 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
              />
            </div>
            <button className="text-xs font-bold text-[#2B2B2B] uppercase tracking-wider flex items-center gap-2 hover:text-[#8B2626] transition-colors shrink-0 ml-4">
              <Settings size={14} /> Global Thresholds
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
                  <th className="p-4">Matter</th>
                  <th className="p-4">Available Balance</th>
                  <th className="p-4">Replenish Threshold</th>
                  <th className="p-4">Auto-Billing Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRetainers.length === 0 ? (
                  <tr><td colSpan={5} className="p-8 text-center text-sm text-slate-500">No retainers found matching criteria.</td></tr>
                ) : (
                  filteredRetainers.map((row) => {
                    const isLow = row.current_balance < row.threshold;
                    const percentLeft = Math.min(100, Math.max(0, (row.current_balance / (row.threshold * 3)) * 100)); // Visual scale logic

                    return (
                      <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
                        <td className="p-4">
                          <p className="text-sm font-bold text-[#2B2B2B]">{row.case_number}</p>
                          <p className="text-xs font-medium text-slate-500 mt-0.5">{row.client}</p>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <span className={`text-sm font-black tabular-nums ${isLow ? 'text-rose-600' : 'text-emerald-700'}`}>
                              {formatCurr(row.current_balance)}
                            </span>
                            {isLow && <AlertCircle size={14} className="text-rose-600" />}
                          </div>
                          <div className="w-32 h-1.5 bg-slate-200 mt-2 rounded-none overflow-hidden">
                            <div 
                              className={`h-full ${isLow ? 'bg-rose-500' : 'bg-[#2B2B2B]'}`} 
                              style={{ width: `${percentLeft}%` }}
                            />
                          </div>
                        </td>
                        <td className="p-4 text-sm font-bold text-slate-600">{formatCurr(row.threshold)}</td>
                        <td className="p-4">
                          {row.auto_replenish ? (
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 size={12} /> Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-300">
                              Manual
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          <button 
                            onClick={() => handleToggleAutoBilling(row.id, row.auto_replenish)}
                            className="text-xs font-bold text-[#2B2B2B] hover:text-[#8B2626] uppercase tracking-widest flex items-center justify-end gap-1 w-full"
                          >
                            Manage <ArrowRight size={14} />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#2B2B2B] w-full max-w-md p-6 rounded-none shadow-2xl">
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3 mb-4">
              <h3 className="text-xl font-serif text-[#2B2B2B]">Link New Retainer</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-[#2B2B2B] transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleLinkRetainer} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Matter Reference</label>
                <input 
                  type="text" required placeholder="e.g. CV-2026-104" 
                  value={formData.case_number} onChange={(e) => setFormData({...formData, case_number: e.target.value})} 
                  className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Client Name</label>
                <input 
                  type="text" required placeholder="e.g. Pearson v. Specter" 
                  value={formData.client} onChange={(e) => setFormData({...formData, client: e.target.value})} 
                  className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Initial Balance (₹)</label>
                  <input 
                    type="number" min="0" required 
                    value={formData.current_balance} onChange={(e) => setFormData({...formData, current_balance: e.target.value})} 
                    className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Replenish Threshold</label>
                  <input 
                    type="number" min="0" required 
                    value={formData.threshold} onChange={(e) => setFormData({...formData, threshold: e.target.value})} 
                    className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" 
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 pb-2">
                <input 
                  type="checkbox" 
                  id="auto_replenish" 
                  checked={formData.auto_replenish} 
                  onChange={(e) => setFormData({...formData, auto_replenish: e.target.checked})} 
                  className="w-4 h-4 accent-[#2B2B2B]"
                />
                <label htmlFor="auto_replenish" className="text-xs font-bold text-slate-600 uppercase tracking-wider cursor-pointer">
                  Enable Auto-Replenish Billing
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="bg-[#2B2B2B] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#8B2626]">
                  {isSubmitting ? "Linking..." : "Link Retainer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetainerAutomation;