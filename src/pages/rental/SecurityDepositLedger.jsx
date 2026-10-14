// import React, { useState } from "react";
// import { ShieldPlus, CreditCard, Lock, Unlock, AlertTriangle } from "lucide-react";

// const SecurityDepositLedger = () => {
//   const [ledgers] = useState([
//     { id: "DEP-8841", booking: "BK-1002", amount: 25000, method: "Credit Card (Tokenized)", status: "HOLD_ACTIVE", date: "2026-09-12" },
//     { id: "DEP-8842", booking: "BK-0994", amount: 15000, method: "UPI AutoPay", status: "RELEASED", date: "2026-09-10" },
//     { id: "DEP-8843", booking: "BK-0988", amount: 5000, method: "Credit Card (Tokenized)", status: "CAPTURED", date: "2026-09-08", note: "Damage to chassis" },
//   ]);

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN')}`;

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><ShieldPlus size={28} /></div>
//             <div>
//               <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Security Deposit Ledger</h1>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Deposit Node ID</th>
//                 <th className="p-4">Booking Ref</th>
//                 <th className="p-4 text-right">Escrow Amount</th>
//                 <th className="p-4">Payment Method</th>
//                 <th className="p-4 text-right">Gateway Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {ledgers.map((row) => (
//                 <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
//                   <td className="p-4 text-sm font-bold text-slate-900">{row.id}</td>
//                   <td className="p-4 text-sm font-medium text-indigo-600">{row.booking}</td>
//                   <td className="p-4 text-sm font-black text-slate-900 text-right">{formatCurr(row.amount)}</td>
//                   <td className="p-4 text-sm font-medium text-slate-600 flex items-center gap-2"><CreditCard size={14}/> {row.method}</td>
//                   <td className="p-4 text-right">
//                     {row.status === "HOLD_ACTIVE" && <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200"><Lock size={12}/> Authorized</span>}
//                     {row.status === "RELEASED" && <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200"><Unlock size={12}/> Released</span>}
//                     {row.status === "CAPTURED" && <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200"><AlertTriangle size={12}/> Captured</span>}
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

// export default SecurityDepositLedger;

import React, { useState, useEffect } from "react";
import { ShieldPlus, CreditCard, Lock, Unlock, AlertTriangle, Loader2 } from "lucide-react";

const SecurityDepositLedger = () => {
  const [ledgers, setLedgers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/rental/deposits");
      const json = await res.json();
      setLedgers(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAction = async (id, action) => {
    if(!window.confirm(`Are you sure you want to ${action} this deposit?`)) return;
    await fetch(`http://127.0.0.1:8000/api/rental/deposits/${id}/action?action=${action}`, { method: "PATCH" });
    fetchData();
  };

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN')}`;

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><ShieldPlus size={28} /></div>
            <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Security Deposit Ledger</h1>
          </div>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Deposit Node ID</th>
                <th className="p-4">Booking Ref</th>
                <th className="p-4 text-right">Escrow Amount</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4 text-right">Gateway Status</th>
              </tr>
            </thead>
            <tbody>
              {ledgers.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-sm font-bold text-slate-900">{row.id}</td>
                  <td className="p-4 text-sm font-medium text-indigo-600">{row.booking}</td>
                  <td className="p-4 text-sm font-black text-slate-900 text-right">{formatCurr(row.amount)}</td>
                  <td className="p-4 text-sm font-medium text-slate-600 flex items-center gap-2"><CreditCard size={14}/> {row.method}</td>
                  <td className="p-4 text-right">
                    {row.status === "HOLD_ACTIVE" && (
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={()=>handleAction(row.id, 'release')} className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 px-2 py-1 uppercase">Release</button>
                        <button onClick={()=>handleAction(row.id, 'capture')} className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 px-2 py-1 uppercase">Capture</button>
                      </div>
                    )}
                    {row.status === "RELEASED" && <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200"><Unlock size={12}/> Released</span>}
                    {row.status === "CAPTURED" && <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200"><AlertTriangle size={12}/> Captured</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default SecurityDepositLedger;