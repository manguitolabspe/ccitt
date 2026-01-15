
import React from 'react';
import { History, ShieldCheck, Target, Eye } from 'lucide-react';

const AboutView: React.FC = () => (
  <div className="pt-32 pb-20">
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#E31B23] font-black tracking-[0.4em] uppercase text-xs mb-6 block">Nuestra Historia</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0056A4] tracking-tighter mb-8">75 Años de Liderazgo Gremial</h2>
            <p className="text-gray-600 text-xl font-light leading-relaxed mb-8">
              Fundada el 15 de agosto de 1948, la Cámara de Comercio de Talara ha sido el pilar fundamental del desarrollo comercial, industrial y turístico de nuestra provincia.
            </p>
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-slate-50 rounded-3xl border-l-8 border-[#0056A4]">
                <History className="text-[#0056A4] w-10 h-10 mb-2" />
                <span className="block font-black text-slate-800">Desde 1948</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-3xl border-l-8 border-[#E31B23]">
                <ShieldCheck className="text-[#E31B23] w-10 h-10 mb-2" />
                <span className="block font-black text-slate-800">Socio Estratégico</span>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0056A4]/10 rounded-full blur-3xl"></div>
             <img 
               src="https://i.postimg.cc/FsVx4jvv/201201206_1735340239999742_130343622303742582_n.jpg" 
               className="rounded-[3rem] shadow-2xl border-t-8 border-[#E31B23] w-full h-[500px] object-cover" 
               alt="Sede Institucional CCITT" 
             />
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-10 overflow-hidden relative">
      <div className="absolute inset-0 bg-[#0056A4]/10"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <div className="w-20 h-20 bg-[#0056A4] rounded-3xl flex items-center justify-center"><Target size={40} /></div>
          <h3 className="text-4xl font-black tracking-tighter">Nuestra Misión</h3>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            Representar y promover el desarrollo integral de la comunidad empresarial de Talara, brindando servicios de excelencia.
          </p>
        </div>
        <div className="space-y-8">
          <div className="w-20 h-20 bg-[#E31B23] rounded-3xl flex items-center justify-center"><Eye size={40} /></div>
          <h3 className="text-4xl font-black tracking-tighter">Nuestra Visión</h3>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            Ser la institución gremial líder y referente en el norte del país, reconocida por su capacidad de innovación.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutView;
