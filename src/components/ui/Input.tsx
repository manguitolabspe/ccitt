
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export const CCInput: React.FC<InputProps> = ({ label, icon, error, className = '', ...props }) => {
  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      <label className="text-[8px] font-black uppercase tracking-widest text-gray-500 ml-3">
        {label}
      </label>
      <div className="relative group">
        {icon && (
          <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-500' : 'text-gray-600 group-focus-within:text-blue-400'}`}>
            {icon}
          </div>
        )}
        <input 
          {...props}
          className={`w-full bg-white/5 border rounded-xl py-4 transition-all text-sm font-bold text-white placeholder-white/10 focus:outline-none focus:bg-white/10
            ${icon ? 'px-12' : 'px-6'}
            ${error ? 'border-red-500/50 bg-red-500/5 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'}
          `}
        />
      </div>
      {error && (
        <p className="text-[8px] font-bold text-red-500 uppercase tracking-widest ml-3 animate-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
};
