// import React, { useState } from "react";
// import { ShieldPlus, Search, AlertTriangle, CheckCircle, Users, Scale, Loader2, ArrowRight } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const ConflictChecks = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSearching, setIsSearching] = useState(false);
//   const [hasSearched, setHasSearched] = useState(false);
//   const [results, setResults] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchQuery.trim()) return;
    
//     setIsSearching(true);
//     setHasSearched(true);

//     try {
//       const token = localStorage.getItem("token");
//       // Simulating the fuzzy search POST request to FastAPI
//       const res = await fetch("http://localhost:8000/api/legal/conflicts/search", {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}` 
//         },
//         body: JSON.stringify({ query: searchQuery })
//       });

//       if (res.ok) {
//         const json = await res.json();
//         setResults(json.matches || []);
//       } else {
//         // Fallback mock data for demonstration
//         setTimeout(() => {
//           setResults([
//             { id: 1, name: "Hardman & Co.", type: "Corporate Entity", role: "Former Client", case: "CV-2024-112", confidence: 98, date: "2024-03-15" },
//             { id: 2, name: "Daniel Hardman", type: "Individual", role: "Opposing Party", case: "CV-2025-044", confidence: 85, date: "2025-11-20" },
//           ]);
//           setIsSearching(false);
//         }, 1200);
//       }
//     } catch (err) {
//       console.error("Search failed:", err);
//       setIsSearching(false);
//     }
//   };

//   const getConfidenceBadge = (score) => {
//     if (score >= 90) return <span className="bg-rose-100 text-rose-700 px-2 py-1 text-[10px] font-black tracking-widest border border-rose-200 uppercase">{score}% Match</span>;
//     if (score >= 70) return <span className="bg-amber-100 text-amber-700 px-2 py-1 text-[10px] font-black tracking-widest border border-amber-200 uppercase">{score}% Match</span>;
//     return <span className="bg-slate-100 text-slate-700 px-2 py-1 text-[10px] font-black tracking-widest border border-slate-200 uppercase">{score}% Match</span>;
//   };

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
//               <ShieldPlus size={18} className="text-[#8B2626]" />
//               <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Risk Management</span>
//             </div>
//             <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Conflict of Interest</h1>
//             <p className="text-[14px] font-medium text-slate-500 mt-3 font-sans">
//               Query historical client databases using regex and fuzzy-search algorithms.
//             </p>
//           </div>
//         </div>

