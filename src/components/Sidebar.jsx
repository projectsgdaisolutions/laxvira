// // // // //  import { useEffect, useState } from "react";
// // // // // import { NavLink, useLocation } from "react-router-dom";
// // // // // import { Receipt } from 'lucide-react'; // Or whatever icon fits best
// // // // // import {
// // // // //   Boxes,
// // // // //   BriefcaseBusiness,
// // // // //   ClipboardList,
// // // // //   FileText,
// // // // //   LayoutDashboard,
// // // // //   LifeBuoy,
// // // // //   Menu,
// // // // //   Package,
// // // // //   ReceiptText,
// // // // //   RotateCcw,
// // // // //   Settings,
// // // // //   Sparkles,
// // // // //   Tag,
// // // // //   Truck,
// // // // //   Users,
// // // // //   Wallet,
// // // // //   X,
// // // // // } from "lucide-react";

// // // // // import logo from "../assets/logo.jpeg";

// // // // // const navigationItems = [
// // // // //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// // // // //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// // // // //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// // // // //   { name: "Products", icon: Package, path: "/products" },
// // // // //   { name: "Inventory", icon: Boxes, path: "/products" },
// // // // //   { name: "Customers", icon: Users, path: "/customers" },
// // // // //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// // // // //   { name: "Reports", icon: FileText, path: "/reports" },
// // // // //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// // // // //   { name: "Offers", icon: Tag, path: "/offers" },
// // // // //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// // // // //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// // // // //   { name: "Settings", icon: Settings, path: "/settings" },
// // // // //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // // // // ];

// // // // // const Sidebar = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const location = useLocation();

// // // // //   useEffect(() => {
// // // // //     setIsOpen(false);
// // // // //   }, [location.pathname]);

// // // // //   const isLinkActive = (path) => {
// // // // //     if (path === "/dashboard") {
// // // // //       return location.pathname === "/dashboard";
// // // // //     }

// // // // //     return (
// // // // //       location.pathname === path ||
// // // // //       location.pathname.startsWith(`${path}/`)
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <button
// // // // //         type="button"
// // // // //         onClick={() => setIsOpen((prev) => !prev)}
// // // // //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-lg lg:hidden"
// // // // //         aria-label="Toggle navigation"
// // // // //       >
// // // // //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// // // // //       </button>

// // // // //       {isOpen ? (
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => setIsOpen(false)}
// // // // //           className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
// // // // //           aria-label="Close navigation"
// // // // //         />
// // // // //       ) : null}

// // // // //       <aside
// // // // //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-800/60 bg-slate-950 text-slate-100 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
// // // // //           isOpen ? "translate-x-0" : "-translate-x-full"
// // // // //         }`}
// // // // //       >
// // // // //         <div className="flex items-center justify-between border-b border-slate-800/70 px-6 py-5">
// // // // //           <div className="flex items-center gap-3">
// // // // //             <img
// // // // //               src={logo}
// // // // //               alt="GD Billing logo"
// // // // //               className="h-12 w-12 rounded-full object-cover"
// // // // //             />
// // // // //             <div>
// // // // //               <h2 className="text-lg font-semibold text-white">GD Billing</h2>
// // // // //               <p className="text-sm text-slate-400">AI Suite</p>
// // // // //             </div>
// // // // //           </div>

// // // // //           <button
// // // // //             type="button"
// // // // //             onClick={() => setIsOpen(false)}
// // // // //             className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white lg:hidden"
// // // // //             aria-label="Close navigation"
// // // // //           >
// // // // //             <X size={18} />
// // // // //           </button>
// // // // //         </div>

// // // // //         <nav className="flex-1 overflow-y-auto px-3 py-4">
// // // // //           {navigationItems.map((item) => {
// // // // //             const Icon = item.icon;

// // // // //             return (
// // // // //               <NavLink
// // // // //                 key={item.name}
// // // // //                 to={item.path}
// // // // //                 className={({ isActive }) => {
// // // // //                   const active = isActive || isLinkActive(item.path);

// // // // //                   return `mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
// // // // //                     active
// // // // //                       ? "bg-sky-500/90 text-white shadow-sm"
// // // // //                       : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
// // // // //                   }`;
// // // // //                 }}
// // // // //               >
// // // // //                 <Icon size={18} />
// // // // //                 <span>{item.name}</span>
// // // // //               </NavLink>
// // // // //             );
// // // // //           })}
// // // // //         </nav>

// // // // //         <div className="px-4 pb-4">
// // // // //           <div className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-4 text-sm text-slate-200">
// // // // //             <div className="flex items-center gap-2 font-semibold text-white">
// // // // //               <LifeBuoy size={16} />
// // // // //               Need Help?
// // // // //             </div>
// // // // //             <p className="mt-2 text-slate-300">
// // // // //               Contact support for assistance with your workspace.
// // // // //             </p>
// // // // //             <a
// // // // //               href="mailto:support@gdbilling.com"
// // // // //               className="mt-3 inline-flex items-center gap-2 rounded-lg bg-sky-500/20 px-3 py-2 font-medium text-sky-200 transition hover:bg-sky-500/30"
// // // // //             >
// // // // //               Contact Support
// // // // //             </a>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="border-t border-slate-800/70 p-4">
// // // // //           <div className="flex items-center gap-3 rounded-2xl bg-slate-800/70 p-3">
// // // // //             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">
// // // // //               DJ
// // // // //             </div>
// // // // //             <div>
// // // // //               <p className="font-semibold text-white">Deepti Joshi</p>
// // // // //               <p className="text-xs text-slate-400">Store Owner</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </aside>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Sidebar;
// // // // import React, { useState, useEffect } from "react";
// // // // import { NavLink, useLocation } from "react-router-dom";
// // // // import {
// // // //   LayoutDashboard,
// // // //   ClipboardList,
// // // //   ReceiptText,
// // // //   Package,
// // // //   Boxes,
// // // //   Users,
// // // //   Truck,
// // // //   FileText,
// // // //   Wallet,
// // // //   Tag,
// // // //   RotateCcw,
// // // //   BriefcaseBusiness,
// // // //   Settings,
// // // //   Sparkles,
// // // //   Menu,
// // // //   X,
// // // //   LifeBuoy,
// // // //   Receipt // Added Receipt icon for Billing
// // // // } from "lucide-react";
// // // // import logo from "../assets/logo.jpeg"; // Adjust path as needed

// // // // const navigationItems = [
// // // //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// // // //   { name: "Billing (POS)", icon: Receipt, path: "/billing" }, // Inserted Billing here
// // // //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// // // //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// // // //   { name: "Products", icon: Package, path: "/products" },
// // // //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// // // //   { name: "Customers", icon: Users, path: "/customers" },
// // // //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// // // //   { name: "Reports", icon: FileText, path: "/reports" },
// // // //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// // // //   { name: "Offers", icon: Tag, path: "/offers" },
// // // //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// // // //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// // // //   { name: "Settings", icon: Settings, path: "/settings" },
// // // //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // // // ];

// // // // const Sidebar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const location = useLocation();

// // // //   useEffect(() => {
// // // //     setIsOpen(false);
// // // //   }, [location.pathname]);

// // // //   const isLinkActive = (path) => {
// // // //     if (path === "/dashboard") {
// // // //       return location.pathname === "/dashboard";
// // // //     }

// // // //     return (
// // // //       location.pathname === path ||
// // // //       location.pathname.startsWith(`${path}/`)
// // // //     );
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <button
// // // //         type="button"
// // // //         onClick={() => setIsOpen((prev) => !prev)}
// // // //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-lg lg:hidden"
// // // //         aria-label="Toggle navigation"
// // // //       >
// // // //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// // // //       </button>

// // // //       {isOpen ? (
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => setIsOpen(false)}
// // // //           className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
// // // //           aria-label="Close navigation"
// // // //         />
// // // //       ) : null}

// // // //       <aside
// // // //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-800/60 bg-slate-950 text-slate-100 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
// // // //           isOpen ? "translate-x-0" : "-translate-x-full"
// // // //         }`}
// // // //       >
// // // //         <div className="flex items-center justify-between border-b border-slate-800/70 px-6 py-5">
// // // //           <div className="flex items-center gap-3">
// // // //             <img
// // // //               src={logo}
// // // //               alt="GD Billing logo"
// // // //               className="h-12 w-12 rounded-full object-cover"
// // // //             />
// // // //             <div>
// // // //               <h2 className="text-lg font-semibold text-white">GD Billing</h2>
// // // //               <p className="text-sm text-slate-400">AI Suite</p>
// // // //             </div>
// // // //           </div>

// // // //           <button
// // // //             type="button"
// // // //             onClick={() => setIsOpen(false)}
// // // //             className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white lg:hidden"
// // // //             aria-label="Close navigation"
// // // //           >
// // // //             <X size={18} />
// // // //           </button>
// // // //         </div>

// // // //         <nav className="flex-1 overflow-y-auto px-3 py-4">
// // // //           {navigationItems.map((item) => {
// // // //             const Icon = item.icon;

// // // //             return (
// // // //               <NavLink
// // // //                 key={item.name}
// // // //                 to={item.path}
// // // //                 className={({ isActive }) => {
// // // //                   const active = isActive || isLinkActive(item.path);

// // // //                   return `mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
// // // //                     active
// // // //                       ? "bg-sky-500/90 text-white shadow-sm"
// // // //                       : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
// // // //                   }`;
// // // //                 }}
// // // //               >
// // // //                 <Icon size={18} />
// // // //                 <span>{item.name}</span>
// // // //               </NavLink>
// // // //             );
// // // //           })}
// // // //         </nav>

// // // //         <div className="px-4 pb-4">
// // // //           <div className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-4 text-sm text-slate-200">
// // // //             <div className="flex items-center gap-2 font-semibold text-white">
// // // //               <LifeBuoy size={16} />
// // // //               Need Help?
// // // //             </div>
// // // //             <p className="mt-2 text-slate-300">
// // // //               Contact support for assistance with your workspace.
// // // //             </p>
// // // //             <a
// // // //               href="mailto:support@gdbilling.com"
// // // //               className="mt-3 inline-flex items-center gap-2 rounded-lg bg-sky-500/20 px-3 py-2 font-medium text-sky-200 transition hover:bg-sky-500/30"
// // // //             >
// // // //               Contact Support
// // // //             </a>
// // // //           </div>
// // // //         </div>

