// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Calendar, Plus, Search, Download, Clock, MapPin, Loader2, AlertCircle, Scale, Mail } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const CourtScheduling = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [schedules, setSchedules] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchSchedules();
//   }, []);

//   const fetchSchedules = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) { navigate("/login"); return; }
      
//       const res = await fetch("http://localhost:8000/api/legal/calendar", {
//         headers: { "Authorization": `Bearer ${token}` }
//       });
      
//       if (res.ok) {
//         const json = await res.json();
//         setSchedules(json.records || []);
//       }
//     } catch (err) {
//       console.error("Failed to load schedule:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const generateICS = (event) => {
//     // Standard ICS generation logic
//     const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.hearing_type} - ${event.case_number}\nDTSTART:${event.date.replace(/[-:]/g, '')}T${event.time.replace(':', '')}00Z\nLOCATION:${event.location}\nEND:VEVENT\nEND:VCALENDAR`;
//     const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(blob);
//     link.setAttribute('download', `${event.case_number}_hearing.ics`);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
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
//               <Calendar size={18} className="text-[#8B2626]" />
//               <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Docket Management</span>
//             </div>
//             <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Court Date Scheduling</h1>
//           </div>
//           <div className="flex gap-3">
//             <button className="flex items-center gap-2 bg-white border border-[#2B2B2B] text-[#2B2B2B] px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-slate-100 transition-colors shadow-sm">
//               <Mail size={16} /> Sync Outlook
//             </button>
//             <button className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md">
//               <Plus size={16} /> Docket Entry
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          
//           {/* Main Timeline View */}
//           <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
//             <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
//               <div className="relative w-72">
//                 <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//                 <input 
//                   type="text" placeholder="Search docket or judge..." 
//                   value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
//                 />
//               </div>
//             </div>

//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
//                   <th className="p-4">Date & Time</th>
//                   <th className="p-4">Matter Reference</th>
//                   <th className="p-4">Proceeding Type</th>
//                   <th className="p-4">Venue</th>
//                   <th className="p-4 text-right">Export</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {schedules.length === 0 ? (
//                   <tr><td colSpan={5} className="p-8 text-center text-sm text-slate-500">No upcoming docket entries.</td></tr>
//                 ) : (
//                   schedules.map((row) => (
//                     <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
//                       <td className="p-4">
//                         <p className="text-sm font-bold text-[#2B2B2B] flex items-center gap-2">
//                           <Calendar size={14} className="text-slate-400"/> {row.date}
//                         </p>
//                         <p className="text-xs font-medium text-[#8B2626] mt-1 flex items-center gap-2">
//                           <Clock size={14} /> {row.time}
//                         </p>
//                       </td>
//                       <td className="p-4">
//                         <p className="text-sm font-bold text-slate-800">{row.case_number}</p>
//                         <p className="text-xs text-slate-500 mt-0.5">{row.client_name}</p>
//                       </td>
//                       <td className="p-4 text-sm font-medium text-slate-700">{row.hearing_type}</td>
//                       <td className="p-4">
//                         <p className="text-sm text-slate-600 flex items-center gap-1"><MapPin size={14}/> {row.location}</p>
//                         <p className="text-[10px] text-slate-400 uppercase mt-1">Hon. {row.judge}</p>
//                       </td>
//                       <td className="p-4 text-right">
//                         <button onClick={() => generateICS(row)} className="text-slate-500 hover:text-[#2B2B2B] transition-colors p-2 border border-transparent hover:border-slate-300">
//                           <Download size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Critical Deadlines Sidebar */}
//           <div className="space-y-6">
//             <div className="bg-[#2B2B2B] p-6 text-white border-t-4 border-[#8B2626]">
//               <h3 className="font-serif text-xl mb-4 flex items-center gap-2"><AlertCircle size={20} className="text-[#8B2626]" /> Urgent Deadlines</h3>
//               <div className="space-y-4">
//                 <div className="bg-white/10 p-4 border border-white/20">
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300">Due in 48 Hours</span>
//                   </div>
//                   <p className="font-bold text-sm">Motion for Summary Judgment</p>
//                   <p className="text-xs text-slate-300 mt-1">CV-2026-104 • Pearson v. Specter</p>
//                 </div>
//                 <div className="bg-white/10 p-4 border border-white/20">
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">Due in 4 Days</span>
//                   </div>
//                   <p className="font-bold text-sm">Discovery Production</p>
//                   <p className="text-xs text-slate-300 mt-1">CV-2026-892 • Zane LLC</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourtScheduling;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Plus, Search, Download, Clock, MapPin, Loader2, AlertCircle, Mail, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/legal/calendar";

