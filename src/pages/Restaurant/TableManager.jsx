// import React, { useState, useEffect } from "react";
// import { LayoutGrid, Users, Clock, Loader2, CheckCircle2 } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const TableManager = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [tables, setTables] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setTables([
//         { id: "T1", capacity: 2, status: "OCCUPIED", seated_at: "18:30", guest_count: 2 },
//         { id: "T2", capacity: 4, status: "AVAILABLE", seated_at: null, guest_count: 0 },
//         { id: "T3", capacity: 4, status: "RESERVED", seated_at: "19:00", guest_count: 4 },
//         { id: "T4", capacity: 6, status: "OCCUPIED", seated_at: "17:45", guest_count: 5 },
//         { id: "T5", capacity: 2, status: "AVAILABLE", seated_at: null, guest_count: 0 },
//         { id: "T6", capacity: 8, status: "AVAILABLE", seated_at: null, guest_count: 0 },
//       ]);
//       setIsLoading(false);
//     }, 400);
//   }, []);

//   const getTableStyle = (status) => {
//     if (status === "OCCUPIED") return "bg-rose-500 text-white shadow-rose-500/40 border-rose-600";
//     if (status === "RESERVED") return "bg-orange-400 text-white shadow-orange-400/40 border-orange-500";
//     return "bg-white/80 text-slate-800 shadow-slate-200/50 border-white hover:bg-white";
//   };

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-orange-500" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
//       <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0"></div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0 text-white">
//               <LayoutGrid size={28} />
//             </div>
//             <div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Table Manager</h1>
//               <div className="flex gap-4 mt-2 text-xs font-bold text-slate-600 uppercase tracking-widest">
//                 <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white border border-slate-300"></span> Available</span>
//                 <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Occupied</span>
//                 <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Reserved</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 min-h-[600px]">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {tables.map((table) => (
//               <div key={table.id} className={`relative flex flex-col items-center justify-center h-40 rounded-3xl border-2 shadow-lg transition-all cursor-pointer ${getTableStyle(table.status)}`}>
//                 <span className="text-3xl font-black mb-2">{table.id}</span>
//                 <div className="flex items-center gap-3 text-sm font-bold opacity-90">
//                   <span className="flex items-center gap-1"><Users size={14} /> {table.capacity}</span>
//                   {table.seated_at && <span className="flex items-center gap-1"><Clock size={14} /> {table.seated_at}</span>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableManager;

import React, { useState, useEffect } from "react";
import { LayoutGrid, Users, Clock, Loader2 } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/restaurant/tables";

const TableManager = () => {
  const [tables, setTables] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(API_BASE);
      const json = await res.json();
      setTables(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleToggle = async (id) => {
    await fetch(`${API_BASE}/${id}/toggle`, { method: "PATCH" });
    fetchData();
  };

  const getTableStyle = (status) => {
    if (status === "OCCUPIED") return "bg-rose-500 text-white shadow-rose-500/40 border-rose-600";
    if (status === "RESERVED") return "bg-orange-400 text-white shadow-orange-400/40 border-orange-500";
    return "bg-white/80 text-slate-800 shadow-slate-200/50 border-white hover:bg-white";
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-orange-500" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0"></div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0 text-white">
              <LayoutGrid size={28} />
            </div>
            <div>
              <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Table Manager</h1>
              <div className="flex gap-4 mt-2 text-xs font-bold text-slate-600 uppercase tracking-widest">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white border border-slate-300"></span> Available</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Occupied</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Reserved</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 min-h-[600px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tables.map((table) => (
              <div onClick={() => handleToggle(table.id)} key={table.id} className={`relative flex flex-col items-center justify-center h-40 rounded-3xl border-2 shadow-lg transition-all cursor-pointer hover:scale-[1.02] ${getTableStyle(table.status)}`}>
                <span className="text-3xl font-black mb-2">{table.id}</span>
                <div className="flex items-center gap-3 text-sm font-bold opacity-90">
                  <span className="flex items-center gap-1"><Users size={14} /> {table.guest_count > 0 ? table.guest_count : table.capacity}</span>
                  {table.seated_at && <span className="flex items-center gap-1"><Clock size={14} /> {table.seated_at}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableManager;