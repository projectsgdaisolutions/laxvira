// import React, { useState } from "react";
// import { Map, Activity, MapPin, Radio } from "lucide-react";

// const TelematicsGps = () => {
//   const [fleet] = useState([
//     { id: "EQ-042", type: "CAT 320", lat: "19.0760° N", lng: "72.8777° E", status: "MOVING", speed: "12 km/h", fuel: "45%" },
//     { id: "EQ-089", type: "Komatsu D61", lat: "18.5204° N", lng: "73.8567° E", status: "IDLE", speed: "0 km/h", fuel: "82%" },
//   ]);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
//       <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

//       <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><Map size={28} /></div>
//             <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">GPS & IoT Telematics</h1>
//           </div>
//           <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded text-sm font-bold"><Activity size={16}/> API Socket Connected</div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 h-[600px]">
//           {/* Map Mock Interface */}
//           <div className="bg-slate-200 border border-slate-300 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
//              <MapPin size={48} className="text-slate-400 mb-4" />
//              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Mapbox / Google Maps SDK Injection Point</p>
//              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-4 border border-slate-300 shadow-lg">
//                 <p className="text-xs font-bold text-slate-500 uppercase mb-2">Live Nodes</p>
//                 <div className="flex items-center gap-2 text-sm font-black text-slate-900"><Radio size={16} className="text-emerald-500 animate-pulse"/> 24 Active Transponders</div>
//              </div>
//           </div>

//           {/* Telemetry Data Stream */}
//           <div className="bg-white border border-slate-200 shadow-sm overflow-y-auto p-4 space-y-4">
//              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-2 mb-4">Raw Data Stream</h3>
//              {fleet.map(unit => (
//                <div key={unit.id} className="border border-slate-200 p-4 rounded bg-slate-50">
//                  <div className="flex justify-between items-start mb-3">
//                    <div>
//                      <p className="text-sm font-black text-slate-900">{unit.id}</p>
//                      <p className="text-[10px] font-bold text-slate-500 uppercase">{unit.type}</p>
//                    </div>
//                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 ${unit.status === 'MOVING' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-600'}`}>{unit.status}</span>
//                  </div>
//                  <div className="space-y-1 text-xs font-mono text-slate-600">
//                    <p>LAT: {unit.lat}</p>
//                    <p>LNG: {unit.lng}</p>
//                    <p>VEL: {unit.speed}</p>
//                    <p>FUEL: <span className="font-bold text-slate-900">{unit.fuel}</span></p>
//                  </div>
//                </div>
//              ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TelematicsGps;

import React, { useState, useEffect } from "react";
import { Map, Activity, MapPin, Radio, Loader2 } from "lucide-react";

const TelematicsGps = () => {
  const [fleet, setFleet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/rental/telematics");
      const json = await res.json();
      setFleet(json.records || []);
    } catch (err) { console.error(err); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => {
    fetchData();
    // Simulate real-time GPS websocket polling
    const interval = setInterval(() => fetchData(), 5000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div className="h-screen w-full flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-indigo-600" size={32} /></div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col items-center">
      <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="relative z-10 w-full max-w-[1600px] px-6 py-8 md:px-10 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white border border-slate-200 border-l-4 border-l-indigo-600 px-6 py-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><Map size={28} /></div>
            <h1 className="text-[28px] md:text-[32px] font-black text-slate-900 tracking-tight leading-none">GPS & IoT Telematics</h1>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded text-sm font-bold"><Activity size={16} className="animate-pulse"/> API Socket Connected</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 h-[600px]">
          <div className="bg-slate-200 border border-slate-300 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
             <MapPin size={48} className="text-slate-400 mb-4" />
             <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Mapbox / Google Maps SDK Injection Point</p>
             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-4 border border-slate-300 shadow-lg">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Live Nodes</p>
                <div className="flex items-center gap-2 text-sm font-black text-slate-900"><Radio size={16} className="text-emerald-500 animate-pulse"/> {fleet.length} Active Transponders</div>
             </div>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm overflow-y-auto p-4 space-y-4">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-2 mb-4">Raw Data Stream</h3>
             {fleet.map(unit => (
               <div key={unit.id} className="border border-slate-200 p-4 rounded bg-slate-50">
                 <div className="flex justify-between items-start mb-3">
                   <div>
                     <p className="text-sm font-black text-slate-900">{unit.id}</p>
                     <p className="text-[10px] font-bold text-slate-500 uppercase">{unit.type}</p>
                   </div>
                   <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 ${unit.status === 'MOVING' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-600'}`}>{unit.status}</span>
                 </div>
                 <div className="space-y-1 text-xs font-mono text-slate-600">
                   <p>LAT: {unit.lat}</p>
                   <p>LNG: {unit.lng}</p>
                   <p>VEL: {unit.speed}</p>
                   <p>FUEL: <span className="font-bold text-slate-900">{unit.fuel}</span></p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TelematicsGps;