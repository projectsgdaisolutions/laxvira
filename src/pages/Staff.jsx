// // // import React, { useState } from 'react';
// // // import { Search, Plus, MoreVertical, X, Filter, ShieldCheck } from 'lucide-react';

// // // const Staff = () => {
// // //   const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
// // //   const [searchTerm, setSearchTerm] = useState('');
  
// // //   // Mock data based on the design
// // //   const [staffMembers, setStaffMembers] = useState([
// // //     { id: 1, name: 'Rakesh Sharma', title: 'Store Owner', role: 'Admin', phone: '8251567381', status: 'Active', joined: '1 Jan 2025' },
// // //     { id: 2, name: 'Neha Ptil', title: 'Branch Manager', role: 'Manager', phone: '8251567381', status: 'Active', joined: '1 Jan 2025' },
// // //     { id: 3, name: 'Neha Ptil', title: 'Cashier', role: 'Cashier', phone: '8251567381', status: 'Active', joined: '1 Jan 2025' },
// // //     { id: 4, name: 'Neha Ptil', title: 'Branch Manager', role: 'Manager', phone: '8251567381', status: 'Active', joined: '1 Jan 2025' },
// // //     { id: 5, name: 'Neha Ptil', title: 'Cashier', role: 'Cashier', phone: '8251567381', status: 'Active', joined: '1 Jan 2025' },
// // //     { id: 6, name: 'Neha Ptil', title: 'Cashier', role: 'Cashier', phone: '8251567381', status: 'Active', joined: '1 Jan 2025' },
// // //   ]);

// // //   const getRoleBadgeStyle = (role) => {
// // //     switch (role) {
// // //       case 'Admin': return 'bg-blue-100 text-blue-700';
// // //       case 'Manager': return 'bg-emerald-100 text-emerald-700';
// // //       case 'Cashier': return 'bg-amber-100 text-amber-700';
// // //       default: return 'bg-gray-100 text-gray-700';
// // //     }
// // //   };

// // //   return (
// // //     <div className="relative w-full pb-10">
      
// // //       {/* Header Section */}
// // //       <div className="mb-6">
// // //         <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
// // //         <p className="text-sm text-slate-500 mt-1">Manage your store staff and their access permissions</p>
// // //       </div>

// // //       {/* Action Bar */}
// // //       <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
// // //         <div className="flex w-full sm:w-auto gap-4 flex-1">
// // //           <div className="relative w-full sm:max-w-md">
// // //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //               <Search className="h-5 w-5 text-slate-400" />
// // //             </div>
// // //             <input
// // //               type="text"
// // //               placeholder="Search by name, number or email..."
// // //               value={searchTerm}
// // //               onChange={(e) => setSearchTerm(e.target.value)}
// // //               className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
// // //             />
// // //           </div>
          
// // //           <div className="relative w-full sm:max-w-[180px]">
// // //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //               <Filter className="h-4 w-4 text-slate-400" />
// // //             </div>
// // //             <select className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 sm:text-sm appearance-none bg-white">
// // //               <option value="">Filter by role</option>
// // //               <option value="Admin">Admin</option>
// // //               <option value="Manager">Manager</option>
// // //               <option value="Cashier">Cashier</option>
// // //             </select>
// // //           </div>
// // //         </div>

// // //         <button 
// // //           onClick={() => setIsAddStaffOpen(true)}
// // //           className="w-full sm:w-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
// // //         >
// // //           <Plus className="w-4 h-4 mr-2" />
// // //           Add Staff
// // //         </button>
// // //       </div>

