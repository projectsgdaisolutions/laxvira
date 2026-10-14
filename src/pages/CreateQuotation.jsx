// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Plus, Trash2, Save, FileText, Loader2, AlertTriangle, User } from "lucide-react";

// // // const CreateQuotation = () => {
// // //   const navigate = useNavigate();
// // //   const [customers, setCustomers] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   // Document State
// // //   const [customerId, setCustomerId] = useState("");
// // //   const [validUntil, setValidUntil] = useState("");
// // //   const [notes, setNotes] = useState("Looking forward to your business.");
// // //   const [terms, setTerms] = useState("1. Validity: 15 Days\n2. Payment: 100% Advance");

// // //   // Line Items State
// // //   const [items, setItems] = useState([
// // //     { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }
// // //   ]);

// // //   // Fetch Customers on Mount
// // //   useEffect(() => {
// // //     const fetchClients = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         const res = await fetch("http://localhost:8000/api/customers", {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
// // //         if (!res.ok) throw new Error("Failed to load clients");
// // //         const data = await res.json();
// // //         setCustomers(data);
// // //       } catch (err) {
// // //         setError(err.message);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };
// // //     fetchClients();
// // //   }, []);

// // //   // --- Calculations ---
// // //   const calculateTotals = () => {
// // //     let subtotal = 0;
// // //     let tax_total = 0;

// // //     const processedItems = items.map(item => {
// // //       const amount = item.quantity * item.rate;
// // //       const taxAmount = (amount * item.tax_rate) / 100;
// // //       const totalAmount = amount + taxAmount;
      
// // //       subtotal += amount;
// // //       tax_total += taxAmount;

// // //       return {
// // //         ...item,
// // //         tax_amount: taxAmount,
// // //         total_amount: totalAmount
// // //       };
// // //     });

// // //     return {
// // //       processedItems,
// // //       subtotal,
// // //       tax_total,
// // //       grand_total: subtotal + tax_total
// // //     };
// // //   };

// // //   const totals = calculateTotals();

// // //   // --- Handlers ---
// // //   const handleItemChange = (index, field, value) => {
// // //     const newItems = [...items];
// // //     newItems[index][field] = field === "name" || field === "hsn_sac_code" ? value : parseFloat(value) || 0;
// // //     setItems(newItems);
// // //   };

// // //   const addLineItem = () => {
// // //     setItems([...items, { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }]);
// // //   };

// // //   const removeLineItem = (index) => {
// // //     if (items.length > 1) {
// // //       setItems(items.filter((_, i) => i !== index));
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!customerId) {
// // //       setError("Please select a client.");
// // //       return;
// // //     }

// // //     setIsSubmitting(true);
// // //     setError(null);

// // //     const payload = {
// // //       customer_id: parseInt(customerId),
// // //       valid_until: validUntil ? new Date(validUntil).toISOString() : null,
// // //       subtotal: totals.subtotal,
// // //       discount_total: 0, // Hardcoded for this phase
// // //       tax_total: totals.tax_total,
// // //       grand_total: totals.grand_total,
// // //       terms_conditions: terms,
// // //       notes: notes,
// // //       items: totals.processedItems
// // //     };

// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const res = await fetch("http://localhost:8000/api/quotations", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify(payload)
// // //       });

// // //       if (!res.ok) throw new Error("Failed to generate quotation");
      
// // //       // Navigate to a list page (we will build this next)
// // //       navigate("/quotations");
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   if (isLoading) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // //         <Loader2 className="animate-spin text-blue-600" size={32} />
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
// // //       <div className="max-w-6xl mx-auto space-y-6">
        
// // //         {/* Header */}
// // //         <div className="flex justify-between items-center">
// // //           <div>
// // //             <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// // //               <FileText className="text-blue-600" /> Create Quotation
// // //             </h1>
// // //             <p className="text-gray-500 text-sm mt-1">Generate a new B2B estimate for your clients.</p>
// // //           </div>
// // //         </div>

// // //         {error && (
// // //           <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// // //             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// // //             <p className="text-sm font-medium">{error}</p>
// // //           </div>
// // //         )}

// // //         <form onSubmit={handleSubmit} className="space-y-6">
          
// // //           {/* Top Section: Client & Meta */}
// // //           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             <div>
// // //               <label className="block text-sm font-semibold text-gray-700 mb-2">Select Client *</label>
// // //               <div className="flex items-center border border-gray-200 rounded-xl px-3 h-12 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
// // //                 <User size={18} className="text-gray-400 mr-2" />
// // //                 <select 
// // //                   required
// // //                   value={customerId} 
// // //                   onChange={(e) => setCustomerId(e.target.value)}
// // //                   className="w-full bg-transparent outline-none text-sm text-gray-700"
// // //                 >
// // //                   <option value="">-- Choose a Client --</option>
// // //                   {customers.map(c => (
// // //                     <option key={c.id} value={c.id}>{c.company_name}</option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             </div>
// // //             <div>
// // //               <label className="block text-sm font-semibold text-gray-700 mb-2">Valid Until</label>
// // //               <input 
// // //                 type="date" 
// // //                 value={validUntil}
// // //                 onChange={(e) => setValidUntil(e.target.value)}
// // //                 className="w-full h-12 px-4 border border-gray-200 rounded-xl outline-none focus:border-blue-400 text-sm bg-gray-50 focus:bg-white" 
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* Line Items Table */}
// // //           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full text-left text-sm">
// // //                 <thead className="bg-gray-50 text-xs text-gray-700 uppercase font-semibold border-b border-gray-100">
// // //                   <tr>
// // //                     <th className="px-6 py-4 min-w-[250px]">Item Description</th>
// // //                     <th className="px-4 py-4 w-32">HSN/SAC</th>
// // //                     <th className="px-4 py-4 w-24">Qty</th>
// // //                     <th className="px-4 py-4 w-32">Rate (₹)</th>
// // //                     <th className="px-4 py-4 w-28">Tax %</th>
// // //                     <th className="px-4 py-4 text-right w-32">Amount</th>
// // //                     <th className="px-4 py-4 w-12"></th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody className="divide-y divide-gray-100">
// // //                   {items.map((item, index) => (
// // //                     <tr key={index} className="hover:bg-gray-50/50">
// // //                       <td className="p-2">
// // //                         <input type="text" required value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} placeholder="e.g. Web Development" className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-400" />
// // //                       </td>
// // //                       <td className="p-2">
// // //                         <input type="text" value={item.hsn_sac_code} onChange={(e) => handleItemChange(index, "hsn_sac_code", e.target.value)} placeholder="998311" className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-400" />
// // //                       </td>
// // //                       <td className="p-2">
// // //                         <input type="number" min="0.1" step="0.1" required value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-400" />
// // //                       </td>
// // //                       <td className="p-2">
// // //                         <input type="number" min="0" step="0.01" required value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-400" />
// // //                       </td>
// // //                       <td className="p-2">
// // //                         <select value={item.tax_rate} onChange={(e) => handleItemChange(index, "tax_rate", e.target.value)} className="w-full p-2 border border-gray-200 rounded outline-none focus:border-blue-400 bg-white">
// // //                           <option value="0">0%</option>
// // //                           <option value="5">5%</option>
// // //                           <option value="12">12%</option>
// // //                           <option value="18">18%</option>
// // //                           <option value="28">28%</option>
// // //                         </select>
// // //                       </td>
// // //                       <td className="p-2 text-right font-medium text-gray-900 pr-4">
// // //                         ₹{(item.quantity * item.rate).toFixed(2)}
// // //                       </td>
// // //                       <td className="p-2 text-center">
// // //                         <button type="button" onClick={() => removeLineItem(index)} className="text-red-400 hover:text-red-600 p-1">
// // //                           <Trash2 size={18} />
// // //                         </button>
// // //                       </td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //             <div className="p-4 border-t border-gray-100">
// // //               <button type="button" onClick={addLineItem} className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
// // //                 <Plus size={16} /> Add Line Item
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Footer Section: Totals & Notes */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //             <div className="space-y-4">
// // //               <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-2">Customer Notes</label>
// // //                 <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows="3" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-400 text-sm resize-none"></textarea>
// // //               </div>
// // //               <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-2">Terms & Conditions</label>
// // //                 <textarea value={terms} onChange={(e) => setTerms(e.target.value)} rows="3" className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-400 text-sm resize-none"></textarea>
// // //               </div>
// // //             </div>

// // //             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
// // //               <div className="space-y-3 text-sm text-gray-600">
// // //                 <div className="flex justify-between">
// // //                   <span>Subtotal</span>
// // //                   <span className="font-medium text-gray-900">₹{totals.subtotal.toFixed(2)}</span>
// // //                 </div>
// // //                 <div className="flex justify-between">
// // //                   <span>Total Tax</span>
// // //                   <span className="font-medium text-gray-900">₹{totals.tax_total.toFixed(2)}</span>
// // //                 </div>
// // //                 <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
// // //                   <span className="text-lg font-bold text-gray-900">Grand Total</span>
// // //                   <span className="text-xl font-bold text-blue-600">₹{totals.grand_total.toFixed(2)}</span>
// // //                 </div>
// // //               </div>

// // //               <button type="submit" disabled={isSubmitting} className="w-full mt-6 flex items-center justify-center gap-2 h-12 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50">
// // //                 {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
// // //                 Save Quotation
// // //               </button>
// // //             </div>
// // //           </div>

// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CreateQuotation;

// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Plus, Trash2, Save, Loader2, AlertTriangle, Pencil, Image as ImageIcon, ChevronDown, Paperclip, Phone, FileText, Mail } from "lucide-react";

// // // const CreateQuotation = () => {
// // //   const navigate = useNavigate();
// // //   const [customers, setCustomers] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   // Document State
// // //   const [customerId, setCustomerId] = useState("");
// // //   const [validUntil, setValidUntil] = useState("");
// // //   const [notes, setNotes] = useState("Looking forward to your business.");
// // //   const [terms, setTerms] = useState("1. Validity: 15 Days\n2. Payment: 100% Advance");

// // //   // Line Items State
// // //   const [items, setItems] = useState([
// // //     { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }
// // //   ]);

// // //   // Fetch Customers on Mount
// // //   useEffect(() => {
// // //     const fetchClients = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         const res = await fetch("http://localhost:8000/api/customers", {
// // //           headers: { Authorization: `Bearer ${token}` }
// // //         });
// // //         if (!res.ok) throw new Error("Failed to load clients");
// // //         const data = await res.json();
// // //         setCustomers(data);
// // //       } catch (err) {
// // //         setError(err.message);
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     };
// // //     fetchClients();
// // //   }, []);

// // //   // --- Calculations ---
// // //   const calculateTotals = () => {
// // //     let subtotal = 0;
// // //     let tax_total = 0;

// // //     const processedItems = items.map(item => {
// // //       const amount = item.quantity * item.rate;
// // //       const taxAmount = (amount * item.tax_rate) / 100;
// // //       const totalAmount = amount + taxAmount;
      
// // //       subtotal += amount;
// // //       tax_total += taxAmount;

// // //       return {
// // //         ...item,
// // //         tax_amount: taxAmount,
// // //         total_amount: totalAmount
// // //       };
// // //     });

// // //     return {
// // //       processedItems,
// // //       subtotal,
// // //       tax_total,
// // //       grand_total: subtotal + tax_total
// // //     };
// // //   };

// // //   const totals = calculateTotals();

// // //   // --- Handlers ---
// // //   const handleItemChange = (index, field, value) => {
// // //     const newItems = [...items];
// // //     newItems[index][field] = field === "name" || field === "hsn_sac_code" ? value : parseFloat(value) || 0;
// // //     setItems(newItems);
// // //   };

// // //   const addLineItem = () => {
// // //     setItems([...items, { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }]);
// // //   };

