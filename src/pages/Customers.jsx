// =====================================================================================
// Customers.jsx
// Customer Management Page
// -------------------------------------------------------------------------------------
// Frontend-only implementation. Every point where a real backend call will eventually
// replace local logic is marked with "API PLACEHOLDER" / "TODO" comments. Business
// logic lives in plain helper functions (never inline in JSX) so a backend developer
// can swap data sources without touching markup.
// =====================================================================================

// ------------------------------- Imports --------------------------------------------
// import React, { useState, useMemo, useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Plus,
//   Download,
//   Search,
//   RotateCcw,
//   Eye,
//   Pencil,
//   Trash2,
//   X,
//   ChevronLeft,
//   ChevronRight,
//   Users,
//   Star,
// } from "lucide-react";

// // Current data source — a static dummy dataset.
// // API PLACEHOLDER: replace this import with a network call.
// // Future:
// //   const { data } = await axios.get("/customers");
// //   setCustomers(data);
// import { customers as INITIAL_CUSTOMERS } from "../data/customers";

// // ------------------------------- Constants -------------------------------------------
// const ITEMS_PER_PAGE = 10;
// const VIP_SPEND_THRESHOLD = 20000;

// const FILTER_TABS = [
//   { id: "All", label: "All Customers" },
//   { id: "Active", label: "Active" },
//   { id: "Inactive", label: "Inactive" },
//   { id: "VIP", label: "VIP Customers" },
// ];

// const CSV_COLUMNS = [
//   "customerCode",
//   "name",
//   "mobile",
//   "email",
//   "city",
//   "state",
//   "status",
//   "totalOrders",
//   "totalSpent",
//   "loyaltyPoints",
// ];

// // ------------------------------- API Placeholder Functions ---------------------------

// // API PLACEHOLDER: GET /customers
// // Future: return (await axios.get("/customers")).data;
// const fetchCustomersFromServer = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 400));
//   return INITIAL_CUSTOMERS;
// };

// // API PLACEHOLDER: POST /customers
// // Future: return (await axios.post("/customers", payload)).data;
// const createCustomerOnServer = async (payload) => {
//   await new Promise((resolve) => setTimeout(resolve, 300));
//   console.log("Customer submitted to backend:", payload);
//   // TODO POST /customers
//   return { success: true };
// };

// // API PLACEHOLDER: GET /customers/export
// // Future: window.location.href = "/customers/export";
// const exportCustomersFromServer = (rows) => rows;

// // ------------------------------- Utility / Helper Functions ---------------------------

// const isVIPCustomer = (customer) => customer.totalSpent >= VIP_SPEND_THRESHOLD;

// const formatCurrency = (value) =>
//   `₹${Number(value || 0).toLocaleString("en-IN", {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   })}`;

// const toCSVValue = (value) => {
//   const stringValue = String(value ?? "");
//   return stringValue.includes(",") ? `"${stringValue}"` : stringValue;
// };

// const buildCSV = (rows) => {
//   const header = CSV_COLUMNS.join(",");
//   const lines = rows.map((row) => CSV_COLUMNS.map((column) => toCSVValue(row[column])).join(","));
//   return [header, ...lines].join("\n");
// };

// const downloadCSV = (filename, csvContent) => {
//   const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.href = url;
//   link.setAttribute("download", filename);
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   URL.revokeObjectURL(url);
// };

// // ------------------------------- Small Reusable Sub-Components ------------------------
// // Kept inside this file (not extracted) purely to avoid repeated JSX below.

// const StatusBadge = ({ status }) => {
//   const styles = {
//     Active: "bg-emerald-50 text-emerald-600 border-emerald-100",
//     Inactive: "bg-slate-100 text-slate-500 border-slate-200",
//   };
//   return (
//     <span
//       className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${
//         styles[status] || "bg-slate-50 text-slate-500 border-slate-100"
//       }`}
//     >
//       {status}
//     </span>
//   );
// };

