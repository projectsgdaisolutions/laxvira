// // // import React, { useState } from "react";
// // // import { Check, X, Crown, Shield, Zap } from "lucide-react";

// // // // const loadRazorpayScript = () => {
// // // //     return new Promise((resolve) => {
// // // //       const script = document.createElement("script");
// // // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // // //       script.onload = () => resolve(true);
// // // //       script.onerror = () => resolve(false);
// // // //       document.body.appendChild(script);
// // // //     });
// // // //   };

// // // const loadRazorpayScript = () => {
// // //     return new Promise((resolve) => {
// // //       // Don't inject multiple times if it's already there
// // //       if (window.Razorpay) {
// // //         resolve(true);
// // //         return;
// // //       }
// // //       const script = document.createElement("script");
// // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // //       script.onload = () => resolve(true);
// // //       script.onerror = () => resolve(false);
// // //       document.body.appendChild(script);
// // //     });
// // //   };

// // // const Subscription = () => {
// // //   const [isAnnual, setIsAnnual] = useState(true);
// // //   // 1. Introduce state to track the active tier
// // //   const [selectedTier, setSelectedTier] = useState("GROWTH");

// // // //   const handleCheckout = (tierName) => {
// // // //     console.log(`Initiating checkout for ${tierName} plan...`);
// // // //     alert(`Checkout flow for ${tierName} will trigger here.`);
// // // //   };

// // // // const handleCheckout = async (tierName) => {
// // // //     const res = await loadRazorpayScript();
// // // //     if (!res) {
// // // //       alert("Razorpay SDK failed to load. Are you offline?");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const token = localStorage.getItem("token");
      
// // // //       // 1. Ask backend to generate an Order ID
// // // //       const orderResponse = await fetch("http://localhost:8000/api/subscriptions/create-order", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           "Authorization": `Bearer ${token}`
// // // //         },
// // // //         body: JSON.stringify({ 
// // // //           tier: tierName, 
// // // //           cycle: isAnnual ? "annual" : "monthly" 
// // // //         })
// // // //       });

// // // //       if (!orderResponse.ok) throw new Error("Failed to create order");
// // // //       const orderData = await orderResponse.json();

// // // //       // 2. Initialize the Razorpay Modal
// // // //       const options = {
// // // //         key: "rzp_test_your_key_here", // Add your public Test Key here
// // // //         amount: orderData.amount,
// // // //         currency: orderData.currency,
// // // //         name: "Laxvira HQ",
// // // //         description: `Upgrade to ${tierName} Plan`,
// // // //         order_id: orderData.order_id,
// // // //         handler: function (response) {
// // // //           // The webhook handles the actual database update securely.
// // // //           // This callback is just for UI feedback.
// // // //           alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
// // // //           window.location.href = "/dashboard";
// // // //         },
// // // //         prefill: {
// // // //           name: "Merchant Account", // Can pull from profile context
// // // //         },
// // // //         theme: {
// // // //           color: "#0A1128", // Brand Navy
// // // //         }
// // // //       };

// // // //       const paymentObject = new window.Razorpay(options);
// // // //       paymentObject.open();

// // // //     } catch (err) {
// // // //       console.error("Checkout error:", err);
// // // //       alert("Something went wrong initiating the checkout.");
// // // //     }
// // // //   };

// // // const handleCheckout = async (tierName) => {
// // //     const isScriptLoaded = await loadRazorpayScript();
    
// // //     if (!isScriptLoaded) {
// // //       alert("Razorpay SDK failed to load. Please check your connection.");
// // //       return;
// // //     }

// // //     try {
// // //       const token = localStorage.getItem("token");
      
// // //       // Step A: Hit our backend to generate a secure Order ID
// // //       const orderResponse = await fetch("http://localhost:8000/api/subscriptions/create-order", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           "Authorization": `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({ 
// // //           tier: tierName, 
// // //           cycle: isAnnual ? "annual" : "monthly" 
// // //         })
// // //       });

// // //       if (!orderResponse.ok) {
// // //         throw new Error("Failed to create checkout session");
// // //       }
      
// // //       const orderData = await orderResponse.json();

// // //       // Step B: Configure and launch the Razorpay Modal
// // //       console.log("DEBUG - VITE KEY:", import.meta.env.VITE_RAZORPAY_KEY_ID);
// // //       const options = {
// // //         key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
// // //         amount: orderData.amount,
// // //         currency: orderData.currency,
// // //         name: "Laxvira HQ",
// // //         description: `Upgrade to ${tierName} Plan`,
// // //         order_id: orderData.order_id,
// // //         handler: function (response) {
// // //           // This block executes when the user successfully completes the test payment in the modal.
// // //           console.log("Payment ID:", response.razorpay_payment_id);
// // //           console.log("Order ID:", response.razorpay_order_id);
// // //           console.log("Signature:", response.razorpay_signature);
          
// // //           alert(`Success! Your account is being upgraded to ${tierName}.`);
// // //           // You could trigger a re-fetch of the user's profile here to update the UI
// // //         },
// // //         prefill: {
// // //           // Optional: Pull this from your dashboardData/profile state if available
// // //           name: "Merchant Account", 
// // //           email: "merchant@example.com",
// // //           contact: "9999999999"
// // //         },
// // //         theme: {
// // //           color: "#0A1128", 
// // //         },
// // //         modal: {
// // //           ondismiss: function() {
// // //             console.log("Checkout modal closed by the user.");
// // //           }
// // //         }
// // //       };

// // //       const paymentObject = new window.Razorpay(options);
// // //       paymentObject.open();

// // //     } catch (err) {
// // //       console.error("Checkout initialization error:", err);
// // //       alert("Something went wrong initiating the checkout.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
// // //       {/* Background Ambience */}
// // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C69C55]/10 blur-[120px] rounded-full pointer-events-none"></div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         <div className="text-center mb-12">
// // //           <h1 className="text-4xl font-black text-[#0A1128] tracking-tight mb-4">
// // //             Select Your Operating Level
// // //           </h1>
// // //           <p className="text-lg text-slate-500 max-w-2xl mx-auto">
// // //             Upgrade your architecture to unlock advanced B2B workflows, inventory management, and predictive analytics.
// // //           </p>

// // //           {/* Billing Toggle */}
// // //           <div className="mt-8 flex justify-center items-center gap-4">
// // //             <span className={`text-sm font-bold ${!isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>Monthly</span>
// // //             <button 
// // //               onClick={() => setIsAnnual(!isAnnual)}
// // //               className="relative w-14 h-7 bg-[#0A1128] rounded-full p-1 transition-colors"
// // //             >
// // //               <div className={`w-5 h-5 bg-[#C69C55] rounded-full transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0"}`}></div>
// // //             </button>
// // //             <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>
// // //               Annually <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">Save 20%</span>
// // //             </span>
// // //           </div>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// // //           {/* TIER 1: BASIC */}
// // //           <PricingCard 
// // //             title="Basic"
// // //             icon={Shield}
// // //             price={isAnnual ? 499 : 599}
// // //             description="Perfect for freelancers and solo merchants focused solely on billing."
// // //             // 2. Dynamically evaluate the highlight prop
// // //             isHighlight={selectedTier === "BASIC"}
// // //             // 3. Update the state when the card is clicked
// // //             onSelect={() => setSelectedTier("BASIC")}
// // //             onCheckout={() => handleCheckout("BASIC")}
// // //             features={[
// // //               { name: "Unlimited Invoices", included: true },
// // //               { name: "Custom Branding", included: true },
// // //               { name: "Client Database", included: true },
// // //               { name: "Inventory Management", included: false },
// // //               { name: "B2B Quotations", included: false },
// // //               { name: "Expense Tracking", included: false },
// // //               { name: "Predictive Forecasts", included: false },
// // //             ]}
// // //           />

// // //           {/* TIER 2: GROWTH */}
// // //           <PricingCard 
// // //             title="Growth"
// // //             icon={Zap}
// // //             price={isAnnual ? 999 : 1199}
// // //             isHighlight={selectedTier === "GROWTH"}
// // //             onSelect={() => setSelectedTier("GROWTH")}
// // //             onCheckout={() => handleCheckout("GROWTH")}
// // //             description="The standard operating system for growing retail and wholesale stores."
// // //             features={[
// // //               { name: "Unlimited Invoices", included: true },
// // //               { name: "Custom Branding", included: true },
// // //               { name: "Client Database", included: true },
// // //               { name: "Inventory Management", included: true },
// // //               { name: "B2B Quotations", included: true },
// // //               { name: "Expense Tracking", included: false },
// // //               { name: "Predictive Forecasts", included: false },
// // //             ]}
// // //           />

