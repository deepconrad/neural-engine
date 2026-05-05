import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Rocket, Shield, Zap, Cpu } from 'lucide-react';

export default function DeployModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-bg-abyss border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Deploy Engine Instance</h2>
                <p className="text-slate-400 text-sm">Configure your localized Neural-Engine node on the global edge.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block mb-2">Instance Name</label>
                <input 
                  type="text" 
                  defaultValue="DC-USER-NODE-01"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-indigo-500 transition-colors font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 cursor-pointer transition-all">
                  <div className="text-indigo-400 mb-3"><Zap size={20} /></div>
                  <h3 className="text-sm font-bold text-white mb-1">Standard Core</h3>
                  <p className="text-[10px] text-slate-400">128 Neural Blocks / 0.8ms</p>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/30 cursor-pointer transition-all">
                  <div className="text-slate-400 mb-3"><Rocket size={20} /></div>
                  <h3 className="text-sm font-bold text-white mb-1">Elite Mesh</h3>
                  <p className="text-[10px] text-slate-400">512 Neural Blocks / 0.2ms</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-400">
                <Shield size={20} />
                <span className="text-xs font-medium">Automatic Quantum Encryption Enabled</span>
              </div>
            </div>

            <button 
              onClick={() => {
                alert('Deployment Sequence Initiated. Watch your Node Dashboard.');
                onClose();
              }}
              className="w-full mt-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              <Cpu size={20} />
              Start Deployment
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
