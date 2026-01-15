
import React from 'react';
import { SERVICES } from '../core/constants';
import { ShieldCheck, ArrowRight, Settings, Cpu, Globe, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Seccion */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-32 gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-[#E31B23]/10 text-[#E31B23] px-6 py-2 rounded-full mb-8 text-[10px] font-black uppercase tracking-[0.4em]">
              <Settings size={14} className="animate-spin-slow" />
              Smart Business Engine
            </div>
            <h3 className="text-6xl md:text-7xl font-black text-[#0056A4] tracking-tighter leading-[0.85] mb-8">
              Centro de<br/>
              <span className="text-slate-900">Operaciones</span>
            </h3>
            <p className="text-gray-500 text-xl font-light leading-relaxed">
              Acompañamos el crecimiento de tu empresa mediante infraestructura tecnológica y servicios de alto impacto.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="bg-slate-950 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform"><Globe size={80}/></div>
                <h4 className="text-3xl font-black tracking-tighter mb-2">98%</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Eficiencia Operativa</p>
             </div>
             <div className="bg-white border-2 border-slate-100 p-10 rounded-[3rem] text-slate-900 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform"><Cpu size={80}/></div>
                <h4 className="text-3xl font-black tracking-tighter mb-2">15+</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#E31B23]">Módulos Digitales</p>
             </div>
          </div>
        </div>

        {/* Grid de Servicios con Estética de Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-slate-50 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,86,164,0.15)] transition-all duration-500 border border-transparent hover:border-blue-100 overflow-hidden"
            >
              {/* Indicador de Status Superior */}
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 bg-[#0056A4] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-slate-950 transition-all duration-500">
                  {service.icon}
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</span>
                   <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[9px] font-black text-slate-900 uppercase">Online</span>
                   </div>
                </div>
              </div>

              {/* Contenido Principal */}
              <div className="space-y-4 mb-8">
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#E31B23]">
                   {service.category}
                </div>
                <h4 className="text-2xl font-black text-slate-800 tracking-tighter group-hover:text-[#0056A4] transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Data Panel Interior */}
              <div className="bg-white rounded-2xl p-4 border border-slate-100 mb-8 space-y-3 group-hover:bg-blue-50/50 transition-colors">
                 <div className="flex justify-between items-center text-[9px] font-black">
                    <span className="text-gray-400 uppercase">Respuesta</span>
                    <span className="text-slate-900">{service.responseTime}</span>
                 </div>
                 <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-3/4 group-hover:w-full transition-all duration-1000"></div>
                 </div>
              </div>

              {/* Botón Acción */}
              <button className="w-full flex items-center justify-between text-slate-900 font-black text-[10px] uppercase tracking-widest group-hover:text-[#0056A4] transition-colors">
                <span>Gestionar ahora</span>
                <div className="bg-white p-2 rounded-lg border border-slate-200 group-hover:border-[#0056A4] group-hover:bg-[#0056A4] group-hover:text-white transition-all">
                  <ArrowRight size={14} />
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Feature Final - Trust Banner */}
        <div className="mt-32 p-12 bg-slate-950 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-10 shadow-3xl">
           <div className="bg-white/10 p-6 rounded-[2rem] backdrop-blur-xl">
              <ShieldCheck size={48} className="text-blue-400" />
           </div>
           <div className="flex-1 text-center md:text-left">
              <h4 className="text-3xl font-black tracking-tighter mb-2">Respaldo Institucional</h4>
              <p className="text-gray-400 font-light text-lg">Todos nuestros procesos están certificados bajo estándares de calidad gremial.</p>
           </div>
           <button className="bg-[#E31B23] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-all">
             Ver Certificaciones
           </button>
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Services;
