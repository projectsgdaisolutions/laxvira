// // // ============================================================================
// // // src/pages/Invoice.jsx
// // // Premium Invoice Viewer — Retail Billing System
// // //
// // // Renders a printable A4 Tax Invoice alongside a thermal receipt preview,
// // // with Print / Download PDF / Share via WhatsApp actions.
// // //
// // // BACKEND CONTRACT
// // // -----------------------------------------------------------------------
// // // CURRENT : const invoice = getInvoiceById(id)   // src/data/invoices.js
// // // LATER   : GET /invoice/:id                     // replace data source only
// // //
// // // The Backend Developer should ONLY swap the data-fetch effect below.
// // // No UI or business logic (totals, formatting, layout) needs to change.
// // // ============================================================================

// // // ---------------------------------------------------------------------------
// // // Imports
// // import React, { useState, useEffect, useMemo, useCallback } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import {
// //   ChevronLeft,
// //   Printer,
// //   Download,
// //   MessageCircle,
// //   FileText,
// //   Receipt,
// //   AlertTriangle,
// //   Loader2,
// // } from "lucide-react";

// // const CURRENCY = "₹";

// // export default function Invoice() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   // State
// //   const [invoice, setInvoice] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [actionMessage, setActionMessage] = useState("");

// //   // Data fetch from FastAPI Backend
// //   useEffect(() => {
// //     let isMounted = true;
// //     setIsLoading(true);
// //     setError(null);

// //     const fetchInvoice = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const response = await fetch(`http://localhost:8000/api/invoices/${id}`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });

// //         if (!response.ok) {
// //           throw new Error("Invoice not found or unauthorized.");
// //         }

// //         const data = await response.json();
// //         if (isMounted) setInvoice(data);
// //       } catch (err) {
// //         if (isMounted) setError(err.message);
// //       } finally {
// //         if (isMounted) setIsLoading(false);
// //       }
// //     };

// //     fetchInvoice();

// //     return () => {
// //       isMounted = false;
// //     };
// //   }, [id]);

// //   useEffect(() => {
// //     if (!actionMessage) return;
// //     const timer = setTimeout(() => setActionMessage(""), 2500);
// //     return () => clearTimeout(timer);
// //   }, [actionMessage]);

// //   // Derived / formatted values
// //   const formatCurrency = useCallback((value) => {
// //     const amount = Number(value) || 0;
// //     return `${amount.toLocaleString("en-IN", {
// //       minimumFractionDigits: 2,
// //       maximumFractionDigits: 2,
// //     })}`;
// //   }, []);

// //   const formattedDate = useMemo(() => {
// //     if (!invoice?.date) return "";
// //     const d = new Date(invoice.date);
// //     if (Number.isNaN(d.getTime())) return invoice.date;
// //     return d.toLocaleDateString("en-IN", {
// //       day: "2-digit",
// //       month: "short",
// //       year: "numeric",
// //     });
// //   }, [invoice?.date]);

// //   const formattedTime = useMemo(() => {
// //     if (!invoice?.date) return "";
// //     const d = new Date(invoice.date);
// //     return d.toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' });
// //   }, [invoice?.date]);

// //   // Event Handlers
// //   const handleBack = useCallback(() => {
// //     navigate(-1);
// //   }, [navigate]);

// //   const handlePrint = useCallback(() => {
// //     window.print();
// //   }, []);

// //   const handleDownloadPdf = useCallback(() => {
// //     setActionMessage("Preparing PDF download… (Integration required)");
// //   }, []);

// //   const handleShareWhatsApp = useCallback(() => {
// //     setActionMessage("Preparing invoice to share… (Integration required)");
// //   }, []);

// //   // JSX — Loading state
// //   if (isLoading) {
// //     return (
// //       <div className="flex min-h-screen items-center justify-center bg-slate-50">
// //         <div className="flex flex-col items-center gap-3 text-slate-500">
// //           <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
// //           <p className="text-sm font-medium">Loading invoice…</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // JSX — Error / not-found state
// //   if (error || !invoice) {
// //     return (
// //       <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
// //         <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
// //           <div className="rounded-full bg-rose-50 p-3">
// //             <AlertTriangle className="h-6 w-6 text-rose-500" />
// //           </div>
// //           <div>
// //             <p className="font-semibold text-slate-800">Invoice not found</p>
// //             <p className="mt-1 text-sm text-slate-500">{error}</p>
// //           </div>
// //           <button
// //             type="button"
// //             onClick={handleBack}
// //             className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
// //           >
// //             <ChevronLeft className="h-4 w-4" />
// //             Go back
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // JSX — Main UI
// //   return (
// //     <div className="min-h-screen bg-slate-100/50 pb-12 print:bg-white print:pb-0">
      
// //       {actionMessage && (
// //         <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white shadow-lg print:hidden">
// //           {actionMessage}
// //         </div>
// //       )}

// //       {/* Top Navigation Panel */}
// //       <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between mb-6 print:hidden">
// //         <div className="flex items-center gap-4">
// //           <button 
// //             onClick={handleBack}
// //             className="flex items-center text-slate-800 font-bold hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors"
// //           >
// //             <ChevronLeft size={20} className="mr-1" /> Back
// //           </button>
// //           <span className="text-slate-500 font-medium text-lg border-l border-slate-300 pl-4">
// //             Choose a format to view and share invoice
// //           </span>
// //         </div>
// //       </div>

// //       <div className="max-w-[1400px] mx-auto px-6 flex flex-col xl:flex-row gap-8 items-start">
        
// //         {/* LEFT COLUMN: A4 INVOICE */}
// //         <div className="flex-1 w-full flex flex-col gap-4">
// //           <div className="flex justify-between items-center px-2 print:hidden">
// //             <span className="flex items-center text-blue-600 bg-blue-50 px-3 py-1.5 rounded text-sm font-semibold border border-blue-100">
// //               <FileText size={16} className="mr-2" /> A4 invoice (for print/email)
// //             </span>
// //             <span className="text-slate-400 text-sm font-medium">A4</span>
// //           </div>

// //           <div className="bg-white shadow-sm border border-slate-200 p-10 min-h-[800px] flex flex-col print:shadow-none print:border-none print:p-0">
            
