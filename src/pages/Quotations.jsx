// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FileText, Plus, Search, Loader2, AlertTriangle, Eye, ArrowRightLeft } from "lucide-react";

// // const Quotations = () => {
// //   const [quotations, setQuotations] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchQuotations = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const res = await fetch("http://localhost:8000/api/quotations", {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
        
// //         if (!res.ok) throw new Error("Failed to load quotations");
        
// //         const data = await res.json();
// //         setQuotations(data);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchQuotations();
// //   }, []);

// //   const formatDate = (isoString) => {
// //     const d = new Date(isoString);
// //     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
// //   };

// //   const formatCurrency = (val) => `₹${Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case "Draft": return "bg-gray-100 text-gray-700 border-gray-200";
// //       case "Sent": return "bg-blue-50 text-blue-700 border-blue-200";
// //       case "Accepted": return "bg-green-50 text-green-700 border-green-200";
// //       case "Rejected": return "bg-red-50 text-red-700 border-red-200";
// //       case "Converted": return "bg-purple-50 text-purple-700 border-purple-200";
// //       default: return "bg-gray-50 text-gray-700 border-gray-200";
// //     }
// //   };

// //   const filteredQuotes = quotations.filter(q => 
// //     q.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //     q.quotation_number.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <Loader2 className="animate-spin text-[#db2777]" size={32} />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
// //       <div className="max-w-7xl mx-auto space-y-6">
        
// //         {/* Header */}
// //         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// //           <div>
// //             <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //               <FileText className="text-[#db2777]" /> Quotations & Estimates
// //             </h1>
// //             <p className="text-gray-500 text-sm mt-1">Manage your B2B proposals and convert them to invoices.</p>
// //           </div>
          
// //           <button
// //             onClick={() => navigate("/quotations/new")}
// //             className="flex items-center gap-2 px-4 py-2.5 bg-[#db2777] text-white rounded-xl font-medium hover:bg-[#be185d] transition-all shadow-sm"
// //           >
// //             <Plus size={18} /> Create Quotation
// //           </button>
// //         </div>

// //         {/* Search */}
// //         <div className="relative max-w-md">
// //           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //           <input
// //             type="text"
// //             placeholder="Search by quote number or client..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#db2777] text-sm"
// //           />
// //         </div>

// //         {error && (
// //           <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// //             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// //             <p className="text-sm font-medium">{error}</p>
// //           </div>
// //         )}

// //         {/* Data Table */}
// //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-left text-sm">
// //               <thead className="bg-gray-50 text-xs text-gray-700 uppercase font-semibold border-b border-gray-100">
// //                 <tr>
// //                   <th className="px-6 py-4">Quote No.</th>
// //                   <th className="px-6 py-4">Client / Company</th>
// //                   <th className="px-6 py-4">Date</th>
// //                   <th className="px-6 py-4">Amount</th>
// //                   <th className="px-6 py-4">Status</th>
// //                   <th className="px-6 py-4 text-center">Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-100">
// //                 {filteredQuotes.length === 0 ? (
// //                   <tr>
// //                     <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
// //                       No quotations found. Create your first estimate to get started.
// //                     </td>
// //                   </tr>
// //                 ) : (
// //                   filteredQuotes.map((q) => (
// //                     <tr key={q.id} className="hover:bg-gray-50/50 transition-colors">
// //                       <td className="px-6 py-4 font-mono font-medium text-gray-900">
// //                         {q.quotation_number}
// //                       </td>
// //                       <td className="px-6 py-4 font-semibold text-gray-900">
// //                         {q.company_name}
// //                       </td>
// //                       <td className="px-6 py-4 text-gray-500">
// //                         {formatDate(q.issue_date)}
// //                       </td>
// //                       <td className="px-6 py-4 font-bold text-gray-900">
// //                         {formatCurrency(q.grand_total)}
// //                       </td>
// //                       <td className="px-6 py-4">
// //                         <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(q.status)}`}>
// //                           {q.status}
// //                         </span>
// //                       </td>
// //                       <td className="px-6 py-4">
// //                         <div className="flex items-center justify-center gap-3">
// //                           <button 
// //                             title="View Document"
// //                             className="text-gray-400 hover:text-blue-600 transition-colors"
// //                           >
// //                             <Eye size={18} />
// //                           </button>
// //                           <button 
// //                             title="Convert to Invoice"
// //                             className="text-gray-400 hover:text-green-600 transition-colors"
// //                           >
// //                             <ArrowRightLeft size={18} />
// //                           </button>
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   ))
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Quotations;


// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FileText, Plus, Search, Loader2, AlertTriangle, Eye, ArrowRightLeft } from "lucide-react";

// // const Quotations = () => {
// //   const [quotations, setQuotations] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [isProcessing, setIsProcessing] = useState(null); // Tracks the ID being converted
// //   const [error, setError] = useState(null);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchQuotations();
// //   }, []);

// //   const fetchQuotations = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await fetch("http://localhost:8000/api/quotations", {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
      
// //       if (!res.ok) throw new Error("Failed to load quotations");
      
// //       const data = await res.json();
// //       setQuotations(data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // --- Core Conversion Logic ---
// //   const handleConvert = async (quotationId) => {
// //     setIsProcessing(quotationId);
// //     setError(null);
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await fetch(`http://localhost:8000/api/quotations/${quotationId}/convert`, {
// //         method: "POST",
// //         headers: { Authorization: `Bearer ${token}` }
// //       });

// //       if (!res.ok) {
// //         const errorData = await res.json();
// //         throw new Error(errorData.detail || "Failed to convert quotation");
// //       }

// //       const data = await res.json();
// //       // Route the user directly to the new invoice view
// //       navigate(`/invoice/${data.invoice_id}`);
// //     } catch (err) {
// //       setError(err.message);
// //       setIsProcessing(null);
// //     }
// //   };

// //   const formatDate = (isoString) => {
// //     const d = new Date(isoString);
// //     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
// //   };

// //   const formatCurrency = (val) => `₹${Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case "Draft": return "bg-gray-100 text-gray-700 border-gray-200";
// //       case "Sent": return "bg-blue-50 text-blue-700 border-blue-200";
// //       case "Accepted": return "bg-green-50 text-green-700 border-green-200";
// //       case "Rejected": return "bg-red-50 text-red-700 border-red-200";
// //       case "Converted": return "bg-purple-50 text-purple-700 border-purple-200";
// //       default: return "bg-gray-50 text-gray-700 border-gray-200";
// //     }
// //   };

// //   const filteredQuotes = quotations.filter(q => 
// //     q.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //     q.quotation_number.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <Loader2 className="animate-spin text-[#db2777]" size={32} />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
// //       <div className="max-w-7xl mx-auto space-y-6">
        
// //         {/* Header */}
// //         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// //           <div>
// //             <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //               <FileText className="text-[#db2777]" /> Quotations & Estimates
// //             </h1>
// //             <p className="text-gray-500 text-sm mt-1">Manage your B2B proposals and convert them to invoices.</p>
// //           </div>
          
// //           <button
// //             onClick={() => navigate("/quotations/new")}
// //             className="flex items-center gap-2 px-4 py-2.5 bg-[#db2777] text-white rounded-xl font-medium hover:bg-[#be185d] transition-all shadow-sm"
// //           >
// //             <Plus size={18} /> Create Quotation
// //           </button>
// //         </div>

// //         {/* Search */}
// //         <div className="relative max-w-md">
// //           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
// //           <input
// //             type="text"
// //             placeholder="Search by quote number or client..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-100 focus:border-[#db2777] text-sm"
// //           />
// //         </div>

// //         {error && (
// //           <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// //             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// //             <p className="text-sm font-medium">{error}</p>
// //           </div>
// //         )}

// //         {/* Data Table */}
// //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-left text-sm">
// //               <thead className="bg-gray-50 text-xs text-gray-700 uppercase font-semibold border-b border-gray-100">
// //                 <tr>
// //                   <th className="px-6 py-4">Quote No.</th>
// //                   <th className="px-6 py-4">Client / Company</th>
// //                   <th className="px-6 py-4">Date</th>
// //                   <th className="px-6 py-4">Amount</th>
// //                   <th className="px-6 py-4">Status</th>
// //                   <th className="px-6 py-4 text-center">Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-100">
// //                 {filteredQuotes.length === 0 ? (
// //                   <tr>
// //                     <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
// //                       No quotations found. Create your first estimate to get started.
// //                     </td>
// //                   </tr>
// //                 ) : (
// //                   filteredQuotes.map((q) => (
// //                     <tr key={q.id} className="hover:bg-gray-50/50 transition-colors">
// //                       <td className="px-6 py-4 font-mono font-medium text-gray-900">
// //                         {q.quotation_number}
// //                       </td>
// //                       <td className="px-6 py-4 font-semibold text-gray-900">
// //                         {q.company_name}
// //                       </td>
// //                       <td className="px-6 py-4 text-gray-500">
// //                         {formatDate(q.issue_date)}
// //                       </td>
// //                       <td className="px-6 py-4 font-bold text-gray-900">
// //                         {formatCurrency(q.grand_total)}
// //                       </td>
// //                       <td className="px-6 py-4">
// //                         <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(q.status)}`}>
// //                           {q.status}
// //                         </span>
// //                       </td>
// //                       <td className="px-6 py-4">
// //                         <div className="flex items-center justify-center gap-3">
// //                           <button 
// //                             title="View Document"
// //                             onClick={() => navigate(`/quotation/${q.id}`)}
// //                             className="text-gray-400 hover:text-blue-600 transition-colors"
// //                           >
// //                             <Eye size={18} />
// //                           </button>
                          
// //                           {/* Convert Button Implementation */}
// //                           <button 
// //                             title={q.status === "Converted" ? "Already Converted" : "Convert to Invoice"}
// //                             onClick={() => handleConvert(q.id)}
// //                             disabled={q.status === "Converted" || isProcessing === q.id}
// //                             className={`transition-colors ${
// //                               q.status === "Converted" 
// //                                 ? "text-gray-200 cursor-not-allowed" 
// //                                 : "text-gray-400 hover:text-green-600"
// //                             }`}
// //                           >
// //                             {isProcessing === q.id ? (
// //                               <Loader2 size={18} className="animate-spin text-green-600" />
// //                             ) : (
// //                               <ArrowRightLeft size={18} />
// //                             )}
// //                           </button>
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   ))
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Quotations;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FileText, Plus, Search, Loader2, AlertTriangle, Eye, ArrowRightLeft } from "lucide-react";