// // //           {/* TIER 3: ENTERPRISE */}
// // //           <PricingCard 
// // //             title="Enterprise"
// // //             icon={Crown}
// // //             price={isAnnual ? 2499 : 2999}
// // //             isHighlight={selectedTier === "ENTERPRISE"}
// // //             onSelect={() => setSelectedTier("ENTERPRISE")}
// // //             onCheckout={() => handleCheckout("ENTERPRISE")}
// // //             description="Full-scale ERP capabilities with machine learning and advanced financial routing."
// // //             features={[
// // //               { name: "Unlimited Invoices", included: true },
// // //               { name: "Custom Branding", included: true },
// // //               { name: "Client Database", included: true },
// // //               { name: "Inventory Management", included: true },
// // //               { name: "B2B Quotations", included: true },
// // //               { name: "Expense Tracking", included: true },
// // //               { name: "Predictive Forecasts", included: true },
// // //             ]}
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // 4. Update the sub-component to handle both card selection and checkout triggers
// // // const PricingCard = ({ title, icon: Icon, price, description, features, isHighlight, onSelect, onCheckout }) => (
// // //   <div 
// // //     onClick={onSelect}
// // //     className={`relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
// // //       isHighlight 
// // //         ? "border-2 border-[#C69C55] shadow-[0_20px_40px_-15px_rgba(198,156,85,0.3)] ring-4 ring-[#C69C55]/10 scale-105 z-10" 
// // //         : "border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-slate-300 opacity-90 hover:opacity-100"
// // //     }`}
// // //   >
// // //     {isHighlight && (
// // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C69C55] text-[#0A1128] text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full">
// // //         Selected
// // //       </div>
// // //     )}

// // //     <div className="flex items-center gap-3 mb-4">
// // //       <div className={`p-3 rounded-xl ${isHighlight ? "bg-[#C69C55]/20 text-[#C69C55]" : "bg-slate-100 text-slate-600"}`}>
// // //         <Icon size={24} />
// // //       </div>
// // //       <h3 className="text-xl font-black text-[#0A1128] uppercase tracking-wide">{title}</h3>
// // //     </div>
    
// // //     <p className="text-slate-500 text-sm mb-6 h-10">{description}</p>
    
// // //     <div className="mb-8">
// // //       <span className="text-4xl font-black text-[#0A1128]">₹{price}</span>
// // //       <span className="text-slate-500 font-medium">/month</span>
// // //     </div>

// // //     <button 
// // //       onClick={(e) => {
// // //         e.stopPropagation(); // Prevents the card onClick from firing again
// // //         onCheckout();
// // //       }}
// // //       className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all mb-8 ${
// // //         isHighlight 
// // //           ? "bg-[#0A1128] text-white hover:bg-[#15234b] hover:shadow-lg" 
// // //           : "bg-slate-100 text-[#0A1128] hover:bg-slate-200"
// // //       }`}
// // //     >
// // //       Checkout {title}
// // //     </button>

// // //     <div className="space-y-4">
// // //       <p className="text-xs font-bold text-[#0A1128] uppercase tracking-widest mb-4">Features Included:</p>
// // //       {features.map((feat, idx) => (
// // //         <div key={idx} className="flex items-center gap-3">
// // //           {feat.included ? (
// // //             <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
// // //               <Check size={12} className="text-emerald-600 stroke-[3]" />
// // //             </div>
// // //           ) : (
// // //             <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
// // //               <X size={12} className="text-slate-400 stroke-[3]" />
// // //             </div>
// // //           )}
// // //           <span className={`text-sm ${feat.included ? "text-slate-700 font-medium" : "text-slate-400"}`}>
// // //             {feat.name}
// // //           </span>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </div>
// // // );

// // // export default Subscription;

// // // import React, { useState } from "react";
// // // import { Check, X, Crown, Shield, Zap } from "lucide-react";
// // // const loadRazorpayScript = () => {
// // //     return new Promise((resolve) => {
// // //       // Don't inject multiple times if it's already there
// // //       if (window.Razorpay) {
// // //         resolve(true);
// // //         return;
// // //       }
// // //       const script = document.createElement("script");
// // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // //       script.onload = () => resolve(true);
// // //       script.onerror = () => resolve(false);
// // //       document.body.appendChild(script);
// // //     });
// // //   };

// // // const Subscription = () => {
// // //   const [isAnnual, setIsAnnual] = useState(true);
// // //   // 1. Introduce state to track the active tier
// // //   const [selectedTier, setSelectedTier] = useState("GROWTH");
// // // const handleCheckout = async (tierName) => {
// // //     const isScriptLoaded = await loadRazorpayScript();
    
// // //     if (!isScriptLoaded) {
// // //       alert("Razorpay SDK failed to load. Please check your connection.");
// // //       return;
// // //     }

// // //     try {
// // //       const token = localStorage.getItem("token");
      
// // //       // Step A: Hit our backend to generate a secure Order ID
// // //       const orderResponse = await fetch("http://localhost:8000/api/subscriptions/create-order", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           "Authorization": `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({ 
// // //           tier: tierName, 
// // //           cycle: isAnnual ? "annual" : "monthly" 
// // //         })
// // //       });

// // //       if (!orderResponse.ok) {
// // //         throw new Error("Failed to create checkout session");
// // //       }
      
// // //       const orderData = await orderResponse.json();

// // //       // Step B: Configure and launch the Razorpay Modal
// // //       console.log("DEBUG - VITE KEY:", import.meta.env.VITE_RAZORPAY_KEY_ID);
// // //       const options = {
// // //         key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
// // //         amount: orderData.amount,
// // //         currency: orderData.currency,
// // //         name: "Laxvira HQ",
// // //         description: `Upgrade to ${tierName} Plan`,
// // //         order_id: orderData.order_id,
// // //         handler: async function (response) {
// // //           // This block executes when the user successfully completes the test payment in the modal.
// // //           console.log("Payment ID:", response.razorpay_payment_id);
// // //           console.log("Order ID:", response.razorpay_order_id);
// // //           console.log("Signature:", response.razorpay_signature);
          
// // //           alert(`Success! Your account is being upgraded to ${tierName}.`);
          
// // //           try {
// // //             // Give the webhook time to hit Pinggy and update SQLite backend
// // //             await new Promise(resolve => setTimeout(resolve, 2500));

// // //             // Fetch the freshly upgraded profile
// // //             const profileRes = await fetch("http://localhost:8000/api/store/profile", {
// // //               headers: { Authorization: `Bearer ${token}`,
// // //               "Cache-Control": "no-cache" }
// // //             });

// // //             if (profileRes.ok) {
// // //               const profile = await profileRes.json();
              
// // //               // Update Local Storage so Sidebar & TierGuards instantly drop padlocks
// // //               localStorage.setItem('user', JSON.stringify({
// // //                 id: profile.id,
// // //                 email: profile.email,
// // //                 tier: profile.subscription_tier,
// // //                 subscription_tier: profile.subscription_tier,
// // //                 subscription_status: profile.subscription_status,
// // //                 trial_ends_at: profile.trial_ends_at,
// // //                 is_hq_staff: profile.is_superadmin,
// // //                 hq_role: profile.tenant_role === "STORE_ADMIN" ? "TENANT" : "SUPERADMIN"
// // //               }));

// // //               // Redirect to dashboard to immediately render unlocked features
// // //               window.location.href = "/dashboard";
// // //             }
// // //           } catch (syncErr) {
// // //             console.error("Failed to sync tier state after payment:", syncErr);
// // //             window.location.reload();
// // //           }
// // //         },
// // //         prefill: {
// // //           // Optional: Pull this from your dashboardData/profile state if available
// // //           name: "Merchant Account", 
// // //           email: "merchant@example.com",
// // //           contact: "9999999999"
// // //         },
// // //         theme: {
// // //           color: "#0A1128", 
// // //         },
// // //         modal: {
// // //           ondismiss: function() {
// // //             console.log("Checkout modal closed by the user.");
// // //           }
// // //         }
// // //       };

// // //       const paymentObject = new window.Razorpay(options);
// // //       paymentObject.open();

