
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap, Code2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  
  const handleLink = (id: string) => {
    onNavigate(id);
    window.scrollTo(0, 0);
  };

  return (
    <footer id="contacto" className="bg-slate-950 text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10 col-span-1 md:col-span-1">
            <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => handleLink('home')}>
              <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center shadow-2xl border-b-4 border-[#E31B23] overflow-hidden p-1.5">
                <img 
                  src="https://i.postimg.cc/J7dqb7tb/favicon-ccitt-camara-comercio-industria-turismo-talara.png" 
                  alt="Logo CCITT" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-3xl tracking-tighter leading-none">CCITT</span>
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mt-1">Provincia de Talara</span>
              </div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Desde 1948 impulsando el crecimiento de Talara. Representamos la voz del empresariado norteño.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#0056A4] transition-all hover:-translate-y-2 border border-white/10">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-[#E31B23]">Presencia</h4>
            <ul className="grid grid-cols-2 gap-y-5 gap-x-4 text-gray-400 text-sm font-bold uppercase tracking-widest">
              <li>Pariñas</li>
              <li>La Brea</li>
              <li>Lobitos</li>
              <li>El Alto</li>
              <li>Los Órganos</li>
              <li>Máncora</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-[#E31B23]">Navegación</h4>
            <ul className="space-y-5 text-gray-400 text-sm font-bold uppercase tracking-widest">
              <li><button onClick={() => handleLink('home')} className="hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => handleLink('about')} className="hover:text-white transition-colors">Nosotros</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-white transition-colors">Servicios</button></li>
              <li><button onClick={() => handleLink('directory')} className="hover:text-white transition-colors">Directorio</button></li>
              <li><button onClick={() => handleLink('news')} className="hover:text-white transition-colors">Noticias</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-[#E31B23]">Contacto</h4>
            <ul className="space-y-8 text-gray-400 text-sm font-medium">
              <li className="flex items-start group">
                <MapPin size={24} className="mr-5 text-[#0056A4] flex-shrink-0 group-hover:text-[#E31B23] transition-colors" />
                <span className="leading-relaxed">Centro Cívico S/N, Talara, Piura, Perú</span>
              </li>
              <li className="flex items-center group">
                <Phone size={24} className="mr-5 text-[#0056A4] flex-shrink-0 group-hover:text-[#E31B23] transition-colors" />
                <span>+51 (073) 381234</span>
              </li>
              <li className="flex items-center group">
                <Mail size={24} className="mr-5 text-[#0056A4] flex-shrink-0 group-hover:text-[#E31B23] transition-colors" />
                <span className="truncate">contacto@camaratalara.org.pe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Créditos de Ingeniería y Desarrollo - Manguito Labs */}
        <div className="mb-16 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 group">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0056A4]/10 flex items-center justify-center text-[#0056A4] group-hover:text-blue-400 transition-colors shadow-inner">
                <Code2 size={32} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-1">Ecosistema Digital</p>
                <p className="text-lg font-bold text-white tracking-tight leading-none">
                  Desarrollado por <span className="text-[#0056A4] font-black group-hover:text-blue-400 transition-colors">Manguito Labs</span>
                </p>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-600 mt-2">Sistemas & Arquitectura Digital © {currentYear}</p>
              </div>
           </div>
           
           <div className="hidden md:block h-16 w-px bg-white/5"></div>
           
           <a 
            href="https://vivetalara.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-6 group/link"
           >
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-1">Alianza de Innovación</p>
                <p className="text-2xl font-black text-white tracking-tighter italic underline decoration-[#E31B23] decoration-2 group-hover/link:text-blue-400 transition-colors">Vive Talara Hub</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#FBBF24] border border-white/10 group-hover/link:bg-[#FBBF24] group-hover/link:text-slate-950 transition-all shadow-xl">
                <Zap size={20} />
              </div>
           </a>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {currentYear} Cámara de Comercio de Talara. Excelencia y Desarrollo.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Libro Reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
