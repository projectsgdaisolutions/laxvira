// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Users, Lock, Search, Key, ShieldCheck, Loader2, Link2, ShieldAlert } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const ClientPortal = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [portals, setPortals] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchPortals();
//   }, []);

//   const fetchPortals = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) { navigate("/login"); return; }
      
//       const res = await fetch("http://localhost:8000/api/legal/portals", {
//         headers: { "Authorization": `Bearer ${token}` }
//       });
      
//       if (res.ok) {
//         const json = await res.json();
//         setPortals(json.records || []);
//       } else {
//         // Mock data
//         setPortals([
//           { id: 1, client: "Jessica Pearson", email: "j.pearson@specter.com", access_level: "FULL_READ", last_login: "Today, 09:14 AM", active: true, case_links: 2 },
//           { id: 2, client: "Robert Zane", email: "rzane@zane.com", access_level: "RESTRICTED", last_login: "2026-09-02", active: true, case_links: 1 },
//           { id: 3, client: "Charles Forstman", email: "c.forstman@invest.com", access_level: "REVOKED", last_login: "2025-11-14", active: false, case_links: 0 },
//         ]);
//       }
//     } catch (err) {
//       console.error("Failed to load portals:", err);
//     } finally {
//       setIsLoading(false);
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
//               <Users size={18} className="text-[#8B2626]" />
//               <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">External Access</span>
//             </div>
//             <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Secure Client Portal</h1>
//           </div>
//           <button className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md">
//             <Key size={16} /> Generate Access Key
//           </button>
//         </div>

//         {/* Data Table Section */}
//         <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
//           <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
//             <div className="relative w-72">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//               <input 
//                 type="text" placeholder="Search identities..." 
//                 value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
//               />
//             </div>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Identity</th>
//                 <th className="p-4">RBAC Level</th>
//                 <th className="p-4">Active Matters Linked</th>
//                 <th className="p-4">Last Authenticated</th>
//                 <th className="p-4 text-right">Access Control</th>
//               </tr>
//             </thead>
//             <tbody>
//               {portals.map((row) => (
//                 <tr key={row.id} className={`border-b border-slate-200 transition-colors ${!row.active ? 'bg-slate-50 opacity-60' : 'hover:bg-slate-50/80'}`}>
//                   <td className="p-4">
//                     <p className="text-sm font-bold text-[#2B2B2B]">{row.client}</p>
//                     <p className="text-xs font-medium text-slate-500 mt-0.5">{row.email}</p>
//                   </td>
//                   <td className="p-4">
//                     {row.access_level === 'FULL_READ' && <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1"><ShieldCheck size={12}/> Full Read</span>}
//                     {row.access_level === 'RESTRICTED' && <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1"><Lock size={12}/> Restricted</span>}
//                     {row.access_level === 'REVOKED' && <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2 py-1"><ShieldAlert size={12}/> Revoked</span>}
//                   </td>
//                   <td className="p-4 text-sm font-bold text-slate-600 flex items-center gap-2">
//                     <Link2 size={14} className="text-slate-400" /> {row.case_links} Matters
//                   </td>
//                   <td className="p-4 text-sm font-medium text-slate-500">{row.last_login}</td>
//                   <td className="p-4 text-right space-x-3">
//                     <button className="text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B] hover:text-[#8B2626]">Audit Logs</button>
//                     {row.active ? (
//                       <button className="text-[10px] font-bold uppercase tracking-widest text-rose-600 hover:text-rose-800">Revoke</button>
//                     ) : (
//                       <button className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-800">Restore</button>
//                     )}
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

// export default ClientPortal;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Lock, Search, Key, ShieldCheck, Loader2, Link2, ShieldAlert, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/legal/portals";

const ClientPortal = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [portals, setPortals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    client: "",
    email: "",
    access_level: "RESTRICTED"
  });

  useEffect(() => {
    fetchPortals();
  }, []);

  const fetchPortals = async () => {
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      
      if (res.ok) {
        const json = await res.json();
        setPortals(json.records || []);
      }
    } catch (err) {
      console.error("Failed to load portals:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateKey = async (e) => {
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
        setFormData({ client: "", email: "", access_level: "RESTRICTED" });
        fetchPortals();
      }
    } catch (err) {
      console.error("Failed to generate key:", err);
      alert("Error generating access key.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleStatus = async (portalId) => {
    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(`${API_BASE}/${portalId}/status`, {
        method: "PATCH",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        fetchPortals();
      }
    } catch (err) {
      console.error("Failed to toggle status:", err);
    }
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7]"><Loader2 className="animate-spin text-[#8B2626]" size={32} /></div>;

  const filteredPortals = portals.filter(p => 
    p.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#2B2B2B] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users size={18} className="text-[#8B2626]" />
              <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">External Access</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Secure Client Portal</h1>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#2B2B2B] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#8B2626] transition-colors shadow-md"
          >
            <Key size={16} /> Generate Access Key
          </button>
        </div>

        <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-[#FDFBF7]">
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" placeholder="Search identities..." 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 text-sm rounded-none pl-9 pr-4 py-2 outline-none focus:border-[#2B2B2B]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
                  <th className="p-4">Identity</th>
                  <th className="p-4">RBAC Level</th>
                  <th className="p-4">Active Matters Linked</th>
                  <th className="p-4">Last Authenticated</th>
                  <th className="p-4 text-right">Access Control</th>
                </tr>
              </thead>
              <tbody>
                {filteredPortals.length === 0 ? (
                  <tr><td colSpan={5} className="p-8 text-center text-sm text-slate-500">No identities found.</td></tr>
                ) : (
                  filteredPortals.map((row) => (
                    <tr key={row.id} className={`border-b border-slate-200 transition-colors ${!row.active ? 'bg-slate-50 opacity-60' : 'hover:bg-slate-50/80'}`}>
                      <td className="p-4">
                        <p className="text-sm font-bold text-[#2B2B2B]">{row.client}</p>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">{row.email}</p>
                      </td>
                      <td className="p-4">
                        {row.access_level === 'FULL_READ' && <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1"><ShieldCheck size={12}/> Full Read</span>}
                        {row.access_level === 'RESTRICTED' && <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1"><Lock size={12}/> Restricted</span>}
                        {row.access_level === 'REVOKED' && <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2 py-1"><ShieldAlert size={12}/> Revoked</span>}
                      </td>
                      <td className="p-4 text-sm font-bold text-slate-600 flex items-center gap-2">
                        <Link2 size={14} className="text-slate-400" /> {row.case_links} Matters
                      </td>
                      <td className="p-4 text-sm font-medium text-slate-500">{row.last_login}</td>
                      <td className="p-4 text-right space-x-3">
                        <button className="text-[10px] font-bold uppercase tracking-widest text-[#2B2B2B] hover:text-[#8B2626]">Audit Logs</button>
                        {row.active ? (
                          <button onClick={() => handleToggleStatus(row.id)} className="text-[10px] font-bold uppercase tracking-widest text-rose-600 hover:text-rose-800">Revoke</button>
                        ) : (
                          <button onClick={() => handleToggleStatus(row.id)} className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-800">Restore</button>
                        )}
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
          <div className="bg-white border-2 border-[#2B2B2B] w-full max-w-md p-6 rounded-none shadow-2xl">
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3 mb-4">
              <h3 className="text-xl font-serif text-[#2B2B2B]">Generate Access Key</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-[#2B2B2B] transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleGenerateKey} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Client / Entity Name</label>
                <input 
                  type="text" required placeholder="e.g. Jessica Pearson" 
                  value={formData.client} onChange={(e) => setFormData({...formData, client: e.target.value})} 
                  className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Email Address</label>
                <input 
                  type="email" required placeholder="e.g. contact@client.com" 
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B]" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Initial RBAC Level</label>
                <select 
                  value={formData.access_level} onChange={(e) => setFormData({...formData, access_level: e.target.value})} 
                  className="w-full border border-slate-300 p-2.5 text-sm outline-none focus:border-[#2B2B2B] bg-white"
                >
                  <option value="FULL_READ">FULL_READ (All Matter Docs)</option>
                  <option value="RESTRICTED">RESTRICTED (Invoice/Summary Only)</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="bg-[#2B2B2B] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#8B2626]">
                  {isSubmitting ? "Provisioning..." : "Provision Access"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientPortal;