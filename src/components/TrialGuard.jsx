// src/components/TrialGuard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export default function TrialGuard({ children }) {
    const [isChecking, setIsChecking] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const checkTrialStatus = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return; // Handled by ProtectedRoute

                const res = await fetch("http://localhost:8000/api/store/profile", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                
                // if (res.ok) {
                //     const profile = await res.json();

                //     localStorage.setItem('user', JSON.stringify({
                //     id: profile.id,
                //     email: profile.email,
                //     tier: profile.subscription_tier,
                //     subscription_status: profile.subscription_status,
                //     trial_ends_at: profile.trial_ends_at,
                //     is_hq_staff: profile.is_superadmin,
                //     hq_role: profile.tenant_role === "STORE_ADMIN" ? "TENANT" : "SUPERADMIN"
                //     }));
                    
                //     // Skip guard for superadmins or tenant staff (only owners pay)
                //     if (profile.is_superadmin || profile.tenant_role !== "STORE_ADMIN") {
                //         setIsChecking(false);
                //         return;
                //     }

                //     const isTrial = profile.subscription_status === 'TRIAL';
                //     // Parse the ISO date string from the backend
                //     const expiryDate = new Date(profile.trial_ends_at);
                //     const now = new Date();

                //     // If they are on a trial AND the current time is past the expiry time
                //     if (isTrial && now > expiryDate) {
                //         // Force redirect to subscription page unless they are already there
                //         if (location.pathname !== '/subscription') {
                //             navigate('/subscription', { 
                //                 replace: true, 
                //                 state: { message: "Your 5-day free trial has expired. Please choose a plan to continue." } 
                //             });
                //         }
                //     }
                // }

                if (res.ok) {
    const profile = await res.json();

    // --- THE FIX: MERGE INSTEAD OF OVERWRITE ---
    const existingUserStr = localStorage.getItem('user');
    const existingUser = existingUserStr ? JSON.parse(existingUserStr) : {};

    localStorage.setItem('user', JSON.stringify({
        ...existingUser, // Preserves industry, name, and storeName from Signup!
        id: profile.id,
        email: profile.email,
        tier: profile.subscription_tier,
        subscription_status: profile.subscription_status,
        trial_ends_at: profile.trial_ends_at,
        is_hq_staff: profile.is_superadmin,
        hq_role: profile.tenant_role === "STORE_ADMIN" ? "TENANT" : "SUPERADMIN",
        // Fallback: If backend sends industry in profile fetch, use it
        ...(profile.industry && { industry: profile.industry }),
        ...(profile.storeName && { storeName: profile.storeName })
    }));
    
    if (profile.is_superadmin || profile.tenant_role !== "STORE_ADMIN") {
        setIsChecking(false);
        return;
    }

    const isTrial = profile.subscription_status === 'TRIAL';
    const expiryDate = new Date(profile.trial_ends_at);
    const now = new Date();

    if (isTrial && now > expiryDate) {
        if (location.pathname !== '/subscription') {
            navigate('/subscription', { 
                replace: true, 
                state: { message: "Your 5-day free trial has expired. Please choose a plan to continue." } 
            });
        }
    }
}

            } catch (err) {
                console.error("Trial verification failed", err);
            } finally {
                setIsChecking(false);
            }
        };

        checkTrialStatus();
    }, [navigate, location.pathname]);

    if (isChecking) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-[#fbfaf8]">
                <Loader2 className="animate-spin text-[#C5A059]" size={32} />
                <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-widest">Verifying License...</p>
            </div>
        );
    }

    return children;
}