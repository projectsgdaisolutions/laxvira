// import React, { useState } from 'react';
// import { Search, Filter, X, ChevronDown, Maximize2 } from 'lucide-react';

// const Returns = () => {
//   const [selectedInvoice, setSelectedInvoice] = useState('INV-2025-2');
//   const [refundMethod, setRefundMethod] = useState('upi');

//   // Mock Invoice Data
//   const invoices = [
//     { id: 'INV-2025-2', customer: 'Ramesh Kumar', date: '2 May', amount: 'Rs.1000', method: 'UPI' },
//     { id: 'INV-2025-3', customer: 'Ramesh Kumar', date: '2 May', amount: 'Rs.1000', method: 'UPI' },
//     { id: 'INV-2025-4', customer: 'Ramesh Kumar', date: '2 May', amount: 'Rs.1000', method: 'UPI' },
//     { id: 'INV-2025-5', customer: 'Ramesh Kumar', date: '2 May', amount: 'Rs.1000', method: 'UPI' },
//     { id: 'INV-2025-6', customer: 'Ramesh Kumar', date: '2 May', amount: 'Rs.1000', method: 'UPI' },
//   ];

//   return (
//     <div className="w-full pb-10">
      
//       {/* Header */}
//       <div className="flex justify-between items-start mb-8">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-900">Return & Refund</h1>
//           <p className="text-sm text-slate-500 mt-1">Returns are always linked to the original invoice.</p>
//         </div>
//         <button className="flex items-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
//           Cancel <X className="w-4 h-4 ml-2" />
//         </button>
//       </div>

//       {/* Stepper Skeleton */}
//       <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
//         <div className="flex items-center text-sm font-bold text-slate-900 whitespace-nowrap">
//           <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full mr-2 text-xs">1</span>
//           Find original Invoice
//         </div>
//         <div className="h-px bg-slate-300 w-16"></div>
//         <div className="flex items-center text-sm font-medium text-slate-400 whitespace-nowrap">
//           <span className="w-6 h-6 flex items-center justify-center border border-slate-300 rounded-full mr-2 text-xs">2</span>
//           Select items to return
//         </div>
//         <div className="h-px bg-slate-300 w-16"></div>
//         <div className="flex items-center text-sm font-medium text-slate-400 whitespace-nowrap">
//           <span className="w-6 h-6 flex items-center justify-center border border-slate-300 rounded-full mr-2 text-xs">3</span>
//           Refund Confirmation
//         </div>
//         <div className="h-px bg-slate-300 w-16"></div>
//         <div className="flex items-center text-sm font-medium text-slate-400 whitespace-nowrap">
//           <span className="w-6 h-6 flex items-center justify-center border border-slate-300 rounded-full mr-2 text-xs">4</span>
//           Return Summary
//         </div>
//       </div>

//       {/* Main 3-Column Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
//         {/* COLUMN 1: Find original Invoice */}
//         <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col h-full shadow-sm">
//           <h2 className="text-lg font-bold text-slate-900">1.Find original Invoice</h2>
//           <p className="text-xs text-slate-500 mb-4">Look up the invoice for which items are being returned.</p>
          
//           <div className="relative mb-3">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search className="h-4 w-4 text-slate-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search by invoice no, customer name or phone......"
//               className="block w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 text-sm outline-none"
//             />
//           </div>

//           <div className="flex gap-2 mb-4">
//             <button className="flex items-center px-3 py-1.5 border border-slate-300 rounded-lg text-sm hover:bg-slate-50">
//               <Filter className="w-4 h-4 mr-2" /> Filter
//             </button>
//             <div className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-sm text-slate-600 flex items-center justify-center bg-slate-50">
//               1 May 2025-21 May 2025
//             </div>
//           </div>

