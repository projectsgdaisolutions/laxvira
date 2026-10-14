// // // =====================================================================================
// // // Billing.jsx
// // // Retail Billing / POS Page
// // // -------------------------------------------------------------------------------------
// // // Frontend-only implementation, structured for a straightforward backend hand-off.
// // // Every section that will eventually be wired to a real API is clearly marked with
// // // "API PLACEHOLDER" / "TODO" comments. Business logic (cart math, totals, invoice
// // // shape) is written exactly as it would be against a real backend so that swapping
// // // dummy data for network calls does not require touching the UI or handlers below.
// // // =====================================================================================

// // // ------------------------------- Imports --------------------------------------------

import { useState, useEffect } from "react";
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Search, 
  QrCode, 
  Printer, 
  Loader2,
  FileText,
  X
} from "lucide-react";

const Billing = () => {
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Customer details
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  
  // UI States
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Invoice State
  const [generatedInvoice, setGeneratedInvoice] = useState(null);

  // Fetch Inventory on load
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/inventory", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setInventory(data.filter(item => item.stock > 0));
        }
      } catch (err) {
        console.error("Failed to load inventory:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInventory();
  }, [generatedInvoice]); // Re-fetch inventory after an invoice is successfully generated

  // Cart Management
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product_id === product.id);
      if (existing) {
        if (existing.quantity >= product.stock) return prev;
        return prev.map((item) =>
          item.product_id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { 
        product_id: product.id, 
        name: product.name, 
        price_at_time: product.price, 
        quantity: 1,
        max_stock: product.stock 
      }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) => prev.map((item) => {
      if (item.product_id === productId) {
        const newQuantity = item.quantity + delta;
        if (newQuantity > 0 && newQuantity <= item.max_stock) {
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product_id !== productId));
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price_at_time * item.quantity), 0);

  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Checkout & API Submission
  const handleConfirmTransaction = async () => {
    setIsProcessing(true);
    try {
      const token = localStorage.getItem("token");
      
      const payload = {
        customer_name: customerName || "Walk-in Customer",
        customer_phone: customerPhone || null,
        total_amount: totalAmount,
        payment_method: "UPI",
        items: cart.map(item => ({
          product_id: item.product_id,
          quantity: item.quantity,
          price_at_time: item.price_at_time
        }))
      };

      const response = await fetch("http://localhost:8000/api/billing/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Checkout failed");

      const responseData = await response.json();

      // Capture the state for the receipt view
      setGeneratedInvoice({
        id: responseData.invoice_id,
        date: new Date().toLocaleString("en-IN"),
        customerName: payload.customer_name,
        customerPhone: payload.customer_phone,
        items: [...cart],
        total: totalAmount
      });

    } catch (error) {
      console.error(error);
      alert("Failed to process invoice. Please check stock levels.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const resetBilling = () => {
    setGeneratedInvoice(null);
    setIsCheckoutModalOpen(false);
    setCart([]);
    setCustomerName("");
    setCustomerPhone("");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-indigo-600" size={32} />
      </div>
    );
  }

  return (
    <>
      {/* 
        The print:hidden class ensures the POS interface 
        does not appear on the paper when printing the invoice.
      */}
      <div className="min-h-screen bg-gray-50 p-4 flex flex-col lg:flex-row gap-6 print:hidden">
        
        {/* LEFT PANE: Products Selection */}
        <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 overflow-hidden h-[calc(100vh-2rem)]">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Point of Sale</h1>
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products by name or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2">
            {filteredInventory.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-400">
                No products available in stock.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredInventory.map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="bg-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all active:scale-95 flex flex-col justify-between h-32"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 line-clamp-2 leading-tight">{product.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <span className="font-bold text-indigo-600">₹{product.price}</span>
                      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                        {product.stock} left
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANE: Cart & Checkout */}
        <div className="w-full lg:w-[400px] flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 h-[calc(100vh-2rem)]">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
            <ShoppingCart size={24} className="text-indigo-600" /> Current Bill
          </h2>

          <div className="space-y-3 mb-6">
            <input
              type="text"
              placeholder="Customer Name (Optional)"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-400"
            />
            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-400"
            />
          </div>

          <div className="flex-1 overflow-y-auto mb-6 pr-2 space-y-3">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <ShoppingCart size={48} className="mb-4 text-gray-200" />
                <p>Cart is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product_id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-indigo-600 font-medium">₹{item.price_at_time}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
                      <button onClick={() => updateQuantity(item.product_id, -1)} className="p-1 hover:bg-gray-100 rounded text-gray-600">
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product_id, 1)} className="p-1 hover:bg-gray-100 rounded text-gray-600">
                        <Plus size={14} />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.product_id)} className="text-red-400 hover:text-red-600 p-1">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-gray-100 pt-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>₹{totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>
            <button
              disabled={cart.length === 0}
              onClick={() => setIsCheckoutModalOpen(true)}
              className="w-full h-14 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
            >
              Checkout <QrCode size={20} />
            </button>
          </div>
        </div>

        {/* CHECKOUT & PAYMENT MODAL */}
        {isCheckoutModalOpen && !generatedInvoice && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl relative transition-all">
              <button 
                onClick={() => setIsCheckoutModalOpen(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
              <div className="p-8 flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-900 mb-6 w-full text-center border-b border-gray-100 pb-4">
                  Scan to Pay
                </h2>
                
                <div className="bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-200 mb-6">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=teststore@upi&pn=Store&am=${totalAmount}&cu=INR`} 
                    alt="UPI QR Code" 
                    className="w-48 h-48 mix-blend-multiply"
                  />
                </div>

                <div className="text-center mb-8">
                  <p className="text-sm text-gray-500 mb-1">Total Amount Payable</p>
                  <p className="text-3xl font-bold text-indigo-600">₹{totalAmount.toLocaleString("en-IN")}</p>
                </div>

                <button
                  onClick={handleConfirmTransaction}
                  disabled={isProcessing}
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {isProcessing ? <Loader2 className="animate-spin" size={20} /> : <CheckCircle size={20} />}
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PRINTABLE INVOICE VIEW */}
      {/* This section takes over the screen visually, and is the ONLY thing visible to the print spooler */}
      {generatedInvoice && (
        <div className="fixed inset-0 bg-gray-100 z-[100] flex items-center justify-center p-4 print:bg-white print:p-0">
          
          <div className="bg-white w-full max-w-md shadow-2xl print:shadow-none print:max-w-full rounded-2xl print:rounded-none overflow-hidden flex flex-col max-h-[90vh] print:max-h-screen">
            
            {/* Action Bar (Hidden when printing) */}
            <div className="bg-gray-900 px-6 py-4 flex justify-between items-center print:hidden rounded-t-2xl shrink-0">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <FileText size={18} /> Invoice #{generatedInvoice.id}
              </h3>
              <div className="flex gap-3">
                <button 
                  onClick={resetBilling}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  New Sale
                </button>
                <button 
                  onClick={handlePrint}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  <Printer size={16} /> Print
                </button>
              </div>
            </div>

            {/* Thermal Receipt Format */}
            <div className="p-8 print:p-4 overflow-y-auto font-mono text-sm text-gray-800">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold uppercase tracking-wider mb-1">TAX INVOICE</h1>
                <p className="text-gray-500 text-xs">Laxvira Smart Finances</p>
                <p className="text-gray-500 text-xs">Invoice No: {generatedInvoice.id.toString().padStart(6, '0')}</p>
                <p className="text-gray-500 text-xs">{generatedInvoice.date}</p>
              </div>

              <div className="border-t border-b border-dashed border-gray-300 py-3 mb-4 space-y-1">
                <p><span className="font-semibold">Customer:</span> {generatedInvoice.customerName}</p>
                {generatedInvoice.customerPhone && (
                  <p><span className="font-semibold">Phone:</span> {generatedInvoice.customerPhone}</p>
                )}
              </div>

              <table className="w-full text-left mb-6">
                <thead>
                  <tr className="border-b border-dashed border-gray-300">
                    <th className="py-2 font-semibold">Item</th>
                    <th className="py-2 text-right font-semibold">Qty</th>
                    <th className="py-2 text-right font-semibold">Price</th>
                    <th className="py-2 text-right font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-b border-dashed border-gray-300">
                  {generatedInvoice.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="py-3 pr-2">{item.name}</td>
                      <td className="py-3 text-right">{item.quantity}</td>
                      <td className="py-3 text-right">{item.price_at_time}</td>
                      <td className="py-3 text-right">{(item.quantity * item.price_at_time).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-between items-center text-lg font-bold">
                <span>GRAND TOTAL</span>
                <span>₹{generatedInvoice.total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
              </div>
              <p className="text-right text-xs text-gray-500 mt-1">Paid via UPI</p>

              <div className="text-center mt-10 text-xs text-gray-500">
                <p>Thank you for shopping with us!</p>
                <p className="mt-1">Powered by Laxvira Smart Finances</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// CheckCircle is missing from imports in the provided block, resolving it here:
import { CheckCircle } from "lucide-react";

export default Billing;