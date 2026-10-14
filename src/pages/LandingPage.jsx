// // // //fully working code is this down here any creative 3d changes are made after this code

// // // import React, { useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { 
// // //   ArrowRight, Receipt, Boxes, LineChart, 
// // //   ChevronRight, Shield
// // // } from 'lucide-react';
// // // import logo from '../assets/logo.jpg';

// // // const LandingPage = () => {

// // //   // Simple intersection observer to trigger fade-ins on scroll
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver((entries) => {
// // //       entries.forEach(entry => {
// // //         if (entry.isIntersecting) {
// // //           entry.target.classList.add('opacity-100', 'translate-y-0');
// // //           entry.target.classList.remove('opacity-0', 'translate-y-10');
// // //         }
// // //       });
// // //     }, { threshold: 0.1 });

// // //     document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
// // //       observer.observe(el);
// // //     });

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-[#F8FAFC] font-sans relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      
// // //       {/* --- GLOBAL CSS UTILITIES --- */}
// // //       <style dangerouslySetInnerHTML={{__html: `
// // //         html {
// // //           scroll-behavior: smooth;
// // //         }
// // //         @keyframes float {
// // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //           50% { transform: translateY(-20px) rotate(2deg); }
// // //         }
// // //         @keyframes float-reverse {
// // //           0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //           50% { transform: translateY(20px) rotate(-2deg); }
// // //         }
// // //         @keyframes blob {
// // //           0% { transform: translate(0px, 0px) scale(1); }
// // //           33% { transform: translate(30px, -50px) scale(1.1); }
// // //           66% { transform: translate(-20px, 20px) scale(0.9); }
// // //           100% { transform: translate(0px, 0px) scale(1); }
// // //         }
// // //         .animate-float { animation: float 6s ease-in-out infinite; }
// // //         .animate-float-delayed { animation: float 7s ease-in-out 2s infinite; }
// // //         .animate-float-reverse { animation: float-reverse 8s ease-in-out 1s infinite; }
// // //         .animate-blob { animation: blob 10s infinite; }
// // //         .animation-delay-2000 { animation-delay: 2s; }
// // //         .animation-delay-4000 { animation-delay: 4s; }
        
// // //         .glass-nav {
// // //           background: rgba(255, 255, 255, 0.65);
// // //           backdrop-filter: blur(20px);
// // //           -webkit-backdrop-filter: blur(20px);
// // //           border-bottom: 1px solid rgba(255, 255, 255, 0.5);
// // //         }
// // //         .glass-panel {
// // //           background: rgba(255, 255, 255, 0.7);
// // //           backdrop-filter: blur(24px);
// // //           border: 1px solid rgba(255, 255, 255, 0.8);
// // //           box-shadow: 
// // //             0 30px 60px -12px rgba(50, 50, 93, 0.15),
// // //             0 18px 36px -18px rgba(0, 0, 0, 0.1),
// // //             inset 0 0 0 1px rgba(255, 255, 255, 1);
// // //         }
// // //         .isometric-container {
// // //           perspective: 1200px;
// // //           transform-style: preserve-3d;
// // //         }
// // //         /* Smooth transition class for the intersection observer */
// // //         .reveal-on-scroll {
// // //           transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
// // //         }
// // //       `}} />

// // //       {/* ========================================== */}
// // //       {/* 3D HERO SECTION                            */}
// // //       {/* ========================================== */}
// // //       <div className="relative pt-32 pb-32 lg:pt-48 lg:pb-56 overflow-visible">
        
// // //         {/* Animated 3D Blob Background that bleeds downwards */}
// // //         <div className="absolute inset-0 z-0 overflow-visible pointer-events-none">
// // //           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
// // //           <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
// // //           <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
// // //           {/* This yellow blob is pushed lower to bleed into the features section */}
// // //           <div className="absolute top-[60%] left-[20%] w-[700px] h-[700px] bg-amber-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
          
// // //           {/* Central structural line connecting hero to features */}
// // //           <div className="absolute left-1/2 top-0 h-[150%] w-[1px] bg-gradient-to-b from-transparent via-indigo-200 to-transparent -translate-x-1/2 z-0 hidden md:block"></div>
// // //         </div>

// // //         {/* HEADER NAV */}
// // //         <nav className="fixed top-0 w-full z-50 glass-nav transition-all">
// // //           <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
// // //             <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
// // //               <img src={logo} alt="Laxvira" className="w-10 h-10 rounded-xl object-contain shadow-md bg-white p-0.5" />
// // //               <span className="font-black tracking-widest text-slate-900 text-xl">LAXVIRA</span>
// // //             </div>
            
// // //             <div className="hidden md:flex items-center gap-8 text-sm font-extrabold text-slate-500">
// // //               <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
// // //               <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
// // //             </div>

// // //             <div className="flex items-center gap-5 text-sm font-bold">
// // //               <Link to="/login" className="text-slate-600 hover:text-indigo-600 transition-colors">Sign in</Link>
// // //               <Link to="/signup" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-indigo-600 shadow-xl shadow-indigo-500/20 transition-all active:scale-95 flex items-center gap-2">
// // //                 Start Free Trial <ChevronRight size={16} className="text-indigo-400" />
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </nav>

// // //         {/* HERO CONTENT */}
// // //         <main className="relative z-10 px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
// // //           <div className="text-left relative z-20">
// // //             <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 border border-slate-200 shadow-sm text-xs font-black tracking-widest text-indigo-600 uppercase mb-8 backdrop-blur-md">
// // //               <span className="relative flex h-2.5 w-2.5">
// // //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
// // //                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
// // //               </span>
// // //               Laxvira Systems Online
// // //             </div>

// // //             <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
// // //               Scale Your <br />
// // //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 animate-gradient-x">
// // //                 Revenue Core.
// // //               </span>
// // //             </h1>
            
// // //             <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium leading-relaxed mb-10">
// // //               An enterprise-grad suite of operational tools engineered to scale your billing, inventory, and B2B workflows seamlessly.
// // //             </p>

// // //             <div className="flex flex-wrap items-center gap-4">
// // //               <Link to="/signup" className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2">
// // //                 Initialize Instance <ArrowRight size={20} />
// // //               </Link>
// // //               <a href="#features" className="bg-white text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 border border-slate-200 shadow-sm transition-all active:scale-95">
// // //                 View Architecture
// // //               </a>
// // //             </div>
// // //           </div>

// // //           <div className="relative h-[500px] w-full isometric-container hidden md:block">
// // //             {/* Primary Center Card */}
// // //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 glass-panel rounded-3xl z-20 animate-float transform rotate-y-[-10deg] rotate-x-[5deg] p-6 flex flex-col shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
// // //               <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
// // //                 <LineChart className="text-white" size={32} />
// // //               </div>
// // //               <h3 className="text-xl font-black text-slate-800 mb-2">Revenue Engine</h3>
// // //               <p className="text-sm font-medium text-slate-500 mb-6">Real-time aggregation of multi-tenant billing streams.</p>
              
// // //               <div className="space-y-3 mt-auto">
// // //                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
// // //                   <div className="h-full bg-indigo-500 w-[75%] rounded-full"></div>
// // //                 </div>
// // //                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
// // //                   <div className="h-full bg-fuchsia-500 w-[45%] rounded-full"></div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Floating Satellite Card 1 */}
// // //             <div className="absolute top-10 right-0 w-64 h-32 glass-panel rounded-2xl z-30 animate-float-delayed transform rotate-y-[15deg] rotate-x-[-10deg] translate-z-[50px] p-5 flex items-center gap-4 shadow-[0_30px_60px_rgba(34,211,238,0.15)]">
// // //                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center border border-cyan-200 shrink-0">
// // //                  <Receipt className="text-cyan-600" size={24} />
// // //                </div>
// // //                <div>
// // //                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Invoiced</p>
// // //                  <p className="text-xl font-black text-slate-800">₹14,250.00</p>
// // //                </div>
// // //             </div>

// // //             {/* Floating Satellite Card 2 */}
// // //             <div className="absolute bottom-10 left-[-20px] w-64 h-32 glass-panel rounded-2xl z-30 animate-float-reverse transform rotate-y-[-20deg] rotate-x-[15deg] translate-z-[100px] p-5 flex items-center gap-4 shadow-[0_30px_60px_rgba(245,158,11,0.15)]">
// // //                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center border border-amber-200 shrink-0">
// // //                  <Boxes className="text-amber-600" size={24} />
// // //                </div>
// // //                <div>
// // //                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Stock</p>
// // //                  <p className="text-xl font-black text-slate-800">Synced</p>
// // //                </div>
// // //             </div>
// // //           </div>
// // //         </main>

// // //         {/* Curved SVG Divider creating physical flow into features */}
// // //         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
// // //           <svg className="relative block w-[calc(100%+1.3px)] h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
// // //             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,116.3,191,95.8c58.5-19.92,109.11-41.97,130.39-39.36Z" fill="#ffffff"></path>
// // //           </svg>
// // //         </div>
// // //       </div>

// // //       {/* ========================================== */}
// // //       {/* FEATURE SECTION                            */}
// // //       {/* ========================================== */}
// // //       <section id="features" className="relative z-20 bg-white pb-32 pt-10">
        
// // //         <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
// // //           <div className="text-center mb-24 reveal-on-scroll opacity-0 translate-y-10">
// // //             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Engineered for Scale.</h2>
// // //             <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">Every module is built with micro-service isolation, ensuring your operations remain fast, concurrent, and highly available.</p>
// // //           </div>

// // //           <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 group reveal-on-scroll opacity-0 translate-y-10">
// // //             <div className="w-full md:w-1/2 flex justify-center relative isometric-container">
// // //               <div className="w-full max-w-md bg-white p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] transform transition-transform duration-700 hover:rotate-y-[10deg] hover:rotate-x-[5deg] group-hover:shadow-indigo-500/20 border border-slate-100">
// // //                 <div className="bg-indigo-50 rounded-[1.5rem] p-10 flex flex-col items-center justify-center relative overflow-hidden">
// // //                   <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/20 blur-2xl rounded-full"></div>
// // //                   <Shield size={64} className="text-indigo-600 mb-6 relative z-10 animate-float" />
// // //                   <h4 className="text-2xl font-black text-slate-800 relative z-10">Tax-Compliant Ledger</h4>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="w-full md:w-1/2 text-left">
// // //               <span className="px-3 py-1.5 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-black uppercase tracking-widest mb-4 inline-block">Financial Core</span>
// // //               <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-5 leading-tight">
// // //                 Automated Invoicing & <br/>Custom Branding
// // //               </h2>
// // //               <p className="text-slate-500 font-medium text-lg leading-relaxed mb-6">
// // //                 Generate highly professional B2B invoices featuring automated geographic tax calculations, integrated payment gateways, and exact Hex-code brand matching.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 mb-10 group reveal-on-scroll opacity-0 translate-y-10">
// // //             <div className="w-full md:w-1/2 flex justify-center relative isometric-container">
// // //               <div className="w-full max-w-md bg-white p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] transform transition-transform duration-700 hover:rotate-y-[-10deg] hover:rotate-x-[5deg] group-hover:shadow-cyan-500/20 border border-slate-100">
// // //                 <div className="bg-cyan-50 rounded-[1.5rem] p-10 flex flex-col items-center justify-center relative overflow-hidden">
// // //                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full"></div>
// // //                    <Boxes size={64} className="text-cyan-600 mb-6 relative z-10 animate-float-reverse" />
// // //                    <h4 className="text-2xl font-black text-slate-800 relative z-10">Sync Engine V2</h4>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="w-full md:w-1/2 text-left">
// // //               <span className="px-3 py-1.5 rounded-lg bg-cyan-100 text-cyan-700 text-xs font-black uppercase tracking-widest mb-4 inline-block">Supply Chain</span>
// // //               <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-5 leading-tight">
// // //                 Real-Time Global <br/>Stock Engine
// // //               </h2>
// // //               <p className="text-slate-500 font-medium text-lg leading-relaxed mb-6">
// // //                 Seamlessly link your POS checkout and invoicing directly to your warehouse data. Configure low-stock thresholds and let the system prevent overselling automatically through distributed locking.
// // //               </p>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ========================================== */}
// // //       {/* HIGH-CONVERTING CTA FOOTER                 */}
// // //       {/* ========================================== */}
// // //       <footer className="relative z-10 overflow-hidden bg-slate-900 border-t border-slate-800">
// // //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-cyan-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

// // //         <div className="max-w-[1200px] mx-auto px-6 pt-40 pb-20 text-center relative z-10">
// // //           <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-tight">
// // //             Ready to deploy your <br className="hidden md:block"/>
// // //             new infrastructure?
// // //           </h2>
          
// // //           <p className="text-slate-300 font-medium text-xl mb-12 max-w-2xl mx-auto">
// // //             Join the modern enterprise teams scaling their operations with Laxvira. Provision your environment in less than 2 minutes.
// // //           </p>

// // //           <Link
// // //             to="/signup"
// // //             className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-full text-lg font-black hover:bg-indigo-50 shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all active:scale-95 mb-32"
// // //           >
// // //             Start Your 5-Day Free Trial <ArrowRight size={22} className="text-indigo-600" />
// // //           </Link>

// // //           <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
// // //             <div className="flex items-center gap-3">
// // //               <img src={logo} alt="Laxvira" className="w-8 h-8 rounded-lg object-contain bg-white p-0.5" />
// // //               <span className="font-black text-slate-200 tracking-widest text-lg">LAXVIRA</span>
// // //             </div>
            
// // //             <div className="flex flex-wrap justify-center gap-8 text-xs font-bold tracking-widest text-slate-400 uppercase">
// // //               <span className="hover:text-white cursor-pointer transition-colors">Architecture</span>
// // //               <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
// // //               <span className="hover:text-white cursor-pointer transition-colors">Security</span>
// // //               <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
// // //             </div>
            
// // //             <p className="text-xs text-slate-500 font-medium">
// // //               © 2026 Laxvira Systems. All rights reserved.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </footer>

// // //     </div>
// // //   );
// // // };

// // // export default LandingPage;


// // //new 3d creative code here after 13/08 meeting 
// // import React, { useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { 
// //   ArrowRight, ChevronRight, MessageCircle, 
// //   BarChart3, ShieldCheck, CreditCard, Box
// // } from 'lucide-react';
// // import logo from '../assets/logo.jpg';

// // const LandingPage = () => {

// //   // Simple intersection observer to trigger fade-ins on scroll
// //   useEffect(() => {
// //     const observer = new IntersectionObserver((entries) => {
// //       entries.forEach(entry => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add('opacity-100', 'translate-y-0');
// //           entry.target.classList.remove('opacity-0', 'translate-y-10');
// //         }
// //       });
// //     }, { threshold: 0.1 });

// //     document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
// //       observer.observe(el);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-[#F8FAFC] font-sans relative overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
// //       {/* --- GLOBAL CSS FOR 3D DOM ARCHITECTURE --- */}
// //       <style dangerouslySetInnerHTML={{__html: `
// //         html { scroll-behavior: smooth; }
        
// //         /* Organic Floating Animations */
// //         @keyframes float-slow {
// //           0%, 100% { transform: translateZ(0px) translateY(0px); }
// //           50% { transform: translateZ(20px) translateY(-15px); }
// //         }
// //         @keyframes float-med {
// //           0%, 100% { transform: translateZ(50px) translateY(0px); }
// //           50% { transform: translateZ(70px) translateY(-25px); }
// //         }
// //         @keyframes float-fast {
// //           0%, 100% { transform: translateZ(100px) translateY(0px) rotate(0deg); }
// //           50% { transform: translateZ(120px) translateY(-20px) rotate(2deg); }
// //         }

// //         .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
// //         .animate-float-med { animation: float-med 6s ease-in-out infinite; }
// //         .animate-float-fast { animation: float-fast 7s ease-in-out infinite; }
        
// //         .delay-1 { animation-delay: 1s; }
// //         .delay-2 { animation-delay: 2s; }
        
// //         /* 3D Scene Setup */
// //         .scene-container {
// //           perspective: 1200px;
// //           transform-style: preserve-3d;
// //         }
        
// //         .isometric-scene {
// //           transform: rotateX(15deg) rotateY(-25deg);
// //           transform-style: preserve-3d;
// //           transition: transform 0.5s ease;
// //         }

// //         .isometric-scene:hover {
// //           transform: rotateX(12deg) rotateY(-20deg);
// //         }

// //         /* Glassmorphism Utilities */
// //         .glass-panel {
// //           background: rgba(255, 255, 255, 0.6);
// //           backdrop-filter: blur(20px);
// //           -webkit-backdrop-filter: blur(20px);
// //           border: 1px solid rgba(255, 255, 255, 1);
// //           box-shadow: 
// //             0 25px 50px -12px rgba(0, 0, 0, 0.05),
// //             0 0 0 1px rgba(255, 255, 255, 0.5) inset;
// //         }

// //         .reveal-on-scroll {
// //           transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
// //         }
// //       `}} />

// //       {/* ========================================== */}
// //       {/* HEADER NAV                                 */}
// //       {/* ========================================== */}
// //       <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/50 transition-all">
// //         <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
// //           <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
// //             <img src={logo} alt="Laxvira" className="w-10 h-10 rounded-xl object-contain shadow-sm bg-white p-0.5" />
// //             <span className="font-black tracking-widest text-slate-900 text-xl">LAXVIRA</span>
// //           </div>
          
// //           <div className="hidden md:flex items-center gap-8 text-sm font-extrabold text-slate-500">
// //             <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
// //             <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
// //           </div>

// //           <div className="flex items-center gap-5 text-sm font-bold">
// //             <Link to="/login" className="text-slate-600 hover:text-indigo-600 transition-colors">Sign in</Link>
// //             <Link to="/signup" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-indigo-600 shadow-xl shadow-indigo-500/20 transition-all active:scale-95 flex items-center gap-2">
// //               Deploy Node <ChevronRight size={16} className="text-indigo-400" />
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* ========================================== */}
// //       {/* 3D HERO SECTION                            */}
// //       {/* ========================================== */}
// //       <div className="relative pt-32 pb-32 lg:pt-48 lg:pb-56 overflow-hidden">
        
// //         {/* Ambient Studio Lighting (Background Gradients) */}
// //         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
// //           {/* Subtle Grid Floor */}
// //           <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] origin-bottom opacity-40"></div>
          
// //           <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full mix-blend-multiply blur-[80px]"></div>
// //           <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-emerald-200/30 rounded-full mix-blend-multiply blur-[100px]"></div>
// //         </div>

// //         <main className="relative z-10 px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          
// //           {/* LEFT: Typography & CTA */}
// //           <div className="text-left relative z-20">
// //             <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 border border-slate-200 shadow-sm text-xs font-black tracking-widest text-emerald-600 uppercase mb-8 backdrop-blur-md">
// //               <span className="relative flex h-2.5 w-2.5">
// //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
// //                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
// //               </span>
// //               System Active
// //             </div>

// //             <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
// //               Manage <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
// //                 Everything.
// //               </span>
// //             </h1>
            
// //             <p className="text-lg md:text-xl text-slate-500 max-w-xl font-medium leading-relaxed mb-10">
// //               A spatial, unified workspace for your billing, inventory, and analytics. Experience enterprise software that feels like magic.
// //             </p>

// //             <div className="flex flex-wrap items-center gap-4">
// //               <Link to="/signup" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2">
// //                 Initialize Instance <ArrowRight size={20} />
// //               </Link>
// //             </div>
// //           </div>

// //           {/* RIGHT: Pure CSS 3D Isometric Scene */}
// //           <div className="relative w-full h-[600px] scene-container hidden lg:block">
// //             <div className="isometric-scene w-full h-full absolute inset-0">
              
// //               {/* 1. Main Dashboard Screen (Deepest Layer) */}
// //               <div className="absolute top-[10%] left-[10%] w-[450px] h-[320px] glass-panel rounded-3xl p-6 animate-float-slow" style={{ transform: 'translateZ(0px)' }}>
// //                 <div className="flex justify-between items-center mb-6">
// //                   <div className="w-24 h-4 bg-slate-200 rounded-full"></div>
// //                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><CreditCard size={14}/></div>
// //                 </div>
                
// //                 {/* Fake UI Rows */}
// //                 <div className="space-y-4">
// //                   {[1, 2, 3].map((i) => (
// //                     <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/50 border border-white/60 shadow-sm">
// //                       <div className="flex items-center gap-3">
// //                         <div className="w-10 h-10 rounded-lg bg-slate-100"></div>
// //                         <div className="space-y-2">
// //                           <div className="w-20 h-2 bg-slate-300 rounded-full"></div>
// //                           <div className="w-12 h-2 bg-slate-200 rounded-full"></div>
// //                         </div>
// //                       </div>
// //                       <div className="w-16 h-3 bg-emerald-100 rounded-full"></div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* 2. Floating Metric Card (Middle Layer) */}
// //               <div className="absolute top-[-5%] right-[5%] w-48 glass-panel rounded-2xl p-4 animate-float-med delay-1" style={{ transform: 'translateZ(80px)' }}>
// //                 <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
// //                   <BarChart3 size={20} />
// //                 </div>
// //                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Revenue</p>
// //                 <p className="text-2xl font-black text-slate-800">₹84,250</p>
// //               </div>

// //               {/* 3. The 3D Green Bar Charts (Foreground Layer) */}
// //               <div className="absolute bottom-[10%] left-[-5%] flex items-end gap-3 animate-float-fast delay-2" style={{ transform: 'translateZ(120px)' }}>
// //                 {/* 3D Bar 1 */}
// //                 <div className="w-12 h-24 relative group">
// //                   <div className="absolute inset-0 bg-emerald-400 rounded-t-lg shadow-[-5px_5px_15px_rgba(52,211,153,0.3)]"></div>
// //                   <div className="absolute top-0 right-[-8px] w-[8px] h-full bg-emerald-600 skew-y-[-45deg] origin-top-left rounded-tr-sm"></div>
// //                   <div className="absolute top-[-8px] left-0 w-full h-[8px] bg-emerald-300 skew-x-[-45deg] origin-bottom-left rounded-tl-sm"></div>
// //                 </div>
// //                 {/* 3D Bar 2 */}
// //                 <div className="w-12 h-40 relative group">
// //                   <div className="absolute inset-0 bg-emerald-400 rounded-t-lg shadow-[-5px_5px_15px_rgba(52,211,153,0.3)]"></div>
// //                   <div className="absolute top-0 right-[-8px] w-[8px] h-full bg-emerald-600 skew-y-[-45deg] origin-top-left rounded-tr-sm"></div>
// //                   <div className="absolute top-[-8px] left-0 w-full h-[8px] bg-emerald-300 skew-x-[-45deg] origin-bottom-left rounded-tl-sm"></div>
// //                 </div>
// //                 {/* 3D Bar 3 (Highest) */}
// //                 <div className="w-12 h-56 relative group">
// //                   <div className="absolute inset-0 bg-emerald-400 rounded-t-lg shadow-[-5px_5px_15px_rgba(52,211,153,0.3)]"></div>
// //                   <div className="absolute top-0 right-[-8px] w-[8px] h-full bg-emerald-600 skew-y-[-45deg] origin-top-left rounded-tr-sm"></div>
// //                   <div className="absolute top-[-8px] left-0 w-full h-[8px] bg-emerald-300 skew-x-[-45deg] origin-bottom-left rounded-tl-sm"></div>
// //                 </div>
// //               </div>

// //               {/* 4. Floating Notification Bubble (High Z-Index) */}
// //               <div className="absolute bottom-[20%] right-[15%] flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl animate-float-med" style={{ transform: 'translateZ(150px)' }}>
// //                 <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
// //                   <MessageCircle size={14} />
// //                 </div>
// //                 <div>
// //                   <p className="text-xs font-bold text-slate-800">Inventory Alert</p>
// //                   <p className="text-[10px] text-slate-500">Stock updated successfully</p>
// //                 </div>
// //               </div>

// //               {/* 5. Floating Asset (Top Left) */}
// //               <div className="absolute top-[20%] left-[-10%] w-16 h-16 glass-panel rounded-full flex items-center justify-center animate-float-fast" style={{ transform: 'translateZ(90px)' }}>
// //                 <ShieldCheck size={28} className="text-indigo-500" />
// //               </div>

// //             </div>
// //           </div>
// //         </main>
// //       </div>

// //       {/* ========================================== */}
// //       {/* FEATURE SECTION                            */}
// //       {/* ========================================== */}
// //       <section id="features" className="relative z-20 bg-white pb-32 pt-10">
// //         <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
// //           <div className="text-center mb-24 reveal-on-scroll opacity-0 translate-y-10">
// //             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Engineered for Scale.</h2>
// //             <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">Every module is built with micro-service isolation, ensuring your operations remain fast, concurrent, and highly available.</p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {/* Feature Box 1 */}
// //             <div className="glass-panel p-8 rounded-3xl reveal-on-scroll opacity-0 translate-y-10 hover:-translate-y-2 transition-transform duration-300">
// //               <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
// //                 <CreditCard size={28} />
// //               </div>
// //               <h3 className="text-xl font-black text-slate-800 mb-3">Intelligent Billing</h3>
// //               <p className="text-slate-500 font-medium text-sm leading-relaxed">
// //                 Generate highly professional B2B invoices featuring automated geographic tax calculations and integrated payment gateways.
// //               </p>
// //             </div>

// //             {/* Feature Box 2 */}
// //             <div className="glass-panel p-8 rounded-3xl reveal-on-scroll opacity-0 translate-y-10 delay-1 hover:-translate-y-2 transition-transform duration-300">
// //               <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
// //                 <Box size={28} />
// //               </div>
// //               <h3 className="text-xl font-black text-slate-800 mb-3">Live Inventory</h3>
// //               <p className="text-slate-500 font-medium text-sm leading-relaxed">
// //                 Seamlessly link your POS checkout directly to your warehouse data. Configure thresholds to prevent overselling automatically.
// //               </p>
// //             </div>

// //             {/* Feature Box 3 */}
// //             <div className="glass-panel p-8 rounded-3xl reveal-on-scroll opacity-0 translate-y-10 delay-2 hover:-translate-y-2 transition-transform duration-300">
// //               <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
// //                 <BarChart3 size={28} />
// //               </div>
// //               <h3 className="text-xl font-black text-slate-800 mb-3">Predictive Analytics</h3>
// //               <p className="text-slate-500 font-medium text-sm leading-relaxed">
// //                 Leverage intelligent algorithms built directly into your dashboard to forecast revenue and predict optimal restock cycles.
// //               </p>
// //             </div>
// //           </div>

// //         </div>
// //       </section>

// //       {/* ========================================== */}
// //       {/* HIGH-CONVERTING CTA FOOTER                 */}
// //       {/* ========================================== */}
// //       <footer className="relative z-10 overflow-hidden bg-slate-50 border-t border-slate-200">
// //         <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-16 text-center relative z-10">
// //           <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-tight">
// //             Ready to deploy your <br className="hidden md:block"/>
// //             new infrastructure?
// //           </h2>
          
// //           <Link
// //             to="/signup"
// //             className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-full text-lg font-black hover:bg-slate-800 shadow-xl shadow-slate-200 hover:-translate-y-1 transition-all active:scale-95 mb-32"
// //           >
// //             Start Your 5-Day Free Trial <ArrowRight size={22} className="text-emerald-400" />
// //           </Link>

// //           <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
// //             <div className="flex items-center gap-3">
// //               <img src={logo} alt="Laxvira" className="w-8 h-8 rounded-lg object-contain bg-white p-0.5 shadow-sm" />
// //               <span className="font-black text-slate-800 tracking-widest text-lg">LAXVIRA</span>
// //             </div>
            
// //             <p className="text-xs text-slate-400 font-medium">
// //               © 2026 Laxvira Systems. All rights reserved.
// //             </p>
// //           </div>
// //         </div>
// //       </footer>

// //     </div>
// //   );
// // };

// // export default LandingPage;

// //after i injected model 
// import React, { useEffect, Suspense } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ArrowRight, ChevronRight, BarChart3, ShieldCheck, 
//   CreditCard, Box, TrendingUp, Users, Loader2
// } from 'lucide-react';
// import { Canvas } from '@react-three/fiber';
// import { 
//   PresentationControls, Environment, ContactShadows, 
//   useGLTF, Html, Float 
// } from '@react-three/drei';
// import { EffectComposer, SSAO, HueSaturation } from '@react-three/postprocessing';
// import logo from '../assets/logo.jpg';

// // ==========================================
// // 1. WEBGL MODEL & HOLOGRAPHIC UI COMPONENT
// // ==========================================
// const OfficeModel = () => {
//   // Ensure your file is located exactly at: public/models/modern-office.glb
//   const { scene } = useGLTF('/models/modern-office.glb');

//   // Traverse the model to enable shadows on all meshes
//   useEffect(() => {
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.castShadow = true;
//         child.receiveShadow = true;
//       }
//     });
//   }, [scene]);

//   return (
//     <group position={[0, -1, 0]}>
//       {/* The Actual 3D Office Asset */}
//       <primitive object={scene} scale={1} position={[0, 0, 0]} />

//       {/* Floating Holographic DOM UI */}
//       <Float speed={2} floatIntensity={0.2} rotationIntensity={0.1}>
//         <Html 
//           transform 
//           position={[0, 2.5, -0.5]} // Adjust to float perfectly over the laptop
//           rotation={[-0.1, 0, 0]} 
//           scale={0.5}
//         >
//           <div className="w-[380px] bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl p-5 shadow-2xl shadow-emerald-500/10 flex flex-col gap-4 pointer-events-auto">
//             <div className="flex justify-between items-center border-b border-slate-100 pb-3">
//               <h3 className="font-black text-slate-800 text-lg">Live Node Status</h3>
//               <span className="flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
//               </span>
//             </div>

//             <div className="flex gap-4">
//               <div className="flex-1 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100/50 rounded-xl p-3">
//                 <TrendingUp size={18} className="text-emerald-600 mb-2" />
//                 <p className="text-[10px] font-black text-slate-400 tracking-widest">REVENUE</p>
//                 <p className="text-xl font-black text-slate-900">₹45.2k</p>
//               </div>
//               <div className="flex-1 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100/50 rounded-xl p-3">
//                 <Users size={18} className="text-indigo-600 mb-2" />
//                 <p className="text-[10px] font-black text-slate-400 tracking-widest">ACTIVE</p>
//                 <p className="text-xl font-black text-slate-900">1,402</p>
//               </div>
//             </div>

//             <button className="w-full mt-2 bg-slate-900 text-white font-bold text-sm py-2.5 rounded-lg hover:bg-emerald-600 transition-colors">
//               Access Matrix
//             </button>
//           </div>
//         </Html>
//       </Float>
//     </group>
//   );
// };


// // ==========================================
// // 2. MAIN LANDING PAGE COMPONENT
// // ==========================================
// const LandingPage = () => {

//   // Intersection observer for feature cards
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-10');
//         }
//       });
//     }, { threshold: 0.1 });

//     document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] font-sans relative overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
//       {/* --- GLOBAL CSS --- */}
//       <style dangerouslySetInnerHTML={{__html: `
//         html { scroll-behavior: smooth; }
//         .glass-panel {
//           background: rgba(255, 255, 255, 0.6);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 1);
//           box-shadow: 
//             0 25px 50px -12px rgba(0, 0, 0, 0.05),
//             0 0 0 1px rgba(255, 255, 255, 0.5) inset;
//         }
//         .reveal-on-scroll {
//           transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//       `}} />

//       {/* --- HEADER NAV --- */}
//       <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/50 transition-all">
//         <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//             <img src={logo} alt="Laxvira" className="w-10 h-10 rounded-xl object-contain shadow-sm bg-white p-0.5" />
//             <span className="font-black tracking-widest text-slate-900 text-xl">LAXVIRA</span>
//           </div>
          
//           <div className="hidden md:flex items-center gap-8 text-sm font-extrabold text-slate-500">
//             <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
//             <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
//           </div>

//           <div className="flex items-center gap-5 text-sm font-bold">
//             <Link to="/login" className="text-slate-600 hover:text-indigo-600 transition-colors">Sign in</Link>
//             <Link to="/signup" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-emerald-600 shadow-xl shadow-slate-200 transition-all active:scale-95 flex items-center gap-2">
//               Deploy Node <ChevronRight size={16} className="text-emerald-400" />
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* --- 3D HERO SECTION --- */}
//       <div className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
        
//         {/* Ambient Studio Lighting (Background Gradients) */}
//         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//           <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] origin-bottom opacity-40"></div>
//           <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full mix-blend-multiply blur-[80px]"></div>
//           <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-emerald-200/30 rounded-full mix-blend-multiply blur-[100px]"></div>
//         </div>

//         <main className="relative z-10 px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          
//           {/* LEFT: Typography & CTA */}
//           <div className="text-left relative z-20 pointer-events-auto">
//             <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 border border-slate-200 shadow-sm text-xs font-black tracking-widest text-emerald-600 uppercase mb-8 backdrop-blur-md">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
//               </span>
//               System Active
//             </div>

//             <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
//               Manage <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
//                 Everything.
//               </span>
//             </h1>
            
//             <p className="text-lg md:text-xl text-slate-500 max-w-xl font-medium leading-relaxed mb-10">
//               A spatial, unified workspace for your billing, inventory, and analytics. Experience enterprise software that feels like magic.
//             </p>

//             <div className="flex flex-wrap items-center gap-4">
//               <Link to="/signup" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2">
//                 Initialize Instance <ArrowRight size={20} />
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT: Active WebGL Canvas */}
//           <div className="relative w-full h-[600px] cursor-grab active:cursor-grabbing hidden lg:block">
//             <Canvas shadows orthographic camera={{ position: [12, 12, 12], zoom: 90 }}>
//               <Suspense fallback={
//                 <Html center>
//                   <div className="flex flex-col items-center gap-3">
//                     <Loader2 className="animate-spin text-emerald-600" size={32} />
//                     <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Loading Environment...</p>
//                   </div>
//                 </Html>
//               }>
//                 {/* Lighting Architecture */}
//                 <ambientLight intensity={0.4} />
//                 <directionalLight 
//                   position={[10, 20, 10]} 
//                   intensity={1.2} 
//                   castShadow 
//                   shadow-mapSize={[2048, 2048]} 
//                 />
//                 <Environment preset="city" />