// //             {/* Header Data */}
// //             <div className="flex justify-between items-start mb-8">
// //               <div>
// //                 <h2 className="font-bold text-slate-900 text-lg mb-4">{invoice.store.name}</h2>
// //                 <p className="text-sm text-slate-800 whitespace-pre-line mb-4 leading-relaxed">
// //                   {invoice.store.address || "Address not provided"}
// //                 </p>
// //                 <p className="text-sm text-slate-800">Phone: {invoice.store.phone || "N/A"}</p>
// //                 <p className="text-sm text-slate-800">GSTIN: {invoice.store.gstNumber || "N/A"}</p>
// //               </div>
// //               <div className="w-[300px]">
// //                 <h2 className="font-bold text-slate-900 text-lg mb-4">TAX Invoice</h2>
// //                 <div className="grid grid-cols-2 gap-y-1 text-sm text-slate-800">
// //                   <span className="text-slate-600">Invoice No.</span>
// //                   <span>{String(invoice.id).padStart(6, '0')}</span>
// //                   <span className="text-slate-600">Date</span>
// //                   <span>{formattedDate}</span>
// //                   <span className="text-slate-600">Time</span>
// //                   <span>{formattedTime}</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <hr className="border-slate-300 mb-6" />

// //             {/* Bill To & Details */}
// //             <div className="flex justify-between items-start mb-8">
// //               <div>
// //                 <h3 className="font-bold text-blue-700 text-base mb-2">Bill to</h3>
// //                 <h4 className="font-bold text-slate-900 text-lg mb-2">{invoice.customer.name}</h4>
// //                 <p className="text-sm text-slate-800 whitespace-pre-line mb-1 leading-relaxed">
// //                   {invoice.customer.address}
// //                 </p>
// //                 <p className="text-sm text-slate-800">Phone: {invoice.customer.phone}</p>
// //               </div>
// //               <div className="w-[300px]">
// //                 <h3 className="font-bold text-blue-700 text-base mb-2">Invoice Details</h3>
// //                 <div className="flex flex-col gap-1 text-sm text-slate-800">
// //                   <p><span className="text-slate-600">Payment Mode:</span> {invoice.paymentMethod}</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Items Table */}
// //             <div className="mb-8">
// //               <table className="w-full text-sm">
// //                 <thead className="bg-slate-200 text-slate-800">
// //                   <tr>
// //                     <th className="py-2 px-4 text-left font-semibold">Item Name</th>
// //                     <th className="py-2 px-4 text-center font-semibold">Qty</th>
// //                     <th className="py-2 px-4 text-right font-semibold">Rate</th>
// //                     <th className="py-2 px-4 text-right font-semibold">Amount</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="divide-y divide-slate-100">
// //                   {invoice.items.map((item, idx) => (
// //                     <tr key={item.id || idx}>
// //                       <td className="py-3 px-4 font-medium text-slate-900">{item.name}</td>
// //                       <td className="py-3 px-4 text-center text-slate-800 font-medium">{item.quantity}</td>
// //                       <td className="py-3 px-4 text-right text-slate-800">{formatCurrency(item.price)}</td>
// //                       <td className="py-3 px-4 text-right font-medium text-slate-900">{formatCurrency(item.amount)}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>

// //             <div className="flex justify-end items-start mt-auto pt-6">
// //               <div className="w-[350px]">
// //                 <div className="flex justify-between px-4 py-3 bg-blue-100 text-blue-800 font-bold border-t border-blue-200">
// //                   <span>Grand Total</span>
// //                   <span>{formatCurrency(invoice.grandTotal)}</span>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="mt-8 text-center text-sm text-slate-500 border-t border-slate-200 pt-4">
// //                Thank you for your business!
// //             </div>
// //           </div>

// //           {/* Action Buttons */}
// //           <div className="flex gap-4 print:hidden">
// //             <button 
// //               onClick={handlePrint}
// //               className="flex-1 bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
// //             >
// //               <Printer size={18} className="mr-2" /> Print
// //             </button>
// //             <button 
// //               onClick={handleDownloadPdf}
// //               className="flex-1 bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
// //             >
// //               <Download size={18} className="mr-2" /> Download PDF
// //             </button>
// //             <button 
// //               onClick={handleShareWhatsApp}
// //               className="flex-1 bg-green-100 text-green-700 border border-green-300 hover:bg-green-200 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
// //             >
// //               <MessageCircle size={18} className="mr-2" /> Share via Whatsapp
// //             </button>
// //           </div>
// //         </div>

// //         {/* RIGHT COLUMN: THERMAL RECEIPT */}
// //         <div className="w-full xl:w-[400px] flex flex-col gap-4 print:hidden">
// //           <div className="flex justify-between items-center px-2">
// //             <span className="flex items-center text-green-700 bg-green-100 px-3 py-1.5 rounded text-sm font-semibold border border-green-200">
// //               <Receipt size={16} className="mr-2" /> Thermal invoice
// //             </span>
// //             <span className="text-slate-400 text-sm font-medium">80mm Width</span>
// //           </div>

// //           <div className="bg-white shadow-sm border border-slate-200 p-6 flex flex-col items-center">
// //             <div className="text-center w-full border-b border-dashed border-slate-300 pb-4 mb-4">
// //               <h2 className="font-bold text-slate-900 text-lg mb-4">Tax Invoice</h2>
// //               <p className="text-xs text-slate-800 whitespace-pre-line mb-3">
// //                 {invoice.store.address}
// //               </p>
// //               <p className="text-xs text-slate-800">Phone: {invoice.store.phone}</p>
// //               <p className="text-xs text-slate-800 mb-4">GSTIN: {invoice.store.gstNumber || "N/A"}</p>

// //               <div className="flex flex-col items-start text-xs text-slate-800 gap-1 w-full">
// //                 <div className="flex w-full"><span className="w-24 text-left">Invoice No.</span> <span>{String(invoice.id).padStart(6, '0')}</span></div>
// //                 <div className="flex w-full"><span className="w-24 text-left">Date</span> <span>{formattedDate}</span></div>
// //                 <div className="flex w-full"><span className="w-24 text-left">Time</span> <span>{formattedTime}</span></div>
// //               </div>
// //             </div>

// //             <div className="w-full border-b border-dashed border-slate-300 pb-4 mb-4">
// //               <h3 className="font-bold text-slate-900 text-base mb-4">Items Ordered</h3>
// //               <div className="flex flex-col gap-3 text-sm text-slate-800">
// //                 {invoice.items.map((item, idx) => (
// //                   <div key={item.id || idx} className="flex justify-between">
// //                     <span className="truncate pr-4">{item.name} x {item.quantity}</span>
// //                     <span>{CURRENCY}{formatCurrency(item.amount)}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="w-full text-sm text-slate-800 mb-6 flex flex-col gap-2">
// //               <div className="flex justify-between font-bold text-lg text-slate-900 pt-2 border-t border-dashed border-slate-300">
// //                 <span>Total Amount</span>
// //                 <span>{CURRENCY}{formatCurrency(invoice.grandTotal)}</span>
// //               </div>
// //             </div>

// //             <div className="text-center text-sm font-semibold text-slate-900">
// //               <p className="mb-1">Thank you!</p>
// //               <p>Visit Again</p>
// //             </div>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send } from "lucide-react";

