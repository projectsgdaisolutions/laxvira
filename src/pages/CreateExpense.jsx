// // import React, { useState } from 'react';
// // import { 
// //   Upload, Plus, Settings, FileText, Paperclip, Info, 
// //   ChevronDown, Copy, X, Edit2, Image as ImageIcon 
// // } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';

// // const CreateExpense = () => {
// //   const navigate = useNavigate();
// //   const [items, setItems] = useState([
// //     { id: 1, name: '', hsn: '', gst: '0', qty: '1', rate: '1', amount: '1.00', cgst: '0.00', sgst: '0.00', total: '1.00' }
// //   ]);

// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [expenseNumber, setExpenseNumber] = useState(`EXP-${Math.floor(Math.random() * 10000)}`);
// //   const [vendorName, setVendorName] = useState('');
// //   const [purchaseDate, setPurchaseDate] = useState(new Date().toISOString().split('T')[0]);

// //   const handleSaveExpense = async () => {
// //     setIsSubmitting(true);
// //     try {
// //       const token = localStorage.getItem('token');
      
// //       // Calculate totals based on the items array
// //       const subtotal = items.reduce((acc, item) => acc + (parseFloat(item.qty) * parseFloat(item.rate)), 0);
// //       const tax_total = items.reduce((acc, item) => acc + (parseFloat(item.cgst) + parseFloat(item.sgst)), 0);
// //       const grand_total = subtotal + tax_total;

// //       const payload = {
// //         expense_number: expenseNumber,
// //         vendor_name: vendorName || "Walk-in Vendor",
// //         purchase_date: new Date(purchaseDate).toISOString(),
// //         subtotal: subtotal,
// //         tax_total: tax_total,
// //         grand_total: grand_total,
// //         items: items // The state array holding all your line items
// //       };

