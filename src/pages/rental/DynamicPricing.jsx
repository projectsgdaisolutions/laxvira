// // import React, { useState } from "react";
// // import { TrendingUp, Settings, Plus, Percent } from "lucide-react";

// // const DynamicPricing = () => {
// //   const [rules] = useState([
// //     { id: 1, name: "Weekend Surge", condition: "Day IN (Sat, Sun)", multiplier: "+15%", status: "ACTIVE" },
// //     { id: 2, name: "Long-Term Lease Discount", condition: "Duration > 14 Days", multiplier: "-20%", status: "ACTIVE" },
// //     { id: 3, name: "High Demand Threshold", condition: "Fleet Utilization > 80%", multiplier: "+25%", status: "INACTIVE" },
// //   ]);

// //   return (
// //     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
// //       <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

// //       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
// //         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
// //           <div className="flex items-center gap-4">
// //             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><TrendingUp size={28} /></div>
// //             <div>
// //               <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Dynamic Pricing Engine</h1>
// //             </div>
// //           </div>
// //           <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-sm">
// //             <Plus size={16} /> New Algorithm Rule
// //           </button>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {rules.map((rule) => (
// //             <div key={rule.id} className="bg-white border border-slate-200 p-6 shadow-sm hover:border-indigo-400 transition-colors flex flex-col justify-between">
// //               <div>
// //                 <div className="flex justify-between items-start mb-4">
// //                   <div className={`p-2 rounded-full ${rule.multiplier.startsWith('+') ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
// //                     <Percent size={20} />
// //                   </div>
// //                   <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 ${rule.status === 'ACTIVE' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>{rule.status}</span>
// //                 </div>
// //                 <h3 className="text-lg font-bold text-slate-900 mb-1">{rule.name}</h3>
// //                 <p className="text-xs font-medium text-slate-500 font-mono bg-slate-50 p-2 border border-slate-100 mb-4">{rule.condition}</p>
// //               </div>
// //               <div className="flex justify-between items-center border-t border-slate-100 pt-4">
// //                 <span className="text-xs font-bold text-slate-400 uppercase">Multiplier Rate</span>
// //                 <span className={`text-lg font-black ${rule.multiplier.startsWith('+') ? 'text-rose-600' : 'text-emerald-600'}`}>{rule.multiplier}</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DynamicPricing;

// import React, { useState, useEffect } from "react";
// import { TrendingUp, Plus, Percent, Loader2, X } from "lucide-react";

// const DynamicPricing = () => {
//   const [rules, setRules] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", condition: "", multiplier: "", status: "ACTIVE" });

//   const fetchData = async () => {
//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/rental/pricing");
//       const json = await res.json();
//       setRules(json.records || []);
//     } catch (err) { console.error(err); } 
//     finally { setIsLoading(false); }
//   };

