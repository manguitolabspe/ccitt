
import React, { useState } from 'react';
import { Smartphone, CheckCircle2, ShieldCheck, Zap, Info, CreditCard, Rocket } from 'lucide-react';
import { CURRENT_YEAR } from '../core/constants';

const MembershipView: React.FC = () => {
  const [formData, setFormData] = useState({
    razonSocial: '',
    ruc: '',
    sector: 'Industria / Petróleo',
    viveTalara: true // Defaulted to true for impact
  });

  return (
    <div className="pt-40 pb-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="text-[#E31B23] font-black tracking-[0.4em] uppercase text-[10px] block">Manguito Labs x CCITT</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#0056A4] tracking-tighter leading-[0.9]">Transforma<br/>tu Negocio</h2>
              <p className="text-gray-500 text-xl font-light leading-relaxed">
                No es solo una membresía. Es el motor que lanzará su negocio a la era del <strong className="text-slate-900 font-bold">Turismo Inteligente</strong>.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { 
                  icon: <Rocket className="text-[#E31B23]" />, 
                  title: "Lanzamiento Inmediato", 
                  desc: "Su negocio aparecerá en vivetalara.com en menos de 48 horas con todas las funciones Pro." 
                },
                { 
                  icon: <CreditCard className="text-[#0056A4]" />, 
                  title: "Pasarela de Pagos", 
                  desc: "Acepte reservas y cuotas directamente desde la App sin configuraciones complejas." 
                },
                { 
                  icon: <ShieldCheck className="text-green-500" />, 
                  title: "Sello de Confianza", 
                  desc: "Certificación digital respaldada por la Cámara de Comercio ante turistas extranjeros." 
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-12 bg-slate-950 rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#0056A4]/20 rounded-bl-[4rem] -mr-10 -mt-10"></div>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <Smartphone size={24} className="text-[#E31B23]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Vive Talara Partner</span>
                  </div>
                  <p className="text-blue-100 text-xl font-light italic mb-8">"Gracias a Manguito Labs, mi restaurante pasó de ser local a ser una parada obligatoria para turistas extranjeros."</p>
                  <div className="font-bold text-xs uppercase tracking-widest text-blue-400">Restaurante El Timón — Socio CCITT Digital</div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] p-12 md:p-24 relative overflow-hidden border border-slate-100">
              <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-bl-[5rem] -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Onboarding Digital</h3>
                
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-6">Razón Social</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border-2 border-transparent rounded-[1.8rem] py-6 px-10 focus:bg-white focus:border-[#0056A4] focus:outline-none font-bold transition-all shadow-inner" 
                        placeholder="Mi Empresa S.A."
                        value={formData.razonSocial}
                        onChange={(e) => setFormData({...formData, razonSocial: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-6">RUC</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border-2 border-transparent rounded-[1.8rem] py-6 px-10 focus:bg-white focus:border-[#0056A4] focus:outline-none font-bold transition-all shadow-inner" 
                        placeholder="20123456789"
                        value={formData.ruc}
                        onChange={(e) => setFormData({...formData, ruc: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-6">Sector Estratégico</label>
                    <select 
                      className="w-full bg-slate-50 border-2 border-transparent rounded-[1.8rem] py-6 px-10 focus:bg-white focus:border-[#0056A4] focus:outline-none appearance-none font-bold transition-all shadow-inner"
                      value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    >
                      <option>Turismo / Hotelería</option>
                      <option>Gastronomía / Restaurantes</option>
                      <option>Industria Energética</option>
                      <option>Pesca y Comercio</option>
                      <option>Servicios Profesionales</option>
                    </select>
                  </div>

                  {/* Vive Talara Activation */}
                  <div 
                    onClick={() => setFormData({...formData, viveTalara: !formData.viveTalara})}
                    className={`p-10 rounded-[3.5rem] border-4 transition-all cursor-pointer relative overflow-hidden group ${formData.viveTalara ? 'bg-blue-600 border-blue-500 shadow-2xl' : 'bg-slate-50 border-transparent hover:border-slate-200'}`}
                  >
                    {formData.viveTalara && (
                      <div className="absolute top-0 right-0 p-8 opacity-20">
                        <Zap size={80} className="text-white fill-white" />
                      </div>
                    )}
                    <div className="flex gap-8 items-center relative z-10">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all ${formData.viveTalara ? 'bg-white text-blue-600' : 'bg-white border border-slate-200 text-slate-300'}`}>
                        <Smartphone size={28} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-2xl font-black mb-1 tracking-tight ${formData.viveTalara ? 'text-white' : 'text-slate-800'}`}>
                          Activar Kit Vive Talara {CURRENT_YEAR}
                        </h4>
                        <p className={`text-sm font-medium leading-relaxed ${formData.viveTalara ? 'text-blue-100' : 'text-gray-400'}`}>
                          Incluye Menú QR inteligente, Sistema de Fidelización por XP y Campaña Push Marketing por Manguito Labs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className={`w-full py-8 rounded-[2.5rem] font-black uppercase tracking-[0.4em] shadow-3xl transition-all flex items-center justify-center gap-6 group text-sm ${formData.viveTalara ? 'bg-slate-950 hover:bg-[#0056A4]' : 'bg-[#E31B23] hover:bg-red-700'} text-white`}>
                    <Rocket size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    {formData.viveTalara ? 'Solicitar Transformación Digital' : 'Enviar Afiliación Estándar'}
                  </button>
                  
                  <div className="text-center space-y-2">
                    <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.4em]">Technology Ecosystem by Manguito Labs</p>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MembershipView;
