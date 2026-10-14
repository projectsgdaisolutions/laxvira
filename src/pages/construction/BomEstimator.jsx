// import React, { useState, useEffect } from "react";
// import { Hammer, Calculator, Save, Download, AlertCircle, Plus, Search, Loader2 } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const BomEstimator = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   // State for interactive estimation grid
//   const [materials, setMaterials] = useState([
//     { id: 1, category: "Structural", item: "Rebar TMT 12mm", unit: "Tonne", quantity: 12, rate: 58000, margin: 15 },
//     { id: 2, category: "Masonry", item: "AAC Blocks 600x200x150", unit: "Cubic Meter", quantity: 85, rate: 3200, margin: 18 },
//     { id: 3, category: "Concrete", item: "Ready Mix M30 Grade", unit: "Cubic Meter", quantity: 240, rate: 4500, margin: 10 },
//   ]);

//   const updateMaterial = (id, field, value) => {
//     setMaterials(materials.map(m => m.id === id ? { ...m, [field]: parseFloat(value) || 0 } : m));
//   };

//   const calculateRowTotal = (qty, rate, margin) => {
//     const base = qty * rate;
//     const markup = base * (margin / 100);
//     return base + markup;
//   };

//   const totals = materials.reduce((acc, curr) => {
//     const base = curr.quantity * curr.rate;
//     const total = calculateRowTotal(curr.quantity, curr.rate, curr.margin);
//     return { baseCost: acc.baseCost + base, finalCost: acc.finalCost + total };
//   }, { baseCost: 0, finalCost: 0 });

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

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
//               <Calculator size={30} strokeWidth={2.5} />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <Hammer size={14} className="text-amber-500" />
//                 <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Procurement</span>
//               </div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">BOM Estimator Engine</h1>
//             </div>
//           </div>
//           <div className="flex gap-3">
//             <button className="flex items-center gap-2 bg-stone-800 text-white px-5 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-700 hover:bg-stone-700 transition-colors">
//               <Save size={16} /> Save Draft
//             </button>
//             <button className="flex items-center gap-2 bg-amber-500 text-stone-900 px-5 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-900 hover:bg-amber-400 transition-colors">
//               <Download size={16} /> Export BOM
//             </button>
//           </div>
//         </div>

//         {/* Totals HUD */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white border-2 border-stone-300 p-6 rounded-sm shadow-sm">
//             <p className="text-[11px] font-black text-stone-500 uppercase tracking-widest mb-1">Raw Material Cost</p>
//             <p className="text-3xl font-black text-stone-900">{formatCurr(totals.baseCost)}</p>
//           </div>
//           <div className="bg-white border-2 border-stone-300 p-6 rounded-sm shadow-sm">
//             <p className="text-[11px] font-black text-stone-500 uppercase tracking-widest mb-1">Projected Margin</p>
//             <p className="text-3xl font-black text-emerald-600">+{formatCurr(totals.finalCost - totals.baseCost)}</p>
//           </div>
//           <div className="bg-stone-900 border-2 border-stone-900 p-6 rounded-sm shadow-sm">
//             <p className="text-[11px] font-black text-amber-500 uppercase tracking-widest mb-1">Estimated Tender Value</p>
//             <p className="text-3xl font-black text-white">{formatCurr(totals.finalCost)}</p>
//           </div>
//         </div>