// // //       {/* Data Table */}
// // //       <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
// // //         <div className="overflow-x-auto">
// // //           <table className="w-full text-sm text-left">
// // //             <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
// // //               <tr>
// // //                 <th className="px-6 py-4">Staff Member</th>
// // //                 <th className="px-6 py-4">Role</th>
// // //                 <th className="px-6 py-4">Phone</th>
// // //                 <th className="px-6 py-4">Status</th>
// // //                 <th className="px-6 py-4">Joined on</th>
// // //                 <th className="px-6 py-4 text-center">Action</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="divide-y divide-slate-200">
// // //               {staffMembers.map((staff) => (
// // //                 <tr key={staff.id} className="hover:bg-slate-50/50 transition-colors">
// // //                   <td className="px-6 py-4">
// // //                     <p className="font-bold text-slate-900">{staff.name}</p>
// // //                     <p className="text-xs text-slate-500 mt-0.5">{staff.title}</p>
// // //                   </td>
// // //                   <td className="px-6 py-4">
// // //                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getRoleBadgeStyle(staff.role)}`}>
// // //                       {staff.role}
// // //                     </span>
// // //                   </td>
// // //                   <td className="px-6 py-4 text-slate-600 font-medium">{staff.phone}</td>
// // //                   <td className="px-6 py-4">
// // //                     <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
// // //                       <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1.5"></span>
// // //                       {staff.status}
// // //                     </span>
// // //                   </td>
// // //                   <td className="px-6 py-4 text-slate-500">{staff.joined}</td>
// // //                   <td className="px-6 py-4 text-center">
// // //                     <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
// // //                       <MoreVertical className="w-5 h-5" />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         {/* Pagination & Footer */}
// // //         <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
// // //           <span className="text-sm text-slate-500">Showing 1 to 6 of 6 staff members</span>
// // //           <div className="flex items-center bg-blue-600 text-white rounded-lg overflow-hidden">
// // //             <button className="px-4 py-2 hover:bg-blue-700 transition-colors font-medium">-</button>
// // //             <span className="px-4 py-2 font-medium border-x border-blue-500">0</span>
// // //             <button className="px-4 py-2 hover:bg-blue-700 transition-colors font-medium">+</button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Permissions Banner */}
// // //       <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 flex justify-between items-center">
// // //         <div className="flex items-center text-slate-600 text-sm">
// // //           <ShieldCheck className="w-4 h-4 text-blue-600 mr-2" />
// // //           Staff members can only access features based on their role and permissions
// // //         </div>
// // //         <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
// // //           Manage Permissions
// // //         </button>
// // //       </div>

// // //       {/* --- ADD STAFF SLIDE-OVER MODAL --- */}
// // //       {isAddStaffOpen && (
// // //         <>
// // //           {/* Backdrop */}
// // //           <div 
// // //             className="fixed inset-0 bg-slate-900/40 z-40 transition-opacity"
// // //             onClick={() => setIsAddStaffOpen(false)}
// // //           />
          
// // //           {/* Slide-over Panel */}
// // //           <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            
// // //             <div className="flex justify-between items-center p-6 border-b border-slate-200">
// // //               <h2 className="text-xl font-bold text-slate-900">Add New Staff</h2>
// // //               <button 
// // //                 onClick={() => setIsAddStaffOpen(false)}
// // //                 className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
// // //               >
// // //                 <X className="w-5 h-5" />
// // //               </button>
// // //             </div>

// // //             <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
// // //               {/* Step 1: Role */}
// // //               <div>
// // //                 <div className="flex items-center mb-1">
// // //                   <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">1</div>
// // //                   <h3 className="font-bold text-slate-900">Choose Role</h3>
// // //                 </div>
// // //                 <p className="text-xs text-slate-500 mb-3 ml-7">Select the role to set permission</p>
// // //                 <div className="ml-7">
// // //                   <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
// // //                   <select className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none">
// // //                     <option>Select role</option>
// // //                     <option>Admin</option>
// // //                     <option>Manager</option>
// // //                     <option>Cashier</option>
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               {/* Step 2: Details */}
// // //               <div>
// // //                 <div className="flex items-center mb-4">
// // //                   <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">2</div>
// // //                   <h3 className="font-bold text-slate-900">Staff Details</h3>
// // //                 </div>
// // //                 <div className="ml-7 space-y-4">
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
// // //                     <input 
// // //                       type="text" 
// // //                       placeholder="Enter Full Name" 
// // //                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
// // //                     <input 
// // //                       type="tel" 
// // //                       placeholder="+91" 
// // //                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Step 3: Credentials */}
// // //               <div>
// // //                 <div className="flex items-center mb-4">
// // //                   <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">3</div>
// // //                   <h3 className="font-bold text-slate-900">Login Credentials</h3>
// // //                 </div>
// // //                 <div className="ml-7 space-y-4">
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
// // //                     <input 
// // //                       type="password" 
// // //                       placeholder="Enter Password" 
// // //                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
// // //                     <input 
// // //                       type="password" 
// // //                       placeholder="Confirm Password" 
// // //                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //             </div>

// // //             {/* Modal Footer Actions */}
// // //             <div className="p-6 border-t border-slate-200 bg-slate-50 flex gap-4">
// // //               <button 
// // //                 onClick={() => setIsAddStaffOpen(false)}
// // //                 className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-lg font-bold transition-colors"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors shadow-sm">
// // //                 Add Staff
// // //               </button>
// // //             </div>