//                 {/* Interactive Controls */}
//                 <PresentationControls
//                   global
//                   config={{ mass: 2, tension: 400 }}
//                   snap={{ mass: 4, tension: 1000 }}
//                   rotation={[0, -Math.PI / 4, 0]}
//                   polar={[-0.1, 0.2]}
//                   azimuth={[-0.5, 0.5]}
//                 >
//                   <OfficeModel />
//                 </PresentationControls>

//                 {/* Ground Shadow */}
//                 <ContactShadows 
//                   position={[0, -0.99, 0]} 
//                   opacity={0.5} 
//                   scale={15} 
//                   blur={2.5} 
//                   far={4} 
//                   color="#0f172a" 
//                 />

//                 {/* Post-Processing Engine for Clay Aesthetic */}
//                 <EffectComposer multisampling={4}>
//                   <SSAO samples={31} radius={0.1} intensity={20} luminanceInfluence={0.5} color="black" />
//                   <HueSaturation saturation={0.1} />
//                 </EffectComposer>
//               </Suspense>
//             </Canvas>
//           </div>
//         </main>
//       </div>

//       {/* --- FEATURE SECTION --- */}
//       <section id="features" className="relative z-20 bg-white pb-32 pt-10">
//         <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
//           <div className="text-center mb-24 reveal-on-scroll opacity-0 translate-y-10">
//             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Engineered for Scale.</h2>
//             <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">Every module is built with micro-service isolation, ensuring your operations remain fast, concurrent, and highly available.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="glass-panel p-8 rounded-3xl reveal-on-scroll opacity-0 translate-y-10 hover:-translate-y-2 transition-transform duration-300">
//               <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
//                 <CreditCard size={28} />
//               </div>
//               <h3 className="text-xl font-black text-slate-800 mb-3">Intelligent Billing</h3>
//               <p className="text-slate-500 font-medium text-sm leading-relaxed">
//                 Generate highly professional B2B invoices featuring automated geographic tax calculations and integrated payment gateways.
//               </p>
//             </div>

//             <div className="glass-panel p-8 rounded-3xl reveal-on-scroll opacity-0 translate-y-10 hover:-translate-y-2 transition-transform duration-300 delay-100">
//               <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
//                 <Box size={28} />
//               </div>
//               <h3 className="text-xl font-black text-slate-800 mb-3">Live Inventory</h3>
//               <p className="text-slate-500 font-medium text-sm leading-relaxed">
//                 Seamlessly link your POS checkout directly to your warehouse data. Configure thresholds to prevent overselling automatically.
//               </p>
//             </div>

//             <div className="glass-panel p-8 rounded-3xl reveal-on-scroll opacity-0 translate-y-10 hover:-translate-y-2 transition-transform duration-300 delay-200">
//               <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
//                 <BarChart3 size={28} />
//               </div>
//               <h3 className="text-xl font-black text-slate-800 mb-3">Predictive Analytics</h3>
//               <p className="text-slate-500 font-medium text-sm leading-relaxed">
//                 Leverage intelligent algorithms built directly into your dashboard to forecast revenue and predict optimal restock cycles.
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="relative z-10 overflow-hidden bg-slate-50 border-t border-slate-200">
//         <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-16 text-center relative z-10">
//           <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-tight">
//             Ready to deploy your <br className="hidden md:block"/>
//             new infrastructure?
//           </h2>
          
//           <Link
//             to="/signup"
//             className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-full text-lg font-black hover:bg-slate-800 shadow-xl shadow-slate-200 hover:-translate-y-1 transition-all active:scale-95 mb-32"
//           >
//             Start Your 5-Day Free Trial <ArrowRight size={22} className="text-emerald-400" />
//           </Link>

//           <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-3">
//               <img src={logo} alt="Laxvira" className="w-8 h-8 rounded-lg object-contain bg-white p-0.5 shadow-sm" />
//               <span className="font-black text-slate-800 tracking-widest text-lg">LAXVIRA</span>
//             </div>
            
//             <p className="text-xs text-slate-400 font-medium">
//               © 2026 Laxvira Systems. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// };

// export default LandingPage;

//changing viewing angles
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import { 
// //   ArrowRight, CreditCard, Box, BarChart3, 
// //   ChevronRight, Sparkles, Layers, ShieldCheck, Zap
// // } from 'lucide-react';
// import { 
//   ArrowRight, CreditCard, Box, BarChart3, 
//   ChevronRight, Sparkles, Layers, ShieldCheck, Zap,
//   CheckCircle2, ShoppingCart, TrendingUp // <-- ADD THESE THREE
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// const LandingPage = () => {

//   // High-performance Intersection Observer for smooth liquid reveals
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
//           entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
//         }
//       });
//     }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-500 selection:text-white overflow-hidden">
      
//       {/* --- CUSTOM CSS FOR LIQUID FLOW & REVEALS --- */}
//      {/* --- CUSTOM CSS FOR LIQUID FLOW & REVEALS --- */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .reveal {
//           transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
//         }
        
//         /* Organic Liquid Animations for Gradients */
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob { animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
//         .animation-delay-2000 { animation-delay: 2s; }
//         .animation-delay-4000 { animation-delay: 4s; }

//         /* Infinite Data Stream Animations */
//         @keyframes stream-up {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(-50%); }
//         }
//         @keyframes stream-down {
//           0% { transform: translateY(-50%); }
//           100% { transform: translateY(0); }
//         }
//         .animate-stream-up { animation: stream-up 30s linear infinite; }
//         .animate-stream-down { animation: stream-down 35s linear infinite; }

//         /* Radial Mask to fade out the edges of the background stream */
//         .mask-radial-fade {
//           -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 80%);
//           mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 80%);
//         }
//       `}} />

//       {/* --- NAVBAR --- */}
//       <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/80">
//         <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//             <img src={logo} alt="Laxvira" className="w-10 h-10 rounded-xl object-contain shadow-sm bg-white p-0.5" />
//             <span className="font-black tracking-widest text-slate-900 text-xl">LAXVIRA</span>
//           </div>
//           <div className="flex items-center gap-5 text-sm font-bold">
//             <Link to="/login" className="text-slate-600 hover:text-indigo-600 transition-colors">Sign in</Link>
//             <Link to="/signup" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95">
//               Deploy Node
//             </Link>
//           </div>
//         </div>
//       </nav>

//     {/* --- PURE TYPOGRAPHIC HERO SECTION WITH ACTIVE DATA STREAM --- */}
//       <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">
        
//         {/* LIQUID GRADIENT BASE */}
//         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center opacity-60">
//           <div className="absolute top-[-5%] left-[15%] w-[500px] h-[500px] bg-indigo-300/40 rounded-full mix-blend-multiply blur-[80px] animate-blob"></div>
//           <div className="absolute top-[25%] right-[15%] w-[450px] h-[450px] bg-emerald-300/40 rounded-full mix-blend-multiply blur-[80px] animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-[0%] left-[35%] w-[600px] h-[600px] bg-cyan-300/40 rounded-full mix-blend-multiply blur-[80px] animate-blob animation-delay-4000"></div>
//         </div>

//         {/* ACTIVE WORKFLOW STREAM (Background Data Engine) */}
//         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center mask-radial-fade opacity-30">
//           {/* Angled container to give it that isometric tech flow */}
//           <div className="flex gap-6 transform -rotate-12 scale-125 min-w-[150vw]">
            
//             {/* STREAM 1: Finance (Scrolling Up) */}
//             <div className="flex flex-col gap-4 animate-stream-up w-72">
//               {/* Render array twice to create a seamless infinite loop */}
//               {[1, 2].map((loopIndex) => (
//                 <React.Fragment key={`stream1-${loopIndex}`}>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">PAYMENT CLEARED</p><p className="text-sm font-black text-slate-800">Invoice #4402 • ₹12,500</p></div>
//                   </div>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600"><CreditCard size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">AUTO-BILLING</p><p className="text-sm font-black text-slate-800">Subscription Renewed</p></div>
//                   </div>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600"><TrendingUp size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">LEDGER SYNC</p><p className="text-sm font-black text-slate-800">Tax Calculated (GST)</p></div>
//                   </div>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">PAYMENT CLEARED</p><p className="text-sm font-black text-slate-800">Invoice #4403 • ₹8,200</p></div>
//                   </div>
//                 </React.Fragment>
//               ))}
//             </div>

//             {/* STREAM 2: Orders / POS (Scrolling Down) */}
//             <div className="flex flex-col gap-4 animate-stream-down w-72">
//               {[1, 2].map((loopIndex) => (
//                 <React.Fragment key={`stream2-${loopIndex}`}>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600"><ShoppingCart size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">NEW ORDER</p><p className="text-sm font-black text-slate-800">POS Terminal A</p></div>
//                   </div>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600"><Layers size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">API WEBHOOK</p><p className="text-sm font-black text-slate-800">B2B Portal Sync</p></div>
//                   </div>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600"><ShoppingCart size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">NEW ORDER</p><p className="text-sm font-black text-slate-800">Web Storefront</p></div>
//                   </div>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600"><Zap size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">EVENT TRIGGERED</p><p className="text-sm font-black text-slate-800">Quotation Generated</p></div>
//                   </div>
//                 </React.Fragment>
//               ))}
//             </div>

//             {/* STREAM 3: Inventory (Scrolling Up) */}
//             <div className="flex flex-col gap-4 animate-stream-up w-72" style={{ animationDuration: '25s' }}>
//               {[1, 2].map((loopIndex) => (
//                 <React.Fragment key={`stream3-${loopIndex}`}>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600"><Box size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">INVENTORY SYNC</p><p className="text-sm font-black text-slate-800">SKU-992 Deducted</p></div>
//                   </div>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600"><ShieldCheck size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">ALERT THRESHOLD</p><p className="text-sm font-black text-slate-800">Low Stock: Packaging</p></div>
//                   </div>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600"><Box size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">INVENTORY SYNC</p><p className="text-sm font-black text-slate-800">SKU-104 Deducted</p></div>
//                   </div>
//                   <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 size={16} /></div>
//                     <div><p className="text-[10px] font-bold text-slate-400">BATCH UPDATE</p><p className="text-sm font-black text-slate-800">Supplier Delivery Logged</p></div>
//                   </div>
//                 </React.Fragment>
//               ))}
//             </div>
            
//           </div>
//         </div>

//         {/* FOREGROUND: Main Typography */}
//         <div className="relative z-10 max-w-[1000px] mx-auto text-center reveal opacity-0 translate-y-12 scale-95 pt-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md text-xs font-black tracking-widest text-indigo-600 uppercase mb-8 shadow-sm border border-white">
//             <Sparkles size={14} className="text-indigo-500" />
//             Next-Gen Infrastructure
//           </div>
          
//           <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.05] drop-shadow-sm">
//             Manage <br className="hidden md:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500">
//               Everything in Flow.
//             </span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed mb-12 bg-white/30 backdrop-blur-sm rounded-2xl py-2 px-4 inline-block">
//             A fluid, unified workspace for your billing, inventory, and analytics. Experience enterprise software that doesn't feel like a spreadsheet.
//           </p>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4">
//             <Link to="/signup" className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-600 transition-all shadow-2xl hover:shadow-indigo-500/40 active:scale-95 flex items-center justify-center gap-2">
//               Initialize Instance <ArrowRight size={20} />
//             </Link>
//             <a href="#architecture" className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg text-slate-700 bg-white/70 backdrop-blur-md hover:bg-white border border-white transition-all flex items-center justify-center gap-2 shadow-sm">
//               View Architecture
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* --- STICKY STACKING CARDS (The Engineering Marvel) --- */}
//       {/* --- STICKY STACKING CARDS (The Engineering Marvel) --- */}
//       <section id="architecture" className="relative bg-slate-900 pt-32 pb-48 overflow-hidden">
        
//         {/* --- HIGH-END BACKGROUND ENGINE --- */}
//         <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
//           {/* Ambient Plasma Glows */}
//           <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
//           <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
//           <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
          
//           {/* Subtle Technical Grid (Fades out at the edges via radial mask) */}
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_80%)]"></div>
//         </div>

//         {/* Foreground Content */}
//         <div className="max-w-[1200px] mx-auto px-6 mb-24 text-center reveal opacity-0 translate-y-12 relative z-10">
//           <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
//             Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Scale.</span>
//           </h2>
//           <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">
//             Scroll down to see how our micro-service architecture seamlessly handles your operations.
//           </p>
//         </div>

//         {/* Stacking Container */}
//         <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          
//           {/* Card 1 */}
//           <div className="sticky top-24 pt-4 pb-12 reveal opacity-0">
//             <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px] rounded-[2.5rem] shadow-[0_0_50px_rgba(79,70,229,0.15)]">
//               <div className="bg-slate-900/95 backdrop-blur-3xl rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
//                 <div className="flex-1">
//                   <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/20 shadow-inner">
//                     <CreditCard size={32} />
//                   </div>
//                   <h3 className="text-3xl font-black text-white mb-4">Intelligent Billing Engine</h3>
//                   <p className="text-slate-400 text-lg leading-relaxed">
//                     Generate highly professional B2B invoices featuring automated geographic tax calculations and integrated payment gateways. Completely frictionless.
//                   </p>
//                 </div>
//                 {/* IMAGE CONTAINER 1 */}
//                 <div className="flex-1 w-full bg-slate-950 rounded-2xl h-64 md:h-80 border border-slate-800 relative overflow-hidden group shadow-2xl">
//                   <div className="absolute inset-0 bg-indigo-900/30 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
//                   <img 
//                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
//                     alt="Billing Interface" 
//                     className="w-full h-full object-cover object-left-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="sticky top-32 pt-4 pb-12 reveal opacity-0">
//             <div className="bg-gradient-to-br from-emerald-400 to-teal-600 p-[1px] rounded-[2.5rem] shadow-[0_0_50px_rgba(52,211,153,0.1)]">
//               <div className="bg-slate-900/95 backdrop-blur-3xl rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
//                 <div className="flex-1">
//                   <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20 shadow-inner">
//                     <Box size={32} />
//                   </div>
//                   <h3 className="text-3xl font-black text-white mb-4">Live Inventory Sync</h3>
//                   <p className="text-slate-400 text-lg leading-relaxed">
//                     Seamlessly link your POS checkout directly to your warehouse data. Configure strict thresholds to prevent overselling automatically.
//                   </p>
//                 </div>
//                 {/* IMAGE CONTAINER 2 */}
//                 <div className="flex-1 w-full bg-slate-950 rounded-2xl h-64 md:h-80 border border-slate-800 relative overflow-hidden group shadow-2xl">
//                   <div className="absolute inset-0 bg-emerald-900/30 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
//                   <img 
//                     src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
//                     alt="Inventory Interface" 
//                     className="w-full h-full object-cover object-left-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="sticky top-40 pt-4 pb-12 reveal opacity-0">
//             <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] rounded-[2.5rem] shadow-[0_0_50px_rgba(34,211,238,0.15)]">
//               <div className="bg-slate-900/95 backdrop-blur-3xl rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
//                 <div className="flex-1">
//                   <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/20 shadow-inner">
//                     <BarChart3 size={32} />
//                   </div>
//                   <h3 className="text-3xl font-black text-white mb-4">Predictive Analytics</h3>
//                   <p className="text-slate-400 text-lg leading-relaxed">
//                     Leverage intelligent algorithms built directly into your dashboard to forecast revenue and predict optimal restock cycles before you run out.
//                   </p>
//                 </div>
//                 {/* IMAGE CONTAINER 3 */}
//                 <div className="flex-1 w-full bg-slate-950 rounded-2xl h-64 md:h-80 border border-slate-800 relative overflow-hidden group shadow-2xl">
//                   <div className="absolute inset-0 bg-cyan-900/30 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
//                   <img 
//                     src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80" 
//                     alt="Analytics Interface" 
//                     className="w-full h-full object-cover object-left-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

        

//       {/* --- BOTTOM CTA --- */}
//       <section className="relative z-10 py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-slate-50"></div>
//         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(99,102,241,0.05))]"></div>
        
//         <div className="max-w-[800px] mx-auto px-6 text-center relative z-10 reveal opacity-0 translate-y-12">
//           <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-tight">
//             Ready to deploy your <br /> new infrastructure?
//           </h2>
          
//           <Link
//             to="/signup"
//             className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-full text-lg font-black hover:bg-indigo-600 shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all active:scale-95"
//           >
//             Initialize Environment <ChevronRight size={22} className="text-cyan-400" />
//           </Link>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="bg-slate-50 border-t border-slate-200 py-10 relative z-10">
//         <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-3">
//             <img src={logo} alt="Laxvira" className="w-8 h-8 rounded-lg object-contain bg-white p-0.5 shadow-sm border border-slate-200" />
//             <span className="font-black text-slate-800 tracking-widest text-lg">LAXVIRA</span>
//           </div>
//           <p className="text-sm text-slate-500 font-medium tracking-wide">
//             © 2026 Laxvira Systems. All rights reserved.
//           </p>
//         </div>
//       </footer>

//     </div>
//   );
// };

// export default LandingPage;

//found that flow webiste 
// import React, { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Canvas, useFrame } from '@react-three/fiber';
// import {
//   ScrollControls,
//   Scroll,
//   useScroll,
//   Environment,
//   ContactShadows,
//   Line,
//   Float,
//   MeshTransmissionMaterial
// } from '@react-three/drei';
// import * as THREE from 'three';
// import { ChevronRight } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* ==========================================================================
//    1. THE 3D SCENE & DATA NODES (Procedurally Generated)
//    ========================================================================== */

// // NODE 1: Billing (A central core processing data)
// const BillingNode = ({ position }) => (
//   <group position={position}>
//     <Float speed={2} floatIntensity={0.5} rotationIntensity={0.5}>
//       <mesh castShadow receiveShadow>
//         <octahedronGeometry args={[1, 0]} />
//         <meshStandardMaterial color="#4f46e5" roughness={0.2} metalness={0.8} />
//       </mesh>
//       {/* Surrounding Energy Ring */}
//       <mesh rotation={[Math.PI / 2, 0, 0]}>
//         <torusGeometry args={[1.5, 0.05, 16, 100]} />
//         <meshBasicMaterial color="#818cf8" transparent opacity={0.5} />
//       </mesh>
//     </Float>
//   </group>
// );

// // NODE 2: Inventory (A grid of warehouse data blocks)
// const InventoryNode = ({ position }) => (
//   <group position={position}>
//     <Float speed={1.5} floatIntensity={0.3} rotationIntensity={0.2}>
//       {[-0.8, 0, 0.8].map((x, i) =>
//         [-0.8, 0, 0.8].map((z, j) => (
//           <mesh key={`${i}-${j}`} position={[x, Math.sin(x*z)*0.5, z]} castShadow receiveShadow>
//             <boxGeometry args={[0.5, 0.5, 0.5]} />
//             <meshStandardMaterial color="#10b981" roughness={0.1} metalness={0.5} />
//           </mesh>
//         ))
//       )}
//     </Float>
//   </group>
// );

// // NODE 3: Analytics (Floating holographic bar charts)
// const AnalyticsNode = ({ position }) => (
//   <group position={position}>
//     <Float speed={2} floatIntensity={0.5} rotationIntensity={0.1}>
//       {[0.5, 1.2, 0.8, 1.8, 1.0].map((h, i) => (
//         <mesh key={i} position={[(i - 2) * 0.6, h / 2 - 1, 0]} castShadow receiveShadow>
//           <cylinderGeometry args={[0.2, 0.2, h, 16]} />
//           <meshStandardMaterial color="#06b6d4" roughness={0.3} metalness={0.7} />
//         </mesh>
//       ))}
//     </Float>
//   </group>
// );

// // THE DATA STREAM PATH
// const DataPath = () => {
//   // The exact coordinates connecting our 3 nodes
//   const points = [
//     [0, 0, 0],         // Node 1
//     [10, 0, -10],      // Node 2
//     [20, 0, 0]         // Node 3
//   ];
//   return (
//     <Line
//       points={points}
//       color="#cbd5e1"
//       lineWidth={3}
//       dashed={true}
//       dashScale={5}
//       dashSize={2}
//       dashOffset={0}
//       transparent
//       opacity={0.3}
//     />
//   );
// };

// /* ==========================================================================
//    2. THE SCROLL CAMERA RIG (The Engine)
//    ========================================================================== */
// const CameraRig = () => {
//   const scroll = useScroll();
//   const cameraRef = useRef();

//   useFrame((state) => {
//     // scroll.offset goes from 0.0 (top) to 1.0 (bottom)
//     const offset = scroll.offset;

//     // Define the camera's flight path [X, Y, Z]
//     const startPos = new THREE.Vector3(0, 4, 8);      // Looking at Node 1
//     const midPos = new THREE.Vector3(10, 5, -2);      // Looking at Node 2
//     const endPos = new THREE.Vector3(20, 4, 8);       // Looking at Node 3

//     // Define what the camera is looking at
//     const startTarget = new THREE.Vector3(0, 0, 0);
//     const midTarget = new THREE.Vector3(10, 0, -10);
//     const endTarget = new THREE.Vector3(20, 0, 0);

//     const targetPos = new THREE.Vector3();
//     const targetLookAt = new THREE.Vector3();

//     // Interpolate based on scroll position (Page 1 to 2, then Page 2 to 3)
//     if (offset < 0.5) {
//       // Scale offset from 0-0.5 to 0-1.0
//       const localOffset = offset * 2;
//       targetPos.lerpVectors(startPos, midPos, localOffset);
//       targetLookAt.lerpVectors(startTarget, midTarget, localOffset);
//     } else {
//       // Scale offset from 0.5-1.0 to 0-1.0
//       const localOffset = (offset - 0.5) * 2;
//       targetPos.lerpVectors(midPos, endPos, localOffset);
//       targetLookAt.lerpVectors(midTarget, endTarget, localOffset);
//     }

//     // Smoothly animate the camera to the target position
//     state.camera.position.lerp(targetPos, 0.05);
//     state.camera.lookAt(targetLookAt);
//   });

//   return null;
// };

// /* ==========================================================================
//    3. THE MAIN PAGE COMPONENT
//    ========================================================================== */
// const LandingPage = () => {
//   return (
//     <div className="w-full h-screen bg-[#f8fafc] font-sans overflow-hidden">
      
//       {/* STATIC UI (Header) */}
//       <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/50">
//         <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <img src={logo} alt="Laxvira" className="w-10 h-10 rounded-xl object-contain shadow-sm bg-white p-0.5" />
//             <span className="font-black tracking-widest text-slate-900 text-xl">LAXVIRA</span>
//           </div>
//           <Link to="/signup" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-600 transition-all shadow-lg active:scale-95 flex items-center gap-2">
//             Deploy Node <ChevronRight size={16} className="text-indigo-400" />
//           </Link>
//         </div>
//       </nav>

//       {/* 3D SCROLLYTELLING CANVAS */}
//       <Canvas shadows dpr={[1, 2]}>
        
//         {/* ScrollControls creates the scrollable area. 
//             pages={3} means it creates 3 screens worth of scrolling. */}
//         <ScrollControls pages={3} damping={0.25}>
          
//           {/* THE 3D WORLD */}
//           <ambientLight intensity={0.6} />
//           <directionalLight position={[10, 20, 5]} intensity={1.5} castShadow shadow-mapSize={[2048, 2048]} />
//           <Environment preset="city" />

//           {/* The Pipeline Nodes */}
//           <BillingNode position={[0, 0, 0]} />
//           <InventoryNode position={[10, 0, -10]} />
//           <AnalyticsNode position={[20, 0, 0]} />
//           <DataPath />

//           {/* Soft Ground Shadow */}
//           <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={50} blur={2.5} far={10} color="#0f172a" />

//           {/* The Camera Engine that reads the scroll */}
//           <CameraRig />

//           {/* THE HTML OVERLAY (Scrolls synchronously with the 3D scene) */}
//           <Scroll html style={{ width: '100%' }}>
//             <div className="w-full max-w-[1400px] mx-auto relative pointer-events-none">
              
//               {/* Left Column for Text Narrative */}
//               <div className="w-full md:w-[40%] pl-6 md:pl-12">
                
//                 {/* PAGE 1: Billing */}
//                 <div className="h-screen flex flex-col justify-center">
//                   <div className="pointer-events-auto bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/80 shadow-xl shadow-indigo-500/5">
//                     <div className="text-xs font-black tracking-widest text-indigo-500 mb-2 border-b-2 border-indigo-500 w-8 pb-2">01</div>
//                     <h2 className="text-4xl font-black text-slate-900 mb-4">Intelligent Billing</h2>
//                     <p className="text-slate-600 font-medium leading-relaxed mb-6">
//                       One call triggers mobilization. Automated geographic tax calculations and integrated payment gateways process transactions the moment a deal closes. No hand-offs. Just clean ledgers.
//                     </p>
//                     <div className="flex flex-col gap-3 text-sm font-bold text-slate-800">
//                       <div className="flex items-center gap-4"><span className="text-indigo-400">02</span> Live Inventory</div>
//                       <div className="flex items-center gap-4"><span className="text-indigo-400">03</span> Predictive Analytics</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* PAGE 2: Inventory */}
//                 <div className="h-screen flex flex-col justify-center">
//                   <div className="pointer-events-auto bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/80 shadow-xl shadow-emerald-500/5">
//                     <div className="text-xs font-black tracking-widest text-emerald-500 mb-2 border-b-2 border-emerald-500 w-8 pb-2">02</div>
//                     <h2 className="text-4xl font-black text-slate-900 mb-4">Zero-fail Sync</h2>
//                     <p className="text-slate-600 font-medium leading-relaxed mb-6">
//                       Your POS checkout is wired directly into warehouse data. We enforce a zero-fail model with strict thresholds that stop overselling before it happens, guaranteeing every order clears.
//                     </p>
//                     <div className="flex flex-col gap-3 text-sm font-bold text-slate-800 opacity-50">
//                       <div className="flex items-center gap-4">01 Intelligent Billing</div>
//                       <div className="flex items-center gap-4">03 Predictive Analytics</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* PAGE 3: Analytics */}
//                 <div className="h-screen flex flex-col justify-center">
//                   <div className="pointer-events-auto bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/80 shadow-xl shadow-cyan-500/5">
//                     <div className="text-xs font-black tracking-widest text-cyan-500 mb-2 border-b-2 border-cyan-500 w-8 pb-2">03</div>
//                     <h2 className="text-4xl font-black text-slate-900 mb-4">Proven Fit</h2>
//                     <p className="text-slate-600 font-medium leading-relaxed mb-6">
//                       See next quarter before it starts. Forecasting models built directly into your dashboard surface restock windows and revenue trends without a single manual export.
//                     </p>
//                     <div className="flex flex-col gap-3 text-sm font-bold text-slate-800 opacity-50">
//                       <div className="flex items-center gap-4">01 Intelligent Billing</div>
//                       <div className="flex items-center gap-4">02 Zero-fail Sync</div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </Scroll>

//         </ScrollControls>
//       </Canvas>
//     </div>
//   );
// };

// export default LandingPage;

//updated flow
// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import * as THREE from 'three';
// import { 
//   ArrowRight, ChevronRight, BarChart3, 
//   ShieldCheck, Zap, Layers, Globe, Cpu 
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* ==========================================================================
//    1. THE FIXED BACKGROUND ENGINE (Pristine Light Matrix)
//    ========================================================================== */
// const AmbientBackground = () => {
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
//       meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
//       <directionalLight position={[-10, -10, -5]} intensity={1} color="#e2e8f0" />
//       <Environment preset="city" />

//       {/* Massive ribbed cylinder acting as an abstract data matrix */}
//       <mesh ref={meshRef} position={[8, 0, -10]} rotation={[0, 0, 0.1]}>
//         <cylinderGeometry args={[14, 14, 40, 64]} />
//         <meshStandardMaterial 
//           color="#94a3b8" 
//           metalness={0.5} 
//           roughness={0.2}
//           wireframe={true} 
//           transparent
//           opacity={0.15}
//         />
//       </mesh>
//     </>
//   );
// };

// /* ==========================================================================
//    2. MAIN LANDING PAGE COMPONENT (Native Scrolling Glassmorphism)
//    ========================================================================== */
// const LandingPage = () => {

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-16');
//         }
//       });
//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-[#f8fafc] min-h-screen text-slate-600 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
//       {/* CUSTOM CSS FOR SMOOTH REVEALS & PERFECT GLASS */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .reveal { transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
//         .glass-card {
//           background: rgba(255, 255, 255, 0.65);
//           backdrop-filter: blur(24px);
//           -webkit-backdrop-filter: blur(24px);
//           border: 1px solid rgba(255, 255, 255, 1);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255,255,255,0.5) inset;
//         }
//       `}} />

//       {/* --- 1. THE 3D BACKGROUND (Fixed & Unobtrusive) --- */}
//       <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/80 via-[#f8fafc] to-[#f8fafc]">
//         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
//           <AmbientBackground />
//         </Canvas>
//       </div>

//       {/* --- 2. FOREGROUND CONTENT (Native Web Scroll) --- */}
//       <div className="relative z-10">

//         {/* NAVBAR */}
//         <nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-xl border-b border-white">
//           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <img src={logo} alt="Laxvira" className="w-8 h-8 rounded-lg object-contain bg-white p-0.5 shadow-sm" />
//               <span className="font-black tracking-widest text-slate-900 text-xl">LAXVIRA</span>
//             </div>
//             <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
//               <a href="#solutions" className="hover:text-indigo-600 transition-colors">Solutions</a>
//               <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
//               <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
//             </div>
//             <div className="flex items-center gap-4">
//               <Link to="/login" className="hidden sm:block text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Login</Link>
//               <Link to="/signup" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20 active:scale-95 flex items-center gap-2">
//                 Get Started <ChevronRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* HERO SECTION */}
//         <section className="h-screen w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            
//             <div className="reveal opacity-0 translate-y-16">
//               <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-4 drop-shadow-sm">
//                 The future of <br /> Laxvira Systems.
//               </h1>
//               <p className="text-xl text-indigo-600 font-bold tracking-wide">
//                 Infrastructure of Tomorrow.
//               </p>
//             </div>
            
//             <div className="reveal opacity-0 translate-y-16 lg:pl-20">
//               <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
//                 We specialize in leveraging advanced micro-service architecture to transform your billing, inventory, and analytics operations into a seamless flow.
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 <Link to="/signup" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-indigo-600 shadow-xl shadow-indigo-500/20 transition-all flex items-center gap-2 active:scale-95">
//                   Initialize Node <ArrowRight size={16} />
//                 </Link>
//                 <a href="#solutions" className="px-8 py-4 rounded-full font-bold text-sm text-slate-700 bg-white/70 backdrop-blur-md border border-white hover:bg-white shadow-sm transition-all">
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DASHBOARD MOCKUP REVEAL */}
//         <section id="solutions" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
//           <div className="reveal opacity-0 translate-y-16 mb-16">
//             <p className="text-xs font-black tracking-widest text-indigo-500 uppercase mb-4">Solutions</p>
//             <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter max-w-2xl">
//               Revolutionize your financial workflows.
//             </h2>
//           </div>

//           {/* Massive Light-Mode Glassmorphic Dashboard */}
//           <div className="reveal opacity-0 translate-y-16 w-full rounded-[2.5rem] glass-card p-6 md:p-10 shadow-2xl shadow-indigo-500/10">
//             {/* Mock Header */}
//             <div className="flex items-center justify-between border-b border-slate-200/60 pb-6 mb-8">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full bg-rose-400"></div>
//                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
//                 <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
//               </div>
//               <div className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-slate-500 flex items-center gap-2 shadow-sm border border-slate-100">
//                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Node Active
//               </div>
//             </div>

//             {/* Mock Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
//               {/* Main Chart Area */}
//               <div className="lg:col-span-2 bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white shadow-sm">
//                 <p className="text-sm text-slate-500 font-bold mb-1 uppercase tracking-widest">Total Revenue Volume</p>
//                 <div className="flex items-end gap-4 mb-10">
//                   <h3 className="text-5xl font-black text-slate-900">₹84,250.00</h3>
//                   <span className="text-emerald-700 text-sm font-black bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-200">+14.5%</span>
//                 </div>
//                 {/* Clean Light-Mode Bars */}
//                 <div className="flex items-end justify-between h-48 gap-3">
//                   {[30, 45, 25, 60, 40, 80, 100, 75, 90, 65, 50, 85].map((h, i) => (
//                     <div key={i} className="w-full bg-indigo-50 rounded-t-lg relative group overflow-hidden">
//                       <div className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-t-lg shadow-sm" style={{ height: `${h}%` }}></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Side Action Area */}
//               <div className="space-y-6">
//                 <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm h-full flex flex-col">
//                   <h4 className="text-slate-900 font-black text-xl mb-6">Quick Allocation</h4>
//                   <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4 shadow-inner">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">From Account</p>
//                     <p className="text-slate-800 font-mono font-bold">0x74...92F1</p>
//                   </div>
//                   <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 shadow-inner">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">Amount</p>
//                     <p className="text-slate-800 font-mono font-bold">₹12,000</p>
//                   </div>
//                   <div className="mt-auto pt-6">
//                     <button className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-600 transition-colors shadow-lg active:scale-95">
//                       Execute Transfer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 3-COLUMN FEATURES GRID */}
//         <section id="features" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
//           <div className="text-center reveal opacity-0 translate-y-16 mb-20">
//             <p className="text-xs font-black tracking-widest text-indigo-500 uppercase mb-4">Features</p>
//             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
//               The future of logic is here.
//             </h2>
//             <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">
//               We provide cutting-edge infrastructure tools to optimize your operational performance across every department.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 transition-transform duration-500">
//               <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-inner border border-indigo-100">
//                 <BarChart3 size={24} />
//               </div>
//               <h3 className="text-2xl font-black text-slate-900 mb-3">Predictive Analytics</h3>
//               <p className="text-slate-600 font-medium leading-relaxed">Gain foresight into market trends with our machine-learning driven data parsing engine.</p>
//             </div>
            
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 transition-transform duration-500" style={{ transitionDelay: '100ms' }}>
//               <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-inner border border-emerald-100">
//                 <ShieldCheck size={24} />
//               </div>
//               <h3 className="text-2xl font-black text-slate-900 mb-3">Automated Compliance</h3>
//               <p className="text-slate-600 font-medium leading-relaxed">Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits.</p>
//             </div>

//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 transition-transform duration-500" style={{ transitionDelay: '200ms' }}>
//               <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 shadow-inner border border-cyan-100">
//                 <Zap size={24} />
//               </div>
//               <h3 className="text-2xl font-black text-slate-900 mb-3">Fraud Detection</h3>
//               <p className="text-slate-600 font-medium leading-relaxed">Protect your assets proactively with our real-time anomaly detection heuristics and ledger locks.</p>
//             </div>
//           </div>
//         </section>

//         {/* STICKY SPLIT SCROLL SECTION (Services) */}
//         <section id="services" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto relative">
//           <div className="flex flex-col lg:flex-row gap-20">
            
//             <div className="w-full lg:w-1/2 lg:sticky lg:top-40 h-fit reveal opacity-0 translate-y-16">
//               <p className="text-xs font-black tracking-widest text-indigo-500 uppercase mb-4">Services</p>
//               <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
//                 Tailored for every <br /> operational need.
//               </h2>
//               <p className="text-lg text-slate-600 font-medium max-w-md">
//                 Our solutions are designed to cater to diverse sectors and business sizes, scaling elastically with your demand.
//               </p>
//             </div>

//             <div className="w-full lg:w-1/2 flex flex-col gap-8">
//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16">
//                 <div className="flex items-center gap-4 mb-6 text-slate-900"><Layers size={32} className="text-indigo-500"/> <h3 className="text-3xl font-black">Enterprise Firms</h3></div>
//                 <p className="text-slate-600 font-medium text-lg leading-relaxed">Our platform offers advanced analytics for portfolio management and market trend prediction tailored for massive data loads.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16">
//                 <div className="flex items-center gap-4 mb-6 text-slate-900"><Globe size={32} className="text-emerald-500"/> <h3 className="text-3xl font-black">B2B Consulting</h3></div>
//                 <p className="text-slate-600 font-medium text-lg leading-relaxed">We empower consultants with AI tools for strategy development, client advisory, and automated reporting generation.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16">
//                 <div className="flex items-center gap-4 mb-6 text-slate-900"><Cpu size={32} className="text-cyan-500"/> <h3 className="text-3xl font-black">Startups</h3></div>
//                 <p className="text-slate-600 font-medium text-lg leading-relaxed">Our scalable solutions adapt to the unique financial challenges of businesses of all sizes from Day 1 without bloat.</p>
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* FOOTER CTA */}
//         <footer className="border-t border-slate-200 bg-white/70 backdrop-blur-2xl pt-32 pb-12 mt-20">
//           <div className="max-w-[800px] mx-auto text-center px-6 reveal opacity-0 translate-y-16">
//             <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">
//               Ready to deploy?
//             </h2>
//             <div className="flex justify-center items-center gap-4 mb-24">
//               <Link to="/signup" className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-600 shadow-xl shadow-indigo-500/20 transition-all active:scale-95">
//                 Initialize Free Trial
//               </Link>
//             </div>
            
//             <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-8 text-sm text-slate-500 font-bold">
//               <div className="flex items-center gap-2 mb-4 md:mb-0">
//                 <img src={logo} alt="Laxvira" className="w-6 h-6 rounded object-contain bg-white p-0.5 shadow-sm border border-slate-100" />
//                 <span className="font-black text-slate-900 tracking-widest">LAXVIRA</span>
//               </div>
//               <p>© 2026 Laxvira Systems. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>

//       </div>
//     </div>
//   );
// };

// export default LandingPage;

//new updated for the above code 
// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import * as THREE from 'three';
// import { 
//   ArrowRight, ChevronRight, BarChart3, 
//   ShieldCheck, Zap, Layers, Globe, Cpu,
//   Sparkles
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* ==========================================================================
//    1. THE FIXED BACKGROUND ENGINE (Vibrant Light Matrix)
//    ========================================================================== */
// const AmbientBackground = () => {
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
//       meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[10, 10, 5]} intensity={2} color="#818cf8" />
//       <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#c084fc" />
//       <directionalLight position={[0, -10, 10]} intensity={1} color="#34d399" />
      
//       <Environment preset="city" />

//       <mesh ref={meshRef} position={[8, 0, -10]} rotation={[0, 0, 0.1]}>
//         <cylinderGeometry args={[14, 14, 40, 64]} />
//         <meshStandardMaterial 
//           color="#f1f5f9" 
//           metalness={0.7} 
//           roughness={0.1}
//           wireframe={true} 
//           transparent
//           opacity={0.3}
//         />
//       </mesh>
//     </>
//   );
// };

// /* ==========================================================================
//    2. MAIN LANDING PAGE COMPONENT
//    ========================================================================== */
// const LandingPage = () => {

//   const smoothScrollTo = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       const navOffset = 100; 
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY - navOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-16');
//         }
//       });
//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-[#f8fafc] min-h-screen text-slate-600 font-sans selection:bg-indigo-500 selection:text-white">
      
//       <style dangerouslySetInnerHTML={{__html: `
//         html { scroll-behavior: smooth; }
//         .reveal { transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
//         .glass-card {
//           background: rgba(255, 255, 255, 0.7);
//           backdrop-filter: blur(24px);
//           -webkit-backdrop-filter: blur(24px);
//           border: 1px solid rgba(255, 255, 255, 1);
//           box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.05), 0 0 0 1px rgba(255,255,255,0.5) inset;
//         }
//       `}} />

//       {/* --- 1. THE 3D BACKGROUND --- */}
//       <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/80 via-purple-50/50 to-emerald-50/40">
//         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
//           <AmbientBackground />
//         </Canvas>
//       </div>

//       {/* --- 2. FOREGROUND CONTENT --- */}
//       <div className="relative z-10">

//         {/* NAVBAR */}
//         <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-2xl border-b border-white shadow-sm">
//           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            
//             {/* RESTORED REAL LOGO WITH HOVER PHYSICS */}
//             <div 
//               className="flex items-center gap-3 cursor-pointer group" 
//               onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//             >
//               <img 
//                 src={logo} 
//                 alt="Laxvira" 
//                 className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-indigo-500/20 bg-white p-0.5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" 
//               />
//               <span className="font-black tracking-widest text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 text-xl">
//                 LAXVIRA
//               </span>
//             </div>

//             <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
//               <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="hover:text-indigo-600 transition-colors tracking-wide">Solutions</a>
//               <a href="#features" onClick={(e) => smoothScrollTo(e, 'features')} className="hover:text-indigo-600 transition-colors tracking-wide">Features</a>
//               <a href="#services" onClick={(e) => smoothScrollTo(e, 'services')} className="hover:text-indigo-600 transition-colors tracking-wide">Services</a>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link to="/login" className="hidden sm:block text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
//                 Login
//               </Link>
//               <Link to="/signup" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20 active:scale-95 flex items-center gap-2">
//                 Start Free Trial <ChevronRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* HERO SECTION */}
//         <section className="h-screen w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
//             <div className="reveal opacity-0 translate-y-16">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-100 text-xs font-black tracking-widest text-indigo-600 uppercase mb-8 shadow-sm">
//                 <Sparkles size={14} className="text-indigo-500" />
//                 V2.0 Now Live
//               </div>
//               <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-4 drop-shadow-sm">
//                 The future of <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Laxvira Systems.</span>
//               </h1>
//               <p className="text-xl text-slate-600 font-bold tracking-wide">
//                 Infrastructure of Tomorrow.
//               </p>
//             </div>
            
//             <div className="reveal opacity-0 translate-y-16 lg:pl-20">
//               <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
//                 We specialize in leveraging advanced micro-service architecture to transform your billing, inventory, and analytics operations into a seamless flow.
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 <Link to="/signup" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-indigo-600 shadow-xl shadow-indigo-500/20 transition-all flex items-center gap-2 active:scale-95">
//                   Start Free Trial <ArrowRight size={16} />
//                 </Link>
//                 <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="px-8 py-4 rounded-full font-bold text-sm text-slate-700 bg-white/70 backdrop-blur-md border border-white hover:bg-white hover:text-indigo-600 shadow-sm transition-all">
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DASHBOARD MOCKUP REVEAL */}
//         <section id="solutions" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="reveal opacity-0 translate-y-16 mb-16">
//             <p className="text-xs font-black tracking-widest text-indigo-500 uppercase mb-4">Solutions</p>
//             <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter max-w-2xl">
//               Revolutionize your financial workflows.
//             </h2>
//           </div>

//           <div className="reveal opacity-0 translate-y-16 w-full rounded-[2.5rem] glass-card p-6 md:p-10 shadow-2xl shadow-indigo-500/10 group hover:shadow-indigo-500/20 transition-all duration-700">
            
//             {/* LOGO INTEGRATION: System Header */}
//             <div className="flex items-center justify-between border-b border-slate-200/60 pb-6 mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-rose-400"></div>
//                   <div className="w-3 h-3 rounded-full bg-amber-400"></div>
//                   <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
//                 </div>
//                 {/* LAXVIRA OS LOGO EMBEDDED IN MOCKUP */}
//                 <div className="pl-4 border-l border-slate-300 flex items-center gap-2">
//                   <img src={logo} alt="OS" className="w-5 h-5 rounded shadow-sm opacity-80 mix-blend-multiply" />
//                   <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Laxvira System OS</span>
//                 </div>
//               </div>
//               <div className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-slate-500 flex items-center gap-2 shadow-sm border border-slate-100">
//                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Node Active
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2 bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white shadow-sm group-hover:border-indigo-100 transition-colors duration-500">
//                 <p className="text-sm text-slate-500 font-bold mb-1 uppercase tracking-widest">Total Revenue Volume</p>
//                 <div className="flex items-end gap-4 mb-10">
//                   <h3 className="text-5xl font-black text-slate-900">₹84,250.00</h3>
//                   <span className="text-emerald-700 text-sm font-black bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-200">+14.5%</span>
//                 </div>
//                 <div className="flex items-end justify-between h-48 gap-3">
//                   {[30, 45, 25, 60, 40, 80, 100, 75, 90, 65, 50, 85].map((h, i) => (
//                     <div key={i} className="w-full bg-indigo-50 rounded-t-lg relative overflow-hidden">
//                       <div className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t-lg shadow-sm group-hover:scale-y-105 transition-transform duration-700 origin-bottom" style={{ height: `${h}%` }}></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm h-full flex flex-col group-hover:border-indigo-100 transition-colors duration-500">
//                   <h4 className="text-slate-900 font-black text-xl mb-6">Quick Allocation</h4>
//                   <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4 shadow-inner">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">From Account</p>
//                     <p className="text-slate-800 font-mono font-bold">0x74...92F1</p>
//                   </div>
//                   <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 shadow-inner">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">Amount</p>
//                     <p className="text-slate-800 font-mono font-bold">₹12,000</p>
//                   </div>
//                   <div className="mt-auto pt-6">
//                     <button className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-600 transition-colors shadow-lg active:scale-95">
//                       Execute Transfer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 3-COLUMN FEATURES GRID */}
//         <section id="features" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="text-center reveal opacity-0 translate-y-16 mb-20">
//             <p className="text-xs font-black tracking-widest text-indigo-500 uppercase mb-4">Features</p>
//             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
//               The future of logic is here.
//             </h2>
//             <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">
//               We provide cutting-edge infrastructure tools to optimize your operational performance across every department.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 relative overflow-hidden group">
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-inner border border-indigo-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <BarChart3 size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-slate-900 mb-3">Predictive Analytics</h3>
//                 <p className="text-slate-600 font-medium leading-relaxed">Gain foresight into market trends with our machine-learning driven data parsing engine.</p>
//               </div>
//             </div>
            
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '100ms' }}>
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-inner border border-emerald-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
//                   <ShieldCheck size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-slate-900 mb-3">Automated Compliance</h3>
//                 <p className="text-slate-600 font-medium leading-relaxed">Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits.</p>
//               </div>
//             </div>

//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '200ms' }}>
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 shadow-inner border border-cyan-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <Zap size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-slate-900 mb-3">Fraud Detection</h3>
//                 <p className="text-slate-600 font-medium leading-relaxed">Protect your assets proactively with our real-time anomaly detection heuristics and ledger locks.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* STICKY SPLIT SCROLL SECTION (Services) */}
//         <section id="services" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto relative scroll-mt-24">
//           <div className="flex flex-col lg:flex-row gap-20">
            
//             <div className="w-full lg:w-1/2 lg:sticky lg:top-40 h-fit reveal opacity-0 translate-y-16 relative">
//               {/* LOGO INTEGRATION: Background Watermark Accent */}
//               <div className="absolute -top-10 -left-10 opacity-5 pointer-events-none mix-blend-multiply">
//                 <img src={logo} alt="" className="w-48 h-48 object-contain -rotate-12 grayscale" />
//               </div>
              
//               <div className="relative z-10">
//                 <p className="text-xs font-black tracking-widest text-purple-500 uppercase mb-4">Services</p>
//                 <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
//                   Tailored for every <br /> operational need.
//                 </h2>
//                 <p className="text-lg text-slate-600 font-medium max-w-md">
//                   Our solutions are designed to cater to diverse sectors and business sizes, scaling elastically with your demand.
//                 </p>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 flex flex-col gap-8 relative z-10">
//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 transition-transform duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-slate-900"><Layers size={32} className="text-indigo-500 group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Enterprise Firms</h3></div>
//                 <p className="text-slate-600 font-medium text-lg leading-relaxed">Our platform offers advanced analytics for portfolio management and market trend prediction tailored for massive data loads.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 transition-transform duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-slate-900"><Globe size={32} className="text-emerald-500 group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">B2B Consulting</h3></div>
//                 <p className="text-slate-600 font-medium text-lg leading-relaxed">We empower consultants with AI tools for strategy development, client advisory, and automated reporting generation.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 transition-transform duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-slate-900"><Cpu size={32} className="text-pink-500 group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Startups</h3></div>
//                 <p className="text-slate-600 font-medium text-lg leading-relaxed">Our scalable solutions adapt to the unique financial challenges of businesses of all sizes from Day 1 without bloat.</p>
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* FOOTER CTA */}
//         <footer className="border-t border-slate-200 bg-white/70 backdrop-blur-2xl pt-32 pb-12 mt-20">
//           <div className="max-w-[800px] mx-auto text-center px-6 reveal opacity-0 translate-y-16">
//             <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">
//               Ready to deploy?
//             </h2>
//             <div className="flex justify-center items-center gap-4 mb-24">
//               <Link to="/signup" className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-600 shadow-xl shadow-indigo-500/20 transition-all active:scale-95">
//                 Start Free Trial
//               </Link>
//             </div>
            
//             <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-8 text-sm text-slate-500 font-bold">
//               <div className="flex items-center gap-2 mb-4 md:mb-0">
//                 {/* RESTORED REAL LOGO FOR FOOTER */}
//                 <img src={logo} alt="Laxvira" className="w-6 h-6 rounded object-contain bg-white p-0.5 shadow-sm border border-slate-100" />
//                 <span className="font-black text-slate-900 tracking-widest">LAXVIRA</span>
//               </div>
//               <p>© 2026 Laxvira Systems. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>

//       </div>
//     </div>
//   );
// };

// export default LandingPage;

//white bg and rotating element

// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import * as THREE from 'three';
// import { 
//   ArrowRight, ChevronRight, BarChart3, 
//   ShieldCheck, Zap, Layers, Globe, Cpu,
//   Sparkles
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* ==========================================================================
//    1. THE FIXED BACKGROUND ENGINE (Vibrant Light Matrix)
//    ========================================================================== */
// const AmbientBackground = () => {
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
//       meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[10, 10, 5]} intensity={2} color="#818cf8" />
//       <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#c084fc" />
//       <directionalLight position={[0, -10, 10]} intensity={1} color="#34d399" />
      
//       <Environment preset="city" />

//       <mesh ref={meshRef} position={[8, 0, -10]} rotation={[0, 0, 0.1]}>
//         <cylinderGeometry args={[14, 14, 40, 64]} />
//         <meshStandardMaterial 
//           color="#f1f5f9" 
//           metalness={0.7} 
//           roughness={0.1}
//           wireframe={true} 
//           transparent
//           opacity={0.3}
//         />
//       </mesh>
//     </>
//   );
// };

// /* ==========================================================================
//    2. MAIN LANDING PAGE COMPONENT
//    ========================================================================== */
// const LandingPage = () => {

//   const smoothScrollTo = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       const navOffset = 100; 
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY - navOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-16');
//         }
//       });
//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-[#f8fafc] min-h-screen text-slate-600 font-sans selection:bg-amber-100 selection:text-amber-900">
      
//       <style dangerouslySetInnerHTML={{__html: `
//         html { scroll-behavior: smooth; }
//         .reveal { transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        
//         /* TRUE GLASSMORPHISM: Lowered opacity to 0.35 so background shows through */
//         .glass-card {
//           background: rgba(255, 255, 255, 0.35);
//           backdrop-filter: blur(24px);
//           -webkit-backdrop-filter: blur(24px);
//           border: 1px solid rgba(255, 255, 255, 0.8);
//           box-shadow: 0 25px 50px -12px rgba(245, 158, 11, 0.05), 0 0 0 1px rgba(255,255,255,0.6) inset;
//         }
//       `}} />

//       {/* --- 1. THE 3D BACKGROUND --- */}
//       <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/80 via-purple-50/50 to-emerald-50/40">
//         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
//           <AmbientBackground />
//         </Canvas>
//       </div>

//       {/* --- 2. FOREGROUND CONTENT --- */}
//       <div className="relative z-10">

//         {/* NAVBAR */}
//         <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-2xl border-b border-white/60 shadow-sm">
//           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            
//             <div 
//               className="flex items-center gap-3 cursor-pointer group" 
//               onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//             >
//               <img 
//                 src={logo} 
//                 alt="Laxvira" 
//                 className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-amber-500/20 bg-white p-0.5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" 
//               />
//               {/* Logo text hovers to Golden/Amber */}
//               <span className="font-black tracking-widest text-slate-900 group-hover:text-amber-500 transition-colors duration-300 text-xl">
//                 LAXVIRA
//               </span>
//             </div>

//             <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
//               {/* Nav links hover to Golden/Amber */}
//               <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="hover:text-amber-500 transition-colors tracking-wide">Solutions</a>
//               <a href="#features" onClick={(e) => smoothScrollTo(e, 'features')} className="hover:text-amber-500 transition-colors tracking-wide">Features</a>
//               <a href="#services" onClick={(e) => smoothScrollTo(e, 'services')} className="hover:text-amber-500 transition-colors tracking-wide">Services</a>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link to="/login" className="hidden sm:block text-sm font-bold text-slate-600 hover:text-amber-500 transition-colors">
//                 Login
//               </Link>
//               {/* GLASS BUTTON: Golden Hover */}
//               <Link to="/signup" className="bg-white/40 backdrop-blur-xl border border-white/80 text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all shadow-sm hover:shadow-amber-500/30 active:scale-95 flex items-center gap-2">
//                 Start Free Trial <ChevronRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* HERO SECTION */}
//         <section className="h-screen w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
//             <div className="reveal opacity-0 translate-y-16">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-amber-200 text-xs font-black tracking-widest text-amber-600 uppercase mb-8 shadow-sm">
//                 <Sparkles size={14} className="text-amber-500" />
//                 V2.0 Now Live
//               </div>
//               <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-4 drop-shadow-sm">
//                 The future of <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Laxvira Systems.</span>
//               </h1>
//               <p className="text-xl text-slate-600 font-bold tracking-wide">
//                 Infrastructure of Tomorrow.
//               </p>
//             </div>
            
//             <div className="reveal opacity-0 translate-y-16 lg:pl-20">
//               <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
//                 We specialize in leveraging advanced micro-service architecture to transform your billing, inventory, and analytics operations into a seamless flow.
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 {/* GLASS BUTTON: Golden Hover */}
//                 <Link to="/signup" className="bg-white/40 backdrop-blur-xl border border-white/80 text-slate-900 px-8 py-4 rounded-full font-bold text-sm hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all shadow-sm hover:shadow-amber-500/30 flex items-center gap-2 active:scale-95">
//                   Start Free Trial <ArrowRight size={16} />
//                 </Link>
//                 {/* GLASS BUTTON 2: Golden Hover */}
//                 <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="px-8 py-4 rounded-full font-bold text-sm text-slate-700 bg-white/40 backdrop-blur-md border border-white hover:bg-white hover:text-amber-500 shadow-sm transition-all">
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DASHBOARD MOCKUP REVEAL */}
//         <section id="solutions" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="reveal opacity-0 translate-y-16 mb-16">
//             <p className="text-xs font-black tracking-widest text-amber-500 uppercase mb-4">Solutions</p>
//             <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter max-w-2xl">
//               Revolutionize your financial workflows.
//             </h2>
//           </div>

//           <div className="reveal opacity-0 translate-y-16 w-full rounded-[2.5rem] glass-card p-6 md:p-10 shadow-xl group transition-all duration-700">
            
//             <div className="flex items-center justify-between border-b border-slate-200/60 pb-6 mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-rose-400"></div>
//                   <div className="w-3 h-3 rounded-full bg-amber-400"></div>
//                   <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
//                 </div>
//                 <div className="pl-4 border-l border-slate-300 flex items-center gap-2">
//                   <img src={logo} alt="OS" className="w-5 h-5 rounded shadow-sm opacity-80 mix-blend-multiply" />
//                   <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Laxvira System OS</span>
//                 </div>
//               </div>
//               <div className="bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-500 flex items-center gap-2 shadow-sm border border-slate-200">
//                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Node Active
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2 bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-white shadow-sm transition-colors duration-500">
//                 <p className="text-sm text-slate-500 font-bold mb-1 uppercase tracking-widest">Total Revenue Volume</p>
//                 <div className="flex items-end gap-4 mb-10">
//                   <h3 className="text-5xl font-black text-slate-900">₹84,250.00</h3>
//                   <span className="text-emerald-700 text-sm font-black bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-200">+14.5%</span>
//                 </div>
//                 <div className="flex items-end justify-between h-48 gap-3">
//                   {[30, 45, 25, 60, 40, 80, 100, 75, 90, 65, 50, 85].map((h, i) => (
//                     <div key={i} className="w-full bg-amber-50/50 rounded-t-lg relative overflow-hidden">
//                       <div className="absolute bottom-0 w-full bg-gradient-to-t from-amber-400 to-orange-300 rounded-t-lg shadow-sm group-hover:scale-y-105 transition-transform duration-700 origin-bottom" style={{ height: `${h}%` }}></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm h-full flex flex-col transition-colors duration-500">
//                   <h4 className="text-slate-900 font-black text-xl mb-6">Quick Allocation</h4>
//                   <div className="bg-white/60 rounded-xl p-4 border border-slate-100 mb-4 shadow-inner">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">From Account</p>
//                     <p className="text-slate-800 font-mono font-bold">0x74...92F1</p>
//                   </div>
//                   <div className="bg-white/60 rounded-xl p-4 border border-slate-100 shadow-inner">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">Amount</p>
//                     <p className="text-slate-800 font-mono font-bold">₹12,000</p>
//                   </div>
//                   <div className="mt-auto pt-6">
//                     {/* GLASS BUTTON: Golden Hover */}
//                     <button className="w-full bg-white/60 backdrop-blur-xl border border-white/80 text-slate-900 font-bold py-3.5 rounded-xl hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all shadow-sm hover:shadow-amber-500/30 active:scale-95">
//                       Execute Transfer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 3-COLUMN FEATURES GRID */}
//         <section id="features" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="text-center reveal opacity-0 translate-y-16 mb-20">
//             <p className="text-xs font-black tracking-widest text-amber-500 uppercase mb-4">Features</p>
//             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
//               The future of logic is here.
//             </h2>
//             <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">
//               We provide cutting-edge infrastructure tools to optimize your operational performance across every department.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 relative overflow-hidden group">
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-indigo-50/80 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-inner border border-indigo-100/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <BarChart3 size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-slate-900 mb-3">Predictive Analytics</h3>
//                 <p className="text-slate-600 font-medium leading-relaxed">Gain foresight into market trends with our machine-learning driven data parsing engine.</p>
//               </div>
//             </div>
            
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '100ms' }}>
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-emerald-50/80 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-inner border border-emerald-100/50 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
//                   <ShieldCheck size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-slate-900 mb-3">Automated Compliance</h3>
//                 <p className="text-slate-600 font-medium leading-relaxed">Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits.</p>
//               </div>
//             </div>

//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '200ms' }}>
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-cyan-50/80 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 shadow-inner border border-cyan-100/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <Zap size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-slate-900 mb-3">Fraud Detection</h3>
//                 <p className="text-slate-600 font-medium leading-relaxed">Protect your assets proactively with our real-time anomaly detection heuristics and ledger locks.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* STICKY SPLIT SCROLL SECTION (Services) */}
//         <section id="services" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto relative scroll-mt-24">
//           <div className="flex flex-col lg:flex-row gap-20">
            
//             <div className="w-full lg:w-1/2 lg:sticky lg:top-40 h-fit reveal opacity-0 translate-y-16 relative">
//               <div className="absolute -top-10 -left-10 opacity-[0.03] pointer-events-none mix-blend-multiply">
//                 <img src={logo} alt="" className="w-48 h-48 object-contain -rotate-12 grayscale" />
//               </div>
              
//               <div className="relative z-10">
//                 <p className="text-xs font-black tracking-widest text-amber-500 uppercase mb-4">Services</p>
//                 <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
//                   Tailored for every <br /> operational need.
//                 </h2>
//                 <p className="text-lg text-slate-600 font-medium max-w-md">
//                   Our solutions are designed to cater to diverse sectors and business sizes, scaling elastically with your demand.
//                 </p>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 flex flex-col gap-8 relative z-10">
//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 transition-transform duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-slate-900"><Layers size={32} className="text-indigo-500 group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Enterprise Firms</h3></div>
//                 <p className="text-slate-600 font-medium text-lg leading-relaxed">Our platform offers advanced analytics for portfolio management and market trend prediction tailored for massive data loads.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 transition-transform duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-slate-900"><Globe size={32} className="text-emerald-500 group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">B2B Consulting</h3></div>
//                 <p className="text-slate-600 font-medium text-lg leading-relaxed">We empower consultants with AI tools for strategy development, client advisory, and automated reporting generation.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 transition-transform duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-slate-900"><Cpu size={32} className="text-amber-500 group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Startups</h3></div>
//                 <p className="text-slate-600 font-medium text-lg leading-relaxed">Our scalable solutions adapt to the unique financial challenges of businesses of all sizes from Day 1 without bloat.</p>
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* FOOTER CTA */}
//         <footer className="border-t border-slate-200/50 bg-white/30 backdrop-blur-3xl pt-32 pb-12 mt-20">
//           <div className="max-w-[800px] mx-auto text-center px-6 reveal opacity-0 translate-y-16">
//             <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">
//               Ready to deploy?
//             </h2>
//             <div className="flex justify-center items-center gap-4 mb-24">
//               {/* GLASS BUTTON: Golden Hover */}
//               <Link to="/signup" className="bg-white/50 backdrop-blur-xl border border-white/80 text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all shadow-sm hover:shadow-amber-500/30 active:scale-95">
//                 Start Free Trial
//               </Link>
//             </div>
            
//             <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200/50 pt-8 text-sm text-slate-500 font-bold">
//               <div className="flex items-center gap-2 mb-4 md:mb-0">
//                 <img src={logo} alt="Laxvira" className="w-6 h-6 rounded object-contain bg-white p-0.5 shadow-sm border border-slate-100" />
//                 <span className="font-black text-slate-900 tracking-widest">LAXVIRA</span>
//               </div>
//               <p>© 2026 Laxvira Systems. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>

//       </div>
//     </div>
//   );
// };

// export default LandingPage;

//with navy color and correct golden 
// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import * as THREE from 'three';
// import { 
//   ArrowRight, ChevronRight, BarChart3, 
//   ShieldCheck, Zap, Layers, Globe, Cpu,
//   Sparkles
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* ==========================================================================
//    1. THE FIXED BACKGROUND ENGINE (Misty Navy Matrix)
//    ========================================================================== */
// const AmbientBackground = () => {
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
//       meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.6} />
//       {/* Lights tuned to wash the scene in gold and misty blue */}
//       <directionalLight position={[10, 10, 5]} intensity={1.5} color="#C5A059" /> 
//       <directionalLight position={[-10, -10, -5]} intensity={2} color="#566C86" />
      
//       <Environment preset="city" />

//       {/* Abstract data matrix spinning in the deep background */}
//       <mesh ref={meshRef} position={[8, 0, -10]} rotation={[0, 0, 0.1]}>
//         <cylinderGeometry args={[14, 14, 40, 64]} />
//         <meshStandardMaterial 
//           color="#566C86" 
//           metalness={0.6} 
//           roughness={0.2}
//           wireframe={true} 
//           transparent
//           opacity={0.15}
//         />
//       </mesh>
//     </>
//   );
// };

// /* ==========================================================================
//    2. MAIN LANDING PAGE COMPONENT
//    ========================================================================== */
// const LandingPage = () => {

//   const smoothScrollTo = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       const navOffset = 100; 
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY - navOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-16');
//         }
//       });
//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-[#1e2a3b] min-h-screen text-slate-200 font-sans selection:bg-[#C5A059]/30 selection:text-white">
      
//       <style dangerouslySetInnerHTML={{__html: `
//         html { scroll-behavior: smooth; }
//         .reveal { transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        
//         /* TRUE FROSTED GLASS FOR NAVY BACKGROUNDS */
//         .glass-card {
//           background: rgba(255, 255, 255, 0.06);
//           backdrop-filter: blur(24px);
//           -webkit-backdrop-filter: blur(24px);
//           border: 1px solid rgba(255, 255, 255, 0.12);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.05) inset;
//         }
//       `}} />

//       {/* --- 1. THE 3D BACKGROUND + MISTY NAVY OVERLAY --- */}
//       <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#566C86]/50 via-[#314159]/80 to-[#1e2a3b]">
//         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
//           <AmbientBackground />
//         </Canvas>
//         <div className="absolute inset-0 bg-[#314159]/40 backdrop-blur-[60px]"></div>
//       </div>

//       {/* --- 2. FOREGROUND CONTENT --- */}
//       <div className="relative z-10">

//         {/* NAVBAR */}
//         <nav className="fixed top-0 w-full z-50 bg-[#314159]/50 backdrop-blur-2xl border-b border-white/10 shadow-sm">
//           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            
//             <div 
//               className="flex items-center gap-3 cursor-pointer group" 
//               onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//             >
//               <img 
//                 src={logo} 
//                 alt="Laxvira" 
//                 className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-[#C5A059]/10 bg-white p-0.5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" 
//               />
//               <span className="font-black tracking-widest text-white group-hover:text-[#C5A059] transition-colors duration-300 text-xl">
//                 LAXVIRA
//               </span>
//             </div>

//             <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
//               <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="hover:text-[#C5A059] transition-colors tracking-wide">Solutions</a>
//               <a href="#features" onClick={(e) => smoothScrollTo(e, 'features')} className="hover:text-[#C5A059] transition-colors tracking-wide">Features</a>
//               <a href="#services" onClick={(e) => smoothScrollTo(e, 'services')} className="hover:text-[#C5A059] transition-colors tracking-wide">Services</a>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link to="/login" className="hidden sm:block text-sm font-bold text-slate-300 hover:text-[#C5A059] transition-colors">
//                 Login
//               </Link>
//               {/* GOLD GLASS BUTTON */}
//               <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/50 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[#C5A059]/40 active:scale-95 flex items-center gap-2">
//                 Start Free Trial <ChevronRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* HERO SECTION */}
//         <section className="h-screen w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
//             <div className="reveal opacity-0 translate-y-16">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#C5A059]/40 text-xs font-black tracking-widest text-[#C5A059] uppercase mb-8 shadow-sm">
//                 <Sparkles size={14} className="text-[#C5A059]" />
//                 V2.0 Now Live
//               </div>
//               <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.05] mb-4">
//                 The future of <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E2C275]">Laxvira Systems.</span>
//               </h1>
//               <p className="text-xl text-slate-300 font-medium tracking-wide">
//                 Smart Business. Smarter Finance.
//               </p>
//             </div>
            