//         {/* Interactive Data Grid */}
//         <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
//           <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
//             <div className="relative w-72 border-2 border-stone-200">
//               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
//               <input 
//                 type="text" placeholder="Filter materials..." 
//                 value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-white text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500"
//               />
//             </div>
//             <button className="text-xs font-black text-stone-900 uppercase tracking-wider flex items-center gap-2 hover:text-amber-600 transition-colors">
//               <Plus size={14} /> Add Line Item
//             </button>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse min-w-[1000px]">
//               <thead>
//                 <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
//                   <th className="p-4 w-48">Classification</th>
//                   <th className="p-4">Material Specification</th>
//                   <th className="p-4 w-32">Unit Qty</th>
//                   <th className="p-4 w-40">Base Rate (₹)</th>
//                   <th className="p-4 w-32">Markup (%)</th>
//                   <th className="p-4 text-right w-48">Projected Total (₹)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {materials.map((row) => (
//                   <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
//                     <td className="p-4 text-xs font-bold text-stone-500 uppercase">{row.category}</td>
//                     <td className="p-4 text-sm font-black text-stone-900">{row.item}</td>
//                     <td className="p-4">
//                       <div className="flex items-center">
//                         <input type="number" value={row.quantity} onChange={(e) => updateMaterial(row.id, 'quantity', e.target.value)} className="w-16 p-2 border-2 border-stone-300 text-sm font-bold text-stone-900 rounded-none focus:border-amber-500 outline-none" />
//                         <span className="ml-2 text-[10px] font-bold text-stone-400 uppercase">{row.unit}</span>
//                       </div>
//                     </td>
//                     <td className="p-4">
//                       <input type="number" value={row.rate} onChange={(e) => updateMaterial(row.id, 'rate', e.target.value)} className="w-24 p-2 border-2 border-stone-300 text-sm font-bold text-stone-900 rounded-none focus:border-amber-500 outline-none" />
//                     </td>
//                     <td className="p-4">
//                       <input type="number" value={row.margin} onChange={(e) => updateMaterial(row.id, 'margin', e.target.value)} className="w-16 p-2 border-2 border-stone-300 text-sm font-bold text-emerald-700 rounded-none focus:border-amber-500 outline-none" />
//                     </td>
//                     <td className="p-4 text-right text-sm font-black text-stone-900">
//                       {formatCurr(calculateRowTotal(row.quantity, row.rate, row.margin))}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BomEstimator;

import React, { useState, useEffect } from "react";
import { Hammer, Calculator, Save, Download, Plus, Search, Loader2 } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/construction/assets/bom";

const BomEstimator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error("Failed to load BOM data");
      const data = await res.json();
      setMaterials(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`${API_BASE}/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(materials),
      });
      if (!res.ok) throw new Error("Failed to save draft");
      alert("BOM Draft saved successfully.");
    } catch (err) {
      console.error(err);
      alert("Error saving draft.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddLineItem = async () => {
    const newItem = {
      category: "Uncategorized",
      item: "New Material Specification",
      unit: "Unit",
      quantity: 0,
      rate: 0,
      margin: 0
    };

    try {
      const res = await fetch(`${API_BASE}/item`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      if (!res.ok) throw new Error("Failed to add line item");
      const addedItem = await res.json();
      setMaterials([...materials, addedItem]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateMaterial = (id, field, value) => {
    setMaterials(materials.map(m => m.id === id ? { ...m, [field]: field === 'item' || field === 'category' || field === 'unit' ? value : parseFloat(value) || 0 } : m));
  };

  const calculateRowTotal = (qty, rate, margin) => {
    const base = qty * rate;
    const markup = base * (margin / 100);
    return base + markup;
  };

  const filteredMaterials = materials.filter(m => 
    m.item.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totals = filteredMaterials.reduce((acc, curr) => {
    const base = curr.quantity * curr.rate;
    const total = calculateRowTotal(curr.quantity, curr.rate, curr.margin);
    return { baseCost: acc.baseCost + base, finalCost: acc.finalCost + total };
  }, { baseCost: 0, finalCost: 0 });

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

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

      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-stone-900 border-b-4 border-amber-500 px-6 py-5 rounded-sm shadow-xl">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 bg-amber-500 rounded-sm flex items-center justify-center shadow-inner border-2 border-amber-600 shrink-0 text-stone-900">
              <Calculator size={30} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Hammer size={14} className="text-amber-500" />
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Procurement</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">BOM Estimator Engine</h1>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleSaveDraft}
              disabled={isSaving}
              className="flex items-center justify-center min-w-[140px] gap-2 bg-stone-800 text-white px-5 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-700 hover:bg-stone-700 transition-colors disabled:opacity-50"
            >
              {isSaving ? <Loader2 size={16} className="animate-spin" /> : <><Save size={16} /> Save Draft</>}
            </button>
            <button className="flex items-center gap-2 bg-amber-500 text-stone-900 px-5 py-3 text-xs font-black uppercase tracking-widest rounded-sm border-2 border-stone-900 hover:bg-amber-400 transition-colors">
              <Download size={16} /> Export BOM
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-stone-300 p-6 rounded-sm shadow-sm">
            <p className="text-[11px] font-black text-stone-500 uppercase tracking-widest mb-1">Raw Material Cost</p>
            <p className="text-3xl font-black text-stone-900">{formatCurr(totals.baseCost)}</p>
          </div>
          <div className="bg-white border-2 border-stone-300 p-6 rounded-sm shadow-sm">
            <p className="text-[11px] font-black text-stone-500 uppercase tracking-widest mb-1">Projected Margin</p>
            <p className="text-3xl font-black text-emerald-600">+{formatCurr(totals.finalCost - totals.baseCost)}</p>
          </div>
          <div className="bg-stone-900 border-2 border-stone-900 p-6 rounded-sm shadow-sm">
            <p className="text-[11px] font-black text-amber-500 uppercase tracking-widest mb-1">Estimated Tender Value</p>
            <p className="text-3xl font-black text-white">{formatCurr(totals.finalCost)}</p>
          </div>
        </div>

        <div className="bg-white border-2 border-stone-300 shadow-sm rounded-sm overflow-hidden">
          <div className="p-4 border-b-2 border-stone-200 flex justify-between items-center bg-stone-50">
            <div className="relative w-full sm:w-72 border-2 border-stone-200 bg-white">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input 
                type="text" placeholder="Filter materials..." 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-stone-700 rounded-none pl-10 pr-4 py-2 outline-none focus:border-amber-500"
              />
            </div>
            <button 
              onClick={handleAddLineItem}
              className="text-xs font-black text-stone-900 uppercase tracking-wider flex items-center gap-2 hover:text-amber-600 transition-colors ml-4 shrink-0"
            >
              <Plus size={14} /> Add Line Item
            </button>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-stone-100 border-b-2 border-stone-300 text-stone-800 font-black uppercase text-[11px] tracking-widest">
                  <th className="p-4 w-48">Classification</th>
                  <th className="p-4 min-w-[200px]">Material Specification</th>
                  <th className="p-4 w-40">Unit Qty</th>
                  <th className="p-4 w-40">Base Rate (₹)</th>
                  <th className="p-4 w-32">Markup (%)</th>
                  <th className="p-4 text-right w-48">Projected Total (₹)</th>
                </tr>
              </thead>
              <tbody>
                {filteredMaterials.map((row) => (
                  <tr key={row.id} className="border-b border-stone-200 hover:bg-stone-50 transition-colors group">
                    <td className="p-4">
                      <input 
                        type="text" 
                        value={row.category} 
                        onChange={(e) => updateMaterial(row.id, 'category', e.target.value)} 
                        className="w-full bg-transparent text-xs font-bold text-stone-500 uppercase border-b border-transparent focus:border-stone-400 outline-none" 
                      />
                    </td>
                    <td className="p-4">
                      <input 
                        type="text" 
                        value={row.item} 
                        onChange={(e) => updateMaterial(row.id, 'item', e.target.value)} 
                        className="w-full bg-transparent text-sm font-black text-stone-900 border-b border-transparent focus:border-stone-400 outline-none" 
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <input 
                          type="number" 
                          min="0"
                          value={row.quantity} 
                          onChange={(e) => updateMaterial(row.id, 'quantity', e.target.value)} 
                          className="w-16 p-2 border-2 border-stone-300 text-sm font-bold text-stone-900 rounded-none focus:border-amber-500 outline-none bg-white" 
                        />
                        <input 
                          type="text" 
                          value={row.unit} 
                          onChange={(e) => updateMaterial(row.id, 'unit', e.target.value)} 
                          className="ml-2 w-16 bg-transparent text-[10px] font-bold text-stone-400 uppercase border-b border-transparent focus:border-stone-400 outline-none" 
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <input 
                        type="number" 
                        min="0"
                        value={row.rate} 
                        onChange={(e) => updateMaterial(row.id, 'rate', e.target.value)} 
                        className="w-24 p-2 border-2 border-stone-300 text-sm font-bold text-stone-900 rounded-none focus:border-amber-500 outline-none bg-white" 
                      />
                    </td>
                    <td className="p-4">
                      <input 
                        type="number" 
                        min="0"
                        value={row.margin} 
                        onChange={(e) => updateMaterial(row.id, 'margin', e.target.value)} 
                        className="w-16 p-2 border-2 border-stone-300 text-sm font-bold text-emerald-700 rounded-none focus:border-amber-500 outline-none bg-white" 
                      />
                    </td>
                    <td className="p-4 text-right text-sm font-black text-stone-900">
                      {formatCurr(calculateRowTotal(row.quantity, row.rate, row.margin))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BomEstimator;