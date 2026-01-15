
import React, { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenLogin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Nosotros', id: 'about' },
    { name: 'Servicios', id: 'services' },
    { name: 'Trámites', id: 'procedures' },
    { name: 'Turismo', id: 'tourism' },
    { name: 'Directorio', id: 'directory' },
    { name: 'Noticias', id: 'news' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || (currentPage !== 'home' && currentPage !== 'dashboard') ? 'bg-white/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 md:space-x-3 group cursor-pointer"
            onClick={() => handleLinkClick('home')}
          >
            <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white shadow-xl border-t-2 border-[#E31B23]">
              <div className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl border-2 border-[#0056A4] font-black text-[#0056A4] text-base md:text-xl group-hover:bg-[#0056A4] group-hover:text-white transition-all">
                C
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl md:text-2xl tracking-tighter leading-none ${scrolled || (currentPage !== 'home' && currentPage !== 'dashboard') ? 'text-[#0056A4]' : 'text-white'}`}>CCITT</span>
              <span className={`text-[8px] md:text-[9px] uppercase font-black tracking-widest hidden xs:block ${scrolled || (currentPage !== 'home' && currentPage !== 'dashboard') ? 'text-gray-500' : 'text-gray-200'}`}>Talara</span>
            </div>
          </div>

          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[10px] xl:text-xs font-black uppercase tracking-widest transition-all hover:text-[#E31B23] relative group ${
                  currentPage === link.id 
                    ? 'text-[#E31B23]' 
                    : (scrolled || (currentPage !== 'home' && currentPage !== 'dashboard') ? 'text-slate-800' : 'text-white')
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#E31B23] transition-all ${currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={onOpenLogin}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${scrolled || (currentPage !== 'home' && currentPage !== 'dashboard') ? 'border-slate-200 text-slate-500 hover:bg-slate-50' : 'border-white/20 text-white/60 hover:bg-white/10'}`}
            >
              <Lock size={12} /> Portal Institucional
            </button>
            <button 
              onClick={() => handleLinkClick('membership')}
              className="bg-[#E31B23] text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#c4151c] transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Afíliate
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled || (currentPage !== 'home' && currentPage !== 'dashboard') ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[-1] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
      
      <div className={`lg:hidden bg-white shadow-2xl absolute inset-x-0 top-0 pt-20 pb-10 px-6 rounded-b-[2.5rem] transition-transform duration-500 ease-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`py-4 px-4 text-lg font-black rounded-2xl transition-all border-b border-gray-50 last:border-0 uppercase tracking-tighter text-left ${
                currentPage === link.id ? 'text-[#0056A4] bg-slate-50' : 'text-slate-800'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-6 space-y-4 px-4">
            <button 
              onClick={() => {
                setIsOpen(false);
                onOpenLogin();
              }}
              className="w-full border border-slate-200 text-slate-500 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3"
            >
              <Lock size={16} /> Portal Institucional
            </button>
            <button 
              onClick={() => handleLinkClick('membership')}
              className="w-full bg-[#E31B23] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl"
            >
              Afíliate Ahora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
