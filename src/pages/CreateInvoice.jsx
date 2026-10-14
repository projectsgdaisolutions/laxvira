
import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, Settings, FileText, Paperclip, Info, Phone,
  ChevronDown, Copy, X, Edit2, Image as ImageIcon,
  CheckCircle2, ArrowRight, ArrowLeft, Palette, Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReceiptScanner from '../components/ReceiptScanner';

// --- TEMPLATE ENGINES (Presentation Layer) ---

const ClassicTemplate = ({ data, items, themeColor, logo }) => (
  <div className="bg-white p-10 shadow-lg border border-slate-200 aspect-[1/1.414] w-full relative">
    <div 
      className="border-b-4 pb-6 mb-6 flex justify-between items-start"
      style={{ borderBottomColor: themeColor }}
    >
      <div>
        {logo && <img src={logo} alt="Business Logo" className="max-h-16 object-contain mb-4" />}
        <h1 
          className="text-4xl font-serif uppercase tracking-widest"
          style={{ color: themeColor }}
        >
          Invoice
        </h1>
        <p className="text-slate-500 mt-2 text-sm">Invoice #: {data.invoiceNumber}</p>
        <p className="text-slate-500 text-sm">Date: {data.invoiceDate}</p>
      </div>
      <div className="text-right">
        <h3 className="font-bold text-slate-900 text-lg">{data.storeName || 'Laxvira Financials'}</h3>
        <p className="text-slate-500 text-sm whitespace-pre-wrap">{data.storeAddress || 'Smart Business. Smarter Finance.'}</p>
      </div>
    </div>
    <table className="w-full text-left text-sm mb-8">
      <thead className="border-b border-slate-200">
        <tr>
          <th className="py-2 font-bold text-slate-900">Item</th>
          <th className="py-2 font-bold text-slate-900 text-center">HSN/SAC</th>
          <th className="py-2 font-bold text-slate-900 text-right">Qty</th>
          <th className="py-2 font-bold text-slate-900 text-right">Rate</th>
          <th className="py-2 font-bold text-slate-900 text-right">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i} className="border-b border-slate-100">
            <td className="py-3 text-slate-700 font-medium">{item.name || `Item ${i+1}`}</td>
            <td className="py-3 text-slate-500 text-center text-xs">{item.hsn || '-'}</td>
            <td className="py-3 text-slate-700 text-right">{item.qty}</td>
            <td className="py-3 text-slate-700 text-right">₹{item.rate}</td>
            <td className="py-3 text-slate-700 text-right font-bold">₹{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ModernTemplate = ({ data, items, themeColor, logo }) => (
  <div className="bg-white shadow-lg border border-slate-200 aspect-[1/1.414] w-full relative overflow-hidden">
    <div 
      className="p-10 text-white flex justify-between items-center rounded-br-[100px]"
      style={{ backgroundColor: themeColor }}
    >
      <div>
        {logo && <img src={logo} alt="Business Logo" className="max-h-16 object-contain mb-4 bg-white/10 p-2 rounded-lg backdrop-blur-sm" />}
        <h1 className="text-4xl font-black tracking-tight">INVOICE</h1>
        <p className="opacity-90 mt-1"># {data.invoiceNumber}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-xl">{data.storeName || 'Laxvira'}</p>
      </div>
    </div>
    <div className="p-10">
      <table className="w-full text-left text-sm mb-8">
        <thead className="rounded-lg">
          <tr>
            <th className="p-3 font-bold rounded-l-lg" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>Description</th>
            <th className="p-3 font-bold text-center" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>HSN</th>
            <th className="p-3 font-bold text-right" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>Qty</th>
            <th className="p-3 font-bold text-right rounded-r-lg" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className="border-b border-slate-100">
              <td className="p-3 font-medium text-slate-800">{item.name || `Service ${i+1}`}</td>
              <td className="p-3 text-slate-500 text-center text-xs">{item.hsn || '-'}</td>
              <td className="p-3 text-slate-600 text-right">{item.qty}</td>
              <td className="p-3 text-slate-800 font-bold text-right">₹{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

const CreateInvoice = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Data State
  const [storeProfile, setStoreProfile] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  
  // Modal State for New Client
  const [showClientModal, setShowClientModal] = useState(false);
  const [newClient, setNewClient] = useState({ company_name: '', email: '', phone: '' });

  // Design State
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [themeColor, setThemeColor] = useState('#101E36'); // Default Laxvira Navy
  const [logoBase64, setLogoBase64] = useState(null);
  
  // Form State
  const [invoiceNumber, setInvoiceNumber] = useState('INV-0001');
  const [poNumber, setPoNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');
  
  // Line Items State
  const [items, setItems] = useState([
    { id: 1, name: '', hsn: '', gst: '18', qty: '1', rate: '0', amount: '0.00', cgst: '0.00', sgst: '0.00', total: '0.00' }
  ]);

  // Curated Laxvira Palette
  const CURATED_PALETTE = [
    '#101E36', '#C69C55', '#1e293b', '#0f766e', 
    '#1d4ed8', '#b91c1c', '#6d28d9', '#374151' 
  ];

  // Fetch Store and Customer Data
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      
      try {
        const [profileRes, customersRes] = await Promise.all([
          fetch('http://localhost:8000/api/store/profile', { headers: { Authorization: `Bearer ${token}` } }),
          fetch('http://localhost:8000/api/customers', { headers: { Authorization: `Bearer ${token}` } })
        ]);
        
        if (profileRes.ok) setStoreProfile(await profileRes.json());
        if (customersRes.ok) setCustomers(await customersRes.json());
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  // --- LOGO HANDLER ---
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogoBase64(reader.result);
      reader.readAsDataURL(file);
    }
  };

 // --- CLIENT CREATION HANDLER ---
  // const handleCreateClient = async () => {
  //   if (!newClient.company_name) return alert("Company Name is required");
    
  //   try {
  //     const token = localStorage.getItem('token');
      
  //     // FIX: Ensure the payload matches your FastAPI Pydantic schema perfectly.
  //     // We pass company_name as 'name' to satisfy the likely required field.
  //     const payload = {
  //       name: newClient.company_name, // Typically required by SQLAlchemy/Pydantic
  //       company_name: newClient.company_name,
  //       email: newClient.email,
  //       phone: newClient.phone,
  //       address: "Address not provided" // Add this if your backend requires an address
  //     };

  //     const res = await fetch('http://localhost:8000/api/customers', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  //       body: JSON.stringify(payload) // Send the structured payload
  //     });
      
  //     if (res.ok) {
  //       const createdClient = await res.json();
  //       setCustomers([...customers, createdClient]);
  //       setSelectedCustomerId(createdClient.id);
  //       setShowClientModal(false);
  //       setNewClient({ company_name: '', email: '', phone: '' });
  //     } else {
  //       const errData = await res.json();
  //       console.error("Backend Error Validation:", errData);
  //       alert("Failed to create client. CCheck console.");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occurred creating the client.");
  //   }
  // };

  // --- CLIENT CREATION HANDLER ---
  const handleCreateClient = async () => {
    if (!newClient.company_name) return alert("Company Name is required");
    
    try {
      const token = localStorage.getItem('token');
      
      // Map exactly to the FastAPI CustomerCreate schema based on billing.py
      const payload = {
        company_name: newClient.company_name,
        contact_person: newClient.company_name, // Defaulting to company name since it's not in the modal
        email: newClient.email || "",
        phone: newClient.phone || "",
        billing_address: "Not provided",
        shipping_address: "Not provided",
        gstin: "",
        place_of_supply: ""
      };

      const res = await fetch('http://localhost:8000/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        const createdClient = await res.json();
        setCustomers([...customers, createdClient]);
        setSelectedCustomerId(createdClient.id);
        setShowClientModal(false);
        setNewClient({ company_name: '', email: '', phone: '' });
      } else {
        const errData = await res.json();
        console.error("Backend Error Validation:", errData);
        // Extracts the specific Pydantic validation error message for easier debugging
        const errorMessage = errData.detail && errData.detail[0] ? errData.detail[0].msg : "Validation failed";
        alert(`Failed to create client: ${errorMessage}`);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred creating the client.");
    }
  };

  // --- AI EXTRACTION HANDLER ---
  const handleAIExtraction = (data) => {
    if (data.date) setInvoiceDate(data.date);
    
    if (data.items && data.items.length > 0) {
      const extractedItems = data.items.map((item, index) => {
        const qty = parseFloat(item.quantity) || 1;
        const rate = parseFloat(item.rate) || 0;
        const amount = qty * rate;
        const gstRate = 18; 
        const taxAmount = (amount * gstRate) / 100;
        const cgst = taxAmount / 2;
        const sgst = taxAmount / 2;
        const total = amount + taxAmount;

        return {
          id: Date.now() + index,
          name: item.description || '',
          hsn: '',
          gst: '18',
          qty: qty.toString(),
          rate: rate.toString(),
          amount: amount.toFixed(2),
          cgst: cgst.toFixed(2),
          sgst: sgst.toFixed(2),
          total: total.toFixed(2)
        };
      });
      setItems(extractedItems);
    }
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    
    const qty = parseFloat(newItems[index].qty) || 0;
    const rate = parseFloat(newItems[index].rate) || 0;
    const amount = qty * rate;
    const gstRate = parseFloat(newItems[index].gst) || 0;
    
    const taxAmount = (amount * gstRate) / 100;
    const cgst = taxAmount / 2;
    const sgst = taxAmount / 2;
    const total = amount + taxAmount;

    newItems[index].amount = amount.toFixed(2);
    newItems[index].cgst = cgst.toFixed(2);
    newItems[index].sgst = sgst.toFixed(2);
    newItems[index].total = total.toFixed(2);

    setItems(newItems);
  };

  const addLineItem = () => {
    setItems([...items, { id: items.length + 1, name: '', hsn: '', gst: '18', qty: '1', rate: '0', amount: '0.00', cgst: '0.00', sgst: '0.00', total: '0.00' }]);
  };

  const removeLineItem = (index) => {
    if (items.length === 1) return;
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSaveInvoice = async (status = 'UNPAID') => {
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('token');
      
      const subtotal = items.reduce((acc, item) => acc + parseFloat(item.amount), 0);
      const tax_total = items.reduce((acc, item) => acc + parseFloat(item.cgst) + parseFloat(item.sgst), 0);
      const grand_total = subtotal + tax_total;

      // Extract client name for denormalized storage
      const selectedClient = customers.find(c => c.id === parseInt(selectedCustomerId));
      const customerName = selectedClient ? selectedClient.company_name : "Walk-in Customer";

      const payload = {
        invoice_number: invoiceNumber,
        customer_id: selectedCustomerId ? parseInt(selectedCustomerId) : null,
        customer_name: customerName, 
        issue_date: new Date(invoiceDate).toISOString(),
        due_date: dueDate ? new Date(dueDate).toISOString() : new Date().toISOString(),
        subtotal: subtotal,
        tax_total: tax_total,
        grand_total: grand_total,
        status: status,
        template_id: selectedTemplate, 
        theme_color: themeColor,
        store_logo: logoBase64, // Pushing logo to DB if supported
        items: items
      };

      const res = await fetch('http://localhost:8000/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to save invoice');
      navigate('/invoices');
      
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF1F8] pb-24 font-sans text-brand-navy flex flex-col relative">
      
      {/* --- NEW CLIENT MODAL --- */}
      {showClientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-brand-navy">New Client Profile</h2>
              <button onClick={() => setShowClientModal(false)} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Company Name *</label>
                <input 
                  type="text" 
                  value={newClient.company_name}
                  onChange={(e) => setNewClient({...newClient, company_name: e.target.value})}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-gold bg-slate-50 focus:bg-white transition-colors" 
                  placeholder="Acme Corp Pvt. Ltd." 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Email Address</label>
                <input 
                  type="email" 
                  value={newClient.email}
                  onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-gold bg-slate-50 focus:bg-white transition-colors" 
                  placeholder="billing@acmecorp.com" 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Phone Number</label>
                <input 
                  type="tel" 
                  value={newClient.phone}
                  onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-gold bg-slate-50 focus:bg-white transition-colors" 
                  placeholder="+91 98765 43210" 
                />
              </div>
            </div>

            <button 
              onClick={handleCreateClient}
              className="w-full mt-8 py-3.5 bg-brand-navy hover:bg-[#1a2b4c] text-white font-bold rounded-xl transition-colors shadow-md"
            >
              Save Client Profile
            </button>
          </div>
        </div>
      )}

      {/* Interactive Stepper */}
      <div className="flex flex-col items-center pt-6 pb-6 bg-white border-b border-slate-200 mb-8 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center text-sm font-medium w-full max-w-2xl justify-center">
          <div 
            onClick={() => setCurrentStep(1)}
            className={`flex items-center cursor-pointer transition-colors ${currentStep === 1 ? 'text-brand-navy font-bold' : 'text-slate-400'}`}
          >
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs mr-2 transition-colors ${currentStep === 1 ? 'bg-brand-navy text-brand-gold font-bold' : 'bg-slate-200 text-slate-600'}`}>1</span>
            Invoice Details
          </div>
          
          <div className={`flex-1 h-px mx-6 ${currentStep === 2 ? 'bg-brand-gold' : 'bg-slate-200'}`}></div>
          
          <div 
            onClick={() => setCurrentStep(2)}
            className={`flex items-center cursor-pointer transition-colors ${currentStep === 2 ? 'text-brand-navy font-bold' : 'text-slate-400'}`}
          >
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs mr-2 transition-colors ${currentStep === 2 ? 'bg-brand-navy text-brand-gold font-bold' : 'bg-slate-200 text-slate-600'}`}>2</span>
            Design & Theme
          </div>
        </div>
      </div>

      {/* --- STEP 1: ADVANCED DATA ENTRY --- */}
      {currentStep === 1 && (
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-0">
          <div className="bg-white rounded-[24px] shadow-xl border border-slate-200/80 p-8 sm:p-12 relative mb-6">
            
            {/* Header: Title & Logo Upload */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-8 border-b border-slate-100 mb-8">
              <div>
                <h1 className="text-3xl font-black text-brand-navy tracking-tight uppercase">Tax Invoice</h1>
                <p className="text-slate-500 text-sm mt-1">Create professional B2B financial documents.</p>
              </div>

              {/* Functional Logo Upload Box */}
              <div 
                onClick={() => fileInputRef.current.click()}
                className="border-2 border-dashed border-slate-300 rounded-2xl p-4 w-full md:w-72 h-28 flex flex-col items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-50 transition-colors bg-slate-50/50 overflow-hidden"
              >
                {logoBase64 ? (
                  <img src={logoBase64} alt="Uploaded Logo" className="max-h-full max-w-full object-contain" />
                ) : (
                  <>
                    <ImageIcon size={22} className="mb-1 text-brand-gold" />
                    <span className="font-semibold text-xs text-brand-navy">Upload Business Logo</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">PNG, JPG up to 10MB</span>
                  </>
                )}
                <input 
                  type="file" 
                  hidden 
                  ref={fileInputRef} 
                  onChange={handleLogoUpload} 
                  accept="image/png, image/jpeg, image/jpg" 
                />
              </div>
            </div>

            {/* AI Receipt Scanner Insertion */}
            <ReceiptScanner onDataExtracted={handleAIExtraction} />

            {/* Meta Grid: Invoice No, Dates, PO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-brand-navy w-1/3">Invoice No <span className="text-red-500">*</span></label>
                  <input type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className="w-2/3 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-gold bg-slate-50/50 font-semibold" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-brand-navy w-1/3">PO Number</label>
                  <input type="text" placeholder="Optional PO reference" value={poNumber} onChange={(e) => setPoNumber(e.target.value)} className="w-2/3 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-gold bg-slate-50/50" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-brand-navy w-1/3">Invoice Date <span className="text-red-500">*</span></label>
                  <input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} className="w-2/3 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-gold bg-slate-50/50 font-medium" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-brand-navy w-1/3">Due Date</label>
                  <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-2/3 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-brand-gold bg-slate-50/50 font-medium" />
                </div>
              </div>
            </div>

            {/* Billed By & Billed To Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/60 shadow-sm">
                <h3 className="font-bold text-brand-navy border-b border-slate-200 pb-3 mb-4 flex items-center justify-between">
                  <span>Billed By (Your Firm)</span>
                  <span className="text-xs text-brand-gold font-semibold uppercase">Laxvira Active</span>
                </h3>
                <p className="font-bold text-brand-navy text-base">{storeProfile?.storeName || 'Loading...'}</p>
                <p className="text-sm text-slate-600 mt-1 whitespace-pre-wrap">{storeProfile?.address || 'Update address in settings'}</p>
                {storeProfile?.phone && <p className="text-sm text-slate-500 mt-2 flex items-center gap-1.5"><Phone size={14} /> {storeProfile.phone}</p>}
              </div>

              <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white">
                <h3 className="font-bold text-brand-navy border-b border-slate-200 pb-3 mb-4">Billed To (Client)</h3>
                <select 
                  value={selectedCustomerId}
                  onChange={(e) => setSelectedCustomerId(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl text-sm outline-none bg-slate-50 focus:border-brand-gold font-medium cursor-pointer"
                >
                  <option value="">Select registered B2B client...</option>
                  {customers.map(c => (
                    <option key={c.id} value={c.id}>{c.company_name}</option>
                  ))}
                </select>
                <button 
                  onClick={() => setShowClientModal(true)} 
                  className="mt-4 text-xs font-bold text-brand-gold hover:underline flex items-center gap-1"
                >
                  <Plus size={14} /> Register New Client Profile
                </button>
              </div>
            </div>

            {/* Line Items Builder Table */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
              <div className="bg-brand-navy text-white text-xs font-bold grid grid-cols-12 p-4 gap-3 items-center tracking-wider uppercase">
                <div className="col-span-4">Item Description</div>
                <div className="col-span-2 text-center">HSN / SAC</div>
                <div className="col-span-1 text-center">Qty</div>
                <div className="col-span-2 text-right">Rate (₹)</div>
                <div className="col-span-2 text-right">Total (₹)</div>
                <div className="col-span-1 text-center">Action</div>
              </div>

              <div className="divide-y divide-slate-100 bg-white">
                {items.map((item, index) => (
                  <div key={item.id} className="p-4 grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-4">
                      <input 
                        type="text" 
                        placeholder="Product or service name..." 
                        value={item.name} 
                        onChange={(e) => handleItemChange(index, 'name', e.target.value)} 
                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-brand-gold bg-slate-50/50" 
                      />
                    </div>
                    <div className="col-span-2">
                      <input 
                        type="text" 
                        placeholder="9983" 
                        value={item.hsn} 
                        onChange={(e) => handleItemChange(index, 'hsn', e.target.value)} 
                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-center outline-none focus:border-brand-gold bg-slate-50/50 uppercase" 
                      />
                    </div>
                    <div className="col-span-1">
                      <input 
                        type="number" 
                        min="1"
                        value={item.qty} 
                        onChange={(e) => handleItemChange(index, 'qty', e.target.value)} 
                        className="w-full border border-slate-200 rounded-xl px-2 py-2 text-sm text-center outline-none focus:border-brand-gold bg-slate-50/50 font-semibold" 
                      />
                    </div>
                    <div className="col-span-2">
                      <input 
                        type="number" 
                        value={item.rate} 
                        onChange={(e) => handleItemChange(index, 'rate', e.target.value)} 
                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-right outline-none focus:border-brand-gold bg-slate-50/50 font-semibold" 
                      />
                    </div>
                    <div className="col-span-2 text-right font-bold text-brand-navy text-sm">
                      ₹{item.total}
                    </div>
                    <div className="col-span-1 text-center">
                      <button 
                        onClick={() => removeLineItem(index)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={addLineItem} 
              className="bg-brand-navy/5 hover:bg-brand-navy/10 text-brand-navy font-bold text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-2 border border-brand-navy/10 shadow-sm"
            >
              <Plus size={16} className="text-brand-gold" /> Add Line Item
            </button>
            
          </div>

          {/* Bottom Navigation Actions */}
          <div className="flex justify-end gap-4">
            <button 
              onClick={() => handleSaveInvoice('DRAFT')} 
              className="px-8 py-3.5 rounded-xl font-bold text-brand-navy bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
            >
              Save as Draft
            </button>
            <button 
              onClick={() => setCurrentStep(2)} 
              className="px-8 py-3.5 rounded-xl font-bold text-brand-navy bg-brand-gold hover:bg-brand-goldLight transition-colors flex items-center gap-2 shadow-lg"
            >
              Continue to Design <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* --- STEP 2: DESIGN & THEME PREVIEW --- */}
      {currentStep === 2 && (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-0 flex flex-col lg:flex-row gap-8">
          
          {/* Left: Live Document Preview */}
          <div className="flex-1">
            <div className="bg-slate-200/80 p-8 rounded-2xl flex justify-center items-center overflow-hidden border border-slate-300 min-h-[800px] shadow-inner">
              <div className="w-full max-w-[800px] origin-top scale-[0.85] sm:scale-100 transition-transform shadow-2xl rounded-lg">
                {selectedTemplate === 'classic' && (
                  <ClassicTemplate 
                    data={{ invoiceNumber, invoiceDate, storeName: storeProfile?.storeName, storeAddress: storeProfile?.address }} 
                    items={items} 
                    themeColor={themeColor} 
                    logo={logoBase64} 
                  />
                )}
                {selectedTemplate === 'modern' && (
                  <ModernTemplate 
                    data={{ invoiceNumber, invoiceDate, storeName: storeProfile?.storeName }} 
                    items={items} 
                    themeColor={themeColor} 
                    logo={logoBase64} 
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right: Theme Selector Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-4">
                <Palette size={18} className="text-brand-gold" /> Document Theme
              </h3>
              
              {/* Template Selection */}
              <div className="space-y-3 mb-8">
                <div 
                  onClick={() => setSelectedTemplate('classic')}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${selectedTemplate === 'classic' ? 'border-brand-gold bg-brand-gold/5 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-brand-navy">Classic</span>
                    {selectedTemplate === 'classic' && <CheckCircle2 size={18} className="text-brand-gold" />}
                  </div>
                  <div className="w-full h-24 bg-white border border-slate-200 shadow-sm rounded-lg flex flex-col p-2">
                     <div className="w-full h-3 border-b-2 mb-2 transition-colors duration-300" style={{ borderBottomColor: themeColor }}></div>
                     <div className="w-full h-2 bg-slate-100 mb-1 rounded"></div>
                     <div className="w-full h-2 bg-slate-100 rounded"></div>
                  </div>
                </div>

                <div 
                  onClick={() => setSelectedTemplate('modern')}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${selectedTemplate === 'modern' ? 'border-brand-gold bg-brand-gold/5 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-brand-navy">Modern Focus</span>
                    {selectedTemplate === 'modern' && <CheckCircle2 size={18} className="text-brand-gold" />}
                  </div>
                  <div className="w-full h-24 bg-white border border-slate-200 shadow-sm rounded-lg flex flex-col overflow-hidden">
                     <div className="w-full h-6 mb-2 rounded-br-xl transition-colors duration-300" style={{ backgroundColor: themeColor }}></div>
                     <div className="w-[90%] h-2 mx-2 mb-1 rounded transition-colors duration-300" style={{ backgroundColor: `${themeColor}30` }}></div>
                     <div className="w-[90%] h-2 bg-slate-100 mx-2 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Color Palette Grid */}
              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-brand-navy text-sm mb-3">Brand Accent Color</h3>
                <div className="grid grid-cols-4 gap-3">
                  {CURATED_PALETTE.map(color => (
                    <button
                      key={color}
                      onClick={() => setThemeColor(color)}
                      className={`h-12 rounded-xl transition-all flex items-center justify-center ${themeColor === color ? 'ring-2 ring-offset-2 ring-brand-navy scale-105 shadow-md' : 'shadow-sm hover:scale-105 opacity-90 hover:opacity-100'}`}
                      style={{ backgroundColor: color }}
                    >
                      {themeColor === color && <CheckCircle2 size={20} className="text-white drop-shadow-md" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Final Actions */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => handleSaveInvoice('PAID')}
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-brand-navy bg-brand-gold hover:bg-brand-goldLight transition-colors shadow-lg flex justify-center items-center"
              >
                {isSubmitting ? "Generating..." : "Save & Generate Invoice"}
              </button>
              <button 
                onClick={() => setCurrentStep(1)}
                className="w-full py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 border border-slate-300 bg-white"
              >
                <ArrowLeft size={16} /> Back to Details
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default CreateInvoice;