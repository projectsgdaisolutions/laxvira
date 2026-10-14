// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   ReceiptText, 
//   Search, 
//   Eye, 
//   Loader2, 
//   AlertTriangle,
//   Calendar
// } from "lucide-react";

// const Invoices = () => {
//   const [invoices, setInvoices] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchInvoices = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch("http://localhost:8000/api/invoices", {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         if (!response.ok) throw new Error("Failed to fetch invoices");

//         const data = await response.json();
//         setInvoices(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchInvoices();
//   }, []);

//   const formatCurrency = (val) => `₹${Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
  
//   const formatDate = (isoString) => {
//     const d = new Date(isoString);
//     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
//   };

//   const filteredInvoices = invoices.filter(inv => 
//     inv.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     String(inv.id).includes(searchQuery)
//   );

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <Loader2 className="animate-spin text-blue-600" size={32} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
//       <div className="max-w-7xl mx-auto space-y-6">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
//               <ReceiptText className="text-blue-600" /> Transaction History
//             </h1>
//             <p className="text-gray-500 mt-1">View and manage all your past invoices.</p>
//           </div>
          
//           <div className="relative w-full sm:w-72">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search by name or Invoice ID..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-sm"
//             />
//           </div>
//         </div>

//         {error && (
//           <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
//             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
//             <p className="text-sm font-medium">{error}</p>
//           </div>
//         )}

//         {/* Data Table */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm text-gray-500">
//               <thead className="bg-gray-50/50 text-xs text-gray-700 uppercase font-semibold border-b border-gray-100">
//                 <tr>
//                   <th className="px-6 py-4">Invoice ID</th>
//                   <th className="px-6 py-4">Date & Time</th>
//                   <th className="px-6 py-4">Customer Name</th>
//                   <th className="px-6 py-4">Payment Method</th>
//                   <th className="px-6 py-4 text-right">Total Amount</th>
//                   <th className="px-6 py-4 text-center">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {filteredInvoices.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
//                       No invoices found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredInvoices.map((inv) => (
//                     <tr key={inv.id} className="hover:bg-gray-50/50 transition-colors">
//                       <td className="px-6 py-4 font-medium text-gray-900">
//                         #{String(inv.id).padStart(6, '0')}
//                       </td>
//                       <td className="px-6 py-4 flex items-center gap-2">
//                         <Calendar size={14} className="text-gray-400" />
//                         {formatDate(inv.date)}
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className={`font-medium ${inv.customer_name === 'Walk-in Customer' ? 'text-gray-400 italic' : 'text-gray-900'}`}>
//                           {inv.customer_name}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-100">
//                           {inv.payment_method}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-right font-bold text-gray-900">
//                         {formatCurrency(inv.total_amount)}
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         <button 
//                           onClick={() => navigate(`/invoice/${inv.id}`)}
//                           className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                         >
//                           <Eye size={16} /> View
//                         </button>
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

// export default Invoices;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ReceiptText, 
  Search, 
  Eye, 
  Loader2, 
  AlertTriangle,
  Calendar,
  Plus
} from "lucide-react";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/invoices", {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) throw new Error("Failed to fetch invoices");

        const data = await response.json();
        setInvoices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const formatCurrency = (val) => `₹${Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
  
  const formatDate = (isoString) => {
    const d = new Date(isoString);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  const filteredInvoices = invoices.filter(inv => 
    inv.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(inv.id).includes(searchQuery)
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EEF1F8]">
        <Loader2 className="animate-spin text-brand-gold" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEF1F8] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header with New Invoice Action */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-brand-navy flex items-center gap-3 tracking-tight">
              <ReceiptText className="text-brand-gold" size={28} /> Transaction History
            </h1>
            <p className="text-slate-500 mt-1">View and manage all your past invoices.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by name or Invoice ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all text-sm shadow-sm"
              />
            </div>
            
            <button
              onClick={() => navigate('/create-invoice')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-brand-goldLight transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              <Plus size={18} /> New Invoice
            </button>
          </div>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600 shadow-sm">
            <AlertTriangle size={20} className="shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-brand-navy text-xs text-white uppercase tracking-wider font-semibold border-b border-brand-navy">
                <tr>
                  <th className="px-6 py-4">Invoice ID</th>
                  <th className="px-6 py-4">Date & Time</th>
                  <th className="px-6 py-4">Customer Name</th>
                  <th className="px-6 py-4">Payment Method</th>
                  <th className="px-6 py-4 text-right">Total Amount</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredInvoices.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                      No invoices found. Click "New Invoice" to create one.
                    </td>
                  </tr>
                ) : (
                  filteredInvoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-brand-navy">
                        #{String(inv.id).padStart(6, '0')}
                      </td>
                      <td className="px-6 py-4 flex items-center gap-2 text-slate-500 font-medium">
                        <Calendar size={14} className="text-brand-gold" />
                        {formatDate(inv.date)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-semibold ${inv.customer_name === 'Walk-in Customer' ? 'text-slate-400 italic' : 'text-brand-navy'}`}>
                          {inv.customer_name}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                          {inv.payment_method || "N/A"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-black text-brand-navy text-base">
                        {formatCurrency(inv.total_amount)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button 
                          onClick={() => navigate(`/invoice/${inv.id}`)}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-bold text-brand-navy bg-slate-100 hover:bg-brand-gold hover:text-brand-navy rounded-lg transition-colors border border-slate-200 hover:border-brand-gold shadow-sm"
                        >
                          <Eye size={16} /> View
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
    </div>
  );
};

export default Invoices;