
import React, { useState, useMemo } from 'react';
import { Search, Radio, LayoutGrid, Activity, ShieldCheck } from 'lucide-react';
import { DIRECTORY } from '../core/constants';
import { BusinessCard } from './directory/BusinessCard';

const Directory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSector, setActiveSector] = useState('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'radar'>('grid');

  const sectors = useMemo(() => ['Todos', ...new Set(DIRECTORY.map(b => b.sector))], []);

  const filtered = DIRECTORY.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         b.sector.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = activeSector === 'Todos' || b.sector === activeSector;
    return matchesSearch && matchesSector;
  });

  return (
    <section id="directorio" className="py-32 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-24">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
                <Activity size={14} className="animate-pulse" />
                Live Business Intelligence
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                Smart<br/>
                <span className="text-[#0056A4]">Directory</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 w-full lg:w-auto">
              <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10 self-end">
                <button onClick={() => setViewMode('grid')} className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'grid' ? 'bg-[#0056A4] text-white' : 'text-gray-500 hover:text-white'}`}>
                  <LayoutGrid size={14} /> Grid
                </button>
                <button onClick={() => setViewMode('radar')} className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'radar' ? 'bg-[#E31B23] text-white' : 'text-gray-500 hover:text-white'}`}>
                  <Radio size={14} className={viewMode === 'radar' ? 'animate-ping' : ''} /> Radar
                </button>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Escanear empresa o sector..."
                  className="w-full lg:w-96 bg-white/5 border-2 border-white/10 rounded-2xl py-6 px-14 focus:border-[#0056A4] focus:bg-white/10 focus:outline-none transition-all font-bold text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-20">
          {sectors.map(sector => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${activeSector === sector ? 'bg-white text-slate-950 border-white' : 'bg-transparent border-white/10 text-white/40'}`}
            >
              {sector}
            </button>
          ))}
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((biz) => <BusinessCard key={biz.id} biz={biz} />)}
          </div>
        ) : (
          <div className="h-[600px] bg-white/5 border border-white/10 rounded-[4rem] relative flex items-center justify-center overflow-hidden">
            <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-[#0056A4]/20 to-transparent rotate-0 animate-[spin_4s_linear_infinite]"></div>
            <div className="relative z-10 text-center">
              <Radio size={48} className="text-[#E31B23] mx-auto mb-6 animate-ping" />
              <h3 className="text-3xl font-black tracking-tight">Escaneando Perímetro</h3>
            </div>
          </div>
        )}

        <div className="mt-32 p-12 lg:p-24 bg-gradient-to-br from-[#0056A4] via-blue-900 to-slate-950 rounded-[5rem] relative overflow-hidden text-center shadow-3xl">
           <div className="absolute top-0 right-0 p-12 opacity-10"><ShieldCheck size={160} /></div>
           <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter">¿Su negocio no supera el 50% de score?</h3>
              <button className="bg-white text-[#0056A4] px-16 py-7 rounded-[2.5rem] font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all">
                Agendar Auditoría Tech
              </button>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes scanner { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
      `}</style>
    </section>
  );
};

export default Directory;
