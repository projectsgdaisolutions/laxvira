// import React, { useState, useEffect } from "react";
// import { Users, DollarSign, Search, CheckCircle, Plus, Loader2 } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const SubcontractorLedgers = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [ledgers, setLedgers] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLedgers([
//         { id: "SUB-01", name: "Apex Steel Works", trade: "Structural Steel", contract: 1200000, paid: 800000, pending: 400000, status: "ACTIVE" },
//         { id: "SUB-02", name: "Metro HVAC Solutions", trade: "MEP / HVAC", contract: 650000, paid: 650000, pending: 0, status: "CLEARED" },
//         { id: "SUB-03", name: "Precision Concrete", trade: "Concrete Formwork", contract: 2100000, paid: 1000000, pending: 1100000, status: "ACTIVE" },
//       ]);
//       setIsLoading(false);
//     }, 400);
//   }, []);

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN')}`;

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-stone-100"><Loader2 className="animate-spin text-amber-500" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-stone-100 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
//       <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.03] grayscale mix-blend-multiply">
//         <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-stone-900 border-b-4 border-amber-500 px-6 py-5 rounded-sm shadow-xl">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 bg-amber-500 rounded-sm flex items-center justify-center shadow-inner border-2 border-amber-600 shrink-0 text-stone-900">
//               <Users size={30} strokeWidth={2.5} />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <DollarSign size={14} className="text-amber-500" />
//                 <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Accounts Payable</span>
//               </div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Subcontractor Ledgers</h1>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 bg-stone-800 text-white px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-700 hover:bg-amber-500 hover:text-stone-900 transition-colors">
//             <Plus size={16} /> New Ledger
//           </button>
//         </div>

//         <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
//           <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
//             <div className="relative w-72 border-2 border-stone-200">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
//               <input type="text" placeholder="Filter entities..." className="w-full bg-white text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500" />
//             </div>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Entity</th>
//                 <th className="p-4 text-right">Contract Value</th>
//                 <th className="p-4 text-right">Amount Disbursed</th>
//                 <th className="p-4 text-right">Balance Pending</th>
//                 <th className="p-4 text-right">Payout Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {ledgers.map((row) => (
//                 <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
//                   <td className="p-4">
//                     <p className="text-sm font-black text-stone-900 uppercase">{row.name}</p>
//                     <p className="text-[10px] font-bold text-stone-500 uppercase">{row.trade} • {row.id}</p>
//                   </td>
//                   <td className="p-4 text-right text-sm font-black text-stone-900">{formatCurr(row.contract)}</td>
//                   <td className="p-4 text-right text-sm font-black text-emerald-700">{formatCurr(row.paid)}</td>
//                   <td className="p-4 text-right">
//                     <span className={`text-sm font-black ${row.pending > 0 ? 'text-rose-600' : 'text-stone-400'}`}>
//                       {formatCurr(row.pending)}
//                     </span>
//                   </td>
//                   <td className="p-4 text-right">
//                     {row.pending > 0 ? (
//                       <button className="bg-stone-900 text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-amber-500 hover:text-stone-900 transition-colors">Authorize Draft</button>
//                     ) : (
//                       <span className="inline-flex items-center gap-1 text-[10px] font-black text-stone-400 uppercase tracking-widest"><CheckCircle size={12}/> Settled</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubcontractorLedgers;