// // // //         <div className="border-t border-slate-800/70 p-4">
// // // //           <div className="flex items-center gap-3 rounded-2xl bg-slate-800/70 p-3">
// // // //             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">
// // // //               DJ
// // // //             </div>
// // // //             <div>
// // // //               <p className="font-semibold text-white">Deepti Joshi</p>
// // // //               <p className="text-xs text-slate-400">Store Owner</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </aside>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Sidebar;

// // // // import React, { useState, useEffect } from "react";
// // // // import { NavLink, useLocation, useNavigate } from "react-router-dom";
// // // // import {
// // // //   LayoutDashboard,
// // // //   ClipboardList,
// // // //   ReceiptText,
// // // //   Package,
// // // //   Boxes,
// // // //   Users,
// // // //   Truck,
// // // //   FileText,
// // // //   Wallet,
// // // //   Tag,
// // // //   RotateCcw,
// // // //   BriefcaseBusiness,
// // // //   Sparkles,
// // // //   Menu,
// // // //   X,
// // // //   LifeBuoy,
// // // //   Receipt,
// // // //   LogOut
// // // // } from "lucide-react";
// // // // import logo from "../assets/logo.jpeg"; // Adjust path as needed

// // // // // Removed Settings from the main array
// // // // const navigationItems = [
// // // //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// // // //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// // // //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// // // //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// // // //   { name: "Products", icon: Package, path: "/products" },
// // // //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// // // //   { name: "Customers", icon: Users, path: "/customers" },
// // // //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// // // //   { name: "Reports", icon: FileText, path: "/reports" },
// // // //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// // // //   { name: "Offers", icon: Tag, path: "/offers" },
// // // //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// // // //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// // // //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // // // ];

// // // // const Sidebar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [profile, setProfile] = useState({ ownerName: "Loading...", initials: "??" });
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();

// // // //   // Close mobile sidebar on route change
// // // //   useEffect(() => {
// // // //     setIsOpen(false);
// // // //   }, [location.pathname]);

// // // //   // Fetch live store profile data
// // // //   useEffect(() => {
// // // //     const fetchProfile = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("token");
// // // //         if (!token) return;

// // // //         const response = await fetch("http://localhost:8000/api/store/profile", {
// // // //           headers: { Authorization: `Bearer ${token}` }
// // // //         });

// // // //         if (response.ok) {
// // // //           const data = await response.json();
// // // //           const name = data.ownerName || "Store Owner";
// // // //           // Generate initials (e.g., "Vishwas Patil" -> "VP")
// // // //           const initials = name
// // // //             .split(" ")
// // // //             .map((n) => n[0])
// // // //             .join("")
// // // //             .substring(0, 2)
// // // //             .toUpperCase();
          
// // // //           setProfile({ ownerName: name, initials });
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Failed to load profile for sidebar:", err);
// // // //       }
// // // //     };

// // // //     fetchProfile();
// // // //   }, []);

// // // //   const isLinkActive = (path) => {
// // // //     if (path === "/dashboard") {
// // // //       return location.pathname === "/dashboard";
// // // //     }
// // // //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// // // //   };

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     navigate("/login");
// // // //   };

// // // //   const handleNavigateToSettings = () => {
// // // //     navigate("/settings");
// // // //     setIsOpen(false);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <button
// // // //         type="button"
// // // //         onClick={() => setIsOpen((prev) => !prev)}
// // // //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-lg lg:hidden"
// // // //         aria-label="Toggle navigation"
// // // //       >
// // // //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// // // //       </button>

// // // //       {isOpen && (
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => setIsOpen(false)}
// // // //           className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
// // // //           aria-label="Close navigation"
// // // //         />
// // // //       )}

// // // //       <aside
// // // //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-800/60 bg-slate-950 text-slate-100 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
// // // //           isOpen ? "translate-x-0" : "-translate-x-full"
// // // //         }`}
// // // //       >
// // // //         <div className="flex items-center justify-between border-b border-slate-800/70 px-6 py-5">
// // // //           <div className="flex items-center gap-3">
// // // //             <img
// // // //               src={logo}
// // // //               alt="GD Billing logo"
// // // //               className="h-12 w-12 rounded-full object-cover"
// // // //             />
// // // //             <div>
// // // //               <h2 className="text-lg font-semibold text-white">GD Billing</h2>
// // // //               <p className="text-sm text-slate-400">AI Suite</p>
// // // //             </div>
// // // //           </div>

// // // //           <button
// // // //             type="button"
// // // //             onClick={() => setIsOpen(false)}
// // // //             className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white lg:hidden"
// // // //             aria-label="Close navigation"
// // // //           >
// // // //             <X size={18} />
// // // //           </button>
// // // //         </div>

// // // //         <nav className="flex-1 overflow-y-auto px-3 py-4">
// // // //           {navigationItems.map((item) => {
// // // //             const Icon = item.icon;

// // // //             return (
// // // //               <NavLink
// // // //                 key={item.name}
// // // //                 to={item.path}
// // // //                 className={({ isActive }) => {
// // // //                   const active = isActive || isLinkActive(item.path);

// // // //                   return `mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
// // // //                     active
// // // //                       ? "bg-sky-500/90 text-white shadow-sm"
// // // //                       : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
// // // //                   }`;
// // // //                 }}
// // // //               >
// // // //                 <Icon size={18} />
// // // //                 <span>{item.name}</span>
// // // //               </NavLink>
// // // //             );
// // // //           })}
// // // //         </nav>

// // // //         <div className="px-4 pb-4">
// // // //           <div className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-4 text-sm text-slate-200">
// // // //             <div className="flex items-center gap-2 font-semibold text-white">
// // // //               <LifeBuoy size={16} />
// // // //               Need Help?
// // // //             </div>
// // // //             <p className="mt-2 text-slate-300">
// // // //               Contact support for assistance with your workspace.
// // // //             </p>
// // // //             <a
// // // //               href="mailto:support@gdbilling.com"
// // // //               className="mt-3 inline-flex items-center gap-2 rounded-lg bg-sky-500/20 px-3 py-2 font-medium text-sky-200 transition hover:bg-sky-500/30"
// // // //             >
// // // //               Contact Support
// // // //             </a>
// // // //           </div>
// // // //         </div>

// // // //         {/* Updated Dynamic Profile & Settings/Logout Section */}
// // // //         <div className="border-t border-slate-800/70 p-4">
// // // //           <div className="flex items-center gap-2 rounded-2xl bg-slate-800/70 p-2 hover:bg-slate-800 transition-colors group">
            
// // // //             {/* Clickable profile area -> navigates to settings */}
// // // //             <div 
// // // //               onClick={handleNavigateToSettings}
// // // //               className="flex flex-1 items-center gap-3 cursor-pointer pl-1"
// // // //             >
// // // //               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">
// // // //                 {profile.initials}
// // // //               </div>
// // // //               <div className="flex-1 min-w-0">
// // // //                 <p className="font-semibold text-white truncate group-hover:text-sky-300 transition-colors">
// // // //                   {profile.ownerName}
// // // //                 </p>
// // // //                 <p className="text-xs text-slate-400">Settings</p>
// // // //               </div>
// // // //             </div>

// // // //             {/* Logout Button */}
// // // //             <button
// // // //               onClick={handleLogout}
// // // //               title="Logout"
// // // //               className="p-2.5 text-slate-400 hover:text-rose-400 hover:bg-slate-700/50 rounded-xl transition-all"
// // // //             >
// // // //               <LogOut size={18} />
// // // //             </button>

// // // //           </div>
// // // //         </div>
// // // //       </aside>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Sidebar;

// // // // import React, { useState, useEffect } from "react";
// // // // import { NavLink, useLocation, useNavigate } from "react-router-dom";
// // // // import {
// // // //   LayoutDashboard,
// // // //   ClipboardList,
// // // //   ReceiptText,
// // // //   Boxes,
// // // //   Users,
// // // //   Truck,
// // // //   FileText,
// // // //   Wallet,
// // // //   RotateCcw,
// // // //   BriefcaseBusiness,
// // // //   Sparkles,
// // // //   Menu,
// // // //   X,
// // // //   Receipt,
// // // //   LogOut,
// // // //   FileSpreadsheet,
// // // //   FileSignature
// // // // } from "lucide-react";
// // // // import logo from "../assets/logo.jpeg"; // Adjust path as needed

// // // // const navigationItems = [
// // // //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// // // //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// // // //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// // // //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// // // //   { name: "Invoices", icon: FileSpreadsheet, path: "/invoices" },
// // // //   { name: "Quotations", icon: FileSignature, path: "/quotations" },
// // // //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// // // //   { name: "Customers", icon: Users, path: "/customers" },
// // // //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// // // //   { name: "Reports", icon: FileText, path: "/reports" },
// // // //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// // // //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// // // //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// // // //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // // // ];

// // // // const Sidebar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [profile, setProfile] = useState({ ownerName: "Loading...", initials: "??" });
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();

// // // //   // Close mobile sidebar on route change
// // // //   useEffect(() => {
// // // //     setIsOpen(false);
// // // //   }, [location.pathname]);

// // // //   // Fetch live store profile data
// // // //   useEffect(() => {
// // // //     const fetchProfile = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("token");
// // // //         if (!token) return;

// // // //         const response = await fetch("http://localhost:8000/api/store/profile", {
// // // //           headers: { Authorization: `Bearer ${token}` }
// // // //         });

// // // //         if (response.ok) {
// // // //           const data = await response.json();
// // // //           const name = data.ownerName || "Store Owner";
// // // //           // Generate initials (e.g., "Vishwas Patil" -> "VP")
// // // //           const initials = name
// // // //             .split(" ")
// // // //             .map((n) => n[0])
// // // //             .join("")
// // // //             .substring(0, 2)
// // // //             .toUpperCase();
          
// // // //           setProfile({ ownerName: name, initials });
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Failed to load profile for sidebar:", err);
// // // //       }
// // // //     };

// // // //     fetchProfile();
// // // //   }, []);

// // // //   const isLinkActive = (path) => {
// // // //     if (path === "/dashboard") {
// // // //       return location.pathname === "/dashboard";
// // // //     }
// // // //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// // // //   };

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     navigate("/login");
// // // //   };

// // // //   const handleNavigateToSettings = () => {
// // // //     navigate("/settings");
// // // //     setIsOpen(false);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <button
// // // //         type="button"
// // // //         onClick={() => setIsOpen((prev) => !prev)}
// // // //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-lg lg:hidden"
// // // //         aria-label="Toggle navigation"
// // // //       >
// // // //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// // // //       </button>

// // // //       {isOpen && (
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => setIsOpen(false)}
// // // //           className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
// // // //           aria-label="Close navigation"
// // // //         />
// // // //       )}

// // // //       <aside
// // // //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-800/60 bg-slate-950 text-slate-100 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
// // // //           isOpen ? "translate-x-0" : "-translate-x-full"
// // // //         }`}
// // // //       >
// // // //         <div className="flex items-center justify-between border-b border-slate-800/70 px-6 py-5">
// // // //           <div className="flex items-center gap-3">
// // // //             <img
// // // //               src={logo}
// // // //               alt="GD Billing logo"
// // // //               className="h-12 w-12 rounded-full object-cover"
// // // //             />
// // // //             <div>
// // // //               <h2 className="text-lg font-semibold text-white">GD Billing</h2>
// // // //               <p className="text-sm text-slate-400">AI Suite</p>
// // // //             </div>
// // // //           </div>

// // // //           <button
// // // //             type="button"
// // // //             onClick={() => setIsOpen(false)}
// // // //             className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white lg:hidden"
// // // //             aria-label="Close navigation"
// // // //           >
// // // //             <X size={18} />
// // // //           </button>
// // // //         </div>

// // // //         <nav className="flex-1 overflow-y-auto px-3 py-4">
// // // //           {navigationItems.map((item) => {
// // // //             const Icon = item.icon;

// // // //             return (
// // // //               <NavLink
// // // //                 key={item.name}
// // // //                 to={item.path}
// // // //                 className={({ isActive }) => {
// // // //                   const active = isActive || isLinkActive(item.path);

// // // //                   return `mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
// // // //                     active
// // // //                       ? "bg-sky-500/90 text-white shadow-sm"
// // // //                       : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
// // // //                   }`;
// // // //                 }}
// // // //               >
// // // //                 <Icon size={18} />
// // // //                 <span>{item.name}</span>
// // // //               </NavLink>
// // // //             );
// // // //           })}
// // // //         </nav>

// // // //         {/* Updated Dynamic Profile & Settings/Logout Section */}
// // // //         <div className="border-t border-slate-800/70 p-4">
// // // //           <div className="flex items-center gap-2 rounded-2xl bg-slate-800/70 p-2 hover:bg-slate-800 transition-colors group">
            
// // // //             {/* Clickable profile area -> navigates to settings */}
// // // //             <div 
// // // //               onClick={handleNavigateToSettings}
// // // //               className="flex flex-1 items-center gap-3 cursor-pointer pl-1"
// // // //             >
// // // //               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/20 font-semibold text-sky-300">
// // // //                 {profile.initials}
// // // //               </div>
// // // //               <div className="flex-1 min-w-0">
// // // //                 <p className="font-semibold text-white truncate group-hover:text-sky-300 transition-colors">
// // // //                   {profile.ownerName}
// // // //                 </p>
// // // //                 <p className="text-xs text-slate-400">Settings</p>
// // // //               </div>
// // // //             </div>

// // // //             {/* Logout Button */}
// // // //             <button
// // // //               onClick={handleLogout}
// // // //               title="Logout"
// // // //               className="p-2.5 text-slate-400 hover:text-rose-400 hover:bg-slate-700/50 rounded-xl transition-all"
// // // //             >
// // // //               <LogOut size={18} />
// // // //             </button>

// // // //           </div>
// // // //         </div>
// // // //       </aside>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Sidebar;

// // // // import React, { useState, useEffect } from "react";
// // // // import { NavLink, useLocation, useNavigate } from "react-router-dom";
// // // // import {
// // // //   LayoutDashboard, ClipboardList, ReceiptText, Boxes, Users, Truck,
// // // //   FileText, Wallet, RotateCcw, BriefcaseBusiness, Sparkles, Menu,
// // // //   X, Receipt, LogOut, FileSpreadsheet, FileSignature
// // // // } from "lucide-react";
// // // // import logo from "../assets/logo.jpg";

// // // // const navigationItems = [
// // // //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// // // //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// // // //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// // // //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// // // //   { name: "Invoices", icon: FileSpreadsheet, path: "/invoices" },
// // // //   { name: "Quotations", icon: FileSignature, path: "/quotations" },
// // // //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// // // //   { name: "Customers", icon: Users, path: "/customers" },
// // // //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// // // //   { name: "Reports", icon: FileText, path: "/reports" },
// // // //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// // // //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// // // //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// // // //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // // // ];

// // // // const Sidebar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [profile, setProfile] = useState({ ownerName: "Loading...", initials: "??" });
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     setIsOpen(false);
// // // //   }, [location.pathname]);

// // // //   useEffect(() => {
// // // //     const fetchProfile = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("token");
// // // //         if (!token) return;
// // // //         const response = await fetch("http://localhost:8000/api/store/profile", {
// // // //           headers: { Authorization: `Bearer ${token}` }
// // // //         });
// // // //         if (response.ok) {
// // // //           const data = await response.json();
// // // //           const name = data.ownerName || "Store Owner";
// // // //           const initials = name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
// // // //           setProfile({ ownerName: name, initials });
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Failed to load profile for sidebar:", err);
// // // //       }
// // // //     };
// // // //     fetchProfile();
// // // //   }, []);

// // // //   const isLinkActive = (path) => {
// // // //     if (path === "/dashboard") return location.pathname === "/dashboard";
// // // //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// // // //   };

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     navigate("/login");
// // // //   };

// // // //   const handleNavigateToSettings = () => {
// // // //     navigate("/settings");
// // // //     setIsOpen(false);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <button
// // // //         type="button"
// // // //         onClick={() => setIsOpen((prev) => !prev)}
// // // //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-brand-navy shadow-lg lg:hidden"
// // // //       >
// // // //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// // // //       </button>

// // // //       {isOpen && (
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => setIsOpen(false)}
// // // //           className="fixed inset-0 z-30 bg-brand-navy/40 lg:hidden"
// // // //         />
// // // //       )}

// // // //       <aside
// // // //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 bg-brand-navy text-slate-100 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
// // // //           isOpen ? "translate-x-0" : "-translate-x-full"
// // // //         }`}
// // // //       >
// // // //         <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
// // // //           <div className="flex items-center gap-3">
// // // //             <img src={logo} alt="Laxvira logo" className="h-12 w-12 rounded-full object-cover" />
// // // //             <div>
// // // //               <h2 className="text-lg font-semibold text-white tracking-wide">LAXVIRA</h2>
// // // //               <p className="text-xs text-brand-gold">Smart Finance</p>
// // // //             </div>
// // // //           </div>
// // // //           <button
// // // //             type="button"
// // // //             onClick={() => setIsOpen(false)}
// // // //             className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white lg:hidden"
// // // //           >
// // // //             <X size={18} />
// // // //           </button>
// // // //         </div>

// // // //         <nav className="flex-1 overflow-y-auto px-3 py-4">
// // // //           {navigationItems.map((item) => {
// // // //             const Icon = item.icon;
// // // //             return (
// // // //               <NavLink
// // // //                 key={item.name}
// // // //                 to={item.path}
// // // //                 className={({ isActive }) => {
// // // //                   const active = isActive || isLinkActive(item.path);
// // // //                   return `mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
// // // //                     active
// // // //                       ? "bg-brand-gold text-brand-navy font-bold shadow-sm"
// // // //                       : "text-slate-300 hover:bg-white/5 hover:text-brand-gold"
// // // //                   }`;
// // // //                 }}
// // // //               >
// // // //                 <Icon size={18} />
// // // //                 <span>{item.name}</span>
// // // //               </NavLink>
// // // //             );
// // // //           })}
// // // //         </nav>

// // // //         <div className="border-t border-white/10 p-4">
// // // //           <div className="flex items-center gap-2 rounded-2xl bg-white/5 p-2 hover:bg-white/10 transition-colors group">
// // // //             <div 
// // // //               onClick={handleNavigateToSettings}
// // // //               className="flex flex-1 items-center gap-3 cursor-pointer pl-1"
// // // //             >
// // // //               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 font-semibold text-brand-gold">
// // // //                 {profile.initials}
// // // //               </div>
// // // //               <div className="flex-1 min-w-0">
// // // //                 <p className="font-semibold text-white truncate group-hover:text-brand-gold transition-colors">
// // // //                   {profile.ownerName}
// // // //                 </p>
// // // //                 <p className="text-xs text-slate-400">Settings</p>
// // // //               </div>
// // // //             </div>
// // // //             <button
// // // //               onClick={handleLogout}
// // // //               className="p-2.5 text-slate-400 hover:text-rose-400 hover:bg-white/10 rounded-xl transition-all"
// // // //             >
// // // //               <LogOut size={18} />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </aside>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Sidebar;


// // // import React, { useState, useEffect } from "react";
// // // import { NavLink, useLocation, useNavigate } from "react-router-dom";
// // // import {
// // //   LayoutDashboard, ClipboardList, ReceiptText, Boxes, Users, Truck,
// // //   FileText, Wallet, RotateCcw, BriefcaseBusiness, Sparkles, Menu,
// // //   X, Receipt, LogOut, FileSpreadsheet, FileSignature
// // // } from "lucide-react";
// // // import logo from "../assets/logo.jpg";

// // // // Reordered navigation items
// // // const navigationItems = [
// // //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// // //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// // //   { name: "Invoices", icon: FileSpreadsheet, path: "/invoices" },
// // //   { name: "Quotations", icon: FileSignature, path: "/quotations" },
// // //   { name: "Customers", icon: Users, path: "/customers" },
// // //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// // //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// // //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// // //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// // //   { name: "Reports", icon: FileText, path: "/reports" },
// // //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// // //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// // //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// // //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // // ];

// // // const Sidebar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [profile, setProfile] = useState({ ownerName: "Loading...", initials: "??" });
// // //   const location = useLocation();
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     setIsOpen(false);
// // //   }, [location.pathname]);