// // //           </div>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Staff;

// // //updated
// // import React, { useState } from 'react';
// // import { Search, Plus, MoreVertical, X, Filter, ShieldCheck } from 'lucide-react';

// // const Staff = () => {
// //   const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  
// //   // --- Data & Filtering State ---
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [filterRole, setFilterRole] = useState('');
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [openActionId, setOpenActionId] = useState(null); // Tracks which row's action menu is open
  
// //   // Mock data 
// //   const [staffMembers, setStaffMembers] = useState([
// //     { id: 1, name: 'Rakesh Sharma', title: 'Store Owner', role: 'Admin', phone: '8251567381', email: 'rakesh@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
// //     { id: 2, name: 'Neha Ptil', title: 'Branch Manager', role: 'Manager', phone: '8251567382', email: 'neha1@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
// //     { id: 3, name: 'Neha Ptil', title: 'Cashier', role: 'Cashier', phone: '8251567383', email: 'neha2@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
// //     { id: 4, name: 'Neha Ptil', title: 'Branch Manager', role: 'Manager', phone: '8251567384', email: 'neha3@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
// //     { id: 5, name: 'Neha Ptil', title: 'Cashier', role: 'Cashier', phone: '8251567385', email: 'neha4@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
// //     { id: 6, name: 'Neha Ptil', title: 'Cashier', role: 'Cashier', phone: '8251567386', email: 'neha5@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
// //   ]);

// //   // --- Derived State (Search & Filter Logic) ---
// //   const filteredStaff = staffMembers.filter((staff) => {
// //     const searchLower = searchTerm.toLowerCase();
// //     const matchesSearch = 
// //       staff.name.toLowerCase().includes(searchLower) ||
// //       staff.phone.includes(searchTerm) ||
// //       (staff.email && staff.email.toLowerCase().includes(searchLower));
      
// //     const matchesRole = filterRole === '' || staff.role === filterRole;
    
// //     return matchesSearch && matchesRole;
// //   });

// //   // --- Handlers ---
// //   const handleRemoveStaff = (id) => {
// //     setStaffMembers(prev => prev.filter(staff => staff.id !== id));
// //     setOpenActionId(null);
// //   };

// //   const handleAccessUpdate = (id) => {
// //     // In a real app, this would open an edit modal or navigate to permissions
// //     alert(`Trigger access update flow for Staff ID: ${id}`);
// //     setOpenActionId(null);
// //   };

// //   const toggleActionMenu = (id) => {
// //     setOpenActionId(prevId => prevId === id ? null : id);
// //   };

// //   const getRoleBadgeStyle = (role) => {
// //     switch (role) {
// //       case 'Admin': return 'bg-blue-100 text-blue-700';
// //       case 'Manager': return 'bg-emerald-100 text-emerald-700';
// //       case 'Cashier': return 'bg-amber-100 text-amber-700';
// //       default: return 'bg-gray-100 text-gray-700';
// //     }
// //   };

// //   return (
// //     <div className="relative w-full pb-10">
      
// //       {/* Header Section */}
// //       <div className="mb-6">
// //         <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
// //         <p className="text-sm text-slate-500 mt-1">Manage your store staff and their access permissions</p>
// //       </div>

// //       {/* Action Bar */}
// //       <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
// //         <div className="flex w-full sm:w-auto gap-4 flex-1">
// //           <div className="relative w-full sm:max-w-md">
// //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //               <Search className="h-5 w-5 text-slate-400" />
// //             </div>
// //             <input
// //               type="text"
// //               placeholder="Search by name, number or email..."
// //               value={searchTerm}
// //               onChange={(e) => {
// //                 setSearchTerm(e.target.value);
// //                 setCurrentPage(1); // Reset page on search
// //               }}
// //               className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
// //             />
// //           </div>
          
// //           <div className="relative w-full sm:max-w-[180px]">
// //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //               <Filter className="h-4 w-4 text-slate-400" />
// //             </div>
// //             <select 
// //               value={filterRole}
// //               onChange={(e) => {
// //                 setFilterRole(e.target.value);
// //                 setCurrentPage(1); // Reset page on filter change
// //               }}
// //               className="block w-full pl-10 pr-8 py-2.5 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 sm:text-sm appearance-none bg-white"
// //             >
// //               <option value="">All Roles</option>
// //               <option value="Admin">Admin</option>
// //               <option value="Manager">Manager</option>
// //               <option value="Cashier">Cashier</option>
// //             </select>
// //           </div>
// //         </div>

// //         <button 
// //           onClick={() => setIsAddStaffOpen(true)}
// //           className="w-full sm:w-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
// //         >
// //           <Plus className="w-4 h-4 mr-2" />
// //           Add Staff
// //         </button>
// //       </div>

// //       {/* Data Table */}
// //       <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
// //         <div className="overflow-x-auto min-h-[300px]">
// //           <table className="w-full text-sm text-left">
// //             <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
// //               <tr>
// //                 <th className="px-6 py-4">Staff Member</th>
// //                 <th className="px-6 py-4">Role</th>
// //                 <th className="px-6 py-4">Phone</th>
// //                 <th className="px-6 py-4">Status</th>
// //                 <th className="px-6 py-4">Joined on</th>
// //                 <th className="px-6 py-4 text-center">Action</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-slate-200">
// //               {filteredStaff.length === 0 ? (
// //                 <tr>
// //                   <td colSpan="6" className="px-6 py-10 text-center text-slate-500">
// //                     No staff members found matching your search criteria.
// //                   </td>
// //                 </tr>
// //               ) : (
// //                 filteredStaff.map((staff) => (
// //                   <tr key={staff.id} className="hover:bg-slate-50/50 transition-colors">
// //                     <td className="px-6 py-4">
// //                       <p className="font-bold text-slate-900">{staff.name}</p>
// //                       <p className="text-xs text-slate-500 mt-0.5">{staff.title}</p>
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getRoleBadgeStyle(staff.role)}`}>
// //                         {staff.role}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-slate-600 font-medium">{staff.phone}</td>
// //                     <td className="px-6 py-4">
// //                       <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
// //                         <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1.5"></span>
// //                         {staff.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-slate-500">{staff.joined}</td>
// //                     <td className="px-6 py-4 text-center">
                      
// //                       {/* Dropdown Container */}
// //                       <div className="relative inline-block text-left">
// //                         <button 
// //                           onClick={() => toggleActionMenu(staff.id)}
// //                           className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
// //                         >
// //                           <MoreVertical className="w-5 h-5" />
// //                         </button>

// //                         {/* Dropdown Menu */}
// //                         {openActionId === staff.id && (
// //                           <>
// //                             {/* Invisible overlay to close dropdown when clicking outside */}
// //                             <div 
// //                               className="fixed inset-0 z-10" 
// //                               onClick={() => setOpenActionId(null)}
// //                             ></div>
                            
// //                             <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 py-1">
// //                               <button
// //                                 onClick={() => handleAccessUpdate(staff.id)}
// //                                 className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
// //                               >
// //                                 Access Update
// //                               </button>
// //                               <button
// //                                 onClick={() => handleRemoveStaff(staff.id)}
// //                                 className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
// //                               >
// //                                 Remove
// //                               </button>
// //                             </div>
// //                           </>
// //                         )}
// //                       </div>

// //                     </td>
// //                   </tr>
// //                 ))
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination & Footer */}
// //         <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
// //           <span className="text-sm text-slate-500">
// //             Showing {filteredStaff.length > 0 ? 1 : 0} to {filteredStaff.length} of {staffMembers.length} staff members
// //           </span>
// //           <div className="flex items-center bg-blue-600 text-white rounded-lg overflow-hidden">
// //             <button 
// //               onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
// //               className="px-4 py-2 hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
// //               disabled={currentPage === 1}
// //             >
// //               -
// //             </button>
// //             <span className="px-4 py-2 font-medium border-x border-blue-500 bg-blue-600">{currentPage}</span>
// //             <button 
// //               onClick={() => setCurrentPage(currentPage + 1)}
// //               className="px-4 py-2 hover:bg-blue-700 transition-colors font-medium"
// //             >
// //               +
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Permissions Banner */}
// //       <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 flex justify-between items-center">
// //         <div className="flex items-center text-slate-600 text-sm">
// //           <ShieldCheck className="w-4 h-4 text-blue-600 mr-2" />
// //           Staff members can only access features based on their role and permissions
// //         </div>
// //         <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
// //           Manage Permissions
// //         </button>
// //       </div>

// //       {/* --- ADD STAFF SLIDE-OVER MODAL (Remains Unchanged) --- */}
// //       {isAddStaffOpen && (
// //         <>
// //           <div 
// //             className="fixed inset-0 bg-slate-900/40 z-40 transition-opacity"
// //             onClick={() => setIsAddStaffOpen(false)}
// //           />
// //           <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
// //             <div className="flex justify-between items-center p-6 border-b border-slate-200">
// //               <h2 className="text-xl font-bold text-slate-900">Add New Staff</h2>
// //               <button 
// //                 onClick={() => setIsAddStaffOpen(false)}
// //                 className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
// //               >
// //                 <X className="w-5 h-5" />
// //               </button>
// //             </div>

// //             <div className="flex-1 overflow-y-auto p-6 space-y-8">
// //               {/* Step 1: Role */}
// //               <div>
// //                 <div className="flex items-center mb-1">
// //                   <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">1</div>
// //                   <h3 className="font-bold text-slate-900">Choose Role</h3>
// //                 </div>
// //                 <p className="text-xs text-slate-500 mb-3 ml-7">Select the role to set permission</p>
// //                 <div className="ml-7">
// //                   <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
// //                   <select className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none">
// //                     <option>Select role</option>
// //                     <option>Admin</option>
// //                     <option>Manager</option>
// //                     <option>Cashier</option>
// //                   </select>
// //                 </div>
// //               </div>

// //               {/* Step 2: Details */}
// //               <div>
// //                 <div className="flex items-center mb-4">
// //                   <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">2</div>
// //                   <h3 className="font-bold text-slate-900">Staff Details</h3>
// //                 </div>
// //                 <div className="ml-7 space-y-4">
// //                   <div>
// //                     <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
// //                     <input 
// //                       type="text" 
// //                       placeholder="Enter Full Name" 
// //                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
// //                     <input 
// //                       type="tel" 
// //                       placeholder="+91" 
// //                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Step 3: Credentials */}
// //               <div>
// //                 <div className="flex items-center mb-4">
// //                   <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">3</div>
// //                   <h3 className="font-bold text-slate-900">Login Credentials</h3>
// //                 </div>
// //                 <div className="ml-7 space-y-4">
// //                   <div>
// //                     <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
// //                     <input 
// //                       type="password" 
// //                       placeholder="Enter Password" 
// //                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
// //                     <input 
// //                       type="password" 
// //                       placeholder="Confirm Password" 
// //                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="p-6 border-t border-slate-200 bg-slate-50 flex gap-4">
// //               <button 
// //                 onClick={() => setIsAddStaffOpen(false)}
// //                 className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-lg font-bold transition-colors"
// //               >
// //                 Cancel
// //               </button>
// //               <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors shadow-sm">
// //                 Add Staff
// //               </button>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default Staff;

// //2nd update
// import React, { useState } from 'react';
// import { Search, Plus, MoreVertical, X, Filter, ShieldCheck } from 'lucide-react';

// const Staff = () => {
//   const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  
//   // --- Data & Filtering State ---
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterRole, setFilterRole] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [openActionId, setOpenActionId] = useState(null);
  
//   // --- New Staff Form State ---
//   const [newStaff, setNewStaff] = useState({
//     role: '',
//     fullName: '',
//     phone: '',
//     password: '',
//     confirmPassword: ''
//   });

//   // Mock data 
//   const [staffMembers, setStaffMembers] = useState([
//     { id: 1, name: 'Rakesh Sharma', title: 'Store Owner', role: 'Admin', phone: '8251567381', email: 'rakesh@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
//     { id: 2, name: 'Neha Ptil', title: 'Branch Manager', role: 'Manager', phone: '8251567382', email: 'neha1@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
//     { id: 3, name: 'Neha Ptil', title: 'Cashier', role: 'Cashier', phone: '8251567383', email: 'neha2@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
//     { id: 4, name: 'Neha Ptil', title: 'Branch Manager', role: 'Manager', phone: '8251567384', email: 'neha3@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
//     { id: 5, name: 'Neha Ptil', title: 'Cashier', role: 'Cashier', phone: '8251567385', email: 'neha4@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
//     { id: 6, name: 'Neha Ptil', title: 'Cashier', role: 'Cashier', phone: '8251567386', email: 'neha5@gdbilling.com', status: 'Active', joined: '1 Jan 2025' },
//   ]);

//   // --- Derived State ---
//   const filteredStaff = staffMembers.filter((staff) => {
//     const searchLower = searchTerm.toLowerCase();
//     const matchesSearch = 
//       staff.name.toLowerCase().includes(searchLower) ||
//       staff.phone.includes(searchTerm) ||
//       (staff.email && staff.email.toLowerCase().includes(searchLower));
      
//     const matchesRole = filterRole === '' || staff.role === filterRole;
    
//     return matchesSearch && matchesRole;
//   });

//   // --- Handlers ---
//   const handleRemoveStaff = (id) => {
//     setStaffMembers(prev => prev.filter(staff => staff.id !== id));
//     setOpenActionId(null);
//   };

//   const handleAccessUpdate = (id) => {
//     alert(`Trigger access update flow for Staff ID: ${id}`);
//     setOpenActionId(null);
//   };

//   const toggleActionMenu = (id) => {
//     setOpenActionId(prevId => prevId === id ? null : id);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewStaff(prev => ({ ...prev, [name]: value }));
//   };

//   const handleAddStaffSubmit = () => {
//     const { role, fullName, phone, password, confirmPassword } = newStaff;

//     // 1. Validation Checks
//     if (!role || role === 'Select role' || !fullName || !phone || !password || !confirmPassword) {
//       alert("Please fill in all fields before adding staff.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     // 2. Mock Backend Insertion
//     const newId = staffMembers.length > 0 ? Math.max(...staffMembers.map(s => s.id)) + 1 : 1;
//     const titleMap = { 'Admin': 'Store Owner', 'Manager': 'Branch Manager', 'Cashier': 'Cashier' };
    
//     const newMember = {
//       id: newId,
//       name: fullName,
//       title: titleMap[role] || role,
//       role: role,
//       phone: phone,
//       email: `${fullName.split(' ')[0].toLowerCase()}@gdbilling.com`,
//       status: 'Active',
//       joined: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
//     };

//     setStaffMembers([...staffMembers, newMember]);

//     // 3. Success & Cleanup
//     alert("Success! Staff member added.");
//     setIsAddStaffOpen(false);
//     setNewStaff({ role: '', fullName: '', phone: '', password: '', confirmPassword: '' }); // Reset form
//   };

//   const getRoleBadgeStyle = (role) => {
//     switch (role) {
//       case 'Admin': return 'bg-blue-100 text-blue-700';
//       case 'Manager': return 'bg-emerald-100 text-emerald-700';
//       case 'Cashier': return 'bg-amber-100 text-amber-700';
//       default: return 'bg-gray-100 text-gray-700';
//     }
//   };

//   return (
//     <div className="relative w-full pb-10">
      
//       {/* Header Section */}
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
//         <p className="text-sm text-slate-500 mt-1">Manage your store staff and their access permissions</p>
//       </div>

//       {/* Action Bar */}
//       <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
//         <div className="flex w-full sm:w-auto gap-4 flex-1">
//           <div className="relative w-full sm:max-w-md">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search className="h-5 w-5 text-slate-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search by name, number or email..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1); 
//               }}
//               className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
//             />
//           </div>
          
//           <div className="relative w-full sm:max-w-[180px]">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Filter className="h-4 w-4 text-slate-400" />
//             </div>
//             <select 
//               value={filterRole}
//               onChange={(e) => {
//                 setFilterRole(e.target.value);
//                 setCurrentPage(1); 
//               }}
//               className="block w-full pl-10 pr-8 py-2.5 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 sm:text-sm appearance-none bg-white"
//             >
//               <option value="">All Roles</option>
//               <option value="Admin">Admin</option>
//               <option value="Manager">Manager</option>
//               <option value="Cashier">Cashier</option>
//             </select>
//           </div>
//         </div>

//         <button 
//           onClick={() => setIsAddStaffOpen(true)}
//           className="w-full sm:w-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Add Staff
//         </button>
//       </div>

//       {/* Data Table */}
//       <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
//         <div className="overflow-x-auto min-h-[300px]">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
//               <tr>
//                 <th className="px-6 py-4">Staff Member</th>
//                 <th className="px-6 py-4">Role</th>
//                 <th className="px-6 py-4">Phone</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4">Joined on</th>
//                 <th className="px-6 py-4 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200">
//               {filteredStaff.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="px-6 py-10 text-center text-slate-500">
//                     No staff members found matching your search criteria.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredStaff.map((staff) => (
//                   <tr key={staff.id} className="hover:bg-slate-50/50 transition-colors">
//                     <td className="px-6 py-4">
//                       <p className="font-bold text-slate-900">{staff.name}</p>
//                       <p className="text-xs text-slate-500 mt-0.5">{staff.title}</p>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getRoleBadgeStyle(staff.role)}`}>
//                         {staff.role}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-slate-600 font-medium">{staff.phone}</td>
//                     <td className="px-6 py-4">
//                       <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
//                         <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1.5"></span>
//                         {staff.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-slate-500">{staff.joined}</td>
//                     <td className="px-6 py-4 text-center">
                      