//   useEffect(() => { fetchData(); }, []);

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     await fetch("http://127.0.0.1:8000/api/rental/pricing", {
//       method: "POST", headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData)
//     });
//     setIsModalOpen(false); setFormData({ name: "", condition: "", multiplier: "", status: "ACTIVE" });
//     fetchData();
//   };

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><TrendingUp size={28} /></div>
//             <div><h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Dynamic Pricing Engine</h1></div>
//           </div>
//           <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-sm">
//             <Plus size={16} /> New Algorithm Rule
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {rules.map((rule) => (
//             <div key={rule.id} className="bg-white border border-slate-200 p-6 shadow-sm hover:border-indigo-400 transition-colors flex flex-col justify-between">
//               <div>
//                 <div className="flex justify-between items-start mb-4">
//                   <div className={`p-2 rounded-full ${rule.multiplier.startsWith('+') ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
//                     <Percent size={20} />
//                   </div>
//                   <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 ${rule.status === 'ACTIVE' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>{rule.status}</span>
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-1">{rule.name}</h3>
//                 <p className="text-xs font-medium text-slate-500 font-mono bg-slate-50 p-2 border border-slate-100 mb-4">{rule.condition}</p>
//               </div>
//               <div className="flex justify-between items-center border-t border-slate-100 pt-4">
//                 <span className="text-xs font-bold text-slate-400 uppercase">Multiplier Rate</span>
//                 <span className={`text-lg font-black ${rule.multiplier.startsWith('+') ? 'text-rose-600' : 'text-emerald-600'}`}>{rule.multiplier}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4">
//           <div className="bg-white border-2 border-slate-800 w-full max-w-md p-6 shadow-2xl">
//             <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-3">
//               <h3 className="text-xl font-bold text-slate-900">Configure Rule Algorithm</h3>
//               <button onClick={()=>setIsModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X size={20}/></button>
//             </div>
//             <form onSubmit={handleCreate} className="space-y-4">
//               <div>
//                 <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Rule Name</label>
//                 <input required type="text" placeholder="e.g. Holiday Surge" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500" />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Trigger Condition Expression</label>
//                 <input required type="text" placeholder="e.g. Day IN (Sat, Sun)" value={formData.condition} onChange={e=>setFormData({...formData, condition:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500 font-mono" />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Multiplier Rate</label>
//                   <input required type="text" placeholder="+15% or -10%" value={formData.multiplier} onChange={e=>setFormData({...formData, multiplier:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500" />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Initial Status</label>
//                   <select value={formData.status} onChange={e=>setFormData({...formData, status:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500 bg-white">
//                     <option value="ACTIVE">ACTIVE</option>
//                     <option value="INACTIVE">INACTIVE</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="flex justify-end gap-3 pt-4">
//                 <button type="submit" className="bg-indigo-600 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-indigo-700">Deploy Rule</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default DynamicPricing;

import React, { useState, useEffect } from "react";
import { TrendingUp, Plus, Percent, Loader2, X } from "lucide-react";

const DynamicPricing = () => {
  const [rules, setRules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", condition: "", multiplier: "", status: "ACTIVE" });

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/rental/pricing");
      const json = await res.json();
      setRules(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8000/api/rental/pricing", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    setIsModalOpen(false); setFormData({ name: "", condition: "", multiplier: "", status: "ACTIVE" });
    fetchData();
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><TrendingUp size={28} /></div>
            <div><h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Dynamic Pricing Engine</h1></div>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus size={16} /> New Algorithm Rule
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rules.map((rule) => (
            <div key={rule.id} className="bg-white border border-slate-200 p-6 shadow-sm hover:border-indigo-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-full ${rule.multiplier.startsWith('+') ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    <Percent size={20} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 ${rule.status === 'ACTIVE' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>{rule.status}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{rule.name}</h3>
                <p className="text-xs font-medium text-slate-500 font-mono bg-slate-50 p-2 border border-slate-100 mb-4">{rule.condition}</p>
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                <span className="text-xs font-bold text-slate-400 uppercase">Multiplier Rate</span>
                <span className={`text-lg font-black ${rule.multiplier.startsWith('+') ? 'text-rose-600' : 'text-emerald-600'}`}>{rule.multiplier}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-800 w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-3">
              <h3 className="text-xl font-bold text-slate-900">Configure Rule Algorithm</h3>
              <button onClick={()=>setIsModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X size={20}/></button>
            </div>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Rule Name</label>
                <input required type="text" placeholder="e.g. Holiday Surge" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Trigger Condition Expression</label>
                <input required type="text" placeholder="e.g. Day IN (Sat, Sun)" value={formData.condition} onChange={e=>setFormData({...formData, condition:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500 font-mono" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Multiplier Rate</label>
                  <input required type="text" placeholder="+15% or -10%" value={formData.multiplier} onChange={e=>setFormData({...formData, multiplier:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Initial Status</label>
                  <select value={formData.status} onChange={e=>setFormData({...formData, status:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500 bg-white">
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="submit" className="bg-indigo-600 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-indigo-700">Deploy Rule</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default DynamicPricing;