// // //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         if (!token) return;
// // //         const response = await fetch("http://localhost:8000/api/store/profile", {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
// // //         if (response.ok) {
// // //           const data = await response.json();
// // //           const name = data.ownerName || "Store Owner";
// // //           const initials = name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
// // //           setProfile({ ownerName: name, initials });
// // //         }
// // //       } catch (err) {
// // //         console.error("Failed to load profile for sidebar:", err);
// // //       }
// // //     };
// // //     fetchProfile();
// // //   }, []);

// // //   const isLinkActive = (path) => {
// // //     if (path === "/dashboard") return location.pathname === "/dashboard";
// // //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     navigate("/login");
// // //   };

// // //   const handleNavigateToSettings = () => {
// // //     navigate("/settings");
// // //     setIsOpen(false);
// // //   };

// // //   return (
// // //     <>
// // //       <button
// // //         type="button"
// // //         onClick={() => setIsOpen((prev) => !prev)}
// // //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-brand-navy shadow-lg lg:hidden"
// // //       >
// // //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// // //       </button>

// // //       {isOpen && (
// // //         <button
// // //           type="button"
// // //           onClick={() => setIsOpen(false)}
// // //           className="fixed inset-0 z-30 bg-brand-navy/60 backdrop-blur-sm lg:hidden"
// // //         />
// // //       )}

// // //       <aside
// // //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 shadow-[4px_0_24px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-in-out lg:translate-x-0 bg-gradient-to-b from-[#101E36]/95 via-[#162746]/95 to-[#101E36]/95 backdrop-blur-xl ${
// // //           isOpen ? "translate-x-0" : "-translate-x-full"
// // //         }`}
// // //       >
// // //         <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
// // //           <div className="flex items-center gap-3">
// // //             <div className="rounded-xl bg-white p-0.5 shadow-inner border border-white/20">
// // //               <img src={logo} alt="Laxvira logo" className="h-10 w-10 rounded-lg object-contain" />
// // //             </div>
// // //             <div>
// // //               <h2 className="text-lg font-black text-white tracking-widest uppercase drop-shadow-sm">LAXVIRA</h2>
// // //               <p className="text-[10px] font-bold text-brand-gold tracking-wider uppercase">Smart Finance</p>
// // //             </div>
// // //           </div>
// // //           <button
// // //             type="button"
// // //             onClick={() => setIsOpen(false)}
// // //             className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden transition-colors"
// // //           >
// // //             <X size={18} />
// // //           </button>
// // //         </div>

// // //         {/* Scrollable Navigation
// // //         <nav className="flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
// // //           {navigationItems.map((item) => {
// // //             const Icon = item.icon;
// // //             return (
// // //               <NavLink
// // //                 key={item.name}
// // //                 to={item.path}
// // //                 className={({ isActive }) => {
// // //                   const active = isActive || isLinkActive(item.path);
// // //                   return `mb-1.5 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
// // //                     active
// // //                       ? "bg-gradient-to-r from-brand-gold to-[#d4b47c] text-brand-navy font-bold shadow-lg shadow-brand-gold/20 scale-[1.02]"
// // //                       : "text-slate-300 hover:bg-white/10 hover:text-white hover:shadow-inner hover:scale-[1.01]"
// // //                   }`;
// // //                 }}
// // //               >
// // //                 <Icon size={18} className={({ isActive }) => (isActive || isLinkActive(item.path) ? "text-brand-navy" : "text-brand-gold/70")} />
// // //                 <span>{item.name}</span>
// // //               </NavLink>
// // //             );
// // //           })}
// // //         </nav> */}
// // //         {/* Scrollable Navigation */}
// // //         <nav className="flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
// // //           {navigationItems.map((item) => {
// // //             const Icon = item.icon;
// // //             // Evaluate active state once per render cycle
// // //             const active = isLinkActive(item.path); 
            
// // //             return (
// // //               <NavLink
// // //                 key={item.name}
// // //                 to={item.path}
// // //                 className={`mb-1.5 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
// // //                   active
// // //                     ? "bg-gradient-to-r from-brand-gold to-[#d4b47c] text-brand-navy font-bold shadow-lg shadow-brand-gold/20 scale-[1.02]"
// // //                     : "text-slate-300 hover:bg-white/10 hover:text-white hover:shadow-inner hover:scale-[1.01]"
// // //                 }`}
// // //               >
// // //                 {/* Pass a standard string to the Lucide component */}
// // //                 <Icon 
// // //                   size={18} 
// // //                   className={active ? "text-brand-navy" : "text-brand-gold/70"} 
// // //                 />
// // //                 <span>{item.name}</span>
// // //               </NavLink>
// // //             );
// // //           })}
// // //         </nav>

// // //         {/* Bottom Profile Section */}
// // //         <div className="border-t border-white/5 p-4 bg-gradient-to-t from-black/20 to-transparent">
// // //           <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 p-2 hover:from-white/10 hover:to-white/5 transition-all duration-300 shadow-sm group">
// // //             <div 
// // //               onClick={handleNavigateToSettings}
// // //               className="flex flex-1 items-center gap-3 cursor-pointer pl-1"
// // //             >
// // //               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-gold to-[#a37e3d] font-bold text-brand-navy shadow-inner">
// // //                 {profile.initials}
// // //               </div>
// // //               <div className="flex-1 min-w-0">
// // //                 <p className="font-bold text-white truncate group-hover:text-brand-gold transition-colors">
// // //                   {profile.ownerName}
// // //                 </p>
// // //                 <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">Settings</p>
// // //               </div>
// // //             </div>
// // //             <button
// // //               onClick={handleLogout}
// // //               className="p-2.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all duration-300"
// // //               title="Logout"
// // //             >
// // //               <LogOut size={18} />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </aside>
// // //     </>
// // //   );
// // // };

// // // export default Sidebar;

// // import React, { useState, useEffect } from "react";
// // import { NavLink, useLocation, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard, ClipboardList, ReceiptText, Boxes, Users, Truck,
// //   FileText, Wallet, RotateCcw, BriefcaseBusiness, Sparkles, Menu,
// //   X, Receipt, LogOut, FileSpreadsheet, FileSignature
// // } from "lucide-react";
// // import logo from "../assets/logo.jpg";

// // const navigationItems = [
// //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// //   { name: "Invoices", icon: FileSpreadsheet, path: "/invoices" },
// //   { name: "Quotations", icon: FileSignature, path: "/quotations" },
// //   { name: "Customers", icon: Users, path: "/customers" },
// //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// //   { name: "Reports", icon: FileText, path: "/reports" },
// //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // ];

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [profile, setProfile] = useState({ ownerName: "Loading...", initials: "??" });
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const user = JSON.parse(localStorage.getItem('user') || '{}');

// //   useEffect(() => {
// //     setIsOpen(false);
// //   }, [location.pathname]);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) return;
// //         const response = await fetch("http://localhost:8000/api/store/profile", {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         if (response.ok) {
// //           const data = await response.json();
// //           const name = data.ownerName || "Store Owner";
// //           const initials = name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
// //           setProfile({ ownerName: name, initials });
// //         }
// //       } catch (err) {
// //         console.error("Failed to load profile for sidebar:", err);
// //       }
// //     };
// //     fetchProfile();
// //   }, []);

// //   const isLinkActive = (path) => {
// //     if (path === "/dashboard") return location.pathname === "/dashboard";
// //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/"); // Redirects to Landing Page instead of Login
// //   };

// //   const handleNavigateToSettings = () => {
// //     navigate("/settings");
// //     setIsOpen(false);
// //   };

// //   return (
// //     <>
// //       <button
// //         type="button"
// //         onClick={() => setIsOpen((prev) => !prev)}
// //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md p-2 text-[#101E36] shadow-lg lg:hidden"
// //       >
// //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// //       </button>

