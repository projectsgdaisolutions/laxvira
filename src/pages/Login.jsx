// // // // import { useState } from "react";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { Eye, EyeOff, Mail, Lock, TrendingUp, Box as BoxIcon, Cloud, Loader2, AlertTriangle } from "lucide-react";
// // // // import logo from "../assets/logo.jpeg";

// // // // const Login = () => {
// // // //   const navigate = useNavigate();
// // // //   const [showPassword, setShowPassword] = useState(false);
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
  
// // // //   // API State
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [error, setError] = useState(null);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError(null);
    
// // // //     // Client-side validation
// // // //     if (!email.trim() || !password.trim()) {
// // // //       setError("Please enter both email and password.");
// // // //       return;
// // // //     }

// // // //     setIsLoading(true);

// // // //     try {
// // // //       // Network Request to FastAPI
// // // //       const response = await fetch("http://localhost:8000/api/auth/login", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify({ email, password }),
// // // //       });

// // // //       const data = await response.json();

// // // //       // Handle HTTP errors (e.g., 401 Unauthorized)
// // // //       if (!response.ok) {
// // // //         throw new Error(data.detail || "Invalid email or password.");
// // // //       }

// // // //       // Success Handling
// // // //       // Store the JWT token securely in localStorage
// // // //       localStorage.setItem("token", data.access_token);
      
// // // //       // If your ProtectedRoutes rely on this, keep it, otherwise the JWT is sufficient
// // // //       localStorage.setItem("userRole", "admin"); 

// // // //       // Route to dashboard
// // // //       navigate("/dashboard");

// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen w-full bg-[#EEF1F8] flex items-center justify-center p-0 sm:p-6">
// // // //       <div className="w-full sm:max-w-5xl bg-white sm:rounded-[28px] shadow-[0_20px_60px_-15px_rgba(30,42,110,0.35)] ring-1 ring-black/5 overflow-hidden flex flex-col md:grid md:grid-cols-2 min-h-screen sm:min-h-0">
        
// // // //         {/* Left Side (Visual) */}
// // // //         <div className="relative overflow-hidden bg-gradient-to-br from-[#080D1C] via-[#161F52] to-[#4C2FD1] text-white px-6 py-8 sm:px-10 sm:py-10 md:p-14 flex flex-col md:justify-center">
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
// // // //             <div className="flex items-center gap-3 mb-5 md:mb-10">
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

// // // //             <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight">
// // // //               <span className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent block md:inline">
// // // //                 AI Powered
// // // //               </span>{" "}
// // // //               <span className="block">Billing System</span>
// // // //             </h1>

// // // //             <div className="w-16 h-[3px] bg-gradient-to-r from-indigo-300 to-transparent rounded-full my-4 md:my-8 hidden sm:block"></div>

// // // //             <p className="text-sm sm:text-base text-gray-300 leading-6 sm:leading-8 hidden sm:block max-w-sm">
// // // //               Smart. Fast. Intelligent. Manage your billing, inventory and
// // // //               customers from one powerful platform.
// // // //             </p>
// // // //           </div>

// // // //           <div className="relative mt-auto pt-8 hidden md:flex items-end gap-4 opacity-90">
// // // //             <BoxIcon size={38} className="text-indigo-300" />
// // // //             <TrendingUp size={46} className="text-blue-300" />
// // // //             <Cloud size={38} className="text-indigo-200" />
// // // //           </div>
// // // //         </div>

// // // //         {/* Right Side (Form) */}
// // // //         <div className="flex-1 flex items-center justify-center px-6 py-8 sm:p-10 md:p-14 bg-white">
// // // //           <div className="w-full max-w-md">
// // // //             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
// // // //               Welcome Back
// // // //             </h2>

// // // //             <p className="text-sm sm:text-base text-gray-500 mt-2 mb-6 sm:mb-8">
// // // //               Sign in to continue to your account
// // // //             </p>

// // // //             {/* Error Banner */}
// // // //             {error && (
// // // //               <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// // // //                 <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// // // //                 <p className="text-sm font-medium">{error}</p>
// // // //               </div>
// // // //             )}

// // // //             <form onSubmit={handleSubmit}>
// // // //               <label htmlFor="email" className="text-sm font-semibold text-gray-700">
// // // //                 Email / Phone Number
// // // //               </label>

// // // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-5 sm:mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // // //                   <Mail size={18} className="text-indigo-600" />
// // // //                 </span>
// // // //                 <input
// // // //                   id="email"
// // // //                   type="text"
// // // //                   required
// // // //                   value={email}
// // // //                   onChange={(e) => {
// // // //                     setEmail(e.target.value);
// // // //                     if (error) setError(null);
// // // //                   }}
// // // //                   placeholder="you@store.com"
// // // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // // //                   autoComplete="username"
// // // //                 />
// // // //               </div>

// // // //               <label htmlFor="password" className="text-sm font-semibold text-gray-700">
// // // //                 Password
// // // //               </label>

// // // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200">
// // // //                 <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// // // //                   <Lock size={18} className="text-indigo-600" />
// // // //                 </span>
// // // //                 <input
// // // //                   id="password"
// // // //                   type={showPassword ? "text" : "password"}
// // // //                   required
// // // //                   value={password}
// // // //                   onChange={(e) => {
// // // //                     setPassword(e.target.value);
// // // //                     if (error) setError(null);
// // // //                   }}
// // // //                   placeholder="Enter your password"
// // // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // // //                   autoComplete="current-password"
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

// // // //               <div className="text-right mt-3">
// // // //                 <button type="button" className="text-indigo-600 text-sm font-medium hover:underline">
// // // //                   Forgot Password?
// // // //                 </button>
// // // //               </div>

// // // //               <button
// // // //                 type="submit"
// // // //                 disabled={isLoading}
// // // //                 className="w-full flex justify-center items-center h-12 sm:h-14 mt-7 sm:mt-8 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-indigo-500 bg-[length:160%_100%] bg-left text-white font-semibold text-base sm:text-lg shadow-[0_10px_25px_-8px_rgba(79,70,229,0.6)] hover:bg-right hover:shadow-[0_14px_30px_-8px_rgba(79,70,229,0.75)] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
// // // //               >
// // // //                 {isLoading ? (
// // // //                   <>
// // // //                     <Loader2 className="animate-spin mr-2" size={20} />
// // // //                     Authenticating...
// // // //                   </>
// // // //                 ) : (
// // // //                   "Login"
// // // //                 )}
// // // //               </button>
// // // //             </form>

// // // //             <div className="flex items-center my-7 sm:my-8">
// // // //               <div className="flex-1 border-t border-gray-200"></div>
// // // //               <span className="mx-4 text-gray-400 text-xs font-medium tracking-wider">OR</span>
// // // //               <div className="flex-1 border-t border-gray-200"></div>
// // // //             </div>

// // // //             <p className="text-center text-sm sm:text-base text-gray-600">
// // // //               Don't have an account?{" "}
// // // //               <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">
// // // //                 Create Account
// // // //               </Link>
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;

// // // import { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { Eye, EyeOff, Mail, Lock, TrendingUp, Box as BoxIcon, Cloud, Loader2, AlertTriangle } from "lucide-react";
// // // import logo from "../assets/logo.jpg"; // Ensure this points to the new Laxvira logo

// // // const Login = () => {
// // //   const navigate = useNavigate();
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     if (!email.trim() || !password.trim()) {
// // //       setError("Please enter both email and password.");
// // //       return;
// // //     }
// // //     setIsLoading(true);
// // //     try {
// // //       const response = await fetch("http://localhost:8000/api/auth/login", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email, password }),
// // //       });
// // //       const data = await response.json();
// // //       if (!response.ok) throw new Error(data.detail || "Invalid email or password.");
      
// // //       localStorage.setItem("token", data.access_token);
// // //       localStorage.setItem("userRole", "admin"); 
// // //       navigate("/dashboard");
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen w-full bg-[#EEF1F8] flex items-center justify-center p-0 sm:p-6">
// // //       <div className="w-full sm:max-w-5xl bg-white sm:rounded-[28px] shadow-2xl ring-1 ring-black/5 overflow-hidden flex flex-col md:grid md:grid-cols-2 min-h-screen sm:min-h-0">
        
// // //         {/* Left Side (Visual) */}
// // //         <div className="relative overflow-hidden bg-brand-navy text-white px-6 py-8 sm:px-10 sm:py-10 md:p-14 flex flex-col md:justify-center">
          
// // //           {/* Ambient Glows */}
// // //           <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-gold/20 blur-3xl"></div>
// // //           <div className="pointer-events-none absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl"></div>

// // //           {/* Large Watermark Background */}
// // //           <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] scale-150 transform translate-x-12">
// // //             <img src={logo} alt="" className="w-full h-full object-contain" />
// // //           </div>

// // //           <div className="relative z-10">
// // //             {/* Enlarged Clean Logo */}
// // //             <div className="mb-10 md:mb-16">
// // //               <img
// // //                 src={logo}
// // //                 alt="Laxvira"
// // //                 className="w-32 sm:w-40 h-auto object-contain drop-shadow-xl mix-blend-screen"
// // //               />
// // //             </div>

// // //             {/* Updated Motto Heading */}
// // //             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
// // //               <span className="text-brand-gold block mb-1">Smart Business.</span>
// // //               <span className="block text-white">Smarter Finance.</span>
// // //             </h1>

// // //             <div className="w-16 h-[3px] bg-brand-gold rounded-full my-6 md:my-8 hidden sm:block"></div>

// // //             <p className="text-sm sm:text-base text-gray-300 leading-6 sm:leading-8 hidden sm:block max-w-sm">
// // //               Manage your billing, inventory, and B2B customers from one premium platform.
// // //             </p>
// // //           </div>

// // //           <div className="relative mt-auto pt-8 hidden md:flex items-end gap-4 opacity-90 z-10">
// // //             <BoxIcon size={38} className="text-brand-gold" />
// // //             <TrendingUp size={46} className="text-white" />
// // //             <Cloud size={38} className="text-brand-gold/70" />
// // //           </div>
// // //         </div>

// // //         {/* Right Side (Form) */}
// // //         <div className="flex-1 flex items-center justify-center px-6 py-8 sm:p-10 md:p-14 bg-white relative z-20">
// // //           <div className="w-full max-w-md">
// // //             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
// // //               Welcome Back
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-gray-500 mt-2 mb-6 sm:mb-8">
// // //               Sign in to continue to your account
// // //             </p>

// // //             {error && (
// // //               <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// // //                 <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// // //                 <p className="text-sm font-medium">{error}</p>
// // //               </div>
// // //             )}

// // //             <form onSubmit={handleSubmit}>
// // //               <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Email / Phone Number</label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-5 sm:mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                   <Mail size={18} className="text-brand-gold" />
// // //                 </span>
// // //                 <input
// // //                   id="email"
// // //                   type="text"
// // //                   required
// // //                   value={email}
// // //                   onChange={(e) => {
// // //                     setEmail(e.target.value);
// // //                     if (error) setError(null);
// // //                   }}
// // //                   placeholder="you@store.com"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="username"
// // //                 />
// // //               </div>

// // //               <label htmlFor="password" className="text-sm font-semibold text-brand-navy">Password</label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                   <Lock size={18} className="text-brand-gold" />
// // //                 </span>
// // //                 <input
// // //                   id="password"
// // //                   type={showPassword ? "text" : "password"}
// // //                   required
// // //                   value={password}
// // //                   onChange={(e) => {
// // //                     setPassword(e.target.value);
// // //                     if (error) setError(null);
// // //                   }}
// // //                   placeholder="Enter your password"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="current-password"
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowPassword((v) => !v)}
// // //                   className="text-gray-400 hover:text-brand-navy transition shrink-0"
// // //                 >
// // //                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //                 </button>
// // //               </div>

// // //               <div className="text-right mt-3">
// // //                 <button type="button" className="text-brand-gold font-bold text-sm hover:underline">
// // //                   Forgot Password?
// // //                 </button>
// // //               </div>

// // //               <button
// // //                 type="submit"
// // //                 disabled={isLoading}
// // //                 className="w-full flex justify-center items-center h-12 sm:h-14 mt-7 sm:mt-8 rounded-2xl bg-brand-gold text-brand-navy font-bold text-base sm:text-lg hover:bg-brand-goldLight active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
// // //               >
// // //                 {isLoading ? (
// // //                   <>
// // //                     <Loader2 className="animate-spin mr-2" size={20} />
// // //                     Authenticating...
// // //                   </>
// // //                 ) : (
// // //                   "Login"
// // //                 )}
// // //               </button>
// // //             </form>

// // //             <div className="flex items-center my-7 sm:my-8">
// // //               <div className="flex-1 border-t border-gray-200"></div>
// // //               <span className="mx-4 text-gray-400 text-xs font-medium tracking-wider">OR</span>
// // //               <div className="flex-1 border-t border-gray-200"></div>
// // //             </div>

// // //             <p className="text-center text-sm sm:text-base text-gray-600">
// // //               Don't have an account?{" "}
// // //               <Link to="/signup" className="text-brand-gold font-bold hover:underline">
// // //                 Create Account
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;

// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { Eye, EyeOff, Mail, Lock, TrendingUp, Box as BoxIcon, Cloud, Loader2, AlertTriangle } from "lucide-react";
// // import logo from "../assets/logo.jpg"; // Ensure this points to the new Laxvira logo

// // const Login = () => {
// //   const navigate = useNavigate();
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   // const handleSubmit = async (e) => {
// //   //   e.preventDefault();
// //   //   setError(null);
// //   //   if (!email.trim() || !password.trim()) {
// //   //     setError("Please enter both email and password.");
// //   //     return;
// //   //   }
// //   //   setIsLoading(true);
// //   //   try {
// //   //     const response = await fetch("http://localhost:8000/api/auth/login", {
// //   //       method: "POST",
// //   //       headers: { "Content-Type": "application/json" },
// //   //       body: JSON.stringify({ email, password }),
// //   //     });
// //   //     const data = await response.json();
// //   //     if (!response.ok) throw new Error(data.detail || "Invalid email or password.");
      
// //   //     localStorage.setItem("token", data.access_token);
// //   //     localStorage.setItem("userRole", "admin"); 

// //   //     // --- BEGIN NEW SUPERADMIN ROUTING LOGIC ---
// //   //     try {
// //   //       const profileRes = await fetch("http://localhost:8000/api/store/profile", {
// //   //         method: "GET",
// //   //         headers: {
// //   //           "Content-Type": "application/json",
// //   //           "Authorization": `Bearer ${data.access_token}`
// //   //         }
// //   //       });
        
// //   //       if (profileRes.ok) {
// //   //         const profileData = await profileRes.json();
// //   //         if (profileData.is_superadmin) {
// //   //           navigate("/hq/dashboard");
// //   //           return; // Exit early to prevent normal dashboard navigation
// //   //         }
// //   //       } else {
// //   //           console.error("Profile check returned status:", profileRes.status);
// //   //       }
// //   //     } catch (profileErr) {
// //   //       console.error("Profile check failed during login:", profileErr);
// //   //     }
// //   //     // --- END NEW SUPERADMIN ROUTING LOGIC ---

// //   //     // Standard Client Routing
// //   //     navigate("/dashboard");

// //   //   } catch (err) {
// //   //     setError(err.message);
// //   //   } finally {
// //   //     setIsLoading(false);
// //   //   }
// //   // };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     if (!email.trim() || !password.trim()) {
// // //       setError("Please enter both email and password.");
// // //       return;
// // //     }
// // //     setIsLoading(true);
// // //     try {
// // //       const response = await fetch("http://localhost:8000/api/auth/login", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email, password }),
// // //       });
// // //       const data = await response.json();
// // //       if (!response.ok) throw new Error(data.detail || "Invalid email or password.");
      
// // //       localStorage.setItem("token", data.access_token);
// // //       localStorage.setItem("userRole", "admin"); 

// // //       // --- ADDED THIS LINE TO CAPTURE RBAC ROLES ---
// // //       // if (data.user) {
// // //       //   localStorage.setItem("user", JSON.stringify(data.user)); 
// // //       // }
// // //       if (data.user) {
// // //   localStorage.setItem("user", JSON.stringify(data.user)); 

// // //   // --- ROLE-BASED REDIRECT ROUTING ---
// // //   if (data.user.is_hq_staff) {
// // //     switch (data.user.hq_role) {
// // //       case "SUPERADMIN":
// // //         navigate("/hq/dashboard");
// // //         return;
// // //       case "IT_SUPPORT":
// // //         navigate("/hq/support");
// // //         return;
// // //       case "SALES":
// // //         navigate("/hq/sales");
// // //         return;
// // //       case "FINANCE":
// // //         navigate("/hq/finance");
// // //         return;
// // //       default:
// // //         navigate("/hq/dashboard");
// // //         return;
// // //     }
// // //   }
// // // }

// // // navigate("/dashboard");

// // //       // --- BEGIN NEW SUPERADMIN ROUTING LOGIC ---
// // //       try {
// // //         const profileRes = await fetch("http://localhost:8000/api/store/profile", {
// // //           method: "GET",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             "Authorization": `Bearer ${data.access_token}`
// // //           }
// // //         });
        
// // //         if (profileRes.ok) {
// // //           const profileData = await profileRes.json();
// // //           if (profileData.is_superadmin) {
// // //             navigate("/hq/dashboard");
// // //             return; // Exit early to prevent normal dashboard navigation
// // //           }
// // //         } else {
// // //             console.error("Profile check returned status:", profileRes.status);
// // //         }
// // //       } catch (profileErr) {
// // //         console.error("Profile check failed during login:", profileErr);
// // //       }
// // //       // --- END NEW SUPERADMIN ROUTING LOGIC ---

// // //       // Standard Client Routing
// // //       navigate("/dashboard");

// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen w-full bg-[#EEF1F8] flex items-center justify-center p-0 sm:p-6">
// // //       <div className="w-full sm:max-w-5xl bg-white sm:rounded-[28px] shadow-2xl ring-1 ring-black/5 overflow-hidden flex flex-col md:grid md:grid-cols-2 min-h-screen sm:min-h-0">
        
// // //         {/* Left Side (Visual) */}
// // //         <div className="relative overflow-hidden bg-brand-navy text-white px-6 py-8 sm:px-10 sm:py-10 md:p-14 flex flex-col md:justify-center">
          
// // //           {/* Ambient Glows */}
// // //           <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-gold/20 blur-3xl"></div>
// // //           <div className="pointer-events-none absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl"></div>

// // //           {/* Large Watermark Background */}
// // //           <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] scale-150 transform translate-x-12">
// // //             <img src={logo} alt="" className="w-full h-full object-contain" />
// // //           </div>

// // //           <div className="relative z-10">
// // //             {/* Enlarged Clean Logo */}
// // //             <div className="mb-10 md:mb-16">
// // //               <img
// // //                 src={logo}
// // //                 alt="Laxvira"
// // //                 className="w-32 sm:w-40 h-auto object-contain drop-shadow-xl mix-blend-screen"
// // //               />
// // //             </div>

// // //             {/* Updated Motto Heading */}
// // //             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
// // //               <span className="text-brand-gold block mb-1">Smart Business.</span>
// // //               <span className="block text-white">Smarter Finance.</span>
// // //             </h1>

// // //             <div className="w-16 h-[3px] bg-brand-gold rounded-full my-6 md:my-8 hidden sm:block"></div>

// // //             <p className="text-sm sm:text-base text-gray-300 leading-6 sm:leading-8 hidden sm:block max-w-sm">
// // //               Manage your billing, inventory, and B2B customers from one premium platform.
// // //             </p>
// // //           </div>

// // //           <div className="relative mt-auto pt-8 hidden md:flex items-end gap-4 opacity-90 z-10">
// // //             <BoxIcon size={38} className="text-brand-gold" />
// // //             <TrendingUp size={46} className="text-white" />
// // //             <Cloud size={38} className="text-brand-gold/70" />
// // //           </div>
// // //         </div>

// // //         {/* Right Side (Form) */}
// // //         <div className="flex-1 flex items-center justify-center px-6 py-8 sm:p-10 md:p-14 bg-white relative z-20">
// // //           <div className="w-full max-w-md">
// // //             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
// // //               Welcome Back
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-gray-500 mt-2 mb-6 sm:mb-8">
// // //               Sign in to continue to your account
// // //             </p>

// // //             {error && (
// // //               <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-600">
// // //                 <AlertTriangle size={20} className="shrink-0 mt-0.5" />
// // //                 <p className="text-sm font-medium">{error}</p>
// // //               </div>
// // //             )}

// // //             <form onSubmit={handleSubmit}>
// // //               <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Email / Phone Number</label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 mb-5 sm:mb-6 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                   <Mail size={18} className="text-brand-gold" />
// // //                 </span>
// // //                 <input
// // //                   id="email"
// // //                   type="text"
// // //                   required
// // //                   value={email}
// // //                   onChange={(e) => {
// // //                     setEmail(e.target.value);
// // //                     if (error) setError(null);
// // //                   }}
// // //                   placeholder="you@store.com"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="username"
// // //                 />
// // //               </div>

// // //               <label htmlFor="password" className="text-sm font-semibold text-brand-navy">Password</label>
// // //               <div className="flex items-center border border-gray-200 rounded-2xl px-4 mt-2 h-12 sm:h-14 bg-gray-50/60 focus-within:bg-white focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 transition-all duration-200">
// // //                 <span className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
// // //                   <Lock size={18} className="text-brand-gold" />
// // //                 </span>
// // //                 <input
// // //                   id="password"
// // //                   type={showPassword ? "text" : "password"}
// // //                   required
// // //                   value={password}
// // //                   onChange={(e) => {
// // //                     setPassword(e.target.value);
// // //                     if (error) setError(null);
// // //                   }}
// // //                   placeholder="Enter your password"
// // //                   className="w-full outline-none ml-3 bg-transparent text-sm sm:text-base placeholder:text-gray-400"
// // //                   autoComplete="current-password"
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowPassword((v) => !v)}
// // //                   className="text-gray-400 hover:text-brand-navy transition shrink-0"
// // //                 >
// // //                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// // //                 </button>
// // //               </div>

