// import React, { useState } from "react";
// import { AlertTriangle, Clock, Banknote } from "lucide-react";

// const LatePenalties = () => {
//   const [penalties] = useState([
//     { id: "PEN-011", booking: "BK-0991", client: "Acme Corp", hours_late: 14, fee_accrued: 3500, auto_billed: true },
//     { id: "PEN-012", booking: "BK-0985", client: "Stark Ind", hours_late: 48, fee_accrued: 12000, auto_billed: false },
//   ]);

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN')}`;

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><AlertTriangle size={28} /></div>
//             <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Late Return Penalties</h1>
//           </div>
//         </div>

//         <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Violation ID</th>
//                 <th className="p-4">Booking / Client</th>
//                 <th className="p-4 text-center">Overage Duration</th>
//                 <th className="p-4 text-right">Algorithmic Fee</th>
//                 <th className="p-4 text-right">Recovery Protocol</th>
//               </tr>
//             </thead>
//             <tbody>
//               {penalties.map((row) => (
//                 <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
//                   <td className="p-4 text-sm font-bold text-slate-900">{row.id}</td>
//                   <td className="p-4">
//                     <p className="text-sm font-bold text-slate-700">{row.booking}</p>
//                     <p className="text-[10px] font-medium text-slate-500 uppercase">{row.client}</p>
//                   </td>
//                   <td className="p-4 text-center">
//                     <span className="inline-flex items-center gap-1 text-sm font-bold text-rose-600"><Clock size={14}/> {row.hours_late} Hours</span>
//                   </td>
//                   <td className="p-4 text-right text-sm font-black text-slate-900">{formatCurr(row.fee_accrued)}</td>
//                   <td className="p-4 text-right">
//                     {row.auto_billed ? (
//                       <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">Auto-Billed</span>
//                     ) : (
//                       <button className="text-[10px] font-bold text-white uppercase tracking-widest bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded flex items-center gap-1 justify-end ml-auto"><Banknote size={12}/> Charge Card</button>
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

// export default LatePenalties;

import React, { useState, useEffect } from "react";
import { AlertTriangle, Clock, Banknote, Loader2 } from "lucide-react";

const LatePenalties = () => {
  const [penalties, setPenalties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/rental/penalties");
      const json = await res.json();
      setPenalties(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCharge = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/rental/penalties/${id}/charge`, { method: "PATCH" });
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
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><AlertTriangle size={28} /></div>
            <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Late Return Penalties</h1>
          </div>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Violation ID</th>
                <th className="p-4">Booking / Client</th>
                <th className="p-4 text-center">Overage Duration</th>
                <th className="p-4 text-right">Algorithmic Fee</th>
                <th className="p-4 text-right">Recovery Protocol</th>
              </tr>
            </thead>
            <tbody>
              {penalties.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-sm font-bold text-slate-900">{row.id}</td>
                  <td className="p-4">
                    <p className="text-sm font-bold text-slate-700">{row.booking}</p>
                    <p className="text-[10px] font-medium text-slate-500 uppercase">{row.client}</p>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-rose-600"><Clock size={14}/> {row.hours_late} Hours</span>
                  </td>
                  <td className="p-4 text-right text-sm font-black text-slate-900">{formatCurr(row.fee_accrued)}</td>
                  <td className="p-4 text-right">
                    {row.auto_billed ? (
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">Auto-Billed</span>
                    ) : (
                      <button onClick={() => handleCharge(row.id)} className="text-[10px] font-bold text-white uppercase tracking-widest bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded flex items-center gap-1 justify-end ml-auto">
                        <Banknote size={12}/> Charge Card
                      </button>
                    )}
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
export default LatePenalties;