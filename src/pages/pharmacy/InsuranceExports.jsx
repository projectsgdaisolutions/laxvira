// import React, { useState } from "react";
// import { FileText, Download, Upload, Server, CheckSquare } from "lucide-react";

// const InsuranceExports = () => {
//   const [claims] = useState([
//     { id: "CLM-9001", payer: "BlueCross Health", total: 1450, count: 12, status: "READY" },
//     { id: "CLM-9002", payer: "Medicare Part D", total: 3200, count: 45, status: "READY" },
//   ]);

//   return (
//     <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      
//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
//               <Server size={28} className="text-white" />
//             </div>
//             <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Health Insurance Exports</h1>
//           </div>
//           <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors flex items-center gap-2">
//             <Download size={16} /> Generate Master XML
//           </button>
//         </div>

//         <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4 w-12"><CheckSquare size={16}/></th>
//                 <th className="p-4">Batch ID</th>
//                 <th className="p-4">Payer Organization</th>
//                 <th className="p-4 text-right">Scripts Included</th>
//                 <th className="p-4 text-right">Total Claim Value</th>
//                 <th className="p-4 text-right">Export Format</th>
//               </tr>
//             </thead>
//             <tbody>
//               {claims.map((row) => (
//                 <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
//                   <td className="p-4"><input type="checkbox" className="w-4 h-4 text-teal-600 rounded border-teal-300 focus:ring-teal-500" /></td>
//                   <td className="p-4 text-sm font-bold text-slate-800">{row.id}</td>
//                   <td className="p-4 text-sm font-bold text-slate-700">{row.payer}</td>
//                   <td className="p-4 text-sm font-bold text-slate-600 text-right">{row.count}</td>
//                   <td className="p-4 text-sm font-black text-teal-700 text-right">₹{row.total.toLocaleString()}</td>
//                   <td className="p-4 text-right">
//                     <button className="text-[10px] font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200 hover:bg-teal-100 mr-2">CSV</button>
//                     <button className="text-[10px] font-bold text-cyan-700 uppercase tracking-widest bg-cyan-50 px-3 py-1.5 rounded-lg border border-cyan-200 hover:bg-cyan-100">XML (X12)</button>
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

// export default InsuranceExports;

import React, { useState, useEffect } from "react";
import { Server, Download, CheckSquare, Loader2 } from "lucide-react";

const InsuranceExports = () => {
  const [claims, setClaims] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pharmacy/insurance")
      .then(res => res.json())
      .then(json => setClaims(json.records || []))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#F0FDF8]"><Loader2 className="animate-spin text-teal-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
              <Server size={28} className="text-white" />
            </div>
            <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Health Insurance Exports</h1>
          </div>
          <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors flex items-center gap-2">
            <Download size={16} /> Generate Master XML
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4 w-12"><CheckSquare size={16}/></th>
                <th className="p-4">Batch ID</th>
                <th className="p-4">Payer Organization</th>
                <th className="p-4 text-right">Scripts Included</th>
                <th className="p-4 text-right">Total Claim Value</th>
                <th className="p-4 text-right">Export Format</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((row) => (
                <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
                  <td className="p-4"><input type="checkbox" className="w-4 h-4 text-teal-600 rounded border-teal-300 focus:ring-teal-500" /></td>
                  <td className="p-4 text-sm font-bold text-slate-800">{row.id}</td>
                  <td className="p-4 text-sm font-bold text-slate-700">{row.payer}</td>
                  <td className="p-4 text-sm font-bold text-slate-600 text-right">{row.count}</td>
                  <td className="p-4 text-sm font-black text-teal-700 text-right">₹{row.total.toLocaleString()}</td>
                  <td className="p-4 text-right">
                    <button className="text-[10px] font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200 hover:bg-teal-100 mr-2">CSV</button>
                    <button className="text-[10px] font-bold text-cyan-700 uppercase tracking-widest bg-cyan-50 px-3 py-1.5 rounded-lg border border-cyan-200 hover:bg-cyan-100">XML (X12)</button>
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
export default InsuranceExports;