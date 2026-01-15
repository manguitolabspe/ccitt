
import React from 'react';
import { Users, FileText, Smartphone, Zap } from 'lucide-react';

export const StatsGrid: React.FC = () => {
  const stats = [
    { title: 'Socios Activos', val: '412', delta: '+12%', icon: <Users size={20}/>, color: 'bg-blue-500' },
    { title: 'Trámites Hoy', val: '28', delta: '+5', icon: <FileText size={20}/>, color: 'bg-red-500' },
    { title: 'Solicitudes Digitales', val: '15', delta: 'New', icon: <Smartphone size={20}/>, color: 'bg-green-500' },
    { title: 'Turismo XP Total', val: '45.2K', delta: '+2.1K', icon: <Zap size={20}/>, color: 'bg-yellow-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {stats.map((s, i) => (
        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.08] transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div className={`${s.color} p-4 rounded-2xl text-white shadow-xl`}>{s.icon}</div>
            <span className="text-[10px] font-black uppercase text-green-400 bg-green-400/10 px-3 py-1 rounded-full">{s.delta}</span>
          </div>
          <h4 className="text-3xl font-black tracking-tighter mb-1">{s.val}</h4>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{s.title}</p>
        </div>
      ))}
    </div>
  );
};
