// // // src/pages/Reports.jsx

// // // ============================================================
// // // Imports
// // // ============================================================
// // import { useState, useMemo, useEffect, useCallback } from "react";
// // import {
// //   TrendingUp,
// //   TrendingDown,
// //   ShoppingCart,
// //   Users,
// //   Wallet,
// //   BarChart3,
// //   Download,
// //   Calendar,
// //   Sparkles,
// //   Trophy,
// //   CalendarDays,
// //   CreditCard,
// //   PackageCheck,
// //   RefreshCcw,
// // } from "lucide-react";
// // import {
// //   ResponsiveContainer,
// //   LineChart,
// //   Line,
// //   BarChart,
// //   Bar,
// //   AreaChart,
// //   Area,
// //   PieChart,
// //   Pie,
// //   Cell,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// // } from "recharts";

// // // Current data source (frontend only)
// // // TODO BACKEND: replace this static import with axios calls:
// // //   GET /reports/dashboard      -> summary
// // //   GET /reports/sales          -> salesTrend
// // //   GET /reports/top-products   -> topProducts
// // //   GET /reports/profit-loss    -> profitLoss
// // import { reportsData } from "../data/reports";

// // // ============================================================
// // // Dummy Report Data (loaded from src/data/reports.js)
// // // ============================================================
// // const DATE_RANGES = ["Today", "This Week", "This Month", "This Year", "Custom Range"];

// // const CHART_COLORS = {
// //   primary: "#2563eb",
// //   primaryLight: "#60a5fa",
// //   secondary: "#0ea5e9",
// //   profit: "#16a34a",
// //   expense: "#f97316",
// //   grid: "#e5e7eb",
// // };

// // const PIE_COLORS = ["#2563eb", "#0ea5e9", "#818cf8", "#38bdf8"];

// // const currency = (value) =>
// //   new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     maximumFractionDigits: 0,
// //   }).format(value ?? 0);

// // const compactNumber = (value) =>
// //   new Intl.NumberFormat("en-IN", { notation: "compact" }).format(value ?? 0);

// // // ============================================================
// // // State
// // // ============================================================
// // export default function Reports() {
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [dateRange, setDateRange] = useState("This Month");
// //   const [customFrom, setCustomFrom] = useState("");
// //   const [customTo, setCustomTo] = useState("");
// //   const [data, setData] = useState(null);
// //   const [isExporting, setIsExporting] = useState(false);

// //   // ============================================================
// //   // API Placeholder
// //   // ============================================================
// //   const fetchReports = useCallback(async (range, from, to) => {
// //     setIsLoading(true);

// //     // TODO BACKEND: replace with real request, e.g.
// //     // const res = await axios.get("/reports/dashboard", { params: { range, from, to } });
// //     // setData(res.data);
// //     await new Promise((resolve) => setTimeout(resolve, 600));

// //     setData(reportsData);
// //     setIsLoading(false);
// //   }, []);

// //   useEffect(() => {
// //     fetchReports(dateRange, customFrom, customTo);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [dateRange]);

// //   const handleApplyCustomRange = useCallback(() => {
// //     if (!customFrom || !customTo) return;
// //     fetchReports("Custom Range", customFrom, customTo);
// //   }, [customFrom, customTo, fetchReports]);

// //   const handleExportExcel = useCallback(() => {
// //     setIsExporting(true);
// //     // TODO BACKEND: GET /reports/export?range=&from=&to=
// //     console.log("Export", { dateRange, customFrom, customTo });
// //     setTimeout(() => setIsExporting(false), 900);
// //   }, [dateRange, customFrom, customTo]);

// //   const handleRefresh = useCallback(() => {
// //     fetchReports(dateRange, customFrom, customTo);
// //   }, [dateRange, customFrom, customTo, fetchReports]);

// //   // ============================================================
// //   // useMemo
// //   // ============================================================
// //   const summaryCards = useMemo(() => {
// //     if (!data) return [];
// //     const { summary } = data;
// //     const isPositiveGrowth = summary.growthPercentage >= 0;

// //     return [
// //       {
// //         key: "revenue",
// //         label: "Total Revenue",
// //         value: currency(summary.totalRevenue),
// //         icon: Wallet,
// //         accent: "bg-blue-50 text-blue-600",
// //       },
// //       {
// //         key: "orders",
// //         label: "Total Orders",
// //         value: compactNumber(summary.totalOrders),
// //         icon: ShoppingCart,
// //         accent: "bg-sky-50 text-sky-600",
// //       },
// //       {
// //         key: "customers",
// //         label: "Total Customers",
// //         value: compactNumber(summary.totalCustomers),
// //         icon: Users,
// //         accent: "bg-indigo-50 text-indigo-600",
// //       },
// //       {
// //         key: "profit",
// //         label: "Net Profit",
// //         value: currency(summary.profit),
// //         icon: TrendingUp,
// //         accent: "bg-emerald-50 text-emerald-600",
// //       },
// //       {
// //         key: "growth",
// //         label: "Growth",
// //         value: `${isPositiveGrowth ? "+" : ""}${summary.growthPercentage}%`,
// //         icon: isPositiveGrowth ? TrendingUp : TrendingDown,
// //         accent: isPositiveGrowth
// //           ? "bg-green-50 text-green-600"
// //           : "bg-red-50 text-red-600",
// //       },
// //     ];
// //   }, [data]);

// //   const insights = useMemo(() => {
// //     if (!data) return [];
// //     const { topProducts, salesTrend, paymentMethods, summary } = data;

// //     const bestProduct = [...topProducts].sort((a, b) => b.revenue - a.revenue)[0];
// //     const mostProfitableProduct = [...topProducts].sort(
// //       (a, b) => b.profit - a.profit
// //     )[0];
// //     const bestDay = [...salesTrend].sort((a, b) => b.sales - a.sales)[0];
// //     const topPaymentMethod = [...paymentMethods].sort(
// //       (a, b) => b.percentage - a.percentage
// //     )[0];
// //     const averageDailySales =
// //       salesTrend.reduce((acc, day) => acc + day.sales, 0) / salesTrend.length;

// //     return [
// //       {
// //         key: "top-selling",
// //         icon: Trophy,
// //         title: "Highest Selling Product",
// //         detail: `${bestProduct.name} generated ${currency(bestProduct.revenue)} in revenue.`,
// //       },
// //       {
// //         key: "best-day",
// //         icon: CalendarDays,
// //         title: "Best Revenue Day",
// //         detail: `${bestDay.date} recorded ${currency(bestDay.sales)} from ${bestDay.orders} orders.`,
// //       },
// //       {
// //         key: "avg-sales",
// //         icon: BarChart3,
// //         title: "Average Daily Sales",
// //         detail: `${currency(averageDailySales)} per day across the selected period.`,
// //       },
// //       {
// //         key: "payment",
// //         icon: CreditCard,
// //         title: "Preferred Payment Method",
// //         detail: `${topPaymentMethod.method} accounts for ${topPaymentMethod.percentage}% of transactions.`,
// //       },
// //       {
// //         key: "profitable",
// //         icon: PackageCheck,
// //         title: "Most Profitable Product",
// //         detail: `${mostProfitableProduct.name} contributed ${currency(mostProfitableProduct.profit)} in profit.`,
// //       },
// //       {
// //         key: "aov",
// //         icon: Sparkles,
// //         title: "Average Order Value",
// //         detail: `Customers spend ${currency(summary.averageOrderValue)} on average per order.`,
// //       },
// //     ];
// //   }, [data]);

// //   const hasData =
// //     !!data &&
// //     (data.salesTrend?.length ||
// //       data.topProducts?.length ||
// //       data.profitLoss?.length ||
// //       data.paymentMethods?.length);

// //   // ============================================================
// //   // JSX
// //   // ============================================================
// //   return (
// //     <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
// //       <div className="mx-auto max-w-7xl space-y-6">
// //         {/* Header */}
// //         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
// //           <div>
// //             <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
// //               Reports &amp; Analytics
// //             </h1>
// //             <p className="mt-1 text-sm text-slate-500">
// //               Track sales performance, profitability, and customer trends across
// //               your store.
// //             </p>
// //           </div>

// //           <div className="flex items-center gap-2">
// //             <button
// //               type="button"
// //               onClick={handleRefresh}
// //               className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50"
// //             >
// //               <RefreshCcw className="h-4 w-4" />
// //               Refresh
// //             </button>
// //             <button
// //               type="button"
// //               onClick={handleExportExcel}
// //               disabled={isExporting}
// //               className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
// //             >
// //               <Download className="h-4 w-4" />
// //               {isExporting ? "Exporting..." : "Export Excel"}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Filter Bar */}
// //         <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
// //           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
// //             <div className="flex flex-wrap items-center gap-2">
// //               <Calendar className="mr-1 h-4 w-4 text-slate-400" />
// //               {DATE_RANGES.map((range) => (
// //                 <button
// //                   key={range}
// //                   type="button"
// //                   onClick={() => setDateRange(range)}
// //                   className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
// //                     dateRange === range
// //                       ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
// //                       : "bg-slate-100 text-slate-600 hover:bg-slate-200"
// //                   }`}
// //                 >
// //                   {range}
// //                 </button>
// //               ))}
// //             </div>

// //             {dateRange === "Custom Range" && (
// //               <div className="flex flex-wrap items-center gap-2">
// //                 <input
// //                   type="date"
// //                   value={customFrom}
// //                   onChange={(e) => setCustomFrom(e.target.value)}
// //                   className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 focus:border-blue-500 focus:outline-none"
// //                 />
// //                 <span className="text-sm text-slate-400">to</span>
// //                 <input
// //                   type="date"
// //                   value={customTo}
// //                   onChange={(e) => setCustomTo(e.target.value)}
// //                   className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 focus:border-blue-500 focus:outline-none"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={handleApplyCustomRange}
// //                   className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
// //                 >
// //                   Apply
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Loading Skeleton */}
// //         {isLoading && <ReportsSkeleton />}

// //         {/* Empty State */}
// //         {!isLoading && !hasData && (
// //           <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-16 text-center shadow-sm">
// //             <BarChart3 className="mb-4 h-10 w-10 text-slate-300" />
// //             <h3 className="text-lg font-semibold text-slate-700">
// //               No Report Data Found
// //             </h3>
// //             <p className="mt-1 text-sm text-slate-400">
// //               Try adjusting the date range or check back later.
// //             </p>
// //           </div>
// //         )}

// //         {/* Main Content */}
// //         {!isLoading && hasData && (
// //           <>
// //             {/* Summary Cards */}
// //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
// //               {summaryCards.map((card) => (
// //                 <div
// //                   key={card.key}
// //                   className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <span className="text-sm font-medium text-slate-500">
// //                       {card.label}
// //                     </span>
// //                     <span className={`rounded-lg p-2 ${card.accent}`}>
// //                       <card.icon className="h-4 w-4" />
// //                     </span>
// //                   </div>
// //                   <p className="mt-3 text-xl font-bold text-slate-900">
// //                     {card.value}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Charts Grid */}
// //             <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
// //               {/* Sales Trend - Line Chart */}
// //               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
// //                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
// //                   Sales Trend
// //                 </h3>
// //                 <ResponsiveContainer width="100%" height={280}>
// //                   <LineChart data={data.salesTrend}>
// //                     <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
// //                     <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#64748b" }} />
// //                     <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
// //                     <Tooltip
// //                       formatter={(value, name) =>
// //                         name === "sales" ? currency(value) : value
// //                       }
// //                     />
// //                     <Legend />
// //                     <Line
// //                       type="monotone"
// //                       dataKey="sales"
// //                       name="Sales"
// //                       stroke={CHART_COLORS.primary}
// //                       strokeWidth={2.5}
// //                       dot={false}
// //                     />
// //                     <Line
// //                       type="monotone"
// //                       dataKey="orders"
// //                       name="Orders"
// //                       stroke={CHART_COLORS.secondary}
// //                       strokeWidth={2}
// //                       dot={false}
// //                     />
// //                   </LineChart>
// //                 </ResponsiveContainer>
// //               </div>

// //               {/* Top Products - Bar Chart */}
// //               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
// //                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
// //                   Top Products by Revenue
// //                 </h3>
// //                 <ResponsiveContainer width="100%" height={280}>
// //                   <BarChart data={data.topProducts}>
// //                     <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
// //                     <XAxis
// //                       dataKey="name"
// //                       tick={{ fontSize: 11, fill: "#64748b" }}
// //                       interval={0}
// //                       angle={-20}
// //                       textAnchor="end"
// //                       height={70}
// //                     />
// //                     <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
// //                     <Tooltip formatter={(value) => currency(value)} />
// //                     <Bar
// //                       dataKey="revenue"
// //                       name="Revenue"
// //                       fill={CHART_COLORS.primary}
// //                       radius={[6, 6, 0, 0]}
// //                     />
// //                   </BarChart>
// //                 </ResponsiveContainer>
// //               </div>

