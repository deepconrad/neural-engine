import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, BookOpen, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar({ 
  onDeployClick, 
  isDark, 
  toggleTheme 
}: { 
  onDeployClick?: () => void;
  isDark?: boolean;
  toggleTheme?: () => void;
}) {
  return (
    <nav className="h-16 border-b border-border-main flex items-center justify-between px-6 md:px-8 bg-bg-abyss/80 backdrop-blur-md fixed top-0 left-0 right-0 z-[100]">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <span className="font-bold text-[10px] text-white">DC</span>
        </div>
        <span className="font-bold tracking-tight text-lg md:text-xl hidden sm:block">
          Deep Conrad <span className="text-indigo-500">Engine</span>
        </span>
      </div>
      
      <div className="flex items-center gap-4 md:gap-8 text-sm font-medium text-text-muted">
        <NavLink 
          to="/" 
          className={({ isActive }) => cn("transition-colors hover:text-text-main", isActive ? "text-text-main" : "")}
        >
          Feed
        </NavLink>
        <NavLink 
          to="/nodes" 
          className={({ isActive }) => cn("transition-colors hover:text-text-main", isActive ? "text-text-main" : "")}
        >
          <span className="hidden md:inline">Neural Nodes</span>
          <Activity size={18} className="md:hidden" />
        </NavLink>
        <NavLink 
          to="/engine" 
          className={({ isActive }) => cn("transition-colors hover:text-text-main", isActive ? "text-text-main" : "")}
        >
          <span className="hidden md:inline">Documentation</span>
          <BookOpen size={18} className="md:hidden" />
        </NavLink>

        <div className="flex items-center gap-2 border-l border-border-main pl-4 md:pl-8 ml-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-bg-main transition-colors text-text-muted hover:text-indigo-500"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={onDeployClick}
            className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-500 hover:bg-indigo-500/20 transition-all text-xs font-bold whitespace-nowrap"
          >
            Deploy Instance
          </button>
        </div>
      </div>
    </nav>
  );
}
