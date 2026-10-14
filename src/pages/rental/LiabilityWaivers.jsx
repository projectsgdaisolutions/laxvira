// import React, { useState } from "react";
// import { FileSignature, Download, FileText, CheckCircle } from "lucide-react";

// const LiabilityWaivers = () => {
//   const [waivers] = useState([
//     { id: "WAV-092", booking: "BK-1002", client: "Highland Construction", date: "2026-09-12", status: "SIGNED", checksum: "0x8F9a...2b" },
//     { id: "WAV-093", booking: "BK-1003", client: "EventPro Ltd", date: "2026-09-14", status: "PENDING_SIG", checksum: null },
//   ]);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><FileSignature size={28} /></div>
//             <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Digital Liability Waivers</h1>
//           </div>
//         </div>

//         <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Waiver Hash ID</th>
//                 <th className="p-4">Linked Booking</th>
//                 <th className="p-4">Lessee Entity</th>
//                 <th className="p-4 text-center">Cryptographic Status</th>
//                 <th className="p-4 text-right">PDF Export</th>
//               </tr>
//             </thead>
//             <tbody>
//               {waivers.map((row) => (
//                 <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
//                   <td className="p-4 text-sm font-bold text-slate-900 flex items-center gap-2"><FileText size={16} className="text-slate-400"/> {row.id}</td>
//                   <td className="p-4 text-sm font-medium text-indigo-600">{row.booking}</td>
//                   <td className="p-4 text-sm font-medium text-slate-700">{row.client}</td>
//                   <td className="p-4 text-center">
//                     {row.status === "SIGNED" ? (
//                       <div className="flex flex-col items-center">
//                         <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-1"><CheckCircle size={12}/> Executed</span>
//                         <span className="text-[9px] font-mono text-slate-400 mt-1">{row.checksum}</span>
//                       </div>
//                     ) : (
//                       <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-1">Pending</span>
//                     )}
//                   </td>
//                   <td className="p-4 text-right">
//                      <button className="text-slate-500 hover:text-indigo-600 transition-colors"><Download size={20}/></button>
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

// export default LiabilityWaivers;

import React, { useState, useEffect } from "react";
import { FileSignature, Download, FileText, CheckCircle, Loader2, PenTool } from "lucide-react";

const LiabilityWaivers = () => {
  const [waivers, setWaivers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/rental/waivers");
      const json = await res.json();
      setWaivers(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleSign = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/rental/waivers/${id}/sign`, { method: "PATCH" });
    fetchData();
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><FileSignature size={28} /></div>
            <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Digital Liability Waivers</h1>
          </div>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Waiver Hash ID</th>
                <th className="p-4">Linked Booking</th>
                <th className="p-4">Lessee Entity</th>
                <th className="p-4 text-center">Cryptographic Status</th>
                <th className="p-4 text-right">PDF Export / Sign</th>
              </tr>
            </thead>
            <tbody>
              {waivers.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-sm font-bold text-slate-900 flex items-center gap-2"><FileText size={16} className="text-slate-400"/> {row.id}</td>
                  <td className="p-4 text-sm font-medium text-indigo-600">{row.booking}</td>
                  <td className="p-4 text-sm font-medium text-slate-700">{row.client}</td>
                  <td className="p-4 text-center">
                    {row.status === "SIGNED" ? (
                      <div className="flex flex-col items-center">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-1"><CheckCircle size={12}/> Executed</span>
                        <span className="text-[9px] font-mono text-slate-400 mt-1">{row.checksum}</span>
                      </div>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-1">Pending</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    {row.status === "SIGNED" ? (
                      <button className="text-slate-500 hover:text-indigo-600 transition-colors"><Download size={20}/></button>
                    ) : (
                      <button onClick={() => handleSign(row.id)} className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded border border-indigo-200 hover:bg-indigo-100 flex items-center justify-end gap-1 ml-auto">
                        <PenTool size={12}/> Sign Doc
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
export default LiabilityWaivers;