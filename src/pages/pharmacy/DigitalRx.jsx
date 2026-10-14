// import React, { useState, useEffect } from "react";
// import { FileSignature, UploadCloud, Search, CheckCircle, Clock, FileText, Loader2 } from "lucide-react";

// const DigitalRx = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [prescriptions, setPrescriptions] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setPrescriptions([
//         { id: "RX-44816", patient: "Michael Ross", doctor: "Dr. H. Specter", date: "2026-09-11", status: "PENDING REVIEW", type: "E-Prescribe" },
//         { id: "RX-44817", patient: "Rachel Zane", doctor: "Dr. R. Zane", date: "2026-09-10", status: "DISPENSED", type: "Scanned PDF" },
//       ]);
//       setIsLoading(false);
//     }, 400);
//   }, []);

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#F0FDF8]"><Loader2 className="animate-spin text-teal-600" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      
//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
//               <FileSignature size={28} className="text-white" />
//             </div>
//             <div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Rx Digital Storage</h1>
//             </div>
//           </div>
//           <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors flex items-center gap-2">
//             <UploadCloud size={16} /> Upload Physical Script
//           </button>
//         </div>

//         <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Rx Number</th>
//                 <th className="p-4">Patient Identity</th>
//                 <th className="p-4">Prescribing Physician</th>
//                 <th className="p-4">Format</th>
//                 <th className="p-4 text-right">Fulfillment Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {prescriptions.map((row) => (
//                 <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors cursor-pointer">
//                   <td className="p-4 text-sm font-bold text-teal-700 flex items-center gap-2"><FileText size={16} /> {row.id}</td>
//                   <td className="p-4 text-sm font-bold text-slate-800">{row.patient}</td>
//                   <td className="p-4 text-sm font-medium text-slate-600">{row.doctor}</td>
//                   <td className="p-4 text-xs font-bold text-slate-500 uppercase">{row.type}</td>
//                   <td className="p-4 text-right">
//                     {row.status === "PENDING REVIEW" ? (
//                       <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg"><Clock size={12}/> Pending</span>
//                     ) : (
//                       <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-lg"><CheckCircle size={12}/> Dispensed</span>
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

// export default DigitalRx;

import React, { useState, useEffect } from "react";
import { FileSignature, UploadCloud, CheckCircle, Clock, FileText, Loader2 } from "lucide-react";
import logo from "../../assets/logo.jpg";

const DigitalRx = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [prescriptions, setPrescriptions] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/pharmacy/prescriptions");
      const json = await res.json();
      setPrescriptions(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleDispense = async (id) => {
    if(!window.confirm(`Mark Rx ${id} as DISPENSED?`)) return;
    await fetch(`http://127.0.0.1:8000/api/pharmacy/prescriptions/${id}/dispense`, { method: "PATCH" });
    fetchData();
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#F0FDF8]"><Loader2 className="animate-spin text-teal-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
              <FileSignature size={28} className="text-white" />
            </div>
            <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Rx Digital Storage</h1>
          </div>
          <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors flex items-center gap-2">
            <UploadCloud size={16} /> Upload Physical Script
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Rx Number</th>
                <th className="p-4">Patient Identity</th>
                <th className="p-4">Prescribing Physician</th>
                <th className="p-4">Format</th>
                <th className="p-4 text-right">Fulfillment Status</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((row) => (
                <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors cursor-pointer">
                  <td className="p-4 text-sm font-bold text-teal-700 flex items-center gap-2"><FileText size={16} /> {row.id}</td>
                  <td className="p-4 text-sm font-bold text-slate-800">{row.patient}</td>
                  <td className="p-4 text-sm font-medium text-slate-600">{row.doctor}</td>
                  <td className="p-4 text-xs font-bold text-slate-500 uppercase">{row.type}</td>
                  <td className="p-4 text-right">
                    {row.status === "PENDING REVIEW" ? (
                      <button onClick={() => handleDispense(row.id)} className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg hover:bg-amber-100">
                        <Clock size={12}/> Pending (Click to Dispense)
                      </button>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-lg"><CheckCircle size={12}/> Dispensed</span>
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
export default DigitalRx;