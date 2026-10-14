// import React, { useState } from "react";
// import { Utensils, Search, Plus, Calculator, ChevronRight } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const RecipeCosting = () => {
//   const [recipes] = useState([
//     { id: "R-01", name: "Truffle Risotto", category: "Mains", cost: 185.50, price: 850, margin: 78.1 },
//     { id: "R-02", name: "Margherita Pizza", category: "Mains", cost: 95.00, price: 450, margin: 78.8 },
//     { id: "R-03", name: "Tiramisu", category: "Desserts", cost: 110.20, price: 350, margin: 68.5 },
//   ]);

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', {minimumFractionDigits: 2})}`;

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
//       <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0"></div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0 text-white">
//               <Calculator size={28} />
//             </div>
//             <div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Menu & Recipe Costing</h1>
//             </div>
//           </div>
//           <button className="bg-gradient-to-r from-orange-400 to-rose-500 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform flex items-center gap-2">
//             <Plus size={16} /> New Recipe BOM
//           </button>
//         </div>

//         <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm rounded-3xl overflow-hidden">
//           <div className="p-4 border-b border-white/50 flex justify-between items-center bg-white/40">
//             <div className="relative w-72">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//               <input type="text" placeholder="Search menu items..." className="w-full bg-white/50 border border-white text-sm font-bold text-slate-700 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-400/20" />
//             </div>
//           </div>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-white/40 border-b border-white/50 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
//                 <th className="p-4">Menu Item</th>
//                 <th className="p-4">Category</th>
//                 <th className="p-4 text-right">Raw Cost</th>
//                 <th className="p-4 text-right">Selling Price</th>
//                 <th className="p-4 text-right">Gross Margin</th>
//                 <th className="p-4"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {recipes.map((row) => (
//                 <tr key={row.id} className="border-b border-white/40 hover:bg-white/80 transition-colors cursor-pointer group">
//                   <td className="p-4">
//                     <p className="text-sm font-black text-slate-900 flex items-center gap-2"><Utensils size={14} className="text-orange-400"/> {row.name}</p>
//                     <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{row.id}</p>
//                   </td>
//                   <td className="p-4 text-sm font-bold text-slate-600">{row.category}</td>
//                   <td className="p-4 text-right text-sm font-black text-slate-900">{formatCurr(row.cost)}</td>
//                   <td className="p-4 text-right text-sm font-black text-slate-900">{formatCurr(row.price)}</td>
//                   <td className="p-4 text-right">
//                     <span className="inline-flex items-center px-2.5 py-1 text-xs font-black bg-emerald-100 text-emerald-700 rounded-lg">{row.margin}%</span>
//                   </td>
//                   <td className="p-4 text-right">
//                     <ChevronRight size={18} className="text-slate-400 group-hover:text-orange-500 transition-colors ml-auto" />
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

// export default RecipeCosting;

import React, { useState, useEffect } from "react";
import { Utensils, Search, Plus, Calculator, ChevronRight, Loader2, X } from "lucide-react";

const API_BASE = "http://127.0.0.1:8000/api/restaurant/recipes";

const RecipeCosting = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", category: "Mains", cost: "", price: "" });

  const fetchData = async () => {
    try {
      const res = await fetch(API_BASE);
      const json = await res.json();
      setRecipes(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    await fetch(API_BASE, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        cost: parseFloat(formData.cost) || 0,
        price: parseFloat(formData.price) || 0
      })
    });
    setIsModalOpen(false); setFormData({ name: "", category: "Mains", cost: "", price: "" });
    fetchData();
  };

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
  const filtered = recipes.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-orange-500" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 z-0"></div>

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30 shrink-0 text-white">
              <Calculator size={28} />
            </div>
            <div>
              <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Menu & Recipe Costing</h1>
            </div>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-orange-400 to-rose-500 text-white px-6 py-3 text-sm font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform flex items-center gap-2">
            <Plus size={16} /> New Recipe BOM
          </button>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm rounded-3xl overflow-hidden">
          <div className="p-4 border-b border-white/50 flex justify-between items-center bg-white/40">
            <div className="relative w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search menu items..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white/50 border border-white text-sm font-bold text-slate-700 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-400/20" />
            </div>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/40 border-b border-white/50 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
                <th className="p-4">Menu Item</th>
                <th className="p-4">Category</th>
                <th className="p-4 text-right">Raw Cost</th>
                <th className="p-4 text-right">Selling Price</th>
                <th className="p-4 text-right">Gross Margin</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.id} className="border-b border-white/40 hover:bg-white/80 transition-colors cursor-pointer group">
                  <td className="p-4">
                    <p className="text-sm font-black text-slate-900 flex items-center gap-2"><Utensils size={14} className="text-orange-400"/> {row.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{row.id}</p>
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-600">{row.category}</td>
                  <td className="p-4 text-right text-sm font-black text-slate-900">{formatCurr(row.cost)}</td>
                  <td className="p-4 text-right text-sm font-black text-slate-900">{formatCurr(row.price)}</td>
                  <td className="p-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-1 text-xs font-black bg-emerald-100 text-emerald-700 rounded-lg">{row.margin}%</span>
                  </td>
                  <td className="p-4 text-right">
                    <ChevronRight size={18} className="text-slate-400 group-hover:text-orange-500 transition-colors ml-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4">
          <div className="bg-white border border-white/80 w-full max-w-md p-6 rounded-3xl shadow-2xl">
            <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-3">
              <h3 className="text-xl font-black text-slate-900">New Recipe BOM</h3>
              <button onClick={()=>setIsModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X size={20}/></button>
            </div>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Item Name</label>
                <input required type="text" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} className="w-full bg-slate-100 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Category</label>
                <select value={formData.category} onChange={e=>setFormData({...formData, category:e.target.value})} className="w-full bg-slate-100 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-400">
                  <option value="Starters">Starters</option>
                  <option value="Mains">Mains</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Beverages">Beverages</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Total Raw Cost</label>
                  <input required type="number" step="0.01" value={formData.cost} onChange={e=>setFormData({...formData, cost:e.target.value})} className="w-full bg-slate-100 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-400" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Target Sale Price</label>
                  <input required type="number" step="0.01" value={formData.price} onChange={e=>setFormData({...formData, price:e.target.value})} className="w-full bg-slate-100 border border-slate-200 rounded-xl p-2.5 text-sm outline-none focus:border-orange-400" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="submit" className="bg-slate-900 text-white px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-orange-500">Calculate & Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default RecipeCosting;