// //               {/* Profit vs Expenses - Area Chart */}
// //               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
// //                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
// //                   Profit vs Expenses
// //                 </h3>
// //                 <ResponsiveContainer width="100%" height={280}>
// //                   <AreaChart data={data.profitLoss}>
// //                     <defs>
// //                       <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
// //                         <stop offset="5%" stopColor={CHART_COLORS.profit} stopOpacity={0.35} />
// //                         <stop offset="95%" stopColor={CHART_COLORS.profit} stopOpacity={0} />
// //                       </linearGradient>
// //                       <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
// //                         <stop offset="5%" stopColor={CHART_COLORS.expense} stopOpacity={0.35} />
// //                         <stop offset="95%" stopColor={CHART_COLORS.expense} stopOpacity={0} />
// //                       </linearGradient>
// //                     </defs>
// //                     <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
// //                     <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
// //                     <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
// //                     <Tooltip formatter={(value) => currency(value)} />
// //                     <Legend />
// //                     <Area
// //                       type="monotone"
// //                       dataKey="profit"
// //                       name="Profit"
// //                       stroke={CHART_COLORS.profit}
// //                       fill="url(#profitGradient)"
// //                       strokeWidth={2}
// //                     />
// //                     <Area
// //                       type="monotone"
// //                       dataKey="expense"
// //                       name="Expense"
// //                       stroke={CHART_COLORS.expense}
// //                       fill="url(#expenseGradient)"
// //                       strokeWidth={2}
// //                     />
// //                   </AreaChart>
// //                 </ResponsiveContainer>
// //               </div>

// //               {/* Payment Methods - Pie Chart */}
// //               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
// //                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
// //                   Payment Methods
// //                 </h3>
// //                 <ResponsiveContainer width="100%" height={280}>
// //                   <PieChart>
// //                     <Pie
// //                       data={data.paymentMethods}
// //                       dataKey="percentage"
// //                       nameKey="method"
// //                       cx="50%"
// //                       cy="50%"
// //                       innerRadius={60}
// //                       outerRadius={95}
// //                       paddingAngle={3}
// //                     >
// //                       {data.paymentMethods.map((entry, index) => (
// //                         <Cell
// //                           key={entry.method}
// //                           fill={PIE_COLORS[index % PIE_COLORS.length]}
// //                         />
// //                       ))}
// //                     </Pie>
// //                     <Tooltip formatter={(value) => `${value}%`} />
// //                     <Legend />
// //                   </PieChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </div>

// //             {/* Top Products Table + Insights */}
// //             <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
// //               {/* Table */}
// //               <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm lg:col-span-2">
// //                 <div className="border-b border-slate-100 p-5">
// //                   <h3 className="text-sm font-semibold text-slate-700">
// //                     Top Products
// //                   </h3>
// //                 </div>
// //                 <div className="overflow-x-auto">
// //                   <table className="w-full text-left text-sm">
// //                     <thead>
// //                       <tr className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
// //                         <th className="px-5 py-3 font-medium">Product</th>
// //                         <th className="px-5 py-3 font-medium">Category</th>
// //                         <th className="px-5 py-3 font-medium">Units Sold</th>
// //                         <th className="px-5 py-3 font-medium">Revenue</th>
// //                         <th className="px-5 py-3 font-medium">Profit</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {data.topProducts.map((product) => (
// //                         <tr
// //                           key={product.id}
// //                           className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60"
// //                         >
// //                           <td className="px-5 py-3 font-medium text-slate-800">
// //                             {product.name}
// //                           </td>
// //                           <td className="px-5 py-3 text-slate-500">
// //                             {product.category}
// //                           </td>
// //                           <td className="px-5 py-3 text-slate-500">
// //                             {compactNumber(product.quantitySold)}
// //                           </td>
// //                           <td className="px-5 py-3 text-slate-700">
// //                             {currency(product.revenue)}
// //                           </td>
// //                           <td className="px-5 py-3 font-medium text-emerald-600">
// //                             {currency(product.profit)}
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>

// //               {/* Insights */}
// //               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
// //                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
// //                   Insights
// //                 </h3>
// //                 <div className="space-y-4">
// //                   {insights.map((insight) => (
// //                     <div key={insight.key} className="flex gap-3">
// //                       <span className="mt-0.5 rounded-lg bg-blue-50 p-2 text-blue-600">
// //                         <insight.icon className="h-4 w-4" />
// //                       </span>
// //                       <div>
// //                         <p className="text-sm font-medium text-slate-700">
// //                           {insight.title}
// //                         </p>
// //                         <p className="text-xs leading-relaxed text-slate-400">
// //                           {insight.detail}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // // ============================================================
// // // Loading Skeleton
// // // ============================================================
// // function ReportsSkeleton() {
// //   return (
// //     <div className="space-y-4">
// //       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
// //         {Array.from({ length: 5 }).map((_, i) => (
// //           <div
// //             key={i}
// //             className="h-24 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm"
// //           >
// //             <div className="h-full w-full rounded-2xl bg-slate-100/70" />
// //           </div>
// //         ))}
// //       </div>
// //       <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
// //         {Array.from({ length: 4 }).map((_, i) => (
// //           <div
// //             key={i}
// //             className="h-72 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm"
// //           >
// //             <div className="h-full w-full rounded-2xl bg-slate-100/70" />
// //           </div>
// //         ))}
// //       </div>
// //       <div className="h-72 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm">
// //         <div className="h-full w-full rounded-2xl bg-slate-100/70" />
// //       </div>
// //     </div>
// //   );
// // }

// import { useState, useMemo, useEffect, useCallback } from "react";
// import {
//   TrendingUp,
//   TrendingDown,
//   ShoppingCart,
//   Users,
//   Wallet,
//   BarChart3,
//   Download,
//   Calendar,
//   Sparkles,
//   Trophy,
//   CalendarDays,
//   CreditCard,
//   PackageCheck,
//   RefreshCcw,
// } from "lucide-react";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   AreaChart,
//   Area,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const DATE_RANGES = ["Today", "This Week", "This Month", "This Year", "Custom Range"];

// const CHART_COLORS = {
//   primary: "#2563eb",
//   primaryLight: "#60a5fa",
//   secondary: "#0ea5e9",
//   profit: "#16a34a",
//   expense: "#f97316",
//   grid: "#e5e7eb",
// };

// const PIE_COLORS = ["#2563eb", "#0ea5e9", "#818cf8", "#38bdf8"];

// const currency = (value) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(value ?? 0);

// const compactNumber = (value) =>
//   new Intl.NumberFormat("en-IN", { notation: "compact" }).format(value ?? 0);

// // ============================================================
// // State
// // ============================================================
// export default function Reports() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [dateRange, setDateRange] = useState("This Month");
//   const [customFrom, setCustomFrom] = useState("");
//   const [customTo, setCustomTo] = useState("");
//   const [data, setData] = useState(null);
//   const [isExporting, setIsExporting] = useState(false);

