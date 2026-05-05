import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Activity, Shield, Database, LayoutGrid, BookOpen, MessageCircle } from 'lucide-react';
import { MOCK_ARTICLES } from '../constants';
import CommentDrawer from '../components/CommentDrawer';
import { Article } from '../types';

export default function EngineWiki() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <div className="max-w-4xl mx-auto pb-24 md:pb-20 pt-12 px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-16 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-[10px] font-mono mb-6">
          <Activity size={12} />
          <span>CORE STATUS: OPERATIONAL</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-text-main to-text-muted bg-clip-text text-transparent mb-6">
          Neural-Engine
          <br />
          <span className="text-cyan-600 dark:text-cyan-400">Deep Conrad V2.4</span>
        </h1>
        <p className="text-text-muted text-lg max-w-xl font-light leading-relaxed">
          The industry benchmark for massive-scale parallel inference. Optimized for synaptic pathway routing and high-density tensor processing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <SpecCard 
          icon={<Cpu />}
          title="Tensor Cores"
          value="18,432"
          desc="Optimized for FP8 and INT4 precision operations with dedicated synaptic cache."
        />
        <SpecCard 
          icon={<Database />}
          title="Bandwidth"
          value="4.2 TB/s"
          desc="HBM3e memory integration allows for lightning-fast hyper-parameter loading."
        />
        <SpecCard 
          icon={<Zap />}
          title="Latency"
          value="< 0.8ms"
          desc="Sub-millisecond packet-to-prediction response time across distributed clusters."
        />
        <SpecCard 
          icon={<Shield />}
          title="Integrity"
          value="Air-Gapped"
          desc="Quantum-resistant encryption layers protecting every neural transaction."
        />
      </div>

      <section className="border border-border-main bg-bg-abyss/40 rounded-3xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <LayoutGrid className="text-cyan-600 dark:text-cyan-400" />
          Technical Overview
        </h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="font-mono text-xs uppercase text-cyan-600 dark:text-cyan-500 mb-2">01 Architecture</h3>
              <p className="text-sm text-text-muted">The core utilizes a "Liquid Dynamic" mesh, allowing weights to be re-routed dynamically to avoid bottlenecks.</p>
            </div>
            <div className="md:col-span-1">
              <h3 className="font-mono text-xs uppercase text-cyan-600 dark:text-cyan-500 mb-2">02 Cooling</h3>
              <p className="text-sm text-text-muted">Cryo-cycle immersion cooling maintains optimal superconductivity for 24/7 high-load inference.</p>
            </div>
            <div className="md:col-span-1">
              <h3 className="font-mono text-xs uppercase text-cyan-600 dark:text-cyan-500 mb-2">03 Deployment</h3>
              <p className="text-sm text-text-muted">One-click containerization with full compatibility for existing Deep Conrad frameworks.</p>
            </div>
          </div>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border-main group">
             <img 
               src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop" 
               alt="Engine Breakdown" 
               className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
             />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="p-4 bg-bg-abyss/60 backdrop-blur-md rounded-full border border-border-main text-cyan-600 dark:text-cyan-400 font-mono text-sm tracking-widest uppercase">
                 <Activity size={48} className="animate-pulse mb-2 mx-auto" />
                 LIVE STREAM ACTIVE
               </div>
             </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <BookOpen className="text-indigo-500" />
          Technical Articles
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {MOCK_ARTICLES.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ x: 10 }}
              className="p-6 rounded-2xl bg-bg-abyss/40 border border-border-main hover:border-indigo-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest">{article.category}</span>
                  <span className="text-[10px] text-text-muted">•</span>
                  <span className="text-[10px] text-text-muted">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-2">{article.title}</h3>
                <p className="text-sm text-text-muted line-clamp-2 md:line-clamp-1">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-6">
                  <span className="text-[10px] text-text-muted font-mono">By {article.author}</span>
                  <span className="text-[10px] text-text-muted font-mono">{article.readTime}</span>
                  <button 
                    onClick={() => setActiveArticle(article)}
                    className="flex items-center gap-1.5 text-[10px] font-bold text-text-muted hover:text-indigo-500 transition-colors"
                  >
                    <MessageCircle size={14} />
                    {article.comments.length} Discussion
                  </button>
                </div>
              </div>
              <button 
                onClick={() => alert('Article system coming soon.')}
                className="px-6 py-2 rounded-full border border-border-main text-xs font-bold hover:bg-indigo-500/10 transition-colors whitespace-nowrap"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <CommentDrawer 
        isOpen={!!activeArticle} 
        onClose={() => setActiveArticle(null)} 
        comments={activeArticle?.comments || []}
        title={activeArticle?.title}
      />
    </div>
  );
}

function SpecCard({ icon, title, value, desc }: { icon: React.ReactNode, title: string, value: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-cyan-500/30 transition-all group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-cyan-500/5 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
          {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{title}</span>
      </div>
      <div className="text-3xl font-bold text-white mb-2 font-mono tracking-tight">{value}</div>
      <p className="text-xs text-zinc-400 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
