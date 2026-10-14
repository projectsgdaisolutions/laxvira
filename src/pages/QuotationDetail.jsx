// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send } from "lucide-react";

// // const QuotationDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [data, setData] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isConverting, setIsConverting] = useState(false);

// //   useEffect(() => {
// //     const fetchQuotationData = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const res = await fetch(`http://localhost:8000/api/quotations/${id}`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
        
// //         if (!res.ok) {
// //           const errData = await res.json();
// //           throw new Error(errData.detail || "Failed to load quotation details");
// //         }
        
// //         const json = await res.json();
// //         setData(json);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchQuotationData();
// //   }, [id]);

// //   const handlePrint = () => window.print();

// //   const formatDate = (isoString) => {
// //     if (!isoString) return "N/A";
// //     const d = new Date(isoString);
// //     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
// //   };

// //   const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// //   if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-blue-600" size={32} /></div>;
// //   if (error || !data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center gap-3"><AlertTriangle size={24} /><p className="font-medium">{error || "Data corrupted"}</p></div></div>;

// // const handleConvertToInvoice = async () => {
// //     setIsConverting(true);
// //     try {
// //         const token = localStorage.getItem("token");
// //         const res = await fetch(`http://localhost:8000/api/quotations/${id}/convert-to-invoice`, {
// //             method: "POST",
// //             headers: { Authorization: `Bearer ${token}` }
// //         });
        
// //         if (!res.ok) {
// //             const errData = await res.json();
// //             throw new Error(errData.detail || "Failed to convert");
// //         }
        
// //         const data = await res.json();
// //         // Instantly redirect the user to their newly generated invoice
// //         navigate(`/invoice/${data.invoice_id}`);
        
// //     } catch (err) {
// //         alert(err.message);
// //     } finally {
// //         setIsConverting(false);
// //     }
// // };

// //   const { store, customer, quotation, items } = data;

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
// //       {/* Non-Printable Action Bar */}
// //       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
// //         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
// //           <ArrowLeft size={18} /> Back
// //         </button>
// //         <div className="flex items-center gap-3">
// //           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
// //             <Send size={16} /> Email
// //           </button>
// //           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
// //             <Download size={16} /> PDF
// //           </button>
// //           <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
// //             <Printer size={16} /> Print
// //           </button>
// //           {quotation?.status !== "INVOICED" && (
// //     <button 
// //         onClick={handleConvertToInvoice}
// //         disabled={isConverting}
// //         className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm text-sm font-medium disabled:opacity-50"
// //     >
// //         {isConverting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRightRight size={16} />}
// //         Convert to Invoice
// //     </button>
// // )}
// //         </div>
// //       </div>

// //       {/* A4 Document */}
// //       <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none overflow-hidden">
// //         <div className="p-10 sm:p-12 print:p-0">
          
// //           <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
// //             <div>
// //               <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">ESTIMATE / QUOTATION</h1>
// //               <p className="text-gray-500 font-medium mt-1">Quotation No: {quotation?.quotation_number || "N/A"}</p>
// //             </div>
// //             <div className="text-right">
// //               <h2 className="text-xl font-bold text-gray-900">{store?.storeName || "Store Name"}</h2>
// //               <p className="text-sm text-gray-600 mt-1">{store?.address || ""}</p>
// //               {store?.phone && <p className="text-sm text-gray-600">Phone: {store.phone}</p>}
// //               {store?.email && <p className="text-sm text-gray-600">Email: {store.email}</p>}
// //               {store?.gstin && <p className="text-sm font-semibold text-gray-800 mt-1">GSTIN: {store.gstin}</p>}
// //             </div>
// //           </div>

// //           <div className="flex flex-col sm:flex-row justify-between mb-8 gap-8">
// //             <div className="flex-1">
// //               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Prepared For:</h3>
// //               <p className="text-base font-bold text-gray-900">{customer?.company_name}</p>
// //               {customer?.billing_address && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{customer.billing_address}</p>}
// //               {customer?.phone && <p className="text-sm text-gray-600 mt-1">Phone: {customer.phone}</p>}
// //               {customer?.gstin && <p className="text-sm font-semibold text-gray-800 mt-2">GSTIN: {customer.gstin}</p>}
// //             </div>
            
// //             <div className="flex-1 sm:text-right">
// //               <div className="inline-block text-left sm:text-right">
// //                 <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
// //                   <span className="text-gray-500 font-medium">Issue Date:</span>
// //                   <span className="text-gray-900 font-semibold">{formatDate(quotation?.issue_date)}</span>
                  
// //                   {quotation?.valid_until && (
// //                     <>
// //                       <span className="text-gray-500 font-medium">Valid Until:</span>
// //                       <span className="text-gray-900 font-semibold">{formatDate(quotation.valid_until)}</span>
// //                     </>
// //                   )}
                  
// //                   <span className="text-gray-500 font-medium">Status:</span>
// //                   <span className="text-gray-900 font-bold uppercase">{quotation?.status || "Unknown"}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

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
// //                     <td className="px-4 py-3 font-medium text-gray-900">{item?.name}</td>
// //                     <td className="px-4 py-3 text-gray-600">{item?.hsn_sac_code || "-"}</td>
// //                     <td className="px-4 py-3 text-center text-gray-800">{item?.quantity}</td>
// //                     <td className="px-4 py-3 text-right text-gray-800">{formatCurrency(item?.rate)}</td>
// //                     <td className="px-4 py-3 text-center text-gray-600">{item?.tax_rate}%</td>
// //                     <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency((item?.quantity || 1) * (item?.rate || 0))}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-800 pb-8 mb-8 gap-8">
// //             <div className="flex-1 text-sm text-gray-600" />
// //             <div className="w-full sm:w-72 space-y-3 text-sm">
// //               <div className="flex justify-between text-gray-600">
// //                 <span>Subtotal</span>
// //                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.subtotal)}</span>
// //               </div>
// //               <div className="flex justify-between text-gray-600">
// //                 <span>Estimated Tax</span>
// //                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.tax_total)}</span>
// //               </div>
// //               <div className="flex justify-between text-lg border-t border-gray-200 pt-3">
// //                 <span className="font-black text-gray-900">Estimated Total</span>
// //                 <span className="font-black text-gray-900">{formatCurrency(quotation?.grand_total)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="flex justify-between items-end">
// //             <div className="flex-1 max-w-md text-xs text-gray-500">
// //               {quotation?.notes && (
// //                 <div className="mb-4">
// //                   <span className="font-bold text-gray-700 block mb-1">Notes:</span>
// //                   <p className="whitespace-pre-line">{quotation.notes}</p>
// //                 </div>
// //               )}
// //               {quotation?.terms_conditions && (
// //                 <div>
// //                   <span className="font-bold text-gray-700 block mb-1">Terms & Conditions:</span>
// //                   <p className="whitespace-pre-line">{quotation.terms_conditions}</p>
// //                 </div>
// //               )}
// //             </div>
// //             <div className="text-center w-48 pt-12 border-t border-gray-300">
// //               <p className="text-xs font-bold text-gray-900 uppercase">Authorized Signatory</p>
// //               <p className="text-[10px] text-gray-500 mt-1">For {store?.storeName}</p>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuotationDetail;

// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send, ArrowRight } from "lucide-react";

