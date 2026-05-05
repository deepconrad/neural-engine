/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EngineWiki from './pages/EngineWiki';
import StoryBar from './components/StoryBar';
import { AnimatePresence } from 'motion/react';
import { Activity, Shield, Cpu } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-bg-abyss text-slate-100 overflow-hidden pt-16">
        <Navbar />
        
        <div className="flex flex-1 overflow-hidden relative">
          {/* Left Rail: Active Stories */}
          <aside className="hidden lg:flex w-64 border-r border-white/5 bg-black/20 flex-col p-6 overflow-y-auto no-scrollbar">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-6">Active Syncs</h3>
            <StoryBar vertical />
            
            <div className="mt-auto p-4 rounded-2xl bg-gradient-to-t from-indigo-900/40 to-transparent border border-white/10">
              <p className="text-[10px] text-indigo-300 font-bold mb-1 uppercase tracking-wider">Cloud Capacity</p>
              <p className="text-sm font-medium">Edge Node: DC-LDN-01</p>
              <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                <div className="w-4/5 h-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.5)]"></div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto no-scrollbar bg-immersive-glow relative">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/engine" element={<EngineWiki />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </AnimatePresence>
            
            {/* Technical Scanlines */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
                 style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} 
            />
          </main>

          {/* Right Sidebar: Telemetry */}
          <aside className="hidden xl:flex w-72 border-l border-white/5 bg-black/40 p-6 flex-col gap-8 overflow-y-auto no-scrollbar">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-4">Node Telemetry</h3>
              <div className="grid grid-cols-2 gap-3">
                <TelemetryStat label="Latency" value="0.38ms" color="text-emerald-400" />
                <TelemetryStat label="Throughput" value="1.2Pb/s" />
                <TelemetryStat label="Error Rate" value="0.0001%" />
                <TelemetryStat label="HBM3 Usage" value="92.4%" />
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-4">Neural Buffer</h3>
              <div className="space-y-4">
                <BufferEvent status="operational" text="Synaptic sync complete" subtext="Layer-04 Re-routed" />
                <BufferEvent status="busy" text="Weight redistribution" subtext="Training Cluster B-9" color="bg-orange-400" />
                <BufferEvent status="operational" text="Kernel update deployed" subtext="v2.4.1 Build 902" />
              </div>
            </div>

            <div className="mt-auto">
              <div className="aspect-square w-full rounded-2xl border border-white/10 bg-slate-900/50 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
                <div className="z-10 text-center">
                  <div className="w-12 h-12 rounded-full border border-indigo-400/50 mx-auto mb-2 flex items-center justify-center animate-pulse">
                     <Cpu size={24} className="text-indigo-400" />
                  </div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Conrad Core v4</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer Status Bar */}
        <footer className="h-8 border-t border-white/5 bg-black/60 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 text-[10px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> 
              SYSTEM STABLE
            </span>
            <span className="flex items-center gap-1.5 uppercase font-mono">
              <Shield size={10} />
              Secured Link
            </span>
          </div>
          <div className="text-[10px] text-slate-500 font-mono hidden sm:block">
            X-CONRAD-AUTH: AUTH_OK // {new Date().toISOString()}
          </div>
        </footer>
      </div>
    </Router>
  );
}

function TelemetryStat({ label, value, color = "text-white" }: { label: string, value: string, color?: string }) {
  return (
    <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-white/10 transition-colors">
      <p className="text-[10px] text-slate-400 mb-1">{label}</p>
      <p className={`text-lg font-mono leading-none ${color}`}>{value}</p>
    </div>
  )
}

function BufferEvent({ text, subtext, status, color = "bg-indigo-500" }: { text: string, subtext: string, status: string, color?: string }) {
  return (
    <div className="flex items-start gap-3 group">
      <div className={`w-2 h-2 mt-1.5 rounded-full ${color} shrink-0 shadow-[0_0_8px_currentColor]`}></div>
      <div>
        <p className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">{text}</p>
        <p className="text-[10px] text-slate-500">{subtext}</p>
      </div>
    </div>
  )
}
