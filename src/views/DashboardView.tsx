
import React, { useState } from 'react';
import { Bell, Search, Zap, PieChart } from 'lucide-react';
import { Sidebar, DashboardTab } from '../components/dashboard/Sidebar';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { MembersManager } from '../components/dashboard/MembersManager';
import { ProceduresQueue } from '../components/dashboard/ProceduresQueue';

interface DashboardViewProps {
  onLogout: () => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <>
            <StatsGrid />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <ActivityFeed />
              <div className="lg:col-span-4 space-y-10">
                <div className="bg-gradient-to-br from-[#0056A4] to-blue-900 rounded-[3.5rem] p-10 shadow-3xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10"><PieChart size={120} /></div>
                   <h3 className="text-xl font-black tracking-tight mb-4">Maturity Score</h3>
                   <div className="text-6xl font-black tracking-tighter mb-4">74%</div>
                   <p className="text-blue-100 text-xs font-medium leading-relaxed mb-8">Nivel de digitalización promedio de la provincia de Talara.</p>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-3/4 shadow-[0_0_15px_white]"></div>
                   </div>
                </div>

                <div className="bg-white rounded-[3.5rem] p-10 text-slate-950 flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-[#E31B23] rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl"><Zap size={28}/></div>
                   <h4 className="text-xl font-black tracking-tight mb-2">Vive Talara Sync</h4>
                   <p className="text-gray-500 text-xs font-medium mb-8">El sistema está sincronizado con los servidores de Manguito Labs.</p>
                   <button className="w-full py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">Audit System Now</button>
                </div>
              </div>
            </div>
          </>
        );
      case 'members':
        return <MembersManager />;
      case 'procedures':
        return <ProceduresQueue />;
      default:
        return (
          <div className="flex items-center justify-center h-[60vh] text-gray-600 font-black uppercase tracking-[0.5em]">
             Working on Analytics Protocol...
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar 
        currentTab={activeTab} 
        onTabChange={setActiveTab} 
        onLogout={onLogout} 
      />

      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        {/* Top Navigation Hub */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-2">
              {activeTab === 'overview' && 'CCITT Central Hub'}
              {activeTab === 'members' && 'Socios & Membresías'}
              {activeTab === 'procedures' && 'Gestión Documental'}
              {activeTab === 'analytics' && 'Intelligence Suite'}
            </h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              Nivel de acceso: <span className="text-blue-400">Administrador Global</span>
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <input type="text" placeholder="Escaneo global de sistema..." className="bg-white/5 border border-white/10 rounded-2xl py-3 px-10 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder-white/10 w-64" />
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <button className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all relative">
              <Bell size={18} />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            </button>
            <div className="flex items-center gap-4 bg-white/5 p-2 pr-6 rounded-2xl border border-white/10">
               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl border border-white/10 shadow-lg"></div>
               <div>
                  <p className="text-[9px] font-black uppercase tracking-widest leading-none">Admin CCITT</p>
                  <p className="text-[8px] text-gray-500 font-medium">Root Access</p>
               </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        {renderContent()}

        <div className="lg:hidden mt-20">
          <button onClick={onLogout} className="w-full py-6 bg-red-600 text-white rounded-[2rem] font-black uppercase text-xs tracking-widest">
            Logout CCITT System
          </button>
        </div>
      </main>
    </div>
  );
};

export default DashboardView;