// // const QuotationDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [data, setData] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isConverting, setIsConverting] = useState(false);

// //   useEffect(() => {
// //     const fetchQuotationData = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const res = await fetch(`http://localhost:8000/api/quotations/${id}`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
        
// //         if (!res.ok) {
// //           const errData = await res.json();
// //           throw new Error(errData.detail || "Failed to load quotation details");
// //         }
        
// //         const json = await res.json();
// //         setData(json);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchQuotationData();
// //   }, [id]);

// //   const handlePrint = () => window.print();

// //   const formatDate = (isoString) => {
// //     if (!isoString) return "N/A";
// //     const d = new Date(isoString);
// //     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
// //   };

// //   const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// //   const handleConvertToInvoice = async () => {
// //     setIsConverting(true);
// //     try {
// //         const token = localStorage.getItem("token");
// //         const res = await fetch(`http://localhost:8000/api/quotations/${id}/convert-to-invoice`, {
// //             method: "POST",
// //             headers: { Authorization: `Bearer ${token}` }
// //         });
        
// //         if (!res.ok) {
// //             const errData = await res.json();
// //             throw new Error(errData.detail || "Failed to convert");
// //         }
        
// //         const resData = await res.json();
// //         navigate(`/invoice/${resData.invoice_id}`);
        
// //     } catch (err) {
// //         alert(err.message);
// //     } finally {
// //         setIsConverting(false);
// //     }
// //   };

// //   if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-purple-600" size={32} /></div>;
// //   if (error || !data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center gap-3"><AlertTriangle size={24} /><p className="font-medium">{error || "Data corrupted"}</p></div></div>;

// //   // Safe destructuring with fallbacks to prevent mapping crashes
// //   const { store = {}, customer = {}, quotation = {}, items = [] } = data;

// //   // Parse custom fields if they exist as a JSON string from the DB
// //   const customFields = typeof quotation?.custom_fields === 'string' 
// //     ? JSON.parse(quotation.custom_fields) 
// //     : (quotation?.custom_fields || []);

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
// //       {/* Non-Printable Action Bar */}
// //       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
// //         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
// //           <ArrowLeft size={18} /> Back
// //         </button>
// //         <div className="flex items-center gap-3">
// //           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
// //             <Send size={16} /> Email
// //           </button>
// //           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
// //             <Download size={16} /> PDF
// //           </button>
// //           <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium">
// //             <Printer size={16} /> Print
// //           </button>
// //           {quotation?.status !== "INVOICED" && (
// //             <button 
// //                 onClick={handleConvertToInvoice}
// //                 disabled={isConverting}
// //                 className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm text-sm font-medium disabled:opacity-50"
// //             >
// //                 {isConverting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
// //                 Convert to Invoice
// //             </button>
// //           )}
// //         </div>
// //       </div>

// //       {/* A4 Document */}
// //       <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none overflow-hidden">
// //         <div className="p-10 sm:p-12 print:p-0">
          
// //           <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
// //             <div>
// //               {/* Dynamic Document Title applied here */}
// //               <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
// //                 {quotation?.document_title || "ESTIMATE / QUOTATION"}
// //               </h1>
// //               <p className="text-gray-500 font-medium mt-1">Doc No: {quotation?.quotation_number || "N/A"}</p>
// //             </div>
// //             <div className="text-right">
// //               <h2 className="text-xl font-bold text-gray-900">{store?.storeName || "Store Name"}</h2>
// //               <p className="text-sm text-gray-600 mt-1">{store?.address || ""}</p>
// //               {store?.phone && <p className="text-sm text-gray-600">Phone: {store.phone}</p>}
// //               {store?.email && <p className="text-sm text-gray-600">Email: {store.email}</p>}
// //               {store?.gstin && <p className="text-sm font-semibold text-gray-800 mt-1">GSTIN: {store.gstin}</p>}
// //             </div>
// //           </div>

// //           <div className="flex flex-col sm:flex-row justify-between mb-8 gap-8">
// //             <div className="flex-1">
// //               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Prepared For:</h3>
// //               <p className="text-base font-bold text-gray-900">{customer?.company_name || "Unknown Client"}</p>
// //               {customer?.billing_address && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{customer.billing_address}</p>}
// //               {customer?.phone && <p className="text-sm text-gray-600 mt-1">Phone: {customer.phone}</p>}
// //               {customer?.email && <p className="text-sm text-gray-600 mt-1">Email: {customer.email}</p>}
// //               {customer?.gstin && <p className="text-sm font-semibold text-gray-800 mt-2">GSTIN: {customer.gstin}</p>}
// //             </div>
            
// //             <div className="flex-1 sm:text-right">
// //               <div className="inline-block text-left sm:text-right">
// //                 <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
// //                   <span className="text-gray-500 font-medium">Issue Date:</span>
// //                   <span className="text-gray-900 font-semibold">{formatDate(quotation?.issue_date || quotation?.created_at)}</span>
                  
// //                   {quotation?.valid_until && (
// //                     <>
// //                       <span className="text-gray-500 font-medium">Valid Until:</span>
// //                       <span className="text-gray-900 font-semibold">{formatDate(quotation.valid_until)}</span>
// //                     </>
// //                   )}
                  
// //                   <span className="text-gray-500 font-medium">Status:</span>
// //                   <span className="text-gray-900 font-bold uppercase">{quotation?.status || "DRAFT"}</span>

// //                   {/* Render Custom Fields dynamically */}
// //                   {customFields.map((field, idx) => (
// //                     <React.Fragment key={`cf-${idx}`}>
// //                       <span className="text-gray-500 font-medium">{field.key}:</span>
// //                       <span className="text-gray-900 font-semibold">{field.value}</span>
// //                     </React.Fragment>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

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
// //                     <td className="px-4 py-3 font-medium text-gray-900">{item?.name}</td>
// //                     <td className="px-4 py-3 text-gray-600">{item?.hsn_sac_code || "-"}</td>
// //                     <td className="px-4 py-3 text-center text-gray-800">{item?.quantity}</td>
// //                     <td className="px-4 py-3 text-right text-gray-800">{formatCurrency(item?.rate)}</td>
// //                     <td className="px-4 py-3 text-center text-gray-600">{item?.tax_rate}%</td>
// //                     {/* Fallback to calculating amount if backend doesn't store prorated totals on line items yet */}
// //                     <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency(item?.total_amount || ((item?.quantity || 1) * (item?.rate || 0)))}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-800 pb-8 mb-8 gap-8">
// //             <div className="flex-1 text-sm text-gray-600" />
// //             <div className="w-full sm:w-72 space-y-3 text-sm">
// //               <div className="flex justify-between text-gray-600">
// //                 <span>Subtotal</span>
// //                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.subtotal)}</span>
// //               </div>
              
// //               {/* Added Discount Row logic */}
// //               {quotation?.discount_total > 0 && (
// //                 <div className="flex justify-between text-red-500">
// //                   <span>Discount</span>
// //                   <span className="font-medium">- {formatCurrency(quotation?.discount_total)}</span>
// //                 </div>
// //               )}

// //               <div className="flex justify-between text-gray-600">
// //                 <span>Estimated Tax (GST)</span>
// //                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.tax_total)}</span>
// //               </div>
              
