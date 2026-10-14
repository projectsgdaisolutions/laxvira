// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { HardHat, Receipt, Search, Plus, Loader2, FileText, CheckCircle2, AlertTriangle } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const MilestoneBilling = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [projects, setProjects] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchMilestones();
//   }, []);

//   const fetchMilestones = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) { navigate("/login"); return; }
      
//       const res = await fetch("http://localhost:8000/api/construction/milestones", {
//         headers: { "Authorization": `Bearer ${token}` }
//       });
      
//       if (res.ok) {
//         const json = await res.json();
//         setProjects(json.records || []);
//       } else {
//         // Fallback state payload for UI mapping
//         setProjects([
//           { id: "PRJ-801", name: "Highland Commercial Complex", client: "Apex Holdings", contractValue: 12500000, billed: 5000000, currentPhase: "MEP Rough-in", completion: 45, status: "ON TRACK" },
//           { id: "PRJ-802", name: "Sector 4 Residential", client: "Oasis Dev", contractValue: 8500000, billed: 8000000, currentPhase: "Final Finishes", completion: 95, status: "PENDING INVOICE" },
//         ]);
//       }
//     } catch (err) {
//       console.error("Failed to load project milestones:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

//   if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-stone-100"><Loader2 className="animate-spin text-amber-500" size={32} /></div>;

//   return (
//     <div className="min-h-screen bg-stone-100 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
//       <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.03] grayscale mix-blend-multiply">
//         <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
//         {/* Heavy-Duty Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-stone-900 border-b-4 border-amber-500 px-6 py-5 rounded-sm shadow-xl">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 bg-amber-500 rounded-sm flex items-center justify-center shadow-inner border-2 border-amber-600 shrink-0 text-stone-900">
//               <Receipt size={30} strokeWidth={2.5} />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <HardHat size={14} className="text-amber-500" />
//                 <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Financial Operations</span>
//               </div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Milestone Billing</h1>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 bg-amber-500 text-stone-900 px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-900 hover:bg-amber-400 transition-colors">
//             <Plus size={16} /> Init Project Contract
//           </button>
//         </div>

//         {/* Action Toolbar */}
//         <div className="bg-white border-2 border-stone-300 p-4 rounded-sm shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
//           <div className="relative w-full sm:w-96 border-2 border-stone-200">
//             <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
//             <input 
//               type="text" placeholder="Query project ID or client entity..." 
//               value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-stone-50 text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-3 outline-none focus:bg-white focus:border-stone-900 transition-colors"
//             />
//           </div>
//           <div className="flex gap-2">
//             <button className="bg-stone-800 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-stone-700 transition-colors">Export Ledger (CSV)</button>
//           </div>
//         </div>

//         {/* Milestone Grid */}
//         <div className="grid grid-cols-1 gap-6">
//           {projects.map((project) => {
//             const unbilled = project.contractValue - project.billed;
//             const progressColor = project.completion > 80 ? 'bg-emerald-500' : project.completion > 30 ? 'bg-amber-500' : 'bg-stone-500';

//             return (
//               <div key={project.id} className="bg-white border-2 border-stone-300 rounded-sm shadow-sm flex flex-col md:flex-row">
                
//                 {/* Project Meta */}
//                 <div className="p-6 md:w-1/3 border-b md:border-b-0 md:border-r-2 border-stone-200 bg-stone-50 flex flex-col justify-between">
//                   <div>
//                     <div className="flex justify-between items-start mb-2">
//                       <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">{project.id}</span>
//                       {project.status === "PENDING INVOICE" ? (
//                         <span className="flex items-center gap-1 text-[10px] font-black text-rose-600 uppercase tracking-wider bg-rose-100 px-2 py-1 rounded-sm"><AlertTriangle size={12}/> Invoice Due</span>
//                       ) : (
//                         <span className="flex items-center gap-1 text-[10px] font-black text-emerald-700 uppercase tracking-wider bg-emerald-100 px-2 py-1 rounded-sm"><CheckCircle2 size={12}/> On Track</span>
//                       )}
//                     </div>
//                     <h3 className="text-xl font-black text-stone-900 uppercase leading-tight mb-1">{project.name}</h3>
//                     <p className="text-sm font-bold text-stone-500 uppercase">{project.client}</p>
//                   </div>
//                   <div className="mt-6 pt-4 border-t-2 border-stone-200">
//                     <p className="text-xs font-black text-stone-400 uppercase tracking-wider mb-1">Current Phase</p>
//                     <p className="text-sm font-bold text-stone-800 uppercase">{project.currentPhase}</p>
//                   </div>
//                 </div>

//                 {/* Financials & Progress */}
//                 <div className="p-6 md:w-2/3 flex flex-col justify-center">
//                   <div className="grid grid-cols-3 gap-4 mb-6">
//                     <div>
//                       <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Total Contract</p>
//                       <p className="text-lg font-black text-stone-900">{formatCurr(project.contractValue)}</p>
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Billed to Date</p>
//                       <p className="text-lg font-black text-emerald-700">{formatCurr(project.billed)}</p>
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Unbilled Delta</p>
//                       <p className="text-lg font-black text-stone-900">{formatCurr(unbilled)}</p>
//                     </div>
//                   </div>

//                   {/* Heavy Duty Progress Bar */}
//                   <div className="w-full bg-stone-200 h-6 rounded-sm overflow-hidden flex border-2 border-stone-300 relative">
//                     <div className={`h-full ${progressColor} transition-all duration-1000 ease-out flex items-center justify-end pr-2`} style={{ width: `${project.completion}%` }}>
//                        <span className="text-[10px] font-black text-stone-900">{project.completion}%</span>
//                     </div>
//                   </div>

//                   <div className="mt-6 flex justify-end gap-3">
//                     <button className="bg-stone-200 text-stone-700 px-4 py-2 text-xs font-black uppercase tracking-widest rounded-sm hover:bg-stone-300 transition-colors">Audit Ledger</button>
//                     <button className="flex items-center gap-2 bg-stone-900 text-white px-6 py-2 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-900 hover:bg-amber-500 hover:text-stone-900 hover:border-amber-500 transition-colors">
//                       <FileText size={16} /> Execute Invoice Draft
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MilestoneBilling;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HardHat, Receipt, Search, Plus, Loader2, FileText, CheckCircle2, AlertTriangle, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/construction/assets/milestones";