// // //               <div className="text-right mt-3">
// // //                 <button type="button" className="text-brand-gold font-bold text-sm hover:underline">
// // //                   Forgot Password?
// // //                 </button>
// // //               </div>

// // //               <button
// // //                 type="submit"
// // //                 disabled={isLoading}
// // //                 className="w-full flex justify-center items-center h-12 sm:h-14 mt-7 sm:mt-8 rounded-2xl bg-brand-gold text-brand-navy font-bold text-base sm:text-lg hover:bg-brand-goldLight active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
// // //               >
// // //                 {isLoading ? (
// // //                   <>
// // //                     <Loader2 className="animate-spin mr-2" size={20} />
// // //                     Authenticating...
// // //                   </>
// // //                 ) : (
// // //                   "Login"
// // //                 )}
// // //               </button>
// // //             </form>

// // //             <div className="flex items-center my-7 sm:my-8">
// // //               <div className="flex-1 border-t border-gray-200"></div>
// // //               <span className="mx-4 text-gray-400 text-xs font-medium tracking-wider">OR</span>
// // //               <div className="flex-1 border-t border-gray-200"></div>
// // //             </div>

// // //             <p className="text-center text-sm sm:text-base text-gray-600">
// // //               Don't have an account?{" "}
// // //               <Link to="/signup" className="text-brand-gold font-bold hover:underline">
// // //                 Create Account
// // //               </Link>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// //beautiful
// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { 
// //   Eye, EyeOff, Mail, Lock, TrendingUp, Box as BoxIcon, 
// //   Loader2, AlertTriangle, ChevronRight, BarChart3, 
// //   Coins, Receipt, PieChart 
// // } from "lucide-react";
// // import logo from "../assets/logo.jpg";

