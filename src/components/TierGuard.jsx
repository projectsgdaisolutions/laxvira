// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Lock, Sparkles, ArrowRight } from 'lucide-react';

// const TIER_LEVELS = {
//   BASIC: 1,
//   GROWTH: 2,
//   ENTERPRISE: 3
// };

// export default function TierGuard({ requiredTier = "BASIC", children, fallback = null }) {
//   const user = JSON.parse(localStorage.getItem('user') || '{}');
  
//   // 1. Force uppercase so "growth" becomes "GROWTH" and matches the dictionary
//   const rawUserTier = user?.tier || user?.subscription_tier || 'BASIC';
//   const userTier = String(rawUserTier).toUpperCase();
//   const reqTier = String(requiredTier).toUpperCase();
  
//   // 2. Allow SuperAdmins/HQ Staff to bypass the tier guard entirely
//   if (user.is_hq_staff || user.hq_role === "SUPERADMIN") {
//     return <>{children}</>;
//   }

//   // 3. Compare weights safely
//   const hasAccess = (TIER_LEVELS[userTier] || 1) >= (TIER_LEVELS[reqTier] || 1);

//   if (hasAccess) {
//     return <>{children}</>;
//   }

//   // If they don't have access, return the fallback UI (like a lock icon) or nothing
  

//   if (!hasAccess) {
//     return (
//       <div className="min-h-[80vh] flex items-center justify-center p-6">
//         <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-xl relative overflow-hidden">
//           <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-6 text-[#C5A059]">
//             <Lock size={28} />
//           </div>
          
//           <span className="bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
//             {requiredTier} Plan Required
//           </span>

//           <h2 className="text-2xl font-black text-slate-900 mt-4 mb-2">
//             Unlock This Feature
//           </h2>
//           <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
//             Your current workspace is on the <strong className="text-slate-800">{userTier}</strong> tier. Upgrade your plan to access this module.
//           </p>

//           <button
//             onClick={() => navigate('/subscription')}
//             className="w-full bg-[#0f172a] hover:bg-[#C5A059] text-white hover:text-slate-900 font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg group"
//           >
//             <Sparkles size={16} className="text-[#C5A059] group-hover:text-slate-900" />
//             Upgrade to {requiredTier}
//             <ArrowRight size={16} />
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return children;
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Sparkles, ArrowRight } from 'lucide-react';

const TIER_LEVELS = {
  BASIC: 1,
  GROWTH: 2,
  ENTERPRISE: 3
};

export default function TierGuard({ requiredTier = "BASIC", children, fallback = null }) {
  // 1. FIX: Initialize the navigate hook
  const navigate = useNavigate(); 
  
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  // 2. Force uppercase so "growth" becomes "GROWTH" and matches the dictionary
  const rawUserTier = user?.tier || user?.subscription_tier || 'BASIC';
  const userTier = String(rawUserTier).toUpperCase();
  const reqTier = String(requiredTier).toUpperCase();
  
  // 3. Allow SuperAdmins/HQ Staff to bypass the tier guard entirely
  if (user.is_hq_staff || user.hq_role === "SUPERADMIN") {
    return <>{children}</>;
  }

  // 4. Compare weights safely
  const hasAccess = (TIER_LEVELS[userTier] || 1) >= (TIER_LEVELS[reqTier] || 1);

  if (hasAccess) {
    return <>{children}</>;
  }

  // 5. If they don't have access, respect a custom fallback if provided
  if (fallback) {
    return fallback;
  }

  // 6. Otherwise, return the default locked UI
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-6 text-[#C5A059]">
          <Lock size={28} />
        </div>
        
        <span className="bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
          {requiredTier} Plan Required
        </span>

        <h2 className="text-2xl font-black text-slate-900 mt-4 mb-2">
          Unlock This Feature
        </h2>
        <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
          Your current workspace is on the <strong className="text-slate-800">{userTier}</strong> tier. Upgrade your plan to access this module.
        </p>

        <button
          onClick={() => navigate('/subscription')}
          className="w-full bg-[#0f172a] hover:bg-[#C5A059] text-white hover:text-slate-900 font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg group"
        >
          <Sparkles size={16} className="text-[#C5A059] group-hover:text-slate-900" />
          Upgrade to {requiredTier}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}