// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FolderLock, Plus, Search, FileText, ChevronRight, Loader2, Archive } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const CaseManagement = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [cases, setCases] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchCases();
//   }, []);

//   const fetchCases = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) { navigate("/login"); return; }
      
//       const res = await fetch("http://localhost:8000/api/legal/cases", {
//         headers: { "Authorization": `Bearer ${token}` }
//       });
//       if (res.ok) {
//         const json = await res.json();
//         setCases(json.records || []);
//       }
//     } catch (err) {
//       console.error("Failed to load case files:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getStatusStyle = (status) => {
//     switch(status) {
//       case 'DISCOVERY': return 'bg-amber-50 text-amber-700 border-amber-200';
//       case 'LITIGATION': return 'bg-rose-50 text-rose-700 border-rose-200';
//       case 'CLOSED': return 'bg-slate-100 text-slate-600 border-slate-300';
//       default: return 'bg-emerald-50 text-emerald-700 border-emerald-200';
//     }
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
//               <FolderLock size={18} className="text-[#8B2626]" />
//               <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Document Control</span>
//             </div>
//             <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Case File Management</h1>
//           </div>
//           <button className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md">
//             <Plus size={16} /> Open New Matter
//           </button>
//         </div>

//         {/* Data Table Section */}
//         <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
//           <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
//             <div className="relative w-72">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//               <input 
//                 type="text" placeholder="Query matter, client, or ID..." 
//                 value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
//               />
//             </div>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Matter ID</th>
//                 <th className="p-4">Client / Opposing Counsel</th>
//                 <th className="p-4">Practice Area</th>
//                 <th className="p-4">Lifecycle Phase</th>
//                 <th className="p-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cases.length === 0 ? (
//                 <tr><td colSpan={5} className="p-8 text-center text-sm text-slate-500">No active matters found.</td></tr>
//               ) : (
//                 cases.filter(c => c.client_name.toLowerCase().includes(searchQuery.toLowerCase()) || c.case_number.includes(searchQuery)).map((row) => (
//                   <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors group cursor-pointer">
//                     <td className="p-4">
//                       <p className="text-sm font-bold text-[#2B2B2B]">{row.case_number}</p>
//                       <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase">Opened {row.open_date}</p>
//                     </td>
//                     <td className="p-4">
//                       <p className="text-sm font-bold text-slate-800">{row.client_name}</p>
//                       <p className="text-xs text-slate-500 mt-0.5">{row.opposing_counsel || "Pro Se"}</p>
//                     </td>
//                     <td className="p-4 text-sm font-medium text-slate-600">{row.practice_area}</td>
//                     <td className="p-4">
//                       <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border ${getStatusStyle(row.status)}`}>
//                         {row.status}
//                       </span>
//                     </td>
//                     <td className="p-4 text-right">
//                       <button className="text-slate-400 group-hover:text-[#8B2626] transition-colors"><ChevronRight size={20} /></button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseManagement;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FolderLock, Plus, Search, ChevronRight, Loader2, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/legal/cases";

const CaseManagement = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [cases, setCases] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    case_number: "",
    client_name: "",
    opposing_counsel: "",
    practice_area: "Corporate",
    status: "PRE-FILING"
  });

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const json = await res.json();
        setCases(json.records || []);
      }
    } catch (err) {
      console.error("Failed to load case files:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenMatter = async (e) => {
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
        setFormData({ case_number: "", client_name: "", opposing_counsel: "", practice_area: "Corporate", status: "PRE-FILING" });
        fetchCases();
      }
    } catch (err) {
      console.error("Failed to open matter:", err);
      alert("Error saving new case.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusStyle = (status) => {
    switch(status) {
      case 'DISCOVERY': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'LITIGATION': return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'CLOSED': return 'bg-slate-100 text-slate-600 border-slate-300';
      default: return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
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
              <FolderLock size={18} className="text-[#8B2626]" />
              <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Document Control</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Case File Management</h1>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md"
          >
            <Plus size={16} /> Open New Matter
          </button>
        </div>

        <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" placeholder="Query matter, client, or ID..." 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
                  <th className="p-4">Matter ID</th>
                  <th className="p-4">Client / Opposing Counsel</th>
                  <th className="p-4">Practice Area</th>
                  <th className="p-4">Lifecycle Phase</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cases.length === 0 ? (
                  <tr><td colSpan={5} className="p-8 text-center text-sm text-slate-500">No active matters found.</td></tr>
                ) : (
                  cases.filter(c => 
                    c.client_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    c.case_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    c.id.toLowerCase().includes(searchQuery.toLowerCase())
                  ).map((row) => (
                    <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors group cursor-pointer">
                      <td className="p-4">
                        <p className="text-sm font-bold text-[#2B2B2B]">{row.case_number}</p>
                        <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase">Opened {row.open_date}</p>
                      </td>
                      <td className="p-4">
                        <p className="text-sm font-bold text-slate-800">{row.client_name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{row.opposing_counsel || "Pro Se"}</p>
                      </td>
                      <td className="p-4 text-sm font-medium text-slate-600">{row.practice_area}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border ${getStatusStyle(row.status)}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-slate-400 group-hover:text-[#8B2626] transition-colors"><ChevronRight size={20} /></button>
                      </td>
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
          <div className="bg-white border-2 border-[#2B2B2B] w-full max-w-lg p-6 rounded-none shadow-2xl">
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3 mb-4">
              <h3 className="text-xl font-serif text-[#2B2B2B]">Open New Matter</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-[#2B2B2B] transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleOpenMatter} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Case Number</label>
                  <input type="text" required placeholder="e.g. CV-2026-900" value={formData.case_number} onChange={(e) => setFormData({...formData, case_number: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Status Phase</label>
                  <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B] bg-white">
                    <option value="PRE-FILING">PRE-FILING</option>
                    <option value="DISCOVERY">DISCOVERY</option>
                    <option value="LITIGATION">LITIGATION</option>
                    <option value="SETTLEMENT">SETTLEMENT</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Client Name</label>
                <input type="text" required placeholder="e.g. Apex Holdings" value={formData.client_name} onChange={(e) => setFormData({...formData, client_name: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Opposing Counsel (or Pro Se)</label>
                <input type="text" required placeholder="e.g. Smith & Associates" value={formData.opposing_counsel} onChange={(e) => setFormData({...formData, opposing_counsel: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Practice Area</label>
                <input type="text" required placeholder="e.g. Corporate Litigation" value={formData.practice_area} onChange={(e) => setFormData({...formData, practice_area: e.target.value})} className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="bg-[#2B2B2B] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#8B2626]">
                  {isSubmitting ? "Generating..." : "Generate File"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseManagement;