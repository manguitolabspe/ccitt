
import React, { useState, useEffect } from 'react';
import { Lock, User, ShieldCheck, X, Terminal } from 'lucide-react';
import { CURRENT_YEAR } from '../core/constants';
import { CCButton } from './ui/Button';
import { CCInput } from './ui/Input';
import { CCToast, ToastType } from './ui/Toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [credentials, setCredentials] = useState({ user: '', pass: '' });
  const [errors, setErrors] = useState({ user: '', pass: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{message: string, type: ToastType, visible: boolean}>({
    message: '',
    type: 'info',
    visible: false
  });

  // Credenciales simplificadas solicitadas
  const SIMULATED_USER = "admin";
  const SIMULATED_PASS = "admin";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setErrors({ user: '', pass: '' });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const showToast = (message: string, type: ToastType) => {
    setToast({ message, type, visible: true });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { user: '', pass: '' };

    if (!credentials.user.trim()) {
      newErrors.user = 'El usuario es obligatorio';
      isValid = false;
    }
    if (!credentials.pass) {
      newErrors.pass = 'La clave es obligatoria';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      showToast('Por favor, complete los campos requeridos', 'error');
      return;
    }

    setLoading(true);

    // Simulación de proceso de autenticación institucional
    setTimeout(() => {
      setLoading(false);
      
      if (credentials.user === SIMULATED_USER && credentials.pass === SIMULATED_PASS) {
        showToast('Acceso concedido. Iniciando sesión...', 'success');
        setTimeout(() => {
          onLogin();
        }, 800);
      } else {
        showToast('Credenciales no autorizadas por el sistema', 'error');
        setErrors({
          user: credentials.user !== SIMULATED_USER ? 'Usuario no reconocido' : '',
          pass: credentials.pass !== SIMULATED_PASS ? 'Clave de seguridad incorrecta' : ''
        });
      }
    }, 1500);
  };

  return (
    <>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
          onClick={onClose}
        />
        
        {/* Modal Card Compacta */}
        <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-3xl animate-in zoom-in-95 duration-200">
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <div className="text-center mb-8">
             <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg border-2 border-[#0056A4] font-black text-[#0056A4] text-lg">
                  C
                </div>
             </div>
             <h2 className="text-2xl font-black text-white tracking-tighter mb-1">Portal Institucional</h2>
             <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[8px]">Acceso Restringido — CCITT</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <CCInput 
              label="Usuario Administrativo"
              placeholder="Identificador"
              icon={<User size={16} />}
              value={credentials.user}
              error={errors.user}
              onChange={(e) => {
                setCredentials({...credentials, user: e.target.value});
                if (errors.user) setErrors({...errors, user: ''});
              }}
            />

            <CCInput 
              label="Clave de Seguridad"
              type="password"
              placeholder="••••••••"
              icon={<Lock size={16} />}
              value={credentials.pass}
              error={errors.pass}
              onChange={(e) => {
                setCredentials({...credentials, pass: e.target.value});
                if (errors.pass) setErrors({...errors, pass: ''});
              }}
            />

            <CCButton 
              type="submit"
              variant="danger"
              size="lg"
              className="w-full mt-2"
              loading={loading}
              icon={<ShieldCheck size={18} />}
            >
              Validar Credenciales
            </CCButton>
          </form>

          <div className="mt-8 flex items-center justify-between text-[7px] font-black uppercase tracking-widest text-gray-600 border-t border-white/5 pt-6">
             <div className="flex items-center gap-2">
                <Terminal size={10} className="text-blue-500" />
                <span>SSL Secure Node CCITT</span>
             </div>
             <span>CCITT.{CURRENT_YEAR}.V2</span>
          </div>
        </div>
      </div>

      <CCToast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={() => setToast({...toast, visible: false})}
      />
    </>
  );
};

export default LoginModal;