//   // ============================================================
//   // Functional API Integration with Data Adapter
//   // ============================================================
//   const fetchReports = useCallback(async (range, from, to) => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       // Map UI Range to Backend Query Params
//       let queryParam = "month";
//       if (range === "Today") queryParam = "today";
//       if (range === "This Week") queryParam = "week";
//       if (range === "This Year") queryParam = "year";
//       if (range === "Custom Range") queryParam = "custom";

//       let url = `http://localhost:8000/api/analytics/sales?date_range=${queryParam}`;
//       if (queryParam === "custom" && from && to) {
//         url += `&start_date=${from}&end_date=${to}`;
//       }

//       const res = await fetch(url, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (!res.ok) throw new Error("Failed to fetch analytics");
//       const apiData = await res.json();

//       // ADAPTER: Transform the FastAPI payload into the rich structure required by Recharts
//       const mappedData = {
//         summary: {
//           totalRevenue: apiData.summary?.total_sales || 0,
//           totalOrders: apiData.summary?.total_orders || 0,
//           totalCustomers: apiData.summary?.total_customers || 0,
//           profit: apiData.summary?.net_profit || 0,
//           growthPercentage: apiData.summary?.net_margin_pct ? Math.round(apiData.summary.net_margin_pct) : 0,
//           averageOrderValue: apiData.summary?.total_orders ? (apiData.summary.total_sales / apiData.summary.total_orders) : 0
//         },
//         salesTrend: apiData.trends?.map(t => ({
//           date: t.date,
//           sales: t.sales || 0,
//           orders: t.orders || 0
//         })) || [],
//         topProducts: apiData.top_products?.map((p, i) => ({
//           id: i,
//           name: p.name,
//           category: p.category || "General",
//           quantitySold: p.qty || (Math.floor(p.amount / 500) + 1), // Fallback math if backend lacks qty
//           revenue: p.amount || 0,
//           profit: p.profit || (p.amount * 0.3) // Safe fallback assuming 30% margin if missing
//         })) || [],
        
//         // Mock data for graphs not yet supported by your backend endpoint
//         paymentMethods: apiData.payment_methods || [
//           { method: "UPI", percentage: 65 },
//           { method: "Credit Card", percentage: 25 },
//           { method: "Cash", percentage: 10 }
//         ],
//         profitLoss: apiData.profit_loss || [
//           { month: "Current Period", profit: apiData.summary?.net_profit || 0, expense: apiData.summary?.expenses || 0 }
//         ]
//       };

//       setData(mappedData);
//     } catch (err) {
//       console.error("Report fetch error:", err);
//       setData(null);
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchReports(dateRange, customFrom, customTo);
//   }, [dateRange, fetchReports, customFrom, customTo]);

//   const handleApplyCustomRange = useCallback(() => {
//     if (!customFrom || !customTo) return;
//     fetchReports("Custom Range", customFrom, customTo);
//   }, [customFrom, customTo, fetchReports]);

//   const handleExportExcel = useCallback(() => {
//     setIsExporting(true);
//     console.log("Export triggered for:", { dateRange, customFrom, customTo });
//     setTimeout(() => setIsExporting(false), 900);
//   }, [dateRange, customFrom, customTo]);

//   const handleRefresh = useCallback(() => {
//     fetchReports(dateRange, customFrom, customTo);
//   }, [dateRange, customFrom, customTo, fetchReports]);

//   // ============================================================
//   // useMemo
//   // ============================================================
//   const summaryCards = useMemo(() => {
//     if (!data) return [];
//     const { summary } = data;
//     const isPositiveGrowth = summary.growthPercentage >= 0;

//     return [
//       {
//         key: "revenue",
//         label: "Total Revenue",
//         value: currency(summary.totalRevenue),
//         icon: Wallet,
//         accent: "bg-blue-50 text-blue-600",
//       },
//       {
//         key: "orders",
//         label: "Total Orders",
//         value: compactNumber(summary.totalOrders),
//         icon: ShoppingCart,
//         accent: "bg-sky-50 text-sky-600",
//       },
//       {
//         key: "customers",
//         label: "Total Customers",
//         value: compactNumber(summary.totalCustomers),
//         icon: Users,
//         accent: "bg-indigo-50 text-indigo-600",
//       },
//       {
//         key: "profit",
//         label: "Net Profit",
//         value: currency(summary.profit),
//         icon: TrendingUp,
//         accent: "bg-emerald-50 text-emerald-600",
//       },
//       {
//         key: "growth",
//         label: "Growth",
//         value: `${isPositiveGrowth ? "+" : ""}${summary.growthPercentage}%`,
//         icon: isPositiveGrowth ? TrendingUp : TrendingDown,
//         accent: isPositiveGrowth
//           ? "bg-green-50 text-green-600"
//           : "bg-red-50 text-red-600",
//       },
//     ];
//   }, [data]);

//   const insights = useMemo(() => {
//     if (!data) return [];
//     const { topProducts, salesTrend, paymentMethods, summary } = data;

//     // Safely extract insights to prevent crashes if arrays are empty
//     const bestProduct = topProducts?.length ? [...topProducts].sort((a, b) => b.revenue - a.revenue)[0] : null;
//     const mostProfitableProduct = topProducts?.length ? [...topProducts].sort((a, b) => b.profit - a.profit)[0] : null;
//     const bestDay = salesTrend?.length ? [...salesTrend].sort((a, b) => b.sales - a.sales)[0] : null;
//     const topPaymentMethod = paymentMethods?.length ? [...paymentMethods].sort((a, b) => b.percentage - a.percentage)[0] : null;
//     const averageDailySales = salesTrend?.length ? (salesTrend.reduce((acc, day) => acc + day.sales, 0) / salesTrend.length) : 0;

//     const generatedInsights = [];

//     if (bestProduct) {
//       generatedInsights.push({
//         key: "top-selling",
//         icon: Trophy,
//         title: "Highest Selling Product",
//         detail: `${bestProduct.name} generated ${currency(bestProduct.revenue)} in revenue.`,
//       });
//     }
//     if (bestDay) {
//       generatedInsights.push({
//         key: "best-day",
//         icon: CalendarDays,
//         title: "Best Revenue Day",
//         detail: `${bestDay.date} recorded ${currency(bestDay.sales)} in sales.`,
//       });
//     }
//     if (averageDailySales > 0) {
//       generatedInsights.push({
//         key: "avg-sales",
//         icon: BarChart3,
//         title: "Average Daily Sales",
//         detail: `${currency(averageDailySales)} per day across the selected period.`,
//       });
//     }
//     if (topPaymentMethod) {
//       generatedInsights.push({
//         key: "payment",
//         icon: CreditCard,
//         title: "Preferred Payment Method",
//         detail: `${topPaymentMethod.method} accounts for ${topPaymentMethod.percentage}% of transactions.`,
//       });
//     }
//     if (mostProfitableProduct) {
//       generatedInsights.push({
//         key: "profitable",
//         icon: PackageCheck,
//         title: "Most Profitable Product",
//         detail: `${mostProfitableProduct.name} contributed ${currency(mostProfitableProduct.profit)} in profit.`,
//       });
//     }
//     if (summary?.averageOrderValue > 0) {
//       generatedInsights.push({
//         key: "aov",
//         icon: Sparkles,
//         title: "Average Order Value",
//         detail: `Customers spend ${currency(summary.averageOrderValue)} on average per order.`,
//       });
//     }