// // //   const removeLineItem = (index) => {
// // //     if (items.length > 1) {
// // //       setItems(items.filter((_, i) => i !== index));
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!customerId) {
// // //       setError("Please select a client.");
// // //       return;
// // //     }

// // //     setIsSubmitting(true);
// // //     setError(null);

// // //     const payload = {
// // //       customer_id: parseInt(customerId),
// // //       valid_until: validUntil ? new Date(validUntil).toISOString() : null,
// // //       subtotal: totals.subtotal,
// // //       discount_total: 0,
// // //       tax_total: totals.tax_total,
// // //       grand_total: totals.grand_total,
// // //       terms_conditions: terms,
// // //       notes: notes,
// // //       items: totals.processedItems
// // //     };

// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const res = await fetch("http://localhost:8000/api/quotations", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify(payload)
// // //       });

// // //       if (!res.ok) throw new Error("Failed to generate quotation");
      
// // //       navigate("/quotations");
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   // Derived state for UI population
// // //   const selectedCustomerData = customers.find(c => c.id === parseInt(customerId));

// // //   if (isLoading) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // //         <Loader2 className="animate-spin text-[#db2777]" size={32} />
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 font-sans">
// // //       <div className="max-w-[1000px] mx-auto bg-white shadow-md border border-gray-200 rounded-sm p-8 sm:p-12">
        
// // //         {error && (
// // //           <div className="mb-6 p-4 rounded bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// // //             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// // //             <p className="text-sm font-medium">{error}</p>
// // //           </div>
// // //         )}

// // //         <form onSubmit={handleSubmit}>
          
// // //           {/* Header Section */}
// // //           <div className="flex flex-col items-center mb-10">
// // //             <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2 border-b-2 border-dashed border-gray-400 pb-1">
// // //               Quotation <Pencil size={18} className="text-gray-400" />
// // //             </h1>
// // //           </div>

// // //           {/* Meta & Logo Section */}
// // //           <div className="flex justify-between items-start mb-10">
// // //             <div className="space-y-4 w-72">
// // //               <div className="flex items-center justify-between border-b border-gray-200 pb-1">
// // //                 <span className="text-sm font-semibold text-gray-700">Quotation No*</span>
// // //                 <input type="text" defaultValue="Auto-generated" disabled className="text-sm text-right bg-transparent outline-none text-gray-500 w-32" />
// // //               </div>
// // //               <div className="flex items-center justify-between border-b border-gray-200 pb-1">
// // //                 <span className="text-sm font-semibold text-gray-700">Quotation Date*</span>
// // //                 <span className="text-sm text-gray-900 text-right w-32">Aug 08, 2026</span>
// // //               </div>
// // //               <div className="flex items-center justify-between border-b border-gray-200 pb-1">
// // //                 <span className="text-sm font-semibold text-gray-700 flex items-center text-purple-600 cursor-pointer">
// // //                   <Plus size={14} className="mr-1" /> Add due date
// // //                 </span>
// // //                 <input 
// // //                   type="date" 
// // //                   value={validUntil}
// // //                   onChange={(e) => setValidUntil(e.target.value)}
// // //                   className="text-sm text-right bg-transparent outline-none text-gray-700 w-36" 
// // //                 />
// // //               </div>
// // //               <div className="pt-2">
// // //                 <span className="text-sm font-semibold text-purple-600 flex items-center cursor-pointer">
// // //                   <Plus size={14} className="mr-1" /> Add Custom Fields
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             <div className="w-48 h-32 border-2 border-dashed border-purple-200 bg-purple-50/30 rounded flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-purple-50 transition-colors">
// // //               <ImageIcon size={24} className="text-purple-400 mb-2" />
// // //               <span className="text-xs text-gray-500">Add Business Logo<br/>Resolution up to 1080x1080px. PNG or JPEG file.</span>
// // //             </div>
// // //           </div>

// // //           {/* Details Section */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
// // //             {/* Your Details (Mocked for visual parity) */}
// // //             <div className="bg-gray-50/50 rounded-lg p-5 border border-gray-100">
// // //               <h3 className="text-sm font-semibold text-gray-500 mb-4">Your Details</h3>
// // //               <div className="space-y-3">
// // //                 <div className="border border-gray-300 bg-white rounded p-2 flex justify-between items-center text-sm">
// // //                   <span>India</span> <ChevronDown size={16} className="text-gray-400" />
// // //                 </div>
// // //                 <input type="text" disabled value="Your Store Name" className="w-full border border-gray-300 bg-gray-100 rounded p-2 text-sm outline-none" />
// // //                 <div className="border border-gray-300 bg-white rounded p-2 text-sm flex items-center">
// // //                   <span className="text-lg mr-2">🇮🇳</span> <span className="text-gray-500 mr-2">+91</span>
// // //                   <input type="text" disabled placeholder="Phone" className="outline-none bg-transparent w-full" />
// // //                 </div>
// // //                 <input type="text" disabled placeholder="Your GSTIN (optional)" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none" />
// // //                 <input type="text" disabled placeholder="Address (optional)" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none" />
// // //                 <div className="flex gap-3">
// // //                   <input type="text" disabled placeholder="City (optional)" className="w-1/2 border border-gray-300 bg-white rounded p-2 text-sm outline-none" />
// // //                   <input type="text" disabled placeholder="Postal Code" className="w-1/2 border border-gray-300 bg-white rounded p-2 text-sm outline-none" />
// // //                 </div>
// // //                 <div className="flex gap-4 pt-2">
// // //                   <span className="text-xs text-purple-600 flex items-center"><Mail size={12} className="mr-1"/> Add Email</span>
// // //                   <span className="text-xs text-purple-600 flex items-center"><Plus size={12} className="mr-1"/> Add PAN</span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Client Details */}
// // //             <div className="bg-gray-50/50 rounded-lg p-5 border border-gray-100">
// // //               <h3 className="text-sm font-semibold text-gray-500 mb-4">Client's Details</h3>
// // //               <div className="space-y-3">
// // //                 <div className="border border-gray-300 bg-white rounded p-2 flex justify-between items-center text-sm">
// // //                   <span>India</span> <ChevronDown size={16} className="text-gray-400" />
// // //                 </div>
                
// // //                 <select 
// // //                   required
// // //                   value={customerId} 
// // //                   onChange={(e) => setCustomerId(e.target.value)}
// // //                   className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500"
// // //                 >
// // //                   <option value="">Client's Business Name (required)</option>
// // //                   {customers.map(c => (
// // //                     <option key={c.id} value={c.id}>{c.company_name}</option>
// // //                   ))}
// // //                 </select>

// // //                 <div className="border border-gray-300 bg-white rounded p-2 text-sm flex items-center">
// // //                   <span className="text-lg mr-2">🇮🇳</span> <span className="text-gray-500 mr-2">+91</span>
// // //                   <input type="text" readOnly value={selectedCustomerData?.phone || ""} placeholder="Phone" className="outline-none bg-transparent w-full text-gray-700" />
// // //                 </div>
                
// // //                 <input type="text" readOnly value={selectedCustomerData?.gstin || ""} placeholder="Client's GSTIN (optional)" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none text-gray-700" />
// // //                 <input type="text" readOnly value={selectedCustomerData?.billing_address || ""} placeholder="Address (optional)" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none text-gray-700" />
                
// // //                 <div className="flex gap-3">
// // //                   <input type="text" placeholder="City (optional)" className="w-1/2 border border-gray-300 bg-white rounded p-2 text-sm outline-none" />
// // //                   <input type="text" placeholder="Postal Code" className="w-1/2 border border-gray-300 bg-white rounded p-2 text-sm outline-none" />
// // //                 </div>
                
// // //                 <div className="flex gap-4 pt-2">
// // //                   <span className="text-xs text-purple-600 flex items-center"><Mail size={12} className="mr-1"/> Add Email</span>
// // //                   <span className="text-xs text-purple-600 flex items-center"><Plus size={12} className="mr-1"/> Add PAN</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Table Header Controls */}
// // //           <div className="flex justify-between items-end mb-2">
// // //             <label className="flex items-center text-sm text-gray-700 cursor-pointer">
// // //               <input type="checkbox" className="mr-2 rounded border-gray-300 text-purple-600 focus:ring-purple-500" /> Add Shipping Details
// // //             </label>
// // //             <div className="flex gap-4 items-end">
// // //                <div className="w-48">
// // //                  <label className="block text-xs text-center text-gray-500 mb-1">Currency*</label>
// // //                  <select className="w-full border border-gray-300 rounded p-1.5 text-sm outline-none">
// // //                    <option>Indian Rupee(INR, ₹)</option>
// // //                  </select>
// // //                </div>
// // //             </div>
// // //           </div>

// // //           {/* Line Items Table */}
// // //           <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
// // //             <table className="w-full text-left text-sm">
// // //               <thead className="bg-[#7c3aed] text-white text-xs font-semibold">
// // //                 <tr>
// // //                   <th className="px-4 py-3 w-[30%] rounded-tl-lg">Item</th>
// // //                   <th className="px-3 py-3 w-[15%]">HSN/SAC</th>
// // //                   <th className="px-3 py-3 w-[10%]">GST Rate</th>
// // //                   <th className="px-3 py-3 w-[10%]">Quantity</th>
// // //                   <th className="px-3 py-3 w-[15%]">Rate</th>
// // //                   <th className="px-4 py-3 text-right w-[20%] rounded-tr-lg">Amount</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="bg-white">
// // //                 {items.map((item, index) => (
// // //                   <React.Fragment key={index}>
// // //                     {/* Row Number & Delete */}
// // //                     <tr>
// // //                       <td colSpan="6" className="px-4 pt-4 pb-1 text-xs font-bold text-gray-900 flex justify-between">
// // //                         {index + 1}. 
// // //                         <button type="button" onClick={() => removeLineItem(index)} className="text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
// // //                       </td>
// // //                     </tr>
// // //                     {/* Inputs Row */}
// // //                     <tr>
// // //                       <td className="px-4 pb-4 align-top">
// // //                         <input type="text" required value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} placeholder="Item Name" className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// // //                         <div className="flex gap-4 mt-2 text-xs text-purple-600">
// // //                           <span className="flex items-center cursor-pointer"><Plus size={12} className="mr-1"/> Add Description</span>
// // //                           <span className="flex items-center cursor-pointer"><ImageIcon size={12} className="mr-1"/> Add Image</span>
// // //                         </div>
// // //                       </td>
// // //                       <td className="px-3 pb-4 align-top">
// // //                         <input type="text" value={item.hsn_sac_code} onChange={(e) => handleItemChange(index, "hsn_sac_code", e.target.value)} className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// // //                       </td>
// // //                       <td className="px-3 pb-4 align-top">
// // //                         <select value={item.tax_rate} onChange={(e) => handleItemChange(index, "tax_rate", e.target.value)} className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm bg-transparent">
// // //                           <option value="0">0 %</option>
// // //                           <option value="5">5 %</option>
// // //                           <option value="12">12 %</option>
// // //                           <option value="18">18 %</option>
// // //                           <option value="28">28 %</option>
// // //                         </select>
// // //                       </td>
// // //                       <td className="px-3 pb-4 align-top">
// // //                         <input type="number" min="0.1" step="0.1" required value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// // //                       </td>
// // //                       <td className="px-3 pb-4 align-top text-gray-700">
// // //                          ₹ <input type="number" min="0" step="0.01" required value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="w-[80%] border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// // //                       </td>
// // //                       <td className="px-4 pb-4 align-top text-right font-medium text-gray-900 pt-1">
// // //                         ₹{(item.quantity * item.rate).toFixed(2)}
// // //                       </td>
// // //                     </tr>
// // //                   </React.Fragment>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
          
// // //           <button type="button" onClick={addLineItem} className="w-full border border-dashed border-purple-300 text-purple-600 rounded py-2 text-sm font-medium flex items-center justify-center hover:bg-purple-50 transition-colors mb-10">
// // //             <Plus size={16} className="mr-2" /> Add New Line
// // //           </button>

// // //           {/* Totals Section */}
// // //           <div className="flex justify-end mb-10">
// // //             <div className="w-full max-w-sm bg-gray-50/50 p-6 rounded-lg border border-gray-100 space-y-4">
// // //               <div className="flex justify-between items-center text-sm font-semibold text-gray-700 border-b border-dashed border-gray-300 pb-2">
// // //                 <span>Show Total in PDF</span>
// // //                 <Pencil size={14} className="text-gray-400" />
// // //               </div>
              
// // //               <div className="flex justify-between text-sm text-gray-700">
// // //                 <span>Amount</span>
// // //                 <span>₹{totals.subtotal.toFixed(2)}</span>
// // //               </div>
              
// // //               <div className="flex justify-between text-sm text-gray-700">
// // //                 <span className="flex items-center">GST <Pencil size={12} className="text-gray-400 ml-1"/></span>
// // //                 <span>₹{totals.tax_total.toFixed(2)}</span>
// // //               </div>

// // //               <div className="text-xs text-purple-600 flex items-center cursor-pointer">
// // //                 <Plus size={12} className="mr-1"/> Add Discounts
// // //               </div>

// // //               <div className="border-t-2 border-dashed border-gray-300 pt-4 flex justify-between items-end">
// // //                 <div>
// // //                   <span className="block text-lg font-bold text-gray-900">Total <span className="text-sm font-normal text-gray-500">(INR)</span></span>
// // //                 </div>
// // //                 <span className="text-xl font-bold text-gray-900">₹{totals.grand_total.toFixed(2)}</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Add-ons Section (Terms, Notes, etc) */}
// // //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-200 pt-8 mb-10">
// // //             <div className="flex flex-col gap-2">
// // //                <button type="button" className="border border-dashed border-purple-200 text-purple-700 py-2 rounded text-xs flex justify-center items-center hover:bg-purple-50">
// // //                  <Plus size={14} className="mr-1" /> Add Terms & Conditions
// // //                </button>
// // //                <textarea value={terms} onChange={(e)=>setTerms(e.target.value)} rows="2" className="border border-gray-200 rounded p-2 text-xs outline-none focus:border-purple-400" />
// // //             </div>
            
// // //             <div className="flex flex-col gap-2">
// // //                <button type="button" className="border border-dashed border-purple-200 text-purple-700 py-2 rounded text-xs flex justify-center items-center hover:bg-purple-50">
// // //                  <FileText size={14} className="mr-1" /> Add Notes
// // //                </button>
// // //                <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} rows="2" className="border border-gray-200 rounded p-2 text-xs outline-none focus:border-purple-400" />
// // //             </div>

// // //             <div className="flex flex-col gap-2">
// // //                <button type="button" className="border border-dashed border-purple-200 text-purple-700 py-2 rounded text-xs flex justify-center items-center hover:bg-purple-50">
// // //                  <Paperclip size={14} className="mr-1" /> Add Attachments
// // //                </button>
// // //             </div>
// // //           </div>

// // //           {/* Submit Action */}
// // //           <div className="flex justify-center border-t border-gray-200 pt-6">
// // //             <button 
// // //               type="submit" 
// // //               disabled={isSubmitting} 
// // //               className="bg-[#db2777] hover:bg-[#be185d] text-white px-8 py-3 rounded text-sm font-bold shadow-md transition-colors disabled:opacity-70 flex items-center"
// // //             >
// // //               {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
// // //               Save & Continue
// // //             </button>
// // //           </div>

// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CreateQuotation;

// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Plus, Trash2, Save, Loader2, AlertTriangle, Pencil, Image as ImageIcon, ChevronDown, Paperclip, FileText, Mail, Check, X } from "lucide-react";

// // // const CreateQuotation = () => {
// // //   const navigate = useNavigate();
// // //   const [customers, setCustomers] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   // --- Document Meta State ---
// // //   const [documentTitle, setDocumentTitle] = useState("Quotation");
// // //   const [isEditingTitle, setIsEditingTitle] = useState(false);
// // //   const [validUntil, setValidUntil] = useState("");
// // //   const [notes, setNotes] = useState("Looking forward to your business.");
// // //   const [terms, setTerms] = useState("1. Validity: 15 Days\n2. Payment: 100% Advance");
  
// // //   // Custom Fields
// // //   const [customFields, setCustomFields] = useState([]);
// // //   const addCustomField = () => setCustomFields([...customFields, { key: "", value: "" }]);

// // //   // --- Store Details (Editable) ---
// // //   const [storeDetails, setStoreDetails] = useState({
// // //     name: "Your Store Name",
// // //     phone: "",
// // //     gstin: "",
// // //     address: "",
// // //     city: "",
// // //     zip: "",
// // //     email: "",
// // //     pan: ""
// // //   });
// // //   const [showStoreEmail, setShowStoreEmail] = useState(false);
// // //   const [showStorePan, setShowStorePan] = useState(false);

// // //   // --- Client Details ---
// // //   const [customerId, setCustomerId] = useState("");
// // //   const [isCreatingInlineClient, setIsCreatingInlineClient] = useState(false);
// // //   const [inlineClient, setInlineClient] = useState({ company_name: "", phone: "" });
// // //   const [clientExtras, setClientExtras] = useState({ email: "", pan: "" });
// // //   const [showClientEmail, setShowClientEmail] = useState(false);
// // //   const [showClientPan, setShowClientPan] = useState(false);

// // //   // --- Line Items & Math State ---
// // //   const [items, setItems] = useState([
// // //     { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }
// // //   ]);
// // //   const [discount, setDiscount] = useState({ type: 'flat', value: 0 });
// // //   const [showDiscount, setShowDiscount] = useState(false);

// // //   // --- Fetch Clients ---
// // //   useEffect(() => {
// // //     fetchClients();
// // //   }, []);

// // //   const fetchClients = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const res = await fetch("http://localhost:8000/api/customers", {
// // //         headers: { Authorization: `Bearer ${token}` }
// // //       });
// // //       if (!res.ok) throw new Error("Failed to load clients");
// // //       const data = await res.json();
// // //       setCustomers(data);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // --- Mathematical Engine ---
// // //   const calculateTotals = () => {
// // //     let rawSubtotal = 0;
    
// // //     // 1. Calculate raw subtotal first
// // //     items.forEach(item => {
// // //       rawSubtotal += (item.quantity * item.rate);
// // //     });

// // //     // 2. Determine invoice-level discount multiplier for proration
// // //     let discountMultiplier = 0; // percentage of reduction (0 to 1)
// // //     let totalDiscountAmount = 0;

// // //     if (rawSubtotal > 0) {
// // //       if (discount.type === 'percent') {
// // //         discountMultiplier = discount.value / 100;
// // //         totalDiscountAmount = rawSubtotal * discountMultiplier;
// // //       } else if (discount.type === 'flat') {
// // //         totalDiscountAmount = Math.min(discount.value, rawSubtotal); // Prevent negative totals
// // //         discountMultiplier = totalDiscountAmount / rawSubtotal;
// // //       }
// // //     }

// // //     let proratedSubtotal = 0;
// // //     let totalTax = 0;

// // //     // 3. Apply prorated discount to line items BEFORE calculating GST
// // //     const processedItems = items.map(item => {
// // //       const rawAmount = item.quantity * item.rate;
// // //       const proratedAmount = rawAmount - (rawAmount * discountMultiplier);
// // //       const taxAmount = (proratedAmount * item.tax_rate) / 100;
// // //       const totalAmount = proratedAmount + taxAmount;

// // //       proratedSubtotal += proratedAmount;
// // //       totalTax += taxAmount;

// // //       return {
// // //         ...item,
// // //         raw_amount: rawAmount,
// // //         prorated_taxable_amount: proratedAmount,
// // //         tax_amount: taxAmount,
// // //         total_amount: totalAmount
// // //       };
// // //     });

// // //     return {
// // //       processedItems,
// // //       rawSubtotal,
// // //       discountAmount: totalDiscountAmount,
// // //       tax_total: totalTax,
// // //       grand_total: proratedSubtotal + totalTax
// // //     };
// // //   };

// // //   const totals = calculateTotals();

// // //   // --- Handlers ---
// // //   const handleItemChange = (index, field, value) => {
// // //     const newItems = [...items];
// // //     newItems[index][field] = field === "name" || field === "hsn_sac_code" ? value : parseFloat(value) || 0;
// // //     setItems(newItems);
// // //   };

// // //   const handleStoreChange = (field, value) => {
// // //     setStoreDetails(prev => ({ ...prev, [field]: value }));
// // //   };

// // //   const handleInlineClientCreate = async () => {
// // //     if (!inlineClient.company_name) return;
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const res = await fetch("http://localhost:8000/api/customers", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
// // //         body: JSON.stringify({ company_name: inlineClient.company_name, phone: inlineClient.phone })
// // //       });
// // //       if (!res.ok) throw new Error("Failed to create client");
// // //       const newClient = await res.json();
      
// // //       setCustomers([...customers, newClient]);
// // //       setCustomerId(newClient.id.toString());
// // //       setIsCreatingInlineClient(false);
// // //     } catch (err) {
// // //       alert(err.message);
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!customerId) {
// // //       setError("Please select a client.");
// // //       return;
// // //     }
// // //     setIsSubmitting(true);
// // //     setError(null);

// // //     const payload = {
// // //       document_type: "quotation", // Forces backend to keep it as quotation
// // //       document_title: documentTitle,
// // //       customer_id: parseInt(customerId),
// // //       valid_until: validUntil ? new Date(validUntil).toISOString() : null,
// // //       subtotal: totals.rawSubtotal,
// // //       discount_total: totals.discountAmount,
// // //       tax_total: totals.tax_total,
// // //       grand_total: totals.grand_total,
// // //       terms_conditions: terms,
// // //       notes: notes,
// // //       items: totals.processedItems,
// // //       custom_fields: customFields,
// // //       store_details: storeDetails, // Pass updated store details
// // //       client_extras: clientExtras
// // //     };

// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const res = await fetch("http://localhost:8000/api/quotations", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
// // //         body: JSON.stringify(payload)
// // //       });
// // //       if (!res.ok) throw new Error("Failed to generate quotation");
// // //       navigate("/quotations");
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   const selectedCustomerData = customers.find(c => c.id === parseInt(customerId));

// // //   if (isLoading) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // //         <Loader2 className="animate-spin text-[#db2777]" size={32} />
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 font-sans">
// // //       <div className="max-w-[1000px] mx-auto bg-white shadow-md border border-gray-200 rounded-sm p-8 sm:p-12">
        
// // //         {error && (
// // //           <div className="mb-6 p-4 rounded bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// // //             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// // //             <p className="text-sm font-medium">{error}</p>
// // //           </div>
// // //         )}

// // //         <form onSubmit={handleSubmit}>
          
// // //           {/* Header Section */}
// // //           <div className="flex flex-col items-center mb-10">
// // //             <div className="flex items-center gap-2 border-b-2 border-dashed border-gray-400 pb-1">
// // //               {isEditingTitle ? (
// // //                 <div className="flex items-center gap-2">
// // //                   <input 
// // //                     type="text" 
// // //                     value={documentTitle} 
// // //                     onChange={(e) => setDocumentTitle(e.target.value)} 
// // //                     className="text-3xl font-bold text-gray-900 outline-none border-b border-purple-500 bg-transparent text-center"
// // //                     autoFocus
// // //                   />
// // //                   <button type="button" onClick={() => setIsEditingTitle(false)} className="text-green-600 hover:bg-green-50 p-1 rounded"><Check size={20}/></button>
// // //                 </div>
// // //               ) : (
// // //                 <>
// // //                   <h1 className="text-3xl font-bold text-gray-900">{documentTitle}</h1>
// // //                   <Pencil size={18} className="text-gray-400 cursor-pointer hover:text-purple-600" onClick={() => setIsEditingTitle(true)} />
// // //                 </>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Meta & Logo Section */}
// // //           <div className="flex justify-between items-start mb-10">
// // //             <div className="space-y-4 w-80">
// // //               <div className="flex items-center justify-between border-b border-gray-200 pb-1">
// // //                 <span className="text-sm font-semibold text-gray-700">Quotation No*</span>
// // //                 <input type="text" defaultValue="Auto-generated" disabled className="text-sm text-right bg-transparent outline-none text-gray-500 w-32" />
// // //               </div>
// // //               <div className="flex items-center justify-between border-b border-gray-200 pb-1">
// // //                 <span className="text-sm font-semibold text-gray-700">Quotation Date*</span>
// // //                 <span className="text-sm text-gray-900 text-right w-32">{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
// // //               </div>
// // //               <div className="flex items-center justify-between border-b border-gray-200 pb-1">
// // //                 <span className="text-sm font-semibold text-gray-700">Valid Until</span>
// // //                 <input 
// // //                   type="date" 
// // //                   value={validUntil}
// // //                   onChange={(e) => setValidUntil(e.target.value)}
// // //                   className="text-sm text-right bg-transparent outline-none text-gray-700 w-36 focus:text-purple-600 cursor-pointer" 
// // //                 />
// // //               </div>
              
// // //               {/* Custom Fields Map */}
// // //               {customFields.map((field, idx) => (
// // //                 <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-1 gap-2">
// // //                    <input type="text" placeholder="Custom Label" value={field.key} onChange={(e) => {
// // //                      const newFields = [...customFields]; newFields[idx].key = e.target.value; setCustomFields(newFields);
// // //                    }} className="text-sm font-semibold text-gray-700 bg-transparent outline-none w-1/2" />
// // //                    <input type="text" placeholder="Value" value={field.value} onChange={(e) => {
// // //                      const newFields = [...customFields]; newFields[idx].value = e.target.value; setCustomFields(newFields);
// // //                    }} className="text-sm text-right text-gray-900 bg-transparent outline-none w-1/2" />
// // //                    <X size={14} className="text-red-400 cursor-pointer" onClick={() => setCustomFields(customFields.filter((_, i) => i !== idx))} />
// // //                 </div>
// // //               ))}
              
// // //               <div className="pt-2">
// // //                 <span onClick={addCustomField} className="text-sm font-semibold text-purple-600 flex items-center cursor-pointer hover:underline">
// // //                   <Plus size={14} className="mr-1" /> Add Custom Fields
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             <div className="w-48 h-32 border-2 border-dashed border-purple-200 bg-purple-50/30 rounded flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-purple-50 transition-colors">
// // //               <ImageIcon size={24} className="text-purple-400 mb-2" />
// // //               <span className="text-xs text-gray-500">Add Business Logo<br/>Resolution up to 1080x1080px.</span>
// // //             </div>
// // //           </div>

// // //           {/* Details Section */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
// // //             {/* Your Details (Fully Editable) */}
// // //             <div className="bg-gray-50/50 rounded-lg p-5 border border-gray-100 focus-within:border-purple-300 transition-colors">
// // //               <h3 className="text-sm font-semibold text-gray-500 mb-4">Your Details</h3>
// // //               <div className="space-y-3">
// // //                 <input type="text" value={storeDetails.name} onChange={(e) => handleStoreChange('name', e.target.value)} className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500 font-medium" />
// // //                 <div className="border border-gray-300 bg-white rounded p-2 text-sm flex items-center focus-within:border-purple-500">
// // //                   <span className="text-lg mr-2">🇮🇳</span> <span className="text-gray-500 mr-2">+91</span>
// // //                   <input type="text" value={storeDetails.phone} onChange={(e) => handleStoreChange('phone', e.target.value)} placeholder="Phone" className="outline-none bg-transparent w-full" />
// // //                 </div>
// // //                 <input type="text" value={storeDetails.gstin} onChange={(e) => handleStoreChange('gstin', e.target.value)} placeholder="Your GSTIN (optional)" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" />
// // //                 <input type="text" value={storeDetails.address} onChange={(e) => handleStoreChange('address', e.target.value)} placeholder="Address (optional)" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" />
// // //                 <div className="flex gap-3">
// // //                   <input type="text" value={storeDetails.city} onChange={(e) => handleStoreChange('city', e.target.value)} placeholder="City (optional)" className="w-1/2 border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" />
// // //                   <input type="text" value={storeDetails.zip} onChange={(e) => handleStoreChange('zip', e.target.value)} placeholder="Postal Code" className="w-1/2 border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" />
// // //                 </div>
                
// // //                 {showStoreEmail && (
// // //                    <input type="email" value={storeDetails.email} onChange={(e) => handleStoreChange('email', e.target.value)} placeholder="Email Address" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" autoFocus />
// // //                 )}
// // //                 {showStorePan && (
// // //                    <input type="text" value={storeDetails.pan} onChange={(e) => handleStoreChange('pan', e.target.value)} placeholder="PAN Number" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500 uppercase" autoFocus />
// // //                 )}

// // //                 <div className="flex gap-4 pt-2">
// // //                   {!showStoreEmail && <span onClick={() => setShowStoreEmail(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline"><Mail size={12} className="mr-1"/> Add Email</span>}
// // //                   {!showStorePan && <span onClick={() => setShowStorePan(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline"><Plus size={12} className="mr-1"/> Add PAN</span>}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Client Details (With Inline Add) */}
// // //             <div className="bg-gray-50/50 rounded-lg p-5 border border-gray-100">
// // //               <h3 className="text-sm font-semibold text-gray-500 mb-4">Client's Details</h3>
// // //               <div className="space-y-3">
                
// // //                 {isCreatingInlineClient ? (
// // //                   <div className="bg-purple-50 p-3 rounded border border-purple-200 mb-2">
// // //                     <input type="text" placeholder="Client Business Name*" value={inlineClient.company_name} onChange={(e) => setInlineClient({...inlineClient, company_name: e.target.value})} className="w-full mb-2 p-1.5 text-sm border rounded outline-none focus:border-purple-500" autoFocus/>
// // //                     <input type="text" placeholder="Phone Number (optional)" value={inlineClient.phone} onChange={(e) => setInlineClient({...inlineClient, phone: e.target.value})} className="w-full mb-2 p-1.5 text-sm border rounded outline-none focus:border-purple-500"/>
// // //                     <div className="flex gap-2">
// // //                       <button type="button" onClick={handleInlineClientCreate} className="bg-purple-600 text-white text-xs px-3 py-1 rounded">Save & Select</button>
// // //                       <button type="button" onClick={() => setIsCreatingInlineClient(false)} className="text-gray-500 text-xs px-3 py-1">Cancel</button>
// // //                     </div>
// // //                   </div>
// // //                 ) : (
// // //                   <select 
// // //                     required
// // //                     value={customerId} 
// // //                     onChange={(e) => {
// // //                       if(e.target.value === "NEW") setIsCreatingInlineClient(true);
// // //                       else setCustomerId(e.target.value);
// // //                     }}
// // //                     className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500"
// // //                   >
// // //                     <option value="">Select a Client (required)</option>
// // //                     <option value="NEW" className="font-bold text-purple-600">+ Create New Client</option>
// // //                     {customers.map(c => (
// // //                       <option key={c.id} value={c.id}>{c.company_name}</option>
// // //                     ))}
// // //                   </select>
// // //                 )}

// // //                 <div className="border border-gray-300 bg-gray-50 rounded p-2 text-sm flex items-center">
// // //                   <span className="text-lg mr-2">🇮🇳</span> <span className="text-gray-500 mr-2">+91</span>
// // //                   <input type="text" readOnly value={selectedCustomerData?.phone || ""} placeholder="Phone" className="outline-none bg-transparent w-full text-gray-700" />
// // //                 </div>
                
// // //                 <input type="text" readOnly value={selectedCustomerData?.gstin || ""} placeholder="Client's GSTIN" className="w-full border border-gray-300 bg-gray-50 rounded p-2 text-sm outline-none text-gray-700" />
// // //                 <input type="text" readOnly value={selectedCustomerData?.billing_address || ""} placeholder="Address" className="w-full border border-gray-300 bg-gray-50 rounded p-2 text-sm outline-none text-gray-700" />
                
// // //                 {showClientEmail && (
// // //                    <input type="email" value={clientExtras.email} onChange={(e) => setClientExtras({...clientExtras, email: e.target.value})} placeholder="Client Email" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" autoFocus />
// // //                 )}
// // //                 {showClientPan && (
// // //                    <input type="text" value={clientExtras.pan} onChange={(e) => setClientExtras({...clientExtras, pan: e.target.value})} placeholder="Client PAN" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500 uppercase" autoFocus />
// // //                 )}

// // //                 <div className="flex gap-4 pt-2">
// // //                   {!showClientEmail && <span onClick={() => setShowClientEmail(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline"><Mail size={12} className="mr-1"/> Add Email</span>}
// // //                   {!showClientPan && <span onClick={() => setShowClientPan(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline"><Plus size={12} className="mr-1"/> Add PAN</span>}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Line Items Table */}
// // //           <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
// // //             <table className="w-full text-left text-sm">
// // //               <thead className="bg-[#7c3aed] text-white text-xs font-semibold">
// // //                 <tr>
// // //                   <th className="px-4 py-3 w-[30%]">Item</th>
// // //                   <th className="px-3 py-3 w-[15%]">HSN/SAC</th>
// // //                   <th className="px-3 py-3 w-[10%]">GST Rate</th>
// // //                   <th className="px-3 py-3 w-[10%]">Qty</th>
// // //                   <th className="px-3 py-3 w-[15%]">Rate</th>
// // //                   <th className="px-4 py-3 text-right w-[20%]">Amount</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="bg-white">
// // //                 {items.map((item, index) => (
// // //                   <React.Fragment key={index}>
// // //                     <tr>
// // //                       <td colSpan="6" className="px-4 pt-4 pb-1 text-xs font-bold text-gray-900 flex justify-between">
// // //                         {index + 1}. 
// // //                         <button type="button" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} className="text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
// // //                       </td>
// // //                     </tr>
// // //                     <tr>
// // //                       <td className="px-4 pb-4 align-top">
// // //                         <input type="text" required value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} placeholder="Item Name" className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// // //                       </td>
// // //                       <td className="px-3 pb-4 align-top">
// // //                         <input type="text" value={item.hsn_sac_code} onChange={(e) => handleItemChange(index, "hsn_sac_code", e.target.value)} className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// // //                       </td>
// // //                       <td className="px-3 pb-4 align-top">
// // //                         <select value={item.tax_rate} onChange={(e) => handleItemChange(index, "tax_rate", e.target.value)} className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm bg-transparent">
// // //                           <option value="0">0 %</option>
// // //                           <option value="5">5 %</option>
// // //                           <option value="12">12 %</option>
// // //                           <option value="18">18 %</option>
// // //                           <option value="28">28 %</option>
// // //                         </select>
// // //                       </td>
// // //                       <td className="px-3 pb-4 align-top">
// // //                         <input type="number" min="0.1" step="0.1" required value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// // //                       </td>
// // //                       <td className="px-3 pb-4 align-top text-gray-700">
// // //                          ₹ <input type="number" min="0" step="0.01" required value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="w-[80%] border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// // //                       </td>
// // //                       <td className="px-4 pb-4 align-top text-right font-medium text-gray-900 pt-1">
// // //                         ₹{(item.quantity * item.rate).toFixed(2)}
// // //                       </td>
// // //                     </tr>
// // //                   </React.Fragment>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
          
// // //           <button type="button" onClick={() => setItems([...items, { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }])} className="w-full border border-dashed border-purple-300 text-purple-600 rounded py-2 text-sm font-medium flex items-center justify-center hover:bg-purple-50 transition-colors mb-10">
// // //             <Plus size={16} className="mr-2" /> Add New Line
// // //           </button>

// // //           {/* Totals Section */}
// // //           <div className="flex justify-end mb-10">
// // //             <div className="w-full max-w-sm bg-gray-50/50 p-6 rounded-lg border border-gray-100 space-y-4">
              
// // //               <div className="flex justify-between text-sm text-gray-700">
// // //                 <span>Subtotal</span>
// // //                 <span>₹{totals.rawSubtotal.toFixed(2)}</span>
// // //               </div>
              
// // //               {/* Discount Logic UI */}
// // //               {showDiscount ? (
// // //                  <div className="flex justify-between items-center bg-white p-2 border border-gray-200 rounded">
// // //                     <div className="flex gap-2 w-2/3">
// // //                        <select value={discount.type} onChange={(e) => setDiscount({...discount, type: e.target.value})} className="border border-gray-300 rounded text-xs p-1 outline-none">
// // //                          <option value="flat">₹ Flat</option>
// // //                          <option value="percent">% Percent</option>
// // //                        </select>
// // //                        <input type="number" min="0" step="0.1" value={discount.value} onChange={(e) => setDiscount({...discount, value: parseFloat(e.target.value) || 0})} className="border border-gray-300 rounded text-xs p-1 w-full outline-none" />
// // //                     </div>
// // //                     <span className="text-sm text-red-500 font-medium">- ₹{totals.discountAmount.toFixed(2)}</span>
// // //                  </div>
// // //               ) : (
// // //                 <div onClick={() => setShowDiscount(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline w-max">
// // //                   <Plus size={12} className="mr-1"/> Add Discount
// // //                 </div>
// // //               )}

// // //               <div className="flex justify-between text-sm text-gray-700">
// // //                 <span>Total GST</span>
// // //                 <span>₹{totals.tax_total.toFixed(2)}</span>
// // //               </div>

// // //               <div className="border-t-2 border-dashed border-gray-300 pt-4 flex justify-between items-end">
// // //                 <div>
// // //                   <span className="block text-lg font-bold text-gray-900">Total <span className="text-sm font-normal text-gray-500">(INR)</span></span>
// // //                 </div>
// // //                 <span className="text-xl font-bold text-gray-900">₹{totals.grand_total.toFixed(2)}</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Submit Action */}
// // //           <div className="flex justify-center border-t border-gray-200 pt-6">
// // //             <button 
// // //               type="submit" 
// // //               disabled={isSubmitting} 
// // //               className="bg-[#db2777] hover:bg-[#be185d] text-white px-8 py-3 rounded text-sm font-bold shadow-md transition-colors disabled:opacity-70 flex items-center"
// // //             >
// // //               {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
// // //               Save Quotation
// // //             </button>
// // //           </div>

// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CreateQuotation;

// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Plus, Trash2, Save, Loader2, AlertTriangle, Pencil, Image as ImageIcon, ChevronDown, Paperclip, FileText, Mail, Check, X } from "lucide-react";

// // const CreateQuotation = () => {
// //   const navigate = useNavigate();
// //   const logoInputRef = useRef(null); // Reference for hidden logo file input

// //   const [customers, setCustomers] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [error, setError] = useState(null);

// //   // --- Document Meta State ---
// //   const [documentTitle, setDocumentTitle] = useState("Quotation");
// //   const [isEditingTitle, setIsEditingTitle] = useState(false);
// //   const [validUntil, setValidUntil] = useState("");
// //   const [notes, setNotes] = useState("Looking forward to your business.");
// //   const [terms, setTerms] = useState("1. Validity: 15 Days\n2. Payment: 100% Advance");
  
// //   // Store Logo State
// //   const [storeLogo, setStoreLogo] = useState(null);

// //   // Custom Fields
// //   const [customFields, setCustomFields] = useState([]);
// //   const addCustomField = () => setCustomFields([...customFields, { key: "", value: "" }]);

// //   // --- Store Details (Editable) ---
// //   const [storeDetails, setStoreDetails] = useState({
// //     name: "Your Store Name",
// //     phone: "",
// //     gstin: "",
// //     address: "",
// //     city: "",
// //     zip: "",
// //     email: "",
// //     pan: ""
// //   });
// //   const [showStoreEmail, setShowStoreEmail] = useState(false);
// //   const [showStorePan, setShowStorePan] = useState(false);

// //   // --- Client Details ---
// //   const [customerId, setCustomerId] = useState("");
// //   const [isCreatingInlineClient, setIsCreatingInlineClient] = useState(false);
// //   const [inlineClient, setInlineClient] = useState({ company_name: "", phone: "" });
// //   const [clientExtras, setClientExtras] = useState({ email: "", pan: "" });
// //   const [showClientEmail, setShowClientEmail] = useState(false);
// //   const [showClientPan, setShowClientPan] = useState(false);

// //   // --- Line Items & Math State ---
// //   const [items, setItems] = useState([
// //     { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }
// //   ]);
// //   const [discount, setDiscount] = useState({ type: 'flat', value: 0 });
// //   const [showDiscount, setShowDiscount] = useState(false);

// //   // --- Fetch Clients ---
// //   useEffect(() => {
// //     fetchClients();
// //   }, []);

// //   const fetchClients = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await fetch("http://localhost:8000/api/customers", {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
// //       if (!res.ok) throw new Error("Failed to load clients");
// //       const data = await res.json();
// //       setCustomers(data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // --- Logo Upload Handler ---
// //   const handleLogoUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const imageUrl = URL.createObjectURL(file);
// //       setStoreLogo(imageUrl);
// //     }
// //   };

// //   // --- Mathematical Engine ---
// //   const calculateTotals = () => {
// //     let rawSubtotal = 0;
    
// //     items.forEach(item => {
// //       rawSubtotal += (item.quantity * item.rate);
// //     });

// //     let discountMultiplier = 0; 
// //     let totalDiscountAmount = 0;

// //     if (rawSubtotal > 0) {
// //       if (discount.type === 'percent') {
// //         discountMultiplier = discount.value / 100;
// //         totalDiscountAmount = rawSubtotal * discountMultiplier;
// //       } else if (discount.type === 'flat') {
// //         totalDiscountAmount = Math.min(discount.value, rawSubtotal); 
// //         discountMultiplier = totalDiscountAmount / rawSubtotal;
// //       }
// //     }

// //     let proratedSubtotal = 0;
// //     let totalTax = 0;

// //     const processedItems = items.map(item => {
// //       const rawAmount = item.quantity * item.rate;
// //       const proratedAmount = rawAmount - (rawAmount * discountMultiplier);
// //       const taxAmount = (proratedAmount * item.tax_rate) / 100;
// //       const totalAmount = proratedAmount + taxAmount;

// //       proratedSubtotal += proratedAmount;
// //       totalTax += taxAmount;

// //       return {
// //         ...item,
// //         raw_amount: rawAmount,
// //         prorated_taxable_amount: proratedAmount,
// //         tax_amount: taxAmount,
// //         total_amount: totalAmount
// //       };
// //     });

// //     return {
// //       processedItems,
// //       rawSubtotal,
// //       discountAmount: totalDiscountAmount,
// //       tax_total: totalTax,
// //       grand_total: proratedSubtotal + totalTax
// //     };
// //   };

// //   const totals = calculateTotals();

// //   // --- Handlers ---
// //   const handleItemChange = (index, field, value) => {
// //     const newItems = [...items];
// //     newItems[index][field] = field === "name" || field === "hsn_sac_code" ? value : parseFloat(value) || 0;
// //     setItems(newItems);
// //   };

// //   const handleStoreChange = (field, value) => {
// //     setStoreDetails(prev => ({ ...prev, [field]: value }));
// //   };

// //   const handleInlineClientCreate = async () => {
// //     if (!inlineClient.company_name) return;
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await fetch("http://localhost:8000/api/customers", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
// //         body: JSON.stringify({ company_name: inlineClient.company_name, phone: inlineClient.phone })
// //       });
// //       if (!res.ok) throw new Error("Failed to create client");
// //       const newClient = await res.json();
      
// //       setCustomers([...customers, newClient]);
// //       setCustomerId(newClient.id.toString());
// //       setIsCreatingInlineClient(false);
// //     } catch (err) {
// //       alert(err.message);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!customerId) {
// //       setError("Please select a client.");
// //       return;
// //     }
// //     setIsSubmitting(true);
// //     setError(null);

// //     const payload = {
// //       document_type: "quotation", 
// //       document_title: documentTitle,
// //       customer_id: parseInt(customerId),
// //       valid_until: validUntil ? new Date(validUntil).toISOString() : null,
// //       subtotal: totals.rawSubtotal,
// //       discount_total: totals.discountAmount,
// //       tax_total: totals.tax_total,
// //       grand_total: totals.grand_total,
// //       terms_conditions: terms,
// //       notes: notes,
// //       items: totals.processedItems,
// //       custom_fields: customFields,
// //       store_details: storeDetails, 
// //       client_extras: clientExtras
// //     };

// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await fetch("http://localhost:8000/api/quotations", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
// //         body: JSON.stringify(payload)
// //       });
// //       if (!res.ok) throw new Error("Failed to generate quotation");
// //       navigate("/quotations");
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const selectedCustomerData = customers.find(c => c.id === parseInt(customerId));

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <Loader2 className="animate-spin text-[#db2777]" size={32} />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 font-sans">
      
// //       {/* Hidden file input for logo selection */}
// //       <input 
// //         type="file" 
// //         ref={logoInputRef} 
// //         onChange={handleLogoUpload} 
// //         accept="image/png, image/jpeg" 
// //         className="hidden" 
// //       />

// //       <div className="max-w-[1000px] mx-auto bg-white shadow-md border border-gray-200 rounded-sm p-8 sm:p-12">
        
// //         {error && (
// //           <div className="mb-6 p-4 rounded bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// //             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// //             <p className="text-sm font-medium">{error}</p>
// //           </div>
// //         )}

// //         <form onSubmit={handleSubmit}>
          
// //           {/* Header Section */}
// //           <div className="flex flex-col items-center mb-10">
// //             <div className="flex items-center gap-2 border-b-2 border-dashed border-gray-400 pb-1">
// //               {isEditingTitle ? (
// //                 <div className="flex items-center gap-2">
// //                   <input 
// //                     type="text" 
// //                     value={documentTitle} 
// //                     onChange={(e) => setDocumentTitle(e.target.value)} 
// //                     className="text-3xl font-bold text-gray-900 outline-none border-b border-purple-500 bg-transparent text-center"
// //                     autoFocus
// //                   />
// //                   <button type="button" onClick={() => setIsEditingTitle(false)} className="text-green-600 hover:bg-green-50 p-1 rounded"><Check size={20}/></button>
// //                 </div>
// //               ) : (
// //                 <>
// //                   <h1 className="text-3xl font-bold text-gray-900">{documentTitle}</h1>
// //                   <Pencil size={18} className="text-gray-400 cursor-pointer hover:text-purple-600" onClick={() => setIsEditingTitle(true)} />
// //                 </>
// //               )}
// //             </div>
// //           </div>

// //           {/* Meta & Functional Logo Section */}
// //           <div className="flex justify-between items-start mb-10">
// //             <div className="space-y-4 w-80">
// //               <div className="flex items-center justify-between border-b border-gray-200 pb-1">
// //                 <span className="text-sm font-semibold text-gray-700">Quotation No*</span>
// //                 <input type="text" defaultValue="Auto-generated" disabled className="text-sm text-right bg-transparent outline-none text-gray-500 w-32" />
// //               </div>
// //               <div className="flex items-center justify-between border-b border-gray-200 pb-1">
// //                 <span className="text-sm font-semibold text-gray-700">Quotation Date*</span>
// //                 <span className="text-sm text-gray-900 text-right w-32">{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
// //               </div>
// //               <div className="flex items-center justify-between border-b border-gray-200 pb-1">
// //                 <span className="text-sm font-semibold text-gray-700">Valid Until</span>
// //                 <input 
// //                   type="date" 
// //                   value={validUntil}
// //                   onChange={(e) => setValidUntil(e.target.value)}
// //                   className="text-sm text-right bg-transparent outline-none text-gray-700 w-36 focus:text-purple-600 cursor-pointer" 
// //                 />
// //               </div>
              
// //               {customFields.map((field, idx) => (
// //                 <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-1 gap-2">
// //                    <input type="text" placeholder="Custom Label" value={field.key} onChange={(e) => {
// //                      const newFields = [...customFields]; newFields[idx].key = e.target.value; setCustomFields(newFields);
// //                    }} className="text-sm font-semibold text-gray-700 bg-transparent outline-none w-1/2" />
// //                    <input type="text" placeholder="Value" value={field.value} onChange={(e) => {
// //                      const newFields = [...customFields]; newFields[idx].value = e.target.value; setCustomFields(newFields);
// //                    }} className="text-sm text-right text-gray-900 bg-transparent outline-none w-1/2" />
// //                    <X size={14} className="text-red-400 cursor-pointer" onClick={() => setCustomFields(customFields.filter((_, i) => i !== idx))} />
// //                 </div>
// //               ))}
              
// //               <div className="pt-2">
// //                 <span onClick={addCustomField} className="text-sm font-semibold text-purple-600 flex items-center cursor-pointer hover:underline">
// //                   <Plus size={14} className="mr-1" /> Add Custom Fields
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Functional Logo Box */}
// //             <div 
// //               onClick={() => logoInputRef.current.click()}
// //               className="w-48 h-32 border-2 border-dashed border-purple-200 bg-purple-50/30 rounded flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-purple-50 transition-colors relative group"
// //             >
// //               {storeLogo ? (
// //                 <>
// //                   <img src={storeLogo} alt="Business Logo" className="w-full h-full object-contain rounded" />
// //                   <button 
// //                     type="button"
// //                     onClick={(e) => { e.stopPropagation(); setStoreLogo(null); }}
// //                     className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600"
// //                   >
// //                     <X size={12} />
// //                   </button>
// //                 </>
// //               ) : (
// //                 <>
// //                   <ImageIcon size={24} className="text-purple-400 mb-2" />
// //                   <span className="text-xs text-gray-500">Add Business Logo<br/>Resolution up to 1080x1080px.</span>
// //                 </>
// //               )}
// //             </div>
// //           </div>

// //           {/* Details Section */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
// //             {/* Your Details (Fully Editable) */}
// //             <div className="bg-gray-50/50 rounded-lg p-5 border border-gray-100 focus-within:border-purple-300 transition-colors">
// //               <h3 className="text-sm font-semibold text-gray-500 mb-4">Your Details</h3>
// //               <div className="space-y-3">
// //                 <input type="text" value={storeDetails.name} onChange={(e) => handleStoreChange('name', e.target.value)} className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500 font-medium" />
// //                 <div className="border border-gray-300 bg-white rounded p-2 text-sm flex items-center focus-within:border-purple-500">
// //                   <span className="text-lg mr-2">🇮🇳</span> <span className="text-gray-500 mr-2">+91</span>
// //                   <input type="text" value={storeDetails.phone} onChange={(e) => handleStoreChange('phone', e.target.value)} placeholder="Phone" className="outline-none bg-transparent w-full" />
// //                 </div>
// //                 <input type="text" value={storeDetails.gstin} onChange={(e) => handleStoreChange('gstin', e.target.value)} placeholder="Your GSTIN (optional)" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" />
// //                 <input type="text" value={storeDetails.address} onChange={(e) => handleStoreChange('address', e.target.value)} placeholder="Address (optional)" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" />
// //                 <div className="flex gap-3">
// //                   <input type="text" value={storeDetails.city} onChange={(e) => handleStoreChange('city', e.target.value)} placeholder="City (optional)" className="w-1/2 border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" />
// //                   <input type="text" value={storeDetails.zip} onChange={(e) => handleStoreChange('zip', e.target.value)} placeholder="Postal Code" className="w-1/2 border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" />
// //                 </div>
                
// //                 {showStoreEmail && (
// //                    <input type="email" value={storeDetails.email} onChange={(e) => handleStoreChange('email', e.target.value)} placeholder="Email Address" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" autoFocus />
// //                 )}
// //                 {showStorePan && (
// //                    <input type="text" value={storeDetails.pan} onChange={(e) => handleStoreChange('pan', e.target.value)} placeholder="PAN Number" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500 uppercase" autoFocus />
// //                 )}

// //                 <div className="flex gap-4 pt-2">
// //                   {!showStoreEmail && <span onClick={() => setShowStoreEmail(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline"><Mail size={12} className="mr-1"/> Add Email</span>}
// //                   {!showStorePan && <span onClick={() => setShowStorePan(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline"><Plus size={12} className="mr-1"/> Add PAN</span>}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Client Details (With Inline Add) */}
// //             <div className="bg-gray-50/50 rounded-lg p-5 border border-gray-100">
// //               <h3 className="text-sm font-semibold text-gray-500 mb-4">Client's Details</h3>
// //               <div className="space-y-3">
                
// //                 {isCreatingInlineClient ? (
// //                   <div className="bg-purple-50 p-3 rounded border border-purple-200 mb-2">
// //                     <input type="text" placeholder="Client Business Name*" value={inlineClient.company_name} onChange={(e) => setInlineClient({...inlineClient, company_name: e.target.value})} className="w-full mb-2 p-1.5 text-sm border rounded outline-none focus:border-purple-500" autoFocus/>
// //                     <input type="text" placeholder="Phone Number (optional)" value={inlineClient.phone} onChange={(e) => setInlineClient({...inlineClient, phone: e.target.value})} className="w-full mb-2 p-1.5 text-sm border rounded outline-none focus:border-purple-500"/>
// //                     <div className="flex gap-2">
// //                       <button type="button" onClick={handleInlineClientCreate} className="bg-purple-600 text-white text-xs px-3 py-1 rounded">Save & Select</button>
// //                       <button type="button" onClick={() => setIsCreatingInlineClient(false)} className="text-gray-500 text-xs px-3 py-1">Cancel</button>
// //                     </div>
// //                   </div>
// //                 ) : (
// //                   <select 
// //                     required
// //                     value={customerId} 
// //                     onChange={(e) => {
// //                       if(e.target.value === "NEW") setIsCreatingInlineClient(true);
// //                       else setCustomerId(e.target.value);
// //                     }}
// //                     className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500"
// //                   >
// //                     <option value="">Select a Client (required)</option>
// //                     <option value="NEW" className="font-bold text-purple-600">+ Create New Client</option>
// //                     {customers.map(c => (
// //                       <option key={c.id} value={c.id}>{c.company_name}</option>
// //                     ))}
// //                   </select>
// //                 )}

// //                 <div className="border border-gray-300 bg-gray-50 rounded p-2 text-sm flex items-center">
// //                   <span className="text-lg mr-2">🇮🇳</span> <span className="text-gray-500 mr-2">+91</span>
// //                   <input type="text" readOnly value={selectedCustomerData?.phone || ""} placeholder="Phone" className="outline-none bg-transparent w-full text-gray-700" />
// //                 </div>
                
// //                 <input type="text" readOnly value={selectedCustomerData?.gstin || ""} placeholder="Client's GSTIN" className="w-full border border-gray-300 bg-gray-50 rounded p-2 text-sm outline-none text-gray-700" />
// //                 <input type="text" readOnly value={selectedCustomerData?.billing_address || ""} placeholder="Address" className="w-full border border-gray-300 bg-gray-50 rounded p-2 text-sm outline-none text-gray-700" />
                
// //                 {showClientEmail && (
// //                    <input type="email" value={clientExtras.email} onChange={(e) => setClientExtras({...clientExtras, email: e.target.value})} placeholder="Client Email" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500" autoFocus />
// //                 )}
// //                 {showClientPan && (
// //                    <input type="text" value={clientExtras.pan} onChange={(e) => setClientExtras({...clientExtras, pan: e.target.value})} placeholder="Client PAN" className="w-full border border-gray-300 bg-white rounded p-2 text-sm outline-none focus:border-purple-500 uppercase" autoFocus />
// //                 )}

// //                 <div className="flex gap-4 pt-2">
// //                   {!showClientEmail && <span onClick={() => setShowClientEmail(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline"><Mail size={12} className="mr-1"/> Add Email</span>}
// //                   {!showClientPan && <span onClick={() => setShowClientPan(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline"><Plus size={12} className="mr-1"/> Add PAN</span>}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Line Items Table */}
// //           <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
// //             <table className="w-full text-left text-sm">
// //               <thead className="bg-[#7c3aed] text-white text-xs font-semibold">
// //                 <tr>
// //                   <th className="px-4 py-3 w-[30%]">Item</th>
// //                   <th className="px-3 py-3 w-[15%]">HSN/SAC</th>
// //                   <th className="px-3 py-3 w-[10%]">GST Rate</th>
// //                   <th className="px-3 py-3 w-[10%]">Qty</th>
// //                   <th className="px-3 py-3 w-[15%]">Rate</th>
// //                   <th className="px-4 py-3 text-right w-[20%]">Amount</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white">
// //                 {items.map((item, index) => (
// //                   <React.Fragment key={index}>
// //                     <tr>
// //                       <td colSpan="6" className="px-4 pt-4 pb-1 text-xs font-bold text-gray-900 flex justify-between">
// //                         {index + 1}. 
// //                         <button type="button" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} className="text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
// //                       </td>
// //                     </tr>
// //                     <tr>
// //                       <td className="px-4 pb-4 align-top">
// //                         <input type="text" required value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} placeholder="Item Name" className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// //                       </td>
// //                       <td className="px-3 pb-4 align-top">
// //                         <input type="text" value={item.hsn_sac_code} onChange={(e) => handleItemChange(index, "hsn_sac_code", e.target.value)} className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// //                       </td>
// //                       <td className="px-3 pb-4 align-top">
// //                         <select value={item.tax_rate} onChange={(e) => handleItemChange(index, "tax_rate", e.target.value)} className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm bg-transparent">
// //                           <option value="0">0 %</option>
// //                           <option value="5">5 %</option>
// //                           <option value="12">12 %</option>
// //                           <option value="18">18 %</option>
// //                           <option value="28">28 %</option>
// //                         </select>
// //                       </td>
// //                       <td className="px-3 pb-4 align-top">
// //                         <input type="number" min="0.1" step="0.1" required value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="w-full border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// //                       </td>
// //                       <td className="px-3 pb-4 align-top text-gray-700">
// //                          ₹ <input type="number" min="0" step="0.01" required value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="w-[80%] border-b border-gray-300 py-1 outline-none focus:border-purple-600 text-sm" />
// //                       </td>
// //                       <td className="px-4 pb-4 align-top text-right font-medium text-gray-900 pt-1">
// //                         ₹{(item.quantity * item.rate).toFixed(2)}
// //                       </td>
// //                     </tr>
// //                   </React.Fragment>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
          
// //           <button type="button" onClick={() => setItems([...items, { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }])} className="w-full border border-dashed border-purple-300 text-purple-600 rounded py-2 text-sm font-medium flex items-center justify-center hover:bg-purple-50 transition-colors mb-10">
// //             <Plus size={16} className="mr-2" /> Add New Line
// //           </button>

// //           {/* Totals Section */}
// //           <div className="flex justify-end mb-10">
// //             <div className="w-full max-w-sm bg-gray-50/50 p-6 rounded-lg border border-gray-100 space-y-4">
              
// //               <div className="flex justify-between text-sm text-gray-700">
// //                 <span>Subtotal</span>
// //                 <span>₹{totals.rawSubtotal.toFixed(2)}</span>
// //               </div>
              
// //               {/* Discount Logic UI */}
// //               {showDiscount ? (
// //                  <div className="flex justify-between items-center bg-white p-2 border border-gray-200 rounded">
// //                     <div className="flex gap-2 w-2/3">
// //                        <select value={discount.type} onChange={(e) => setDiscount({...discount, type: e.target.value})} className="border border-gray-300 rounded text-xs p-1 outline-none">
// //                          <option value="flat">₹ Flat</option>
// //                          <option value="percent">% Percent</option>
// //                        </select>
// //                        <input type="number" min="0" step="0.1" value={discount.value} onChange={(e) => setDiscount({...discount, value: parseFloat(e.target.value) || 0})} className="border border-gray-300 rounded text-xs p-1 w-full outline-none" />
// //                     </div>
// //                     <span className="text-sm text-red-500 font-medium">- ₹{totals.discountAmount.toFixed(2)}</span>
// //                  </div>
// //               ) : (
// //                 <div onClick={() => setShowDiscount(true)} className="text-xs text-purple-600 flex items-center cursor-pointer hover:underline w-max">
// //                   <Plus size={12} className="mr-1"/> Add Discount
// //                 </div>
// //               )}

// //               <div className="flex justify-between text-sm text-gray-700">
// //                 <span>Total GST</span>
// //                 <span>₹{totals.tax_total.toFixed(2)}</span>
// //               </div>

// //               <div className="border-t-2 border-dashed border-gray-300 pt-4 flex justify-between items-end">
// //                 <div>
// //                   <span className="block text-lg font-bold text-gray-900">Total <span className="text-sm font-normal text-gray-500">(INR)</span></span>
// //                 </div>
// //                 <span className="text-xl font-bold text-gray-900">₹{totals.grand_total.toFixed(2)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Submit Action */}
// //           <div className="flex justify-center border-t border-gray-200 pt-6">
// //             <button 
// //               type="submit" 
// //               disabled={isSubmitting} 
// //               className="bg-[#db2777] hover:bg-[#be185d] text-white px-8 py-3 rounded text-sm font-bold shadow-md transition-colors disabled:opacity-70 flex items-center"
// //             >
// //               {isSubmitting ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
// //               Save Quotation
// //             </button>
// //           </div>

// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateQuotation;
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus, Trash2, Save, Loader2, AlertTriangle, Pencil, Image as ImageIcon, ChevronDown, Paperclip, FileText, Mail, Check, X } from "lucide-react";

// const CreateQuotation = () => {
//   const navigate = useNavigate();
//   const logoInputRef = useRef(null);

//   const [customers, setCustomers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);

//   // --- Document Meta State ---
//   const [documentTitle, setDocumentTitle] = useState("Quotation");
//   const [isEditingTitle, setIsEditingTitle] = useState(false);
//   const [validUntil, setValidUntil] = useState("");
//   const [notes, setNotes] = useState("Looking forward to your business.");
//   const [terms, setTerms] = useState("1. Validity: 15 Days\n2. Payment: 100% Advance");
  
//   const [storeLogo, setStoreLogo] = useState(null);

//   const [customFields, setCustomFields] = useState([]);
//   const addCustomField = () => setCustomFields([...customFields, { key: "", value: "" }]);

//   // --- Store Details (Editable) ---
//   const [storeDetails, setStoreDetails] = useState({
//     name: "Your Store Name",
//     phone: "",
//     gstin: "",
//     address: "",
//     city: "",
//     zip: "",
//     email: "",
//     pan: ""
//   });
//   const [showStoreEmail, setShowStoreEmail] = useState(false);
//   const [showStorePan, setShowStorePan] = useState(false);

//   // --- Client Details ---
//   const [customerId, setCustomerId] = useState("");
//   const [isCreatingInlineClient, setIsCreatingInlineClient] = useState(false);
//   const [inlineClient, setInlineClient] = useState({ company_name: "", phone: "" });
//   const [clientExtras, setClientExtras] = useState({ email: "", pan: "" });
//   const [showClientEmail, setShowClientEmail] = useState(false);
//   const [showClientPan, setShowClientPan] = useState(false);

//   // --- Line Items & Math State ---
//   const [items, setItems] = useState([
//     { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }
//   ]);
//   const [discount, setDiscount] = useState({ type: 'flat', value: 0 });
//   const [showDiscount, setShowDiscount] = useState(false);

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/customers", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error("Failed to load clients");
//       const data = await res.json();
//       setCustomers(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setStoreLogo(imageUrl);
//     }
//   };

//   const calculateTotals = () => {
//     let rawSubtotal = 0;
    
//     items.forEach(item => {
//       rawSubtotal += (item.quantity * item.rate);
//     });

//     let discountMultiplier = 0; 
//     let totalDiscountAmount = 0;

//     if (rawSubtotal > 0) {
//       if (discount.type === 'percent') {
//         discountMultiplier = discount.value / 100;
//         totalDiscountAmount = rawSubtotal * discountMultiplier;
//       } else if (discount.type === 'flat') {
//         totalDiscountAmount = Math.min(discount.value, rawSubtotal); 
//         discountMultiplier = totalDiscountAmount / rawSubtotal;
//       }
//     }

//     let proratedSubtotal = 0;
//     let totalTax = 0;

//     const processedItems = items.map(item => {
//       const rawAmount = item.quantity * item.rate;
//       const proratedAmount = rawAmount - (rawAmount * discountMultiplier);
//       const taxAmount = (proratedAmount * item.tax_rate) / 100;
//       const totalAmount = proratedAmount + taxAmount;

//       proratedSubtotal += proratedAmount;
//       totalTax += taxAmount;

//       return {
//         ...item,
//         raw_amount: rawAmount,
//         prorated_taxable_amount: proratedAmount,
//         tax_amount: taxAmount,
//         total_amount: totalAmount
//       };
//     });

//     return {
//       processedItems,
//       rawSubtotal,
//       discountAmount: totalDiscountAmount,
//       tax_total: totalTax,
//       grand_total: proratedSubtotal + totalTax
//     };
//   };

//   const totals = calculateTotals();

//   const handleItemChange = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = field === "name" || field === "hsn_sac_code" ? value : parseFloat(value) || 0;
//     setItems(newItems);
//   };

//   const handleStoreChange = (field, value) => {
//     setStoreDetails(prev => ({ ...prev, [field]: value }));
//   };

//   const handleInlineClientCreate = async () => {
//     if (!inlineClient.company_name) return;
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/customers", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify({ company_name: inlineClient.company_name, phone: inlineClient.phone })
//       });
//       if (!res.ok) throw new Error("Failed to create client");
//       const newClient = await res.json();
      
//       setCustomers([...customers, newClient]);
//       setCustomerId(newClient.id.toString());
//       setIsCreatingInlineClient(false);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!customerId) {
//       setError("Please select a client.");
//       return;
//     }
//     setIsSubmitting(true);
//     setError(null);

//     const payload = {
//       document_type: "quotation", 
//       document_title: documentTitle,
//       customer_id: parseInt(customerId),
//       valid_until: validUntil ? new Date(validUntil).toISOString() : null,
//       subtotal: totals.rawSubtotal,
//       discount_total: totals.discountAmount,
//       tax_total: totals.tax_total,
//       grand_total: totals.grand_total,
//       terms_conditions: terms,
//       notes: notes,
//       items: totals.processedItems,
//       custom_fields: customFields,
//       store_details: storeDetails, 
//       client_extras: clientExtras
//     };

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/quotations", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify(payload)
//       });
//       if (!res.ok) throw new Error("Failed to generate quotation");
//       navigate("/quotations");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const selectedCustomerData = customers.find(c => c.id === parseInt(customerId));

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#fbfaf8]">
//         <Loader2 className="animate-spin text-[#C5A059]" size={32} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#fbfaf8] py-10 px-4 sm:px-8 font-sans pb-32">
      
//       <input 
//         type="file" 
//         ref={logoInputRef} 
//         onChange={handleLogoUpload} 
//         accept="image/png, image/jpeg" 
//         className="hidden" 
//       />

//       {/* Top Stepper */}
//       <div className="flex flex-col items-center pt-2 pb-8">
//         <h1 className="text-[22px] font-black tracking-tight text-slate-900 mb-4">New Quotation</h1>
//         <div className="flex items-center text-sm font-bold">
//           <div className="flex items-center text-[#0f172a]">
//             <span className="w-6 h-6 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-[11px] mr-2 shadow-md">1</span>
//             Quotation Details
//           </div>
//           <ChevronDown className="w-4 h-4 mx-4 text-slate-300 -rotate-90" />
//           <div className="flex items-center text-slate-400">
//             <span className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center text-[11px] mr-2">2</span>
//             Design & Share
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1050px] mx-auto bg-white shadow-[0_8px_30px_rgba(15,23,42,.04)] border border-slate-100 rounded-[31px] p-8 sm:p-12">
        
