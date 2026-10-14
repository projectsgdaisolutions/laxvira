// import React, { useState, useEffect } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import { Search, Loader2, FileText, Users, Receipt } from 'lucide-react';

// const SearchResults = () => {
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get("q") || "";
//   const navigate = useNavigate();
  
//   const [results, setResults] = useState({ invoices: [], customers: [], quotations: [] });
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const performSearch = async () => {
//       if (!query) {
//         setIsLoading(false);
//         return;
//       }
      
//       setIsLoading(true);
//       try {
//         const token = localStorage.getItem("token");
//         // Ensure you create this global search endpoint on your FastAPI backend
//         const res = await fetch(`http://localhost:8000/api/search?q=${encodeURIComponent(query)}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
        
//         if (res.ok) {
//           const data = await res.json();
//           setResults(data);
//         }
//       } catch (err) {
//         console.error("Search failed:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     performSearch();
//   }, [query]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#fbfaf8] flex items-center justify-center">
//         <Loader2 className="animate-spin text-[#C5A059]" size={32} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#fbfaf8] p-8 font-sans">
//       <div className="max-w-5xl mx-auto space-y-8">
//         <div>
//           <h1 className="text-[32px] font-black text-slate-900 tracking-tight">Search Results</h1>
//           <p className="text-slate-500 font-medium mt-1">Showing results for: <strong className="text-[#C5A059]">"{query}"</strong></p>
//         </div>

//         {/* Display logic for your backend data goes here */}
//         <div className="bg-white rounded-[31px] p-8 shadow-[0_8px_25px_rgba(15,23,42,.03)] border border-slate-100">
//            {results.invoices.length === 0 && results.customers.length === 0 ? (
//              <p className="text-slate-400 font-medium">No results found.</p>
//            ) : (
//              <div className="space-y-4">
//                 {/* Map through results.invoices, results.customers, etc. */}
//                 {results.customers.map(c => (
//                   <div key={c.id} className="flex items-center gap-3 p-3 border-b border-slate-100 cursor-pointer hover:bg-slate-50" onClick={() => navigate('/customers')}>
//                     <Users size={16} className="text-[#C5A059]" /> <span className="font-bold text-slate-800">{c.company_name}</span>
//                   </div>
//                 ))}
//              </div>
//            )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchResults;

import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { Search, Loader2, FileText, Users, Receipt, Calendar, Tag } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const navigate = useNavigate();
  const location = useLocation(); // Allows us to catch the state passed from Dashboard
  
  const [results, setResults] = useState({ invoices: [], customers: [], quotations: [] });
  const [intent, setIntent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const performSearch = async () => {
      if (!query) {
        setIsLoading(false);
        return;
      }

      // 1. FAST PATH: Did Dashboard.jsx already do the AI search for us?
      if (location.state?.aiResults) {
        setResults({ 
          invoices: location.state.aiResults, 
          customers: [], 
          quotations: [] 
        });
        setIntent(location.state.intent);
        setIsLoading(false);
        return;
      }
      
      // 2. SLOW PATH: User refreshed the page or hit the URL directly. Fetch it here.
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:8000/api/ai/natural-search?q=${encodeURIComponent(query)}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (res.ok) {
          const data = await res.json();
          setResults({ 
            invoices: data.results || [], 
            customers: [], 
            quotations: [] 
          });
          setIntent(data.intent);
        }
      } catch (err) {
        console.error("Search failed:", err);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [query, location.state]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#fbfaf8] flex items-center justify-center">
        <Loader2 className="animate-spin text-[#C5A059]" size={32} />
      </div>
    );
  }

  // Format dates gracefully
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#fbfaf8] p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-[32px] font-black text-slate-900 tracking-tight">Search Results</h1>
          <p className="text-slate-500 font-medium mt-1">Showing results for: <strong className="text-[#C5A059]">"{query}"</strong></p>
          
          {/* Optional: Show the user what the AI actually understood */}
          {intent && intent.query_type !== "error" && (
            <div className="flex gap-3 mt-4">
              {intent.target_date && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold tracking-wide uppercase">
                  <Calendar size={12} /> {intent.target_date}
                </span>
              )}
              {intent.search_keyword && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[11px] font-bold tracking-wide uppercase">
                  <Tag size={12} /> {intent.search_keyword}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-[31px] p-8 shadow-[0_8px_25px_rgba(15,23,42,.03)] border border-slate-100">
           {results.invoices.length === 0 ? (
             <div className="text-center py-12">
                <Search size={48} className="mx-auto text-slate-200 mb-4" />
                <p className="text-slate-500 font-bold text-lg">No invoices found</p>
                <p className="text-slate-400 text-sm mt-1">Try adjusting your date range or keywords.</p>
             </div>
           ) : (
             <div className="space-y-2">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Matching Invoices</h3>
                
                {/* Map through the invoices returned by the AI */}
                {results.invoices.map(inv => (
                  <div 
                    key={inv.id} 
                    onClick={() => navigate(`/invoices/${inv.id}`)}
                    className="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-slate-100 cursor-pointer hover:bg-slate-50 hover:shadow-sm transition-all" 
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                        <Receipt size={20} className="text-[#C5A059]" />
                      </div>
                      <div>
                        <p className="font-black text-slate-900">{inv.invoice_number}</p>
                        <p className="text-[13px] font-medium text-slate-500 mt-0.5">
                          {inv.customer_name} <span className="mx-2 text-slate-300">•</span> {formatDate(inv.date)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-black text-slate-900 text-lg">₹{inv.total_amount.toLocaleString('en-IN')}</p>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">{inv.payment_method}</p>
                    </div>
                  </div>
                ))}
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;