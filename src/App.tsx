/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EngineWiki from './pages/EngineWiki';
import Nodes from './pages/Nodes';
import StoryBar from './components/StoryBar';
import { AnimatePresence } from 'motion/react';
import { Activity, Shield, Cpu } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className={cn(
        "flex flex-col h-screen bg-bg-main text-text-main overflow-hidden pt-16 transition-colors duration-300",
        isDark && "dark"
      )}>
        <Navbar 
          onDeployClick={() => window.location.href = 'https://trendwaveconnect.com'} 
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        
        <div className="flex flex-1 overflow-hidden relative">
          <main className="flex-1 overflow-y-auto no-scrollbar bg-immersive-glow relative z-10">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/engine" element={<EngineWiki />} />
                <Route path="/nodes" element={<Nodes />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </AnimatePresence>
          </main>
          
          {/* Left Rail: Active Stories */}
          <aside className="hidden lg:flex w-64 border-r border-border-main bg-bg-abyss/40 flex-col p-6 overflow-y-auto no-scrollbar shrink-0">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold mb-6">Active Syncs</h3>
            <StoryBar vertical />
            
            <div className="mt-auto p-4 rounded-2xl bg-gradient-to-t from-indigo-500/10 to-transparent border border-border-main">
              <p className="text-[10px] text-indigo-500 font-bold mb-1 uppercase tracking-wider">Cloud Capacity</p>
              <p className="text-sm font-medium">Edge Node: DC-LDN-01</p>
              <div className="w-full bg-border-main h-1 rounded-full mt-2 overflow-hidden">
                <div className="w-4/5 h-full bg-indigo-500 shadow-[0_0_8px_rgba(129,140,248,0.5)]"></div>
              </div>
            </div>
          </aside>

          {/* Technical Scanlines */}
          <div className="fixed inset-0 pointer-events-none z-0 opacity-100" 
               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-scanline) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
          />

          {/* Right Sidebar: Telemetry */}
          <aside className="hidden xl:flex w-72 border-l border-border-main bg-bg-abyss/60 p-6 flex-col gap-8 overflow-y-auto no-scrollbar shrink-0">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold mb-4">Node Telemetry</h3>
              <div className="grid grid-cols-2 gap-3">
                <TelemetryStat label="Latency" value="0.38ms" color="text-emerald-500" />
                <TelemetryStat label="Throughput" value="1.2Pb/s" />
                <TelemetryStat label="Error Rate" value="0.0001%" />
                <TelemetryStat label="HBM3 Usage" value="92.4%" />
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold mb-4">Neural Buffer</h3>
              <div className="space-y-4">
                <BufferEvent status="operational" text="Synaptic sync complete" subtext="Layer-04 Re-routed" />
                <BufferEvent status="busy" text="Weight redistribution" subtext="Training Cluster B-9" color="bg-orange-500" />
                <BufferEvent status="operational" text="Kernel update deployed" subtext="v2.4.1 Build 902" />
              </div>
            </div>

            <div className="mt-auto">
              <div className="aspect-square w-full rounded-2xl border border-border-main bg-bg-main flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                <div className="z-10 text-center">
                  <div className="w-12 h-12 rounded-full border border-indigo-500/20 mx-auto mb-2 flex items-center justify-center animate-pulse">
                     <Cpu size={24} className="text-indigo-500" />
                  </div>
                  <p className="text-[10px] uppercase font-bold text-text-muted tracking-widest">Conrad Core v4</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer Status Bar */}
        <footer className="h-8 border-t border-border-main bg-bg-abyss/80 px-6 flex items-center justify-between shrink-0 z-10 transition-colors duration-300">
          <div className="flex items-center gap-4 text-[10px] text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> 
              SYSTEM STABLE
            </span>
            <span className="flex items-center gap-1.5 uppercase font-mono">
              <Shield size={10} />
              Secured Link
            </span>
          </div>
          <div className="text-[10px] text-text-muted font-mono hidden sm:block">
            X-CONRAD-AUTH: AUTH_OK // {new Date().toISOString()}
          </div>
        </footer>
      </div>
    </Router>
  );
}

function TelemetryStat({ label, value, color = "text-text-main" }: { label: string, value: string, color?: string }) {
  return (
    <div className="bg-bg-abyss/20 rounded-xl p-3 border border-border-main hover:border-indigo-500/20 transition-colors">
      <p className="text-[10px] text-text-muted mb-1">{label}</p>
      <p className={`text-lg font-mono leading-none ${color}`}>{value}</p>
    </div>
  )
}

function BufferEvent({ text, subtext, status, color = "bg-indigo-500" }: { text: string, subtext: string, status: string, color?: string }) {
  return (
    <div className="flex items-start gap-3 group">
      <div className={`w-2 h-2 mt-1.5 rounded-full ${color} shrink-0 shadow-[0_0_8px_currentColor]`}></div>
      <div>
        <p className="text-xs font-medium text-text-main group-hover:text-indigo-500 transition-colors">{text}</p>
        <p className="text-[10px] text-text-muted">{subtext}</p>
      </div>
    </div>
  )
}