//         {error && (
//           <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-600">
//             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
//             <p className="text-sm font-bold">{error}</p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
          
//           {/* Header Section */}
//           <div className="flex flex-col items-center mb-12">
//             <div className="flex items-center gap-2 border-b-2 border-dashed border-slate-200 pb-2">
//               {isEditingTitle ? (
//                 <div className="flex items-center gap-3">
//                   <input 
//                     type="text" 
//                     value={documentTitle} 
//                     onChange={(e) => setDocumentTitle(e.target.value)} 
//                     className="text-[32px] font-black text-slate-900 outline-none border-b border-[#C5A059] bg-transparent text-center"
//                     autoFocus
//                   />
//                   <button type="button" onClick={() => setIsEditingTitle(false)} className="text-emerald-500 hover:bg-emerald-50 p-1.5 rounded-lg transition-colors"><Check size={22}/></button>
//                 </div>
//               ) : (
//                 <>
//                   <h1 className="text-[32px] font-black text-slate-900 tracking-tight">{documentTitle}</h1>
//                   <Pencil size={18} className="text-slate-300 cursor-pointer hover:text-[#C5A059] transition-colors ml-2" onClick={() => setIsEditingTitle(true)} />
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Meta & Functional Logo Section */}
//           <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
//             <div className="space-y-4 w-full md:w-96">
//               <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//                 <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Quotation No*</span>
//                 <input type="text" defaultValue="Auto-generated" disabled className="text-sm font-semibold text-right bg-transparent outline-none text-slate-400 w-32" />
//               </div>
//               <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//                 <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Date*</span>
//                 <span className="text-sm font-bold text-slate-900 text-right w-32">{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
//               </div>
//               <div className="flex items-center justify-between border-b border-slate-100 pb-2 group">
//                 <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Valid Until</span>
//                 <input 
//                   type="date" 
//                   value={validUntil}
//                   onChange={(e) => setValidUntil(e.target.value)}
//                   className="text-sm font-bold text-right bg-transparent outline-none text-slate-700 w-36 group-focus-within:text-[#C5A059] cursor-pointer transition-colors" 
//                 />
//               </div>
              
//               {customFields.map((field, idx) => (
//                 <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-2 gap-2">
//                    <input type="text" placeholder="Custom Label" value={field.key} onChange={(e) => {
//                      const newFields = [...customFields]; newFields[idx].key = e.target.value; setCustomFields(newFields);
//                    }} className="text-[13px] font-bold text-slate-700 uppercase tracking-wide bg-transparent outline-none w-1/2 focus:text-[#C5A059]" />
//                    <input type="text" placeholder="Value" value={field.value} onChange={(e) => {
//                      const newFields = [...customFields]; newFields[idx].value = e.target.value; setCustomFields(newFields);
//                    }} className="text-sm font-semibold text-right text-slate-900 bg-transparent outline-none w-1/2" />
//                    <X size={16} className="text-rose-400 cursor-pointer hover:scale-110 transition-transform" onClick={() => setCustomFields(customFields.filter((_, i) => i !== idx))} />
//                 </div>
//               ))}
              
//               <div className="pt-2">
//                 <span onClick={addCustomField} className="text-[12px] font-bold text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max uppercase tracking-wider">
//                   <Plus size={14} className="mr-1" /> Add Custom Fields
//                 </span>
//               </div>
//             </div>

//             {/* Functional Logo Box */}
//             <div 
//               onClick={() => logoInputRef.current.click()}
//               className="w-full md:w-56 h-36 border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-2xl flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-amber-50/30 hover:border-[#C5A059]/30 transition-all relative group"
//             >
//               {storeLogo ? (
//                 <>
//                   <img src={storeLogo} alt="Business Logo" className="w-full h-full object-contain rounded-xl" />
//                   <button 
//                     type="button"
//                     onClick={(e) => { e.stopPropagation(); setStoreLogo(null); }}
//                     className="absolute top-2 right-2 bg-rose-500 text-white rounded-full p-1.5 shadow-md hover:bg-rose-600 transition-colors opacity-0 group-hover:opacity-100"
//                   >
//                     <X size={14} />
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <ImageIcon size={28} className="text-slate-300 mb-3 group-hover:text-[#C5A059] transition-colors" />
//                   <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Add Logo<br/>Max 1080x1080</span>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Details Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
//             {/* Your Details */}
//             <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
//               <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Your Details</h3>
//               <div className="space-y-3.5">
//                 <input type="text" value={storeDetails.name} onChange={(e) => handleStoreChange('name', e.target.value)} className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors" />
//                 <div className="border border-slate-200 bg-white rounded-xl p-2.5 text-sm flex items-center focus-within:border-[#C5A059] transition-colors">
//                   <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
//                   <input type="text" value={storeDetails.phone} onChange={(e) => handleStoreChange('phone', e.target.value)} placeholder="Phone" className="outline-none bg-transparent w-full font-semibold text-slate-800" />
//                 </div>
//                 <input type="text" value={storeDetails.gstin} onChange={(e) => handleStoreChange('gstin', e.target.value)} placeholder="Your GSTIN (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                 <input type="text" value={storeDetails.address} onChange={(e) => handleStoreChange('address', e.target.value)} placeholder="Address (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                 <div className="flex gap-3">
//                   <input type="text" value={storeDetails.city} onChange={(e) => handleStoreChange('city', e.target.value)} placeholder="City (optional)" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   <input type="text" value={storeDetails.zip} onChange={(e) => handleStoreChange('zip', e.target.value)} placeholder="Postal Code" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                 </div>
                
//                 {showStoreEmail && (
//                    <input type="email" value={storeDetails.email} onChange={(e) => handleStoreChange('email', e.target.value)} placeholder="Email Address" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />
//                 )}
//                 {showStorePan && (
//                    <input type="text" value={storeDetails.pan} onChange={(e) => handleStoreChange('pan', e.target.value)} placeholder="PAN Number" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />
//                 )}

//                 <div className="flex gap-5 pt-2">
//                   {!showStoreEmail && <span onClick={() => setShowStoreEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
//                   {!showStorePan && <span onClick={() => setShowStorePan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
//                 </div>
//               </div>
//             </div>

//             {/* Client Details */}
//             <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
//               <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Client Details</h3>
//               <div className="space-y-3.5">
                
//                 {isCreatingInlineClient ? (
//                   <div className="bg-amber-50/30 p-4 rounded-xl border border-amber-200 mb-2">
//                     <input type="text" placeholder="Client Business Name*" value={inlineClient.company_name} onChange={(e) => setInlineClient({...inlineClient, company_name: e.target.value})} className="w-full mb-3 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-bold text-slate-800" autoFocus/>
//                     <input type="text" placeholder="Phone Number (optional)" value={inlineClient.phone} onChange={(e) => setInlineClient({...inlineClient, phone: e.target.value})} className="w-full mb-4 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-semibold text-slate-800"/>
//                     <div className="flex gap-2">
//                       <button type="button" onClick={handleInlineClientCreate} className="bg-[#0f172a] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-[#C5A059] transition-colors">Save & Select</button>
//                       <button type="button" onClick={() => setIsCreatingInlineClient(false)} className="text-slate-500 hover:text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-2 transition-colors">Cancel</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <select 
//                     required
//                     value={customerId} 
//                     onChange={(e) => {
//                       if(e.target.value === "NEW") setIsCreatingInlineClient(true);
//                       else setCustomerId(e.target.value);
//                     }}
//                     className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors cursor-pointer"
//                   >
//                     <option value="">Select a Client (required)</option>
//                     <option value="NEW" className="font-bold text-[#C5A059]">+ Create New Client</option>
//                     {customers.map(c => (
//                       <option key={c.id} value={c.id}>{c.company_name}</option>
//                     ))}
//                   </select>
//                 )}

//                 <div className="border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm flex items-center">
//                   <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
//                   <input type="text" readOnly value={selectedCustomerData?.phone || ""} placeholder="Phone" className="outline-none bg-transparent w-full text-slate-500 font-semibold cursor-not-allowed" />
//                 </div>
                
//                 <input type="text" readOnly value={selectedCustomerData?.gstin || ""} placeholder="Client's GSTIN" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
//                 <input type="text" readOnly value={selectedCustomerData?.billing_address || ""} placeholder="Address" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
                
//                 {showClientEmail && (
//                    <input type="email" value={clientExtras.email} onChange={(e) => setClientExtras({...clientExtras, email: e.target.value})} placeholder="Client Email" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />
//                 )}
//                 {showClientPan && (
//                    <input type="text" value={clientExtras.pan} onChange={(e) => setClientExtras({...clientExtras, pan: e.target.value})} placeholder="Client PAN" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />
//                 )}

//                 <div className="flex gap-5 pt-2">
//                   {!showClientEmail && <span onClick={() => setShowClientEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
//                   {!showClientPan && <span onClick={() => setShowClientPan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Line Items Table */}
//           <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-[#0f172a] text-white text-[11px] uppercase tracking-wider font-bold">
//                 <tr>
//                   <th className="px-5 py-4 w-[30%]">Item</th>
//                   <th className="px-3 py-4 w-[15%]">HSN/SAC</th>
//                   <th className="px-3 py-4 w-[10%]">GST Rate</th>
//                   <th className="px-3 py-4 w-[10%]">Qty</th>
//                   <th className="px-3 py-4 w-[15%]">Rate</th>
//                   <th className="px-5 py-4 text-right w-[20%]">Amount</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 {items.map((item, index) => (
//                   <React.Fragment key={index}>
//                     <tr>
//                       <td colSpan="6" className="px-5 pt-5 pb-1 text-[11px] font-bold text-slate-400 flex justify-between">
//                         ITEM {index + 1}
//                         <button type="button" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} className="text-slate-300 hover:text-rose-500 transition-colors"><Trash2 size={16}/></button>
//                       </td>
//                     </tr>
//                     <tr className="group">
//                       <td className="px-5 pb-5 align-top">
//                         <input type="text" required value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} placeholder="Item Description" className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                       </td>
//                       <td className="px-3 pb-5 align-top">
//                         <input type="text" value={item.hsn_sac_code} onChange={(e) => handleItemChange(index, "hsn_sac_code", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                       </td>
//                       <td className="px-3 pb-5 align-top">
//                         <select value={item.tax_rate} onChange={(e) => handleItemChange(index, "tax_rate", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 bg-transparent transition-colors cursor-pointer">
//                           <option value="0">0 %</option>
//                           <option value="5">5 %</option>
//                           <option value="12">12 %</option>
//                           <option value="18">18 %</option>
//                           <option value="28">28 %</option>
//                         </select>
//                       </td>
//                       <td className="px-3 pb-5 align-top">
//                         <input type="number" min="0.1" step="0.1" required value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                       </td>
//                       <td className="px-3 pb-5 align-top text-slate-500 font-medium flex items-center">
//                          ₹ <input type="number" min="0" step="0.01" required value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="w-[85%] ml-1 border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                       </td>
//                       <td className="px-5 pb-5 align-top text-right font-black text-slate-900 pt-2 text-[15px]">
//                         ₹{(item.quantity * item.rate).toFixed(2)}
//                       </td>
//                     </tr>
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
//           <button type="button" onClick={() => setItems([...items, { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }])} className="w-full border-2 border-dashed border-slate-200 text-[#C5A059] rounded-xl py-3 text-[12px] uppercase tracking-widest font-bold flex items-center justify-center hover:bg-amber-50/50 hover:border-[#C5A059]/30 transition-all mb-12">
//             <Plus size={16} className="mr-2" /> Add New Line
//           </button>

//           {/* Totals Section */}
//           <div className="flex justify-end mb-12">
//             <div className="w-full max-w-sm bg-slate-50/50 p-7 rounded-2xl border border-slate-100 space-y-4">
              
//               <div className="flex justify-between text-sm font-bold text-slate-500">
//                 <span>Subtotal</span>
//                 <span className="text-slate-900">₹{totals.rawSubtotal.toFixed(2)}</span>
//               </div>
              
//               {/* Discount Logic UI */}
//               {showDiscount ? (
//                  <div className="flex justify-between items-center bg-white p-2.5 border border-slate-200 rounded-xl shadow-sm">
//                     <div className="flex gap-2 w-2/3">
//                        <select value={discount.type} onChange={(e) => setDiscount({...discount, type: e.target.value})} className="border border-slate-200 rounded-lg text-xs p-1.5 outline-none font-bold text-slate-700 bg-slate-50 cursor-pointer focus:border-[#C5A059]">
//                          <option value="flat">₹ Flat</option>
//                          <option value="percent">% Percent</option>
//                        </select>
//                        <input type="number" min="0" step="0.1" value={discount.value} onChange={(e) => setDiscount({...discount, value: parseFloat(e.target.value) || 0})} className="border border-slate-200 rounded-lg text-xs p-1.5 w-full outline-none font-bold text-slate-800 focus:border-[#C5A059]" />
//                     </div>
//                     <span className="text-sm text-rose-500 font-black">- ₹{totals.discountAmount.toFixed(2)}</span>
//                  </div>
//               ) : (
//                 <div onClick={() => setShowDiscount(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max">
//                   <Plus size={14} className="mr-1.5"/> Add Discount
//                 </div>
//               )}

//               <div className="flex justify-between text-sm font-bold text-slate-500">
//                 <span>Total GST</span>
//                 <span className="text-slate-900">₹{totals.tax_total.toFixed(2)}</span>
//               </div>

//               <div className="border-t-2 border-dashed border-slate-200 pt-5 flex justify-between items-end mt-2">
//                 <div>
//                   <span className="block text-[16px] font-black tracking-tight text-slate-900">Grand Total</span>
//                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">(INR)</span>
//                 </div>
//                 <span className="text-[24px] font-black text-slate-900 tracking-tight">₹{totals.grand_total.toFixed(2)}</span>
//               </div>
//             </div>
//           </div>

//         </form>
//       </div>

//       {/* Footer Navigation Action Bar */}
//       <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 px-8 z-50 flex gap-4 shadow-[0_-10px_30px_rgba(15,23,42,0.05)] justify-end items-center">
//         <button onClick={() => navigate('/quotations')} className="text-[13px] font-bold text-slate-500 hover:text-slate-800 px-6 py-3 rounded-xl transition-colors mr-auto">
//           Cancel
//         </button>
//         <button 
//           onClick={handleSubmit}
//           disabled={isSubmitting}
//           className="bg-[#0f172a] hover:bg-[#C5A059] text-white text-[13px] font-bold px-8 py-3 rounded-xl transition-all shadow-[0_8px_20px_rgba(15,23,42,0.15)] disabled:opacity-70 flex items-center group"
//         >
//           {isSubmitting ? <Loader2 className="animate-spin mr-2 text-[#C5A059]" size={18} /> : null}
//           <span className="group-hover:text-[#0f172a] transition-colors">Save Quotation</span>
//         </button>
//       </div> 
//     </div>
//   );
// };

// export default CreateQuotation;

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus, Trash2, Save, Loader2, AlertTriangle, Pencil, Image as ImageIcon, ChevronDown, Paperclip, FileText, Mail, Check, X } from "lucide-react";

// const CreateQuotation = () => {
//   const navigate = useNavigate();
//   const logoInputRef = useRef(null);

//   const [customers, setCustomers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);

