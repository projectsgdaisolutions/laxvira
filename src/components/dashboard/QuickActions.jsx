// // // // import { useNavigate } from "react-router-dom";
// // // // import { FileText, Package, PlusCircle, Users, ChevronRight } from "lucide-react";

// // // // const QuickActions = () => {
// // // //   const navigate = useNavigate();

// // // //   const actions = [
// // // //     {
// // // //       title: "Create Invoice",
// // // //       icon: PlusCircle,
// // // //       description: "Generate a new invoice",
// // // //       onClick: () => console.log("Create Invoice"),
// // // //     },
// // // //     {
// // // //       title: "Add Product",
// // // //       icon: Package,
// // // //       description: "Add a new product to stock",
// // // //       onClick: () => navigate("/products/new"),
// // // //     },
// // // //     {
// // // //       title: "Add Customer",
// // // //       icon: Users,
// // // //       description: "Register a new customer",
// // // //       onClick: () => console.log("Add Customer"),
// // // //     },
// // // //     {
// // // //       title: "View Reports",
// // // //       icon: FileText,
// // // //       description: "Open daily sales reports",
// // // //       onClick: () => console.log("View Reports"),
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm ring-1 ring-black/[0.02]">
// // // //       <h2 className="text-base sm:text-xl font-semibold text-gray-900">
// // // //         Quick Actions
// // // //       </h2>

// // // //       <div className="mt-4 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
// // // //         {actions.map((action) => {
// // // //           const Icon = action.icon;
// // // //           return (
// // // //             <button
// // // //               key={action.title}
// // // //               type="button"
// // // //               onClick={action.onClick}
// // // //               className="group flex items-center justify-between gap-3 rounded-lg sm:rounded-xl border border-gray-100 bg-gray-50 p-3.5 sm:p-4 text-left transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/60 hover:shadow-sm active:scale-[0.98]"
// // // //             >
// // // //               <div className="flex items-center gap-3 min-w-0">
// // // //                 <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-white transition-colors">
// // // //                   <Icon className="text-blue-600" size={18} />
// // // //                 </div>
// // // //                 <div className="min-w-0">
// // // //                   <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
// // // //                     {action.title}
// // // //                   </h3>
// // // //                   <p className="text-xs sm:text-sm text-gray-500 truncate">
// // // //                     {action.description}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>

// // // //               <ChevronRight
// // // //                 size={16}
// // // //                 className="hidden sm:block shrink-0 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all"
// // // //               />
// // // //             </button>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default QuickActions;

// // // import { useNavigate } from "react-router-dom";
// // // import { 
// // //   ReceiptText, 
// // //   PackagePlus, 
// // //   UserPlus, 
// // //   FileSpreadsheet,
// // //   ChevronRight
// // // } from "lucide-react";

// // // const QuickActions = () => {
// // //   const navigate = useNavigate();

// // //   // Define the actions array with their respective routes
// // //   const actions = [
// // //     {
// // //       title: "Recent Invoices",
// // //       description: "Check past transactions",
// // //       icon: <ReceiptText className="w-5 h-5 text-blue-600" />,
// // //       bg: "bg-blue-50",
// // //       path: "/invoices" // Update this if your invoices route is different
// // //     },
// // //     {
// // //       title: "Add Product",
// // //       description: "Add a new product to store",
// // //       icon: <PackagePlus className="w-5 h-5 text-indigo-600" />,
// // //       bg: "bg-indigo-50",
// // //       path: "/inventory" // Maps to the Inventory page we built
// // //     },
// // //     {
// // //       title: "Customers",
// // //       description: "Register or manage customers",
// // //       icon: <UserPlus className="w-5 h-5 text-emerald-600" />,
// // //       bg: "bg-emerald-50",
// // //       path: "/customers" // Static for now, maps to your customer page
// // //     },
// // //     {
// // //       title: "View Reports",
// // //       description: "Open sales & analytics",
// // //       icon: <FileSpreadsheet className="w-5 h-5 text-purple-600" />,
// // //       bg: "bg-purple-50",
// // //       path: "/sales" // Maps to the Sales.jsx page we just updated
// // //     }
// // //   ];

// // //   return (
// // //     <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
// // //       <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
      
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
// // //         {actions.map((action, index) => (
// // //           <button
// // //             key={index}
// // //             onClick={() => navigate(action.path)}
// // //             className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group text-left w-full bg-gray-50/50 hover:bg-white active:scale-[0.98]"
// // //           >
// // //             <div className={`w-10 h-10 rounded-lg ${action.bg} flex items-center justify-center mr-4 shrink-0 transition-transform group-hover:scale-110`}>
// // //               {action.icon}
// // //             </div>
            
// // //             <div className="flex-1 min-w-0">
// // //               <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
// // //                 {action.title}
// // //               </h3>
// // //               <p className="text-xs text-gray-500 mt-0.5 truncate">
// // //                 {action.description}
// // //               </p>
// // //             </div>
            
// // //             <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors shrink-0 ml-2" />
// // //           </button>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default QuickActions;

// // import { useNavigate } from "react-router-dom";
// // import { 
// //   ReceiptText, 
// //   FileSignature, 
// //   UserPlus, 
// //   FileSpreadsheet,
// //   ChevronRight
// // } from "lucide-react";

// // const QuickActions = () => {
// //   const navigate = useNavigate();

// //   // Define the actions array with their respective routes
// //   const actions = [
// //     {
// //       title: "Recent Invoices",
// //       description: "Check past transactions",
// //       icon: <ReceiptText className="w-5 h-5 text-blue-600" />,
// //       bg: "bg-blue-50",
// //       path: "/invoices"
// //     },
// //     {
// //       title: "Create Quotation",
// //       description: "Draft a new B2B estimate",
// //       icon: <FileSignature className="w-5 h-5 text-indigo-600" />,
// //       bg: "bg-indigo-50",
// //       path: "/quotations/new" 
// //     },
// //     {
// //       title: "Customers",
// //       description: "Register or manage customers",
// //       icon: <UserPlus className="w-5 h-5 text-emerald-600" />,
// //       bg: "bg-emerald-50",
// //       path: "/customers" 
// //     },
// //     {
// //       title: "View Reports",
// //       description: "Open sales & analytics",
// //       icon: <FileSpreadsheet className="w-5 h-5 text-purple-600" />,
// //       bg: "bg-purple-50",
// //       path: "/sales" 
// //     }
// //   ];

// //   return (
// //     <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
// //       <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
      
// //       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
// //         {actions.map((action, index) => (
// //           <button
// //             key={index}
// //             onClick={() => navigate(action.path)}
// //             className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group text-left w-full bg-gray-50/50 hover:bg-white active:scale-[0.98]"
// //           >
// //             <div className={`w-10 h-10 rounded-lg ${action.bg} flex items-center justify-center mr-4 shrink-0 transition-transform group-hover:scale-110`}>
// //               {action.icon}
// //             </div>
            
// //             <div className="flex-1 min-w-0">
// //               <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
// //                 {action.title}
// //               </h3>
// //               <p className="text-xs text-gray-500 mt-0.5 truncate">
// //                 {action.description}
// //               </p>
// //             </div>
            
// //             <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors shrink-0 ml-2" />
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuickActions;

// // import { useNavigate } from "react-router-dom";
// // import { 
// //   FilePlus, 
// //   FileSignature, 
// //   UserPlus, 
// //   FileSpreadsheet,
// //   ChevronRight
// // } from "lucide-react";

// // const QuickActions = () => {
// //   const navigate = useNavigate();

