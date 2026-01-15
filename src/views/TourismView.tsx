
import React from 'react';
import { Smartphone, Zap, Waves, Map, Crosshair, Award, Gift, Calendar, Navigation, Search } from 'lucide-react';

const TourismView: React.FC = () => (
  <div className="pt-40 pb-32 bg-slate-950 text-white min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      {/* Concepto Smart Tourism */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#E31B23] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
            <Smartphone size={14} />
            Tu Guía de Bolsillo
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
            Vive Talara<br/>
            <span className="text-[#0056A4]">Sin Límites</span>
          </h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed max-w-xl">
            Hemos reemplazado el viejo folleto por una experiencia interactiva. Con la App <span className="text-white font-bold underline">Vive Talara</span>, la provincia es tu patio de juegos digital.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <Award className="text-[#FBBF24] mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="font-black text-sm uppercase tracking-widest mb-2">Gamificación</h4>
              <p className="text-xs text-gray-500 font-medium">Gana XP y sube de rango visitando los lugares emblemáticos de Pariñas y sus distritos.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group">
              <Gift className="text-[#E31B23] mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="font-black text-sm uppercase tracking-widest mb-2">Cupones Flash</h4>
              <p className="text-xs text-gray-500 font-medium">Recibe ofertas que duran horas en tu celular. Ahorro inteligente en tiempo real.</p>
            </div>
          </div>
        </div>

        {/* Visual Mockup Mobile / Smart City */}
        <div className="relative">
          <div className="absolute -inset-10 bg-blue-600/20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative bg-slate-900 border-8 border-slate-800 rounded-[4rem] aspect-[9/16] max-w-[320px] mx-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
             {/* Simulación Interfaz App */}
             <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-black tracking-tighter opacity-50 uppercase">Manguito Labs</div>
                  <Smartphone size={16} className="opacity-50" />
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Estado del Mar</p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-black leading-none">0.8m</span>
                    <span className="text-[8px] opacity-60 mb-1">Marea Baja</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-24 bg-gradient-to-br from-[#0056A4] to-blue-800 rounded-3xl p-4 flex flex-col justify-end">
                    <span className="text-[8px] font-black uppercase">Próximo Evento</span>
                    <span className="text-xs font-black">Festival de Máncora</span>
                  </div>
                  <div className="h-16 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500"><Crosshair size={14}/></div>
                      <span className="text-[10px] font-bold">Farmacias de Turno</span>
                    </div>
                    <span className="text-[10px] font-black text-green-500">OPEN</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-around">
                   <div className="flex flex-col items-center gap-1 opacity-100"><Map size={14}/><span className="text-[8px] font-bold">Explorar</span></div>
                   <div className="flex flex-col items-center gap-1 opacity-30"><Award size={14}/><span className="text-[8px] font-bold">XP</span></div>
                   <div className="flex flex-col items-center gap-1 opacity-30"><Navigation size={14}/><span className="text-[8px] font-bold">Guía</span></div>
                </div>
             </div>
          </div>
          {/* Badge Vive Talara Overlay */}
          <div className="absolute top-20 -right-4 bg-[#E31B23] p-6 rounded-[2rem] shadow-2xl rotate-12 group hover:rotate-0 transition-transform cursor-pointer">
             <p className="text-[8px] font-black uppercase tracking-widest mb-1">Tu Pasaporte Digital</p>
             <h4 className="text-xl font-black tracking-tighter">VIVE TALARA</h4>
          </div>
        </div>
      </div>

      {/* Widgets de Tiempo Real */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div className="bg-white/5 border border-white/10 p-10 rounded-[3.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10"><Waves size={64}/></div>
          <h4 className="text-2xl font-black mb-4 tracking-tight">Cerebro de la Provincia</h4>
          <p className="text-gray-400 font-light leading-relaxed mb-8">Centralizamos mareas, clima, horarios de transporte y alertas de seguridad en un solo flujo de datos.</p>
          <div className="flex items-center gap-3 text-blue-400 text-[10px] font-black uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
            Live Data Sync
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-10 rounded-[3.5rem] relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10"><Calendar size={64}/></div>
           <h4 className="text-2xl font-black mb-4 tracking-tight">Agenda Unificada</h4>
           <p className="text-gray-400 font-light leading-relaxed mb-8">Todos los eventos culturales y municipales sincronizados con tu calendario personal automáticamente.</p>
           <button className="text-[#E31B23] text-[10px] font-black uppercase tracking-[0.3em]">Ver Cartelera Pro</button>
        </div>
        <div className="bg-gradient-to-br from-[#0056A4] to-blue-900 p-10 rounded-[3.5rem] relative overflow-hidden shadow-2xl">
           <h4 className="text-2xl font-black mb-4 tracking-tight">Smart City API</h4>
           <p className="text-blue-100/70 font-light leading-relaxed mb-8">Nuestra infraestructura permite a la Cámara tomar decisiones basadas en datos reales de afluencia turística.</p>
           <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl flex items-center justify-between">
              <span className="text-[10px] font-black">Manguito Labs Dev_Mode</span>
              <Search size={14}/>
           </div>
        </div>
      </div>

      {/* Final CTA Sinergia */}
      <div className="text-center py-24 bg-white rounded-[4.5rem] text-slate-900 shadow-[0_50px_100px_-20px_rgba(0,86,164,0.3)]">
         <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">¿Listo para el turismo del futuro?</h3>
         <p className="text-gray-500 text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
           La Cámara de Comercio de Talara y Manguito Labs están redefiniendo lo que significa viajar.
         </p>
         <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-slate-950 text-white px-14 py-6 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-slate-800 transition-all shadow-xl">
              Explorar vivetalara.com
            </button>
            <button className="border-2 border-slate-950 text-slate-950 px-14 py-6 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-all">
              Sello de Calidad Digital
            </button>
         </div>
      </div>
    </div>
  </div>
);

export default TourismView;
