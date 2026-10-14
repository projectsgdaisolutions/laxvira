// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Clock, Play, Square, Plus, Search, FileText, Loader2, Save } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const BillableHours = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [records, setRecords] = useState([]);
  
//   // Timer State
//   const [isTimerActive, setIsTimerActive] = useState(false);
//   const [timerSeconds, setTimerSeconds] = useState(0);
//   const [activeCase, setActiveCase] = useState("");
//   const [activeDescription, setActiveDescription] = useState("");
//   const timerRef = useRef(null);

//   // Manual Entry State
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({ case_number: "", date: "", hours: "", rate: "", description: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     fetchLoggedHours();
//     return () => clearInterval(timerRef.current);
//   }, []);

//   useEffect(() => {
//     if (isTimerActive) {
//       timerRef.current = setInterval(() => setTimerSeconds((prev) => prev + 1), 1000);
//     } else {
//       clearInterval(timerRef.current);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [isTimerActive]);

//   const fetchLoggedHours = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) { navigate("/login"); return; }

//       const res = await fetch("http://localhost:8000/api/legal/hours", {
//         headers: { "Authorization": `Bearer ${token}` }
//       });

//       if (res.ok) {
//         const json = await res.json();
//         setRecords(json.records || []);
//       }
//     } catch (err) {
//       console.error("Failed to load billable hours:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleStopTimer = async () => {
//     if (!activeCase || timerSeconds < 60) {
//       alert("Requires a Case ID and at least 1 minute of logged time to commit.");
//       return;
//     }
//     setIsTimerActive(false);
    
//     const hoursLogged = (timerSeconds / 3600).toFixed(2);
    
//     // Push active session to backend
//     await submitHourLog({
//       case_number: activeCase,
//       date: new Date().toISOString().split('T')[0],
//       hours: hoursLogged,
//       rate: "450", // Standard partner rate, typically pulled from profile/case matrix
//       description: activeDescription || "Timer Session"
//     });

//     setTimerSeconds(0);
//     setActiveCase("");
//     setActiveDescription("");
//   };

//   const submitHourLog = async (payload) => {
//     setIsSubmitting(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/legal/hours", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
//         body: JSON.stringify(payload)
//       });

//       if (res.ok) {
//         setIsModalOpen(false);
//         setFormData({ case_number: "", date: "", hours: "", rate: "", description: "" });
//         fetchLoggedHours();
//       }
//     } catch (err) {
//       console.error("Network error:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const formatTime = (totalSeconds) => {
//     const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
//     const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
//     const s = (totalSeconds % 60).toString().padStart(2, '0');
//     return `${h}:${m}:${s}`;
//   };

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7]"><Loader2 className="animate-spin text-[#8B2626]" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
//       <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
//         <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#2B2B2B] pb-6">
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <Clock size={18} className="text-[#8B2626]" />
//               <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Time Tracking</span>
//             </div>
//             <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Billable Hours Tracker</h1>
//           </div>
//           <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-white border border-[#2B2B2B] text-[#2B2B2B] px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-slate-100 transition-colors">
//             <Plus size={16} /> Manual Entry
//           </button>
//         </div>

//         {/* Live Timer Widget */}
//         <div className={`p-6 border-2 transition-colors duration-500 rounded-none flex flex-col md:flex-row items-center gap-6 justify-between ${isTimerActive ? "bg-white border-[#8B2626] shadow-lg" : "bg-white border-slate-300"}`}>
//           <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input 
//               type="text" placeholder="Case Reference ID (e.g. CV-2026-892)" 
//               value={activeCase} onChange={(e) => setActiveCase(e.target.value)}
//               disabled={isTimerActive}
//               className="border border-slate-300 p-3 text-sm rounded-none outline-none focus:border-[#2B2B2B] disabled:bg-slate-50"
//             />
//             <input 
//               type="text" placeholder="Task Description (e.g. Deposition prep)" 
//               value={activeDescription} onChange={(e) => setActiveDescription(e.target.value)}
//               disabled={isTimerActive}
//               className="border border-slate-300 p-3 text-sm rounded-none outline-none focus:border-[#2B2B2B] disabled:bg-slate-50"
//             />
//           </div>
          
//           <div className="flex items-center gap-6 shrink-0">
//             <span className={`text-4xl font-black tabular-nums font-mono ${isTimerActive ? "text-[#8B2626]" : "text-[#2B2B2B]"}`}>
//               {formatTime(timerSeconds)}
//             </span>
//             {!isTimerActive ? (
//               <button onClick={() => setIsTimerActive(true)} disabled={!activeCase} className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed">
//                 <Play size={16} /> Start
//               </button>
//             ) : (
//               <button onClick={handleStopTimer} className="flex items-center gap-2 bg-[#8B2626] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-rose-900 animate-pulse">
//                 <Square size={16} fill="currentColor" /> Stop & Log
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Historical Data Table */}
//         <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Date</th>
//                 <th className="p-4">Case Reference</th>
//                 <th className="p-4">Description</th>
//                 <th className="p-4 text-right">Hours</th>
//                 <th className="p-4 text-right">Rate</th>
//                 <th className="p-4 text-right">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {records.length === 0 ? (
//                 <tr><td colSpan={6} className="p-8 text-center text-sm font-medium text-slate-400">No hours logged for this period.</td></tr>
//               ) : (
//                 records.map((row) => (
//                   <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
//                     <td className="p-4 text-sm font-medium text-slate-700">{row.date}</td>
//                     <td className="p-4 text-sm font-bold text-[#2B2B2B]">{row.case_number}</td>
//                     <td className="p-4 text-sm text-slate-600 truncate max-w-[200px]">{row.description}</td>
//                     <td className="p-4 text-sm font-bold text-[#2B2B2B] text-right">{row.hours}h</td>
//                     <td className="p-4 text-sm text-slate-600 text-right">₹{row.rate}/hr</td>
//                     <td className="p-4 text-sm font-black text-[#8B2626] text-right">₹{(row.hours * row.rate).toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Manual Entry Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
//           <div className="bg-white border-2 border-[#2B2B2B] w-full max-w-md p-6 rounded-none shadow-2xl">
//             <h3 className="text-xl font-serif text-[#2B2B2B] mb-4">Manual Time Entry</h3>
//             <form onSubmit={(e) => { e.preventDefault(); submitHourLog(formData); }} className="space-y-4">
//               <div>
//                 <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Case Reference</label>
//                 <input type="text" required value={formData.case_number} onChange={(e) => setFormData({...formData, case_number: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Date</label>
//                   <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Hours</label>
//                   <input type="number" step="0.1" required value={formData.hours} onChange={(e) => setFormData({...formData, hours: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Description</label>
//                 <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B] h-20 resize-none" />
//               </div>
//               <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
//                 <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800">Cancel</button>
//                 <button type="submit" disabled={isSubmitting} className="bg-[#2B2B2B] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#8B2626]">
//                   {isSubmitting ? "Logging..." : "Commit Entry"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BillableHours;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Play, Square, Plus, Loader2 } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/legal/hours";

const BillableHours = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [records, setRecords] = useState([]);
  
  // Timer State
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [activeCase, setActiveCase] = useState("");
  const [activeDescription, setActiveDescription] = useState("");
  const timerRef = useRef(null);

  // Manual Entry State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ case_number: "", date: "", hours: "", rate: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchLoggedHours();
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (isTimerActive) {
      timerRef.current = setInterval(() => setTimerSeconds((prev) => prev + 1), 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerActive]);

  const fetchLoggedHours = async () => {
    try {
      const token = localStorage.getItem("token") || "dev-token"; // Bypass local dev block
      const res = await fetch(API_BASE, {
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (res.ok) {
        const json = await res.json();
        setRecords(json.records || []);
      }
    } catch (err) {
      console.error("Failed to load billable hours:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStopTimer = async () => {
    if (!activeCase || timerSeconds < 60) {
      alert("Requires a Case ID and at least 1 minute of logged time to commit.");
      return;
    }
    setIsTimerActive(false);
    
    const hoursLogged = (timerSeconds / 3600).toFixed(2);
    
    await submitHourLog({
      case_number: activeCase,
      date: new Date().toISOString().split('T')[0],
      hours: parseFloat(hoursLogged),
      rate: 450, // Standard partner rate mock
      description: activeDescription || "Timer Session"
    });

    setTimerSeconds(0);
    setActiveCase("");
    setActiveDescription("");
  };

  const submitHourLog = async (payload) => {
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({
          ...payload,
          hours: parseFloat(payload.hours),
          rate: parseFloat(payload.rate || 450)
        })
      });

      if (res.ok) {
        setIsModalOpen(false);
        setFormData({ case_number: "", date: "", hours: "", rate: "", description: "" });
        fetchLoggedHours();
      }
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7]"><Loader2 className="animate-spin text-[#8B2626]" size={32} /></div>;

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#2B2B2B] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className="text-[#8B2626]" />
              <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Time Tracking</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Billable Hours Tracker</h1>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-white border border-[#2B2B2B] text-[#2B2B2B] px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-slate-100 transition-colors">
            <Plus size={16} /> Manual Entry
          </button>
        </div>

        <div className={`p-6 border-2 transition-colors duration-500 rounded-none flex flex-col md:flex-row items-center gap-6 justify-between ${isTimerActive ? "bg-white border-[#8B2626] shadow-lg" : "bg-white border-slate-300"}`}>
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" placeholder="Case Reference ID (e.g. CV-2026-892)" 
              value={activeCase} onChange={(e) => setActiveCase(e.target.value)}
              disabled={isTimerActive}
              className="border border-slate-300 p-3 text-sm rounded-none outline-none focus:border-[#2B2B2B] disabled:bg-slate-50"
            />
            <input 
              type="text" placeholder="Task Description (e.g. Deposition prep)" 
              value={activeDescription} onChange={(e) => setActiveDescription(e.target.value)}
              disabled={isTimerActive}
              className="border border-slate-300 p-3 text-sm rounded-none outline-none focus:border-[#2B2B2B] disabled:bg-slate-50"
            />
          </div>
          
          <div className="flex items-center gap-6 shrink-0">
            <span className={`text-4xl font-black tabular-nums font-mono ${isTimerActive ? "text-[#8B2626]" : "text-[#2B2B2B]"}`}>
              {formatTime(timerSeconds)}
            </span>
            {!isTimerActive ? (
              <button onClick={() => setIsTimerActive(true)} disabled={!activeCase} className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed">
                <Play size={16} /> Start
              </button>
            ) : (
              <button onClick={handleStopTimer} className="flex items-center gap-2 bg-[#8B2626] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-rose-900 animate-pulse">
                <Square size={16} fill="currentColor" /> Stop & Log
              </button>
            )}
          </div>
        </div>

        <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
                  <th className="p-4">Date</th>
                  <th className="p-4">Case Reference</th>
                  <th className="p-4">Description</th>
                  <th className="p-4 text-right">Hours</th>
                  <th className="p-4 text-right">Rate</th>
                  <th className="p-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {records.length === 0 ? (
                  <tr><td colSpan={6} className="p-8 text-center text-sm font-medium text-slate-400">No hours logged for this period.</td></tr>
                ) : (
                  records.map((row) => (
                    <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 text-sm font-medium text-slate-700">{row.date}</td>
                      <td className="p-4 text-sm font-bold text-[#2B2B2B]">{row.case_number}</td>
                      <td className="p-4 text-sm text-slate-600 truncate max-w-[200px]">{row.description}</td>
                      <td className="p-4 text-sm font-bold text-[#2B2B2B] text-right">{row.hours}h</td>
                      <td className="p-4 text-sm text-slate-600 text-right">₹{row.rate}/hr</td>
                      <td className="p-4 text-sm font-black text-[#8B2626] text-right">₹{(row.hours * row.rate).toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#2B2B2B] w-full max-w-md p-6 rounded-none shadow-2xl">
            <h3 className="text-xl font-serif text-[#2B2B2B] mb-4">Manual Time Entry</h3>
            <form onSubmit={(e) => { e.preventDefault(); submitHourLog(formData); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Case Reference</label>
                <input type="text" required value={formData.case_number} onChange={(e) => setFormData({...formData, case_number: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Date</label>
                  <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Hours</label>
                  <input type="number" step="0.1" required value={formData.hours} onChange={(e) => setFormData({...formData, hours: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Description</label>
                <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B] h-20 resize-none" />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="bg-[#2B2B2B] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#8B2626]">
                  {isSubmitting ? "Logging..." : "Commit Entry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillableHours;