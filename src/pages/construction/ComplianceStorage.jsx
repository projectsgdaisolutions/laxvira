// import React, { useState, useEffect } from "react";
// import { FolderLock, UploadCloud, Search, FileText, ShieldAlert, CheckSquare, Download, Loader2 } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const ComplianceStorage = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [docs, setDocs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     setTimeout(() => {
//       setDocs([
//         { id: "DOC-991", title: "Environmental Clearance - Phase 1", category: "Permits", project: "Highland Commercial", expiry: "2027-01-01", status: "VALID" },
//         { id: "DOC-992", title: "Heavy Crane Operation License", category: "Safety Certifications", project: "Global", expiry: "2026-09-20", status: "EXPIRING SOON" },
//         { id: "DOC-993", title: "Structural Blueprints v4.2", category: "Engineering", project: "Sector 4 Residential", expiry: "N/A", status: "VALID" },
//       ]);
//       setIsLoading(false);
//     }, 500);
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
//               <FolderLock size={30} strokeWidth={2.5} />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <ShieldAlert size={14} className="text-amber-500" />
//                 <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Risk & Compliance</span>
//               </div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Document Storage</h1>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 bg-stone-800 text-white px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-700 hover:bg-amber-500 hover:text-stone-900 transition-colors">
//             <UploadCloud size={16} /> Upload Record
//           </button>
//         </div>

//         <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
//           <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
//             <div className="relative w-72 border-2 border-stone-200">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
//               <input 
//                 type="text" placeholder="Query records..." 
//                 value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-white text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500"
//               />
//             </div>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Document Title</th>
//                 <th className="p-4">Category</th>
//                 <th className="p-4">Project Association</th>
//                 <th className="p-4">Expiration / Renewal</th>
//                 <th className="p-4 text-right">File Ops</th>
//               </tr>
//             </thead>
//             <tbody>
//               {docs.map((row) => (
//                 <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
//                   <td className="p-4 flex items-center gap-3">
//                     <FileText size={18} className="text-stone-400" />
//                     <div>
//                       <p className="text-sm font-black text-stone-900 uppercase">{row.title}</p>
//                       <p className="text-[10px] font-bold text-stone-500 uppercase">{row.id}</p>
//                     </div>
//                   </td>
//                   <td className="p-4 text-sm font-bold text-stone-700 uppercase">{row.category}</td>
//                   <td className="p-4 text-sm font-bold text-stone-600 uppercase">{row.project}</td>
//                   <td className="p-4">
//                     {row.status === "EXPIRING SOON" ? (
//                       <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 border-2 border-rose-200 px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-sm"><ShieldAlert size={12}/> {row.expiry}</span>
//                     ) : (
//                       <span className="inline-flex items-center gap-1 bg-stone-100 text-stone-600 border-2 border-stone-200 px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-sm"><CheckSquare size={12}/> {row.expiry}</span>
//                     )}
//                   </td>
//                   <td className="p-4 text-right">
//                     <button className="text-stone-500 hover:text-stone-900 transition-colors"><Download size={20} /></button>
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

// export default ComplianceStorage;

import React, { useState, useEffect } from "react";
import { FolderLock, UploadCloud, Search, FileText, ShieldAlert, CheckSquare, Download, Loader2, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/construction/assets/compliance";

const ComplianceStorage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [docs, setDocs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    category: "Permits",
    project: "",
    expiry: "",
    hasExpiry: true,
    file: null
  });

  const fetchDocs = async () => {
    try {
      const url = searchQuery.trim() 
        ? `${API_BASE}?q=${encodeURIComponent(searchQuery)}` 
        : API_BASE;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to load documents");
      const data = await res.json();
      setDocs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, [searchQuery]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!formData.file) {
      alert("Please select a file to upload.");
      return;
    }

    setIsSubmitting(true);
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("project", formData.project);
    data.append("expiry", formData.hasExpiry ? formData.expiry : "N/A");
    data.append("file", formData.file);

    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        body: data, // Browser automatically sets multipart/form-data headers
      });
      if (!res.ok) throw new Error("Failed to upload document");
      
      setIsModalOpen(false);
      setFormData({ title: "", category: "Permits", project: "", expiry: "", hasExpiry: true, file: null });
      fetchDocs();
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = async (docId, title) => {
    try {
      const res = await fetch(`${API_BASE}/${docId}/download`);
      if (res.ok) {
        alert(`Downloading: ${title}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
              <FolderLock size={30} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldAlert size={14} className="text-amber-500" />
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Risk & Compliance</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Document Storage</h1>
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-stone-800 text-white px-6 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-700 hover:bg-amber-500 hover:text-stone-900 transition-colors"
          >
            <UploadCloud size={16} /> Upload Record
          </button>
        </div>

        <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
          <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
            <div className="relative w-full sm:w-72 border-2 border-stone-200 bg-white">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input 
                type="text" placeholder="Query records..." 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
                  <th className="p-4">Document Title</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Project Association</th>
                  <th className="p-4">Expiration / Renewal</th>
                  <th className="p-4 text-right">File Ops</th>
                </tr>
              </thead>
              <tbody>
                {docs.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-sm font-bold text-stone-500 uppercase">
                      No documents found matching the query.
                    </td>
                  </tr>
                ) : (
                  docs.map((row) => (
                    <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <FileText size={18} className="text-stone-400" />
                        <div>
                          <p className="text-sm font-black text-stone-900 uppercase">{row.title}</p>
                          <p className="text-[10px] font-bold text-stone-500 uppercase">{row.id}</p>
                        </div>
                      </td>
                      <td className="p-4 text-sm font-bold text-stone-700 uppercase">{row.category}</td>
                      <td className="p-4 text-sm font-bold text-stone-600 uppercase">{row.project}</td>
                      <td className="p-4">
                        {row.status === "EXPIRING SOON" || row.status === "EXPIRED" ? (
                          <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 border-2 border-rose-200 px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-sm"><ShieldAlert size={12}/> {row.expiry}</span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-stone-100 text-stone-600 border-2 border-stone-200 px-2 py-1 text-[10px] font-black uppercase tracking-wider rounded-sm"><CheckSquare size={12}/> {row.expiry}</span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <button onClick={() => handleDownload(row.id, row.title)} className="text-stone-500 hover:text-stone-900 transition-colors">
                          <Download size={20} />
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

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4">
          <div className="bg-white border-4 border-stone-900 rounded-sm w-full max-w-lg shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b-2 border-stone-200 pb-3 mb-4">
              <h2 className="text-lg font-black text-stone-900 uppercase tracking-tight">Upload Compliance Record</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-900">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Document Title</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Environmental Clearance Phase 2"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500 bg-white"
                  >
                    <option value="Permits">Permits</option>
                    <option value="Safety Certifications">Safety Certifications</option>
                    <option value="Engineering">Engineering & Blueprints</option>
                    <option value="Legal">Legal Contracts</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Project Association</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Global or Site Name"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="bg-stone-50 p-3 border-2 border-stone-200 rounded-sm">
                <div className="flex items-center gap-2 mb-2">
                  <input 
                    type="checkbox" 
                    id="hasExpiry" 
                    checked={formData.hasExpiry}
                    onChange={(e) => setFormData({ ...formData, hasExpiry: e.target.checked })}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <label htmlFor="hasExpiry" className="text-[10px] font-black text-stone-600 uppercase">Document has an expiration date</label>
                </div>
                {formData.hasExpiry && (
                  <input
                    required
                    type="date"
                    value={formData.expiry}
                    onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                    className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500 bg-white"
                  />
                )}
              </div>

              <div>
                <label className="block text-[10px] font-black text-stone-600 uppercase mb-1">Select File</label>
                <input
                  required
                  type="file"
                  onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                  className="w-full border-2 border-stone-300 p-2 text-sm font-bold text-stone-800 outline-none focus:border-amber-500 file:mr-4 file:py-1 file:px-3 file:border-0 file:text-xs file:font-black file:bg-stone-200 file:text-stone-700 hover:file:bg-stone-300"
                />
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
                  className="px-5 py-2 bg-amber-500 text-stone-900 border-2 border-stone-900 text-xs font-black uppercase tracking-wider hover:bg-amber-400 disabled:opacity-50 flex items-center gap-2"
                >
                  {isSubmitting ? <><Loader2 size={14} className="animate-spin" /> Uploading...</> : "Upload File"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplianceStorage;