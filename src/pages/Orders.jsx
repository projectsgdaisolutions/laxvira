import React, { useState } from 'react';
import { Search, Plus, MoreVertical, X, Filter, Package, Clock, CheckCircle, Truck, AlertCircle } from 'lucide-react';

const Orders = () => {
  const [isCreateOrderOpen, setIsCreateOrderOpen] = useState(false);
  
  // --- Data & Filtering State ---
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openActionId, setOpenActionId] = useState(null);
  
  // --- New Order Form State ---
  const [newOrder, setNewOrder] = useState({
    supplier: '',
    expectedDelivery: '',
    items: [{ productName: '', quantity: 1, unitPrice: 0 }]
  });

  // Mock historical orders
  const [orders, setOrders] = useState([
    { id: 'PO-1042', supplier: 'MegaMart Wholesale', date: '28 Jul 2026', expected: '29 Jul 2026', items: 14, amount: 45000, status: 'Delivered' },
    { id: 'PO-1043', supplier: 'FreshFarms Distributors', date: '30 Jul 2026', expected: '01 Aug 2026', items: 5, amount: 12500, status: 'Pending' },
    { id: 'PO-1044', supplier: 'General Goods Ltd', date: '31 Jul 2026', expected: '02 Aug 2026', items: 8, amount: 8900, status: 'Processing' },
    { id: 'PO-1045', supplier: 'National Traders', date: '25 Jul 2026', expected: '27 Jul 2026', items: 22, amount: 67200, status: 'Cancelled' },
  ]);

  // --- Derived State ---
  const filteredOrders = orders.filter((order) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      order.id.toLowerCase().includes(searchLower) ||
      order.supplier.toLowerCase().includes(searchLower);
      
    const matchesStatus = filterStatus === '' || order.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // --- Handlers ---
  const toggleActionMenu = (id) => {
    setOpenActionId(prevId => prevId === id ? null : id);
  };

  const handleAddItemRow = () => {
    setNewOrder(prev => ({
      ...prev,
      items: [...prev.items, { productName: '', quantity: 1, unitPrice: 0 }]
    }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...newOrder.items];
    updatedItems[index][field] = value;
    setNewOrder(prev => ({ ...prev, items: updatedItems }));
  };

  const handleCreateOrderSubmit = () => {
    if (!newOrder.supplier || !newOrder.expectedDelivery || newOrder.items[0].productName === '') {
      alert("Please fill in the supplier, date, and at least one item.");
      return;
    }

    const totalAmount = newOrder.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
    const newPoNumber = `PO-${1045 + orders.length + 1}`;

    const newOrderRecord = {
      id: newPoNumber,
      supplier: newOrder.supplier,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      expected: new Date(newOrder.expectedDelivery).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      items: newOrder.items.length,
      amount: totalAmount,
      status: 'Pending'
    };

    setOrders([newOrderRecord, ...orders]);
    alert("Success! Purchase order created and sent to supplier.");
    
    // Reset and close
    setNewOrder({ supplier: '', expectedDelivery: '', items: [{ productName: '', quantity: 1, unitPrice: 0 }] });
    setIsCreateOrderOpen(false);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered': return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700"><CheckCircle className="w-3 h-3 mr-1" /> {status}</span>;
      case 'Pending': return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700"><Clock className="w-3 h-3 mr-1" /> {status}</span>;
      case 'Processing': return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700"><Truck className="w-3 h-3 mr-1" /> {status}</span>;
      case 'Cancelled': return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700"><AlertCircle className="w-3 h-3 mr-1" /> {status}</span>;
      default: return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">{status}</span>;
    }
  };

  return (
    <div className="relative w-full pb-10">
      
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Purchase Orders</h1>
        <p className="text-sm text-slate-500 mt-1">Manage wholesale inventory requests and track deliveries</p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex w-full sm:w-auto gap-4 flex-1">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search PO number or supplier..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); 
              }}
              className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 sm:text-sm outline-none"
            />
          </div>
          
          <div className="relative w-full sm:max-w-[180px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-slate-400" />
            </div>
            <select 
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                setCurrentPage(1); 
              }}
              className="block w-full pl-10 pr-8 py-2.5 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 sm:text-sm appearance-none bg-white outline-none"
            >
              <option value="">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <button 
          onClick={() => setIsCreateOrderOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Order
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto min-h-[300px]">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Supplier</th>
                <th className="px-6 py-4">Dates</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4">Total Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-10 text-center text-slate-500">
                    No purchase orders found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-blue-600">{order.id}</td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900">{order.supplier}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs text-slate-500">Ordered: <span className="font-medium text-slate-700">{order.date}</span></p>
                      <p className="text-xs text-slate-500 mt-0.5">Expected: <span className="font-medium text-slate-700">{order.expected}</span></p>
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{order.items} SKU(s)</td>
                    <td className="px-6 py-4 font-bold text-slate-900">₹{order.amount.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      
                      {/* Dropdown Container */}
                      <div className="relative inline-block text-left">
                        <button 
                          onClick={() => toggleActionMenu(order.id)}
                          className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>

                        {/* Dropdown Menu */}
                        {openActionId === order.id && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setOpenActionId(null)}></div>
                            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 py-1">
                              <button className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                                View Details
                              </button>
                              <button className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                                Download PDF
                              </button>
                              {order.status === 'Pending' && (
                                <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                  Cancel Order
                                </button>
                              )}
                            </div>
                          </>
                        )}
                      </div>

                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- CREATE ORDER SLIDE-OVER MODAL --- */}
      {isCreateOrderOpen && (
        <>
          <div 
            className="fixed inset-0 bg-slate-900/40 z-40 transition-opacity"
            onClick={() => setIsCreateOrderOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 flex items-center">
                <Package className="w-5 h-5 mr-2 text-blue-600" /> New Purchase Order
              </h2>
              <button 
                onClick={() => setIsCreateOrderOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Step 1: Supplier Details */}
              <div>
                <h3 className="font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">1. Supplier Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Select Wholesaler</label>
                    <select 
                      value={newOrder.supplier}
                      onChange={(e) => setNewOrder({...newOrder, supplier: e.target.value})}
                      className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                    >
                      <option value="">Select a supplier...</option>
                      <option value="MegaMart Wholesale">MegaMart Wholesale</option>
                      <option value="FreshFarms Distributors">FreshFarms Distributors</option>
                      <option value="General Goods Ltd">General Goods Ltd</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Expected Delivery Date</label>
                    <input 
                      type="date" 
                      value={newOrder.expectedDelivery}
                      onChange={(e) => setNewOrder({...newOrder, expectedDelivery: e.target.value})}
                      className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Add Items */}
              <div>
                <div className="flex justify-between items-end mb-3 border-b border-slate-100 pb-2">
                  <h3 className="font-bold text-slate-900">2. Request Items</h3>
                  <button 
                    onClick={handleAddItemRow}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    + Add Row
                  </button>
                </div>
                
                <div className="space-y-3">
                  {newOrder.items.map((item, index) => (
                    <div key={index} className="flex gap-2 items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="flex-1">
                        <input 
                          type="text" 
                          placeholder="Product Name (e.g. Maggi 70g)"
                          value={item.productName}
                          onChange={(e) => handleItemChange(index, 'productName', e.target.value)}
                          className="w-full border border-slate-300 rounded md:rounded-lg p-2 text-xs focus:ring-2 focus:ring-sky-500 outline-none"
                        />
                      </div>
                      <div className="w-20">
                        <input 
                          type="number" 
                          min="1"
                          placeholder="Qty"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) || 0)}
                          className="w-full border border-slate-300 rounded md:rounded-lg p-2 text-xs focus:ring-2 focus:ring-sky-500 outline-none"
                        />
                      </div>
                      <div className="w-24">
                        <input 
                          type="number" 
                          min="0"
                          placeholder="Cost/Unit"
                          value={item.unitPrice}
                          onChange={(e) => handleItemChange(index, 'unitPrice', parseInt(e.target.value) || 0)}
                          className="w-full border border-slate-300 rounded md:rounded-lg p-2 text-xs focus:ring-2 focus:ring-sky-500 outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-right">
                  <p className="text-sm text-slate-500">Estimated Total:</p>
                  <p className="text-xl font-bold text-slate-900">
                    ₹{newOrder.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-200 bg-slate-50 flex gap-4">
              <button 
                onClick={() => setIsCreateOrderOpen(false)}
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-lg font-bold transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateOrderSubmit}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors shadow-sm"
              >
                Submit Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;