const CourtScheduling = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [schedules, setSchedules] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    case_number: "",
    client_name: "",
    hearing_type: "",
    location: "",
    judge: ""
  });

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      
      if (res.ok) {
        const json = await res.json();
        setSchedules(json.records || []);
      }
    } catch (err) {
      console.error("Failed to load schedule:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateEntry = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsModalOpen(false);
        setFormData({ date: "", time: "", case_number: "", client_name: "", hearing_type: "", location: "", judge: "" });
        fetchSchedules();
      }
    } catch (err) {
      console.error("Failed to create docket entry:", err);
      alert("Error generating docket entry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateICS = (event) => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.hearing_type} - ${event.case_number}\nDTSTART:${event.date.replace(/[-:]/g, '')}T${event.time.replace(':', '')}00Z\nLOCATION:${event.location}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.case_number}_hearing.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSchedules = schedules.filter(s => 
    s.case_number.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.judge.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.hearing_type.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <Calendar size={18} className="text-[#8B2626]" />
              <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Docket Management</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Court Date Scheduling</h1>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white border border-[#2B2B2B] text-[#2B2B2B] px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-slate-100 transition-colors shadow-sm">
              <Mail size={16} /> Sync Outlook
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md"
            >
              <Plus size={16} /> Docket Entry
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          
          <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" placeholder="Search docket or judge..." 
                  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
                    <th className="p-4">Date & Time</th>
                    <th className="p-4">Matter Reference</th>
                    <th className="p-4">Proceeding Type</th>
                    <th className="p-4">Venue</th>
                    <th className="p-4 text-right">Export</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedules.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-sm text-slate-500">No matching docket entries found.</td></tr>
                  ) : (
                    filteredSchedules.map((row) => (
                      <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
                        <td className="p-4">
                          <p className="text-sm font-bold text-[#2B2B2B] flex items-center gap-2">
                            <Calendar size={14} className="text-slate-400"/> {row.date}
                          </p>
                          <p className="text-xs font-medium text-[#8B2626] mt-1 flex items-center gap-2">
                            <Clock size={14} /> {row.time}
                          </p>
                        </td>
                        <td className="p-4">
                          <p className="text-sm font-bold text-slate-800">{row.case_number}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{row.client_name}</p>
                        </td>
                        <td className="p-4 text-sm font-medium text-slate-700">{row.hearing_type}</td>
                        <td className="p-4">
                          <p className="text-sm text-slate-600 flex items-center gap-1"><MapPin size={14}/> {row.location}</p>
                          <p className="text-[10px] text-slate-400 uppercase mt-1">Hon. {row.judge}</p>
                        </td>
                        <td className="p-4 text-right">
                          <button onClick={() => generateICS(row)} className="text-slate-500 hover:text-[#2B2B2B] transition-colors p-2 border border-transparent hover:border-slate-300">
                            <Download size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#2B2B2B] p-6 text-white border-t-4 border-[#8B2626]">
              <h3 className="font-serif text-xl mb-4 flex items-center gap-2"><AlertCircle size={20} className="text-[#8B2626]" /> Urgent Deadlines</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 border border-white/20">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300">Due in 48 Hours</span>
                  </div>
                  <p className="font-bold text-sm">Motion for Summary Judgment</p>
                  <p className="text-xs text-slate-300 mt-1">CV-2026-104 • Pearson v. Specter</p>
                </div>
                <div className="bg-white/10 p-4 border border-white/20">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">Due in 4 Days</span>
                  </div>
                  <p className="font-bold text-sm">Discovery Production</p>
                  <p className="text-xs text-slate-300 mt-1">CV-2026-892 • Zane LLC</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#2B2B2B] w-full max-w-lg p-6 rounded-none shadow-2xl">
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3 mb-4">
              <h3 className="text-xl font-serif text-[#2B2B2B]">Add Docket Entry</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-[#2B2B2B] transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleCreateEntry} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Date</label>
                  <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Time</label>
                  <input type="time" required value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Case Reference</label>
                  <input type="text" required placeholder="e.g. CV-2026-104" value={formData.case_number} onChange={(e) => setFormData({...formData, case_number: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Client/Matter Name</label>
                  <input type="text" required placeholder="e.g. Pearson v. Specter" value={formData.client_name} onChange={(e) => setFormData({...formData, client_name: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Proceeding Type</label>
                <input type="text" required placeholder="e.g. Motion for Summary Judgment" value={formData.hearing_type} onChange={(e) => setFormData({...formData, hearing_type: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Venue / Location</label>
                  <input type="text" required placeholder="e.g. Courtroom 3B" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Presiding Judge</label>
                  <input type="text" required placeholder="e.g. R. Kessler" value={formData.judge} onChange={(e) => setFormData({...formData, judge: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="bg-[#2B2B2B] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#8B2626]">
                  {isSubmitting ? "Generating..." : "Generate Entry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourtScheduling;