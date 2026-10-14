import React, { useState, useEffect } from 'react';
import { 
  Store, 
  Receipt, 
  Printer, 
  Globe, 
  Plus, 
  Info, 
  Edit, 
  Trash2,
  FileText,
  ReceiptText,
  Loader2,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('store');
  const [isFetching, setIsFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // --- State Management ---
  
  const [storeInfo, setStoreInfo] = useState({
    storeName: '',
    ownerName: '',
    address: '',
    phone: '',
    email: '',
    gstin: '',
    currency: 'INR'
  });

  const [taxSlabs, setTaxSlabs] = useState([
    { id: 1, name: 'GST 0% (Exempt)', rate: 0, cgst: 0, sgst: 0, igst: 0, desc: 'Exempted goods and Services', status: 'Active' },
    { id: 2, name: 'GST 5%', rate: 5, cgst: 2.5, sgst: 2.5, igst: 5, desc: 'Essential goods', status: 'Active' },
    { id: 3, name: 'GST 12%', rate: 12, cgst: 6, sgst: 6, igst: 12, desc: 'Processed foods, dairy products, etc', status: 'Active' },
    { id: 4, name: 'GST 18%', rate: 18, cgst: 9, sgst: 9, igst: 18, desc: 'Electronics, appliances, general goods', status: 'Active' },
    { id: 5, name: 'GST 28%', rate: 28, cgst: 14, sgst: 14, igst: 28, desc: 'Luxury and sin goods', status: 'Active' },
  ]);

  const [preferences, setPreferences] = useState({
    printerFormat: 'thermal',
    language: 'english'
  });

  // --- Side Effects ---
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/store/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) throw new Error("Failed to fetch store profile");

        const data = await response.json();
        setStoreInfo({
          storeName: data.storeName || '',
          ownerName: data.ownerName || '',
          address: data.address || '',
          phone: data.phone || '',
          email: data.email || '', 
          gstin: data.gstin || '',
          currency: data.currency || 'INR'
        });
      } catch (err) {
        setMessage({ type: 'error', text: err.message });
      } finally {
        setIsFetching(false);
      }
    };

    fetchProfile();
  }, []);

  // --- Handlers ---

  const handleStoreChange = (e) => {
    const { name, value } = e.target;
    setStoreInfo(prev => ({ ...prev, [name]: value }));
    if (message.text) setMessage({ type: '', text: '' });
  };

  const handlePreferenceChange = (name, value) => {
    setPreferences(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    // Validate GSTIN format if provided
    if (storeInfo.gstin) {
       const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
       if (!gstinRegex.test(storeInfo.gstin.toUpperCase()) && storeInfo.gstin.length > 0) {
           setMessage({ type: 'error', text: "Invalid GSTIN Format." });
           setLoading(false);
           return;
       }
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8000/api/store/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(storeInfo),
      });

      if (!response.ok) throw new Error("Failed to update settings");
      
      setMessage({ type: 'success', text: 'Settings saved successfully!' });
      
      // Dispatch global event to update Sidebar state
      window.dispatchEvent(new Event("profileUpdated"));
      
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'store', label: 'Store Info', icon: Store },
    { id: 'tax', label: 'Tax Configuration', icon: Receipt },
    { id: 'printer', label: 'Printer Format', icon: Printer },
    { id: 'language', label: 'Language', icon: Globe },
  ];

  if (isFetching) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-blue-600" size={32} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto w-full pb-10">
      
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your store preferences and configurations</p>
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm disabled:opacity-70 flex items-center"
        >
          {loading ? <><Loader2 className="animate-spin mr-2 w-4 h-4" /> Saving...</> : 'Save Changes'}
        </button>
      </div>

      {/* Alert Messages */}
      {message.text && (
        <div className={`mb-6 p-4 rounded-xl border flex items-start gap-3 ${
          message.type === "success" ? "bg-green-50 border-green-100 text-green-700" : "bg-red-50 border-red-100 text-red-600"
        }`}>
          {message.type === "success" ? <CheckCircle2 size={20} className="shrink-0 mt-0.5" /> : <AlertTriangle size={20} className="shrink-0 mt-0.5" />}
          <p className="text-sm font-medium">{message.text}</p>
        </div>
      )}

      {/* Horizontal Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 flex overflow-hidden">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center py-4 text-sm font-semibold border-b-2 transition-all ${
                isActive 
                  ? 'border-blue-600 text-blue-600 bg-blue-50/30' 
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* --- TAB CONTENT: STORE INFO --- */}
      {activeTab === 'store' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 animate-in fade-in duration-300">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Store Information</h2>
            <p className="text-sm text-gray-500 mt-1">Update your store details. This information will appear on generated invoices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Store Name *</label>
              <input
                type="text"
                name="storeName"
                value={storeInfo.storeName}
                onChange={handleStoreChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Owner Name *</label>
              <input
                type="text"
                name="ownerName"
                value={storeInfo.ownerName}
                onChange={handleStoreChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={storeInfo.phone}
                onChange={handleStoreChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={storeInfo.email}
                onChange={handleStoreChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">GSTIN (15 Characters)</label>
              <input
                type="text"
                name="gstin"
                value={storeInfo.gstin}
                onChange={handleStoreChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all uppercase"
                placeholder="e.g. 22AAAAA0000A1Z5"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Base Currency</label>
              <select 
                name="currency" 
                value={storeInfo.currency} 
                onChange={handleStoreChange} 
                className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              >
                <option value="INR">₹ Indian Rupee (INR)</option>
                <option value="USD">$ US Dollar (USD)</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Complete Address</label>
              <textarea
                name="address"
                rows={3}
                value={storeInfo.address}
                onChange={handleStoreChange}
                className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* --- TAB CONTENT: TAX CONFIGURATION --- */}
      {activeTab === 'tax' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 animate-in fade-in duration-300">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Tax Configuration</h2>
              <p className="text-sm text-gray-500 mt-1">Configure GST tax slabs that will be applied to your products and invoices.</p>
            </div>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm">
              <Plus className="w-4 h-4 mr-2" />
              Add New Tax Slab
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start mb-6">
            <Info className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">
              Create and manage GST tax slabs as per government norms. These rates will be used while adding products and in invoices.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-x-auto mb-4">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 border-b border-gray-200 font-semibold">
                <tr>
                  <th className="px-6 py-4">Slab Name</th>
                  <th className="px-6 py-4">Tax Rate (%)</th>
                  <th className="px-6 py-4">CGST (%)</th>
                  <th className="px-6 py-4">SGST (%)</th>
                  <th className="px-6 py-4">IGST (%)</th>
                  <th className="px-6 py-4 w-64">Description</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {taxSlabs.map((slab) => (
                  <tr key={slab.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{slab.name}</td>
                    <td className="px-6 py-4">{slab.rate}%</td>
                    <td className="px-6 py-4">{slab.cgst}%</td>
                    <td className="px-6 py-4">{slab.sgst}%</td>
                    <td className="px-6 py-4">{slab.igst}%</td>
                    <td className="px-6 py-4 text-gray-500 leading-snug">{slab.desc}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1.5"></span>
                        {slab.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center space-x-3">
                        <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md border border-blue-200 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-md border border-red-200 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center text-xs text-gray-500 mb-10">
            <Info className="w-3.5 h-3.5 mr-1.5" />
            For intra-state sales, CGST + SGST will be applied. For inter-state sales, IGST will be applied.
          </div>

          <div className="border border-gray-200 rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 lg:items-center">
            <div className="lg:w-1/3">
              <h3 className="text-lg font-bold text-gray-900">Default Tax Settings</h3>
              <p className="text-sm text-gray-500 mt-1">Set the default tax slab that will be selected while adding new products</p>
            </div>
            <div className="lg:w-1/3">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Default Tax Slab</label>
              <select className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                <option>GST 12% (12%)</option>
                <option>GST 5% (5%)</option>
                <option>GST 18% (18%)</option>
                <option>GST 28% (28%)</option>
                <option>GST 0% (Exempt)</option>
              </select>
              <p className="text-xs text-gray-500 mt-2">You can change this while adding products.</p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-start">
                <Info className="w-4 h-4 text-blue-600 mr-2 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 leading-snug">
                  This settings will reflect in your invoices and reports
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB CONTENT: PRINTER FORMAT --- */}
      {activeTab === 'printer' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 animate-in fade-in duration-300">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Printer Format</h2>
            <p className="text-sm text-gray-500 mt-1">Select the default invoice format layout for your billing counter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            
            <label 
              className={`relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ${
                preferences.printerFormat === 'thermal' ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-300'
              }`}
            >
              <input 
                type="radio" 
                name="printerFormat" 
                value="thermal" 
                className="sr-only"
                checked={preferences.printerFormat === 'thermal'}
                onChange={() => handlePreferenceChange('printerFormat', 'thermal')}
              />
              <span className="flex flex-1">
                <span className="flex flex-col">
                  <span className="block text-sm font-medium text-gray-900 flex items-center">
                    <ReceiptText className="w-5 h-5 mr-2 text-gray-500" />
                    Thermal Receipt (58mm / 80mm)
                  </span>
                  <span className="mt-1 flex items-center text-sm text-gray-500">
                    Fast, continuous roll printing. Ideal for high-speed retail counters.
                  </span>
                </span>
              </span>
              <span className={`h-5 w-5 rounded-full border flex items-center justify-center ${preferences.printerFormat === 'thermal' ? 'border-transparent bg-blue-600' : 'border-gray-300 bg-white'}`}>
                {preferences.printerFormat === 'thermal' && <span className="rounded-full bg-white w-2 h-2" />}
              </span>
            </label>

            <label 
              className={`relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ${
                preferences.printerFormat === 'a4' ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-300'
              }`}
            >
              <input 
                type="radio" 
                name="printerFormat" 
                value="a4" 
                className="sr-only"
                checked={preferences.printerFormat === 'a4'}
                onChange={() => handlePreferenceChange('printerFormat', 'a4')}
              />
              <span className="flex flex-1">
                <span className="flex flex-col">
                  <span className="block text-sm font-medium text-gray-900 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-gray-500" />
                    Standard A4
                  </span>
                  <span className="mt-1 flex items-center text-sm text-gray-500">
                    Detailed layout with letterhead. Ideal for B2B wholesale or large orders.
                  </span>
                </span>
              </span>
              <span className={`h-5 w-5 rounded-full border flex items-center justify-center ${preferences.printerFormat === 'a4' ? 'border-transparent bg-blue-600' : 'border-gray-300 bg-white'}`}>
                {preferences.printerFormat === 'a4' && <span className="rounded-full bg-white w-2 h-2" />}
              </span>
            </label>

          </div>
        </div>
      )}

      {/* --- TAB CONTENT: LANGUAGE --- */}
      {activeTab === 'language' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 animate-in fade-in duration-300">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Language Preferences</h2>
            <p className="text-sm text-gray-500 mt-1">Choose the primary language for the application interface and generated invoices.</p>
          </div>

          <div className="max-w-md">
            <label className="block text-sm font-semibold text-gray-900 mb-2">System Language</label>
            <select 
              value={preferences.language}
              onChange={(e) => handlePreferenceChange('language', e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            >
              <option value="english">English (Default)</option>
              <option value="hindi">Hindi (हिंदी)</option>
              <option value="marathi">Marathi (मराठी)</option>
            </select>
          </div>
        </div>
      )}

    </div>
  );
};

export default Settings;