import React, { useState, useEffect } from "react";
import { Users, DollarSign, Search, CheckCircle, Plus, Loader2, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/construction/assets/subcontractors";

const SubcontractorLedgers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ledgers, setLedgers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    trade: "",
    contract: 0
  });

  const fetchLedgers = async () => {
    try {
      const url = searchQuery.trim() 
        ? `${API_BASE}?q=${encodeURIComponent(searchQuery)}` 
        : API_BASE;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to load ledgers");
      const data = await res.json();
      setLedgers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLedgers();
  }, [searchQuery]);

  const handleCreateLedger = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          contract: parseFloat(formData.contract) || 0,
        }),
      });
      if (!res.ok) throw new Error("Failed to create ledger");
      
      setIsModalOpen(false);
      setFormData({ name: "", trade: "", contract: 0 });
      fetchLedgers();
    } catch (err) {
      console.error(err);
      alert("Failed to create ledger.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAuthorizePayout = async (ledgerId, pendingAmount) => {
    const amountStr = prompt(`Enter payout amount to authorize (Max pending: ₹${pendingAmount.toLocaleString('en-IN')}):`);
    const amount = parseFloat(amountStr);
    
    if (!amount || isNaN(amount) || amount <= 0) return;
    if (amount > pendingAmount) {
      alert("Payout cannot exceed the pending balance.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/${ledgerId}/pay?amount=${amount}`, {
        method: "PATCH"
      });
      if (res.ok) fetchLedgers();
    } catch (err) {
      console.error(err);
    }
  };

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN')}`;

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-stone-100"><Loader2 className="animate-spin text-amber-500" size={32} /></div>;

  return (
    <div className="min-h-screen bg-stone-100 font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-stone-900 border-b-4 border-amber-500 px-6 py-5 rounded-sm shadow-xl">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 bg-amber-500 rounded-sm flex items-center justify-center shadow-inner border-2 border-amber-600 shrink-0 text-stone-900">
              <Users size={30} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <DollarSign size={14} className="text-amber-500" />
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Accounts Payable</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Subcontractor Ledgers</h1>
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-stone-800 text-white px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-700 hover:bg-amber-500 hover:text-stone-900 transition-colors"
          >
            <Plus size={16} /> New Ledger
          </button>
        </div>

        <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
          <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
            <div className="relative w-full sm:w-72 border-2 border-stone-200 bg-white">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input 
                type="text" placeholder="Filter entities..." 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500" 
              />
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
                  <th className="p-4">Entity</th>
                  <th className="p-4 text-right">Contract Value</th>
                  <th className="p-4 text-right">Amount Disbursed</th>
                  <th className="p-4 text-right">Balance Pending</th>
                  <th className="p-4 text-right">Payout Action</th>
                </tr>
              </thead>
              <tbody>
                {ledgers.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-sm font-bold text-stone-500 uppercase">
                      No ledgers found.
                    </td>
                  </tr>
                ) : (
                  ledgers.map((row) => (
                    <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                      <td className="p-4">
                        <p className="text-sm font-black text-stone-900 uppercase">{row.name}</p>
                        <p className="text-[10px] font-bold text-stone-500 uppercase">{row.trade} • {row.id}</p>
                      </td>
                      <td className="p-4 text-right text-sm font-black text-stone-900">{formatCurr(row.contract)}</td>
                      <td className="p-4 text-right text-sm font-black text-emerald-700">{formatCurr(row.paid)}</td>
                      <td className="p-4 text-right">
                        <span className={`text-sm font-black ${row.pending > 0 ? 'text-rose-600' : 'text-stone-400'}`}>
                          {formatCurr(row.pending)}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        {row.pending > 0 ? (
                          <button 
                            onClick={() => handleAuthorizePayout(row.id, row.pending)}
                            className="bg-stone-900 text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-amber-500 hover:text-stone-900 transition-colors"
                          >
                            Authorize Draft
                          </button>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-black text-stone-400 uppercase tracking-widest"><CheckCircle size={12}/> Settled</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4">
          <div className="bg-white border-4 border-stone-900 rounded-sm w-full max-w-lg shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b-2 border-stone-200 pb-3 mb-4">
              <h2 className="text-lg font-black text-stone-900 uppercase tracking-tight">New Subcontractor Ledger</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-900">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateLedger} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Entity Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Steel Works"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Trade Discipline</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Structural Steel"
                    value={formData.trade}
                    onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Contract Value (₹)</label>
                  <input
                    required
                    type="number"
                    min="1000"
                    value={formData.contract}
                    onChange={(e) => setFormData({ ...formData, contract: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t-2 border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border-2 border-stone-300 text-xs font-black uppercase text-stone-700 hover:bg-stone-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-amber-500 text-stone-900 border-2 border-stone-900 text-xs font-black uppercase tracking-wider hover:bg-amber-400 disabled:opacity-50"
                >
                  {isSubmitting ? "Creating..." : "Create Ledger"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubcontractorLedgers;