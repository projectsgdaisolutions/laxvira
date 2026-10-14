// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Bell, LogOut, Settings, Scale, Plus, Search, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const TrustAccounting = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [records, setRecords] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   // Form State for New Trust Ledger
//   const [formData, setFormData] = useState({ client_name: "", case_number: "", ledger_balance: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     fetchTrustData();
//   }, []);

//   const fetchTrustData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) { navigate("/login"); return; }

//       const res = await fetch("http://localhost:8000/api/legal/trust", {
//         headers: { "Authorization": `Bearer ${token}` }
//       });

//       if (res.ok) {
//         const json = await res.json();
//         setRecords(json.records || []);
//       }
//     } catch (err) {
//       console.error("Failed to load trust ledgers:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCreateRecord = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/legal/trust", {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}` 
//         },
//         body: JSON.stringify(formData)
//       });

//       if (res.ok) {
//         setIsModalOpen(false);
//         setFormData({ client_name: "", case_number: "", ledger_balance: "" });
//         fetchTrustData(); // Refresh records
//       } else {
//         alert("Failed to create trust ledger node.");
//       }
//     } catch (err) {
//       console.error("Network error:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

//   if (isLoading) {
//     return (
//       <div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7]">
//         <Loader2 className="animate-spin text-[#8B2626]" size={32} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
      
//       {/* Watermark */}
//       <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
//         <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#2B2B2B] pb-6">
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <Scale size={18} className="text-[#8B2626]" />
//               <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Regulatory Compliance</span>
//             </div>
//             <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">
//               Trust & Escrow Accounting
//             </h1>
//             <p className="text-[14px] font-medium text-slate-500 mt-3 font-sans">
//               Strictly segregated ledger nodes ensuring multi-client fund isolation.
//             </p>
//           </div>

//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md"
//           >
//             <Plus size={16} /> New Escrow Node
//           </button>
//         </div>

//         {/* Data Table Section */}
//         <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
//           <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
//             <div className="relative w-72">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//               <input 
//                 type="text" 
//                 placeholder="Search case file or client..." 
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
//               />
//             </div>
//             <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Nodes: {records.length}</span>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Case Reference</th>
//                 <th className="p-4">Client Name</th>
//                 <th className="p-4">Segregated Balance</th>
//                 <th className="p-4">Compliance Status</th>
//                 <th className="p-4">Last Audit Stamp</th>
//               </tr>
//             </thead>
//             <tbody>
//               {records.filter(r => r.client_name.toLowerCase().includes(searchQuery.toLowerCase()) || r.case_number.includes(searchQuery)).map((row) => (
//                 <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
//                   <td className="p-4 text-sm font-bold text-[#2B2B2B]">{row.case_number}</td>
//                   <td className="p-4 text-sm font-medium text-slate-700">{row.client_name}</td>
//                   <td className="p-4 text-sm font-black text-[#8B2626]">{formatCurr(row.ledger_balance)}</td>
//                   <td className="p-4">
//                     <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
//                       <ShieldCheck size={12} /> {row.status}
//                     </span>
//                   </td>
//                   <td className="p-4 text-xs font-medium text-slate-500">{new Date(row.last_audit_date).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       </div>

//       {/* Creation Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
//           <div className="bg-white border-2 border-[#2B2B2B] w-full max-w-md p-6 rounded-none shadow-2xl">
//             <h3 className="text-xl font-serif text-[#2B2B2B] mb-4">Initialize Escrow Ledger</h3>
//             <form onSubmit={handleCreateRecord} className="space-y-4">
//               <div>
//                 <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Client Full Name</label>
//                 <input 
//                   type="text" required 
//                   value={formData.client_name}
//                   onChange={(e) => setFormData({...formData, client_name: e.target.value})}
//                   className="w-full border border-slate-300 p-2.5 text-sm rounded-none outline-none focus:border-[#2B2B2B]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Case File Reference ID</label>
//                 <input 
//                   type="text" required 
//                   value={formData.case_number}
//                   onChange={(e) => setFormData({...formData, case_number: e.target.value})}
//                   className="w-full border border-slate-300 p-2.5 text-sm rounded-none outline-none focus:border-[#2B2B2B]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Initial Retainer Deposit (₹)</label>
//                 <input 
//                   type="number" step="0.01" required 
//                   value={formData.ledger_balance}
//                   onChange={(e) => setFormData({...formData, ledger_balance: e.target.value})}
//                   className="w-full border border-slate-300 p-2.5 text-sm rounded-none outline-none focus:border-[#2B2B2B]"
//                 />
//               </div>
//               <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
//                 <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800">Cancel</button>
//                 <button type="submit" disabled={isSubmitting} className="bg-[#2B2B2B] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#8B2626]">
//                   {isSubmitting ? "Securing..." : "Commit Ledger"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default TrustAccounting;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Scale, Plus, Search, ShieldCheck, Loader2, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/legal/trust";