//                       {/* Dropdown Container */}
//                       <div className="relative inline-block text-left">
//                         <button 
//                           onClick={() => toggleActionMenu(staff.id)}
//                           className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
//                         >
//                           <MoreVertical className="w-5 h-5" />
//                         </button>

//                         {/* Dropdown Menu */}
//                         {openActionId === staff.id && (
//                           <>
//                             <div 
//                               className="fixed inset-0 z-10" 
//                               onClick={() => setOpenActionId(null)}
//                             ></div>
                            
//                             <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 py-1">
//                               <button
//                                 onClick={() => handleAccessUpdate(staff.id)}
//                                 className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
//                               >
//                                 Access Update
//                               </button>
//                               <button
//                                 onClick={() => handleRemoveStaff(staff.id)}
//                                 className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
//                               >
//                                 Remove
//                               </button>
//                             </div>
//                           </>
//                         )}
//                       </div>

//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination & Footer */}
//         <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <span className="text-sm text-slate-500">
//             Showing {filteredStaff.length > 0 ? 1 : 0} to {filteredStaff.length} of {staffMembers.length} staff members
//           </span>
//           <div className="flex items-center bg-blue-600 text-white rounded-lg overflow-hidden">
//             <button 
//               onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//               className="px-4 py-2 hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
//               disabled={currentPage === 1}
//             >
//               -
//             </button>
//             <span className="px-4 py-2 font-medium border-x border-blue-500 bg-blue-600">{currentPage}</span>
//             <button 
//               onClick={() => setCurrentPage(currentPage + 1)}
//               className="px-4 py-2 hover:bg-blue-700 transition-colors font-medium"
//             >
//               +
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Permissions Banner */}
//       <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 flex justify-between items-center">
//         <div className="flex items-center text-slate-600 text-sm">
//           <ShieldCheck className="w-4 h-4 text-blue-600 mr-2" />
//           Staff members can only access features based on their role and permissions
//         </div>
//         <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
//           Manage Permissions
//         </button>
//       </div>