// // const Login = () => {
// //   const navigate = useNavigate();
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(null);
// //     if (!email.trim() || !password.trim()) {
// //       setError("Please enter both email and password.");
// //       return;
// //     }
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:8000/api/auth/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, password }),
// //       });
// //       const data = await response.json();
// //       if (!response.ok) throw new Error(data.detail || "Invalid email or password.");
      
// //       localStorage.setItem("token", data.access_token);
// //       localStorage.setItem("userRole", "admin"); 

// //       if (data.user) {
// //         localStorage.setItem("user", JSON.stringify(data.user)); 

// //         // --- ROLE-BASED REDIRECT ROUTING ---
// //         if (data.user.is_hq_staff) {
// //           switch (data.user.hq_role) {
// //             case "SUPERADMIN":
// //               navigate("/hq/dashboard");
// //               return;
// //             case "IT_SUPPORT":
// //               navigate("/hq/support");
// //               return;
// //             case "SALES":
// //               navigate("/hq/sales");
// //               return;
// //             case "FINANCE":
// //               navigate("/hq/finance");
// //               return;
// //             default:
// //               navigate("/hq/dashboard");
// //               return;
// //           }
// //         }
// //       }

// //       // --- BEGIN NEW SUPERADMIN ROUTING LOGIC ---
// //       try {
// //         const profileRes = await fetch("http://localhost:8000/api/store/profile", {
// //           method: "GET",
// //           headers: {
// //             "Content-Type": "application/json",
// //             "Authorization": `Bearer ${data.access_token}`
// //           }
// //         });
        
// //         if (profileRes.ok) {
// //           const profileData = await profileRes.json();
// //           if (profileData.is_superadmin) {
// //             navigate("/hq/dashboard");
// //             return; // Exit early to prevent normal dashboard navigation
// //           }
// //         } else {
// //             console.error("Profile check returned status:", profileRes.status);
// //         }
// //       } catch (profileErr) {
// //         console.error("Profile check failed during login:", profileErr);
// //       }
// //       // --- END NEW SUPERADMIN ROUTING LOGIC ---

// //       // // Standard Client Routing
// //       // navigate("/dashboard");
// //       // --- SMART TENANT ROUTING ---
// //       const tenantRole = data.user?.tenant_role || "STORE_ADMIN";
      
// //       if (tenantRole === "CASHIER") {
// //         navigate("/sales"); // Cashiers go straight to the POS/Sales screen
// //       } else if (tenantRole === "INVENTORY") {
// //         navigate("/inventory"); // Warehouse staff go straight to stock management
// //       } else {
// //         navigate("/dashboard"); // Admins and Managers get the main analytics dashboard
// //       }

// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen w-full bg-[#F8FAFC] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-indigo-200 selection:text-indigo-900">
      
// //       {/* --- GLOBAL CSS FOR 3D FLOATING ANIMATIONS --- */}
// //       <style dangerouslySetInnerHTML={{__html: `
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-20px) rotate(3deg); }
// //         }
// //         @keyframes float-reverse {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(20px) rotate(-3deg); }
// //         }
// //         @keyframes float-slow {
// //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// //           50% { transform: translateY(-30px) rotate(-2deg); }
// //         }
// //         .animate-float { animation: float 7s ease-in-out infinite; }
// //         .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
// //         .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
// //         .glass-element {
// //           background: rgba(255, 255, 255, 0.4);
// //           backdrop-filter: blur(16px);
// //           border: 1px solid rgba(255, 255, 255, 0.6);
// //           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
// //         }
// //       `}} />

// //       {/* --- AMBIENT BLOBS --- */}
// //       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-300/30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
// //       <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-300/30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

// //       {/* --- FLOATING TRADE & FINANCE ELEMENTS (BACKGROUND) --- */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
// //         {/* Top Left: Revenue Chart */}
// //         <div className="absolute top-[15%] left-[10%] glass-element p-4 rounded-2xl animate-float transform rotate-[-10deg]">
// //           <div className="bg-indigo-100 p-3 rounded-xl border border-indigo-200">
// //             <BarChart3 size={32} className="text-indigo-600" />
// //           </div>
// //         </div>

// //         {/* Bottom Left: Supply Chain Box */}
// //         <div className="absolute bottom-[20%] left-[15%] glass-element p-5 rounded-2xl animate-float-reverse transform rotate-[15deg]">
// //           <div className="bg-cyan-100 p-4 rounded-xl border border-cyan-200">
// //             <BoxIcon size={40} className="text-cyan-600" />
// //           </div>
// //         </div>

// //         {/* Top Right: Invoice/Ledger */}
// //         <div className="absolute top-[20%] right-[12%] glass-element p-4 rounded-3xl animate-float-slow transform rotate-[12deg]">
// //           <div className="bg-fuchsia-100 p-3 rounded-xl border border-fuchsia-200 flex items-center gap-3">
// //             <Receipt size={28} className="text-fuchsia-600" />
// //             <div className="space-y-1.5 hidden md:block">
// //               <div className="w-12 h-1.5 bg-fuchsia-200 rounded-full"></div>
// //               <div className="w-8 h-1.5 bg-fuchsia-200 rounded-full"></div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Right: Financial Capital */}
// //         <div className="absolute bottom-[15%] right-[10%] glass-element p-5 rounded-full animate-float transform rotate-[-15deg]">
// //           <div className="bg-amber-100 p-4 rounded-full border border-amber-200 shadow-inner">
// //             <Coins size={36} className="text-amber-600" />
// //           </div>
// //         </div>
        
// //         {/* Center Top: Analytics Pie */}
// //         <div className="absolute top-[5%] left-[50%] -translate-x-1/2 glass-element p-3 rounded-full animate-float-reverse">
// //           <div className="bg-emerald-100 p-2 rounded-full border border-emerald-200">
// //             <PieChart size={24} className="text-emerald-600" />
// //           </div>
// //         </div>

// //       </div>

// //       {/* --- MAIN LOGIN CONTAINER --- */}
// //       <div className="w-full sm:max-w-5xl bg-white/60 backdrop-blur-2xl sm:rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-white/80 overflow-hidden flex flex-col md:grid md:grid-cols-2 min-h-[100dvh] sm:min-h-[600px] relative z-10">
        
// //         {/* Left Side (Visual Branding) */}
// //         <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-white/50 border-b md:border-b-0 md:border-r border-white/60 px-8 py-10 md:p-14 flex flex-col justify-center items-start group">
          
// //           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.08)_0%,transparent_70%)]"></div>

// //           <div className="relative z-10 w-full">
// //             <div className="mb-10 inline-flex items-center justify-center p-1 bg-white rounded-2xl shadow-sm border border-slate-100">
// //               <img
// //                 src={logo}
// //                 alt="Laxvira"
// //                 className="w-16 sm:w-20 h-auto object-contain rounded-xl"
// //               />
// //             </div>

// //             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-50 border border-indigo-100 text-[10px] font-black tracking-widest text-indigo-600 uppercase mb-6">
// //               <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
// //               Secure Gateway
// //             </div>

// //             <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 mb-6">
// //               Operational <br/>
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
// //                 Command Center.
// //               </span>
// //             </h1>

// //             <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-12">
// //               Authenticate to access your enterprise billing, inventory, and B2B workflow environments.
// //             </p>
// //           </div>

// //           {/* Feature Micro-Badges */}
// //           <div className="relative mt-auto flex flex-wrap items-center gap-3 w-full">
// //             <div className="flex items-center gap-2 bg-white/60 border border-white px-3 py-2 rounded-xl text-xs font-bold text-slate-600 shadow-sm">
// //               <TrendingUp size={14} className="text-indigo-500" /> Revenue
// //             </div>
// //             <div className="flex items-center gap-2 bg-white/60 border border-white px-3 py-2 rounded-xl text-xs font-bold text-slate-600 shadow-sm">
// //               <BoxIcon size={14} className="text-cyan-500" /> Logistics
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side (Form) */}
// //         <div className="flex-1 flex items-center justify-center px-6 py-10 md:p-14 relative bg-white/40">
// //           <div className="w-full max-w-md relative z-10">
// //             <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
// //               Welcome Back
// //             </h2>
// //             <p className="text-sm text-slate-500 mt-2 mb-8 font-medium">
// //               Enter your credentials to securely access your node.
// //             </p>

// //             {error && (
// //               <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
// //                 <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
// //                 <p className="text-xs font-bold">{error}</p>
// //               </div>
// //             )}

// //             <form onSubmit={handleSubmit} className="space-y-5">
// //               <div>
// //                 <label htmlFor="email" className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">
// //                   Corporate Email
// //                 </label>
// //                 <div className="flex items-center border border-white rounded-2xl px-4 h-14 bg-white/60 shadow-inner focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// //                     <Mail size={16} className="text-indigo-600" />
// //                   </span>
// //                   <input
// //                     id="email"
// //                     type="text"
// //                     required
// //                     value={email}
// //                     onChange={(e) => {
// //                       setEmail(e.target.value);
// //                       if (error) setError(null);
// //                     }}
// //                     placeholder="you@laxvira.com"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
// //                     autoComplete="username"
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <label htmlFor="password" className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-2">
// //                   Identity Password
// //                 </label>
// //                 <div className="flex items-center border border-white rounded-2xl px-4 h-14 bg-white/60 shadow-inner focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300">
// //                   <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
// //                     <Lock size={16} className="text-indigo-600" />
// //                   </span>
// //                   <input
// //                     id="password"
// //                     type={showPassword ? "text" : "password"}
// //                     required
// //                     value={password}
// //                     onChange={(e) => {
// //                       setPassword(e.target.value);
// //                       if (error) setError(null);
// //                     }}
// //                     placeholder="Enter your security phrase"
// //                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
// //                     autoComplete="current-password"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={() => setShowPassword((v) => !v)}
// //                     className="text-slate-400 hover:text-indigo-600 transition shrink-0 p-1"
// //                   >
// //                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="flex justify-between items-center mt-2">
// //                 <div className="flex items-center gap-2">
// //                   <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
// //                   <label htmlFor="remember" className="text-xs font-bold text-slate-500 cursor-pointer">Remember device</label>
// //                 </div>
// //                 <button type="button" className="text-indigo-600 font-bold text-xs hover:text-indigo-700 transition-colors">
// //                   Recover Access?
// //                 </button>
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={isLoading}
// //                 className="w-full flex justify-center items-center h-14 mt-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-black text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none transition-all duration-300"
// //               >
// //                 {isLoading ? (
// //                   <>
// //                     <Loader2 className="animate-spin mr-2" size={18} />
// //                     Authenticating Matrix...
// //                   </>
// //                 ) : (
// //                   <>Authorize Session <ChevronRight size={18} className="ml-1" /></>
// //                 )}
// //               </button>
// //             </form>

// //             <div className="mt-10 text-center">
// //               <p className="text-sm font-medium text-slate-500">
// //                 Awaiting clearance?{" "}
// //                 <Link to="/signup" className="text-indigo-600 font-black hover:text-indigo-700 transition-colors">
// //                   Provision new node
// //                 </Link>
// //               </p>
// //             </div>
            
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// //colors updated
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   Eye, EyeOff, Mail, Lock, TrendingUp, Box as BoxIcon, 
//   Loader2, AlertTriangle, ChevronRight, BarChart3, 
//   Coins, Receipt, PieChart, FileText, CreditCard, Calculator
// } from "lucide-react";
// import logo from "../assets/logo.jpg";

// /* ==========================================================================
//    1. ABSTRACT BACKGROUND CARDS (Invoices, Quotes, Expenses)
//    ========================================================================== */
// const BackgroundCards = () => {
//   // Added Rupee (₹) amounts to make the background physically represent financial data
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
//                     {/* Render the Rupee amounts in the card header */}
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
//    2. MAIN LOGIN COMPONENT
//    ========================================================================== */
// const Login = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     if (!email.trim() || !password.trim()) {
//       setError("Please enter both email and password.");
//       return;
//     }
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:8000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.detail || "Invalid email or password.");
      
//       localStorage.setItem("token", data.access_token);
//       localStorage.setItem("userRole", "admin"); 

//       if (data.user) {
//         localStorage.setItem("user", JSON.stringify(data.user)); 

//         if (data.user.is_hq_staff) {
//           switch (data.user.hq_role) {
//             case "SUPERADMIN":
//               navigate("/hq/dashboard");
//               return;
//             case "IT_SUPPORT":
//               navigate("/hq/support");
//               return;
//             case "SALES":
//               navigate("/hq/sales");
//               return;
//             case "FINANCE":
//               navigate("/hq/finance");
//               return;
//             default:
//               navigate("/hq/dashboard");
//               return;
//           }
//         }
//       }

//       try {
//         const profileRes = await fetch("http://localhost:8000/api/store/profile", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${data.access_token}`
//           }
//         });
        
//         if (profileRes.ok) {
//           const profileData = await profileRes.json();
//           if (profileData.is_superadmin) {
//             navigate("/hq/dashboard");
//             return; 
//           }
//         } else {
//             console.error("Profile check returned status:", profileRes.status);
//         }
//       } catch (profileErr) {
//         console.error("Profile check failed during login:", profileErr);
//       }

//       const tenantRole = data.user?.tenant_role || "STORE_ADMIN";
      
//       if (tenantRole === "CASHIER") {
//         navigate("/sales"); 
//       } else if (tenantRole === "INVENTORY") {
//         navigate("/inventory"); 
//       } else {
//         navigate("/dashboard"); 
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

//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
//         <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0369a1]/15 rounded-full blur-[120px]"></div>
//         <div className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-[100px]"></div>
//       </div>

//       <BackgroundCards />

//       <div className="w-full sm:max-w-5xl bg-white/50 backdrop-blur-2xl sm:rounded-[2.5rem] shadow-[0_20px_60px_rgba(3,105,161,0.08)] border border-white overflow-hidden flex flex-col md:grid md:grid-cols-2 min-h-[100dvh] sm:min-h-[600px] relative z-10">
        
//         <div className="relative overflow-hidden bg-gradient-to-br from-sky-50/70 to-white/50 border-b md:border-b-0 md:border-r border-white/60 px-8 py-10 md:p-14 flex flex-col justify-center items-start group">
          
//           <div className="absolute -left-20 -bottom-20 opacity-[0.04] pointer-events-none mix-blend-multiply z-0">
//             <img src={logo} alt="" className="w-[500px] h-[500px] object-contain grayscale -rotate-12" />
//           </div>

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,105,161,0.05)_0%,transparent_70%)]"></div>

//           <div className="relative z-10 w-full">
//             <div className="mb-10 inline-flex items-center justify-center p-1 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white">
//               <img
//                 src={logo}
//                 alt="Laxvira"
//                 className="w-16 sm:w-20 h-auto object-contain rounded-xl"
//               />
//             </div>

//             <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#082f49] mb-6">
//               Operational <br/>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#C5A059]">
//                 Command Center.
//               </span>
//             </h1>

//             <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-12">
//               Authenticate to access your enterprise billing, inventory, and B2B workflow environments.
//             </p>
//           </div>

//           <div className="relative mt-auto flex flex-wrap items-center gap-3 w-full z-10">
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white px-3 py-2 rounded-xl text-xs font-bold text-slate-600 shadow-sm">
//               <TrendingUp size={14} className="text-[#0369a1]" /> Revenue
//             </div>
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white px-3 py-2 rounded-xl text-xs font-bold text-slate-600 shadow-sm">
//               <BoxIcon size={14} className="text-[#C5A059]" /> Logistics
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 flex items-center justify-center px-6 py-10 md:p-14 relative bg-white/30">
//           <div className="w-full max-w-md relative z-10">
//             <h2 className="text-2xl sm:text-3xl font-black text-[#082f49] tracking-tight">
//               Welcome Back
//             </h2>
//             <p className="text-sm text-slate-500 mt-2 mb-8 font-medium">
//               Enter your credentials to securely access your node.
//             </p>

//             {error && (
//               <div className="mb-6 p-4 rounded-xl bg-rose-50/80 backdrop-blur-md border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
//                 <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
//                 <p className="text-xs font-bold">{error}</p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label htmlFor="email" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">
//                   Corporate Email
//                 </label>
//                 <div className="flex items-center border border-white rounded-2xl px-4 h-14 bg-white/70 shadow-inner focus-within:bg-white focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                   <span className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
//                     <Mail size={16} className="text-[#0369a1]" />
//                   </span>
//                   <input
//                     id="email"
//                     type="text"
//                     required
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       if (error) setError(null);
//                     }}
//                     placeholder="you@laxvira.com"
//                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
//                     autoComplete="username"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">
//                   Identity Password
//                 </label>
//                 <div className="flex items-center border border-white rounded-2xl px-4 h-14 bg-white/70 shadow-inner focus-within:bg-white focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                   <span className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
//                     <Lock size={16} className="text-[#0369a1]" />
//                   </span>
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     required
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                       if (error) setError(null);
//                     }}
//                     placeholder="Enter your security phrase"
//                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-400"
//                     autoComplete="current-password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((v) => !v)}
//                     className="text-slate-400 hover:text-[#0369a1] transition shrink-0 p-1"
//                   >
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center mt-2">
//                 <div className="flex items-center gap-2">
//                   <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-[#0369a1] focus:ring-[#0369a1]" />
//                   <label htmlFor="remember" className="text-xs font-bold text-slate-500 cursor-pointer">Remember device</label>
//                 </div>
//                 <button type="button" className="text-[#0369a1] font-bold text-xs hover:text-[#C5A059] transition-colors">
//                   Recover Access?
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex justify-center items-center h-14 mt-8 rounded-2xl bg-[#082f49] text-white font-black text-sm uppercase tracking-wider hover:bg-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none transition-all duration-300"
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="animate-spin mr-2" size={18} />
//                     Authenticating Matrix...
//                   </>
//                 ) : (
//                   <>Authorize Session <ChevronRight size={18} className="ml-1" /></>
//                 )}
//               </button>
//             </form>

//             <div className="mt-10 text-center">
//               <p className="text-sm font-medium text-slate-500">
//                 Awaiting clearance?{" "}
//                 <Link to="/signup" className="text-[#0369a1] font-black hover:text-[#C5A059] transition-colors">
//                   Provision new node
//                 </Link>
//               </p>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

//bit more colorful
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   Eye, EyeOff, Mail, Lock, TrendingUp, Box as BoxIcon, 
//   Loader2, AlertTriangle, ChevronRight, BarChart3, 
//   Coins, Receipt, PieChart, FileText, CreditCard, Calculator
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
//    2. MAIN LOGIN COMPONENT
//    ========================================================================== */
// const Login = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     if (!email.trim() || !password.trim()) {
//       setError("Please enter both email and password.");
//       return;
//     }
//     setIsLoading(true);
//     try {
//       const response = await fetch("http://localhost:8000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.detail || "Invalid email or password.");
      
//       localStorage.setItem("token", data.access_token);
//       localStorage.setItem("userRole", "admin"); 

//       if (data.user) {
//         localStorage.setItem("user", JSON.stringify(data.user)); 

//         if (data.user.is_hq_staff) {
//           switch (data.user.hq_role) {
//             case "SUPERADMIN":
//               navigate("/hq/dashboard");
//               return;
//             case "IT_SUPPORT":
//               navigate("/hq/support");
//               return;
//             case "SALES":
//               navigate("/hq/sales");
//               return;
//             case "FINANCE":
//               navigate("/hq/finance");
//               return;
//             default:
//               navigate("/hq/dashboard");
//               return;
//           }
//         }
//       }

//       try {
//         const profileRes = await fetch("http://localhost:8000/api/store/profile", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${data.access_token}`
//           }
//         });
        
//         if (profileRes.ok) {
//           const profileData = await profileRes.json();
//           if (profileData.is_superadmin) {
//             navigate("/hq/dashboard");
//             return; 
//           }
//         } else {
//             console.error("Profile check returned status:", profileRes.status);
//         }
//       } catch (profileErr) {
//         console.error("Profile check failed during login:", profileErr);
//       }

//       const tenantRole = data.user?.tenant_role || "STORE_ADMIN";
      
//       if (tenantRole === "CASHIER") {
//         navigate("/sales"); 
//       } else if (tenantRole === "INVENTORY") {
//         navigate("/inventory"); 
//       } else {
//         navigate("/dashboard"); 
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

//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
//         <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0369a1]/15 rounded-full blur-[120px]"></div>
//         <div className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-[100px]"></div>
//       </div>

//       <BackgroundCards />

//       {/* --- TRUE GLASSMORPHISM CONTAINER --- */}
//       <div className="w-full sm:max-w-5xl bg-white/10 backdrop-blur-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_rgba(3,105,161,0.15),inset_0_0_30px_rgba(255,255,255,0.6)] border border-white/60 overflow-hidden flex flex-col md:grid md:grid-cols-2 min-h-[100dvh] sm:min-h-[600px] relative z-10">
        
//         {/* Left Side (Visual Branding) - Softened to let background bleed through */}
//         <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-transparent border-b md:border-b-0 md:border-r border-white/40 px-8 py-10 md:p-14 flex flex-col justify-center items-start group">
          
//           <div className="absolute -left-20 -bottom-20 opacity-[0.04] pointer-events-none mix-blend-multiply z-0">
//             <img src={logo} alt="" className="w-[500px] h-[500px] object-contain grayscale -rotate-12" />
//           </div>

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,105,161,0.05)_0%,transparent_70%)]"></div>