// const SkeletonRow = () => (
//   <tr className="border-b border-slate-100">
//     <td className="px-4 py-3"><div className="w-10 h-10 rounded-full bg-slate-100 animate-pulse" /></td>
//     <td className="px-4 py-3"><div className="h-4 w-32 rounded bg-slate-100 animate-pulse" /></td>
//     <td className="px-4 py-3"><div className="h-4 w-20 rounded bg-slate-100 animate-pulse" /></td>
//     <td className="px-4 py-3"><div className="h-4 w-24 rounded bg-slate-100 animate-pulse" /></td>
//     <td className="px-4 py-3"><div className="h-4 w-10 rounded bg-slate-100 animate-pulse" /></td>
//     <td className="px-4 py-3"><div className="h-4 w-16 rounded bg-slate-100 animate-pulse" /></td>
//     <td className="px-4 py-3"><div className="h-4 w-14 rounded bg-slate-100 animate-pulse" /></td>
//     <td className="px-4 py-3"><div className="h-5 w-16 rounded-full bg-slate-100 animate-pulse" /></td>
//     <td className="px-4 py-3"><div className="h-4 w-16 rounded bg-slate-100 animate-pulse" /></td>
//   </tr>
// );

// // ------------------------------- Component ---------------------------------------------

// export default function Customers() {
//   const navigate = useNavigate();

//   // ------------------------------- State ------------------------------------------------

//   const [customers, setCustomers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadError, setLoadError] = useState(null);

//   // Filters
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);

//   // Delete modal
//   const [deleteTarget, setDeleteTarget] = useState(null);

//   // ------------------------------- Effects ------------------------------------------------

//   useEffect(() => {
//     let isMounted = true;

//     const loadCustomers = async () => {
//       setIsLoading(true);
//       setLoadError(null);
//       try {
//         const data = await fetchCustomersFromServer();
//         if (isMounted) setCustomers(data);
//       } catch (error) {
//         if (isMounted) setLoadError("Failed to load customers. Please try again.");
//       } finally {
//         if (isMounted) setIsLoading(false);
//       }
//     };

//     loadCustomers();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // Reset to page 1 whenever any filter changes so results are never on a stale page.
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchQuery, activeFilter]);

//   // ------------------------------- Memoized Values ------------------------------------------

//   const filteredCustomers = useMemo(() => {
//     const normalizedQuery = searchQuery.trim().toLowerCase();

//     return customers.filter((customer) => {
//       const matchesSearch =
//         !normalizedQuery ||
//         customer.name.toLowerCase().includes(normalizedQuery) ||
//         customer.mobile.includes(normalizedQuery) ||
//         customer.email.toLowerCase().includes(normalizedQuery) ||
//         customer.customerCode.toLowerCase().includes(normalizedQuery);

//       const matchesFilter =
//         activeFilter === "All" ||
//         (activeFilter === "VIP" ? isVIPCustomer(customer) : customer.status === activeFilter);

//       return matchesSearch && matchesFilter;
//     });
//   }, [customers, searchQuery, activeFilter]);

//   const totalPages = useMemo(
//     () => Math.max(Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE), 1),
//     [filteredCustomers]
//   );

//   const paginatedCustomers = useMemo(() => {
//     const start = (currentPage - 1) * ITEMS_PER_PAGE;
//     return filteredCustomers.slice(start, start + ITEMS_PER_PAGE);
//   }, [filteredCustomers, currentPage]);

//   const areFiltersActive = useMemo(
//     () => searchQuery.trim() !== "" || activeFilter !== "All",
//     [searchQuery, activeFilter]
//   );

//   const pageNumbers = useMemo(
//     () => Array.from({ length: totalPages }, (_, index) => index + 1),
//     [totalPages]
//   );

//   // ------------------------------- Event Handlers -------------------------------------------

//   const handleSearchChange = useCallback((event) => setSearchQuery(event.target.value), []);
//   const handleFilterSelect = useCallback((filterId) => setActiveFilter(filterId), []);

//   const handleResetFilters = useCallback(() => {
//     setSearchQuery("");
//     setActiveFilter("All");
//   }, []);

