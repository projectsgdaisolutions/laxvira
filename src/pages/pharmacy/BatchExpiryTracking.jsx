// import React, { useState, useEffect } from "react";
// import { AlertTriangle, Search, Filter, Trash2, ArrowRightLeft, ShieldPlus, Loader2 } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const BatchExpiryTracking = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [inventory, setInventory] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     setTimeout(() => {
//       setInventory([
//         { id: "BCH-8821", drug: "Amoxicillin 500mg", supplier: "PharmaCorp", qty: 450, expiry: "2026-10-15", status: "SAFE" },
//         { id: "BCH-8822", drug: "Lisinopril 10mg", supplier: "MedSupply Inc.", qty: 120, expiry: "2026-09-30", status: "EXPIRING SOON" },
//         { id: "BCH-8823", drug: "Atorvastatin 20mg", supplier: "PharmaCorp", qty: 50, expiry: "2026-08-01", status: "EXPIRED" },
//       ]);
//       setIsLoading(false);
//     }, 400);
//   }, []);

//   const getStatusStyle = (status) => {
//     switch(status) {
//       case 'EXPIRED': return 'bg-rose-100 text-rose-700 border-rose-200';
//       case 'EXPIRING SOON': return 'bg-amber-100 text-amber-700 border-amber-200';
//       default: return 'bg-teal-50 text-teal-700 border-teal-200';
//     }
//   };

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#F0FDF8]"><Loader2 className="animate-spin text-teal-600" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
//       <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.02] grayscale mix-blend-multiply">
//         <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
//               <AlertTriangle size={28} className="text-white" />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <ShieldPlus size={14} className="text-teal-600" />
//                 <span className="text-[10px] font-bold text-teal-600 uppercase tracking-[0.2em]">Inventory Engine</span>
//               </div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Batch & Expiry Tracking</h1>
//             </div>
//           </div>
//           <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors">
//             Initiate Vendor Return
//           </button>
//         </div>

//         <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
//           <div className="p-4 border-b border-teal-100/50 flex justify-between items-center bg-teal-50/30">
//             <div className="relative w-72">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-700/50" />
//               <input type="text" placeholder="Scan or search batch ID..." className="w-full bg-white border border-teal-100 text-sm font-medium text-slate-700 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20" />
//             </div>
//             <button className="p-2.5 text-teal-700 hover:bg-teal-50 rounded-xl transition-colors"><Filter size={18} /></button>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Batch Number</th>
//                 <th className="p-4">Drug Nomenclature</th>
//                 <th className="p-4 text-right">Units Remaining</th>
//                 <th className="p-4 text-center">Expiration Date</th>
//                 <th className="p-4 text-right">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {inventory.map((row) => (
//                 <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
//                   <td className="p-4 text-sm font-bold text-slate-800">{row.id}</td>
//                   <td className="p-4">
//                     <p className="text-sm font-bold text-slate-800">{row.drug}</p>
//                     <p className="text-[10px] font-bold text-slate-400 uppercase">{row.supplier}</p>
//                   </td>
//                   <td className="p-4 text-right text-sm font-bold text-slate-700">{row.qty}</td>
//                   <td className="p-4 text-center">
//                     <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-lg ${getStatusStyle(row.status)}`}>
//                       {row.expiry}
//                     </span>
//                   </td>
//                   <td className="p-4 text-right">
//                     {row.status === "EXPIRED" ? (
//                       <button className="text-rose-600 hover:bg-rose-50 p-2 rounded-lg transition-colors"><Trash2 size={18} /></button>
//                     ) : (
//                       <button className="text-teal-600 hover:bg-teal-50 p-2 rounded-lg transition-colors"><ArrowRightLeft size={18} /></button>
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

// export default BatchExpiryTracking;

import React, { useState, useEffect } from "react";
import { AlertTriangle, Search, Filter, Trash2, ArrowRightLeft, ShieldPlus, Loader2 } from "lucide-react";
import logo from "../../assets/logo.jpg";

const BatchExpiryTracking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [inventory, setInventory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/pharmacy/inventory");
      const json = await res.json();
      setInventory(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleDispose = async (id) => {
    if(!window.confirm(`Confirm disposal of expired batch ${id}?`)) return;
    await fetch(`http://127.0.0.1:8000/api/pharmacy/inventory/${id}`, { method: "DELETE" });
    fetchData();
  };

  const getStatusStyle = (status) => {
    switch(status) {
      case 'EXPIRED': return 'bg-rose-100 text-rose-700 border-rose-200';
      case 'EXPIRING SOON': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-teal-50 text-teal-700 border-teal-200';
    }
  };

  const filtered = inventory.filter(i => i.id.toLowerCase().includes(searchQuery.toLowerCase()) || i.drug.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#F0FDF8]"><Loader2 className="animate-spin text-teal-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.02] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
              <AlertTriangle size={28} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldPlus size={14} className="text-teal-600" />
                <span className="text-[10px] font-bold text-teal-600 uppercase tracking-[0.2em]">Inventory Engine</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Batch & Expiry Tracking</h1>
            </div>
          </div>
          <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors">
            Initiate Vendor Return
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
          <div className="p-4 border-b border-teal-100/50 flex justify-between items-center bg-teal-50/30">
            <div className="relative w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-700/50" />
              <input type="text" placeholder="Scan or search batch ID..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white border border-teal-100 text-sm font-medium text-slate-700 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20" />
            </div>
            <button className="p-2.5 text-teal-700 hover:bg-teal-50 rounded-xl transition-colors"><Filter size={18} /></button>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Batch Number</th>
                <th className="p-4">Drug Nomenclature</th>
                <th className="p-4 text-right">Units Remaining</th>
                <th className="p-4 text-center">Expiration Date</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
                  <td className="p-4 text-sm font-bold text-slate-800">{row.id}</td>
                  <td className="p-4">
                    <p className="text-sm font-bold text-slate-800">{row.drug}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{row.supplier}</p>
                  </td>
                  <td className="p-4 text-right text-sm font-bold text-slate-700">{row.qty}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-lg ${getStatusStyle(row.status)}`}>
                      {row.expiry}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {row.status === "EXPIRED" ? (
                      <button onClick={() => handleDispose(row.id)} className="text-rose-600 hover:bg-rose-50 p-2 rounded-lg transition-colors"><Trash2 size={18} /></button>
                    ) : (
                      <button className="text-teal-600 hover:bg-teal-50 p-2 rounded-lg transition-colors"><ArrowRightLeft size={18} /></button>
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
export default BatchExpiryTracking;