// const Quotations = () => {
//   const [quotations, setQuotations] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isProcessing, setIsProcessing] = useState(null); 
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchQuotations();
//   }, []);

//   const fetchQuotations = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/quotations", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
      
//       if (!res.ok) throw new Error("Failed to load quotations");
      
//       const data = await res.json();
//       setQuotations(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleConvert = async (quotationId) => {
//     setIsProcessing(quotationId);
//     setError(null);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/quotations/${quotationId}/convert`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.detail || "Failed to convert quotation");
//       }

//       const data = await res.json();
//       navigate(`/invoice/${data.invoice_id}`);
//     } catch (err) {
//       setError(err.message);
//       setIsProcessing(null);
//     }
//   };

//   const formatDate = (isoString) => {
//     const d = new Date(isoString);
//     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   };

//   const formatCurrency = (val) => `₹${Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Draft": return "bg-slate-100 text-slate-600 border-slate-200";
//       case "Sent": return "bg-blue-50 text-blue-600 border-blue-200";
//       case "Accepted": return "bg-emerald-50 text-emerald-600 border-emerald-200";
//       case "Rejected": return "bg-rose-50 text-rose-600 border-rose-200";
//       case "Converted": return "bg-amber-50 text-amber-600 border-amber-200";
//       default: return "bg-slate-50 text-slate-600 border-slate-200";
//     }
//   };

//   const filteredQuotes = quotations.filter(q => 
//     q.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     q.quotation_number.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#fbfaf8]">
//         <Loader2 className="animate-spin text-[#C5A059]" size={32} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#fbfaf8] relative overflow-hidden font-sans">
      
//       {/* --- Dynamic Architectural Background --- */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/3"></div>
//         <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#101E36]/5 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/3"></div>
//       </div>

//       <div className="relative z-10 p-4 sm:p-8 max-w-7xl mx-auto space-y-8">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//           <div>
//             <h1 className="text-[32px] font-black text-slate-900 tracking-tight flex items-center gap-3">
//               <FileText className="text-[#C5A059]" size={28} /> Quotations
//             </h1>
//             <p className="text-slate-500 text-sm font-medium mt-1">Manage B2B proposals and convert them to invoices.</p>
//           </div>
          
//           <button
//             onClick={() => navigate("/quotations/new")}
//             className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-xl text-[13px] font-bold hover:bg-[#C5A059] hover:text-[#0f172a] transition-all shadow-[0_8px_20px_rgba(15,23,42,0.15)] group"
//           >
//             <Plus size={18} className="text-[#C5A059] group-hover:text-[#0f172a] transition-colors" /> Create Quotation
//           </button>
//         </div>