// // const Invoice = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [data, setData] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchInvoiceData = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const res = await fetch(`http://localhost:8000/api/invoices/${id}`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
        
// //         if (!res.ok) throw new Error("Failed to load invoice details");
        
// //         const json = await res.json();
// //         setData(json);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchInvoiceData();
// //   }, [id]);

// //   const handlePrint = () => {
// //     window.print();
// //   };

// //   const formatDate = (isoString) => {
// //     if (!isoString) return "N/A";
// //     const d = new Date(isoString);
// //     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
// //   };

// //   const formatCurrency = (val) => `₹${Number(val).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <Loader2 className="animate-spin text-blue-600" size={32} />
// //       </div>
// //     );
// //   }

// //   if (error || !data) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
// //         <div className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100 flex items-center gap-3">
// //           <AlertTriangle size={24} />
// //           <p className="font-medium">{error || "Invoice not found"}</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const { store, customer, invoice, items } = data;

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
// //       {/* Non-Printable Action Bar */}
// //       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
// //         <button 
// //           onClick={() => navigate(-1)}
// //           className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
// //         >
// //           <ArrowLeft size={18} /> Back
// //         </button>
// //         <div className="flex items-center gap-3">
// //           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm font-medium">
// //             <Send size={16} /> Email
// //           </button>
// //           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm font-medium">
// //             <Download size={16} /> PDF
// //           </button>
// //           <button 
// //             onClick={handlePrint}
// //             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm font-medium"
// //           >
// //             <Printer size={16} /> Print
// //           </button>
// //         </div>
// //       </div>

// //       {/* A4 Document Wrapper */}
// //       <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none overflow-hidden">
// //         <div className="p-10 sm:p-12 print:p-0">
          
// //           {/* Header */}
// //           <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
// //             <div>
// //               <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase">TAX INVOICE</h1>
// //               <p className="text-gray-500 font-medium mt-1">Invoice No: {invoice.invoice_number}</p>
// //             </div>
// //             <div className="text-right">
// //               <h2 className="text-xl font-bold text-gray-900">{store.storeName}</h2>
// //               <p className="text-sm text-gray-600 mt-1">{store.address}</p>
// //               {store.phone && <p className="text-sm text-gray-600">Phone: {store.phone}</p>}
// //               {store.email && <p className="text-sm text-gray-600">Email: {store.email}</p>}
// //               {store.gstin && <p className="text-sm font-semibold text-gray-800 mt-1">GSTIN: {store.gstin}</p>}
// //             </div>
// //           </div>

// //           {/* Meta & Addresses */}
// //           <div className="flex flex-col sm:flex-row justify-between mb-8 gap-8">
// //             <div className="flex-1">
// //               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Billed To:</h3>
// //               <p className="text-base font-bold text-gray-900">{customer.company_name}</p>
// //               {customer.billing_address && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{customer.billing_address}</p>}
// //               {customer.phone && <p className="text-sm text-gray-600 mt-1">Phone: {customer.phone}</p>}
// //               {customer.gstin && <p className="text-sm font-semibold text-gray-800 mt-2">GSTIN: {customer.gstin}</p>}
// //             </div>
            
// //             <div className="flex-1 sm:text-right">
// //               <div className="inline-block text-left sm:text-right">
// //                 <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
// //                   <span className="text-gray-500 font-medium">Issue Date:</span>
// //                   <span className="text-gray-900 font-semibold">{formatDate(invoice.issue_date)}</span>
                  
// //                   {invoice.due_date && (
// //                     <>
// //                       <span className="text-gray-500 font-medium">Due Date:</span>
// //                       <span className="text-gray-900 font-semibold">{formatDate(invoice.due_date)}</span>
// //                     </>
// //                   )}
                  
// //                   {customer.place_of_supply && (
// //                     <>
// //                       <span className="text-gray-500 font-medium">Place of Supply:</span>
// //                       <span className="text-gray-900 font-semibold">{customer.place_of_supply}</span>
// //                     </>
// //                   )}
                  
// //                   <span className="text-gray-500 font-medium">Status:</span>
// //                   <span className="text-gray-900 font-bold uppercase">{invoice.status}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Line Items Table */}
// //           <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
// //             <table className="w-full text-left text-sm">
// //               <thead className="bg-gray-100 text-gray-800 border-b border-gray-200 font-bold uppercase text-xs">
// //                 <tr>
// //                   <th className="px-4 py-3 w-10 text-center">#</th>
// //                   <th className="px-4 py-3">Description</th>
// //                   <th className="px-4 py-3 w-24">HSN/SAC</th>
// //                   <th className="px-4 py-3 w-20 text-center">Qty</th>
// //                   <th className="px-4 py-3 w-28 text-right">Rate</th>
// //                   <th className="px-4 py-3 w-20 text-center">Tax %</th>
// //                   <th className="px-4 py-3 w-32 text-right">Amount</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-100">
// //                 {items.map((item, index) => (
// //                   <tr key={index}>
// //                     <td className="px-4 py-3 text-center text-gray-500">{index + 1}</td>
// //                     <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
// //                     <td className="px-4 py-3 text-gray-600">{item.hsn_sac_code || "-"}</td>
// //                     <td className="px-4 py-3 text-center text-gray-800">{item.quantity}</td>
// //                     <td className="px-4 py-3 text-right text-gray-800">{formatCurrency(item.rate)}</td>
// //                     <td className="px-4 py-3 text-center text-gray-600">{item.tax_rate}%</td>
// //                     <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency(item.quantity * item.rate)}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* Totals Section */}
// //           <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-800 pb-8 mb-8 gap-8">
// //             <div className="flex-1 text-sm text-gray-600">
// //               <h3 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Bank Details</h3>
// //               <p>Bank Name: HDFC Bank</p>
// //               <p>Account Name: {store.storeName}</p>
// //               <p>Account No: 50200012345678</p>
// //               <p>IFSC Code: HDFC0001234</p>
// //             </div>
            