//   // --- Document Meta State ---
//   const [documentTitle, setDocumentTitle] = useState("Quotation");
//   const [isEditingTitle, setIsEditingTitle] = useState(false);
//   const [validUntil, setValidUntil] = useState("");
//   const [notes, setNotes] = useState("Looking forward to your business.");
//   const [terms, setTerms] = useState("1. Validity: 15 Days\n2. Payment: 100% Advance");
  
//   const [storeLogo, setStoreLogo] = useState(null);

//   const [customFields, setCustomFields] = useState([]);
//   const addCustomField = () => setCustomFields([...customFields, { key: "", value: "" }]);

//   // --- Store Details (Editable) ---
//   const [storeDetails, setStoreDetails] = useState({
//     name: "Your Store Name",
//     phone: "",
//     gstin: "",
//     address: "",
//     city: "",
//     zip: "",
//     email: "",
//     pan: ""
//   });
//   const [showStoreEmail, setShowStoreEmail] = useState(false);
//   const [showStorePan, setShowStorePan] = useState(false);

//   // --- Client Details ---
//   const [customerId, setCustomerId] = useState("");
//   const [isCreatingInlineClient, setIsCreatingInlineClient] = useState(false);
//   const [inlineClient, setInlineClient] = useState({ company_name: "", phone: "" });
//   const [clientExtras, setClientExtras] = useState({ email: "", pan: "" });
//   const [showClientEmail, setShowClientEmail] = useState(false);
//   const [showClientPan, setShowClientPan] = useState(false);

//   // --- Line Items & Math State ---
//   const [items, setItems] = useState([
//     { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }
//   ]);
//   const [discount, setDiscount] = useState({ type: 'flat', value: 0 });
//   const [showDiscount, setShowDiscount] = useState(false);

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/customers", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error("Failed to load clients");
//       const data = await res.json();
//       setCustomers(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setStoreLogo(imageUrl);
//     }
//   };

//   const calculateTotals = () => {
//     let rawSubtotal = 0;
    
//     items.forEach(item => {
//       rawSubtotal += (item.quantity * item.rate);
//     });

//     let discountMultiplier = 0; 
//     let totalDiscountAmount = 0;

//     if (rawSubtotal > 0) {
//       if (discount.type === 'percent') {
//         discountMultiplier = discount.value / 100;
//         totalDiscountAmount = rawSubtotal * discountMultiplier;
//       } else if (discount.type === 'flat') {
//         totalDiscountAmount = Math.min(discount.value, rawSubtotal); 
//         discountMultiplier = totalDiscountAmount / rawSubtotal;
//       }
//     }

//     let proratedSubtotal = 0;
//     let totalTax = 0;

//     const processedItems = items.map(item => {
//       const rawAmount = item.quantity * item.rate;
//       const proratedAmount = rawAmount - (rawAmount * discountMultiplier);
//       const taxAmount = (proratedAmount * item.tax_rate) / 100;
//       const totalAmount = proratedAmount + taxAmount;

//       proratedSubtotal += proratedAmount;
//       totalTax += taxAmount;

//       return {
//         ...item,
//         raw_amount: rawAmount,
//         prorated_taxable_amount: proratedAmount,
//         tax_amount: taxAmount,
//         total_amount: totalAmount
//       };
//     });

//     return {
//       processedItems,
//       rawSubtotal,
//       discountAmount: totalDiscountAmount,
//       tax_total: totalTax,
//       grand_total: proratedSubtotal + totalTax
//     };
//   };

//   const totals = calculateTotals();

//   const handleItemChange = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = field === "name" || field === "hsn_sac_code" ? value : parseFloat(value) || 0;
//     setItems(newItems);
//   };

//   const handleStoreChange = (field, value) => {
//     setStoreDetails(prev => ({ ...prev, [field]: value }));
//   };


//   const handleInlineClientCreate = async () => {
//     if (!inlineClient.company_name) return;
//     try {
//       const token = localStorage.getItem("token");
      
//       // Ensure trailing slash consistency if required by your backend
//       const res = await fetch("http://localhost:8000/api/customers/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify({ 
//           company_name: inlineClient.company_name, 
//           phone: inlineClient.phone,
//           // Add default fallback strings for standard fields that might be required
//           email: "pending@update.com",
//           customer_name: inlineClient.company_name,
//           billing_address: "TBD"
//         })
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         console.error("FastAPI 422 Validation Error:", errorData.detail);
        
//         // Extract exact missing fields from FastAPI's detail array
//         const errorMsg = Array.isArray(errorData.detail) 
//           ? `Missing/Invalid: ${errorData.detail.map(e => e.loc[1]).join(", ")}` 
//           : errorData.detail || "Failed to create client";
          
//         throw new Error(errorMsg);
//       }

//       const newClient = await res.json();
      
//       setCustomers([...customers, newClient]);
//       setCustomerId(newClient.id.toString());
//       setIsCreatingInlineClient(false);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!customerId) {
//       setError("Please select a client.");
//       return;
//     }
//     setIsSubmitting(true);
//     setError(null);

//     const payload = {
//       document_type: "quotation", 
//       document_title: documentTitle,
//       customer_id: parseInt(customerId),
//       valid_until: validUntil ? new Date(validUntil).toISOString() : null,
//       subtotal: totals.rawSubtotal,
//       discount_total: totals.discountAmount,
//       tax_total: totals.tax_total,
//       grand_total: totals.grand_total,
//       terms_conditions: terms,
//       notes: notes,
//       items: totals.processedItems,
//       custom_fields: customFields,
//       store_details: storeDetails, 
//       client_extras: clientExtras
//     };

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/quotations", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify(payload)
//       });
//       if (!res.ok) throw new Error("Failed to generate quotation");
//       navigate("/quotations");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const selectedCustomerData = customers.find(c => c.id === parseInt(customerId));

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#fbfaf8]">
//         <Loader2 className="animate-spin text-[#C5A059]" size={32} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen relative font-sans pb-32">
      
//       {/* --- Premium Executive Background --- */}
//       <div className="fixed inset-0 pointer-events-none z-0 bg-[#fbfaf8] overflow-hidden">
//         {/* Volumetric Ambient Lighting */}
//         <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_70%)] blur-[80px]" />
//         <div className="absolute bottom-[-20%] left-[-10%] w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.06)_0%,transparent_70%)] blur-[100px]" />
//         <div className="absolute top-[30%] left-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.03)_0%,transparent_70%)] blur-[120px] mix-blend-multiply" />
        
//         {/* Micro-texture for depth (Brushed/Matte feel) */}
//         <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbfaf8]/80 to-[#fbfaf8]" />
//       </div>

//       <input 
//         type="file" 
//         ref={logoInputRef} 
//         onChange={handleLogoUpload} 
//         accept="image/png, image/jpeg" 
//         className="hidden" 
//       />

//       <div className="relative z-10 py-10 px-4 sm:px-8">
//         {/* Top Stepper */}
//         <div className="flex flex-col items-center pt-2 pb-8">
//           <h1 className="text-[22px] font-black tracking-tight text-slate-900 mb-4">New Quotation</h1>
//           <div className="flex items-center text-sm font-bold">
//             <div className="flex items-center text-[#0f172a]">
//               <span className="w-6 h-6 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-[11px] mr-2 shadow-md">1</span>
//               Quotation Details
//             </div>
//             <ChevronDown className="w-4 h-4 mx-4 text-slate-300 -rotate-90" />
//             <div className="flex items-center text-slate-400">
//               <span className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center text-[11px] mr-2">2</span>
//               Design & Share
//             </div>
//           </div>
//         </div>

//         <div className="max-w-[1050px] mx-auto bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,.06)] border border-slate-100 rounded-[31px] p-8 sm:p-12">
          
//           {error && (
//             <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-600">
//               <AlertTriangle size={20} className="shrink-0 mt-0.5" />
//               <p className="text-sm font-bold">{error}</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
            
//             {/* Header Section */}
//             <div className="flex flex-col items-center mb-12">
//               <div className="flex items-center gap-2 border-b-2 border-dashed border-slate-200 pb-2">
//                 {isEditingTitle ? (
//                   <div className="flex items-center gap-3">
//                     <input 
//                       type="text" 
//                       value={documentTitle} 
//                       onChange={(e) => setDocumentTitle(e.target.value)} 
//                       className="text-[32px] font-black text-slate-900 outline-none border-b border-[#C5A059] bg-transparent text-center"
//                       autoFocus
//                     />
//                     <button type="button" onClick={() => setIsEditingTitle(false)} className="text-emerald-500 hover:bg-emerald-50 p-1.5 rounded-lg transition-colors"><Check size={22}/></button>
//                   </div>
//                 ) : (
//                   <>
//                     <h1 className="text-[32px] font-black text-slate-900 tracking-tight">{documentTitle}</h1>
//                     <Pencil size={18} className="text-slate-300 cursor-pointer hover:text-[#C5A059] transition-colors ml-2" onClick={() => setIsEditingTitle(true)} />
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* Meta & Functional Logo Section */}
//             <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
//               <div className="space-y-4 w-full md:w-96">
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//                   <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Quotation No*</span>
//                   <input type="text" defaultValue="Auto-generated" disabled className="text-sm font-semibold text-right bg-transparent outline-none text-slate-400 w-32" />
//                 </div>
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//                   <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Date*</span>
//                   <span className="text-sm font-bold text-slate-900 text-right w-32">{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
//                 </div>
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-2 group">
//                   <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Valid Until</span>
//                   <input 
//                     type="date" 
//                     value={validUntil}
//                     onChange={(e) => setValidUntil(e.target.value)}
//                     className="text-sm font-bold text-right bg-transparent outline-none text-slate-700 w-36 group-focus-within:text-[#C5A059] cursor-pointer transition-colors" 
//                   />
//                 </div>
                
//                 {customFields.map((field, idx) => (
//                   <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-2 gap-2">
//                     <input type="text" placeholder="Custom Label" value={field.key} onChange={(e) => {
//                       const newFields = [...customFields]; newFields[idx].key = e.target.value; setCustomFields(newFields);
//                     }} className="text-[13px] font-bold text-slate-700 uppercase tracking-wide bg-transparent outline-none w-1/2 focus:text-[#C5A059]" />
//                     <input type="text" placeholder="Value" value={field.value} onChange={(e) => {
//                       const newFields = [...customFields]; newFields[idx].value = e.target.value; setCustomFields(newFields);
//                     }} className="text-sm font-semibold text-right text-slate-900 bg-transparent outline-none w-1/2" />
//                     <X size={16} className="text-rose-400 cursor-pointer hover:scale-110 transition-transform" onClick={() => setCustomFields(customFields.filter((_, i) => i !== idx))} />
//                   </div>
//                 ))}
                
//                 <div className="pt-2">
//                   <span onClick={addCustomField} className="text-[12px] font-bold text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max uppercase tracking-wider">
//                     <Plus size={14} className="mr-1" /> Add Custom Fields
//                   </span>
//                 </div>
//               </div>

//               {/* Functional Logo Box */}
//               <div 
//                 onClick={() => logoInputRef.current.click()}
//                 className="w-full md:w-56 h-36 border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-2xl flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-amber-50/30 hover:border-[#C5A059]/30 transition-all relative group"
//               >
//                 {storeLogo ? (
//                   <>
//                     <img src={storeLogo} alt="Business Logo" className="w-full h-full object-contain rounded-xl" />
//                     <button 
//                       type="button"
//                       onClick={(e) => { e.stopPropagation(); setStoreLogo(null); }}
//                       className="absolute top-2 right-2 bg-rose-500 text-white rounded-full p-1.5 shadow-md hover:bg-rose-600 transition-colors opacity-0 group-hover:opacity-100"
//                     >
//                       <X size={14} />
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <ImageIcon size={28} className="text-slate-300 mb-3 group-hover:text-[#C5A059] transition-colors" />
//                     <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Add Logo<br/>Max 1080x1080</span>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* Details Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              
//               {/* Your Details */}
//               <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
//                 <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Your Details</h3>
//                 <div className="space-y-3.5">
//                   <input type="text" value={storeDetails.name} onChange={(e) => handleStoreChange('name', e.target.value)} className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors" />
//                   <div className="border border-slate-200 bg-white rounded-xl p-2.5 text-sm flex items-center focus-within:border-[#C5A059] transition-colors">
//                     <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
//                     <input type="text" value={storeDetails.phone} onChange={(e) => handleStoreChange('phone', e.target.value)} placeholder="Phone" className="outline-none bg-transparent w-full font-semibold text-slate-800" />
//                   </div>
//                   <input type="text" value={storeDetails.gstin} onChange={(e) => handleStoreChange('gstin', e.target.value)} placeholder="Your GSTIN (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   <input type="text" value={storeDetails.address} onChange={(e) => handleStoreChange('address', e.target.value)} placeholder="Address (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   <div className="flex gap-3">
//                     <input type="text" value={storeDetails.city} onChange={(e) => handleStoreChange('city', e.target.value)} placeholder="City (optional)" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                     <input type="text" value={storeDetails.zip} onChange={(e) => handleStoreChange('zip', e.target.value)} placeholder="Postal Code" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   </div>
                  
//                   {showStoreEmail && (
//                     <input type="email" value={storeDetails.email} onChange={(e) => handleStoreChange('email', e.target.value)} placeholder="Email Address" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />
//                   )}
//                   {showStorePan && (
//                     <input type="text" value={storeDetails.pan} onChange={(e) => handleStoreChange('pan', e.target.value)} placeholder="PAN Number" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />
//                   )}

//                   <div className="flex gap-5 pt-2">
//                     {!showStoreEmail && <span onClick={() => setShowStoreEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
//                     {!showStorePan && <span onClick={() => setShowStorePan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
//                   </div>
//                 </div>
//               </div>

//               {/* Client Details */}
//               <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
//                 <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Client Details</h3>
//                 <div className="space-y-3.5">
                  
//                   {isCreatingInlineClient ? (
//                     <div className="bg-amber-50/30 p-4 rounded-xl border border-amber-200 mb-2">
//                       <input type="text" placeholder="Client Business Name*" value={inlineClient.company_name} onChange={(e) => setInlineClient({...inlineClient, company_name: e.target.value})} className="w-full mb-3 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-bold text-slate-800" autoFocus/>
//                       <input type="text" placeholder="Phone Number (optional)" value={inlineClient.phone} onChange={(e) => setInlineClient({...inlineClient, phone: e.target.value})} className="w-full mb-4 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-semibold text-slate-800"/>
//                       <div className="flex gap-2">
//                         <button type="button" onClick={handleInlineClientCreate} className="bg-[#0f172a] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-[#C5A059] transition-colors">Save & Select</button>
//                         <button type="button" onClick={() => setIsCreatingInlineClient(false)} className="text-slate-500 hover:text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-2 transition-colors">Cancel</button>
//                       </div>
//                     </div>
//                   ) : (
//                     <select 
//                       required
//                       value={customerId} 
//                       onChange={(e) => {
//                         if(e.target.value === "NEW") setIsCreatingInlineClient(true);
//                         else setCustomerId(e.target.value);
//                       }}
//                       className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors cursor-pointer"
//                     >
//                       <option value="">Select a Client (required)</option>
//                       <option value="NEW" className="font-bold text-[#C5A059]">+ Create New Client</option>
//                       {customers.map(c => (
//                         <option key={c.id} value={c.id}>{c.company_name}</option>
//                       ))}
//                     </select>
//                   )}

//                   <div className="border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm flex items-center">
//                     <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
//                     <input type="text" readOnly value={selectedCustomerData?.phone || ""} placeholder="Phone" className="outline-none bg-transparent w-full text-slate-500 font-semibold cursor-not-allowed" />
//                   </div>
                  
//                   <input type="text" readOnly value={selectedCustomerData?.gstin || ""} placeholder="Client's GSTIN" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
//                   <input type="text" readOnly value={selectedCustomerData?.billing_address || ""} placeholder="Address" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
                  
//                   {showClientEmail && (
//                     <input type="email" value={clientExtras.email} onChange={(e) => setClientExtras({...clientExtras, email: e.target.value})} placeholder="Client Email" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />
//                   )}
//                   {showClientPan && (
//                     <input type="text" value={clientExtras.pan} onChange={(e) => setClientExtras({...clientExtras, pan: e.target.value})} placeholder="Client PAN" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />
//                   )}

//                   <div className="flex gap-5 pt-2">
//                     {!showClientEmail && <span onClick={() => setShowClientEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
//                     {!showClientPan && <span onClick={() => setShowClientPan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Line Items Table */}
//             <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-[#0f172a] text-white text-[11px] uppercase tracking-wider font-bold">
//                   <tr>
//                     <th className="px-5 py-4 w-[30%]">Item</th>
//                     <th className="px-3 py-4 w-[15%]">HSN/SAC</th>
//                     <th className="px-3 py-4 w-[10%]">GST Rate</th>
//                     <th className="px-3 py-4 w-[10%]">Qty</th>
//                     <th className="px-3 py-4 w-[15%]">Rate</th>
//                     <th className="px-5 py-4 text-right w-[20%]">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white">
//                   {items.map((item, index) => (
//                     <React.Fragment key={index}>
//                       <tr>
//                         <td colSpan="6" className="px-5 pt-5 pb-1 text-[11px] font-bold text-slate-400 flex justify-between">
//                           ITEM {index + 1}
//                           <button type="button" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} className="text-slate-300 hover:text-rose-500 transition-colors"><Trash2 size={16}/></button>
//                         </td>
//                       </tr>
//                       <tr className="group">
//                         <td className="px-5 pb-5 align-top">
//                           <input type="text" required value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} placeholder="Item Description" className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-3 pb-5 align-top">
//                           <input type="text" value={item.hsn_sac_code} onChange={(e) => handleItemChange(index, "hsn_sac_code", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-3 pb-5 align-top">
//                           <select value={item.tax_rate} onChange={(e) => handleItemChange(index, "tax_rate", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 bg-transparent transition-colors cursor-pointer">
//                             <option value="0">0 %</option>
//                             <option value="5">5 %</option>
//                             <option value="12">12 %</option>
//                             <option value="18">18 %</option>
//                             <option value="28">28 %</option>
//                           </select>
//                         </td>
//                         <td className="px-3 pb-5 align-top">
//                           <input type="number" min="0.1" step="0.1" required value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-3 pb-5 align-top text-slate-500 font-medium flex items-center">
//                            ₹ <input type="number" min="0" step="0.01" required value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="w-[85%] ml-1 border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-5 pb-5 align-top text-right font-black text-slate-900 pt-2 text-[15px]">
//                           ₹{(item.quantity * item.rate).toFixed(2)}
//                         </td>
//                       </tr>
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             <button type="button" onClick={() => setItems([...items, { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }])} className="w-full border-2 border-dashed border-slate-200 text-[#C5A059] rounded-xl py-3 text-[12px] uppercase tracking-widest font-bold flex items-center justify-center hover:bg-amber-50/50 hover:border-[#C5A059]/30 transition-all mb-12">
//               <Plus size={16} className="mr-2" /> Add New Line
//             </button>

//             {/* Totals Section */}
//             <div className="flex justify-end mb-12">
//               <div className="w-full max-w-sm bg-slate-50/50 p-7 rounded-2xl border border-slate-100 space-y-4">
                
//                 <div className="flex justify-between text-sm font-bold text-slate-500">
//                   <span>Subtotal</span>
//                   <span className="text-slate-900">₹{totals.rawSubtotal.toFixed(2)}</span>
//                 </div>
                
//                 {/* Discount Logic UI */}
//                 {showDiscount ? (
//                    <div className="flex justify-between items-center bg-white p-2.5 border border-slate-200 rounded-xl shadow-sm">
//                       <div className="flex gap-2 w-2/3">
//                          <select value={discount.type} onChange={(e) => setDiscount({...discount, type: e.target.value})} className="border border-slate-200 rounded-lg text-xs p-1.5 outline-none font-bold text-slate-700 bg-slate-50 cursor-pointer focus:border-[#C5A059]">
//                            <option value="flat">₹ Flat</option>
//                            <option value="percent">% Percent</option>
//                          </select>
//                          <input type="number" min="0" step="0.1" value={discount.value} onChange={(e) => setDiscount({...discount, value: parseFloat(e.target.value) || 0})} className="border border-slate-200 rounded-lg text-xs p-1.5 w-full outline-none font-bold text-slate-800 focus:border-[#C5A059]" />
//                       </div>
//                       <span className="text-sm text-rose-500 font-black">- ₹{totals.discountAmount.toFixed(2)}</span>
//                    </div>
//                 ) : (
//                   <div onClick={() => setShowDiscount(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max">
//                     <Plus size={14} className="mr-1.5"/> Add Discount
//                   </div>
//                 )}

//                 <div className="flex justify-between text-sm font-bold text-slate-500">
//                   <span>Total GST</span>
//                   <span className="text-slate-900">₹{totals.tax_total.toFixed(2)}</span>
//                 </div>

//                 <div className="border-t-2 border-dashed border-slate-200 pt-5 flex justify-between items-end mt-2">
//                   <div>
//                     <span className="block text-[16px] font-black tracking-tight text-slate-900">Grand Total</span>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">(INR)</span>
//                   </div>
//                   <span className="text-[24px] font-black text-slate-900 tracking-tight">₹{totals.grand_total.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>

         
// {/* Totals Section */}
//             <div className="flex justify-end mb-8">
//               <div className="w-full max-w-sm bg-slate-50/50 p-7 rounded-2xl border border-slate-100 space-y-4">
                
//                 {/* ... (Your existing Totals Code is here) ... */}
                
//                 <div className="border-t-2 border-dashed border-slate-200 pt-5 flex justify-between items-end mt-2">
//                   <div>
//                     <span className="block text-[16px] font-black tracking-tight text-slate-900">Grand Total</span>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">(INR)</span>
//                   </div>
//                   <span className="text-[24px] font-black text-slate-900 tracking-tight">₹{totals.grand_total.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>

//             {/* --- NEW INLINE ACTION BAR --- */}
//             <div className="flex items-center justify-between border-t border-slate-100 pt-8 mt-8">
//               <button 
//                 type="button" 
//                 onClick={() => navigate('/quotations')} 
//                 className="text-[13px] font-bold text-slate-500 hover:text-slate-800 px-6 py-3 rounded-xl transition-colors"
//               >
//                 Cancel
//               </button>
              
//               <button 
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-[#0f172a] hover:bg-[#C5A059] text-white text-[13px] font-bold px-8 py-3 rounded-xl transition-all shadow-[0_8px_20px_rgba(15,23,42,0.15)] disabled:opacity-70 flex items-center group"
//               >
//                 {isSubmitting ? <Loader2 className="animate-spin mr-2 text-[#C5A059]" size={18} /> : null}
//                 <span className="group-hover:text-[#0f172a] transition-colors">Save Quotation</span>
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };



// export default CreateQuotation;

 {/* </form>
        </div>
      </div> */}

      {/* Footer Navigation Action Bar
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 px-8 z-50 flex gap-4 shadow-[0_-10px_30px_rgba(15,23,42,0.05)] justify-end items-center">
        <button onClick={() => navigate('/quotations')} className="text-[13px] font-bold text-slate-500 hover:text-slate-800 px-6 py-3 rounded-xl transition-colors mr-auto">
          Cancel
        </button>
        <button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-[#0f172a] hover:bg-[#C5A059] text-white text-[13px] font-bold px-8 py-3 rounded-xl transition-all shadow-[0_8px_20px_rgba(15,23,42,0.15)] disabled:opacity-70 flex items-center group"
        >
          {isSubmitting ? <Loader2 className="animate-spin mr-2 text-[#C5A059]" size={18} /> : null}
          <span className="group-hover:text-[#0f172a] transition-colors">Save Quotation</span>
        </button>
      </div> 
    </div>
  );
}; */}



// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus, Trash2, Loader2, AlertTriangle, Pencil, Image as ImageIcon, ChevronDown, Mail, Check, X } from "lucide-react";

// const CreateQuotation = () => {
//   const navigate = useNavigate();
//   const logoInputRef = useRef(null);

//   const [customers, setCustomers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);

//   // --- Document Meta State ---
//   const [documentTitle, setDocumentTitle] = useState("Quotation");
//   const [isEditingTitle, setIsEditingTitle] = useState(false);
//   const [validUntil, setValidUntil] = useState("");
//   const [notes, setNotes] = useState("Looking forward to your business.");
//   const [terms, setTerms] = useState("1. Validity: 15 Days\n2. Payment: 100% Advance");
  
//   const [storeLogo, setStoreLogo] = useState(null);

//   const [customFields, setCustomFields] = useState([]);
//   const addCustomField = () => setCustomFields([...customFields, { key: "", value: "" }]);

//   // --- Store Details (Editable) ---
//   const [storeDetails, setStoreDetails] = useState({
//     name: "Your Store Name",
//     phone: "",
//     gstin: "",
//     address: "",
//     city: "",
//     zip: "",
//     email: "",
//     pan: ""
//   });
//   const [showStoreEmail, setShowStoreEmail] = useState(false);
//   const [showStorePan, setShowStorePan] = useState(false);

//   // --- Client Details ---
//   const [customerId, setCustomerId] = useState("");
//   const [isCreatingInlineClient, setIsCreatingInlineClient] = useState(false);
//   const [inlineClient, setInlineClient] = useState({ company_name: "", phone: "" });
//   const [clientExtras, setClientExtras] = useState({ email: "", pan: "" });
//   const [showClientEmail, setShowClientEmail] = useState(false);
//   const [showClientPan, setShowClientPan] = useState(false);

//   // --- Line Items & Math State ---
//   const [items, setItems] = useState([
//     { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }
//   ]);
//   const [discount, setDiscount] = useState({ type: 'flat', value: 0 });
//   const [showDiscount, setShowDiscount] = useState(false);

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/customers", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error("Failed to load clients");
//       const data = await res.json();
//       setCustomers(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setStoreLogo(imageUrl);
//     }
//   };

//   const calculateTotals = () => {
//     let rawSubtotal = 0;
    
//     items.forEach(item => {
//       rawSubtotal += (item.quantity * item.rate);
//     });

//     let discountMultiplier = 0; 
//     let totalDiscountAmount = 0;

//     if (rawSubtotal > 0) {
//       if (discount.type === 'percent') {
//         discountMultiplier = discount.value / 100;
//         totalDiscountAmount = rawSubtotal * discountMultiplier;
//       } else if (discount.type === 'flat') {
//         totalDiscountAmount = Math.min(discount.value, rawSubtotal); 
//         discountMultiplier = totalDiscountAmount / rawSubtotal;
//       }
//     }

//     let proratedSubtotal = 0;
//     let totalTax = 0;

//     const processedItems = items.map(item => {
//       const rawAmount = item.quantity * item.rate;
//       const proratedAmount = rawAmount - (rawAmount * discountMultiplier);
//       const taxAmount = (proratedAmount * item.tax_rate) / 100;
      
//       // Calculate CGST and SGST fractions (50/50 split of the total tax amount)
//       const cgst = taxAmount / 2;
//       const sgst = taxAmount / 2;
      
//       const totalAmount = proratedAmount + taxAmount;

//       proratedSubtotal += proratedAmount;
//       totalTax += taxAmount;

//       return {
//         ...item,
//         raw_amount: rawAmount,
//         prorated_taxable_amount: proratedAmount,
//         tax_amount: taxAmount,
//         cgst: cgst,
//         sgst: sgst,
//         total_amount: totalAmount
//       };
//     });

//     return {
//       processedItems,
//       rawSubtotal,
//       discountAmount: totalDiscountAmount,
//       tax_total: totalTax,
//       grand_total: proratedSubtotal + totalTax
//     };
//   };

//   const totals = calculateTotals();

//   const handleItemChange = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = field === "name" || field === "hsn_sac_code" ? value : parseFloat(value) || 0;
//     setItems(newItems);
//   };

//   const handleStoreChange = (field, value) => {
//     setStoreDetails(prev => ({ ...prev, [field]: value }));
//   };

//   const handleInlineClientCreate = async () => {
//     if (!inlineClient.company_name) return;
//     try {
//       const token = localStorage.getItem("token");
      
//       const res = await fetch("http://localhost:8000/api/customers/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify({ 
//           company_name: inlineClient.company_name, 
//           phone: inlineClient.phone,
//           email: "pending@update.com",
//           customer_name: inlineClient.company_name,
//           billing_address: "TBD"
//         })
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         console.error("FastAPI 422 Validation Error:", errorData.detail);
        
//         const errorMsg = Array.isArray(errorData.detail) 
//           ? `Missing/Invalid: ${errorData.detail.map(e => e.loc[1]).join(", ")}` 
//           : errorData.detail || "Failed to create client";
          
//         throw new Error(errorMsg);
//       }

//       const newClient = await res.json();
      
//       setCustomers([...customers, newClient]);
//       setCustomerId(newClient.id.toString());
//       setIsCreatingInlineClient(false);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!customerId) {
//       setError("Please select a client.");
//       return;
//     }
//     setIsSubmitting(true);
//     setError(null);

//     const payload = {
//       document_type: "quotation", 
//       document_title: documentTitle,
//       customer_id: parseInt(customerId),
//       valid_until: validUntil ? new Date(validUntil).toISOString() : null,
//       subtotal: totals.rawSubtotal,
//       discount_total: totals.discountAmount,
//       tax_total: totals.tax_total,
//       grand_total: totals.grand_total,
//       terms_conditions: terms,
//       notes: notes,
//       items: totals.processedItems,
//       custom_fields: customFields,
//       store_details: storeDetails, 
//       client_extras: clientExtras
//     };

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/quotations", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify(payload)
//       });
//       if (!res.ok) throw new Error("Failed to generate quotation");
//       navigate("/quotations");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const selectedCustomerData = customers.find(c => c.id === parseInt(customerId));

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#fbfaf8]">
//         <Loader2 className="animate-spin text-[#C5A059]" size={32} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen relative font-sans pb-12">
      
//       <div className="fixed inset-0 pointer-events-none z-0 bg-[#fbfaf8] overflow-hidden">
//         <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_70%)] blur-[80px]" />
//         <div className="absolute bottom-[-20%] left-[-10%] w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.06)_0%,transparent_70%)] blur-[100px]" />
//         <div className="absolute top-[30%] left-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.03)_0%,transparent_70%)] blur-[120px] mix-blend-multiply" />
//         <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbfaf8]/80 to-[#fbfaf8]" />
//       </div>

//       <input 
//         type="file" 
//         ref={logoInputRef} 
//         onChange={handleLogoUpload} 
//         accept="image/png, image/jpeg" 
//         className="hidden" 
//       />

//       <div className="relative z-10 py-10 px-4 sm:px-8">
//         <div className="flex flex-col items-center pt-2 pb-8">
//           <h1 className="text-[22px] font-black tracking-tight text-slate-900 mb-4">New Quotation</h1>
//           <div className="flex items-center text-sm font-bold">
//             <div className="flex items-center text-[#0f172a]">
//               <span className="w-6 h-6 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-[11px] mr-2 shadow-md">1</span>
//               Quotation Details
//             </div>
//             <ChevronDown className="w-4 h-4 mx-4 text-slate-300 -rotate-90" />
//             <div className="flex items-center text-slate-400">
//               <span className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center text-[11px] mr-2">2</span>
//               Design & Share
//             </div>
//           </div>
//         </div>

//         <div className="max-w-[1050px] mx-auto bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,.06)] border border-slate-100 rounded-[31px] p-8 sm:p-12">
          
//           {error && (
//             <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-600">
//               <AlertTriangle size={20} className="shrink-0 mt-0.5" />
//               <p className="text-sm font-bold">{error}</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
            
//             <div className="flex flex-col items-center mb-12">
//               <div className="flex items-center gap-2 border-b-2 border-dashed border-slate-200 pb-2">
//                 {isEditingTitle ? (
//                   <div className="flex items-center gap-3">
//                     <input 
//                       type="text" 
//                       value={documentTitle} 
//                       onChange={(e) => setDocumentTitle(e.target.value)} 
//                       className="text-[32px] font-black text-slate-900 outline-none border-b border-[#C5A059] bg-transparent text-center"
//                       autoFocus
//                     />
//                     <button type="button" onClick={() => setIsEditingTitle(false)} className="text-emerald-500 hover:bg-emerald-50 p-1.5 rounded-lg transition-colors"><Check size={22}/></button>
//                   </div>
//                 ) : (
//                   <>
//                     <h1 className="text-[32px] font-black text-slate-900 tracking-tight">{documentTitle}</h1>
//                     <Pencil size={18} className="text-slate-300 cursor-pointer hover:text-[#C5A059] transition-colors ml-2" onClick={() => setIsEditingTitle(true)} />
//                   </>
//                 )}
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
//               <div className="space-y-4 w-full md:w-96">
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//                   <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Quotation No*</span>
//                   <input type="text" defaultValue="Auto-generated" disabled className="text-sm font-semibold text-right bg-transparent outline-none text-slate-400 w-32" />
//                 </div>
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//                   <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Date*</span>
//                   <span className="text-sm font-bold text-slate-900 text-right w-32">{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
//                 </div>
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-2 group">
//                   <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Valid Until</span>
//                   <input 
//                     type="date" 
//                     value={validUntil}
//                     onChange={(e) => setValidUntil(e.target.value)}
//                     className="text-sm font-bold text-right bg-transparent outline-none text-slate-700 w-36 group-focus-within:text-[#C5A059] cursor-pointer transition-colors" 
//                   />
//                 </div>
                
//                 {customFields.map((field, idx) => (
//                   <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-2 gap-2">
//                     <input type="text" placeholder="Custom Label" value={field.key} onChange={(e) => {
//                       const newFields = [...customFields]; newFields[idx].key = e.target.value; setCustomFields(newFields);
//                     }} className="text-[13px] font-bold text-slate-700 uppercase tracking-wide bg-transparent outline-none w-1/2 focus:text-[#C5A059]" />
//                     <input type="text" placeholder="Value" value={field.value} onChange={(e) => {
//                       const newFields = [...customFields]; newFields[idx].value = e.target.value; setCustomFields(newFields);
//                     }} className="text-sm font-semibold text-right text-slate-900 bg-transparent outline-none w-1/2" />
//                     <X size={16} className="text-rose-400 cursor-pointer hover:scale-110 transition-transform" onClick={() => setCustomFields(customFields.filter((_, i) => i !== idx))} />
//                   </div>
//                 ))}
                
//                 <div className="pt-2">
//                   <span onClick={addCustomField} className="text-[12px] font-bold text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max uppercase tracking-wider">
//                     <Plus size={14} className="mr-1" /> Add Custom Fields
//                   </span>
//                 </div>
//               </div>

//               <div 
//                 onClick={() => logoInputRef.current.click()}
//                 className="w-full md:w-56 h-36 border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-2xl flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-amber-50/30 hover:border-[#C5A059]/30 transition-all relative group"
//               >
//                 {storeLogo ? (
//                   <>
//                     <img src={storeLogo} alt="Business Logo" className="w-full h-full object-contain rounded-xl" />
//                     <button 
//                       type="button"
//                       onClick={(e) => { e.stopPropagation(); setStoreLogo(null); }}
//                       className="absolute top-2 right-2 bg-rose-500 text-white rounded-full p-1.5 shadow-md hover:bg-rose-600 transition-colors opacity-0 group-hover:opacity-100"
//                     >
//                       <X size={14} />
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <ImageIcon size={28} className="text-slate-300 mb-3 group-hover:text-[#C5A059] transition-colors" />
//                     <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Add Logo<br/>Max 1080x1080</span>
//                   </>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//               <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
//                 <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Your Details</h3>
//                 <div className="space-y-3.5">
//                   <input type="text" value={storeDetails.name} onChange={(e) => handleStoreChange('name', e.target.value)} className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors" />
//                   <div className="border border-slate-200 bg-white rounded-xl p-2.5 text-sm flex items-center focus-within:border-[#C5A059] transition-colors">
//                     <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
//                     <input type="text" value={storeDetails.phone} onChange={(e) => handleStoreChange('phone', e.target.value)} placeholder="Phone" className="outline-none bg-transparent w-full font-semibold text-slate-800" />
//                   </div>
//                   <input type="text" value={storeDetails.gstin} onChange={(e) => handleStoreChange('gstin', e.target.value)} placeholder="Your GSTIN (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   <input type="text" value={storeDetails.address} onChange={(e) => handleStoreChange('address', e.target.value)} placeholder="Address (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   <div className="flex gap-3">
//                     <input type="text" value={storeDetails.city} onChange={(e) => handleStoreChange('city', e.target.value)} placeholder="City (optional)" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                     <input type="text" value={storeDetails.zip} onChange={(e) => handleStoreChange('zip', e.target.value)} placeholder="Postal Code" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   </div>
                  
//                   {showStoreEmail && (
//                     <input type="email" value={storeDetails.email} onChange={(e) => handleStoreChange('email', e.target.value)} placeholder="Email Address" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />
//                   )}
//                   {showStorePan && (
//                     <input type="text" value={storeDetails.pan} onChange={(e) => handleStoreChange('pan', e.target.value)} placeholder="PAN Number" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />
//                   )}

//                   <div className="flex gap-5 pt-2">
//                     {!showStoreEmail && <span onClick={() => setShowStoreEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
//                     {!showStorePan && <span onClick={() => setShowStorePan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
//                 <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Client Details</h3>
//                 <div className="space-y-3.5">
                  
//                   {isCreatingInlineClient ? (
//                     <div className="bg-amber-50/30 p-4 rounded-xl border border-amber-200 mb-2">
//                       <input type="text" placeholder="Client Business Name*" value={inlineClient.company_name} onChange={(e) => setInlineClient({...inlineClient, company_name: e.target.value})} className="w-full mb-3 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-bold text-slate-800" autoFocus/>
//                       <input type="text" placeholder="Phone Number (optional)" value={inlineClient.phone} onChange={(e) => setInlineClient({...inlineClient, phone: e.target.value})} className="w-full mb-4 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-semibold text-slate-800"/>
//                       <div className="flex gap-2">
//                         <button type="button" onClick={handleInlineClientCreate} className="bg-[#0f172a] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-[#C5A059] transition-colors">Save & Select</button>
//                         <button type="button" onClick={() => setIsCreatingInlineClient(false)} className="text-slate-500 hover:text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-2 transition-colors">Cancel</button>
//                       </div>
//                     </div>
//                   ) : (
//                     <select 
//                       required
//                       value={customerId} 
//                       onChange={(e) => {
//                         if(e.target.value === "NEW") setIsCreatingInlineClient(true);
//                         else setCustomerId(e.target.value);
//                       }}
//                       className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors cursor-pointer"
//                     >
//                       <option value="">Select a Client (required)</option>
//                       <option value="NEW" className="font-bold text-[#C5A059]">+ Create New Client</option>
//                       {customers.map(c => (
//                         <option key={c.id} value={c.id}>{c.company_name}</option>
//                       ))}
//                     </select>
//                   )}

//                   <div className="border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm flex items-center">
//                     <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
//                     <input type="text" readOnly value={selectedCustomerData?.phone || ""} placeholder="Phone" className="outline-none bg-transparent w-full text-slate-500 font-semibold cursor-not-allowed" />
//                   </div>
                  
//                   <input type="text" readOnly value={selectedCustomerData?.gstin || ""} placeholder="Client's GSTIN" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
//                   <input type="text" readOnly value={selectedCustomerData?.billing_address || ""} placeholder="Address" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
                  
//                   {showClientEmail && (
//                     <input type="email" value={clientExtras.email} onChange={(e) => setClientExtras({...clientExtras, email: e.target.value})} placeholder="Client Email" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />
//                   )}
//                   {showClientPan && (
//                     <input type="text" value={clientExtras.pan} onChange={(e) => setClientExtras({...clientExtras, pan: e.target.value})} placeholder="Client PAN" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />
//                   )}

//                   <div className="flex gap-5 pt-2">
//                     {!showClientEmail && <span onClick={() => setShowClientEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
//                     {!showClientPan && <span onClick={() => setShowClientPan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Line Items Table Updated for 9 Columns */}
//             <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-[#0f172a] text-white text-[11px] uppercase tracking-wider font-bold">
//                   <tr>
//                     <th className="px-4 py-4 w-[22%]">Item</th>
//                     <th className="px-2 py-4 w-[10%]">HSN/SAC</th>
//                     <th className="px-2 py-4 w-[10%]">GST Rate</th>
//                     <th className="px-2 py-4 w-[8%]">Qty</th>
//                     <th className="px-2 py-4 w-[12%]">Rate</th>
//                     <th className="px-2 py-4 w-[10%] text-right">Amount</th>
//                     <th className="px-2 py-4 w-[9%] text-right">CGST</th>
//                     <th className="px-2 py-4 w-[9%] text-right">SGST</th>
//                     <th className="px-4 py-4 w-[10%] text-right">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white">
//                   {totals.processedItems.map((item, index) => (
//                     <React.Fragment key={index}>
//                       <tr>
//                         <td colSpan="9" className="px-4 pt-5 pb-1 text-[11px] font-bold text-slate-400 flex justify-between">
//                           ITEM {index + 1}
//                           <button type="button" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} className="text-slate-300 hover:text-rose-500 transition-colors"><Trash2 size={16}/></button>
//                         </td>
//                       </tr>
//                       <tr className="group">
//                         <td className="px-4 pb-5 align-top">
//                           <input type="text" required value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} placeholder="Description" className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-2 pb-5 align-top">
//                           <input type="text" value={item.hsn_sac_code} onChange={(e) => handleItemChange(index, "hsn_sac_code", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-2 pb-5 align-top">
//                           <select value={item.tax_rate} onChange={(e) => handleItemChange(index, "tax_rate", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 bg-transparent transition-colors cursor-pointer">
//                             <option value="0">0 %</option>
//                             <option value="5">5 %</option>
//                             <option value="12">12 %</option>
//                             <option value="18">18 %</option>
//                             <option value="28">28 %</option>
//                           </select>
//                         </td>
//                         <td className="px-2 pb-5 align-top">
//                           <input type="number" min="0.1" step="0.1" required value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-2 pb-5 align-top text-slate-500 font-medium flex items-center">
//                            ₹ <input type="number" min="0" step="0.01" required value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="w-[85%] ml-1 border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
                        
//                         {/* Dynamically Calcuated Math Columns */}
//                         <td className="px-2 pb-5 align-top text-right font-bold text-slate-700 pt-2 text-[13px]">
//                           ₹{item.prorated_taxable_amount.toFixed(2)}
//                         </td>
//                         <td className="px-2 pb-5 align-top text-right font-semibold text-slate-500 pt-2 text-[13px]">
//                           ₹{item.cgst.toFixed(2)}
//                         </td>
//                         <td className="px-2 pb-5 align-top text-right font-semibold text-slate-500 pt-2 text-[13px]">
//                           ₹{item.sgst.toFixed(2)}
//                         </td>
//                         <td className="px-4 pb-5 align-top text-right font-black text-slate-900 pt-2 text-[14px]">
//                           ₹{item.total_amount.toFixed(2)}
//                         </td>
//                       </tr>
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             <button type="button" onClick={() => setItems([...items, { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }])} className="w-full border-2 border-dashed border-slate-200 text-[#C5A059] rounded-xl py-3 text-[12px] uppercase tracking-widest font-bold flex items-center justify-center hover:bg-amber-50/50 hover:border-[#C5A059]/30 transition-all mb-12">
//               <Plus size={16} className="mr-2" /> Add New Line
//             </button>

//             {/* Totals Section */}
//             <div className="flex justify-end mb-8">
//               <div className="w-full max-w-sm bg-slate-50/50 p-7 rounded-2xl border border-slate-100 space-y-4">
                
//                 <div className="flex justify-between text-sm font-bold text-slate-500">
//                   <span>Subtotal</span>
//                   <span className="text-slate-900">₹{totals.rawSubtotal.toFixed(2)}</span>
//                 </div>
                
//                 {showDiscount ? (
//                    <div className="flex justify-between items-center bg-white p-2.5 border border-slate-200 rounded-xl shadow-sm">
//                       <div className="flex gap-2 w-2/3">
//                          <select value={discount.type} onChange={(e) => setDiscount({...discount, type: e.target.value})} className="border border-slate-200 rounded-lg text-xs p-1.5 outline-none font-bold text-slate-700 bg-slate-50 cursor-pointer focus:border-[#C5A059]">
//                            <option value="flat">₹ Flat</option>
//                            <option value="percent">% Percent</option>
//                          </select>
//                          <input type="number" min="0" step="0.1" value={discount.value} onChange={(e) => setDiscount({...discount, value: parseFloat(e.target.value) || 0})} className="border border-slate-200 rounded-lg text-xs p-1.5 w-full outline-none font-bold text-slate-800 focus:border-[#C5A059]" />
//                       </div>
//                       <span className="text-sm text-rose-500 font-black">- ₹{totals.discountAmount.toFixed(2)}</span>
//                    </div>
//                 ) : (
//                   <div onClick={() => setShowDiscount(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max">
//                     <Plus size={14} className="mr-1.5"/> Add Discount
//                   </div>
//                 )}

//                 <div className="flex justify-between text-sm font-bold text-slate-500">
//                   <span>CGST (50%)</span>
//                   <span className="text-slate-900">₹{(totals.tax_total / 2).toFixed(2)}</span>
//                 </div>
                
//                 <div className="flex justify-between text-sm font-bold text-slate-500">
//                   <span>SGST (50%)</span>
//                   <span className="text-slate-900">₹{(totals.tax_total / 2).toFixed(2)}</span>
//                 </div>

//                 <div className="border-t-2 border-dashed border-slate-200 pt-5 flex justify-between items-end mt-2">
//                   <div>
//                     <span className="block text-[16px] font-black tracking-tight text-slate-900">Grand Total</span>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">(INR)</span>
//                   </div>
//                   <span className="text-[24px] font-black text-slate-900 tracking-tight">₹{totals.grand_total.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-between border-t border-slate-100 pt-8 mt-8">
//               <button 
//                 type="button" 
//                 onClick={() => navigate('/quotations')} 
//                 className="text-[13px] font-bold text-slate-500 hover:text-slate-800 px-6 py-3 rounded-xl transition-colors"
//               >
//                 Cancel
//               </button>
              
//               <button 
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-[#0f172a] hover:bg-[#C5A059] text-white text-[13px] font-bold px-8 py-3 rounded-xl transition-all shadow-[0_8px_20px_rgba(15,23,42,0.15)] disabled:opacity-70 flex items-center group"
//               >
//                 {isSubmitting ? <Loader2 className="animate-spin mr-2 text-[#C5A059]" size={18} /> : null}
//                 <span className="group-hover:text-[#0f172a] transition-colors">Save Quotation</span>
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateQuotation;

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus, Trash2, Loader2, AlertTriangle, Pencil, Image as ImageIcon, ChevronDown, Mail, Check, X } from "lucide-react";

// const CreateQuotation = () => {
//   const navigate = useNavigate();
//   const logoInputRef = useRef(null);

//   const [customers, setCustomers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);

//   const [documentTitle, setDocumentTitle] = useState("Quotation");
//   const [isEditingTitle, setIsEditingTitle] = useState(false);
//   const [validUntil, setValidUntil] = useState("");
//   const [notes, setNotes] = useState("Looking forward to your business.");
//   const [terms, setTerms] = useState("1. Validity: 15 Days\n2. Payment: 100% Advance");
  
//   const [storeLogo, setStoreLogo] = useState(null);

//   const [customFields, setCustomFields] = useState([]);
//   const addCustomField = () => setCustomFields([...customFields, { key: "", value: "" }]);

//   const [storeDetails, setStoreDetails] = useState({
//     name: "Your Store Name",
//     phone: "",
//     gstin: "",
//     address: "",
//     city: "",
//     zip: "",
//     email: "",
//     pan: ""
//   });
//   const [showStoreEmail, setShowStoreEmail] = useState(false);
//   const [showStorePan, setShowStorePan] = useState(false);

//   const [customerId, setCustomerId] = useState("");
//   const [isCreatingInlineClient, setIsCreatingInlineClient] = useState(false);
//   const [inlineClient, setInlineClient] = useState({ company_name: "", phone: "" });
//   const [clientExtras, setClientExtras] = useState({ email: "", pan: "" });
//   const [showClientEmail, setShowClientEmail] = useState(false);
//   const [showClientPan, setShowClientPan] = useState(false);

//   const [items, setItems] = useState([
//     { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }
//   ]);
//   const [discount, setDiscount] = useState({ type: 'flat', value: 0 });
//   const [showDiscount, setShowDiscount] = useState(false);

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/customers", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (!res.ok) throw new Error("Failed to load clients");
//       const data = await res.json();
//       setCustomers(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // --- ARCHITECTURAL FIX: Convert Image to Base64 String ---
//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         // This is now a Base64 string that can be safely sent inside JSON
//         setStoreLogo(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const calculateTotals = () => {
//     let rawSubtotal = 0;
    
//     items.forEach(item => {
//       rawSubtotal += (item.quantity * item.rate);
//     });

//     let discountMultiplier = 0; 
//     let totalDiscountAmount = 0;

//     if (rawSubtotal > 0) {
//       if (discount.type === 'percent') {
//         discountMultiplier = discount.value / 100;
//         totalDiscountAmount = rawSubtotal * discountMultiplier;
//       } else if (discount.type === 'flat') {
//         totalDiscountAmount = Math.min(discount.value, rawSubtotal); 
//         discountMultiplier = totalDiscountAmount / rawSubtotal;
//       }
//     }

//     let proratedSubtotal = 0;
//     let totalTax = 0;

//     const processedItems = items.map(item => {
//       const rawAmount = item.quantity * item.rate;
//       const proratedAmount = rawAmount - (rawAmount * discountMultiplier);
//       const taxAmount = (proratedAmount * item.tax_rate) / 100;
      
//       const cgst = taxAmount / 2;
//       const sgst = taxAmount / 2;
      
//       const totalAmount = proratedAmount + taxAmount;

//       proratedSubtotal += proratedAmount;
//       totalTax += taxAmount;

//       return {
//         ...item,
//         raw_amount: rawAmount,
//         prorated_taxable_amount: proratedAmount,
//         tax_amount: taxAmount,
//         cgst: cgst,
//         sgst: sgst,
//         total_amount: totalAmount
//       };
//     });

//     return {
//       processedItems,
//       rawSubtotal,
//       discountAmount: totalDiscountAmount,
//       tax_total: totalTax,
//       grand_total: proratedSubtotal + totalTax
//     };
//   };

//   const totals = calculateTotals();

//   const handleItemChange = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = field === "name" || field === "hsn_sac_code" ? value : parseFloat(value) || 0;
//     setItems(newItems);
//   };

//   const handleStoreChange = (field, value) => {
//     setStoreDetails(prev => ({ ...prev, [field]: value }));
//   };

//   const handleInlineClientCreate = async () => {
//     if (!inlineClient.company_name) return;
//     try {
//       const token = localStorage.getItem("token");
      
//       const res = await fetch("http://localhost:8000/api/customers/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify({ 
//           company_name: inlineClient.company_name, 
//           phone: inlineClient.phone,
//           email: "pending@update.com",
//           customer_name: inlineClient.company_name,
//           billing_address: "TBD"
//         })
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         const errorMsg = Array.isArray(errorData.detail) 
//           ? `Missing/Invalid: ${errorData.detail.map(e => e.loc[1]).join(", ")}` 
//           : errorData.detail || "Failed to create client";
//         throw new Error(errorMsg);
//       }

//       const newClient = await res.json();
//       setCustomers([...customers, newClient]);
//       setCustomerId(newClient.id.toString());
//       setIsCreatingInlineClient(false);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!customerId) {
//       setError("Please select a client.");
//       return;
//     }
//     setIsSubmitting(true);
//     setError(null);

//     const payload = {
//       document_type: "quotation", 
//       document_title: documentTitle,
//       customer_id: parseInt(customerId),
//       valid_until: validUntil ? new Date(validUntil).toISOString() : null,
//       subtotal: totals.rawSubtotal,
//       discount_total: totals.discountAmount,
//       tax_total: totals.tax_total,
//       grand_total: totals.grand_total,
//       terms_conditions: terms,
//       notes: notes,
//       items: totals.processedItems,
//       custom_fields: customFields,
//       // Pass the Base64 Logo string into the store_details JSON object
//       store_details: {
//         ...storeDetails,
//         logo: storeLogo 
//       }, 
//       client_extras: clientExtras
//     };

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/quotations", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify(payload)
//       });
//       if (!res.ok) throw new Error("Failed to generate quotation");
//       navigate("/quotations");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const selectedCustomerData = customers.find(c => c.id === parseInt(customerId));

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#fbfaf8]">
//         <Loader2 className="animate-spin text-[#C5A059]" size={32} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen relative font-sans pb-12">
      
//       <div className="fixed inset-0 pointer-events-none z-0 bg-[#fbfaf8] overflow-hidden">
//         <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_70%)] blur-[80px]" />
//         <div className="absolute bottom-[-20%] left-[-10%] w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.06)_0%,transparent_70%)] blur-[100px]" />
//         <div className="absolute top-[30%] left-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.03)_0%,transparent_70%)] blur-[120px] mix-blend-multiply" />
//         <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbfaf8]/80 to-[#fbfaf8]" />
//       </div>

//       <input 
//         type="file" 
//         ref={logoInputRef} 
//         onChange={handleLogoUpload} 
//         accept="image/png, image/jpeg" 
//         className="hidden" 
//       />

//       <div className="relative z-10 py-10 px-4 sm:px-8">
//         <div className="flex flex-col items-center pt-2 pb-8">
//           <h1 className="text-[22px] font-black tracking-tight text-slate-900 mb-4">New Quotation</h1>
//           <div className="flex items-center text-sm font-bold">
//             <div className="flex items-center text-[#0f172a]">
//               <span className="w-6 h-6 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-[11px] mr-2 shadow-md">1</span>
//               Quotation Details
//             </div>
//             <ChevronDown className="w-4 h-4 mx-4 text-slate-300 -rotate-90" />
//             <div className="flex items-center text-slate-400">
//               <span className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center text-[11px] mr-2">2</span>
//               Design & Share
//             </div>
//           </div>
//         </div>

//         <div className="max-w-[1050px] mx-auto bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,.06)] border border-slate-100 rounded-[31px] p-8 sm:p-12">
          
//           {error && (
//             <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-600">
//               <AlertTriangle size={20} className="shrink-0 mt-0.5" />
//               <p className="text-sm font-bold">{error}</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
            
//             <div className="flex flex-col items-center mb-12">
//               <div className="flex items-center gap-2 border-b-2 border-dashed border-slate-200 pb-2">
//                 {isEditingTitle ? (
//                   <div className="flex items-center gap-3">
//                     <input 
//                       type="text" 
//                       value={documentTitle} 
//                       onChange={(e) => setDocumentTitle(e.target.value)} 
//                       className="text-[32px] font-black text-slate-900 outline-none border-b border-[#C5A059] bg-transparent text-center"
//                       autoFocus
//                     />
//                     <button type="button" onClick={() => setIsEditingTitle(false)} className="text-emerald-500 hover:bg-emerald-50 p-1.5 rounded-lg transition-colors"><Check size={22}/></button>
//                   </div>
//                 ) : (
//                   <>
//                     <h1 className="text-[32px] font-black text-slate-900 tracking-tight">{documentTitle}</h1>
//                     <Pencil size={18} className="text-slate-300 cursor-pointer hover:text-[#C5A059] transition-colors ml-2" onClick={() => setIsEditingTitle(true)} />
//                   </>
//                 )}
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
//               <div className="space-y-4 w-full md:w-96">
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//                   <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Quotation No*</span>
//                   <input type="text" defaultValue="Auto-generated" disabled className="text-sm font-semibold text-right bg-transparent outline-none text-slate-400 w-32" />
//                 </div>
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//                   <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Date*</span>
//                   <span className="text-sm font-bold text-slate-900 text-right w-32">{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
//                 </div>
//                 <div className="flex items-center justify-between border-b border-slate-100 pb-2 group">
//                   <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Valid Until</span>
//                   <input 
//                     type="date" 
//                     value={validUntil}
//                     onChange={(e) => setValidUntil(e.target.value)}
//                     className="text-sm font-bold text-right bg-transparent outline-none text-slate-700 w-36 group-focus-within:text-[#C5A059] cursor-pointer transition-colors" 
//                   />
//                 </div>
                
//                 {customFields.map((field, idx) => (
//                   <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-2 gap-2">
//                     <input type="text" placeholder="Custom Label" value={field.key} onChange={(e) => {
//                       const newFields = [...customFields]; newFields[idx].key = e.target.value; setCustomFields(newFields);
//                     }} className="text-[13px] font-bold text-slate-700 uppercase tracking-wide bg-transparent outline-none w-1/2 focus:text-[#C5A059]" />
//                     <input type="text" placeholder="Value" value={field.value} onChange={(e) => {
//                       const newFields = [...customFields]; newFields[idx].value = e.target.value; setCustomFields(newFields);
//                     }} className="text-sm font-semibold text-right text-slate-900 bg-transparent outline-none w-1/2" />
//                     <X size={16} className="text-rose-400 cursor-pointer hover:scale-110 transition-transform" onClick={() => setCustomFields(customFields.filter((_, i) => i !== idx))} />
//                   </div>
//                 ))}
                
//                 <div className="pt-2">
//                   <span onClick={addCustomField} className="text-[12px] font-bold text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max uppercase tracking-wider">
//                     <Plus size={14} className="mr-1" /> Add Custom Fields
//                   </span>
//                 </div>
//               </div>

//               <div 
//                 onClick={() => logoInputRef.current.click()}
//                 className="w-full md:w-56 h-36 border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-2xl flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-amber-50/30 hover:border-[#C5A059]/30 transition-all relative group"
//               >
//                 {storeLogo ? (
//                   <>
//                     <img src={storeLogo} alt="Business Logo" className="w-full h-full object-contain rounded-xl" />
//                     <button 
//                       type="button"
//                       onClick={(e) => { e.stopPropagation(); setStoreLogo(null); }}
//                       className="absolute top-2 right-2 bg-rose-500 text-white rounded-full p-1.5 shadow-md hover:bg-rose-600 transition-colors opacity-0 group-hover:opacity-100"
//                     >
//                       <X size={14} />
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <ImageIcon size={28} className="text-slate-300 mb-3 group-hover:text-[#C5A059] transition-colors" />
//                     <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Add Logo<br/>Max 1080x1080</span>
//                   </>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//               <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
//                 <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Your Details</h3>
//                 <div className="space-y-3.5">
//                   <input type="text" value={storeDetails.name} onChange={(e) => handleStoreChange('name', e.target.value)} className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors" />
//                   <div className="border border-slate-200 bg-white rounded-xl p-2.5 text-sm flex items-center focus-within:border-[#C5A059] transition-colors">
//                     <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
//                     <input type="text" value={storeDetails.phone} onChange={(e) => handleStoreChange('phone', e.target.value)} placeholder="Phone" className="outline-none bg-transparent w-full font-semibold text-slate-800" />
//                   </div>
//                   <input type="text" value={storeDetails.gstin} onChange={(e) => handleStoreChange('gstin', e.target.value)} placeholder="Your GSTIN (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   <input type="text" value={storeDetails.address} onChange={(e) => handleStoreChange('address', e.target.value)} placeholder="Address (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   <div className="flex gap-3">
//                     <input type="text" value={storeDetails.city} onChange={(e) => handleStoreChange('city', e.target.value)} placeholder="City (optional)" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                     <input type="text" value={storeDetails.zip} onChange={(e) => handleStoreChange('zip', e.target.value)} placeholder="Postal Code" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
//                   </div>
                  
//                   {showStoreEmail && (
//                     <input type="email" value={storeDetails.email} onChange={(e) => handleStoreChange('email', e.target.value)} placeholder="Email Address" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />
//                   )}
//                   {showStorePan && (
//                     <input type="text" value={storeDetails.pan} onChange={(e) => handleStoreChange('pan', e.target.value)} placeholder="PAN Number" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />
//                   )}

//                   <div className="flex gap-5 pt-2">
//                     {!showStoreEmail && <span onClick={() => setShowStoreEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
//                     {!showStorePan && <span onClick={() => setShowStorePan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
//                 <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Client Details</h3>
//                 <div className="space-y-3.5">
                  
//                   {isCreatingInlineClient ? (
//                     <div className="bg-amber-50/30 p-4 rounded-xl border border-amber-200 mb-2">
//                       <input type="text" placeholder="Client Business Name*" value={inlineClient.company_name} onChange={(e) => setInlineClient({...inlineClient, company_name: e.target.value})} className="w-full mb-3 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-bold text-slate-800" autoFocus/>
//                       <input type="text" placeholder="Phone Number (optional)" value={inlineClient.phone} onChange={(e) => setInlineClient({...inlineClient, phone: e.target.value})} className="w-full mb-4 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-semibold text-slate-800"/>
//                       <div className="flex gap-2">
//                         <button type="button" onClick={handleInlineClientCreate} className="bg-[#0f172a] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-[#C5A059] transition-colors">Save & Select</button>
//                         <button type="button" onClick={() => setIsCreatingInlineClient(false)} className="text-slate-500 hover:text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-2 transition-colors">Cancel</button>
//                       </div>
//                     </div>
//                   ) : (
//                     <select 
//                       required
//                       value={customerId} 
//                       onChange={(e) => {
//                         if(e.target.value === "NEW") setIsCreatingInlineClient(true);
//                         else setCustomerId(e.target.value);
//                       }}
//                       className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors cursor-pointer"
//                     >
//                       <option value="">Select a Client (required)</option>
//                       <option value="NEW" className="font-bold text-[#C5A059]">+ Create New Client</option>
//                       {customers.map(c => (
//                         <option key={c.id} value={c.id}>{c.company_name}</option>
//                       ))}
//                     </select>
//                   )}

//                   <div className="border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm flex items-center">
//                     <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
//                     <input type="text" readOnly value={selectedCustomerData?.phone || ""} placeholder="Phone" className="outline-none bg-transparent w-full text-slate-500 font-semibold cursor-not-allowed" />
//                   </div>
                  
//                   <input type="text" readOnly value={selectedCustomerData?.gstin || ""} placeholder="Client's GSTIN" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
//                   <input type="text" readOnly value={selectedCustomerData?.billing_address || ""} placeholder="Address" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
                  
//                   {showClientEmail && (
//                     <input type="email" value={clientExtras.email} onChange={(e) => setClientExtras({...clientExtras, email: e.target.value})} placeholder="Client Email" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />
//                   )}
//                   {showClientPan && (
//                     <input type="text" value={clientExtras.pan} onChange={(e) => setClientExtras({...clientExtras, pan: e.target.value})} placeholder="Client PAN" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />
//                   )}

//                   <div className="flex gap-5 pt-2">
//                     {!showClientEmail && <span onClick={() => setShowClientEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
//                     {!showClientPan && <span onClick={() => setShowClientPan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-[#0f172a] text-white text-[11px] uppercase tracking-wider font-bold">
//                   <tr>
//                     <th className="px-4 py-4 w-[22%]">Item</th>
//                     <th className="px-2 py-4 w-[10%]">HSN/SAC</th>
//                     <th className="px-2 py-4 w-[10%]">GST Rate</th>
//                     <th className="px-2 py-4 w-[8%]">Qty</th>
//                     <th className="px-2 py-4 w-[12%]">Rate</th>
//                     <th className="px-2 py-4 w-[10%] text-right">Amount</th>
//                     <th className="px-2 py-4 w-[9%] text-right">CGST</th>
//                     <th className="px-2 py-4 w-[9%] text-right">SGST</th>
//                     <th className="px-4 py-4 w-[10%] text-right">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white">
//                   {totals.processedItems.map((item, index) => (
//                     <React.Fragment key={index}>
//                       <tr>
//                         <td colSpan="9" className="px-4 pt-5 pb-1 text-[11px] font-bold text-slate-400 flex justify-between">
//                           ITEM {index + 1}
//                           <button type="button" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} className="text-slate-300 hover:text-rose-500 transition-colors"><Trash2 size={16}/></button>
//                         </td>
//                       </tr>
//                       <tr className="group">
//                         <td className="px-4 pb-5 align-top">
//                           <input type="text" required value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} placeholder="Description" className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-2 pb-5 align-top">
//                           <input type="text" value={item.hsn_sac_code} onChange={(e) => handleItemChange(index, "hsn_sac_code", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-2 pb-5 align-top">
//                           <select value={item.tax_rate} onChange={(e) => handleItemChange(index, "tax_rate", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 bg-transparent transition-colors cursor-pointer">
//                             <option value="0">0 %</option>
//                             <option value="5">5 %</option>
//                             <option value="12">12 %</option>
//                             <option value="18">18 %</option>
//                             <option value="28">28 %</option>
//                           </select>
//                         </td>
//                         <td className="px-2 pb-5 align-top">
//                           <input type="number" min="0.1" step="0.1" required value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
//                         <td className="px-2 pb-5 align-top text-slate-500 font-medium flex items-center">
//                            ₹ <input type="number" min="0" step="0.01" required value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="w-[85%] ml-1 border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
//                         </td>
                        
//                         <td className="px-2 pb-5 align-top text-right font-bold text-slate-700 pt-2 text-[13px]">
//                           ₹{item.prorated_taxable_amount.toFixed(2)}
//                         </td>
//                         <td className="px-2 pb-5 align-top text-right font-semibold text-slate-500 pt-2 text-[13px]">
//                           ₹{item.cgst.toFixed(2)}
//                         </td>
//                         <td className="px-2 pb-5 align-top text-right font-semibold text-slate-500 pt-2 text-[13px]">
//                           ₹{item.sgst.toFixed(2)}
//                         </td>
//                         <td className="px-4 pb-5 align-top text-right font-black text-slate-900 pt-2 text-[14px]">
//                           ₹{item.total_amount.toFixed(2)}
//                         </td>
//                       </tr>
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             <button type="button" onClick={() => setItems([...items, { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }])} className="w-full border-2 border-dashed border-slate-200 text-[#C5A059] rounded-xl py-3 text-[12px] uppercase tracking-widest font-bold flex items-center justify-center hover:bg-amber-50/50 hover:border-[#C5A059]/30 transition-all mb-12">
//               <Plus size={16} className="mr-2" /> Add New Line
//             </button>

//             <div className="flex justify-end mb-8">
//               <div className="w-full max-w-sm bg-slate-50/50 p-7 rounded-2xl border border-slate-100 space-y-4">
                
//                 <div className="flex justify-between text-sm font-bold text-slate-500">
//                   <span>Subtotal</span>
//                   <span className="text-slate-900">₹{totals.rawSubtotal.toFixed(2)}</span>
//                 </div>
                
//                 {showDiscount ? (
//                    <div className="flex justify-between items-center bg-white p-2.5 border border-slate-200 rounded-xl shadow-sm">
//                       <div className="flex gap-2 w-2/3">
//                          <select value={discount.type} onChange={(e) => setDiscount({...discount, type: e.target.value})} className="border border-slate-200 rounded-lg text-xs p-1.5 outline-none font-bold text-slate-700 bg-slate-50 cursor-pointer focus:border-[#C5A059]">
//                            <option value="flat">₹ Flat</option>
//                            <option value="percent">% Percent</option>
//                          </select>
//                          <input type="number" min="0" step="0.1" value={discount.value} onChange={(e) => setDiscount({...discount, value: parseFloat(e.target.value) || 0})} className="border border-slate-200 rounded-lg text-xs p-1.5 w-full outline-none font-bold text-slate-800 focus:border-[#C5A059]" />
//                       </div>
//                       <span className="text-sm text-rose-500 font-black">- ₹{totals.discountAmount.toFixed(2)}</span>
//                    </div>
//                 ) : (
//                   <div onClick={() => setShowDiscount(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max">
//                     <Plus size={14} className="mr-1.5"/> Add Discount
//                   </div>
//                 )}

//                 <div className="flex justify-between text-sm font-bold text-slate-500">
//                   <span>CGST (50%)</span>
//                   <span className="text-slate-900">₹{(totals.tax_total / 2).toFixed(2)}</span>
//                 </div>
                
//                 <div className="flex justify-between text-sm font-bold text-slate-500">
//                   <span>SGST (50%)</span>
//                   <span className="text-slate-900">₹{(totals.tax_total / 2).toFixed(2)}</span>
//                 </div>

//                 <div className="border-t-2 border-dashed border-slate-200 pt-5 flex justify-between items-end mt-2">
//                   <div>
//                     <span className="block text-[16px] font-black tracking-tight text-slate-900">Grand Total</span>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">(INR)</span>
//                   </div>
//                   <span className="text-[24px] font-black text-slate-900 tracking-tight">₹{totals.grand_total.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-between border-t border-slate-100 pt-8 mt-8">
//               <button 
//                 type="button" 
//                 onClick={() => navigate('/quotations')} 
//                 className="text-[13px] font-bold text-slate-500 hover:text-slate-800 px-6 py-3 rounded-xl transition-colors"
//               >
//                 Cancel
//               </button>
              
//               <button 
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-[#0f172a] hover:bg-[#C5A059] text-white text-[13px] font-bold px-8 py-3 rounded-xl transition-all shadow-[0_8px_20px_rgba(15,23,42,0.15)] disabled:opacity-70 flex items-center group"
//               >
//                 {isSubmitting ? <Loader2 className="animate-spin mr-2 text-[#C5A059]" size={18} /> : null}
//                 <span className="group-hover:text-[#0f172a] transition-colors">Save Quotation</span>
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateQuotation;


import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Added useParams
import { Plus, Trash2, Loader2, AlertTriangle, Pencil, Image as ImageIcon, ChevronDown, Mail, Check, X, Palette, LayoutTemplate } from "lucide-react";

const CreateQuotation = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Detect if we are in Edit Mode
  const isEditMode = !!id;

  const logoInputRef = useRef(null);

  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [documentTitle, setDocumentTitle] = useState("Quotation");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [validUntil, setValidUntil] = useState("");
  const [notes, setNotes] = useState("Looking forward to your business.");
  const [terms, setTerms] = useState("1. Validity: 15 Days\n2. Payment: 100% Advance");
  
  const [storeLogo, setStoreLogo] = useState(null);

  // Design States
  const [templateId, setTemplateId] = useState("classic");
  const [themeColor, setThemeColor] = useState("#0f172a"); 

  const themeColors = ["#0f172a", "#C5A059", "#3b82f6", "#10b981", "#f43f5e"];
  const templates = [
    { id: "classic", label: "Classic" },
    { id: "modern", label: "Modern" },
    { id: "minimalist", label: "Minimal" }
  ];

  const [customFields, setCustomFields] = useState([]);
  const addCustomField = () => setCustomFields([...customFields, { key: "", value: "" }]);

  const [storeDetails, setStoreDetails] = useState({ name: "Your Store Name", phone: "", gstin: "", address: "", city: "", zip: "", email: "", pan: "" });
  const [showStoreEmail, setShowStoreEmail] = useState(false);
  const [showStorePan, setShowStorePan] = useState(false);

  const [customerId, setCustomerId] = useState("");
  const [isCreatingInlineClient, setIsCreatingInlineClient] = useState(false);
  const [inlineClient, setInlineClient] = useState({ company_name: "", phone: "" });
  const [clientExtras, setClientExtras] = useState({ email: "", pan: "" });
  const [showClientEmail, setShowClientEmail] = useState(false);
  const [showClientPan, setShowClientPan] = useState(false);

  const [items, setItems] = useState([{ name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }]);
  const [discount, setDiscount] = useState({ type: 'flat', value: 0 });
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    // Chain the fetches: Load clients first, then populate edit data if it exists
    fetchClients().then(() => {
      if (isEditMode) fetchExistingQuotation();
    });
  }, [id]);

  const fetchClients = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8000/api/customers", { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error("Failed to load clients");
      const data = await res.json();
      setCustomers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      if (!isEditMode) setIsLoading(false);
    }
  };

  // --- NEW: Pre-fill Form for Editing ---
  const fetchExistingQuotation = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/quotations/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error("Failed to load quotation for editing");
      
      const data = await res.json();
      const q = data.quotation;

      setDocumentTitle(q.document_title || "Quotation");
      if (q.valid_until) setValidUntil(q.valid_until.split('T')[0]);
      setNotes(q.notes || "");
      setTerms(q.terms_conditions || "");
      setTemplateId(q.template_id || "classic");
      setThemeColor(q.theme_color || "#0f172a");

      if (data.customer?.id) setCustomerId(data.customer.id.toString());
      
      if (q.discount_total > 0) {
        setDiscount({ type: 'flat', value: q.discount_total });
        setShowDiscount(true);
      }

      if (data.items && data.items.length > 0) {
        setItems(data.items.map(i => ({
          name: i.name,
          hsn_sac_code: i.hsn_sac_code || "",
          quantity: i.quantity,
          rate: i.rate,
          tax_rate: i.tax_rate
        })));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setStoreLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const calculateTotals = () => {
    let rawSubtotal = 0;
    items.forEach(item => { rawSubtotal += (item.quantity * item.rate); });

    let discountMultiplier = 0; 
    let totalDiscountAmount = 0;

    if (rawSubtotal > 0) {
      if (discount.type === 'percent') {
        discountMultiplier = discount.value / 100;
        totalDiscountAmount = rawSubtotal * discountMultiplier;
      } else if (discount.type === 'flat') {
        totalDiscountAmount = Math.min(discount.value, rawSubtotal); 
        discountMultiplier = totalDiscountAmount / rawSubtotal;
      }
    }

    let proratedSubtotal = 0;
    let totalTax = 0;

    const processedItems = items.map(item => {
      const rawAmount = item.quantity * item.rate;
      const proratedAmount = rawAmount - (rawAmount * discountMultiplier);
      const taxAmount = (proratedAmount * item.tax_rate) / 100;
      
      proratedSubtotal += proratedAmount;
      totalTax += taxAmount;

      return {
        ...item,
        raw_amount: rawAmount,
        prorated_taxable_amount: proratedAmount,
        tax_amount: taxAmount,
        cgst: taxAmount / 2,
        sgst: taxAmount / 2,
        total_amount: proratedAmount + taxAmount
      };
    });

    return { processedItems, rawSubtotal, discountAmount: totalDiscountAmount, tax_total: totalTax, grand_total: proratedSubtotal + totalTax };
  };

  const totals = calculateTotals();

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = field === "name" || field === "hsn_sac_code" ? value : parseFloat(value) || 0;
    setItems(newItems);
  };

  const handleStoreChange = (field, value) => setStoreDetails(prev => ({ ...prev, [field]: value }));

  const handleInlineClientCreate = async () => {
    if (!inlineClient.company_name) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8000/api/customers/", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ company_name: inlineClient.company_name, phone: inlineClient.phone, email: "pending@update.com", customer_name: inlineClient.company_name, billing_address: "TBD" })
      });

      if (!res.ok) throw new Error("Failed to create client");
      const newClient = await res.json();
      setCustomers([...customers, newClient]);
      setCustomerId(newClient.id.toString());
      setIsCreatingInlineClient(false);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerId) { setError("Please select a client."); return; }
    setIsSubmitting(true);
    setError(null);

    const payload = {
      document_type: "quotation", 
      document_title: documentTitle,
      customer_id: parseInt(customerId),
      valid_until: validUntil ? new Date(validUntil).toISOString() : null,
      subtotal: totals.rawSubtotal,
      discount_total: totals.discountAmount,
      tax_total: totals.tax_total,
      grand_total: totals.grand_total,
      terms_conditions: terms,
      notes: notes,
      items: totals.processedItems,
      custom_fields: customFields,
      store_details: { ...storeDetails, logo: storeLogo }, 
      client_extras: clientExtras,
      template_id: templateId,
      theme_color: themeColor
    };

    try {
      const token = localStorage.getItem("token");
      
      // --- NEW: Switch between POST (Create) and PUT (Edit) dynamically ---
      const method = isEditMode ? "PUT" : "POST";
      const url = isEditMode ? `http://localhost:8000/api/quotations/${id}` : "http://localhost:8000/api/quotations";

      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`Failed to ${isEditMode ? 'update' : 'generate'} quotation`);
      
      // Navigate back to the detail view or list after successful save
      navigate(isEditMode ? `/quotation/${id}` : "/quotations");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCustomerData = customers.find(c => c.id === parseInt(customerId));

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfaf8]">
        <Loader2 className="animate-spin text-[#C5A059]" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative font-sans pb-12">
      
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#fbfaf8] overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.06)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute top-[30%] left-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.03)_0%,transparent_70%)] blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 opacity-[0.20]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbfaf8]/80 to-[#fbfaf8]" />
      </div>

      <input type="file" ref={logoInputRef} onChange={handleLogoUpload} accept="image/png, image/jpeg" className="hidden" />

      <div className="relative z-10 py-10 px-4 sm:px-8">
        <div className="flex flex-col items-center pt-2 pb-8">
          <h1 className="text-[22px] font-black tracking-tight text-slate-900 mb-4">{isEditMode ? "Edit Quotation" : "New Quotation"}</h1>
          <div className="flex items-center text-sm font-bold">
            <div className="flex items-center text-[#0f172a]">
              <span className="w-6 h-6 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-[11px] mr-2 shadow-md">1</span>
              Quotation Details
            </div>
            <ChevronDown className="w-4 h-4 mx-4 text-slate-300 -rotate-90" />
            <div className="flex items-center text-slate-400">
              <span className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center text-[11px] mr-2">2</span>
              Design & Share
            </div>
          </div>
        </div>

        <div className="max-w-[1050px] mx-auto bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,.06)] border border-slate-100 rounded-[31px] p-8 sm:p-12">
          
          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3 text-rose-600">
              <AlertTriangle size={20} className="shrink-0 mt-0.5" />
              <p className="text-sm font-bold">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-2 border-b-2 border-dashed border-slate-200 pb-2">
                {isEditingTitle ? (
                  <div className="flex items-center gap-3">
                    <input type="text" value={documentTitle} onChange={(e) => setDocumentTitle(e.target.value)} className="text-[32px] font-black text-slate-900 outline-none border-b border-[#C5A059] bg-transparent text-center" autoFocus />
                    <button type="button" onClick={() => setIsEditingTitle(false)} className="text-emerald-500 hover:bg-emerald-50 p-1.5 rounded-lg transition-colors"><Check size={22}/></button>
                  </div>
                ) : (
                  <>
                    <h1 className="text-[32px] font-black text-slate-900 tracking-tight">{documentTitle}</h1>
                    <Pencil size={18} className="text-slate-300 cursor-pointer hover:text-[#C5A059] transition-colors ml-2" onClick={() => setIsEditingTitle(true)} />
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
              <div className="space-y-4 w-full md:w-96">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Quotation No*</span>
                  <input type="text" defaultValue={isEditMode ? `QT-...` : "Auto-generated"} disabled className="text-sm font-semibold text-right bg-transparent outline-none text-slate-400 w-32" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Date*</span>
                  <span className="text-sm font-bold text-slate-900 text-right w-32">{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 group">
                  <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wide">Valid Until</span>
                  <input type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} className="text-sm font-bold text-right bg-transparent outline-none text-slate-700 w-36 group-focus-within:text-[#C5A059] cursor-pointer transition-colors" />
                </div>
                
                {customFields.map((field, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-2 gap-2">
                    <input type="text" placeholder="Custom Label" value={field.key} onChange={(e) => { const newFields = [...customFields]; newFields[idx].key = e.target.value; setCustomFields(newFields); }} className="text-[13px] font-bold text-slate-700 uppercase tracking-wide bg-transparent outline-none w-1/2 focus:text-[#C5A059]" />
                    <input type="text" placeholder="Value" value={field.value} onChange={(e) => { const newFields = [...customFields]; newFields[idx].value = e.target.value; setCustomFields(newFields); }} className="text-sm font-semibold text-right text-slate-900 bg-transparent outline-none w-1/2" />
                    <X size={16} className="text-rose-400 cursor-pointer hover:scale-110 transition-transform" onClick={() => setCustomFields(customFields.filter((_, i) => i !== idx))} />
                  </div>
                ))}
                
                <div className="pt-2">
                  <span onClick={addCustomField} className="text-[12px] font-bold text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max uppercase tracking-wider">
                    <Plus size={14} className="mr-1" /> Add Custom Fields
                  </span>
                </div>
              </div>

              <div onClick={() => logoInputRef.current.click()} className="w-full md:w-56 h-36 border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-2xl flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-amber-50/30 hover:border-[#C5A059]/30 transition-all relative group">
                {storeLogo ? (
                  <>
                    <img src={storeLogo} alt="Business Logo" className="w-full h-full object-contain rounded-xl" />
                    <button type="button" onClick={(e) => { e.stopPropagation(); setStoreLogo(null); }} className="absolute top-2 right-2 bg-rose-500 text-white rounded-full p-1.5 shadow-md hover:bg-rose-600 transition-colors opacity-0 group-hover:opacity-100">
                      <X size={14} />
                    </button>
                  </>
                ) : (
                  <>
                    <ImageIcon size={28} className="text-slate-300 mb-3 group-hover:text-[#C5A059] transition-colors" />
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Add Logo<br/>Max 1080x1080</span>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Your Details</h3>
                <div className="space-y-3.5">
                  <input type="text" value={storeDetails.name} onChange={(e) => handleStoreChange('name', e.target.value)} className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors" />
                  <div className="border border-slate-200 bg-white rounded-xl p-2.5 text-sm flex items-center focus-within:border-[#C5A059] transition-colors">
                    <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
                    <input type="text" value={storeDetails.phone} onChange={(e) => handleStoreChange('phone', e.target.value)} placeholder="Phone" className="outline-none bg-transparent w-full font-semibold text-slate-800" />
                  </div>
                  <input type="text" value={storeDetails.gstin} onChange={(e) => handleStoreChange('gstin', e.target.value)} placeholder="Your GSTIN (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
                  <input type="text" value={storeDetails.address} onChange={(e) => handleStoreChange('address', e.target.value)} placeholder="Address (optional)" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
                  <div className="flex gap-3">
                    <input type="text" value={storeDetails.city} onChange={(e) => handleStoreChange('city', e.target.value)} placeholder="City (optional)" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
                    <input type="text" value={storeDetails.zip} onChange={(e) => handleStoreChange('zip', e.target.value)} placeholder="Postal Code" className="w-1/2 border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" />
                  </div>
                  
                  {showStoreEmail && <input type="email" value={storeDetails.email} onChange={(e) => handleStoreChange('email', e.target.value)} placeholder="Email Address" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />}
                  {showStorePan && <input type="text" value={storeDetails.pan} onChange={(e) => handleStoreChange('pan', e.target.value)} placeholder="PAN Number" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />}

                  <div className="flex gap-5 pt-2">
                    {!showStoreEmail && <span onClick={() => setShowStoreEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
                    {!showStorePan && <span onClick={() => setShowStorePan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
                  </div>
                </div>
              </div>

              <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 focus-within:shadow-[0_8px_20px_rgba(197,160,89,0.05)] transition-all">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">Client Details</h3>
                <div className="space-y-3.5">
                  
                  {isCreatingInlineClient ? (
                    <div className="bg-amber-50/30 p-4 rounded-xl border border-amber-200 mb-2">
                      <input type="text" placeholder="Client Business Name*" value={inlineClient.company_name} onChange={(e) => setInlineClient({...inlineClient, company_name: e.target.value})} className="w-full mb-3 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-bold text-slate-800" autoFocus/>
                      <input type="text" placeholder="Phone Number (optional)" value={inlineClient.phone} onChange={(e) => setInlineClient({...inlineClient, phone: e.target.value})} className="w-full mb-4 p-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-[#C5A059] font-semibold text-slate-800"/>
                      <div className="flex gap-2">
                        <button type="button" onClick={handleInlineClientCreate} className="bg-[#0f172a] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-[#C5A059] transition-colors">Save & Select</button>
                        <button type="button" onClick={() => setIsCreatingInlineClient(false)} className="text-slate-500 hover:text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-2 transition-colors">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <select 
                      required
                      value={customerId} 
                      onChange={(e) => {
                        if(e.target.value === "NEW") setIsCreatingInlineClient(true);
                        else setCustomerId(e.target.value);
                      }}
                      className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold text-slate-800 transition-colors cursor-pointer"
                    >
                      <option value="">Select a Client (required)</option>
                      <option value="NEW" className="font-bold text-[#C5A059]">+ Create New Client</option>
                      {customers.map(c => (
                        <option key={c.id} value={c.id}>{c.company_name}</option>
                      ))}
                    </select>
                  )}

                  <div className="border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm flex items-center">
                    <span className="text-lg mr-2">🇮🇳</span> <span className="text-slate-400 mr-2 font-bold">+91</span>
                    <input type="text" readOnly value={selectedCustomerData?.phone || ""} placeholder="Phone" className="outline-none bg-transparent w-full text-slate-500 font-semibold cursor-not-allowed" />
                  </div>
                  
                  <input type="text" readOnly value={selectedCustomerData?.gstin || ""} placeholder="Client's GSTIN" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
                  <input type="text" readOnly value={selectedCustomerData?.billing_address || ""} placeholder="Address" className="w-full border border-slate-200 bg-slate-100/50 rounded-xl p-2.5 text-sm outline-none text-slate-500 font-semibold cursor-not-allowed" />
                  
                  {showClientEmail && <input type="email" value={clientExtras.email} onChange={(e) => setClientExtras({...clientExtras, email: e.target.value})} placeholder="Client Email" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-semibold text-slate-800 transition-colors" autoFocus />}
                  {showClientPan && <input type="text" value={clientExtras.pan} onChange={(e) => setClientExtras({...clientExtras, pan: e.target.value})} placeholder="Client PAN" className="w-full border border-slate-200 bg-white rounded-xl p-2.5 text-sm outline-none focus:border-[#C5A059] font-bold uppercase text-slate-800 transition-colors" autoFocus />}

                  <div className="flex gap-5 pt-2">
                    {!showClientEmail && <span onClick={() => setShowClientEmail(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Mail size={14} className="mr-1.5"/> Add Email</span>}
                    {!showClientPan && <span onClick={() => setShowClientPan(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors"><Plus size={14} className="mr-1.5"/> Add PAN</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0f172a] text-white text-[11px] uppercase tracking-wider font-bold">
                  <tr>
                    <th className="px-4 py-4 w-[22%]">Item</th>
                    <th className="px-2 py-4 w-[10%]">HSN/SAC</th>
                    <th className="px-2 py-4 w-[10%]">GST Rate</th>
                    <th className="px-2 py-4 w-[8%]">Qty</th>
                    <th className="px-2 py-4 w-[12%]">Rate</th>
                    <th className="px-2 py-4 w-[10%] text-right">Amount</th>
                    <th className="px-2 py-4 w-[9%] text-right">CGST</th>
                    <th className="px-2 py-4 w-[9%] text-right">SGST</th>
                    <th className="px-4 py-4 w-[10%] text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {totals.processedItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td colSpan="9" className="px-4 pt-5 pb-1 text-[11px] font-bold text-slate-400 flex justify-between">
                          ITEM {index + 1}
                          <button type="button" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} className="text-slate-300 hover:text-rose-500 transition-colors"><Trash2 size={16}/></button>
                        </td>
                      </tr>
                      <tr className="group">
                        <td className="px-4 pb-5 align-top">
                          <input type="text" required value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} placeholder="Description" className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
                        </td>
                        <td className="px-2 pb-5 align-top">
                          <input type="text" value={item.hsn_sac_code} onChange={(e) => handleItemChange(index, "hsn_sac_code", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
                        </td>
                        <td className="px-2 pb-5 align-top">
                          <select value={item.tax_rate} onChange={(e) => handleItemChange(index, "tax_rate", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 bg-transparent transition-colors cursor-pointer">
                            <option value="0">0 %</option>
                            <option value="5">5 %</option>
                            <option value="12">12 %</option>
                            <option value="18">18 %</option>
                            <option value="28">28 %</option>
                          </select>
                        </td>
                        <td className="px-2 pb-5 align-top">
                          <input type="number" min="0.1" step="0.1" required value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="w-full border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
                        </td>
                        <td className="px-2 pb-5 align-top text-slate-500 font-medium flex items-center">
                           ₹ <input type="number" min="0" step="0.01" required value={item.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="w-[85%] ml-1 border-b border-slate-200 py-1.5 outline-none focus:border-[#C5A059] text-sm font-semibold text-slate-800 transition-colors" />
                        </td>
                        <td className="px-2 pb-5 align-top text-right font-bold text-slate-700 pt-2 text-[13px]">₹{item.prorated_taxable_amount.toFixed(2)}</td>
                        <td className="px-2 pb-5 align-top text-right font-semibold text-slate-500 pt-2 text-[13px]">₹{item.cgst.toFixed(2)}</td>
                        <td className="px-2 pb-5 align-top text-right font-semibold text-slate-500 pt-2 text-[13px]">₹{item.sgst.toFixed(2)}</td>
                        <td className="px-4 pb-5 align-top text-right font-black text-slate-900 pt-2 text-[14px]">₹{item.total_amount.toFixed(2)}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button type="button" onClick={() => setItems([...items, { name: "", hsn_sac_code: "", quantity: 1, rate: 0, tax_rate: 18 }])} className="w-full border-2 border-dashed border-slate-200 text-[#C5A059] rounded-xl py-3 text-[12px] uppercase tracking-widest font-bold flex items-center justify-center hover:bg-amber-50/50 hover:border-[#C5A059]/30 transition-all mb-12">
              <Plus size={16} className="mr-2" /> Add New Line
            </button>

            <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
              
              <div className="flex-1 bg-slate-50/50 rounded-2xl p-6 border border-slate-100 focus-within:border-[#C5A059]/40 transition-all h-fit">
                <div className="flex items-center gap-2 mb-5 text-slate-400">
                  <Palette size={16} />
                  <h3 className="text-[11px] font-bold uppercase tracking-widest">Design & Appearance</h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide block mb-3 flex items-center gap-1">
                      <LayoutTemplate size={14} /> Style
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {templates.map((tpl) => (
                        <button key={tpl.id} type="button" onClick={() => setTemplateId(tpl.id)} className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold border transition-all ${templateId === tpl.id ? "bg-white border-[#C5A059] text-[#C5A059] shadow-[0_4px_12px_rgba(197,160,89,0.12)]" : "bg-transparent border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-white"}`}>
                          {tpl.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide block mb-3">Theme Color</label>
                    <div className="flex gap-3 items-center h-[34px]">
                      {themeColors.map((color) => (
                        <button key={color} type="button" onClick={() => setThemeColor(color)} style={{ backgroundColor: color }} className={`w-7 h-7 rounded-full shadow-sm transition-all flex items-center justify-center ${themeColor === color ? "ring-2 ring-offset-2 ring-[#C5A059] scale-110" : "hover:scale-110"}`}>
                          {themeColor === color && <Check size={14} className="text-white" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:max-w-sm bg-slate-50/50 p-7 rounded-2xl border border-slate-100 space-y-4">
                <div className="flex justify-between text-sm font-bold text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-slate-900">₹{totals.rawSubtotal.toFixed(2)}</span>
                </div>
                {showDiscount ? (
                   <div className="flex justify-between items-center bg-white p-2.5 border border-slate-200 rounded-xl shadow-sm">
                      <div className="flex gap-2 w-2/3">
                         <select value={discount.type} onChange={(e) => setDiscount({...discount, type: e.target.value})} className="border border-slate-200 rounded-lg text-xs p-1.5 outline-none font-bold text-slate-700 bg-slate-50 cursor-pointer focus:border-[#C5A059]">
                           <option value="flat">₹ Flat</option>
                           <option value="percent">% Percent</option>
                         </select>
                         <input type="number" min="0" step="0.1" value={discount.value} onChange={(e) => setDiscount({...discount, value: parseFloat(e.target.value) || 0})} className="border border-slate-200 rounded-lg text-xs p-1.5 w-full outline-none font-bold text-slate-800 focus:border-[#C5A059]" />
                      </div>
                      <span className="text-sm text-rose-500 font-black">- ₹{totals.discountAmount.toFixed(2)}</span>
                   </div>
                ) : (
                  <div onClick={() => setShowDiscount(true)} className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] flex items-center cursor-pointer hover:text-[#a37e3d] transition-colors w-max">
                    <Plus size={14} className="mr-1.5"/> Add Discount
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-slate-500">
                  <span>CGST (50%)</span>
                  <span className="text-slate-900">₹{(totals.tax_total / 2).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-500">
                  <span>SGST (50%)</span>
                  <span className="text-slate-900">₹{(totals.tax_total / 2).toFixed(2)}</span>
                </div>
                <div className="border-t-2 border-dashed border-slate-200 pt-5 flex justify-between items-end mt-2">
                  <div>
                    <span className="block text-[16px] font-black tracking-tight text-slate-900">Grand Total</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">(INR)</span>
                  </div>
                  <span className="text-[24px] font-black text-slate-900 tracking-tight">₹{totals.grand_total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-8 mt-8">
              <button type="button" onClick={() => navigate('/quotations')} className="text-[13px] font-bold text-slate-500 hover:text-slate-800 px-6 py-3 rounded-xl transition-colors">
                Cancel
              </button>
              <button type="submit" disabled={isSubmitting} className="bg-[#0f172a] hover:bg-[#C5A059] text-white text-[13px] font-bold px-8 py-3 rounded-xl transition-all shadow-[0_8px_20px_rgba(15,23,42,0.15)] disabled:opacity-70 flex items-center group">
                {isSubmitting ? <Loader2 className="animate-spin mr-2 text-[#C5A059]" size={18} /> : null}
                <span className="group-hover:text-[#0f172a] transition-colors">{isEditMode ? "Save Changes" : "Save Quotation"}</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateQuotation;