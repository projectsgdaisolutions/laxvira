// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ChevronDown, ChevronRight, Plus, Copy, Upload, Loader2 } from "lucide-react";

// const SectionHeader = ({ title, optional, isOpen, onClick }) => (
//   <div 
//     className="flex justify-between items-center py-4 cursor-pointer hover:bg-slate-50 transition-colors px-6 border-b border-slate-100"
//     onClick={onClick}
//   >
//     <div className="flex items-center gap-2">
//       <h3 className="text-base font-semibold text-slate-800">{title}</h3>
//       {optional && <span className="text-sm text-slate-400">(optional)</span>}
//     </div>
//     {isOpen ? <ChevronDown size={20} className="text-slate-600" /> : <ChevronRight size={20} className="text-slate-600" />}
//   </div>
// );

// const CreateCustomer = () => {
//   const navigate = useNavigate();
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   // Section toggle states
//   const [sections, setSections] = useState({
//     basic: true,
//     address: true,
//     contacts: true,
//     shipping: true,
//     additional: true,
//     attachments: true,
//     account: false
//   });

//   const toggleSection = (section) => {
//     setSections(prev => ({ ...prev, [section]: !prev[section] }));
//   };

// //   const handleSave = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     // Add your API POST logic here
// //     setTimeout(() => {
// //       setIsSubmitting(false);
// //       navigate('/customers');
// //     }, 1000);
// //   };

// // const handleSave = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
    
// //     try {
// //       const token = localStorage.getItem("token");
      
// //       // Construct payload matching your FastAPI backend fields
// //       const payload = {
// //         company_name: e.target.elements[ ]?.value || "New Client",
// //         contact_person: "",
// //         email: "",
// //         phone: "",
// //         billing_address: "",
// //         shipping_address: "",
// //         gstin: "",
// //         place_of_supply: "Maharashtra(27)"
// //       };

// //       const res = await fetch("http://localhost:8000/api/customers", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`
// //         },
// //         body: JSON.stringify(payload)
// //       });

// //       if (!res.ok) throw new Error("Failed to save client profile");

// //       // Redirect back to the customer directory list
// //       navigate('/customers');
// //     } catch (err) {
// //       alert(err.message);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// const handleSave = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       const token = localStorage.getItem("token");
      
//       // Use e.currentTarget to safely target the form inputs
//       const form = e.currentTarget;
      
//       const payload = {
//         company_name: form.elements.company_name?.value || "New Client",
//         contact_person: form.elements.contact_person?.value || "",
//         email: form.elements.email?.value || "",
//         phone: form.elements.phone?.value || "",
//         billing_address: form.elements.billing_address?.value || "",
//         shipping_address: form.elements.shipping_address?.value || "",
//         gstin: form.elements.gstin?.value || "",
//         place_of_supply: form.elements.place_of_supply?.value || "Maharashtra(27)"
//       };

//       const res = await fetch("http://localhost:8000/api/customers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(payload)
//       });

//       if (!res.ok) throw new Error("Failed to save client profile");

//       // Redirect back to the customer directory list
//       navigate('/customers');
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f8f9fa] p-4 sm:p-8 font-sans">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Breadcrumbs */}
//         <div className="text-sm text-slate-500 mb-6 flex items-center gap-2 font-medium">
//           <span className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/customers')}>Your Clients</span>
//           <ChevronRight size={14} />
//           <span className="text-slate-800">New</span>
//           <ChevronRight size={14} />
//         </div>

//         {/* Main Form Container */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-24">
          
//           {/* Basic Information */}
//           <SectionHeader title="Basic Information" isOpen={sections.basic} onClick={() => toggleSection('basic')} />
//           {sections.basic && (
//             <div className="p-6 space-y-6">
//               <div className="border border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-50 transition-colors bg-[#fafafa]">
//                 <Plus size={24} className="mb-2 text-slate-600" />
//                 <span className="font-medium text-slate-700">Upload Logo</span>
//                 <span className="text-xs mt-1">JPG or PNG, Dimensions 1080x1080px and file size up to 20MB</span>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Name<span className="text-red-500">*</span></label>
//                   <input type="text" placeholder="Business Name (Required)" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-1.5">Client Industry</label>
//                   <div className="relative">
//                     <select className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white">
//                       <option>-Select an Industry-</option>
//                     </select>
//                     <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Country<span className="text-red-500">*</span></label>
//                   <div className="relative">
//                     <select className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white">
//                       <option>India</option>
//                     </select>
//                     <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-1.5">City/Town</label>
//                   <input type="text" placeholder="City/Town Name" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Address */}
//           <SectionHeader title="Address" optional isOpen={sections.address} onClick={() => toggleSection('address')} />
//           {sections.address && (
//             <div className="p-6 space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">Select Country</label>
//                   <div className="relative">
//                     <select className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white">
//                       <option>India</option>
//                     </select>
//                     <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">State / Province</label>
//                   <div className="relative">
//                     <select className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white">
//                       <option>Select State / Province</option>
//                     </select>
//                     <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">City/Town</label>
//                   <input type="text" placeholder="City/Town Name" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">Postal Code / Zip Code</label>
//                   <input type="text" placeholder="Postal Code / Zip Code" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="block text-sm text-slate-700 mb-1.5">Street Address</label>
//                   <input type="text" placeholder="Street Address" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Linked Contacts */}
//           <SectionHeader 
//             title={
//               <div className="flex items-center gap-2">
//                 Linked Contacts <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">0</span>
//               </div>
//             } 
//             isOpen={sections.contacts} 
//             onClick={() => toggleSection('contacts')} 
//           />
//           {sections.contacts && (
//             <div className="p-6">
//               <div className="flex justify-end mb-4">
//                 <button className="text-purple-600 font-medium text-sm flex items-center gap-1 hover:underline">
//                   <Plus size={16} /> Link Contact
//                 </button>
//               </div>
//               <div className="border border-dashed border-slate-300 rounded-lg py-8 text-center text-slate-500 text-sm bg-slate-50/50">
//                 No contacts linked yet
//               </div>
//             </div>
//           )}

//           {/* Shipping Details */}
//           <SectionHeader title="Shipping Details" optional isOpen={sections.shipping} onClick={() => toggleSection('shipping')} />
//           {sections.shipping && (
//             <div className="p-6 space-y-6">
//               <p className="text-sm text-slate-600">Add a primary Shipping Detail for this service</p>
              
//               <button className="text-purple-600 font-medium text-sm flex items-center gap-1.5 hover:underline">
//                 <Copy size={14} /> Copy From Billing Address
//               </button>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">Name</label>
//                   <input type="text" placeholder="Name" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">Select Country</label>
//                   <div className="relative">
//                     <select className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white">
//                       <option>Select Shipping Country</option>
//                     </select>
//                     <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">State</label>
//                   <input type="text" placeholder="State" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">City/Town</label>
//                   <input type="text" placeholder="City/Town Name" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">Postal Code / Zip Code</label>
//                   <input type="text" placeholder="Postal Code / Zip Code" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">Street Address</label>
//                   <input type="text" placeholder="Street Address" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//               </div>

//               <div>
//                 <p className="text-sm text-slate-600 mb-3 mt-2">Have multiple Shipping Addresses? Add here</p>
//                 <button className="w-full md:w-1/2 py-3 border border-dashed border-slate-300 rounded-lg text-slate-500 font-medium text-sm flex justify-center items-center hover:bg-slate-50 transition-colors">
//                   <Plus size={18} className="mr-2 text-purple-400" /> Add Shipping Detail
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Additional Details */}
//           <SectionHeader title="Additional Details" optional isOpen={sections.additional} onClick={() => toggleSection('additional')} />
//           {sections.additional && (
//             <div className="p-6 space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">Business Alias</label>
//                   <input type="text" placeholder="Business Alias" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-1.5">Unique Key</label>
//                   <input type="text" defaultValue="1786335198257" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm bg-slate-50" />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-0.5">Email</label>
//                   <p className="text-xs text-slate-400 mb-1.5">Add to directly email documents from Refrens</p>
//                   <input type="email" placeholder="Email" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm mb-2" />
//                   <label className="flex items-center gap-2 text-sm text-slate-700">
//                     <input type="checkbox" className="rounded text-purple-600 border-slate-300" /> Show Email in Invoice
//                   </label>
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-0.5">Phone No.</label>
//                   <p className="text-xs text-slate-400 mb-1.5">Add to directly WhatsApp documents from Refrens</p>
//                   <div className="flex border border-slate-200 rounded-lg overflow-hidden h-11 mb-2 focus-within:border-purple-500">
//                     <div className="bg-slate-50 px-3 border-r border-slate-200 flex items-center gap-1 cursor-pointer">
//                        🇮🇳 <ChevronDown size={14} className="text-slate-400" />
//                     </div>
//                     <input type="text" defaultValue="+91 " className="flex-1 px-3 outline-none text-sm" />
//                   </div>
//                   <label className="flex items-center gap-2 text-sm text-slate-700">
//                     <input type="checkbox" className="rounded text-purple-600 border-slate-300" /> Show Phone in Invoice
//                   </label>
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-0.5">Default Due Date (Days)</label>
//                   <p className="text-xs text-slate-400 mb-1.5">Documents for this client/vendor will default to this due date unless manually changed</p>
//                   <input type="text" placeholder="e.g., 30" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
//                 </div>
//                 <div className="hidden md:block"></div> {/* Spacer */}
                
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-0.5">Select Payment Account</label>
//                   <p className="text-xs text-slate-400 mb-1.5">Default account displayed on invoices for this client</p>
//                   <div className="relative">
//                     <select className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white text-slate-500">
//                       <option>Select Payment Account</option>
//                     </select>
//                     <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm text-slate-700 mb-0.5">Select UPI ID</label>
//                   <p className="text-xs text-slate-400 mb-1.5">Default UPI ID to be displayed for this client</p>
//                   <div className="relative">
//                     <select className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white text-slate-500">
//                       <option>Select UPI ID</option>
//                     </select>
//                     <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
//                   </div>
//                 </div>
//               </div>

//               <button className="text-purple-600 font-medium text-sm flex items-center gap-1.5 hover:underline mt-4">
//                 <Plus size={16} /> Add Custom Fields
//               </button>
//             </div>
//           )}

//           {/* Attachments */}
//           <SectionHeader title="Attachments" optional isOpen={sections.attachments} onClick={() => toggleSection('attachments')} />
//           {sections.attachments && (
//             <div className="p-6">
//               <p className="text-sm text-slate-700 mb-3">Add Attachments</p>
//               <div className="w-16 h-16 border border-dashed border-slate-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
//                 <Plus size={24} className="text-slate-600" />
//               </div>
//             </div>
//           )}

//           {/* Account Details */}
//           <SectionHeader title="Account Details" optional isOpen={sections.account} onClick={() => toggleSection('account')} />

//           {/* Action Footer */}
//           <div className="p-6 border-t border-slate-100 bg-slate-50/50">
//             <button 
//               onClick={handleSave}
//               disabled={isSubmitting}
//               className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium px-8 py-2.5 rounded-lg transition-colors flex items-center"
//             >
//               {isSubmitting ? <Loader2 size={18} className="animate-spin mr-2" /> : null}
//               Save
//             </button>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateCustomer;

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, Plus, Copy, Upload, Loader2, X } from "lucide-react";

const SectionHeader = ({ title, optional, isOpen, onClick }) => (
  <div 
    className="flex justify-between items-center py-4 cursor-pointer hover:bg-slate-50 transition-colors px-6 border-b border-slate-100"
    onClick={onClick}
  >
    <div className="flex items-center gap-2">
      <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      {optional && <span className="text-sm text-slate-400">(optional)</span>}
    </div>
    {isOpen ? <ChevronDown size={20} className="text-slate-600" /> : <ChevronRight size={20} className="text-slate-600" />}
  </div>
);

const CreateCustomer = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // File Input Refs
  const logoInputRef = useRef(null);
  const attachmentInputRef = useRef(null);
  
  // Section toggle states
  const [sections, setSections] = useState({
    basic: true,
    address: true,
    contacts: true,
    shipping: true,
    additional: true,
    attachments: true,
    account: false
  });

  // Unified Form State (Controlled Component)
  const [formData, setFormData] = useState({
    logo: null,
    company_name: "",
    industry: "",
    country: "India",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    billing_street: "",
    shipping_name: "",
    shipping_country: "India",
    shipping_state: "",
    shipping_city: "",
    shipping_zip: "",
    shipping_street: "",
    linked_contact: "",
    business_alias: "",
    unique_key: "1786335198257",
    email: "",
    show_email_invoice: false,
    phone: "",
    show_phone_invoice: false,
    due_date: "",
    payment_account: "",
    upi_id: "",
    attachments: []
  });

  const toggleSection = (section) => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const copyBillingToShipping = () => {
    setFormData(prev => ({
      ...prev,
      shipping_country: prev.country,
      shipping_state: prev.billing_state,
      shipping_city: prev.billing_city,
      shipping_zip: prev.billing_zip,
      shipping_street: prev.billing_street
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      if (field === 'attachments') {
        setFormData(prev => ({ ...prev, attachments: [...prev.attachments, file] }));
      } else {
        setFormData(prev => ({ ...prev, [field]: file }));
      }
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const token = localStorage.getItem("token");
      
      // Formatting the payload dynamically from state
      const payload = {
        company_name: formData.company_name || "New Client",
        contact_person: formData.linked_contact || "",
        email: formData.email || "",
        phone: formData.phone || "",
        billing_address: `${formData.billing_street}, ${formData.billing_city}, ${formData.billing_state}, ${formData.country} - ${formData.billing_zip}`,
        shipping_address: `${formData.shipping_street}, ${formData.shipping_city}, ${formData.shipping_state}, ${formData.shipping_country} - ${formData.shipping_zip}`,
        place_of_supply: formData.billing_state || "Maharashtra(27)",
        industry: formData.industry,
        show_email_invoice: formData.show_email_invoice,
        show_phone_invoice: formData.show_phone_invoice,
        payment_account: formData.payment_account,
        upi_id: formData.upi_id,
        due_date: formData.due_date
      };

      // Note: If you need to send actual files (logo/attachments) to the backend, 
      // you will need to switch this to use FormData() instead of JSON.stringify()
      // e.g., const formPayload = new FormData(); formPayload.append("logo", formData.logo);
      
      const res = await fetch("http://localhost:8000/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Failed to save client profile");

      navigate('/customers');
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-slate-500 mb-6 flex items-center gap-2 font-medium">
          <span className="cursor-pointer hover:text-slate-800" onClick={() => navigate('/customers')}>Your Clients</span>
          <ChevronRight size={14} />
          <span className="text-slate-800">New</span>
          <ChevronRight size={14} />
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-24">
          
          {/* Basic Information */}
          <SectionHeader title="Basic Information" isOpen={sections.basic} onClick={() => toggleSection('basic')} />
          {sections.basic && (
            <div className="p-6 space-y-6">
              
              {/* Logo Upload */}
              <input type="file" accept="image/jpeg, image/png" ref={logoInputRef} className="hidden" onChange={(e) => handleFileChange(e, 'logo')} />
              <div 
                onClick={() => logoInputRef.current.click()}
                className="border border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-50 transition-colors bg-[#fafafa]"
              >
                {formData.logo ? (
                  <div className="text-green-600 font-medium flex items-center gap-2">
                     ✅ {formData.logo.name} selected
                  </div>
                ) : (
                  <>
                    <Plus size={24} className="mb-2 text-slate-600" />
                    <span className="font-medium text-slate-700">Upload Logo</span>
                    <span className="text-xs mt-1">JPG or PNG, Dimensions 1080x1080px and file size up to 20MB</span>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Name<span className="text-red-500">*</span></label>
                  <input name="company_name" value={formData.company_name} onChange={handleInputChange} type="text" placeholder="Business Name (Required)" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Client Industry</label>
                  <div className="relative">
                    <select name="industry" value={formData.industry} onChange={handleInputChange} className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white">
                      <option value="">-Select an Industry-</option>
                      <option value="IT/Software">IT / Software Services</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Retail">Retail / E-Commerce</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Country<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select name="country" value={formData.country} onChange={handleInputChange} className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white">
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">City/Town</label>
                  <input name="billing_city" value={formData.billing_city} onChange={handleInputChange} type="text" placeholder="City/Town Name" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* Address */}
          <SectionHeader title="Address" optional isOpen={sections.address} onClick={() => toggleSection('address')} />
          {sections.address && (
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">State / Province</label>
                  <input name="billing_state" value={formData.billing_state} onChange={handleInputChange} type="text" placeholder="State / Province" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">Postal Code / Zip Code</label>
                  <input name="billing_zip" value={formData.billing_zip} onChange={handleInputChange} type="text" placeholder="Postal Code / Zip Code" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-slate-700 mb-1.5">Street Address</label>
                  <input name="billing_street" value={formData.billing_street} onChange={handleInputChange} type="text" placeholder="Street Address" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* Linked Contacts */}
          <SectionHeader 
            title={
              <div className="flex items-center gap-2">
                Linked Contacts <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">{formData.linked_contact ? "1" : "0"}</span>
              </div>
            } 
            isOpen={sections.contacts} 
            onClick={() => toggleSection('contacts')} 
          />
          {sections.contacts && (
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm text-slate-700 mb-1.5">Primary Contact Name/Number</label>
                <input name="linked_contact" value={formData.linked_contact} onChange={handleInputChange} type="text" placeholder="e.g. John Doe / 9876543210" className="w-full md:w-1/2 h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
              </div>
            </div>
          )}

          {/* Shipping Details */}
          <SectionHeader title="Shipping Details" optional isOpen={sections.shipping} onClick={() => toggleSection('shipping')} />
          {sections.shipping && (
            <div className="p-6 space-y-6">
              <p className="text-sm text-slate-600">Add a primary Shipping Detail for this service</p>
              
              <button type="button" onClick={copyBillingToShipping} className="text-purple-600 font-medium text-sm flex items-center gap-1.5 hover:underline">
                <Copy size={14} /> Copy From Billing Address
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">Name</label>
                  <input name="shipping_name" value={formData.shipping_name} onChange={handleInputChange} type="text" placeholder="Name" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">Select Country</label>
                  <div className="relative">
                    <select name="shipping_country" value={formData.shipping_country} onChange={handleInputChange} className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white">
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">State</label>
                  <input name="shipping_state" value={formData.shipping_state} onChange={handleInputChange} type="text" placeholder="State" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">City/Town</label>
                  <input name="shipping_city" value={formData.shipping_city} onChange={handleInputChange} type="text" placeholder="City/Town Name" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">Postal Code / Zip Code</label>
                  <input name="shipping_zip" value={formData.shipping_zip} onChange={handleInputChange} type="text" placeholder="Postal Code / Zip Code" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">Street Address</label>
                  <input name="shipping_street" value={formData.shipping_street} onChange={handleInputChange} type="text" placeholder="Street Address" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* Additional Details */}
          <SectionHeader title="Additional Details" optional isOpen={sections.additional} onClick={() => toggleSection('additional')} />
          {sections.additional && (
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">Business Alias</label>
                  <input name="business_alias" value={formData.business_alias} onChange={handleInputChange} type="text" placeholder="Business Alias" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">Unique Key</label>
                  <input name="unique_key" value={formData.unique_key} onChange={handleInputChange} type="text" readOnly className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm bg-slate-50" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-0.5">Email</label>
                  <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm mb-2 mt-2" />
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input name="show_email_invoice" checked={formData.show_email_invoice} onChange={handleInputChange} type="checkbox" className="rounded text-purple-600 border-slate-300" /> Show Email in Invoice
                  </label>
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-0.5">Phone No.</label>
                  <div className="flex border border-slate-200 rounded-lg overflow-hidden h-11 mb-2 mt-2 focus-within:border-purple-500">
                    <div className="bg-slate-50 px-3 border-r border-slate-200 flex items-center gap-1">
                        🇮🇳 <ChevronDown size={14} className="text-slate-400" />
                    </div>
                    <input name="phone" value={formData.phone} onChange={handleInputChange} type="text" placeholder="Phone Number" className="flex-1 px-3 outline-none text-sm" />
                  </div>
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input name="show_phone_invoice" checked={formData.show_phone_invoice} onChange={handleInputChange} type="checkbox" className="rounded text-purple-600 border-slate-300" /> Show Phone in Invoice
                  </label>
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-0.5">Default Due Date (Days)</label>
                  <input name="due_date" value={formData.due_date} onChange={handleInputChange} type="number" placeholder="e.g., 30" className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm mt-2" />
                </div>
                <div className="hidden md:block"></div>
                
                <div>
                  <label className="block text-sm text-slate-700 mb-0.5">Select Payment Account</label>
                  <div className="relative mt-2">
                    <select name="payment_account" value={formData.payment_account} onChange={handleInputChange} className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white text-slate-700">
                      <option value="">Select Payment Account</option>
                      <option value="HDFC Bank - 1234">HDFC Bank - XXXX1234</option>
                      <option value="ICICI Bank - 5678">ICICI Bank - XXXX5678</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-0.5">Select UPI ID</label>
                  <div className="relative mt-2">
                    <select name="upi_id" value={formData.upi_id} onChange={handleInputChange} className="w-full h-11 px-3 border border-slate-200 rounded-lg outline-none focus:border-purple-500 text-sm appearance-none bg-white text-slate-700">
                      <option value="">Select UPI ID</option>
                      <option value="merchant@hdfc">merchant@hdfc</option>
                      <option value="business@icici">business@icici</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Attachments */}
          <SectionHeader title="Attachments" optional isOpen={sections.attachments} onClick={() => toggleSection('attachments')} />
          {sections.attachments && (
            <div className="p-6">
              <input type="file" multiple ref={attachmentInputRef} className="hidden" onChange={(e) => handleFileChange(e, 'attachments')} />
              <p className="text-sm text-slate-700 mb-3">Add Attachments</p>
              
              <div className="flex gap-4 flex-wrap">
                {formData.attachments.map((file, idx) => (
                   <div key={idx} className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded border border-slate-200 text-sm text-slate-700">
                      📄 {file.name}
                      <X size={14} className="cursor-pointer text-slate-400 hover:text-red-500" onClick={() => {
                        const newArr = [...formData.attachments];
                        newArr.splice(idx, 1);
                        setFormData({...formData, attachments: newArr});
                      }}/>
                   </div>
                ))}
                <div 
                  onClick={() => attachmentInputRef.current.click()}
                  className="w-16 h-16 border border-dashed border-slate-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <Plus size={24} className="text-slate-600" />
                </div>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="p-6 border-t border-slate-100 bg-slate-50/50">
            <button 
              onClick={handleSave}
              disabled={isSubmitting}
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium px-8 py-2.5 rounded-lg transition-colors flex items-center"
            >
              {isSubmitting ? <Loader2 size={18} className="animate-spin mr-2" /> : null}
              Save Client
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreateCustomer;