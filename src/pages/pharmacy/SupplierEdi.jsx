// import React, { useState } from "react";
// import { Truck, RefreshCcw, Database, CheckCircle, PackageSearch } from "lucide-react";

// const SupplierEdi = () => {
//   const [pos] = useState([
//     { id: "PO-7781", vendor: "McKesson Corp", items: 12, total: 45000, status: "SYNCED" },
//     { id: "PO-7782", vendor: "AmerisourceBergen", items: 3, total: 12000, status: "PENDING EDI" },
//   ]);

//   return (
//     <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      
//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
//               <Database size={28} className="text-white" />
//             </div>
//             <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Supplier API Integrations</h1>
//           </div>
//           <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors flex items-center gap-2">
//             <RefreshCcw size={16} /> Sync EDI Endpoints
//           </button>
//         </div>

//         <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Purchase Order</th>
//                 <th className="p-4">EDI Vendor Route</th>
//                 <th className="p-4 text-right">Line Items</th>
//                 <th className="p-4 text-right">Total Value</th>
//                 <th className="p-4 text-right">Pipeline Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pos.map((row) => (
//                 <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
//                   <td className="p-4 text-sm font-bold text-slate-800">{row.id}</td>
//                   <td className="p-4 text-sm font-bold text-slate-700 flex items-center gap-2"><Truck size={16} className="text-teal-600"/> {row.vendor}</td>
//                   <td className="p-4 text-sm font-medium text-slate-600 text-right">{row.items}</td>
//                   <td className="p-4 text-sm font-black text-teal-700 text-right">₹{row.total.toLocaleString()}</td>
//                   <td className="p-4 text-right">
//                     {row.status === "SYNCED" ? (
//                       <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg"><CheckCircle size={12}/> Confirmed</span>
//                     ) : (
//                       <button className="text-[10px] font-bold text-white uppercase tracking-widest bg-cyan-600 px-3 py-1.5 rounded-lg hover:bg-cyan-700">Transmit EDI</button>
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

// export default SupplierEdi;

import React, { useState, useEffect } from "react";
import { Truck, RefreshCcw, Database, CheckCircle, Loader2 } from "lucide-react";

const SupplierEdi = () => {
  const [pos, setPos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/pharmacy/supplier-edi");
      const json = await res.json();
      setPos(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleTransmit = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/pharmacy/supplier-edi/${id}/transmit`, { method: "PATCH" });
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
              <Database size={28} className="text-white" />
            </div>
            <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Supplier API Integrations</h1>
          </div>
          <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors flex items-center gap-2">
            <RefreshCcw size={16} /> Sync EDI Endpoints
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Purchase Order</th>
                <th className="p-4">EDI Vendor Route</th>
                <th className="p-4 text-right">Line Items</th>
                <th className="p-4 text-right">Total Value</th>
                <th className="p-4 text-right">Pipeline Status</th>
              </tr>
            </thead>
            <tbody>
              {pos.map((row) => (
                <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
                  <td className="p-4 text-sm font-bold text-slate-800">{row.id}</td>
                  <td className="p-4 text-sm font-bold text-slate-700 flex items-center gap-2"><Truck size={16} className="text-teal-600"/> {row.vendor}</td>
                  <td className="p-4 text-sm font-medium text-slate-600 text-right">{row.items}</td>
                  <td className="p-4 text-sm font-black text-teal-700 text-right">₹{row.total.toLocaleString()}</td>
                  <td className="p-4 text-right">
                    {row.status === "SYNCED" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg"><CheckCircle size={12}/> Confirmed</span>
                    ) : (
                      <button onClick={() => handleTransmit(row.id)} className="text-[10px] font-bold text-white uppercase tracking-widest bg-cyan-600 px-3 py-1.5 rounded-lg hover:bg-cyan-700">Transmit EDI</button>
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
export default SupplierEdi;