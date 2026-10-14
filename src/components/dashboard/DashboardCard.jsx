// // import {
// //   IndianRupee,
// //   Package,
// //   ShoppingCart,
// //   TrendingDown,
// //   TrendingUp,
// //   Users,
// // } from "lucide-react";

// // const icons = {
// //   sales: IndianRupee,
// //   orders: ShoppingCart,
// //   stock: Package,
// //   customers: Users,
// // };

// // const DashboardCard = ({ title, value, change, positive, type, subtitle }) => {
// //   const Icon = icons[type] || IndianRupee;

// //   return (
// //     <div className="rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm ring-1 ring-black/[0.02] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
// //       <div className="flex items-start justify-between gap-2">
// //         <div className="min-w-0">
// //           <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">
// //             {title}
// //           </p>
// //           <h2 className="mt-2 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 truncate">
// //             {value}
// //           </h2>
// //           {subtitle && (
// //             <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-400 truncate">
// //               {subtitle}
// //             </p>
// //           )}
// //         </div>

// //         <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-blue-50">
// //           <Icon className="text-blue-600" size={18} />
// //         </div>
// //       </div>

// //       <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-between gap-2">
// //         <div
// //           className={`flex items-center gap-1 rounded-lg px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs sm:text-sm font-semibold ${
// //             positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
// //           }`}
// //         >
// //           {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
// //           {change}
// //         </div>

// //         <span className="text-[11px] sm:text-xs text-gray-400 whitespace-nowrap">
// //           vs yesterday
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardCard;

// import {
//   IndianRupee, Package, ShoppingCart, TrendingDown, TrendingUp, Users,
// } from "lucide-react";

// const icons = {
//   sales: IndianRupee,
//   orders: ShoppingCart,
//   stock: Package,
//   customers: Users,
// };

// const DashboardCard = ({ title, value, change, positive, type, subtitle }) => {
//   const Icon = icons[type] || IndianRupee;

//   return (
//     <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm ring-1 ring-black/[0.02] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-brand-gold/40 relative overflow-hidden">
      
//       {/* Subtle highlight gradient on hover */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//       <div className="flex items-start justify-between gap-2">
//         <div className="min-w-0">
//           <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase truncate">
//             {title}
//           </p>
//           <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy truncate tracking-tight">
//             {value}
//           </h2>
//           {subtitle && (
//             <p className="mt-1 sm:mt-2 text-xs text-slate-400 font-medium truncate">
//               {subtitle}
//             </p>
//           )}
//         </div>

//         <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 group-hover:bg-brand-gold/10 transition-colors duration-500">
//           <Icon className="text-brand-gold" size={20} />
//         </div>
//       </div>

//       <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-between gap-2">
//         <div
//           className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs sm:text-sm font-bold shadow-sm border ${
//             positive 
//               ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
//               : "bg-rose-50 text-rose-700 border-rose-100"
//           }`}
//         >
//           {positive ? <TrendingUp size={14} strokeWidth={3} /> : <TrendingDown size={14} strokeWidth={3} />}
//           {change}
//         </div>

//         <span className="text-[11px] sm:text-xs font-semibold text-slate-400 whitespace-nowrap uppercase tracking-wider">
//           vs yesterday
//         </span>
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;

// import {
//   IndianRupee, Package, ShoppingCart, TrendingDown, TrendingUp, Users,
// } from "lucide-react";

// const icons = {
//   sales: IndianRupee,
//   orders: ShoppingCart,
//   stock: Package,
//   customers: Users,
// };

// const DashboardCard = ({ title, value, change, positive, type, subtitle }) => {
//   const Icon = icons[type] || IndianRupee;

//   return (
//     <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm ring-1 ring-black/[0.02] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
      
//       {/* Volumetric highlight gradient on hover */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C69C55] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//       <div className="flex items-start justify-between gap-2">
//         <div className="min-w-0">
//           <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase truncate">
//             {title}
//           </p>
//           <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#101E36] to-[#3a4b6b] truncate tracking-tight">
//             {value}
//           </h2>
//           {subtitle && (
//             <p className="mt-1 sm:mt-2 text-xs text-slate-400 font-medium truncate">
//               {subtitle}
//             </p>
//           )}
//         </div>

//         {/* Gradient Icon Container */}
//         <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-[#C69C55]/20 group-hover:to-[#C69C55]/5 border border-slate-100 group-hover:border-[#C69C55]/20 transition-all duration-500 shadow-inner">
//           <Icon className="text-[#C69C55] drop-shadow-sm transition-transform duration-500 group-hover:scale-110" size={20} />
//         </div>
//       </div>

//       <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-between gap-2">
//         {/* Gradient Badges */}
//         <div
//           className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs sm:text-sm font-bold shadow-sm border ${
//             positive 
//               ? "bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border-emerald-100/50" 
//               : "bg-gradient-to-r from-rose-50 to-orange-50 text-rose-700 border-rose-100/50"
//           }`}
//         >
//           {positive ? <TrendingUp size={14} strokeWidth={2.5} /> : <TrendingDown size={14} strokeWidth={2.5} />}
//           {change}
//         </div>

//         <span className="text-[11px] sm:text-xs font-semibold text-slate-400 whitespace-nowrap uppercase tracking-wider">
//           vs yesterday
//         </span>
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;

// import {
//   IndianRupee, Package, ShoppingCart, TrendingDown, TrendingUp, Users, WalletCards, LineChart, BriefcaseBusiness
// } from "lucide-react";

// const icons = {
//   sales: BarChart3,
//   orders: WalletCards,
//   stock: LineChart,
//   customers: BriefcaseBusiness,
// };

// // Fallback icon for missing mapping
// import { BarChart3 } from "lucide-react";

// const DashboardCard = ({ title, value, change, positive, type }) => {
//   const Icon = icons[type] || BarChart3;

//   return (
//     <div className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,.03)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(15,23,42,.06)] hover:-translate-y-0.5 flex flex-col justify-between h-[150px]">
//       <div className="flex items-center justify-between">
//         <p className="text-[11px] font-bold text-slate-400 tracking-wide uppercase">
//           {title}
//         </p>
//         <Icon size={16} className="text-slate-300" />
//       </div>
      
//       <div>
//         <h2 className="text-[28px] font-black text-slate-900 tracking-tight">
//           {value}
//         </h2>
//         <p className={`mt-1.5 text-[10px] font-bold flex items-center gap-1 ${positive ? "text-emerald-500" : "text-rose-500"}`}>
//           {change} <span className="font-medium text-slate-400">from last month</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;

import {
  IndianRupee, Package, ShoppingCart, TrendingDown, TrendingUp, Users, WalletCards, LineChart, BriefcaseBusiness
} from "lucide-react";

// Fallback icon
import { BarChart3 } from "lucide-react";

const icons = {
  sales: BarChart3,
  orders: WalletCards,
  stock: LineChart,
  customers: BriefcaseBusiness,
};

// Added 'onClick' to props
const DashboardCard = ({ title, value, change, positive, type, onClick }) => {
  const Icon = icons[type] || BarChart3;

  return (
    <div 
      onClick={onClick}
      className={`rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,.03)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(15,23,42,.06)] hover:-translate-y-0.5 flex flex-col justify-between h-[150px] ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-bold text-slate-400 tracking-wide uppercase">
          {title}
        </p>
        <Icon size={16} className="text-slate-300" />
      </div>
      
      <div>
        <h2 className="text-[28px] font-black text-slate-900 tracking-tight">
          {value}
        </h2>
        <p className={`mt-1.5 text-[10px] font-bold flex items-center gap-1 ${positive ? "text-emerald-500" : "text-rose-500"}`}>
          {change} <span className="font-medium text-slate-400">from last month</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;