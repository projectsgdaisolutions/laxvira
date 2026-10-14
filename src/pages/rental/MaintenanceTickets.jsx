// import React, { useState } from "react";
// import { Wrench, AlertCircle, ArrowRight } from "lucide-react";

// const MaintenanceTickets = () => {
//   const [tickets] = useState([
//     { id: "TKT-449", asset: "Yamaha 20kW Generator", issue: "Oil leak detected on return", severity: "HIGH", status: "IN_REPAIR" },
//     { id: "TKT-450", asset: "JCB Backhoe Loader", issue: "Routine 1000hr servicing", severity: "LOW", status: "QUEUED" },
//   ]);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><Wrench size={28} /></div>
//             <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Maintenance Ticketing</h1>
//           </div>
//         </div>

//         <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Ticket ID</th>
//                 <th className="p-4">Equipment Node</th>
//                 <th className="p-4">Diagnostic Report</th>
//                 <th className="p-4">Severity Matrix</th>
//                 <th className="p-4 text-right">Workflow</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tickets.map((row) => (
//                 <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
//                   <td className="p-4 text-sm font-bold text-slate-900">{row.id}</td>
//                   <td className="p-4 text-sm font-bold text-slate-700">{row.asset}</td>
//                   <td className="p-4 text-sm font-medium text-slate-600">{row.issue}</td>
//                   <td className="p-4">
//                     <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 ${row.severity === 'HIGH' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>{row.severity}</span>
//                   </td>
//                   <td className="p-4 text-right">
//                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center justify-end gap-1 cursor-pointer hover:text-indigo-800">{row.status} <ArrowRight size={14}/></span>
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

// export default MaintenanceTickets;

import React, { useState, useEffect } from "react";
import { Wrench, ArrowRight, Loader2 } from "lucide-react";

const MaintenanceTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/rental/maintenance");
      const json = await res.json();
      setTickets(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAdvance = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/rental/maintenance/${id}/advance`, { method: "PATCH" });
    fetchData();
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><Wrench size={28} /></div>
            <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Maintenance Ticketing</h1>
          </div>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Ticket ID</th>
                <th className="p-4">Equipment Node</th>
                <th className="p-4">Diagnostic Report</th>
                <th className="p-4">Severity Matrix</th>
                <th className="p-4 text-right">Workflow</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-sm font-bold text-slate-900">{row.id}</td>
                  <td className="p-4 text-sm font-bold text-slate-700">{row.asset}</td>
                  <td className="p-4 text-sm font-medium text-slate-600">{row.issue}</td>
                  <td className="p-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 ${row.severity === 'HIGH' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>{row.severity}</span>
                  </td>
                  <td className="p-4 text-right">
                    {row.status !== "RESOLVED" ? (
                      <button onClick={() => handleAdvance(row.id)} className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex items-center justify-end gap-1 ml-auto hover:text-indigo-800">
                        {row.status} <ArrowRight size={14}/>
                      </button>
                    ) : (
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Resolved</span>
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
export default MaintenanceTickets;