// //       const res = await fetch('http://localhost:8000/api/expenses', {
// //         method: 'POST',
// //         headers: { 
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${token}` 
// //         },
// //         body: JSON.stringify(payload)
// //       });

// //       if (!res.ok) {
// //         const errData = await res.json();
// //         throw new Error(errData.detail || 'Failed to save expense');
// //       }

// //       // Route back to the ledger upon success
// //       navigate('/expenses');
      
// //     } catch (err) {
// //       alert(err.message);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f8f9fa] pb-24 font-sans text-slate-800">
      
// //       {/* Top Stepper */}
// //       <div className="flex flex-col items-center pt-8 pb-6">
// //         <h1 className="text-xl font-bold mb-4 text-black">New Expense Record</h1>
// //         <div className="flex items-center text-sm font-medium">
// //           <div className="flex items-center text-purple-700">
// //             <span className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs mr-2">1</span>
// //             Expense Details
// //           </div>
// //           <ChevronDown className="w-4 h-4 mx-4 text-slate-400 -rotate-90" />
// //           <div className="flex items-center text-slate-400">
// //             <span className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs mr-2">2</span>
// //             Design & Share (optional)
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Document Card */}
// //       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 sm:p-12 relative">
        
// //         {/* Document Title */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
// //             Expense <Edit2 className="w-5 h-5 text-slate-400 cursor-pointer" />
// //           </h2>
// //           <button className="text-xs text-purple-600 font-medium flex items-center justify-center mx-auto mt-2 hover:underline">
// //             <Plus className="w-3 h-3 mr-1" /> Add Subtitle
// //           </button>
// //         </div>

// //         {/* Top Grid: Meta Data & Logo */}
// //         <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
// //           <div className="w-full md:w-1/2 space-y-4">
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">Expense No<span className="text-red-500">*</span></label>
// //               <input type="text" defaultValue="EXP-00001" className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
// //             </div>
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">Invoice No</label>
// //               <input type="text" placeholder="Enter Vendor Invoice Number" className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
// //             </div>
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">PO Number</label>
// //               <input type="text" className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
// //             </div>
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">Expense Date<span className="text-red-500">*</span></label>
// //               <input type="text" defaultValue="Aug 10, 2026" className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
// //             </div>
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">Due Date</label>
// //               <div className="w-2/3 flex items-center border-b border-slate-300 pb-1">
// //                 <input type="text" defaultValue="Aug 25, 2026" className="w-full text-sm outline-none" />
// //                 <Settings className="w-4 h-4 text-slate-400 ml-2" />
// //                 <X className="w-4 h-4 text-slate-400 ml-2" />
// //               </div>
// //             </div>
// //             <button className="text-xs text-purple-600 font-medium flex items-center mt-2 hover:underline">
// //               <Plus className="w-3 h-3 mr-1" /> Add Custom Fields
// //             </button>
// //           </div>

// //           <div className="w-full md:w-64 h-32 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
// //             <ImageIcon className="w-6 h-6 mb-2 text-purple-300" />
// //             <span className="text-sm font-medium text-slate-700">Add Receipt/Logo</span>
// //             <span className="text-[10px] mt-1 text-center px-4">Resolution up to 1080x1080px.<br/>PNG or JPEG file.</span>
// //           </div>
// //         </div>

// //         {/* Billing Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //           <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50">
// //             <h3 className="font-bold text-slate-800 border-b border-slate-300 border-dashed pb-2 mb-4 inline-block">Billed To <span className="text-xs font-normal text-slate-500">(Your Details)</span></h3>
// //             <div className="border border-slate-200 rounded bg-white p-2.5 mb-4 flex justify-between items-center cursor-pointer">
// //               <div className="flex items-center gap-3">
// //                 <div className="w-6 h-6 bg-slate-800 text-white rounded text-xs flex items-center justify-center font-bold">A</div>
// //                 <span className="text-sm font-medium">Abhishek Ghadmode</span>
// //               </div>
// //               <ChevronDown className="w-4 h-4 text-slate-400" />
// //             </div>
// //             <div className="text-sm text-slate-700 bg-white border border-slate-100 rounded p-3 relative group">
// //               <button className="absolute right-3 top-3 text-purple-600 text-xs font-medium flex items-center hidden group-hover:flex">
// //                 <Edit2 className="w-3 h-3 mr-1" /> Edit
// //               </button>
// //               <p className="font-medium mb-1">Abhishek Ghadmode</p>
// //               <p className="text-slate-500">India</p>
// //             </div>
// //           </div>

// //           <div className="border border-slate-200 rounded-lg p-5">
// //             <h3 className="font-bold text-slate-800 border-b border-slate-300 border-dashed pb-2 mb-4 inline-block">Billed By <span className="text-xs font-normal text-slate-500">(Vendor's Details)</span></h3>
// //             <div className="border border-purple-200 rounded bg-white p-2.5 mb-4 flex justify-between items-center cursor-pointer text-purple-700">
// //               <span className="text-sm">Select Vendor By Bill</span>
// //               <ChevronDown className="w-4 h-4" />
// //             </div>
// //             <div className="border border-dashed border-slate-200 rounded p-6 flex flex-col items-center justify-center text-center">
// //               <p className="text-sm text-slate-500 mb-2">Select Vendor/Business from the list</p>
// //               <p className="text-xs text-slate-400 mb-3">OR</p>
// //               <button className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
// //                 <Plus className="w-4 h-4 mr-2" /> Add New Vendor
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Table Action Bar */}
// //         <div className="flex flex-wrap gap-4 mb-4">
// //           <button className="flex-1 py-2 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 flex justify-center items-center gap-2 hover:bg-slate-50">
// //             <Settings className="w-4 h-4 text-purple-500" /> Configure GST
// //           </button>
// //           <div className="flex-1 relative">
// //             <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] font-medium text-slate-500">Currency*</label>
// //             <select className="w-full h-full py-2 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 outline-none focus:border-purple-500 appearance-none bg-transparent">
// //               <option>Indian Rupee(INR, ₹)</option>
// //             </select>
// //             <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
// //           </div>
// //           <button className="flex-1 py-2 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 flex justify-center items-center gap-2 hover:bg-slate-50">
// //             <span className="font-mono text-xs text-purple-500 font-bold">123</span> Number and Currency Format
// //           </button>
// //           <button className="flex-1 py-2 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 flex justify-center items-center gap-2 hover:bg-slate-50">
// //             <Settings className="w-4 h-4 text-pink-400" /> Edit Columns/Formulas
// //           </button>
// //         </div>

// //         {/* Purple Table Header */}
// //         <div className="border border-slate-200 rounded-t-xl overflow-hidden">
// //           <div className="bg-[#7c3aed] text-white text-xs font-bold flex">
// //             <div className="w-[30%] p-3 border-r border-purple-500/30">Item / Category</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30">HSN/SAC</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30">GST Rate</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30">Quantity</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30">Rate</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30 text-right">Amount</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30 text-right">CGST</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30 text-right">SGST</div>
// //             <div className="w-[10%] p-3 text-right">Total</div>
// //           </div>

// //           {/* Table Body */}
// //           <div className="divide-y divide-slate-100 bg-white">
// //             {items.map((item, index) => (
// //               <div key={item.id} className="p-4 border-b border-slate-200 group relative">
// //                 <div className="absolute right-4 top-2 hidden group-hover:flex items-center gap-2 text-slate-400">
// //                   <Copy className="w-4 h-4 cursor-pointer hover:text-slate-600" />
// //                   <X className="w-4 h-4 cursor-pointer hover:text-red-500" />
// //                 </div>
                
// //                 <span className="text-sm font-bold block mb-4">{index + 1}.</span>
                
// //                 <div className="flex gap-4 items-end mb-4">
// //                   <div className="w-[30%]"><input type="text" placeholder="Expense Description" className="w-full border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" /></div>
// //                   <div className="w-[10%] flex items-center border-b border-slate-300 pb-1"><span className="text-slate-400 text-xs mr-1">#</span><input type="text" className="w-full text-sm outline-none focus:border-purple-500" /></div>
// //                   <div className="w-[10%] flex items-center border-b border-slate-300 pb-1"><span className="text-slate-400 text-xs mr-1">%</span><input type="text" defaultValue="0" className="w-full text-sm outline-none focus:border-purple-500" /></div>
// //                   <div className="w-[10%] flex items-center border-b border-slate-300 pb-1"><input type="text" defaultValue="1" className="w-full text-sm outline-none focus:border-purple-500" /></div>
// //                   <div className="w-[10%] flex items-center border-b border-slate-300 pb-1"><span className="text-slate-400 text-xs mr-1">₹</span><input type="text" defaultValue="1" className="w-full text-sm outline-none focus:border-purple-500" /></div>
// //                   <div className="w-[10%] border-b border-slate-300 pb-1 text-right text-sm">₹1.00</div>
// //                   <div className="w-[10%] border-b border-slate-300 pb-1 text-right text-sm">₹0.00</div>
// //                   <div className="w-[10%] border-b border-slate-300 pb-1 text-right text-sm">₹0.00</div>
// //                   <div className="w-[10%] border-b border-slate-300 pb-1 text-right text-sm font-bold">₹1.00</div>
// //                 </div>

// //                 <div className="flex flex-wrap gap-6 text-xs font-medium text-purple-600">
// //                   <button className="flex items-center gap-1 hover:underline"><Plus className="w-3 h-3" /> Add Description</button>
// //                   <button className="flex items-center gap-1 hover:underline"><ImageIcon className="w-3 h-3" /> Add Image</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Add Line / Add Group Buttons */}
// //         <div className="flex gap-4 mt-4">
// //           <button className="flex-1 py-3 border border-dashed border-purple-300 rounded-lg text-purple-600 font-medium text-sm flex justify-center items-center hover:bg-purple-50 transition-colors">
// //             <Plus className="w-4 h-4 mr-2" /> Add New Line
// //           </button>
// //           <button className="flex-1 py-3 border border-dashed border-orange-300 rounded-lg text-orange-600 font-medium text-sm flex justify-center items-center hover:bg-orange-50 transition-colors">
// //             <Plus className="w-4 h-4 mr-2" /> Add New Group
// //           </button>
// //         </div>

// //         {/* Totals Box */}
// //         <div className="flex justify-end mt-8">
// //           <div className="w-full md:w-96 bg-[#f8f9fa] rounded-lg p-5">
// //             <div className="flex justify-between items-center mb-4">
// //               <span className="font-bold text-sm text-slate-800">Show Total in PDF</span>
// //               <Settings className="w-4 h-4 text-slate-400" />
// //             </div>
            
// //             <div className="space-y-3 text-sm text-slate-600 border-b border-slate-200 pb-4 mb-4">
// //               <div className="flex justify-between"><span className="font-medium text-slate-800">Amount</span><span>₹1.00</span></div>
// //               <div className="flex justify-between items-center">
// //                 <span className="flex items-center gap-2">GST <Edit2 className="w-3 h-3 text-purple-400" /></span>
// //                 <span className="flex items-center gap-2 text-slate-800 font-medium">₹0.00 <X className="w-3 h-3 text-slate-400" /></span>
// //               </div>
// //               <div className="flex justify-between"><span>SGST</span><span>₹0.00</span></div>
// //               <div className="flex justify-between"><span>CGST</span><span>₹0.00</span></div>
// //             </div>

// //             <div className="flex justify-between items-center border-t border-slate-300 border-dashed pt-4 mb-4">
// //               <span className="font-bold text-lg text-slate-900 border-b border-slate-400 border-dashed pb-0.5">Total <span className="text-sm font-normal text-slate-500">(INR)</span></span>
// //               <span className="font-bold text-lg text-slate-900">₹1.00</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Recurring Expense Toggle */}
// //         <div className="border border-slate-200 rounded-xl p-5 flex items-start gap-4 mt-8 bg-[#fdfdfd]">
// //           <div className="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer mt-1">
// //             <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-0.5 shadow"></div>
// //           </div>
// //           <div>
// //             <h4 className="font-bold text-slate-800 text-sm">This is a Recurring Expense</h4>
// //             <p className="text-xs text-slate-500 mt-1">A draft expense will be created with the same details every next period.</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Sticky Footer */}
// //       {/* <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 px-8 z-50 flex gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] justify-end">
// //         <button onClick={() => navigate('/expenses')} className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm px-6 py-2.5 rounded-lg transition-colors mr-auto">
// //           Cancel
// //         </button>
// //         <button className="bg-[#e80071] hover:bg-[#c90062] text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors">
// //           Save & Continue
// //         </button>
// //       </div> */}
// //      {/* Sticky Footer */}
// // <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 px-8 z-50 flex gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] justify-end">
// //   <button onClick={() => navigate('/expenses')} className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm px-6 py-2.5 rounded-lg transition-colors mr-auto">
// //     Cancel
// //   </button>
// //   <button 
// //     onClick={handleSaveExpense}
// //     disabled={isSubmitting}
// //     className="bg-[#e80071] hover:bg-[#c90062] text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors flex items-center"
// //   >
// //     {isSubmitting ? "Saving..." : "Save & Continue"}
// //   </button>
// // </div> 

// //     </div>
// //   );
// // };

// // export default CreateExpense;

// // import React, { useState, useEffect, useRef } from 'react';
// // import { 
// //   Upload, Plus, Settings, FileText, Paperclip, Info, 
// //   ChevronDown, Copy, X, Edit2, Image as ImageIcon, Loader2, Check 
// // } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';

// // const CreateExpense = () => {
// //   const navigate = useNavigate();
// //   const logoInputRef = useRef(null);

// //   // --- Document Meta State ---
// //   const [expenseNumber, setExpenseNumber] = useState(`EXP-${Math.floor(10000 + Math.random() * 90000)}`);
// //   const [invoiceNumber, setInvoiceNumber] = useState('');
// //   const [poNumber, setPoNumber] = useState('');
// //   const [purchaseDate, setPurchaseDate] = useState(new Date().toISOString().split('T')[0]);
// //   const [dueDate, setDueDate] = useState('');
  
// //   // Title & Subtitle States
// //   const [documentTitle, setDocumentTitle] = useState('Expense');
// //   const [isEditingTitle, setIsEditingTitle] = useState(false);
// //   const [subtitle, setSubtitle] = useState('');
// //   const [showSubtitleInput, setShowSubtitleInput] = useState(false);

// //   // Logo / Receipt State
// //   const [receiptImage, setReceiptImage] = useState(null);

// //   // Custom Fields State
// //   const [customFields, setCustomFields] = useState([]);
// //   const addCustomField = () => setCustomFields([...customFields, { key: '', value: '' }]);

// //   // --- Vendor & Store State ---
// //   const [vendors, setVendors] = useState([]);
// //   const [selectedVendorId, setSelectedVendorId] = useState('');
// //   const [isCreatingInlineVendor, setIsCreatingInlineVendor] = useState(false);
// //   const [newVendor, setNewVendor] = useState({ name: '', gstin: '', address: '' });
// //   const [storeDetails, setStoreDetails] = useState({ name: 'Abhishek Ghadmode', country: 'India' });
// //   const [isEditingStore, setIsEditingStore] = useState(false);

// //   // --- Line Items & Groups State ---
// //   // Structure supports rows and nested group arrays if needed
// //   const [items, setItems] = useState([
// //     { 
// //       id: Date.now(), 
// //       name: '', 
// //       hsn: '', 
// //       gst_rate: 18, 
// //       qty: 1, 
// //       rate: 0, 
// //       description: '', 
// //       image: null 
// //     }
// //   ]);

// //   // --- Recurring Expense State ---
// //   const [isRecurring, setIsRecurring] = useState(false);
// //   const [recurringCycle, setRecurringCycle] = useState('monthly');

// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   // Fetch Vendors on Mount
// //   useEffect(() => {
// //     const fetchVendors = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const res = await fetch('http://localhost:8000/api/vendors', {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         if (res.ok) {
// //           const data = await res.json();
// //           setVendors(data);
// //         }
// //       } catch (err) {
// //         console.error("Could not fetch vendors, using mock/inline creator.");
// //       }
// //     };
// //     fetchVendors();
// //   }, []);

// //   // --- Mathematical Calculation Engine (Per Indian GST rules) ---
// //   const calculateTotals = () => {
// //     let subtotal = 0;
// //     let totalTax = 0;

// //     const processedItems = items.map(item => {
// //       const qty = parseFloat(item.qty) || 0;
// //       const rate = parseFloat(item.rate) || 0;
// //       const amount = qty * rate;
      
// //       const gstRate = parseFloat(item.gst_rate) || 0;
// //       const taxAmount = (amount * gstRate) / 100;
      
// //       // Intra-state split (CGST + SGST)
// //       const cgst = taxAmount / 2;
// //       const sgst = taxAmount / 2;
// //       const total = amount + taxAmount;

// //       subtotal += amount;
// //       totalTax += taxAmount;

// //       return {
// //         ...item,
// //         amount,
// //         cgst,
// //         sgst,
// //         total
// //       };
// //     });

// //     const cgstTotal = totalTax / 2;
// //     const sgstTotal = totalTax / 2;
// //     const grandTotal = subtotal + totalTax;

// //     return {
// //       processedItems,
// //       subtotal,
// //       totalTax,
// //       cgstTotal,
// //       sgstTotal,
// //       grandTotal
// //     };
// //   };

// //   const totals = calculateTotals();

// //   // --- Handlers ---
// //   const handleItemChange = (index, field, value) => {
// //     const newItems = [...items];
// //     newItems[index][field] = field === 'name' || field === 'hsn' || field === 'description' 
// //       ? value 
// //       : parseFloat(value) || 0;
// //     setItems(newItems);
// //   };

// //   const addLineItem = () => {
// //     setItems([
// //       ...items, 
// //       { id: Date.now(), name: '', hsn: '', gst_rate: 18, qty: 1, rate: 0, description: '', image: null }
// //     ]);
// //   };

// //   const addNewGroup = () => {
// //     // Adds a group header or indented section block
// //     setItems([
// //       ...items,
// //       { id: Date.now(), isGroupHeader: true, groupName: "New Group Category" }
// //     ]);
// //   };

// //   const handleInlineVendorCreate = async () => {
// //     if (!newVendor.name) return;
// //     try {
// //       const token = localStorage.getItem('token');
// //       const res = await fetch('http://localhost:8000/api/vendors', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
// //         body: JSON.stringify(newVendor)
// //       });
// //       if (!res.ok) throw new Error("Failed to create vendor");
// //       const created = await res.json();
// //       setVendors([...vendors, created]);
// //       setSelectedVendorId(created.id.toString());
// //       setIsCreatingInlineVendor(false);
// //     } catch (err) {
// //       // Fallback local mock selection if backend endpoint is pending
// //       const mockVendor = { id: Date.now(), ...newVendor };
// //       setVendors([...vendors, mockVendor]);
// //       setSelectedVendorId(mockVendor.id.toString());
// //       setIsCreatingInlineVendor(false);
// //     }
// //   };

// //   const handleSaveExpense = async () => {
// //     setIsSubmitting(true);
// //     try {
// //       const token = localStorage.getItem('token');
      
// //       const payload = {
// //         expense_number: expenseNumber,
// //         invoice_number: invoiceNumber,
// //         po_number: poNumber,
// //         purchase_date: new Date(purchaseDate).toISOString(),
// //         due_date: dueDate ? new Date(dueDate).toISOString() : null,
// //         document_title: documentTitle,
// //         subtitle: subtitle,
// //         vendor_id: selectedVendorId ? parseInt(selectedVendorId) : null,
// //         subtotal: totals.subtotal,
// //         tax_total: totals.totalTax,
// //         cgst_total: totals.cgstTotal,
// //         sgst_total: totals.sgstTotal,
// //         grand_total: totals.grandTotal,
// //         items: totals.processedItems,
// //         is_recurring: isRecurring,
// //         recurring_cycle: isRecurring ? recurringCycle : null
// //       };

// //       const res = await fetch('http://localhost:8000/api/expenses', {
// //         method: 'POST',
// //         headers: { 
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${token}` 
// //         },
// //         body: JSON.stringify(payload)
// //       });

// //       if (!res.ok) {
// //         const errData = await res.json();
// //         throw new Error(errData.detail || 'Failed to save expense');
// //       }

// //       navigate('/expenses');
      
// //     } catch (err) {
// //       alert(err.message);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const selectedVendor = vendors.find(v => v.id.toString() === selectedVendorId);

// //   return (
// //     <div className="min-h-screen bg-[#f8f9fa] pb-32 font-sans text-slate-800">
      
// //       {/* Hidden file input for Receipt / Logo */}
// //       <input 
// //         type="file" 
// //         ref={logoInputRef} 
// //         onChange={(e) => e.target.files[0] && setReceiptImage(URL.createObjectURL(e.target.files[0]))} 
// //         accept="image/png, image/jpeg" 
// //         className="hidden" 
// //       />

// //       {/* Top Stepper */}
// //       <div className="flex flex-col items-center pt-8 pb-6">
// //         <h1 className="text-xl font-bold mb-4 text-black">New Expense Record</h1>
// //         <div className="flex items-center text-sm font-medium">
// //           <div className="flex items-center text-purple-700">
// //             <span className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs mr-2">1</span>
// //             Expense Details
// //           </div>
// //           <ChevronDown className="w-4 h-4 mx-4 text-slate-400 -rotate-90" />
// //           <div className="flex items-center text-slate-400">
// //             <span className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs mr-2">2</span>
// //             Design & Share (optional)
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Document Card */}
// //       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 sm:p-12 relative">
        
// //         {/* Document Title & Subtitle */}
// //         <div className="text-center mb-12">
// //           <div className="flex items-center justify-center gap-2">
// //             {isEditingTitle ? (
// //               <div className="flex items-center gap-2">
// //                 <input 
// //                   type="text" 
// //                   value={documentTitle} 
// //                   onChange={(e) => setDocumentTitle(e.target.value)} 
// //                   className="text-3xl font-bold text-slate-900 border-b border-purple-600 outline-none text-center bg-transparent"
// //                   autoFocus
// //                 />
// //                 <button onClick={() => setIsEditingTitle(false)} className="text-green-600 p-1"><Check size={20}/></button>
// //               </div>
// //             ) : (
// //               <>
// //                 <h2 className="text-3xl font-bold">{documentTitle}</h2>
// //                 <Edit2 className="w-5 h-5 text-slate-400 cursor-pointer hover:text-purple-600" onClick={() => setIsEditingTitle(true)} />
// //               </>
// //             )}
// //           </div>

// //           {showSubtitleInput ? (
// //             <div className="mt-2 max-w-sm mx-auto flex items-center gap-2">
// //               <input 
// //                 type="text" 
// //                 placeholder="Enter document subtitle..." 
// //                 value={subtitle} 
// //                 onChange={(e) => setSubtitle(e.target.value)}
// //                 className="w-full text-sm border-b border-purple-400 outline-none text-center py-1"
// //                 autoFocus
// //               />
// //               <X size={14} className="cursor-pointer text-slate-400 hover:text-red-500" onClick={() => setShowSubtitleInput(false)} />
// //             </div>
// //           ) : (
// //             <button onClick={() => setShowSubtitleInput(true)} className="text-xs text-purple-600 font-medium flex items-center justify-center mx-auto mt-2 hover:underline">
// //               <Plus className="w-3 h-3 mr-1" /> {subtitle ? `Subtitle: ${subtitle}` : "Add Subtitle"}
// //             </button>
// //           )}
// //         </div>

// //         {/* Top Grid: Meta Data & Logo */}
// //         <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
// //           <div className="w-full md:w-1/2 space-y-4">
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">Expense No<span className="text-red-500">*</span></label>
// //               <input type="text" value={expenseNumber} onChange={(e) => setExpenseNumber(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
// //             </div>
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">Invoice No</label>
// //               <input type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="Enter Vendor Invoice Number" className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
// //             </div>
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">PO Number</label>
// //               <input type="text" value={poNumber} onChange={(e) => setPoNumber(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
// //             </div>
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">Expense Date<span className="text-red-500">*</span></label>
// //               <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
// //             </div>
// //             <div className="flex items-center">
// //               <label className="w-1/3 text-sm font-medium text-slate-700">Due Date</label>
// //               <div className="w-2/3 flex items-center border-b border-slate-300 pb-1">
// //                 <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full text-sm outline-none bg-transparent" />
// //                 <X className="w-4 h-4 text-slate-400 ml-2 cursor-pointer hover:text-red-500" onClick={() => setDueDate('')} />
// //               </div>
// //             </div>
// //             <button onClick={addCustomField} className="text-xs text-purple-600 font-medium flex items-center mt-2 hover:underline">
// //               <Plus className="w-3 h-3 mr-1" /> Add Custom Fields
// //             </button>
// //             {customFields.map((field, idx) => (
// //               <div key={idx} className="flex gap-2 items-center">
// //                 <input type="text" placeholder="Label" value={field.key} onChange={(e) => {
// //                   const updated = [...customFields]; updated[idx].key = e.target.value; setCustomFields(updated);
// //                 }} className="w-1/2 text-xs border-b border-slate-300 py-1 outline-none"/>
// //                 <input type="text" placeholder="Value" value={field.value} onChange={(e) => {
// //                   const updated = [...customFields]; updated[idx].value = e.target.value; setCustomFields(updated);
// //                 }} className="w-1/2 text-xs border-b border-slate-300 py-1 outline-none"/>
// //                 <X size={14} className="text-red-400 cursor-pointer" onClick={() => setCustomFields(customFields.filter((_, i) => i !== idx))} />
// //               </div>
// //             ))}
// //           </div>

// //           {/* Functional Receipt/Logo Uploader */}
// //           <div 
// //             onClick={() => logoInputRef.current.click()}
// //             className="w-full md:w-64 h-32 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors relative"
// //           >
// //             {receiptImage ? (
// //               <img src={receiptImage} alt="Receipt Preview" className="w-full h-full object-contain rounded-lg" />
// //             ) : (
// //               <>
// //                 <ImageIcon className="w-6 h-6 mb-2 text-purple-300" />
// //                 <span className="text-sm font-medium text-slate-700">Add Receipt/Logo</span>
// //                 <span className="text-[10px] mt-1 text-center px-4">Resolution up to 1080x1080px.<br/>PNG or JPEG file.</span>
// //               </>
// //             )}
// //           </div>
// //         </div>

// //         {/* Billing Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
// //           {/* Billed To (Store Details - Editable) */}
// //           <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50">
// //             <h3 className="font-bold text-slate-800 border-b border-slate-300 border-dashed pb-2 mb-4 inline-block">Billed To <span className="text-xs font-normal text-slate-500">(Your Details)</span></h3>
// //             {isEditingStore ? (
// //               <div className="space-y-2 bg-white p-3 rounded border border-purple-200">
// //                 <input type="text" value={storeDetails.name} onChange={(e) => setStoreDetails({...storeDetails, name: e.target.value})} className="w-full border-b text-sm p-1 outline-none" placeholder="Store/Your Name" />
// //                 <input type="text" value={storeDetails.country} onChange={(e) => setStoreDetails({...storeDetails, country: e.target.value})} className="w-full border-b text-sm p-1 outline-none" placeholder="Country" />
// //                 <button onClick={() => setIsEditingStore(false)} className="bg-purple-600 text-white text-xs px-3 py-1 rounded">Done</button>
// //               </div>
// //             ) : (
// //               <div className="text-sm text-slate-700 bg-white border border-slate-100 rounded p-3 relative group">
// //                 <button onClick={() => setIsEditingStore(true)} className="absolute right-3 top-3 text-purple-600 text-xs font-medium flex items-center hidden group-hover:flex">
// //                   <Edit2 className="w-3 h-3 mr-1" /> Edit
// //                 </button>
// //                 <p className="font-medium mb-1">{storeDetails.name}</p>
// //                 <p className="text-slate-500">{storeDetails.country}</p>
// //               </div>
// //             )}
// //           </div>

// //           {/* Billed By (Vendor Selector & Inline Adder) */}
// //           <div className="border border-slate-200 rounded-lg p-5">
// //             <h3 className="font-bold text-slate-800 border-b border-slate-300 border-dashed pb-2 mb-4 inline-block">Billed By <span className="text-xs font-normal text-slate-500">(Vendor's Details)</span></h3>
            
// //             {isCreatingInlineVendor ? (
// //               <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 space-y-3">
// //                 <h4 className="text-xs font-bold text-purple-800">Add New Vendor</h4>
// //                 <input type="text" placeholder="Vendor Name*" value={newVendor.name} onChange={(e) => setNewVendor({...newVendor, name: e.target.value})} className="w-full text-sm p-2 bg-white border rounded outline-none" />
// //                 <input type="text" placeholder="Vendor GSTIN (optional)" value={newVendor.gstin} onChange={(e) => setNewVendor({...newVendor, gstin: e.target.value})} className="w-full text-sm p-2 bg-white border rounded outline-none" />
// //                 <input type="text" placeholder="Address (optional)" value={newVendor.address} onChange={(e) => setNewVendor({...newVendor, address: e.target.value})} className="w-full text-sm p-2 bg-white border rounded outline-none" />
// //                 <div className="flex gap-2">
// //                   <button onClick={handleInlineVendorCreate} className="bg-purple-600 text-white text-xs px-4 py-2 rounded">Save & Select</button>
// //                   <button onClick={() => setIsCreatingInlineVendor(false)} className="text-slate-500 text-xs px-3 py-2">Cancel</button>
// //                 </div>
// //               </div>
// //             ) : (
// //               <>
// //                 <div className="mb-3">
// //                   <select 
// //                     value={selectedVendorId} 
// //                     onChange={(e) => setSelectedVendorId(e.target.value)}
// //                     className="w-full border border-purple-200 rounded-lg bg-white p-3 text-sm outline-none text-purple-700 font-medium"
// //                   >
// //                     <option value="">Select Vendor By Bill</option>
// //                     {vendors.map(v => (
// //                       <option key={v.id} value={v.id}>{v.name}</option>
// //                     ))}
// //                   </select>
// //                 </div>
                
// //                 {selectedVendor ? (
// //                   <div className="bg-slate-50 p-3 rounded border text-sm text-slate-700">
// //                     <p className="font-bold">{selectedVendor.name}</p>
// //                     <p className="text-xs text-slate-500">GSTIN: {selectedVendor.gstin || 'N/A'}</p>
// //                     <p className="text-xs text-slate-500">{selectedVendor.address}</p>
// //                   </div>
// //                 ) : (
// //                   <div className="border border-dashed border-slate-200 rounded p-6 flex flex-col items-center justify-center text-center">
// //                     <p className="text-sm text-slate-500 mb-2">Select Vendor/Business from the list</p>
// //                     <p className="text-xs text-slate-400 mb-3">OR</p>
// //                     <button onClick={() => setIsCreatingInlineVendor(true)} className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
// //                       <Plus className="w-4 h-4 mr-2" /> Add New Vendor
// //                     </button>
// //                   </div>
// //                 )}
// //               </>
// //             )}
// //           </div>
// //         </div>

// //         {/* Purple Table Header */}
// //         <div className="border border-slate-200 rounded-t-xl overflow-hidden mt-6">
// //           <div className="bg-[#7c3aed] text-white text-xs font-bold flex">
// //             <div className="w-[26%] p-3 border-r border-purple-500/30">Item / Category</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30">HSN/SAC</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30">GST Rate</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30">Quantity</div>
// //             <div className="w-[10%] p-3 border-r border-purple-500/30">Rate</div>
// //             <div className="w-[8%] p-3 border-r border-purple-500/30 text-right">Amount</div>
// //             <div className="w-[8%] p-3 border-r border-purple-500/30 text-right">CGST</div>
// //             <div className="w-[8%] p-3 border-r border-purple-500/30 text-right">SGST</div>
// //             <div className="w-[10%] p-3 text-right">Total</div>
// //           </div>

// //           {/* Table Body with Dynamic Calculations */}
// //           <div className="divide-y divide-slate-100 bg-white">
// //             {totals.processedItems.map((item, index) => {
// //               if (item.isGroupHeader) {
// //                 return (
// //                   <div key={item.id} className="bg-purple-50 p-3 font-bold text-purple-900 text-sm flex justify-between items-center">
// //                     <span>Group: {item.groupName}</span>
// //                     <X size={14} className="cursor-pointer text-red-400" onClick={() => setItems(items.filter((_, i) => i !== index))} />
// //                   </div>
// //                 );
// //               }

// //               return (
// //                 <div key={item.id} className="p-4 border-b border-slate-200 group relative">
// //                   <div className="absolute right-4 top-2 hidden group-hover:flex items-center gap-2 text-slate-400">
// //                     <Copy className="w-4 h-4 cursor-pointer hover:text-slate-600" onClick={() => {
// //                       const duplicated = { ...item, id: Date.now() };
// //                       const arr = [...items]; arr.splice(index + 1, 0, duplicated); setItems(arr);
// //                     }} />
// //                     <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} />
// //                   </div>
                  
// //                   <span className="text-sm font-bold block mb-4">{index + 1}.</span>
                  
// //                   <div className="flex gap-4 items-end mb-4">
// //                     <div className="w-[26%]">
// //                       <input type="text" placeholder="Expense Description" value={item.name} onChange={(e) => handleItemChange(index, 'name', e.target.value)} className="w-full border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
// //                     </div>
// //                     <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
// //                       <span className="text-slate-400 text-xs mr-1">#</span>
// //                       <input type="text" value={item.hsn} onChange={(e) => handleItemChange(index, 'hsn', e.target.value)} className="w-full text-sm outline-none focus:border-purple-500" />
// //                     </div>
// //                     <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
// //                       <span className="text-slate-400 text-xs mr-1">%</span>
// //                       <select value={item.gst_rate} onChange={(e) => handleItemChange(index, 'gst_rate', e.target.value)} className="w-full text-sm outline-none bg-transparent">
// //                         <option value="0">0%</option>
// //                         <option value="5">5%</option>
// //                         <option value="12">12%</option>
// //                         <option value="18">18%</option>
// //                         <option value="28">28%</option>
// //                       </select>
// //                     </div>
// //                     <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
// //                       <input type="number" min="0.1" step="0.1" value={item.qty} onChange={(e) => handleItemChange(index, 'qty', e.target.value)} className="w-full text-sm outline-none focus:border-purple-500" />
// //                     </div>
// //                     <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
// //                       <span className="text-slate-400 text-xs mr-1">₹</span>
// //                       <input type="number" min="0" step="0.01" value={item.rate} onChange={(e) => handleItemChange(index, 'rate', e.target.value)} className="w-full text-sm outline-none focus:border-purple-500" />
// //                     </div>
                    
// //                     {/* Live Calculated Fields */}
// //                     <div className="w-[8%] border-b border-slate-300 pb-1 text-right text-sm">₹{item.amount.toFixed(2)}</div>
// //                     <div className="w-[8%] border-b border-slate-300 pb-1 text-right text-sm">₹{item.cgst.toFixed(2)}</div>
// //                     <div className="w-[8%] border-b border-slate-300 pb-1 text-right text-sm">₹{item.sgst.toFixed(2)}</div>
// //                     <div className="w-[10%] border-b border-slate-300 pb-1 text-right text-sm font-bold">₹{item.total.toFixed(2)}</div>
// //                   </div>

// //                   {/* Functional Description & Image toggles */}
// //                   <div className="flex flex-col gap-2">
// //                     <div className="flex gap-6 text-xs font-medium text-purple-600">
// //                       <button onClick={() => {
// //                         const updated = [...items]; updated[index].showDesc = !updated[index].showDesc; setItems(updated);
// //                       }} className="flex items-center gap-1 hover:underline"><Plus className="w-3 h-3" /> Add Description</button>
// //                     </div>
// //                     {item.showDesc && (
// //                       <textarea placeholder="Detailed notes for this specific line item..." value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} className="w-full text-xs p-2 border rounded border-slate-200 outline-none" rows="2" />
// //                     )}
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* Add Line / Add Group Buttons */}
// //         <div className="flex gap-4 mt-4">
// //           <button onClick={addLineItem} className="flex-1 py-3 border border-dashed border-purple-300 rounded-lg text-purple-600 font-medium text-sm flex justify-center items-center hover:bg-purple-50 transition-colors">
// //             <Plus className="w-4 h-4 mr-2" /> Add New Line
// //           </button>
// //           <button onClick={addNewGroup} className="flex-1 py-3 border border-dashed border-orange-300 rounded-lg text-orange-600 font-medium text-sm flex justify-center items-center hover:bg-orange-50 transition-colors">
// //             <Plus className="w-4 h-4 mr-2" /> Add New Group
// //           </button>
// //         </div>

// //         {/* Totals Box */}
// //         <div className="flex justify-end mt-8">
// //           <div className="w-full md:w-96 bg-[#f8f9fa] rounded-lg p-5">
// //             <div className="flex justify-between items-center mb-4">
// //               <span className="font-bold text-sm text-slate-800">Show Total in PDF</span>
// //               <Settings className="w-4 h-4 text-slate-400" />
// //             </div>
            
// //             <div className="space-y-3 text-sm text-slate-600 border-b border-slate-200 pb-4 mb-4">
// //               <div className="flex justify-between"><span className="font-medium text-slate-800">Amount</span><span>₹{totals.subtotal.toFixed(2)}</span></div>
// //               <div className="flex justify-between items-center">
// //                 <span className="flex items-center gap-2">Total GST</span>
// //                 <span className="text-slate-800 font-medium">₹{totals.totalTax.toFixed(2)}</span>
// //               </div>
// //               <div className="flex justify-between"><span>SGST (50%)</span><span>₹{totals.sgstTotal.toFixed(2)}</span></div>
// //               <div className="flex justify-between"><span>CGST (50%)</span><span>₹{totals.cgstTotal.toFixed(2)}</span></div>
// //             </div>

// //             <div className="flex justify-between items-center border-t border-slate-300 border-dashed pt-4 mb-4">
// //               <span className="font-bold text-lg text-slate-900 border-b border-slate-400 border-dashed pb-0.5">Total <span className="text-sm font-normal text-slate-500">(INR)</span></span>
// //               <span className="font-bold text-lg text-slate-900">₹{totals.grandTotal.toFixed(2)}</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Recurring Expense Toggle */}
// //         <div className="border border-slate-200 rounded-xl p-5 flex items-center justify-between mt-8 bg-[#fdfdfd]">
// //           <div className="flex items-center gap-4">
// //             <div 
// //               onClick={() => setIsRecurring(!isRecurring)}
// //               className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${isRecurring ? 'bg-purple-600' : 'bg-slate-200'}`}
// //             >
// //               <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform shadow ${isRecurring ? 'left-5' : 'left-1'}`}></div>
// //             </div>
// //             <div>
// //               <h4 className="font-bold text-slate-800 text-sm">This is a Recurring Expense</h4>
// //               <p className="text-xs text-slate-500 mt-1">A draft expense will be created with the same details every next period.</p>
// //             </div>
// //           </div>
// //           {isRecurring && (
// //             <select value={recurringCycle} onChange={(e) => setRecurringCycle(e.target.value)} className="border p-2 rounded text-xs outline-none bg-white">
// //               <option value="weekly">Weekly</option>
// //               <option value="monthly">Monthly</option>
// //               <option value="yearly">Yearly</option>
// //             </select>
// //           )}
// //         </div>
// //       </div>

// //       {/* Footer Navigation Action Bar */}
// //       <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 px-8 z-50 flex gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] justify-end">
// //         <button onClick={() => navigate('/expenses')} className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm px-6 py-2.5 rounded-lg transition-colors mr-auto">
// //           Cancel
// //         </button>
// //         <button 
// //           onClick={handleSaveExpense}
// //           disabled={isSubmitting}
// //           className="bg-[#e80071] hover:bg-[#c90062] text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors flex items-center disabled:opacity-50"
// //         >
// //           {isSubmitting ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
// //           Save & Continue
// //         </button>
// //       </div> 

// //     </div>
// //   );
// // };

// // export default CreateExpense;

// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Upload, Plus, Settings, FileText, Paperclip, Info, 
//   ChevronDown, Copy, X, Edit2, Image as ImageIcon, Loader2, Check 
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import ReceiptScanner from '../components/ReceiptScanner';

// const CreateExpense = () => {
//   const navigate = useNavigate();
//   const logoInputRef = useRef(null);

//   const handleAIExtraction = (data) => {
//   // Map the structured JSON directly into your existing form state
//   setFormData(prev => ({
//     ...prev,
//     vendorName: data.vendor_name || "",
//     expenseDate: data.date || "",
//     subtotal: data.subtotal || 0,
//     taxAmount: data.tax_amount || 0,
//     grandTotal: data.grand_total || 0,
//     items: data.items.map(item => ({
//       description: item.description || "",
//       quantity: item.quantity || 1,
//       rate: item.rate || 0,
//       total: item.total || 0
//     }))
//   }));
// };

//   // --- Document Meta State ---
//   const [expenseNumber, setExpenseNumber] = useState(`EXP-${Math.floor(10000 + Math.random() * 90000)}`);
//   const [invoiceNumber, setInvoiceNumber] = useState('');
//   const [poNumber, setPoNumber] = useState('');
//   const [purchaseDate, setPurchaseDate] = useState(new Date().toISOString().split('T')[0]);
//   const [dueDate, setDueDate] = useState('');
  
//   // New Missing Fields required by Expenses list
//   const [category, setCategory] = useState('Office Supplies');
//   const [paymentMethod, setPaymentMethod] = useState('Bank Transfer');
  
//   // Title & Subtitle States
//   const [documentTitle, setDocumentTitle] = useState('Expense');
//   const [isEditingTitle, setIsEditingTitle] = useState(false);
//   const [subtitle, setSubtitle] = useState('');
//   const [showSubtitleInput, setShowSubtitleInput] = useState(false);

//   // Logo / Receipt State
//   const [receiptImage, setReceiptImage] = useState(null);

//   // Custom Fields State
//   const [customFields, setCustomFields] = useState([]);
//   const addCustomField = () => setCustomFields([...customFields, { key: '', value: '' }]);

//   // --- Vendor & Store State ---
//   const [vendors, setVendors] = useState([]);
//   const [selectedVendorId, setSelectedVendorId] = useState('');
//   const [isCreatingInlineVendor, setIsCreatingInlineVendor] = useState(false);
//   const [newVendor, setNewVendor] = useState({ name: '', gstin: '', address: '' });
//   const [storeDetails, setStoreDetails] = useState({ name: 'Abhishek Ghadmode', country: 'India' });
//   const [isEditingStore, setIsEditingStore] = useState(false);

//   // --- Line Items & Groups State ---
//   const [items, setItems] = useState([
//     { 
//       id: Date.now(), 
//       name: '', 
//       hsn: '', 
//       gst_rate: 18, 
//       qty: 1, 
//       rate: 0, 
//       description: '', 
//       image: null 
//     }
//   ]);

//   // --- Recurring Expense State ---
//   const [isRecurring, setIsRecurring] = useState(false);
//   const [recurringCycle, setRecurringCycle] = useState('monthly');

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Fetch Vendors on Mount
//   useEffect(() => {
//     const fetchVendors = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         // FIXED: Added trailing slash to prevent 307/405 redirects
//         const res = await fetch('http://localhost:8000/api/vendors/', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         if (res.ok) {
//           const data = await res.json();
//           setVendors(data);
//         }
//       } catch (err) {
//         console.error("Could not fetch vendors, using mock/inline creator.");
//       }
//     };
//     fetchVendors();
//   }, []);

//   // --- Mathematical Calculation Engine (Per Indian GST rules) ---
//   const calculateTotals = () => {
//     let subtotal = 0;
//     let totalTax = 0;

//     const processedItems = items.map(item => {
//       const qty = parseFloat(item.qty) || 0;
//       const rate = parseFloat(item.rate) || 0;
//       const amount = qty * rate;
      
//       const gstRate = parseFloat(item.gst_rate) || 0;
//       const taxAmount = (amount * gstRate) / 100;
      
//       const cgst = taxAmount / 2;
//       const sgst = taxAmount / 2;
//       const total = amount + taxAmount;

//       subtotal += amount;
//       totalTax += taxAmount;

//       return { ...item, amount, cgst, sgst, total };
//     });

//     return {
//       processedItems,
//       subtotal,
//       totalTax,
//       cgstTotal: totalTax / 2,
//       sgstTotal: totalTax / 2,
//       grandTotal: subtotal + totalTax
//     };
//   };

//   const totals = calculateTotals();

//   // --- Handlers ---
//   const handleItemChange = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = field === 'name' || field === 'hsn' || field === 'description' 
//       ? value 
//       : parseFloat(value) || 0;
//     setItems(newItems);
//   };

//   const addLineItem = () => setItems([...items, { id: Date.now(), name: '', hsn: '', gst_rate: 18, qty: 1, rate: 0, description: '', image: null }]);
//   const addNewGroup = () => setItems([...items, { id: Date.now(), isGroupHeader: true, groupName: "New Group Category" }]);

//   const handleInlineVendorCreate = async () => {
//     if (!newVendor.name) return;
//     try {
//       const token = localStorage.getItem('token');
//       // FIXED: Added trailing slash
//       const res = await fetch('http://localhost:8000/api/vendors/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//         body: JSON.stringify(newVendor)
//       });
//       if (!res.ok) throw new Error("Failed to create vendor");
//       const created = await res.json();
//       setVendors([...vendors, created]);
//       setSelectedVendorId(created.id.toString());
//       setIsCreatingInlineVendor(false);
//     } catch (err) {
//       const mockVendor = { id: Date.now(), ...newVendor };
//       setVendors([...vendors, mockVendor]);
//       setSelectedVendorId(mockVendor.id.toString());
//       setIsCreatingInlineVendor(false);
//     }
//   };

//   const handleSaveExpense = async () => {
//     setIsSubmitting(true);
//     try {
//       const token = localStorage.getItem('token');
      
//       // FIXED: Added category and payment_method to match display requirements
//       const payload = {
//         expense_number: expenseNumber,
//         invoice_number: invoiceNumber,
//         po_number: poNumber,
//         purchase_date: new Date(purchaseDate).toISOString(),
//         due_date: dueDate ? new Date(dueDate).toISOString() : null,
//         document_title: documentTitle,
//         subtitle: subtitle,
//         vendor_id: selectedVendorId ? parseInt(selectedVendorId) : null,
//         category: category,
//         payment_method: paymentMethod,
//         subtotal: totals.subtotal,
//         tax_total: totals.totalTax,
//         cgst_total: totals.cgstTotal,
//         sgst_total: totals.sgstTotal,
//         grand_total: totals.grandTotal,
//         items: totals.processedItems,
//         is_recurring: isRecurring,
//         recurring_cycle: isRecurring ? recurringCycle : null
//       };

//       // FIXED: Added trailing slash to prevent 307 Redirects dropping the POST payload
//       const res = await fetch('http://localhost:8000/api/expenses/', {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}` 
//         },
//         body: JSON.stringify(payload)
//       });

//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.detail || 'Failed to save expense');
//       }

//       navigate('/expenses');
      
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const selectedVendor = vendors.find(v => v.id.toString() === selectedVendorId);

//   return (
//     <div className="min-h-screen bg-[#f8f9fa] pb-32 font-sans text-slate-800">
//       <input type="file" ref={logoInputRef} onChange={(e) => e.target.files[0] && setReceiptImage(URL.createObjectURL(e.target.files[0]))} accept="image/png, image/jpeg" className="hidden" />

//       <div className="flex flex-col items-center pt-8 pb-6">
//         <h1 className="text-xl font-bold mb-4 text-black">New Expense Record</h1>
//         <div className="flex items-center text-sm font-medium">
//           <div className="flex items-center text-purple-700">
//             <span className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs mr-2">1</span>
//             Expense Details
//           </div>
//           <ChevronDown className="w-4 h-4 mx-4 text-slate-400 -rotate-90" />
//           <div className="flex items-center text-slate-400">
//             <span className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs mr-2">2</span>
//             Design & Share (optional)
//           </div>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 sm:p-12 relative">
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center gap-2">
//             {isEditingTitle ? (
//               <div className="flex items-center gap-2">
//                 <input type="text" value={documentTitle} onChange={(e) => setDocumentTitle(e.target.value)} className="text-3xl font-bold text-slate-900 border-b border-purple-600 outline-none text-center bg-transparent" autoFocus />
//                 <button onClick={() => setIsEditingTitle(false)} className="text-green-600 p-1"><Check size={20}/></button>
//               </div>
//             ) : (
//               <>
//                 <h2 className="text-3xl font-bold">{documentTitle}</h2>
//                 <Edit2 className="w-5 h-5 text-slate-400 cursor-pointer hover:text-purple-600" onClick={() => setIsEditingTitle(true)} />
//               </>
//             )}
//           </div>

//           {showSubtitleInput ? (
//             <div className="mt-2 max-w-sm mx-auto flex items-center gap-2">
//               <input type="text" placeholder="Enter document subtitle..." value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-full text-sm border-b border-purple-400 outline-none text-center py-1" autoFocus />
//               <X size={14} className="cursor-pointer text-slate-400 hover:text-red-500" onClick={() => setShowSubtitleInput(false)} />
//             </div>
//           ) : (
//             <button onClick={() => setShowSubtitleInput(true)} className="text-xs text-purple-600 font-medium flex items-center justify-center mx-auto mt-2 hover:underline">
//               <Plus className="w-3 h-3 mr-1" /> {subtitle ? `Subtitle: ${subtitle}` : "Add Subtitle"}
//             </button>
//           )}
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
//           <div className="w-full md:w-1/2 space-y-4">
//             <div className="flex items-center">
//               <label className="w-1/3 text-sm font-medium text-slate-700">Expense No<span className="text-red-500">*</span></label>
//               <input type="text" value={expenseNumber} onChange={(e) => setExpenseNumber(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
//             </div>
//             <div className="flex items-center">
//               <label className="w-1/3 text-sm font-medium text-slate-700">Invoice No</label>
//               <input type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="Enter Vendor Invoice Number" className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
//             </div>
            
//             {/* FIXED: Added Category and Payment Method Inputs */}
//             <div className="flex items-center">
//               <label className="w-1/3 text-sm font-medium text-slate-700">Category<span className="text-red-500">*</span></label>
//               <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500 bg-transparent">
//                 <option value="Office Supplies">Office Supplies</option>
//                 <option value="Software/IT">Software/IT</option>
//                 <option value="Marketing">Marketing</option>
//                 <option value="Travel">Travel</option>
//                 <option value="Utilities">Utilities</option>
//               </select>
//             </div>
//             <div className="flex items-center">
//               <label className="w-1/3 text-sm font-medium text-slate-700">Payment Type<span className="text-red-500">*</span></label>
//               <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500 bg-transparent">
//                 <option value="Bank Transfer">Bank Transfer</option>
//                 <option value="Credit Card">Credit Card</option>
//                 <option value="Cash">Cash</option>
//                 <option value="UPI">UPI</option>
//               </select>
//             </div>
//             {/* End of new inputs */}

//             <div className="flex items-center">
//               <label className="w-1/3 text-sm font-medium text-slate-700">Expense Date<span className="text-red-500">*</span></label>
//               <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
//             </div>
//             <div className="flex items-center">
//               <label className="w-1/3 text-sm font-medium text-slate-700">Due Date</label>
//               <div className="w-2/3 flex items-center border-b border-slate-300 pb-1">
//                 <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full text-sm outline-none bg-transparent" />
//                 <X className="w-4 h-4 text-slate-400 ml-2 cursor-pointer hover:text-red-500" onClick={() => setDueDate('')} />
//               </div>
//             </div>
//           </div>

//           <div 
//             onClick={() => logoInputRef.current.click()}
//             className="w-full md:w-64 h-32 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors relative"
//           >
//             {receiptImage ? (
//               <img src={receiptImage} alt="Receipt Preview" className="w-full h-full object-contain rounded-lg" />
//             ) : (
//               <>
//                 <ImageIcon className="w-6 h-6 mb-2 text-purple-300" />
//                 <span className="text-sm font-medium text-slate-700">Add Receipt/Logo</span>
//               </>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50">
//             <h3 className="font-bold text-slate-800 border-b border-slate-300 border-dashed pb-2 mb-4 inline-block">Billed To <span className="text-xs font-normal text-slate-500">(Your Details)</span></h3>
//             {isEditingStore ? (
//               <div className="space-y-2 bg-white p-3 rounded border border-purple-200">
//                 <input type="text" value={storeDetails.name} onChange={(e) => setStoreDetails({...storeDetails, name: e.target.value})} className="w-full border-b text-sm p-1 outline-none" placeholder="Store/Your Name" />
//                 <input type="text" value={storeDetails.country} onChange={(e) => setStoreDetails({...storeDetails, country: e.target.value})} className="w-full border-b text-sm p-1 outline-none" placeholder="Country" />
//                 <button onClick={() => setIsEditingStore(false)} className="bg-purple-600 text-white text-xs px-3 py-1 rounded">Done</button>
//               </div>
//             ) : (
//               <div className="text-sm text-slate-700 bg-white border border-slate-100 rounded p-3 relative group">
//                 <button onClick={() => setIsEditingStore(true)} className="absolute right-3 top-3 text-purple-600 text-xs font-medium flex items-center hidden group-hover:flex">
//                   <Edit2 className="w-3 h-3 mr-1" /> Edit
//                 </button>
//                 <p className="font-medium mb-1">{storeDetails.name}</p>
//                 <p className="text-slate-500">{storeDetails.country}</p>
//               </div>
//             )}
//           </div>

//           <div className="border border-slate-200 rounded-lg p-5">
//             <h3 className="font-bold text-slate-800 border-b border-slate-300 border-dashed pb-2 mb-4 inline-block">Billed By <span className="text-xs font-normal text-slate-500">(Vendor's Details)</span></h3>
//             {isCreatingInlineVendor ? (
//               <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 space-y-3">
//                 <h4 className="text-xs font-bold text-purple-800">Add New Vendor</h4>
//                 <input type="text" placeholder="Vendor Name*" value={newVendor.name} onChange={(e) => setNewVendor({...newVendor, name: e.target.value})} className="w-full text-sm p-2 bg-white border rounded outline-none" />
//                 <input type="text" placeholder="Vendor GSTIN (optional)" value={newVendor.gstin} onChange={(e) => setNewVendor({...newVendor, gstin: e.target.value})} className="w-full text-sm p-2 bg-white border rounded outline-none" />
//                 <input type="text" placeholder="Address (optional)" value={newVendor.address} onChange={(e) => setNewVendor({...newVendor, address: e.target.value})} className="w-full text-sm p-2 bg-white border rounded outline-none" />
//                 <div className="flex gap-2">
//                   <button onClick={handleInlineVendorCreate} className="bg-purple-600 text-white text-xs px-4 py-2 rounded">Save & Select</button>
//                   <button onClick={() => setIsCreatingInlineVendor(false)} className="text-slate-500 text-xs px-3 py-2">Cancel</button>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <div className="mb-3">
//                   <select 
//                     value={selectedVendorId} 
//                     onChange={(e) => setSelectedVendorId(e.target.value)}
//                     className="w-full border border-purple-200 rounded-lg bg-white p-3 text-sm outline-none text-purple-700 font-medium"
//                   >
//                     <option value="">Select Vendor By Bill</option>
//                     {vendors.map(v => (
//                       <option key={v.id} value={v.id}>{v.name}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 {selectedVendor ? (
//                   <div className="bg-slate-50 p-3 rounded border text-sm text-slate-700">
//                     <p className="font-bold">{selectedVendor.name}</p>
//                     <p className="text-xs text-slate-500">GSTIN: {selectedVendor.gstin || 'N/A'}</p>
//                     <p className="text-xs text-slate-500">{selectedVendor.address}</p>
//                   </div>
//                 ) : (
//                   <div className="border border-dashed border-slate-200 rounded p-6 flex flex-col items-center justify-center text-center">
//                     <button onClick={() => setIsCreatingInlineVendor(true)} className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
//                       <Plus className="w-4 h-4 mr-2" /> Add New Vendor
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>

//         <div className="border border-slate-200 rounded-t-xl overflow-hidden mt-6">
//           <div className="bg-[#7c3aed] text-white text-xs font-bold flex">
//             <div className="w-[26%] p-3 border-r border-purple-500/30">Item / Category</div>
//             <div className="w-[10%] p-3 border-r border-purple-500/30">HSN/SAC</div>
//             <div className="w-[10%] p-3 border-r border-purple-500/30">GST Rate</div>
//             <div className="w-[10%] p-3 border-r border-purple-500/30">Quantity</div>
//             <div className="w-[10%] p-3 border-r border-purple-500/30">Rate</div>
//             <div className="w-[8%] p-3 border-r border-purple-500/30 text-right">Amount</div>
//             <div className="w-[8%] p-3 border-r border-purple-500/30 text-right">CGST</div>
//             <div className="w-[8%] p-3 border-r border-purple-500/30 text-right">SGST</div>
//             <div className="w-[10%] p-3 text-right">Total</div>
//           </div>

//           <div className="divide-y divide-slate-100 bg-white">
//             {totals.processedItems.map((item, index) => {
//               if (item.isGroupHeader) {
//                 return (
//                   <div key={item.id} className="bg-purple-50 p-3 font-bold text-purple-900 text-sm flex justify-between items-center">
//                     <span>Group: {item.groupName}</span>
//                     <X size={14} className="cursor-pointer text-red-400" onClick={() => setItems(items.filter((_, i) => i !== index))} />
//                   </div>
//                 );
//               }

//               return (
//                 <div key={item.id} className="p-4 border-b border-slate-200 group relative">
//                   <div className="absolute right-4 top-2 hidden group-hover:flex items-center gap-2 text-slate-400">
//                     <Copy className="w-4 h-4 cursor-pointer hover:text-slate-600" onClick={() => {
//                       const duplicated = { ...item, id: Date.now() };
//                       const arr = [...items]; arr.splice(index + 1, 0, duplicated); setItems(arr);
//                     }} />
//                     <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} />
//                   </div>
                  
//                   <span className="text-sm font-bold block mb-4">{index + 1}.</span>
                  
//                   <div className="flex gap-4 items-end mb-4">
//                     <div className="w-[26%]">
//                       <input type="text" placeholder="Expense Description" value={item.name} onChange={(e) => handleItemChange(index, 'name', e.target.value)} className="w-full border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
//                     </div>
//                     <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
//                       <span className="text-slate-400 text-xs mr-1">#</span>
//                       <input type="text" value={item.hsn} onChange={(e) => handleItemChange(index, 'hsn', e.target.value)} className="w-full text-sm outline-none focus:border-purple-500" />
//                     </div>
//                     <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
//                       <span className="text-slate-400 text-xs mr-1">%</span>
//                       <select value={item.gst_rate} onChange={(e) => handleItemChange(index, 'gst_rate', e.target.value)} className="w-full text-sm outline-none bg-transparent">
//                         <option value="0">0%</option>
//                         <option value="5">5%</option>
//                         <option value="12">12%</option>
//                         <option value="18">18%</option>
//                         <option value="28">28%</option>
//                       </select>
//                     </div>
//                     <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
//                       <input type="number" min="0.1" step="0.1" value={item.qty} onChange={(e) => handleItemChange(index, 'qty', e.target.value)} className="w-full text-sm outline-none focus:border-purple-500" />
//                     </div>
//                     <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
//                       <span className="text-slate-400 text-xs mr-1">₹</span>
//                       <input type="number" min="0" step="0.01" value={item.rate} onChange={(e) => handleItemChange(index, 'rate', e.target.value)} className="w-full text-sm outline-none focus:border-purple-500" />
//                     </div>
                    
//                     <div className="w-[8%] border-b border-slate-300 pb-1 text-right text-sm">₹{item.amount.toFixed(2)}</div>
//                     <div className="w-[8%] border-b border-slate-300 pb-1 text-right text-sm">₹{item.cgst.toFixed(2)}</div>
//                     <div className="w-[8%] border-b border-slate-300 pb-1 text-right text-sm">₹{item.sgst.toFixed(2)}</div>
//                     <div className="w-[10%] border-b border-slate-300 pb-1 text-right text-sm font-bold">₹{item.total.toFixed(2)}</div>
//                   </div>

//                   <div className="flex flex-col gap-2">
//                     <div className="flex gap-6 text-xs font-medium text-purple-600">
//                       <button onClick={() => {
//                         const updated = [...items]; updated[index].showDesc = !updated[index].showDesc; setItems(updated);
//                       }} className="flex items-center gap-1 hover:underline"><Plus className="w-3 h-3" /> Add Description</button>
//                     </div>
//                     {item.showDesc && (
//                       <textarea placeholder="Detailed notes for this specific line item..." value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} className="w-full text-xs p-2 border rounded border-slate-200 outline-none" rows="2" />
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex gap-4 mt-4">
//           <button onClick={addLineItem} className="flex-1 py-3 border border-dashed border-purple-300 rounded-lg text-purple-600 font-medium text-sm flex justify-center items-center hover:bg-purple-50 transition-colors">
//             <Plus className="w-4 h-4 mr-2" /> Add New Line
//           </button>
//           <button onClick={addNewGroup} className="flex-1 py-3 border border-dashed border-orange-300 rounded-lg text-orange-600 font-medium text-sm flex justify-center items-center hover:bg-orange-50 transition-colors">
//             <Plus className="w-4 h-4 mr-2" /> Add New Group
//           </button>
//         </div>

//         <div className="flex justify-end mt-8">
//           <div className="w-full md:w-96 bg-[#f8f9fa] rounded-lg p-5">
//             <div className="space-y-3 text-sm text-slate-600 border-b border-slate-200 pb-4 mb-4">
//               <div className="flex justify-between"><span className="font-medium text-slate-800">Amount</span><span>₹{totals.subtotal.toFixed(2)}</span></div>
//               <div className="flex justify-between items-center">
//                 <span className="flex items-center gap-2">Total GST</span>
//                 <span className="text-slate-800 font-medium">₹{totals.totalTax.toFixed(2)}</span>
//               </div>
//             </div>
//             <div className="flex justify-between items-center border-t border-slate-300 border-dashed pt-4 mb-4">
//               <span className="font-bold text-lg text-slate-900 border-b border-slate-400 border-dashed pb-0.5">Total <span className="text-sm font-normal text-slate-500">(INR)</span></span>
//               <span className="font-bold text-lg text-slate-900">₹{totals.grandTotal.toFixed(2)}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 px-8 z-50 flex gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] justify-end">
//         <button onClick={() => navigate('/expenses')} className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm px-6 py-2.5 rounded-lg transition-colors mr-auto">
//           Cancel
//         </button>
//         <button 
//           onClick={handleSaveExpense}
//           disabled={isSubmitting}
//           className="bg-[#e80071] hover:bg-[#c90062] text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors flex items-center disabled:opacity-50"
//         >
//           {isSubmitting ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
//           Save & Continue
//         </button>
//       </div> 
//     </div>
//   );
// };

// export default CreateExpense;

import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, Plus, Settings, FileText, Paperclip, Info, 
  ChevronDown, Copy, X, Edit2, Image as ImageIcon, Loader2, Check 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReceiptScanner from '../components/ReceiptScanner';

const CreateExpense = () => {
  const navigate = useNavigate();
  const logoInputRef = useRef(null);

  // --- Document Meta State ---
  const [expenseNumber, setExpenseNumber] = useState(`EXP-${Math.floor(10000 + Math.random() * 90000)}`);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [poNumber, setPoNumber] = useState('');
  const [purchaseDate, setPurchaseDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');
  
  // New Missing Fields required by Expenses list
  const [category, setCategory] = useState('Office Supplies');
  const [paymentMethod, setPaymentMethod] = useState('Bank Transfer');
  
  // Title & Subtitle States
  const [documentTitle, setDocumentTitle] = useState('Expense');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [subtitle, setSubtitle] = useState('');
  const [showSubtitleInput, setShowSubtitleInput] = useState(false);

  // Logo / Receipt State
  const [receiptImage, setReceiptImage] = useState(null);

  // Custom Fields State
  const [customFields, setCustomFields] = useState([]);
  const addCustomField = () => setCustomFields([...customFields, { key: '', value: '' }]);

  // --- Vendor & Store State ---
  const [vendors, setVendors] = useState([]);
  const [selectedVendorId, setSelectedVendorId] = useState('');
  const [isCreatingInlineVendor, setIsCreatingInlineVendor] = useState(false);
  const [newVendor, setNewVendor] = useState({ name: '', gstin: '', address: '' });
  const [storeDetails, setStoreDetails] = useState({ name: 'Abhishek Ghadmode', country: 'India' });
  const [isEditingStore, setIsEditingStore] = useState(false);

  // --- Line Items & Groups State ---
  const [items, setItems] = useState([
    { 
      id: Date.now(), 
      name: '', 
      hsn: '', 
      gst_rate: 18, 
      qty: 1, 
      rate: 0, 
      description: '', 
      image: null 
    }
  ]);

  // --- Recurring Expense State ---
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringCycle, setRecurringCycle] = useState('monthly');

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch Vendors on Mount
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:8000/api/vendors/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setVendors(data);
        }
      } catch (err) {
        console.error("Could not fetch vendors, using mock/inline creator.");
      }
    };
    fetchVendors();
  }, []);

  // --- AI EXTRACTION HANDLER ---
  const handleAIExtraction = (data) => {
    if (data.date) setPurchaseDate(data.date);
    
    if (data.vendor_name) {
      const existingVendor = vendors.find(v => v.name.toLowerCase() === data.vendor_name.toLowerCase());
      if (existingVendor) {
        setSelectedVendorId(existingVendor.id.toString());
      } else {
        setNewVendor(prev => ({ ...prev, name: data.vendor_name }));
        setIsCreatingInlineVendor(true);
      }
    }

    if (data.items && data.items.length > 0) {
      const extractedItems = data.items.map((item, index) => ({
        id: Date.now() + index,
        name: item.description || '',
        hsn: '',
        gst_rate: 18, // Default
        qty: parseFloat(item.quantity) || 1,
        rate: parseFloat(item.rate) || 0,
        description: '',
        image: null
      }));
      setItems(extractedItems);
    }
  };

  // --- Mathematical Calculation Engine (Per Indian GST rules) ---
  const calculateTotals = () => {
    let subtotal = 0;
    let totalTax = 0;

    const processedItems = items.map(item => {
      const qty = parseFloat(item.qty) || 0;
      const rate = parseFloat(item.rate) || 0;
      const amount = qty * rate;
      
      const gstRate = parseFloat(item.gst_rate) || 0;
      const taxAmount = (amount * gstRate) / 100;
      
      const cgst = taxAmount / 2;
      const sgst = taxAmount / 2;
      const total = amount + taxAmount;

      subtotal += amount;
      totalTax += taxAmount;

      return { ...item, amount, cgst, sgst, total };
    });

    return {
      processedItems,
      subtotal,
      totalTax,
      cgstTotal: totalTax / 2,
      sgstTotal: totalTax / 2,
      grandTotal: subtotal + totalTax
    };
  };

  const totals = calculateTotals();

  // --- Handlers ---
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = field === 'name' || field === 'hsn' || field === 'description' 
      ? value 
      : parseFloat(value) || 0;
    setItems(newItems);
  };

  const addLineItem = () => setItems([...items, { id: Date.now(), name: '', hsn: '', gst_rate: 18, qty: 1, rate: 0, description: '', image: null }]);
  const addNewGroup = () => setItems([...items, { id: Date.now(), isGroupHeader: true, groupName: "New Group Category" }]);

  const handleInlineVendorCreate = async () => {
    if (!newVendor.name) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:8000/api/vendors/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(newVendor)
      });
      if (!res.ok) throw new Error("Failed to create vendor");
      const created = await res.json();
      setVendors([...vendors, created]);
      setSelectedVendorId(created.id.toString());
      setIsCreatingInlineVendor(false);
    } catch (err) {
      const mockVendor = { id: Date.now(), ...newVendor };
      setVendors([...vendors, mockVendor]);
      setSelectedVendorId(mockVendor.id.toString());
      setIsCreatingInlineVendor(false);
    }
  };

  const handleSaveExpense = async () => {
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('token');
      
      const payload = {
        expense_number: expenseNumber,
        invoice_number: invoiceNumber,
        po_number: poNumber,
        purchase_date: new Date(purchaseDate).toISOString(),
        due_date: dueDate ? new Date(dueDate).toISOString() : null,
        document_title: documentTitle,
        subtitle: subtitle,
        vendor_id: selectedVendorId ? parseInt(selectedVendorId) : null,
        category: category,
        payment_method: paymentMethod,
        subtotal: totals.subtotal,
        tax_total: totals.totalTax,
        cgst_total: totals.cgstTotal,
        sgst_total: totals.sgstTotal,
        grand_total: totals.grandTotal,
        items: totals.processedItems,
        is_recurring: isRecurring,
        recurring_cycle: isRecurring ? recurringCycle : null
      };

      const res = await fetch('http://localhost:8000/api/expenses/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || 'Failed to save expense');
      }

      navigate('/expenses');
      
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedVendor = vendors.find(v => v.id.toString() === selectedVendorId);

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-32 font-sans text-slate-800">
      <input type="file" ref={logoInputRef} onChange={(e) => e.target.files[0] && setReceiptImage(URL.createObjectURL(e.target.files[0]))} accept="image/png, image/jpeg" className="hidden" />

      <div className="flex flex-col items-center pt-8 pb-6">
        <h1 className="text-xl font-bold mb-4 text-black">New Expense Record</h1>
        <div className="flex items-center text-sm font-medium">
          <div className="flex items-center text-purple-700">
            <span className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs mr-2">1</span>
            Expense Details
          </div>
          <ChevronDown className="w-4 h-4 mx-4 text-slate-400 -rotate-90" />
          <div className="flex items-center text-slate-400">
            <span className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs mr-2">2</span>
            Design & Share (optional)
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 sm:p-12 relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            {isEditingTitle ? (
              <div className="flex items-center gap-2">
                <input type="text" value={documentTitle} onChange={(e) => setDocumentTitle(e.target.value)} className="text-3xl font-bold text-slate-900 border-b border-purple-600 outline-none text-center bg-transparent" autoFocus />
                <button onClick={() => setIsEditingTitle(false)} className="text-green-600 p-1"><Check size={20}/></button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold">{documentTitle}</h2>
                <Edit2 className="w-5 h-5 text-slate-400 cursor-pointer hover:text-purple-600" onClick={() => setIsEditingTitle(true)} />
              </>
            )}
          </div>

          {showSubtitleInput ? (
            <div className="mt-2 max-w-sm mx-auto flex items-center gap-2">
              <input type="text" placeholder="Enter document subtitle..." value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-full text-sm border-b border-purple-400 outline-none text-center py-1" autoFocus />
              <X size={14} className="cursor-pointer text-slate-400 hover:text-red-500" onClick={() => setShowSubtitleInput(false)} />
            </div>
          ) : (
            <button onClick={() => setShowSubtitleInput(true)} className="text-xs text-purple-600 font-medium flex items-center justify-center mx-auto mt-2 hover:underline">
              <Plus className="w-3 h-3 mr-1" /> {subtitle ? `Subtitle: ${subtitle}` : "Add Subtitle"}
            </button>
          )}
        </div>

        {/* AI Receipt Scanner Insertion */}
        <ReceiptScanner onDataExtracted={handleAIExtraction} />

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="flex items-center">
              <label className="w-1/3 text-sm font-medium text-slate-700">Expense No<span className="text-red-500">*</span></label>
              <input type="text" value={expenseNumber} onChange={(e) => setExpenseNumber(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-sm font-medium text-slate-700">Invoice No</label>
              <input type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="Enter Vendor Invoice Number" className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
            </div>
            
            <div className="flex items-center">
              <label className="w-1/3 text-sm font-medium text-slate-700">Category<span className="text-red-500">*</span></label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500 bg-transparent">
                <option value="Office Supplies">Office Supplies</option>
                <option value="Software/IT">Software/IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Travel">Travel</option>
                <option value="Utilities">Utilities</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-sm font-medium text-slate-700">Payment Type<span className="text-red-500">*</span></label>
              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500 bg-transparent">
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="w-1/3 text-sm font-medium text-slate-700">Expense Date<span className="text-red-500">*</span></label>
              <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} className="w-2/3 border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-sm font-medium text-slate-700">Due Date</label>
              <div className="w-2/3 flex items-center border-b border-slate-300 pb-1">
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full text-sm outline-none bg-transparent" />
                <X className="w-4 h-4 text-slate-400 ml-2 cursor-pointer hover:text-red-500" onClick={() => setDueDate('')} />
              </div>
            </div>
          </div>

          <div 
            onClick={() => logoInputRef.current.click()}
            className="w-full md:w-64 h-32 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors relative"
          >
            {receiptImage ? (
              <img src={receiptImage} alt="Receipt Preview" className="w-full h-full object-contain rounded-lg" />
            ) : (
              <>
                <ImageIcon className="w-6 h-6 mb-2 text-purple-300" />
                <span className="text-sm font-medium text-slate-700">Add Receipt/Logo</span>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 border-b border-slate-300 border-dashed pb-2 mb-4 inline-block">Billed To <span className="text-xs font-normal text-slate-500">(Your Details)</span></h3>
            {isEditingStore ? (
              <div className="space-y-2 bg-white p-3 rounded border border-purple-200">
                <input type="text" value={storeDetails.name} onChange={(e) => setStoreDetails({...storeDetails, name: e.target.value})} className="w-full border-b text-sm p-1 outline-none" placeholder="Store/Your Name" />
                <input type="text" value={storeDetails.country} onChange={(e) => setStoreDetails({...storeDetails, country: e.target.value})} className="w-full border-b text-sm p-1 outline-none" placeholder="Country" />
                <button onClick={() => setIsEditingStore(false)} className="bg-purple-600 text-white text-xs px-3 py-1 rounded">Done</button>
              </div>
            ) : (
              <div className="text-sm text-slate-700 bg-white border border-slate-100 rounded p-3 relative group">
                <button onClick={() => setIsEditingStore(true)} className="absolute right-3 top-3 text-purple-600 text-xs font-medium flex items-center hidden group-hover:flex">
                  <Edit2 className="w-3 h-3 mr-1" /> Edit
                </button>
                <p className="font-medium mb-1">{storeDetails.name}</p>
                <p className="text-slate-500">{storeDetails.country}</p>
              </div>
            )}
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 border-b border-slate-300 border-dashed pb-2 mb-4 inline-block">Billed By <span className="text-xs font-normal text-slate-500">(Vendor's Details)</span></h3>
            {isCreatingInlineVendor ? (
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 space-y-3">
                <h4 className="text-xs font-bold text-purple-800">Add New Vendor</h4>
                <input type="text" placeholder="Vendor Name*" value={newVendor.name} onChange={(e) => setNewVendor({...newVendor, name: e.target.value})} className="w-full text-sm p-2 bg-white border rounded outline-none" />
                <input type="text" placeholder="Vendor GSTIN (optional)" value={newVendor.gstin} onChange={(e) => setNewVendor({...newVendor, gstin: e.target.value})} className="w-full text-sm p-2 bg-white border rounded outline-none" />
                <input type="text" placeholder="Address (optional)" value={newVendor.address} onChange={(e) => setNewVendor({...newVendor, address: e.target.value})} className="w-full text-sm p-2 bg-white border rounded outline-none" />
                <div className="flex gap-2">
                  <button onClick={handleInlineVendorCreate} className="bg-purple-600 text-white text-xs px-4 py-2 rounded">Save & Select</button>
                  <button onClick={() => setIsCreatingInlineVendor(false)} className="text-slate-500 text-xs px-3 py-2">Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-3">
                  <select 
                    value={selectedVendorId} 
                    onChange={(e) => setSelectedVendorId(e.target.value)}
                    className="w-full border border-purple-200 rounded-lg bg-white p-3 text-sm outline-none text-purple-700 font-medium"
                  >
                    <option value="">Select Vendor By Bill</option>
                    {vendors.map(v => (
                      <option key={v.id} value={v.id}>{v.name}</option>
                    ))}
                  </select>
                </div>
                
                {selectedVendor ? (
                  <div className="bg-slate-50 p-3 rounded border text-sm text-slate-700">
                    <p className="font-bold">{selectedVendor.name}</p>
                    <p className="text-xs text-slate-500">GSTIN: {selectedVendor.gstin || 'N/A'}</p>
                    <p className="text-xs text-slate-500">{selectedVendor.address}</p>
                  </div>
                ) : (
                  <div className="border border-dashed border-slate-200 rounded p-6 flex flex-col items-center justify-center text-center">
                    <button onClick={() => setIsCreatingInlineVendor(true)} className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
                      <Plus className="w-4 h-4 mr-2" /> Add New Vendor
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="border border-slate-200 rounded-t-xl overflow-hidden mt-6">
          <div className="bg-[#7c3aed] text-white text-xs font-bold flex">
            <div className="w-[26%] p-3 border-r border-purple-500/30">Item / Category</div>
            <div className="w-[10%] p-3 border-r border-purple-500/30">HSN/SAC</div>
            <div className="w-[10%] p-3 border-r border-purple-500/30">GST Rate</div>
            <div className="w-[10%] p-3 border-r border-purple-500/30">Quantity</div>
            <div className="w-[10%] p-3 border-r border-purple-500/30">Rate</div>
            <div className="w-[8%] p-3 border-r border-purple-500/30 text-right">Amount</div>
            <div className="w-[8%] p-3 border-r border-purple-500/30 text-right">CGST</div>
            <div className="w-[8%] p-3 border-r border-purple-500/30 text-right">SGST</div>
            <div className="w-[10%] p-3 text-right">Total</div>
          </div>

          <div className="divide-y divide-slate-100 bg-white">
            {totals.processedItems.map((item, index) => {
              if (item.isGroupHeader) {
                return (
                  <div key={item.id} className="bg-purple-50 p-3 font-bold text-purple-900 text-sm flex justify-between items-center">
                    <span>Group: {item.groupName}</span>
                    <X size={14} className="cursor-pointer text-red-400" onClick={() => setItems(items.filter((_, i) => i !== index))} />
                  </div>
                );
              }

              return (
                <div key={item.id} className="p-4 border-b border-slate-200 group relative">
                  <div className="absolute right-4 top-2 hidden group-hover:flex items-center gap-2 text-slate-400">
                    <Copy className="w-4 h-4 cursor-pointer hover:text-slate-600" onClick={() => {
                      const duplicated = { ...item, id: Date.now() };
                      const arr = [...items]; arr.splice(index + 1, 0, duplicated); setItems(arr);
                    }} />
                    <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => items.length > 1 && setItems(items.filter((_, i) => i !== index))} />
                  </div>
                  
                  <span className="text-sm font-bold block mb-4">{index + 1}.</span>
                  
                  <div className="flex gap-4 items-end mb-4">
                    <div className="w-[26%]">
                      <input type="text" placeholder="Expense Description" value={item.name} onChange={(e) => handleItemChange(index, 'name', e.target.value)} className="w-full border-b border-slate-300 pb-1 text-sm outline-none focus:border-purple-500" />
                    </div>
                    <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
                      <span className="text-slate-400 text-xs mr-1">#</span>
                      <input type="text" value={item.hsn} onChange={(e) => handleItemChange(index, 'hsn', e.target.value)} className="w-full text-sm outline-none focus:border-purple-500" />
                    </div>
                    <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
                      <span className="text-slate-400 text-xs mr-1">%</span>
                      <select value={item.gst_rate} onChange={(e) => handleItemChange(index, 'gst_rate', e.target.value)} className="w-full text-sm outline-none bg-transparent">
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                      </select>
                    </div>
                    <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
                      <input type="number" min="0.1" step="0.1" value={item.qty} onChange={(e) => handleItemChange(index, 'qty', e.target.value)} className="w-full text-sm outline-none focus:border-purple-500" />
                    </div>
                    <div className="w-[10%] flex items-center border-b border-slate-300 pb-1">
                      <span className="text-slate-400 text-xs mr-1">₹</span>
                      <input type="number" min="0" step="0.01" value={item.rate} onChange={(e) => handleItemChange(index, 'rate', e.target.value)} className="w-full text-sm outline-none focus:border-purple-500" />
                    </div>
                    
                    <div className="w-[8%] border-b border-slate-300 pb-1 text-right text-sm">₹{item.amount.toFixed(2)}</div>
                    <div className="w-[8%] border-b border-slate-300 pb-1 text-right text-sm">₹{item.cgst.toFixed(2)}</div>
                    <div className="w-[8%] border-b border-slate-300 pb-1 text-right text-sm">₹{item.sgst.toFixed(2)}</div>
                    <div className="w-[10%] border-b border-slate-300 pb-1 text-right text-sm font-bold">₹{item.total.toFixed(2)}</div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-6 text-xs font-medium text-purple-600">
                      <button onClick={() => {
                        const updated = [...items]; updated[index].showDesc = !updated[index].showDesc; setItems(updated);
                      }} className="flex items-center gap-1 hover:underline"><Plus className="w-3 h-3" /> Add Description</button>
                    </div>
                    {item.showDesc && (
                      <textarea placeholder="Detailed notes for this specific line item..." value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} className="w-full text-xs p-2 border rounded border-slate-200 outline-none" rows="2" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button onClick={addLineItem} className="flex-1 py-3 border border-dashed border-purple-300 rounded-lg text-purple-600 font-medium text-sm flex justify-center items-center hover:bg-purple-50 transition-colors">
            <Plus className="w-4 h-4 mr-2" /> Add New Line
          </button>
          <button onClick={addNewGroup} className="flex-1 py-3 border border-dashed border-orange-300 rounded-lg text-orange-600 font-medium text-sm flex justify-center items-center hover:bg-orange-50 transition-colors">
            <Plus className="w-4 h-4 mr-2" /> Add New Group
          </button>
        </div>

        <div className="flex justify-end mt-8">
          <div className="w-full md:w-96 bg-[#f8f9fa] rounded-lg p-5">
            <div className="space-y-3 text-sm text-slate-600 border-b border-slate-200 pb-4 mb-4">
              <div className="flex justify-between"><span className="font-medium text-slate-800">Amount</span><span>₹{totals.subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">Total GST</span>
                <span className="text-slate-800 font-medium">₹{totals.totalTax.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-slate-300 border-dashed pt-4 mb-4">
              <span className="font-bold text-lg text-slate-900 border-b border-slate-400 border-dashed pb-0.5">Total <span className="text-sm font-normal text-slate-500">(INR)</span></span>
              <span className="font-bold text-lg text-slate-900">₹{totals.grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 px-8 z-50 flex gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] justify-end">
        <button onClick={() => navigate('/expenses')} className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm px-6 py-2.5 rounded-lg transition-colors mr-auto">
          Cancel
        </button>
        <button 
          onClick={handleSaveExpense}
          disabled={isSubmitting}
          className="bg-[#e80071] hover:bg-[#c90062] text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors flex items-center disabled:opacity-50"
        >
          {isSubmitting ? <Loader2 className="animate-spin mr-2" size={16} /> : null}
          Save & Continue
        </button>
      </div> 
    </div>
  );
};

export default CreateExpense;