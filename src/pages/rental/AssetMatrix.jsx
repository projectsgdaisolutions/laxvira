// import React, { useState, useEffect } from "react";
// import { Calendar, Search, Plus, Map, Loader2, Clock } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const AssetMatrix = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setBookings([
//         { id: "BK-1002", asset: "JCB Backhoe Loader", client: "Highland Construction", start: "2026-09-12", end: "2026-09-18", status: "CONFIRMED" },
//         { id: "BK-1003", asset: "Yamaha 20kW Generator", client: "EventPro Ltd", start: "2026-09-15", end: "2026-09-16", status: "DISPATCHED" },
//       ]);
//       setIsLoading(false);
//     }, 400);
//   }, []);

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
//       <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.03] grayscale mix-blend-multiply">
//         <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
//               <Calendar size={28} />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <Map size={14} className="text-indigo-600" />
//                 <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Fleet Logistics</span>
//               </div>
//               <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Asset Availability Matrix</h1>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-sm">
//             <Plus size={16} /> Block Date Range
//           </button>
//         </div>

//         <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
//           <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
//             <div className="relative w-80">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//               <input type="text" placeholder="Query asset UUID or date range..." className="w-full bg-white border border-slate-200 text-sm font-medium text-slate-700 pl-9 pr-4 py-2 outline-none focus:border-indigo-500" />
//             </div>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Booking Ref</th>
//                 <th className="p-4">Asset / Equipment</th>
//                 <th className="p-4">Client</th>
//                 <th className="p-4">Timeline</th>
//                 <th className="p-4 text-right">Fulfillment</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((row) => (
//                 <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
//                   <td className="p-4 text-sm font-bold text-slate-900">{row.id}</td>
//                   <td className="p-4 text-sm font-bold text-slate-700">{row.asset}</td>
//                   <td className="p-4 text-sm font-medium text-slate-600">{row.client}</td>
//                   <td className="p-4">
//                     <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
//                       <Clock size={14} className="text-indigo-500"/>
//                       <span>{row.start} &rarr; {row.end}</span>
//                     </div>
//                   </td>
//                   <td className="p-4 text-right">
//                     <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${row.status === 'DISPATCHED' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
//                       {row.status}
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

// export default AssetMatrix;

import React, { useState, useEffect } from "react";
import { Calendar, Search, Plus, Map, Loader2, Clock, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/rental/bookings";

const AssetMatrix = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ asset: "", client: "", start: "", end: "" });

  const fetchData = async () => {
    try {
      const res = await fetch(API_BASE);
      const json = await res.json();
      setBookings(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await fetch(API_BASE, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    setIsModalOpen(false); setFormData({ asset: "", client: "", start: "", end: "" });
    fetchData();
  };

  const filtered = bookings.filter(b => b.id.toLowerCase().includes(searchQuery.toLowerCase()) || b.asset.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.03] grayscale mix-blend-multiply"><img src={logo} alt="Watermark" className="w-full h-auto object-contain" /></div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><Calendar size={28} /></div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Map size={14} className="text-indigo-600" />
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Fleet Logistics</span>
              </div>
              <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">Asset Availability Matrix</h1>
            </div>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus size={16} /> Block Date Range
          </button>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
            <div className="relative w-80">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Query asset UUID or booking ID..." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="w-full bg-white border border-slate-200 text-sm font-medium text-slate-700 pl-9 pr-4 py-2 outline-none focus:border-indigo-500" />
            </div>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Booking Ref</th>
                <th className="p-4">Asset / Equipment</th>
                <th className="p-4">Client</th>
                <th className="p-4">Timeline</th>
                <th className="p-4 text-right">Fulfillment</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-sm font-bold text-slate-900">{row.id}</td>
                  <td className="p-4 text-sm font-bold text-slate-700">{row.asset}</td>
                  <td className="p-4 text-sm font-medium text-slate-600">{row.client}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <Clock size={14} className="text-indigo-500"/>
                      <span>{row.start} &rarr; {row.end}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${row.status === 'DISPATCHED' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-800 w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-3">
              <h3 className="text-xl font-bold text-slate-900">Block New Range</h3>
              <button onClick={()=>setIsModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X size={20}/></button>
            </div>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Asset Name</label>
                <input required type="text" value={formData.asset} onChange={e=>setFormData({...formData, asset:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Client Entity</label>
                <input required type="text" value={formData.client} onChange={e=>setFormData({...formData, client:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Start Date</label>
                  <input required type="date" value={formData.start} onChange={e=>setFormData({...formData, start:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">End Date</label>
                  <input required type="date" value={formData.end} onChange={e=>setFormData({...formData, end:e.target.value})} className="w-full border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="submit" className="bg-indigo-600 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-indigo-700">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AssetMatrix;