// //       {isOpen && (
// //         <button
// //           type="button"
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 z-30 bg-[#0A1128]/60 backdrop-blur-sm lg:hidden"
// //         />
// //       )}

// //       <aside
// //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col transition-transform duration-500 ease-out lg:translate-x-0 
// //         bg-[#0A1128]/95 backdrop-blur-2xl 
// //         border-r border-white/10 shadow-[15px_0_50px_-10px_rgba(0,0,0,0.3)] overflow-hidden
// //         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
// //       >
// //         {/* --- 3D AMBIENT GLOWS (Rich & Saturated) --- */}
// //         <div className="absolute top-[-10%] left-[-20%] w-[350px] h-[350px] bg-[#C69C55]/15 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
// //         <div className="absolute bottom-[-10%] right-[-20%] w-[350px] h-[350px] bg-[#1a2e4f]/50 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
        
// //         {/* Physical Edge Highlights (Creates the 3D Glass Rim) */}
// //         <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>
// //         <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none"></div>

// //         {/* --- HEADER --- */}
// //         <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-6 bg-white/[0.02]">
// //           <div className="flex items-center gap-3">
// //             <div className="rounded-xl bg-gradient-to-br from-white to-slate-100 p-0.5 shadow-lg border border-white/20">
// //               <img src={logo} alt="Laxvira logo" className="h-10 w-10 rounded-lg object-cover" />
// //             </div>
// //             <div>
// //               <h2 className="text-lg font-black text-white tracking-widest uppercase drop-shadow-md">LAXVIRA</h2>
// //               <p className="text-[10px] font-bold text-[#C69C55] tracking-widest uppercase">Smart Finance</p>
// //             </div>
// //           </div>
// //           <button
// //             type="button"
// //             onClick={() => setIsOpen(false)}
// //             className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden transition-colors"
// //           >
// //             <X size={18} />
// //           </button>
// //         </div>

// //         {/* --- SCROLLABLE NAVIGATION --- */}
// //         <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
// //           {navigationItems.map((item) => {
// //             const Icon = item.icon;
// //             const active = isLinkActive(item.path);
            
// //             return (
// //               <NavLink
// //                 key={item.name}
// //                 to={item.path}
// //                 className={`mb-1.5 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
// //                   active
// //                     ? "bg-gradient-to-r from-[#C69C55] to-[#a37e3d] text-[#101E36] font-bold shadow-[0_4px_15px_rgba(198,156,85,0.3)] border border-[#C69C55]/50 scale-[1.02]"
// //                     : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:scale-[1.01]"
// //                 }`}
// //               >
// //                 {/* Subtle sheen effect on hover for inactive links */}
// //                 {!active && (
// //                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
// //                 )}
                
// //                 <Icon 
// //                   size={18} 
// //                   className={`transition-colors duration-300 ${active ? "text-[#101E36]" : "text-[#C69C55]/80 group-hover:text-[#C69C55]"}`} 
// //                 />
// //                 <span className="relative z-10 tracking-wide">{item.name}</span>
// //               </NavLink>
// //             );
// //           })}

          




// //         </nav>

// //         {/* --- BOTTOM PROFILE SECTION --- */}
// //         <div className="relative z-10 border-t border-white/10 p-4 bg-[#0A1128]">
// //           <div className="flex items-center gap-2 rounded-2xl bg-white/[0.03] border border-white/10 p-2 hover:bg-white/[0.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 shadow-md group">
// //             <div 
// //               onClick={handleNavigateToSettings}
// //               className="flex flex-1 items-center gap-3 cursor-pointer pl-1"
// //             >
// //               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C69C55] to-[#a37e3d] font-black text-[#101E36] shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] border border-[#C69C55]">
// //                 {profile.initials}
// //               </div>
// //               <div className="flex-1 min-w-0">
// //                 <p className="font-bold text-white truncate group-hover:text-[#C69C55] transition-colors">
// //                   {profile.ownerName}
// //                 </p>
// //                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Settings</p>
// //               </div>
// //             </div>
// //             <button
// //               onClick={handleLogout}
// //               className="p-2.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all duration-300"
// //               title="Logout"
// //             >
// //               <LogOut size={18} />
// //             </button>
// //           </div>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // };

// // export default Sidebar;

// // import React, { useState, useEffect } from "react";
// // import { NavLink, useLocation, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard, ClipboardList, ReceiptText, Boxes, Users, Truck,
// //   FileText, Wallet, RotateCcw, BriefcaseBusiness, Sparkles, Menu,
// //   X, Receipt, LogOut, FileSpreadsheet, FileSignature, Shield
// // } from "lucide-react";
// // import logo from "../assets/logo.jpg";

// // const navigationItems = [
// //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// //   { name: "Invoices", icon: FileSpreadsheet, path: "/invoices" },
// //   { name: "Quotations", icon: FileSignature, path: "/quotations" },
// //   { name: "Customers", icon: Users, path: "/customers" },
// //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// //   { name: "Reports", icon: FileText, path: "/reports" },
// //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // ];

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [profile, setProfile] = useState({ ownerName: "Loading...", initials: "??" });
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const user = JSON.parse(localStorage.getItem('user') || '{}');

// //   useEffect(() => {
// //     setIsOpen(false);
// //   }, [location.pathname]);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) return;
// //         const response = await fetch("http://localhost:8000/api/store/profile", {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         if (response.ok) {
// //           const data = await response.json();
// //           const name = data.ownerName || "Store Owner";
// //           const initials = name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
// //           setProfile({ ownerName: name, initials });
// //         }
// //       } catch (err) {
// //         console.error("Failed to load profile for sidebar:", err);
// //       }
// //     };
// //     fetchProfile();
// //   }, []);

// //   const isLinkActive = (path) => {
// //     if (path === "/dashboard") return location.pathname === "/dashboard";
// //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/"); // Redirects to Landing Page instead of Login
// //   };

// //   const handleNavigateToSettings = () => {
// //     navigate("/settings");
// //     setIsOpen(false);
// //   };

// //   return (
// //     <>
// //       <button
// //         type="button"
// //         onClick={() => setIsOpen((prev) => !prev)}
// //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md p-2 text-[#101E36] shadow-lg lg:hidden"
// //       >
// //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// //       </button>

// //       {isOpen && (
// //         <button
// //           type="button"
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 z-30 bg-[#0A1128]/60 backdrop-blur-sm lg:hidden"
// //         />
// //       )}

// //       <aside
// //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col transition-transform duration-500 ease-out lg:translate-x-0 
// //         bg-[#0A1128]/95 backdrop-blur-2xl 
// //         border-r border-white/10 shadow-[15px_0_50px_-10px_rgba(0,0,0,0.3)] overflow-hidden
// //         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
// //       >
// //         {/* --- 3D AMBIENT GLOWS (Rich & Saturated) --- */}
// //         <div className="absolute top-[-10%] left-[-20%] w-[350px] h-[350px] bg-[#C69C55]/15 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
// //         <div className="absolute bottom-[-10%] right-[-20%] w-[350px] h-[350px] bg-[#1a2e4f]/50 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
        
// //         {/* Physical Edge Highlights (Creates the 3D Glass Rim) */}
// //         <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>
// //         <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none"></div>

// //         {/* --- HEADER --- */}
// //         <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-6 bg-white/[0.02]">
// //           <div className="flex items-center gap-3">
// //             <div className="rounded-xl bg-gradient-to-br from-white to-slate-100 p-0.5 shadow-lg border border-white/20">
// //               <img src={logo} alt="Laxvira logo" className="h-10 w-10 rounded-lg object-cover" />
// //             </div>
// //             <div>
// //               <h2 className="text-lg font-black text-white tracking-widest uppercase drop-shadow-md">LAXVIRA</h2>
// //               <p className="text-[10px] font-bold text-[#C69C55] tracking-widest uppercase">Smart Finance</p>
// //             </div>
// //           </div>
// //           <button
// //             type="button"
// //             onClick={() => setIsOpen(false)}
// //             className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden transition-colors"
// //           >
// //             <X size={18} />
// //           </button>
// //         </div>

// //         {/* --- SCROLLABLE NAVIGATION --- */}
// //         <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
// //           {navigationItems.map((item) => {
// //             const Icon = item.icon;
// //             const active = isLinkActive(item.path);
            
// //             return (
// //               <NavLink
// //                 key={item.name}
// //                 to={item.path}
// //                 className={`mb-1.5 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
// //                   active
// //                     ? "bg-gradient-to-r from-[#C69C55] to-[#a37e3d] text-[#101E36] font-bold shadow-[0_4px_15px_rgba(198,156,85,0.3)] border border-[#C69C55]/50 scale-[1.02]"
// //                     : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:scale-[1.01]"
// //                 }`}
// //               >
// //                 {/* Subtle sheen effect on hover for inactive links */}
// //                 {!active && (
// //                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
// //                 )}
                
// //                 <Icon 
// //                   size={18} 
// //                   className={`transition-colors duration-300 ${active ? "text-[#101E36]" : "text-[#C69C55]/80 group-hover:text-[#C69C55]"}`} 
// //                 />
// //                 <span className="relative z-10 tracking-wide">{item.name}</span>
// //               </NavLink>
// //             );
// //           })}

// //           {/* --- HQ ADMIN PROTECTED ROUTE --- */}
// //           {user?.is_hq_staff && user?.hq_role === 'SUPERADMIN' && (
// //             <div className="mt-6 pt-4 border-t border-white/10">
// //               <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Admin Tools</p>
// //               <NavLink
// //                 to="/hq/staff"
// //                 className={`mb-1.5 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
// //                   isLinkActive("/hq/staff")
// //                     ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-[0_4px_15px_rgba(124,58,237,0.3)] border border-purple-500/50 scale-[1.02]"
// //                     : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:scale-[1.01]"
// //                 }`}
// //               >
// //                 {!isLinkActive("/hq/staff") && (
// //                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
// //                 )}
// //                 <Shield 
// //                   size={18} 
// //                   className={`transition-colors duration-300 ${isLinkActive("/hq/staff") ? "text-white" : "text-purple-400 group-hover:text-purple-300"}`} 
// //                 />
// //                 <span className="relative z-10 tracking-wide">Staff Management</span>
// //               </NavLink>
// //             </div>
// //           )}

// //         </nav>

// //         {/* --- BOTTOM PROFILE SECTION --- */}
// //         <div className="relative z-10 border-t border-white/10 p-4 bg-[#0A1128]">
// //           <div className="flex items-center gap-2 rounded-2xl bg-white/[0.03] border border-white/10 p-2 hover:bg-white/[0.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 shadow-md group">
// //             <div 
// //               onClick={handleNavigateToSettings}
// //               className="flex flex-1 items-center gap-3 cursor-pointer pl-1"
// //             >
// //               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C69C55] to-[#a37e3d] font-black text-[#101E36] shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] border border-[#C69C55]">
// //                 {profile.initials}
// //               </div>
// //               <div className="flex-1 min-w-0">
// //                 <p className="font-bold text-white truncate group-hover:text-[#C69C55] transition-colors">
// //                   {profile.ownerName}
// //                 </p>
// //                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Settings</p>
// //               </div>
// //             </div>
// //             <button
// //               onClick={handleLogout}
// //               className="p-2.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all duration-300"
// //               title="Logout"
// //             >
// //               <LogOut size={18} />
// //             </button>
// //           </div>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // };

// // export default Sidebar;

// // import React, { useState, useEffect } from "react";
// // import { NavLink, useLocation, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard, ClipboardList, ReceiptText, Boxes, Users, Truck,
// //   FileText, Wallet, RotateCcw, BriefcaseBusiness, Sparkles, Menu,
// //   X, Receipt, LogOut, FileSpreadsheet, FileSignature, Shield, ChevronRight
// // } from "lucide-react";
// // import logo from "../assets/logo.jpg";

// // const navigationItems = [
// //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// //   { name: "Invoices", icon: FileSpreadsheet, path: "/invoices" },
// //   { name: "Quotations", icon: FileSignature, path: "/quotations" },
// //   { name: "Customers", icon: Users, path: "/customers" },
// //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// //   { name: "Reports", icon: FileText, path: "/reports" },
// //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // ];

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [profile, setProfile] = useState({ ownerName: "Loading...", initials: "??" });
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const user = JSON.parse(localStorage.getItem('user') || '{}');

// //   useEffect(() => {
// //     setIsOpen(false);
// //   }, [location.pathname]);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) return;
// //         const response = await fetch("http://localhost:8000/api/store/profile", {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         if (response.ok) {
// //           const data = await response.json();
// //           const name = data.ownerName || "Store Owner";
// //           const initials = name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
// //           setProfile({ ownerName: name, initials });
// //         }
// //       } catch (err) {
// //         console.error("Failed to load profile for sidebar:", err);
// //       }
// //     };
// //     fetchProfile();
// //   }, []);

// //   const isLinkActive = (path) => {
// //     if (path === "/dashboard") return location.pathname === "/dashboard";
// //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/"); // Redirects to Landing Page instead of Login
// //   };

// //   const handleNavigateToSettings = () => {
// //     navigate("/settings");
// //     setIsOpen(false);
// //   };

// //   return (
// //     <>
// //       <button
// //         type="button"
// //         onClick={() => setIsOpen((prev) => !prev)}
// //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md p-2 text-[#101E36] shadow-lg lg:hidden"
// //       >
// //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// //       </button>

// //       {isOpen && (
// //         <button
// //           type="button"
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 z-30 bg-[#0A1128]/60 backdrop-blur-sm lg:hidden"
// //         />
// //       )}

// //       <aside
// //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col transition-transform duration-500 ease-out lg:translate-x-0 
// //         bg-[#fbfaf8] border-r border-slate-200/80 shadow-[15px_0_50px_-10px_rgba(0,0,0,0.03)] overflow-hidden
// //         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
// //       >
// //         {/* --- HEADER --- */}
// //         <div className="relative z-10 flex items-center justify-between border-b border-slate-100 px-6 py-6 bg-transparent">
// //           <div className="flex items-center gap-3">
// //             <div className="rounded-xl bg-white p-0.5 shadow-sm border border-slate-200">
// //               <img src={logo} alt="Laxvira logo" className="h-9 w-9 rounded-lg object-cover" />
// //             </div>
// //             <div>
// //               <h2 className="text-lg font-black text-slate-900 tracking-wider uppercase">LAXVIRA</h2>
// //             </div>
// //           </div>
// //           <button
// //             type="button"
// //             onClick={() => setIsOpen(false)}
// //             className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden transition-colors"
// //           >
// //             <X size={18} />
// //           </button>
// //         </div>

// //         {/* --- SCROLLABLE NAVIGATION --- */}
// //         <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
// //           {navigationItems.map((item) => {
// //             const Icon = item.icon;
// //             const active = isLinkActive(item.path);
            
// //             return (
// //               <NavLink
// //                 key={item.name}
// //                 to={item.path}
// //                 className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
// //                   active
// //                     ? "bg-[#0f172a] text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] font-bold scale-[1.02]"
// //                     : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
// //                 }`}
// //               >
// //                 <Icon 
// //                   size={18} 
// //                   className={`transition-colors duration-300 ${active ? "text-amber-500" : "text-slate-400 group-hover:text-slate-700"}`} 
// //                 />
// //                 <span className="tracking-wide flex-1">{item.name}</span>
// //                 {active && <ChevronRight size={14} className="text-amber-500 ml-auto" />}
// //               </NavLink>
// //             );
// //           })}

// //           {/* --- HQ ADMIN PROTECTED ROUTE --- */}
// //           {user?.is_hq_staff && user?.hq_role === 'SUPERADMIN' && (
// //             <div className="mt-6 pt-4 border-t border-slate-200">
// //               <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Admin Tools</p>
// //               <NavLink
// //                 to="/hq/staff"
// //                 className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
// //                   isLinkActive("/hq/staff")
// //                     ? "bg-indigo-600 text-white shadow-[0_10px_25px_rgba(79,70,229,0.25)] font-bold scale-[1.02]"
// //                     : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
// //                 }`}
// //               >
// //                 <Shield 
// //                   size={18} 
// //                   className={`transition-colors duration-300 ${isLinkActive("/hq/staff") ? "text-white" : "text-indigo-400 group-hover:text-indigo-600"}`} 
// //                 />
// //                 <span className="tracking-wide flex-1">Staff Management</span>
// //                 {isLinkActive("/hq/staff") && <ChevronRight size={14} className="text-white ml-auto" />}
// //               </NavLink>
// //             </div>
// //           )}

// //         </nav>

// //         {/* --- BOTTOM PROFILE SECTION --- */}
// //         <div className="relative z-10 border-t border-slate-200 p-4 bg-slate-50/50">
// //           <div className="flex items-center gap-2 rounded-2xl bg-white border border-slate-200/80 p-2.5 shadow-sm transition-all duration-300 group">
// //             <div 
// //               onClick={handleNavigateToSettings}
// //               className="flex flex-1 items-center gap-3 cursor-pointer pl-1"
// //             >
// //               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-bold text-white shadow-sm">
// //                 {profile.initials}
// //               </div>
// //               <div className="flex-1 min-w-0">
// //                 <p className="font-bold text-slate-900 truncate text-sm group-hover:text-amber-600 transition-colors">
// //                   {profile.ownerName}
// //                 </p>
// //                 <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Settings</p>
// //               </div>
// //             </div>
// //             <button
// //               onClick={handleLogout}
// //               className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-300"
// //               title="Logout"
// //             >
// //               <LogOut size={18} />
// //             </button>
// //           </div>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // };

// // export default Sidebar;

// // import React, { useState, useEffect } from "react";
// // import { NavLink, useLocation } from "react-router-dom";
// // import {
// //   LayoutDashboard, ClipboardList, ReceiptText, Boxes, Users, Truck,
// //   FileText, Wallet, RotateCcw, BriefcaseBusiness, Sparkles, Menu,
// //   X, Receipt, FileSpreadsheet, FileSignature, Shield, ChevronRight
// // } from "lucide-react";
// // import logo from "../assets/logo.jpg";

// // const navigationItems = [
// //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// //   { name: "Invoices", icon: FileSpreadsheet, path: "/invoices" },
// //   { name: "Quotations", icon: FileSignature, path: "/quotations" },
// //   { name: "Customers", icon: Users, path: "/customers" },
// //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// //   { name: "Sales", icon: ReceiptText, path: "/sales" },
// //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// //   { name: "Reports", icon: FileText, path: "/reports" },
// //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // ];

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const location = useLocation();
// //   const user = JSON.parse(localStorage.getItem('user') || '{}');

// //   useEffect(() => {
// //     setIsOpen(false);
// //   }, [location.pathname]);

// //   const isLinkActive = (path) => {
// //     if (path === "/dashboard") return location.pathname === "/dashboard";
// //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// //   };

// //   return (
// //     <>
// //       <button
// //         type="button"
// //         onClick={() => setIsOpen((prev) => !prev)}
// //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md p-2 text-[#101E36] shadow-lg lg:hidden"
// //       >
// //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// //       </button>

// //       {isOpen && (
// //         <button
// //           type="button"
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 z-30 bg-[#0A1128]/60 backdrop-blur-sm lg:hidden"
// //         />
// //       )}

// //       <aside
// //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col transition-transform duration-500 ease-out lg:translate-x-0 
// //         bg-[#fbfaf8] border-r border-slate-200/80 shadow-[15px_0_50px_-10px_rgba(0,0,0,0.03)] overflow-hidden
// //         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
// //       >
// //         {/* --- HEADER --- */}
// //         <div className="relative z-10 flex items-center justify-between border-b border-slate-100 px-6 py-6 bg-transparent">
// //           <div className="flex items-center gap-3">
// //             <div className="rounded-xl bg-white p-0.5 shadow-sm border border-slate-200">
// //               <img src={logo} alt="Laxvira logo" className="h-9 w-9 rounded-lg object-cover" />
// //             </div>
// //             <div>
// //               <h2 className="text-lg font-black text-slate-900 tracking-wider uppercase">LAXVIRA</h2>
// //             </div>
// //           </div>
// //           <button
// //             type="button"
// //             onClick={() => setIsOpen(false)}
// //             className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden transition-colors"
// //           >
// //             <X size={18} />
// //           </button>
// //         </div>

// //         {/* --- SCROLLABLE NAVIGATION --- */}
// //         <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
// //           {navigationItems.map((item) => {
// //             const Icon = item.icon;
// //             const active = isLinkActive(item.path);
            
// //             return (
// //               <NavLink
// //                 key={item.name}
// //                 to={item.path}
// //                 className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
// //                   active
// //                     ? "bg-[#0f172a] text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] font-bold scale-[1.02]"
// //                     : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
// //                 }`}
// //               >
// //                 <Icon 
// //                   size={18} 
// //                   className={`transition-colors duration-300 ${active ? "text-amber-500" : "text-slate-400 group-hover:text-slate-700"}`} 
// //                 />
// //                 <span className="tracking-wide flex-1">{item.name}</span>
// //                 {active && <ChevronRight size={14} className="text-amber-500 ml-auto" />}
// //               </NavLink>
// //             );
// //           })}

// //           {/* --- HQ ADMIN PROTECTED ROUTE --- */}
// //           {user?.is_hq_staff && user?.hq_role === 'SUPERADMIN' && (
// //             <div className="mt-6 pt-4 border-t border-slate-200">
// //               <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Admin Tools</p>
// //               <NavLink
// //                 to="/hq/staff"
// //                 className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
// //                   isLinkActive("/hq/staff")
// //                     ? "bg-indigo-600 text-white shadow-[0_10px_25px_rgba(79,70,229,0.25)] font-bold scale-[1.02]"
// //                     : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
// //                 }`}
// //               >
// //                 <Shield 
// //                   size={18} 
// //                   className={`transition-colors duration-300 ${isLinkActive("/hq/staff") ? "text-white" : "text-indigo-400 group-hover:text-indigo-600"}`} 
// //                 />
// //                 <span className="tracking-wide flex-1">Staff Management</span>
// //                 {isLinkActive("/hq/staff") && <ChevronRight size={14} className="text-white ml-auto" />}
// //               </NavLink>
// //             </div>
// //           )}
// //         </nav>
// //       </aside>
// //     </>
// //   );
// // };

// // export default Sidebar;

// // import React, { useState, useEffect } from "react";
// // import { NavLink, useLocation } from "react-router-dom";
// // import {
// //   LayoutDashboard, ClipboardList, Boxes, Users, Truck,
// //   FileText, Wallet, RotateCcw, BriefcaseBusiness, Sparkles, Menu,
// //   X, Receipt, FileSpreadsheet, FileSignature, Shield, ChevronRight
// // } from "lucide-react";
// // import logo from "../assets/logo.jpg";

// // const navigationItems = [
// //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// //   { name: "Invoices", icon: FileSpreadsheet, path: "/invoices" },
// //   { name: "Quotations", icon: FileSignature, path: "/quotations" },
// //   { name: "Customers", icon: Users, path: "/customers" },
// //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// //   { name: "Reports", icon: FileText, path: "/reports" },
// //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // ];

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const location = useLocation();
// //   const user = JSON.parse(localStorage.getItem('user') || '{}');

// //   useEffect(() => {
// //     setIsOpen(false);
// //   }, [location.pathname]);

// //   const isLinkActive = (path) => {
// //     if (path === "/dashboard") return location.pathname === "/dashboard";
// //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// //   };

// //   return (
// //     <>
// //       <button
// //         type="button"
// //         onClick={() => setIsOpen((prev) => !prev)}
// //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md p-2 text-[#101E36] shadow-lg lg:hidden"
// //       >
// //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// //       </button>

// //       {isOpen && (
// //         <button
// //           type="button"
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 z-30 bg-[#0A1128]/60 backdrop-blur-sm lg:hidden"
// //         />
// //       )}

// //       <aside
// //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col transition-transform duration-500 ease-out lg:translate-x-0 
// //         bg-[#fbfaf8] border-r border-slate-200/80 shadow-[15px_0_50px_-10px_rgba(0,0,0,0.03)] overflow-hidden
// //         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
// //       >
// //         {/* --- HEADER --- */}
// //         <div className="relative z-10 flex items-center justify-between border-b border-slate-100 px-6 py-6 bg-transparent">
// //           <div className="flex items-center gap-3">
// //             <div className="rounded-xl bg-white p-0.5 shadow-sm border border-slate-200">
// //               <img src={logo} alt="Laxvira logo" className="h-9 w-9 rounded-lg object-cover" />
// //             </div>
// //             <div>
// //               <h2 className="text-lg font-black text-slate-900 tracking-wider uppercase">LAXVIRA</h2>
// //             </div>
// //           </div>
// //           <button
// //             type="button"
// //             onClick={() => setIsOpen(false)}
// //             className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden transition-colors"
// //           >
// //             <X size={18} />
// //           </button>
// //         </div>

// //         {/* --- SCROLLABLE NAVIGATION --- */}
// //         <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
// //           {navigationItems.map((item) => {
// //             const Icon = item.icon;
// //             const active = isLinkActive(item.path);
            
// //             return (
// //               <NavLink
// //                 key={item.name}
// //                 to={item.path}
// //                 className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
// //                   active
// //                     ? "bg-[#0f172a] text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] font-bold scale-[1.02]"
// //                     : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
// //                 }`}
// //               >
// //                 <Icon 
// //                   size={18} 
// //                   className={`transition-colors duration-300 ${active ? "text-amber-500" : "text-slate-400 group-hover:text-slate-700"}`} 
// //                 />
// //                 <span className="tracking-wide flex-1">{item.name}</span>
// //                 {active && <ChevronRight size={14} className="text-amber-500 ml-auto" />}
// //               </NavLink>
// //             );
// //           })}

// //           {/* --- HQ ADMIN PROTECTED ROUTE --- */}
// //           {user?.is_hq_staff && user?.hq_role === 'SUPERADMIN' && (
// //             <div className="mt-6 pt-4 border-t border-slate-200">
// //               <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Admin Tools</p>
// //               <NavLink
// //                 to="/hq/staff"
// //                 className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
// //                   isLinkActive("/hq/staff")
// //                     ? "bg-indigo-600 text-white shadow-[0_10px_25px_rgba(79,70,229,0.25)] font-bold scale-[1.02]"
// //                     : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
// //                 }`}
// //               >
// //                 <Shield 
// //                   size={18} 
// //                   className={`transition-colors duration-300 ${isLinkActive("/hq/staff") ? "text-white" : "text-indigo-400 group-hover:text-indigo-600"}`} 
// //                 />
// //                 <span className="tracking-wide flex-1">Staff Management</span>
// //                 {isLinkActive("/hq/staff") && <ChevronRight size={14} className="text-white ml-auto" />}
// //               </NavLink>
// //             </div>
// //           )}
// //         </nav>
// //       </aside>
// //     </>
// //   );
// // };

// // export default Sidebar;

// // import React, { useState, useEffect } from "react";
// // import { NavLink, useLocation, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard, ClipboardList, Boxes, Users, Truck,
// //   FileText, Wallet, RotateCcw, BriefcaseBusiness, Sparkles, Menu,
// //   X, Receipt, FileSpreadsheet, FileSignature, Shield, ChevronRight, Clock
// // } from "lucide-react";
// // import logo from "../assets/logo.jpg";

// // const navigationItems = [
// //   { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
// //   { name: "Billing (POS)", icon: Receipt, path: "/billing" },
// //   { name: "Invoices", icon: FileSpreadsheet, path: "/invoices" },
// //   { name: "Quotations", icon: FileSignature, path: "/quotations" },
// //   { name: "Customers", icon: Users, path: "/customers" },
// //   { name: "Inventory", icon: Boxes, path: "/Inventory" },
// //   { name: "Orders", icon: ClipboardList, path: "/orders" },
// //   { name: "Expenses", icon: Wallet, path: "/expenses" },
// //   { name: "Reports", icon: FileText, path: "/reports" },
// //   { name: "Suppliers", icon: Truck, path: "/suppliers" },
// //   { name: "Returns", icon: RotateCcw, path: "/returns" },
// //   { name: "Staff", icon: BriefcaseBusiness, path: "/staff" },
// //   { name: "Forecast & Insights", icon: Sparkles, path: "/forecast" },
// // ];

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const user = JSON.parse(localStorage.getItem('user') || '{}');

// //   useEffect(() => {
// //     setIsOpen(false);
// //   }, [location.pathname]);

// //   const isLinkActive = (path) => {
// //     if (path === "/dashboard") return location.pathname === "/dashboard";
// //     return location.pathname === path || location.pathname.startsWith(`${path}/`);
// //   };

// //   // --- TRIAL MATH ENGINE ---
// //   const calculateDaysLeft = () => {
// //     if (!user?.trial_ends_at) return 0;
// //     const trialEnds = new Date(user.trial_ends_at);
// //     const now = new Date();
// //     const diffTime = trialEnds - now;
// //     return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
// //   };

// //   const daysLeft = calculateDaysLeft();
// //   const isTrial = user?.subscription_status === 'TRIAL';

// //   return (
// //     <>
// //       <button
// //         type="button"
// //         onClick={() => setIsOpen((prev) => !prev)}
// //         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md p-2 text-[#101E36] shadow-lg lg:hidden"
// //       >
// //         {isOpen ? <X size={18} /> : <Menu size={18} />}
// //       </button>

// //       {isOpen && (
// //         <button
// //           type="button"
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 z-30 bg-[#0A1128]/60 backdrop-blur-sm lg:hidden"
// //         />
// //       )}

// //       <aside
// //         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col transition-transform duration-500 ease-out lg:translate-x-0 
// //         bg-[#fbfaf8] border-r border-slate-200/80 shadow-[15px_0_50px_-10px_rgba(0,0,0,0.03)] overflow-hidden
// //         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
// //       >
// //         {/* --- HEADER --- */}
// //         <div className="relative z-10 flex items-center justify-between border-b border-slate-100 px-6 py-6 bg-transparent">
// //           <div className="flex items-center gap-3">
// //             <div className="rounded-xl bg-white p-0.5 shadow-sm border border-slate-200">
// //               <img src={logo} alt="Laxvira logo" className="h-9 w-9 rounded-lg object-cover" />
// //             </div>
// //             <div>
// //               <h2 className="text-lg font-black text-slate-900 tracking-wider uppercase">LAXVIRA</h2>
// //             </div>
// //           </div>
// //           <button
// //             type="button"
// //             onClick={() => setIsOpen(false)}
// //             className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden transition-colors"
// //           >
// //             <X size={18} />
// //           </button>
// //         </div>

// //         {/* --- SCROLLABLE NAVIGATION --- */}
// //         <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent flex flex-col">
// //           <div className="flex-1">
// //             {navigationItems.map((item) => {
// //               const Icon = item.icon;
// //               const active = isLinkActive(item.path);
              
// //               return (
// //                 <NavLink
// //                   key={item.name}
// //                   to={item.path}
// //                   className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
// //                     active
// //                       ? "bg-[#0f172a] text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] font-bold scale-[1.02]"
// //                       : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
// //                   }`}
// //                 >
// //                   <Icon 
// //                     size={18} 
// //                     className={`transition-colors duration-300 ${active ? "text-amber-500" : "text-slate-400 group-hover:text-slate-700"}`} 
// //                   />
// //                   <span className="tracking-wide flex-1">{item.name}</span>
// //                   {active && <ChevronRight size={14} className="text-amber-500 ml-auto" />}
// //                 </NavLink>
// //               );
// //             })}

// //             {/* --- HQ ADMIN PROTECTED ROUTE --- */}
// //             {user?.is_hq_staff && user?.hq_role === 'SUPERADMIN' && (
// //               <div className="mt-6 pt-4 border-t border-slate-200">
// //                 <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Admin Tools</p>
// //                 <NavLink
// //                   to="/hq/staff"
// //                   className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
// //                     isLinkActive("/hq/staff")
// //                       ? "bg-indigo-600 text-white shadow-[0_10px_25px_rgba(79,70,229,0.25)] font-bold scale-[1.02]"
// //                       : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
// //                   }`}
// //                 >
// //                   <Shield 
// //                     size={18} 
// //                     className={`transition-colors duration-300 ${isLinkActive("/hq/staff") ? "text-white" : "text-indigo-400 group-hover:text-indigo-600"}`} 
// //                   />
// //                   <span className="tracking-wide flex-1">Staff Management</span>
// //                   {isLinkActive("/hq/staff") && <ChevronRight size={14} className="text-white ml-auto" />}
// //                 </NavLink>
// //               </div>
// //             )}
// //           </div>

// //           {/* --- TRIAL STATUS CLOCK --- */}
// //           {isTrial && (
// //             <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/60 shadow-sm shrink-0">
// //               <div className="flex items-center gap-2 mb-2">
// //                 <Clock size={16} className="text-amber-600" />
// //                 <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Trial Evaluation</p>
// //               </div>
// //               <p className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
// //                 {daysLeft} <span className="text-sm text-slate-500 font-bold">Days Left</span>
// //               </p>
// //               <p className="text-[10px] font-bold text-slate-500 mb-3">{user?.tier || 'GROWTH'} Edition active.</p>
// //               <button 
// //                 onClick={() => navigate('/subscription')}
// //                 className="w-full bg-[#0f172a] hover:bg-amber-500 text-white hover:text-slate-900 text-[11px] font-bold uppercase tracking-widest py-2.5 rounded-xl transition-colors"
// //               >
// //                 Upgrade Node
// //               </button>
// //             </div>
// //           )}

// //         </nav>
// //       </aside>
// //     </>
// //   );
// // };

// // export default Sidebar;


// //updated on 31st aug
// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import {
//   Shield, ChevronRight, Clock, Menu, X
// } from "lucide-react";
// import logo from "../assets/logo.jpg";

// // IMPORT THE INDUSTRY CONFIG
// import { getIndustryConfig } from "../config/industry";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const userStr = localStorage.getItem('user');
//   const user = userStr ? JSON.parse(userStr) : {};

//   // --- DYNAMIC INDUSTRY CONFIG ENGINE ---
//   const industryId = user?.industry || 'WHOLESALE';
//   const currentConfig = getIndustryConfig(industryId);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   const isLinkActive = (path) => {
//     if (path === "/dashboard") return location.pathname === "/dashboard";
//     return location.pathname === path || location.pathname.startsWith(`${path}/`);
//   };

//   // --- TRIAL MATH ENGINE ---
//   const calculateDaysLeft = () => {
//     if (!user?.trial_ends_at) return 0;
//     const trialEnds = new Date(user.trial_ends_at);
//     const now = new Date();
//     const diffTime = trialEnds - now;
//     return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
//   };

//   const daysLeft = calculateDaysLeft();
//   const isTrial = user?.subscription_status === 'TRIAL';

//   return (
//     <>
//       <button
//         type="button"
//         onClick={() => setIsOpen((prev) => !prev)}
//         className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md p-2 text-[#101E36] shadow-lg lg:hidden"
//       >
//         {isOpen ? <X size={18} /> : <Menu size={18} />}
//       </button>

//       {isOpen && (
//         <button
//           type="button"
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 z-30 bg-[#0A1128]/60 backdrop-blur-sm lg:hidden"
//         />
//       )}

//       <aside
//         className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col transition-transform duration-500 ease-out lg:translate-x-0 
//         bg-[#fbfaf8] border-r border-slate-200/80 shadow-[15px_0_50px_-10px_rgba(0,0,0,0.03)] overflow-hidden
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         {/* --- HEADER --- */}
//         <div className="relative z-10 flex items-center justify-between border-b border-slate-100 px-6 py-6 bg-transparent shrink-0">
//           <div className="flex items-center gap-3">
//             <div className="rounded-xl bg-white p-0.5 shadow-sm border border-slate-200">
//               <img src={logo} alt="Laxvira logo" className="h-9 w-9 rounded-lg object-cover" />
//             </div>
//             <div>
//               <h2 className="text-lg font-black text-slate-900 tracking-wider uppercase leading-tight">LAXVIRA</h2>
//               {/* Renders the specific industry name (e.g., "Restaurant & F&B") */}
//               <p className="text-[9px] text-[#C5A059] font-bold tracking-widest uppercase">{currentConfig.name}</p>
//             </div>
//           </div>
//           <button
//             type="button"
//             onClick={() => setIsOpen(false)}
//             className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden transition-colors"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         {/* --- SCROLLABLE NAVIGATION --- */}
//         <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent flex flex-col">
//           <div className="flex-1">
            
//             {/* DYNAMIC NAVIGATION MAPPING */}
//             {currentConfig.sidebar.map((item) => {
//               const Icon = item.icon;
//               const active = isLinkActive(item.path);
              
//               return (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
//                     active
//                       ? "bg-[#0f172a] text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] font-bold scale-[1.02]"
//                       : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
//                   }`}
//                 >
//                   <Icon 
//                     size={18} 
//                     className={`transition-colors duration-300 ${active ? "text-amber-500" : "text-slate-400 group-hover:text-slate-700"}`} 
//                   />
//                   <span className="tracking-wide flex-1 truncate">{item.name}</span>
//                   {active && <ChevronRight size={14} className="text-amber-500 ml-auto" />}
//                 </NavLink>
//               );
//             })}

//             {/* --- HQ ADMIN PROTECTED ROUTE --- */}
//             {user?.is_hq_staff && user?.hq_role === 'SUPERADMIN' && (
//               <div className="mt-6 pt-4 border-t border-slate-200">
//                 <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Admin Tools</p>
//                 <NavLink
//                   to="/hq/staff"
//                   className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
//                     isLinkActive("/hq/staff")
//                       ? "bg-indigo-600 text-white shadow-[0_10px_25px_rgba(79,70,229,0.25)] font-bold scale-[1.02]"
//                       : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
//                   }`}
//                 >
//                   <Shield 
//                     size={18} 
//                     className={`transition-colors duration-300 ${isLinkActive("/hq/staff") ? "text-white" : "text-indigo-400 group-hover:text-indigo-600"}`} 
//                   />
//                   <span className="tracking-wide flex-1">Staff Management</span>
//                   {isLinkActive("/hq/staff") && <ChevronRight size={14} className="text-white ml-auto" />}
//                 </NavLink>
//               </div>
//             )}
//           </div>

//           {/* --- TRIAL STATUS CLOCK --- */}
//           {isTrial && (
//             <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/60 shadow-sm shrink-0">
//               <div className="flex items-center gap-2 mb-2">
//                 <Clock size={16} className="text-amber-600" />
//                 <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Trial Evaluation</p>
//               </div>
//               <p className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
//                 {daysLeft} <span className="text-sm text-slate-500 font-bold">Days Left</span>
//               </p>
//               <p className="text-[10px] font-bold text-slate-500 mb-3">{user?.tier || 'GROWTH'} Edition active.</p>
//               <button 
//                 onClick={() => navigate('/subscription')}
//                 className="w-full bg-[#0f172a] hover:bg-amber-500 text-white hover:text-slate-900 text-[11px] font-bold uppercase tracking-widest py-2.5 rounded-xl transition-colors"
//               >
//                 Upgrade Node
//               </button>
//             </div>
//           )}

//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;
//working till hrere




import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Shield, ChevronRight, Clock, Menu, X
} from "lucide-react";
import logo from "../assets/logo.jpg";

// IMPORT THE NEW VERTICAL CONFIG ENGINE
import { getUserVertical } from "../config/verticals";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : {};

  // --- DYNAMIC VERTICAL CONFIG ENGINE ---
  const currentVertical = getUserVertical();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isLinkActive = (path) => {
    if (path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // --- TRIAL MATH ENGINE ---
  const calculateDaysLeft = () => {
    if (!user?.trial_ends_at) return 0;
    const trialEnds = new Date(user.trial_ends_at);
    const now = new Date();
    const diffTime = trialEnds - now;
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  const daysLeft = calculateDaysLeft();
  const isTrial = user?.subscription_status === 'TRIAL';

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md p-2 text-[#101E36] shadow-lg lg:hidden"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-[#0A1128]/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col transition-transform duration-500 ease-out lg:translate-x-0 
        bg-[#fbfaf8] border-r border-slate-200/80 shadow-[15px_0_50px_-10px_rgba(0,0,0,0.03)] overflow-hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* --- HEADER --- */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-100 px-6 py-6 bg-transparent shrink-0">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white p-0.5 shadow-sm border border-slate-200">
              <img src={logo} alt="Laxvira logo" className="h-9 w-9 rounded-lg object-cover" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-wider uppercase leading-tight">LAXVIRA</h2>
              <p className="text-[9px] text-[#C5A059] font-bold tracking-widest uppercase">{currentVertical.name}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 lg:hidden transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* --- SCROLLABLE NAVIGATION --- */}
        <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent flex flex-col">
          <div className="flex-1">
            
            {/* DYNAMIC NAVIGATION MAPPING */}
            {currentVertical.sidebar.map((item) => {
              const Icon = item.icon;
              const active = isLinkActive(item.path);
              
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
                    active
                      ? "bg-[#0f172a] text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] font-bold scale-[1.02]"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  <Icon 
                    size={18} 
                    className={`transition-colors duration-300 ${active ? "text-amber-500" : "text-slate-400 group-hover:text-slate-700"}`} 
                  />
                  <span className="tracking-wide flex-1 truncate">{item.name}</span>
                  {active && <ChevronRight size={14} className="text-amber-500 ml-auto" />}
                </NavLink>
              );
            })}

            {/* --- HQ ADMIN PROTECTED ROUTE --- */}
            {user?.is_hq_staff && user?.hq_role === 'SUPERADMIN' && (
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Admin Tools</p>
                <NavLink
                  to="/hq/staff"
                  className={`mb-2 flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
                    isLinkActive("/hq/staff")
                      ? "bg-indigo-600 text-white shadow-[0_10px_25px_rgba(79,70,229,0.25)] font-bold scale-[1.02]"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  <Shield 
                    size={18} 
                    className={`transition-colors duration-300 ${isLinkActive("/hq/staff") ? "text-white" : "text-indigo-400 group-hover:text-indigo-600"}`} 
                  />
                  <span className="tracking-wide flex-1">Staff Management</span>
                  {isLinkActive("/hq/staff") && <ChevronRight size={14} className="text-white ml-auto" />}
                </NavLink>
              </div>
            )}
          </div>

          {/* --- TRIAL STATUS CLOCK --- */}
          {isTrial && (
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/60 shadow-sm shrink-0">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-amber-600" />
                <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Trial Evaluation</p>
              </div>
              <p className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                {daysLeft} <span className="text-sm text-slate-500 font-bold">Days Left</span>
              </p>
              <p className="text-[10px] font-bold text-slate-500 mb-3">{user?.tier || 'GROWTH'} Edition active.</p>
              <button 
                onClick={() => navigate('/subscription')}
                className="w-full bg-[#0f172a] hover:bg-amber-500 text-white hover:text-slate-900 text-[11px] font-bold uppercase tracking-widest py-2.5 rounded-xl transition-colors"
              >
                Upgrade Node
              </button>
            </div>
          )}

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

