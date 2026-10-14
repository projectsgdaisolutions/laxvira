// import React, { useState } from "react";
// import { Receipt, CreditCard, Banknote, Users } from "lucide-react";
// import logo from "../../assets/logo.jpg";

// const SplitBilling = () => {
//   const [bill] = useState({
//     table: "T4",
//     items: [
//       { name: "Truffle Risotto", qty: 2, price: 850 },
//       { name: "Steak Frites", qty: 1, price: 1200 },
//       { name: "House Wine (Glass)", qty: 3, price: 400 },
//     ]
//   });

//   const subtotal = bill.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
//   const tax = subtotal * 0.05;
//   const total = subtotal + tax;

//   const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', {minimumFractionDigits: 2})}`;

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      
//       <div className="relative z-10 w-full max-w-[1200px] px-6 py-8 space-y-8">
//         <div className="flex items-center gap-5 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
//           <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30 text-white shrink-0">
//             <Receipt size={28} />
//           </div>
//           <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Checkout: Table {bill.table}</h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Bill Summary */}
//           <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
//             <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Itemized Ledger</h3>
//             <div className="space-y-3 mb-6">
//               {bill.items.map((item, i) => (
//                 <div key={i} className="flex justify-between items-center text-sm font-bold text-slate-800">
//                   <span>{item.qty}x {item.name}</span>
//                   <span>{formatCurr(item.qty * item.price)}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="border-t border-slate-200 pt-4 space-y-2">
//               <div className="flex justify-between text-sm font-bold text-slate-500"><span>Subtotal</span><span>{formatCurr(subtotal)}</span></div>
//               <div className="flex justify-between text-sm font-bold text-slate-500"><span>Taxes (5%)</span><span>{formatCurr(tax)}</span></div>
//               <div className="flex justify-between text-2xl font-black text-slate-900 mt-2 pt-2 border-t border-slate-200"><span>Total</span><span>{formatCurr(total)}</span></div>
//             </div>
//           </div>

//           {/* Tender Engine */}
//           <div className="space-y-4">
//             <button className="w-full bg-white/80 backdrop-blur-xl border border-orange-200 p-6 rounded-3xl shadow-sm hover:border-orange-400 transition-colors flex items-center justify-between group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-orange-100 text-orange-600 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors"><Users size={24}/></div>
//                 <div className="text-left"><p className="font-black text-slate-900 text-lg">Split Equal</p><p className="text-xs font-bold text-slate-500">Divide evenly among guests</p></div>
//               </div>
//             </button>

//             <button className="w-full bg-white/80 backdrop-blur-xl border border-slate-200 p-6 rounded-3xl shadow-sm hover:border-slate-400 transition-colors flex items-center justify-between group">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-slate-100 text-slate-600 rounded-xl group-hover:bg-slate-800 group-hover:text-white transition-colors"><Receipt size={24}/></div>
//                 <div className="text-left"><p className="font-black text-slate-900 text-lg">Split by Item</p><p className="text-xs font-bold text-slate-500">Assign specific items to diners</p></div>
//               </div>
//             </button>

//             <div className="grid grid-cols-2 gap-4 mt-6">
//               <button className="bg-slate-900 text-white font-black py-4 rounded-2xl flex justify-center items-center gap-2 hover:bg-slate-800"><Banknote size={18}/> Cash</button>
//               <button className="bg-gradient-to-r from-orange-400 to-rose-500 text-white font-black py-4 rounded-2xl flex justify-center items-center gap-2 shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform"><CreditCard size={18}/> Card / UPI</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplitBilling;

import React, { useState, useEffect } from "react";
import { Receipt, CreditCard, Banknote, Users, Loader2 } from "lucide-react";
import logo from "../../assets/logo.jpg";

const API_BASE = "http://127.0.0.1:8000/api/restaurant/billing";

const SplitBilling = () => {
  const [bill, setBill] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_BASE}/current`);
      const json = await res.json();
      setBill(json);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handlePayment = async (method) => {
    setIsProcessing(true);
    await fetch(`${API_BASE}/process?method=${method}`, { method: "POST" });
    alert(`Payment via ${method} cleared successfully.`);
    fetchData(); // Reloads clear queue
    setIsProcessing(false);
  };

  const handleSplit = (type) => {
    alert(`Initiating ${type} wizard on guest device terminals...`);
  };

  const formatCurr = (val) => `₹${Number(val).toLocaleString('en-IN', {minimumFractionDigits: 2})}`;

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-orange-500" size={32} /></div>;

  const subtotal = bill.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      
      <div className="relative z-10 w-full max-w-[1200px] px-6 py-8 space-y-8">
        <div className="flex items-center gap-5 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30 text-white shrink-0">
            <Receipt size={28} />
          </div>
          <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">Checkout: Table {bill.table}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Itemized Ledger</h3>
            <div className="space-y-3 mb-6 min-h-[150px]">
              {bill.items.length === 0 ? (
                <p className="text-center text-slate-400 font-bold mt-8">No active orders queued for this table.</p>
              ) : (
                bill.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm font-bold text-slate-800">
                    <span>{item.qty}x {item.name}</span>
                    <span>{formatCurr(item.qty * item.price)}</span>
                  </div>
                ))
              )}
            </div>
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm font-bold text-slate-500"><span>Subtotal</span><span>{formatCurr(subtotal)}</span></div>
              <div className="flex justify-between text-sm font-bold text-slate-500"><span>Taxes (5%)</span><span>{formatCurr(tax)}</span></div>
              <div className="flex justify-between text-2xl font-black text-slate-900 mt-2 pt-2 border-t border-slate-200"><span>Total</span><span>{formatCurr(total)}</span></div>
            </div>
          </div>

          <div className="space-y-4">
            <button onClick={() => handleSplit("Equal Split")} disabled={bill.items.length === 0} className="w-full bg-white/80 backdrop-blur-xl border border-orange-200 p-6 rounded-3xl shadow-sm hover:border-orange-400 transition-colors flex items-center justify-between group disabled:opacity-50 disabled:hover:border-orange-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors"><Users size={24}/></div>
                <div className="text-left"><p className="font-black text-slate-900 text-lg">Split Equal</p><p className="text-xs font-bold text-slate-500">Divide evenly among guests</p></div>
              </div>
            </button>

            <button onClick={() => handleSplit("Itemized Split")} disabled={bill.items.length === 0} className="w-full bg-white/80 backdrop-blur-xl border border-slate-200 p-6 rounded-3xl shadow-sm hover:border-slate-400 transition-colors flex items-center justify-between group disabled:opacity-50 disabled:hover:border-slate-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 text-slate-600 rounded-xl group-hover:bg-slate-800 group-hover:text-white transition-colors"><Receipt size={24}/></div>
                <div className="text-left"><p className="font-black text-slate-900 text-lg">Split by Item</p><p className="text-xs font-bold text-slate-500">Assign specific items to diners</p></div>
              </div>
            </button>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <button disabled={bill.items.length === 0 || isProcessing} onClick={() => handlePayment("Cash")} className="bg-slate-900 text-white font-black py-4 rounded-2xl flex justify-center items-center gap-2 hover:bg-slate-800 disabled:opacity-50"><Banknote size={18}/> Cash</button>
              <button disabled={bill.items.length === 0 || isProcessing} onClick={() => handlePayment("Card")} className="bg-gradient-to-r from-orange-400 to-rose-500 text-white font-black py-4 rounded-2xl flex justify-center items-center gap-2 shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"><CreditCard size={18}/> Card / UPI</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SplitBilling;