//     return generatedInsights;
//   }, [data]);

//   const hasData =
//     !!data &&
//     (data.salesTrend?.length > 0 ||
//       data.topProducts?.length > 0 ||
//       data.profitLoss?.length > 0 ||
//       data.paymentMethods?.length > 0);

//   // ============================================================
//   // JSX
//   // ============================================================
//   return (
//     <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl space-y-6">
        
//         {/* Header */}
//         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
//               Reports &amp; Analytics
//             </h1>
//             <p className="mt-1 text-sm text-slate-500">
//               Track sales performance, profitability, and customer trends across your store.
//             </p>
//           </div>

//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               onClick={handleRefresh}
//               className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50"
//             >
//               <RefreshCcw className="h-4 w-4" />
//               Refresh
//             </button>
//             <button
//               type="button"
//               onClick={handleExportExcel}
//               disabled={isExporting}
//               className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               <Download className="h-4 w-4" />
//               {isExporting ? "Exporting..." : "Export Excel"}
//             </button>
//           </div>
//         </div>

//         {/* Filter Bar */}
//         <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex flex-wrap items-center gap-2">
//               <Calendar className="mr-1 h-4 w-4 text-slate-400" />
//               {DATE_RANGES.map((range) => (
//                 <button
//                   key={range}
//                   type="button"
//                   onClick={() => setDateRange(range)}
//                   className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
//                     dateRange === range
//                       ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
//                       : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//                   }`}
//                 >
//                   {range}
//                 </button>
//               ))}
//             </div>

//             {dateRange === "Custom Range" && (
//               <div className="flex flex-wrap items-center gap-2">
//                 <input
//                   type="date"
//                   value={customFrom}
//                   onChange={(e) => setCustomFrom(e.target.value)}
//                   className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 focus:border-blue-500 focus:outline-none"
//                 />
//                 <span className="text-sm text-slate-400">to</span>
//                 <input
//                   type="date"
//                   value={customTo}
//                   onChange={(e) => setCustomTo(e.target.value)}
//                   className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 focus:border-blue-500 focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={handleApplyCustomRange}
//                   className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
//                 >
//                   Apply
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Loading Skeleton */}
//         {isLoading && <ReportsSkeleton />}

//         {/* Empty State */}
//         {!isLoading && !hasData && (
//           <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-16 text-center shadow-sm">
//             <BarChart3 className="mb-4 h-10 w-10 text-slate-300" />
//             <h3 className="text-lg font-semibold text-slate-700">
//               No Report Data Found
//             </h3>
//             <p className="mt-1 text-sm text-slate-400">
//               Try adjusting the date range or check back later.
//             </p>
//           </div>
//         )}

//         {/* Main Content */}
//         {!isLoading && hasData && (
//           <>
//             {/* Summary Cards */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
//               {summaryCards.map((card) => (
//                 <div
//                   key={card.key}
//                   className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm font-medium text-slate-500">
//                       {card.label}
//                     </span>
//                     <span className={`rounded-lg p-2 ${card.accent}`}>
//                       <card.icon className="h-4 w-4" />
//                     </span>
//                   </div>
//                   <p className="mt-3 text-xl font-bold text-slate-900">
//                     {card.value}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Charts Grid */}
//             <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              
//               {/* Sales Trend - Line Chart */}
//               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
//                   Sales Trend
//                 </h3>
//                 <ResponsiveContainer width="100%" height={280}>
//                   <LineChart data={data.salesTrend}>
//                     <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
//                     <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#64748b" }} />
//                     <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
//                     <Tooltip formatter={(value, name) => name === "sales" ? currency(value) : value} />
//                     <Legend />
//                     <Line
//                       type="monotone"
//                       dataKey="sales"
//                       name="Sales"
//                       stroke={CHART_COLORS.primary}
//                       strokeWidth={2.5}
//                       dot={false}
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="orders"
//                       name="Orders"
//                       stroke={CHART_COLORS.secondary}
//                       strokeWidth={2}
//                       dot={false}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Top Products - Bar Chart */}
//               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
//                   Top Products by Revenue
//                 </h3>
//                 <ResponsiveContainer width="100%" height={280}>
//                   <BarChart data={data.topProducts}>
//                     <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
//                     <XAxis
//                       dataKey="name"
//                       tick={{ fontSize: 11, fill: "#64748b" }}
//                       interval={0}
//                       angle={-20}
//                       textAnchor="end"
//                       height={70}
//                     />
//                     <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
//                     <Tooltip formatter={(value) => currency(value)} />
//                     <Bar
//                       dataKey="revenue"
//                       name="Revenue"
//                       fill={CHART_COLORS.primary}
//                       radius={[6, 6, 0, 0]}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Profit vs Expenses - Area Chart */}
//               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
//                   Profit vs Expenses
//                 </h3>
//                 <ResponsiveContainer width="100%" height={280}>
//                   <AreaChart data={data.profitLoss}>
//                     <defs>
//                       <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor={CHART_COLORS.profit} stopOpacity={0.35} />
//                         <stop offset="95%" stopColor={CHART_COLORS.profit} stopOpacity={0} />
//                       </linearGradient>
//                       <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor={CHART_COLORS.expense} stopOpacity={0.35} />
//                         <stop offset="95%" stopColor={CHART_COLORS.expense} stopOpacity={0} />
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
//                     <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
//                     <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
//                     <Tooltip formatter={(value) => currency(value)} />
//                     <Legend />
//                     <Area
//                       type="monotone"
//                       dataKey="profit"
//                       name="Profit"
//                       stroke={CHART_COLORS.profit}
//                       fill="url(#profitGradient)"
//                       strokeWidth={2}
//                     />
//                     <Area
//                       type="monotone"
//                       dataKey="expense"
//                       name="Expense"
//                       stroke={CHART_COLORS.expense}
//                       fill="url(#expenseGradient)"
//                       strokeWidth={2}
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Payment Methods - Pie Chart */}
//               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
//                   Payment Methods
//                 </h3>
//                 <ResponsiveContainer width="100%" height={280}>
//                   <PieChart>
//                     <Pie
//                       data={data.paymentMethods}
//                       dataKey="percentage"
//                       nameKey="method"
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={60}
//                       outerRadius={95}
//                       paddingAngle={3}
//                     >
//                       {data.paymentMethods.map((entry, index) => (
//                         <Cell
//                           key={entry.method}
//                           fill={PIE_COLORS[index % PIE_COLORS.length]}
//                         />
//                       ))}
//                     </Pie>
//                     <Tooltip formatter={(value) => `${value}%`} />
//                     <Legend />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             {/* Top Products Table + Insights */}
//             <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              
//               {/* Table */}
//               <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm lg:col-span-2">
//                 <div className="border-b border-slate-100 p-5">
//                   <h3 className="text-sm font-semibold text-slate-700">
//                     Top Products
//                   </h3>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-left text-sm">
//                     <thead>
//                       <tr className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
//                         <th className="px-5 py-3 font-medium">Product</th>
//                         <th className="px-5 py-3 font-medium">Category</th>
//                         <th className="px-5 py-3 font-medium">Units Sold</th>
//                         <th className="px-5 py-3 font-medium">Revenue</th>
//                         <th className="px-5 py-3 font-medium">Profit</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {data.topProducts.map((product) => (
//                         <tr
//                           key={product.id}
//                           className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60"
//                         >
//                           <td className="px-5 py-3 font-medium text-slate-800">
//                             {product.name}
//                           </td>
//                           <td className="px-5 py-3 text-slate-500">
//                             {product.category}
//                           </td>
//                           <td className="px-5 py-3 text-slate-500">
//                             {compactNumber(product.quantitySold)}
//                           </td>
//                           <td className="px-5 py-3 text-slate-700">
//                             {currency(product.revenue)}
//                           </td>
//                           <td className="px-5 py-3 font-medium text-emerald-600">
//                             {currency(product.profit)}
//                           </td>
//                         </tr>
//                       ))}
//                       {data.topProducts.length === 0 && (
//                         <tr>
//                           <td colSpan="5" className="px-5 py-8 text-center text-slate-400">
//                             No product data available for this period.
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Insights */}
//               <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//                 <h3 className="mb-4 text-sm font-semibold text-slate-700">
//                   Insights
//                 </h3>
//                 <div className="space-y-4">
//                   {insights.length === 0 ? (
//                     <p className="text-sm text-slate-400 text-center py-6">Insufficient data to generate insights.</p>
//                   ) : (
//                     insights.map((insight) => (
//                       <div key={insight.key} className="flex gap-3">
//                         <span className="mt-0.5 rounded-lg bg-blue-50 p-2 text-blue-600">
//                           <insight.icon className="h-4 w-4" />
//                         </span>
//                         <div>
//                           <p className="text-sm font-medium text-slate-700">
//                             {insight.title}
//                           </p>
//                           <p className="text-xs leading-relaxed text-slate-400">
//                             {insight.detail}
//                           </p>
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// // ============================================================
// // Loading Skeleton
// // ============================================================
// function ReportsSkeleton() {
//   return (
//     <div className="space-y-4">
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <div
//             key={i}
//             className="h-24 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm"
//           >
//             <div className="h-full w-full rounded-2xl bg-slate-100/70" />
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//         {Array.from({ length: 4 }).map((_, i) => (
//           <div
//             key={i}
//             className="h-72 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm"
//           >
//             <div className="h-full w-full rounded-2xl bg-slate-100/70" />
//           </div>
//         ))}
//       </div>
//       <div className="h-72 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm">
//         <div className="h-full w-full rounded-2xl bg-slate-100/70" />
//       </div>
//     </div>
//   // );
// }
import { useState, useMemo, useEffect, useCallback } from "react";
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Users,
  Wallet,
  BarChart3,
  Download,
  Calendar,
  Sparkles,
  Trophy,
  CalendarDays,
  CreditCard,
  PackageCheck,
  RefreshCcw,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import * as XLSX from 'xlsx'; // ADDED: Excel export library

const DATE_RANGES = ["Today", "This Week", "This Month", "This Year", "Custom Range"];

const CHART_COLORS = {
  primary: "#2563eb",
  primaryLight: "#60a5fa",
  secondary: "#0ea5e9",
  profit: "#16a34a",
  expense: "#f97316",
  grid: "#e5e7eb",
};

const PIE_COLORS = ["#2563eb", "#0ea5e9", "#818cf8", "#38bdf8"];

const currency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value ?? 0);

const compactNumber = (value) =>
  new Intl.NumberFormat("en-IN", { notation: "compact" }).format(value ?? 0);