// //               <div className="flex justify-between text-lg border-t border-gray-200 pt-3">
// //                 <span className="font-black text-gray-900">Total (INR)</span>
// //                 <span className="font-black text-gray-900">{formatCurrency(quotation?.grand_total)}</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="flex justify-between items-end">
// //             <div className="flex-1 max-w-md text-xs text-gray-500">
// //               {quotation?.notes && (
// //                 <div className="mb-4">
// //                   <span className="font-bold text-gray-700 block mb-1">Notes:</span>
// //                   <p className="whitespace-pre-line">{quotation.notes}</p>
// //                 </div>
// //               )}
// //               {quotation?.terms_conditions && (
// //                 <div>
// //                   <span className="font-bold text-gray-700 block mb-1">Terms & Conditions:</span>
// //                   <p className="whitespace-pre-line">{quotation.terms_conditions}</p>
// //                 </div>
// //               )}
// //             </div>
// //             <div className="text-center w-48 pt-12 border-t border-gray-300">
// //               <p className="text-xs font-bold text-gray-900 uppercase">Authorized Signatory</p>
// //               <p className="text-[10px] text-gray-500 mt-1">For {store?.storeName}</p>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuotationDetail;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send, ArrowRight, Image as ImageIcon, X } from "lucide-react";
// import html2pdf from "html2pdf.js";

// const QuotationDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const documentRef = useRef(); // Targets the A4 container for PDF generation
//   const logoInputRef = useRef(); // References hidden file input for logo upload
  
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Interactive Logo State
//   const [storeLogo, setStoreLogo] = useState(null);

//   // Action States
//   const [isConverting, setIsConverting] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [isEmailing, setIsEmailing] = useState(false);

//   useEffect(() => {
//     const fetchQuotationData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(`http://localhost:8000/api/quotations/${id}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
        
//         if (!res.ok) {
//           const errData = await res.json();
//           throw new Error(errData.detail || "Failed to load quotation details");
//         }
        
//         const json = await res.json();
//         setData(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchQuotationData();
//   }, [id]);

//   const handlePrint = () => window.print();

//   const formatDate = (isoString) => {
//     if (!isoString) return "N/A";
//     const d = new Date(isoString);
//     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   };

//   const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

//   // --- Handle Logo Upload ---
//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setStoreLogo(imageUrl);
//     }
//   };

//   // --- PDF Download Logic ---
//   const handleDownloadPDF = async () => {
//     setIsDownloading(true);
//     try {
//       const element = documentRef.current;
//       const opt = {
//         margin: 0,
//         filename: `${data?.quotation?.document_title || 'Quotation'}_${data?.quotation?.quotation_number || id}.pdf`,
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2, useCORS: true },
//         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//       };

//       await html2pdf().set(opt).from(element).save();
//     } catch (err) {
//       alert("Failed to generate PDF. Please try again.");
//     } finally {
//       setIsDownloading(false);
//     }
//   };

//   // --- Email Logic ---
//   const handleSendEmail = async () => {
//     if (!data?.customer?.email) {
//       alert("No client email address found. Please update the client profile first.");
//       return;
//     }
    
//     setIsEmailing(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/quotations/${id}/send-email`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` }
//       });
      
//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.detail || "Failed to send email");
//       }
      
//       alert(`Success! Document emailed to ${data.customer.email}`);
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setIsEmailing(false);
//     }
//   };

//   const handleConvertToInvoice = async () => {
//     setIsConverting(true);
//     try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(`http://localhost:8000/api/quotations/${id}/convert-to-invoice`, {
//             method: "POST",
//             headers: { Authorization: `Bearer ${token}` }
//         });
        
//         if (!res.ok) {
//             const errData = await res.json();
//             throw new Error(errData.detail || "Failed to convert");
//         }
        
//         const resData = await res.json();
//         navigate(`/invoice/${resData.invoice_id}`);
        
//     } catch (err) {
//         alert(err.message);
//     } finally {
//         setIsConverting(false);
//     }
//   };

//   if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-purple-600" size={32} /></div>;
//   if (error || !data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center gap-3"><AlertTriangle size={24} /><p className="font-medium">{error || "Data corrupted"}</p></div></div>;

//   const { store = {}, customer = {}, quotation = {}, items = [] } = data;

//   const customFields = typeof quotation?.custom_fields === 'string' 
//     ? JSON.parse(quotation.custom_fields) 
//     : (quotation?.custom_fields || []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
//       {/* Hidden file input for logo */}
//       <input 
//         type="file" 
//         ref={logoInputRef} 
//         onChange={handleLogoUpload} 
//         accept="image/png, image/jpeg" 
//         className="hidden" 
//       />

//       {/* Non-Printable Action Bar */}
//       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
//           <ArrowLeft size={18} /> Back
//         </button>
//         <div className="flex items-center gap-3">
//           <button 
//             onClick={handleSendEmail} 
//             disabled={isEmailing}
//             className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium disabled:opacity-50"
//           >
//             {isEmailing ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Email
//           </button>
          
//           <button 
//             onClick={handleDownloadPDF}
//             disabled={isDownloading}
//             className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium disabled:opacity-50"
//           >
//             {isDownloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />} PDF
//           </button>

//           <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium">
//             <Printer size={16} /> Print
//           </button>

//           {quotation?.status !== "INVOICED" && (
//             <button 
//                 onClick={handleConvertToInvoice}
//                 disabled={isConverting}
//                 className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm text-sm font-medium disabled:opacity-50"
//             >
//                 {isConverting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
//                 Convert to Invoice
//             </button>
//           )}
//         </div>
//       </div>

//       {/* A4 Document Container with Ref */}
//       <div ref={documentRef} className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none overflow-hidden">
//         <div className="p-10 sm:p-12 print:p-0">
          
//           {/* Header with Functional Logo Support */}
//           <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
//             <div>
//               <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
//                 {quotation?.document_title || "ESTIMATE / QUOTATION"}
//               </h1>
//               <p className="text-gray-500 font-medium mt-1">Doc No: {quotation?.quotation_number || "N/A"}</p>
//             </div>
            
//             <div className="flex items-start gap-4">
//               <div className="text-right">
//                 <h2 className="text-xl font-bold text-gray-900">{store?.storeName || "Store Name"}</h2>
//                 <p className="text-sm text-gray-600 mt-1">{store?.address || ""}</p>
//                 {store?.phone && <p className="text-sm text-gray-600">Phone: {store.phone}</p>}
//                 {store?.email && <p className="text-sm text-gray-600">Email: {store.email}</p>}
//                 {store?.gstin && <p className="text-sm font-semibold text-gray-800 mt-1">GSTIN: {store.gstin}</p>}
//               </div>

//               {/* Logo Box */}
//               <div 
//                 onClick={() => logoInputRef.current.click()}
//                 className="w-20 h-20 border-2 border-dashed border-purple-300 bg-purple-50/50 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-purple-100 transition-colors relative group shrink-0 print:border-none"
//                 title="Click to upload logo"
//               >
//                 {storeLogo ? (
//                   <>
//                     <img src={storeLogo} alt="Store Logo" className="w-full h-full object-contain rounded-lg" />
//                     <button 
//                       onClick={(e) => { e.stopPropagation(); setStoreLogo(null); }}
//                       className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 print:hidden"
//                     >
//                       <X size={12} />
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <ImageIcon size={20} className="text-purple-400 mb-1" />
//                     <span className="text-[10px] text-purple-600 font-medium">Add Logo</span>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between mb-8 gap-8">
//             <div className="flex-1">
//               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Prepared For:</h3>
//               <p className="text-base font-bold text-gray-900">{customer?.company_name || "Unknown Client"}</p>
//               {customer?.billing_address && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{customer.billing_address}</p>}
//               {customer?.phone && <p className="text-sm text-gray-600 mt-1">Phone: {customer.phone}</p>}
//               {customer?.email && <p className="text-sm text-gray-600 mt-1">Email: {customer.email}</p>}
//               {customer?.gstin && <p className="text-sm font-semibold text-gray-800 mt-2">GSTIN: {customer.gstin}</p>}
//             </div>
            
//             <div className="flex-1 sm:text-right">
//               <div className="inline-block text-left sm:text-right">
//                 <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
//                   <span className="text-gray-500 font-medium">Issue Date:</span>
//                   <span className="text-gray-900 font-semibold">{formatDate(quotation?.issue_date || quotation?.created_at)}</span>
                  
//                   {quotation?.valid_until && (
//                     <>
//                       <span className="text-gray-500 font-medium">Valid Until:</span>
//                       <span className="text-gray-900 font-semibold">{formatDate(quotation.valid_until)}</span>
//                     </>
//                   )}
                  
//                   <span className="text-gray-500 font-medium">Status:</span>
//                   <span className="text-gray-900 font-bold uppercase">{quotation?.status || "DRAFT"}</span>

//                   {customFields.map((field, idx) => (
//                     <React.Fragment key={`cf-${idx}`}>
//                       <span className="text-gray-500 font-medium">{field.key}:</span>
//                       <span className="text-gray-900 font-semibold">{field.value}</span>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

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
//                 {items.map((item, index) => (
//                   <tr key={index}>
//                     <td className="px-4 py-3 text-center text-gray-500">{index + 1}</td>
//                     <td className="px-4 py-3 font-medium text-gray-900">{item?.name}</td>
//                     <td className="px-4 py-3 text-gray-600">{item?.hsn_sac_code || "-"}</td>
//                     <td className="px-4 py-3 text-center text-gray-800">{item?.quantity}</td>
//                     <td className="px-4 py-3 text-right text-gray-800">{formatCurrency(item?.rate)}</td>
//                     <td className="px-4 py-3 text-center text-gray-600">{item?.tax_rate}%</td>
//                     <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency(item?.total_amount || ((item?.quantity || 1) * (item?.rate || 0)))}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-800 pb-8 mb-8 gap-8">
//             <div className="flex-1 text-sm text-gray-600" />
//             <div className="w-full sm:w-72 space-y-3 text-sm">
//               <div className="flex justify-between text-gray-600">
//                 <span>Subtotal</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.subtotal)}</span>
//               </div>
              
//               {quotation?.discount_total > 0 && (
//                 <div className="flex justify-between text-red-500">
//                   <span>Discount</span>
//                   <span className="font-medium">- {formatCurrency(quotation?.discount_total)}</span>
//                 </div>
//               )}

//               <div className="flex justify-between text-gray-600">
//                 <span>Estimated Tax (GST)</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.tax_total)}</span>
//               </div>
              
//               <div className="flex justify-between text-lg border-t border-gray-200 pt-3">
//                 <span className="font-black text-gray-900">Total (INR)</span>
//                 <span className="font-black text-gray-900">{formatCurrency(quotation?.grand_total)}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-between items-end">
//             <div className="flex-1 max-w-md text-xs text-gray-500">
//               {quotation?.notes && (
//                 <div className="mb-4">
//                   <span className="font-bold text-gray-700 block mb-1">Notes:</span>
//                   <p className="whitespace-pre-line">{quotation.notes}</p>
//                 </div>
//               )}
//               {quotation?.terms_conditions && (
//                 <div>
//                   <span className="font-bold text-gray-700 block mb-1">Terms & Conditions:</span>
//                   <p className="whitespace-pre-line">{quotation.terms_conditions}</p>
//                 </div>
//               )}
//             </div>
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

// export default QuotationDetail;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send, ArrowRight, Image as ImageIcon, X } from "lucide-react";
// import html2pdf from "html2pdf.js";

// const QuotationDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const documentRef = useRef(); 
//   const logoInputRef = useRef(); 
  
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const [storeLogo, setStoreLogo] = useState(null);

//   const [isConverting, setIsConverting] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [isEmailing, setIsEmailing] = useState(false);

//   useEffect(() => {
//     const fetchQuotationData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         // Added trailing slash for strict FastAPI routing
//         const res = await fetch(`http://localhost:8000/api/quotations/${id}/`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
        
//         if (!res.ok) {
//           const errData = await res.json();
//           throw new Error(errData.detail || "Failed to load quotation details");
//         }
        
//         const json = await res.json();
//         setData(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchQuotationData();
//   }, [id]);

//   const handlePrint = () => window.print();

//   const formatDate = (isoString) => {
//     if (!isoString) return "N/A";
//     const d = new Date(isoString);
//     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   };

//   const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setStoreLogo(imageUrl);
//     }
//   };

//   const handleDownloadPDF = async () => {
//     setIsDownloading(true);
//     try {
//       const element = documentRef.current;
//       const opt = {
//         margin: 0,
//         filename: `${data?.quotation?.document_title || 'Quotation'}_${data?.quotation?.quotation_number || id}.pdf`,
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2, useCORS: true },
//         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//       };

//       await html2pdf().set(opt).from(element).save();
//     } catch (err) {
//       alert("Failed to generate PDF. Please try again.");
//     } finally {
//       setIsDownloading(false);
//     }
//   };

//   const handleSendEmail = async () => {
//     if (!data?.customer?.email) {
//       alert("No client email address found. Please update the client profile first.");
//       return;
//     }
    
//     setIsEmailing(true);
//     try {
//       const token = localStorage.getItem("token");
//       // Added trailing slash and Content-Type
//       const res = await fetch(`http://localhost:8000/api/quotations/${id}/send-email/`, {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}` 
//         }
//       });
      
//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.detail || "Failed to send email");
//       }
      
//       alert(`Success! Document emailed to ${data.customer.email}`);
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setIsEmailing(false);
//     }
//   };