//             <div className="reveal opacity-0 translate-y-16 lg:pl-20">
//               <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8">
//                 We specialize in leveraging advanced micro-service architecture to transform your billing, inventory, and analytics operations into a seamless flow.
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 {/* GOLD GLASS BUTTON */}
//                 <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/50 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[#C5A059]/40 flex items-center gap-2 active:scale-95">
//                   Start Free Trial <ArrowRight size={16} />
//                 </Link>
//                 <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="px-8 py-4 rounded-full font-bold text-sm text-slate-200 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:text-[#C5A059] transition-all">
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DASHBOARD MOCKUP REVEAL */}
//         <section id="solutions" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="reveal opacity-0 translate-y-16 mb-16">
//             <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Solutions</p>
//             <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter max-w-2xl">
//               Revolutionize your financial workflows.
//             </h2>
//           </div>

//           <div className="reveal opacity-0 translate-y-16 w-full rounded-[2.5rem] glass-card p-6 md:p-10 hover:border-[#C5A059]/30 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)] transition-all duration-700">
            
//             <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-slate-400"></div>
//                   <div className="w-3 h-3 rounded-full bg-slate-300"></div>
//                   <div className="w-3 h-3 rounded-full bg-slate-200"></div>
//                 </div>
//                 <div className="pl-4 border-l border-white/10 flex items-center gap-2">
//                   <img src={logo} alt="OS" className="w-5 h-5 rounded shadow-sm opacity-90" />
//                   <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">Laxvira System OS</span>
//                 </div>
//               </div>
//               <div className="bg-white/5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-300 flex items-center gap-2 border border-white/10">
//                 <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span> Node Active
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2 bg-[#314159]/40 rounded-2xl p-8 border border-white/5">
//                 <p className="text-sm text-slate-400 font-bold mb-1 uppercase tracking-widest">Total Revenue Volume</p>
//                 <div className="flex items-end gap-4 mb-10">
//                   <h3 className="text-5xl font-black text-white">₹84,250.00</h3>
//                   <span className="text-[#C5A059] text-sm font-black bg-[#C5A059]/10 px-2.5 py-1 rounded-md border border-[#C5A059]/30">+14.5%</span>
//                 </div>
//                 <div className="flex items-end justify-between h-48 gap-3">
//                   {[30, 45, 25, 60, 40, 80, 100, 75, 90, 65, 50, 85].map((h, i) => (
//                     <div key={i} className="w-full bg-white/5 rounded-t-lg relative overflow-hidden group">
//                       <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#C5A059] to-[#D9B770] rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300" style={{ height: `${h}%` }}></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div className="bg-[#314159]/40 rounded-2xl p-6 border border-white/5 h-full flex flex-col">
//                   <h4 className="text-white font-black text-xl mb-6">Quick Allocation</h4>
//                   <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-4">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">From Account</p>
//                     <p className="text-slate-200 font-mono font-bold">0x74...92F1</p>
//                   </div>
//                   <div className="bg-white/5 rounded-xl p-4 border border-white/5">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">Amount</p>
//                     <p className="text-slate-200 font-mono font-bold">₹12,000</p>
//                   </div>
//                   <div className="mt-auto pt-6">
//                     {/* GOLD GLASS BUTTON */}
//                     <button className="w-full bg-[#C5A059]/15 border border-[#C5A059]/50 text-white font-bold py-3.5 rounded-xl hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all active:scale-95">
//                       Execute Transfer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 3-COLUMN FEATURES GRID */}
//         <section id="features" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="text-center reveal opacity-0 translate-y-16 mb-20">
//             <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Features</p>
//             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
//               The future of logic is here.
//             </h2>
//             <p className="text-slate-300 font-medium max-w-2xl mx-auto text-lg">
//               We provide cutting-edge infrastructure tools to optimize your operational performance across every department.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group">
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <BarChart3 size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Predictive Analytics</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Gain foresight into market trends with our machine-learning driven data parsing engine.</p>
//               </div>
//             </div>
            
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '100ms' }}>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
//                   <ShieldCheck size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Automated Compliance</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits.</p>
//               </div>
//             </div>

//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '200ms' }}>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <Zap size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Fraud Detection</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Protect your assets proactively with our real-time anomaly detection heuristics and ledger locks.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* STICKY SPLIT SCROLL SECTION (Services) */}
//         <section id="services" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto relative scroll-mt-24">
//           <div className="flex flex-col lg:flex-row gap-20">
            
//             <div className="w-full lg:w-1/2 lg:sticky lg:top-40 h-fit reveal opacity-0 translate-y-16 relative">
//               <div className="absolute -top-10 -left-10 opacity-5 pointer-events-none mix-blend-screen">
//                 <img src={logo} alt="" className="w-48 h-48 object-contain -rotate-12" />
//               </div>
              
//               <div className="relative z-10">
//                 <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Services</p>
//                 <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
//                   Tailored for every <br /> operational need.
//                 </h2>
//                 <p className="text-lg text-slate-300 font-medium max-w-md">
//                   Our solutions are designed to cater to diverse sectors and business sizes, scaling elastically with your demand.
//                 </p>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 flex flex-col gap-8 relative z-10">
//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Layers size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Enterprise Firms</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">Our platform offers advanced analytics for portfolio management and market trend prediction tailored for massive data loads.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Globe size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">B2B Consulting</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">We empower consultants with AI tools for strategy development, client advisory, and automated reporting generation.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Cpu size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Startups</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">Our scalable solutions adapt to the unique financial challenges of businesses of all sizes from Day 1 without bloat.</p>
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* FOOTER CTA */}
//         <footer className="border-t border-white/5 bg-[#1e2a3b]/60 backdrop-blur-3xl pt-32 pb-12 mt-20">
//           <div className="max-w-[800px] mx-auto text-center px-6 reveal opacity-0 translate-y-16">
//             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
//               Ready to deploy?
//             </h2>
//             <div className="flex justify-center items-center gap-4 mb-24">
//               <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/50 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[#C5A059]/50 active:scale-95">
//                 Start Free Trial
//               </Link>
//             </div>
            
//             <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-slate-400 font-bold">
//               <div className="flex items-center gap-2 mb-4 md:mb-0">
//                 <img src={logo} alt="Laxvira" className="w-6 h-6 rounded object-contain bg-white p-0.5 shadow-sm border border-white/10" />
//                 <span className="font-black text-white tracking-widest">LAXVIRA</span>
//               </div>
//               <p>© 2026 Laxvira Systems. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>

//       </div>
//     </div>
//   );
// };

// export default LandingPage;

//updated transparent blues and rotating thing 
// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import * as THREE from 'three';
// import { 
//   ArrowRight, ChevronRight, BarChart3, 
//   ShieldCheck, Zap, Layers, Globe, Cpu,
//   Sparkles
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* ==========================================================================
//    1. THE FIXED BACKGROUND ENGINE (Visible Gold Matrix)
//    ========================================================================== */
// const AmbientBackground = () => {
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       // Smooth, continuous rotation of the 3D matrix restored to original speed
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
//       meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.6} />
//       <directionalLight position={[10, 10, 5]} intensity={2.5} color="#C5A059" /> 
//       <directionalLight position={[-10, -10, -5]} intensity={2} color="#566C86" />
      
//       <Environment preset="city" />

//       {/* The Rotating 3D Engine */}
//       <mesh ref={meshRef} position={[8, 0, -10]} rotation={[0, 0, 0.1]}>
//         <cylinderGeometry args={[14, 14, 40, 64]} />
//         <meshStandardMaterial 
//           color="#C5A059" 
//           metalness={0.9} 
//           roughness={0.1}
//           wireframe={true} 
//           transparent
//           opacity={0.4} /* Opacity tuned for perfect visibility against the navy */
//         />
//       </mesh>
//     </>
//   );
// };

// /* ==========================================================================
//    2. MAIN LANDING PAGE COMPONENT
//    ========================================================================== */
// const LandingPage = () => {

//   const smoothScrollTo = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       const navOffset = 100; 
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY - navOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-16');
//         }
//       });
//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-[#1e2a3b] min-h-screen text-slate-200 font-sans selection:bg-[#C5A059]/30 selection:text-white">
      
//       <style dangerouslySetInnerHTML={{__html: `
//         html { scroll-behavior: smooth; }
//         .reveal { transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        
//         .glass-card {
//           background: rgba(255, 255, 255, 0.06);
//           backdrop-filter: blur(24px);
//           -webkit-backdrop-filter: blur(24px);
//           border: 1px solid rgba(255, 255, 255, 0.12);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.05) inset;
//         }
//       `}} />

//       {/* --- 1. THE 3D BACKGROUND --- */}
//       <div className="fixed inset-0 z-0 pointer-events-none bg-[#1e2a3b]">
//         {/* Subtle gradient behind the 3D canvas */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#566C86]/60 via-[#1e2a3b]/80 to-[#1e2a3b]"></div>
        
//         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
//           <AmbientBackground />
//         </Canvas>
        
//         {/* NOTE: The global blur overlay has been REMOVED. 
//             The rotating cylinder is now 100% crisp and visible. */}
//       </div>

//       {/* --- 2. FOREGROUND CONTENT --- */}
//       <div className="relative z-10">

//         {/* NAVBAR */}
//         <nav className="fixed top-0 w-full z-50 bg-[#314159]/40 backdrop-blur-2xl border-b border-white/10 shadow-sm">
//           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            
//             <div 
//               className="flex items-center gap-3 cursor-pointer group" 
//               onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//             >
//               <img 
//                 src={logo} 
//                 alt="Laxvira" 
//                 className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-[#C5A059]/10 bg-white p-0.5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" 
//               />
//               <span className="font-black tracking-widest text-white group-hover:text-[#C5A059] transition-colors duration-300 text-xl">
//                 LAXVIRA
//               </span>
//             </div>

//             <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
//               <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="hover:text-[#C5A059] transition-colors tracking-wide">Solutions</a>
//               <a href="#features" onClick={(e) => smoothScrollTo(e, 'features')} className="hover:text-[#C5A059] transition-colors tracking-wide">Features</a>
//               <a href="#services" onClick={(e) => smoothScrollTo(e, 'services')} className="hover:text-[#C5A059] transition-colors tracking-wide">Services</a>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link to="/login" className="hidden sm:block text-sm font-bold text-slate-300 hover:text-[#C5A059] transition-colors">
//                 Login
//               </Link>
//               <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/50 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[#C5A059]/40 active:scale-95 flex items-center gap-2">
//                 Start Free Trial <ChevronRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* HERO SECTION */}
//         <section className="h-screen w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
//             <div className="reveal opacity-0 translate-y-16">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#C5A059]/40 text-xs font-black tracking-widest text-[#C5A059] uppercase mb-8 shadow-sm">
//                 <Sparkles size={14} className="text-[#C5A059]" />
//                 V2.0 Now Live
//               </div>
//               <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.05] mb-4">
//                 The future of <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E2C275]">Laxvira Systems.</span>
//               </h1>
//               <p className="text-xl text-slate-300 font-medium tracking-wide">
//                 Smart Business. Smarter Finance.
//               </p>
//             </div>
            
//             <div className="reveal opacity-0 translate-y-16 lg:pl-20">
//               <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8">
//                 We specialize in leveraging advanced micro-service architecture to transform your billing, inventory, and analytics operations into a seamless flow.
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/40 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[#C5A059]/40 flex items-center gap-2 active:scale-95">
//                   Start Free Trial <ArrowRight size={16} />
//                 </Link>
//                 <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="px-8 py-4 rounded-full font-bold text-sm text-slate-300 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:text-[#C5A059] transition-all">
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DASHBOARD MOCKUP REVEAL */}
//         <section id="solutions" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="reveal opacity-0 translate-y-16 mb-16">
//             <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Solutions</p>
//             <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter max-w-2xl">
//               Revolutionize your financial workflows.
//             </h2>
//           </div>

//           <div className="reveal opacity-0 translate-y-16 w-full rounded-[2.5rem] glass-card p-6 md:p-10 hover:border-[#C5A059]/30 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)] transition-all duration-700">
            
//             <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-slate-600"></div>
//                   <div className="w-3 h-3 rounded-full bg-slate-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-slate-400"></div>
//                 </div>
//                 <div className="pl-4 border-l border-white/10 flex items-center gap-2">
//                   <img src={logo} alt="OS" className="w-5 h-5 rounded shadow-sm opacity-90" />
//                   <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Laxvira System OS</span>
//                 </div>
//               </div>
//               <div className="bg-white/5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-400 flex items-center gap-2 border border-white/10">
//                 <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span> Node Active
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2 bg-[#314159]/40 rounded-2xl p-8 border border-white/5">
//                 <p className="text-sm text-slate-400 font-bold mb-1 uppercase tracking-widest">Total Revenue Volume</p>
//                 <div className="flex items-end gap-4 mb-10">
//                   <h3 className="text-5xl font-black text-white">₹84,250.00</h3>
//                   <span className="text-[#C5A059] text-sm font-black bg-[#C5A059]/10 px-2.5 py-1 rounded-md border border-[#C5A059]/30">+14.5%</span>
//                 </div>
//                 <div className="flex items-end justify-between h-48 gap-3">
//                   {[30, 45, 25, 60, 40, 80, 100, 75, 90, 65, 50, 85].map((h, i) => (
//                     <div key={i} className="w-full bg-white/5 rounded-t-lg relative overflow-hidden group">
//                       <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#C5A059] to-[#D9B770] rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300" style={{ height: `${h}%` }}></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div className="bg-[#314159]/40 rounded-2xl p-6 border border-white/5 h-full flex flex-col">
//                   <h4 className="text-white font-black text-xl mb-6">Quick Allocation</h4>
//                   <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-4">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">From Account</p>
//                     <p className="text-slate-200 font-mono font-bold">0x74...92F1</p>
//                   </div>
//                   <div className="bg-white/5 rounded-xl p-4 border border-white/5">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">Amount</p>
//                     <p className="text-slate-200 font-mono font-bold">₹12,000</p>
//                   </div>
//                   <div className="mt-auto pt-6">
//                     <button className="w-full bg-[#C5A059]/15 border border-[#C5A059]/50 text-white font-bold py-3.5 rounded-xl hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all active:scale-95">
//                       Execute Transfer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 3-COLUMN FEATURES GRID */}
//         <section id="features" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="text-center reveal opacity-0 translate-y-16 mb-20">
//             <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Features</p>
//             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
//               The future of logic is here.
//             </h2>
//             <p className="text-slate-300 font-medium max-w-2xl mx-auto text-lg">
//               We provide cutting-edge infrastructure tools to optimize your operational performance across every department.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group">
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <BarChart3 size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Predictive Analytics</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Gain foresight into market trends with our machine-learning driven data parsing engine.</p>
//               </div>
//             </div>
            
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '100ms' }}>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
//                   <ShieldCheck size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Automated Compliance</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits.</p>
//               </div>
//             </div>

//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '200ms' }}>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <Zap size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Fraud Detection</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Protect your assets proactively with our real-time anomaly detection heuristics and ledger locks.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* STICKY SPLIT SCROLL SECTION (Services) */}
//         <section id="services" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto relative scroll-mt-24">
//           <div className="flex flex-col lg:flex-row gap-20">
            
//             <div className="w-full lg:w-1/2 lg:sticky lg:top-40 h-fit reveal opacity-0 translate-y-16 relative">
//               <div className="absolute -top-10 -left-10 opacity-5 pointer-events-none mix-blend-screen">
//                 <img src={logo} alt="" className="w-48 h-48 object-contain -rotate-12" />
//               </div>
              
//               <div className="relative z-10">
//                 <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Services</p>
//                 <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
//                   Tailored for every <br /> operational need.
//                 </h2>
//                 <p className="text-lg text-slate-300 font-medium max-w-md">
//                   Our solutions are designed to cater to diverse sectors and business sizes, scaling elastically with your demand.
//                 </p>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 flex flex-col gap-8 relative z-10">
//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Layers size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Enterprise Firms</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">Our platform offers advanced analytics for portfolio management and market trend prediction tailored for massive data loads.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Globe size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">B2B Consulting</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">We empower consultants with AI tools for strategy development, client advisory, and automated reporting generation.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Cpu size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Startups</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">Our scalable solutions adapt to the unique financial challenges of businesses of all sizes from Day 1 without bloat.</p>
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* FOOTER CTA */}
//         <footer className="border-t border-white/5 bg-[#1e2a3b]/60 backdrop-blur-3xl pt-32 pb-12 mt-20">
//           <div className="max-w-[800px] mx-auto text-center px-6 reveal opacity-0 translate-y-16">
//             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
//               Ready to deploy?
//             </h2>
//             <div className="flex justify-center items-center gap-4 mb-24">
//               <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/50 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[#C5A059]/50 active:scale-95">
//                 Start Free Trial
//               </Link>
//             </div>
            
//             <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-slate-400 font-bold">
//               <div className="flex items-center gap-2 mb-4 md:mb-0">
//                 <img src={logo} alt="Laxvira" className="w-6 h-6 rounded object-contain bg-white p-0.5 shadow-sm border border-white/10" />
//                 <span className="font-black text-white tracking-widest">LAXVIRA</span>
//               </div>
//               <p>© 2026 Laxvira Systems. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>

//       </div>
//     </div>
//   );
// };

// export default LandingPage;

//updated footer
// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import * as THREE from 'three';
// import { 
//   ArrowRight, ChevronRight, BarChart3, 
//   ShieldCheck, Zap, Layers, Globe, Cpu,
//   Sparkles
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* ==========================================================================
//    1. THE FIXED BACKGROUND ENGINE
//    ========================================================================== */
// const AmbientBackground = () => {
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
//       meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.6} />
//       <directionalLight position={[10, 10, 5]} intensity={2.5} color="#C5A059" /> 
//       <directionalLight position={[-10, -10, -5]} intensity={2} color="#566C86" />
      
//       <Environment preset="city" />

//       <mesh ref={meshRef} position={[8, 0, -10]} rotation={[0, 0, 0.1]}>
//         <cylinderGeometry args={[14, 14, 40, 64]} />
//         <meshStandardMaterial 
//           color="#C5A059" 
//           metalness={0.9} 
//           roughness={0.1}
//           wireframe={true} 
//           transparent
//           opacity={0.4} 
//         />
//       </mesh>
//     </>
//   );
// };

// /* ==========================================================================
//    2. MAIN LANDING PAGE COMPONENT
//    ========================================================================== */
// const LandingPage = () => {

//   const smoothScrollTo = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       const navOffset = 100; 
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY - navOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-16');
//         }
//       });
//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-[#1e2a3b] min-h-screen text-slate-200 font-sans selection:bg-[#C5A059]/30 selection:text-white">
      
//       <style dangerouslySetInnerHTML={{__html: `
//         html { scroll-behavior: smooth; }
//         .reveal { transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        
//         .glass-card {
//           background: rgba(255, 255, 255, 0.06);
//           backdrop-filter: blur(24px);
//           -webkit-backdrop-filter: blur(24px);
//           border: 1px solid rgba(255, 255, 255, 0.12);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.05) inset;
//         }

//         /* Continuous Upwards Vertical Marquee Animation */
//         @keyframes vertical-scroll {
//           0% { transform: translateY(0%); }
//           100% { transform: translateY(-50%); }
//         }
//         .animate-vertical-marquee {
//           animation: vertical-scroll 18s linear infinite;
//         }
//       `}} />

//       {/* --- 1. THE 3D BACKGROUND --- */}
//       <div className="fixed inset-0 z-0 pointer-events-none bg-[#1e2a3b]">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#566C86]/60 via-[#1e2a3b]/80 to-[#1e2a3b]"></div>
//         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
//           <AmbientBackground />
//         </Canvas>
//       </div>

//       {/* --- 2. FOREGROUND CONTENT --- */}
//       <div className="relative z-10">

//         {/* EXPANDED NAVBAR */}
//         <nav className="fixed top-0 w-full z-50 bg-[#314159]/40 backdrop-blur-2xl border-b border-white/10 shadow-sm">
//           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            
//             <div 
//               className="flex items-center gap-3 cursor-pointer group" 
//               onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//             >
//               <img 
//                 src={logo} 
//                 alt="Laxvira" 
//                 className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-[#C5A059]/10 bg-white p-0.5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" 
//               />
//               <span className="font-black tracking-widest text-white group-hover:text-[#C5A059] transition-colors duration-300 text-xl hidden sm:block">
//                 LAXVIRA
//               </span>
//             </div>

//             <div className="hidden xl:flex items-center gap-8 text-sm font-bold text-slate-300">
//               <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="hover:text-[#C5A059] transition-colors tracking-wide">Solutions</a>
//               <a href="#features" onClick={(e) => smoothScrollTo(e, 'features')} className="hover:text-[#C5A059] transition-colors tracking-wide">Features</a>
//               <a href="#services" onClick={(e) => smoothScrollTo(e, 'services')} className="hover:text-[#C5A059] transition-colors tracking-wide">Services</a>
//               <a href="#pricing" onClick={(e) => smoothScrollTo(e, 'pricing')} className="hover:text-[#C5A059] transition-colors tracking-wide">Pricing</a>
//               <a href="#resources" onClick={(e) => smoothScrollTo(e, 'resources')} className="hover:text-[#C5A059] transition-colors tracking-wide">Resources</a>
//               <a href="#company" onClick={(e) => smoothScrollTo(e, 'company')} className="hover:text-[#C5A059] transition-colors tracking-wide">Company</a>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link to="/login" className="hidden md:block text-sm font-bold text-slate-300 hover:text-[#C5A059] transition-colors">
//                 Login
//               </Link>
//               <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/50 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[#C5A059]/40 active:scale-95 flex items-center gap-2">
//                 Start Free Trial <ChevronRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* HERO SECTION */}
//         <section className="h-screen w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
//             <div className="reveal opacity-0 translate-y-16">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#C5A059]/40 text-xs font-black tracking-widest text-[#C5A059] uppercase mb-8 shadow-sm">
//                 <Sparkles size={14} className="text-[#C5A059]" />
//                 V2.0 Now Live
//               </div>
//               <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.05] mb-4">
//                 The future of <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E2C275]">Laxvira Systems.</span>
//               </h1>
//               <p className="text-xl text-slate-300 font-medium tracking-wide">
//                 Smart Business. Smarter Finance.
//               </p>
//             </div>
            
//             <div className="reveal opacity-0 translate-y-16 lg:pl-20">
//               <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8">
//                 We specialize in leveraging advanced micro-service architecture to transform your billing, inventory, and analytics operations into a seamless flow.
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/40 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[#C5A059]/40 flex items-center gap-2 active:scale-95">
//                   Start Free Trial <ArrowRight size={16} />
//                 </Link>
//                 <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="px-8 py-4 rounded-full font-bold text-sm text-slate-200 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:text-[#C5A059] transition-all">
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DASHBOARD MOCKUP */}
//         <section id="solutions" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="reveal opacity-0 translate-y-16 mb-16">
//             <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Solutions</p>
//             <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter max-w-2xl">
//               Revolutionize your financial workflows.
//             </h2>
//           </div>

//           <div className="reveal opacity-0 translate-y-16 w-full rounded-[2.5rem] glass-card p-6 md:p-10 hover:border-[#C5A059]/30 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)] transition-all duration-700">
//             <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-slate-600"></div>
//                   <div className="w-3 h-3 rounded-full bg-slate-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-slate-400"></div>
//                 </div>
//                 <div className="pl-4 border-l border-white/10 flex items-center gap-2">
//                   <img src={logo} alt="OS" className="w-5 h-5 rounded shadow-sm opacity-90" />
//                   <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Laxvira System OS</span>
//                 </div>
//               </div>
//               <div className="bg-white/5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-400 flex items-center gap-2 border border-white/10">
//                 <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span> Node Active
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2 bg-[#314159]/40 rounded-2xl p-8 border border-white/5">
//                 <p className="text-sm text-slate-400 font-bold mb-1 uppercase tracking-widest">Total Revenue Volume</p>
//                 <div className="flex items-end gap-4 mb-10">
//                   <h3 className="text-5xl font-black text-white">₹84,250.00</h3>
//                   <span className="text-[#C5A059] text-sm font-black bg-[#C5A059]/10 px-2.5 py-1 rounded-md border border-[#C5A059]/30">+14.5%</span>
//                 </div>
//                 <div className="flex items-end justify-between h-48 gap-3">
//                   {[30, 45, 25, 60, 40, 80, 100, 75, 90, 65, 50, 85].map((h, i) => (
//                     <div key={i} className="w-full bg-white/5 rounded-t-lg relative overflow-hidden group">
//                       <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#C5A059] to-[#D9B770] rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300" style={{ height: `${h}%` }}></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div className="bg-[#314159]/40 rounded-2xl p-6 border border-white/5 h-full flex flex-col">
//                   <h4 className="text-white font-black text-xl mb-6">Quick Allocation</h4>
//                   <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-4">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">From Account</p>
//                     <p className="text-slate-200 font-mono font-bold">0x74...92F1</p>
//                   </div>
//                   <div className="bg-white/5 rounded-xl p-4 border border-white/5">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">Amount</p>
//                     <p className="text-slate-200 font-mono font-bold">₹12,000</p>
//                   </div>
//                   <div className="mt-auto pt-6">
//                     <button className="w-full bg-[#C5A059]/15 border border-[#C5A059]/50 text-white font-bold py-3.5 rounded-xl hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all active:scale-95">
//                       Execute Transfer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FEATURES GRID */}
//         <section id="features" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="text-center reveal opacity-0 translate-y-16 mb-20">
//             <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Features</p>
//             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
//               The future of logic is here.
//             </h2>
//             <p className="text-slate-300 font-medium max-w-2xl mx-auto text-lg">
//               We provide cutting-edge infrastructure tools to optimize your operational performance across every department.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group">
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <BarChart3 size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Predictive Analytics</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Gain foresight into market trends with our machine-learning driven data parsing engine.</p>
//               </div>
//             </div>
            
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '100ms' }}>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
//                   <ShieldCheck size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Automated Compliance</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits.</p>
//               </div>
//             </div>

//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '200ms' }}>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <Zap size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Fraud Detection</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Protect your assets proactively with our real-time anomaly detection heuristics and ledger locks.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SERVICES SECTION */}
//         <section id="services" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto relative scroll-mt-24">
//           <div className="flex flex-col lg:flex-row gap-20">
//             <div className="w-full lg:w-1/2 lg:sticky lg:top-40 h-fit reveal opacity-0 translate-y-16 relative">
//               <div className="absolute -top-10 -left-10 opacity-5 pointer-events-none mix-blend-screen">
//                 <img src={logo} alt="" className="w-48 h-48 object-contain -rotate-12" />
//               </div>
//               <div className="relative z-10">
//                 <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Services</p>
//                 <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
//                   Tailored for every <br /> operational need.
//                 </h2>
//                 <p className="text-lg text-slate-300 font-medium max-w-md">
//                   Our solutions are designed to cater to diverse sectors and business sizes, scaling elastically with your demand.
//                 </p>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 flex flex-col gap-8 relative z-10">
//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Layers size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Enterprise Firms</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">Our platform offers advanced analytics for portfolio management and market trend prediction tailored for massive data loads.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Globe size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">B2B Consulting</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">We empower consultants with AI tools for strategy development, client advisory, and automated reporting generation.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Cpu size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Startups</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">Our scalable solutions adapt to the unique financial challenges of businesses of all sizes from Day 1 without bloat.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DYNAMIC MEGA FOOTER WITH MULTI-COLUMN UPWARD SLANTED MARQUEE */}
//         <footer className="relative border-t border-white/5 bg-[#0b1120]/60 backdrop-blur-3xl pt-32 pb-12 mt-20 overflow-hidden">
          
//           {/* Multiple Columns Scrolling Continuously Upwards at an Angle */}
//           <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex justify-between px-10">
//             <div className="absolute inset-0 flex justify-around transform -rotate-12 scale-125 opacity-[0.03] select-none mix-blend-screen">
//               {[1, 2, 3, 4, 5].map((col) => (
//                 <div key={col} className="animate-vertical-marquee flex flex-col gap-16 py-10">
//                   {[1, 2].map((loop) => (
//                     <div key={loop} className="flex flex-col gap-16 items-center">
//                       <span className="text-6xl font-black tracking-widest text-white uppercase [writing-mode:vertical-lr]">LAXVIRA</span>
//                       <img src={logo} alt="" className="w-20 h-20 object-contain grayscale filter invert" />
//                       <span className="text-6xl font-black tracking-widest text-white uppercase [writing-mode:vertical-lr]">SYSTEMS</span>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Dynamic Footer Glow intersecting with 3D background */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none"></div>

//           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            
//             {/* Top CTA */}
//             <div className="text-center reveal opacity-0 translate-y-16 mb-24">
//               <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
//                 Ready to deploy?
//               </h2>
//               <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
//                 Join the leading financial institutions powering their infrastructure with Laxvira Systems.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//                 <Link to="/signup" className="w-full sm:w-auto bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/50 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[#C5A059]/50 active:scale-95">
//                   Start Free Trial
//                 </Link>
//                 <Link to="/contact" className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
//                   Contact Sales
//                 </Link>
//               </div>
//             </div>

//             {/* Sitemap & Newsletter */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-t border-white/10 pt-16 pb-16 reveal opacity-0 translate-y-16">
              
//               <div className="lg:col-span-2">
//                  <div className="flex items-center gap-3 mb-6">
//                     <img src={logo} alt="Laxvira" className="w-8 h-8 rounded-lg object-contain bg-white p-0.5 shadow-sm border border-white/10" />
//                     <span className="font-black text-white tracking-widest text-xl">LAXVIRA</span>
//                  </div>
//                  <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
//                    We specialize in leveraging advanced micro-service architecture to transform your billing, inventory, and analytics operations into a seamless flow.
//                  </p>
//                  <div className="flex items-center bg-[#1e2a3b]/50 border border-white/10 rounded-full p-1 max-w-sm focus-within:border-[#C5A059]/50 transition-colors">
//                    <input type="email" placeholder="Subscribe to updates" className="bg-transparent border-none outline-none text-white text-sm px-4 w-full placeholder:text-slate-500" />
//                    <button className="bg-[#C5A059] text-[#070b14] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors">
//                      Join
//                    </button>
//                  </div>
//               </div>

//               <div>
//                 <h4 className="text-white font-bold mb-6">Product</h4>
//                 <ul className="space-y-4 text-sm text-slate-400">
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Billing Engine</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Live Inventory</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Predictive Analytics</a></li>
//                   <li><a href="#pricing" onClick={(e) => smoothScrollTo(e, 'pricing')} className="hover:text-[#C5A059] transition-colors">Pricing</a></li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-white font-bold mb-6">Company</h4>
//                 <ul className="space-y-4 text-sm text-slate-400">
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">About Us</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Careers</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Partners</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a></li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-white font-bold mb-6">Legal</h4>
//                 <ul className="space-y-4 text-sm text-slate-400">
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Security</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Status</a></li>
//                 </ul>
//               </div>
//             </div>
            
//             {/* Bottom Bar */}
//             <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-slate-500 font-medium">
//               <p>© 2026 Laxvira Systems. All rights reserved.</p>
//               <div className="flex items-center gap-6 mt-4 md:mt-0">
//                  <a href="#" className="hover:text-white transition-colors">Twitter</a>
//                  <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
//                  <a href="#" className="hover:text-white transition-colors">GitHub</a>
//               </div>
//             </div>
//           </div>
//         </footer>

//       </div>
//     </div>
//   );
// };

// export default LandingPage;


//perfect
// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import * as THREE from 'three';
// import { 
//   ArrowRight, ChevronRight, BarChart3, 
//   ShieldCheck, Zap, Layers, Globe, Cpu
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* ==========================================================================
//    1. THE FIXED BACKGROUND ENGINE
//    ========================================================================== */
// const AmbientBackground = () => {
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
//       meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.6} />
//       <directionalLight position={[10, 10, 5]} intensity={2.5} color="#C5A059" /> 
//       <directionalLight position={[-10, -10, -5]} intensity={2} color="#566C86" />
      
//       <Environment preset="city" />

//       <mesh ref={meshRef} position={[8, 0, -10]} rotation={[0, 0, 0.1]}>
//         <cylinderGeometry args={[14, 14, 40, 64]} />
//         <meshStandardMaterial 
//           color="#C5A059" 
//           metalness={0.9} 
//           roughness={0.1}
//           wireframe={true} 
//           transparent
//           opacity={0.4} 
//         />
//       </mesh>
//     </>
//   );
// };

// /* ==========================================================================
//    2. MAIN LANDING PAGE COMPONENT
//    ========================================================================== */
// const LandingPage = () => {

//   const smoothScrollTo = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       const navOffset = 100; 
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY - navOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-16');
//         }
//       });
//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-[#1e2a3b] min-h-screen text-slate-200 font-sans selection:bg-[#C5A059]/30 selection:text-white">
      
//       <style dangerouslySetInnerHTML={{__html: `
//         html { scroll-behavior: smooth; }
//         .reveal { transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        
//         .glass-card {
//           background: rgba(255, 255, 255, 0.06);
//           backdrop-filter: blur(24px);
//           -webkit-backdrop-filter: blur(24px);
//           border: 1px solid rgba(255, 255, 255, 0.12);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.05) inset;
//         }

//         /* Continuous Upwards Vertical Marquee Animation */
//         @keyframes vertical-scroll {
//           0% { transform: translateY(0%); }
//           100% { transform: translateY(-50%); }
//         }
//         .animate-vertical-marquee {
//           animation: vertical-scroll 18s linear infinite;
//         }
//       `}} />

//       {/* --- 1. THE 3D BACKGROUND --- */}
//       <div className="fixed inset-0 z-0 pointer-events-none bg-[#1e2a3b]">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#566C86]/60 via-[#1e2a3b]/80 to-[#1e2a3b]"></div>
//         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
//           <AmbientBackground />
//         </Canvas>
//       </div>

//       {/* --- 2. FOREGROUND CONTENT --- */}
//       <div className="relative z-10">

//         {/* EXPANDED NAVBAR */}
//         <nav className="fixed top-0 w-full z-50 bg-[#314159]/40 backdrop-blur-2xl border-b border-white/10 shadow-sm">
//           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            
//             <div 
//               className="flex items-center gap-3 cursor-pointer group" 
//               onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//             >
//               <img 
//                 src={logo} 
//                 alt="Laxvira" 
//                 className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-[#C5A059]/10 bg-white p-0.5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" 
//               />
//               <span className="font-black tracking-widest text-white group-hover:text-[#C5A059] transition-colors duration-300 text-xl hidden sm:block">
//                 LAXVIRA
//               </span>
//             </div>

//             <div className="hidden xl:flex items-center gap-8 text-sm font-bold text-slate-300">
//               <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="hover:text-[#C5A059] transition-colors tracking-wide">Solutions</a>
//               <a href="#features" onClick={(e) => smoothScrollTo(e, 'features')} className="hover:text-[#C5A059] transition-colors tracking-wide">Features</a>
//               <a href="#services" onClick={(e) => smoothScrollTo(e, 'services')} className="hover:text-[#C5A059] transition-colors tracking-wide">Services</a>
//               <a href="#pricing" onClick={(e) => smoothScrollTo(e, 'pricing')} className="hover:text-[#C5A059] transition-colors tracking-wide">Pricing</a>
//               <a href="#resources" onClick={(e) => smoothScrollTo(e, 'resources')} className="hover:text-[#C5A059] transition-colors tracking-wide">Resources</a>
//               <a href="#company" onClick={(e) => smoothScrollTo(e, 'company')} className="hover:text-[#C5A059] transition-colors tracking-wide">Company</a>
//             </div>

//             <div className="flex items-center gap-4">
//               <Link to="/login" className="hidden md:block text-sm font-bold text-slate-300 hover:text-[#C5A059] transition-colors">
//                 Login
//               </Link>
//               <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/50 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[#C5A059]/40 active:scale-95 flex items-center gap-2">
//                 Start Free Trial <ChevronRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* HERO SECTION */}
//         <section className="h-screen w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
//             <div className="reveal opacity-0 translate-y-16">
//               {/* V2.0 Badge and "The future of" text have been cleanly removed. */}
//               <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[1.05] mb-4">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E2C275]">Laxvira.</span>
//               </h1>
//               <p className="text-xl text-slate-300 font-medium tracking-wide">
//                 Smart Business. Smarter Finance.
//               </p>
//             </div>
            
//             <div className="reveal opacity-0 translate-y-16 lg:pl-20">
//               <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8">
//                 We specialize in leveraging advanced micro-service architecture to transform your billing, inventory, and analytics operations into a seamless flow.
//               </p>
//               <div className="flex flex-wrap items-center gap-4">
//                 <Link to="/signup" className="bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/40 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[#C5A059]/40 flex items-center gap-2 active:scale-95">
//                   Start Free Trial <ArrowRight size={16} />
//                 </Link>
//                 <a href="#solutions" onClick={(e) => smoothScrollTo(e, 'solutions')} className="px-8 py-4 rounded-full font-bold text-sm text-slate-200 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:text-[#C5A059] transition-all">
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DASHBOARD MOCKUP */}
//         <section id="solutions" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="reveal opacity-0 translate-y-16 mb-16">
//             <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Solutions</p>
//             <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter max-w-2xl">
//               Revolutionize your financial workflows.
//             </h2>
//           </div>

//           <div className="reveal opacity-0 translate-y-16 w-full rounded-[2.5rem] glass-card p-6 md:p-10 hover:border-[#C5A059]/30 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)] transition-all duration-700">
//             <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-slate-600"></div>
//                   <div className="w-3 h-3 rounded-full bg-slate-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-slate-400"></div>
//                 </div>
//                 <div className="pl-4 border-l border-white/10 flex items-center gap-2">
//                   <img src={logo} alt="OS" className="w-5 h-5 rounded shadow-sm opacity-90" />
//                   <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Laxvira System OS</span>
//                 </div>
//               </div>
//               <div className="bg-white/5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-400 flex items-center gap-2 border border-white/10">
//                 <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span> Node Active
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2 bg-[#314159]/40 rounded-2xl p-8 border border-white/5">
//                 <p className="text-sm text-slate-400 font-bold mb-1 uppercase tracking-widest">Total Revenue Volume</p>
//                 <div className="flex items-end gap-4 mb-10">
//                   <h3 className="text-5xl font-black text-white">₹84,250.00</h3>
//                   <span className="text-[#C5A059] text-sm font-black bg-[#C5A059]/10 px-2.5 py-1 rounded-md border border-[#C5A059]/30">+14.5%</span>
//                 </div>
//                 <div className="flex items-end justify-between h-48 gap-3">
//                   {[30, 45, 25, 60, 40, 80, 100, 75, 90, 65, 50, 85].map((h, i) => (
//                     <div key={i} className="w-full bg-white/5 rounded-t-lg relative overflow-hidden group">
//                       <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#C5A059] to-[#D9B770] rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300" style={{ height: `${h}%` }}></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div className="bg-[#314159]/40 rounded-2xl p-6 border border-white/5 h-full flex flex-col">
//                   <h4 className="text-white font-black text-xl mb-6">Quick Allocation</h4>
//                   <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-4">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">From Account</p>
//                     <p className="text-slate-200 font-mono font-bold">0x74...92F1</p>
//                   </div>
//                   <div className="bg-white/5 rounded-xl p-4 border border-white/5">
//                     <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">Amount</p>
//                     <p className="text-slate-200 font-mono font-bold">₹12,000</p>
//                   </div>
//                   <div className="mt-auto pt-6">
//                     <button className="w-full bg-[#C5A059]/15 border border-[#C5A059]/50 text-white font-bold py-3.5 rounded-xl hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all active:scale-95">
//                       Execute Transfer
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FEATURES GRID */}
//         <section id="features" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto scroll-mt-24">
//           <div className="text-center reveal opacity-0 translate-y-16 mb-20">
//             <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Features</p>
//             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
//               The future of logic is here.
//             </h2>
//             <p className="text-slate-300 font-medium max-w-2xl mx-auto text-lg">
//               We provide cutting-edge infrastructure tools to optimize your operational performance across every department.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group">
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <BarChart3 size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Predictive Analytics</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Gain foresight into market trends with our machine-learning driven data parsing engine.</p>
//               </div>
//             </div>
            
//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '100ms' }}>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
//                   <ShieldCheck size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Automated Compliance</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits.</p>
//               </div>
//             </div>

//             <div className="glass-card rounded-3xl p-8 reveal opacity-0 translate-y-16 hover:-translate-y-2 hover:border-[#C5A059]/40 transition-all duration-500 relative overflow-hidden group" style={{ transitionDelay: '200ms' }}>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
//                   <Zap size={24} />
//                 </div>
//                 <h3 className="text-2xl font-black text-white mb-3">Fraud Detection</h3>
//                 <p className="text-slate-300 font-medium leading-relaxed">Protect your assets proactively with our real-time anomaly detection heuristics and ledger locks.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* SERVICES SECTION */}
//         <section id="services" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto relative scroll-mt-24">
//           <div className="flex flex-col lg:flex-row gap-20">
//             <div className="w-full lg:w-1/2 lg:sticky lg:top-40 h-fit reveal opacity-0 translate-y-16 relative">
//               <div className="absolute -top-10 -left-10 opacity-5 pointer-events-none mix-blend-screen">
//                 <img src={logo} alt="" className="w-48 h-48 object-contain -rotate-12" />
//               </div>
//               <div className="relative z-10">
//                 <p className="text-xs font-black tracking-widest text-[#C5A059] uppercase mb-4">Services</p>
//                 <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
//                   Tailored for every <br /> operational need.
//                 </h2>
//                 <p className="text-lg text-slate-300 font-medium max-w-md">
//                   Our solutions are designed to cater to diverse sectors and business sizes, scaling elastically with your demand.
//                 </p>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 flex flex-col gap-8 relative z-10">
//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Layers size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Enterprise Firms</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">Our platform offers advanced analytics for portfolio management and market trend prediction tailored for massive data loads.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Globe size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">B2B Consulting</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">We empower consultants with AI tools for strategy development, client advisory, and automated reporting generation.</p>
//               </div>

//               <div className="glass-card rounded-3xl p-10 reveal opacity-0 translate-y-16 hover:-translate-x-2 hover:border-[#C5A059]/40 transition-all duration-500 group">
//                 <div className="flex items-center gap-4 mb-6 text-white"><Cpu size={32} className="text-[#C5A059] group-hover:scale-110 transition-transform duration-300"/> <h3 className="text-3xl font-black">Startups</h3></div>
//                 <p className="text-slate-300 font-medium text-lg leading-relaxed">Our scalable solutions adapt to the unique financial challenges of businesses of all sizes from Day 1 without bloat.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DYNAMIC MEGA FOOTER */}
//         <footer className="relative border-t border-white/5 bg-[#0b1120]/60 backdrop-blur-3xl pt-32 pb-12 mt-20 overflow-hidden">
          
//           <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex justify-between px-10">
//             <div className="absolute inset-0 flex justify-around transform -rotate-12 scale-125 opacity-[0.03] select-none mix-blend-screen">
//               {[1, 2, 3, 4, 5].map((col) => (
//                 <div key={col} className="animate-vertical-marquee flex flex-col gap-16 py-10">
//                   {[1, 2].map((loop) => (
//                     <div key={loop} className="flex flex-col gap-16 items-center">
//                       <span className="text-6xl font-black tracking-widest text-white uppercase [writing-mode:vertical-lr]">LAXVIRA</span>
//                       <img src={logo} alt="" className="w-20 h-20 object-contain grayscale filter invert" />
//                       <span className="text-6xl font-black tracking-widest text-white uppercase [writing-mode:vertical-lr]">SYSTEMS</span>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none"></div>

//           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            
//             <div className="text-center reveal opacity-0 translate-y-16 mb-24">
//               <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
//                 Ready to deploy?
//               </h2>
//               <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
//                 Join the leading financial institutions powering their infrastructure with Laxvira Systems.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//                 <Link to="/signup" className="w-full sm:w-auto bg-[#C5A059]/15 backdrop-blur-xl border border-[#C5A059]/50 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#C5A059] hover:text-[#1e2a3b] transition-all shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[#C5A059]/50 active:scale-95">
//                   Start Free Trial
//                 </Link>
//                 <Link to="/contact" className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
//                   Contact Sales
//                 </Link>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-t border-white/10 pt-16 pb-16 reveal opacity-0 translate-y-16">
              
//               <div className="lg:col-span-2">
//                  <div className="flex items-center gap-3 mb-6">
//                     <img src={logo} alt="Laxvira" className="w-8 h-8 rounded-lg object-contain bg-white p-0.5 shadow-sm border border-white/10" />
//                     <span className="font-black text-white tracking-widest text-xl">LAXVIRA</span>
//                  </div>
//                  <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
//                    We specialize in leveraging advanced micro-service architecture to transform your billing, inventory, and analytics operations into a seamless flow.
//                  </p>
//                  <div className="flex items-center bg-[#1e2a3b]/50 border border-white/10 rounded-full p-1 max-w-sm focus-within:border-[#C5A059]/50 transition-colors">
//                    <input type="email" placeholder="Subscribe to updates" className="bg-transparent border-none outline-none text-white text-sm px-4 w-full placeholder:text-slate-500" />
//                    <button className="bg-[#C5A059] text-[#070b14] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors">
//                      Join
//                    </button>
//                  </div>
//               </div>

//               <div>
//                 <h4 className="text-white font-bold mb-6">Product</h4>
//                 <ul className="space-y-4 text-sm text-slate-400">
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Billing Engine</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Live Inventory</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Predictive Analytics</a></li>
//                   <li><a href="#pricing" onClick={(e) => smoothScrollTo(e, 'pricing')} className="hover:text-[#C5A059] transition-colors">Pricing</a></li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-white font-bold mb-6">Company</h4>
//                 <ul className="space-y-4 text-sm text-slate-400">
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">About Us</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Careers</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Partners</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a></li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-white font-bold mb-6">Legal</h4>
//                 <ul className="space-y-4 text-sm text-slate-400">
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Security</a></li>
//                   <li><a href="#" className="hover:text-[#C5A059] transition-colors">Status</a></li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-slate-500 font-medium">
//               <p>© 2026 Laxvira Systems. All rights reserved.</p>
//               <div className="flex items-center gap-6 mt-4 md:mt-0">
//                  <a href="#" className="hover:text-white transition-colors">Twitter</a>
//                  <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
//                  <a href="#" className="hover:text-white transition-colors">GitHub</a>
//               </div>
//             </div>
//           </div>
//         </footer>

//       </div>
//     </div>
//   );
// };

// export default LandingPage;


//what he asked 
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Canvas } from '@react-three/fiber';
// import { Environment, Float } from '@react-three/drei';
// import {
//   ArrowRight,
//   ChevronDown,
//   ChevronRight,
//   BarChart3,
//   CheckCircle2,
//   ShieldCheck,
//   Users,
//   Building2,
//   ClipboardList,
//   LayoutDashboard,
//   LineChart,
//   UsersRound,
//   Settings,
//   Bot,
//   Sparkles,
//   Search,
//   Bell,
//   FileText,
//   WalletCards,
//   BriefcaseBusiness,
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* --------------------------------------------------------------------------
//    3D HERO OBJECT
//    -------------------------------------------------------------------------- */

// const HeroScene = () => {
//   return (
//     <>
//       <ambientLight intensity={2.2} />
//       <directionalLight
//         position={[6, 10, 8]}
//         intensity={3}
//         color="#ffffff"
//         castShadow
//       />
//       <directionalLight
//         position={[-6, 6, -4]}
//         intensity={1.2}
//         color="#C5A059"
//       />
//       <Environment preset="studio" />

//       {/* Main white / navy / gold podium */}
//       <group position={[0, -2.5, 0]}>
//         <mesh position={[0, -0.35, 0]}>
//           <cylinderGeometry args={[4.7, 5.1, 0.35, 96]} />
//           <meshStandardMaterial
//             color="#ffffff"
//             metalness={0.05}
//             roughness={0.18}
//           />
//         </mesh>

//         <mesh position={[0, -0.05, 0]}>
//           <cylinderGeometry args={[3.8, 4.05, 0.18, 96]} />
//           <meshStandardMaterial
//             color="#C5A059"
//             metalness={0.85}
//             roughness={0.18}
//           />
//         </mesh>

//         <mesh position={[0, 0.3, 0]}>
//           <cylinderGeometry args={[3.55, 3.7, 0.55, 96]} />
//           <meshStandardMaterial
//             color="#111827"
//             metalness={0.55}
//             roughness={0.25}
//           />
//         </mesh>

//         <mesh position={[0, 0.61, 0]}>
//           <cylinderGeometry args={[3.62, 3.62, 0.08, 96]} />
//           <meshStandardMaterial
//             color="#C5A059"
//             metalness={0.9}
//             roughness={0.12}
//           />
//         </mesh>

//         <mesh position={[0, 0.67, 0]}>
//           <cylinderGeometry args={[3.45, 3.45, 0.06, 96]} />
//           <meshStandardMaterial color="#1e293b" />
//         </mesh>
//       </group>

//       {/* Floating pearl */}
//       <Float speed={1.4} rotationIntensity={0.25} floatIntensity={1.4}>
//         <mesh position={[-3.7, 1.8, -1]}>
//           <sphereGeometry args={[0.38, 32, 32]} />
//           <meshStandardMaterial
//             color="#ffffff"
//             metalness={0.15}
//             roughness={0.08}
//             clearcoat={1}
//           />
//         </mesh>
//       </Float>

//       <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1.2}>
//         <mesh position={[5.2, -1.4, -2]}>
//           <sphereGeometry args={[0.22, 32, 32]} />
//           <meshStandardMaterial
//             color="#ffffff"
//             metalness={0.2}
//             roughness={0.08}
//             clearcoat={1}
//           />
//         </mesh>
//       </Float>

//       {/* Subtle gold orbital rings */}
//       <group position={[6.2, -1.5, -5]} rotation={[0.2, -0.65, 0]}>
//         <mesh>
//           <torusGeometry args={[4.2, 0.018, 16, 100, Math.PI * 1.2]} />
//           <meshStandardMaterial
//             color="#C5A059"
//             metalness={0.9}
//             roughness={0.15}
//           />
//         </mesh>
//         <mesh position={[0, 0, 0.35]}>
//           <torusGeometry args={[3.6, 0.015, 16, 100, Math.PI * 1.2]} />
//           <meshStandardMaterial
//             color="#C5A059"
//             metalness={0.9}
//             roughness={0.15}
//           />
//         </mesh>
//       </group>
//     </>
//   );
// };

// /* --------------------------------------------------------------------------
//    DASHBOARD MOCKUP
//    -------------------------------------------------------------------------- */

// const dashboardStats = [
//   {
//     title: 'Total Revenue',
//     value: '₹24.8L',
//     trend: '+18.6%',
//     trendClass: 'text-emerald-500',
//     icon: BarChart3,
//   },
//   {
//     title: 'Total Expenses',
//     value: '₹12.6L',
//     trend: '-6.2%',
//     trendClass: 'text-rose-500',
//     icon: WalletCards,
//   },
//   {
//     title: 'Net Profit',
//     value: '₹12.2L',
//     trend: '+24.8%',
//     trendClass: 'text-emerald-500',
//     icon: LineChart,
//   },
//   {
//     title: 'Cash Flow',
//     value: '₹8.4L',
//     trend: '+15.3%',
//     trendClass: 'text-emerald-500',
//     icon: BriefcaseBusiness,
//   },
// ];

// const sidebarItems = [
//   { name: 'Dashboard', icon: LayoutDashboard, active: true },
//   { name: 'Analytics', icon: LineChart },
//   { name: 'Sales', icon: BarChart3 },
//   { name: 'Finance', icon: Building2 },
//   { name: 'Clients', icon: UsersRound },
//   { name: 'Projects', icon: ClipboardList },
//   { name: 'Reports', icon: FileText },
//   { name: 'AI Insights', icon: Sparkles },
//   { name: 'Settings', icon: Settings },
// ];

// const TiltedDashboard = () => {
//   return (
//     <div
//       className="absolute right-[-8%] top-[4%] z-20 h-[700px] w-[900px] pointer-events-none select-none"
//       style={{
//         transform:
//           'perspective(1800px) rotateY(-9deg) rotateX(3deg) rotateZ(-1.5deg)',
//         transformStyle: 'preserve-3d',
//       }}
//     >
//       {/* Main glass / white dashboard shell */}
//       <div className="relative flex h-full w-full overflow-hidden rounded-[2.5rem] border border-white/90 bg-white/95 shadow-[25px_35px_80px_rgba(15,23,42,0.14),0_0_0_8px_rgba(255,255,255,0.55)]">

//         {/* Dashboard sidebar */}
//         <aside className="w-[175px] shrink-0 border-r border-slate-100 bg-[#f8fafc]/95 px-4 py-6">
//           <div className="mb-7 flex items-center gap-2 px-2">
//             <img
//               src={logo}
//               alt="Laxvira"
//               className="h-8 w-8 rounded-lg object-contain"
//             />
//             <span className="font-serif text-[17px] tracking-[0.14em] text-slate-900">
//               LAXVIRA
//             </span>
//           </div>

//           <div className="space-y-1.5">
//             {sidebarItems.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.name}
//                   className={
//                     item.active
//                       ? 'flex items-center gap-3 rounded-xl bg-[#0f172a] px-3 py-3 text-[10px] font-bold text-white shadow-lg shadow-slate-900/15'
//                       : 'flex items-center gap-3 rounded-xl px-3 py-3 text-[10px] font-semibold text-slate-500'
//                   }
//                 >
//                   <Icon
//                     size={14}
//                     className={item.active ? 'text-amber-500' : ''}
//                   />
//                   <span>{item.name}</span>
//                   {item.active && (
//                     <ChevronRight size={12} className="ml-auto" />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </aside>

//         {/* Dashboard content */}
//         <main className="relative flex min-w-0 flex-1 flex-col bg-white px-6 py-6">
//           {/* top bar */}
//           <div className="mb-5 flex items-center justify-between">
//             <div>
//               <h3 className="text-[25px] font-black tracking-tight text-slate-900">
//                 Dashboard
//               </h3>
//               <p className="mt-0.5 text-[10px] font-medium text-slate-400">
//                 Welcome back, <span className="font-bold text-slate-600">Admin</span> 👋
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="flex h-9 w-36 items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 text-[9px] text-slate-400">
//                 <Search size={12} />
//                 Search anything...
//               </div>

//               <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
//                 <Bell size={14} className="text-slate-500" />
//                 <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
//               </div>

//               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
//                 A
//               </div>
//             </div>
//           </div>

//           {/* KPI cards */}
//           <div className="mb-4 grid grid-cols-4 gap-3">
//             {dashboardStats.map((stat) => {
//               const Icon = stat.icon;

//               return (
//                 <div
//                   key={stat.title}
//                   className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_8px_25px_rgba(15,23,42,0.045)]"
//                 >
//                   <div className="mb-2 flex items-center justify-between">
//                     <p className="text-[8px] font-bold text-slate-400">
//                       {stat.title}
//                     </p>
//                     <Icon size={13} className="text-slate-300" />
//                   </div>

//                   <div className="text-[18px] font-black text-slate-900">
//                     {stat.value}
//                   </div>

//                   <p className={`mt-1 text-[8px] font-bold ${stat.trendClass}`}>
//                     {stat.trend}{' '}
//                     <span className="font-normal text-slate-400">
//                       from last month
//                     </span>
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* chart + activities */}
//           <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_0.8fr] gap-4">
//             <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.045)]">
//               <div className="mb-3 flex items-center justify-between">
//                 <div>
//                   <p className="text-[11px] font-black text-slate-900">
//                     Business Overview
//                   </p>
//                   <p className="text-[8px] text-slate-400">
//                     Revenue, expenses & profit
//                   </p>
//                 </div>

//                 <div className="flex gap-3 text-[7px] font-bold text-slate-400">
//                   <span>Revenue</span>
//                   <span>Expenses</span>
//                   <span>Profit</span>
//                 </div>
//               </div>

//               <div className="relative h-[270px] overflow-hidden rounded-xl bg-slate-50/50">
//                 <svg
//                   className="absolute inset-0 h-full w-full"
//                   viewBox="0 0 100 100"
//                   preserveAspectRatio="none"
//                 >
//                   {[20, 40, 60, 80].map((y) => (
//                     <line
//                       key={y}
//                       x1="0"
//                       x2="100"
//                       y1={y}
//                       y2={y}
//                       stroke="#e2e8f0"
//                       strokeWidth="0.35"
//                     />
//                   ))}

//                   <polyline
//                     points="0,76 17,57 32,67 48,35 65,46 81,19 100,9"
//                     fill="none"
//                     stroke="#0f172a"
//                     strokeWidth="1.5"
//                   />

//                   <polyline
//                     points="0,87 17,76 32,81 48,61 65,71 81,47 100,35"
//                     fill="none"
//                     stroke="#C5A059"
//                     strokeWidth="1.3"
//                   />

//                   <polyline
//                     points="0,93 17,84 32,89 48,74 65,79 81,65 100,57"
//                     fill="none"
//                     stroke="#38bdf8"
//                     strokeWidth="1.1"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.045)]">
//               <div className="mb-4 flex items-center justify-between">
//                 <p className="text-[11px] font-black text-slate-900">
//                   Recent Activities
//                 </p>
//                 <span className="text-[8px] font-bold text-blue-500">
//                   View All
//                 </span>
//               </div>

//               <div className="space-y-4">
//                 {[
//                   ['Invoice #INV-2026-045', 'Paid · 2 min ago'],
//                   ['New Client Added', 'Acme Corporation · 15 min ago'],
//                   ['Payment Received', '₹1,25,000 · 1 hr ago'],
//                   ['Report Generated', 'Monthly Report · 2 hrs ago'],
//                 ].map(([title, subtitle]) => (
//                   <div key={title} className="flex items-center gap-3">
//                     <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
//                       <ClipboardList size={13} />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="truncate text-[8px] font-bold text-slate-700">
//                         {title}
//                       </p>
//                       <p className="mt-0.5 truncate text-[7px] text-slate-400">
//                         {subtitle}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* AI insight card */}
//           <div className="absolute bottom-5 left-[8%] z-30 flex h-[105px] w-[400px] items-center justify-between rounded-2xl border border-slate-700 bg-[#0f172a] px-5 shadow-[0_25px_50px_rgba(15,23,42,0.3)]">
//             <div>
//               <div className="mb-1.5 flex items-center gap-2">
//                 <Sparkles size={12} className="text-amber-500" />
//                 <span className="text-[10px] font-bold text-white">
//                   AI Insight
//                 </span>
//               </div>
//               <p className="max-w-[235px] text-[8px] leading-relaxed text-slate-300">
//                 Your revenue is up by{' '}
//                 <strong className="text-white">18.6%</strong> this month.
//                 Great job! Consider optimizing expenses in Project
//                 "Phoenix".
//               </p>
//             </div>

//             <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_25px_rgba(197,160,89,0.18)]">
//               <Bot size={24} className="text-amber-500" />
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Trial card */}
//       <div className="absolute -bottom-3 right-2 z-40 flex w-[185px] items-center justify-between rounded-2xl border border-white bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
//         <div>
//           <p className="text-[8px] font-bold text-slate-400">Trial Status</p>
//           <p className="mt-1 text-[16px] font-black text-slate-900">
//             3 Days Left
//           </p>
//         </div>
//         <div className="h-9 w-9 rounded-full border-[4px] border-slate-100 border-t-[#C5A059] rotate-45" />
//       </div>
//     </div>
//   );
// };

// /* --------------------------------------------------------------------------
//    LANDING PAGE
//    -------------------------------------------------------------------------- */

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen overflow-x-hidden bg-[#fbfbfa] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">

//       {/* Background */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-50"
//         style={{
//           backgroundImage:
//             'radial-gradient(#e5e7eb 0.8px, transparent 0.8px)',
//           backgroundSize: '36px 36px',
//         }}
//       />

//       <div className="pointer-events-none absolute left-[-300px] top-[160px] h-[700px] w-[700px] rounded-full bg-sky-100/50 blur-[130px]" />
//       <div className="pointer-events-none absolute bottom-[-300px] right-[-200px] h-[700px] w-[700px] rounded-full bg-amber-50/70 blur-[120px]" />

//       {/* NAVBAR */}
//       <nav className="relative z-50 mx-auto flex h-[100px] w-full max-w-[1500px] items-center justify-between px-8 lg:px-16">
//         <Link to="/" className="flex items-center">
//           <img
//             src={logo}
//             alt="Laxvira"
//             className="h-[72px] w-[115px] object-contain"
//           />
//         </Link>

//         <div className="hidden xl:flex items-center gap-9 text-[14px] font-semibold text-slate-700">
//           <a href="#features" className="transition hover:text-amber-600">
//             Features
//           </a>

//           <button className="flex items-center gap-1 transition hover:text-amber-600">
//             Solutions <ChevronDown size={14} />
//           </button>

//           <Link
//             to="/pricing"
//             className="transition hover:text-amber-600"
//           >
//             Pricing
//           </Link>

//           <button className="flex items-center gap-1 transition hover:text-amber-600">
//             Resources <ChevronDown size={14} />
//           </button>

//           <a href="#about" className="transition hover:text-amber-600">
//             About Us
//           </a>

//           <a href="#contact" className="transition hover:text-amber-600">
//             Contact
//           </a>
//         </div>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => navigate('/login')}
//             className="hidden rounded-xl border border-slate-200 bg-white px-7 py-3 text-[13px] font-bold text-slate-800 shadow-[0_5px_18px_rgba(15,23,42,0.04)] transition hover:border-amber-400 hover:text-amber-600 sm:block"
//           >
//             Login
//           </button>

//           <button
//             onClick={() => navigate('/signup')}
//             className="flex items-center gap-3 rounded-xl bg-[#0f172a] px-7 py-3.5 text-[13px] font-bold text-white shadow-[0_12px_25px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-amber-500 active:scale-95"
//           >
//             Start 5-Day Free Trial
//             <ArrowRight size={17} className="text-amber-500" />
//           </button>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section className="relative mx-auto min-h-[700px] w-full max-w-[1500px] px-8 lg:px-16">

//         {/* left content */}
//         <div className="relative z-30 flex w-full flex-col pt-[105px] lg:w-[48%]">

//           <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-amber-100 bg-white px-4 py-2 text-[12px] font-bold text-slate-600 shadow-sm">
//             <Sparkles size={15} className="text-amber-500" />
//             AI-Powered Business & Finance Platform
//           </div>

//           <h1 className="max-w-[650px] text-[66px] font-black leading-[1.02] tracking-[-0.035em] text-[#0f172a] lg:text-[72px]">
//             Smart <span className="text-[#C5A059]">Business.</span>
//             <br />
//             Smarter <span className="text-[#C5A059]">Finance.</span>
//           </h1>

//           <p className="mt-7 max-w-[560px] text-[17px] font-medium leading-[1.7] text-slate-500">
//             Laxvira brings the power of AI to your business operations,
//             finance management, and growth strategy — all in one intelligent
//             platform.
//           </p>

//           <div className="mt-9 flex items-center gap-4">
//             <button
//               onClick={() => navigate('/signup')}
//               className="flex items-center gap-3 rounded-xl bg-[#0f172a] px-7 py-4 text-[13px] font-bold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-amber-500 active:scale-95"
//             >
//               Start 5-Day Free Trial
//               <ArrowRight size={17} className="text-amber-500" />
//             </button>

//             <button
//               onClick={() => navigate('/pricing')}
//               className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-[13px] font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600"
//             >
//               <BarChart3 size={16} className="text-amber-500" />
//               View Pricing
//             </button>
//           </div>

//           <div className="mt-8 flex items-center gap-7 text-[11px] font-bold text-slate-500">
//             <span className="flex items-center gap-1.5">
//               <CheckCircle2 size={15} className="text-[#C5A059]" />
//               No credit card
//             </span>

//             <span className="flex items-center gap-1.5">
//               <CheckCircle2 size={15} className="text-[#C5A059]" />
//               5-day free trial
//             </span>

//             <span className="flex items-center gap-1.5">
//               <CheckCircle2 size={15} className="text-[#C5A059]" />
//               Cancel anytime
//             </span>
//           </div>
//         </div>

//         {/* 3D stage */}
//         <div className="pointer-events-none absolute left-[28%] top-[255px] z-10 h-[560px] w-[720px]">
//           <Canvas
//             camera={{ position: [0, 1.5, 10], fov: 43 }}
//             gl={{ alpha: true, antialias: true }}
//           >
//             <HeroScene />
//           </Canvas>
//         </div>

//         {/* Actual brand mark floating above podium */}
//         <div className="pointer-events-none absolute left-[38%] top-[425px] z-20 -translate-x-1/2">
//           <img
//             src={logo}
//             alt=""
//             className="h-[175px] w-[220px] object-contain drop-shadow-[0_20px_25px_rgba(15,23,42,0.18)]"
//           />
//         </div>

//         {/* dashboard */}
//         <TiltedDashboard />
//       </section>

//       {/* STATS */}
//       <section className="relative z-40 mx-auto -mt-[20px] w-full max-w-[1220px] px-6 pb-20">
//         <div className="flex min-h-[115px] items-center justify-between gap-6 rounded-[28px] border border-slate-100 bg-white/95 px-9 py-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl">

//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
//               <Building2 size={23} className="text-blue-600" />
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">10K+</h4>
//               <p className="text-[11px] font-bold leading-tight text-slate-500">
//                 Businesses
//                 <br />
//                 Empowered
//               </p>
//             </div>
//           </div>

//           <div className="hidden h-12 w-px bg-slate-200 md:block" />

//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
//               <Users size={23} className="text-indigo-600" />
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">50K+</h4>
//               <p className="text-[11px] font-bold text-slate-500">
//                 Active Users
//               </p>
//             </div>
//           </div>

//           <div className="hidden h-12 w-px bg-slate-200 md:block" />

//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50">
//               <ClipboardList size={23} className="text-amber-600" />
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">1M+</h4>
//               <p className="text-[11px] font-bold leading-tight text-slate-500">
//                 Transactions
//                 <br />
//                 Processed
//               </p>
//             </div>
//           </div>

//           <div className="hidden h-12 w-px bg-slate-200 md:block" />

//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50">
//               <ShieldCheck size={23} className="text-emerald-600" />
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">99.9%</h4>
//               <p className="text-[11px] font-bold text-slate-500">
//                 Uptime & Security
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* floating chat */}
//       <button
//         aria-label="Open chat"
//         className="fixed bottom-8 right-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#0f172a] shadow-[0_15px_35px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:bg-amber-500"
//       >
//         <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
//           <path
//             d="M21 11.5C21 16.1944 16.9706 20 12 20C11.127 20 10.2831 19.8863 9.48427 19.6749L4.62002 21.6575C4.28822 21.7928 3.93181 21.4939 4.02011 21.1448L5.16382 16.6214C3.8211 15.2285 3 13.4475 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z"
//             fill="white"
//           />
//           <circle cx="8" cy="11.5" r="1.5" fill="#0f172a" />
//           <circle cx="12" cy="11.5" r="1.5" fill="#0f172a" />
//           <circle cx="16" cy="11.5" r="1.5" fill="#0f172a" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default LandingPage;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Canvas } from '@react-three/fiber';
// import { Environment, Float } from '@react-three/drei';
// import {
//   ArrowRight,
//   ChevronDown,
//   ChevronRight,
//   BarChart3,
//   CheckCircle2,
//   ShieldCheck,
//   Users,
//   Building2,
//   ClipboardList,
//   LayoutDashboard,
//   LineChart,
//   UsersRound,
//   Settings,
//   Bot,
//   Sparkles,
//   Search,
//   Bell,
//   FileText,
//   WalletCards,
//   BriefcaseBusiness,
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// /* --------------------------------------------------------------------------
//    FLOOR — a wide, pale disc the podium stands on, with a thin navy+gold
//    rim that only peeks out at the very edge of the disc (not a big navy
//    blob). Painted first, always z-0, strictly behind everything else.
//    -------------------------------------------------------------------------- */

// const Floor = () => (
//   <div
//     className="pointer-events-none absolute bottom-[-370px] z-0"
//     style={{ left: '39%', transform: 'translateX(-50%)' }}
//   >
//     <div className="relative" style={{ width: 1780, height: 560 }}>
//       {/* rim — offset slightly down/behind so only a thin crescent shows below the top surface */}
//       <div
//         className="absolute inset-0 rounded-[50%]"
//         style={{ top: 30, background: 'linear-gradient(180deg,#22304a 0%,#151d30 100%)' }}
//       />
//       <div
//         className="absolute inset-0 rounded-[50%]"
//         style={{ top: 22, border: '4px solid #C5A059', opacity: 0.9 }}
//       />
//       {/* pale top surface */}
//       <div
//         className="absolute inset-0 rounded-[50%]"
//         style={{ background: '#f7f6f3', boxShadow: '0 -20px 60px rgba(15,23,42,0.05)' }}
//       />
//     </div>
//   </div>
// );

// /* Faint gold guide-ring drawn on the floor around the podium */
// const FloorRing = () => (
//   <div
//     className="pointer-events-none absolute z-[1] rounded-full"
//     style={{
//       left: '39%',
//       bottom: -280,
//       width: 1040,
//       height: 1040,
//       transform: 'translateX(-50%)',
//       border: '1px solid rgba(197,160,89,0.28)',
//     }}
//   />
// );

// /* --------------------------------------------------------------------------
//    RIGHT-SIDE RING + GEM ACCENT — the concentric silver/gold orbital rings
//    and small gold gem/sphere that peek out from behind the dashboard.
//    -------------------------------------------------------------------------- */

// const RightAccent = () => (
//   <div
//     className="pointer-events-none absolute z-0"
//     style={{ right: -80, top: 30, width: 420, height: 640 }}
//   >
//     <div
//       className="absolute rounded-full"
//       style={{
//         right: -160,
//         top: 190,
//         width: 460,
//         height: 460,
//         border: '1.5px solid rgba(197,160,89,0.5)',
//       }}
//     />
//     <div
//       className="absolute rounded-full"
//       style={{
//         right: -100,
//         top: 250,
//         width: 340,
//         height: 340,
//         border: '1.5px solid rgba(180,183,192,0.55)',
//       }}
//     />
//     {/* gold gem */}
//     <div
//       className="absolute rounded-[5px]"
//       style={{
//         right: 40,
//         top: 0,
//         width: 24,
//         height: 24,
//         background: 'linear-gradient(135deg,#f1d9a4,#C5A059)',
//         transform: 'rotate(45deg)',
//         boxShadow: '0 6px 14px rgba(197,160,89,0.35)',
//       }}
//     />
//     {/* small gold sphere */}
//     <div
//       className="absolute rounded-full"
//       style={{
//         right: 14,
//         top: 296,
//         width: 15,
//         height: 15,
//         background: 'radial-gradient(circle at 35% 30%, #f3dca6, #C5A059)',
//       }}
//     />
//   </div>
// );

// /* --------------------------------------------------------------------------
//    TYPOGRAPHIC "LV" LOGO — pure HTML/CSS, no image file.
//    -------------------------------------------------------------------------- */

// const TypographicLogo = () => (
//   <div
//     className="relative flex items-end justify-center select-none pointer-events-none"
//     style={{ width: 460, height: 300 }}
//   >
//     {/* Capital "L" */}
//     <span
//       className="font-serif font-black text-[#0f172a]"
//       style={{ fontSize: '11rem', lineHeight: 0.68, marginRight: '-1.35rem' }}
//     >
//       L
//     </span>
//     {/* lowercase "v" — smaller and shorter than the L, overlapping its right leg,
//         exactly as in the reference monogram */}
//     <span
//       className="font-serif font-black text-[#0f172a] lowercase"
//       style={{ fontSize: '7.4rem', lineHeight: 0.68, marginBottom: '0.15rem' }}
//     >
//       v
//     </span>

//     {/* Gold swoosh flourish sweeping under the L / through the v */}
//     <svg
//       className="absolute overflow-visible"
//       style={{ left: 6, bottom: 32, width: 250, height: 92 }}
//       viewBox="0 0 250 92"
//       fill="none"
//     >
//       <path d="M2,74 C58,104 155,90 244,6" stroke="#C5A059" strokeWidth="7" strokeLinecap="round" />
//     </svg>

//     {/* Gold ascending bars */}
//     <div className="absolute flex items-end gap-2" style={{ right: 32, bottom: 72 }}>
//       <span className="bg-[#C5A059] rounded-[2px]" style={{ width: 9, height: 32 }} />
//       <span className="bg-[#C5A059] rounded-[2px]" style={{ width: 9, height: 56 }} />
//       <span className="bg-[#C5A059] rounded-[2px]" style={{ width: 9, height: 82 }} />
//     </div>

//     {/* Thick gold arrow shaft + triangular head */}
//     <svg
//       className="absolute overflow-visible"
//       style={{ right: -14, top: -2, width: 170, height: 170 }}
//       viewBox="0 0 170 170"
//       fill="none"
//     >
//       <line x1="12" y1="158" x2="128" y2="32" stroke="#C5A059" strokeWidth="15" strokeLinecap="round" />
//       <polygon points="103,16 156,16 156,66" fill="#C5A059" />
//     </svg>
//   </div>
// );

// /* --------------------------------------------------------------------------
//    3D PODIUM SCENE
//    -------------------------------------------------------------------------- */

// const HeroScene = () => {
//   return (
//     <>
//       <ambientLight intensity={2.2} />
//       <directionalLight position={[6, 10, 8]} intensity={3} color="#ffffff" castShadow />
//       <directionalLight position={[-6, 6, -4]} intensity={1.2} color="#C5A059" />
//       <Environment preset="studio" />

//       <group position={[0, -2, 0]}>
//         <mesh position={[0, -0.35, 0]}>
//           <cylinderGeometry args={[4.7, 5.1, 0.35, 96]} />
//           <meshStandardMaterial color="#ffffff" metalness={0.05} roughness={0.18} />
//         </mesh>

//         <mesh position={[0, -0.05, 0]}>
//           <cylinderGeometry args={[3.8, 4.05, 0.18, 96]} />
//           <meshStandardMaterial color="#C5A059" metalness={0.85} roughness={0.18} />
//         </mesh>

//         <mesh position={[0, 0.3, 0]}>
//           <cylinderGeometry args={[3.55, 3.7, 0.55, 96]} />
//           <meshStandardMaterial color="#111827" metalness={0.55} roughness={0.25} />
//         </mesh>

//         <mesh position={[0, 0.61, 0]}>
//           <cylinderGeometry args={[3.62, 3.62, 0.08, 96]} />
//           <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.12} />
//         </mesh>

//         <mesh position={[0, 0.67, 0]}>
//           <cylinderGeometry args={[3.45, 3.45, 0.06, 96]} />
//           <meshStandardMaterial color="#1e293b" />
//         </mesh>
//       </group>

//       <Float speed={1.4} rotationIntensity={0.25} floatIntensity={1.4}>
//         <mesh position={[-3.3, 2.7, -1]}>
//           <sphereGeometry args={[0.32, 32, 32]} />
//           <meshStandardMaterial color="#ffffff" metalness={0.15} roughness={0.08} clearcoat={1} />
//         </mesh>
//       </Float>
//     </>
//   );
// };

// /* --------------------------------------------------------------------------
//    DASHBOARD MOCKUP
//    -------------------------------------------------------------------------- */

// const dashboardStats = [
//   { title: 'Total Revenue', value: '₹24.8L', trend: '+18.6%', trendClass: 'text-emerald-500', icon: BarChart3 },
//   { title: 'Total Expenses', value: '₹12.6L', trend: '-6.2%', trendClass: 'text-rose-500', icon: WalletCards },
//   { title: 'Net Profit', value: '₹12.2L', trend: '+24.8%', trendClass: 'text-emerald-500', icon: LineChart },
//   { title: 'Cash Flow', value: '₹8.4L', trend: '+15.3%', trendClass: 'text-emerald-500', icon: BriefcaseBusiness },
// ];

// const sidebarItems = [
//   { name: 'Dashboard', icon: LayoutDashboard, active: true },
//   { name: 'Analytics', icon: LineChart },
//   { name: 'Sales', icon: BarChart3 },
//   { name: 'Finance', icon: Building2 },
//   { name: 'Clients', icon: UsersRound },
//   { name: 'Projects', icon: ClipboardList },
//   { name: 'Reports', icon: FileText },
//   { name: 'AI Insights', icon: Sparkles },
//   { name: 'Settings', icon: Settings },
// ];

// const TiltedDashboard = () => {
//   return (
//     <div
//       className="absolute right-[-3%] top-[7%] z-20 h-[660px] w-[860px] pointer-events-none select-none"
//       style={{
//         transform: 'perspective(1800px) rotateY(-11deg) rotateX(2deg) rotateZ(-0.5deg)',
//         transformStyle: 'preserve-3d',
//       }}
//     >
//       <div className="relative flex h-full w-full overflow-hidden rounded-[2.5rem] border border-white/90 bg-white/95 shadow-[25px_35px_80px_rgba(15,23,42,0.14),0_0_0_8px_rgba(255,255,255,0.55)]">

//         <aside className="w-[175px] shrink-0 border-r border-slate-100 bg-[#f8fafc]/95 px-4 py-6">
//           <div className="mb-7 flex items-center gap-2 px-2">
//             <img src={logo} alt="Laxvira" className="h-8 w-8 rounded-lg object-contain" />
//             <span className="font-serif text-[17px] tracking-[0.14em] text-slate-900">LAXVIRA</span>
//           </div>

//           <div className="space-y-1.5">
//             {sidebarItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.name}
//                   className={
//                     item.active
//                       ? 'flex items-center gap-3 rounded-xl bg-[#0f172a] px-3 py-3 text-[10px] font-bold text-white shadow-lg shadow-slate-900/15'
//                       : 'flex items-center gap-3 rounded-xl px-3 py-3 text-[10px] font-semibold text-slate-500'
//                   }
//                 >
//                   <Icon size={14} className={item.active ? 'text-amber-500' : ''} />
//                   <span>{item.name}</span>
//                   {item.active && <ChevronRight size={12} className="ml-auto" />}
//                 </div>
//               );
//             })}
//           </div>
//         </aside>

//         <main className="relative flex min-w-0 flex-1 flex-col bg-white px-6 py-6">
//           <div className="mb-5 flex items-center justify-between">
//             <div>
//               <h3 className="text-[25px] font-black tracking-tight text-slate-900">Dashboard</h3>
//               <p className="mt-0.5 text-[10px] font-medium text-slate-400">
//                 Welcome back, <span className="font-bold text-slate-600">Admin</span> 👋
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="flex h-9 w-36 items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 text-[9px] text-slate-400">
//                 <Search size={12} />
//                 Search anything...
//               </div>
//               <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
//                 <Bell size={14} className="text-slate-500" />
//                 <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
//               </div>
//               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">A</div>
//             </div>
//           </div>

//           <div className="mb-4 grid grid-cols-4 gap-3">
//             {dashboardStats.map((stat) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={stat.title} className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_8px_25px_rgba(15,23,42,0.045)]">
//                   <div className="mb-2 flex items-center justify-between">
//                     <p className="text-[8px] font-bold text-slate-400">{stat.title}</p>
//                     <Icon size={13} className="text-slate-300" />
//                   </div>
//                   <div className="text-[18px] font-black text-slate-900">{stat.value}</div>
//                   <p className={`mt-1 text-[8px] font-bold ${stat.trendClass}`}>
//                     {stat.trend} <span className="font-normal text-slate-400">from last month</span>
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_0.8fr] gap-4">
//             <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.045)]">
//               <div className="mb-3 flex items-center justify-between">
//                 <div>
//                   <p className="text-[11px] font-black text-slate-900">Business Overview</p>
//                   <p className="text-[8px] text-slate-400">Revenue, expenses & profit</p>
//                 </div>
//                 <div className="flex gap-3 text-[7px] font-bold text-slate-400">
//                   <span>Revenue</span>
//                   <span>Expenses</span>
//                   <span>Profit</span>
//                 </div>
//               </div>

//               <div className="relative h-[270px] overflow-hidden rounded-xl bg-slate-50/50">
//                 <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                   {[20, 40, 60, 80].map((y) => (
//                     <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#e2e8f0" strokeWidth="0.35" />
//                   ))}
//                   <polyline points="0,76 17,57 32,67 48,35 65,46 81,19 100,9" fill="none" stroke="#0f172a" strokeWidth="1.5" />
//                   <polyline points="0,87 17,76 32,81 48,61 65,71 81,47 100,35" fill="none" stroke="#C5A059" strokeWidth="1.3" />
//                   <polyline points="0,93 17,84 32,89 48,74 65,79 81,65 100,57" fill="none" stroke="#38bdf8" strokeWidth="1.1" />
//                 </svg>
//               </div>
//             </div>

//             <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.045)]">
//               <div className="mb-4 flex items-center justify-between">
//                 <p className="text-[11px] font-black text-slate-900">Recent Activities</p>
//                 <span className="text-[8px] font-bold text-blue-500">View All</span>
//               </div>

//               <div className="space-y-4">
//                 {[
//                   ['Invoice #INV-2026-045', 'Paid · 2 min ago'],
//                   ['New Client Added', 'Acme Corporation · 15 min ago'],
//                   ['Payment Received', '₹1,25,000 · 1 hr ago'],
//                   ['Report Generated', 'Monthly Report · 2 hrs ago'],
//                 ].map(([title, subtitle]) => (
//                   <div key={title} className="flex items-center gap-3">
//                     <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
//                       <ClipboardList size={13} />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="truncate text-[8px] font-bold text-slate-700">{title}</p>
//                       <p className="mt-0.5 truncate text-[7px] text-slate-400">{subtitle}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="absolute bottom-5 left-[8%] z-30 flex h-[105px] w-[400px] items-center justify-between rounded-2xl border border-slate-700 bg-[#0f172a] px-5 shadow-[0_25px_50px_rgba(15,23,42,0.3)]">
//             <div>
//               <div className="mb-1.5 flex items-center gap-2">
//                 <Sparkles size={12} className="text-amber-500" />
//                 <span className="text-[10px] font-bold text-white">AI Insight</span>
//               </div>
//               <p className="max-w-[235px] text-[8px] leading-relaxed text-slate-300">
//                 Your revenue is up by <strong className="text-white">18.6%</strong> this month. Great job! Consider optimizing expenses in Project "Phoenix".
//               </p>
//             </div>
//             <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_25px_rgba(197,160,89,0.18)]">
//               <Bot size={24} className="text-amber-500" />
//             </div>
//           </div>
//         </main>
//       </div>

//       <div className="absolute -bottom-3 right-2 z-40 flex w-[185px] items-center justify-between rounded-2xl border border-white bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
//         <div>
//           <p className="text-[8px] font-bold text-slate-400">Trial Status</p>
//           <p className="mt-1 text-[16px] font-black text-slate-900">3 Days Left</p>
//         </div>
//         <div className="h-9 w-9 rounded-full border-[4px] border-slate-100 border-t-[#C5A059] rotate-45" />
//       </div>
//     </div>
//   );
// };

