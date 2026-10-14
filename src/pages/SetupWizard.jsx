// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Store, MapPin, Phone, CreditCard, Building2, Loader2, AlertTriangle } from "lucide-react";

// const SetupWizard = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [formData, setFormData] = useState({
//     phone: "",
//     address: "",
//     gstin: "",
//     currency: "INR",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     if (error) setError(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) throw new Error("No authentication token found. Please log in again.");

//       // Network request to your FastAPI backend to save setup data
//       const response = await fetch("http://localhost:8000/api/store/setup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data.detail || "Failed to save store configuration.");
//       }

//       // Success - Redirect to dashboard which will now bypass the wizard
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#EEF1F8] flex items-center justify-center p-4 sm:p-6">
//       <div className="w-full max-w-2xl bg-white rounded-[28px] shadow-xl overflow-hidden ring-1 ring-black/5">
        
//         {/* Header Section */}
//         <div className="bg-gradient-to-r from-[#161F52] to-[#4C2FD1] p-8 sm:p-10 text-white text-center relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
//           <div className="relative z-10 flex flex-col items-center">
//             <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 ring-1 ring-white/20 shadow-lg">
//               <Store size={32} className="text-indigo-200" />
//             </div>
//             <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Complete Store Setup</h1>
//             <p className="text-indigo-200 mt-2 text-sm sm:text-base max-w-md">
//               Let's get your billing system ready. Fill in a few operational details to activate your dashboard.
//             </p>
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className="p-8 sm:p-10">
//           {error && (
//             <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
//               <AlertTriangle size={20} className="shrink-0 mt-0.5" />
//               <p className="text-sm font-medium">{error}</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
//               {/* Phone Input */}
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-gray-700">Business Phone</label>
//                 <div className="flex items-center border border-gray-200 rounded-xl px-3 h-12 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400 transition-all">
//                   <Phone size={18} className="text-gray-400" />
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full bg-transparent outline-none ml-3 text-sm"
//                     placeholder="+91 98765 43210"
//                   />
//                 </div>
//               </div>

//               {/* Currency Select */}
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-gray-700">Base Currency</label>
//                 <div className="flex items-center border border-gray-200 rounded-xl px-3 h-12 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400 transition-all">
//                   <CreditCard size={18} className="text-gray-400" />
//                   <select
//                     name="currency"
//                     value={formData.currency}
//                     onChange={handleChange}
//                     className="w-full bg-transparent outline-none ml-3 text-sm text-gray-700 cursor-pointer"
//                   >
//                     <option value="INR">₹ Indian Rupee (INR)</option>
//                     <option value="USD">$ US Dollar (USD)</option>
//                     <option value="EUR">€ Euro (EUR)</option>
//                     <option value="GBP">£ British Pound (GBP)</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* GSTIN / Tax ID */}
//             <div className="space-y-2">
//               <label className="text-sm font-semibold text-gray-700">GSTIN / Tax ID (Optional)</label>
//               <div className="flex items-center border border-gray-200 rounded-xl px-3 h-12 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400 transition-all">
//                 <Building2 size={18} className="text-gray-400" />
//                 <input
//                   type="text"
//                   name="gstin"
//                   value={formData.gstin}
//                   onChange={handleChange}
//                   className="w-full bg-transparent outline-none ml-3 text-sm uppercase"
//                   placeholder="22AAAAA0000A1Z5"
//                 />
//               </div>
//             </div>

//             {/* Address */}
//             <div className="space-y-2">
//               <label className="text-sm font-semibold text-gray-700">Store Address</label>
//               <div className="flex items-start border border-gray-200 rounded-xl px-3 py-3 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400 transition-all">
//                 <MapPin size={18} className="text-gray-400 mt-0.5" />
//                 <textarea
//                   name="address"
//                   required
//                   value={formData.address}
//                   onChange={handleChange}
//                   rows="3"
//                   className="w-full bg-transparent outline-none ml-3 text-sm resize-none"
//                   placeholder="Full physical address of your store..."
//                 ></textarea>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full flex justify-center items-center h-14 mt-4 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-600 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="animate-spin mr-2" size={20} />
//                   Saving Configuration...
//                 </>
//               ) : (
//                 "Finish Setup & Launch Dashboard"
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SetupWizard;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store, MapPin, Phone, CreditCard, Building2, Loader2, AlertTriangle } from "lucide-react";

const SetupWizard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    gstin: "",
    currency: "INR",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found. Please log in again.");

      const response = await fetch("http://localhost:8000/api/store/setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Failed to save configuration.");
      }

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF1F8] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white rounded-[28px] shadow-xl overflow-hidden ring-1 ring-black/5">
        
        {/* Header Section */}
        <div className="bg-brand-navy p-8 sm:p-10 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 ring-1 ring-brand-gold/20 shadow-lg">
              <Store size={32} className="text-brand-gold" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Complete Profile</h1>
            <p className="text-gray-300 mt-2 text-sm sm:text-base max-w-md">
              Secure your account by verifying your operational and tax details.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8 sm:p-10">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
              <AlertTriangle size={20} className="shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy">Business Phone</label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 h-12 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-gold/20 focus-within:border-brand-gold transition-all">
                  <Phone size={18} className="text-brand-gold" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none ml-3 text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy">Base Currency</label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 h-12 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-gold/20 focus-within:border-brand-gold transition-all">
                  <CreditCard size={18} className="text-brand-gold" />
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none ml-3 text-sm text-gray-700 cursor-pointer"
                  >
                    <option value="INR">₹ Indian Rupee (INR)</option>
                    <option value="USD">$ US Dollar (USD)</option>
                    <option value="EUR">€ Euro (EUR)</option>
                    <option value="GBP">£ British Pound (GBP)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-navy">GSTIN / Tax ID (Optional)</label>
              <div className="flex items-center border border-gray-200 rounded-xl px-3 h-12 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-gold/20 focus-within:border-brand-gold transition-all">
                <Building2 size={18} className="text-brand-gold" />
                <input
                  type="text"
                  name="gstin"
                  value={formData.gstin}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none ml-3 text-sm uppercase"
                  placeholder="22AAAAA0000A1Z5"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-navy">Headquarters / Billing Address</label>
              <div className="flex items-start border border-gray-200 rounded-xl px-3 py-3 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-gold/20 focus-within:border-brand-gold transition-all">
                <MapPin size={18} className="text-brand-gold mt-0.5" />
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-transparent outline-none ml-3 text-sm resize-none"
                  placeholder="Full physical address of your business..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center h-14 mt-4 rounded-xl bg-brand-gold text-brand-navy font-bold text-lg shadow-lg hover:bg-brand-goldLight hover:shadow-xl active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Saving Configuration...
                </>
              ) : (
                "Finish Setup & Launch Dashboard"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetupWizard;