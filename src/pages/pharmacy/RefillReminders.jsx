// import React, { useState } from "react";
// import { Clock, Send, MessageSquare, Mail, RefreshCw } from "lucide-react";

// const RefillReminders = () => {
//   const [reminders] = useState([
//     { id: 1, patient: "Louis Litt", drug: "Metformin 500mg", days_left: 3, channel: "SMS", auto: true },
//     { id: 2, patient: "Harvey Specter", drug: "Lisinopril 10mg", days_left: 1, channel: "Email", auto: false },
//   ]);

//   return (
//     <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      
//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
//               <Clock size={28} className="text-white" />
//             </div>
//             <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Refill Reminders</h1>
//           </div>
//           <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors flex items-center gap-2">
//             <RefreshCw size={16} /> Execute Pending Batch
//           </button>
//         </div>

//         <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Patient</th>
//                 <th className="p-4">Medication</th>
//                 <th className="p-4 text-center">Days Supply Left</th>
//                 <th className="p-4 text-center">Automation</th>
//                 <th className="p-4 text-right">Dispatch</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reminders.map((row) => (
//                 <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
//                   <td className="p-4 text-sm font-bold text-slate-800">{row.patient}</td>
//                   <td className="p-4 text-sm font-medium text-slate-600">{row.drug}</td>
//                   <td className="p-4 text-center"><span className="text-sm font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-lg">{row.days_left} Days</span></td>
//                   <td className="p-4 text-center">
//                     {row.auto ? <span className="text-[10px] font-bold text-emerald-600 uppercase">Enabled</span> : <span className="text-[10px] font-bold text-slate-400 uppercase">Manual</span>}
//                   </td>
//                   <td className="p-4 text-right">
//                     <button className="text-[10px] font-bold text-white uppercase tracking-widest bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center justify-end gap-2 ml-auto">
//                       {row.channel === "SMS" ? <MessageSquare size={14}/> : <Mail size={14}/>} Dispatch {row.channel}
//                     </button>
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

// export default RefillReminders;

import React, { useState, useEffect } from "react";
import { Clock, MessageSquare, Mail, RefreshCw, Loader2 } from "lucide-react";

const RefillReminders = () => {
  const [reminders, setReminders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/pharmacy/reminders");
      const json = await res.json();
      setReminders(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleDispatch = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/pharmacy/reminders/${id}/dispatch`, { method: "POST" });
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
              <Clock size={28} className="text-white" />
            </div>
            <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Refill Reminders</h1>
          </div>
          <button className="bg-teal-600 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-md hover:bg-teal-700 transition-colors flex items-center gap-2">
            <RefreshCw size={16} /> Execute Pending Batch
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Patient</th>
                <th className="p-4">Medication</th>
                <th className="p-4 text-center">Days Supply Left</th>
                <th className="p-4 text-center">Automation</th>
                <th className="p-4 text-right">Dispatch</th>
              </tr>
            </thead>
            <tbody>
              {reminders.map((row) => (
                <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
                  <td className="p-4 text-sm font-bold text-slate-800">{row.patient}</td>
                  <td className="p-4 text-sm font-medium text-slate-600">{row.drug}</td>
                  <td className="p-4 text-center"><span className="text-sm font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-lg">{row.days_left} Days</span></td>
                  <td className="p-4 text-center">
                    {row.auto ? <span className="text-[10px] font-bold text-emerald-600 uppercase">Enabled</span> : <span className="text-[10px] font-bold text-slate-400 uppercase">Manual</span>}
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleDispatch(row.id)} className="text-[10px] font-bold text-white uppercase tracking-widest bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center justify-end gap-2 ml-auto">
                      {row.channel === "SMS" ? <MessageSquare size={14}/> : <Mail size={14}/>} Dispatch {row.channel}
                    </button>
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
export default RefillReminders;