// // // // import { useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { Eye, EyeOff, User, Store, Phone, Mail, Lock, TrendingUp, Box as BoxIcon, Cloud } from "lucide-react";
// // // // import logo from "../assets/logo.jpeg";

// // // // const Signup = () => {
// // // //   const [showPassword, setShowPassword] = useState(false);
// // // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// // // //   const [form, setForm] = useState({
// // // //     storeName: "",
// // // //     fullName: "",
// // // //     phone: "",
// // // //     email: "",
// // // //     password: "",
// // // //     confirmPassword: "",
// // // //   });

// // // //   const handleChange = (field) => (e) =>
// // // //     setForm((prev) => ({ ...prev, [field]: e.target.value }));

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log(form);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen w-full bg-[#EEF1F8] flex items-center justify-center p-0 sm:p-6">
// // // //       <div className="w-full sm:max-w-6xl bg-white sm:rounded-[28px] shadow-[0_20px_60px_-15px_rgba(30,42,110,0.35)] ring-1 ring-black/5 overflow-hidden flex flex-col lg:grid lg:grid-cols-2 min-h-screen sm:min-h-0">
// // // //         <div className="relative overflow-hidden bg-gradient-to-br from-[#080D1C] via-[#161F52] to-[#4C2FD1] text-white px-6 py-8 sm:px-10 sm:py-10 lg:p-14 flex flex-col lg:justify-between">
// // // //           <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl"></div>
// // // //           <div className="pointer-events-none absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>

// // // //           <div className="pointer-events-none absolute inset-0 opacity-25 hidden sm:block">
// // // //             <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
// // // //               <path d="M0,120 C100,180 300,60 400,140 L400,400 L0,400 Z" fill="url(#wave)" />
// // // //               <defs>
// // // //                 <linearGradient id="wave" x1="0" y1="0" x2="1" y2="1">
// // // //                   <stop offset="0%" stopColor="#7C6BFF" />
// // // //                   <stop offset="100%" stopColor="#161F52" />
// // // //                 </linearGradient>
// // // //               </defs>
// // // //             </svg>
// // // //           </div>

// // // //           <div className="relative">
// // // //             <div className="flex items-center gap-3 mb-5 lg:mb-10">
// // // //               <img
// // // //                 src={logo}
// // // //                 alt="GD AI Solutions"
// // // //                 className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
// // // //               />
// // // //               <div>
// // // //                 <p className="text-sm sm:text-base font-bold tracking-widest leading-none">
// // // //                   GD <span className="text-indigo-300">AI</span> SOLUTIONS
// // // //                 </p>
// // // //                 <p className="text-[11px] sm:text-xs text-gray-300/90 mt-1.5">
// // // //                   Built on Innovation, powered by Intelligence
// // // //                 </p>
// // // //               </div>
// // // //             </div>

// // // //             <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
// // // //               <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent block lg:inline">
// // // //                 Launch your store
// // // //               </span>{" "}
// // // //               <span className="block">in minutes</span>
// // // //             </h1>

// // // //             <div className="w-16 h-[3px] bg-gradient-to-r from-indigo-300 to-transparent rounded-full my-4 lg:my-8 hidden sm:block"></div>

// // // //             <p className="text-sm sm:text-base text-gray-300 leading-6 sm:leading-8 hidden sm:block max-w-sm">
// // // //               Join thousands of merchants growing their business with an
// // // //               all-in-one commerce platform.
// // // //             </p>
// // // //           </div>

// // // //           <div className="relative hidden lg:block">
// // // //             <div className="flex items-end gap-4 opacity-90 mb-8">
// // // //               <BoxIcon size={38} className="text-indigo-300" />
// // // //               <TrendingUp size={46} className="text-blue-300" />
// // // //               <Cloud size={38} className="text-indigo-200" />
// // // //             </div>
// // // //             <p className="text-xs text-gray-400">© 2026 GD AI Solutions</p>
// // // //           </div>
// // // //         </div>

// // // //         <div className="flex-1 px-6 py-8 sm:p-10 lg:p-14 bg-white">
// // // //           <div className="w-full max-w-xl mx-auto">
// // // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
// // // //               Create your store
// // // //             </h2>

// // // //             <p className="text-sm sm:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
// // // //               Store information
// // // //             </p>

// // // //             <form onSubmit={handleSubmit}>
// // // //               <label htmlFor="storeName" className="text-sm font-semibold text-gray-700">
// // // //                 Store Name
// // // //               </label>

// // // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // // //                   <Store size={18} className="text-indigo-600" />
// // // //                 </span>
// // // //                 <input
// // // //                   id="storeName"
// // // //                   type="text"
// // // //                   value={form.storeName}
// // // //                   onChange={handleChange("storeName")}
// // // //                   placeholder="Enter store name"
// // // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // // //                   autoComplete="organization"
// // // //                 />
// // // //               </div>

// // // //               <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-4">
// // // //                 Owner details
// // // //               </p>

// // // //               <label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
// // // //                 Full Name
// // // //               </label>

// // // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // // //                   <User size={18} className="text-indigo-600" />
// // // //                 </span>
// // // //                 <input
// // // //                   id="fullName"
// // // //                   type="text"
// // // //                   value={form.fullName}
// // // //                   onChange={handleChange("fullName")}
// // // //                   placeholder="Enter full name"
// // // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // // //                   autoComplete="name"
// // // //                 />
// // // //               </div>

// // // //               <div className="grid sm:grid-cols-5 gap-5 mb-6">
// // // //                 <div className="sm:col-span-2">
// // // //                   <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
// // // //                     Phone Number
// // // //                   </label>

// // // //                   <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // // //                     <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // // //                       <Phone size={18} className="text-indigo-600" />
// // // //                     </span>
// // // //                     <input
// // // //                       id="phone"
// // // //                       type="tel"
// // // //                       value={form.phone}
// // // //                       onChange={handleChange("phone")}
// // // //                       placeholder="Phone"
// // // //                       className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // // //                       autoComplete="tel"
// // // //                     />
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="sm:col-span-3">
// // // //                   <label htmlFor="email" className="text-sm font-semibold text-gray-700">
// // // //                     Email Address
// // // //                   </label>

// // // //                   <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // // //                     <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // // //                       <Mail size={18} className="text-indigo-600" />
// // // //                     </span>
// // // //                     <input
// // // //                       id="email"
// // // //                       type="email"
// // // //                       value={form.email}
// // // //                       onChange={handleChange("email")}
// // // //                       placeholder="Email"
// // // //                       className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // // //                       autoComplete="email"
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-4">
// // // //                 Security
// // // //               </p>

// // // //               <label htmlFor="password" className="text-sm font-semibold text-gray-700">
// // // //                 Password
// // // //               </label>

// // // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // // //                   <Lock size={18} className="text-indigo-600" />
// // // //                 </span>
// // // //                 <input
// // // //                   id="password"
// // // //                   type={showPassword ? "text" : "password"}
// // // //                   value={form.password}
// // // //                   onChange={handleChange("password")}
// // // //                   placeholder="Minimum 8 characters"
// // // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // // //                   autoComplete="new-password"
// // // //                 />
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => setShowPassword((v) => !v)}
// // // //                   aria-label={showPassword ? "Hide password" : "Show password"}
// // // //                   className="text-gray-400 hover:text-gray-600 transition shrink-0"
// // // //                 >
// // // //                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // // //                 </button>
// // // //               </div>

// // // //               <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
// // // //                 Confirm Password
// // // //               </label>

// // // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-8 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // // //                   <Lock size={18} className="text-indigo-600" />
// // // //                 </span>
// // // //                 <input
// // // //                   id="confirmPassword"
// // // //                   type={showConfirmPassword ? "text" : "password"}
// // // //                   value={form.confirmPassword}
// // // //                   onChange={handleChange("confirmPassword")}
// // // //                   placeholder="Re-enter your password"
// // // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // // //                   autoComplete="new-password"
// // // //                 />
// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => setShowConfirmPassword((v) => !v)}
// // // //                   aria-label={showConfirmPassword ? "Hide password" : "Show password"}
// // // //                   className="text-gray-400 hover:text-gray-600 transition shrink-0"
// // // //                 >
// // // //                   {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // // //                 </button>
// // // //               </div>

// // // //               <button
// // // //                 type="submit"
// // // //                 className="w-full h-12 sm:h-14 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-indigo-500 bg-[length:160%_100%] bg-left text-white font-semibold text-base sm:text-lg shadow-[0_10px_25px_-8px_rgba(79,70,229,0.6)] hover:bg-right hover:shadow-[0_14px_30px_-8px_rgba(79,70,229,0.75)] active:scale-[0.99] transition-all duration-300"
// // // //               >
// // // //                 Create Store & Continue
// // // //               </button>
// // // //             </form>

// // // //             <p className="text-center text-sm sm:text-base text-gray-600 mt-8">
// // // //               Already have an account?{" "}
// // // //               <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
// // // //                 Sign In
// // // //               </Link>
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Signup;

// // // import { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { 
// // //   Eye, 
// // //   EyeOff, 
// // //   User, 
// // //   Store, 
// // //   Phone, 
// // //   Mail, 
// // //   Lock, 
// // //   TrendingUp, 
// // //   Box as BoxIcon, 
// // //   Cloud,
// // //   Loader2,
// // //   AlertTriangle 
// // // } from "lucide-react";
// // // import logo from "../assets/logo.jpeg";

// // // const Signup = () => {
// // //   const navigate = useNavigate();
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
// // //   // API State
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const [form, setForm] = useState({
// // //     storeName: "",
// // //     fullName: "",
// // //     phone: "",
// // //     email: "",
// // //     password: "",
// // //     confirmPassword: "",
// // //   });

// // //   const handleChange = (field) => (e) => {
// // //     setForm((prev) => ({ ...prev, [field]: e.target.value }));
// // //     // Clear error when user starts typing again
// // //     if (error) setError(null);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);

// // //     // 1. Client-Side Validation
// // //     if (form.password !== form.confirmPassword) {
// // //       setError("Passwords do not match.");
// // //       return;
// // //     }
// // //     if (form.password.length < 6) {
// // //       setError("Password must be at least 6 characters.");
// // //       return;
// // //     }

// // //     setIsLoading(true);

// // //     try {
// // //       // 2. Network Request to FastAPI
// // //       const response = await fetch("http://localhost:8000/api/auth/register", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           storeName: form.storeName,
// // //           ownerName: form.fullName, // Mapped to match backend Pydantic schema
// // //           email: form.email,
// // //           password: form.password,
// // //         }),
// // //       });

// // //       const data = await response.json();

// // //       // Handle HTTP errors (e.g., 400 Email already registered)
// // //       if (!response.ok) {
// // //         throw new Error(data.detail || "Failed to create store. Please try again.");
// // //       }

// // //       // 3. Success Handling
// // //       // Store the JWT token securely in localStorage
// // //       localStorage.setItem("token", data.access_token);
      
// // //       // Redirect to the dashboard
// // //       navigate("/dashboard");

// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen w-full bg-[#EEF1F8] flex items-center justify-center p-0 sm:p-6">
// // //       <div className="w-full sm:max-w-6xl bg-white sm:rounded-[28px] shadow-[0_20px_60px_-15px_rgba(30,42,110,0.35)] ring-1 ring-black/5 overflow-hidden flex flex-col lg:grid lg:grid-cols-2 min-h-screen sm:min-h-0">
        
// // //         {/* Left Side (Visual) - Unchanged */}
// // //         <div className="relative overflow-hidden bg-gradient-to-br from-[#080D1C] via-[#161F52] to-[#4C2FD1] text-white px-6 py-8 sm:px-10 sm:py-10 lg:p-14 flex flex-col lg:justify-between">
// // //           <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl"></div>
// // //           <div className="pointer-events-none absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
// // //           <div className="pointer-events-none absolute inset-0 opacity-25 hidden sm:block">
// // //             <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
// // //               <path d="M0,120 C100,180 300,60 400,140 L400,400 L0,400 Z" fill="url(#wave)" />
// // //               <defs>
// // //                 <linearGradient id="wave" x1="0" y1="0" x2="1" y2="1">
// // //                   <stop offset="0%" stopColor="#7C6BFF" />
// // //                   <stop offset="100%" stopColor="#161F52" />
// // //                 </linearGradient>
// // //               </defs>
// // //             </svg>
// // //           </div>
// // //           <div className="relative">
// // //             <div className="flex items-center gap-3 mb-5 lg:mb-10">
// // //               <img
// // //                 src={logo}
// // //                 alt="GD AI Solutions"
// // //                 className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
// // //               />
// // //               <div>
// // //                 <p className="text-sm sm:text-base font-bold tracking-widest leading-none">
// // //                   GD <span className="text-indigo-300">AI</span> SOLUTIONS
// // //                 </p>
// // //                 <p className="text-[11px] sm:text-xs text-gray-300/90 mt-1.5">
// // //                   Built on Innovation, powered by Intelligence
// // //                 </p>
// // //               </div>
// // //             </div>
// // //             <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
// // //               <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent block lg:inline">
// // //                 Launch your store
// // //               </span>{" "}
// // //               <span className="block">in minutes</span>
// // //             </h1>
// // //             <div className="w-16 h-[3px] bg-gradient-to-r from-indigo-300 to-transparent rounded-full my-4 lg:my-8 hidden sm:block"></div>
// // //             <p className="text-sm sm:text-base text-gray-300 leading-6 sm:leading-8 hidden sm:block max-w-sm">
// // //               Join thousands of merchants growing their business with an
// // //               all-in-one commerce platform.
// // //             </p>
// // //           </div>
// // //           <div className="relative hidden lg:block">
// // //             <div className="flex items-end gap-4 opacity-90 mb-8">
// // //               <BoxIcon size={38} className="text-indigo-300" />
// // //               <TrendingUp size={46} className="text-blue-300" />
// // //               <Cloud size={38} className="text-indigo-200" />
// // //             </div>
// // //             <p className="text-xs text-gray-400">© 2026 GD AI Solutions</p>
// // //           </div>
// // //         </div>

// // //         {/* Right Side (Form) */}
// // //         <div className="flex-1 px-6 py-8 sm:p-10 lg:p-14 bg-white">
// // //           <div className="w-full max-w-xl mx-auto">
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
// // //               Create your store
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-gray-500 mt-2 mb-6 sm:mb-8">
// // //               Store information
// // //             </p>

// // //             {/* Error Banner */}
// // //             {error && (
// // //               <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// // //                 <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// // //                 <p className="text-sm font-medium">{error}</p>
// // //               </div>
// // //             )}

// // //             <form onSubmit={handleSubmit}>
// // //               <label htmlFor="storeName" className="text-sm font-semibold text-gray-700">
// // //                 Store Name
// // //               </label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                   <Store size={18} className="text-indigo-600" />
// // //                 </span>
// // //                 <input
// // //                   id="storeName"
// // //                   type="text"
// // //                   required
// // //                   value={form.storeName}
// // //                   onChange={handleChange("storeName")}
// // //                   placeholder="Enter store name"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="organization"
// // //                 />
// // //               </div>

// // //               <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-4">
// // //                 Owner details
// // //               </p>

// // //               <label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
// // //                 Full Name
// // //               </label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                   <User size={18} className="text-indigo-600" />
// // //                 </span>
// // //                 <input
// // //                   id="fullName"
// // //                   type="text"
// // //                   required
// // //                   value={form.fullName}
// // //                   onChange={handleChange("fullName")}
// // //                   placeholder="Enter full name"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="name"
// // //                 />
// // //               </div>

// // //               <div className="grid sm:grid-cols-5 gap-5 mb-6">
// // //                 <div className="sm:col-span-2">
// // //                   <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
// // //                     Phone Number
// // //                   </label>
// // //                   <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // //                     <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                       <Phone size={18} className="text-indigo-600" />
// // //                     </span>
// // //                     <input
// // //                       id="phone"
// // //                       type="tel"
// // //                       value={form.phone}
// // //                       onChange={handleChange("phone")}
// // //                       placeholder="Phone"
// // //                       className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                       autoComplete="tel"
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 <div className="sm:col-span-3">
// // //                   <label htmlFor="email" className="text-sm font-semibold text-gray-700">
// // //                     Email Address
// // //                   </label>
// // //                   <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // //                     <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                       <Mail size={18} className="text-indigo-600" />
// // //                     </span>
// // //                     <input
// // //                       id="email"
// // //                       type="email"
// // //                       required
// // //                       value={form.email}
// // //                       onChange={handleChange("email")}
// // //                       placeholder="Email"
// // //                       className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                       autoComplete="email"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-4">
// // //                 Security
// // //               </p>

// // //               <label htmlFor="password" className="text-sm font-semibold text-gray-700">
// // //                 Password
// // //               </label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                   <Lock size={18} className="text-indigo-600" />
// // //                 </span>
// // //                 <input
// // //                   id="password"
// // //                   type={showPassword ? "text" : "password"}
// // //                   required
// // //                   value={form.password}
// // //                   onChange={handleChange("password")}
// // //                   placeholder="Minimum 6 characters"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="new-password"
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowPassword((v) => !v)}
// // //                   aria-label={showPassword ? "Hide password" : "Show password"}
// // //                   className="text-gray-400 hover:text-gray-600 transition shrink-0"
// // //                 >
// // //                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //                 </button>
// // //               </div>

// // //               <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
// // //                 Confirm Password
// // //               </label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-8 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                   <Lock size={18} className="text-indigo-600" />
// // //                 </span>
// // //                 <input
// // //                   id="confirmPassword"
// // //                   type={showConfirmPassword ? "text" : "password"}
// // //                   required
// // //                   value={form.confirmPassword}
// // //                   onChange={handleChange("confirmPassword")}
// // //                   placeholder="Re-enter your password"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="new-password"
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowConfirmPassword((v) => !v)}
// // //                   aria-label={showConfirmPassword ? "Hide password" : "Show password"}
// // //                   className="text-gray-400 hover:text-gray-600 transition shrink-0"
// // //                 >
// // //                   {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //                 </button>
// // //               </div>

// // //               <button
// // //                 type="submit"
// // //                 disabled={isLoading}
// // //                 className="w-full flex justify-center items-center h-12 sm:h-14 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-indigo-500 bg-[length:160%_100%] bg-left text-white font-semibold text-base sm:text-lg shadow-[0_10px_25px_-8px_rgba(79,70,229,0.6)] hover:bg-right hover:shadow-[0_14px_30px_-8px_rgba(79,70,229,0.75)] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
// // //               >
// // //                 {isLoading ? (
// // //                   <>
// // //                     <Loader2 className="animate-spin mr-2" size={20} />
// // //                     Creating Store...
// // //                   </>
// // //                 ) : (
// // //                   "Create Store & Continue"
// // //                 )}
// // //               </button>
// // //             </form>

// // //             <p className="text-center text-sm sm:text-base text-gray-600 mt-8">
// // //               Already have an account?{" "}
// // //               <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
// // //                 Sign In
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Signup;

// // // import { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { 
// // //   Eye, EyeOff, User, Store, Phone, Mail, Lock, 
// // //   TrendingUp, Box as BoxIcon, Cloud, Loader2, AlertTriangle 
// // // } from "lucide-react";
// // // import logo from "../assets/logo.jpg";

// // // const Signup = () => {
// // //   const navigate = useNavigate();
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const [form, setForm] = useState({
// // //     storeName: "", fullName: "", phone: "", email: "", password: "", confirmPassword: "",
// // //   });

// // //   const handleChange = (field) => (e) => {
// // //     setForm((prev) => ({ ...prev, [field]: e.target.value }));
// // //     if (error) setError(null);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     if (form.password !== form.confirmPassword) {
// // //       setError("Passwords do not match.");
// // //       return;
// // //     }
// // //     if (form.password.length < 6) {
// // //       setError("Password must be at least 6 characters.");
// // //       return;
// // //     }
// // //     setIsLoading(true);
// // //     try {
// // //       const response = await fetch("http://localhost:8000/api/auth/register", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           storeName: form.storeName,
// // //           ownerName: form.fullName, 
// // //           email: form.email,
// // //           password: form.password,
// // //         }),
// // //       });
// // //       const data = await response.json();
// // //       if (!response.ok) throw new Error(data.detail || "Failed to create store. Please try again.");
      
// // //       localStorage.setItem("token", data.access_token);
// // //       navigate("/dashboard");
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen w-full bg-[#EEF1F8] flex items-center justify-center p-0 sm:p-6">
// // //       <div className="w-full sm:max-w-6xl bg-white sm:rounded-[28px] shadow-2xl ring-1 ring-black/5 overflow-hidden flex flex-col lg:grid lg:grid-cols-2 min-h-screen sm:min-h-0">
        
// // //         {/* Left Side (Visual) */}
// // //         <div className="relative overflow-hidden bg-brand-navy text-white px-6 py-8 sm:px-10 sm:py-10 lg:p-14 flex flex-col lg:justify-between">
// // //           <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-gold/20 blur-3xl"></div>
// // //           <div className="pointer-events-none absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl"></div>
// // //           <div className="pointer-events-none absolute inset-0 opacity-20 hidden sm:block">
// // //             <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
// // //               <path d="M0,120 C100,180 300,60 400,140 L400,400 L0,400 Z" fill="url(#wave)" />
// // //               <defs>
// // //                 <linearGradient id="wave" x1="0" y1="0" x2="1" y2="1">
// // //                   <stop offset="0%" stopColor="#C69C55" />
// // //                   <stop offset="100%" stopColor="#101E36" />
// // //                 </linearGradient>
// // //               </defs>
// // //             </svg>
// // //           </div>
// // //           <div className="relative">
// // //             <div className="flex items-center gap-3 mb-5 lg:mb-10">
// // //               <img
// // //                 src={logo}
// // //                 alt="Laxvira"
// // //                 className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
// // //               />
// // //               <div>
// // //                 <p className="text-sm sm:text-base font-bold tracking-widest leading-none">LAXVIRA</p>
// // //                 <p className="text-[11px] sm:text-xs text-brand-gold mt-1.5">Smart Business. Smarter Finance.</p>
// // //               </div>
// // //             </div>
// // //             <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
// // //               <span className="text-brand-gold block lg:inline">Launch your firm</span>{" "}
// // //               <span className="block">in minutes</span>
// // //             </h1>
// // //             <div className="w-16 h-[3px] bg-brand-gold rounded-full my-4 lg:my-8 hidden sm:block"></div>
// // //             <p className="text-sm sm:text-base text-gray-300 leading-6 sm:leading-8 hidden sm:block max-w-sm">
// // //               Join elite businesses growing their operations with a secure, all-in-one financial platform.
// // //             </p>
// // //           </div>
// // //           <div className="relative hidden lg:block">
// // //             <div className="flex items-end gap-4 opacity-90 mb-8">
// // //               <BoxIcon size={38} className="text-brand-gold" />
// // //               <TrendingUp size={46} className="text-white" />
// // //               <Cloud size={38} className="text-brand-gold/70" />
// // //             </div>
// // //             <p className="text-xs text-gray-400">© 2026 Laxvira</p>
// // //           </div>
// // //         </div>

// // //         {/* Right Side (Form) */}
// // //         <div className="flex-1 px-6 py-8 sm:p-10 lg:p-14 bg-white">
// // //           <div className="w-full max-w-xl mx-auto">
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy tracking-tight">
// // //               Create your account
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-gray-500 mt-2 mb-6 sm:mb-8">
// // //               Business information
// // //             </p>

// // //             {error && (
// // //               <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// // //                 <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// // //                 <p className="text-sm font-medium">{error}</p>
// // //               </div>
// // //             )}

// // //             <form onSubmit={handleSubmit}>
// // //               <label htmlFor="storeName" className="text-sm font-semibold text-brand-navy">Firm Name</label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                   <Store size={18} className="text-brand-gold" />
// // //                 </span>
// // //                 <input
// // //                   id="storeName"
// // //                   type="text"
// // //                   required
// // //                   value={form.storeName}
// // //                   onChange={handleChange("storeName")}
// // //                   placeholder="Enter business name"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="organization"
// // //                 />
// // //               </div>

// // //               <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-4">Contact Details</p>

// // //               <label htmlFor="fullName" className="text-sm font-semibold text-brand-navy">Full Name</label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                   <User size={18} className="text-brand-gold" />
// // //                 </span>
// // //                 <input
// // //                   id="fullName"
// // //                   type="text"
// // //                   required
// // //                   value={form.fullName}
// // //                   onChange={handleChange("fullName")}
// // //                   placeholder="Enter full name"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="name"
// // //                 />
// // //               </div>

// // //               <div className="grid sm:grid-cols-5 gap-5 mb-6">
// // //                 <div className="sm:col-span-2">
// // //                   <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">Phone</label>
// // //                   <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                     <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                       <Phone size={18} className="text-brand-gold" />
// // //                     </span>
// // //                     <input
// // //                       id="phone"
// // //                       type="tel"
// // //                       value={form.phone}
// // //                       onChange={handleChange("phone")}
// // //                       placeholder="Phone"
// // //                       className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                       autoComplete="tel"
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 <div className="sm:col-span-3">
// // //                   <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Email Address</label>
// // //                   <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                     <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                       <Mail size={18} className="text-brand-gold" />
// // //                     </span>
// // //                     <input
// // //                       id="email"
// // //                       type="email"
// // //                       required
// // //                       value={form.email}
// // //                       onChange={handleChange("email")}
// // //                       placeholder="Email"
// // //                       className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                       autoComplete="email"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-4">Security</p>

// // //               <label htmlFor="password" className="text-sm font-semibold text-brand-navy">Password</label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                   <Lock size={18} className="text-brand-gold" />
// // //                 </span>
// // //                 <input
// // //                   id="password"
// // //                   type={showPassword ? "text" : "password"}
// // //                   required
// // //                   value={form.password}
// // //                   onChange={handleChange("password")}
// // //                   placeholder="Minimum 6 characters"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="new-password"
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowPassword((v) => !v)}
// // //                   className="text-gray-400 hover:text-brand-navy transition shrink-0"
// // //                 >
// // //                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //                 </button>
// // //               </div>

// // //               <label htmlFor="confirmPassword" className="text-sm font-semibold text-brand-navy">Confirm Password</label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-8 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                   <Lock size={18} className="text-brand-gold" />
// // //                 </span>
// // //                 <input
// // //                   id="confirmPassword"
// // //                   type={showConfirmPassword ? "text" : "password"}
// // //                   required
// // //                   value={form.confirmPassword}
// // //                   onChange={handleChange("confirmPassword")}
// // //                   placeholder="Re-enter your password"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="new-password"
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowConfirmPassword((v) => !v)}
// // //                   className="text-gray-400 hover:text-brand-navy transition shrink-0"
// // //                 >
// // //                   {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //                 </button>
// // //               </div>

// // //               <button
// // //                 type="submit"
// // //                 disabled={isLoading}
// // //                 className="w-full flex justify-center items-center h-12 sm:h-14 rounded-2xl bg-brand-gold text-brand-navy font-bold text-base sm:text-lg hover:bg-brand-goldLight active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
// // //               >
// // //                 {isLoading ? (
// // //                   <>
// // //                     <Loader2 className="animate-spin mr-2" size={20} />
// // //                     Securing Profile...
// // //                   </>
// // //                 ) : (
// // //                   "Create Account & Continue"
// // //                 )}
// // //               </button>
// // //             </form>

// // //             <p className="text-center text-sm sm:text-base text-gray-600 mt-8">
// // //               Already have an account?{" "}
// // //               <Link to="/login" className="text-brand-gold font-bold hover:underline">
// // //                 Sign In
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Signup;

// // // import { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { 
// // //   Eye, EyeOff, User, Store, Phone, Mail, Lock, 
// // //   TrendingUp, Box as BoxIcon, Cloud, Loader2, AlertTriangle,
// // //   ChevronRight, Shield, Database, LayoutGrid
// // // } from "lucide-react";
// // // import logo from "../assets/logo.jpg";

// // // const Signup = () => {
// // //   const navigate = useNavigate();
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const [form, setForm] = useState({
// // //     storeName: "", fullName: "", phone: "", email: "", password: "", confirmPassword: "",
// // //   });

// // //   const handleChange = (field) => (e) => {
// // //     setForm((prev) => ({ ...prev, [field]: e.target.value }));
// // //     if (error) setError(null);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     if (form.password !== form.confirmPassword) {
// // //       setError("Passwords do not match.");
// // //       return;
// // //     }
// // //     if (form.password.length < 6) {
// // //       setError("Password must be at least 6 characters.");
// // //       return;
// // //     }
// // //     setIsLoading(true);
// // //     try {
// // //       const response = await fetch("http://localhost:8000/api/auth/register", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           storeName: form.storeName,
// // //           ownerName: form.fullName, 
// // //           email: form.email,
// // //           password: form.password,
// // //         }),
// // //       });
// // //       const data = await response.json();
// // //       if (!response.ok) throw new Error(data.detail || "Failed to create store. Please try again.");
      
// // //       localStorage.setItem("token", data.access_token);
// // //       navigate("/dashboard");
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen w-full bg-[#F8FAFC] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-indigo-200 selection:text-indigo-900">
      
// // //       {/* --- GLOBAL CSS FOR 3D FLOATING ANIMATIONS --- */}
// // //       <style dangerouslySetInnerHTML={{__html: `
// // //         @keyframes float {
// // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //           50% { transform: translateY(-20px) rotate(3deg); }
// // //         }
// // //         @keyframes float-reverse {
// // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //           50% { transform: translateY(20px) rotate(-3deg); }
// // //         }
// // //         @keyframes float-slow {
// // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //           50% { transform: translateY(-30px) rotate(-2deg); }
// // //         }
// // //         .animate-float { animation: float 7s ease-in-out infinite; }
// // //         .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
// // //         .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
// // //         .glass-element {
// // //           background: rgba(255, 255, 255, 0.5);
// // //           backdrop-filter: blur(16px);
// // //           border: 1px solid rgba(255, 255, 255, 0.8);
// // //           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
// // //         }
// // //       `}} />

// // //       {/* --- COOL-TONED AMBIENT BLOBS --- */}
// // //       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-300/30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply z-0"></div>
// // //       <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-300/30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply z-0"></div>
// // //       <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply z-0"></div>

// // //       {/* --- FLOATING ARCHITECTURAL ELEMENTS (BACKGROUND) --- */}
// // //       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
// // //         {/* Top Left: Enterprise Database */}
// // //         <div className="absolute top-[10%] left-[8%] glass-element p-4 rounded-2xl animate-float transform rotate-[-8deg]">
// // //           <div className="bg-blue-100 p-3 rounded-xl border border-blue-200">
// // //             <Database size={32} className="text-blue-600" />
// // //           </div>
// // //         </div>

// // //         {/* Floating Brand Logo Badge (Right behind form) */}
// // //         <div className="absolute top-[40%] right-[3%] glass-element p-3 rounded-2xl animate-float-slow transform rotate-[15deg] hidden lg:block shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
// // //           <div className="bg-white p-1 rounded-xl shadow-inner border border-slate-100">
// // //              <img src={logo} alt="Laxvira Seal" className="w-16 h-16 object-contain rounded-lg opacity-90" />
// // //           </div>
// // //         </div>

// // //         {/* Bottom Left: Logistics/Cloud */}
// // //         <div className="absolute bottom-[15%] left-[12%] glass-element p-5 rounded-2xl animate-float-reverse transform rotate-[12deg]">
// // //           <div className="bg-cyan-100 p-4 rounded-xl border border-cyan-200 flex items-center justify-center">
// // //             <Cloud size={40} className="text-cyan-600" />
// // //           </div>
// // //         </div>

// // //         {/* Top Right: Dashboard Grid */}
// // //         <div className="absolute top-[18%] right-[10%] glass-element p-4 rounded-3xl animate-float-slow transform rotate-[10deg]">
// // //           <div className="bg-indigo-100 p-3 rounded-xl border border-indigo-200 flex items-center gap-3">
// // //             <LayoutGrid size={28} className="text-indigo-600" />
// // //             <div className="space-y-1.5 hidden md:block">
// // //               <div className="w-12 h-1.5 bg-indigo-200 rounded-full"></div>
// // //               <div className="w-8 h-1.5 bg-indigo-200 rounded-full"></div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Bottom Right: Security Shield */}
// // //         <div className="absolute bottom-[10%] right-[8%] glass-element p-5 rounded-full animate-float transform rotate-[-15deg]">
// // //           <div className="bg-emerald-100 p-4 rounded-full border border-emerald-200 shadow-inner">
// // //             <Shield size={36} className="text-emerald-600" />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* --- MAIN SIGNUP CONTAINER --- */}
// // //       <div className="w-full sm:max-w-6xl bg-white/60 backdrop-blur-2xl sm:rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-white/80 overflow-hidden flex flex-col lg:grid lg:grid-cols-2 min-h-[100dvh] sm:min-h-[700px] relative z-10">
        
// // //         {/* Left Side (Visual Branding) */}
// // //         <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white/50 border-b lg:border-b-0 lg:border-r border-white/60 px-6 py-8 sm:px-10 sm:py-10 lg:p-14 flex flex-col justify-between group">
          
// // //           {/* Internal gradient sweep */}
// // //           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.08)_0%,transparent_70%)] z-0"></div>

// // //           {/* --- MASSIVE BACKGROUND LOGO WATERMARK --- */}
// // //           <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] scale-[1.8] transform translate-x-12 translate-y-12 pointer-events-none z-0">
// // //             <img src={logo} alt="" className="w-full h-full object-contain mix-blend-darken filter grayscale" />
// // //           </div>

// // //           <div className="relative z-10">
// // //             <div className="flex items-center gap-3 mb-10">
// // //               <div className="inline-flex items-center justify-center p-1 bg-white rounded-2xl shadow-sm border border-slate-100">
// // //                 <img
// // //                   src={logo}
// // //                   alt="Laxvira"
// // //                   className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-xl"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <p className="text-base font-black tracking-widest leading-none text-slate-900">LAXVIRA</p>
// // //                 <p className="text-[11px] font-bold text-indigo-600 mt-1.5">Smart Business. Smarter Finance.</p>
// // //               </div>
// // //             </div>

// // //             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900">
// // //               Launch your firm <br className="hidden lg:block"/>
// // //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
// // //                 in minutes.
// // //               </span>
// // //             </h1>
            
// // //             <p className="text-slate-500 font-medium leading-relaxed mt-6 max-w-sm hidden sm:block">
// // //               Join elite businesses scaling their operations with an enterprise-grade, highly secure financial infrastructure.
// // //             </p>
// // //           </div>

// // //           <div className="relative mt-auto hidden lg:block z-10">
// // //             <div className="flex items-center gap-4 mb-6">
// // //               <div className="bg-white/60 border border-white p-3 rounded-2xl shadow-sm"><BoxIcon size={24} className="text-cyan-500" /></div>
// // //               <div className="bg-white/60 border border-white p-3 rounded-2xl shadow-sm"><TrendingUp size={24} className="text-indigo-500" /></div>
// // //               <div className="bg-white/60 border border-white p-3 rounded-2xl shadow-sm"><Cloud size={24} className="text-blue-500" /></div>
// // //             </div>
// // //             <p className="text-xs font-bold text-slate-400">© 2026 Laxvira Systems</p>
// // //           </div>
// // //         </div>

// // //         {/* Right Side (Form) */}
// // //         <div className="flex-1 px-6 py-8 sm:p-10 lg:p-14 bg-white/40 flex items-center justify-center relative z-20">
// // //           <div className="w-full max-w-xl mx-auto">
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">
// // //               Create your account
// // //             </h2>
// // //             <p className="text-sm text-slate-500 mt-2 mb-8 font-medium">
// // //               Provision a new secure environment for your business.
// // //             </p>

// // //             {error && (
// // //               <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
// // //                 <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
// // //                 <p className="text-xs font-bold">{error}</p>
// // //               </div>
// // //             )}

// // //             <form onSubmit={handleSubmit} className="space-y-5">
              
// // //               {/* Firm Name */}
// // //               <div>
// // //                 <label htmlFor="storeName" className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Firm Name</label>
// // //                 <div className="flex items-center border border-white rounded-2xl px-4 h-12 sm:h-14 bg-white/60 shadow-inner focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300">
// // //                   <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                     <Store size={16} className="text-indigo-600" />
// // //                   </span>
// // //                   <input
// // //                     id="storeName"
// // //                     type="text"
// // //                     required
// // //                     value={form.storeName}
// // //                     onChange={handleChange("storeName")}
// // //                     placeholder="Enter business name"
// // //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
// // //                     autoComplete="organization"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="pt-2 pb-1"><div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div></div>

// // //               {/* Full Name */}
// // //               <div>
// // //                 <label htmlFor="fullName" className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Administrator Name</label>
// // //                 <div className="flex items-center border border-white rounded-2xl px-4 h-12 sm:h-14 bg-white/60 shadow-inner focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300">
// // //                   <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                     <User size={16} className="text-indigo-600" />
// // //                   </span>
// // //                   <input
// // //                     id="fullName"
// // //                     type="text"
// // //                     required
// // //                     value={form.fullName}
// // //                     onChange={handleChange("fullName")}
// // //                     placeholder="Enter full name"
// // //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
// // //                     autoComplete="name"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               {/* Phone & Email Grid */}
// // //               <div className="grid sm:grid-cols-5 gap-5">
// // //                 <div className="sm:col-span-2">
// // //                   <label htmlFor="phone" className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Phone</label>
// // //                   <div className="flex items-center border border-white rounded-2xl px-4 h-12 sm:h-14 bg-white/60 shadow-inner focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300">
// // //                     <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                       <Phone size={16} className="text-indigo-600" />
// // //                     </span>
// // //                     <input
// // //                       id="phone"
// // //                       type="tel"
// // //                       value={form.phone}
// // //                       onChange={handleChange("phone")}
// // //                       placeholder="Number"
// // //                       className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
// // //                       autoComplete="tel"
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 <div className="sm:col-span-3">
// // //                   <label htmlFor="email" className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Corporate Email</label>
// // //                   <div className="flex items-center border border-white rounded-2xl px-4 h-12 sm:h-14 bg-white/60 shadow-inner focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300">
// // //                     <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                       <Mail size={16} className="text-indigo-600" />
// // //                     </span>
// // //                     <input
// // //                       id="email"
// // //                       type="email"
// // //                       required
// // //                       value={form.email}
// // //                       onChange={handleChange("email")}
// // //                       placeholder="you@company.com"
// // //                       className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
// // //                       autoComplete="email"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="pt-2 pb-1"><div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div></div>

// // //               {/* Password */}
// // //               <div>
// // //                 <label htmlFor="password" className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Security Key</label>
// // //                 <div className="flex items-center border border-white rounded-2xl px-4 h-12 sm:h-14 bg-white/60 shadow-inner focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300">
// // //                   <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                     <Lock size={16} className="text-indigo-600" />
// // //                   </span>
// // //                   <input
// // //                     id="password"
// // //                     type={showPassword ? "text" : "password"}
// // //                     required
// // //                     value={form.password}
// // //                     onChange={handleChange("password")}
// // //                     placeholder="Min 6 characters"
// // //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
// // //                     autoComplete="new-password"
// // //                   />
// // //                   <button
// // //                     type="button"
// // //                     onClick={() => setShowPassword((v) => !v)}
// // //                     className="text-slate-400 hover:text-indigo-600 transition shrink-0 p-1"
// // //                   >
// // //                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               {/* Confirm Password */}
// // //               <div>
// // //                 <label htmlFor="confirmPassword" className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">Verify Security Key</label>
// // //                 <div className="flex items-center border border-white rounded-2xl px-4 h-12 sm:h-14 bg-white/60 shadow-inner focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300">
// // //                   <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // //                     <Lock size={16} className="text-indigo-600" />
// // //                   </span>
// // //                   <input
// // //                     id="confirmPassword"
// // //                     type={showConfirmPassword ? "text" : "password"}
// // //                     required
// // //                     value={form.confirmPassword}
// // //                     onChange={handleChange("confirmPassword")}
// // //                     placeholder="Re-enter password"
// // //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
// // //                     autoComplete="new-password"
// // //                   />
// // //                   <button
// // //                     type="button"
// // //                     onClick={() => setShowConfirmPassword((v) => !v)}
// // //                     className="text-slate-400 hover:text-indigo-600 transition shrink-0 p-1"
// // //                   >
// // //                     {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               <button
// // //                 type="submit"
// // //                 disabled={isLoading}
// // //                 className="w-full flex justify-center items-center h-12 sm:h-14 mt-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-black text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none transition-all duration-300"
// // //               >
// // //                 {isLoading ? (
// // //                   <>
// // //                     <Loader2 className="animate-spin mr-2" size={18} />
// // //                     Provisioning Node...
// // //                   </>
// // //                 ) : (
// // //                   <>Create Environment <ChevronRight size={18} className="ml-1" /></>
// // //                 )}
// // //               </button>
// // //             </form>

// // //             <p className="text-center text-sm text-slate-500 mt-8 font-medium">
// // //               Already possess an environment?{" "}
// // //               <Link to="/login" className="text-indigo-600 font-black hover:text-indigo-700 transition-colors">
// // //                 Sign In
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Signup;

// // //like login 
// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { 
// //   Eye, EyeOff, User, Store, Phone, Mail, Lock, 
// //   TrendingUp, Box as BoxIcon, Loader2, AlertTriangle,
// //   ChevronRight, Receipt, FileText, CreditCard, Calculator
// // } from "lucide-react";
// // import logo from "../assets/logo.jpg";

// // /* ==========================================================================
// //    1. ABSTRACT BACKGROUND CARDS (Invoices, Quotes, Expenses)
// //    ========================================================================== */
// // const BackgroundCards = () => {
// //   const cardTypes = [
// //     { icon: FileText, title: "INVOICE #4092", amount: "₹45,000.00", color: "text-sky-600", bg: "bg-sky-50" },
// //     { icon: Calculator, title: "QUOTATION_V2", amount: "₹12,400.00", color: "text-[#C5A059]", bg: "bg-amber-50" },
// //     { icon: CreditCard, title: "EXPENSE CLAIM", amount: "₹3,250.00", color: "text-indigo-600", bg: "bg-indigo-50" },
// //     { icon: Receipt, title: "TAX LEDGER", amount: "₹8,900.00", color: "text-emerald-600", bg: "bg-emerald-50" },
// //   ];

// //   const seamlessTrack = [...cardTypes, ...cardTypes, ...cardTypes];

// //   return (
// //     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center gap-6 sm:gap-12 px-10 opacity-30 mix-blend-multiply">
// //       <div className="absolute inset-0 flex justify-around transform -rotate-[15deg] scale-[1.35] select-none">
// //         {[1, 2, 3, 4, 5, 6].map((colIndex) => (
// //           <div 
// //             key={colIndex} 
// //             className="animate-vertical-marquee flex flex-col gap-6 sm:gap-12 py-6"
// //             style={{ animationDelay: `${colIndex * -2}s` }} 
// //           >
// //             {seamlessTrack.map((card, i) => {
// //               const Icon = card.icon;
// //               return (
// //                 <div key={i} className="w-48 sm:w-64 bg-white/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white shadow-sm flex flex-col gap-4">
// //                   <div className="flex justify-between items-center">
// //                     <div className={`p-2 rounded-lg ${card.bg}`}>
// //                       <Icon size={20} className={card.color} />
// //                     </div>
// //                     <div className="text-sm font-black text-slate-700">{card.amount}</div>
// //                   </div>
// //                   <div className="space-y-2">
// //                     <p className="text-[10px] font-black tracking-widest text-slate-400">{card.title}</p>
// //                     <div className="w-full h-2 bg-slate-200/50 rounded-full"></div>
// //                     <div className="w-2/3 h-2 bg-slate-200/50 rounded-full"></div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // /* ==========================================================================
// //    2. MAIN SIGNUP COMPONENT
// //    ========================================================================== */
// // const Signup = () => {
// //   const navigate = useNavigate();
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const [form, setForm] = useState({
// //     storeName: "", fullName: "", phone: "", email: "", password: "", confirmPassword: "",
// //   });

// //   const handleChange = (field) => (e) => {
// //     setForm((prev) => ({ ...prev, [field]: e.target.value }));
// //     if (error) setError(null);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     if (form.password !== form.confirmPassword) {
// //       setError("Passwords do not match.");
// //       return;
// //     }
// //     if (form.password.length < 6) {
// //       setError("Password must be at least 6 characters.");
// //       return;
// //     }
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:8000/api/auth/register", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           storeName: form.storeName,
// //           ownerName: form.fullName, 
// //           email: form.email,
// //           password: form.password,
// //         }),
// //       });
// //       const data = await response.json();
// //       if (!response.ok) throw new Error(data.detail || "Failed to create store. Please try again.");
      
// //       localStorage.setItem("token", data.access_token);
// //       navigate("/dashboard");
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-[#0369a1]/20 selection:text-[#082f49]">
      
// //       <style dangerouslySetInnerHTML={{__html: `
// //         @keyframes vertical-scroll {
// //           0% { transform: translateY(0%); }
// //           100% { transform: translateY(-33.33%); }
// //         }
// //         .animate-vertical-marquee {
// //           animation: vertical-scroll 30s linear infinite;
// //         }
// //       `}} />

// //       {/* --- AMBIENT VOLUMETRIC LIGHTING --- */}
// //       <div className="absolute inset-0 pointer-events-none z-0">
// //         <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
// //         <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0369a1]/15 rounded-full blur-[120px]"></div>
// //         <div className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-[100px]"></div>
// //       </div>

// //       <BackgroundCards />

// //       {/* --- TRUE GLASSMORPHISM CONTAINER --- */}
// //       <div className="w-full sm:max-w-6xl bg-white/10 backdrop-blur-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_rgba(3,105,161,0.15),inset_0_0_30px_rgba(255,255,255,0.6)] border border-white/60 overflow-hidden flex flex-col lg:grid lg:grid-cols-2 min-h-[100dvh] sm:min-h-[700px] relative z-10">
        
// //         {/* Left Side (Visual Branding) */}
// //         <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-transparent border-b lg:border-b-0 lg:border-r border-white/40 px-6 py-8 sm:px-10 sm:py-10 lg:p-14 flex flex-col justify-between group">
          
// //           <div className="absolute -left-20 -bottom-20 opacity-[0.04] pointer-events-none mix-blend-multiply z-0">
// //             <img src={logo} alt="" className="w-[500px] h-[500px] object-contain grayscale -rotate-12" />
// //           </div>

// //           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,105,161,0.05)_0%,transparent_70%)] z-0"></div>

// //           <div className="relative z-10 w-full">
// //             <div className="mb-10 inline-flex items-center justify-center p-1 bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.05)] border border-white/60">
// //               <img
// //                 src={logo}
// //                 alt="Laxvira"
// //                 className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-xl mix-blend-multiply"
// //               />
// //             </div>

// //             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#082f49] mb-6">
// //               Launch your firm <br className="hidden lg:block"/>
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#C5A059]">
// //                 in minutes.
// //               </span>
// //             </h1>

// //             <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-12 hidden sm:block">
// //               Join elite businesses scaling their operations with an enterprise-grade, highly secure financial infrastructure.
// //             </p>
// //           </div>

// //           <div className="relative mt-auto flex flex-wrap items-center gap-3 w-full z-10">
// //             <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
// //               <TrendingUp size={14} className="text-[#0369a1]" /> Enterprise Ready
// //             </div>
// //             <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
// //               <BoxIcon size={14} className="text-[#C5A059]" /> End-to-End Encryption
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side (Form) */}
// //         <div className="flex-1 flex items-center justify-center px-6 py-8 sm:p-10 lg:p-14 relative bg-white/10">
// //           <div className="w-full max-w-xl relative z-10">
// //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082f49] tracking-tight">
// //               Create your account
// //             </h2>
// //             <p className="text-sm text-slate-500 mt-2 mb-8 font-medium">
// //               Provision a new secure environment for your business.
// //             </p>

// //             {error && (
// //               <div className="mb-6 p-4 rounded-xl bg-rose-50/60 backdrop-blur-xl border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
// //                 <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
// //                 <p className="text-xs font-bold">{error}</p>
// //               </div>
// //             )}

// //             <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
// //               {/* Firm Name */}
// //               <div>
// //                 <label htmlFor="storeName" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Firm Name</label>
// //                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                     <Store size={16} className="text-[#0369a1]" />
// //                   </span>
// //                   <input
// //                     id="storeName"
// //                     type="text"
// //                     required
// //                     value={form.storeName}
// //                     onChange={handleChange("storeName")}
// //                     placeholder="Enter business name"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                     autoComplete="organization"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="pt-1 pb-0 sm:pt-2 sm:pb-1"><div className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"></div></div>

// //               {/* Full Name */}
// //               <div>
// //                 <label htmlFor="fullName" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Administrator Name</label>
// //                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                     <User size={16} className="text-[#0369a1]" />
// //                   </span>
// //                   <input
// //                     id="fullName"
// //                     type="text"
// //                     required
// //                     value={form.fullName}
// //                     onChange={handleChange("fullName")}
// //                     placeholder="Enter full name"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                     autoComplete="name"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Phone & Email Grid */}
// //               <div className="grid sm:grid-cols-5 gap-4 sm:gap-5">
// //                 <div className="sm:col-span-2">
// //                   <label htmlFor="phone" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Phone</label>
// //                   <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                     <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                       <Phone size={16} className="text-[#0369a1]" />
// //                     </span>
// //                     <input
// //                       id="phone"
// //                       type="tel"
// //                       value={form.phone}
// //                       onChange={handleChange("phone")}
// //                       placeholder="Number"
// //                       className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                       autoComplete="tel"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="sm:col-span-3">
// //                   <label htmlFor="email" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Corporate Email</label>
// //                   <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                     <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                       <Mail size={16} className="text-[#0369a1]" />
// //                     </span>
// //                     <input
// //                       id="email"
// //                       type="email"
// //                       required
// //                       value={form.email}
// //                       onChange={handleChange("email")}
// //                       placeholder="you@company.com"
// //                       className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                       autoComplete="email"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="pt-1 pb-0 sm:pt-2 sm:pb-1"><div className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"></div></div>

// //               {/* Password */}
// //               <div>
// //                 <label htmlFor="password" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Security Key</label>
// //                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                     <Lock size={16} className="text-[#0369a1]" />
// //                   </span>
// //                   <input
// //                     id="password"
// //                     type={showPassword ? "text" : "password"}
// //                     required
// //                     value={form.password}
// //                     onChange={handleChange("password")}
// //                     placeholder="Min 6 characters"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                     autoComplete="new-password"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowPassword((v) => !v)}
// //                     className="text-slate-500 hover:text-[#0369a1] transition shrink-0 p-1"
// //                   >
// //                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Confirm Password */}
// //               <div>
// //                 <label htmlFor="confirmPassword" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Verify Security Key</label>
// //                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                     <Lock size={16} className="text-[#0369a1]" />
// //                   </span>
// //                   <input
// //                     id="confirmPassword"
// //                     type={showConfirmPassword ? "text" : "password"}
// //                     required
// //                     value={form.confirmPassword}
// //                     onChange={handleChange("confirmPassword")}
// //                     placeholder="Re-enter password"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                     autoComplete="new-password"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowConfirmPassword((v) => !v)}
// //                     className="text-slate-500 hover:text-[#0369a1] transition shrink-0 p-1"
// //                   >
// //                     {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //                   </button>
// //                 </div>
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={isLoading}
// //                 className="w-full flex justify-center items-center h-12 sm:h-14 mt-8 rounded-2xl bg-[#082f49] text-white font-black text-sm uppercase tracking-wider hover:bg-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none transition-all duration-300"
// //               >
// //                 {isLoading ? (
// //                   <>
// //                     <Loader2 className="animate-spin mr-2" size={18} />
// //                     Provisioning Node...
// //                   </>
// //                 ) : (
// //                   <>Create Environment <ChevronRight size={18} className="ml-1" /></>
// //                 )}
// //               </button>
// //             </form>

// //             <p className="text-center text-sm text-slate-500 mt-8 font-medium">
// //               Already possess an environment?{" "}
// //               <Link to="/login" className="text-[#0369a1] font-black hover:text-[#C5A059] transition-colors">
// //                 Sign In
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;


// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { 
// //   Eye, EyeOff, User, Store, Phone, Mail, Lock, 
// //   TrendingUp, Box as BoxIcon, Loader2, AlertTriangle,
// //   ChevronRight, Receipt, FileText, CreditCard, Calculator, CheckCircle2
// // } from "lucide-react";
// // import logo from "../assets/logo.jpg";

// // /* ==========================================================================
// //    1. ABSTRACT BACKGROUND CARDS (Invoices, Quotes, Expenses)
// //    ========================================================================== */
// // const BackgroundCards = () => {
// //   const cardTypes = [
// //     { icon: FileText, title: "INVOICE #4092", amount: "₹45,000.00", color: "text-sky-600", bg: "bg-sky-50" },
// //     { icon: Calculator, title: "QUOTATION_V2", amount: "₹12,400.00", color: "text-[#C5A059]", bg: "bg-amber-50" },
// //     { icon: CreditCard, title: "EXPENSE CLAIM", amount: "₹3,250.00", color: "text-indigo-600", bg: "bg-indigo-50" },
// //     { icon: Receipt, title: "TAX LEDGER", amount: "₹8,900.00", color: "text-emerald-600", bg: "bg-emerald-50" },
// //   ];

// //   const seamlessTrack = [...cardTypes, ...cardTypes, ...cardTypes];

// //   return (
// //     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center gap-6 sm:gap-12 px-10 opacity-30 mix-blend-multiply">
// //       <div className="absolute inset-0 flex justify-around transform -rotate-[15deg] scale-[1.35] select-none">
// //         {[1, 2, 3, 4, 5, 6].map((colIndex) => (
// //           <div 
// //             key={colIndex} 
// //             className="animate-vertical-marquee flex flex-col gap-6 sm:gap-12 py-6"
// //             style={{ animationDelay: `${colIndex * -2}s` }} 
// //           >
// //             {seamlessTrack.map((card, i) => {
// //               const Icon = card.icon;
// //               return (
// //                 <div key={i} className="w-48 sm:w-64 bg-white/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white shadow-sm flex flex-col gap-4">
// //                   <div className="flex justify-between items-center">
// //                     <div className={`p-2 rounded-lg ${card.bg}`}>
// //                       <Icon size={20} className={card.color} />
// //                     </div>
// //                     <div className="text-sm font-black text-slate-700">{card.amount}</div>
// //                   </div>
// //                   <div className="space-y-2">
// //                     <p className="text-[10px] font-black tracking-widest text-slate-400">{card.title}</p>
// //                     <div className="w-full h-2 bg-slate-200/50 rounded-full"></div>
// //                     <div className="w-2/3 h-2 bg-slate-200/50 rounded-full"></div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // /* ==========================================================================
// //    2. MAIN SIGNUP COMPONENT
// //    ========================================================================== */
// // const Signup = () => {
// //   const navigate = useNavigate();
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const [form, setForm] = useState({
// //     storeName: "", fullName: "", phone: "", email: "", password: "", confirmPassword: "", tier: "GROWTH"
// //   });

// //   const handleChange = (field) => (e) => {
// //     setForm((prev) => ({ ...prev, [field]: e.target.value }));
// //     if (error) setError(null);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     if (form.password !== form.confirmPassword) {
// //       setError("Passwords do not match.");
// //       return;
// //     }
// //     if (form.password.length < 6) {
// //       setError("Password must be at least 6 characters.");
// //       return;
// //     }
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:8000/api/auth/register", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           storeName: form.storeName,
// //           ownerName: form.fullName, 
// //           email: form.email,
// //           password: form.password,
// //           tier: form.tier // Appended the selected trial tier to the payload
// //         }),
// //       });
// //       const data = await response.json();
// //       if (!response.ok) throw new Error(data.detail || "Failed to create store. Please try again.");
      
// //       // If the backend returns an access_token, log them in immediately.
// //       // Otherwise, route them to the login screen.
// //       if (data.access_token) {
// //         localStorage.setItem("token", data.access_token);
// //         navigate("/dashboard");
// //       } else {
// //         navigate("/login", { state: { message: "Account created! Please log in to start your 5-day trial." } });
// //       }
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-[#0369a1]/20 selection:text-[#082f49]">
      
// //       <style dangerouslySetInnerHTML={{__html: `
// //         @keyframes vertical-scroll {
// //           0% { transform: translateY(0%); }
// //           100% { transform: translateY(-33.33%); }
// //         }
// //         .animate-vertical-marquee {
// //           animation: vertical-scroll 30s linear infinite;
// //         }
// //       `}} />

// //       {/* --- AMBIENT VOLUMETRIC LIGHTING --- */}
// //       <div className="absolute inset-0 pointer-events-none z-0">
// //         <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
// //         <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0369a1]/15 rounded-full blur-[120px]"></div>
// //         <div className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-[100px]"></div>
// //       </div>

// //       <BackgroundCards />

// //       {/* --- TRUE GLASSMORPHISM CONTAINER --- */}
// //       <div className="w-full sm:max-w-6xl bg-white/10 backdrop-blur-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_rgba(3,105,161,0.15),inset_0_0_30px_rgba(255,255,255,0.6)] border border-white/60 overflow-hidden flex flex-col lg:grid lg:grid-cols-2 min-h-[100dvh] sm:min-h-[700px] relative z-10">
        
// //         {/* Left Side (Visual Branding) */}
// //         <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-transparent border-b lg:border-b-0 lg:border-r border-white/40 px-6 py-8 sm:px-10 sm:py-10 lg:p-14 flex flex-col justify-between group">
          
// //           <div className="absolute -left-20 -bottom-20 opacity-[0.04] pointer-events-none mix-blend-multiply z-0">
// //             <img src={logo} alt="" className="w-[500px] h-[500px] object-contain grayscale -rotate-12" />
// //           </div>

// //           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,105,161,0.05)_0%,transparent_70%)] z-0"></div>

// //           <div className="relative z-10 w-full">
// //             <div className="mb-10 inline-flex items-center justify-center p-1 bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.05)] border border-white/60">
// //               <img
// //                 src={logo}
// //                 alt="Laxvira"
// //                 className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-xl mix-blend-multiply"
// //               />
// //             </div>

// //             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#082f49] mb-6">
// //               Launch your firm <br className="hidden lg:block"/>
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#C5A059]">
// //                 in minutes.
// //               </span>
// //             </h1>

// //             <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-12 hidden sm:block">
// //               Join elite businesses scaling their operations with an enterprise-grade, highly secure financial infrastructure.
// //             </p>
// //           </div>

// //           <div className="relative mt-auto flex flex-wrap items-center gap-3 w-full z-10">
// //             <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
// //               <TrendingUp size={14} className="text-[#0369a1]" /> Enterprise Ready
// //             </div>
// //             <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
// //               <BoxIcon size={14} className="text-[#C5A059]" /> End-to-End Encryption
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side (Form) */}
// //         <div className="flex-1 flex items-center justify-center px-6 py-8 sm:p-10 lg:p-14 relative bg-white/10 overflow-y-auto">
// //           <div className="w-full max-w-xl relative z-10">
// //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082f49] tracking-tight">
// //               Create your account
// //             </h2>
// //             <p className="text-sm text-slate-500 mt-2 mb-8 font-medium">
// //               Provision a new secure environment for your business.
// //             </p>

// //             {error && (
// //               <div className="mb-6 p-4 rounded-xl bg-rose-50/60 backdrop-blur-xl border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
// //                 <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
// //                 <p className="text-xs font-bold">{error}</p>
// //               </div>
// //             )}

// //             <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
// //               {/* Firm Name */}
// //               <div>
// //                 <label htmlFor="storeName" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Firm Name</label>
// //                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                     <Store size={16} className="text-[#0369a1]" />
// //                   </span>
// //                   <input
// //                     id="storeName"
// //                     type="text"
// //                     required
// //                     value={form.storeName}
// //                     onChange={handleChange("storeName")}
// //                     placeholder="Enter business name"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                     autoComplete="organization"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="pt-1 pb-0 sm:pt-2 sm:pb-1"><div className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"></div></div>

// //               {/* Full Name */}
// //               <div>
// //                 <label htmlFor="fullName" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Administrator Name</label>
// //                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                     <User size={16} className="text-[#0369a1]" />
// //                   </span>
// //                   <input
// //                     id="fullName"
// //                     type="text"
// //                     required
// //                     value={form.fullName}
// //                     onChange={handleChange("fullName")}
// //                     placeholder="Enter full name"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                     autoComplete="name"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Phone & Email Grid */}
// //               <div className="grid sm:grid-cols-5 gap-4 sm:gap-5">
// //                 <div className="sm:col-span-2">
// //                   <label htmlFor="phone" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Phone</label>
// //                   <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                     <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                       <Phone size={16} className="text-[#0369a1]" />
// //                     </span>
// //                     <input
// //                       id="phone"
// //                       type="tel"
// //                       value={form.phone}
// //                       onChange={handleChange("phone")}
// //                       placeholder="Number"
// //                       className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                       autoComplete="tel"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="sm:col-span-3">
// //                   <label htmlFor="email" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Corporate Email</label>
// //                   <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                     <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                       <Mail size={16} className="text-[#0369a1]" />
// //                     </span>
// //                     <input
// //                       id="email"
// //                       type="email"
// //                       required
// //                       value={form.email}
// //                       onChange={handleChange("email")}
// //                       placeholder="you@company.com"
// //                       className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                       autoComplete="email"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="pt-1 pb-0 sm:pt-2 sm:pb-1"><div className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"></div></div>

// //               {/* Password */}
// //               <div>
// //                 <label htmlFor="password" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Security Key</label>
// //                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                     <Lock size={16} className="text-[#0369a1]" />
// //                   </span>
// //                   <input
// //                     id="password"
// //                     type={showPassword ? "text" : "password"}
// //                     required
// //                     value={form.password}
// //                     onChange={handleChange("password")}
// //                     placeholder="Min 6 characters"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                     autoComplete="new-password"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowPassword((v) => !v)}
// //                     className="text-slate-500 hover:text-[#0369a1] transition shrink-0 p-1"
// //                   >
// //                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Confirm Password */}
// //               <div>
// //                 <label htmlFor="confirmPassword" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Verify Security Key</label>
// //                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
// //                     <Lock size={16} className="text-[#0369a1]" />
// //                   </span>
// //                   <input
// //                     id="confirmPassword"
// //                     type={showConfirmPassword ? "text" : "password"}
// //                     required
// //                     value={form.confirmPassword}
// //                     onChange={handleChange("confirmPassword")}
// //                     placeholder="Re-enter password"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
// //                     autoComplete="new-password"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowConfirmPassword((v) => !v)}
// //                     className="text-slate-500 hover:text-[#0369a1] transition shrink-0 p-1"
// //                   >
// //                     {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* --- NEW: 5-Day Trial Tier Selection --- */}
// //               <div className="pt-2 pb-1">
// //                 <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-3">
// //                   Select 5-Day Trial Package
// //                 </label>
// //                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
// //                   {[
// //                     { id: 'BASIC', label: 'Basic', desc: 'Core POS & Billing' },
// //                     { id: 'GROWTH', label: 'Growth', desc: 'Inventory & Staff' },
// //                     { id: 'ENTERPRISE', label: 'Enterprise', desc: 'AI & Multi-Region' },
// //                   ].map((tier) => (
// //                     <div 
// //                       key={tier.id}
// //                       onClick={() => setForm(prev => ({ ...prev, tier: tier.id }))}
// //                       className={`cursor-pointer rounded-2xl p-3 border transition-all duration-300 ${
// //                         form.tier === tier.id 
// //                           ? 'bg-white/60 border-sky-400 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02),0_4px_15px_rgba(3,105,161,0.15)] ring-2 ring-sky-500/20' 
// //                           : 'bg-white/20 border-white/40 hover:bg-white/40'
// //                       }`}
// //                     >
// //                       <div className="flex justify-between items-center mb-1">
// //                         <span className={`text-xs font-black ${form.tier === tier.id ? 'text-[#0369a1]' : 'text-slate-600'}`}>{tier.label}</span>
// //                         {form.tier === tier.id && <CheckCircle2 size={14} className="text-[#0369a1]" />}
// //                       </div>
// //                       <p className="text-[9px] font-bold text-slate-500">{tier.desc}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={isLoading}
// //                 className="w-full flex justify-center items-center h-12 sm:h-14 mt-8 rounded-2xl bg-[#082f49] text-white font-black text-sm uppercase tracking-wider hover:bg-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none transition-all duration-300"
// //               >
// //                 {isLoading ? (
// //                   <>
// //                     <Loader2 className="animate-spin mr-2" size={18} />
// //                     Provisioning Node...
// //                   </>
// //                 ) : (
// //                   <>Create Environment <ChevronRight size={18} className="ml-1" /></>
// //                 )}
// //               </button>
// //             </form>

// //             <p className="text-center text-sm text-slate-500 mt-8 font-medium">
// //               Already possess an environment?{" "}
// //               <Link to="/login" className="text-[#0369a1] font-black hover:text-[#C5A059] transition-colors">
// //                 Sign In
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   Eye, EyeOff, User, Store, Phone, Mail, Lock, 
//   TrendingUp, Box as BoxIcon, Loader2, AlertTriangle,
//   ChevronRight, Receipt, FileText, CreditCard, Calculator, 
//   Utensils, HardHat, Scale, Key, HeartPulse, ArrowRight, ArrowLeft, CheckCircle2, Shield, Zap, Crown
// } from "lucide-react";
// import logo from "../assets/logo.jpg";

// /* ==========================================================================
//    1. ABSTRACT BACKGROUND CARDS (Invoices, Quotes, Expenses)
//    ========================================================================== */
// const BackgroundCards = () => {
//   const cardTypes = [
//     { icon: FileText, title: "INVOICE #4092", amount: "₹45,000.00", color: "text-sky-600", bg: "bg-sky-50" },
//     { icon: Calculator, title: "QUOTATION_V2", amount: "₹12,400.00", color: "text-[#C5A059]", bg: "bg-amber-50" },
//     { icon: CreditCard, title: "EXPENSE CLAIM", amount: "₹3,250.00", color: "text-indigo-600", bg: "bg-indigo-50" },
//     { icon: Receipt, title: "TAX LEDGER", amount: "₹8,900.00", color: "text-emerald-600", bg: "bg-emerald-50" },
//   ];

//   const seamlessTrack = [...cardTypes, ...cardTypes, ...cardTypes];

//   return (
//     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center gap-6 sm:gap-12 px-10 opacity-30 mix-blend-multiply">
//       <div className="absolute inset-0 flex justify-around transform -rotate-[15deg] scale-[1.35] select-none">
//         {[1, 2, 3, 4, 5, 6].map((colIndex) => (
//           <div 
//             key={colIndex} 
//             className="animate-vertical-marquee flex flex-col gap-6 sm:gap-12 py-6"
//             style={{ animationDelay: `${colIndex * -2}s` }} 
//           >
//             {seamlessTrack.map((card, i) => {
//               const Icon = card.icon;
//               return (
//                 <div key={i} className="w-48 sm:w-64 bg-white/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white shadow-sm flex flex-col gap-4">
//                   <div className="flex justify-between items-center">
//                     <div className={`p-2 rounded-lg ${card.bg}`}>
//                       <Icon size={20} className={card.color} />
//                     </div>
//                     <div className="text-sm font-black text-slate-700">{card.amount}</div>
//                   </div>
//                   <div className="space-y-2">
//                     <p className="text-[10px] font-black tracking-widest text-slate-400">{card.title}</p>
//                     <div className="w-full h-2 bg-slate-200/50 rounded-full"></div>
//                     <div className="w-2/3 h-2 bg-slate-200/50 rounded-full"></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ==========================================================================
//    2. MAIN SIGNUP COMPONENT (3-Step Flow)
//    ========================================================================== */
// const Signup = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [form, setForm] = useState({
//     storeName: "", 
//     fullName: "", 
//     phone: "", 
//     email: "", 
//     password: "", 
//     confirmPassword: "", 
//     industry_type: "WHOLESALE",
//     selected_tier: "GROWTH"
//   });

//   const industries = [
//     { id: "WHOLESALE", label: "Wholesale & Retail", icon: Store, desc: "Inventory & B2B Invoicing" },
//     { id: "RESTAURANT", label: "Restaurant & F&B", icon: Utensils, desc: "POS & Table Management" },
//     { id: "CONSTRUCTION", label: "Construction", icon: HardHat, desc: "Project Estimates & Billing" },
//     { id: "LEGAL", label: "Legal & Consulting", icon: Scale, desc: "Retainers & Time Billing" },
//     { id: "RENTAL", label: "Rental Services", icon: Key, desc: "Asset & Deposit Tracking" },
//     { id: "PHARMACY", label: "Pharmacy", icon: HeartPulse, desc: "Batch & Expiry POS" }
//   ];

//   const handleChange = (field) => (e) => {
//     setForm((prev) => ({ ...prev, [field]: e.target.value }));
//     if (error) setError(null);
//   };

//   const handleNextStep1 = (e) => {
//     e.preventDefault();
//     if (!form.storeName || !form.fullName || !form.email || !form.password) {
//       setError("Please fill out all required fields.");
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }
//     setError(null);
//     setStep(2);
//   };

//   const handleSubmit = async () => {
//     console.log("Submitting form state:", form);
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("http://localhost:8000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           storeName: form.storeName,
//           email: form.email,
//           password: form.password,
//           industry_type: form.industry_type,
//           selected_tier: form.selected_tier
//         }),
//       });
      
//       const data = await response.json();
      
//       if (!response.ok) throw new Error(data.detail || "Registration failed. Please try again.");
      
//       // Auto-login since the backend now returns JWT and user payload on signup
//       if (data.access_token) {
//         localStorage.setItem("token", data.access_token);
//         localStorage.setItem("user", JSON.stringify(data.user));
//         navigate("/dashboard");
//       } else {
//         navigate("/login", { state: { message: "Account created! Please log in to start your 14-day trial." } });
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-[#0369a1]/20 selection:text-[#082f49]">
      
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes vertical-scroll {
//           0% { transform: translateY(0%); }
//           100% { transform: translateY(-33.33%); }
//         }
//         .animate-vertical-marquee {
//           animation: vertical-scroll 30s linear infinite;
//         }
//       `}} />

//       {/* --- AMBIENT VOLUMETRIC LIGHTING --- */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
//         <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0369a1]/15 rounded-full blur-[120px]"></div>
//         <div className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-[100px]"></div>
//       </div>

//       <BackgroundCards />

//       {/* --- TRUE GLASSMORPHISM CONTAINER --- */}
//       <div className="w-full sm:max-w-6xl bg-white/10 backdrop-blur-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_rgba(3,105,161,0.15),inset_0_0_30px_rgba(255,255,255,0.6)] border border-white/60 overflow-hidden flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr] min-h-[100dvh] sm:min-h-[700px] relative z-10">
        
//         {/* Left Side (Visual Branding - Sticky on Desktop) */}
//         <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-transparent border-b lg:border-b-0 lg:border-r border-white/40 px-6 py-8 sm:px-10 sm:py-10 lg:p-14 flex flex-col justify-between group">
          
//           <div className="absolute -left-20 -bottom-20 opacity-[0.04] pointer-events-none mix-blend-multiply z-0">
//             <img src={logo} alt="" className="w-[500px] h-[500px] object-contain grayscale -rotate-12" />
//           </div>

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,105,161,0.05)_0%,transparent_70%)] z-0"></div>

//           <div className="relative z-10 w-full">
//             <div className="mb-10 inline-flex items-center justify-center p-1 bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.05)] border border-white/60">
//               <img src={logo} alt="Laxvira" className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-xl mix-blend-multiply" />
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#082f49] mb-6">
//               Launch your firm <br className="hidden lg:block"/>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#C5A059]">
//                 in minutes.
//               </span>
//             </h1>

//             <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-12 hidden sm:block">
//               Join elite businesses scaling their operations with an industry-specific, enterprise-grade financial infrastructure.
//             </p>
//           </div>

//           <div className="relative mt-auto flex flex-wrap items-center gap-3 w-full z-10">
//             <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
//               <TrendingUp size={14} className="text-[#0369a1]" /> Multi-Industry Ready
//             </div>
//             <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
//               <BoxIcon size={14} className="text-[#C5A059]" /> End-to-End Encryption
//             </div>
//           </div>
//         </div>

//         {/* Right Side (Form Area) */}
//         <div className="flex-1 flex flex-col px-4 py-8 sm:p-10 lg:p-14 relative bg-white/10 overflow-y-auto">
          
//           {/* Progress Bar (Only visible during onboarding) */}
//           <div className="flex bg-slate-200/50 rounded-full h-1.5 mb-8 w-full max-w-xl mx-auto overflow-hidden shadow-inner">
//             {[1, 2, 3].map((num) => (
//               <div key={num} className={`flex-1 h-full transition-all duration-500 ${step >= num ? 'bg-[#0369a1]' : 'bg-transparent'}`} />
//             ))}
//           </div>

//           <div className="w-full max-w-xl mx-auto relative z-10">
            
//             {error && (
//               <div className="mb-6 p-4 rounded-xl bg-rose-50/60 backdrop-blur-xl border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
//                 <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
//                 <p className="text-xs font-bold">{error}</p>
//               </div>
//             )}

//             {/* STEP 1: ACCOUNT DETAILS */}
//             {step === 1 && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-500">
//                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082f49] tracking-tight">
//                   Create your account
//                 </h2>
//                 <p className="text-sm text-slate-500 mt-2 mb-8 font-medium">
//                   Provision a new secure environment for your business.
//                 </p>

//                 <form onSubmit={handleNextStep1} className="space-y-4 sm:space-y-5">
//                   {/* Firm Name */}
//                   <div>
//                     <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Firm Name</label>
//                     <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                       <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
//                         <Store size={16} className="text-[#0369a1]" />
//                       </span>
//                       <input
//                         type="text"
//                         required
//                         value={form.storeName}
//                         onChange={handleChange("storeName")}
//                         placeholder="Enter business name"
//                         className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
//                       />
//                     </div>
//                   </div>

//                   <div className="pt-1 pb-0 sm:pt-2 sm:pb-1"><div className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"></div></div>

//                   {/* Full Name */}
//                   <div>
//                     <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Administrator Name</label>
//                     <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                       <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
//                         <User size={16} className="text-[#0369a1]" />
//                       </span>
//                       <input
//                         type="text"
//                         required
//                         value={form.fullName}
//                         onChange={handleChange("fullName")}
//                         placeholder="Enter full name"
//                         className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone & Email Grid */}
//                   <div className="grid sm:grid-cols-5 gap-4 sm:gap-5">
//                     <div className="sm:col-span-2">
//                       <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Phone</label>
//                       <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                         <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
//                           <Phone size={16} className="text-[#0369a1]" />
//                         </span>
//                         <input
//                           type="tel"
//                           value={form.phone}
//                           onChange={handleChange("phone")}
//                           placeholder="Number"
//                           className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
//                         />
//                       </div>
//                     </div>

//                     <div className="sm:col-span-3">
//                       <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Corporate Email</label>
//                       <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                         <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
//                           <Mail size={16} className="text-[#0369a1]" />
//                         </span>
//                         <input
//                           type="email"
//                           required
//                           value={form.email}
//                           onChange={handleChange("email")}
//                           placeholder="you@company.com"
//                           className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="pt-1 pb-0 sm:pt-2 sm:pb-1"><div className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"></div></div>

//                   {/* Passwords */}
//                   <div>
//                     <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Security Key</label>
//                     <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                       <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
//                         <Lock size={16} className="text-[#0369a1]" />
//                       </span>
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         required
//                         value={form.password}
//                         onChange={handleChange("password")}
//                         placeholder="Min 6 characters"
//                         className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
//                       />
//                       <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-500 hover:text-[#0369a1] transition p-1">
//                         {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                       </button>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Verify Security Key</label>
//                     <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                       <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
//                         <Lock size={16} className="text-[#0369a1]" />
//                       </span>
//                       <input
//                         type={showConfirmPassword ? "text" : "password"}
//                         required
//                         value={form.confirmPassword}
//                         onChange={handleChange("confirmPassword")}
//                         placeholder="Re-enter password"
//                         className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
//                       />
//                       <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-slate-500 hover:text-[#0369a1] transition p-1">
//                         {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                       </button>
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full flex justify-center items-center h-12 sm:h-14 mt-8 rounded-2xl bg-[#082f49] text-white font-black text-sm uppercase tracking-wider hover:bg-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
//                   >
//                     Continue <ArrowRight size={18} className="ml-2" />
//                   </button>
//                 </form>

//                 <p className="text-center text-sm text-slate-600 mt-8 font-medium">
//                   Already possess an environment?{" "}
//                   <Link to="/login" className="text-[#0369a1] font-black hover:text-[#C5A059] transition-colors">Sign In</Link>
//                 </p>
//               </div>
//             )}

//             {/* STEP 2: INDUSTRY SELECTION */}
//             {step === 2 && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full">
//                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082f49] tracking-tight mb-2">
//                   What is your industry?
//                 </h2>
//                 <p className="text-sm text-slate-600 mb-8 font-medium">
//                   We will dynamically tailor your dashboard modules.
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//                   {industries.map((ind) => (
//                     <div 
//                       key={ind.id}
//                       onClick={() => setForm({...form, industry_type: ind.id})}
//                       className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
//                         form.industry_type === ind.id 
//                           ? 'border-[#0369a1] bg-sky-50/50 shadow-[0_4px_15px_rgba(3,105,161,0.15)] ring-2 ring-[#0369a1]/20' 
//                           : 'border-white/60 bg-white/30 backdrop-blur-xl hover:bg-white/50'
//                       }`}
//                     >
//                       <div className="flex items-center gap-3 mb-2">
//                         <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
//                           form.industry_type === ind.id ? 'bg-[#082f49] text-[#C5A059]' : 'bg-slate-100 text-slate-500'
//                         }`}>
//                           <ind.icon size={20} />
//                         </div>
//                         <h3 className="font-bold text-slate-800 text-sm">{ind.label}</h3>
//                       </div>
//                       <p className="text-[11px] text-slate-500 font-medium pl-13">{ind.desc}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-between gap-4">
//                   <button onClick={() => setStep(1)} className="px-6 py-4 border-2 border-white/60 bg-white/30 backdrop-blur-xl text-slate-700 rounded-2xl font-bold hover:bg-white/50 flex items-center gap-2 transition-colors">
//                     <ArrowLeft size={18} /> Back
//                   </button>
//                   <button onClick={() => setStep(3)} className="flex-1 py-4 bg-[#082f49] text-white font-black uppercase tracking-wider rounded-2xl hover:bg-[#C5A059] flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all">
//                     Choose Plan <ArrowRight size={18} />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* STEP 3: TRIAL SELECTION */}
//             {step === 3 && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full">
//                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082f49] tracking-tight mb-2">
//                   Select 14-Day Free Trial
//                 </h2>
//                 <p className="text-sm text-slate-600 mb-8 font-medium">
//                   Test drive the toolkit. No credit card required.
//                 </p>

//                 <div className="space-y-4 mb-8">
//                   {/* BASIC */}
//                   <div onClick={() => setForm({...form, selected_tier: "BASIC"})} className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex gap-4 ${form.selected_tier === "BASIC" ? 'border-[#0369a1] bg-sky-50/50 shadow-[0_4px_15px_rgba(3,105,161,0.15)] ring-2 ring-[#0369a1]/20' : 'border-white/60 bg-white/30 backdrop-blur-xl hover:bg-white/50'}`}>
//                     <Shield className={form.selected_tier === "BASIC" ? "text-[#C5A059] shrink-0" : "text-slate-400 shrink-0"} size={32} />
//                     <div>
//                       <h3 className="text-base font-black text-slate-800">Basic Plan</h3>
//                       <p className="text-xs text-slate-500 mt-1 mb-2">Essential invoicing and client management.</p>
//                       <div className="flex gap-4 text-[11px] text-slate-600 font-bold">
//                         <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> Unlimited Invoices</span>
//                         <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> Client Ledger</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* GROWTH */}
//                   <div onClick={() => setForm({...form, selected_tier: "GROWTH"})} className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex gap-4 ${form.selected_tier === "GROWTH" ? 'border-[#0369a1] bg-sky-50/50 shadow-[0_4px_15px_rgba(3,105,161,0.15)] ring-2 ring-[#0369a1]/20' : 'border-white/60 bg-white/30 backdrop-blur-xl hover:bg-white/50'}`}>
//                     <Zap className={form.selected_tier === "GROWTH" ? "text-[#C5A059] shrink-0" : "text-slate-400 shrink-0"} size={32} />
//                     <div>
//                       <h3 className="text-base font-black text-slate-800">Growth Plan <span className="ml-2 text-[9px] bg-[#082f49] text-[#C5A059] px-2 py-0.5 rounded-full uppercase tracking-wider">Recommended</span></h3>
//                       <p className="text-xs text-slate-500 mt-1 mb-2">Advanced operations tailored for your industry.</p>
//                       <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-600 font-bold">
//                         <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> Inventory/POS</span>
//                         <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> B2B Quotations</span>
//                         <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> Expense Tracking</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* ENTERPRISE */}
//                   <div onClick={() => setForm({...form, selected_tier: "ENTERPRISE"})} className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex gap-4 ${form.selected_tier === "ENTERPRISE" ? 'border-[#0369a1] bg-sky-50/50 shadow-[0_4px_15px_rgba(3,105,161,0.15)] ring-2 ring-[#0369a1]/20' : 'border-white/60 bg-white/30 backdrop-blur-xl hover:bg-white/50'}`}>
//                     <Crown className={form.selected_tier === "ENTERPRISE" ? "text-[#C5A059] shrink-0" : "text-slate-400 shrink-0"} size={32} />
//                     <div>
//                       <h3 className="text-base font-black text-slate-800">Enterprise Plan</h3>
//                       <p className="text-xs text-slate-500 mt-1 mb-2">Full ERP capabilities and predictive analytics.</p>
//                       <div className="flex gap-4 text-[11px] text-slate-600 font-bold">
//                         <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> Multi-Branch</span>
//                         <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500"/> ML AI Forecasts</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-between gap-4">
//                   <button onClick={() => setStep(2)} className="px-6 py-4 border-2 border-white/60 bg-white/30 backdrop-blur-xl text-slate-700 rounded-2xl font-bold hover:bg-white/50 flex items-center gap-2 transition-colors">
//                     <ArrowLeft size={18} /> Back
//                   </button>
//                   <button 
//                     onClick={handleSubmit} 
//                     disabled={isLoading}
//                     className="flex-1 py-4 bg-[#C5A059] text-[#082f49] font-black uppercase tracking-wider rounded-2xl hover:bg-[#b0884b] flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 transition-all"
//                   >
//                     {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Launch Workspace"}
//                   </button>
//                 </div>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
//good till here 


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Eye, EyeOff, User, Store, Phone, Mail, Lock, 
  TrendingUp, Box as BoxIcon, Loader2, AlertTriangle,
  ChevronRight, Receipt, FileText, CreditCard, Calculator, 
  Utensils, HardHat, Scale, Key, HeartPulse, ArrowRight, ArrowLeft, CheckCircle2, Shield, Zap, Crown
} from "lucide-react";
import logo from "../assets/logo.jpg";

const BackgroundCards = () => {
  const cardTypes = [
    { icon: FileText, title: "INVOICE #4092", amount: "₹45,000.00", color: "text-sky-600", bg: "bg-sky-50" },
    { icon: Calculator, title: "QUOTATION_V2", amount: "₹12,400.00", color: "text-[#C5A059]", bg: "bg-amber-50" },
    { icon: CreditCard, title: "EXPENSE CLAIM", amount: "₹3,250.00", color: "text-indigo-600", bg: "bg-indigo-50" },
    { icon: Receipt, title: "TAX LEDGER", amount: "₹8,900.00", color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const seamlessTrack = [...cardTypes, ...cardTypes, ...cardTypes];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center gap-6 sm:gap-12 px-10 opacity-30 mix-blend-multiply">
      <div className="absolute inset-0 flex justify-around transform -rotate-[15deg] scale-[1.35] select-none">
        {[1, 2, 3, 4, 5, 6].map((colIndex) => (
          <div 
            key={colIndex} 
            className="animate-vertical-marquee flex flex-col gap-6 sm:gap-12 py-6"
            style={{ animationDelay: `${colIndex * -2}s` }} 
          >
            {seamlessTrack.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="w-48 sm:w-64 bg-white/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white shadow-sm flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className={`p-2 rounded-lg ${card.bg}`}>
                      <Icon size={20} className={card.color} />
                    </div>
                    <div className="text-sm font-black text-slate-700">{card.amount}</div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black tracking-widest text-slate-400">{card.title}</p>
                    <div className="w-full h-2 bg-slate-200/50 rounded-full"></div>
                    <div className="w-2/3 h-2 bg-slate-200/50 rounded-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    storeName: "", 
    fullName: "", 
    phone: "", 
    email: "", 
    password: "", 
    confirmPassword: "", 
    industry_type: "WHOLESALE",
    selected_tier: "GROWTH"
  });

  const industries = [
    { id: "WHOLESALE", label: "Wholesale & Retail", icon: Store, desc: "Inventory & B2B Invoicing" },
    { id: "RESTAURANT", label: "Restaurant & F&B", icon: Utensils, desc: "POS & Table Management" },
    { id: "CONSTRUCTION", label: "Construction", icon: HardHat, desc: "Project Estimates & Billing" },
    { id: "LEGAL", label: "Legal & Consulting", icon: Scale, desc: "Retainers & Time Billing" },
    { id: "RENTAL", label: "Rental Services", icon: Key, desc: "Asset & Deposit Tracking" },
    { id: "PHARMACY", label: "Pharmacy", icon: HeartPulse, desc: "Batch & Expiry POS" }
  ];

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (error) setError(null);
  };

  const handleNextStep1 = (e) => {
    e.preventDefault();
    if (!form.storeName || !form.fullName || !form.email || !form.password) {
      setError("Please fill out all required fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError(null);
    setStep(2);
  };

  const handleSubmit = async () => {
    console.log("Submitting perfectly mapped state:", form);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storeName: form.storeName,
          email: form.email,
          password: form.password,
          industry_type: form.industry_type,
          selected_tier: form.selected_tier
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.detail || "Registration failed.");
      
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-[#0369a1]/20 selection:text-[#082f49]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes vertical-scroll {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-33.33%); }
        }
        .animate-vertical-marquee {
          animation: vertical-scroll 30s linear infinite;
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0369a1]/15 rounded-full blur-[120px]"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-[100px]"></div>
      </div>

      <BackgroundCards />

      <div className="w-full sm:max-w-6xl bg-white/10 backdrop-blur-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_rgba(3,105,161,0.15),inset_0_0_30px_rgba(255,255,255,0.6)] border border-white/60 overflow-hidden flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr] min-h-[100dvh] sm:min-h-[700px] relative z-10">
        
        <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-transparent border-b lg:border-b-0 lg:border-r border-white/40 px-6 py-8 sm:px-10 sm:py-10 lg:p-14 flex flex-col justify-between group">
          <div className="absolute -left-20 -bottom-20 opacity-[0.04] pointer-events-none mix-blend-multiply z-0">
            <img src={logo} alt="" className="w-[500px] h-[500px] object-contain grayscale -rotate-12" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,105,161,0.05)_0%,transparent_70%)] z-0"></div>

          <div className="relative z-10 w-full">
            <div className="mb-10 inline-flex items-center justify-center p-1 bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.05)] border border-white/60">
              <img src={logo} alt="Laxvira" className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-xl mix-blend-multiply" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#082f49] mb-6">
              Launch your firm <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#C5A059]">in minutes.</span>
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-12 hidden sm:block">
              Join elite businesses scaling their operations with an industry-specific, enterprise-grade financial infrastructure.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col px-4 py-8 sm:p-10 lg:p-14 relative bg-white/10 overflow-y-auto">
          
          <div className="flex bg-slate-200/50 rounded-full h-1.5 mb-8 w-full max-w-xl mx-auto overflow-hidden shadow-inner">
            {[1, 2, 3].map((num) => (
              <div key={num} className={`flex-1 h-full transition-all duration-500 ${step >= num ? 'bg-[#0369a1]' : 'bg-transparent'}`} />
            ))}
          </div>

          <div className="w-full max-w-xl mx-auto relative z-10">
            
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50/60 backdrop-blur-xl border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
                <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
                <p className="text-xs font-bold">{error}</p>
              </div>
            )}

            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082f49] tracking-tight">Create your account</h2>
                <p className="text-sm text-slate-500 mt-2 mb-8 font-medium">Provision a new secure environment for your business.</p>
                <form onSubmit={handleNextStep1} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Firm Name</label>
                    <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all">
                      <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center"><Store size={16} className="text-[#0369a1]" /></span>
                      <input type="text" required value={form.storeName} onChange={handleChange("storeName")} placeholder="Enter business name" className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Administrator Name</label>
                    <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all">
                      <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center"><User size={16} className="text-[#0369a1]" /></span>
                      <input type="text" required value={form.fullName} onChange={handleChange("fullName")} placeholder="Enter full name" className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-5 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Phone</label>
                      <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 transition-all">
                        <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center"><Phone size={16} className="text-[#0369a1]" /></span>
                        <input type="tel" value={form.phone} onChange={handleChange("phone")} placeholder="Number" className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Corporate Email</label>
                      <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 transition-all">
                        <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center"><Mail size={16} className="text-[#0369a1]" /></span>
                        <input type="email" required value={form.email} onChange={handleChange("email")} placeholder="you@company.com" className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Security Key</label>
                    <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 transition-all">
                      <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center"><Lock size={16} className="text-[#0369a1]" /></span>
                      <input type={showPassword ? "text" : "password"} required value={form.password} onChange={handleChange("password")} placeholder="Min 6 characters" className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-500 p-1">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">Verify Security Key</label>
                    <div className="flex items-center border border-white/60 rounded-2xl px-4 h-12 sm:h-14 bg-white/30 backdrop-blur-xl focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 transition-all">
                      <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center"><Lock size={16} className="text-[#0369a1]" /></span>
                      <input type={showConfirmPassword ? "text" : "password"} required value={form.confirmPassword} onChange={handleChange("confirmPassword")} placeholder="Re-enter password" className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800" />
                      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-slate-500 p-1">{showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
                    </div>
                  </div>
                  <button type="submit" className="w-full flex justify-center items-center h-12 sm:h-14 mt-8 rounded-2xl bg-[#082f49] text-white font-black text-sm uppercase tracking-wider hover:bg-[#C5A059] transition-all">
                    Continue <ArrowRight size={18} className="ml-2" />
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082f49] tracking-tight mb-2">What is your industry?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 mt-6">
                  {industries.map((ind) => (
                    <div 
                      key={ind.id}
                      onClick={() => setForm(prev => ({ ...prev, industry_type: ind.id }))}
                      className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all ${form.industry_type === ind.id ? 'border-[#0369a1] bg-sky-50/50 ring-2 ring-[#0369a1]/20' : 'border-white/60 bg-white/30 backdrop-blur-xl hover:bg-white/50'}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${form.industry_type === ind.id ? 'bg-[#082f49] text-[#C5A059]' : 'bg-slate-100 text-slate-500'}`}>
                          <ind.icon size={20} />
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">{ind.label}</h3>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between gap-4">
                  <button onClick={() => setStep(1)} className="px-6 py-4 border-2 border-white/60 bg-white/30 text-slate-700 rounded-2xl font-bold hover:bg-white/50 flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button onClick={() => setStep(3)} className="flex-1 py-4 bg-[#082f49] text-white font-black uppercase rounded-2xl hover:bg-[#C5A059] flex items-center justify-center gap-2">
                    Choose Plan <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 w-full">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082f49] tracking-tight mb-2">Select 5-Day Free Trial</h2>
                <div className="space-y-4 mb-8 mt-6">
                  {["BASIC", "GROWTH", "ENTERPRISE"].map((tier) => (
                    <div 
                      key={tier}
                      onClick={() => setForm(prev => ({ ...prev, selected_tier: tier }))} 
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex gap-4 ${form.selected_tier === tier ? 'border-[#0369a1] bg-sky-50/50 ring-2 ring-[#0369a1]/20' : 'border-white/60 bg-white/30'}`}
                    >
                      <Shield className={form.selected_tier === tier ? "text-[#C5A059]" : "text-slate-400"} size={32} />
                      <div>
                        <h3 className="text-base font-black text-slate-800">{tier} Plan</h3>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between gap-4">
                  <button onClick={() => setStep(2)} className="px-6 py-4 border-2 border-white/60 bg-white/30 text-slate-700 rounded-2xl font-bold flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button onClick={handleSubmit} disabled={isLoading} className="flex-1 py-4 bg-[#C5A059] text-[#082f49] font-black uppercase rounded-2xl flex items-center justify-center gap-2">
                    {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Launch Workspace"}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;