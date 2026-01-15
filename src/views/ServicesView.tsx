
import React from 'react';
import Services from '../components/Services';
import { Rocket, Zap, Smartphone, Globe } from 'lucide-react';
import { CURRENT_YEAR, NEXT_YEAR } from '../core/constants';

const ServicesView: React.FC = () => (
  <div className="pt-20 bg-white">
    <Services />
    
    {/* SECCION ESPECIAL: DIGITAL TRANSFORMATION SERVICES */}
    <section className="pb-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0056A4] to-blue-900 p-12 md:p-24 rounded-[5rem] text-white shadow-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E31B23]/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-[#FBBF24] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Manguito Labs Partnership</span>
                 <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">Transformación<br/>Digital {CURRENT_YEAR}</h3>
                 <p className="text-blue-100 text-xl font-light leading-relaxed mb-12">
                   ¿Busca un servicio que no figura en nuestra lista? Desarrollamos soluciones a medida para la industria petrolera, pesquera y turística.
                 </p>
                 <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="flex items-center gap-4">
                       <Zap className="text-[#FBBF24]" size={24} />
                       <span className="text-xs font-black uppercase tracking-widest">Agilidad Tech</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <Smartphone className="text-[#FBBF24]" size={24} />
                       <span className="text-xs font-black uppercase tracking-widest">Mobile First</span>
                    </div>
                 </div>
                 <button className="bg-white text-[#0056A4] px-14 py-6 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-all">
                   Hablar con un Experto
                 </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-[3.5rem] space-y-10 shadow-inner">
                 <h4 className="text-2xl font-black tracking-tighter">Próximos Lanzamientos</h4>
                 {[
                   { title: 'Plataforma de Licitaciones', icon: <Globe size={20} />, date: `Q3 ${CURRENT_YEAR}` },
                   { title: 'E-Learning para Socios', icon: <Rocket size={20} />, date: `Q4 ${CURRENT_YEAR}` },
                   { title: 'Mesa de Partes Blockchain', icon: <Zap size={20} />, date: `Q1 ${NEXT_YEAR}` }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-6 bg-slate-950/40 rounded-3xl border border-white/5 group cursor-pointer hover:border-blue-400 transition-colors">
                      <div className="flex items-center gap-5">
                         <div className="text-blue-400">{item.icon}</div>
                         <span className="font-bold text-sm tracking-tight">{item.title}</span>
                      </div>
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">{item.date}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesView;
