// import React, { useState } from "react";
// import { PackageSearch, AlertTriangle, ArrowRightLeft } from "lucide-react";

// const IngredientInventory = () => {
//   const [stock] = useState([
//     { id: "ING-01", name: "00 Flour", category: "Dry Goods", qty: 45, unit: "kg", threshold: 10, status: "GOOD" },
//     { id: "ING-02", name: "Truffle Oil", category: "Pantry", qty: 2, unit: "L", threshold: 5, status: "LOW STOCK" },
//   ]);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      
//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg text-white shrink-0"><PackageSearch size={28} /></div>
//             <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Ingredient Inventory</h1>
//           </div>
//         </div>

//         <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm rounded-3xl overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-white/40 border-b border-white/50 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Ingredient</th>
//                 <th className="p-4 text-right">Current Stock</th>
//                 <th className="p-4 text-center">Status</th>
//                 <th className="p-4 text-right">Restock</th>
//               </tr>
//             </thead>
//             <tbody>
//               {stock.map((row) => (
//                 <tr key={row.id} className="border-b border-white/40 hover:bg-white/80 transition-colors">
//                   <td className="p-4">
//                     <p className="text-sm font-black text-slate-900">{row.name}</p>
//                     <p className="text-[10px] font-bold text-slate-500 uppercase">{row.category}</p>
//                   </td>
//                   <td className="p-4 text-sm font-black text-slate-900 text-right">{row.qty} {row.unit}</td>
//                   <td className="p-4 text-center">
//                     {row.status === "LOW STOCK" ? (
//                       <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-1 rounded-lg"><AlertTriangle size={12}/> Low</span>
//                     ) : (
//                       <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-1 rounded-lg">Adequate</span>
//                     )}
//                   </td>
//                   <td className="p-4 text-right"><button className="p-2 text-slate-500 hover:text-orange-500 transition-colors"><ArrowRightLeft size={18} /></button></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IngredientInventory;

import React, { useState, useEffect } from "react";
import { PackageSearch, AlertTriangle, ArrowRightLeft, Loader2 } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/restaurant/inventory";

const IngredientInventory = () => {
  const [stock, setStock] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(API_BASE);
      const json = await res.json();
      setStock(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleRestock = async (id) => {
    await fetch(`${API_BASE}/${id}/restock`, { method: "PATCH" });
    fetchData();
  };

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-orange-500" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg text-white shrink-0"><PackageSearch size={28} /></div>
            <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Ingredient Inventory</h1>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm rounded-3xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/40 border-b border-white/50 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Ingredient</th>
                <th className="p-4 text-right">Current Stock</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Restock</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((row) => (
                <tr key={row.id} className="border-b border-white/40 hover:bg-white/80 transition-colors">
                  <td className="p-4">
                    <p className="text-sm font-black text-slate-900">{row.name}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">{row.category}</p>
                  </td>
                  <td className="p-4 text-sm font-black text-slate-900 text-right">{row.qty} {row.unit}</td>
                  <td className="p-4 text-center">
                    {row.status === "LOW STOCK" ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-1 rounded-lg"><AlertTriangle size={12}/> Low</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-1 rounded-lg">Adequate</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleRestock(row.id)} className="p-2 text-slate-500 hover:text-orange-500 transition-colors"><ArrowRightLeft size={18} /></button>
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
export default IngredientInventory;