// // //   } catch (err) {
// // //     console.error("Checkout initialization error:", err);
// // //     alert("Something went wrong initiating the checkout.");
// // //   }
// // // };

// // //   return (
// // //     <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
// // //       {/* Background Ambience */}
// // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C69C55]/10 blur-[120px] rounded-full pointer-events-none"></div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         <div className="text-center mb-12">
// // //           <h1 className="text-4xl font-black text-[#0A1128] tracking-tight mb-4">
// // //             Select Your Operating Level
// // //           </h1>
// // //           <p className="text-lg text-slate-500 max-w-2xl mx-auto">
// // //             Upgrade your architecture to unlock advanced B2B workflows, inventory management, and predictive analytics.
// // //           </p>

// // //           {/* Billing Toggle */}
// // //           <div className="mt-8 flex justify-center items-center gap-4">
// // //             <span className={`text-sm font-bold ${!isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>Monthly</span>
// // //             <button 
// // //               onClick={() => setIsAnnual(!isAnnual)}
// // //               className="relative w-14 h-7 bg-[#0A1128] rounded-full p-1 transition-colors"
// // //             >
// // //               <div className={`w-5 h-5 bg-[#C69C55] rounded-full transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0"}`}></div>
// // //             </button>
// // //             <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>
// // //               Annually <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">Save 20%</span>
// // //             </span>

// // //           </div>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// // //           {/* TIER 1: BASIC */}
// // //           <PricingCard 
// // //             title="Basic"
// // //             icon={Shield}
// // //             price={isAnnual ? 499 : 599}
// // //             description="Perfect for freelancers and solo merchants focused solely on billing."
// // //             // 2. Dynamically evaluate the highlight prop
// // //             isHighlight={selectedTier === "BASIC"}
// // //             // 3. Update the state when the card is clicked
// // //             onSelect={() => setSelectedTier("BASIC")}
// // //             onCheckout={() => handleCheckout("BASIC")}
// // //             features={[
// // //               { name: "Unlimited Invoices", included: true },
// // //               { name: "Custom Branding", included: true },
// // //               { name: "Client Database", included: true },
// // //               { name: "Inventory Management", included: false },
// // //               { name: "B2B Quotations", included: false },
// // //               { name: "Expense Tracking", included: false },
// // //               { name: "Predictive Forecasts", included: false },
// // //             ]}
// // //           />

// // //           {/* TIER 2: GROWTH */}
// // //           <PricingCard 
// // //             title="Growth"
// // //             icon={Zap}
// // //             price={isAnnual ? 999 : 1199}
// // //             isHighlight={selectedTier === "GROWTH"}
// // //             onSelect={() => setSelectedTier("GROWTH")}
// // //             onCheckout={() => handleCheckout("GROWTH")}
// // //             description="The standard operating system for growing retail and wholesale stores."
// // //             features={[
// // //               { name: "Unlimited Invoices", included: true },
// // //               { name: "Custom Branding", included: true },
// // //               { name: "Client Database", included: true },
// // //               { name: "Inventory Management", included: true },
// // //               { name: "B2B Quotations", included: true },
// // //               { name: "Expense Tracking", included: false },
// // //               { name: "Predictive Forecasts", included: false },
// // //             ]}
// // //           />

// // //           {/* TIER 3: ENTERPRISE */}
// // //           <PricingCard 
// // //             title="Enterprise"
// // //             icon={Crown}
// // //             price={isAnnual ? 2499 : 2999}
// // //             isHighlight={selectedTier === "ENTERPRISE"}
// // //             onSelect={() => setSelectedTier("ENTERPRISE")}
// // //             onCheckout={() => handleCheckout("ENTERPRISE")}
// // //             description="Full-scale ERP capabilities with machine learning and advanced financial routing."
// // //             features={[
// // //               { name: "Unlimited Invoices", included: true },
// // //               { name: "Custom Branding", included: true },
// // //               { name: "Client Database", included: true },
// // //               { name: "Inventory Management", included: true },
// // //               { name: "B2B Quotations", included: true },
// // //               { name: "Expense Tracking", included: true },
// // //               { name: "Predictive Forecasts", included: true },
// // //             ]}
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // 4. Update the sub-component to handle both card selection and checkout triggers
// // // const PricingCard = ({ title, icon: Icon, price, description, features, isHighlight, onSelect, onCheckout }) => (
// // //   <div 
// // //     onClick={onSelect}
// // //     className={`relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
// // //       isHighlight 
// // //         ? "border-2 border-[#C69C55] shadow-[0_20px_40px_-15px_rgba(198,156,85,0.3)] ring-4 ring-[#C69C55]/10 scale-105 z-10" 
// // //         : "border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-slate-300 opacity-90 hover:opacity-100"
// // //     }`}
// // //   >
// // //     {isHighlight && (
// // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C69C55] text-[#0A1128] text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full">
// // //         Selected
// // //       </div>
// // //     )}

// // //     <div className="flex items-center gap-3 mb-4">
// // //       <div className={`p-3 rounded-xl ${isHighlight ? "bg-[#C69C55]/20 text-[#C69C55]" : "bg-slate-100 text-slate-600"}`}>
// // //         <Icon size={24} />
// // //       </div>
// // //       <h3 className="text-xl font-black text-[#0A1128] uppercase tracking-wide">{title}</h3>
// // //     </div>
    
// // //     <p className="text-slate-500 text-sm mb-6 h-10">{description}</p>
    
// // //     <div className="mb-8">
// // //       <span className="text-4xl font-black text-[#0A1128]">₹{price}</span>
// // //       <span className="text-slate-500 font-medium">/month</span>
// // //     </div>

// // //     <button 
// // //       onClick={(e) => {
// // //         e.stopPropagation(); // Prevents the card onClick from firing again
// // //         onCheckout();
// // //       }}
// // //       className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all mb-8 ${
// // //         isHighlight 
// // //           ? "bg-[#0A1128] text-white hover:bg-[#15234b] hover:shadow-lg" 
// // //           : "bg-slate-100 text-[#0A1128] hover:bg-slate-200"
// // //       }`}
// // //     >
// // //       Checkout {title}
// // //     </button>

// // //     <div className="space-y-4">
// // //       <p className="text-xs font-bold text-[#0A1128] uppercase tracking-widest mb-4">Features Included:</p>
// // //       {features.map((feat, idx) => (
// // //         <div key={idx} className="flex items-center gap-3">
// // //           {feat.included ? (
// // //             <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
// // //               <Check size={12} className="text-emerald-600 stroke-[3]" />
// // //             </div>
// // //           ) : (
// // //             <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
// // //               <X size={12} className="text-slate-400 stroke-[3]" />
// // //             </div>
// // //           )}
// // //           <span className={`text-sm ${feat.included ? "text-slate-700 font-medium" : "text-slate-400"}`}>
// // //             {feat.name}
// // //           </span>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </div>
// // // );

// // // export default Subscription;

// // // import React, { useState } from "react";
// // // import { Check, X, Crown, Shield, Zap } from "lucide-react";

// // // const loadRazorpayScript = () => {
// // //     return new Promise((resolve) => {
// // //       if (window.Razorpay) {
// // //         resolve(true);
// // //         return;
// // //       }
// // //       const script = document.createElement("script");
// // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // //       script.onload = () => resolve(true);
// // //       script.onerror = () => resolve(false);
// // //       document.body.appendChild(script);
// // //     });
// // //   };

// // // const Subscription = () => {
// // //   const [isAnnual, setIsAnnual] = useState(true);
// // //   const [selectedTier, setSelectedTier] = useState("GROWTH");

// // //   const handleCheckout = async (tierName) => {
// // //     const isScriptLoaded = await loadRazorpayScript();
    
// // //     if (!isScriptLoaded) {
// // //       alert("Razorpay SDK failed to load. Please check your connection.");
// // //       return;
// // //     }

// // //     try {
// // //       const token = localStorage.getItem("token");
      
// // //       const orderResponse = await fetch("http://localhost:8000/api/subscriptions/create-order", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           "Authorization": `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({ 
// // //           tier: tierName, 
// // //           cycle: isAnnual ? "annual" : "monthly" 
// // //         })
// // //       });

// // //       if (!orderResponse.ok) {
// // //         throw new Error("Failed to create checkout session");
// // //       }
      
// // //       const orderData = await orderResponse.json();

