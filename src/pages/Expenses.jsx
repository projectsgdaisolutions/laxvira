// // import React, { useState } from 'react';
// // import { 
// //   Search, 
// //   Plus, 
// //   Filter, 
// //   MoreVertical, 
// //   TrendingUp, 
// //   TrendingDown,
// //   DollarSign,
// //   Megaphone,
// //   Briefcase,
// //   Package
// // } from 'lucide-react';
// // import { 
// //   BarChart, 
// //   Bar, 
// //   XAxis, 
// //   YAxis, 
// //   CartesianGrid, 
// //   Tooltip, 
// //   ResponsiveContainer,
// //   PieChart,
// //   Pie,
// //   Cell,
// //   Legend
// // } from 'recharts';

// // const Expenses = () => {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   // --- Mock Data ---

// //   // Bar Chart Data (Monthly Trend)
// //   const monthlyData = [
// //     { name: 'Jan', amount: 45000 },
// //     { name: 'Feb', amount: 52000 },
// //     { name: 'Mar', amount: 48000 },
// //     { name: 'Apr', amount: 61000 },
// //     { name: 'May', amount: 55000 },
// //     { name: 'Jun', amount: 67000 },
// //   ];

// //   // Pie Chart Data (Category Breakdown)
// //   const categoryData = [
// //     { name: 'Inventory', value: 45000, color: '#3b82f6' }, // blue-500
// //     { name: 'Payroll', value: 25000, color: '#10b981' },   // emerald-500
// //     { name: 'Marketing', value: 12000, color: '#f59e0b' }, // amber-500
// //     { name: 'Rent & Utilities', value: 15000, color: '#8b5cf6' }, // violet-500
// //     { name: 'Maintenance', value: 3000, color: '#ef4444' } // red-500
// //   ];

// //   // Table Data
// //   const recentExpenses = [
// //     { id: 'EXP-1042', date: '15 Jul 2026', category: 'Marketing', description: 'Facebook Local Geo-Ads (Diwali Promo)', amount: 4500.00, method: 'Credit Card', status: 'Cleared', badge: 'bg-amber-100 text-amber-700' },
// //     { id: 'EXP-1041', date: '14 Jul 2026', category: 'Inventory', description: 'Restock: FMCG Beverages from Rajesh Pvt Ltd', amount: 18500.00, method: 'Bank Transfer', status: 'Cleared', badge: 'bg-blue-100 text-blue-700' },
// //     { id: 'EXP-1040', date: '12 Jul 2026', category: 'Rent & Utilities', description: 'Electricity Bill - July', amount: 3200.00, method: 'Auto-Debit', status: 'Pending', badge: 'bg-violet-100 text-violet-700' },
// //     { id: 'EXP-1039', date: '01 Jul 2026', category: 'Payroll', description: 'Staff Salaries (June)', amount: 25000.00, method: 'Bank Transfer', status: 'Cleared', badge: 'bg-emerald-100 text-emerald-700' },
// //     { id: 'EXP-1038', date: '28 Jun 2026', category: 'Marketing', description: 'Flyer Printing (5000 pcs)', amount: 2100.00, method: 'Cash', status: 'Cleared', badge: 'bg-amber-100 text-amber-700' },
// //     { id: 'EXP-1037', date: '25 Jun 2026', category: 'Maintenance', description: 'AC Servicing & Gas Refill', amount: 1500.00, method: 'UPI', status: 'Cleared', badge: 'bg-red-100 text-red-700' },
// //   ];

// //   return (
// //     <div className="w-full pb-10">
      
// //       {/* Header Section */}
// //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
// //         <div>
// //           <h1 className="text-2xl font-bold text-slate-900">Expenses</h1>
// //           <p className="text-sm text-slate-500 mt-1">Track and manage your store's operational expenditures.</p>
// //         </div>
// //         <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm whitespace-nowrap">
// //           <Plus className="w-4 h-4 mr-2" />
// //           Record Expense
// //         </button>
// //       </div>

// //       {/* KPI Cards */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
// //         {/* KPI 1 */}
// //         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
// //               <DollarSign className="w-5 h-5" />
// //             </div>
// //             <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
// //               <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
// //             </span>
// //           </div>
// //           <p className="text-sm font-medium text-slate-500">Total Expenses (MTD)</p>
// //           <h3 className="text-2xl font-bold text-slate-900 mt-1">₹67,000.00</h3>
// //         </div>

