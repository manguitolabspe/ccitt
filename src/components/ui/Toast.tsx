
import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

export const CCToast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const styles = {
    success: "bg-green-500/10 border-green-500/20 text-green-400",
    error: "bg-red-500/10 border-red-500/20 text-red-400",
    info: "bg-blue-500/10 border-blue-500/20 text-blue-400"
  };

  const icons = {
    success: <CheckCircle2 size={16} />,
    error: <AlertCircle size={16} />,
    info: <AlertCircle size={16} />
  };

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] animate-in slide-in-from-bottom-5 duration-300">
      <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl ${styles[type]}`}>
        {icons[type]}
        <span className="text-[10px] font-black uppercase tracking-widest">{message}</span>
        <button onClick={onClose} className="ml-2 hover:opacity-50 transition-opacity">
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
