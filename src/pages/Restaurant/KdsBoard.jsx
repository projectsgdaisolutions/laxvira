// import React, { useState, useEffect } from "react";
// import { ChefHat, Clock, Loader2, CheckCircle } from "lucide-react";

// const KdsBoard = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setTickets([
//         { id: "ORD-101", table: "T4", status: "NEW", items: ["2x Truffle Risotto", "1x Steak Frites (Med Rare)"], time: "12m", type: "DINE-IN" },
//         { id: "ORD-102", table: "UberEats", status: "COOKING", items: ["1x Margherita Pizza", "2x Garlic Bread"], time: "24m", type: "DELIVERY" },
//       ]);
//       setIsLoading(false);
//     }, 400);
//   }, []);

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-orange-500" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
//       <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0"></div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 space-y-6">
//         <div className="flex items-center justify-between bg-white/60 backdrop-blur-xl border border-white/80 p-4 rounded-2xl shadow-sm">
//           <div className="flex items-center gap-3">
//             <ChefHat size={24} className="text-orange-500" />
//             <h1 className="text-2xl font-black text-slate-900 tracking-tight">Kitchen Display System</h1>
//           </div>
//           <div className="flex gap-2">
//             <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-lg animate-pulse">Live</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[75vh]">
//           {/* New Column */}
//           <div className="bg-white/40 backdrop-blur-md rounded-3xl p-4 border border-white/60 overflow-y-auto">
//             <h3 className="font-black text-slate-900 mb-4 sticky top-0 bg-white/60 backdrop-blur-xl p-3 rounded-xl shadow-sm">NEW TICKETS</h3>
//             {tickets.filter(t => t.status === "NEW").map(ticket => (
//               <div key={ticket.id} className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-l-rose-500 mb-4 cursor-pointer hover:shadow-md transition-all">
//                 <div className="flex justify-between items-start mb-3">
//                   <div>
//                     <span className="font-black text-lg text-slate-900">{ticket.table}</span>
//                     <p className="text-[10px] font-bold text-slate-400 uppercase">{ticket.type} • {ticket.id}</p>
//                   </div>
//                   <span className="flex items-center gap-1 text-xs font-bold text-rose-500"><Clock size={12}/> {ticket.time}</span>
//                 </div>
//                 <ul className="space-y-2 text-sm font-bold text-slate-700 mb-4">
//                   {ticket.items.map((item, i) => <li key={i} className="border-b pb-1">{item}</li>)}
//                 </ul>
//                 <button className="w-full bg-slate-900 text-white font-black py-2 rounded-xl hover:bg-orange-500 transition-colors">Start Prep</button>
//               </div>
//             ))}
//           </div>

//           {/* Cooking Column */}
//           <div className="bg-white/40 backdrop-blur-md rounded-3xl p-4 border border-white/60 overflow-y-auto">
//             <h3 className="font-black text-slate-900 mb-4 sticky top-0 bg-white/60 backdrop-blur-xl p-3 rounded-xl shadow-sm">COOKING</h3>
//             {tickets.filter(t => t.status === "COOKING").map(ticket => (
//               <div key={ticket.id} className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-l-orange-400 mb-4">
//                 <div className="flex justify-between items-start mb-3">
//                   <div>
//                     <span className="font-black text-lg text-slate-900">{ticket.table}</span>
//                   </div>
//                   <span className="flex items-center gap-1 text-xs font-bold text-orange-500"><Clock size={12}/> {ticket.time}</span>
//                 </div>
//                 <ul className="space-y-2 text-sm font-bold text-slate-700 mb-4">
//                   {ticket.items.map((item, i) => <li key={i} className="border-b pb-1 line-through opacity-50">{item}</li>)}
//                 </ul>
//                 <button className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-black py-2 rounded-xl shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2">
//                   <CheckCircle size={16}/> Expo Ready
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Ready Column */}
//           <div className="bg-white/40 backdrop-blur-md rounded-3xl p-4 border border-white/60 overflow-y-auto">
//             <h3 className="font-black text-slate-900 mb-4 sticky top-0 bg-white/60 backdrop-blur-xl p-3 rounded-xl shadow-sm">EXPO READY</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KdsBoard;

