// import React, { useState } from 'react';
// import { Loader2, Sparkles } from 'lucide-react';

// const ReceiptScanner = ({ onDataExtracted }) => {
//   const [isScanning, setIsScanning] = useState(false);
//   const [error, setError] = useState(null);

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setIsScanning(true);
//     setError(null);
    
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:8000/api/ai/parse-receipt", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });

//       if (!res.ok) throw new Error("Failed to parse receipt. Please ensure it's a clear image.");
      
//       const extractedData = await res.json();
      
//       // Pass the extracted payload back to the parent form
//       onDataExtracted(extractedData);
      
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setIsScanning(false);
//       e.target.value = null; // Clear input to allow uploading the same file again if needed
//     }
//   };

//   return (
//     <div className="mb-6 relative">
//       <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 relative overflow-hidden ${isScanning ? 'border-[#C5A059] bg-[#C5A059]/5' : 'border-slate-300 hover:border-[#C5A059] hover:bg-slate-50'}`}>
//         <input 
//           type="file" 
//           accept="image/*" 
//           onChange={handleFileUpload}
//           disabled={isScanning}
//           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed z-10" 
//         />
        
//         {isScanning ? (
//           <div className="flex flex-col items-center text-[#C5A059]">
//             <Loader2 className="animate-spin w-8 h-8 mb-3" />
//             <p className="text-sm font-bold tracking-wide">Gemini AI is analyzing receipt...</p>
//             <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">Applying Vision Filters</p>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center text-slate-500">
//             <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3">
//               <Sparkles className="w-6 h-6 text-[#C5A059]" />
//             </div>
//             <p className="text-sm font-black text-slate-700">Auto-Fill with AI</p>
//             <p className="text-xs mt-1 font-medium">Upload a crumpled receipt or invoice to extract details instantly.</p>
//             {error && <p className="text-xs text-rose-500 font-bold mt-3">{error}</p>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReceiptScanner;

import React, { useState, useRef } from 'react';
import { Camera, UploadCloud, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const ReceiptScanner = ({ onDataExtracted }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, scanning, success, error
  const fileInputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsScanning(true);
    setStatus('scanning');

    const formData = new FormData();
    formData.append('receipt', file);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/ai/extract-receipt', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });

      if (!response.ok) throw new Error('Extraction failed');

      const data = await response.json();
      onDataExtracted(data); // Passes the JSON back to CreateInvoice.jsx
      setStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsScanning(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full mb-8">
      <div 
        onClick={() => !isScanning && fileInputRef.current.click()}
        className={`w-full border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center transition-all ${
          isScanning ? 'border-brand-gold bg-brand-gold/5 cursor-wait' : 
          status === 'success' ? 'border-emerald-500 bg-emerald-50' :
          status === 'error' ? 'border-rose-500 bg-rose-50' :
          'border-slate-300 hover:border-brand-navy hover:bg-slate-50 cursor-pointer'
        }`}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept="image/*" 
          capture="environment" 
          hidden 
        />
        
        {status === 'idle' && (
          <>
            <div className="flex gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><UploadCloud size={24}/></div>
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Camera size={24}/></div>
            </div>
            <h3 className="font-bold text-brand-navy">AI Receipt Auto-Fill</h3>
            <p className="text-xs text-slate-500 mt-1">Upload or snap a photo of a physical bill to map line items</p>
          </>
        )}

        {status === 'scanning' && (
          <div className="flex flex-col items-center text-brand-gold">
            <Loader2 size={32} className="animate-spin mb-3" />
            <h3 className="font-bold text-brand-navy">Extracting Line Items...</h3>
            <p className="text-xs text-slate-500 mt-1">Running optical character recognition</p>
          </div>
        )}

        {status === 'success' && (
          <div className="flex flex-col items-center text-emerald-600">
            <CheckCircle2 size={32} className="mb-3" />
            <h3 className="font-bold">Extraction Successful</h3>
            <p className="text-xs text-emerald-600/70 mt-1">Line items have been populated below</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center text-rose-600">
            <AlertCircle size={32} className="mb-3" />
            <h3 className="font-bold">Extraction Failed</h3>
            <p className="text-xs text-rose-600/70 mt-1">Could not read the receipt clearly. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReceiptScanner;