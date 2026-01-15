
import React from 'react';
import { UserPlus, Smartphone, Zap } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-hidden bg-slate-950">
      <section id="inicio" className="relative min-h-[95vh] lg:min-h-screen flex items-center">
        {/* Background con overlay dinámico */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=2000" 
            alt="Talara Destino Inteligente"
            className="w-full h-full object-cover opacity-40 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48 md:pb-64">
          <div className="max-w-4xl text-white space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] rounded-full backdrop-blur-md">
              <Zap size={14} className="animate-pulse" />
              <span>Liderando la Transformación Digital de la Provincia</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter">
              Talara:<br/>
              <span className="text-[#0056A4] inline-block">Destino</span> <span className="text-white">Inteligente</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed border-l-4 border-[#E31B23] pl-6">
              La Cámara de Comercio y <span className="text-white font-bold">Vive Talara</span> se unen para convertir cada negocio local en una potencia digital de alcance global.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button 
                onClick={() => onNavigate('membership')}
                className="group bg-[#E31B23] hover:bg-[#c4151c] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center transition-all shadow-[0_20px_40px_-10px_rgba(227,27,35,0.4)] hover:-translate-y-1"
              >
                <Smartphone className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Digitaliza tu Negocio
              </button>
              
              <a 
                href="https://vivetalara.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center transition-all shadow-xl hover:-translate-y-1"
              >
                Visitar ViveTalara.com
              </a>
            </div>
          </div>
        </div>

        {/* Info lateral interactiva */}
        <div className="absolute bottom-12 right-12 hidden lg:flex items-center space-x-8 z-20">
           <div className="text-right">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Tecnología por</p>
              <p className="text-white font-black text-lg tracking-tighter italic underline decoration-[#0056A4] decoration-2">Manguito Labs</p>
           </div>
           <div className="h-16 w-px bg-white/20"></div>
           <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.5em] vertical-text">
             SMART PROVINCE {currentYear}
           </div>
        </div>
      </section>

      <style>{`
        @keyframes subtle-zoom { from { transform: scale(1.05); } to { transform: scale(1.12); } }
        .vertical-text { writing-mode: vertical-rl; transform: rotate(180deg); }
      `}</style>
    </div>
  );
};

export default Hero;