//           <div className="flex-1 overflow-y-auto mb-4 border border-slate-200 rounded-lg">
//             <table className="w-full text-xs text-left">
//               <thead className="text-slate-500 border-b border-slate-200 bg-slate-50">
//                 <tr>
//                   <th className="px-3 py-2 font-medium">Invoice no</th>
//                   <th className="px-3 py-2 font-medium">Customer</th>
//                   <th className="px-3 py-2 font-medium">Date</th>
//                   <th className="px-3 py-2 font-medium">Total Amount</th>
//                   <th className="px-3 py-2 font-medium">Payment Method</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200">
//                 {invoices.map((inv) => (
//                   <tr key={inv.id} className="hover:bg-slate-50 cursor-pointer" onClick={() => setSelectedInvoice(inv.id)}>
//                     <td className="px-3 py-3 flex items-center gap-2">
//                       <input 
//                         type="radio" 
//                         checked={selectedInvoice === inv.id}
//                         onChange={() => setSelectedInvoice(inv.id)}
//                         className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
//                       />
//                       <span className="font-medium">{inv.id}</span>
//                     </td>
//                     <td className="px-3 py-3">{inv.customer}</td>
//                     <td className="px-3 py-3">{inv.date}</td>
//                     <td className="px-3 py-3">{inv.amount}</td>
//                     <td className="px-3 py-3">{inv.method}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
//           <div className="text-xs text-slate-500 mb-4">Showing 1 to 5 of 25 invoices</div>

//           {/* Selected Invoice Details Box */}
//           <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
//             <div className="flex items-center gap-2 mb-3">
//               <span className="text-sm text-slate-500">Selected invoice</span>
//               <span className="font-bold text-sm">INV-2025-2</span>
//               <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">Paid</span>
//             </div>
            
//             <div className="grid grid-cols-4 gap-2 mb-3">
//               <div className="bg-white border border-slate-200 p-2 rounded flex flex-col justify-center text-center">
//                 <span className="text-[10px] text-slate-500">Customer</span>
//                 <span className="font-semibold text-xs">Ramesh Kumar</span>
//               </div>
//               <div className="bg-white border border-slate-200 p-2 rounded flex flex-col justify-center text-center">
//                 <span className="text-[10px] text-slate-500">Date</span>
//                 <span className="font-semibold text-xs">2 May 2025</span>
//               </div>
//               <div className="bg-white border border-slate-200 p-2 rounded flex flex-col justify-center text-center">
//                 <span className="text-[10px] text-slate-500">Amount</span>
//                 <span className="font-semibold text-xs">Rs.1000</span>
//               </div>
//               <div className="bg-white border border-slate-200 p-2 rounded flex flex-col justify-center text-center">
//                 <span className="text-[10px] text-slate-500">Paid via</span>
//                 <span className="font-semibold text-xs">UPI</span>
//               </div>
//             </div>
            
//             <button className="text-blue-600 text-xs font-medium hover:underline">View invoice details</button>
//           </div>
//         </div>

//         {/* COLUMN 2: Select items to return */}
//         <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col h-full shadow-sm">
//           <h2 className="text-lg font-bold text-slate-900">2.Select items to return</h2>
//           <p className="text-xs text-slate-500 mb-4">Choose the items and quantity to return.</p>
          
//           <div className="border border-slate-200 rounded-lg overflow-hidden mb-6 flex-1">
//             <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-xs font-medium text-slate-500">
//               <div className="p-3">Product</div>
//               <div className="p-3 border-l border-slate-200">Product Name & Price</div>
//               <div className="p-3 border-l border-slate-200">Return Qty</div>
//             </div>
            
//             <div className="divide-y divide-slate-200">
//               {/* Product Row 1 */}
//               <div className="grid grid-cols-3 items-center">
//                 <div className="p-3 flex justify-center">
//                   <div className="w-16 h-12 bg-amber-100 rounded border border-amber-200 flex items-center justify-center text-[10px] font-bold text-amber-600">
//                     Britannia
//                   </div>
//                 </div>
//                 <div className="p-3 border-l border-slate-200">
//                   <p className="font-bold text-sm">Britannia Biscuits</p>
//                   <p className="text-blue-600 font-medium text-xs">₹95.00 / case</p>
//                 </div>
//                 <div className="p-3 border-l border-slate-200 flex justify-between items-center pr-6">
//                   <span className="font-bold">2</span>
//                   <input type="radio" checked readOnly className="w-5 h-5 text-blue-600" />
//                 </div>
//               </div>
              
//               {/* Product Row 2 */}
//               <div className="grid grid-cols-3 items-center">
//                 <div className="p-3 flex justify-center">
//                   <div className="w-16 h-12 bg-orange-100 rounded border border-orange-200 flex items-center justify-center text-[10px] font-bold text-orange-600">
//                     TATA Salt
//                   </div>
//                 </div>
//                 <div className="p-3 border-l border-slate-200">
//                   <p className="font-bold text-sm">TATA Salt</p>
//                   <p className="text-blue-600 font-medium text-xs">₹95.00 / case</p>
//                 </div>
//                 <div className="p-3 border-l border-slate-200 flex justify-between items-center pr-6">
//                   <span className="font-bold">1</span>
//                   <input type="radio" checked readOnly className="w-5 h-5 text-blue-600" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-xs text-slate-500 mb-1">Return Reason</label>
//             <div className="relative">
//               <select className="w-full appearance-none border border-slate-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
//                 <option>Product not needed</option>
//                 <option>Damaged item</option>
//                 <option>Wrong item sent</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
//             </div>
//           </div>

//           <div className="border border-slate-200 rounded-lg p-4 grid grid-cols-3 gap-4 text-center mb-6">
//             <div>
//               <p className="text-xs text-slate-500 mb-1">Items Selected</p>
//               <p className="font-bold">2</p>
//             </div>
//             <div className="border-l border-slate-200">
//               <p className="text-xs text-slate-500 mb-1">Total Qty</p>
//               <p className="font-bold">2</p>
//             </div>
//             <div className="border-l border-slate-200">
//               <p className="text-xs text-slate-500 mb-1">Total refund amount</p>
//               <p className="font-bold text-green-600">Rs.190</p>
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-8 rounded-lg">
//               Continue
//             </button>
//           </div>
//         </div>

//         {/* COLUMN 3: Refund Confirmation */}
//         <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col h-full shadow-sm">
//           <h2 className="text-lg font-bold text-slate-900">3.Refund Confirmation</h2>
//           <p className="text-xs text-slate-500 mb-4">Review the refund details and confirm.</p>
          
//           <div className="bg-green-50/50 border border-green-100 rounded-lg p-4 mb-4">
//             <p className="text-xs text-slate-500 font-medium mb-1">Total refund amount</p>
//             <p className="text-xl font-bold text-green-700">Rs.190</p>
//           </div>

//           <div className="border border-slate-200 rounded-lg p-4 mb-6">
//             <h3 className="text-sm font-bold mb-3">Refund Summary</h3>
//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between text-slate-500">
//                 <span>Total Amount</span>
//                 <span>Rs.190</span>
//               </div>
//               <div className="flex justify-between text-slate-500">
//                 <span>Discount</span>
//                 <span>Rs.00</span>
//               </div>
//               <div className="flex justify-between text-slate-500">
//                 <span>Tax</span>
//                 <span>Rs.16</span>
//               </div>
//               <div className="pt-2 mt-2 border-t border-slate-100 flex justify-between font-bold">
//                 <span>Refund Amount</span>
//                 <span>Rs.190</span>
//               </div>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h3 className="text-sm font-bold mb-3">Refund Method</h3>
//             <div className="space-y-3">
//               <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${refundMethod === 'upi' ? 'bg-blue-50 border-blue-200' : 'border-slate-200'}`}>
//                 <input 
//                   type="radio" 
//                   name="method" 
//                   checked={refundMethod === 'upi'}
//                   onChange={() => setRefundMethod('upi')}
//                   className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 mr-3" 
//                 />
//                 <span className="font-bold text-sm">UPI</span>
//               </label>
              
//               <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${refundMethod === 'cash' ? 'bg-blue-50 border-blue-200' : 'border-slate-200'}`}>
//                 <input 
//                   type="radio" 
//                   name="method"
//                   checked={refundMethod === 'cash'}
//                   onChange={() => setRefundMethod('cash')} 
//                   className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 mr-3" 
//                 />
//                 <span className="font-bold text-sm text-slate-400">Cash</span>
//               </label>
//             </div>
//           </div>