// //   // Define the actions array with their respective routes
// //   const actions = [
// //     {
// //       title: "Create Invoice",
// //       description: "Generate a new tax invoice",
// //       icon: <FilePlus className="w-5 h-5 text-blue-600" />,
// //       bg: "bg-blue-50",
// //       path: "/create-invoice" 
// //     },
// //     {
// //       title: "Create Quotation",
// //       description: "Draft a new B2B estimate",
// //       icon: <FileSignature className="w-5 h-5 text-indigo-600" />,
// //       bg: "bg-indigo-50",
// //       path: "/quotations/new" 
// //     },
// //     {
// //       title: "Customers",
// //       description: "Register or manage customers",
// //       icon: <UserPlus className="w-5 h-5 text-emerald-600" />,
// //       bg: "bg-emerald-50",
// //       path: "/customers" 
// //     },
// //     {
// //       title: "View Reports",
// //       description: "Open sales & analytics",
// //       icon: <FileSpreadsheet className="w-5 h-5 text-purple-600" />,
// //       bg: "bg-purple-50",
// //       path: "/sales" 
// //     }
// //   ];

// //   return (
// //     <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
// //       <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
      
// //       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
// //         {actions.map((action, index) => (
// //           <button
// //             key={index}
// //             onClick={() => navigate(action.path)}
// //             className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group text-left w-full bg-gray-50/50 hover:bg-white active:scale-[0.98]"
// //           >
// //             <div className={`w-10 h-10 rounded-lg ${action.bg} flex items-center justify-center mr-4 shrink-0 transition-transform group-hover:scale-110`}>
// //               {action.icon}
// //             </div>
            
// //             <div className="flex-1 min-w-0">
// //               <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
// //                 {action.title}
// //               </h3>
// //               <p className="text-xs text-gray-500 mt-0.5 truncate">
// //                 {action.description}
// //               </p>
// //             </div>
            
// //             <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors shrink-0 ml-2" />
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuickActions;

// import { useNavigate } from "react-router-dom";
// import { 
//   FilePlus, FileSignature, UserPlus, FileSpreadsheet, ChevronRight
// } from "lucide-react";

// const QuickActions = () => {
//   const navigate = useNavigate();

//   const actions = [
//     {
//       title: "Create Invoice",
//       description: "Generate a new tax invoice",
//       icon: <FilePlus className="w-5 h-5 text-white" />,
//       bg: "bg-brand-navy",
//       path: "/create-invoice" 
//     },
//     {
//       title: "Create Quotation",
//       description: "Draft a new B2B estimate",
//       icon: <FileSignature className="w-5 h-5 text-brand-navy" />,
//       bg: "bg-brand-gold",
//       path: "/quotations/new" 
//     },
//     {
//       title: "Customers",
//       description: "Register or manage clients",
//       icon: <UserPlus className="w-5 h-5 text-brand-gold" />,
//       bg: "bg-[#1a2e4f]", // Slightly lighter navy
//       path: "/customers" 
//     },
//     {
//       title: "View Reports",
//       description: "Open sales & analytics",
//       icon: <FileSpreadsheet className="w-5 h-5 text-slate-600" />,
//       bg: "bg-slate-100",
//       path: "/sales" 
//     }
//   ];

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-slate-200/80 p-6 h-full flex flex-col">
//       <h2 className="text-xl font-black text-brand-navy mb-5 tracking-tight">Quick Actions</h2>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 flex-1">
//         {actions.map((action, index) => (
//           <button
//             key={index}
//             onClick={() => navigate(action.path)}
//             className="flex items-center p-4 rounded-xl border border-slate-100 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300 group text-left w-full bg-slate-50/50 hover:bg-white active:scale-[0.98]"
//           >
//             <div className={`w-12 h-12 rounded-xl ${action.bg} flex items-center justify-center mr-4 shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
//               {action.icon}
//             </div>
            
//             <div className="flex-1 min-w-0">
//               <h3 className="text-sm font-bold text-brand-navy transition-colors truncate">
//                 {action.title}
//               </h3>
//               <p className="text-xs font-medium text-slate-500 mt-0.5 truncate">
//                 {action.description}
//               </p>
//             </div>
            
//             <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-gold transition-colors shrink-0 ml-2 transform group-hover:translate-x-1" />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuickActions;

// import { useNavigate } from "react-router-dom";
// import { 
//   FilePlus, FileSignature, UserPlus, FileSpreadsheet, ChevronRight
// } from "lucide-react";

// const QuickActions = () => {
//   const navigate = useNavigate();

//   const actions = [
//     {
//       title: "Create Invoice",
//       description: "Generate a new tax invoice",
//       icon: <FilePlus className="w-5 h-5 text-white drop-shadow-md" />,
//       // Deep Navy to Indigo Gradient
//       gradient: "bg-gradient-to-br from-[#101E36] to-[#2c406b]", 
//       path: "/create-invoice" 
//     },
//     {
//       title: "Create Quotation",
//       description: "Draft a new B2B estimate",
//       icon: <FileSignature className="w-5 h-5 text-white drop-shadow-md" />,
//       // Gold to Amber Gradient
//       gradient: "bg-gradient-to-br from-[#C69C55] to-[#e8bc74]", 
//       path: "/quotations/new" 
//     },
//     {
//       title: "Customers",
//       description: "Register or manage clients",
//       icon: <UserPlus className="w-5 h-5 text-white drop-shadow-md" />,
//       // Teal to Emerald Gradient (Compliments Navy/Gold)
//       gradient: "bg-gradient-to-br from-[#0f766e] to-[#14b8a6]", 
//       path: "/customers" 
//     },
//     {
//       title: "View Reports",
//       description: "Open sales & analytics",
//       icon: <FileSpreadsheet className="w-5 h-5 text-slate-700" />,
//       // Silver/Slate Gradient
//       gradient: "bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300", 
//       path: "/sales" 
//     }
//   ];

//   return (
//     <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200/80 p-6 h-full flex flex-col relative overflow-hidden">
//       {/* Background ambient glow */}
//       <div className="absolute top-0 right-0 w-32 h-32 bg-[#C69C55]/5 blur-3xl rounded-full pointer-events-none"></div>

//       <h2 className="text-xl font-black text-[#101E36] mb-5 tracking-tight relative z-10">Quick Actions</h2>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 flex-1 relative z-10">
//         {actions.map((action, index) => (
//           <button
//             key={index}
//             onClick={() => navigate(action.path)}
//             className="flex items-center p-4 rounded-xl border border-slate-100 hover:border-[#C69C55]/40 hover:shadow-lg transition-all duration-300 group text-left w-full bg-gradient-to-r from-white to-slate-50 hover:to-white active:scale-[0.98]"
//           >
//             <div className={`w-12 h-12 rounded-xl ${action.gradient} flex items-center justify-center mr-4 shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-md`}>
//               {action.icon}
//             </div>
            
//             <div className="flex-1 min-w-0">
//               <h3 className="text-sm font-bold text-[#101E36] transition-colors truncate">
//                 {action.title}
//               </h3>
//               <p className="text-xs font-medium text-slate-500 mt-0.5 truncate">
//                 {action.description}
//               </p>
//             </div>
            
//             <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#C69C55] transition-colors shrink-0 ml-2 transform group-hover:translate-x-1" />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuickActions;
import { useNavigate } from "react-router-dom";
import { FilePlus, FileSignature, UserPlus, FileSpreadsheet } from "lucide-react";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    { title: "New Invoice", path: "/create-invoice", icon: FilePlus, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "New Quote", path: "/quotations/new", icon: FileSignature, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Add Client", path: "/customers", icon: UserPlus, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Reports", path: "/sales", icon: FileSpreadsheet, color: "text-purple-500", bg: "bg-purple-50" }
  ];

  return (
    <div className="rounded-[31px] border border-slate-100 bg-white p-7 shadow-[0_8px_25px_rgba(15,23,42,.03)] flex flex-col">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-[15px] font-black text-slate-900">Quick Actions</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:border-slate-200 hover:shadow-sm active:scale-95 group"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${action.bg} ${action.color} group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[11px] font-bold text-slate-700 tracking-wide">{action.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;