// //         {/* KPI 2 */}
// //         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
// //               <Megaphone className="w-5 h-5" />
// //             </div>
// //             <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
// //               <TrendingDown className="w-3 h-3 mr-1" /> -2.4%
// //             </span>
// //           </div>
// //           <p className="text-sm font-medium text-slate-500">Marketing Spend</p>
// //           <h3 className="text-2xl font-bold text-slate-900 mt-1">₹6,600.00</h3>
// //         </div>

// //         {/* KPI 3 */}
// //         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
// //               <Briefcase className="w-5 h-5" />
// //             </div>
// //             <span className="flex items-center text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
// //               Flat
// //             </span>
// //           </div>
// //           <p className="text-sm font-medium text-slate-500">Payroll (Fixed)</p>
// //           <h3 className="text-2xl font-bold text-slate-900 mt-1">₹25,000.00</h3>
// //         </div>

// //         {/* KPI 4 */}
// //         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600">
// //               <Package className="w-5 h-5" />
// //             </div>
// //             <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
// //               <TrendingUp className="w-3 h-3 mr-1" /> +8.1%
// //             </span>
// //           </div>
// //           <p className="text-sm font-medium text-slate-500">Inventory Purchases</p>
// //           <h3 className="text-2xl font-bold text-slate-900 mt-1">₹28,500.00</h3>
// //         </div>
// //       </div>

// //       {/* Charts Section */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
// //         {/* Bar Chart (Takes up 2 columns on large screens) */}
// //         <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
// //           <div className="mb-6">
// //             <h3 className="text-lg font-bold text-slate-900">Monthly Expense Trends</h3>
// //             <p className="text-sm text-slate-500">Compare total operational outflow over the last 6 months.</p>
// //           </div>
// //           <div className="h-[300px] w-full">
// //             <ResponsiveContainer width="100%" height="100%">
// //               <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
// //                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
// //                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
// //                 <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(value) => `₹${value / 1000}k`} />
// //                 <Tooltip 
// //                   cursor={{ fill: '#f1f5f9' }} 
// //                   contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
// //                   formatter={(value) => [`₹${value.toLocaleString()}`, 'Expenses']}
// //                 />
// //                 <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>
// //         </div>

// //         {/* Pie Chart (Takes up 1 column) */}
// //         <div className="lg:col-span-1 bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
// //           <div className="mb-2">
// //             <h3 className="text-lg font-bold text-slate-900">Expense Breakdown</h3>
// //             <p className="text-sm text-slate-500">Current month by category.</p>
// //           </div>
// //           <div className="flex-1 min-h-[250px] w-full flex items-center justify-center relative">
// //             <ResponsiveContainer width="100%" height="100%">
// //               <PieChart>
// //                 <Pie
// //                   data={categoryData}
// //                   cx="50%"
// //                   cy="50%"
// //                   innerRadius={60}
// //                   outerRadius={80}
// //                   paddingAngle={5}
// //                   dataKey="value"
// //                 >
// //                   {categoryData.map((entry, index) => (
// //                     <Cell key={`cell-${index}`} fill={entry.color} />
// //                   ))}
// //                 </Pie>
// //                 <Tooltip 
// //                   formatter={(value) => `₹${value.toLocaleString()}`}
// //                   contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
// //                 />
// //               </PieChart>
// //             </ResponsiveContainer>
// //             {/* Center Text for Donut */}
// //             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
// //               <span className="text-xs text-slate-500 font-medium">Total</span>
// //               <span className="text-lg font-bold text-slate-900">100K</span>
// //             </div>
// //           </div>
// //           {/* Custom Legend */}
// //           <div className="grid grid-cols-2 gap-x-2 gap-y-3 mt-4">
// //             {categoryData.map((cat, idx) => (
// //               <div key={idx} className="flex items-center text-xs">
// //                 <span className="w-3 h-3 rounded-full mr-2 shrink-0" style={{ backgroundColor: cat.color }}></span>
// //                 <span className="text-slate-600 truncate" title={cat.name}>{cat.name}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //       </div>

// //       {/* Data Table: Recent Expenses */}
// //       <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        
// //         {/* Table Toolbar */}
// //         <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
// //           <h3 className="font-bold text-slate-900">Recent Transactions</h3>
// //           <div className="flex gap-3 w-full sm:w-auto">
// //             <div className="relative flex-1 sm:w-64">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <Search className="h-4 w-4 text-slate-400" />
// //               </div>
// //               <input
// //                 type="text"
// //                 placeholder="Search description, ID..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="block w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm outline-none"
// //               />
// //             </div>
// //             <button className="flex items-center px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
// //               <Filter className="w-4 h-4 mr-2" />
// //               Filter
// //             </button>
// //           </div>
// //         </div>