// ============================================================
// State
// ============================================================
export default function Reports() {
  const [isLoading, setIsLoading] = useState(true);
  const [dateRange, setDateRange] = useState("This Month");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");
  const [data, setData] = useState(null);
  const [isExporting, setIsExporting] = useState(false);

  // ============================================================
  // Functional API Integration with Data Adapter
  // ============================================================
  const fetchReports = useCallback(async (range, from, to) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      // Map UI Range to Backend Query Params
      let queryParam = "month";
      if (range === "Today") queryParam = "today";
      if (range === "This Week") queryParam = "week";
      if (range === "This Year") queryParam = "year";
      if (range === "Custom Range") queryParam = "custom";

      let url = `http://localhost:8000/api/analytics/sales?date_range=${queryParam}`;
      if (queryParam === "custom" && from && to) {
        url += `&start_date=${from}&end_date=${to}`;
      }

      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error("Failed to fetch analytics");
      const apiData = await res.json();

      // ADAPTER: Transform the FastAPI payload into the rich structure required by Recharts
      const mappedData = {
        summary: {
          totalRevenue: apiData.summary?.total_sales || 0,
          totalOrders: apiData.summary?.total_orders || 0,
          totalCustomers: apiData.summary?.total_customers || 0,
          profit: apiData.summary?.net_profit || 0,
          growthPercentage: apiData.summary?.net_margin_pct ? Math.round(apiData.summary.net_margin_pct) : 0,
          averageOrderValue: apiData.summary?.total_orders ? (apiData.summary.total_sales / apiData.summary.total_orders) : 0
        },
        salesTrend: apiData.trends?.map(t => ({
          date: t.date,
          sales: t.sales || 0,
          orders: t.orders || 0
        })) || [],
        topProducts: apiData.top_products?.map((p, i) => ({
          id: i,
          name: p.name,
          category: p.category || "General",
          quantitySold: p.qty || (Math.floor(p.amount / 500) + 1), // Fallback math if backend lacks qty
          revenue: p.amount || 0,
          profit: p.profit || (p.amount * 0.3) // Safe fallback assuming 30% margin if missing
        })) || [],
        
        // Mock data for graphs not yet supported by your backend endpoint
        paymentMethods: apiData.payment_methods || [
          { method: "UPI", percentage: 65 },
          { method: "Credit Card", percentage: 25 },
          { method: "Cash", percentage: 10 }
        ],
        profitLoss: apiData.profit_loss || [
          { month: "Current Period", profit: apiData.summary?.net_profit || 0, expense: apiData.summary?.expenses || 0 }
        ]
      };

      setData(mappedData);
    } catch (err) {
      console.error("Report fetch error:", err);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReports(dateRange, customFrom, customTo);
  }, [dateRange, fetchReports, customFrom, customTo]);

  const handleApplyCustomRange = useCallback(() => {
    if (!customFrom || !customTo) return;
    fetchReports("Custom Range", customFrom, customTo);
  }, [customFrom, customTo, fetchReports]);

  // ============================================================
  // Export Logic (Excel Generation)
  // ============================================================
  const handleExportExcel = useCallback(() => {
    if (!data) return;
    setIsExporting(true);

    try {
      // 1. Prepare Summary Sheet Data
      const summaryData = [
        { Metric: "Total Revenue", Value: data.summary.totalRevenue },
        { Metric: "Net Profit", Value: data.summary.profit },
        { Metric: "Total Orders", Value: data.summary.totalOrders },
        { Metric: "Total Customers", Value: data.summary.totalCustomers },
        { Metric: "Growth Percentage", Value: `${data.summary.growthPercentage}%` },
        { Metric: "Average Order Value", Value: data.summary.averageOrderValue }
      ];

      // 2. Prepare Sales Trend Sheet Data
      const trendData = data.salesTrend.map(day => ({
        Date: day.date,
        Sales_INR: day.sales,
        Order_Count: day.orders
      }));

      // 3. Prepare Top Products Sheet Data
      const productData = data.topProducts.map(product => ({
        Product_Name: product.name,
        Category: product.category,
        Quantity_Sold: product.quantitySold,
        Revenue_INR: product.revenue,
        Estimated_Profit_INR: product.profit
      }));

      // 4. Create Worksheets
      const summarySheet = XLSX.utils.json_to_sheet(summaryData);
      const trendSheet = XLSX.utils.json_to_sheet(trendData);
      const productSheet = XLSX.utils.json_to_sheet(productData);

      // 5. Create Workbook and Append Sheets
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, summarySheet, "Summary Metrics");
      XLSX.utils.book_append_sheet(wb, trendSheet, "Daily Sales Trend");
      XLSX.utils.book_append_sheet(wb, productSheet, "Top Products");

      // 6. Generate filename based on selected range
      let fileSuffix = dateRange.replace(/\s+/g, '_').toLowerCase();
      if (dateRange === "Custom Range") {
        fileSuffix = `${customFrom}_to_${customTo}`;
      }
      
      // 7. Trigger Download
      XLSX.writeFile(wb, `Laxvira_Financial_Report_${fileSuffix}.xlsx`);

    } catch (err) {
      console.error("Failed to generate Excel file:", err);
      alert("An error occurred while generating the Excel export.");
    } finally {
      setIsExporting(false);
    }
  }, [data, dateRange, customFrom, customTo]);

  const handleRefresh = useCallback(() => {
    fetchReports(dateRange, customFrom, customTo);
  }, [dateRange, customFrom, customTo, fetchReports]);

  // ============================================================
  // useMemo
  // ============================================================
  const summaryCards = useMemo(() => {
    if (!data) return [];
    const { summary } = data;
    const isPositiveGrowth = summary.growthPercentage >= 0;

    return [
      {
        key: "revenue",
        label: "Total Revenue",
        value: currency(summary.totalRevenue),
        icon: Wallet,
        accent: "bg-blue-50 text-blue-600",
      },
      {
        key: "orders",
        label: "Total Orders",
        value: compactNumber(summary.totalOrders),
        icon: ShoppingCart,
        accent: "bg-sky-50 text-sky-600",
      },
      {
        key: "customers",
        label: "Total Customers",
        value: compactNumber(summary.totalCustomers),
        icon: Users,
        accent: "bg-indigo-50 text-indigo-600",
      },
      {
        key: "profit",
        label: "Net Profit",
        value: currency(summary.profit),
        icon: TrendingUp,
        accent: "bg-emerald-50 text-emerald-600",
      },
      {
        key: "growth",
        label: "Growth",
        value: `${isPositiveGrowth ? "+" : ""}${summary.growthPercentage}%`,
        icon: isPositiveGrowth ? TrendingUp : TrendingDown,
        accent: isPositiveGrowth
          ? "bg-green-50 text-green-600"
          : "bg-red-50 text-red-600",
      },
    ];
  }, [data]);

  const insights = useMemo(() => {
    if (!data) return [];
    const { topProducts, salesTrend, paymentMethods, summary } = data;

    // Safely extract insights to prevent crashes if arrays are empty
    const bestProduct = topProducts?.length ? [...topProducts].sort((a, b) => b.revenue - a.revenue)[0] : null;
    const mostProfitableProduct = topProducts?.length ? [...topProducts].sort((a, b) => b.profit - a.profit)[0] : null;
    const bestDay = salesTrend?.length ? [...salesTrend].sort((a, b) => b.sales - a.sales)[0] : null;
    const topPaymentMethod = paymentMethods?.length ? [...paymentMethods].sort((a, b) => b.percentage - a.percentage)[0] : null;
    const averageDailySales = salesTrend?.length ? (salesTrend.reduce((acc, day) => acc + day.sales, 0) / salesTrend.length) : 0;

    const generatedInsights = [];

    if (bestProduct) {
      generatedInsights.push({
        key: "top-selling",
        icon: Trophy,
        title: "Highest Selling Product",
        detail: `${bestProduct.name} generated ${currency(bestProduct.revenue)} in revenue.`,
      });
    }
    if (bestDay) {
      generatedInsights.push({
        key: "best-day",
        icon: CalendarDays,
        title: "Best Revenue Day",
        detail: `${bestDay.date} recorded ${currency(bestDay.sales)} in sales.`,
      });
    }
    if (averageDailySales > 0) {
      generatedInsights.push({
        key: "avg-sales",
        icon: BarChart3,
        title: "Average Daily Sales",
        detail: `${currency(averageDailySales)} per day across the selected period.`,
      });
    }
    if (topPaymentMethod) {
      generatedInsights.push({
        key: "payment",
        icon: CreditCard,
        title: "Preferred Payment Method",
        detail: `${topPaymentMethod.method} accounts for ${topPaymentMethod.percentage}% of transactions.`,
      });
    }
    if (mostProfitableProduct) {
      generatedInsights.push({
        key: "profitable",
        icon: PackageCheck,
        title: "Most Profitable Product",
        detail: `${mostProfitableProduct.name} contributed ${currency(mostProfitableProduct.profit)} in profit.`,
      });
    }
    if (summary?.averageOrderValue > 0) {
      generatedInsights.push({
        key: "aov",
        icon: Sparkles,
        title: "Average Order Value",
        detail: `Customers spend ${currency(summary.averageOrderValue)} on average per order.`,
      });
    }

    return generatedInsights;
  }, [data]);

  const hasData =
    !!data &&
    (data.salesTrend?.length > 0 ||
      data.topProducts?.length > 0 ||
      data.profitLoss?.length > 0 ||
      data.paymentMethods?.length > 0);

  // ============================================================
  // JSX
  // ============================================================
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Reports &amp; Analytics
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Track sales performance, profitability, and customer trends across your store.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRefresh}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50"
            >
              <RefreshCcw className="h-4 w-4" />
              Refresh
            </button>
            <button
              type="button"
              onClick={handleExportExcel}
              disabled={isExporting || !hasData}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Download className="h-4 w-4" />
              {isExporting ? "Exporting..." : "Export Excel"}
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <Calendar className="mr-1 h-4 w-4 text-slate-400" />
              {DATE_RANGES.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setDateRange(range)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                    dateRange === range
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            {dateRange === "Custom Range" && (
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="date"
                  value={customFrom}
                  onChange={(e) => setCustomFrom(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 focus:border-blue-500 focus:outline-none"
                />
                <span className="text-sm text-slate-400">to</span>
                <input
                  type="date"
                  value={customTo}
                  onChange={(e) => setCustomTo(e.target.value)}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleApplyCustomRange}
                  className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Loading Skeleton */}
        {isLoading && <ReportsSkeleton />}

        {/* Empty State */}
        {!isLoading && !hasData && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-16 text-center shadow-sm">
            <BarChart3 className="mb-4 h-10 w-10 text-slate-300" />
            <h3 className="text-lg font-semibold text-slate-700">
              No Report Data Found
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Try adjusting the date range or check back later.
            </p>
          </div>
        )}

        {/* Main Content */}
        {!isLoading && hasData && (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {summaryCards.map((card) => (
                <div
                  key={card.key}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      {card.label}
                    </span>
                    <span className={`rounded-lg p-2 ${card.accent}`}>
                      <card.icon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-xl font-bold text-slate-900">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              
              {/* Sales Trend - Line Chart */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-sm font-semibold text-slate-700">
                  Sales Trend
                </h3>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={data.salesTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                    <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#64748b" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                    <Tooltip formatter={(value, name) => name === "sales" ? currency(value) : value} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      name="Sales"
                      stroke={CHART_COLORS.primary}
                      strokeWidth={2.5}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      name="Orders"
                      stroke={CHART_COLORS.secondary}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Top Products - Bar Chart */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-sm font-semibold text-slate-700">
                  Top Products by Revenue
                </h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={data.topProducts}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 11, fill: "#64748b" }}
                      interval={0}
                      angle={-20}
                      textAnchor="end"
                      height={70}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                    <Tooltip formatter={(value) => currency(value)} />
                    <Bar
                      dataKey="revenue"
                      name="Revenue"
                      fill={CHART_COLORS.primary}
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Profit vs Expenses - Area Chart */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-sm font-semibold text-slate-700">
                  Profit vs Expenses
                </h3>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={data.profitLoss}>
                    <defs>
                      <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_COLORS.profit} stopOpacity={0.35} />
                        <stop offset="95%" stopColor={CHART_COLORS.profit} stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={CHART_COLORS.expense} stopOpacity={0.35} />
                        <stop offset="95%" stopColor={CHART_COLORS.expense} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
                    <Tooltip formatter={(value) => currency(value)} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="profit"
                      name="Profit"
                      stroke={CHART_COLORS.profit}
                      fill="url(#profitGradient)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="expense"
                      name="Expense"
                      stroke={CHART_COLORS.expense}
                      fill="url(#expenseGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Payment Methods - Pie Chart */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-sm font-semibold text-slate-700">
                  Payment Methods
                </h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={data.paymentMethods}
                      dataKey="percentage"
                      nameKey="method"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={95}
                      paddingAngle={3}
                    >
                      {data.paymentMethods.map((entry, index) => (
                        <Cell
                          key={entry.method}
                          fill={PIE_COLORS[index % PIE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Products Table + Insights */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              
              {/* Table */}
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm lg:col-span-2">
                <div className="border-b border-slate-100 p-5">
                  <h3 className="text-sm font-semibold text-slate-700">
                    Top Products
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
                        <th className="px-5 py-3 font-medium">Product</th>
                        <th className="px-5 py-3 font-medium">Category</th>
                        <th className="px-5 py-3 font-medium">Units Sold</th>
                        <th className="px-5 py-3 font-medium">Revenue</th>
                        <th className="px-5 py-3 font-medium">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.topProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60"
                        >
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {product.name}
                          </td>
                          <td className="px-5 py-3 text-slate-500">
                            {product.category}
                          </td>
                          <td className="px-5 py-3 text-slate-500">
                            {compactNumber(product.quantitySold)}
                          </td>
                          <td className="px-5 py-3 text-slate-700">
                            {currency(product.revenue)}
                          </td>
                          <td className="px-5 py-3 font-medium text-emerald-600">
                            {currency(product.profit)}
                          </td>
                        </tr>
                      ))}
                      {data.topProducts.length === 0 && (
                        <tr>
                          <td colSpan="5" className="px-5 py-8 text-center text-slate-400">
                            No product data available for this period.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Insights */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-sm font-semibold text-slate-700">
                  Insights
                </h3>
                <div className="space-y-4">
                  {insights.length === 0 ? (
                    <p className="text-sm text-slate-400 text-center py-6">Insufficient data to generate insights.</p>
                  ) : (
                    insights.map((insight) => (
                      <div key={insight.key} className="flex gap-3">
                        <span className="mt-0.5 rounded-lg bg-blue-50 p-2 text-blue-600">
                          <insight.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-slate-700">
                            {insight.title}
                          </p>
                          <p className="text-xs leading-relaxed text-slate-400">
                            {insight.detail}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================================
// Loading Skeleton
// ============================================================
function ReportsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-24 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm"
          >
            <div className="h-full w-full rounded-2xl bg-slate-100/70" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-72 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm"
          >
            <div className="h-full w-full rounded-2xl bg-slate-100/70" />
          </div>
        ))}
      </div>
      <div className="h-72 animate-pulse rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="h-full w-full rounded-2xl bg-slate-100/70" />
      </div>
    </div>
  );
}