//           <div className="mt-auto space-y-3">
//             <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors">
//               Confirm Refund of Rs.190
//             </button>
//             <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold py-3 rounded-lg transition-colors">
//               Back
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* Bottom Summary Panel */}
//       <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
//         <h3 className="font-bold text-slate-900 mb-6">original Invoice Summary</h3>
        
//         <div className="flex flex-wrap items-center justify-between gap-6">
//           <div>
//             <p className="text-xs text-slate-500 mb-1">Invoice no</p>
//             <p className="font-medium text-sm">INV-2025-2</p>
//           </div>
//           <div>
//             <p className="text-xs text-slate-500 mb-1">Customer</p>
//             <p className="font-medium text-sm">Ramesh Kumar</p>
//           </div>
//           <div>
//             <p className="text-xs text-slate-500 mb-1">Date</p>
//             <p className="font-medium text-sm">2 May</p>
//           </div>
//           <div>
//             <p className="text-xs text-slate-500 mb-1">Total Amount</p>
//             <p className="font-medium text-sm">Rs.190</p>
//           </div>
//           <div>
//             <p className="text-xs text-slate-500 mb-1">Payment Method</p>
//             <p className="font-medium text-sm">UPI</p>
//           </div>
//           <button className="flex items-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50">
//             View Full invoice <Maximize2 className="w-4 h-4 ml-2" />
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Returns;

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, X, ChevronDown, Maximize2, Loader2, AlertTriangle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Returns = () => {
  const navigate = useNavigate();

  // --- UI & View State ---
  // 1: Find Invoice, 2: Select Items, 3: Confirm
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Data State ---
  const [invoices, setInvoices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Specific Selected Invoice
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [fullInvoiceData, setFullInvoiceData] = useState(null);

  // Return Processing State
  const [returnItems, setReturnItems] = useState({}); // { itemId: quantityToReturn }
  const [returnReason, setReturnReason] = useState("Product not needed");
  const [refundMethod, setRefundMethod] = useState('upi');

  // --------------------------------------------------------
  // Step 1: Fetch Recent Invoices
  // --------------------------------------------------------
  useEffect(() => {
    const fetchInvoices = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:8000/api/invoices", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error("Failed to load invoices.");
        const data = await res.json();
        setInvoices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  const filteredInvoices = invoices.filter(inv => 
    inv.invoice_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inv.customer_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inv.id.toString().includes(searchQuery)
  );

  // --------------------------------------------------------
  // Step 2: Fetch Selected Invoice Details
  // --------------------------------------------------------
  const handleSelectInvoice = async (invoiceId) => {
    setSelectedInvoiceId(invoiceId);
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/invoices/${invoiceId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to load invoice details.");
      
      const data = await res.json();
      setFullInvoiceData(data);
      
      // Initialize return quantities to 0
      const initialReturns = {};
      data.items.forEach(item => {
        initialReturns[item.id || item.name] = 0; 
      });
      setReturnItems(initialReturns);
      
      // Advance to step 2 automatically
      setCurrentStep(2);

    } catch (err) {
      setError(err.message);
      setSelectedInvoiceId(null);
    } finally {
      setIsLoading(false);
    }
  };

  // --------------------------------------------------------
  // Step 3: Math Engine for Refunds
  // --------------------------------------------------------
  const handleQuantityChange = (itemIdentifier, maxQty, newQty) => {
    const validQty = Math.max(0, Math.min(maxQty, Number(newQty)));
    setReturnItems(prev => ({
      ...prev,
      [itemIdentifier]: validQty
    }));
  };

  const returnMath = useMemo(() => {
    if (!fullInvoiceData) return { totalQty: 0, itemsCount: 0, subtotal: 0, tax: 0, grandTotal: 0 };

    let itemsCount = 0;
    let totalQty = 0;
    let subtotal = 0;
    let tax = 0;

    fullInvoiceData.items.forEach(item => {
      const returnQty = returnItems[item.id || item.name] || 0;
      if (returnQty > 0) {
        itemsCount += 1;
        totalQty += returnQty;
        
        const itemSubtotal = returnQty * (item.rate || 0);
        subtotal += itemSubtotal;
        tax += itemSubtotal * ((item.tax_rate || 0) / 100);
      }
    });

    return {
      totalQty,
      itemsCount,
      subtotal,
      tax,
      grandTotal: subtotal + tax
    };
  }, [fullInvoiceData, returnItems]);

  // --------------------------------------------------------
  // Step 4: Submission
  // --------------------------------------------------------
  const handleConfirmRefund = () => {
    // Backend integration for saving the return goes here later
    alert(`Successfully processed return of ₹${returnMath.grandTotal.toFixed(2)} via ${refundMethod.toUpperCase()}`);
    
    // Reset view
    setCurrentStep(1);
    setSelectedInvoiceId(null);
    setFullInvoiceData(null);
    setSearchQuery("");
  };

  // --------------------------------------------------------
  // Utility
  // --------------------------------------------------------
  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    const d = new Date(isoString);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  };

  const currency = (val) => `₹${Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  return (
    <div className="w-full pb-10 font-sans">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Return & Refund</h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">Returns are securely linked to original transaction hashes.</p>
        </div>
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors"
        >
          Cancel <X className="w-4 h-4 ml-2" />
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
          <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
          <p className="text-xs font-bold">{error}</p>
        </div>
      )}

      {/* Dynamic Stepper */}
      <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 select-none">
        <div className={`flex items-center text-sm whitespace-nowrap transition-colors ${currentStep >= 1 ? 'font-bold text-slate-900' : 'font-medium text-slate-400'}`}>
          <span className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs transition-colors ${currentStep >= 1 ? 'bg-blue-600 text-white border-blue-600' : 'border border-slate-300'}`}>
            {currentStep > 1 ? <Check size={12} /> : 1}
          </span>
          Locate Invoice
        </div>
        <div className={`h-px w-12 transition-colors ${currentStep >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
        
        <div className={`flex items-center text-sm whitespace-nowrap transition-colors ${currentStep >= 2 ? 'font-bold text-slate-900' : 'font-medium text-slate-400'}`}>
          <span className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs transition-colors ${currentStep >= 2 ? 'bg-blue-600 text-white border-blue-600' : 'border border-slate-300'}`}>
            {currentStep > 2 ? <Check size={12} /> : 2}
          </span>
          Process Items
        </div>
        <div className={`h-px w-12 transition-colors ${currentStep >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
        
        <div className={`flex items-center text-sm whitespace-nowrap transition-colors ${currentStep >= 3 ? 'font-bold text-slate-900' : 'font-medium text-slate-400'}`}>
          <span className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs transition-colors ${currentStep >= 3 ? 'bg-blue-600 text-white border-blue-600' : 'border border-slate-300'}`}>
            3
          </span>
          Confirm Refund
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* COLUMN 1: Search & List */}
        <div className={`border rounded-2xl p-6 flex flex-col h-full shadow-sm transition-all duration-300 ${currentStep === 1 ? 'bg-white border-blue-200 ring-4 ring-blue-50' : 'bg-slate-50/50 border-slate-200 opacity-70'}`}>
          <h2 className="text-lg font-black text-slate-900">1. Select Invoice</h2>
          <p className="text-xs font-medium text-slate-500 mb-5">Query the ledger for the originating transaction.</p>
          
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={currentStep !== 1}
              placeholder="Search invoice no. or client..."
              className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm font-medium outline-none disabled:bg-slate-50 transition-all"
            />
          </div>

          <div className="flex-1 overflow-y-auto mb-4 border border-slate-200 rounded-xl bg-white">
            <table className="w-full text-xs text-left">
              <thead className="text-slate-500 border-b border-slate-200 bg-slate-50/80 font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Invoice</th>
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {isLoading && !fullInvoiceData ? (
                  <tr><td colSpan="3" className="p-8 text-center"><Loader2 className="w-6 h-6 animate-spin text-blue-600 mx-auto" /></td></tr>
                ) : filteredInvoices.length === 0 ? (
                  <tr><td colSpan="3" className="p-8 text-center text-slate-400 font-medium">No records found.</td></tr>
                ) : (
                  filteredInvoices.map((inv) => (
                    <tr 
                      key={inv.id} 
                      className={`cursor-pointer transition-colors ${selectedInvoiceId === inv.id ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                      onClick={() => currentStep === 1 && handleSelectInvoice(inv.id)}
                    >
                      <td className="px-4 py-3.5 flex items-center gap-3">
                        <input 
                          type="radio" 
                          checked={selectedInvoiceId === inv.id}
                          readOnly
                          className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                        />
                        <span className="font-bold text-slate-900">{inv.invoice_number || `INV-${inv.id}`}</span>
                      </td>
                      <td className="px-4 py-3.5 font-medium text-slate-600 truncate max-w-[100px]">{inv.customer_name}</td>
                      <td className="px-4 py-3.5 font-bold text-slate-900 text-right">{currency(inv.total_amount)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {currentStep > 1 && (
            <button 
              onClick={() => { setCurrentStep(1); setSelectedInvoiceId(null); setFullInvoiceData(null); }}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 text-center w-full py-2"
            >
              ← Select a different invoice
            </button>
          )}
        </div>

        {/* COLUMN 2: Select Items */}
        <div className={`border rounded-2xl p-6 flex flex-col h-full shadow-sm transition-all duration-300 ${currentStep === 2 ? 'bg-white border-blue-200 ring-4 ring-blue-50' : 'bg-slate-50/50 border-slate-200 opacity-70'}`}>
          <h2 className="text-lg font-black text-slate-900">2. Process Return</h2>
          <p className="text-xs font-medium text-slate-500 mb-5">Adjust quantities being returned to inventory.</p>
          
          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6 flex-1 bg-white">
            <div className="grid grid-cols-[3fr_1.5fr] bg-slate-50/80 border-b border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              <div className="p-3 pl-4">Item Snapshot</div>
              <div className="p-3 border-l border-slate-200 text-center">Return Qty</div>
            </div>
            
            <div className="divide-y divide-slate-100 overflow-y-auto max-h-[300px]">
              {!fullInvoiceData ? (
                <div className="p-8 text-center text-slate-400 text-xs font-medium">Select an invoice first.</div>
              ) : (
                fullInvoiceData.items.map((item, idx) => {
                  const identifier = item.id || item.name;
                  const maxReturnable = item.quantity;
                  const currentReturnQty = returnItems[identifier] || 0;

                  return (
                    <div key={idx} className="grid grid-cols-[3fr_1.5fr] items-center">
                      <div className="p-3 pl-4">
                        <p className="font-bold text-sm text-slate-900 line-clamp-1">{item.name}</p>
                        <p className="text-slate-500 font-medium text-xs mt-0.5">{currency(item.rate)} / ea (Max: {maxReturnable})</p>
                      </div>
                      <div className="p-3 border-l border-slate-200 flex justify-center">
                        <input 
                          type="number" 
                          min="0" 
                          max={maxReturnable}
                          value={currentReturnQty}
                          disabled={currentStep !== 2}
                          onChange={(e) => handleQuantityChange(identifier, maxReturnable, e.target.value)}
                          className="w-16 text-center font-bold text-sm border border-slate-200 rounded-lg py-1.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Return Classification</label>
            <div className="relative">
              <select 
                disabled={currentStep !== 2}
                value={returnReason}
                onChange={(e) => setReturnReason(e.target.value)}
                className="w-full appearance-none border border-slate-200 rounded-xl p-3 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white disabled:bg-slate-50"
              >
                <option>Product not needed</option>
                <option>Damaged item</option>
                <option>Wrong item sent</option>
                <option>Quality issues</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl p-4 grid grid-cols-3 gap-4 text-center mb-6 bg-slate-50/50">
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Lines</p>
              <p className="font-black text-slate-900">{returnMath.itemsCount}</p>
            </div>
            <div className="border-l border-slate-200">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Units</p>
              <p className="font-black text-slate-900">{returnMath.totalQty}</p>
            </div>
            <div className="border-l border-slate-200">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Value</p>
              <p className="font-black text-emerald-600">{currency(returnMath.grandTotal)}</p>
            </div>
          </div>

          <div className="flex justify-end mt-auto">
            <button 
              disabled={currentStep !== 2 || returnMath.totalQty === 0}
              onClick={() => setCurrentStep(3)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md shadow-blue-600/20 disabled:opacity-50 disabled:shadow-none"
            >
              Verify Calculations
            </button>
          </div>
        </div>

        {/* COLUMN 3: Refund Confirmation */}
        <div className={`border rounded-2xl p-6 flex flex-col h-full shadow-sm transition-all duration-300 ${currentStep === 3 ? 'bg-white border-blue-200 ring-4 ring-blue-50' : 'bg-slate-50/50 border-slate-200 opacity-70'}`}>
          <h2 className="text-lg font-black text-slate-900">3. Execute Refund</h2>
          <p className="text-xs font-medium text-slate-500 mb-5">Finalize ledger adjustment and trigger payout.</p>
          
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 mb-6 text-center">
            <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-extrabold mb-1">Total Authorized Refund</p>
            <p className="text-3xl font-black text-emerald-700">{currency(returnMath.grandTotal)}</p>
          </div>

          <div className="border border-slate-200 rounded-xl p-5 mb-6 bg-white">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Financial Breakdown</h3>
            <div className="space-y-3 text-sm font-medium">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal Return</span>
                <span>{currency(returnMath.subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Prorated Tax Reversal</span>
                <span>{currency(returnMath.tax)}</span>
              </div>
              <div className="pt-3 mt-1 border-t border-slate-100 flex justify-between font-black text-slate-900">
                <span>Net Credit</span>
                <span>{currency(returnMath.grandTotal)}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Disbursement Route</h3>
            <div className="space-y-3">
              <label className={`flex items-center p-3.5 border rounded-xl cursor-pointer transition-colors ${refundMethod === 'upi' ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-500' : 'border-slate-200 bg-white'}`}>
                <input 
                  type="radio" 
                  name="method" 
                  disabled={currentStep !== 3}
                  checked={refundMethod === 'upi'}
                  onChange={() => setRefundMethod('upi')}
                  className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 mr-3" 
                />
                <span className="font-bold text-sm text-slate-900">Original Source (UPI/Card)</span>
              </label>
              
              <label className={`flex items-center p-3.5 border rounded-xl cursor-pointer transition-colors ${refundMethod === 'cash' ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-500' : 'border-slate-200 bg-white'}`}>
                <input 
                  type="radio" 
                  name="method"
                  disabled={currentStep !== 3}
                  checked={refundMethod === 'cash'}
                  onChange={() => setRefundMethod('cash')} 
                  className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500 mr-3" 
                />
                <span className="font-bold text-sm text-slate-900">Over-the-Counter (Cash)</span>
              </label>
            </div>
          </div>

          <div className="mt-auto space-y-3">
            <button 
              disabled={currentStep !== 3 || returnMath.grandTotal === 0}
              onClick={handleConfirmRefund}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider text-sm py-4 rounded-xl transition-all shadow-md shadow-emerald-600/20 disabled:opacity-50 disabled:shadow-none"
            >
              Sign & Execute Transfer
            </button>
            <button 
              disabled={currentStep !== 3}
              onClick={() => setCurrentStep(2)}
              className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-sm py-3.5 rounded-xl transition-colors disabled:opacity-50"
            >
              Amend Quantities
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Summary Panel */}
      {fullInvoiceData && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm animate-fadeIn">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-5">Reference Transaction Data</h3>
          
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Receipt Number</p>
              <p className="font-black text-sm text-slate-900">{fullInvoiceData.invoice.invoice_number}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Entity</p>
              <p className="font-black text-sm text-slate-900">{fullInvoiceData.customer.company_name}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Timestamp</p>
              <p className="font-black text-sm text-slate-900">{formatDate(fullInvoiceData.invoice.issue_date)}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Gross Settled</p>
              <p className="font-black text-sm text-slate-900">{currency(fullInvoiceData.invoice.grand_total)}</p>
            </div>
            <button 
              onClick={() => window.open(`/invoice/${fullInvoiceData.invoice.id}`, '_blank')}
              className="flex items-center px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              Inspect Ledger <Maximize2 className="w-3 h-3 ml-2" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Returns;