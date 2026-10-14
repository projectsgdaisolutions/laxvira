// import React, { useState } from "react";
// import { Store, Activity, CheckCircle, Clock } from "lucide-react";

// const OnlineAggregators = () => {
//   const [orders] = useState([
//     { id: "SWG-89912", platform: "Swiggy", time: "10:41 AM", items: 4, value: 1250, status: "ACCEPTED" },
//     { id: "ZOM-44123", platform: "Zomato", time: "10:45 AM", items: 2, value: 650, status: "PENDING" },
//   ]);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      
//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg text-white shrink-0"><Store size={28} /></div>
//             <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Aggregator Gateway</h1>
//           </div>
//           <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-bold"><Activity size={16}/> API Online</div>
//         </div>

//         <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm rounded-3xl overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-white/40 border-b border-white/50 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Platform / ID</th>
//                 <th className="p-4">Timestamp</th>
//                 <th className="p-4 text-right">Items</th>
//                 <th className="p-4 text-right">Value</th>
//                 <th className="p-4 text-right">Sync Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((row) => (
//                 <tr key={row.id} className="border-b border-white/40 hover:bg-white/80 transition-colors">
//                   <td className="p-4">
//                     <p className={`text-sm font-black ${row.platform === 'Swiggy' ? 'text-orange-600' : 'text-red-600'}`}>{row.platform}</p>
//                     <p className="text-[10px] font-bold text-slate-500 uppercase">{row.id}</p>
//                   </td>
//                   <td className="p-4 text-sm font-bold text-slate-700 flex items-center gap-1 mt-2"><Clock size={14}/> {row.time}</td>
//                   <td className="p-4 text-sm font-black text-slate-900 text-right">{row.items}</td>
//                   <td className="p-4 text-sm font-black text-slate-900 text-right">₹{row.value}</td>
//                   <td className="p-4 text-right">
//                     {row.status === "ACCEPTED" ? (
//                       <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase"><CheckCircle size={12}/> Auto-Accepted</span>
//                     ) : (
//                       <button className="bg-slate-900 text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase hover:bg-orange-500 transition-colors">Accept Order</button>
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

// export default OnlineAggregators;

import React, { useState, useEffect } from "react";
import { Store, Activity, CheckCircle, Clock, Loader2 } from "lucide-react";

const API_BASE = "http://127.0.0.1:8000/api/restaurant/aggregators";

const OnlineAggregators = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(API_BASE);
      const json = await res.json();
      setOrders(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAccept = async (id) => {
    await fetch(`${API_BASE}/${id}/accept`, { method: "PATCH" });
    fetchData();
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-orange-500" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg text-white shrink-0"><Store size={28} /></div>
            <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Aggregator Gateway</h1>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-bold"><Activity size={16}/> API Online</div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm rounded-3xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/40 border-b border-white/50 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Platform / ID</th>
                <th className="p-4">Timestamp</th>
                <th className="p-4 text-right">Items</th>
                <th className="p-4 text-right">Value</th>
                <th className="p-4 text-right">Sync Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((row) => (
                <tr key={row.id} className="border-b border-white/40 hover:bg-white/80 transition-colors">
                  <td className="p-4">
                    <p className={`text-sm font-black ${row.platform === 'Swiggy' ? 'text-orange-600' : 'text-red-600'}`}>{row.platform}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">{row.id}</p>
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-700 flex items-center gap-1 mt-2"><Clock size={14}/> {row.time}</td>
                  <td className="p-4 text-sm font-black text-slate-900 text-right">{row.items}</td>
                  <td className="p-4 text-sm font-black text-slate-900 text-right">₹{row.value}</td>
                  <td className="p-4 text-right">
                    {row.status === "ACCEPTED" ? (
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase"><CheckCircle size={12}/> Auto-Accepted</span>
                    ) : (
                      <button onClick={() => handleAccept(row.id)} className="bg-slate-900 text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase hover:bg-orange-500 transition-colors">Accept Order</button>
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
export default OnlineAggregators;