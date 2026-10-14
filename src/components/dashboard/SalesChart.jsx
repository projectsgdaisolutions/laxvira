// // import {
// //   Bar,
// //   BarChart,
// //   CartesianGrid,
// //   ResponsiveContainer,
// //   Tooltip,
// //   XAxis,
// //   YAxis,
// // } from "recharts";

// // const CustomTooltip = ({ active, payload, label }) => {
// //   if (!active || !payload || !payload.length) return null;

// //   return (
// //     <div className="rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-lg text-sm">
// //       <p className="font-medium text-gray-900">{label}</p>
// //       <p className="text-blue-600 font-semibold">
// //         ₹{payload[0].value?.toLocaleString("en-IN")}
// //       </p>
// //     </div>
// //   );
// // };

// // const SalesChart = ({ data = [] }) => {
// //   const chartData = data.map((item) => ({
// //     ...item,
// //     sales: item.total_sales,
// //   }));

// //   return (
// //     <div className="rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm ring-1 ring-black/[0.02]">
// //       <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
// //         <div>
// //           <h2 className="text-base sm:text-xl font-semibold text-gray-900">
// //             Sales Trend
// //           </h2>
// //           <p className="text-xs sm:text-sm text-gray-500">
// //             Weekly sales performance
// //           </p>
// //         </div>
// //       </div>

// //       <div className="h-56 sm:h-72 lg:h-80 -ml-2 sm:ml-0">
// //         {chartData.length === 0 ? (
// //           <div className="h-full flex items-center justify-center text-sm text-gray-400">
// //             No sales data for this period yet.
// //           </div>
// //         ) : (
// //           <ResponsiveContainer width="100%" height="100%">
// //             <BarChart data={chartData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
// //               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
// //               <XAxis
// //                 dataKey="date"
// //                 tick={{ fontSize: 12, fill: "#94A3B8" }}
// //                 axisLine={false}
// //                 tickLine={false}
// //               />
// //               <YAxis
// //                 tick={{ fontSize: 12, fill: "#94A3B8" }}
// //                 axisLine={false}
// //                 tickLine={false}
// //                 width={40}
// //               />
// //               <Tooltip content={<CustomTooltip />} cursor={{ fill: "#EFF6FF" }} />
// //               <Bar dataKey="sales" fill="#2563eb" radius={[6, 6, 0, 0]} maxBarSize={40} />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SalesChart;

// import {
//   Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
// } from "recharts";

// const CustomTooltip = ({ active, payload, label }) => {
//   if (!active || !payload || !payload.length) return null;

//   return (
//     <div className="rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md px-4 py-3 shadow-xl text-sm">
//       <p className="font-bold text-slate-500 tracking-wider text-xs uppercase mb-1">{label}</p>
//       <p className="text-brand-navy font-black text-lg">
//         ₹{payload[0].value?.toLocaleString("en-IN")}
//       </p>
//     </div>
//   );
// };

// const SalesChart = ({ data = [] }) => {
//   const chartData = data.map((item) => ({
//     ...item,
//     sales: item.total_sales,
//   }));

//   return (
//     <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg h-full flex flex-col">
//       <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
//         <div>
//           <h2 className="text-xl font-black text-brand-navy tracking-tight">
//             Revenue Trend
//           </h2>
//           <p className="text-sm font-medium text-slate-500 mt-1">
//             Weekly sales performance metrics
//           </p>
//         </div>
//       </div>

//       <div className="h-64 sm:h-72 lg:h-80 -ml-4 sm:ml-0 flex-1">
//         {chartData.length === 0 ? (
//           <div className="h-full flex items-center justify-center text-sm font-medium text-slate-400 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
//             No sales data available for this period.
//           </div>
//         ) : (
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
//               <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E2E8F0" />
//               <XAxis
//                 dataKey="date"
//                 tick={{ fontSize: 12, fill: "#64748B", fontWeight: 600 }}
//                 axisLine={false}
//                 tickLine={false}
//                 dy={10}
//               />
//               <YAxis
//                 tick={{ fontSize: 12, fill: "#64748B", fontWeight: 600 }}
//                 axisLine={false}
//                 tickLine={false}
//                 width={50}
//                 tickFormatter={(value) => `₹${value}`}
//               />
//               <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F8FAFC" }} />
//               {/* Using brand-navy for the bars */}
//               <Bar dataKey="sales" fill="#101E36" radius={[6, 6, 0, 0]} maxBarSize={48} />
//             </BarChart>
//           </ResponsiveContainer>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SalesChart;

// import {
//   Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
// } from "recharts";

// const CustomTooltip = ({ active, payload, label }) => {
//   if (!active || !payload || !payload.length) return null;

//   return (
//     <div className="rounded-xl border border-[#C69C55]/30 bg-white/95 backdrop-blur-xl px-4 py-3 shadow-[0_10px_25px_-5px_rgba(198,156,85,0.2)] text-sm">
//       <p className="font-bold text-slate-400 tracking-widest text-[10px] uppercase mb-1">{label}</p>
//       <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#101E36] to-[#3a4b6b] font-black text-xl">
//         ₹{payload[0].value?.toLocaleString("en-IN")}
//       </p>
//     </div>
//   );
// };

// const SalesChart = ({ data = [] }) => {
//   const chartData = data.map((item) => ({
//     ...item,
//     sales: item.total_sales,
//   }));

//   return (
//     <div className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-xl p-6 shadow-lg h-full flex flex-col relative overflow-hidden">
      
//       {/* Subtle background gradient sweep */}
//       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50/50 to-transparent pointer-events-none"></div>

//       <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 relative z-10">
//         <div>
//           <h2 className="text-xl font-black text-[#101E36] tracking-tight">
//             Revenue Trend
//           </h2>
//           <p className="text-sm font-medium text-slate-500 mt-1">
//             Weekly sales performance metrics
//           </p>
//         </div>
//       </div>

//       <div className="h-64 sm:h-72 lg:h-80 -ml-4 sm:ml-0 flex-1 relative z-10">
//         {chartData.length === 0 ? (
//           <div className="h-full flex items-center justify-center text-sm font-medium text-slate-400 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl border border-dashed border-slate-200">
//             No sales data available for this period.
//           </div>
//         ) : (
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
//               {/* Custom SVG Gradient Definition for Recharts */}
//               <defs>
//                 <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#4a6596" /> {/* Lighter Navy/Blue at top */}
//                   <stop offset="100%" stopColor="#101E36" /> {/* Deep Brand Navy at bottom */}
//                 </linearGradient>
//                 <linearGradient id="barHoverGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#C69C55" /> {/* Gold on hover top */}
//                   <stop offset="100%" stopColor="#a37e3d" /> {/* Dark Gold on hover bottom */}
//                 </linearGradient>
//               </defs>

//               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
//               <XAxis
//                 dataKey="date"
//                 tick={{ fontSize: 12, fill: "#64748B", fontWeight: 600 }}
//                 axisLine={false}
//                 tickLine={false}
//                 dy={10}
//               />
//               <YAxis
//                 tick={{ fontSize: 12, fill: "#64748B", fontWeight: 600 }}
//                 axisLine={false}
//                 tickLine={false}
//                 width={55}
//                 tickFormatter={(value) => `₹${value}`}
//               />
//               <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(16, 30, 54, 0.03)" }} />
              
//               {/* Applying the SVG Gradient to the Bars */}
//               <Bar 
//                 dataKey="sales" 
//                 fill="url(#barGradient)" 
//                 radius={[6, 6, 0, 0]} 
//                 maxBarSize={48} 
//                 activeBar={{ fill: 'url(#barHoverGradient)' }} // Switches to Gold gradient on hover
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SalesChart;

// import {
//   LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis
// } from "recharts";
// import { Sparkles, Bot } from "lucide-react";

// // Mock data shaped for 3 lines if actual data lacks it
// const defaultData = [
//   { name: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
//   { name: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
//   { name: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
//   { name: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
//   { name: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
//   { name: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
//   { name: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
// ];

// const CustomTooltip = ({ active, payload, label }) => {
//   if (!active || !payload || !payload.length) return null;

//   return (
//     <div className="rounded-xl border border-slate-100 bg-white/95 backdrop-blur-xl px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.1)] text-sm">
//       <p className="font-bold text-slate-400 tracking-widest text-[10px] uppercase mb-2">{label}</p>
//       {payload.map((entry, index) => (
//         <p key={index} style={{ color: entry.color }} className="font-bold text-xs flex justify-between gap-4">
//           <span className="capitalize">{entry.name}:</span>
//           <span>₹{entry.value?.toLocaleString("en-IN")}</span>
//         </p>
//       ))}
//     </div>
//   );
// };

// const SalesChart = ({ data = defaultData }) => {
//   const chartData = data.length > 0 ? data : defaultData;

//   return (
//     // <div className="relative rounded-[31px] border border-slate-100 bg-white p-7 shadow-[0_8px_25px_rgba(15,23,42,.03)] h-[450px] flex flex-col overflow-hidden">
//     <div className="relative rounded-[31px] border border-slate-100 bg-white p-7 shadow-[0_8px_25px_rgba(15,23,42,.03)] h-full min-h-[540px] flex flex-col overflow-hidden">
      
//       <div className="mb-8 flex items-center justify-between z-10 relative">
//         <div>
//           <h3 className="text-[15px] font-black text-slate-900">Business Overview</h3>
//         </div>
//         <div className="flex gap-4 text-[10px] font-bold text-slate-400">
//           <span className="flex items-center gap-1.5"><span className="w-2.5 h-[3px] rounded-full bg-[#0f172a]"></span> Revenue</span>
//           <span className="flex items-center gap-1.5"><span className="w-2.5 h-[3px] rounded-full bg-[#C5A059]"></span> Expenses</span>
//           <span className="flex items-center gap-1.5"><span className="w-2.5 h-[3px] rounded-full bg-[#38bdf8]"></span> Profit</span>
//         </div>
//       </div>

//       <div className="flex-1 relative z-10 -ml-4">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 65 }}>
//             <XAxis
//               dataKey="name"
//               tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
//               axisLine={false}
//               tickLine={false}
//               dy={15}
//             />
//             <YAxis
//               tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
//               axisLine={false}
//               tickLine={false}
//               width={50}
//               tickFormatter={(value) => `${value >= 1000 ? (value/1000) + 'k' : value}`}
//             />
//             <Tooltip content={<CustomTooltip />} />
            
//             <Line type="linear" dataKey="revenue" stroke="#0f172a" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#0f172a", stroke: "#fff", strokeWidth: 2 }} />
//             <Line type="linear" dataKey="expenses" stroke="#C5A059" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#C5A059", stroke: "#fff", strokeWidth: 2 }} />
//             <Line type="linear" dataKey="profit" stroke="#38bdf8" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#38bdf8", stroke: "#fff", strokeWidth: 2 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Floating AI Insight Card */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-20 flex h-[90px] items-center justify-between rounded-2xl border border-slate-700 bg-[#0f172a] px-5 shadow-[0_25px_50px_rgba(15,23,42,.40)]">
//         <div>
//           <div className="mb-1 flex items-center gap-2">
//             <Sparkles size={12} className="text-[#C5A059]"/>
//             <span className="text-[10px] font-bold text-white">AI Insight</span>
//           </div>
//           <p className="max-w-[280px] text-[10px] leading-relaxed text-slate-300">
//             Your revenue is up by <strong className="text-white">18.6%</strong> this month. Great job! Consider optimizing expenses in Project "Phoenix".
//           </p>
//         </div>
//         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
//           <Bot size={20} className="text-[#C5A059]"/>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default SalesChart;

// import {
//   LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis
// } from "recharts";
// import { Sparkles, Bot } from "lucide-react";

// // Mock data shaped for 3 lines if actual data lacks it
// const defaultData = [
//   { name: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
//   { name: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
//   { name: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
//   { name: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
//   { name: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
//   { name: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
//   { name: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
// ];

// const CustomTooltip = ({ active, payload, label }) => {
//   if (!active || !payload || !payload.length) return null;

//   return (
//     <div className="rounded-xl border border-slate-100 bg-white/95 backdrop-blur-xl px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.1)] text-sm z-50">
//       <p className="font-bold text-slate-400 tracking-widest text-[10px] uppercase mb-2">{label}</p>
//       {payload.map((entry, index) => (
//         <p key={index} style={{ color: entry.color }} className="font-bold text-xs flex justify-between gap-4">
//           <span className="capitalize">{entry.name}:</span>
//           <span>₹{entry.value?.toLocaleString("en-IN")}</span>
//         </p>
//       ))}
//     </div>
//   );
// };

// const SalesChart = ({ data = [] }) => {
//   // 1. Safely map backend data to the keys the chart expects.
//   // If backend returns 'total_sales' and 'date', we convert them to 'revenue' and 'name'.
//   // const mappedData = data.map(item => ({
//   //   name: item.date || item.name || 'Unknown',
//   //   revenue: item.total_sales || item.revenue || 0,
//   //   expenses: item.expenses || 0,
//   //   profit: item.profit || 0
//   // }));

//   const mappedData = data.map(item => {
//     // Catch common backend aliases for revenue and expenses
//     const rev = parseFloat(item.total_sales || item.revenue || 0);
//     const exp = parseFloat(item.total_expenses || item.expense_total || item.expenses || 0);
    
//     // Auto-calculate profit if the backend doesn't explicitly provide it
//     const prof = item.profit !== undefined ? parseFloat(item.profit) : (rev - exp);

//     return {
//       name: item.date || item.name || 'Unknown',
//       revenue: rev,
//       expenses: exp,
//       profit: prof
//     };
//   });

//   // 2. Fallback to defaultData only if the array is completely empty
//   const chartData = mappedData.length > 0 ? mappedData : defaultData;

//   return (
//     <div className="relative rounded-[31px] border border-slate-100 bg-white p-7 shadow-[0_8px_25px_rgba(15,23,42,.03)] h-full min-h-[540px] flex flex-col overflow-hidden">
      
//       <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between z-10 relative gap-4">
//         <div>
//           <h3 className="text-[15px] font-black text-slate-900">Business Overview</h3>
//         </div>
//         <div className="flex gap-4 text-[10px] font-bold text-slate-400">
//           <span className="flex items-center gap-1.5"><span className="w-2.5 h-[3px] rounded-full bg-[#0f172a]"></span> Revenue</span>
//           <span className="flex items-center gap-1.5"><span className="w-2.5 h-[3px] rounded-full bg-[#C5A059]"></span> Expenses</span>
//           <span className="flex items-center gap-1.5"><span className="w-2.5 h-[3px] rounded-full bg-[#38bdf8]"></span> Profit</span>
//         </div>
//       </div>

//       {/* 3. The 'absolute inset-0' trick prevents ResponsiveContainer from collapsing to 0px height in Flexbox */}
//       <div className="flex-1 relative z-10 -ml-4 mt-4">
//         <div className="absolute inset-0 pb-[80px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
//               <XAxis
//                 dataKey="name"
//                 tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
//                 axisLine={false}
//                 tickLine={false}
//                 dy={15}
//               />
//               <YAxis
//                 tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
//                 axisLine={false}
//                 tickLine={false}
//                 width={50}
//                 tickFormatter={(value) => `${value >= 1000 ? (value/1000) + 'k' : value}`}
//               />
//               <Tooltip content={<CustomTooltip />} />
              
//               <Line type="monotone" dataKey="revenue" stroke="#0f172a" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#0f172a", stroke: "#fff", strokeWidth: 2 }} />
//               <Line type="monotone" dataKey="expenses" stroke="#C5A059" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#C5A059", stroke: "#fff", strokeWidth: 2 }} />
//               <Line type="monotone" dataKey="profit" stroke="#38bdf8" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#38bdf8", stroke: "#fff", strokeWidth: 2 }} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Floating AI Insight Card */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] z-20 flex h-[90px] items-center justify-between rounded-2xl border border-slate-700 bg-[#0f172a] px-5 shadow-[0_25px_50px_rgba(15,23,42,.40)]">
//         <div>
//           <div className="mb-1 flex items-center gap-2">
//             <Sparkles size={12} className="text-[#C5A059]"/>
//             <span className="text-[10px] font-bold text-white">AI Insight</span>
//           </div>
//           <p className="max-w-[280px] text-[10px] leading-relaxed text-slate-300">
//             Your revenue is up by <strong className="text-white">18.6%</strong> this month. Great job! Consider optimizing expenses in Project "Phoenix".
//           </p>
//         </div>
//         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
//           <Bot size={20} className="text-[#C5A059]"/>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default SalesChart;