//   const handlePageChange = useCallback(
//     (page) => setCurrentPage(Math.min(Math.max(page, 1), totalPages)),
//     [totalPages]
//   );

//   const handleViewCustomer = useCallback(
//     (customer) => navigate(`/customers/${customer.id}`),
//     [navigate]
//   );

//   const handleEditCustomer = useCallback((customer) => {
//     // API PLACEHOLDER: PUT /customers/:id
//     // Future: navigate to an edit form or open an inline edit modal, then:
//     // await axios.put(`/customers/${customer.id}`, updatedPayload);
//     console.log("Edit customer:", customer);
//   }, []);

//   const handleAddCustomer = useCallback(() => {
//     // API PLACEHOLDER: POST /customers
//     // Replace this stub with a real form/modal that collects customer details.
//     const payload = { name: "New Customer", mobile: "", email: "" };
//     console.log("Add customer clicked:", payload);
//     // TODO POST /customers
//     createCustomerOnServer(payload);
//   }, []);

//   const openDeleteModal = useCallback((customer) => setDeleteTarget(customer), []);
//   const closeDeleteModal = useCallback(() => setDeleteTarget(null), []);

//   const handleConfirmDelete = useCallback(() => {
//     if (!deleteTarget) return;
//     // API PLACEHOLDER: DELETE /customers/:id
//     // Future: await axios.delete(`/customers/${deleteTarget.id}`);
//     console.log("Delete customer:", deleteTarget.id);
//     setCustomers((prev) => prev.filter((customer) => customer.id !== deleteTarget.id));
//     setDeleteTarget(null);
//   }, [deleteTarget]);

//   const handleExportCSV = useCallback(() => {
//     // Currently generated locally from in-memory (filtered) data.
//     // API PLACEHOLDER: GET /customers/export
//     // Future: window.location.href = "/customers/export";
//     const rowsToExport = exportCustomersFromServer(filteredCustomers);
//     const csvContent = buildCSV(rowsToExport);
//     downloadCSV(`customers-export-${Date.now()}.csv`, csvContent);
//   }, [filteredCustomers]);

//   // ------------------------------- JSX ---------------------------------------------------

//   return (
//     <div className="min-h-screen bg-slate-50 p-4 lg:p-6 flex flex-col gap-5">
//       {/* ============================= HEADER ============================= */}
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-800">Customers</h1>
//           <p className="text-sm text-slate-500 mt-0.5">
//             Manage your customer base, loyalty points, and purchase history
//           </p>
//         </div>
//         <div className="flex flex-wrap items-center gap-2">
//           <button
//             onClick={handleExportCSV}
//             className="flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm transition"
//           >
//             <Download size={16} /> Export
//           </button>
//           <button
//             onClick={handleAddCustomer}
//             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-md shadow-blue-100 transition"
//           >
//             <Plus size={16} /> Add Customer
//           </button>
//         </div>
//       </div>

//       {/* ============================= SEARCH + FILTERS ============================= */}
//       <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 flex flex-col lg:flex-row lg:items-center gap-3">
//         <div className="relative flex-1 min-w-[220px]">
//           <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search by name, phone, email, or customer code..."
//             className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//           />
//         </div>

