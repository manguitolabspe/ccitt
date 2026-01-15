
import React from 'react';
import { DIRECTORY } from '../../core/constants';
import { Search, Filter, MoreHorizontal, Zap, ShieldCheck } from 'lucide-react';

export const MembersManager: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-black tracking-tighter">Padrón Oficial de Socios</h3>
        <div className="flex gap-4">
           <div className="relative">
              <input type="text" placeholder="Filtrar por RUC o Razón Social..." className="bg-white/5 border border-white/10 rounded-2xl py-3 px-10 text-xs focus:outline-none focus:border-[#0056A4] w-80" />
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
           </div>
           <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-colors">
              <Filter size={18} />
           </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">Socio / Empresa</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">Sector</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">Nivel</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">Score Digital</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">Estado</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {DIRECTORY.map((biz) => (
              <tr key={biz.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10">
                       <img src={biz.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">{biz.name}</p>
                      <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">ID: {biz.id}00-TAL</p>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                   <span className="text-xs font-medium text-gray-400">{biz.sector}</span>
                </td>
                <td className="p-6">
                   <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase ${
                     biz.level === 'Platinum' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                     biz.level === 'Gold' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                     'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                   }`}>
                     {biz.level}
                   </span>
                </td>
                <td className="p-6">
                   <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 w-20 bg-white/5 rounded-full overflow-hidden">
                         <div className={`h-full ${biz.digitalScore > 80 ? 'bg-green-500' : 'bg-yellow-500'}`} style={{ width: `${biz.digitalScore}%` }}></div>
                      </div>
                      <span className="text-xs font-black">{biz.digitalScore}%</span>
                   </div>
                </td>
                <td className="p-6">
                   <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      <span className="text-[10px] font-black uppercase text-gray-400">Activo</span>
                   </div>
                </td>
                <td className="p-6 text-right">
                  <button className="p-2 text-gray-600 hover:text-white transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-6">
         <div className="flex-1 bg-gradient-to-br from-[#0056A4] to-blue-900 rounded-[2.5rem] p-8 flex items-center justify-between">
            <div>
               <h4 className="text-xl font-black mb-1">Membresías Platinum</h4>
               <p className="text-blue-200 text-xs font-medium">Empresas con nivel de influencia estratégica.</p>
            </div>
            <div className="text-4xl font-black">12</div>
         </div>
         <div className="flex-1 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-between">
            <div>
               <h4 className="text-xl font-black mb-1">Empresas Digitalizadas</h4>
               <p className="text-gray-500 text-xs font-medium">Socios activos en el ecosistema Vive Talara.</p>
            </div>
            <div className="text-4xl font-black text-[#E31B23]">
               <div className="flex items-center gap-3">
                  <Zap size={24} className="animate-pulse" /> 84%
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
