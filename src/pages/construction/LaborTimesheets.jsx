// import React, { useState, useEffect } from "react";
// import { Users, Clock, Search, CheckCircle, Calculator, Plus, Loader2 } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const LaborTimesheets = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [timesheets, setTimesheets] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setTimesheets([
//         { id: "WRK-01", name: "Mike Alvarez", trade: "Master Electrician", project: "Highland Commercial", hours: 42.5, rate: 1250, overtime: 4 },
//         { id: "WRK-02", name: "David Chen", trade: "Concrete Foreman", project: "Sector 4 Residential", hours: 40, rate: 950, overtime: 0 },
//         { id: "WRK-03", name: "Sarah Jenkins", trade: "Crane Operator", project: "Highland Commercial", hours: 38, rate: 1100, overtime: 2 },
//       ]);
//       setIsLoading(false);
//     }, 400);
//   }, []);

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN')}`;

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-stone-100"><Loader2 className="animate-spin text-amber-500" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-stone-100 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
//       <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.03] grayscale mix-blend-multiply">
//         <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-stone-900 border-b-4 border-amber-500 px-6 py-5 rounded-sm shadow-xl">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 bg-amber-500 rounded-sm flex items-center justify-center shadow-inner border-2 border-amber-600 shrink-0 text-stone-900">
//               <Clock size={30} strokeWidth={2.5} />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <Users size={14} className="text-amber-500" />
//                 <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Site Personnel</span>
//               </div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Labor & Timesheets</h1>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 bg-stone-800 text-white px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-700 hover:bg-amber-500 hover:text-stone-900 transition-colors">
//             <Calculator size={16} /> Process Payroll Batch
//           </button>
//         </div>

//         <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
//           <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
//             <div className="relative w-72 border-2 border-stone-200">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
//               <input 
//                 type="text" placeholder="Filter personnel or trade..." 
//                 className="w-full bg-white text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500"
//               />
//             </div>
//             <button className="text-xs font-black text-stone-900 uppercase tracking-wider flex items-center gap-2 hover:text-amber-600 transition-colors">
//               <Plus size={14} /> Log Shift Override
//             </button>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Personnel</th>
//                 <th className="p-4">Project Allocation</th>
//                 <th className="p-4 text-right">Standard Hrs</th>
//                 <th className="p-4 text-right">Overtime Hrs</th>
//                 <th className="p-4 text-right">Calculated Wage</th>
//               </tr>
//             </thead>
//             <tbody>
//               {timesheets.map((row) => {
//                 const standardPay = row.hours * row.rate;
//                 const overtimePay = row.overtime * (row.rate * 1.5);
//                 const total = standardPay + overtimePay;

//                 return (
//                   <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
//                     <td className="p-4">
//                       <p className="text-sm font-black text-stone-900 uppercase">{row.name}</p>
//                       <p className="text-[10px] font-bold text-stone-500 uppercase">{row.trade} • {row.id}</p>
//                     </td>
//                     <td className="p-4 text-sm font-bold text-stone-700 uppercase">{row.project}</td>
//                     <td className="p-4 text-right text-sm font-black text-stone-900">{row.hours}</td>
//                     <td className="p-4 text-right text-sm font-black text-rose-600">{row.overtime > 0 ? row.overtime : "-"}</td>
//                     <td className="p-4 text-right text-sm font-black text-emerald-700">{formatCurr(total)}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaborTimesheets;