//         {/* Central Search Engine */}
//         <div className="max-w-4xl mx-auto mt-12">
//           <form onSubmit={handleSearch} className="relative shadow-xl">
//             <input 
//               type="text" 
//               placeholder="Enter Entity Name, Individual, or Tax ID..." 
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-white border-2 border-[#2B2B2B] text-lg font-medium rounded-none pl-6 pr-40 py-6 outline-none focus:border-[#8B2626] transition-colors"
//             />
//             <button 
//               type="submit" 
//               disabled={isSearching}
//               className="absolute right-2 top-2 bottom-2 bg-[#2B2B2B] text-white px-8 font-bold uppercase tracking-widest text-xs hover:bg-[#8B2626] transition-colors flex items-center justify-center min-w-[140px]"
//             >
//               {isSearching ? <Loader2 size={18} className="animate-spin" /> : "Execute Query"}
//             </button>
//           </form>
//         </div>

//         {/* Results Container */}
//         {hasSearched && !isSearching && (
//           <div className="max-w-5xl mx-auto mt-12">
//             <h3 className="font-serif text-2xl text-[#2B2B2B] mb-6 flex items-center gap-3">
//               {results.length > 0 ? <AlertTriangle className="text-[#8B2626]" size={28} /> : <CheckCircle className="text-emerald-600" size={28} />}
//               {results.length > 0 ? `Identified ${results.length} Potential Conflicts` : "No Conflicts Identified"}
//             </h3>
            
//             {results.length > 0 && (
//               <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
//                 <table className="w-full text-left border-collapse">
//                   <thead>
//                     <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
//                       <th className="p-4">Entity Identity</th>
//                       <th className="p-4">Historical Role</th>
//                       <th className="p-4">Associated Matter</th>
//                       <th className="p-4">Date Logged</th>
//                       <th className="p-4 text-right">Confidence</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {results.map((row) => (
//                       <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
//                         <td className="p-4">
//                           <p className="text-sm font-bold text-[#2B2B2B]">{row.name}</p>
//                           <p className="text-[11px] font-medium text-slate-500 uppercase mt-0.5">{row.type}</p>
//                         </td>
//                         <td className="p-4 text-sm font-medium text-slate-700">{row.role}</td>
//                         <td className="p-4 text-sm font-bold text-[#2B2B2B]">{row.case}</td>
//                         <td className="p-4 text-sm text-slate-600">{row.date}</td>
//                         <td className="p-4 text-right">
//                           {getConfidenceBadge(row.confidence)}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
            
//             {results.length === 0 && (
//               <div className="bg-white border border-slate-300 p-12 text-center shadow-sm">
//                 <ShieldPlus size={48} className="text-emerald-600 mx-auto mb-4" />
//                 <p className="text-lg font-bold text-[#2B2B2B]">Clear to Proceed</p>
//                 <p className="text-sm text-slate-500 mt-2">No historical matches found for "{searchQuery}". Ensure alternate spellings and DBAs have been queried.</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ConflictChecks;
import React, { useState } from "react";
import { ShieldPlus, Search, AlertTriangle, CheckCircle, Users, Scale, Loader2, ArrowRight } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/legal/conflicts/search";

const ConflictChecks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);

    try {
      const token = localStorage.getItem("token") || "dev-token";
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({ query: searchQuery })
      });

      if (res.ok) {
        const json = await res.json();
        setResults(json.matches || []);
      } else {
        console.error("Conflict search API returned an error.");
        setResults([]);
      }
    } catch (err) {
      console.error("Search failed:", err);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const getConfidenceBadge = (score) => {
    if (score >= 90) return <span className="bg-rose-100 text-rose-700 px-2 py-1 text-[10px] font-black tracking-widest border border-rose-200 uppercase">{score}% Match</span>;
    if (score >= 70) return <span className="bg-amber-100 text-amber-700 px-2 py-1 text-[10px] font-black tracking-widest border border-amber-200 uppercase">{score}% Match</span>;
    return <span className="bg-slate-100 text-slate-700 px-2 py-1 text-[10px] font-black tracking-widest border border-slate-200 uppercase">{score}% Match</span>;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans relative flex flex-col items-center">
      <div className="pointer-events-none fixed top-[40%] left-[60%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1100px] opacity-[0.03] grayscale mix-blend-multiply">
        <img src={logo} alt="Watermark" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#2B2B2B] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldPlus size={18} className="text-[#8B2626]" />
              <span className="text-[11px] font-bold text-[#8B2626] uppercase tracking-[0.2em]">Risk Management</span>
            </div>
            <h1 className="text-[32px] md:text-[44px] font-serif text-[#2B2B2B] tracking-tight leading-none">Conflict of Interest</h1>
            <p className="text-[14px] font-medium text-slate-500 mt-3 font-sans">
              Query historical client databases using regex and fuzzy-search algorithms.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <form onSubmit={handleSearch} className="relative shadow-xl">
            <input 
              type="text" 
              placeholder="Enter Entity Name, Individual, or Tax ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-[#2B2B2B] text-lg font-medium rounded-none pl-6 pr-40 py-6 outline-none focus:border-[#8B2626] transition-colors"
            />
            <button 
              type="submit" 
              disabled={isSearching}
              className="absolute right-2 top-2 bottom-2 bg-[#2B2B2B] text-white px-8 font-bold uppercase tracking-widest text-xs hover:bg-[#8B2626] transition-colors flex items-center justify-center min-w-[140px]"
            >
              {isSearching ? <Loader2 size={18} className="animate-spin" /> : "Execute Query"}
            </button>
          </form>
        </div>

        {hasSearched && !isSearching && (
          <div className="max-w-5xl mx-auto mt-12">
            <h3 className="font-serif text-2xl text-[#2B2B2B] mb-6 flex items-center gap-3">
              {results.length > 0 ? <AlertTriangle className="text-[#8B2626]" size={28} /> : <CheckCircle className="text-emerald-600" size={28} />}
              {results.length > 0 ? `Identified ${results.length} Potential Conflicts` : "No Conflicts Identified"}
            </h3>
            
            {results.length > 0 && (
              <div className="bg-white border border-slate-300 shadow-sm rounded-none overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FDFBF7] border-b border-slate-300 text-[#2B2B2B] font-bold uppercase text-[11px] tracking-widest">
                      <th className="p-4">Entity Identity</th>
                      <th className="p-4">Historical Role</th>
                      <th className="p-4">Associated Matter</th>
                      <th className="p-4">Date Logged</th>
                      <th className="p-4 text-right">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((row) => (
                      <tr key={row.id} className="border-b border-slate-200 hover:bg-slate-50/80 transition-colors">
                        <td className="p-4">
                          <p className="text-sm font-bold text-[#2B2B2B]">{row.name}</p>
                          <p className="text-[11px] font-medium text-slate-500 uppercase mt-0.5">{row.type}</p>
                        </td>
                        <td className="p-4 text-sm font-medium text-slate-700">{row.role}</td>
                        <td className="p-4 text-sm font-bold text-[#2B2B2B]">{row.case}</td>
                        <td className="p-4 text-sm text-slate-600">{row.date}</td>
                        <td className="p-4 text-right">
                          {getConfidenceBadge(row.confidence)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {results.length === 0 && (
              <div className="bg-white border border-slate-300 p-12 text-center shadow-sm">
                <ShieldPlus size={48} className="text-emerald-600 mx-auto mb-4" />
                <p className="text-lg font-bold text-[#2B2B2B]">Clear to Proceed</p>
                <p className="text-sm text-slate-500 mt-2">No historical matches found for "{searchQuery}". Ensure alternate spellings and DBAs have been queried.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConflictChecks;