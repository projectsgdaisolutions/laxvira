import React, { useState } from 'react';

const SmoothInput = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  icon: Icon 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-1.5 w-full mb-4">
      {label && (
        <label className={`text-[13px] font-bold transition-colors duration-300 ${
          isFocused ? 'text-indigo-600' : 'text-slate-600'
        }`}>
          {label}
        </label>
      )}
      
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-transform duration-300 pointer-events-none">
            <Icon 
              size={18} 
              className={`transition-colors duration-300 ${
                isFocused ? 'text-indigo-600 scale-110' : 'text-slate-400'
              }`} 
            />
          </div>
        )}
        
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          // The magic is in this class string
          className={`
            w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 
            text-[14px] font-medium text-slate-900 outline-none
            transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
            placeholder:text-slate-400 placeholder:font-normal
            hover:bg-slate-50 hover:border-slate-300
            focus:bg-white focus:border-indigo-500 
            focus:ring-[4px] focus:ring-indigo-500/15 
            focus:-translate-y-[1px] focus:shadow-[0_8px_30px_rgb(0,0,0,0.04)]
            ${Icon ? 'pl-11' : ''}
          `}
        />
      </div>
    </div>
  );
};

export default SmoothInput;