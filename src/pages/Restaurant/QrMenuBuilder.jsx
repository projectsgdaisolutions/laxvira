// import React from "react";
// import { QrCode, Smartphone, Link, Download } from "lucide-react";

// const QrMenuBuilder = () => {
//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      
//       <div className="relative z-10 w-full max-w-[1200px] px-6 py-8 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
//           <div className="flex items-center gap-5">
//             <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg text-white shrink-0"><QrCode size={28} /></div>
//             <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">QR Code Ordering</h1>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-8 rounded-3xl shadow-sm flex flex-col items-center text-center">
//             <div className="w-64 h-64 bg-slate-900 rounded-2xl mb-6 p-4 flex items-center justify-center border-4 border-slate-900 shadow-xl">
//               <QrCode size={180} className="text-white" strokeWidth={1} />
//             </div>
//             <h3 className="text-xl font-black text-slate-900 mb-2">Table Standee QR</h3>
//             <p className="text-sm font-bold text-slate-500 mb-6">Scan to view live menu and place orders directly to KDS.</p>
//             <button className="bg-slate-900 text-white font-black px-8 py-3 rounded-xl hover:bg-orange-500 transition-colors flex items-center gap-2">
//               <Download size={16} /> Download High-Res PDF
//             </button>
//           </div>

//           <div className="space-y-4">
//             <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
//               <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2"><Link size={16}/> Live Menu Endpoint</h3>
//               <input type="text" readOnly value="https://menu.laxvira.com/t/rest-892" className="w-full bg-slate-100 border border-slate-200 text-sm font-bold text-slate-700 rounded-xl px-4 py-3 outline-none" />
//             </div>
            
//             <div className="bg-gradient-to-br from-orange-400 to-rose-500 p-6 rounded-3xl shadow-lg text-white">
//               <h3 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2"><Smartphone size={16}/> Mobile Experience</h3>
//               <p className="text-sm font-medium opacity-90 mb-4">Guests do not require an app download. The QR opens a React-driven mobile web-app connected directly to your table mapping array.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QrMenuBuilder;

import React from "react";
import { QrCode, Smartphone, Link, Download } from "lucide-react";

const QrMenuBuilder = () => {
  const handleDownload = () => {
    alert("Initiating high-res CMYK PDF export for print production.");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 z-0"></div>
      
      <div className="relative z-10 w-full max-w-[1200px] px-6 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white/60 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg text-white shrink-0"><QrCode size={28} /></div>
            <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-none">QR Code Ordering</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-8 rounded-3xl shadow-sm flex flex-col items-center text-center">
            <div className="w-64 h-64 bg-slate-900 rounded-2xl mb-6 p-4 flex items-center justify-center border-4 border-slate-900 shadow-xl">
              <QrCode size={180} className="text-white" strokeWidth={1} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Table Standee QR</h3>
            <p className="text-sm font-bold text-slate-500 mb-6">Scan to view live menu and place orders directly to KDS.</p>
            <button onClick={handleDownload} className="bg-slate-900 text-white font-black px-8 py-3 rounded-xl hover:bg-orange-500 transition-colors flex items-center gap-2">
              <Download size={16} /> Download High-Res PDF
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-white/80 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2"><Link size={16}/> Live Menu Endpoint</h3>
              <input type="text" readOnly value="https://menu.laxvira.com/t/rest-892" className="w-full bg-slate-100 border border-slate-200 text-sm font-bold text-slate-700 rounded-xl px-4 py-3 outline-none" />
            </div>
            
            <div className="bg-gradient-to-br from-orange-400 to-rose-500 p-6 rounded-3xl shadow-lg text-white">
              <h3 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2"><Smartphone size={16}/> Mobile Experience</h3>
              <p className="text-sm font-medium opacity-90 mb-4">Guests do not require an app download. The QR opens a React-driven mobile web-app connected directly to your table mapping array.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QrMenuBuilder;