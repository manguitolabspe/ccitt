
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { NEWS } from '../core/constants';

const News: React.FC = () => {
  return (
    <section id="noticias" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-24">
          <div>
            <span className="text-[#E31B23] font-black tracking-[0.4em] uppercase text-xs mb-4 block">Actualidad</span>
            <h3 className="text-4xl md:text-6xl font-black text-[#0056A4] tracking-tighter">Sala de Prensa</h3>
          </div>
          <button className="hidden md:flex items-center text-[#0056A4] font-black uppercase text-xs tracking-[0.2em] hover:mr-4 transition-all">
            Ver todas <ArrowRight className="ml-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative group cursor-pointer overflow-hidden rounded-[3rem] shadow-2xl">
            <img src={NEWS[0].image} alt={NEWS[0].title} className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent flex flex-col justify-end p-12">
              <div className="flex items-center text-[#FBBF24] text-xs font-black uppercase tracking-widest mb-6">
                <Calendar size={16} className="mr-3" />
                {NEWS[0].date}
              </div>
              <h4 className="text-4xl font-black text-white mb-6 leading-none tracking-tighter">{NEWS[0].title}</h4>
              <p className="text-gray-300 text-lg font-light line-clamp-2 mb-8 leading-relaxed">{NEWS[0].summary}</p>
              <button className="bg-[#E31B23] text-white px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest w-fit hover:scale-105 transition-transform shadow-xl">
                Leer Noticia Completa
              </button>
            </div>
          </div>

          <div className="space-y-12">
            {NEWS.slice(1).map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-8 group cursor-pointer items-center">
                <div className="w-full sm:w-60 h-44 flex-shrink-0 overflow-hidden rounded-[2rem] shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center text-gray-400 text-[10px] font-black uppercase tracking-widest mb-3">
                    <span className="text-[#0056A4] mr-4">{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-800 group-hover:text-[#0056A4] transition-colors mb-4 line-clamp-2 leading-tight tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-2">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
