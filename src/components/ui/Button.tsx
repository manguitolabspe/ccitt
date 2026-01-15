
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
}

export const CCButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#0056A4] text-white hover:bg-blue-700 shadow-[0_10px_30px_-10px_rgba(0,86,164,0.4)]",
    danger: "bg-[#E31B23] text-white hover:bg-red-700 shadow-[0_10px_30px_-10px_rgba(227,27,35,0.4)]",
    outline: "border-2 border-white/10 text-white hover:bg-white/5",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-[8px]",
    md: "px-8 py-4 text-[10px]",
    lg: "px-10 py-5 text-xs"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
      ) : (
        <div className="flex items-center gap-3">
          {icon}
          {children}
        </div>
      )}
    </button>
  );
};