//   const handleConvertToInvoice = async () => {
//     setIsConverting(true);
//     try {
//         const token = localStorage.getItem("token");
//         // FIXED: Changed '/convert-to-invoice' to '/convert/' to match the backend route
//         const res = await fetch(`http://localhost:8000/api/quotations/${id}/convert/`, {
//             method: "POST",
//             headers: { 
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}` 
//             }
//         });
        
//         if (!res.ok) {
//             const errData = await res.json();
//             throw new Error(errData.detail || "Failed to convert");
//         }
        
//         const resData = await res.json();
//         navigate(`/invoice/${resData.invoice_id}`);
        
//     } catch (err) {
//         alert(err.message);
//     } finally {
//         setIsConverting(false);
//     }
//   };

//   if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-purple-600" size={32} /></div>;
//   if (error || !data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center gap-3"><AlertTriangle size={24} /><p className="font-medium">{error || "Data corrupted"}</p></div></div>;

//   const { store = {}, customer = {}, quotation = {}, items = [] } = data;

//   const customFields = typeof quotation?.custom_fields === 'string' 
//     ? JSON.parse(quotation.custom_fields) 
//     : (quotation?.custom_fields || []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
//       <input 
//         type="file" 
//         ref={logoInputRef} 
//         onChange={handleLogoUpload} 
//         accept="image/png, image/jpeg" 
//         className="hidden" 
//       />

//       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
//           <ArrowLeft size={18} /> Back
//         </button>
//         <div className="flex items-center gap-3">
//           <button 
//             onClick={handleSendEmail} 
//             disabled={isEmailing}
//             className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium disabled:opacity-50"
//           >
//             {isEmailing ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Email
//           </button>
          
//           <button 
//             onClick={handleDownloadPDF}
//             disabled={isDownloading}
//             className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium disabled:opacity-50"
//           >
//             {isDownloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />} PDF
//           </button>

//           <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium">
//             <Printer size={16} /> Print
//           </button>

//           {quotation?.status !== "INVOICED" && (
//             <button 
//                 onClick={handleConvertToInvoice}
//                 disabled={isConverting}
//                 className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm text-sm font-medium disabled:opacity-50"
//             >
//                 {isConverting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
//                 Convert to Invoice
//             </button>
//           )}
//         </div>
//       </div>

//       <div ref={documentRef} className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none overflow-hidden">
//         <div className="p-10 sm:p-12 print:p-0">
          
//           <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
//             <div>
//               <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
//                 {quotation?.document_title || "ESTIMATE / QUOTATION"}
//               </h1>
//               <p className="text-gray-500 font-medium mt-1">Doc No: {quotation?.quotation_number || "N/A"}</p>
//             </div>
            
//             <div className="flex items-start gap-4">
//               <div className="text-right">
//                 <h2 className="text-xl font-bold text-gray-900">{store?.storeName || "Store Name"}</h2>
//                 <p className="text-sm text-gray-600 mt-1">{store?.address || ""}</p>
//                 {store?.phone && <p className="text-sm text-gray-600">Phone: {store.phone}</p>}
//                 {store?.email && <p className="text-sm text-gray-600">Email: {store.email}</p>}
//                 {store?.gstin && <p className="text-sm font-semibold text-gray-800 mt-1">GSTIN: {store.gstin}</p>}
//               </div>

//               <div 
//                 onClick={() => logoInputRef.current.click()}
//                 className="w-20 h-20 border-2 border-dashed border-purple-300 bg-purple-50/50 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-purple-100 transition-colors relative group shrink-0 print:border-none"
//                 title="Click to upload logo"
//               >
//                 {storeLogo ? (
//                   <>
//                     <img src={storeLogo} alt="Store Logo" className="w-full h-full object-contain rounded-lg" />
//                     <button 
//                       onClick={(e) => { e.stopPropagation(); setStoreLogo(null); }}
//                       className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 print:hidden"
//                     >
//                       <X size={12} />
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <ImageIcon size={20} className="text-purple-400 mb-1" />
//                     <span className="text-[10px] text-purple-600 font-medium">Add Logo</span>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between mb-8 gap-8">
//             <div className="flex-1">
//               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Prepared For:</h3>
//               <p className="text-base font-bold text-gray-900">{customer?.company_name || "Unknown Client"}</p>
//               {customer?.billing_address && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{customer.billing_address}</p>}
//               {customer?.phone && <p className="text-sm text-gray-600 mt-1">Phone: {customer.phone}</p>}
//               {customer?.email && <p className="text-sm text-gray-600 mt-1">Email: {customer.email}</p>}
//               {customer?.gstin && <p className="text-sm font-semibold text-gray-800 mt-2">GSTIN: {customer.gstin}</p>}
//             </div>
            
//             <div className="flex-1 sm:text-right">
//               <div className="inline-block text-left sm:text-right">
//                 <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
//                   <span className="text-gray-500 font-medium">Issue Date:</span>
//                   <span className="text-gray-900 font-semibold">{formatDate(quotation?.issue_date || quotation?.created_at)}</span>
                  
//                   {quotation?.valid_until && (
//                     <>
//                       <span className="text-gray-500 font-medium">Valid Until:</span>
//                       <span className="text-gray-900 font-semibold">{formatDate(quotation.valid_until)}</span>
//                     </>
//                   )}
                  
//                   <span className="text-gray-500 font-medium">Status:</span>
//                   <span className="text-gray-900 font-bold uppercase">{quotation?.status || "DRAFT"}</span>

//                   {customFields.map((field, idx) => (
//                     <React.Fragment key={`cf-${idx}`}>
//                       <span className="text-gray-500 font-medium">{field.key}:</span>
//                       <span className="text-gray-900 font-semibold">{field.value}</span>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

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
//                 {items.map((item, index) => (
//                   <tr key={index}>
//                     <td className="px-4 py-3 text-center text-gray-500">{index + 1}</td>
//                     <td className="px-4 py-3 font-medium text-gray-900">{item?.name}</td>
//                     <td className="px-4 py-3 text-gray-600">{item?.hsn_sac_code || "-"}</td>
//                     <td className="px-4 py-3 text-center text-gray-800">{item?.quantity}</td>
//                     <td className="px-4 py-3 text-right text-gray-800">{formatCurrency(item?.rate)}</td>
//                     <td className="px-4 py-3 text-center text-gray-600">{item?.tax_rate}%</td>
//                     <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency(item?.total_amount || ((item?.quantity || 1) * (item?.rate || 0)))}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-800 pb-8 mb-8 gap-8">
//             <div className="flex-1 text-sm text-gray-600" />
//             <div className="w-full sm:w-72 space-y-3 text-sm">
//               <div className="flex justify-between text-gray-600">
//                 <span>Subtotal</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.subtotal)}</span>
//               </div>
              
//               {quotation?.discount_total > 0 && (
//                 <div className="flex justify-between text-red-500">
//                   <span>Discount</span>
//                   <span className="font-medium">- {formatCurrency(quotation?.discount_total)}</span>
//                 </div>
//               )}

//               <div className="flex justify-between text-gray-600">
//                 <span>Estimated Tax (GST)</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.tax_total)}</span>
//               </div>
              
//               <div className="flex justify-between text-lg border-t border-gray-200 pt-3">
//                 <span className="font-black text-gray-900">Total (INR)</span>
//                 <span className="font-black text-gray-900">{formatCurrency(quotation?.grand_total)}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-between items-end">
//             <div className="flex-1 max-w-md text-xs text-gray-500">
//               {quotation?.notes && (
//                 <div className="mb-4">
//                   <span className="font-bold text-gray-700 block mb-1">Notes:</span>
//                   <p className="whitespace-pre-line">{quotation.notes}</p>
//                 </div>
//               )}
//               {quotation?.terms_conditions && (
//                 <div>
//                   <span className="font-bold text-gray-700 block mb-1">Terms & Conditions:</span>
//                   <p className="whitespace-pre-line">{quotation.terms_conditions}</p>
//                 </div>
//               )}
//             </div>
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

// export default QuotationDetail;

// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send, ArrowRight } from "lucide-react";
// import html2pdf from "html2pdf.js";

// const QuotationDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const documentRef = useRef(); 
  
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [isConverting, setIsConverting] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [isEmailing, setIsEmailing] = useState(false);

//   useEffect(() => {
//     const fetchQuotationData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(`http://localhost:8000/api/quotations/${id}/`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
        
//         if (!res.ok) {
//           const errData = await res.json();
//           throw new Error(errData.detail || "Failed to load quotation details");
//         }
        
//         const json = await res.json();
//         setData(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchQuotationData();
//   }, [id]);

//   const handlePrint = () => window.print();

//   const formatDate = (isoString) => {
//     if (!isoString) return "N/A";
//     const d = new Date(isoString);
//     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
//   };

//   const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

//   const handleDownloadPDF = async () => {
//     setIsDownloading(true);
//     try {
//       const element = documentRef.current;
//       const opt = {
//         margin: 0,
//         filename: `${data?.quotation?.document_title || 'Quotation'}_${data?.quotation?.quotation_number || id}.pdf`,
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2, useCORS: true },
//         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//       };

//       await html2pdf().set(opt).from(element).save();
//     } catch (err) {
//       alert("Failed to generate PDF. Please try again.");
//     } finally {
//       setIsDownloading(false);
//     }
//   };

//   const handleSendEmail = async () => {
//     if (!data?.customer?.email) {
//       alert("No client email address found. Please update the client profile first.");
//       return;
//     }
    
//     setIsEmailing(true);
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`http://localhost:8000/api/quotations/${id}/send-email/`, {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}` 
//         }
//       });
      
//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.detail || "Failed to send email");
//       }
      
//       alert(`Success! Document emailed to ${data.customer.email}`);
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setIsEmailing(false);
//     }
//   };

//   const handleConvertToInvoice = async () => {
//     setIsConverting(true);
//     try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(`http://localhost:8000/api/quotations/${id}/convert/`, {
//             method: "POST",
//             headers: { 
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}` 
//             }
//         });
        
//         if (!res.ok) {
//             const errData = await res.json();
//             throw new Error(errData.detail || "Failed to convert");
//         }
        
//         const resData = await res.json();
//         navigate(`/invoice/${resData.invoice_id}`);
        
//     } catch (err) {
//         alert(err.message);
//     } finally {
//         setIsConverting(false);
//     }
//   };

//   if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-purple-600" size={32} /></div>;
//   if (error || !data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center gap-3"><AlertTriangle size={24} /><p className="font-medium">{error || "Data corrupted"}</p></div></div>;

//   const { store = {}, customer = {}, quotation = {}, items = [] } = data;

//   const customFields = typeof quotation?.custom_fields === 'string' 
//     ? JSON.parse(quotation.custom_fields) 
//     : (quotation?.custom_fields || []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
//       {/* Non-Printable Action Bar */}
//       <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
//           <ArrowLeft size={18} /> Back
//         </button>
//         <div className="flex items-center gap-3">
//           <button 
//             onClick={handleSendEmail} 
//             disabled={isEmailing}
//             className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium disabled:opacity-50"
//           >
//             {isEmailing ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Email
//           </button>
          
//           <button 
//             onClick={handleDownloadPDF}
//             disabled={isDownloading}
//             className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium disabled:opacity-50"
//           >
//             {isDownloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />} PDF
//           </button>

//           <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium">
//             <Printer size={16} /> Print
//           </button>

//           {quotation?.status !== "INVOICED" && (
//             <button 
//                 onClick={handleConvertToInvoice}
//                 disabled={isConverting}
//                 className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm text-sm font-medium disabled:opacity-50"
//             >
//                 {isConverting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
//                 Convert to Invoice
//             </button>
//           )}
//         </div>
//       </div>

//       <div ref={documentRef} className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none overflow-hidden">
//         <div className="p-10 sm:p-12 print:p-0">
          
//           <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
//             <div>
//               <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
//                 {quotation?.document_title || "ESTIMATE / QUOTATION"}
//               </h1>
//               <p className="text-gray-500 font-medium mt-1">Doc No: {quotation?.quotation_number || "N/A"}</p>
//             </div>
            
//             <div className="flex items-start gap-4">
//               <div className="text-right">
//                 <h2 className="text-xl font-bold text-gray-900">{store?.storeName || "Store Name"}</h2>
//                 <p className="text-sm text-gray-600 mt-1">{store?.address || ""}</p>
//                 {store?.phone && <p className="text-sm text-gray-600">Phone: {store.phone}</p>}
//                 {store?.email && <p className="text-sm text-gray-600">Email: {store.email}</p>}
//                 {store?.gstin && <p className="text-sm font-semibold text-gray-800 mt-1">GSTIN: {store.gstin}</p>}
//               </div>

//               {/* --- ARCHITECTURAL FIX: Pure Display Logo Component --- */}
//               {store?.logo && (
//                 <div className="w-24 h-24 shrink-0 print:border-none print:bg-transparent">
//                   <img src={store.logo} alt="Store Logo" className="w-full h-full object-contain rounded-lg" />
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between mb-8 gap-8">
//             <div className="flex-1">
//               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Prepared For:</h3>
//               <p className="text-base font-bold text-gray-900">{customer?.company_name || "Unknown Client"}</p>
//               {customer?.billing_address && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{customer.billing_address}</p>}
//               {customer?.phone && <p className="text-sm text-gray-600 mt-1">Phone: {customer.phone}</p>}
//               {customer?.email && <p className="text-sm text-gray-600 mt-1">Email: {customer.email}</p>}
//               {customer?.gstin && <p className="text-sm font-semibold text-gray-800 mt-2">GSTIN: {customer.gstin}</p>}
//             </div>
            
//             <div className="flex-1 sm:text-right">
//               <div className="inline-block text-left sm:text-right">
//                 <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
//                   <span className="text-gray-500 font-medium">Issue Date:</span>
//                   <span className="text-gray-900 font-semibold">{formatDate(quotation?.issue_date || quotation?.created_at)}</span>
                  
//                   {quotation?.valid_until && (
//                     <>
//                       <span className="text-gray-500 font-medium">Valid Until:</span>
//                       <span className="text-gray-900 font-semibold">{formatDate(quotation.valid_until)}</span>
//                     </>
//                   )}
                  
//                   <span className="text-gray-500 font-medium">Status:</span>
//                   <span className="text-gray-900 font-bold uppercase">{quotation?.status || "DRAFT"}</span>

//                   {customFields.map((field, idx) => (
//                     <React.Fragment key={`cf-${idx}`}>
//                       <span className="text-gray-500 font-medium">{field.key}:</span>
//                       <span className="text-gray-900 font-semibold">{field.value}</span>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

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
//                 {items.map((item, index) => (
//                   <tr key={index}>
//                     <td className="px-4 py-3 text-center text-gray-500">{index + 1}</td>
//                     <td className="px-4 py-3 font-medium text-gray-900">{item?.name}</td>
//                     <td className="px-4 py-3 text-gray-600">{item?.hsn_sac_code || "-"}</td>
//                     <td className="px-4 py-3 text-center text-gray-800">{item?.quantity}</td>
//                     <td className="px-4 py-3 text-right text-gray-800">{formatCurrency(item?.rate)}</td>
//                     <td className="px-4 py-3 text-center text-gray-600">{item?.tax_rate}%</td>
//                     <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency(item?.total_amount || ((item?.quantity || 1) * (item?.rate || 0)))}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-800 pb-8 mb-8 gap-8">
//             <div className="flex-1 text-sm text-gray-600" />
//             <div className="w-full sm:w-72 space-y-3 text-sm">
//               <div className="flex justify-between text-gray-600">
//                 <span>Subtotal</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.subtotal)}</span>
//               </div>
              
//               {quotation?.discount_total > 0 && (
//                 <div className="flex justify-between text-red-500">
//                   <span>Discount</span>
//                   <span className="font-medium">- {formatCurrency(quotation?.discount_total)}</span>
//                 </div>
//               )}

//               <div className="flex justify-between text-gray-600">
//                 <span>Estimated Tax (GST)</span>
//                 <span className="font-medium text-gray-900">{formatCurrency(quotation?.tax_total)}</span>
//               </div>
              
//               <div className="flex justify-between text-lg border-t border-gray-200 pt-3">
//                 <span className="font-black text-gray-900">Total (INR)</span>
//                 <span className="font-black text-gray-900">{formatCurrency(quotation?.grand_total)}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-between items-end">
//             <div className="flex-1 max-w-md text-xs text-gray-500">
//               {quotation?.notes && (
//                 <div className="mb-4">
//                   <span className="font-bold text-gray-700 block mb-1">Notes:</span>
//                   <p className="whitespace-pre-line">{quotation.notes}</p>
//                 </div>
//               )}
//               {quotation?.terms_conditions && (
//                 <div>
//                   <span className="font-bold text-gray-700 block mb-1">Terms & Conditions:</span>
//                   <p className="whitespace-pre-line">{quotation.terms_conditions}</p>
//                 </div>
//               )}
//             </div>
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

// export default QuotationDetail;


import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader2, AlertTriangle, Printer, ArrowLeft, Download, Send, ArrowRight, Pencil } from "lucide-react";
import html2pdf from "html2pdf.js";

const QuotationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const documentRef = useRef(); 
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isConverting, setIsConverting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isEmailing, setIsEmailing] = useState(false);

  // --- NEW: Inline Editing States ---
  const [editMode, setEditMode] = useState(null); // 'customer' | 'store' | null
  const [editableCustomer, setEditableCustomer] = useState({});
  const [editableStore, setEditableStore] = useState({});

  useEffect(() => {
    const fetchQuotationData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:8000/api/quotations/${id}/`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.detail || "Failed to load quotation details");
        }
        
        const json = await res.json();
        setData(json);

        // Pre-fill editable states
        setEditableCustomer(json.customer || {});
        setEditableStore(json.store || {});

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotationData();
  }, [id]);

  const handlePrint = () => window.print();

  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    const d = new Date(isoString);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  };

  const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const element = documentRef.current;
      const opt = {
        margin: 0,
        filename: `${data?.quotation?.document_title || 'Quotation'}_${data?.quotation?.quotation_number || id}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSendEmail = async () => {
    if (!data?.customer?.email) {
      alert("No client email address found. Please update the client profile first.");
      return;
    }
    
    setIsEmailing(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8000/api/quotations/${id}/send-email/`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        }
      });
      
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Failed to send email");
      }
      
      alert(`Success! Document emailed to ${data.customer.email}`);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsEmailing(false);
    }
  };

  const handleConvertToInvoice = async () => {
    setIsConverting(true);
    try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:8000/api/quotations/${id}/convert/`, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}` 
            }
        });
        
        if (!res.ok) {
            const errData = await res.json();
            throw new Error(errData.detail || "Failed to convert");
        }
        
        const resData = await res.json();
        navigate(`/invoice/${resData.invoice_id}`);
        
    } catch (err) {
        alert(err.message);
    } finally {
        setIsConverting(false);
    }
  };

  // --- NEW: Handlers to save edited details ---
  const handleSaveCustomer = async () => {
    // 1. Optimistically update UI so the PDF downloads perfectly
    setData(prev => ({ ...prev, customer: editableCustomer }));
    setEditMode(null);

    // 2. Attempt to sync with the backend
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:8000/api/customers/${editableCustomer.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(editableCustomer)
      });
    } catch (err) {
      console.warn("Could not sync customer to backend", err);
    }
  };

  const handleSaveStore = async () => {
    // 1. Optimistically update UI
    setData(prev => ({ ...prev, store: editableStore }));
    setEditMode(null);

    // 2. Attempt to sync with the backend
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:8000/api/store/profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(editableStore)
      });
    } catch (err) {
      console.warn("Could not sync store to backend", err);
    }
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-purple-600" size={32} /></div>;
  if (error || !data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center gap-3"><AlertTriangle size={24} /><p className="font-medium">{error || "Data corrupted"}</p></div></div>;

  const { store = {}, customer = {}, quotation = {}, items = [] } = data;

  const customFields = typeof quotation?.custom_fields === 'string' 
    ? JSON.parse(quotation.custom_fields) 
    : (quotation?.custom_fields || []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
      {/* Non-Printable Action Bar */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleSendEmail} 
            disabled={isEmailing}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium disabled:opacity-50"
          >
            {isEmailing ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Email
          </button>
          
          <button 
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium disabled:opacity-50"
          >
            {isDownloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />} PDF
          </button>

          {/* NEW: Edit Quotation Button */}
          {quotation?.status !== "INVOICED" && quotation?.status !== "CONVERTED" && (
            <button 
              onClick={() => navigate(`/quotations/${id}/edit`)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 text-sm font-medium transition-colors"
            >
              <Pencil size={16} /> Edit
            </button>
          )}

          <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium">
            <Printer size={16} /> Print
          </button>

          {quotation?.status !== "INVOICED" && (
            <button 
                onClick={handleConvertToInvoice}
                disabled={isConverting}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm text-sm font-medium disabled:opacity-50"
            >
                {isConverting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
                Convert to Invoice
            </button>
          )}
        </div>
      </div>

      <div ref={documentRef} className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-gray-200 print:border-none rounded-lg print:rounded-none overflow-hidden">
        <div className="p-10 sm:p-12 print:p-0">
          
          <div className="flex justify-between items-start border-b-2 border-gray-800 pb-6 mb-8">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
                {quotation?.document_title || "ESTIMATE / QUOTATION"}
              </h1>
              <p className="text-gray-500 font-medium mt-1">Doc No: {quotation?.quotation_number || "N/A"}</p>
            </div>
            
            <div className="flex items-start gap-4">
              {/* --- STORE INLINE EDIT BLOCK --- */}
              <div className="text-right group relative">
                {editMode !== 'store' && (
                  <button 
                    onClick={() => setEditMode('store')} 
                    className="absolute -left-6 top-1 text-gray-300 hover:text-purple-600 print:hidden opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Edit Store Details"
                  >
                    <Pencil size={14} />
                  </button>
                )}
                
                {editMode === 'store' ? (
                  <div className="flex flex-col gap-1.5 text-right items-end w-64 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <input value={editableStore.storeName} onChange={e => setEditableStore({...editableStore, storeName: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full font-bold rounded text-right" placeholder="Store Name" />
                    <textarea value={editableStore.address} onChange={e => setEditableStore({...editableStore, address: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full rounded text-right resize-none" rows="2" placeholder="Address" />
                    <input value={editableStore.phone} onChange={e => setEditableStore({...editableStore, phone: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full rounded text-right" placeholder="Phone" />
                    <input value={editableStore.email} onChange={e => setEditableStore({...editableStore, email: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full rounded text-right" placeholder="Email" />
                    <input value={editableStore.gstin} onChange={e => setEditableStore({...editableStore, gstin: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full font-semibold rounded text-right" placeholder="GSTIN" />
                    <div className="flex gap-2 mt-2 justify-end w-full">
                      <button onClick={() => setEditMode(null)} className="text-gray-500 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">Cancel</button>
                      <button onClick={handleSaveStore} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">Save</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900">{store?.storeName || "Store Name"}</h2>
                    <p className="text-sm text-gray-600 mt-1">{store?.address || ""}</p>
                    {store?.phone && <p className="text-sm text-gray-600">Phone: {store.phone}</p>}
                    {store?.email && <p className="text-sm text-gray-600">Email: {store.email}</p>}
                    {store?.gstin && <p className="text-sm font-semibold text-gray-800 mt-1">GSTIN: {store.gstin}</p>}
                  </>
                )}
              </div>

              {store?.logo && (
                <div className="w-24 h-24 shrink-0 print:border-none print:bg-transparent">
                  <img src={store.logo} alt="Store Logo" className="w-full h-full object-contain rounded-lg" />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mb-8 gap-8">
            
            {/* --- CUSTOMER INLINE EDIT BLOCK --- */}
            <div className="flex-1 group relative">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Prepared For:</h3>
                {editMode !== 'customer' && (
                  <button 
                    onClick={() => setEditMode('customer')} 
                    className="text-gray-300 hover:text-purple-600 print:hidden opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Edit Client Details"
                  >
                    <Pencil size={14} />
                  </button>
                )}
              </div>

              {editMode === 'customer' ? (
                <div className="flex flex-col gap-1.5 w-64 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <input value={editableCustomer.company_name} onChange={e => setEditableCustomer({...editableCustomer, company_name: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full font-bold rounded" placeholder="Client Name" />
                  <textarea value={editableCustomer.billing_address} onChange={e => setEditableCustomer({...editableCustomer, billing_address: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full rounded resize-none" rows="2" placeholder="Address" />
                  <input value={editableCustomer.phone} onChange={e => setEditableCustomer({...editableCustomer, phone: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full rounded" placeholder="Phone" />
                  <input value={editableCustomer.email} onChange={e => setEditableCustomer({...editableCustomer, email: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full rounded" placeholder="Email" />
                  <input value={editableCustomer.gstin} onChange={e => setEditableCustomer({...editableCustomer, gstin: e.target.value})} className="border border-gray-300 p-1.5 text-sm w-full font-semibold rounded" placeholder="GSTIN" />
                  <div className="flex gap-2 mt-2 w-full">
                    <button onClick={handleSaveCustomer} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">Save</button>
                    <button onClick={() => setEditMode(null)} className="text-gray-500 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-base font-bold text-gray-900">{customer?.company_name || "Unknown Client"}</p>
                  {customer?.billing_address && <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{customer.billing_address}</p>}
                  {customer?.phone && <p className="text-sm text-gray-600 mt-1">Phone: {customer.phone}</p>}
                  {customer?.email && <p className="text-sm text-gray-600 mt-1">Email: {customer.email}</p>}
                  {customer?.gstin && <p className="text-sm font-semibold text-gray-800 mt-2">GSTIN: {customer.gstin}</p>}
                </>
              )}
            </div>
            
            <div className="flex-1 sm:text-right">
              <div className="inline-block text-left sm:text-right">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <span className="text-gray-500 font-medium">Issue Date:</span>
                  <span className="text-gray-900 font-semibold">{formatDate(quotation?.issue_date || quotation?.created_at)}</span>
                  
                  {quotation?.valid_until && (
                    <>
                      <span className="text-gray-500 font-medium">Valid Until:</span>
                      <span className="text-gray-900 font-semibold">{formatDate(quotation.valid_until)}</span>
                    </>
                  )}
                  
                  <span className="text-gray-500 font-medium">Status:</span>
                  <span className="text-gray-900 font-bold uppercase">{quotation?.status || "DRAFT"}</span>

                  {customFields.map((field, idx) => (
                    <React.Fragment key={`cf-${idx}`}>
                      <span className="text-gray-500 font-medium">{field.key}:</span>
                      <span className="text-gray-900 font-semibold">{field.value}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 text-gray-800 border-b border-gray-200 font-bold uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 w-10 text-center">#</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3 w-24">HSN/SAC</th>
                  <th className="px-4 py-3 w-20 text-center">Qty</th>
                  <th className="px-4 py-3 w-28 text-right">Rate</th>
                  <th className="px-4 py-3 w-20 text-center">Tax %</th>
                  <th className="px-4 py-3 w-32 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-center text-gray-500">{index + 1}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{item?.name}</td>
                    <td className="px-4 py-3 text-gray-600">{item?.hsn_sac_code || "-"}</td>
                    <td className="px-4 py-3 text-center text-gray-800">{item?.quantity}</td>
                    <td className="px-4 py-3 text-right text-gray-800">{formatCurrency(item?.rate)}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{item?.tax_rate}%</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency(item?.total_amount || ((item?.quantity || 1) * (item?.rate || 0)))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-800 pb-8 mb-8 gap-8">
            <div className="flex-1 text-sm text-gray-600" />
            <div className="w-full sm:w-72 space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">{formatCurrency(quotation?.subtotal)}</span>
              </div>
              
              {quotation?.discount_total > 0 && (
                <div className="flex justify-between text-red-500">
                  <span>Discount</span>
                  <span className="font-medium">- {formatCurrency(quotation?.discount_total)}</span>
                </div>
              )}

              <div className="flex justify-between text-gray-600">
                <span>Estimated Tax (GST)</span>
                <span className="font-medium text-gray-900">{formatCurrency(quotation?.tax_total)}</span>
              </div>
              
              <div className="flex justify-between text-lg border-t border-gray-200 pt-3">
                <span className="font-black text-gray-900">Total (INR)</span>
                <span className="font-black text-gray-900">{formatCurrency(quotation?.grand_total)}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex-1 max-w-md text-xs text-gray-500">
              {quotation?.notes && (
                <div className="mb-4">
                  <span className="font-bold text-gray-700 block mb-1">Notes:</span>
                  <p className="whitespace-pre-line">{quotation.notes}</p>
                </div>
              )}
              {quotation?.terms_conditions && (
                <div>
                  <span className="font-bold text-gray-700 block mb-1">Terms & Conditions:</span>
                  <p className="whitespace-pre-line">{quotation.terms_conditions}</p>
                </div>
              )}
            </div>
            <div className="text-center w-48 pt-12 border-t border-gray-300">
              <p className="text-xs font-bold text-gray-900 uppercase">Authorized Signatory</p>
              <p className="text-[10px] text-gray-500 mt-1">For {store?.storeName}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuotationDetail;