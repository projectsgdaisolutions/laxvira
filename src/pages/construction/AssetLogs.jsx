// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Truck, Wrench, Search, Plus, AlertTriangle, Settings, Activity, Loader2 } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const AssetLogs = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [assets, setAssets] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     // Simulated API Call
//     setTimeout(() => {
//       setAssets([
//         { id: "EQ-042", name: "CAT 320 Excavator", category: "Earthmoving", status: "ACTIVE", site: "Highland Commercial", hours_logged: 1450, next_service: "2026-10-15", condition: 85 },
//         { id: "EQ-089", name: "Komatsu D61 Dozer", category: "Earthmoving", status: "MAINTENANCE", site: "Service Yard A", hours_logged: 3200, next_service: "2026-09-08", condition: 40 },
//         { id: "EQ-112", name: "JLG 800AJ Boom Lift", category: "Aerial", status: "ACTIVE", site: "Sector 4 Residential", hours_logged: 890, next_service: "2026-11-20", condition: 92 },
//       ]);
//       setIsLoading(false);
//     }, 600);
//   }, []);

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
//               <Truck size={30} strokeWidth={2.5} />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <Settings size={14} className="text-amber-500" />
//                 <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Logistics & Fleet</span>
//               </div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Equipment & Asset Logs</h1>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 bg-amber-500 text-stone-900 px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-900 hover:bg-amber-400 transition-colors">
//             <Plus size={16} /> Register Asset
//           </button>
//         </div>

//         <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
//           <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
//             <div className="relative w-72 border-2 border-stone-200">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
//               <input 
//                 type="text" placeholder="Search equipment ID or type..." 
//                 value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-white text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500"
//               />
//             </div>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Asset Matrix ID</th>
//                 <th className="p-4">Current Deployment</th>
//                 <th className="p-4">Operational Status</th>
//                 <th className="p-4">Engine Hours</th>
//                 <th className="p-4">Condition Index</th>
//                 <th className="p-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {assets.map((row) => (
//                 <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
//                   <td className="p-4">
//                     <p className="text-sm font-black text-stone-900 uppercase">{row.id}</p>
//                     <p className="text-xs font-bold text-stone-500 uppercase">{row.name}</p>
//                   </td>
//                   <td className="p-4 text-sm font-bold text-stone-700 uppercase">{row.site}</td>
//                   <td className="p-4">
//                     {row.status === "ACTIVE" ? (
//                       <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 border-2 border-emerald-200 px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-sm"><Activity size={12}/> Deployed</span>
//                     ) : (
//                       <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 border-2 border-rose-200 px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-sm"><Wrench size={12}/> Down / Repair</span>
//                     )}
//                   </td>
//                   <td className="p-4 text-sm font-black text-stone-900">{row.hours_logged.toLocaleString()} HR</td>
//                   <td className="p-4">
//                     <div className="flex items-center gap-2">
//                       <div className="w-24 h-2 bg-stone-200 rounded-sm overflow-hidden">
//                         <div className={`h-full ${row.condition > 75 ? 'bg-emerald-500' : row.condition > 40 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${row.condition}%` }} />
//                       </div>
//                       <span className="text-[10px] font-black text-stone-500">{row.condition}%</span>
//                     </div>
//                   </td>
//                   <td className="p-4 text-right">
//                     <button className="text-[10px] font-black text-stone-900 uppercase tracking-widest hover:text-amber-600 border-2 border-transparent hover:border-stone-900 px-3 py-1 rounded-sm transition-all">Telemetry</button>
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

// export default AssetLogs;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Truck, Wrench, Search, Plus, Settings, Activity, Loader2, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/construction/assets";

const AssetLogs = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "Earthmoving",
    status: "ACTIVE",
    site: "",
    hours_logged: 0,
    next_service: new Date().toISOString().split("T")[0],
    condition: 100
  });

  const fetchAssets = async () => {
    try {
      const url = searchQuery.trim() 
        ? `${API_BASE}?q=${encodeURIComponent(searchQuery)}` 
        : API_BASE;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to load assets");
      const data = await res.json();
      setAssets(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, [searchQuery]);

  const handleCreateAsset = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          hours_logged: parseFloat(formData.hours_logged) || 0,
          condition: parseInt(formData.condition, 10) || 100
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err.detail || "Failed to register asset");
        return;
      }
      setIsModalOpen(false);
      setFormData({
        id: "",
        name: "",
        category: "Earthmoving",
        status: "ACTIVE",
        site: "",
        hours_logged: 0,
        next_service: new Date().toISOString().split("T")[0],
        condition: 100
      });
      fetchAssets();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTelemetryPrompt = async (assetId) => {
    const hours = prompt("Enter additional engine hours logged:");
    if (!hours || isNaN(hours) || Number(hours) <= 0) return;

    try {
      const res = await fetch(`${API_BASE}/${assetId}/telemetry`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ additional_hours: parseFloat(hours) })
      });
      if (res.ok) fetchAssets();
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-stone-100">
        <Loader2 className="animate-spin text-amber-500" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-4 sm:px-6 py-6 sm:py-8 md:px-10 lg:px-12 space-y-6 sm:space-y-8">
        
        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-stone-900 border-b-4 border-amber-500 px-6 py-5 rounded-sm shadow-xl">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 bg-amber-500 rounded-sm flex items-center justify-center shadow-inner border-2 border-amber-600 shrink-0 text-stone-900">
              <Truck size={30} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Settings size={14} className="text-amber-500" />
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Logistics & Fleet</span>
              </div>
              <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Equipment & Asset Logs</h1>
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-amber-500 text-stone-900 px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-900 hover:bg-amber-400 transition-colors shadow-sm"
          >
            <Plus size={16} /> Register Asset
          </button>
        </div>

        {/* Table Container with Responsive Overflow */}
        <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
          <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
            <div className="relative w-full sm:w-80 border-2 border-stone-200 bg-white">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input 
                type="text" 
                placeholder="Search equipment ID, name, site..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[768px]">
              <thead>
                <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
                  <th className="p-4">Asset Matrix ID</th>
                  <th className="p-4">Current Deployment</th>
                  <th className="p-4">Operational Status</th>
                  <th className="p-4">Engine Hours</th>
                  <th className="p-4">Condition Index</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assets.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-sm font-bold text-stone-500 uppercase">
                      No assets found matching the criteria.
                    </td>
                  </tr>
                ) : (
                  assets.map((row) => (
                    <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                      <td className="p-4">
                        <p className="text-sm font-black text-stone-900 uppercase">{row.id}</p>
                        <p className="text-xs font-bold text-stone-500 uppercase">{row.name}</p>
                      </td>
                      <td className="p-4 text-sm font-bold text-stone-700 uppercase">{row.site}</td>
                      <td className="p-4">
                        {row.status === "ACTIVE" ? (
                          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 border-2 border-emerald-200 px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-sm">
                            <Activity size={12}/> Deployed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 border-2 border-rose-200 px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-sm">
                            <Wrench size={12}/> Down / Repair
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-sm font-black text-stone-900">{Number(row.hours_logged).toLocaleString()} HR</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-stone-200 rounded-sm overflow-hidden">
                            <div className={`h-full ${row.condition > 75 ? 'bg-emerald-500' : row.condition > 40 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${row.condition}%` }} />
                          </div>
                          <span className="text-[10px] font-black text-stone-500">{row.condition}%</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={() => handleTelemetryPrompt(row.id)}
                          className="text-[10px] font-black text-stone-900 uppercase tracking-widest hover:text-amber-600 border-2 border-stone-300 hover:border-stone-900 px-3 py-1 rounded-sm transition-all"
                        >
                          Telemetry
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Register Asset Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4">
          <div className="bg-white border-4 border-stone-900 rounded-sm w-full max-w-lg shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b-2 border-stone-200 pb-3 mb-4">
              <h2 className="text-lg font-black text-stone-900 uppercase tracking-tight">Register New Asset</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-900">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateAsset} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Asset ID</label>
                  <input
                    required
                    type="text"
                    placeholder="EQ-204"
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Category</label>
                  <input
                    required
                    type="text"
                    placeholder="Earthmoving"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Equipment Name / Model</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. CAT 320 Excavator"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Current Site Deployment</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sector 4 Residential"
                    value={formData.site}
                    onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500 bg-white"
                  >
                    <option value="ACTIVE">ACTIVE (Deployed)</option>
                    <option value="MAINTENANCE">MAINTENANCE (Repair)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Current Hours</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.hours_logged}
                    onChange={(e) => setFormData({ ...formData, hours_logged: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Condition Index (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
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
                  {isSubmitting ? "Registering..." : "Save Asset"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetLogs;