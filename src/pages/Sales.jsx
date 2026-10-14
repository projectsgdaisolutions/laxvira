// import React, { useState } from 'react';
// import { 
//   FileSpreadsheet, 
//   Calendar as CalendarIcon, 
//   Info, 
//   TrendingUp, 
//   ChevronDown, 
//   ArrowRight, 
//   Lightbulb 
// } from 'lucide-react';
// import { 
//   AreaChart, 
//   Area, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   ResponsiveContainer 
// } from 'recharts';

// const Sales = () => {
//   const [dateRange, setDateRange] = useState('today');

//   // --- Mock Data ---
//   const salesTrendsData = [
//     { date: '13 July', sales: 7800 },
//     { date: '14 July', sales: 15000 },
//     { date: '15 July', sales: 12000 },
//     { date: '16 July', sales: 16000 },
//     { date: '17 July', sales: 12200 },
//     { date: '18 July', sales: 16500 },
//     { date: '19 July', sales: 19500 },
//   ];

//   const topProductsData = [
//     { name: 'Maggi 2-minute noodles 70g', amount: 12450, width: '90%' },
//     { name: 'Fortune Sunlite refined oil 1L', amount: 9850, width: '70%' },
//     { name: 'Tata Salt 1kg', amount: 6750, width: '45%' },
//     { name: 'Aashirvaad Atta 1kg', amount: 5680, width: '35%' },
//     { name: 'Maggi Tomato ketchup 200g', amount: 4320, width: '25%' },
//   ];

//   return (
//     <div className="w-full pb-10">
      
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-slate-900">Sales Analytics</h1>
//         <button className="flex items-center bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow-sm">
//           <FileSpreadsheet className="w-4 h-4 mr-2 text-green-600" />
//           Export to Excel
//         </button>
//       </div>

//       {/* Date Range Selector */}
//       <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6">
//         <h3 className="text-sm font-semibold text-slate-800 mb-4">Select Date range</h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          
//           <button 
//             onClick={() => setDateRange('today')}
//             className={`flex flex-col items-start p-3 rounded-lg border transition-colors ${
//               dateRange === 'today' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 hover:border-blue-300'
//             }`}
//           >
//             <div className="flex items-center font-bold mb-1">
//               <CalendarIcon className="w-4 h-4 mr-2" /> Today
//             </div>
//             <span className={`text-xs ${dateRange === 'today' ? 'text-blue-100' : 'text-slate-500'}`}>22 July 2026</span>
//           </button>

//           <button 
//             onClick={() => setDateRange('week')}
//             className={`flex flex-col items-start p-3 rounded-lg border transition-colors ${
//               dateRange === 'week' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 hover:border-blue-300'
//             }`}
//           >
//             <div className="flex items-center font-bold text-slate-800 mb-1">
//               <CalendarIcon className="w-4 h-4 mr-2 text-blue-600" /> This week
//             </div>
//             <span className="text-xs text-slate-500">20-26 July 2026</span>
//           </button>

//           <button 
//             onClick={() => setDateRange('month')}
//             className={`flex flex-col items-start p-3 rounded-lg border transition-colors ${
//               dateRange === 'month' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 hover:border-blue-300'
//             }`}
//           >
//             <div className="flex items-center font-bold text-slate-800 mb-1">
//               <CalendarIcon className="w-4 h-4 mr-2 text-blue-600" /> This month
//             </div>
//             <span className="text-xs text-slate-500">1-31 July 2026</span>
//           </button>

//           <div className="p-3 rounded-lg border border-slate-200 flex flex-col justify-between">
//             <div className="flex items-center font-bold text-slate-800 mb-2 text-sm">
//               <CalendarIcon className="w-4 h-4 mr-2 text-blue-600" /> Custom Range
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="flex-1">
//                 <span className="text-[10px] text-slate-500 block">From</span>
//                 <div className="flex items-center border border-slate-200 rounded px-1.5 py-1">
//                   <CalendarIcon className="w-3 h-3 text-blue-600 mr-1" />
//                   <span className="text-[10px]">21/7/2026</span>
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <span className="text-[10px] text-slate-500 block">To</span>
//                 <div className="flex items-center border border-slate-200 rounded px-1.5 py-1">
//                   <CalendarIcon className="w-3 h-3 text-blue-600 mr-1" />
//                   <span className="text-[10px]">21/7/2026</span>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] px-3 py-1.5 rounded font-semibold transition-colors">
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center text-sm text-slate-600 border-t border-slate-100 pt-3">
//           <Info className="w-4 h-4 mr-2 text-slate-400" />
//           All analytics below are based on the selected date range.
//         </div>
//       </div>

//       {/* Main Grid Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
//         {/* Col 1: Sales Trends */}
//         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <h3 className="font-bold text-slate-900 flex items-center">
//                 <TrendingUp className="w-4 h-4 mr-2 text-blue-600" /> Sales Trends
//               </h3>
//               <p className="text-xs text-slate-500">Total sales overtime</p>
//             </div>
//             <button className="flex items-center bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
//               Daily <ChevronDown className="w-3 h-3 ml-1" />
//             </button>
//           </div>

//           <div className="flex justify-between items-end mb-6">
//             <h2 className="text-3xl font-bold text-slate-900">₹78,450</h2>
//             <div className="text-right">
//               <span className="flex items-center text-green-600 font-bold text-sm justify-end">
//                 <TrendingUp className="w-3 h-3 mr-1" /> 18.6%
//               </span>
//               <span className="text-xs text-slate-400">vs 14 July 2026</span>
//             </div>
//           </div>

//           <div className="h-64 w-full mb-4">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={salesTrendsData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
//                 <defs>
//                   <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
//                     <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
//                 <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} dy={10} />
//                 <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(value) => `₹${value / 1000}k`} />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-blue-100 text-blue-700 text-xs font-medium p-3 rounded-lg text-center mt-auto">
//             Sales are up by 18.6% compared to the previous 7 days
//           </div>
//         </div>

//         {/* Col 2: Top Products */}
//         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <h3 className="font-bold text-slate-900 flex items-center">
//                 <div className="w-4 h-4 mr-2 bg-blue-600 rounded-sm flex items-end justify-center pb-[2px] gap-[1px]">
//                   <div className="w-0.5 h-1.5 bg-white"></div>
//                   <div className="w-0.5 h-2.5 bg-white"></div>
//                   <div className="w-0.5 h-2 bg-white"></div>
//                 </div> 
//                 Top Products
//               </h3>
//               <p className="text-xs text-slate-500">By sales amount</p>
//             </div>
//             <button className="flex items-center bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
//               By sales <ChevronDown className="w-3 h-3 ml-1" />
//             </button>
//           </div>

//           {/* Custom Horizontal Bar Chart Structure */}
//           <div className="flex-1 border-l border-slate-200 ml-[120px] relative space-y-6 pt-4 mb-8">
//             {topProductsData.map((item, index) => (
//               <div key={index} className="flex items-center relative w-full h-4">
//                 {/* Product Name (Positioned absolutely to the left of the border) */}
//                 <span className="absolute right-full mr-4 text-xs text-slate-600 text-right w-[110px] leading-tight flex items-center h-full">
//                   {item.name}
//                 </span>
                
//                 {/* The Bar */}
//                 <div 
//                   className="bg-blue-600 h-full rounded-r relative"
//                   style={{ width: item.width }}
//                 >
//                   {/* Amount Label */}
//                   <span className="absolute left-full ml-2 text-xs font-semibold text-slate-700 flex items-center h-full">
//                     ₹{item.amount.toLocaleString()}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 rounded-lg text-sm flex items-center justify-center transition-colors mt-auto">
//             View all products <ArrowRight className="w-4 h-4 ml-2" />
//           </button>
//         </div>

//         {/* Col 3: Profit/Loss Summary */}
//         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
//           <div className="mb-6">
//             <h3 className="font-bold text-slate-900 flex items-center">
//               <span className="text-blue-600 font-serif font-bold italic mr-2 text-lg">₹</span> Profit/ Loss summary
//             </h3>
//             <p className="text-xs text-slate-500 text-center w-full mt-2">Summary for selected range</p>
//           </div>

//           <div className="bg-green-100 rounded-lg p-5 mb-6">
//             <p className="text-green-700 font-medium text-sm mb-2">Net profit</p>
//             <div className="flex justify-between items-end">
//               <h2 className="text-3xl font-bold text-green-700">₹18,920</h2>
//               <div className="text-right">
//                 <span className="flex items-center text-green-700 font-bold text-sm justify-end">
//                   <TrendingUp className="w-3 h-3 mr-1" /> 22.4%
//                 </span>
//                 <span className="text-xs text-green-700/70">vs 14 July 2026</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col space-y-4 text-sm mt-auto">
//             <div className="flex justify-between items-center text-slate-800 font-medium pb-4 border-b border-slate-100">
//               <span>Total sales</span>
//               <span className="font-bold text-slate-900">₹78,450</span>
//             </div>
            
//             <div className="flex justify-between items-center text-slate-800 font-medium pb-4 border-b border-slate-100">
//               <span>Total costs of goods sold</span>
//               <span className="font-bold text-slate-900">₹49,530</span>
//             </div>
            
//             <div className="flex justify-between items-center text-slate-800 font-bold pb-4 border-b border-slate-400">
//               <span>Gross Profit</span>
//               <span className="text-slate-900">₹28,920 <span className="text-slate-400 font-normal text-xs">(36.9%)</span></span>
//             </div>
            
//             <div className="flex justify-between items-center text-slate-800 font-medium pb-4 border-b border-slate-100">
//               <span>Total Expenses</span>
//               <span className="font-bold text-slate-900">₹10,000</span>
//             </div>
            
//             <div className="flex justify-between items-center font-bold pt-2">
//               <span className="text-green-600">Net Profit</span>
//               <span className="text-green-600 text-xl">₹18,920 <span className="text-slate-400 font-normal text-xs">(24.1%)</span></span>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Bottom Tip Bar */}
//       <div className="bg-white border border-slate-200 rounded-lg p-3 flex items-center text-sm shadow-sm">
//         <Lightbulb className="w-5 h-5 text-slate-400 mr-3" />
//         <span className="font-bold text-slate-800 mr-1">Tip:</span> 
//         <span className="text-slate-500">Use date range filters to view accurate insights for specific periods</span>
//       </div>

//     </div>
//   );
// };

// export default Sales;

import React, { useState, useEffect } from 'react';
import { 
  FileSpreadsheet, 
  Calendar as CalendarIcon, 
  Info, 
  TrendingUp, 
  ChevronDown, 
  ArrowRight, 
  Lightbulb,
  Loader2,
  AlertTriangle
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const Sales = () => {
  const [dateRange, setDateRange] = useState('month');
  
  // API State
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:8000/api/analytics/sales?date_range=${dateRange}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (!response.ok) throw new Error("Failed to fetch sales data");
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [dateRange]);

  const formatCurrency = (val) => `₹${Number(val).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

  if (isLoading) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full p-6 bg-red-50 text-red-600 rounded-xl flex items-center">
        <AlertTriangle className="mr-3" /> Error loading analytics: {error}
      </div>
    );
  }

  // Calculate max amount for dynamic horizontal bar widths
  const maxProductAmount = data.top_products.length > 0 
    ? Math.max(...data.top_products.map(p => p.amount)) 
    : 1;

  return (
    <div className="w-full pb-10">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Sales Analytics</h1>
        <button className="flex items-center bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow-sm">
          <FileSpreadsheet className="w-4 h-4 mr-2 text-green-600" />
          Export to Excel
        </button>
      </div>

      {/* Date Range Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6">
        <h3 className="text-sm font-semibold text-slate-800 mb-4">Select Date range</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <button 
            onClick={() => setDateRange('today')}
            className={`flex flex-col items-start p-3 rounded-lg border transition-colors ${
              dateRange === 'today' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center font-bold mb-1">
              <CalendarIcon className="w-4 h-4 mr-2" /> Today
            </div>
          </button>

          <button 
            onClick={() => setDateRange('week')}
            className={`flex flex-col items-start p-3 rounded-lg border transition-colors ${
              dateRange === 'week' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center font-bold mb-1">
              <CalendarIcon className="w-4 h-4 mr-2" /> This week
            </div>
          </button>

          <button 
            onClick={() => setDateRange('month')}
            className={`flex flex-col items-start p-3 rounded-lg border transition-colors ${
              dateRange === 'month' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center font-bold mb-1">
              <CalendarIcon className="w-4 h-4 mr-2" /> This month
            </div>
          </button>
        </div>

        <div className="flex items-center text-sm text-slate-600 border-t border-slate-100 pt-3">
          <Info className="w-4 h-4 mr-2 text-slate-400" />
          All analytics below are based on the selected date range.
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Col 1: Sales Trends */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-slate-900 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-blue-600" /> Sales Trends
              </h3>
              <p className="text-xs text-slate-500">Total sales over time</p>
            </div>
          </div>

          <div className="flex justify-between items-end mb-6">
            <h2 className="text-3xl font-bold text-slate-900">{formatCurrency(data.total_sales)}</h2>
          </div>

          <div className="h-64 w-full mb-4">
            {data.trends.length === 0 ? (
              <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">No sales data for this period</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.trends} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(value) => `₹${value / 1000}k`} />
                  <Tooltip formatter={(value) => [`₹${value}`, "Sales"]} />
                  <Area type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Col 2: Top Products */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-slate-900 flex items-center">
                Top Products
              </h3>
              <p className="text-xs text-slate-500">By sales amount</p>
            </div>
          </div>

          <div className="flex-1 border-l border-slate-200 ml-[120px] relative space-y-6 pt-4 mb-8">
            {data.top_products.length === 0 ? (
               <div className="text-slate-400 text-sm absolute inset-0 flex items-center ml-4">No product data available</div>
            ) : (
              data.top_products.map((item, index) => {
                const widthPercent = Math.max((item.amount / maxProductAmount) * 100, 5); // min 5% width for visibility
                return (
                  <div key={index} className="flex items-center relative w-full h-4">
                    <span className="absolute right-full mr-4 text-xs text-slate-600 text-right w-[110px] truncate block">
                      {item.name}
                    </span>
                    <div 
                      className="bg-blue-600 h-full rounded-r relative transition-all duration-500"
                      style={{ width: `${widthPercent}%` }}
                    >
                      <span className="absolute left-full ml-2 text-xs font-semibold text-slate-700 flex items-center h-full">
                        {formatCurrency(item.amount)}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Col 3: Profit/Loss Summary */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
          <div className="mb-6">
            <h3 className="font-bold text-slate-900 flex items-center">
              <span className="text-blue-600 font-serif font-bold italic mr-2 text-lg">₹</span> Profit/Loss Summary
            </h3>
            <p className="text-xs text-slate-500 text-center w-full mt-2">Simulated margins for selected range</p>
          </div>

          <div className="bg-green-100 rounded-lg p-5 mb-6">
            <p className="text-green-700 font-medium text-sm mb-2">Net profit</p>
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-bold text-green-700">{formatCurrency(data.summary.net_profit)}</h2>
            </div>
          </div>

          <div className="flex flex-col space-y-4 text-sm mt-auto">
            <div className="flex justify-between items-center text-slate-800 font-medium pb-4 border-b border-slate-100">
              <span>Total sales</span>
              <span className="font-bold text-slate-900">{formatCurrency(data.summary.total_sales)}</span>
            </div>
            
            <div className="flex justify-between items-center text-slate-800 font-medium pb-4 border-b border-slate-100">
              <span>Cost of goods sold (Est. 65%)</span>
              <span className="font-bold text-slate-900">{formatCurrency(data.summary.cogs)}</span>
            </div>
            
            <div className="flex justify-between items-center text-slate-800 font-bold pb-4 border-b border-slate-400">
              <span>Gross Profit</span>
              <span className="text-slate-900">
                {formatCurrency(data.summary.gross_profit)} <span className="text-slate-400 font-normal text-xs">({data.summary.gross_margin_pct.toFixed(1)}%)</span>
              </span>
            </div>
            
            <div className="flex justify-between items-center text-slate-800 font-medium pb-4 border-b border-slate-100">
              <span>Total Expenses (Est. 10%)</span>
              <span className="font-bold text-slate-900">{formatCurrency(data.summary.expenses)}</span>
            </div>
            
            <div className="flex justify-between items-center font-bold pt-2">
              <span className="text-green-600">Net Profit</span>
              <span className="text-green-600 text-xl">
                {formatCurrency(data.summary.net_profit)} <span className="text-slate-400 font-normal text-xs">({data.summary.net_margin_pct.toFixed(1)}%)</span>
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-3 flex items-center text-sm shadow-sm">
        <Lightbulb className="w-5 h-5 text-slate-400 mr-3" />
        <span className="font-bold text-slate-800 mr-1">Tip:</span> 
        <span className="text-slate-500">Ensure your API is running to fetch live database analytics.</span>
      </div>

    </div>
  );
};

export default Sales;