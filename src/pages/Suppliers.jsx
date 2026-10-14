// import React, { useState } from 'react';
// import { Search, Plus, MoreVertical, Calendar, Trash2 } from 'lucide-react';

// const Suppliers = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Mock Supplier Data
//   const suppliers = [
//     { id: 1, initial: 'RB', bg: 'bg-red-100 text-red-600', name: 'Rajesh Beverages Pvt.Ltd.', contact: 'Rajesh Kumar', phone: '+91 11566788009', products: ['soft drinks', 'Juices', 'Water'] },
//     { id: 2, initial: 'SD', bg: 'bg-purple-100 text-purple-600', name: 'Shiv Distributors', contact: 'Suresh Yadav', phone: '+91 55555788009', products: ['Atta', 'Rice', 'Pulses'], extra: '+2' },
//     { id: 3, initial: 'GD', bg: 'bg-orange-100 text-orange-600', name: 'Good Morning Dairy', contact: 'Meena Patel', phone: '+91 1152288009', products: ['Milk', 'Curd', 'Paneer', 'Butter'] },
//     { id: 4, initial: 'SS', bg: 'bg-blue-100 text-blue-600', name: 'Shakti Kirana Suppliers', contact: 'Vikram Singh', phone: '+91 4444788009', products: ['Oil', 'Spices', 'Masala'], extra: '+2' },
//     { id: 5, initial: 'A1S', bg: 'bg-pink-100 text-pink-600', name: 'A1 Cleaning Solutions', contact: 'Anil Chauhan', phone: '+91 11111788009', products: ['Detergents', 'Soap', 'Cleaners'] },
//   ];

//   // Mock PO Products Data
//   const poProducts = [
//     { id: 1, name: 'Tata Salt', unit: 'Packet', stock: 22, price: 12.50, qty: 20, amount: 250.00 },
//     { id: 2, name: 'Aashirvad Atta', unit: 'Packet', stock: 18, price: 32.00, qty: 10, amount: 320.00 },
//     { id: 3, name: 'Saffola Gold Oil', unit: 'Bottle', stock: 15, price: 145.00, qty: 6, amount: 870.00 },
//     { id: 4, name: 'Maggi 2-Min Noodles', unit: 'Packet', stock: 50, price: 14.00, qty: 14, amount: 420.00 },
//   ];

//   return (
//     <div className="w-full pb-10">
      
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-900">Suppliers</h1>
//           <p className="text-sm text-slate-500 mt-1">View and manage your product suppliers</p>
//         </div>
        
//         <div className="flex gap-4 w-full sm:w-auto">
//           <div className="relative flex-1 sm:w-64">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search className="h-4 w-4 text-slate-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search Sulpliers"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="block w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm outline-none shadow-sm"
//             />
//           </div>
//           <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm whitespace-nowrap">
//             <Plus className="w-4 h-4 mr-2" />
//             Add Supplier
//           </button>
//         </div>
//       </div>

//       {/* Top Table: Supplier Directory */}
//       <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
//               <tr>
//                 <th className="px-6 py-4">Supplier Name</th>
//                 <th className="px-6 py-4">Contact Person</th>
//                 <th className="px-6 py-4">Phone</th>
//                 <th className="px-6 py-4">Product Supplied</th>
//                 <th className="px-6 py-4 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200">
//               {suppliers.map((supplier) => (
//                 <tr key={supplier.id} className="hover:bg-slate-50/50 transition-colors">
//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs ${supplier.bg}`}>
//                       {supplier.initial}
//                     </div>
//                     <span className="font-medium text-slate-900">{supplier.name}</span>
//                   </td>
//                   <td className="px-6 py-4 text-slate-600">{supplier.contact}</td>
//                   <td className="px-6 py-4 text-slate-600 font-medium">{supplier.phone}</td>
//                   <td className="px-6 py-4">
//                     <div className="flex flex-wrap gap-2">
//                       {supplier.products.map((product, idx) => (
//                         <span key={idx} className="px-2 py-1 border border-slate-200 rounded text-xs text-slate-600 bg-white shadow-sm">
//                           {product}
//                         </span>
//                       ))}
//                       {supplier.extra && (
//                         <span className="px-2 py-1 border border-slate-200 rounded text-xs text-slate-500 bg-slate-50 shadow-sm">
//                           {supplier.extra}
//                         </span>
//                       )}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-center">
//                     <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
//                       <MoreVertical className="w-5 h-5" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="p-4 border-t border-slate-200">
//           <span className="text-sm text-slate-500">Showing 1 to 5 of 12 suppliers</span>
//         </div>
//       </div>

