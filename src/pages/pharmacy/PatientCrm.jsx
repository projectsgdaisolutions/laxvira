// import React, { useState } from "react";
// import { Users, Search, Activity, Phone, ClipboardList } from "lucide-react";

// const PatientCrm = () => {
//   const [patients] = useState([
//     { id: "PAT-001", name: "Donna Paulsen", dob: "1980-08-12", last_visit: "2026-09-01", active_rx: 3 },
//     { id: "PAT-002", name: "Katrina Bennett", dob: "1985-11-22", last_visit: "2026-08-15", active_rx: 1 },
//   ]);

//   return (
//     <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      
//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
//               <Users size={28} className="text-white" />
//             </div>
//             <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Patient CRM & Teleconsult</h1>
//           </div>
//         </div>

//         <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
//           <div className="p-4 border-b border-teal-100/50 flex justify-between items-center bg-teal-50/30">
//             <div className="relative w-96">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-700/50" />
//               <input type="text" placeholder="Search patient name, DOB, or ID..." className="w-full bg-white border border-teal-100 text-sm font-medium text-slate-700 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-teal-400" />
//             </div>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Patient Profile</th>
//                 <th className="p-4">Date of Birth</th>
//                 <th className="p-4 text-center">Active Prescriptions</th>
//                 <th className="p-4 text-center">Last Dispense</th>
//                 <th className="p-4 text-right">Care Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {patients.map((row) => (
//                 <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
//                   <td className="p-4">
//                     <p className="text-sm font-bold text-slate-800">{row.name}</p>
//                     <p className="text-[10px] font-bold text-slate-400 uppercase">{row.id}</p>
//                   </td>
//                   <td className="p-4 text-sm font-medium text-slate-600">{row.dob}</td>
//                   <td className="p-4 text-center">
//                     <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-lg text-xs font-bold border border-teal-100">{row.active_rx} Scripts</span>
//                   </td>
//                   <td className="p-4 text-sm font-medium text-slate-500 text-center">{row.last_visit}</td>
//                   <td className="p-4 text-right flex items-center justify-end gap-2">
//                     <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors" title="View Medical History"><ClipboardList size={18} /></button>
//                     <button className="p-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors" title="Initiate Teleconsult"><Phone size={18} /></button>
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

// export default PatientCrm;

import React, { useState, useEffect } from "react";
import { Users, Search, Phone, ClipboardList, Loader2 } from "lucide-react";

const PatientCrm = () => {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pharmacy/patients")
      .then(res => res.json())
      .then(json => setPatients(json.records || []))
      .finally(() => setIsLoading(false));
  }, []);

  const filtered = patients.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#F0FDF8]"><Loader2 className="animate-spin text-teal-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-[#F0FDF8] font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-[#D1FAE5]/30"></div>
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/70 backdrop-blur-xl border border-teal-100/50 p-6 rounded-3xl shadow-[0_4px_20px_rgb(13,148,136,0.05)]">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 shrink-0">
              <Users size={28} className="text-white" />
            </div>
            <h1 className="text-[28px] md:text-[36px] font-black text-slate-800 tracking-tight leading-none">Patient CRM & Teleconsult</h1>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-teal-100/50 shadow-sm rounded-3xl overflow-hidden">
          <div className="p-4 border-b border-teal-100/50 flex justify-between items-center bg-teal-50/30">
            <div className="relative w-96">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-700/50" />
              <input type="text" placeholder="Search patient name, DOB, or ID..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white border border-teal-100 text-sm font-medium text-slate-700 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-teal-400" />
            </div>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50/50 border-b-2 border-teal-100/50 text-teal-800 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Patient Profile</th>
                <th className="p-4">Date of Birth</th>
                <th className="p-4 text-center">Active Prescriptions</th>
                <th className="p-4 text-center">Last Dispense</th>
                <th className="p-4 text-right">Care Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-teal-50 hover:bg-white transition-colors">
                  <td className="p-4">
                    <p className="text-sm font-bold text-slate-800">{row.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{row.id}</p>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-600">{row.dob}</td>
                  <td className="p-4 text-center">
                    <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-lg text-xs font-bold border border-teal-100">{row.active_rx} Scripts</span>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-500 text-center">{row.last_visit}</td>
                  <td className="p-4 text-right flex items-center justify-end gap-2">
                    <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors" title="View Medical History"><ClipboardList size={18} /></button>
                    <button className="p-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors" title="Initiate Teleconsult"><Phone size={18} /></button>
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
export default PatientCrm;