// // //       console.log("DEBUG - VITE KEY:", import.meta.env.VITE_RAZORPAY_KEY_ID);
// // //       const options = {
// // //         key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
// // //         amount: orderData.amount,
// // //         currency: orderData.currency,
// // //         name: "Laxvira HQ",
// // //         description: `Upgrade to ${tierName} Plan`,
// // //         order_id: orderData.order_id,
// // //         handler: async function (response) {
// // //           console.log("Payment ID:", response.razorpay_payment_id);
// // //           console.log("Order ID:", response.razorpay_order_id);
// // //           console.log("Signature:", response.razorpay_signature);
          
// // //           alert(`Success! Your account is being upgraded to ${tierName}.`);
          
// // //           try {
// // //             // --- OPTIMISTIC UI UPDATE FIX ---
// // //             // 1. Fetch current local storage so we don't destroy existing keys (like hq_role or id)
// // //             const existingUser = JSON.parse(localStorage.getItem('user') || '{}');
            
// // //             // 2. Safely merge the new tier data into the existing object
// // //             const updatedUser = {
// // //               ...existingUser,
// // //               tier: tierName.toUpperCase(),
// // //               subscription_tier: tierName.toUpperCase(),
// // //               subscription_status: "ACTIVE"
// // //             };
            
// // //             // 3. Save it back
// // //             localStorage.setItem('user', JSON.stringify(updatedUser));

// // //             // 4. Redirect immediately. TierGuard will read the fresh local storage and unlock.
// // //             window.location.href = "/dashboard";
            
// // //           } catch (syncErr) {
// // //             console.error("Failed to sync tier state after payment:", syncErr);
// // //             window.location.reload();
// // //           }
// // //         },
// // //         prefill: {
// // //           name: "Merchant Account", 
// // //           email: "merchant@example.com",
// // //           contact: "9999999999"
// // //         },
// // //         theme: {
// // //           color: "#0A1128", 
// // //         },
// // //         modal: {
// // //           ondismiss: function() {
// // //             console.log("Checkout modal closed by the user.");
// // //           }
// // //         }
// // //       };

// // //       const paymentObject = new window.Razorpay(options);
// // //       paymentObject.open();

// // //   } catch (err) {
// // //     console.error("Checkout initialization error:", err);
// // //     alert("Something went wrong initiating the checkout.");
// // //   }
// // // };

// // //   return (
// // //     <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
// // //       {/* Background Ambience */}
// // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C69C55]/10 blur-[120px] rounded-full pointer-events-none"></div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         <div className="text-center mb-12">
// // //           <h1 className="text-4xl font-black text-[#0A1128] tracking-tight mb-4">
// // //             Select Your Operating Level
// // //           </h1>
// // //           <p className="text-lg text-slate-500 max-w-2xl mx-auto">
// // //             Upgrade your architecture to unlock advanced B2B workflows, inventory management, and predictive analytics.
// // //           </p>

// // //           {/* Billing Toggle */}
// // //           <div className="mt-8 flex justify-center items-center gap-4">
// // //             <span className={`text-sm font-bold ${!isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>Monthly</span>
// // //             <button 
// // //               onClick={() => setIsAnnual(!isAnnual)}
// // //               className="relative w-14 h-7 bg-[#0A1128] rounded-full p-1 transition-colors"
// // //             >
// // //               <div className={`w-5 h-5 bg-[#C69C55] rounded-full transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0"}`}></div>
// // //             </button>
// // //             <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>
// // //               Annually <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">Save 20%</span>
// // //             </span>

// // //           </div>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// // //           {/* TIER 1: BASIC */}
// // //           <PricingCard 
// // //             title="Basic"
// // //             icon={Shield}
// // //             price={isAnnual ? 499 : 599}
// // //             description="Perfect for freelancers and solo merchants focused solely on billing."
// // //             isHighlight={selectedTier === "BASIC"}
// // //             onSelect={() => setSelectedTier("BASIC")}
// // //             onCheckout={() => handleCheckout("BASIC")}
// // //             features={[
// // //               { name: "Unlimited Invoices", included: true },
// // //               { name: "Custom Branding", included: true },
// // //               { name: "Client Database", included: true },
// // //               { name: "Inventory Management", included: false },
// // //               { name: "B2B Quotations", included: false },
// // //               { name: "Expense Tracking", included: false },
// // //               { name: "Predictive Forecasts", included: false },
// // //             ]}
// // //           />

// // //           {/* TIER 2: GROWTH */}
// // //           <PricingCard 
// // //             title="Growth"
// // //             icon={Zap}
// // //             price={isAnnual ? 999 : 1199}
// // //             isHighlight={selectedTier === "GROWTH"}
// // //             onSelect={() => setSelectedTier("GROWTH")}
// // //             onCheckout={() => handleCheckout("GROWTH")}
// // //             description="The standard operating system for growing retail and wholesale stores."
// // //             features={[
// // //               { name: "Unlimited Invoices", included: true },
// // //               { name: "Custom Branding", included: true },
// // //               { name: "Client Database", included: true },
// // //               { name: "Inventory Management", included: true },
// // //               { name: "B2B Quotations", included: true },
// // //               { name: "Expense Tracking", included: false },
// // //               { name: "Predictive Forecasts", included: false },
// // //             ]}
// // //           />

// // //           {/* TIER 3: ENTERPRISE */}
// // //           <PricingCard 
// // //             title="Enterprise"
// // //             icon={Crown}
// // //             price={isAnnual ? 2499 : 2999}
// // //             isHighlight={selectedTier === "ENTERPRISE"}
// // //             onSelect={() => setSelectedTier("ENTERPRISE")}
// // //             onCheckout={() => handleCheckout("ENTERPRISE")}
// // //             description="Full-scale ERP capabilities with machine learning and advanced financial routing."
// // //             features={[
// // //               { name: "Unlimited Invoices", included: true },
// // //               { name: "Custom Branding", included: true },
// // //               { name: "Client Database", included: true },
// // //               { name: "Inventory Management", included: true },
// // //               { name: "B2B Quotations", included: true },
// // //               { name: "Expense Tracking", included: true },
// // //               { name: "Predictive Forecasts", included: true },
// // //             ]}
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const PricingCard = ({ title, icon: Icon, price, description, features, isHighlight, onSelect, onCheckout }) => (
// // //   <div 
// // //     onClick={onSelect}
// // //     className={`relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
// // //       isHighlight 
// // //         ? "border-2 border-[#C69C55] shadow-[0_20px_40px_-15px_rgba(198,156,85,0.3)] ring-4 ring-[#C69C55]/10 scale-105 z-10" 
// // //         : "border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-slate-300 opacity-90 hover:opacity-100"
// // //     }`}
// // //   >
// // //     {isHighlight && (
// // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C69C55] text-[#0A1128] text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full">
// // //         Selected
// // //       </div>
// // //     )}

// // //     <div className="flex items-center gap-3 mb-4">
// // //       <div className={`p-3 rounded-xl ${isHighlight ? "bg-[#C69C55]/20 text-[#C69C55]" : "bg-slate-100 text-slate-600"}`}>
// // //         <Icon size={24} />
// // //       </div>
// // //       <h3 className="text-xl font-black text-[#0A1128] uppercase tracking-wide">{title}</h3>
// // //     </div>
    
// // //     <p className="text-slate-500 text-sm mb-6 h-10">{description}</p>
    
// // //     <div className="mb-8">
// // //       <span className="text-4xl font-black text-[#0A1128]">₹{price}</span>
// // //       <span className="text-slate-500 font-medium">/month</span>
// // //     </div>

// // //     <button 
// // //       onClick={(e) => {
// // //         e.stopPropagation(); 
// // //         onCheckout();
// // //       }}
// // //       className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all mb-8 ${
// // //         isHighlight 
// // //           ? "bg-[#0A1128] text-white hover:bg-[#15234b] hover:shadow-lg" 
// // //           : "bg-slate-100 text-[#0A1128] hover:bg-slate-200"
// // //       }`}
// // //     >
// // //       Checkout {title}
// // //     </button>

// // //     <div className="space-y-4">
// // //       <p className="text-xs font-bold text-[#0A1128] uppercase tracking-widest mb-4">Features Included:</p>
// // //       {features.map((feat, idx) => (
// // //         <div key={idx} className="flex items-center gap-3">
// // //           {feat.included ? (
// // //             <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
// // //               <Check size={12} className="text-emerald-600 stroke-[3]" />
// // //             </div>
// // //           ) : (
// // //             <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
// // //               <X size={12} className="text-slate-400 stroke-[3]" />
// // //             </div>
// // //           )}
// // //           <span className={`text-sm ${feat.included ? "text-slate-700 font-medium" : "text-slate-400"}`}>
// // //             {feat.name}
// // //           </span>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </div>
// // // );

// // // export default Subscription;


// // import React, { useState } from "react";
// // import { Check, X, Crown, Shield, Zap } from "lucide-react";

// // const loadRazorpayScript = () => {
// //   return new Promise((resolve) => {
// //     if (window.Razorpay) {
// //       resolve(true);
// //       return;
// //     }
// //     const script = document.createElement("script");
// //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
// //     script.onload = () => resolve(true);
// //     script.onerror = () => resolve(false);
// //     document.body.appendChild(script);
// //   });
// // };

// // const Subscription = () => {
// //   const [isAnnual, setIsAnnual] = useState(true);
// //   const [selectedTier, setSelectedTier] = useState("GROWTH");
// //   const [isProcessing, setIsProcessing] = useState(false);

// //   const handleCheckout = async (tierName) => {
// //     if (isProcessing) return;
// //     setIsProcessing(true);

// //     const isScriptLoaded = await loadRazorpayScript();
    
// //     if (!isScriptLoaded) {
// //       alert("Razorpay SDK failed to load. Please check your connection.");
// //       setIsProcessing(false);
// //       return;
// //     }

// //     try {
// //       const token = localStorage.getItem("token");
      
// //       const orderResponse = await fetch("http://localhost:8000/api/subscriptions/create-order", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           "Authorization": `Bearer ${token}`
// //         },
// //         body: JSON.stringify({ 
// //           tier: tierName, 
// //           cycle: isAnnual ? "annual" : "monthly" 
// //         })
// //       });

// //       if (!orderResponse.ok) {
// //         throw new Error("Failed to create checkout session");
// //       }
      
// //       const orderData = await orderResponse.json();

// //       const options = {
// //         key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
// //         amount: orderData.amount,
// //         currency: orderData.currency,
// //         name: "Laxvira HQ",
// //         description: `Upgrade to ${tierName} Plan`,
// //         order_id: orderData.order_id,
// //         handler: function (response) {
// //           console.log("Payment ID:", response.razorpay_payment_id);
          
// //           alert(`Payment Successful! Provisioning your ${tierName} workspace...`);
          
// //           // FIX: Add a 3-second delay to allow the backend webhook to complete the database transaction.
// //           // We force a hard redirect so the app remounts and fetches the fresh tier status directly from the DB.
// //           setTimeout(() => {
// //             window.location.href = "/dashboard";
// //           }, 3000);
// //         },
// //         prefill: {
// //           name: "Merchant Account", 
// //           email: "merchant@example.com",
// //           contact: "9999999999"
// //         },
// //         theme: {
// //           color: "#0A1128", 
// //         },
// //         modal: {
// //           ondismiss: function() {
// //             setIsProcessing(false);
// //             console.log("Checkout modal closed by the user.");
// //           }
// //         }
// //       };

// //       const paymentObject = new window.Razorpay(options);
// //       paymentObject.open();

// //     } catch (err) {
// //       console.error("Checkout initialization error:", err);
// //       alert("Something went wrong initiating the checkout.");
// //       setIsProcessing(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
// //       {/* Background Ambience */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C69C55]/10 blur-[120px] rounded-full pointer-events-none"></div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         <div className="text-center mb-12">
// //           <h1 className="text-4xl font-black text-[#0A1128] tracking-tight mb-4">
// //             Select Your Operating Level
// //           </h1>
// //           <p className="text-lg text-slate-500 max-w-2xl mx-auto">
// //             Upgrade your architecture to unlock advanced B2B workflows, inventory management, and predictive analytics.
// //           </p>

// //           {/* Billing Toggle */}
// //           <div className="mt-8 flex justify-center items-center gap-4">
// //             <span className={`text-sm font-bold ${!isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>Monthly</span>
// //             <button 
// //               onClick={() => setIsAnnual(!isAnnual)}
// //               className="relative w-14 h-7 bg-[#0A1128] rounded-full p-1 transition-colors"
// //             >
// //               <div className={`w-5 h-5 bg-[#C69C55] rounded-full transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0"}`}></div>
// //             </button>
// //             <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>
// //               Annually <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">Save 20%</span>
// //             </span>

// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //           {/* TIER 1: BASIC */}
// //           <PricingCard 
// //             title="Basic"
// //             icon={Shield}
// //             price={isAnnual ? 499 : 599}
// //             description="Perfect for freelancers and solo merchants focused solely on billing."
// //             isHighlight={selectedTier === "BASIC"}
// //             onSelect={() => setSelectedTier("BASIC")}
// //             onCheckout={() => handleCheckout("BASIC")}
// //             isProcessing={isProcessing}
// //             features={[
// //               { name: "Unlimited Invoices", included: true },
// //               { name: "Custom Branding", included: true },
// //               { name: "Client Database", included: true },
// //               { name: "Inventory Management", included: false },
// //               { name: "B2B Quotations", included: false },
// //               { name: "Expense Tracking", included: false },
// //               { name: "Predictive Forecasts", included: false },
// //             ]}
// //           />

// //           {/* TIER 2: GROWTH */}
// //           <PricingCard 
// //             title="Growth"
// //             icon={Zap}
// //             price={isAnnual ? 999 : 1199}
// //             isHighlight={selectedTier === "GROWTH"}
// //             onSelect={() => setSelectedTier("GROWTH")}
// //             onCheckout={() => handleCheckout("GROWTH")}
// //             isProcessing={isProcessing}
// //             description="The standard operating system for growing retail and wholesale stores."
// //             features={[
// //               { name: "Unlimited Invoices", included: true },
// //               { name: "Custom Branding", included: true },
// //               { name: "Client Database", included: true },
// //               { name: "Inventory Management", included: true },
// //               { name: "B2B Quotations", included: true },
// //               { name: "Expense Tracking", included: false },
// //               { name: "Predictive Forecasts", included: false },
// //             ]}
// //           />

// //           {/* TIER 3: ENTERPRISE */}
// //           <PricingCard 
// //             title="Enterprise"
// //             icon={Crown}
// //             price={isAnnual ? 2499 : 2999}
// //             isHighlight={selectedTier === "ENTERPRISE"}
// //             onSelect={() => setSelectedTier("ENTERPRISE")}
// //             onCheckout={() => handleCheckout("ENTERPRISE")}
// //             isProcessing={isProcessing}
// //             description="Full-scale ERP capabilities with machine learning and advanced financial routing."
// //             features={[
// //               { name: "Unlimited Invoices", included: true },
// //               { name: "Custom Branding", included: true },
// //               { name: "Client Database", included: true },
// //               { name: "Inventory Management", included: true },
// //               { name: "B2B Quotations", included: true },
// //               { name: "Expense Tracking", included: true },
// //               { name: "Predictive Forecasts", included: true },
// //             ]}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const PricingCard = ({ title, icon: Icon, price, description, features, isHighlight, onSelect, onCheckout, isProcessing }) => (
// //   <div 
// //     onClick={onSelect}
// //     className={`relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
// //       isHighlight 
// //         ? "border-2 border-[#C69C55] shadow-[0_20px_40px_-15px_rgba(198,156,85,0.3)] ring-4 ring-[#C69C55]/10 scale-105 z-10" 
// //         : "border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-slate-300 opacity-90 hover:opacity-100"
// //     }`}
// //   >
// //     {isHighlight && (
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C69C55] text-[#0A1128] text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full">
// //         Selected
// //       </div>
// //     )}

// //     <div className="flex items-center gap-3 mb-4">
// //       <div className={`p-3 rounded-xl ${isHighlight ? "bg-[#C69C55]/20 text-[#C69C55]" : "bg-slate-100 text-slate-600"}`}>
// //         <Icon size={24} />
// //       </div>
// //       <h3 className="text-xl font-black text-[#0A1128] uppercase tracking-wide">{title}</h3>
// //     </div>
    
// //     <p className="text-slate-500 text-sm mb-6 h-10">{description}</p>
    
// //     <div className="mb-8">
// //       <span className="text-4xl font-black text-[#0A1128]">₹{price}</span>
// //       <span className="text-slate-500 font-medium">/month</span>
// //     </div>

// //     <button 
// //       onClick={(e) => {
// //         e.stopPropagation(); 
// //         if (!isProcessing) onCheckout();
// //       }}
// //       disabled={isProcessing}
// //       className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all mb-8 ${
// //         isProcessing 
// //           ? "bg-slate-300 text-slate-500 cursor-not-allowed"
// //           : isHighlight 
// //             ? "bg-[#0A1128] text-white hover:bg-[#15234b] hover:shadow-lg" 
// //             : "bg-slate-100 text-[#0A1128] hover:bg-slate-200"
// //       }`}
// //     >
// //       {isProcessing ? "Processing..." : `Checkout ${title}`}
// //     </button>

// //     <div className="space-y-4">
// //       <p className="text-xs font-bold text-[#0A1128] uppercase tracking-widest mb-4">Features Included:</p>
// //       {features.map((feat, idx) => (
// //         <div key={idx} className="flex items-center gap-3">
// //           {feat.included ? (
// //             <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
// //               <Check size={12} className="text-emerald-600 stroke-[3]" />
// //             </div>
// //           ) : (
// //             <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
// //               <X size={12} className="text-slate-400 stroke-[3]" />
// //             </div>
// //           )}
// //           <span className={`text-sm ${feat.included ? "text-slate-700 font-medium" : "text-slate-400"}`}>
// //             {feat.name}
// //           </span>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );

// // export default Subscription;


// import React, { useState } from "react";
// import { Check, X, Crown, Shield, Zap } from "lucide-react";

// const loadRazorpayScript = () => {
//   return new Promise((resolve) => {
//     if (window.Razorpay) {
//       resolve(true);
//       return;
//     }
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };

// const Subscription = () => {
//   const [isAnnual, setIsAnnual] = useState(true);
//   const [selectedTier, setSelectedTier] = useState("GROWTH");
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleCheckout = async (tierName) => {
//     if (isProcessing) return;
//     setIsProcessing(true);

//     const isScriptLoaded = await loadRazorpayScript();
    
//     if (!isScriptLoaded) {
//       alert("Razorpay SDK failed to load. Please check your connection.");
//       setIsProcessing(false);
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
      
//       const orderResponse = await fetch("http://localhost:8000/api/subscriptions/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({ 
//           tier: tierName, 
//           cycle: isAnnual ? "annual" : "monthly" 
//         })
//       });

//       if (!orderResponse.ok) {
//         throw new Error("Failed to create checkout session");
//       }
      
//       const orderData = await orderResponse.json();

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "Laxvira HQ",
//         description: `Upgrade to ${tierName} Plan`,
//         order_id: orderData.order_id,
//         // --- FIX: Synchronous Backend Verification ---
//         handler: async function (response) {
//           console.log("Payment Successful. Verifying with backend...");
          
//           try {
//             // 1. Send the payment details to our new backend route for verification
//             const verifyRes = await fetch("http://localhost:8000/api/subscriptions/verify-payment", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`
//               },
//               body: JSON.stringify({
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//                 tier: tierName,
//                 cycle: isAnnual ? "annual" : "monthly"
//               })
//             });

//             if (verifyRes.ok) {
//               // 2. The backend updated the DB. Now we update the frontend state!
//               const existingUser = JSON.parse(localStorage.getItem('user') || '{}');
//               existingUser.tier = tierName.toUpperCase();
//               existingUser.subscription_tier = tierName.toUpperCase();
//               existingUser.subscription_status = "ACTIVE";
              
//               localStorage.setItem('user', JSON.stringify(existingUser));

//               alert(`Success! Your account has been upgraded to the ${tierName} plan.`);
              
//               // 3. Redirect to dashboard. The app will now read the new tier in localStorage.
//               window.location.href = "/dashboard";
//             } else {
//               const err = await verifyRes.json();
//               alert(`Payment verified by Razorpay, but server update failed: ${err.detail}`);
//               setIsProcessing(false);
//             }
//           } catch (err) {
//             console.error("Verification error", err);
//             alert("Network error during payment verification.");
//             setIsProcessing(false);
//           }
//         },
//         prefill: {
//           name: "Merchant Account", 
//           email: "merchant@example.com",
//           contact: "9999999999"
//         },
//         theme: {
//           color: "#0A1128", 
//         },
//         modal: {
//           ondismiss: function() {
//             setIsProcessing(false);
//             console.log("Checkout modal closed by the user.");
//           }
//         }
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();

//     } catch (err) {
//       console.error("Checkout initialization error:", err);
//       alert("Something went wrong initiating the checkout.");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
//       {/* Background Ambience */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C69C55]/10 blur-[120px] rounded-full pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-black text-[#0A1128] tracking-tight mb-4">
//             Select Your Operating Level
//           </h1>
//           <p className="text-lg text-slate-500 max-w-2xl mx-auto">
//             Upgrade your architecture to unlock advanced B2B workflows, inventory management, and predictive analytics.
//           </p>

//           {/* Billing Toggle */}
//           <div className="mt-8 flex justify-center items-center gap-4">
//             <span className={`text-sm font-bold ${!isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>Monthly</span>
//             <button 
//               onClick={() => setIsAnnual(!isAnnual)}
//               className="relative w-14 h-7 bg-[#0A1128] rounded-full p-1 transition-colors"
//             >
//               <div className={`w-5 h-5 bg-[#C69C55] rounded-full transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0"}`}></div>
//             </button>
//             <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>
//               Annually <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">Save 20%</span>
//             </span>

//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* TIER 1: BASIC */}
//           <PricingCard 
//             title="Basic"
//             icon={Shield}
//             price={isAnnual ? 499 : 599}
//             description="Perfect for freelancers and solo merchants focused solely on billing."
//             isHighlight={selectedTier === "BASIC"}
//             onSelect={() => setSelectedTier("BASIC")}
//             onCheckout={() => handleCheckout("BASIC")}
//             isProcessing={isProcessing}
//             features={[
//               { name: "Unlimited Invoices", included: true },
//               { name: "Custom Branding", included: true },
//               { name: "Client Database", included: true },
//               { name: "Inventory Management", included: false },
//               { name: "B2B Quotations", included: false },
//               { name: "Expense Tracking", included: false },
//               { name: "Predictive Forecasts", included: false },
//             ]}
//           />

//           {/* TIER 2: GROWTH */}
//           <PricingCard 
//             title="Growth"
//             icon={Zap}
//             price={isAnnual ? 999 : 1199}
//             isHighlight={selectedTier === "GROWTH"}
//             onSelect={() => setSelectedTier("GROWTH")}
//             onCheckout={() => handleCheckout("GROWTH")}
//             isProcessing={isProcessing}
//             description="The standard operating system for growing retail and wholesale stores."
//             features={[
//               { name: "Unlimited Invoices", included: true },
//               { name: "Custom Branding", included: true },
//               { name: "Client Database", included: true },
//               { name: "Inventory Management", included: true },
//               { name: "B2B Quotations", included: true },
//               { name: "Expense Tracking", included: false },
//               { name: "Predictive Forecasts", included: false },
//             ]}
//           />

//           {/* TIER 3: ENTERPRISE */}
//           <PricingCard 
//             title="Enterprise"
//             icon={Crown}
//             price={isAnnual ? 2499 : 2999}
//             isHighlight={selectedTier === "ENTERPRISE"}
//             onSelect={() => setSelectedTier("ENTERPRISE")}
//             onCheckout={() => handleCheckout("ENTERPRISE")}
//             isProcessing={isProcessing}
//             description="Full-scale ERP capabilities with machine learning and advanced financial routing."
//             features={[
//               { name: "Unlimited Invoices", included: true },
//               { name: "Custom Branding", included: true },
//               { name: "Client Database", included: true },
//               { name: "Inventory Management", included: true },
//               { name: "B2B Quotations", included: true },
//               { name: "Expense Tracking", included: true },
//               { name: "Predictive Forecasts", included: true },
//             ]}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const PricingCard = ({ title, icon: Icon, price, description, features, isHighlight, onSelect, onCheckout, isProcessing }) => (
//   <div 
//     onClick={onSelect}
//     className={`relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
//       isHighlight 
//         ? "border-2 border-[#C69C55] shadow-[0_20px_40px_-15px_rgba(198,156,85,0.3)] ring-4 ring-[#C69C55]/10 scale-105 z-10" 
//         : "border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-slate-300 opacity-90 hover:opacity-100"
//     }`}
//   >
//     {isHighlight && (
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C69C55] text-[#0A1128] text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full">
//         Selected
//       </div>
//     )}

//     <div className="flex items-center gap-3 mb-4">
//       <div className={`p-3 rounded-xl ${isHighlight ? "bg-[#C69C55]/20 text-[#C69C55]" : "bg-slate-100 text-slate-600"}`}>
//         <Icon size={24} />
//       </div>
//       <h3 className="text-xl font-black text-[#0A1128] uppercase tracking-wide">{title}</h3>
//     </div>
    
//     <p className="text-slate-500 text-sm mb-6 h-10">{description}</p>
    
//     <div className="mb-8">
//       <span className="text-4xl font-black text-[#0A1128]">₹{price}</span>
//       <span className="text-slate-500 font-medium">/month</span>
//     </div>

//     <button 
//       onClick={(e) => {
//         e.stopPropagation(); 
//         if (!isProcessing) onCheckout();
//       }}
//       disabled={isProcessing}
//       className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all mb-8 ${
//         isProcessing 
//           ? "bg-slate-300 text-slate-500 cursor-not-allowed"
//           : isHighlight 
//             ? "bg-[#0A1128] text-white hover:bg-[#15234b] hover:shadow-lg" 
//             : "bg-slate-100 text-[#0A1128] hover:bg-slate-200"
//       }`}
//     >
//       {isProcessing ? "Processing..." : `Checkout ${title}`}
//     </button>

//     <div className="space-y-4">
//       <p className="text-xs font-bold text-[#0A1128] uppercase tracking-widest mb-4">Features Included:</p>
//       {features.map((feat, idx) => (
//         <div key={idx} className="flex items-center gap-3">
//           {feat.included ? (
//             <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
//               <Check size={12} className="text-emerald-600 stroke-[3]" />
//             </div>
//           ) : (
//             <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
//               <X size={12} className="text-slate-400 stroke-[3]" />
//             </div>
//           )}
//           <span className={`text-sm ${feat.included ? "text-slate-700 font-medium" : "text-slate-400"}`}>
//             {feat.name}
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default Subscription;
//okay till here for normal store


//updated for dynamic pricing 

import React, { useState, useEffect } from "react";
import { Check, X, Crown, Shield, Zap } from "lucide-react";

// --- DYNAMIC INDUSTRY FEATURE CONFIGURATION ---
const INDUSTRY_FEATURES = {
  WHOLESALE: {
    BASIC: [
      { name: "Unlimited Invoices", included: true },
      { name: "Client Database", included: true },
      { name: "Custom Branding", included: true },
      { name: "Inventory Management", included: false },
      { name: "B2B Quotations", included: false },
      { name: "Expense Tracking", included: false },
      { name: "Predictive Forecasts", included: false },
    ],
    GROWTH: [
      { name: "Unlimited Invoices", included: true },
      { name: "Client Database", included: true },
      { name: "Custom Branding", included: true },
      { name: "Inventory Management", included: true },
      { name: "B2B Quotations", included: true },
      { name: "Expense Tracking", included: false },
      { name: "Predictive Forecasts", included: false },
    ],
    ENTERPRISE: [
      { name: "Unlimited Invoices", included: true },
      { name: "Client Database", included: true },
      { name: "Custom Branding", included: true },
      { name: "Inventory Management", included: true },
      { name: "B2B Quotations", included: true },
      { name: "Expense Tracking", included: true },
      { name: "Predictive Forecasts", included: true },
    ]
  },
  RESTAURANT: {
    BASIC: [
      { name: "Table & Floorplan Management", included: true },
      { name: "Split Billing & Tips", included: true },
      { name: "QR Code Ordering", included: true },
      { name: "Kitchen Display System", included: false },
      { name: "Online Aggregator Sync", included: false },
      { name: "Ingredient-Level Inventory", included: false },
      { name: "Menu & Recipe Costing", included: false },
    ],
    GROWTH: [
      { name: "Table & Floorplan Management", included: true },
      { name: "Split Billing & Tips", included: true },
      { name: "QR Code Ordering", included: true },
      { name: "Kitchen Display System", included: true },
      { name: "Online Aggregator Sync", included: true },
      { name: "Ingredient-Level Inventory", included: false },
      { name: "Menu & Recipe Costing", included: false },
    ],
    ENTERPRISE: [
      { name: "Table & Floorplan Management", included: true },
      { name: "Split Billing & Tips", included: true },
      { name: "QR Code Ordering", included: true },
      { name: "Kitchen Display System", included: true },
      { name: "Online Aggregator Sync", included: true },
      { name: "Ingredient-Level Inventory", included: true },
      { name: "Menu & Recipe Costing", included: true },
    ]
  },
  CONSTRUCTION: {
    BASIC: [
      { name: "Milestone-Based Billing", included: true },
      { name: "Compliance Document Storage", included: true },
      { name: "Subcontractor Ledgers", included: true },
      { name: "Labor & Timesheet Tracking", included: false },
      { name: "Equipment & Asset Logs", included: false },
      { name: "Bill of Materials Estimator", included: false },
      { name: "Profitability Forecasting", included: false },
    ],
    GROWTH: [
      { name: "Milestone-Based Billing", included: true },
      { name: "Compliance Document Storage", included: true },
      { name: "Subcontractor Ledgers", included: true },
      { name: "Labor & Timesheet Tracking", included: true },
      { name: "Equipment & Asset Logs", included: true },
      { name: "Bill of Materials Estimator", included: false },
      { name: "Profitability Forecasting", included: false },
    ],
    ENTERPRISE: [
      { name: "Milestone-Based Billing", included: true },
      { name: "Compliance Document Storage", included: true },
      { name: "Subcontractor Ledgers", included: true },
      { name: "Labor & Timesheet Tracking", included: true },
      { name: "Equipment & Asset Logs", included: true },
      { name: "Bill of Materials Estimator", included: true },
      { name: "Profitability Forecasting", included: true },
    ]
  },
  LEGAL: {
    BASIC: [
      { name: "Billable Hours Tracker", included: true },
      { name: "Case File Management", included: true },
      { name: "Conflict of Interest Checks", included: true },
      { name: "Trust & Escrow Accounting", included: false },
      { name: "Court Date Scheduling", included: false },
      { name: "Retainer Balance Auto-Billing", included: false },
      { name: "Secure Client Portal", included: false },
    ],
    GROWTH: [
      { name: "Billable Hours Tracker", included: true },
      { name: "Case File Management", included: true },
      { name: "Conflict of Interest Checks", included: true },
      { name: "Trust & Escrow Accounting", included: true },
      { name: "Court Date Scheduling", included: true },
      { name: "Retainer Balance Auto-Billing", included: false },
      { name: "Secure Client Portal", included: false },
    ],
    ENTERPRISE: [
      { name: "Billable Hours Tracker", included: true },
      { name: "Case File Management", included: true },
      { name: "Conflict of Interest Checks", included: true },
      { name: "Trust & Escrow Accounting", included: true },
      { name: "Court Date Scheduling", included: true },
      { name: "Retainer Balance Auto-Billing", included: true },
      { name: "Secure Client Portal", included: true },
    ]
  },
  RENTAL: {
    BASIC: [
      { name: "Asset Availability Matrix", included: true },
      { name: "Security Deposit Ledger", included: true },
      { name: "Digital Liability Waivers", included: true },
      { name: "Dynamic Pricing Engine", included: false },
      { name: "Late Return Penalties", included: false },
      { name: "Maintenance Ticketing", included: false },
      { name: "Telematics/GPS Integration", included: false },
    ],
    GROWTH: [
      { name: "Asset Availability Matrix", included: true },
      { name: "Security Deposit Ledger", included: true },
      { name: "Digital Liability Waivers", included: true },
      { name: "Dynamic Pricing Engine", included: true },
      { name: "Late Return Penalties", included: true },
      { name: "Maintenance Ticketing", included: false },
      { name: "Telematics/GPS Integration", included: false },
    ],
    ENTERPRISE: [
      { name: "Asset Availability Matrix", included: true },
      { name: "Security Deposit Ledger", included: true },
      { name: "Digital Liability Waivers", included: true },
      { name: "Dynamic Pricing Engine", included: true },
      { name: "Late Return Penalties", included: true },
      { name: "Maintenance Ticketing", included: true },
      { name: "Telematics/GPS Integration", included: true },
    ]
  },
  PHARMACY: {
    BASIC: [
      { name: "Batch & Expiry Tracking", included: true },
      { name: "Rx Digital Storage", included: true },
      { name: "Patient CRM", included: true },
      { name: "Scheduled Drug Compliance", included: false },
      { name: "Refill Reminders", included: false },
      { name: "Health Insurance Exports", included: false },
      { name: "Supplier EDI Integration", included: false },
    ],
    GROWTH: [
      { name: "Batch & Expiry Tracking", included: true },
      { name: "Rx Digital Storage", included: true },
      { name: "Patient CRM", included: true },
      { name: "Scheduled Drug Compliance", included: true },
      { name: "Refill Reminders", included: true },
      { name: "Health Insurance Exports", included: false },
      { name: "Supplier EDI Integration", included: false },
    ],
    ENTERPRISE: [
      { name: "Batch & Expiry Tracking", included: true },
      { name: "Rx Digital Storage", included: true },
      { name: "Patient CRM", included: true },
      { name: "Scheduled Drug Compliance", included: true },
      { name: "Refill Reminders", included: true },
      { name: "Health Insurance Exports", included: true },
      { name: "Supplier EDI Integration", included: true },
    ]
  }
};

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Subscription = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedTier, setSelectedTier] = useState("GROWTH");
  const [isProcessing, setIsProcessing] = useState(false);
  const [userIndustry, setUserIndustry] = useState("WHOLESALE");

  useEffect(() => {
    // Extract industry from local storage on mount
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user.industry && INDUSTRY_FEATURES[user.industry.toUpperCase()]) {
          setUserIndustry(user.industry.toUpperCase());
        }
      } catch (e) {
        console.error("Failed to parse user data for subscription page", e);
      }
    }
  }, []);

  const handleCheckout = async (tierName) => {
    if (isProcessing) return;
    setIsProcessing(true);

    const isScriptLoaded = await loadRazorpayScript();
    
    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      setIsProcessing(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      
      const orderResponse = await fetch("http://localhost:8000/api/subscriptions/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ 
          tier: tierName, 
          cycle: isAnnual ? "annual" : "monthly" 
        })
      });

      if (!orderResponse.ok) {
        throw new Error("Failed to create checkout session");
      }
      
      const orderData = await orderResponse.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Laxvira HQ",
        description: `Upgrade to ${tierName} Plan`,
        order_id: orderData.order_id,
        handler: async function (response) {
          console.log("Payment Successful. Verifying with backend...");
          
          try {
            const verifyRes = await fetch("http://localhost:8000/api/subscriptions/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                tier: tierName,
                cycle: isAnnual ? "annual" : "monthly"
              })
            });

            if (verifyRes.ok) {
              const existingUser = JSON.parse(localStorage.getItem('user') || '{}');
              existingUser.tier = tierName.toUpperCase();
              existingUser.subscription_tier = tierName.toUpperCase();
              existingUser.subscription_status = "ACTIVE";
              
              localStorage.setItem('user', JSON.stringify(existingUser));

              alert(`Success! Your account has been upgraded to the ${tierName} plan.`);
              window.location.href = "/dashboard";
            } else {
              const err = await verifyRes.json();
              alert(`Payment verified by Razorpay, but server update failed: ${err.detail}`);
              setIsProcessing(false);
            }
          } catch (err) {
            console.error("Verification error", err);
            alert("Network error during payment verification.");
            setIsProcessing(false);
          }
        },
        prefill: {
          name: "Merchant Account", 
          email: "merchant@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#0A1128", 
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
            console.log("Checkout modal closed by the user.");
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (err) {
      console.error("Checkout initialization error:", err);
      alert("Something went wrong initiating the checkout.");
      setIsProcessing(false);
    }
  };

  const currentFeatures = INDUSTRY_FEATURES[userIndustry];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C69C55]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-[#0A1128] tracking-tight mb-4">
            Select Your Operating Level
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Upgrade your architecture to unlock advanced workflows, management tools, and predictive analytics tailored for the {userIndustry.toLowerCase()} industry.
          </p>

          <div className="mt-8 flex justify-center items-center gap-4">
            <span className={`text-sm font-bold ${!isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-[#0A1128] rounded-full p-1 transition-colors"
            >
              <div className={`w-5 h-5 bg-[#C69C55] rounded-full transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0"}`}></div>
            </button>
            <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? "text-[#0A1128]" : "text-slate-400"}`}>
              Annually <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* TIER 1: BASIC */}
          <PricingCard 
            title="Basic"
            icon={Shield}
            price={isAnnual ? 499 : 599}
            description="Perfect for solo practitioners and smaller operations focusing on core requirements."
            isHighlight={selectedTier === "BASIC"}
            onSelect={() => setSelectedTier("BASIC")}
            onCheckout={() => handleCheckout("BASIC")}
            isProcessing={isProcessing}
            features={currentFeatures.BASIC}
          />

          {/* TIER 2: GROWTH */}
          <PricingCard 
            title="Growth"
            icon={Zap}
            price={isAnnual ? 999 : 1199}
            isHighlight={selectedTier === "GROWTH"}
            onSelect={() => setSelectedTier("GROWTH")}
            onCheckout={() => handleCheckout("GROWTH")}
            isProcessing={isProcessing}
            description="The standard operating system with robust data flows and automated workflows."
            features={currentFeatures.GROWTH}
          />

          {/* TIER 3: ENTERPRISE */}
          <PricingCard 
            title="Enterprise"
            icon={Crown}
            price={isAnnual ? 2499 : 2999}
            isHighlight={selectedTier === "ENTERPRISE"}
            onSelect={() => setSelectedTier("ENTERPRISE")}
            onCheckout={() => handleCheckout("ENTERPRISE")}
            isProcessing={isProcessing}
            description="Full-scale operational capabilities, advanced compliance tools, and analytics."
            features={currentFeatures.ENTERPRISE}
          />
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ title, icon: Icon, price, description, features, isHighlight, onSelect, onCheckout, isProcessing }) => (
  <div 
    onClick={onSelect}
    className={`relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
      isHighlight 
        ? "border-2 border-[#C69C55] shadow-[0_20px_40px_-15px_rgba(198,156,85,0.3)] ring-4 ring-[#C69C55]/10 scale-105 z-10" 
        : "border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-slate-300 opacity-90 hover:opacity-100"
    }`}
  >
    {isHighlight && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C69C55] text-[#0A1128] text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full">
        Selected
      </div>
    )}

    <div className="flex items-center gap-3 mb-4">
      <div className={`p-3 rounded-xl ${isHighlight ? "bg-[#C69C55]/20 text-[#C69C55]" : "bg-slate-100 text-slate-600"}`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black text-[#0A1128] uppercase tracking-wide">{title}</h3>
    </div>
    
    <p className="text-slate-500 text-sm mb-6 h-10">{description}</p>
    
    <div className="mb-8">
      <span className="text-4xl font-black text-[#0A1128]">₹{price}</span>
      <span className="text-slate-500 font-medium">/month</span>
    </div>

    <button 
      onClick={(e) => {
        e.stopPropagation(); 
        if (!isProcessing) onCheckout();
      }}
      disabled={isProcessing}
      className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all mb-8 ${
        isProcessing 
          ? "bg-slate-300 text-slate-500 cursor-not-allowed"
          : isHighlight 
            ? "bg-[#0A1128] text-white hover:bg-[#15234b] hover:shadow-lg" 
            : "bg-slate-100 text-[#0A1128] hover:bg-slate-200"
      }`}
    >
      {isProcessing ? "Processing..." : `Checkout ${title}`}
    </button>

    <div className="space-y-4">
      <p className="text-xs font-bold text-[#0A1128] uppercase tracking-widest mb-4">Features Included:</p>
      {features.map((feat, idx) => (
        <div key={idx} className="flex items-center gap-3">
          {feat.included ? (
            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <Check size={12} className="text-emerald-600 stroke-[3]" />
            </div>
          ) : (
            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
              <X size={12} className="text-slate-400 stroke-[3]" />
            </div>
          )}
          <span className={`text-sm ${feat.included ? "text-slate-700 font-medium" : "text-slate-400"}`}>
            {feat.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Subscription;