import {
  LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";
import { Sparkles, Bot } from "lucide-react";

// Mock data shaped for 3 lines if actual data lacks it
const defaultData = [
  { name: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { name: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { name: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { name: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
  { name: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
  { name: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
  { name: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-xl border border-slate-100 bg-white/95 backdrop-blur-xl px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.1)] text-sm z-50">
      <p className="font-bold text-slate-400 tracking-widest text-[10px] uppercase mb-2">{label}</p>
      {payload.map((entry, index) => (
        <p key={index} style={{ color: entry.color }} className="font-bold text-xs flex justify-between gap-4">
          <span className="capitalize">{entry.name}:</span>
          <span>₹{entry.value?.toLocaleString("en-IN")}</span>
        </p>
      ))}
    </div>
  );
};

const SalesChart = ({ data = [] }) => {
  
  // Robust number parser to prevent NaN from breaking the Recharts rendering engine
  const parseSafeNumber = (val) => {
    if (val === null || val === undefined) return 0;
    const parsed = parseFloat(val);
    return isNaN(parsed) ? 0 : parsed;
  };

  const mappedData = data.map(item => {
    const rev = parseSafeNumber(item.total_sales ?? item.revenue);
    const exp = parseSafeNumber(item.total_expenses ?? item.expense_total ?? item.expenses);
    
    // Auto-calculate profit safely. 
    // Note: If 'exp' is 0, 'profit' will equal 'revenue', causing the two lines to visually overlap.
    const prof = (item.profit !== undefined && item.profit !== null) 
      ? parseSafeNumber(item.profit) 
      : (rev - exp);

    return {
      name: item.date || item.name || 'Unknown',
      revenue: rev,
      expenses: exp,
      profit: prof
    };
  });

  const chartData = mappedData.length > 0 ? mappedData : defaultData;

  return (
    <div className="relative rounded-[31px] border border-slate-100 bg-white p-7 shadow-[0_8px_25px_rgba(15,23,42,.03)] h-full min-h-[540px] flex flex-col overflow-hidden">
      
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between z-10 relative gap-4">
        <div>
          <h3 className="text-[15px] font-black text-slate-900">Business Overview</h3>
        </div>
        <div className="flex gap-4 text-[10px] font-bold text-slate-400">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-[3px] rounded-full bg-[#0f172a]"></span> Revenue</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-[3px] rounded-full bg-[#C5A059]"></span> Expenses</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-[3px] rounded-full bg-[#38bdf8]"></span> Profit</span>
        </div>
      </div>

      <div className="flex-1 relative z-10 -ml-4 mt-4">
        <div className="absolute inset-0 pb-[80px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
                axisLine={false}
                tickLine={false}
                dy={15}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
                axisLine={false}
                tickLine={false}
                width={50}
                tickFormatter={(value) => `${value >= 1000 ? (value/1000) + 'k' : value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              
              <Line type="monotone" dataKey="revenue" stroke="#0f172a" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#0f172a", stroke: "#fff", strokeWidth: 2 }} />
              <Line type="monotone" dataKey="expenses" stroke="#C5A059" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#C5A059", stroke: "#fff", strokeWidth: 2 }} />
              <Line type="monotone" dataKey="profit" stroke="#38bdf8" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#38bdf8", stroke: "#fff", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Floating AI Insight Card */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] z-20 flex h-[90px] items-center justify-between rounded-2xl border border-slate-700 bg-[#0f172a] px-5 shadow-[0_25px_50px_rgba(15,23,42,.40)]">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <Sparkles size={12} className="text-[#C5A059]"/>
            <span className="text-[10px] font-bold text-white">AI Insight</span>
          </div>
          <p className="max-w-[280px] text-[10px] leading-relaxed text-slate-300">
            Your revenue is up by <strong className="text-white">18.6%</strong> this month. Great job! Consider optimizing expenses in Project "Phoenix".
          </p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
          <Bot size={20} className="text-[#C5A059]"/>
        </div>
      </div>

    </div>
  );
};

export default SalesChart;