//         <div className="flex items-center gap-1.5 flex-wrap">
//           {FILTER_TABS.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => handleFilterSelect(tab.id)}
//               className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2.5 rounded-xl text-sm font-medium border transition ${
//                 activeFilter === tab.id
//                   ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100"
//                   : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
//               }`}
//             >
//               {tab.id === "VIP" && <Star size={14} />}
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {areFiltersActive && (
//           <button
//             onClick={handleResetFilters}
//             className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-500 transition"
//           >
//             <RotateCcw size={15} /> Reset
//           </button>
//         )}
//       </div>

//       {/* ============================= TABLE ============================= */}
//       <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex-1 flex flex-col">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm min-w-[900px]">
//             <thead>
//               <tr className="bg-slate-50 border-b border-slate-100 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
//                 <th className="px-4 py-3 w-16">Avatar</th>
//                 <th className="px-4 py-3">Customer Name</th>
//                 <th className="px-4 py-3">Customer Code</th>
//                 <th className="px-4 py-3">Phone</th>
//                 <th className="px-4 py-3">Orders</th>
//                 <th className="px-4 py-3">Total Spent</th>
//                 <th className="px-4 py-3">Loyalty Points</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {isLoading ? (
//                 Array.from({ length: 8 }).map((_, index) => <SkeletonRow key={index} />)
//               ) : loadError ? (
//                 <tr>
//                   <td colSpan={9} className="px-4 py-16 text-center text-sm text-red-500">
//                     {loadError}
//                   </td>
//                 </tr>
//               ) : paginatedCustomers.length === 0 ? (
//                 <tr>
//                   <td colSpan={9} className="px-4 py-20">
//                     <div className="flex flex-col items-center justify-center text-slate-400">
//                       <Users size={34} className="mb-3" />
//                       <p className="text-sm font-medium text-slate-500">No Customers Found</p>
//                       <p className="text-xs text-slate-400 mt-1">
//                         Try adjusting your search or filters
//                       </p>
//                     </div>
//                   </td>
//                 </tr>
//               ) : (
//                 paginatedCustomers.map((customer) => (
//                   <tr
//                     key={customer.id}
//                     className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60 transition"
//                   >
//                     <td className="px-4 py-3">
//                       <div className="w-10 h-10 flex items-center justify-center text-xl bg-slate-50 rounded-full">
//                         {customer.avatar}
//                       </div>
//                     </td>
//                     <td className="px-4 py-3">
//                       <div className="flex items-center gap-1.5">
//                         <p className="font-medium text-slate-700">{customer.name}</p>
//                         {isVIPCustomer(customer) && (
//                           <Star size={13} className="text-amber-400 fill-amber-400" />
//                         )}
//                       </div>
//                       <p className="text-xs text-slate-400">{customer.email}</p>
//                     </td>
//                     <td className="px-4 py-3 text-slate-500">{customer.customerCode}</td>
//                     <td className="px-4 py-3 text-slate-500">{customer.mobile}</td>
//                     <td className="px-4 py-3 text-slate-500">{customer.totalOrders}</td>
//                     <td className="px-4 py-3 font-medium text-slate-700">
//                       {formatCurrency(customer.totalSpent)}
//                     </td>
//                     <td className="px-4 py-3 text-slate-500">{customer.loyaltyPoints}</td>
//                     <td className="px-4 py-3">
//                       <StatusBadge status={customer.status} />
//                     </td>
//                     <td className="px-4 py-3">
//                       <div className="flex items-center justify-end gap-1.5">
//                         <button
//                           onClick={() => handleViewCustomer(customer)}
//                           title="View"
//                           className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition"
//                         >
//                           <Eye size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleEditCustomer(customer)}
//                           title="Edit"
//                           className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition"
//                         >
//                           <Pencil size={16} />
//                         </button>
//                         <button
//                           onClick={() => openDeleteModal(customer)}
//                           title="Delete"
//                           className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {!isLoading && filteredCustomers.length > 0 && (
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-slate-100">
//             <p className="text-xs text-slate-400">
//               Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}
//               {"–"}
//               {Math.min(currentPage * ITEMS_PER_PAGE, filteredCustomers.length)} of{" "}
//               {filteredCustomers.length} customers
//             </p>
//             <div className="flex items-center gap-1.5">
//               <button
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="flex items-center gap-1 px-2.5 py-2 rounded-lg border border-slate-200 text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition text-xs font-medium"
//               >
//                 <ChevronLeft size={15} /> Previous
//               </button>
//               <div className="hidden sm:flex items-center gap-1">
//                 {pageNumbers.map((page) => (
//                   <button
//                     key={page}
//                     onClick={() => handlePageChange(page)}
//                     className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium transition ${
//                       currentPage === page
//                         ? "bg-blue-600 text-white shadow-md shadow-blue-100"
//                         : "text-slate-500 hover:bg-slate-100"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 ))}
//               </div>
//               <span className="sm:hidden text-xs font-medium text-slate-600 px-2">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="flex items-center gap-1 px-2.5 py-2 rounded-lg border border-slate-200 text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition text-xs font-medium"
//               >
//                 Next <ChevronRight size={15} />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ============================= DELETE CONFIRMATION MODAL ============================= */}
//       {deleteTarget && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
//           <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl flex flex-col">
//             <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
//               <h3 className="font-semibold text-slate-800">Delete Customer</h3>
//               <button
//                 onClick={closeDeleteModal}
//                 className="text-slate-400 hover:text-slate-600 transition"
//               >
//                 <X size={18} />
//               </button>
//             </div>
//             <div className="px-6 py-5">
//               <div className="flex flex-col items-center text-center gap-2 py-2">
//                 <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-red-500">
//                   <Trash2 size={20} />
//                 </div>
//                 <p className="text-sm text-slate-600">
//                   Are you sure you want to delete{" "}
//                   <span className="font-semibold text-slate-800">{deleteTarget.name}</span>? This
//                   action cannot be undone.
//                 </p>
//               </div>
//             </div>
//             <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-2">
//               <button
//                 onClick={closeDeleteModal}
//                 className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmDelete}
//                 className="px-4 py-2 rounded-xl text-sm font-medium bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-100 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { Users, Plus, Search, Building2, Mail, Phone, MapPin, Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";

// const Customers = () => {
//   const [customers, setCustomers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [message, setMessage] = useState({ type: "", text: "" });

//   const [formData, setFormData] = useState({
//     company_name: "",
//     contact_person: "",
//     email: "",
//     phone: "",
//     billing_address: "",
//     shipping_address: "",
//     gstin: "",
//     place_of_supply: "Maharashtra(27)"
//   });

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/customers", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setCustomers(data);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setMessage({ type: "", text: "" });

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/customers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!res.ok) throw new Error("Failed to add customer");

//       const newCust = await res.json();
//       setCustomers((prev) => [newCust, ...prev]);
//       setShowModal(false);
//       setFormData({
//         company_name: "",
//         contact_person: "",
//         email: "",
//         phone: "",
//         billing_address: "",
//         shipping_address: "",
//         gstin: "",
//         place_of_supply: "Maharashtra(27)"
//       });
//     } catch (err) {
//       setMessage({ type: "error", text: err.message });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const filtered = customers.filter((c) =>
//     c.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     (c.contact_person && c.contact_person.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <Loader2 className="animate-spin text-blue-600" size={32} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
//       <div className="max-w-7xl mx-auto space-y-6">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//               <Users className="text-blue-600" /> B2B Client Directory
//             </h1>
//             <p className="text-gray-500 text-sm mt-1">Manage client profiles, GSTIN details, and billing addresses for invoicing.</p>
//           </div>
          
//           <button
//             onClick={() => setShowModal(true)}
//             className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-sm"
//           >
//             <Plus size={18} /> Add New Client
//           </button>
//         </div>

//         {/* Search */}
//         <div className="relative max-w-md">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//           <input
//             type="text"
//             placeholder="Search clients by company or contact person..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-sm"
//           />
//         </div>

//         {/* Client List Table */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm text-gray-500">
//               <thead className="bg-gray-50 text-xs text-gray-700 uppercase font-semibold border-b border-gray-100">
//                 <tr>
//                   <th className="px-6 py-4">Company / Name</th>
//                   <th className="px-6 py-4">Contact Person</th>
//                   <th className="px-6 py-4">GSTIN</th>
//                   <th className="px-6 py-4">Phone / Email</th>
//                   <th className="px-6 py-4">Place of Supply</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
//                       No client profiles found. Click "Add New Client" to create one.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((c) => (
//                     <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
//                       <td className="px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
//                         <Building2 size={16} className="text-gray-400" /> {c.company_name}
//                       </td>
//                       <td className="px-6 py-4">{c.contact_person || "-"}</td>
//                       <td className="px-6 py-4 uppercase font-mono text-xs">{c.gstin || "URP (Unregistered)"}</td>
//                       <td className="px-6 py-4 text-xs space-y-1">
//                         {c.phone && <div className="flex items-center gap-1"><Phone size={12} /> {c.phone}</div>}
//                         {c.email && <div className="flex items-center gap-1"><Mail size={12} /> {c.email}</div>}
//                       </td>
//                       <td className="px-6 py-4 text-xs font-medium text-blue-600">{c.place_of_supply || "N/A"}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Modal for Adding New Client */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//             <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
//               <div className="flex justify-between items-center border-b border-gray-100 pb-4">
//                 <h2 className="text-xl font-bold text-gray-900">Register New B2B Client</h2>
//                 <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-xl font-bold">&times;</button>
//               </div>

//               {message.text && (
//                 <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2">
//                   <AlertTriangle size={16} /> {message.text}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-700 mb-1">Company Name *</label>
//                     <input type="text" name="company_name" required value={formData.company_name} onChange={handleChange} className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-blue-400 text-sm" placeholder="Acme Corp Pvt Ltd" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Person</label>
//                     <input type="text" name="contact_person" value={formData.contact_person} onChange={handleChange} className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-blue-400 text-sm" placeholder="John Doe" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
//                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-blue-400 text-sm" placeholder="+91 98765 43210" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-blue-400 text-sm" placeholder="billing@acme.com" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-700 mb-1">GSTIN (Optional)</label>
//                     <input type="text" name="gstin" value={formData.gstin} onChange={handleChange} className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-blue-400 text-sm uppercase" placeholder="27AAAAA0000A1Z5" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-700 mb-1">Place of Supply</label>
//                     <input type="text" name="place_of_supply" value={formData.place_of_supply} onChange={handleChange} className="w-full h-11 px-3 border border-gray-200 rounded-lg outline-none focus:border-blue-400 text-sm" placeholder="Maharashtra(27)" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-xs font-semibold text-gray-700 mb-1">Billing Address *</label>
//                   <textarea name="billing_address" required value={formData.billing_address} onChange={handleChange} rows="2" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-blue-400 text-sm resize-none" placeholder="Full registered business address..."></textarea>
//                 </div>

//                 <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
//                   <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100">Cancel</button>
//                   <button type="submit" disabled={isSubmitting} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2">
//                     {isSubmitting && <Loader2 className="animate-spin" size={16} />} Save Client
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Customers;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Plus, Search, Building2, Mail, Phone, Loader2 } from "lucide-react";