const TrustAccounting = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Form State for New Trust Ledger
  const [formData, setFormData] = useState({ client_name: "", case_number: "", ledger_balance: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchTrustData();
  }, []);

  const fetchTrustData = async () => {
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (res.ok) {
        const json = await res.json();
        setRecords(json.records || []);
      }
    } catch (err) {
      console.error("Failed to load trust ledgers:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateRecord = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({
          ...formData,
          ledger_balance: parseFloat(formData.ledger_balance) || 0
        })
      });

      if (res.ok) {
        setIsModalOpen(false);
        setFormData({ client_name: "", case_number: "", ledger_balance: "" });
        fetchTrustData(); 
      } else {
        alert("Failed to create trust ledger node.");
      }
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const filteredRecords = records.filter(r => 
    r.client_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.case_number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7]">
        <Loader2 className="animate-spin text-[#8B2626]" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
      
      {/* Watermark */}
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#2B2B2B] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Scale size={18} className="text-[#8B2626]" />
              <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Regulatory Compliance</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">
              Trust & Escrow Accounting
            </h1>
            <p className="text-[14px] font-medium text-slate-500 mt-3 font-sans">
              Strictly segregated ledger nodes ensuring multi-client fund isolation.
            </p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md"
          >
            <Plus size={16} /> New Escrow Node
          </button>
        </div>

        {/* Data Table Section */}
        <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search case file or client..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
              />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-4 shrink-0">Total Nodes: {filteredRecords.length}</span>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
                  <th className="p-4">Case Reference</th>
                  <th className="p-4">Client Name</th>
                  <th className="p-4">Segregated Balance</th>
                  <th className="p-4">Compliance Status</th>
                  <th className="p-4">Last Audit Stamp</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length === 0 ? (
                  <tr><td colSpan={5} className="p-8 text-center text-sm font-medium text-slate-400">No escrow ledgers found.</td></tr>
                ) : (
                  filteredRecords.map((row) => (
                    <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 text-sm font-bold text-[#2B2B2B]">{row.case_number}</td>
                      <td className="p-4 text-sm font-medium text-slate-700">{row.client_name}</td>
                      <td className="p-4 text-sm font-black text-[#8B2626]">{formatCurr(row.ledger_balance)}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <ShieldCheck size={12} /> {row.status}
                        </span>
                      </td>
                      <td className="p-4 text-xs font-medium text-slate-500">{new Date(row.last_audit_date).toLocaleDateString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Creation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#2B2B2B] w-full max-w-md p-6 rounded-none shadow-2xl">
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3 mb-4">
              <h3 className="text-xl font-serif text-[#2B2B2B]">Initialize Escrow Ledger</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-[#2B2B2B] transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleCreateRecord} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Client Full Name</label>
                <input 
                  type="text" required 
                  placeholder="e.g. Apex Holdings"
                  value={formData.client_name}
                  onChange={(e) => setFormData({...formData, client_name: e.target.value})}
                  className="w-full border border-slate-300 p-2.5 text-sm rounded-none outline-none focus:border-[#2B2B2B]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Case File Reference ID</label>
                <input 
                  type="text" required 
                  placeholder="e.g. CV-2026-892"
                  value={formData.case_number}
                  onChange={(e) => setFormData({...formData, case_number: e.target.value})}
                  className="w-full border border-slate-300 p-2.5 text-sm rounded-none outline-none focus:border-[#2B2B2B]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Initial Retainer Deposit (₹)</label>
                <input 
                  type="number" step="0.01" min="0" required 
                  placeholder="e.g. 50000"
                  value={formData.ledger_balance}
                  onChange={(e) => setFormData({...formData, ledger_balance: e.target.value})}
                  className="w-full border border-slate-300 p-2.5 text-sm rounded-none outline-none focus:border-[#2B2B2B]"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="bg-[#2B2B2B] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#8B2626]">
                  {isSubmitting ? "Securing..." : "Commit Ledger"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default TrustAccounting;