//       {/* Bottom Section: Create Purchase Order */}
//       <div className="mb-4">
//         <h2 className="text-xl font-bold text-slate-900">Create Purchase Order</h2>
//         <p className="text-sm text-slate-500 mt-1">Place and order with your supplier</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
//         {/* Panel 1: Supplier & Order Details (Span 3) */}
//         <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-5 shadow-sm h-fit">
//           <h3 className="font-bold text-slate-900 mb-4 text-sm">1. Supplier & Order Details</h3>
          
//           <div className="space-y-4">
//             <div>
//               <label className="block text-xs font-semibold text-slate-700 mb-1">Supplier <span className="text-red-500">*</span></label>
//               <input type="text" defaultValue="Shiv Distributora" className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none" />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Person <span className="text-red-500">*</span></label>
//               <input type="text" defaultValue="Suresh Yadav" className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none" />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
//               <input type="text" defaultValue="+91 55555788009" className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none" />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-700 mb-1">Expected Delivery Date <span className="text-red-500">*</span></label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Calendar className="h-4 w-4 text-slate-400" />
//                 </div>
//                 <input type="text" defaultValue="28 July 2026" className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" />
//               </div>
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-700 mb-1">Reference/ Notes (Optional)</label>
//               <textarea placeholder="eg. Monthly stock replenishment" rows={3} className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none resize-none"></textarea>
//             </div>
//           </div>
//         </div>

//         {/* Panel 2: Products to order (Span 6) */}
//         <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-0 shadow-sm h-fit overflow-hidden">
//           <div className="p-5 border-b border-slate-200">
//             <h3 className="font-bold text-slate-900 text-sm">2. Products to order</h3>
//           </div>
          
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm text-left">
//               <thead className="text-slate-700 font-semibold border-b border-slate-200">
//                 <tr>
//                   <th className="px-5 py-4">Products</th>
//                   <th className="px-2 py-4">Units</th>
//                   <th className="px-2 py-4 text-center">Available Stock</th>
//                   <th className="px-2 py-4 text-right">Price</th>
//                   <th className="px-4 py-4 text-center">Qty</th>
//                   <th className="px-4 py-4 text-right">Amount</th>
//                   <th className="px-4 py-4"></th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100">
//                 {poProducts.map((prod) => (
//                   <tr key={prod.id}>
//                     <td className="px-5 py-4 font-medium text-slate-900">{prod.name}</td>
//                     <td className="px-2 py-4 text-slate-600">{prod.unit}</td>
//                     <td className="px-2 py-4 text-center text-slate-600">{prod.stock}</td>
//                     <td className="px-2 py-4 text-right text-slate-600">{prod.price.toFixed(2)}</td>
//                     <td className="px-4 py-4 text-center">
//                       <input type="number" defaultValue={prod.qty} className="w-14 border border-slate-300 rounded p-1 text-center text-sm outline-none focus:border-blue-500" />
//                     </td>
//                     <td className="px-4 py-4 text-right font-medium text-slate-900">{prod.amount.toFixed(2)}</td>
//                     <td className="px-4 py-4 text-center">
//                       <button className="text-red-500 hover:text-red-700 transition-colors">
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
//           <div className="p-4 border-t border-slate-200">
//             <button className="text-blue-600 text-sm font-medium flex items-center hover:underline">
//               <Plus className="w-4 h-4 mr-1" /> Add Another Product
//             </button>
//           </div>
//         </div>

//         {/* Panel 3: Order Summary (Span 3) */}
//         <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-5 shadow-sm h-fit">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="font-bold text-slate-900 text-sm">Order Summary</h3>
//             <button className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded flex items-center hover:bg-blue-200 transition-colors">
//               <Plus className="w-3 h-3 mr-1" /> Add Product
//             </button>
//           </div>

//           <div className="space-y-4 text-sm mb-6">
//             <div className="flex justify-between text-slate-600">
//               <span>Subtotal (4 items)</span>
//               <span className="font-medium text-slate-900">₹1,860.00</span>
//             </div>
//             <div className="flex justify-between items-center text-slate-600">
//               <span>Tax (GST 5%)</span>
//               <span className="font-medium border border-slate-200 rounded px-2 py-0.5 text-slate-900">₹0.00</span>
//             </div>
//             <div className="flex justify-between text-slate-600">
//               <span>Discount</span>
//               <span className="font-medium text-slate-900">₹93.00</span>
//             </div>
//           </div>

//           <div className="border-t border-slate-200 pt-4 mb-8">
//             <div className="flex justify-between items-center font-bold">
//               <span className="text-slate-900">Total Amount</span>
//               <span className="text-blue-600 text-lg">₹1,953.00</span>
//             </div>
//           </div>

//           <p className="text-[10px] text-slate-400 text-center">Amounts are inclusive of applicable taxes</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Suppliers;


import React, { useState, useEffect } from 'react';
import { Search, Plus, MoreVertical, Calendar, Trash2, CheckCircle2, Loader2 } from 'lucide-react';

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Form State for Purchase Order
  const [supplierName, setSupplierName] = useState('Shiv Distributors');
  const [contactPerson, setContactPerson] = useState('Suresh Yadav');
  const [phone, setPhone] = useState('+91 55555788009');
  const [expectedDate, setExpectedDate] = useState('28 July 2026');
  const [notes, setNotes] = useState('');

  // Interactive PO Items State
  const [poProducts, setPoProducts] = useState([
    { id: 1, name: 'Tata Salt', unit: 'Packet', stock: 22, price: 12.50, qty: 20 },
    { id: 2, name: 'Aashirvad Atta', unit: 'Packet', stock: 18, price: 32.00, qty: 10 },
    { id: 3, name: 'Saffola Gold Oil', unit: 'Bottle', stock: 15, price: 145.00, qty: 6 },
    { id: 4, name: 'Maggi 2-Min Noodles', unit: 'Packet', stock: 50, price: 14.00, qty: 14 },
  ]);

  const [discountPct, setDiscountPct] = useState(5); // 5% discount simulation
  const [taxPct, setTaxPct] = useState(5);         // 5% GST

  // Fetch Suppliers on mount
  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:8000/api/suppliers', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setSuppliers(data);
        }
      } catch (err) {
        console.error('Failed to load suppliers', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSuppliers();
  }, []);

  // Handle Qty change and calculate row amount
  const handleQtyChange = (id, newQty) => {
    setPoProducts(poProducts.map(p => {
      if (p.id === id) {
        const qty = Math.max(1, parseInt(newQty) || 0);
        return { ...p, qty };
      }
      return p;
    }));
  };

  const handleRemoveItem = (id) => {
    setPoProducts(poProducts.filter(p => p.id !== id));
  };

  const handleAddProductRow = () => {
    const newItem = {
      id: Date.now(),
      name: 'New Stock Item',
      unit: 'Units',
      stock: 10,
      price: 50.00,
      qty: 5
    };
    setPoProducts([...poProducts, newItem]);
  };

  // Calculations
  const subtotal = poProducts.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const taxAmount = (subtotal * taxPct) / 100;
  const discountAmount = (subtotal * discountPct) / 100;
  const grandTotal = subtotal + taxAmount - discountAmount;

  // Submit Purchase Order to Backend
  const handleSavePurchaseOrder = async () => {
    setIsSubmitting(true);
    setSuccessMessage('');
    try {
      const token = localStorage.getItem('token');
      const payload = {
        supplier_name: supplierName,
        contact_person: contactPerson,
        phone: phone,
        expected_date: expectedDate,
        notes: notes,
        subtotal,
        tax_total: taxAmount,
        discount_total: discountAmount,
        grand_total: grandTotal,
        items: poProducts.map(p => ({
          name: p.name,
          unit: p.unit,
          stock: p.stock,
          price: p.price,
          qty: p.qty,
          amount: p.price * p.qty
        }))
      };

      const res = await fetch('http://localhost:8000/api/purchase-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSuccessMessage('Purchase Order successfully created & sent!');
        setTimeout(() => setSuccessMessage(''), 4000);
      }
    } catch (err) {
      console.error('Error saving PO', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredSuppliers = suppliers.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full pb-10">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Suppliers</h1>
          <p className="text-sm text-slate-500 mt-1">View and manage your product suppliers</p>
        </div>
        
        <div className="flex gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search Suppliers"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm outline-none shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm whitespace-nowrap">
            <Plus className="w-4 h-4 mr-2" />
            Add Supplier
          </button>
        </div>
      </div>

      {successMessage && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2 shadow-sm text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          {successMessage}
        </div>
      )}

      {/* Top Table: Supplier Directory */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Supplier Name</th>
                <th className="px-6 py-4">Contact Person</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Product Supplied</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-400">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto text-blue-600 mb-2" />
                    Loading suppliers...
                  </td>
                </tr>
              ) : filteredSuppliers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-400">No suppliers found.</td>
                </tr>
              ) : (
                filteredSuppliers.map((supplier) => (
                  <tr key={supplier.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs ${supplier.bg}`}>
                        {supplier.initial}
                      </div>
                      <span className="font-medium text-slate-900">{supplier.name}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{supplier.contact}</td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{supplier.phone}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {supplier.products.map((product, idx) => (
                          <span key={idx} className="px-2 py-1 border border-slate-200 rounded text-xs text-slate-600 bg-white shadow-sm">
                            {product}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-200">
          <span className="text-sm text-slate-500">Showing {filteredSuppliers.length} suppliers</span>
        </div>
      </div>

      {/* Bottom Section: Create Purchase Order */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-slate-900">Create Purchase Order</h2>
        <p className="text-sm text-slate-500 mt-1">Place an order with your supplier</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Panel 1: Supplier & Order Details (Span 3) */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-5 shadow-sm h-fit">
          <h3 className="font-bold text-slate-900 mb-4 text-sm">1. Supplier & Order Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Supplier <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={supplierName} 
                onChange={(e) => setSupplierName(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Person <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={contactPerson} 
                onChange={(e) => setContactPerson(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Expected Delivery Date <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-4 w-4 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  value={expectedDate} 
                  onChange={(e) => setExpectedDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" 
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Reference/ Notes (Optional)</label>
              <textarea 
                placeholder="eg. Monthly stock replenishment" 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3} 
                className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Panel 2: Products to order (Span 6) */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-0 shadow-sm h-fit overflow-hidden">
          <div className="p-5 border-b border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm">2. Products to order</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-slate-700 font-semibold border-b border-slate-200 bg-slate-50/50">
                <tr>
                  <th className="px-5 py-3">Products</th>
                  <th className="px-2 py-3">Units</th>
                  <th className="px-2 py-3 text-center">Stock</th>
                  <th className="px-2 py-3 text-right">Price</th>
                  <th className="px-4 py-3 text-center">Qty</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {poProducts.map((prod) => {
                  const lineAmount = prod.price * prod.qty;
                  return (
                    <tr key={prod.id} className="hover:bg-slate-50/50">
                      <td className="px-5 py-3 font-medium text-slate-900">{prod.name}</td>
                      <td className="px-2 py-3 text-slate-600 text-xs">{prod.unit}</td>
                      <td className="px-2 py-3 text-center text-slate-600 text-xs">{prod.stock}</td>
                      <td className="px-2 py-3 text-right text-slate-600 text-xs">₹{prod.price.toFixed(2)}</td>
                      <td className="px-4 py-3 text-center">
                        <input 
                          type="number" 
                          value={prod.qty} 
                          onChange={(e) => handleQtyChange(prod.id, e.target.value)}
                          className="w-14 border border-slate-300 rounded p-1 text-center text-sm outline-none focus:border-blue-500" 
                        />
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-slate-900 text-xs">₹{lineAmount.toFixed(2)}</td>
                      <td className="px-4 py-3 text-center">
                        <button 
                          onClick={() => handleRemoveItem(prod.id)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-slate-200">
            <button 
              onClick={handleAddProductRow}
              className="text-blue-600 text-sm font-medium flex items-center hover:underline"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Another Product
            </button>
          </div>
        </div>

        {/* Panel 3: Order Summary (Span 3) */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-5 shadow-sm h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 text-sm">Order Summary</h3>
          </div>

          <div className="space-y-4 text-sm mb-6">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal ({poProducts.length} items)</span>
              <span className="font-medium text-slate-900">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Tax (GST {taxPct}%)</span>
              <span className="font-medium text-slate-900">₹{taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Discount ({discountPct}%)</span>
              <span className="font-medium text-slate-900">-₹{discountAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4 mb-6">
            <div className="flex justify-between items-center font-bold">
              <span className="text-slate-900">Total Amount</span>
              <span className="text-blue-600 text-lg">₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleSavePurchaseOrder}
            disabled={isSubmitting || poProducts.length === 0}
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all shadow-sm text-sm disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
            Save Purchase Order
          </button>

          <p className="text-[10px] text-slate-400 text-center mt-4">Amounts are inclusive of applicable taxes</p>
        </div>

      </div>
    </div>
  );
};

export default Suppliers;