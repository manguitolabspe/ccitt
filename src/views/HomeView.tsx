
import React from 'react';
import Hero from '../components/Hero';
import { DISTRICTS } from '../core/constants';
import { Zap, Smartphone, Globe, ShieldCheck } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => (
  <>
    <Hero onNavigate={onNavigate} />
    
    {/* SECCIÓN DE ALIANZA ESTRATÉGICA - VIVE TALARA */}
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#0056A4]/5 rounded-full blur-3xl"></div>
            <div className="relative bg-slate-900 rounded-[3rem] p-12 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                <Smartphone size={120} className="text-white" />
              </div>
              <span className="bg-[#E31B23] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-block">Manguito Labs Presenta</span>
              <h3 className="text-4xl font-black text-white mb-6 leading-tight tracking-tighter">
                La Revolución Digital:<br/>
                <span className="text-[#0056A4]">Vive Talara + CCITT</span>
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Hemos unido fuerzas para digitalizar el 100% de la oferta turística y comercial de la provincia. Una plataforma, infinitas posibilidades.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Globe size={20} />, text: "Directorio Global Interactivo" },
                  { icon: <Zap size={20} />, text: "Reservas y Pagos en Tiempo Real" },
                  { icon: <ShieldCheck size={20} />, text: "Sello de Calidad Digital" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/80 text-sm font-bold uppercase tracking-wider">
                    <div className="text-[#E31B23]">{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-[#0056A4] tracking-tighter leading-none">Hacia una Smart Province</h2>
            <p className="text-gray-500 text-xl font-light leading-relaxed">
              La Cámara de Comercio ahora es tecnológica. Gracias a la infraestructura de <a href="https://vivetalara.com" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 underline decoration-[#E31B23] hover:text-[#0056A4] transition-colors">vivetalara.com</a>, nuestros socios acceden a mercados internacionales con solo un clic.
            </p>
            <div className="pt-6 flex gap-4">
              <button 
                onClick={() => onNavigate('tourism')}
                className="bg-[#0056A4] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:bg-[#004a8d] transition-all"
              >
                Dashboard de Turismo
              </button>
              <a 
                href="https://vivetalara.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-950 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-all flex items-center"
              >
                Abrir App Oficial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-br from-[#0056A4] via-[#004a8d] to-slate-950 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31B23]/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between text-white space-y-10 lg:space-y-0 relative z-10">
        <div className="text-center lg:text-left max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Sea parte del motor económico de Talara</h3>
          <p className="text-blue-100/80 text-xl font-light leading-relaxed">Únete a la red gremial que representa los intereses del norte peruano.</p>
        </div>
        <button 
          onClick={() => onNavigate('membership')}
          className="bg-[#E31B23] hover:bg-red-700 text-white px-14 py-6 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-xl"
        >
          Quiero Afiliarme
        </button>
      </div>
    </section>

    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <span className="text-[#E31B23] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Presencia Territorial</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0056A4] tracking-tighter">Nuestra Provincia</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {DISTRICTS.map((dist) => (
            <div key={dist.name} className="group relative h-96 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src={dist.image} alt={dist.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-10">
                <div className="flex items-center text-white">
                  <h4 className="text-3xl font-black uppercase tracking-tight">{dist.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default HomeView;