// //         <div className="overflow-x-auto">
// //           <table className="w-full text-sm text-left">
// //             <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
// //               <tr>
// //                 <th className="px-6 py-4">Expense ID</th>
// //                 <th className="px-6 py-4">Date</th>
// //                 <th className="px-6 py-4">Category</th>
// //                 <th className="px-6 py-4 w-1/3">Description</th>
// //                 <th className="px-6 py-4 text-right">Amount</th>
// //                 <th className="px-6 py-4 text-center">Status</th>
// //                 <th className="px-6 py-4 text-center">Action</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-slate-200">
// //               {recentExpenses.map((exp, index) => (
// //                 <tr key={index} className="hover:bg-slate-50/50 transition-colors">
// //                   <td className="px-6 py-4 font-medium text-slate-900">{exp.id}</td>
// //                   <td className="px-6 py-4 text-slate-600">{exp.date}</td>
// //                   <td className="px-6 py-4">
// //                     <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${exp.badge}`}>
// //                       {exp.category}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 text-slate-600 truncate max-w-[200px]" title={exp.description}>
// //                     {exp.description}
// //                   </td>
// //                   <td className="px-6 py-4 font-bold text-slate-900 text-right">
// //                     ₹{exp.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
// //                   </td>
// //                   <td className="px-6 py-4 text-center">
// //                     <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${exp.status === 'Cleared' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
// //                       {exp.status === 'Cleared' && <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1.5"></span>}
// //                       {exp.status}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 text-center">
// //                     <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
// //                       <MoreVertical className="w-5 h-5" />
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
        
// //         {/* Pagination Footer */}
// //         <div className="p-4 border-t border-slate-200 flex justify-between items-center text-sm text-slate-500">
// //           <span>Showing 1 to 6 of 42 expenses</span>
// //           <div className="flex gap-1">
// //             <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-50" disabled>Prev</button>
// //             <button className="px-3 py-1 border border-slate-300 rounded bg-blue-50 text-blue-600 font-medium border-blue-200">1</button>
// //             <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50">2</button>
// //             <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50">3</button>
// //             <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50">Next</button>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Expenses;

// import React, { useState, useEffect } from 'react';
// import { Search, Plus, Loader2, AlertTriangle, Wallet, CreditCard, X, Calendar } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Expenses = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [error, setError] = useState(null);

//   // Modal State
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   // Form State
//   const [vendorName, setVendorName] = useState('');
//   const [category, setCategory] = useState('Software/IT');
//   const [amount, setAmount] = useState('');
//   const [expenseDate, setExpenseDate] = useState(new Date().toISOString().split('T')[0]);
//   const [paymentMethod, setPaymentMethod] = useState('Bank Transfer');
//   const [notes, setNotes] = useState('');

//   const fetchExpenses = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch('http://localhost:8000/api/expenses', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error('Failed to fetch expenses');
//       const data = await res.json();
//       setExpenses(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   const handleSaveExpense = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const token = localStorage.getItem('token');
//       const payload = {
//         vendor_name: vendorName,
//         category,
//         amount: parseFloat(amount),
//         date: new Date(expenseDate).toISOString(),
//         payment_method: paymentMethod,
//         notes
//       };

//       const res = await fetch('http://localhost:8000/api/expenses', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//         body: JSON.stringify(payload)
//       });

//       if (!res.ok) throw new Error('Failed to save expense');
      
//       setIsModalOpen(false);
      
//       // Reset form
//       setVendorName('');
//       setAmount('');
//       setNotes('');
      
//       await fetchExpenses();
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  
//   const formatDate = (isoString) => {
//     if (!isoString) return "N/A";
//     const d = new Date(isoString);
//     return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
//   };

//   const filteredExpenses = expenses.filter(exp => 
//     exp.vendor_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     exp.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalExpenses = expenses.reduce((acc, exp) => acc + exp.amount, 0);

//   if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-blue-600" size={32} /></div>;

//   return (
//     <div className="w-full pb-10 bg-slate-50 min-h-screen p-4 sm:p-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
//               <Wallet className="text-indigo-600" /> Expenses & Bills
//             </h1>
//             <p className="text-sm text-slate-500 mt-1">Track company outflows and vendor payments</p>
//           </div>
//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
//           >
//             <Plus className="w-4 h-4 mr-2" /> Record Expense
//           </button>
//         </div>

//         {/* Metrics Summary */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
//             <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
//               <CreditCard size={24} />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-slate-500">Total Outflow</p>
//               <h3 className="text-2xl font-black text-slate-900">{formatCurrency(totalExpenses)}</h3>
//             </div>
//           </div>
//           {/* Add more metric cards here if needed (e.g., "This Month", "Top Category") */}
//         </div>

//         {/* Search & Table */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
//           <div className="p-4 border-b border-slate-200">
//             <div className="relative w-full max-w-md">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search by vendor or category..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 text-sm"
//               />
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
//                 <tr>
//                   <th className="px-6 py-4">Date</th>
//                   <th className="px-6 py-4">Vendor / Payee</th>
//                   <th className="px-6 py-4">Category</th>
//                   <th className="px-6 py-4">Payment Method</th>
//                   <th className="px-6 py-4 text-right">Amount</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100">
//                 {filteredExpenses.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="px-6 py-12 text-center text-slate-400">No expenses recorded yet.</td>
//                   </tr>
//                 ) : (
//                   filteredExpenses.map((exp) => (
//                     <tr key={exp.id} className="hover:bg-slate-50/50">
//                       <td className="px-6 py-4 text-slate-500 flex items-center gap-2">
//                         <Calendar size={14} /> {formatDate(exp.date)}
//                       </td>
//                       <td className="px-6 py-4 font-bold text-slate-900">{exp.vendor_name}</td>
//                       <td className="px-6 py-4">
//                         <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium">
//                           {exp.category}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-slate-600">{exp.payment_method}</td>
//                       <td className="px-6 py-4 text-right font-bold text-slate-900">{formatCurrency(exp.amount)}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Expense Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//             <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
//               <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
//                 <h3 className="font-bold text-slate-800">Record New Expense</h3>
//                 <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
//                   <X size={20} />
//                 </button>
//               </div>
              
//               <form onSubmit={handleSaveExpense} className="p-6 space-y-4">
//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 mb-1">Vendor / Payee *</label>
//                   <input type="text" required value={vendorName} onChange={(e) => setVendorName(e.target.value)} className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 mb-1">Category *</label>
//                     <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
//                       <option value="Software/IT">Software / IT</option>
//                       <option value="Rent/Lease">Rent / Lease</option>
//                       <option value="Salaries">Salaries</option>
//                       <option value="Marketing">Marketing</option>
//                       <option value="Office Supplies">Office Supplies</option>
//                       <option value="Travel">Travel</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 mb-1">Amount (₹) *</label>
//                     <input type="number" step="0.01" required value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 mb-1">Date *</label>
//                     <input type="date" required value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)} className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 mb-1">Payment Mode</label>
//                     <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none bg-white">
//                       <option value="Bank Transfer">Bank Transfer</option>
//                       <option value="UPI">UPI</option>
//                       <option value="Credit Card">Credit Card</option>
//                       <option value="Cash">Cash</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 mb-1">Notes</label>
//                   <input type="text" placeholder="Optional description..." value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
//                 </div>

//                 <div className="pt-4 flex gap-3">
//                   <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">Cancel</button>
//                   <button type="submit" disabled={isSubmitting} className="flex-1 px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors flex justify-center items-center">
//                     {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : "Save Expense"}
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

// export default Expenses;

// import React, { useState, useEffect } from 'react';
// import { Search, Plus, Loader2, AlertTriangle, Wallet, CreditCard, Calendar } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Expenses = () => {
//   const navigate = useNavigate();
//   const [expenses, setExpenses] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [error, setError] = useState(null);

//   const fetchExpenses = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch('http://localhost:8000/api/expenses', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error('Failed to fetch expenses');
//       const data = await res.json();
//       setExpenses(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  
//   const formatDate = (isoString) => {
//     if (!isoString) return "N/A";
//     const d = new Date(isoString);
//     return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
//   };

//   // const filteredExpenses = expenses.filter(exp => 
//   //   exp.vendor_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   //   exp.category.toLowerCase().includes(searchQuery.toLowerCase())
//   // );

//   const filteredExpenses = expenses.filter((expense) => {
//   const query = (searchQuery || "").toLowerCase();
  
//   // Using fallback empty strings prevents the crash if the property is null
//   const description = (expense.description || "").toLowerCase();
//   const category = (expense.category || "").toLowerCase();

//   return description.includes(query) || category.includes(query);
// });

//   const totalExpenses = expenses.reduce((acc, exp) => acc + exp.amount, 0);

//   if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-blue-600" size={32} /></div>;