// /* --------------------------------------------------------------------------
//    LANDING PAGE
//    -------------------------------------------------------------------------- */

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen overflow-x-hidden bg-[#fbfbfa] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">

//       <div
//         className="pointer-events-none absolute inset-0 opacity-50"
//         style={{ backgroundImage: 'radial-gradient(#e5e7eb 0.8px, transparent 0.8px)', backgroundSize: '36px 36px' }}
//       />
//       <div className="pointer-events-none absolute left-[-300px] top-[160px] h-[700px] w-[700px] rounded-full bg-sky-100/50 blur-[130px]" />
//       <div className="pointer-events-none absolute bottom-[-300px] right-[-200px] h-[700px] w-[700px] rounded-full bg-amber-50/70 blur-[120px]" />

//       {/* NAVBAR */}
//       <nav className="relative z-50 mx-auto flex h-[100px] w-full max-w-[1500px] items-center justify-between px-8 lg:px-16">
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Laxvira" className="h-[72px] w-[115px] object-contain" />
//         </Link>

//         <div className="hidden xl:flex items-center gap-9 text-[14px] font-semibold text-slate-700">
//           <a href="#features" className="transition hover:text-amber-600">Features</a>
//           <button className="flex items-center gap-1 transition hover:text-amber-600">Solutions <ChevronDown size={14} /></button>
//           <Link to="/pricing" className="transition hover:text-amber-600">Pricing</Link>
//           <button className="flex items-center gap-1 transition hover:text-amber-600">Resources <ChevronDown size={14} /></button>
//           <a href="#about" className="transition hover:text-amber-600">About Us</a>
//           <a href="#contact" className="transition hover:text-amber-600">Contact</a>
//         </div>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => navigate('/login')}
//             className="hidden rounded-xl border border-slate-200 bg-white px-7 py-3 text-[13px] font-bold text-slate-800 shadow-[0_5px_18px_rgba(15,23,42,0.04)] transition hover:border-amber-400 hover:text-amber-600 sm:block"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => navigate('/signup')}
//             className="flex items-center gap-3 rounded-xl bg-[#0f172a] px-7 py-3.5 text-[13px] font-bold text-white shadow-[0_12px_25px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-amber-500 active:scale-95"
//           >
//             Start 5-Day Free Trial
//             <ArrowRight size={17} className="text-amber-500" />
//           </button>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section className="relative mx-auto min-h-[880px] w-full max-w-[1500px] px-8 lg:px-16">

//         <Floor />
//         <FloorRing />
//         <RightAccent />

//         {/* left content */}
//         <div className="relative z-30 flex w-full flex-col pt-[85px] lg:w-[46%]">
//           <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-amber-100 bg-white px-4 py-2 text-[12px] font-bold text-slate-600 shadow-sm">
//             <Sparkles size={15} className="text-amber-500" />
//             AI-Powered Business & Finance Platform
//           </div>

//           <h1 className="max-w-[650px] text-[66px] font-black leading-[1.02] tracking-[-0.035em] text-[#0f172a] lg:text-[72px]">
//             Smart <span className="text-[#C5A059]">Business.</span>
//             <br />
//             Smarter <span className="text-[#C5A059]">Finance.</span>
//           </h1>

//           <p className="mt-7 max-w-[560px] text-[17px] font-medium leading-[1.7] text-slate-500">
//             Laxvira brings the power of AI to your business operations, finance management, and growth strategy — all in one intelligent platform.
//           </p>

//           <div className="mt-9 flex items-center gap-4">
//             <button
//               onClick={() => navigate('/signup')}
//               className="flex items-center gap-3 rounded-xl bg-[#0f172a] px-7 py-4 text-[13px] font-bold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-amber-500 active:scale-95"
//             >
//               Start 5-Day Free Trial
//               <ArrowRight size={17} className="text-amber-500" />
//             </button>
//             <button
//               onClick={() => navigate('/pricing')}
//               className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-[13px] font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600"
//             >
//               <BarChart3 size={16} className="text-amber-500" />
//               View Pricing
//             </button>
//           </div>

//           <div className="mt-8 flex items-center gap-7 text-[11px] font-bold text-slate-500">
//             <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]" /> No credit card</span>
//             <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]" /> 5-day free trial</span>
//             <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]" /> Cancel anytime</span>
//           </div>
//         </div>

//         {/* Typographic LV logo + 3D podium — one flex column so the logo
//             always sits directly above the podium. */}
//         <div className="pointer-events-none absolute left-[39%] top-[160px] z-20 flex -translate-x-1/2 flex-col items-center">
//           <TypographicLogo />
//           <div className="-mt-4 h-[360px] w-[460px]">
//             <Canvas camera={{ position: [0, 1.6, 10.5], fov: 40 }} gl={{ alpha: true, antialias: true }}>
//               <HeroScene />
//             </Canvas>
//           </div>
//         </div>

//         <TiltedDashboard />
//       </section>

//       {/* STATS */}
//       <section className="relative z-40 mx-auto -mt-[20px] w-full max-w-[1220px] px-6 pb-20">
//         <div className="flex min-h-[115px] items-center justify-between gap-6 rounded-[28px] border border-slate-100 bg-white/95 px-9 py-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl">

//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
//               <Building2 size={23} className="text-blue-600" />
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">10K+</h4>
//               <p className="text-[11px] font-bold leading-tight text-slate-500">Businesses<br />Empowered</p>
//             </div>
//           </div>

//           <div className="hidden h-12 w-px bg-slate-200 md:block" />

//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50">
//               <Users size={23} className="text-indigo-600" />
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">50K+</h4>
//               <p className="text-[11px] font-bold text-slate-500">Active Users</p>
//             </div>
//           </div>

//           <div className="hidden h-12 w-px bg-slate-200 md:block" />

//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50">
//               <ClipboardList size={23} className="text-amber-600" />
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">1M+</h4>
//               <p className="text-[11px] font-bold leading-tight text-slate-500">Transactions<br />Processed</p>
//             </div>
//           </div>

//           <div className="hidden h-12 w-px bg-slate-200 md:block" />

//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50">
//               <ShieldCheck size={23} className="text-emerald-600" />
//             </div>
//             <div>
//               <h4 className="text-2xl font-black text-slate-900">99.9%</h4>
//               <p className="text-[11px] font-bold text-slate-500">Uptime & Security</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <button
//         aria-label="Open chat"
//         className="fixed bottom-8 right-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#0f172a] shadow-[0_15px_35px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:bg-amber-500"
//       >
//         <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
//           <path
//             d="M21 11.5C21 16.1944 16.9706 20 12 20C11.127 20 10.2831 19.8863 9.48427 19.6749L4.62002 21.6575C4.28822 21.7928 3.93181 21.4939 4.02011 21.1448L5.16382 16.6214C3.8211 15.2285 3 13.4475 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z"
//             fill="white"
//           />
//           <circle cx="8" cy="11.5" r="1.5" fill="#0f172a" />
//           <circle cx="12" cy="11.5" r="1.5" fill="#0f172a" />
//           <circle cx="16" cy="11.5" r="1.5" fill="#0f172a" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default LandingPage;
// import React, { useEffect } from 'react';

// import { Link, useNavigate } from 'react-router-dom';

// import {

//   ArrowRight, ChevronDown, ChevronRight, BarChart3, CheckCircle2,

//   ShieldCheck, Users, Building2, ClipboardList, LayoutDashboard, LineChart,

//   UsersRound, Settings, Bot, Sparkles, Search, Bell, FileText,

//   WalletCards, BriefcaseBusiness, Zap

// } from 'lucide-react';

// import logo from '../assets/logo.jpg';



// const GOLD = '#C5A059';

// const NAVY = '#0f172a';



// /* --------------------------------------------------------------------------

//    DASHBOARD MOCKUP

//    -------------------------------------------------------------------------- */

// const stats = [

//   ['Total Revenue','₹24.8L','+18.6%',BarChart3,'text-emerald-500'],

//   ['Total Expenses','₹12.6L','-6.2%',WalletCards,'text-rose-500'],

//   ['Net Profit','₹12.2L','+24.8%',LineChart,'text-emerald-500'],

//   ['Cash Flow','₹8.4L','+15.3%',BriefcaseBusiness,'text-emerald-500'],

// ];



// const side = [

//   ['Dashboard',LayoutDashboard,true],['Analytics',LineChart],['Sales',BarChart3],['Finance',Building2],

//   ['Clients',UsersRound],['Projects',ClipboardList],['Reports',FileText],['AI Insights',Sparkles],['Settings',Settings],

// ];



// const Dashboard = () => (

//   <div

//     className="pointer-events-none relative w-full select-none"

//     style={{

//       maxWidth: '820px',

//       margin: '0 auto',

//       height: '590px',

//       transform: 'perspective(2000px) rotateY(-25deg) rotateX(5deg) scale(1.05)',

//       left: '180px',

//       transformOrigin: 'center center',

//       transformStyle: 'preserve-3d'

//     }}

//   >

//     <div className="absolute -inset-3 rounded-[42px] border border-white/80 bg-white/35 shadow-[0_40px_90px_rgba(15,23,42,.12)] backdrop-blur-md" />

//     <div className="relative flex h-full w-full overflow-hidden rounded-[31px] border border-white bg-white/95 shadow-[24px_35px_80px_rgba(15,23,42,.15),0_0_0_7px_rgba(255,255,255,.4)]">

     

//       <aside className="w-[178px] shrink-0 border-r border-slate-100 bg-[#f7f9fc] px-4 py-6">

//         <div className="mb-7 flex items-center gap-2 px-2"><img src={logo} alt="Laxvira" className="h-8 w-8 rounded-lg object-contain mix-blend-multiply"/><span className="font-serif text-[16px] tracking-[.13em]">LAXVIRA</span></div>

//         <div className="space-y-1.5">{side.map(([name,Icon,active])=><div key={name} className={active?'flex items-center gap-3 rounded-xl bg-[#0f172a] px-3 py-3 text-[10px] font-bold text-white shadow-lg':'flex items-center gap-3 rounded-xl px-3 py-3 text-[10px] font-semibold text-slate-500'}><Icon size={14} className={active?'text-amber-500':''}/><span>{name}</span>{active&&<ChevronRight size={12} className="ml-auto"/>}</div>)}</div>

//       </aside>



//       <main className="relative flex min-w-0 flex-1 flex-col bg-white px-7 py-6">

//         <div className="mb-5 flex items-center justify-between">

//           <div><h3 className="text-[24px] font-black tracking-tight">Dashboard</h3><p className="mt-0.5 text-[10px] text-slate-400">Welcome back, <b className="text-slate-600">Admin</b> 👋</p></div>

//           <div className="flex items-center gap-3">

//             <div className="flex h-9 w-36 items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 text-[9px] text-slate-400"><Search size={12}/>Search anything...</div>

//             <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 shadow-sm"><Bell size={14} className="text-slate-500"/><i className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-rose-500"/></div>

//             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">A</div>

//           </div>

//         </div>

       

//         <div className="mb-4 grid grid-cols-4 gap-3">

//           {stats.map(([title,value,trend,Icon,trendClass])=>

//             <div key={title} className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_8px_25px_rgba(15,23,42,.03)]">

//               <div className="mb-2 flex items-center justify-between"><p className="text-[8px] font-bold text-slate-400">{title}</p><Icon size={13} className="text-slate-300"/></div>

//               <div className="text-[18px] font-black">{value}</div>

//               <p className={`mt-1 text-[8px] font-bold ${trendClass}`}>{trend} <span className="font-normal text-slate-400">from last month</span></p>

//             </div>

//           )}

//         </div>

       

//         <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_.8fr] gap-4">

//           <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,.03)]">

//             <div className="mb-3 flex items-center justify-between">

//               <div><p className="text-[11px] font-black">Business Overview</p></div>

//               <div className="flex gap-3 text-[7px] font-bold text-slate-400"><span>Revenue</span><span>Expenses</span><span>Profit</span></div>

//             </div>

//             <div className="relative h-[220px] overflow-hidden rounded-xl bg-slate-50/50">

//               <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">

//                 {[20,40,60,80].map(y=><line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#e2e8f0" strokeWidth=".35"/>)}

//                 <polyline points="0,76 17,57 32,67 48,35 65,46 81,19 100,9" fill="none" stroke="#0f172a" strokeWidth="1.5"/>

//                 <polyline points="0,87 17,76 32,81 48,61 65,71 81,47 100,35" fill="none" stroke="#C5A059" strokeWidth="1.3"/>

//                 <polyline points="0,93 17,84 32,89 48,74 65,79 81,65 100,57" fill="none" stroke="#38bdf8" strokeWidth="1.1"/>

//               </svg>

//             </div>

//           </div>

         

//           <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,.03)]">

//             <div className="mb-4 flex items-center justify-between"><p className="text-[11px] font-black">Recent Activities</p><span className="text-[8px] font-bold text-blue-500">View All</span></div>

//             <div className="space-y-4">

//               {[['Invoice #INV-2026-045','Paid · 2 min ago'],['New Client Added','Acme Corporation · 15 min ago'],['Payment Received','₹1,25,000 · 1 hr ago'],['Report Generated','Monthly Report · 2 hrs ago']].map(([a,b])=>

//                 <div key={a} className="flex items-center gap-3">

//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600"><ClipboardList size={13}/></div>

//                   <div className="min-w-0"><p className="truncate text-[8px] font-bold text-slate-700">{a}</p><p className="truncate text-[7px] text-slate-400">{b}</p></div>

//                 </div>

//               )}

//             </div>

//           </div>

//         </div>

       

//         <div className="absolute bottom-5 left-[7%] z-30 flex h-[100px] w-[380px] items-center justify-between rounded-2xl border border-slate-700 bg-[#0f172a] px-5 shadow-[0_25px_55px_rgba(15,23,42,.35)]">

//           <div>

//             <div className="mb-1.5 flex items-center gap-2"><Sparkles size={12} className="text-[#C5A059]"/><span className="text-[10px] font-bold text-white">AI Insight</span></div>

//             <p className="max-w-[220px] text-[8px] leading-relaxed text-slate-300">Your revenue is up by <strong className="text-white">18.6%</strong> this month. Great job! Consider optimizing expenses in Project "Phoenix".</p>

//           </div>

//           <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_15px_rgba(197,160,89,0.15)]"><Bot size={22} className="text-[#C5A059]"/></div>

//         </div>

//       </main>

//     </div>

   

//     <div className="absolute -bottom-4 right-0 z-50 flex w-[170px] items-center justify-between rounded-2xl border border-white bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,.2)]">

//       <div><p className="text-[8px] font-bold text-slate-400">Trial Status</p><p className="mt-1 text-[15px] font-black">3 Days Left</p></div>

//       <div className="h-9 w-9 rounded-full border-[3px] border-slate-100" style={{borderTopColor:GOLD,borderRightColor:GOLD,transform:'rotate(38deg)'}}/>

//     </div>

//   </div>

// );



// const Stat = ({Icon,value,children}) => (

//   <div className="flex items-center gap-4">

//     <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-[0_6px_18px_rgba(15,23,42,.05)]"><Icon size={22} className="text-[#0f172a]"/></div>

//     <div><h4 className="text-[24px] font-black leading-none">{value}</h4><p className="mt-2 text-[11px] font-bold leading-tight text-slate-500">{children}</p></div>

//   </div>

// );

// const Divider = () => <div className="hidden h-12 w-px bg-slate-200 lg:block"/>;



// /* --------------------------------------------------------------------------

//    FEATURE CARD COMPONENT

//    -------------------------------------------------------------------------- */

// const FeatureCard = ({ icon: Icon, title, desc }) => (

//   <div className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A059]/30 hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)]">

//     <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 border border-amber-100 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">

//       <Icon size={24} />

//     </div>

//     <h3 className="mb-3 text-2xl font-black text-slate-900">{title}</h3>

//     <p className="text-sm font-medium leading-relaxed text-slate-500">{desc}</p>

//   </div>

// );



// /* --------------------------------------------------------------------------

//    MAIN LANDING PAGE

//    -------------------------------------------------------------------------- */

// const LandingPage = () => {

//   const navigate = useNavigate();



//   useEffect(() => {

//     const observer = new IntersectionObserver((entries) => {

//       entries.forEach(entry => {

//         if (entry.isIntersecting) {

//           entry.target.classList.add('opacity-100', 'translate-y-0');

//           entry.target.classList.remove('opacity-0', 'translate-y-16');

//         }

//       });

//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });



//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

//     return () => observer.disconnect();

//   }, []);



//   return (

//     <div className="relative min-h-screen overflow-x-hidden bg-[#fbfaf8] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">

//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(255,255,255,.98),rgba(251,250,248,.95)_48%,rgba(247,249,252,.96)_100%)]"/>

//       <div className="pointer-events-none absolute inset-0 opacity-[.42]" style={{backgroundImage:'radial-gradient(#dfe4eb .72px, transparent .72px)',backgroundSize:'36px 36px'}}/>

     

//       {/* Logo Watermark Background */}

//       <div className="pointer-events-none absolute top-[8%] left-[47%] z-0 -translate-x-1/2 w-full max-w-[700px] opacity-[0.76] mix-blend-multiply"
      
//       >

//         <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />

//       </div>



//       <div className="pointer-events-none absolute left-[-220px] top-[230px] h-[650px] w-[650px] rounded-full bg-sky-100/55 blur-[135px]"/>

//       <div className="pointer-events-none absolute right-[-260px] top-[270px] h-[650px] w-[650px] rounded-full bg-sky-100/45 blur-[145px]"/>

//       <div className="pointer-events-none absolute bottom-[-300px] right-[-180px] h-[600px] w-[600px] rounded-full bg-amber-50/70 blur-[120px]"/>



//       <nav className="relative z-[100] mx-auto flex h-[108px] w-full max-w-[1500px] items-center justify-between pl-6 lg:pl-[32px] pr-8 lg:pr-[58px]">

//         <Link to="/" className="flex items-center" ><img src={logo} alt="Laxvira" className="h-[76px] w-[116px] object-contain mix-blend-multiply"/></Link>

//         <div className="hidden items-center gap-[38px] text-[14px] font-semibold text-[#172238] xl:flex">

//           <a href="#features" className="hover:text-[#C5A059] transition-colors">Features</a>

//           <button className="flex items-center gap-1 hover:text-[#C5A059] transition-colors">Solutions <ChevronDown size={14}/></button>

//           <Link to="/pricing" className="hover:text-[#C5A059] transition-colors">Pricing</Link>

//           <button className="flex items-center gap-1 hover:text-[#C5A059] transition-colors">Resources <ChevronDown size={14}/></button>

//           <a href="#about" className="hover:text-[#C5A059] transition-colors">About Us</a>

//           <a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a>

//         </div>

//         <div className="flex items-center gap-4">

//           <button onClick={()=>navigate('/login')} className="hidden rounded-xl border border-slate-200 bg-white px-[25px] py-[12px] text-[13px] font-bold hover:border-[#C5A059] hover:text-[#C5A059] transition-all sm:block">Login</button>

//           <button onClick={()=>navigate('/signup')} className="flex items-center gap-3 rounded-xl bg-[#0f172a] px-[24px] py-[14px] text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(15,23,42,.18)] hover:bg-[#C5A059] transition-colors active:scale-95">Start 5-Day Free Trial <ArrowRight size={17} className="text-[#0f172a]"/></button>

//         </div>

//       </nav>



//       {/* --- HERO SECTION --- */}

//       <section className="relative mx-auto w-full max-w-[1500px] pl-6 lg:pl-[32px] pr-8 lg:pr-[58px] pt-8 pb-24">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">

         

//           {/* Foreground Content (Left Column) */}

//           <div className="relative z-40 flex w-full flex-col reveal opacity-0 translate-y-16 pt-12 lg:pt-0"
//           style={{ left: '-50px' }}
//           >


//             <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#f2dfb1] bg-white/95 px-4 py-[8px] text-[12px] font-bold text-[#526078] shadow-sm">

//               <Sparkles size={15} className="text-[#C5A059]"/>AI-Powered Business &amp; Finance Platform

//             </div>

//             <h1 className="max-w-[650px] text-[56px] font-black leading-[1.015] tracking-[-.042em] text-[#0d172b] lg:text-[68px]">

//               Smart <span className="text-[#C5A059]">Business.</span><br/>Smarter <span className="text-[#C5A059]">Finance.</span>

//             </h1>

//             <p className="mt-7 max-w-[535px] text-[16px] font-medium leading-[1.72] text-[#687892]">

//               Laxvira brings the power of AI to your business operations, finance management, and growth strategy — all in one intelligent platform.

//             </p>

//             <div className="mt-9 flex flex-wrap items-center gap-4">

//               <button onClick={()=>navigate('/signup')} className="flex items-center gap-3 rounded-xl bg-[#0f172a] hover:bg-[#C5A059] transition-all px-[25px] py-[15px] text-[13px] font-bold text-white hover:text-[#0f172a] shadow-xl active:scale-95 group">

//                 Start 5-Day Free Trial <ArrowRight size={17} className="text-[#C5A059] group-hover:text-[#0f172a]"/>

//               </button>

//               <button onClick={()=>navigate('/pricing')} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-[25px] py-[15px] text-[13px] font-bold hover:border-[#C5A059] transition-all">

//                 <BarChart3 size={16} className="text-[#C5A059]"/>View Pricing

//               </button>

//             </div>

//             <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[11px] font-bold text-[#687892]">

//               <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>No credit card</span>

//               <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>5-day free trial</span>

//               <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>Cancel anytime</span>

//             </div>

//           </div>



//           {/* Dashboard Mockup (Right Column) */}

//           <div className="relative reveal opacity-0 translate-y-16 hidden lg:block z-30" style={{ transitionDelay: '200ms' }}>

//             <Dashboard />

//           </div>

//         </div>

//       </section>



//       {/* --- STATS BANNER --- */}

//       <section className="relative z-50 mx-auto -mt-12 w-full max-w-[1210px] px-5 reveal opacity-0 translate-y-16">

//         <div className="flex min-h-[112px] flex-col md:flex-row items-center justify-between gap-5 rounded-[27px] border border-slate-100 bg-white/95 px-9 py-5 shadow-[0_22px_60px_rgba(15,23,42,.06)] backdrop-blur-xl">

//           <Stat Icon={Building2} value="10K+">Businesses<br/>Empowered</Stat><Divider/>

//           <Stat Icon={Users} value="50K+">Active Users</Stat><Divider/>

//           <Stat Icon={ClipboardList} value="1M+">Transactions<br/>Processed</Stat><Divider/>

//           <Stat Icon={ShieldCheck} value="99.9%">Uptime &amp; Security</Stat>

//         </div>

//       </section>



//       {/* --- FEATURES SECTION --- */}

//       <section id="features" className="relative z-40 mx-auto w-full max-w-[1400px] px-8 py-32 lg:px-16">

//         <div className="mb-16 text-center reveal opacity-0 translate-y-16">

//            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Enterprise-Grade Infrastructure.</h2>

//            <p className="mt-5 text-slate-500 font-medium max-w-2xl mx-auto text-lg">We provide cutting-edge tools to optimize your operational performance across every department.</p>

//         </div>

       

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//            <div className="reveal opacity-0 translate-y-16">

//              <FeatureCard

//                icon={BarChart3}

//                title="Predictive Analytics"

//                desc="Gain foresight into market trends with our machine-learning driven data parsing engine. Make decisions backed by real-time intelligence."

//              />

//            </div>

//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '100ms' }}>

//              <FeatureCard

//                icon={ShieldCheck}

//                title="Automated Compliance"

//                desc="Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits. Peace of mind built into the core."

//              />

//            </div>

//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '200ms' }}>

//              <FeatureCard

//                icon={Zap}

//                title="Fraud Detection"

//                desc="Protect your assets proactively with our real-time anomaly detection heuristics and impenetrable ledger locks."

//              />

//            </div>

//         </div>

//       </section>



//       {/* --- SIMPLE FOOTER --- */}

//       <footer className="relative border-t border-slate-200 bg-white pt-16 pb-8">

//         <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">

//           <div className="flex items-center gap-3 mb-6 md:mb-0">

//              <img src={logo} alt="Laxvira" className="h-10 w-auto object-contain mix-blend-multiply" />

//              <span className="font-black text-slate-900 tracking-widest text-lg">LAXVIRA</span>

//           </div>

//           <div className="flex gap-8 text-sm font-bold text-slate-500">

//              <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>

//              <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a>

//              <a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a>

//           </div>

//         </div>

//         <div className="mt-8 text-center text-xs font-medium text-slate-400">

//           © 2026 Laxvira Systems. All rights reserved.

//         </div>

//       </footer>



//       {/* Floating Chat Button */}

//       <button aria-label="Open chat" className="fixed bottom-7 right-7 z-[200] flex h-[55px] w-[55px] items-center justify-center rounded-full border-2 border-white bg-[#0f172a] shadow-xl hover:bg-[#C5A059] hover:-translate-y-1 transition-all duration-300">

//         <svg width="23" height="23" viewBox="0 0 24 24" fill="none">

//           <path d="M21 11.5C21 16.1944 16.9706 20 12 20C11.127 20 10.2831 19.8863 9.48427 19.6749L4.62002 21.6575C4.28822 21.7928 3.93181 21.4939 4.02011 21.1448L5.16382 16.6214C3.8211 15.2285 3 13.4475 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" fill="white"/>

//           <circle cx="8" cy="11.5" r="1.5" fill="#0f172a"/><circle cx="12" cy="11.5" r="1.5" fill="#0f172a"/><circle cx="16" cy="11.5" r="1.5" fill="#0f172a"/>

//         </svg>

//       </button>

//     </div>

//   );

// };



// export default LandingPage;

// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   ArrowRight, ChevronDown, ChevronRight, BarChart3, CheckCircle2,
//   ShieldCheck, Users, Building2, ClipboardList, LayoutDashboard, LineChart,
//   UsersRound, Settings, Bot, Sparkles, Search, Bell, FileText,
//   WalletCards, BriefcaseBusiness, Zap, Server, Database, Globe
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// const GOLD = '#C5A059';
// const NAVY = '#0f172a';

// /* --------------------------------------------------------------------------
//    DASHBOARD MOCKUP
//    -------------------------------------------------------------------------- */
// const stats = [
//   ['Total Revenue','₹24.8L','+18.6%',BarChart3,'text-emerald-500'],
//   ['Total Expenses','₹12.6L','-6.2%',WalletCards,'text-rose-500'],
//   ['Net Profit','₹12.2L','+24.8%',LineChart,'text-emerald-500'],
//   ['Cash Flow','₹8.4L','+15.3%',BriefcaseBusiness,'text-emerald-500'],
// ];

// const side = [
//   ['Dashboard',LayoutDashboard,true],['Analytics',LineChart],['Sales',BarChart3],['Finance',Building2],
//   ['Clients',UsersRound],['Projects',ClipboardList],['Reports',FileText],['AI Insights',Sparkles],['Settings',Settings],
// ];

// const Dashboard = () => (
//   <div
//     className="pointer-events-none relative w-full select-none"
//     style={{
//       maxWidth: '820px',
//       margin: '0 auto',
//       height: '590px',
//       left: '180px',
//       transform: 'perspective(2000px) rotateY(-25deg) rotateX(5deg) scale(1.05)',
//       transformOrigin: 'center center',
//       transformStyle: 'preserve-3d'
//     }}
//   >
//     <div className="absolute -inset-3 rounded-[42px] border border-white/80 bg-white/35 shadow-[0_40px_90px_rgba(15,23,42,.12)] backdrop-blur-md" />
//     <div className="relative flex h-full w-full overflow-hidden rounded-[31px] border border-white bg-white/95 shadow-[24px_35px_80px_rgba(15,23,42,.15),0_0_0_7px_rgba(255,255,255,.4)]">
      
//       <aside className="w-[178px] shrink-0 border-r border-slate-100 bg-[#f7f9fc] px-4 py-6">
//         <div className="mb-7 flex items-center gap-2 px-2"><img src={logo} alt="Laxvira" className="h-8 w-8 rounded-lg object-contain mix-blend-multiply"/><span className="font-serif text-[16px] tracking-[.13em]">LAXVIRA</span></div>
//         <div className="space-y-1.5">{side.map(([name,Icon,active])=><div key={name} className={active?'flex items-center gap-3 rounded-xl bg-[#0f172a] px-3 py-3 text-[10px] font-bold text-white shadow-lg':'flex items-center gap-3 rounded-xl px-3 py-3 text-[10px] font-semibold text-slate-500'}><Icon size={14} className={active?'text-amber-500':''}/><span>{name}</span>{active&&<ChevronRight size={12} className="ml-auto"/>}</div>)}</div>
//       </aside>

//       <main className="relative flex min-w-0 flex-1 flex-col bg-white px-7 py-6">
//         <div className="mb-5 flex items-center justify-between">
//           <div><h3 className="text-[24px] font-black tracking-tight">Dashboard</h3><p className="mt-0.5 text-[10px] text-slate-400">Welcome back, <b className="text-slate-600">Admin</b> 👋</p></div>
//           <div className="flex items-center gap-3">
//             <div className="flex h-9 w-36 items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 text-[9px] text-slate-400"><Search size={12}/>Search anything...</div>
//             <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 shadow-sm"><Bell size={14} className="text-slate-500"/><i className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-rose-500"/></div>
//             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">A</div>
//           </div>
//         </div>
        
//         <div className="mb-4 grid grid-cols-4 gap-3">
//           {stats.map(([title,value,trend,Icon,trendClass])=>
//             <div key={title} className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_8px_25px_rgba(15,23,42,.03)]">
//               <div className="mb-2 flex items-center justify-between"><p className="text-[8px] font-bold text-slate-400">{title}</p><Icon size={13} className="text-slate-300"/></div>
//               <div className="text-[18px] font-black">{value}</div>
//               <p className={`mt-1 text-[8px] font-bold ${trendClass}`}>{trend} <span className="font-normal text-slate-400">from last month</span></p>
//             </div>
//           )}
//         </div>
        
//         <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_.8fr] gap-4">
//           <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,.03)]">
//             <div className="mb-3 flex items-center justify-between">
//               <div><p className="text-[11px] font-black">Business Overview</p></div>
//               <div className="flex gap-3 text-[7px] font-bold text-slate-400"><span>Revenue</span><span>Expenses</span><span>Profit</span></div>
//             </div>
//             <div className="relative h-[220px] overflow-hidden rounded-xl bg-slate-50/50">
//               <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                 {[20,40,60,80].map(y=><line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#e2e8f0" strokeWidth=".35"/>)}
//                 <polyline points="0,76 17,57 32,67 48,35 65,46 81,19 100,9" fill="none" stroke="#0f172a" strokeWidth="1.5"/>
//                 <polyline points="0,87 17,76 32,81 48,61 65,71 81,47 100,35" fill="none" stroke="#C5A059" strokeWidth="1.3"/>
//                 <polyline points="0,93 17,84 32,89 48,74 65,79 81,65 100,57" fill="none" stroke="#38bdf8" strokeWidth="1.1"/>
//               </svg>
//             </div>
//           </div>
          
//           <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,.03)]">
//             <div className="mb-4 flex items-center justify-between"><p className="text-[11px] font-black">Recent Activities</p><span className="text-[8px] font-bold text-blue-500">View All</span></div>
//             <div className="space-y-4">
//               {[['Invoice #INV-2026-045','Paid · 2 min ago'],['New Client Added','Acme Corporation · 15 min ago'],['Payment Received','₹1,25,000 · 1 hr ago'],['Report Generated','Monthly Report · 2 hrs ago']].map(([a,b])=>
//                 <div key={a} className="flex items-center gap-3">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600"><ClipboardList size={13}/></div>
//                   <div className="min-w-0"><p className="truncate text-[8px] font-bold text-slate-700">{a}</p><p className="truncate text-[7px] text-slate-400">{b}</p></div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
        
//         <div className="absolute bottom-5 left-[7%] z-30 flex h-[100px] w-[380px] items-center justify-between rounded-2xl border border-slate-700 bg-[#0f172a] px-5 shadow-[0_25px_55px_rgba(15,23,42,.35)]">
//           <div>
//             <div className="mb-1.5 flex items-center gap-2"><Sparkles size={12} className="text-[#C5A059]"/><span className="text-[10px] font-bold text-white">AI Insight</span></div>
//             <p className="max-w-[220px] text-[8px] leading-relaxed text-slate-300">Your revenue is up by <strong className="text-white">18.6%</strong> this month. Great job! Consider optimizing expenses in Project "Phoenix".</p>
//           </div>
//           <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_15px_rgba(197,160,89,0.15)]"><Bot size={22} className="text-[#C5A059]"/></div>
//         </div>
//       </main>
//     </div>
    
//     <div className="absolute -bottom-4 right-0 z-50 flex w-[170px] items-center justify-between rounded-2xl border border-white bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,.2)]">
//       <div><p className="text-[8px] font-bold text-slate-400">Trial Status</p><p className="mt-1 text-[15px] font-black">3 Days Left</p></div>
//       <div className="h-9 w-9 rounded-full border-[3px] border-slate-100" style={{borderTopColor:GOLD,borderRightColor:GOLD,transform:'rotate(38deg)'}}/>
//     </div>
//   </div>
// );

// const Stat = ({Icon,value,children}) => (
//   <div className="flex items-center gap-4">
//     <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-[0_6px_18px_rgba(15,23,42,.05)]"><Icon size={22} className="text-[#0f172a]"/></div>
//     <div><h4 className="text-[24px] font-black leading-none">{value}</h4><p className="mt-2 text-[11px] font-bold leading-tight text-slate-500">{children}</p></div>
//   </div>
// );
// const Divider = () => <div className="hidden h-12 w-px bg-slate-200 lg:block"/>;

// /* --------------------------------------------------------------------------
//    FEATURE & COMPANY CARD COMPONENTS
//    -------------------------------------------------------------------------- */
// const FeatureCard = ({ icon: Icon, title, desc }) => (
//   <div className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A059]/30 hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
//     <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 border border-amber-100 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
//       <Icon size={24} />
//     </div>
//     <h3 className="mb-3 text-2xl font-black text-slate-900">{title}</h3>
//     <p className="text-sm font-medium leading-relaxed text-slate-500">{desc}</p>
//   </div>
// );

// const CompanyCard = ({ icon: Icon, title, desc }) => (
//   <div className="group rounded-[2rem] border border-slate-800 bg-[#0f172a] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A059]/50 hover:shadow-[0_30px_60px_rgba(197,160,89,0.1)]">
//     <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
//       <Icon size={24} />
//     </div>
//     <h3 className="mb-3 text-2xl font-black text-white">{title}</h3>
//     <p className="text-sm font-medium leading-relaxed text-slate-400">{desc}</p>
//   </div>
// );

// /* --------------------------------------------------------------------------
//    MAIN LANDING PAGE
//    -------------------------------------------------------------------------- */
// const LandingPage = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-16');
//         }
//       });
//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     // <div className="relative min-h-screen overflow-x-hidden bg-[#fbfaf8] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
//     <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#fbfaf8] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
//       {/* Dynamic Easing for Butter-Smooth Scroll Flow */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .reveal { transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
//       `}} />

//       {/* --- BACKGROUND LAYER (Clipped to prevent scroll bleed) --- */}

//       {/* Dynamic Easing and Continuous Watermark Animation */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .reveal { transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        
//         @keyframes logoHighway {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-highway {
//           display: flex;
//           width: max-content;
//           animation: logoHighway 18s linear infinite;
//         }
//       `}} />

// <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(255,255,255,.98),rgba(251,250,248,.95)_48%,rgba(247,249,252,.96)_100%)]"/>
//   <div className="absolute inset-0 opacity-[.42]" style={{backgroundImage:'radial-gradient(#dfe4eb .72px, transparent .72px)',backgroundSize:'36px 36px'}}/>
  
//   <div className="absolute left-[-220px] top-[230px] h-[650px] w-[650px] rounded-full bg-sky-100/55 blur-[135px]"/>
//   <div className="absolute right-[-260px] top-[270px] h-[650px] w-[650px] rounded-full bg-sky-100/45 blur-[145px]"/>
//   <div className="absolute bottom-[-300px] right-[-180px] h-[600px] w-[600px] rounded-full bg-amber-50/70 blur-[120px]"/>
// </div>

// {/* Logo Watermark Background (Kept outside so 'fixed' works correctly) */}
// <div className="pointer-events-none fixed top-1/2 left-[47%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] opacity-[0.75] mix-blend-multiply">
//   <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />
// </div>

//       {/* <div className="pointer-events-none absolute left-[-220px] top-[230px] h-[650px] w-[650px] rounded-full bg-sky-100/55 blur-[135px]"/>
//       <div className="pointer-events-none absolute right-[-260px] top-[270px] h-[650px] w-[650px] rounded-full bg-sky-100/45 blur-[145px]"/>
//       <div className="pointer-events-none absolute bottom-[-300px] right-[-180px] h-[600px] w-[600px] rounded-full bg-amber-50/70 blur-[120px]"/> */}

//       <nav className="relative z-[100] mx-auto flex h-[108px] w-full max-w-[1500px] items-center justify-between pl-6 lg:pl-[32px] pr-8 lg:pr-[58px]">
//         <Link to="/" className="flex items-center" ><img src={logo} alt="Laxvira" className="h-[76px] w-[116px] object-contain mix-blend-multiply"/></Link>
//         <div className="hidden items-center gap-[38px] text-[14px] font-semibold text-[#172238] xl:flex">
//           <a href="#features" className="hover:text-[#C5A059] transition-colors">Features</a>
//           <button className="flex items-center gap-1 hover:text-[#C5A059] transition-colors">Solutions <ChevronDown size={14}/></button>
//           <Link to="/pricing" className="hover:text-[#C5A059] transition-colors">Pricing</Link>
//           <button className="flex items-center gap-1 hover:text-[#C5A059] transition-colors">Resources <ChevronDown size={14}/></button>
//           <a href="#about" className="hover:text-[#C5A059] transition-colors">About Us</a>
//           <a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a>
//         </div>
//         <div className="flex items-center gap-4">
//           <button onClick={()=>navigate('/login')} className="hidden rounded-xl border border-slate-200 bg-white px-[25px] py-[12px] text-[13px] font-bold hover:border-[#C5A059] hover:text-[#C5A059] transition-all sm:block">Login</button>
//           <button onClick={()=>navigate('/signup')} className="flex items-center gap-3 rounded-xl bg-[#0f172a] px-[24px] py-[14px] text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(15,23,42,.18)] hover:bg-[#C5A059] transition-colors active:scale-95">Start 5-Day Free Trial <ArrowRight size={17} className="text-[#0f172a]"/></button>
//         </div>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <section className="relative mx-auto w-full max-w-[1500px] pl-6 lg:pl-[32px] pr-8 lg:pr-[58px] pt-8 pb-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
//           {/* Foreground Content (Left Column) */}
//           <div className="relative z-40 flex w-full flex-col reveal opacity-0 translate-y-16 pt-12 lg:pt-0" style={{ left: '-50px' }}>
//             <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#f2dfb1] bg-white/95 px-4 py-[8px] text-[12px] font-bold text-[#526078] shadow-sm">
//               <Sparkles size={15} className="text-[#C5A059]"/>AI-Powered Business &amp; Finance Platform
//             </div>
//             <h1 className="max-w-[650px] text-[56px] font-black leading-[1.015] tracking-[-.042em] text-[#0d172b] lg:text-[68px]">
//               Smart <span className="text-[#C5A059]">Business.</span><br/>Smarter <span className="text-[#C5A059]">Finance.</span>
//             </h1>
//             <p className="mt-7 max-w-[535px] text-[16px] font-medium leading-[1.72] text-[#687892]">
//               Laxvira brings the power of AI to your business operations, finance management, and growth strategy — all in one intelligent platform.
//             </p>
//             <div className="mt-9 flex flex-wrap items-center gap-4">
//               <button onClick={()=>navigate('/signup')} className="flex items-center gap-3 rounded-xl bg-[#0f172a] hover:bg-[#C5A059] transition-all px-[25px] py-[15px] text-[13px] font-bold text-white hover:text-[#0f172a] shadow-xl active:scale-95 group">
//                 Start 5-Day Free Trial <ArrowRight size={17} className="text-[#C5A059] group-hover:text-[#0f172a]"/>
//               </button>
//               <button onClick={()=>navigate('/pricing')} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-[25px] py-[15px] text-[13px] font-bold hover:border-[#C5A059] transition-all">
//                 <BarChart3 size={16} className="text-[#C5A059]"/>View Pricing
//               </button>
//             </div>
//             <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[11px] font-bold text-[#687892]">
//               <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>No credit card</span>
//               <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>5-day free trial</span>
//               <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>Cancel anytime</span>
//             </div>
//           </div>

//           {/* Dashboard Mockup (Right Column) */}
//           <div className="relative reveal opacity-0 translate-y-16 hidden lg:block z-30" style={{ transitionDelay: '200ms' }}>
//             <Dashboard />
//           </div>
//         </div>
//       </section>

//       {/* --- STATS BANNER --- */}
//       <section className="relative z-50 mx-auto -mt-12 w-full max-w-[1210px] px-5 reveal opacity-0 translate-y-16">
//         <div className="flex min-h-[112px] flex-col md:flex-row items-center justify-between gap-5 rounded-[27px] border border-slate-100 bg-white/95 px-9 py-5 shadow-[0_22px_60px_rgba(15,23,42,.06)] backdrop-blur-xl">
//           <Stat Icon={Building2} value="10K+">Businesses<br/>Empowered</Stat><Divider/>
//           <Stat Icon={Users} value="50K+">Active Users</Stat><Divider/>
//           <Stat Icon={ClipboardList} value="1M+">Transactions<br/>Processed</Stat><Divider/>
//           <Stat Icon={ShieldCheck} value="99.9%">Uptime &amp; Security</Stat>
//         </div>
//       </section>

//       {/* --- FEATURES SECTION --- */}
//       <section id="features" className="relative z-40 mx-auto w-full max-w-[1400px] px-8 pt-32 pb-16 lg:px-16">
//         <div className="mb-16 text-center reveal opacity-0 translate-y-16">
//            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Enterprise-Grade Workflows.</h2>
//            <p className="mt-5 text-slate-500 font-medium max-w-2xl mx-auto text-lg">We provide cutting-edge tools to optimize your operational performance across every department.</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//            <div className="reveal opacity-0 translate-y-16">
//              <FeatureCard
//                icon={BarChart3}
//                title="Predictive Analytics"
//                desc="Gain foresight into market trends with our machine-learning driven data parsing engine. Make decisions backed by real-time intelligence."
//              />
//            </div>
//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '150ms' }}>
//              <FeatureCard
//                icon={ShieldCheck}
//                title="Automated Compliance"
//                desc="Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits. Peace of mind built into the core."
//              />
//            </div>
//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '300ms' }}>
//              <FeatureCard
//                icon={Zap}
//                title="Fraud Detection"
//                desc="Protect your assets proactively with our real-time anomaly detection heuristics and impenetrable ledger locks."
//              />
//            </div>
//         </div>
//       </section>

//       {/* --- COMPANY INFORMATION / ARCHITECTURE SECTION --- */}
//       <section id="architecture" className="relative z-40 mx-auto w-full max-w-[1400px] px-8 pb-32 lg:px-16">
//         <div className="mb-16 text-center reveal opacity-0 translate-y-16">
//            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Engineered for Scale.</h2>
//            <p className="mt-5 text-slate-500 font-medium max-w-2xl mx-auto text-lg">Robust, distributed microservices designed to handle enterprise data loads with zero downtime.</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//            <div className="reveal opacity-3 translate-y-16">
//              <CompanyCard
//                icon={Server}
//                title="Microservice Architecture"
//                desc="Built on a distributed, decoupled architecture allowing for independent scaling and failure isolation across all system nodes."
//              />
//            </div>
//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '150ms' }}>
//              <CompanyCard
//                icon={Database}
//                title="ACID Data Integrity"
//                desc="Immutable ledgers and rigid transactional states ensure your financial data remains accurate, auditable, and secure at all times."
//              />
//            </div>
//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '300ms' }}>
//              <CompanyCard
//                icon={Globe}
//                title="Global Availability"
//                desc="Deployed across multi-region availability zones, ensuring low-latency routing and continuous operation regardless of geographic load."
//              />
//            </div>
//         </div>
//       </section>

//       {/* --- SIMPLE FOOTER --- */}
//       <footer className="relative mt-auto w-full overflow-hidden border-t border-slate-200 bg-white pt-16 pb-8">
//         {/* Angled Flowing Logo Watermark
//         <div className="pointer-events-none absolute -right-10 -bottom-10 z-0 opacity-[0.06] mix-blend-multiply transform rotate-[-15deg]">
//           <img src={logo} alt="Footer Watermark" className="w-[350px] h-auto object-contain" />
//         </div>
        
//         <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
//           <div className="flex items-center gap-3 mb-6 md:mb-0">
//              <img src={logo} alt="Laxvira" className="h-10 w-auto object-contain mix-blend-multiply" />
//              <span className="font-black text-slate-900 tracking-widest text-lg">LAXVIRA</span>
//           </div>
//           <div className="flex gap-8 text-sm font-bold text-slate-500">
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a>
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-xs font-medium text-slate-400">
//           © 2026 Laxvira Systems. All rights reserved.
//         </div> */}
//         {/* Continuously Moving Angled Logo Watermark
//         <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.06] mix-blend-multiply">
//           <div className="animate-watermark-flow whitespace-nowrap">
//             <img src={logo} alt="Footer Watermark" className="w-[350px] h-auto object-contain inline-block" />
//           </div>
//         </div>

//         <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between relative z-10">
//           <div className="flex items-center gap-3 mb-6 md:mb-0">
//              <img src={logo} alt="Laxvira" className="h-10 w-auto object-contain mix-blend-multiply" />
//              <span className="font-black text-slate-900 tracking-widest text-lg">LAXVIRA</span>
//           </div>
//           <div className="flex gap-8 text-sm font-bold text-slate-500">
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a>
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-xs font-medium text-slate-400 relative z-10">
//           © 2026 Laxvira Systems. All rights reserved.
//         </div> */}
//         {/* Continuous Logo Highway Watermark */}
//         <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.20] mix-blend-multiply transform rotate-[-12deg] scale-125">
//           <div className="animate-highway flex gap-16">
//             {/* Duplicated array ensures a seamless, infinite loop without snapping */}
//             {[...Array(2)].map((_, i) => (
//               <div key={i} className="flex gap-16 items-center shrink-0">
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between relative z-10">
//           <div className="flex items-center gap-3 mb-6 md:mb-0">
//              <img src={logo} alt="Laxvira" className="h-10 w-auto object-contain mix-blend-multiply" />
//              <span className="font-black text-slate-900 tracking-widest text-lg">LAXVIRA</span>
//           </div>
//           <div className="flex gap-8 text-sm font-bold text-slate-500">
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a>
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-xs font-medium text-slate-400 relative z-10">
//           © 2026 Laxvira Systems. All rights reserved.
//         </div>
//       </footer>

//       {/* Floating Chat Button */}
//       <button aria-label="Open chat" className="fixed bottom-7 right-7 z-[200] flex h-[55px] w-[55px] items-center justify-center rounded-full border-2 border-white bg-[#0f172a] shadow-xl hover:bg-[#C5A059] hover:-translate-y-1 transition-all duration-300">
//         <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
//           <path d="M21 11.5C21 16.1944 16.9706 20 12 20C11.127 20 10.2831 19.8863 9.48427 19.6749L4.62002 21.6575C4.28822 21.7928 3.93181 21.4939 4.02011 21.1448L5.16382 16.6214C3.8211 15.2285 3 13.4475 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" fill="white"/>
//           <circle cx="8" cy="11.5" r="1.5" fill="#0f172a"/><circle cx="12" cy="11.5" r="1.5" fill="#0f172a"/><circle cx="16" cy="11.5" r="1.5" fill="#0f172a"/>
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   ArrowRight, ChevronDown, ChevronRight, BarChart3, CheckCircle2,
//   ShieldCheck, Users, Building2, ClipboardList, LayoutDashboard, LineChart,
//   UsersRound, Settings, Bot, Sparkles, Search, Bell, FileText,
//   WalletCards, BriefcaseBusiness, Zap, Server, Database, Globe
// } from 'lucide-react';
// import logo from '../assets/logo.jpg';

// const GOLD = '#C5A059';
// const NAVY = '#0f172a';

// /* --------------------------------------------------------------------------
//    DASHBOARD MOCKUP
//    -------------------------------------------------------------------------- */
// const stats = [
//   ['Total Revenue','₹24.8L','+18.6%',BarChart3,'text-emerald-500'],
//   ['Total Expenses','₹12.6L','-6.2%',WalletCards,'text-rose-500'],
//   ['Net Profit','₹12.2L','+24.8%',LineChart,'text-emerald-500'],
//   ['Cash Flow','₹8.4L','+15.3%',BriefcaseBusiness,'text-emerald-500'],
// ];

// const side = [
//   ['Dashboard',LayoutDashboard,true],['Analytics',LineChart],['Sales',BarChart3],['Finance',Building2],
//   ['Clients',UsersRound],['Projects',ClipboardList],['Reports',FileText],['AI Insights',Sparkles],['Settings',Settings],
// ];

// const Dashboard = () => (
//   <div
//     className="pointer-events-none relative w-full select-none"
//     style={{
//       maxWidth: '820px',
//       margin: '0 auto',
//       height: '590px',
//       left: '180px',
//       transform: 'perspective(2000px) rotateY(-25deg) rotateX(5deg) scale(1.05)',
//       transformOrigin: 'center center',
//       transformStyle: 'preserve-3d'
//     }}
//   >
//     <div className="absolute -inset-3 rounded-[42px] border border-white/80 bg-white/35 shadow-[0_40px_90px_rgba(15,23,42,.12)] backdrop-blur-md" />
//     <div className="relative flex h-full w-full overflow-hidden rounded-[31px] border border-white bg-white/95 shadow-[24px_35px_80px_rgba(15,23,42,.15),0_0_0_7px_rgba(255,255,255,.4)]">
      
//       <aside className="w-[178px] shrink-0 border-r border-slate-100 bg-[#f7f9fc] px-4 py-6">
//         <div className="mb-7 flex items-center gap-2 px-2"><img src={logo} alt="Laxvira" className="h-8 w-8 rounded-lg object-contain mix-blend-multiply"/><span className="font-serif text-[16px] tracking-[.13em]">LAXVIRA</span></div>
//         <div className="space-y-1.5">{side.map(([name,Icon,active])=><div key={name} className={active?'flex items-center gap-3 rounded-xl bg-[#0f172a] px-3 py-3 text-[10px] font-bold text-white shadow-lg':'flex items-center gap-3 rounded-xl px-3 py-3 text-[10px] font-semibold text-slate-500'}><Icon size={14} className={active?'text-amber-500':''}/><span>{name}</span>{active&&<ChevronRight size={12} className="ml-auto"/>}</div>)}</div>
//       </aside>

//       <main className="relative flex min-w-0 flex-1 flex-col bg-white px-7 py-6">
//         <div className="mb-5 flex items-center justify-between">
//           <div><h3 className="text-[24px] font-black tracking-tight">Dashboard</h3><p className="mt-0.5 text-[10px] text-slate-400">Welcome back, <b className="text-slate-600">Admin</b> 👋</p></div>
//           <div className="flex items-center gap-3">
//             <div className="flex h-9 w-36 items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 text-[9px] text-slate-400"><Search size={12}/>Search anything...</div>
//             <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 shadow-sm"><Bell size={14} className="text-slate-500"/><i className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-rose-500"/></div>
//             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">A</div>
//           </div>
//         </div>
        
//         <div className="mb-4 grid grid-cols-4 gap-3">
//           {stats.map(([title,value,trend,Icon,trendClass])=>
//             <div key={title} className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_8px_25px_rgba(15,23,42,.03)]">
//               <div className="mb-2 flex items-center justify-between"><p className="text-[8px] font-bold text-slate-400">{title}</p><Icon size={13} className="text-slate-300"/></div>
//               <div className="text-[18px] font-black">{value}</div>
//               <p className={`mt-1 text-[8px] font-bold ${trendClass}`}>{trend} <span className="font-normal text-slate-400">from last month</span></p>
//             </div>
//           )}
//         </div>
        
//         <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_.8fr] gap-4">
//           <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,.03)]">
//             <div className="mb-3 flex items-center justify-between">
//               <div><p className="text-[11px] font-black">Business Overview</p></div>
//               <div className="flex gap-3 text-[7px] font-bold text-slate-400"><span>Revenue</span><span>Expenses</span><span>Profit</span></div>
//             </div>
//             <div className="relative h-[220px] overflow-hidden rounded-xl bg-slate-50/50">
//               <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                 {[20,40,60,80].map(y=><line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#e2e8f0" strokeWidth=".35"/>)}
//                 <polyline points="0,76 17,57 32,67 48,35 65,46 81,19 100,9" fill="none" stroke="#0f172a" strokeWidth="1.5"/>
//                 <polyline points="0,87 17,76 32,81 48,61 65,71 81,47 100,35" fill="none" stroke="#C5A059" strokeWidth="1.3"/>
//                 <polyline points="0,93 17,84 32,89 48,74 65,79 81,65 100,57" fill="none" stroke="#38bdf8" strokeWidth="1.1"/>
//               </svg>
//             </div>
//           </div>
          
//           <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,.03)]">
//             <div className="mb-4 flex items-center justify-between"><p className="text-[11px] font-black">Recent Activities</p><span className="text-[8px] font-bold text-blue-500">View All</span></div>
//             <div className="space-y-4">
//               {[['Invoice #INV-2026-045','Paid · 2 min ago'],['New Client Added','Acme Corporation · 15 min ago'],['Payment Received','₹1,25,000 · 1 hr ago'],['Report Generated','Monthly Report · 2 hrs ago']].map(([a,b])=>
//                 <div key={a} className="flex items-center gap-3">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600"><ClipboardList size={13}/></div>
//                   <div className="min-w-0"><p className="truncate text-[8px] font-bold text-slate-700">{a}</p><p className="truncate text-[7px] text-slate-400">{b}</p></div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
        
//         <div className="absolute bottom-5 left-[7%] z-30 flex h-[100px] w-[380px] items-center justify-between rounded-2xl border border-slate-700 bg-[#0f172a] px-5 shadow-[0_25px_55px_rgba(15,23,42,.35)]">
//           <div>
//             <div className="mb-1.5 flex items-center gap-2"><Sparkles size={12} className="text-[#C5A059]"/><span className="text-[10px] font-bold text-white">AI Insight</span></div>
//             <p className="max-w-[220px] text-[8px] leading-relaxed text-slate-300">Your revenue is up by <strong className="text-white">18.6%</strong> this month. Great job! Consider optimizing expenses in Project "Phoenix".</p>
//           </div>
//           <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_15px_rgba(197,160,89,0.15)]"><Bot size={22} className="text-[#C5A059]"/></div>
//         </div>
//       </main>
//     </div>
    
//     <div className="absolute -bottom-4 right-0 z-50 flex w-[170px] items-center justify-between rounded-2xl border border-white bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,.2)]">
//       <div><p className="text-[8px] font-bold text-slate-400">Trial Status</p><p className="mt-1 text-[15px] font-black">3 Days Left</p></div>
//       <div className="h-9 w-9 rounded-full border-[3px] border-slate-100" style={{borderTopColor:GOLD,borderRightColor:GOLD,transform:'rotate(38deg)'}}/>
//     </div>
//   </div>
// );

// const Stat = ({Icon,value,children}) => (
//   <div className="flex items-center gap-4">
//     <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-[0_6px_18px_rgba(15,23,42,.05)]"><Icon size={22} className="text-[#0f172a]"/></div>
//     <div><h4 className="text-[24px] font-black leading-none">{value}</h4><p className="mt-2 text-[11px] font-bold leading-tight text-slate-500">{children}</p></div>
//   </div>
// );
// const Divider = () => <div className="hidden h-12 w-px bg-slate-200 lg:block"/>;

// /* --------------------------------------------------------------------------
//    FEATURE & COMPANY CARD COMPONENTS
//    -------------------------------------------------------------------------- */
// const FeatureCard = ({ icon: Icon, title, desc }) => (
//   <div className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A059]/30 hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
//     <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 border border-amber-100 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
//       <Icon size={24} />
//     </div>
//     <h3 className="mb-3 text-2xl font-black text-slate-900">{title}</h3>
//     <p className="text-sm font-medium leading-relaxed text-slate-500">{desc}</p>
//   </div>
// );

// const CompanyCard = ({ icon: Icon, title, desc }) => (
//   <div className="group rounded-[2rem] border border-slate-800 bg-[#0f172a] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A059]/50 hover:shadow-[0_30px_60px_rgba(197,160,89,0.1)]">
//     <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
//       <Icon size={24} />
//     </div>
//     <h3 className="mb-3 text-2xl font-black text-white">{title}</h3>
//     <p className="text-sm font-medium leading-relaxed text-slate-400">{desc}</p>
//   </div>
// );

// /* --------------------------------------------------------------------------
//    MAIN LANDING PAGE
//    -------------------------------------------------------------------------- */
// const LandingPage = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//           entry.target.classList.remove('opacity-0', 'translate-y-16');
//         }
//       });
//     }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

//     document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#fbfaf8] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
//       {/* Dynamic Easing for Butter-Smooth Scroll Flow */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .reveal { transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
//       `}} />

//       {/* --- BACKGROUND LAYER (Clipped to prevent scroll bleed) --- */}

//       {/* Dynamic Easing and Continuous Watermark Animation */}
//       <style dangerouslySetInnerHTML={{__html: `
//         .reveal { transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        
//         @keyframes logoHighway {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-highway {
//           display: flex;
//           width: max-content;
//           animation: logoHighway 18s linear infinite;
//         }
//       `}} />

// <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//   <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(255,255,255,.98),rgba(251,250,248,.95)_48%,rgba(247,249,252,.96)_100%)]"/>
//   <div className="absolute inset-0 opacity-[.42]" style={{backgroundImage:'radial-gradient(#dfe4eb .72px, transparent .72px)',backgroundSize:'36px 36px'}}/>
  
//   <div className="absolute left-[-220px] top-[230px] h-[650px] w-[650px] rounded-full bg-sky-100/55 blur-[135px]"/>
//   <div className="absolute right-[-260px] top-[270px] h-[650px] w-[650px] rounded-full bg-sky-100/45 blur-[145px]"/>
//   <div className="absolute bottom-[-300px] right-[-180px] h-[600px] w-[600px] rounded-full bg-amber-50/70 blur-[120px]"/>
// </div>

// {/* Logo Watermark Background (Kept outside so 'fixed' works correctly) */}
// <div className="pointer-events-none fixed top-1/2 left-[47%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] opacity-[0.75] mix-blend-multiply">
//   <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />
// </div>

//       <nav className="relative z-[100] mx-auto flex h-[108px] w-full max-w-[1500px] items-center justify-between pl-6 lg:pl-[32px] pr-8 lg:pr-[58px]">
//         <Link to="/" className="flex items-center" ><img src={logo} alt="Laxvira" className="h-[76px] w-[116px] object-contain mix-blend-multiply"/></Link>
//         <div className="hidden items-center gap-[38px] text-[14px] font-semibold text-[#172238] xl:flex">
//           <a href="#features" className="hover:text-[#C5A059] transition-colors">Features</a>
//           <button className="flex items-center gap-1 hover:text-[#C5A059] transition-colors">Solutions <ChevronDown size={14}/></button>
//           <Link to="/pricing" className="hover:text-[#C5A059] transition-colors">Pricing</Link>
//           <button className="flex items-center gap-1 hover:text-[#C5A059] transition-colors">Resources <ChevronDown size={14}/></button>
//           <a href="#about" className="hover:text-[#C5A059] transition-colors">About Us</a>
//           <a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a>
//         </div>
//         <div className="flex items-center gap-4">
//           <button onClick={()=>navigate('/login')} className="hidden rounded-xl border border-slate-200 bg-white px-[25px] py-[12px] text-[13px] font-bold hover:border-[#C5A059] hover:text-[#C5A059] transition-all sm:block">Login</button>
//           <button onClick={()=>navigate('/signup')} className="flex items-center gap-3 rounded-xl bg-[#0f172a] px-[24px] py-[14px] text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(15,23,42,.18)] hover:bg-[#C5A059] transition-colors active:scale-95">Start 5-Day Free Trial <ArrowRight size={17} className="text-[#0f172a]"/></button>
//         </div>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <section className="relative mx-auto w-full max-w-[1500px] pl-6 lg:pl-[32px] pr-8 lg:pr-[58px] pt-8 pb-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
//           {/* Foreground Content (Left Column) */}
//           <div className="relative z-40 flex w-full flex-col reveal opacity-0 translate-y-16 pt-12 lg:pt-0" style={{ left: '-50px' }}>
//             <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#f2dfb1] bg-white/95 px-4 py-[8px] text-[12px] font-bold text-[#526078] shadow-sm">
//               <Sparkles size={15} className="text-[#C5A059]"/>AI-Powered Business &amp; Finance Platform
//             </div>
//             <h1 className="max-w-[650px] text-[56px] font-black leading-[1.015] tracking-[-.042em] text-[#0d172b] lg:text-[68px]">
//               Smart <span className="text-[#C5A059]">Business.</span><br/>Smarter <span className="text-[#C5A059]">Finance.</span>
//             </h1>
//             <p className="mt-7 max-w-[535px] text-[16px] font-medium leading-[1.72] text-[#687892]">
//               Laxvira brings the power of AI to your business operations, finance management, and growth strategy — all in one intelligent platform.
//             </p>
//             <div className="mt-9 flex flex-wrap items-center gap-4">
//               <button onClick={()=>navigate('/signup')} className="flex items-center gap-3 rounded-xl bg-[#0f172a] hover:bg-[#C5A059] transition-all px-[25px] py-[15px] text-[13px] font-bold text-white hover:text-[#0f172a] shadow-xl active:scale-95 group">
//                 Start 5-Day Free Trial <ArrowRight size={17} className="text-[#C5A059] group-hover:text-[#0f172a]"/>
//               </button>
//               <button onClick={()=>navigate('/pricing')} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-[25px] py-[15px] text-[13px] font-bold hover:border-[#C5A059] transition-all">
//                 <BarChart3 size={16} className="text-[#C5A059]"/>View Pricing
//               </button>
//             </div>
//             <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[11px] font-bold text-[#687892]">
//               <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>No credit card</span>
//               <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>5-day free trial</span>
//               <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>Cancel anytime</span>
//             </div>
//           </div>

//           {/* Dashboard Mockup (Right Column) */}
//           <div className="relative reveal opacity-0 translate-y-16 hidden lg:block z-30" style={{ transitionDelay: '200ms' }}>
//             <Dashboard />
//           </div>
//         </div>
//       </section>

//       {/* --- STATS BANNER --- */}
//       <section className="relative z-50 mx-auto -mt-12 w-full max-w-[1210px] px-5 reveal opacity-0 translate-y-16">
//         <div className="flex min-h-[112px] flex-col md:flex-row items-center justify-between gap-5 rounded-[27px] border border-slate-100 bg-white/95 px-9 py-5 shadow-[0_22px_60px_rgba(15,23,42,.06)] backdrop-blur-xl">
//           <Stat Icon={Building2} value="10K+">Businesses<br/>Empowered</Stat><Divider/>
//           <Stat Icon={Users} value="50K+">Active Users</Stat><Divider/>
//           <Stat Icon={ClipboardList} value="1M+">Transactions<br/>Processed</Stat><Divider/>
//           <Stat Icon={ShieldCheck} value="99.9%">Uptime &amp; Security</Stat>
//         </div>
//       </section>

//       {/* --- FEATURES SECTION --- */}
//       <section id="features" className="relative z-40 mx-auto w-full max-w-[1400px] px-8 pt-32 pb-16 lg:px-16">
//         <div className="mb-16 text-center reveal opacity-0 translate-y-16">
//            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Enterprise-Grade Workflows.</h2>
//            <p className="mt-5 text-slate-500 font-medium max-w-2xl mx-auto text-lg">We provide cutting-edge tools to optimize your operational performance across every department.</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//            <div className="reveal opacity-0 translate-y-16">
//              <FeatureCard
//                icon={BarChart3}
//                title="Predictive Analytics"
//                desc="Gain foresight into market trends with our machine-learning driven data parsing engine. Make decisions backed by real-time intelligence."
//              />
//            </div>
//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '150ms' }}>
//              <FeatureCard
//                icon={ShieldCheck}
//                title="Automated Compliance"
//                desc="Ensure regulatory adherence seamlessly across all geographic tax zones without manual audits. Peace of mind built into the core."
//              />
//            </div>
//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '300ms' }}>
//              <FeatureCard
//                icon={Zap}
//                title="Fraud Detection"
//                desc="Protect your assets proactively with our real-time anomaly detection heuristics and impenetrable ledger locks."
//              />
//            </div>
//         </div>
//       </section>

//       {/* --- COMPANY INFORMATION / ARCHITECTURE SECTION --- */}
//       <section id="architecture" className="relative z-40 mx-auto w-full max-w-[1400px] px-8 pb-32 lg:px-16">
//         <div className="mb-16 text-center reveal opacity-0 translate-y-16">
//            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Engineered for Scale.</h2>
//            <p className="mt-5 text-slate-500 font-medium max-w-2xl mx-auto text-lg">Robust, distributed microservices designed to handle enterprise data loads with zero downtime.</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//            <div className="reveal opacity-3 translate-y-16">
//              <CompanyCard
//                icon={Server}
//                title="Microservice Architecture"
//                desc="Built on a distributed, decoupled architecture allowing for independent scaling and failure isolation across all system nodes."
//              />
//            </div>
//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '150ms' }}>
//              <CompanyCard
//                icon={Database}
//                title="ACID Data Integrity"
//                desc="Immutable ledgers and rigid transactional states ensure your financial data remains accurate, auditable, and secure at all times."
//              />
//            </div>
//            <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '300ms' }}>
//              <CompanyCard
//                icon={Globe}
//                title="Global Availability"
//                desc="Deployed across multi-region availability zones, ensuring low-latency routing and continuous operation regardless of geographic load."
//              />
//            </div>
//         </div>
//       </section>

//       {/* --- SIMPLE FOOTER --- */}
//       <footer className="relative mt-auto w-full overflow-hidden border-t border-slate-200 bg-white pt-16 pb-8">
//         {/* Continuous Logo Highway Watermark */}
//         <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.20] mix-blend-multiply transform rotate-[-12deg] scale-125">
//           <div className="animate-highway flex gap-16">
//             {/* Duplicated array ensures a seamless, infinite loop without snapping */}
//             {[...Array(2)].map((_, i) => (
//               <div key={i} className="flex gap-16 items-center shrink-0">
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//                 <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between relative z-10">
//           <div className="flex items-center gap-3 mb-6 md:mb-0">
//              <img src={logo} alt="Laxvira" className="h-10 w-auto object-contain mix-blend-multiply" />
//              <span className="font-black text-slate-900 tracking-widest text-lg">LAXVIRA</span>
//           </div>
//           <div className="flex gap-8 text-sm font-bold text-slate-500">
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a>
//              <a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-xs font-medium text-slate-400 relative z-10">
//           © 2026 Laxvira Systems. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, ChevronDown, ChevronRight, BarChart3, CheckCircle2,
  ShieldCheck, Users, Building2, ClipboardList, LayoutDashboard, LineChart,
  UsersRound, Settings, Bot, Sparkles, Search, Bell, FileText,
  WalletCards, BriefcaseBusiness, Zap, Server, Database, Globe
} from 'lucide-react';
import logo from '../assets/logo.jpg';

const GOLD = '#C5A059';
const NAVY = '#0f172a';

/* --------------------------------------------------------------------------
   DASHBOARD MOCKUP
   -------------------------------------------------------------------------- */
const stats = [
  ['Total Revenue','₹24.8L','+18.6%',BarChart3,'text-emerald-500'],
  ['Total Expenses','₹12.6L','-6.2%',WalletCards,'text-rose-500'],
  ['Net Profit','₹12.2L','+24.8%',LineChart,'text-emerald-500'],
  ['Cash Flow','₹8.4L','+15.3%',BriefcaseBusiness,'text-emerald-500'],
];

const side = [
  ['Dashboard',LayoutDashboard,true],['Analytics',LineChart],['Sales',BarChart3],['Finance',Building2],
  ['Clients',UsersRound],['Projects',ClipboardList],['Reports',FileText],['AI Insights',Sparkles],['Settings',Settings],
];

const Dashboard = () => (
  <div
    className="pointer-events-none relative w-full select-none"
    style={{
      maxWidth: '820px',
      margin: '0 auto',
      height: '590px',
      left: '180px',
      transform: 'perspective(2000px) rotateY(-25deg) rotateX(5deg) scale(1.05)',
      transformOrigin: 'center center',
      transformStyle: 'preserve-3d'
    }}
  >
    <div className="absolute -inset-3 rounded-[42px] border border-white/80 bg-white/35 shadow-[0_40px_90px_rgba(15,23,42,.12)] backdrop-blur-md" />
    <div className="relative flex h-full w-full overflow-hidden rounded-[31px] border border-white bg-white/95 shadow-[24px_35px_80px_rgba(15,23,42,.15),0_0_0_7px_rgba(255,255,255,.4)]">
      
      <aside className="w-[178px] shrink-0 border-r border-slate-100 bg-[#f7f9fc] px-4 py-6">
        <div className="mb-7 flex items-center gap-2 px-2"><img src={logo} alt="Laxvira" className="h-8 w-8 rounded-lg object-contain mix-blend-multiply"/><span className="font-serif text-[16px] tracking-[.13em]">LAXVIRA</span></div>
        <div className="space-y-1.5">{side.map(([name,Icon,active])=><div key={name} className={active?'flex items-center gap-3 rounded-xl bg-[#0f172a] px-3 py-3 text-[10px] font-bold text-white shadow-lg':'flex items-center gap-3 rounded-xl px-3 py-3 text-[10px] font-semibold text-slate-500'}><Icon size={14} className={active?'text-amber-500':''}/><span>{name}</span>{active&&<ChevronRight size={12} className="ml-auto"/>}</div>)}</div>
      </aside>

      <main className="relative flex min-w-0 flex-1 flex-col bg-white px-7 py-6">
        <div className="mb-5 flex items-center justify-between">
          <div><h3 className="text-[24px] font-black tracking-tight">Dashboard</h3><p className="mt-0.5 text-[10px] text-slate-400">Welcome back, <b className="text-slate-600">Admin</b> 👋</p></div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-36 items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 text-[9px] text-slate-400"><Search size={12}/>Search anything...</div>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 shadow-sm"><Bell size={14} className="text-slate-500"/><i className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-rose-500"/></div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">A</div>
          </div>
        </div>
        
        <div className="mb-4 grid grid-cols-4 gap-3">
          {stats.map(([title,value,trend,Icon,trendClass])=>
            <div key={title} className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_8px_25px_rgba(15,23,42,.03)]">
              <div className="mb-2 flex items-center justify-between"><p className="text-[8px] font-bold text-slate-400">{title}</p><Icon size={13} className="text-slate-300"/></div>
              <div className="text-[18px] font-black">{value}</div>
              <p className={`mt-1 text-[8px] font-bold ${trendClass}`}>{trend} <span className="font-normal text-slate-400">from last month</span></p>
            </div>
          )}
        </div>
        
        <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_.8fr] gap-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,.03)]">
            <div className="mb-3 flex items-center justify-between">
              <div><p className="text-[11px] font-black">Business Overview</p></div>
              <div className="flex gap-3 text-[7px] font-bold text-slate-400"><span>Revenue</span><span>Expenses</span><span>Profit</span></div>
            </div>
            <div className="relative h-[220px] overflow-hidden rounded-xl bg-slate-50/50">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {[20,40,60,80].map(y=><line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#e2e8f0" strokeWidth=".35"/>)}
                <polyline points="0,76 17,57 32,67 48,35 65,46 81,19 100,9" fill="none" stroke="#0f172a" strokeWidth="1.5"/>
                <polyline points="0,87 17,76 32,81 48,61 65,71 81,47 100,35" fill="none" stroke="#C5A059" strokeWidth="1.3"/>
                <polyline points="0,93 17,84 32,89 48,74 65,79 81,65 100,57" fill="none" stroke="#38bdf8" strokeWidth="1.1"/>
              </svg>
            </div>
          </div>
          
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,.03)]">
            <div className="mb-4 flex items-center justify-between"><p className="text-[11px] font-black">Recent Activities</p><span className="text-[8px] font-bold text-blue-500">View All</span></div>
            <div className="space-y-4">
              {[['Invoice #INV-2026-045','Paid · 2 min ago'],['New Client Added','Acme Corporation · 15 min ago'],['Payment Received','₹1,25,000 · 1 hr ago'],['Report Generated','Monthly Report · 2 hrs ago']].map(([a,b])=>
                <div key={a} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600"><ClipboardList size={13}/></div>
                  <div className="min-w-0"><p className="truncate text-[8px] font-bold text-slate-700">{a}</p><p className="truncate text-[7px] text-slate-400">{b}</p></div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-[7%] z-30 flex h-[100px] w-[380px] items-center justify-between rounded-2xl border border-slate-700 bg-[#0f172a] px-5 shadow-[0_25px_55px_rgba(15,23,42,.35)]">
          <div>
            <div className="mb-1.5 flex items-center gap-2"><Sparkles size={12} className="text-[#C5A059]"/><span className="text-[10px] font-bold text-white">AI Insight</span></div>
            <p className="max-w-[220px] text-[8px] leading-relaxed text-slate-300">Your revenue is up by <strong className="text-white">18.6%</strong> this month. Great job! Consider optimizing expenses in Project "Phoenix".</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_15px_rgba(197,160,89,0.15)]"><Bot size={22} className="text-[#C5A059]"/></div>
        </div>
      </main>
    </div>
    
    <div className="absolute -bottom-4 right-0 z-50 flex w-[170px] items-center justify-between rounded-2xl border border-white bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,.2)]">
      <div><p className="text-[8px] font-bold text-slate-400">Trial Status</p><p className="mt-1 text-[15px] font-black">3 Days Left</p></div>
      <div className="h-9 w-9 rounded-full border-[3px] border-slate-100" style={{borderTopColor:GOLD,borderRightColor:GOLD,transform:'rotate(38deg)'}}/>
    </div>
  </div>
);

const Stat = ({Icon,value,children}) => (
  <div className="flex items-center gap-4">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-[0_6px_18px_rgba(15,23,42,.05)]"><Icon size={22} className="text-[#0f172a]"/></div>
    <div><h4 className="text-[24px] font-black leading-none">{value}</h4><p className="mt-2 text-[11px] font-bold leading-tight text-slate-500">{children}</p></div>
  </div>
);
const Divider = () => <div className="hidden h-12 w-px bg-slate-200 lg:block"/>;

/* --------------------------------------------------------------------------
   FEATURE & COMPANY CARD COMPONENTS
   -------------------------------------------------------------------------- */
const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.03)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A059]/30 hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 border border-amber-100 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
      <Icon size={24} />
    </div>
    <h3 className="mb-3 text-2xl font-black text-slate-900">{title}</h3>
    <p className="text-sm font-medium leading-relaxed text-slate-500">{desc}</p>
  </div>
);

const CompanyCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-[2rem] border border-slate-800 bg-[#0f172a] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A059]/50 hover:shadow-[0_30px_60px_rgba(197,160,89,0.1)]">
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
      <Icon size={24} />
    </div>
    <h3 className="mb-3 text-2xl font-black text-white">{title}</h3>
    <p className="text-sm font-medium leading-relaxed text-slate-400">{desc}</p>
  </div>
);

/* --------------------------------------------------------------------------
   MAIN LANDING PAGE
   -------------------------------------------------------------------------- */
const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-16');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#fbfaf8] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* Dynamic Easing for Butter-Smooth Scroll Flow */}
      <style dangerouslySetInnerHTML={{__html: `
        .reveal { transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
      `}} />

      {/* --- BACKGROUND LAYER (Clipped to prevent scroll bleed) --- */}

      {/* Dynamic Easing and Continuous Watermark Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .reveal { transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        
        @keyframes logoHighway {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-highway {
          display: flex;
          width: max-content;
          animation: logoHighway 18s linear infinite;
        }
      `}} />

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(255,255,255,.98),rgba(251,250,248,.95)_48%,rgba(247,249,252,.96)_100%)]"/>
  <div className="absolute inset-0 opacity-[.42]" style={{backgroundImage:'radial-gradient(#dfe4eb .72px, transparent .72px)',backgroundSize:'36px 36px'}}/>
  
  <div className="absolute left-[-220px] top-[230px] h-[650px] w-[650px] rounded-full bg-sky-100/55 blur-[135px]"/>
  <div className="absolute right-[-260px] top-[270px] h-[650px] w-[650px] rounded-full bg-sky-100/45 blur-[145px]"/>
  <div className="absolute bottom-[-300px] right-[-180px] h-[600px] w-[600px] rounded-full bg-amber-50/70 blur-[120px]"/>
</div>

{/* Logo Watermark Background (Kept outside so 'fixed' works correctly) */}
<div className="pointer-events-none fixed top-1/2 left-[47%] z-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] opacity-[0.75] mix-blend-multiply">
  <img src={logo} alt="Laxvira Watermark" className="w-full h-auto object-contain" />
</div>

      <nav className="relative z-[100] mx-auto flex h-[108px] w-full max-w-[1500px] items-center justify-between pl-6 lg:pl-[32px] pr-8 lg:pr-[58px]">
        <Link to="/" className="flex items-center" ><img src={logo} alt="Laxvira" className="h-[76px] w-[116px] object-contain mix-blend-multiply"/></Link>
        <div className="hidden items-center gap-[38px] text-[14px] font-semibold text-[#172238] xl:flex">
          <a href="#features" className="hover:text-[#C5A059] transition-colors">Features</a>
          <button className="flex items-center gap-1 hover:text-[#C5A059] transition-colors">Solutions <ChevronDown size={14}/></button>
          <Link to="/pricing" className="hover:text-[#C5A059] transition-colors">Pricing</Link>
          <button className="flex items-center gap-1 hover:text-[#C5A059] transition-colors">Resources <ChevronDown size={14}/></button>
          <a href="#about" className="hover:text-[#C5A059] transition-colors">About Us</a>
          <a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={()=>navigate('/login')} className="hidden rounded-xl border border-slate-200 bg-white px-[25px] py-[12px] text-[13px] font-bold hover:border-[#C5A059] hover:text-[#C5A059] transition-all sm:block">Login</button>
          <button onClick={()=>navigate('/signup')} className="flex items-center gap-3 rounded-xl bg-[#0f172a] px-[24px] py-[14px] text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(15,23,42,.18)] hover:bg-[#C5A059] transition-colors active:scale-95">Start 5-Day Free Trial <ArrowRight size={17} className="text-[#0f172a]"/></button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative mx-auto w-full max-w-[1500px] pl-6 lg:pl-[32px] pr-8 lg:pr-[58px] pt-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
          {/* Foreground Content (Left Column) */}
          <div className="relative z-40 flex w-full flex-col reveal opacity-0 translate-y-16 pt-12 lg:pt-0" style={{ left: '-50px' }}>
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#f2dfb1] bg-white/95 px-4 py-[8px] text-[12px] font-bold text-[#526078] shadow-sm">
              <Sparkles size={15} className="text-[#C5A059]"/>AI-Powered Business &amp; Finance Platform
            </div>
            <h1 className="max-w-[650px] text-[56px] font-black leading-[1.015] tracking-[-.042em] text-[#0d172b] lg:text-[68px]">
              Smart <span className="text-[#C5A059]">Business.</span><br/>Smarter <span className="text-[#C5A059]">Finance.</span>
            </h1>
            <p className="mt-7 max-w-[535px] text-[16px] font-medium leading-[1.72] text-[#687892]">
              Laxvira brings the power of AI to your business operations, finance management, and growth strategy — all in one intelligent platform.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button onClick={()=>navigate('/signup')} className="flex items-center gap-3 rounded-xl bg-[#0f172a] hover:bg-[#C5A059] transition-all px-[25px] py-[15px] text-[13px] font-bold text-white hover:text-[#0f172a] shadow-xl active:scale-95 group">
                Start 5-Day Free Trial <ArrowRight size={17} className="text-[#C5A059] group-hover:text-[#0f172a]"/>
              </button>
              <button onClick={()=>navigate('/pricing')} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-[25px] py-[15px] text-[13px] font-bold hover:border-[#C5A059] transition-all">
                <BarChart3 size={16} className="text-[#C5A059]"/>View Pricing
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[11px] font-bold text-[#687892]">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>No credit card</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>5-day free trial</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-[#C5A059]"/>Cancel anytime</span>
            </div>
          </div>

          {/* Dashboard Mockup (Right Column) */}
          <div className="relative reveal opacity-0 translate-y-16 hidden lg:block z-30" style={{ transitionDelay: '200ms' }}>
            <Dashboard />
          </div>
        </div>
      </section>

      {/* --- STATS BANNER --- */}
      <section className="relative z-50 mx-auto -mt-12 w-full max-w-[1210px] px-5 reveal opacity-0 translate-y-16">
        <div className="flex min-h-[112px] flex-col md:flex-row items-center justify-between gap-5 rounded-[27px] border border-slate-100 bg-white/95 px-9 py-5 shadow-[0_22px_60px_rgba(15,23,42,.06)] backdrop-blur-xl">
          <Stat Icon={Building2} value="10K+">Businesses<br/>Empowered</Stat><Divider/>
          <Stat Icon={Users} value="50K+">Active Users</Stat><Divider/>
          <Stat Icon={ClipboardList} value="1M+">Transactions<br/>Processed</Stat><Divider/>
          <Stat Icon={ShieldCheck} value="99.9%">Uptime &amp; Security</Stat>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="relative z-40 mx-auto w-full max-w-[1400px] px-8 pt-32 pb-16 lg:px-16">
        <div className="mb-16 text-center reveal opacity-0 translate-y-16">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Everything Your Business Needs.</h2>
           <p className="mt-5 text-slate-500 font-medium max-w-2xl mx-auto text-lg">Simple, powerful tools to manage your sales, billing, and daily operations effortlessly.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="reveal opacity-0 translate-y-16">
             <FeatureCard
               icon={BarChart3}
               title="Smart Sales Insights"
               desc="Understand your business growth at a glance. Our AI tracks your trends to help you make smarter, faster decisions."
             />
           </div>
           <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '150ms' }}>
             <FeatureCard
               icon={ShieldCheck}
               title="Hassle-Free Taxes"
               desc="Stay perfectly compliant without the headache. We automatically calculate taxes and ensure your invoices meet all regulations."
             />
           </div>
           <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '300ms' }}>
             <FeatureCard
               icon={Zap}
               title="Lightning Fast Billing"
               desc="Create estimates, convert them to invoices, and track payments in seconds. Keep your cash flow moving without the wait."
             />
           </div>
        </div>
      </section>

      {/* --- COMPANY INFORMATION / ARCHITECTURE SECTION --- */}
      <section id="architecture" className="relative z-40 mx-auto w-full max-w-[1400px] px-8 pb-32 lg:px-16">
        <div className="mb-16 text-center reveal opacity-0 translate-y-16">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Reliable, Safe, and Secure.</h2>
           <p className="mt-5 text-slate-500 font-medium max-w-2xl mx-auto text-lg">A rock-solid platform designed to protect your data and keep your business running smoothly 24/7.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="reveal opacity-3 translate-y-16">
             <CompanyCard
               icon={Server}
               title="24/7 Customer Support"
               desc="Run your business without interruptions. Our cloud-based system is built to stay fast and reliable, even on your busiest days."
             />
           </div>
           <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '150ms' }}>
             <CompanyCard
               icon={Database}
               title="Bank-Level Security"
               desc="Your business numbers are locked down safely. We use strict security measures so your financial records are always accurate and private."
             />
           </div>
           <div className="reveal opacity-0 translate-y-16" style={{ transitionDelay: '300ms' }}>
             <CompanyCard
               icon={Globe}
               title="Work From Anywhere"
               desc="Access your dashboard, manage inventory, and track sales from any device, anywhere in the world. Your business travels with you."
             />
           </div>
        </div>
      </section>

      {/* --- SIMPLE FOOTER --- */}
      <footer className="relative mt-auto w-full overflow-hidden border-t border-slate-200 bg-white pt-16 pb-8">
        {/* Continuous Logo Highway Watermark */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.20] mix-blend-multiply transform rotate-[-12deg] scale-125">
          <div className="animate-highway flex gap-16">
            {/* Duplicated array ensures a seamless, infinite loop without snapping */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center shrink-0">
                <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
                <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
                <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
                <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
                <img src={logo} alt="Footer Watermark" className="w-[120px] h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
             <img src={logo} alt="Laxvira" className="h-10 w-auto object-contain mix-blend-multiply" />
             <span className="font-black text-slate-900 tracking-widest text-lg">LAXVIRA</span>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-500">
             <a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs font-medium text-slate-400 relative z-10">
          © 2026 Laxvira Systems. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;