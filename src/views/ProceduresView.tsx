
import React from 'react';
import { FileCheck, Landmark, Briefcase, Users, ArrowRight, ShieldCheck, Lock, Fingerprint, Activity, Terminal } from 'lucide-react';
import { CURRENT_YEAR } from '../core/constants';

const ProceduresView: React.FC = () => {
  const procedures = [
    { 
      icon: <FileCheck className="w-10 h-10" />, 
      title: 'Certificados de Origen', 
      desc: 'Validación oficial con firma digital biométrica para exportación global.',
      status: 'Fast Track',
      security: 'SSL Encriptado',
      steps: 3
    },
    { 
      icon: <Landmark className="w-10 h-10" />, 
      title: 'Registro de Protestos', 
      desc: 'Regularización en tiempo real conectada a la base de datos nacional de riesgos.',
      status: 'Real-Time',
      security: 'Secure Node',
      steps: 2
    },
    { 
      icon: <Lock className="w-10 h-10" />, 
      title: 'Asesoría Notarial', 
      desc: 'Formalización de actos jurídicos con protocolos de seguridad institucional.',
      status: 'Programado',
      security: 'Legal Tech',
      steps: 4
    },
    { 
      icon: <Fingerprint className="w-10 h-10" />, 
      title: 'Mesa de Partes Virtual', 
      desc: 'Recepción 24/7 de expedientes digitales con trazabilidad completa via Blockchain.',
      status: 'Active 24/7',
      security: 'Blockchain Verified',
      steps: 1
    }
  ];

  return (
    <div className="pt-32 pb-32 bg-slate-950 text-white min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E31B23]/5 blur-[150px] rounded-full -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Seccion */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
              <Terminal size={14} />
              Secure Transaction Protocol v{CURRENT_YEAR}.1
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              Digital<br/>
              <span className="text-[#0056A4]">Transactions</span>
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              Hemos eliminado la burocracia física. Bienvenido a la gestión de expedientes con <span className="text-white font-bold">trazabilidad total</span> y seguridad de grado militar.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] flex items-center gap-6 group cursor-pointer hover:bg-white/10 transition-all">
             <div className="w-16 h-16 bg-[#E31B23] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(227,27,35,0.4)] group-hover:rotate-12 transition-transform">
                <ShieldCheck size={32} />
             </div>
             <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Estado del Sistema</p>
                <p className="text-xl font-black text-green-400 flex items-center gap-2">
                   ENCULADO <Activity size={16} className="animate-pulse" />
                </p>
             </div>
          </div>
        </div>

        {/* Grid de Trámites con Look de Software de Seguridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {procedures.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/5 border border-white/10 rounded-[4rem] p-12 hover:bg-white/[0.08] transition-all duration-700 overflow-hidden"
            >
              {/* Decoración de esquina inferior */}
              <div className="absolute bottom-0 right-0 p-12 opacity-5 scale-150 group-hover:scale-[2] transition-transform duration-1000">
                {item.icon}
              </div>

              <div className="flex flex-col md:flex-row gap-10 relative z-10">
                <div className="w-24 h-24 bg-slate-900 rounded-[2rem] border border-white/10 flex items-center justify-center text-[#0056A4] group-hover:text-blue-400 transition-colors shadow-inner">
                  {item.icon}
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-3xl font-black tracking-tight mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                      <div className="flex gap-3">
                         <span className="text-[9px] font-black uppercase tracking-widest text-green-400 bg-green-400/10 px-3 py-1 rounded-full">{item.status}</span>
                         <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 bg-white/5 px-3 py-1 rounded-full">{item.security}</span>
                      </div>
                    </div>
                    <div className="text-right">
                       <span className="text-[24px] font-black text-white/10 group-hover:text-blue-500/20 transition-colors">0{idx + 1}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
                    {item.desc}
                  </p>

                  {/* Progress Indicator (Steps) */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                       <span>Flujo de Aprobación</span>
                       <span>{item.steps} Niveles</span>
                    </div>
                    <div className="flex gap-2">
                       {[...Array(item.steps)].map((_, i) => (
                         <div key={i} className="h-1 flex-1 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                       ))}
                       {[...Array(4 - item.steps)].map((_, i) => (
                         <div key={i} className="h-1 flex-1 bg-white/10 rounded-full"></div>
                       ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.3em] group/btn">
                      <span className="group-hover/btn:mr-2 transition-all">Iniciar Trámite Seguro</span>
                      <ArrowRight size={14} className="text-[#E31B23]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Auditoría y Transparencia */}
        <div className="mt-32 p-16 bg-white rounded-[5rem] text-slate-950 flex flex-col lg:flex-row items-center gap-16 shadow-[0_0_100px_rgba(255,255,255,0.05)]">
           <div className="relative">
              <div className="w-32 h-32 bg-slate-100 rounded-[2.5rem] flex items-center justify-center">
                 <Lock size={48} className="text-[#0056A4]" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#E31B23] p-4 rounded-2xl text-white">
                 <ShieldCheck size={24} />
              </div>
           </div>
           
           <div className="flex-1 text-center lg:text-left">
              <h4 className="text-4xl font-black tracking-tighter mb-4">Integridad Garantizada</h4>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Cada documento emitido por la Cámara cuenta con un <span className="text-slate-900 font-bold">Código QR único de validación</span> y está respaldado por los protocolos de seguridad de <span className="text-slate-900 font-bold">Manguito Labs</span>. Puede verificar la autenticidad de cualquier trámite en nuestra plataforma Vive Talara.
              </p>
           </div>

           <div className="flex flex-col gap-4 w-full lg:w-auto">
              <button className="bg-slate-950 text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
                Validar Documento
              </button>
              <button className="border-2 border-slate-950 text-slate-950 px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-all">
                Descargar Manual Digital
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProceduresView;