import React, { useState, useEffect } from "react";
import { Users, Clock, Search, Calculator, Plus, Loader2, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/construction/assets/timesheets";

const LaborTimesheets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [timesheets, setTimesheets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    trade: "",
    project: "",
    hours: 40,
    rate: 0,
    overtime: 0
  });

  const fetchTimesheets = async () => {
    try {
      const url = searchQuery.trim() 
        ? `${API_BASE}?q=${encodeURIComponent(searchQuery)}` 
        : API_BASE;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to load timesheets");
      const data = await res.json();
      setTimesheets(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTimesheets();
  }, [searchQuery]);

  const handleLogShift = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          hours: parseFloat(formData.hours) || 0,
          rate: parseFloat(formData.rate) || 0,
          overtime: parseFloat(formData.overtime) || 0,
        }),
      });
      if (!res.ok) throw new Error("Failed to log shift");
      
      setIsModalOpen(false);
      setFormData({ name: "", trade: "", project: "", hours: 40, rate: 0, overtime: 0 });
      fetchTimesheets();
    } catch (err) {
      console.error(err);
      alert("Failed to record shift.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProcessPayroll = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch(`${API_BASE}/process`, { method: "POST" });
      if (!res.ok) throw new Error("Batch processing failed");
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Payroll processing error.");
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN')}`;

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-stone-100"><Loader2 className="animate-spin text-amber-500" size={32} /></div>;

  return (
    <div className="min-h-screen bg-stone-100 font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-stone-900 border-b-4 border-amber-500 px-6 py-5 rounded-sm shadow-xl">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 bg-amber-500 rounded-sm flex items-center justify-center shadow-inner border-2 border-amber-600 shrink-0 text-stone-900">
              <Clock size={30} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Users size={14} className="text-amber-500" />
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Site Personnel</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Labor & Timesheets</h1>
            </div>
          </div>
          <button 
            onClick={handleProcessPayroll}
            disabled={isProcessing}
            className="flex items-center justify-center min-w-[220px] gap-2 bg-stone-800 text-white px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-700 hover:bg-amber-500 hover:text-stone-900 transition-colors disabled:opacity-50"
          >
            {isProcessing ? <Loader2 size={16} className="animate-spin" /> : <Calculator size={16} />} 
            {isProcessing ? "Processing Batch..." : "Process Payroll Batch"}
          </button>
        </div>

        <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
          <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
            <div className="relative w-full sm:w-72 border-2 border-stone-200 bg-white">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input 
                type="text" placeholder="Filter personnel or trade..." 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500"
              />
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-black text-stone-900 uppercase tracking-wider flex items-center gap-2 hover:text-amber-600 transition-colors shrink-0 ml-4"
            >
              <Plus size={14} /> Log Shift Override
            </button>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
                  <th className="p-4">Personnel</th>
                  <th className="p-4">Project Allocation</th>
                  <th className="p-4 text-right">Standard Hrs</th>
                  <th className="p-4 text-right">Overtime Hrs</th>
                  <th className="p-4 text-right">Calculated Wage</th>
                </tr>
              </thead>
              <tbody>
                {timesheets.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-sm font-bold text-stone-500 uppercase">
                      No personnel records found.
                    </td>
                  </tr>
                ) : (
                  timesheets.map((row) => {
                    const standardPay = row.hours * row.rate;
                    const overtimePay = row.overtime * (row.rate * 1.5);
                    const total = standardPay + overtimePay;

                    return (
                      <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                        <td className="p-4">
                          <p className="text-sm font-black text-stone-900 uppercase">{row.name}</p>
                          <p className="text-[10px] font-bold text-stone-500 uppercase">{row.trade} • {row.id}</p>
                        </td>
                        <td className="p-4 text-sm font-bold text-stone-700 uppercase">{row.project}</td>
                        <td className="p-4 text-right text-sm font-black text-stone-900">{row.hours}</td>
                        <td className="p-4 text-right text-sm font-black text-rose-600">{row.overtime > 0 ? row.overtime : "-"}</td>
                        <td className="p-4 text-right text-sm font-black text-emerald-700">{formatCurr(total)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4">
          <div className="bg-white border-4 border-stone-900 rounded-sm w-full max-w-lg shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b-2 border-stone-200 pb-3 mb-4">
              <h2 className="text-lg font-black text-stone-900 uppercase tracking-tight">Log Shift Override</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-900">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleLogShift} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Personnel Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Trade / Role</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Master Electrician"
                    value={formData.trade}
                    onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Project Allocation</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sector 4 Residential"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Standard Hrs</label>
                  <input
                    required
                    type="number"
                    min="0"
                    step="0.5"
                    value={formData.hours}
                    onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Overtime Hrs</label>
                  <input
                    required
                    type="number"
                    min="0"
                    step="0.5"
                    value={formData.overtime}
                    onChange={(e) => setFormData({ ...formData, overtime: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Base Rate (₹)</label>
                  <input
                    required
                    type="number"
                    min="0"
                    value={formData.rate}
                    onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t-2 border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border-2 border-stone-300 text-xs font-black uppercase text-stone-700 hover:bg-stone-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-amber-500 text-stone-900 border-2 border-stone-900 text-xs font-black uppercase tracking-wider hover:bg-amber-400 disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : "Record Shift"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaborTimesheets;