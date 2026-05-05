import React from 'react';
import { motion } from 'motion/react';
import { Activity, Server, Globe, Cpu, AlertTriangle } from 'lucide-react';

export default function Nodes() {
  const nodes = [
    { id: 'DC-LDN-01', location: 'London, UK', status: 'Optimal', throughput: '1.2Pb/s', load: 42 },
    { id: 'DC-NYC-04', location: 'New York, USA', status: 'Optimal', throughput: '0.9Pb/s', load: 68 },
    { id: 'DC-TYO-02', location: 'Tokyo, JP', status: 'Maintenance', throughput: '0.0Pb/s', load: 0 },
    { id: 'DC-SIN-09', location: 'Singapore', status: 'Optimal', throughput: '1.4Pb/s', load: 15 },
    { id: 'DC-FRA-03', location: 'Frankfurt, DE', status: 'High Load', throughput: '2.1Pb/s', load: 92 },
  ];

  return (
    <div className="max-w-4xl mx-auto pb-24 md:pb-20 pt-12 px-4 md:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Neural Nodes</h1>
        <p className="text-text-muted">Real-time status of the global Deep Conrad Neural-Engine distribution network.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-bg-abyss/40 border border-border-main rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-indigo-500/30 transition-all shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                node.status === 'Optimal' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 
                node.status === 'Maintenance' ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'
              }`}>
                <Server size={24} />
              </div>
              <div>
                <h3 className="font-bold text-text-main flex items-center gap-2">
                  {node.id}
                  {node.status === 'Maintenance' && <AlertTriangle size={14} className="text-orange-600 dark:text-orange-400" />}
                </h3>
                <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                  <Globe size={12} />
                  {node.location}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <div>
                <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Throughput</p>
                <p className="text-sm font-mono text-text-main">{node.throughput}</p>
              </div>
              <div>
                <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Load</p>
                <div className="flex items-center gap-2 w-24">
                  <div className="flex-1 h-1.5 bg-bg-main rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${node.load}%` }}
                      className={`h-full ${node.load > 85 ? 'bg-red-500' : 'bg-indigo-500'}`}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">{node.load}%</span>
                </div>
              </div>
              <div className="text-right min-w-[80px]">
                <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Status</p>
                <p className={`text-xs font-bold uppercase tracking-tighter ${
                  node.status === 'Optimal' ? 'text-emerald-600 dark:text-emerald-400' : 
                  node.status === 'Maintenance' ? 'text-orange-600 dark:text-orange-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {node.status}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
