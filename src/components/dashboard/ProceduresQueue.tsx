
import React from 'react';
import { CheckCircle2, XCircle, Clock, FileText, Shield, ExternalLink } from 'lucide-react';

export const ProceduresQueue: React.FC = () => {
  const pending = [
    { id: 'T-842', type: 'Certificado Origen', company: 'Refinería Talara', date: 'Hoy, 10:45', priority: 'Alta' },
    { id: 'T-843', type: 'Levantamiento Protesto', company: 'Logística S.A.', date: 'Hoy, 11:20', priority: 'Normal' },
    { id: 'T-844', type: 'Certificado Origen', company: 'Pesquera del Norte', date: 'Ayer, 16:30', priority: 'Alta' },
    { id: 'T-845', type: 'Alquiler Auditorio', company: 'Municipatidad Talara', date: 'Hoy, 09:15', priority: 'Baja' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tighter mb-2">Cola de Procesamiento</h3>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Protocolo de seguridad SSL v2.1 Activo</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-2xl flex items-center gap-3">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">Servidor de Firmas Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {pending.map((item) => (
          <div key={item.id} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-white/[0.08] transition-all group">
            <div className="flex items-center gap-6 flex-1">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl border border-white/5 flex items-center justify-center text-[#0056A4] group-hover:text-blue-400 transition-colors">
                 <FileText size={28} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                   <h4 className="text-xl font-black tracking-tight">{item.type}</h4>
                   <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">{item.id}</span>
                </div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Socio: {item.company}</p>
                <div className="flex items-center gap-4 mt-2">
                   <div className="flex items-center gap-1.5 text-gray-500 text-[10px] font-bold">
                      <Clock size={12} /> {item.date}
                   </div>
                   <div className={`text-[10px] font-black uppercase ${
                     item.priority === 'Alta' ? 'text-red-500' : 'text-blue-500'
                   }`}>
                      • Prioridad {item.priority}
                   </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 hover:underline bg-blue-400/5 px-4 py-3 rounded-xl border border-blue-400/10">
                  <ExternalLink size={14} /> Ver Expediente
               </button>
               <div className="w-px h-10 bg-white/5 mx-2"></div>
               <button className="w-12 h-12 rounded-xl border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center">
                  <XCircle size={20} />
               </button>
               <button className="h-12 px-6 rounded-xl bg-green-600 text-white font-black text-[10px] uppercase tracking-widest hover:bg-green-500 transition-all flex items-center gap-3 shadow-lg shadow-green-900/20">
                  <CheckCircle2 size={18} /> Aprobar Trámite
               </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-10 bg-slate-900 border border-white/5 rounded-[3.5rem] flex items-center gap-8">
         <div className="w-20 h-20 bg-[#0056A4]/10 rounded-3xl flex items-center justify-center text-[#0056A4]">
            <Shield size={40} />
         </div>
         <div>
            <h4 className="text-xl font-black mb-2">Auditoría de Transacciones</h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
              Cada aprobación realizada en esta interfaz queda grabada con la firma digital del administrador. El sistema de Manguito Labs garantiza la inalterabilidad de los folios digitales de la CCITT.
            </p>
         </div>
      </div>
    </div>
  );
};