import React, { useState, useEffect } from "react";
import { ChefHat, Clock, Loader2, CheckCircle, Flame } from "lucide-react";

const API_BASE = "http://127.0.0.1:8000/api/restaurant/kds";

const KdsBoard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(API_BASE);
      const json = await res.json();
      setTickets(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { 
    fetchData(); 
    const interval = setInterval(fetchData, 10000); // Polling for new kitchen orders
    return () => clearInterval(interval);
  }, []);

  const handleAdvance = async (id) => {
    await fetch(`${API_BASE}/${id}/advance`, { method: "PATCH" });
    fetchData();
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-orange-500" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0"></div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 space-y-6">
        <div className="flex items-center justify-between bg-white/60 backdrop-blur-xl border border-white/80 p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <ChefHat size={24} className="text-orange-500" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Kitchen Display System</h1>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-lg animate-pulse flex items-center gap-1"><Flame size={12}/> Live Sync</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[75vh]">
          {/* New Column */}
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-4 border border-white/60 overflow-y-auto">
            <h3 className="font-black text-slate-900 mb-4 sticky top-0 bg-white/60 backdrop-blur-xl p-3 rounded-xl shadow-sm">NEW TICKETS</h3>
            {tickets.filter(t => t.status === "NEW").map(ticket => (
              <div key={ticket.id} className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-l-rose-500 mb-4 cursor-pointer hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-black text-lg text-slate-900">{ticket.table}</span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{ticket.type} • {ticket.id}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-rose-500"><Clock size={12}/> {ticket.time}</span>
                </div>
                <ul className="space-y-2 text-sm font-bold text-slate-700 mb-4">
                  {ticket.items.map((item, i) => <li key={i} className="border-b pb-1">{item}</li>)}
                </ul>
                <button onClick={() => handleAdvance(ticket.id)} className="w-full bg-slate-900 text-white font-black py-2 rounded-xl hover:bg-orange-500 transition-colors">Start Prep</button>
              </div>
            ))}
          </div>

          {/* Cooking Column */}
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-4 border border-white/60 overflow-y-auto">
            <h3 className="font-black text-slate-900 mb-4 sticky top-0 bg-white/60 backdrop-blur-xl p-3 rounded-xl shadow-sm">COOKING</h3>
            {tickets.filter(t => t.status === "COOKING").map(ticket => (
              <div key={ticket.id} className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-l-orange-400 mb-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-black text-lg text-slate-900">{ticket.table}</span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{ticket.type} • {ticket.id}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-orange-500"><Clock size={12}/> {ticket.time}</span>
                </div>
                <ul className="space-y-2 text-sm font-bold text-slate-700 mb-4">
                  {ticket.items.map((item, i) => <li key={i} className="border-b pb-1 opacity-80">{item}</li>)}
                </ul>
                <button onClick={() => handleAdvance(ticket.id)} className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-black py-2 rounded-xl shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2">
                  <CheckCircle size={16}/> Expo Ready
                </button>
              </div>
            ))}
          </div>

          {/* Ready Column */}
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-4 border border-white/60 overflow-y-auto">
            <h3 className="font-black text-slate-900 mb-4 sticky top-0 bg-white/60 backdrop-blur-xl p-3 rounded-xl shadow-sm">EXPO READY</h3>
            {tickets.filter(t => t.status === "READY").map(ticket => (
              <div key={ticket.id} className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-l-emerald-500 mb-4 opacity-75">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-black text-lg text-slate-900">{ticket.table}</span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{ticket.type} • {ticket.id}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm font-bold text-slate-700 mb-4">
                  {ticket.items.map((item, i) => <li key={i} className="border-b pb-1 line-through">{item}</li>)}
                </ul>
                <button onClick={() => handleAdvance(ticket.id)} className="w-full bg-slate-200 text-slate-600 font-black py-2 rounded-xl hover:bg-slate-300 transition-colors">Clear Ticket</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default KdsBoard;