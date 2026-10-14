import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Bell, LogOut, Settings, Crown } from "lucide-react";

const Header = ({ title, subtitle, showUpgrade = false }) => {
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [profileName, setProfileName] = useState("Admin");

  useEffect(() => {
    // Attempt to get the user's name from local storage
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setProfileName(user.ownerName || user.company_name || "Admin");
    }
  }, []);

  const profileInitial = profileName.charAt(0).toUpperCase();

  const handleGlobalSearch = async (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const executeSearchClick = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      
      {/* Dynamic Page Title & Subtitle */}
      <div>
        <h1 className="text-[32px] md:text-[40px] font-black text-slate-900 tracking-tight leading-none">
          {title}
        </h1>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-[13px] font-medium text-slate-400">
            {subtitle}
          </p>
          
          {showUpgrade && (
            <button 
              onClick={() => navigate('/subscription')}
              className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-[#C5A059] border border-[#C5A059]/30 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-colors"
            >
              <Crown size={12} className="animate-pulse" /> Upgrade Plan
            </button>
          )}
        </div>
      </div>
      
      {/* Right Side: Search, Alerts, Profile */}
      <div className="flex items-center gap-3 self-start sm:self-auto z-50">
        
        {/* Search Bar */}
        <div className="relative flex h-[42px] w-[280px] md:w-[320px] items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md px-4 shadow-sm focus-within:border-[#C5A059] focus-within:ring-2 focus-within:ring-[#C5A059]/10 transition-all">
          <Search 
            size={14} 
            className="text-slate-400 shrink-0 cursor-pointer hover:text-[#C5A059] transition-colors" 
            onClick={executeSearchClick}
          />
          <input 
            type="text"
            placeholder='Try "Invoices of 3rd October"...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleGlobalSearch}
            className="bg-transparent border-none outline-none text-[12px] font-bold text-slate-700 w-full placeholder:text-slate-400 placeholder:font-medium"
          />
        </div>
        
        {/* Notifications */}
        <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
          <Bell size={16} className="text-slate-500" />
          <span className="absolute top-2.5 right-2.5 h-[7px] w-[7px] rounded-full bg-rose-500 border-2 border-white"></span>
        </div>
        
        {/* Profile Dropdown */}
        <div className="relative">
          <div 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0f172a] text-[13px] font-bold text-white shadow-md cursor-pointer hover:bg-[#C5A059] hover:text-[#0f172a] transition-colors select-none"
          >
            {profileInitial}
          </div>

          {showProfileMenu && (
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setShowProfileMenu(false)}
            />
          )}

          {showProfileMenu && (
            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.1)] p-2 z-50">
              <div className="px-3 py-2.5 border-b border-slate-100 mb-2">
                <p className="text-[13px] font-black text-slate-900 truncate">{profileName}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Store Admin</p>
              </div>
              
              <button 
                onClick={() => { setShowProfileMenu(false); navigate('/settings'); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-slate-600 rounded-xl hover:bg-slate-50 hover:text-[#C5A059] transition-colors"
              >
                <Settings size={14} /> Store Settings
              </button>
              
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-[12px] font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
              >
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;