//   return (
//     <div className="w-full pb-10 bg-slate-50 min-h-screen p-4 sm:p-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
//               <Wallet className="text-indigo-600" /> Expenses & Bills
//             </h1>
//             <p className="text-sm text-slate-500 mt-1">Track company outflows and vendor payments</p>
//           </div>
          
//           {/* Changed this button to navigate instead of open a modal */}
//           <button 
//             onClick={() => navigate('/create-expense')}
//             className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
//           >
//             <Plus className="w-4 h-4 mr-2" /> Record Expense
//           </button>
//         </div>

//         {/* Metrics Summary */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
//             <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
//               <CreditCard size={24} />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-slate-500">Total Outflow</p>
//               <h3 className="text-2xl font-black text-slate-900">{formatCurrency(totalExpenses)}</h3>
//             </div>
//           </div>
//         </div>

//         {/* Search & Table */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
//           <div className="p-4 border-b border-slate-200">
//             <div className="relative w-full max-w-md">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search by vendor or category..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 text-sm"
//               />
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
//                 <tr>
//                   <th className="px-6 py-4">Date</th>
//                   <th className="px-6 py-4">Vendor / Payee</th>
//                   <th className="px-6 py-4">Category</th>
//                   <th className="px-6 py-4">Payment Method</th>
//                   <th className="px-6 py-4 text-right">Amount</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100">
//                 {filteredExpenses.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="px-6 py-12 text-center text-slate-400">No expenses recorded yet.</td>
//                   </tr>
//                 ) : (
//                   filteredExpenses.map((exp) => (
//                     <tr key={exp.id} className="hover:bg-slate-50/50">
//                       <td className="px-6 py-4 text-slate-500 flex items-center gap-2">
//                         <Calendar size={14} /> {formatDate(exp.date)}
//                       </td>
//                       <td className="px-6 py-4 font-bold text-slate-900">{exp.vendor_name}</td>
//                       <td className="px-6 py-4">
//                         <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium">
//                           {exp.category}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-slate-600">{exp.payment_method}</td>
//                       <td className="px-6 py-4 text-right font-bold text-slate-900">{formatCurrency(exp.amount)}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Expenses;

import React, { useState, useEffect } from 'react';
import { Search, Plus, Loader2, Wallet, CreditCard, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Expenses = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchExpenses = async () => {
    try {
      const token = localStorage.getItem('token');
      // FIXED: Added trailing slash
      const res = await fetch('http://localhost:8000/api/expenses/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch expenses');
      const data = await res.json();
      setExpenses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  
  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    const d = new Date(isoString);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  // FIXED: Filter checks vendor_name and category safely
  const filteredExpenses = expenses.filter((expense) => {
    const query = (searchQuery || "").toLowerCase();
    
    const vendor = (expense.vendor_name || "").toLowerCase();
    const category = (expense.category || "").toLowerCase();

    return vendor.includes(query) || category.includes(query);
  });

  // FIXED: Reduce calculates safely, accounting for grand_total mapped key
  const totalExpenses = expenses.reduce((acc, exp) => acc + (parseFloat(exp.grand_total || exp.amount || 0)), 0);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-blue-600" size={32} /></div>;

  return (
    <div className="w-full pb-10 bg-slate-50 min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Wallet className="text-indigo-600" /> Expenses & Bills
            </h1>
            <p className="text-sm text-slate-500 mt-1">Track company outflows and vendor payments</p>
          </div>
          
          <button 
            onClick={() => navigate('/create-expense')}
            className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4 mr-2" /> Record Expense
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Outflow</p>
              <h3 className="text-2xl font-black text-slate-900">{formatCurrency(totalExpenses)}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by vendor or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 text-sm"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Vendor / Payee</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Payment Method</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredExpenses.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-slate-400">No expenses recorded yet.</td>
                  </tr>
                ) : (
                  filteredExpenses.map((exp) => (
                    <tr key={exp.id || Math.random()} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 text-slate-500 flex items-center gap-2">
                        {/* FIXED: Reading purchase_date explicitly if backend leaves it untouched */}
                        <Calendar size={14} /> {formatDate(exp.purchase_date || exp.date)}
                      </td>
                      {/* FIXED: Added fallbacks preventing undefined crashes */}
                      <td className="px-6 py-4 font-bold text-slate-900">{exp.vendor_name || 'Unknown Vendor'}</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium">
                          {exp.category || 'Uncategorized'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{exp.payment_method || 'N/A'}</td>
                      <td className="px-6 py-4 text-right font-bold text-slate-900">{formatCurrency(exp.grand_total || exp.amount)}</td>
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

export default Expenses;