
import React from 'react';
import { Activity, ArrowUpRight } from 'lucide-react';

export const ActivityFeed: React.FC = () => {
  const recentActivities = [
    { user: 'Refinería Talara', action: 'Actualizó Perfil Digital', time: 'hace 2 min', status: 'Approved' },
    { user: 'Rest. El Timón', action: 'Solicitud Certificado Origen', time: 'hace 15 min', status: 'Pending' },
    { user: 'Hotel Puerto Sol', action: 'Activación Kit Vive Talara', time: 'hace 1 h', status: 'Processing' },
    { user: 'Máncora Resort', action: 'Publicó Promoción Flash', time: 'hace 3 h', status: 'Live' },
  ];

  return (
    <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[3.5rem] p-10">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-2xl font-black tracking-tighter">Live Intelligence Feed</h3>
        <button className="text-blue-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
          View Protocol <ArrowUpRight size={14}/>
        </button>
      </div>
      
      <div className="space-y-6">
        {recentActivities.map((act, i) => (
          <div key={i} className="flex items-center justify-between p-6 bg-slate-900/40 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Activity size={18}/>
              </div>
              <div>
                <h5 className="font-black tracking-tight">{act.user}</h5>
                <p className="text-[10px] font-bold text-gray-500 uppercase">{act.action} — <span className="text-gray-600 lowercase">{act.time}</span></p>
              </div>
            </div>
            <span className={`text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-tighter ${
              act.status === 'Approved' ? 'bg-green-500/10 text-green-400' : 
              act.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' : 
              'bg-blue-500/10 text-blue-400'
            }`}>
              {act.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
