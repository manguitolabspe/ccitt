
import React from 'react';
import { MapPin, Phone, Zap, QrCode, Smartphone, ArrowUpRight } from 'lucide-react';
import { Business } from '../../core/types';

interface BusinessCardProps {
  biz: Business;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ biz }) => {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-[3.5rem] overflow-hidden hover:bg-white/[0.08] transition-all duration-700 hover:-translate-y-2 shadow-2xl">
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3.5rem]">
         <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent absolute top-0 -translate-y-full group-hover:animate-[scanner_2s_infinite] opacity-0 group-hover:opacity-100 shadow-[0_0_15px_blue]"></div>
      </div>

      <div className="h-64 relative overflow-hidden">
        <img src={biz.image} alt={biz.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
          <div className="flex flex-col gap-2">
             <span className="bg-slate-950/80 backdrop-blur-md text-[9px] font-black px-4 py-2 rounded-full border border-white/10">ID: #00{biz.id}</span>
             <span className="bg-[#0056A4] text-white text-[8px] font-black px-4 py-2 rounded-full uppercase tracking-tighter">{biz.level} Partner</span>
          </div>
          {biz.isDigitalized && (
            <div className="bg-[#E31B23] p-3 rounded-2xl shadow-[0_0_20px_rgba(227,27,35,0.4)] animate-pulse">
               <Zap size={18} className="fill-white" />
            </div>
          )}
        </div>
      </div>

      <div className="p-10 space-y-8">
        <div>
          <h4 className="text-3xl font-black tracking-tighter leading-tight mb-2 group-hover:text-blue-400 transition-colors">{biz.name}</h4>
          <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{biz.sector}</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Digital Maturity</span>
            <span className={`text-xl font-black tracking-tighter ${biz.digitalScore > 80 ? 'text-green-400' : 'text-yellow-400'}`}>{biz.digitalScore}%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 delay-300 ${biz.digitalScore > 80 ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]'}`}
              style={{ width: `${biz.digitalScore}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
            <MapPin size={14} className="text-[#E31B23]" />
            <span className="text-[10px] font-bold text-gray-400 truncate">{biz.address.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
            <Phone size={14} className="text-[#0056A4]" />
            <span className="text-[10px] font-bold text-gray-400">{biz.phone}</span>
          </div>
        </div>

        {biz.isDigitalized ? (
          <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-3xl space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-black uppercase text-blue-400 tracking-widest">Vive Talara Active</span>
              <div className="flex gap-2">
                 <QrCode size={14} className="opacity-40" />
                 <Smartphone size={14} className="opacity-40" />
              </div>
            </div>
            <div className="flex justify-between text-xs font-bold">
              <span className="text-white/60">Promos Activas</span>
              <span className="text-white font-black">{biz.activePromos}</span>
            </div>
          </div>
        ) : (
          <div className="bg-white/5 border border-dashed border-white/10 p-6 rounded-3xl group/cta cursor-pointer hover:border-[#E31B23] transition-colors">
            <p className="text-[9px] font-black uppercase text-gray-500 text-center tracking-widest group-hover/cta:text-[#E31B23]">Digitalización Requerida</p>
          </div>
        )}

        <button 
          className={`w-full py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 transition-all ${biz.isDigitalized ? 'bg-white text-slate-950 hover:bg-blue-400' : 'bg-white/5 text-white/20 border border-white/10 hover:border-white/30'}`}
        >
          {biz.isDigitalized ? (
            <>Ingresar al Hub <ArrowUpRight size={14} /></>
          ) : (
            <>Solicitar Auditoría Digital</>
          )}
        </button>
      </div>
    </div>
  );
};