//           <div className="relative z-10 w-full">
//             {/* Glass Logo Container */}
//             <div className="mb-10 inline-flex items-center justify-center p-1 bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.05)] border border-white/60">
//               <img
//                 src={logo}
//                 alt="Laxvira"
//                 className="w-16 sm:w-20 h-auto object-contain rounded-xl mix-blend-multiply"
//               />
//             </div>

//             <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#082f49] mb-6">
//               Operational <br/>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#C5A059]">
//                 Command Center.
//               </span>
//             </h1>

//             <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-12">
//               Authenticate to access your enterprise billing, inventory, and B2B workflow environments.
//             </p>
//           </div>

//           <div className="relative mt-auto flex flex-wrap items-center gap-3 w-full z-10">
//             <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
//               <TrendingUp size={14} className="text-[#0369a1]" /> Revenue
//             </div>
//             <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
//               <BoxIcon size={14} className="text-[#C5A059]" /> Logistics
//             </div>
//           </div>
//         </div>

//         {/* Right Side (Form) */}
//         <div className="flex-1 flex items-center justify-center px-6 py-10 md:p-14 relative bg-white/10">
//           <div className="w-full max-w-md relative z-10">
//             <h2 className="text-2xl sm:text-3xl font-black text-[#082f49] tracking-tight">
//               Welcome Back
//             </h2>
//             <p className="text-sm text-slate-500 mt-2 mb-8 font-medium">
//               Enter your credentials to securely access your node.
//             </p>

//             {error && (
//               <div className="mb-6 p-4 rounded-xl bg-rose-50/60 backdrop-blur-xl border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
//                 <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
//                 <p className="text-xs font-bold">{error}</p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label htmlFor="email" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">
//                   Corporate Email
//                 </label>
//                 {/* Nested Glass Input */}
//                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
//                     <Mail size={16} className="text-[#0369a1]" />
//                   </span>
//                   <input
//                     id="email"
//                     type="text"
//                     required
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       if (error) setError(null);
//                     }}
//                     placeholder="you@laxvira.com"
//                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
//                     autoComplete="username"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">
//                   Identity Password
//                 </label>
//                 {/* Nested Glass Input */}
//                 <div className="flex items-center border border-white/60 rounded-2xl px-4 h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
//                   <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
//                     <Lock size={16} className="text-[#0369a1]" />
//                   </span>
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     required
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                       if (error) setError(null);
//                     }}
//                     placeholder="Enter your security phrase"
//                     className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
//                     autoComplete="current-password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((v) => !v)}
//                     className="text-slate-500 hover:text-[#0369a1] transition shrink-0 p-1"
//                   >
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center mt-2">
//                 <div className="flex items-center gap-2">
//                   <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/60 bg-white/40 text-[#0369a1] focus:ring-[#0369a1]" />
//                   <label htmlFor="remember" className="text-xs font-bold text-slate-500 cursor-pointer">Remember device</label>
//                 </div>
//                 <button type="button" className="text-[#0369a1] font-bold text-xs hover:text-[#C5A059] transition-colors">
//                   Recover Access?
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex justify-center items-center h-14 mt-8 rounded-2xl bg-[#082f49] text-white font-black text-sm uppercase tracking-wider hover:bg-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none transition-all duration-300"
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="animate-spin mr-2" size={18} />
//                     Authenticating Matrix...
//                   </>
//                 ) : (
//                   <>Authorize Session <ChevronRight size={18} className="ml-1" /></>
//                 )}
//               </button>
//             </form>

//             <div className="mt-10 text-center">
//               <p className="text-sm font-medium text-slate-500">
//                 Awaiting clearance?{" "}
//                 <Link to="/signup" className="text-[#0369a1] font-black hover:text-[#C5A059] transition-colors">
//                   Provision new node
//                 </Link>
//               </p>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Eye, EyeOff, Mail, Lock, TrendingUp, Box as BoxIcon, 
  Loader2, AlertTriangle, ChevronRight, Calculator,
  Receipt, CreditCard, FileText, KeyRound
} from "lucide-react";
import logo from "../assets/logo.jpg";

/* ==========================================================================
   1. ABSTRACT BACKGROUND CARDS (Invoices, Quotes, Expenses)
   ========================================================================== */
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
            }) }
          </div>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   2. MAIN LOGIN COMPONENT
   ========================================================================== */
const Login = () => {
  const navigate = useNavigate();
  
  // View State Management (1 = Credentials, 2 = OTP)
  const [step, setStep] = useState(1);
  
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  
  // UI State
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const otpRefs = useRef([]);

  // --- STEP 1: INITIALIZE LOGIN (SEND OTP) ---
  const handleInitiateLogin = async (e) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/auth/login/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.detail || "Invalid email or password.");
      
      if (data.requires_otp) {
        setStep(2);
      } else {
        // Fallback in case backend bypasses OTP
        finalizeLogin(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- STEP 2: VERIFY OTP ---
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError(null);
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/auth/login/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otpString }),
      });
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.detail || "Invalid or expired OTP.");
      
      finalizeLogin(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- FINAL ROUTING LOGIC ---
  const finalizeLogin = async (data) => {
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("userRole", "admin"); 

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user)); 

      if (data.user.is_hq_staff) {
        switch (data.user.hq_role) {
          case "SUPERADMIN":
            navigate("/hq/dashboard");
            return;
          case "IT_SUPPORT":
            navigate("/hq/support");
            return;
          case "SALES":
            navigate("/hq/sales");
            return;
          case "FINANCE":
            navigate("/hq/finance");
            return;
          default:
            navigate("/hq/dashboard");
            return;
        }
      }
    }

    try {
      const profileRes = await fetch("http://localhost:8000/api/store/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${data.access_token}`
        }
      });
      
      if (profileRes.ok) {
        const profileData = await profileRes.json();
        if (profileData.is_superadmin) {
          navigate("/hq/dashboard");
          return; 
        }
      } else {
          console.error("Profile check returned status:", profileRes.status);
      }
    } catch (profileErr) {
      console.error("Profile check failed during login:", profileErr);
    }

    const tenantRole = data.user?.role || data.user?.tenant_role || "STORE_ADMIN";
    
    if (tenantRole === "CASHIER") {
      navigate("/sales"); 
    } else if (tenantRole === "INVENTORY") {
      navigate("/inventory"); 
    } else {
      navigate("/dashboard"); 
    }
  };

  // --- OTP INPUT HANDLERS ---
  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Keep only last char
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
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

      {/* --- TRUE GLASSMORPHISM CONTAINER --- */}
      <div className="w-full sm:max-w-5xl bg-white/10 backdrop-blur-3xl sm:rounded-[2.5rem] shadow-[0_30px_60px_rgba(3,105,161,0.15),inset_0_0_30px_rgba(255,255,255,0.6)] border border-white/60 overflow-hidden flex flex-col md:grid md:grid-cols-2 min-h-[100dvh] sm:min-h-[600px] relative z-10">
        
        {/* Left Side (Visual Branding) */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white/40 to-transparent border-b md:border-b-0 md:border-r border-white/40 px-8 py-10 md:p-14 flex flex-col justify-center items-start group">
          
          <div className="absolute -left-20 -bottom-20 opacity-[0.04] pointer-events-none mix-blend-multiply z-0">
            <img src={logo} alt="" className="w-[500px] h-[500px] object-contain grayscale -rotate-12" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,105,161,0.05)_0%,transparent_70%)]"></div>

          <div className="relative z-10 w-full">
            <div className="mb-10 inline-flex items-center justify-center p-1 bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.05)] border border-white/60">
              <img
                src={logo}
                alt="Laxvira"
                className="w-16 sm:w-20 h-auto object-contain rounded-xl mix-blend-multiply"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#082f49] mb-6">
              Operational <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0369a1] to-[#C5A059]">
                Command Center.
              </span>
            </h1>

            <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-12">
              Authenticate to access your enterprise billing, inventory, and B2B workflow environments.
            </p>
          </div>

          <div className="relative mt-auto flex flex-wrap items-center gap-3 w-full z-10">
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
              <TrendingUp size={14} className="text-[#0369a1]" /> Revenue
            </div>
            <div className="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/60 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm">
              <BoxIcon size={14} className="text-[#C5A059]" /> Logistics
            </div>
          </div>
        </div>

        {/* Right Side (Form Area) */}
        <div className="flex-1 flex items-center justify-center px-6 py-10 md:p-14 relative bg-white/10">
          <div className="w-full max-w-md relative z-10">
            
            {/* VIEW STATE 1: CREDENTIALS */}
            {step === 1 && (
              <>
                <h2 className="text-2xl sm:text-3xl font-black text-[#082f49] tracking-tight">
                  Welcome Back
                </h2>
                <p className="text-sm text-slate-500 mt-2 mb-8 font-medium">
                  Enter your credentials to securely access your node.
                </p>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50/60 backdrop-blur-xl border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
                    <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
                    <p className="text-xs font-bold">{error}</p>
                  </div>
                )}

                <form onSubmit={handleInitiateLogin} className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">
                      Corporate Email
                    </label>
                    <div className="flex items-center border border-white/60 rounded-2xl px-4 h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
                      <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-[#0369a1]" />
                      </span>
                      <input
                        id="email"
                        type="text"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="you@laxvira.com"
                        className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
                        autoComplete="username"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-[10px] font-extrabold text-[#0369a1] uppercase tracking-widest mb-2">
                      Identity Password
                    </label>
                    <div className="flex items-center border border-white/60 rounded-2xl px-4 h-14 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus-within:bg-white/60 focus-within:border-sky-300 focus-within:ring-4 focus-within:ring-sky-500/10 transition-all duration-300">
                      <span className="w-8 h-8 rounded-lg bg-sky-50/50 flex items-center justify-center shrink-0">
                        <Lock size={16} className="text-[#0369a1]" />
                      </span>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="Enter your security phrase"
                        className="w-full outline-none ml-3 bg-transparent text-sm font-medium text-slate-800 placeholder:text-slate-500"
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="text-slate-500 hover:text-[#0369a1] transition shrink-0 p-1"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/60 bg-white/40 text-[#0369a1] focus:ring-[#0369a1]" />
                      <label htmlFor="remember" className="text-xs font-bold text-slate-500 cursor-pointer">Remember device</label>
                    </div>
                    <button type="button" className="text-[#0369a1] font-bold text-xs hover:text-[#C5A059] transition-colors">
                      Recover Access?
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center h-14 mt-8 rounded-2xl bg-[#082f49] text-white font-black text-sm uppercase tracking-wider hover:bg-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none transition-all duration-300"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={18} />
                        Verifying...
                      </>
                    ) : (
                      <>Authorize Session <ChevronRight size={18} className="ml-1" /></>
                    )}
                  </button>
                </form>

                <div className="mt-10 text-center">
                  <p className="text-sm font-medium text-slate-500">
                    Awaiting clearance?{" "}
                    <Link to="/signup" className="text-[#0369a1] font-black hover:text-[#C5A059] transition-colors">
                      Provision new node
                    </Link>
                  </p>
                </div>
              </>
            )}

            {/* VIEW STATE 2: OTP VERIFICATION */}
            {step === 2 && (
              <>
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50/80 backdrop-blur-xl border border-sky-100 flex items-center justify-center mb-6">
                    <KeyRound size={24} className="text-[#0369a1]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#082f49] tracking-tight">
                    Check your email
                  </h2>
                  <p className="text-sm text-slate-500 mt-2 font-medium">
                    We've sent a 6-digit security code to <strong className="text-slate-800">{email}</strong>.
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50/60 backdrop-blur-xl border border-rose-200 flex items-start gap-3 text-rose-700 shadow-sm">
                    <AlertTriangle size={18} className="shrink-0 mt-0.5 text-rose-500" />
                    <p className="text-xs font-bold">{error}</p>
                  </div>
                )}

                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  <div className="flex justify-between gap-2 sm:gap-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (otpRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        pattern="\d*"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-14 sm:w-14 sm:h-16 text-center text-xl font-black text-[#082f49] border border-white/60 rounded-2xl bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] focus:bg-white/60 focus:border-sky-300 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all duration-300"
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || otp.join("").length !== 6}
                    className="w-full flex justify-center items-center h-14 mt-4 rounded-2xl bg-[#082f49] text-white font-black text-sm uppercase tracking-wider hover:bg-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:pointer-events-none transition-all duration-300"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      "Confirm Identity"
                    )}
                  </button>

                  <div className="text-center mt-6">
                    <button 
                      type="button"
                      onClick={handleInitiateLogin} 
                      className="text-xs font-bold text-slate-500 hover:text-[#0369a1] transition-colors"
                    >
                      Didn't receive a code? <span className="underline">Resend</span>
                    </button>
                    <br />
                    <button 
                      type="button"
                      onClick={() => { setStep(1); setOtp(["","","","","",""]); setError(null); }} 
                      className="text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors mt-4"
                    >
                      Cancel & Return
                    </button>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;