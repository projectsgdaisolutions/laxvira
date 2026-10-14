// import React, { useState, useEffect } from "react";
// import { TrendingUp, Activity, DollarSign, Loader2, ArrowUpRight, ArrowDownRight } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const ProfitabilityForecast = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setData([
//         { id: "PRJ-801", name: "Highland Commercial", budget: 12500000, currentCost: 4800000, projectedCost: 11200000, margin: 10.4, trend: "up" },
//         { id: "PRJ-802", name: "Sector 4 Residential", budget: 8500000, currentCost: 7900000, projectedCost: 8900000, margin: -4.7, trend: "down" },
//       ]);
//       setIsLoading(false);
//     }, 400);
//   }, []);

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN')}`;

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
//               <TrendingUp size={30} strokeWidth={2.5} />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <Activity size={14} className="text-amber-500" />
//                 <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Data Analytics</span>
//               </div>
//               <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Profitability Forecast</h1>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {data.map((project) => {
//             const isLoss = project.margin < 0;
//             return (
//               <div key={project.id} className="bg-white border-2 border-stone-300 rounded-sm shadow-sm p-6 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-black text-stone-900 uppercase leading-tight mb-1">{project.name}</h3>
//                   <p className="text-xs font-bold text-stone-500 uppercase mb-6">{project.id}</p>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center border-b border-stone-200 pb-2">
//                     <span className="text-xs font-black text-stone-400 uppercase tracking-widest">Approved Budget</span>
//                     <span className="text-sm font-black text-stone-900">{formatCurr(project.budget)}</span>
//                   </div>
//                   <div className="flex justify-between items-center border-b border-stone-200 pb-2">
//                     <span className="text-xs font-black text-stone-400 uppercase tracking-widest">Burn Rate to Date</span>
//                     <span className="text-sm font-black text-amber-600">{formatCurr(project.currentCost)}</span>
//                   </div>
//                   <div className="flex justify-between items-center border-b border-stone-200 pb-2">
//                     <span className="text-xs font-black text-stone-400 uppercase tracking-widest">Projected Final Cost</span>
//                     <span className={`text-sm font-black ${isLoss ? 'text-rose-600' : 'text-stone-900'}`}>{formatCurr(project.projectedCost)}</span>
//                   </div>
//                 </div>

//                 <div className={`mt-6 p-4 border-2 rounded-sm flex items-center justify-between ${isLoss ? 'bg-rose-50 border-rose-200' : 'bg-emerald-50 border-emerald-200'}`}>
//                   <span className="text-xs font-black uppercase tracking-widest text-stone-700">Projected Margin</span>
//                   <div className={`flex items-center gap-2 text-xl font-black ${isLoss ? 'text-rose-600' : 'text-emerald-700'}`}>
//                     {isLoss ? <ArrowDownRight size={24} /> : <ArrowUpRight size={24} />}
//                     {project.margin}%
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfitabilityForecast;

import React, { useState, useEffect } from "react";
import { TrendingUp, Activity, DollarSign, Loader2, ArrowUpRight, ArrowDownRight } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/construction/assets/profitability";

const ProfitabilityForecast = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchForecastData();
  }, []);

  const fetchForecastData = async () => {
    try {
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error("Failed to load profitability data");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN')}`;

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
              <TrendingUp size={30} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Activity size={14} className="text-amber-500" />
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">Data Analytics</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-black text-white tracking-tight leading-none uppercase">Profitability Forecast</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((project) => {
            const isLoss = project.margin < 0;
            return (
              <div key={project.id} className="bg-white border-2 border-stone-300 rounded-sm shadow-sm p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-stone-900 uppercase leading-tight mb-1">{project.name}</h3>
                  <p className="text-xs font-bold text-stone-500 uppercase mb-6">{project.id}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-xs font-black text-stone-400 uppercase tracking-widest">Approved Budget</span>
                    <span className="text-sm font-black text-stone-900">{formatCurr(project.budget)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-xs font-black text-stone-400 uppercase tracking-widest">Burn Rate to Date</span>
                    <span className="text-sm font-black text-amber-600">{formatCurr(project.currentCost)}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-xs font-black text-stone-400 uppercase tracking-widest">Projected Final Cost</span>
                    <span className={`text-sm font-black ${isLoss ? 'text-rose-600' : 'text-stone-900'}`}>{formatCurr(project.projectedCost)}</span>
                  </div>
                </div>

                <div className={`mt-6 p-4 border-2 rounded-sm flex items-center justify-between ${isLoss ? 'bg-rose-50 border-rose-200' : 'bg-emerald-50 border-emerald-200'}`}>
                  <span className="text-xs font-black uppercase tracking-widest text-stone-700">Projected Margin</span>
                  <div className={`flex items-center gap-2 text-xl font-black ${isLoss ? 'text-rose-600' : 'text-emerald-700'}`}>
                    {isLoss ? <ArrowDownRight size={24} /> : <ArrowUpRight size={24} />}
                    {project.margin}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfitabilityForecast;