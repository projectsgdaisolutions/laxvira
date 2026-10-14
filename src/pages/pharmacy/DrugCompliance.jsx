// import React, { useState, useEffect } from "react";
// import { ShieldCheck, Search, Key, Lock, Fingerprint, Loader2 } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const DrugCompliance = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [logs, setLogs] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLogs([
//         { id: "AUD-0991", drug: "Oxycodone 10mg", schedule: "C-II", patient: "John Doe", rx: "RX-44812", prescriber: "Dr. A. Smith (DEA: AS1234567)", timestamp: "2026-09-11 09:14 AM", pharmacist: "J. Pearson", verified: true },
//         { id: "AUD-0992", drug: "Alprazolam 1mg", schedule: "C-IV", patient: "Jane Roe", rx: "RX-44815", prescriber: "Dr. B. Jones (DEA: BJ7654321)", timestamp: "2026-09-11 10:05 AM", pharmacist: "J. Pearson", verified: true },
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
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
//               <Lock size={28} className="text-white" />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <ShieldCheck size={14} className="text-teal-600" />
//                 <span className="text-[10px] font-bold text-teal-600 uppercase tracking-[0.2em]">Regulatory Subsystem</span>
//               </div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Scheduled Drug Compliance</h1>
//             </div>
//           </div>
//           <button className="bg-teal-50 text-teal-700 border border-teal-200 px-6 py-3 text-sm font-bold rounded-xl shadow-sm hover:bg-teal-100 transition-colors flex items-center gap-2">
//             <Key size={16} /> Export Audit Trail
//           </button>
//         </div>

//         <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
//           <div className="p-4 border-b border-teal-100/50 flex justify-between items-center bg-teal-50/30">
//             <div className="relative w-96">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-700/50" />
//               <input type="text" placeholder="Query Rx, Prescriber DEA, or Patient..." className="w-full bg-white border border-teal-100 text-sm font-medium text-slate-700 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20" />
//             </div>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Audit ID / Timestamp</th>
//                 <th className="p-4">Restricted Substance</th>
//                 <th className="p-4">Prescriber Auth</th>
//                 <th className="p-4">Dispensed To</th>
//                 <th className="p-4 text-right">Verification</th>
//               </tr>
//             </thead>
//             <tbody>
//               {logs.map((row) => (
//                 <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
//                   <td className="p-4">
//                     <p className="text-sm font-bold text-slate-800">{row.id}</p>
//                     <p className="text-[10px] font-medium text-slate-500 uppercase">{row.timestamp}</p>
//                   </td>
//                   <td className="p-4">
//                     <p className="text-sm font-bold text-slate-800">{row.drug}</p>
//                     <span className="inline-block mt-1 px-2 py-0.5 text-[9px] font-black bg-rose-100 text-rose-700 rounded-md border border-rose-200 uppercase">{row.schedule}</span>
//                   </td>
//                   <td className="p-4 text-sm font-medium text-slate-700">{row.prescriber}</td>
//                   <td className="p-4">
//                     <p className="text-sm font-bold text-slate-800">{row.patient}</p>
//                     <p className="text-[10px] font-medium text-slate-500 uppercase">{row.rx}</p>
//                   </td>
//                   <td className="p-4 text-right">
//                     <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg">
//                       <Fingerprint size={12}/> Verified by {row.pharmacist}
//                     </span>
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

// export default DrugCompliance;

import React, { useState, useEffect } from "react";
import { ShieldCheck, Search, Key, Lock, Fingerprint, Loader2 } from "lucide-react";
import logo from "../../assets/logo.jpg";

const DrugCompliance = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pharmacy/compliance")
      .then(res => res.json())
      .then(json => setLogs(json.records || []))
      .finally(() => setIsLoading(false));
  }, []);

  const filtered = logs.filter(l => l.drug.toLowerCase().includes(searchQuery.toLowerCase()) || l.patient.toLowerCase().includes(searchQuery.toLowerCase()) || l.rx.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#F0FDF8]"><Loader2 className="animate-spin text-teal-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
              <Lock size={28} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={14} className="text-teal-600" />
                <span className="text-[10px] font-bold text-teal-600 uppercase tracking-[0.2em]">Regulatory Subsystem</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Scheduled Drug Compliance</h1>
            </div>
          </div>
          <button className="bg-teal-50 text-teal-700 border border-teal-200 px-6 py-3 text-sm font-bold rounded-xl shadow-sm hover:bg-teal-100 transition-colors flex items-center gap-2">
            <Key size={16} /> Export Audit Trail
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
          <div className="p-4 border-b border-teal-100/50 flex justify-between items-center bg-teal-50/30">
            <div className="relative w-96">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-700/50" />
              <input type="text" placeholder="Query Rx, Prescriber DEA, or Patient..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white border border-teal-100 text-sm font-medium text-slate-700 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20" />
            </div>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Audit ID / Timestamp</th>
                <th className="p-4">Restricted Substance</th>
                <th className="p-4">Prescriber Auth</th>
                <th className="p-4">Dispensed To</th>
                <th className="p-4 text-right">Verification</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
                  <td className="p-4">
                    <p className="text-sm font-bold text-slate-800">{row.id}</p>
                    <p className="text-[10px] font-medium text-slate-500 uppercase">{row.timestamp}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-bold text-slate-800">{row.drug}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 text-[9px] font-black bg-rose-100 text-rose-700 rounded-md border border-rose-200 uppercase">{row.schedule}</span>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-700">{row.prescriber}</td>
                  <td className="p-4">
                    <p className="text-sm font-bold text-slate-800">{row.patient}</p>
                    <p className="text-[10px] font-medium text-slate-500 uppercase">{row.rx}</p>
                  </td>
                  <td className="p-4 text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg">
                      <Fingerprint size={12}/> Verified by {row.pharmacist}
                    </span>
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
export default DrugCompliance;