// //             <div className="w-full sm:w-72 space-y-3 text-sm">
// //               <div className="flex justify-between text-gray-600">
// //                 <span>Subtotal</span>
// //                 <span className="font-medium text-gray-900">{formatCurrency(invoice.subtotal)}</span>
// //               </div>
// //               <div className="flex justify-between text-gray-600">
// //                 <span>Total Tax Amount</span>
// //                 <span className="font-medium text-gray-900">{formatCurrency(invoice.tax_total)}</span>
// //               </div>
// //               <div className="flex justify-between text-lg border-t border-gray-200 pt-3">
// //                 <span className="font-black text-gray-900">Grand Total</span>
// //                 <span className="font-black text-gray-900">{formatCurrency(invoice.grand_total)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Footer (Notes & Signatures) */}
// //           <div className="flex justify-between items-end">
// //             <div className="flex-1 max-w-md text-xs text-gray-500">
// //               {invoice.notes && (
// //                 <div className="mb-4">
// //                   <span className="font-bold text-gray-700 block mb-1">Notes:</span>
// //                   <p className="whitespace-pre-line">{invoice.notes}</p>
// //                 </div>
// //               )}
// //               {invoice.terms_conditions && (
// //                 <div>
// //                   <span className="font-bold text-gray-700 block mb-1">Terms & Conditions:</span>
// //                   <p className="whitespace-pre-line">{invoice.terms_conditions}</p>
// //                 </div>
// //               )}
// //             </div>
// //             <div className="text-center w-48 pt-12 border-t border-gray-300">
// //               <p className="text-xs font-bold text-gray-900 uppercase">Authorized Signatory</p>
// //               <p className="text-[10px] text-gray-500 mt-1">For {store.storeName}</p>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Invoice;


// //robust one 
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send } from "lucide-react";

// const Invoice = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchInvoiceData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(`http://localhost:8000/api/invoices/${id}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
        
//         if (!res.ok) {
//           const errData = await res.json();
//           throw new Error(errData.detail || "Failed to load invoice details");
//         }
        
//         const json = await res.json();
//         setData(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchInvoiceData();
//   }, [id]);

//   const handlePrint = () => {
//     window.print();
//   };

//   const formatDate = (isoString) => {
//     if (!isoString) return "N/A";
//     const d = new Date(isoString);
//     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   };

//   const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <Loader2 className="animate-spin text-blue-600" size={32} />
//       </div>
//     );
//   }

//   if (error || !data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//         <div className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100 flex items-center gap-3">
//           <AlertTriangle size={24} />
//           <p className="font-medium">{error || "Invoice data is empty or corrupted"}</p>
//         </div>
//       </div>
//     );
//   }

//   // Safe destructuring with fallbacks
//   const store = data?.store || {};
//   const customer = data?.customer || {};
//   const invoice = data?.invoice || {};
//   const items = data?.items || [];

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
//       {/* Non-Printable Action Bar */}
//       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
//         <button 
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
//         >
//           <ArrowLeft size={18} /> Back
//         </button>
//         <div className="flex items-center gap-3">
//           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm font-medium">
//             <Send size={16} /> Email
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm font-medium">
//             <Download size={16} /> PDF
//           </button>
//           <button 
//             onClick={handlePrint}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm font-medium"
//           >
//             <Printer size={16} /> Print
//           </button>
//         </div>
//       </div>

//       {/* A4 Document Wrapper */}
//       <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none overflow-hidden">
//         <div className="p-10 sm:p-12 print:p-0">
          
//           {/* Header */}
//           <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
//             <div>
//               <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase">TAX INVOICE</h1>
//               <p className="text-gray-500 font-medium mt-1">Invoice No: {invoice?.invoice_number || "N/A"}</p>
//             </div>
//             <div className="text-right">
//               <h2 className="text-xl font-bold text-gray-900">{store?.storeName || "Store Name"}</h2>
//               <p className="text-sm text-gray-600 mt-1">{store?.address || ""}</p>
//               {store?.phone && <p className="text-sm text-gray-600">Phone: {store.phone}</p>}
//               {store?.email && <p className="text-sm text-gray-600">Email: {store.email}</p>}
//               {store?.gstin && <p className="text-sm font-semibold text-gray-800 mt-1">GSTIN: {store.gstin}</p>}
//             </div>
//           </div>

//           {/* Meta & Addresses */}
//           <div className="flex flex-col sm:flex-row justify-between mb-8 gap-8">
//             <div className="flex-1">
//               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Billed To:</h3>
//               <p className="text-base font-bold text-gray-900">{customer?.company_name || "Walk-in Client"}</p>
//               {customer?.billing_address && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{customer.billing_address}</p>}
//               {customer?.phone && <p className="text-sm text-gray-600 mt-1">Phone: {customer.phone}</p>}
//               {customer?.gstin && <p className="text-sm font-semibold text-gray-800 mt-2">GSTIN: {customer.gstin}</p>}
//             </div>
            
//             <div className="flex-1 sm:text-right">
//               <div className="inline-block text-left sm:text-right">
//                 <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
//                   <span className="text-gray-500 font-medium">Issue Date:</span>
//                   <span className="text-gray-900 font-semibold">{formatDate(invoice?.issue_date)}</span>
                  
//                   {invoice?.due_date && (
//                     <>
//                       <span className="text-gray-500 font-medium">Due Date:</span>
//                       <span className="text-gray-900 font-semibold">{formatDate(invoice.due_date)}</span>
//                     </>
//                   )}
                  
//                   {customer?.place_of_supply && (
//                     <>
//                       <span className="text-gray-500 font-medium">Place of Supply:</span>
//                       <span className="text-gray-900 font-semibold">{customer.place_of_supply}</span>
//                     </>
//                   )}
                  
//                   <span className="text-gray-500 font-medium">Status:</span>
//                   <span className="text-gray-900 font-bold uppercase">{invoice?.status || "Unknown"}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Line Items Table */}
//           <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-gray-100 text-gray-800 border-b border-gray-200 font-bold uppercase text-xs">
//                 <tr>
//                   <th className="px-4 py-3 w-10 text-center">#</th>
//                   <th className="px-4 py-3">Description</th>
//                   <th className="px-4 py-3 w-24">HSN/SAC</th>
//                   <th className="px-4 py-3 w-20 text-center">Qty</th>
//                   <th className="px-4 py-3 w-28 text-right">Rate</th>
//                   <th className="px-4 py-3 w-20 text-center">Tax %</th>
//                   <th className="px-4 py-3 w-32 text-right">Amount</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {items.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="text-center py-8 text-gray-400">No items found</td>
//                   </tr>
//                 ) : (
//                   items.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-4 py-3 text-center text-gray-500">{index + 1}</td>
//                       <td className="px-4 py-3 font-medium text-gray-900">{item?.name || "Item"}</td>
//                       <td className="px-4 py-3 text-gray-600">{item?.hsn_sac_code || "-"}</td>
//                       <td className="px-4 py-3 text-center text-gray-800">{item?.quantity || 1}</td>
//                       <td className="px-4 py-3 text-right text-gray-800">{formatCurrency(item?.rate)}</td>
//                       <td className="px-4 py-3 text-center text-gray-600">{item?.tax_rate || 0}%</td>
//                       <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency((item?.quantity || 1) * (item?.rate || 0))}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Totals Section */}
//           <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-800 pb-8 mb-8 gap-8">
//             <div className="flex-1 text-sm text-gray-600">
//               <h3 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Bank Details</h3>
//               <p>Bank Name: HDFC Bank</p>
//               <p>Account Name: {store?.storeName || "Store"}</p>
//               <p>Account No: 50200012345678</p>
//               <p>IFSC Code: HDFC0001234</p>
//             </div>
            