const MilestoneBilling = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    client: "",
    contractValue: 0,
    currentPhase: "Site Prep & Excavation",
  });

  const fetchMilestones = async () => {
    try {
      const url = searchQuery.trim() 
        ? `${API_BASE}?q=${encodeURIComponent(searchQuery)}` 
        : API_BASE;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to load project milestones");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMilestones();
  }, [searchQuery]);

  const handleInitContract = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          contractValue: parseFloat(formData.contractValue) || 0,
        }),
      });
      if (!res.ok) throw new Error("Failed to initialize contract");
      
      setIsModalOpen(false);
      setFormData({ name: "", client: "", contractValue: 0, currentPhase: "Site Prep & Excavation" });
      fetchMilestones();
    } catch (err) {
      console.error(err);
      alert("Failed to create project contract.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExecuteInvoice = async (projectId, unbilled) => {
    const amountStr = prompt(`Enter invoice amount to execute (Max available: ₹${unbilled.toLocaleString('en-IN')}):`);
    const amount = parseFloat(amountStr);
    
    if (!amount || isNaN(amount) || amount <= 0) return;
    if (amount > unbilled) {
      alert("Invoice amount cannot exceed the unbilled delta.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/${projectId}/invoice?amount=${amount}`, {
        method: "PATCH"
      });
      if (res.ok) fetchMilestones();
    } catch (err) {
      console.error(err);
    }
  };

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

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
              <Receipt size={30} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <HardHat size={14} className="text-amber-500" />
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Financial Operations</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Milestone Billing</h1>
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-amber-500 text-stone-900 px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-900 hover:bg-amber-400 transition-colors"
          >
            <Plus size={16} /> Init Project Contract
          </button>
        </div>

        <div className="bg-white border-2 border-stone-300 p-4 rounded-sm shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96 border-2 border-stone-200">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="text" placeholder="Query project ID or client entity..." 
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-3 outline-none focus:bg-white focus:border-stone-900 transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <button className="bg-stone-800 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-stone-700 transition-colors">Export Ledger (CSV)</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.length === 0 ? (
            <div className="bg-white border-2 border-stone-300 p-12 text-center text-sm font-bold text-stone-500 uppercase rounded-sm">
              No projects found.
            </div>
          ) : (
            projects.map((project) => {
              const unbilled = project.contractValue - project.billed;
              const progressColor = project.completion > 80 ? 'bg-emerald-500' : project.completion > 30 ? 'bg-amber-500' : 'bg-stone-500';

              return (
                <div key={project.id} className="bg-white border-2 border-stone-300 rounded-sm shadow-sm flex flex-col md:flex-row">
                  <div className="p-6 md:w-1/3 border-b md:border-b-0 md:border-r-2 border-stone-200 bg-stone-50 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">{project.id}</span>
                        {project.status === "PENDING INVOICE" ? (
                          <span className="flex items-center gap-1 text-[10px] font-black text-rose-600 uppercase tracking-wider bg-rose-100 px-2 py-1 rounded-sm"><AlertTriangle size={12}/> Invoice Due</span>
                        ) : project.status === "COMPLETED" ? (
                          <span className="flex items-center gap-1 text-[10px] font-black text-blue-700 uppercase tracking-wider bg-blue-100 px-2 py-1 rounded-sm"><CheckCircle2 size={12}/> Completed</span>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] font-black text-emerald-700 uppercase tracking-wider bg-emerald-100 px-2 py-1 rounded-sm"><CheckCircle2 size={12}/> On Track</span>
                        )}
                      </div>
                      <h3 className="text-xl font-black text-stone-900 uppercase leading-tight mb-1">{project.name}</h3>
                      <p className="text-sm font-bold text-stone-500 uppercase">{project.client}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t-2 border-stone-200">
                      <p className="text-xs font-black text-stone-400 uppercase tracking-wider mb-1">Current Phase</p>
                      <p className="text-sm font-bold text-stone-800 uppercase">{project.currentPhase}</p>
                    </div>
                  </div>

                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Total Contract</p>
                        <p className="text-lg font-black text-stone-900">{formatCurr(project.contractValue)}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Billed to Date</p>
                        <p className="text-lg font-black text-emerald-700">{formatCurr(project.billed)}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Unbilled Delta</p>
                        <p className="text-lg font-black text-stone-900">{formatCurr(unbilled)}</p>
                      </div>
                    </div>

                    <div className="w-full bg-stone-200 h-6 rounded-sm overflow-hidden flex border-2 border-stone-300 relative">
                      <div className={`h-full ${progressColor} transition-all duration-1000 ease-out flex items-center justify-end pr-2`} style={{ width: `${project.completion}%` }}>
                        <span className="text-[10px] font-black text-stone-900">{project.completion}%</span>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                      <button className="bg-stone-200 text-stone-700 px-4 py-2 text-xs font-black uppercase tracking-widest rounded-sm hover:bg-stone-300 transition-colors">Audit Ledger</button>
                      <button 
                        onClick={() => handleExecuteInvoice(project.id, unbilled)}
                        disabled={unbilled <= 0}
                        className="flex items-center gap-2 bg-stone-900 text-white px-6 py-2 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-900 hover:bg-amber-500 hover:text-stone-900 hover:border-amber-500 transition-colors disabled:opacity-50 disabled:hover:bg-stone-900 disabled:hover:text-white disabled:hover:border-stone-900"
                      >
                        <FileText size={16} /> Execute Invoice Draft
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4">
          <div className="bg-white border-4 border-stone-900 rounded-sm w-full max-w-lg shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b-2 border-stone-200 pb-3 mb-4">
              <h2 className="text-lg font-black text-stone-900 uppercase tracking-tight">Init Project Contract</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-900">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleInitContract} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Project Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Headquarters"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Client Entity</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Holdings LLC"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Total Contract Value (₹)</label>
                  <input
                    required
                    type="number"
                    min="10000"
                    value={formData.contractValue}
                    onChange={(e) => setFormData({ ...formData, contractValue: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Initial Phase</label>
                  <input
                    required
                    type="text"
                    value={formData.currentPhase}
                    onChange={(e) => setFormData({ ...formData, currentPhase: e.target.value })}
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
                  {isSubmitting ? "Generating..." : "Generate Contract"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MilestoneBilling;