//       {/* --- ADD STAFF SLIDE-OVER MODAL --- */}
//       {isAddStaffOpen && (
//         <>
//           <div 
//             className="fixed inset-0 bg-slate-900/40 z-40 transition-opacity"
//             onClick={() => setIsAddStaffOpen(false)}
//           />
//           <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
//             <div className="flex justify-between items-center p-6 border-b border-slate-200">
//               <h2 className="text-xl font-bold text-slate-900">Add New Staff</h2>
//               <button 
//                 onClick={() => setIsAddStaffOpen(false)}
//                 className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-6 space-y-8">
//               {/* Step 1: Role */}
//               <div>
//                 <div className="flex items-center mb-1">
//                   <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">1</div>
//                   <h3 className="font-bold text-slate-900">Choose Role</h3>
//                 </div>
//                 <p className="text-xs text-slate-500 mb-3 ml-7">Select the role to set permission</p>
//                 <div className="ml-7">
//                   <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
//                   <select 
//                     name="role"
//                     value={newStaff.role}
//                     onChange={handleInputChange}
//                     className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
//                   >
//                     <option value="">Select role</option>
//                     <option value="Admin">Admin</option>
//                     <option value="Manager">Manager</option>
//                     <option value="Cashier">Cashier</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Step 2: Details */}
//               <div>
//                 <div className="flex items-center mb-4">
//                   <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">2</div>
//                   <h3 className="font-bold text-slate-900">Staff Details</h3>
//                 </div>
//                 <div className="ml-7 space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
//                     <input 
//                       type="text" 
//                       name="fullName"
//                       value={newStaff.fullName}
//                       onChange={handleInputChange}
//                       placeholder="Enter Full Name" 
//                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
//                     <input 
//                       type="tel" 
//                       name="phone"
//                       value={newStaff.phone}
//                       onChange={handleInputChange}
//                       placeholder="+91" 
//                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 3: Credentials */}
//               <div>
//                 <div className="flex items-center mb-4">
//                   <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs mr-2">3</div>
//                   <h3 className="font-bold text-slate-900">Login Credentials</h3>
//                 </div>
//                 <div className="ml-7 space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
//                     <input 
//                       type="password" 
//                       name="password"
//                       value={newStaff.password}
//                       onChange={handleInputChange}
//                       placeholder="Enter Password" 
//                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
//                     <input 
//                       type="password" 
//                       name="confirmPassword"
//                       value={newStaff.confirmPassword}
//                       onChange={handleInputChange}
//                       placeholder="Confirm Password" 
//                       className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 border-t border-slate-200 bg-slate-50 flex gap-4">
//               <button 
//                 onClick={() => setIsAddStaffOpen(false)}
//                 className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-lg font-bold transition-colors"
//               >
//                 Cancel
//               </button>
//               <button 
//                 onClick={handleAddStaffSubmit}
//                 className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors shadow-sm"
//               >
//                 Add Staff
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Staff;