//             <div className="w-full sm:w-72 space-y-3 text-sm">
//               <div className="flex justify-between text-gray-600">
//                 <span>Subtotal</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(invoice?.subtotal)}</span>
//               </div>
//               <div className="flex justify-between text-gray-600">
//                 <span>Total Tax Amount</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(invoice?.tax_total)}</span>
//               </div>
//               <div className="flex justify-between text-lg border-t border-gray-200 pt-3">
//                 <span className="font-black text-gray-900">Grand Total</span>
//                 <span className="font-black text-gray-900">{formatCurrency(invoice?.grand_total)}</span>
//               </div>
//             </div>
//           </div>

//           {/* Footer (Notes & Signatures) */}
//           <div className="flex justify-between items-end">
//             <div className="flex-1 max-w-md text-xs text-gray-500">
//               {invoice?.notes && (
//                 <div className="mb-4">
//                   <span className="font-bold text-gray-700 block mb-1">Notes:</span>
//                   <p className="whitespace-pre-line">{invoice.notes}</p>
//                 </div>
//               )}
//               {invoice?.terms_conditions && (
//                 <div>
//                   <span className="font-bold text-gray-700 block mb-1">Terms & Conditions:</span>
//                   <p className="whitespace-pre-line">{invoice.terms_conditions}</p>
//                 </div>
//               )}
//             </div>
//             <div className="text-center w-48 pt-12 border-t border-gray-300">
//               <p className="text-xs font-bold text-gray-900 uppercase">Authorized Signatory</p>
//               <p className="text-[10px] text-gray-500 mt-1">For {store?.storeName || "Store"}</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Invoice;


//new
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send, CreditCard, X, CheckCircle2, Link } from "lucide-react";

// const Invoice = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [linkCopied, setLinkCopied] = useState(false);

//   // Payment Modal State
//   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState('');
  
//   // Form State
//   const [paymentAmount, setPaymentAmount] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
//   const [referenceNumber, setReferenceNumber] = useState("");
//   const [paymentNotes, setPaymentNotes] = useState("");

//   const fetchInvoiceData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/invoices/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
      
//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.detail || "Failed to load invoice details");
//       }
      
//       const json = await res.json();
//       setData(json);
      
//       // Auto-fill the payment amount with the remaining balance
//       const balance = json.invoice.balance_due !== undefined ? json.invoice.balance_due : json.invoice.grand_total;
//       setPaymentAmount(balance);

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchInvoiceData();
//   }, [id]);

//   const handleRecordPayment = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       const token = localStorage.getItem("token");
//       const payload = {
//         amount: parseFloat(paymentAmount),
//         payment_method: paymentMethod,
//         reference_number: referenceNumber,
//         notes: paymentNotes
//       };

//       const res = await fetch(`http://localhost:8000/api/invoices/${id}/payments`, {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}` 
//         },
//         body: JSON.stringify(payload)
//       });

//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.detail || "Payment failed");
//       }

//       setPaymentSuccess("Payment recorded successfully!");
//       setIsPaymentModalOpen(false);
      
//       // Re-fetch data to update the balance and status badge on the invoice
//       await fetchInvoiceData();
      
//       setTimeout(() => setPaymentSuccess(""), 4000);
      
//       // Reset form
//       setReferenceNumber("");
//       setPaymentNotes("");
      
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handlePrint = () => window.print();

//   const formatDate = (isoString) => {
//     if (!isoString) return "N/A";
//     const d = new Date(isoString);
//     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   };

//   const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

//   if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-blue-600" size={32} /></div>;
//   if (error || !data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center gap-3"><AlertTriangle size={24} /><p className="font-medium">{error || "Data corrupted"}</p></div></div>;

//   const { store, customer, invoice, items } = data;
  
//   // Safe fallbacks for new ledger fields
//   const amountPaid = invoice.amount_paid || 0;
//   const balanceDue = invoice.balance_due !== undefined ? invoice.balance_due : invoice.grand_total;

//   const handleCopyLink = () => {
    
//     const token = data?.invoice?.public_token; 
//     if (!token) return alert("Public link not available for this invoice.");
    
//     const url = `${window.location.origin}/p/invoice/${token}`;
//     navigator.clipboard.writeText(url);
    
//     setLinkCopied(true);
//     setTimeout(() => setLinkCopied(false), 3000);
// };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
//       {/* Non-Printable Action Bar */}
//       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
//           <ArrowLeft size={18} /> Back
//         </button>
//         <button 
//           onClick={handleCopyLink}
//           className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm font-medium"
//         >
//        {linkCopied ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Link size={16} />} 
//         {linkCopied ? "Copied!" : "Copy Link"}
//         </button>
//         <div className="flex items-center gap-3">
//           {paymentSuccess && (
//             <div className="mr-4 text-emerald-600 text-sm font-bold flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
//               <CheckCircle2 size={16} /> {paymentSuccess}
//             </div>
//           )}
          
//           {/* Record Payment Button - Only show if there is a balance */}
//           {balanceDue > 0 && (
//             <button 
//               onClick={() => setIsPaymentModalOpen(true)}
//               className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm font-medium transition-colors"
//             >
//               <CreditCard size={16} /> Record Payment
//             </button>
//           )}
          
//           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
//             <Send size={16} /> Email
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
//             <Download size={16} /> PDF
//           </button>
//           <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
//             <Printer size={16} /> Print
//           </button>
//         </div>
//       </div>

//       {/* Payment Modal */}
//       {isPaymentModalOpen && (
//         <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 print:hidden">
//           <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
//             <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
//               <h3 className="font-bold text-slate-800">Record Payment</h3>
//               <button onClick={() => setIsPaymentModalOpen(false)} className="text-slate-400 hover:text-slate-600">
//                 <X size={20} />
//               </button>
//             </div>
            
//             <form onSubmit={handleRecordPayment} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-xs font-bold text-slate-700 mb-1">Amount (₹) *</label>
//                 <input 
//                   type="number" 
//                   step="0.01"
//                   required
//                   max={balanceDue}
//                   value={paymentAmount} 
//                   onChange={(e) => setPaymentAmount(e.target.value)}
//                   className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" 
//                 />
//                 <p className="text-[10px] text-slate-500 mt-1">Maximum allowed: {formatCurrency(balanceDue)}</p>
//               </div>
              
//               <div>
//                 <label className="block text-xs font-bold text-slate-700 mb-1">Payment Mode *</label>
//                 <select 
//                   value={paymentMethod}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                   className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
//                 >
//                   <option value="Bank Transfer">Bank Transfer</option>
//                   <option value="UPI">UPI</option>
//                   <option value="Cash">Cash</option>
//                   <option value="Credit Card">Credit Card</option>
//                   <option value="Cheque">Cheque</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-slate-700 mb-1">Reference Number</label>
//                 <input 
//                   type="text" 
//                   placeholder="Txn ID, Cheque No, etc."
//                   value={referenceNumber} 
//                   onChange={(e) => setReferenceNumber(e.target.value)}
//                   className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" 
//                 />
//               </div>

//               <div className="pt-4 flex gap-3">
//                 <button 
//                   type="button" 
//                   onClick={() => setIsPaymentModalOpen(false)}
//                   className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit" 
//                   disabled={isSubmitting}
//                   className="flex-1 px-4 py-2.5 bg-emerald-600 text-white rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors flex justify-center items-center"
//                 >
//                   {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : "Save Payment"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* A4 Document Layout */}
//       <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none overflow-hidden">
//         <div className="p-10 sm:p-12 print:p-0">
          
//           {/* Document Header */}
//           <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
//             <div>
//               <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">TAX INVOICE</h1>
//               <p className="text-gray-500 font-medium mt-1">Invoice No: {invoice?.invoice_number}</p>
//             </div>
//             <div className="text-right">
//               <h2 className="text-xl font-bold text-gray-900">{store?.storeName}</h2>
//               <p className="text-sm text-gray-600 mt-1">{store?.address}</p>
//               {store?.phone && <p className="text-sm text-gray-600">Phone: {store.phone}</p>}
//               {store?.gstin && <p className="text-sm font-semibold text-gray-800 mt-1">GSTIN: {store.gstin}</p>}
//             </div>
//           </div>

//           {/* Client & Meta Data */}
//           <div className="flex flex-col sm:flex-row justify-between mb-8 gap-8">
//             <div className="flex-1">
//               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Billed To:</h3>
//               <p className="text-base font-bold text-gray-900">{customer?.company_name}</p>
//               {customer?.billing_address && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{customer.billing_address}</p>}
//               {customer?.phone && <p className="text-sm text-gray-600 mt-1">Phone: {customer.phone}</p>}
//               {customer?.gstin && <p className="text-sm font-semibold text-gray-800 mt-2">GSTIN: {customer.gstin}</p>}
//             </div>
            
//             <div className="flex-1 sm:text-right">
//               <div className="inline-block text-left sm:text-right">
//                 <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
//                   <span className="text-gray-500 font-medium">Issue Date:</span>
//                   <span className="text-gray-900 font-semibold">{formatDate(invoice?.issue_date)}</span>
                  
//                   {invoice?.due_date && (
//                     <>
//                       <span className="text-gray-500 font-medium">Due Date:</span>
//                       <span className="text-gray-900 font-semibold">{formatDate(invoice.due_date)}</span>
//                     </>
//                   )}
                  
//                   <span className="text-gray-500 font-medium">Status:</span>
//                   <span className={`font-bold uppercase ${
//                     invoice.status === 'PAID' ? 'text-emerald-600' : 
//                     invoice.status === 'PARTIALLY_PAID' ? 'text-amber-500' : 'text-red-500'
//                   }`}>
//                     {invoice?.status.replace("_", " ")}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Line Items Table */}
//           <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
//             <table className="w-full text-left text-sm">
//               <thead className="bg-gray-100 text-gray-800 border-b border-gray-200 font-bold uppercase text-xs">
//                 <tr>
//                   <th className="px-4 py-3 w-10 text-center">#</th>
//                   <th className="px-4 py-3">Description</th>
//                   <th className="px-4 py-3 w-20 text-center">Qty</th>
//                   <th className="px-4 py-3 w-28 text-right">Rate</th>
//                   <th className="px-4 py-3 w-32 text-right">Amount</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {items.map((item, index) => (
//                   <tr key={index}>
//                     <td className="px-4 py-3 text-center text-gray-500">{index + 1}</td>
//                     <td className="px-4 py-3 font-medium text-gray-900">{item?.name}</td>
//                     <td className="px-4 py-3 text-center text-gray-800">{item?.quantity}</td>
//                     <td className="px-4 py-3 text-right text-gray-800">{formatCurrency(item?.rate)}</td>
//                     <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency((item?.quantity || 1) * (item?.rate || 0))}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Totals & Ledger Section */}
//           <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-800 pb-8 mb-8 gap-8">
//             <div className="flex-1 text-sm text-gray-600" />
//             <div className="w-full sm:w-72 space-y-3 text-sm">
//               <div className="flex justify-between text-gray-600">
//                 <span>Subtotal</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(invoice?.subtotal)}</span>
//               </div>
//               <div className="flex justify-between text-gray-600">
//                 <span>Tax Total</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(invoice?.tax_total)}</span>
//               </div>
//               <div className="flex justify-between text-lg border-t border-gray-200 pt-3">
//                 <span className="font-black text-gray-900">Grand Total</span>
//                 <span className="font-black text-gray-900">{formatCurrency(invoice?.grand_total)}</span>
//               </div>
              
//               {/* New Ledger Entries */}
//               {(amountPaid > 0 || balanceDue !== invoice?.grand_total) && (
//                 <>
//                   <div className="flex justify-between text-emerald-600 font-medium pt-1">
//                     <span>Amount Paid</span>
//                     <span>- {formatCurrency(amountPaid)}</span>
//                   </div>
//                   <div className="flex justify-between text-base font-bold text-red-600 border-t border-slate-100 pt-2">
//                     <span>Balance Due</span>
//                     <span>{formatCurrency(balanceDue)}</span>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="flex justify-between items-end">
//             <div className="text-center w-48 pt-12 border-t border-gray-300">
//               <p className="text-xs font-bold text-gray-900 uppercase">Authorized Signatory</p>
//               <p className="text-[10px] text-gray-500 mt-1">For {store?.storeName}</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Invoice;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send, CreditCard, X, CheckCircle2, Link } from "lucide-react";

// --- DYNAMIC TEMPLATE ENGINES FOR VIEWING ---

const ClassicTemplate = ({ invoice, store, customer, items, themeColor }) => {
  const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const amountPaid = invoice.amount_paid || 0;
  const balanceDue = invoice.balance_due !== undefined ? invoice.balance_due : invoice.grand_total;

  return (
    <div className="bg-white p-10 shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none w-full relative">
      <div className="border-b-4 pb-6 mb-6 flex justify-between items-start" style={{ borderBottomColor: themeColor }}>
        <div>
          <h1 className="text-4xl font-serif uppercase tracking-widest" style={{ color: themeColor }}>
            Tax Invoice
          </h1>
          <p className="text-slate-500 mt-2 text-sm">Invoice #: {invoice.invoice_number}</p>
          <p className="text-slate-500 text-sm">Date: {new Date(invoice.issue_date).toLocaleDateString('en-IN')}</p>
          {invoice.due_date && <p className="text-slate-500 text-sm">Due Date: {new Date(invoice.due_date).toLocaleDateString('en-IN')}</p>}
        </div>
        <div className="text-right">
          <h3 className="font-bold text-slate-900 text-lg">{store?.storeName}</h3>
          <p className="text-slate-500 text-sm whitespace-pre-wrap">{store?.address}</p>
          {store?.phone && <p className="text-slate-500 text-sm">Phone: {store.phone}</p>}
          {store?.gstin && <p className="text-slate-800 font-semibold text-sm mt-1">GSTIN: {store.gstin}</p>}
        </div>
      </div>

      <div className="mb-8 flex justify-between">
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Billed To:</h4>
          <p className="font-bold text-slate-800 text-lg">{customer?.company_name}</p>
          {customer?.billing_address && <p className="text-slate-600 text-sm whitespace-pre-line mt-1">{customer.billing_address}</p>}
          {customer?.phone && <p className="text-slate-600 text-sm mt-1">Phone: {customer.phone}</p>}
          {customer?.gstin && <p className="text-slate-800 font-semibold text-sm mt-1">GSTIN: {customer.gstin}</p>}
        </div>
        <div className="text-right">
          <span className="text-slate-500 font-medium text-sm">Status: </span>
          <span className={`font-bold uppercase text-sm ${
            invoice.status === 'PAID' ? 'text-emerald-600' : 
            invoice.status === 'PARTIALLY_PAID' ? 'text-amber-500' : 'text-red-500'
          }`}>
            {invoice?.status.replace("_", " ")}
          </span>
        </div>
      </div>

      <table className="w-full text-left text-sm mb-8">
        <thead className="bg-slate-100 border-b border-slate-200">
          <tr>
            <th className="py-3 px-4 font-bold text-slate-900 w-10 text-center">#</th>
            <th className="py-3 px-4 font-bold text-slate-900">Description</th>
            <th className="py-3 px-4 font-bold text-slate-900 text-center">HSN/SAC</th>
            <th className="py-3 px-4 font-bold text-slate-900 text-center">Qty</th>
            <th className="py-3 px-4 font-bold text-slate-900 text-right">Rate</th>
            <th className="py-3 px-4 font-bold text-slate-900 text-right">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.map((item, i) => (
            <tr key={i}>
              <td className="py-3 px-4 text-slate-500 text-center">{i + 1}</td>
              <td className="py-3 px-4 text-slate-800 font-medium">{item.name}</td>
              <td className="py-3 px-4 text-slate-500 text-center text-xs">{item.hsn_sac_code || '-'}</td>
              <td className="py-3 px-4 text-slate-700 text-center">{item.quantity}</td>
              <td className="py-3 px-4 text-slate-700 text-right">{formatCurrency(item.rate)}</td>
              <td className="py-3 px-4 text-slate-800 text-right font-bold">{formatCurrency(item.quantity * item.rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mb-12">
        <div className="w-72 space-y-3 text-sm">
          <div className="flex justify-between text-slate-600">
            <span>Subtotal</span>
            <span className="font-medium text-slate-900">{formatCurrency(invoice.subtotal)}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Tax Total</span>
            <span className="font-medium text-slate-900">{formatCurrency(invoice.tax_total)}</span>
          </div>
          <div className="flex justify-between font-black text-lg pt-3 border-t border-slate-200 text-slate-900">
            <span>Grand Total</span>
            <span>{formatCurrency(invoice.grand_total)}</span>
          </div>
          
          {(amountPaid > 0 || balanceDue !== invoice.grand_total) && (
            <>
              <div className="flex justify-between text-emerald-600 font-semibold pt-2">
                <span>Amount Paid</span>
                <span>- {formatCurrency(amountPaid)}</span>
              </div>
              <div className="flex justify-between text-rose-600 font-bold text-base border-t border-slate-100 pt-2">
                <span>Balance Due</span>
                <span>{formatCurrency(balanceDue)}</span>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="flex justify-between items-end mt-8">
        <div className="text-center w-48 pt-12 border-t border-gray-300">
          <p className="text-xs font-bold text-gray-900 uppercase">Authorized Signatory</p>
          <p className="text-[10px] text-gray-500 mt-1">For {store?.storeName}</p>
        </div>
      </div>
    </div>
  );
};

const ModernTemplate = ({ invoice, store, customer, items, themeColor }) => {
  const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const amountPaid = invoice.amount_paid || 0;
  const balanceDue = invoice.balance_due !== undefined ? invoice.balance_due : invoice.grand_total;

  return (
    <div className="bg-white shadow-lg print:shadow-none border border-slate-200 print:border-none w-full relative overflow-hidden flex flex-col">
      <div className="p-10 text-white flex justify-between items-center rounded-br-[100px]" style={{ backgroundColor: themeColor }}>
        <div>
          <h1 className="text-4xl font-black tracking-tight uppercase">INVOICE</h1>
          <p className="opacity-90 mt-1 font-mono"># {invoice.invoice_number}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-2xl">{store?.storeName}</p>
          <p className="opacity-80 text-sm mt-1 whitespace-pre-wrap">{store?.address}</p>
          {store?.phone && <p className="opacity-80 text-sm mt-1">Phone: {store.phone}</p>}
          {store?.gstin && <p className="opacity-100 font-bold text-sm mt-1">GSTIN: {store.gstin}</p>}
        </div>
      </div>

      <div className="p-10 flex-1">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: themeColor }}>Billed To</h4>
            <p className="font-bold text-slate-800 text-lg">{customer?.company_name}</p>
            {customer?.billing_address && <p className="text-slate-600 text-sm whitespace-pre-line mt-1">{customer.billing_address}</p>}
            {customer?.phone && <p className="text-slate-500 text-sm mt-1">Phone: {customer.phone}</p>}
            {customer?.gstin && <p className="text-slate-800 font-semibold text-sm mt-1">GSTIN: {customer.gstin}</p>}
          </div>
          <div className="text-right">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <span className="text-slate-500 font-medium">Issue Date:</span>
              <span className="font-bold text-slate-800">{new Date(invoice.issue_date).toLocaleDateString('en-IN')}</span>
              
              {invoice.due_date && (
                <>
                  <span className="text-slate-500 font-medium">Due Date:</span>
                  <span className="font-bold text-slate-800">{new Date(invoice.due_date).toLocaleDateString('en-IN')}</span>
                </>
              )}
              
              <span className="text-slate-500 font-medium">Status:</span>
              <span className={`font-black uppercase tracking-wider ${
                invoice.status === 'PAID' ? 'text-emerald-500' : 
                invoice.status === 'PARTIALLY_PAID' ? 'text-amber-500' : 'text-rose-500'
              }`}>
                {invoice.status.replace("_", " ")}
              </span>
            </div>
          </div>
        </div>

        <table className="w-full text-left text-sm mb-8">
          <thead className="rounded-lg">
            <tr>
              <th className="p-3 font-bold rounded-l-lg" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>Description</th>
              <th className="p-3 font-bold text-center" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>HSN</th>
              <th className="p-3 font-bold text-center" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>Qty</th>
              <th className="p-3 font-bold text-right" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>Rate</th>
              <th className="p-3 font-bold text-right rounded-r-lg" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-b border-slate-100">
                <td className="p-3 font-medium text-slate-800">{item.name}</td>
                <td className="p-3 text-slate-500 text-center text-xs">{item.hsn_sac_code || '-'}</td>
                <td className="p-3 text-slate-600 text-center">{item.quantity}</td>
                <td className="p-3 text-slate-600 text-right">{formatCurrency(item.rate)}</td>
                <td className="p-3 text-slate-800 font-bold text-right">{formatCurrency(item.quantity * item.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-8">
          <div className="w-72 space-y-3 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-medium text-slate-900">{formatCurrency(invoice.subtotal)}</span>
            </div>
            <div className="flex justify-between text-slate-600 pb-3 border-b border-slate-200">
              <span>Tax Total</span>
              <span className="font-medium text-slate-900">{formatCurrency(invoice.tax_total)}</span>
            </div>
            <div className="flex justify-between font-black text-xl pt-2 text-slate-900">
              <span>Grand Total</span>
              <span>{formatCurrency(invoice.grand_total)}</span>
            </div>
            
            {(amountPaid > 0 || balanceDue !== invoice.grand_total) && (
              <>
                <div className="flex justify-between text-emerald-600 font-semibold pt-2">
                  <span>Amount Paid</span>
                  <span>- {formatCurrency(amountPaid)}</span>
                </div>
                <div className="flex justify-between text-rose-600 font-bold text-lg pt-1">
                  <span>Balance Due</span>
                  <span>{formatCurrency(balanceDue)}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN INVOICE DETAIL COMPONENT ---

const Invoice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [linkCopied, setLinkCopied] = useState(false);

  // Payment Modal State
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState('');
  
  // Form State
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [paymentNotes, setPaymentNotes] = useState("");

  const fetchInvoiceData = async () => {
    // 1. SAFETY GUARD to prevent 422 Undefined errors
    if (!id || id === 'undefined') {
      setError("Invalid Invoice ID. Please return to the invoice list.");
      setIsLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/invoices/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Failed to load invoice details");
      }
      
      const json = await res.json();
      setData(json);
      
      const balance = json.invoice.balance_due !== undefined ? json.invoice.balance_due : json.invoice.grand_total;
      setPaymentAmount(balance);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoiceData();
  }, [id]);

  const handleRecordPayment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const token = localStorage.getItem("token");
      const payload = {
        amount: parseFloat(paymentAmount),
        payment_method: paymentMethod,
        reference_number: referenceNumber,
        notes: paymentNotes
      };

      const res = await fetch(`http://localhost:8000/api/invoices/${id}/payments`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Payment failed");
      }

      setPaymentSuccess("Payment recorded successfully!");
      setIsPaymentModalOpen(false);
      
      await fetchInvoiceData();
      
      setTimeout(() => setPaymentSuccess(""), 4000);
      
      setReferenceNumber("");
      setPaymentNotes("");
      
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => window.print();

  const handleCopyLink = () => {
    const token = data?.invoice?.public_token; 
    if (!token) return alert("Public link not available for this invoice.");
    
    const url = `${window.location.origin}/p/invoice/${token}`;
    navigator.clipboard.writeText(url);
    
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 3000);
  };

  const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-blue-600" size={32} /></div>;
  if (error || !data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center gap-3"><AlertTriangle size={24} /><p className="font-medium">{error}</p></div></div>;

  const { store, customer, invoice, items } = data;
  const balanceDue = invoice.balance_due !== undefined ? invoice.balance_due : invoice.grand_total;

  // Grab the design parameters from the database
  const templateId = invoice.template_id || 'classic';
  const themeColor = invoice.theme_color || '#101E36';

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
      {/* Non-Printable Action Bar */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
          <ArrowLeft size={18} /> Back
        </button>
        <button 
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm font-medium"
        >
          {linkCopied ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Link size={16} />} 
          {linkCopied ? "Copied!" : "Copy Link"}
        </button>
        <div className="flex items-center gap-3">
          {paymentSuccess && (
            <div className="mr-4 text-emerald-600 text-sm font-bold flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <CheckCircle2 size={16} /> {paymentSuccess}
            </div>
          )}
          
          {balanceDue > 0 && (
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-sm font-medium transition-colors shadow-sm"
            >
              <CreditCard size={16} /> Record Payment
            </button>
          )}
          
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium shadow-sm">
            <Send size={16} /> Email
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium shadow-sm">
            <Download size={16} /> PDF
          </button>
          <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium shadow-sm">
            <Printer size={16} /> Print
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 print:hidden">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-800">Record Payment</h3>
              <button onClick={() => setIsPaymentModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleRecordPayment} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Amount (₹) *</label>
                <input 
                  type="number" 
                  step="0.01"
                  required
                  max={balanceDue}
                  value={paymentAmount} 
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" 
                />
                <p className="text-[10px] text-slate-500 mt-1">Maximum allowed: {formatCurrency(balanceDue)}</p>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Payment Mode *</label>
                <select 
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                >
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="UPI">UPI</option>
                  <option value="Cash">Cash</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Cheque">Cheque</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Reference Number</label>
                <input 
                  type="text" 
                  placeholder="Txn ID, Cheque No, etc."
                  value={referenceNumber} 
                  onChange={(e) => setReferenceNumber(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none" 
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2.5 bg-emerald-600 text-white rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors flex justify-center items-center"
                >
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : "Save Payment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DYNAMIC DOCUMENT RENDERER */}
      <div className="max-w-4xl mx-auto flex justify-center">
        {templateId === 'modern' ? (
          <ModernTemplate invoice={invoice} store={store} customer={customer} items={items} themeColor={themeColor} />
        ) : (
          <ClassicTemplate invoice={invoice} store={store} customer={customer} items={items} themeColor={themeColor} />
        )}
      </div>

    </div>
  );
};

export default Invoice;