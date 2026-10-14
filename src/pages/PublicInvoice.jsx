import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader2, AlertTriangle, Printer, Download } from "lucide-react";

const PublicInvoice = () => {
  const { token } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/public/invoices/${token}`);
        if (!res.ok) throw new Error("Invoice not found or link has expired.");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPublicData();
  }, [token]);

  const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><Loader2 className="animate-spin text-blue-600" size={32} /></div>;
  if (error || !data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="bg-red-50 text-red-600 p-6 rounded-xl flex items-center gap-3"><AlertTriangle size={24} /><p className="font-medium">{error}</p></div></div>;

  const { store, customer, invoice, items } = data;

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-8 print:bg-white print:py-0 print:px-0">
      
      {/* Client Action Bar */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center font-bold text-xl">
             {store?.storeName?.charAt(0) || "S"}
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Invoice from</p>
            <p className="text-sm font-bold text-slate-900">{store?.storeName}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm text-sm font-medium">
            <Download size={16} /> Download PDF
          </button>
          <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm text-sm font-medium">
            <Printer size={16} /> Print
          </button>
        </div>
      </div>

      {/* A4 Document Wrapper (You can paste the exact visual layout from Invoice.jsx here) */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none border border-slate-200 print:border-none rounded-lg print:rounded-none overflow-hidden p-10 sm:p-12 print:p-0">
        <div className="flex justify-between items-start border-b-2 border-slate-800 pb-6 mb-8">
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">TAX INVOICE</h1>
              <p className="text-slate-500 font-medium mt-1">Invoice No: {invoice?.invoice_number}</p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-bold text-slate-900">{store?.storeName}</h2>
              <p className="text-sm text-slate-600 mt-1">Status: <span className="font-bold text-indigo-600">{invoice?.status}</span></p>
            </div>
        </div>
        
        {/* Render rest of the Invoice details exactly as in Invoice.jsx (table, totals, etc.) */}
        <div className="flex justify-between text-lg border-t border-slate-200 pt-3 mt-8">
            <span className="font-black text-slate-900">Balance Due</span>
            <span className="font-black text-red-600">{formatCurrency(invoice?.balance_due !== undefined ? invoice?.balance_due : invoice?.grand_total)}</span>
        </div>
      </div>
      
    </div>
  );
};

export default PublicInvoice;