import React, { useState, useEffect } from "react";
import { 
  Users, UserPlus, Mail, Lock, Shield, 
  Loader2, AlertTriangle, CheckCircle2, BadgeCheck
} from "lucide-react";

const Staff = () => {
  const [staffList, setStaffList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tenant_role: "CASHIER"
  });

  const fetchStaff = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8000/api/store/staff", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to load staff directory or unauthorized.");
      const data = await res.json();
      setStaffList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8000/api/store/staff", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      
      if (!res.ok) throw new Error(data.detail || "Failed to create staff member.");

      setSuccess(`Successfully provisioned ${formData.name} as a ${formData.tenant_role}.`);
      setFormData({ name: "", email: "", password: "", tenant_role: "CASHIER" });
      setShowForm(false);
      fetchStaff(); // Refresh the table
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
            <Users className="text-indigo-600" /> Team Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">Provision access and assign operational roles to your employees.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center gap-2"
        >
          <UserPlus size={16} /> {showForm ? "Cancel" : "Add Employee"}
        </button>
      </div>

      {/* Feedback Messages */}
      {error && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-3 text-rose-700 text-sm font-semibold">
          <AlertTriangle size={18} /> {error}
        </div>
      )}
      {success && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-700 text-sm font-semibold">
          <CheckCircle2 size={18} /> {success}
        </div>
      )}

      {/* Provisioning Form (Toggled) */}
      {showForm && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Create New IAM User</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
              <div className="relative">
                <Users size={16} className="absolute left-3 top-3 text-slate-400" />
                <input 
                  type="text" required name="name" value={formData.name} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Employee Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-3 text-slate-400" />
                <input 
                  type="email" required name="email" value={formData.email} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  placeholder="employee@store.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Temporary Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-3 text-slate-400" />
                <input 
                  type="password" required name="password" minLength={6} value={formData.password} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Min 6 characters"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Access Role</label>
              <div className="relative">
                <Shield size={16} className="absolute left-3 top-3 text-slate-400 z-10" />
                <select 
                  name="tenant_role" required value={formData.tenant_role} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="CASHIER">Cashier / Sales</option>
                  <option value="MANAGER">Store Manager</option>
                  <option value="INVENTORY">Inventory & Logistics</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-4 flex justify-end mt-2">
              <button 
                type="submit" disabled={isSubmitting}
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Shield size={16} />}
                Provision Credentials
              </button>
            </div>

          </form>
        </div>
      )}

      {/* Staff Directory Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h2 className="text-base font-bold text-slate-800">Active Directory</h2>
          <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">
            {staffList.length} Members
          </span>
        </div>

        {isLoading ? (
          <div className="p-12 flex justify-center"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] uppercase tracking-widest text-slate-500 font-bold border-b border-slate-200">
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Assigned Role</th>
                  <th className="px-6 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {staffList.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-12 text-center text-slate-500 text-sm font-medium">
                      No staff members provisioned yet.
                    </td>
                  </tr>
                ) : (
                  staffList.map((staff) => (
                    <tr key={staff.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                            {staff.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-bold text-slate-800 text-sm">{staff.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">{staff.email}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase border ${
                          staff.tenant_role === 'MANAGER' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                          staff.tenant_role === 'INVENTORY' ? 'bg-cyan-50 text-cyan-700 border-cyan-200' :
                          'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}>
                          <BadgeCheck size={12} /> {staff.tenant_role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                          staff.is_active ? 'text-emerald-600' : 'text-rose-600'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${staff.is_active ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                          {staff.is_active ? 'Active' : 'Disabled'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Staff;