const Customers = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8000/api/customers", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setCustomers(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filtered = customers.filter((c) =>
    c.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (c.contact_person && c.contact_person.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-blue-600" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          
          
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="text-blue-600" /> B2B Client Directory
            </h1>
            <p className="text-gray-500 text-sm mt-1">Manage client profiles, GSTIN details, and billing addresses for invoicing.</p>
          </div>
          
          <button
            onClick={() => navigate('/customers/new')}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-sm"
          >
            <Plus size={18} /> Add New Client
          </button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search clients by company or contact person..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-sm"
          />
        </div>

        {/* Client List Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="bg-gray-50 text-xs text-gray-700 uppercase font-semibold border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Company / Name</th>
                  <th className="px-6 py-4">Contact Person</th>
                  <th className="px-6 py-4">GSTIN</th>
                  <th className="px-6 py-4">Phone / Email</th>
                  <th className="px-6 py-4">Place of Supply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                      No client profiles found. Click "Add New Client" to create one.
                    </td>
                  </tr>
                ) : (
                  filtered.map((c) => (
                    <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
                        <Building2 size={16} className="text-gray-400" /> {c.company_name}
                      </td>
                      <td className="px-6 py-4">{c.contact_person || "-"}</td>
                      <td className="px-6 py-4 uppercase font-mono text-xs">{c.gstin || "URP (Unregistered)"}</td>
                      <td className="px-6 py-4 text-xs space-y-1">
                        {c.phone && <div className="flex items-center gap-1"><Phone size={12} /> {c.phone}</div>}
                        {c.email && <div className="flex items-center gap-1"><Mail size={12} /> {c.email}</div>}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-blue-600">{c.place_of_supply || "N/A"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Customers;