//         {/* Search */}
//         <div className="relative max-w-md">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//           <input
//             type="text"
//             placeholder="Search by quote number or client..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#C5A059]/10 focus:border-[#C5A059] text-sm font-medium text-slate-700 shadow-sm transition-all"
//           />
//         </div>

//         {error && (
//           <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-600 shadow-sm">
//             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
//             <p className="text-sm font-bold">{error}</p>
//           </div>
//         )}

//         {/* Data Table */}
//         <div className="bg-white rounded-[31px] shadow-[0_8px_25px_rgba(15,23,42,.03)] border border-slate-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-[#f8f9fa] text-[11px] text-slate-500 uppercase tracking-widest font-bold border-b border-slate-100">
//                 <tr>
//                   <th className="px-7 py-5">Quote No.</th>
//                   <th className="px-6 py-5">Client / Company</th>
//                   <th className="px-6 py-5">Date</th>
//                   <th className="px-6 py-5">Amount</th>
//                   <th className="px-6 py-5">Status</th>
//                   <th className="px-7 py-5 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100/80">
//                 {filteredQuotes.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="px-6 py-16 text-center">
//                        <span className="text-sm font-bold text-slate-400 block mb-1">No quotations found.</span>
//                        <span className="text-[12px] font-medium text-slate-300">Create your first estimate to get started.</span>
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredQuotes.map((q) => (
//                     <tr key={q.id} className="hover:bg-slate-50/50 transition-colors">
//                       <td className="px-7 py-5 font-mono font-bold text-slate-600 text-[13px]">
//                         {q.quotation_number}
//                       </td>
//                       <td className="px-6 py-5 font-bold text-slate-900">
//                         {q.company_name}
//                       </td>
//                       <td className="px-6 py-5 text-slate-500 font-medium text-[13px]">
//                         {formatDate(q.issue_date)}
//                       </td>
//                       <td className="px-6 py-5 font-black text-slate-900 text-[15px]">
//                         {formatCurrency(q.grand_total)}
//                       </td>
//                       <td className="px-6 py-5">
//                         <span className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide uppercase border ${getStatusColor(q.status)}`}>
//                           {q.status}
//                         </span>
//                       </td>
//                       <td className="px-7 py-5">
//                         <div className="flex items-center justify-center gap-4">
//                           <button 
//                             title="View Document"
//                             onClick={() => navigate(`/quotation/${q.id}`)}
//                             className="text-slate-400 hover:text-[#C5A059] hover:scale-110 transition-all"
//                           >
//                             <Eye size={18} strokeWidth={2.5} />
//                           </button>
                          
//                           <button 
//                             title={q.status === "Converted" ? "Already Converted" : "Convert to Invoice"}
//                             onClick={() => handleConvert(q.id)}
//                             disabled={q.status === "Converted" || isProcessing === q.id}
//                             className={`transition-all hover:scale-110 ${
//                               q.status === "Converted" 
//                                 ? "text-slate-200 cursor-not-allowed" 
//                                 : "text-slate-400 hover:text-emerald-500"
//                             }`}
//                           >
//                             {isProcessing === q.id ? (
//                               <Loader2 size={18} strokeWidth={2.5} className="animate-spin text-emerald-500" />
//                             ) : (
//                               <ArrowRightLeft size={18} strokeWidth={2.5} />
//                             )}
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Quotations;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Plus, Search, Loader2, AlertTriangle, Eye, ArrowRightLeft } from "lucide-react";
import Header from "../components/Header";

const Quotations = () => {
  const [quotations, setQuotations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(null); 
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuotations();
  }, []);

  const fetchQuotations = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8000/api/quotations", {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!res.ok) throw new Error("Failed to load quotations");
      
      const data = await res.json();
      setQuotations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConvert = async (quotationId) => {
    setIsProcessing(quotationId);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/quotations/${quotationId}/convert`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || "Failed to convert quotation");
      }

      const data = await res.json();
      navigate(`/invoice/${data.invoice_id}`);
    } catch (err) {
      setError(err.message);
      setIsProcessing(null);
    }
  };

  const formatDate = (isoString) => {
    const d = new Date(isoString);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  };

  const formatCurrency = (val) => `₹${Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  const getStatusColor = (status) => {
    switch (status) {
      case "Draft": return "bg-slate-100 text-slate-600 border-slate-200";
      case "Sent": return "bg-blue-50 text-blue-600 border-blue-200";
      case "Accepted": return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "Rejected": return "bg-rose-50 text-rose-600 border-rose-200";
      case "Converted": return "bg-amber-50 text-amber-600 border-amber-200";
      default: return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  const filteredQuotes = quotations.filter(q => 
    q.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.quotation_number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfaf8]">
        <Loader2 className="animate-spin text-[#C5A059]" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      
      {/* --- Premium Executive Background --- */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#fbfaf8] overflow-hidden">
        {/* Volumetric Ambient Lighting */}
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.06)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute top-[30%] left-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.03)_0%,transparent_70%)] blur-[120px] mix-blend-multiply" />
        
        {/* Micro-texture for depth (Brushed/Matte feel) */}
        <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbfaf8]/80 to-[#fbfaf8]" />
      </div>

      <div className="relative z-10 p-4 sm:p-8 max-w-[1400px] mx-auto space-y-8">
        
        {/* Header */}
        <div className="relative z-10 p-4 sm:p-8 max-w-[1400px] mx-auto space-y-8">
        
        {/* ONE LINE ADDS YOUR ENTIRE GLOBAL HEADER! */}
        <Header 
          title="Quotations" 
          subtitle="Manage B2B proposals and convert them to invoices." 
        />

        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate("/quotations/new")}
            className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-xl text-[13px] font-bold hover:bg-[#C5A059] hover:text-[#0f172a] transition-all shadow-md group"
          >
            <Plus size={18} className="text-[#C5A059] group-hover:text-[#0f172a]" /> Create Quotation
          </button>
        </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by quote number or client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#C5A059]/10 focus:border-[#C5A059] text-sm font-medium text-slate-700 shadow-[0_4px_15px_rgba(15,23,42,0.02)] transition-all"
          />
        </div>

        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-600 shadow-sm">
            <AlertTriangle size={20} className="shrink-0 mt-0.5" />
            <p className="text-sm font-bold">{error}</p>
          </div>
        )}

        {/* Data Table */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[31px] shadow-[0_8px_30px_rgba(15,23,42,.04)] border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f8f9fa]/80 text-[11px] text-slate-500 uppercase tracking-widest font-bold border-b border-slate-100">
                <tr>
                  <th className="px-7 py-5">Quote No.</th>
                  <th className="px-6 py-5">Client / Company</th>
                  <th className="px-6 py-5">Date</th>
                  <th className="px-6 py-5">Amount</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-7 py-5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/80">
                {filteredQuotes.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-16 text-center">
                       <span className="text-sm font-bold text-slate-400 block mb-1">No quotations found.</span>
                       <span className="text-[12px] font-medium text-slate-300">Create your first estimate to get started.</span>
                    </td>
                  </tr>
                ) : (
                  filteredQuotes.map((q) => (
                    <tr key={q.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-7 py-5 font-mono font-bold text-slate-600 text-[13px]">
                        {q.quotation_number}
                      </td>
                      <td className="px-6 py-5 font-bold text-slate-900">
                        {q.company_name}
                      </td>
                      <td className="px-6 py-5 text-slate-500 font-medium text-[13px]">
                        {formatDate(q.issue_date)}
                      </td>
                      <td className="px-6 py-5 font-black text-slate-900 text-[15px]">
                        {formatCurrency(q.grand_total)}
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide uppercase border ${getStatusColor(q.status)}`}>
                          {q.status}
                        </span>
                      </td>
                      <td className="px-7 py-5">
                        <div className="flex items-center justify-center gap-4">
                          <button 
                            title="View Document"
                            onClick={() => navigate(`/quotation/${q.id}`)}
                            className="text-slate-400 hover:text-[#C5A059] hover:scale-110 transition-all"
                          >
                            <Eye size={18} strokeWidth={2.5} />
                          </button>
                          
                          <button 
                            title={q.status === "Converted" ? "Already Converted" : "Convert to Invoice"}
                            onClick={() => handleConvert(q.id)}
                            disabled={q.status === "Converted" || isProcessing === q.id}
                            className={`transition-all hover:scale-110 ${
                              q.status === "Converted" 
                                ? "text-slate-200 cursor-not-allowed" 
                                : "text-slate-400 hover:text-emerald-500"
                            }`}
                          >
                            {isProcessing === q.id ? (
                              <Loader2 size={18} strokeWidth={2.5} className="animate-spin text-emerald-500" />
                            ) : (
                              <ArrowRightLeft size={18} strokeWidth={2.5} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Quotations;