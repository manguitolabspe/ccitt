
import React from 'react';
import { LayoutDashboard, Users, FileText, Activity, Settings, LogOut, Shield } from 'lucide-react';

export type DashboardTab = 'overview' | 'members' | 'procedures' | 'analytics';

interface SidebarProps {
  currentTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onTabChange, onLogout }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'members', label: 'Gestión de Socios', icon: <Users size={20} /> },
    { id: 'procedures', label: 'Trámites & Colas', icon: <FileText size={20} /> },
    { id: 'analytics', label: 'Analytics Digital', icon: <Activity size={20} /> },
  ];

  return (
    <aside className="w-80 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 p-10 flex flex-col hidden lg:flex">
      <div className="flex items-center gap-4 mb-20">
        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-black text-[#0056A4] text-xl">C</div>
        <div className="flex flex-col">
          <span className="font-black text-xl tracking-tighter">Admin Console</span>
          <span className="text-[8px] uppercase font-black tracking-widest text-[#E31B23]">CCITT System V2</span>
        </div>
      </div>

      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id as DashboardTab)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold text-sm tracking-tight transition-all relative group ${
              currentTab === item.id 
                ? 'bg-[#0056A4] text-white shadow-lg shadow-blue-900/20' 
                : 'text-gray-500 hover:text-white hover:bg-white/5'
            }`}
          >
             {item.icon}
             {item.label}
             {currentTab === item.id && (
               <span className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
             )}
          </button>
        ))}
      </nav>

      <div className="pt-10 border-t border-white/5 space-y-4">
        <div className="bg-white/5 p-6 rounded-3xl mb-6">
           <div className="flex items-center gap-3 text-blue-400 mb-2">
              <Shield size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Root Access</span>
           </div>
           <p className="text-[9px] text-gray-500 font-medium leading-relaxed">Sesión protegida por encriptación end-to-end de Manguito Labs.</p>
        </div>
        
        <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 font-bold text-sm tracking-tight transition-all">
           <Settings size={20} /> Configuraciones
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-500/10 font-bold text-sm tracking-tight transition-all"
        >
           <LogOut size={20} /> Cerrar Sistema
        </button>
      </div>
    </aside>
  );
};
