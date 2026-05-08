import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Eye, Edit3, Send, Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

export default function ArticleEditor({ 
  isOpen, 
  onClose,
  onSubmit
}: { 
  isOpen: boolean; 
  onClose: () => void;
  onSubmit: (article: any) => void;
}) {
  const [mode, setMode] = useState<'edit' | 'preview'>('edit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Research');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title || !content) return;
    onSubmit({
      id: Math.random().toString(36).substr(2, 9),
      title,
      category,
      excerpt,
      content,
      author: 'Current User',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: `${Math.ceil(content.split(' ').length / 200)} min read`,
      comments: []
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-bg-abyss border border-border-main rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-border-main flex items-center justify-between bg-bg-abyss/80 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-text-main">Author Neural Technical Article</h2>
                <div className="flex bg-bg-main p-1 rounded-lg border border-border-main">
                  <button 
                    onClick={() => setMode('edit')}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all",
                      mode === 'edit' ? "bg-indigo-500 text-white shadow-lg" : "text-text-muted hover:text-text-main"
                    )}
                  >
                    <Edit3 size={14} />
                    Edit
                  </button>
                  <button 
                    onClick={() => setMode('preview')}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all",
                      mode === 'preview' ? "bg-indigo-500 text-white shadow-lg" : "text-text-muted hover:text-text-main"
                    )}
                  >
                    <Eye size={14} />
                    Preview
                  </button>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-bg-main rounded-full text-text-muted hover:text-text-main transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Editor Body */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-8">
              {mode === 'edit' ? (
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-1">Article Title</label>
                      <input 
                        type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Synaptic Pathway Optimization in v2.4"
                        className="w-full bg-bg-main border border-border-main rounded-xl px-4 py-3 text-text-main focus:border-indigo-500 outline-none transition-all placeholder:text-text-muted/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-1">Category</label>
                      <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-bg-main border border-border-main rounded-xl px-4 py-3 text-text-main focus:border-indigo-500 outline-none transition-all"
                      >
                        <option>Research</option>
                        <option>Architecture</option>
                        <option>Deployment</option>
                        <option>Optimization</option>
                        <option>Hardware</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-text-muted tracking-widest px-1">Excerpt (Short Summary)</label>
                    <textarea 
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      placeholder="Brief overview of the technical document..."
                      rows={2}
                      className="w-full bg-bg-main border border-border-main rounded-xl px-4 py-3 text-text-main focus:border-indigo-500 outline-none transition-all resize-none placeholder:text-text-muted/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between px-1">
                      <label className="text-[10px] uppercase font-black text-text-muted tracking-widest">Technical Content (Markdown Supported)</label>
                      <div className="flex items-center gap-1.5 text-[10px] text-indigo-500 font-bold">
                        <Info size={10} />
                        Use Markdown for formatting
                      </div>
                    </div>
                    <textarea 
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="# Your Technical Documentation..."
                      className="w-full bg-bg-main border border-border-main rounded-xl px-6 py-6 text-text-main focus:border-indigo-500 outline-none transition-all min-h-[400px] font-mono text-sm leading-relaxed placeholder:text-text-muted/30"
                    />
                  </div>
                </div>
              ) : (
                <div className="max-w-3xl mx-auto prose dark:prose-invert prose-indigo prose-sm md:prose-base">
                  <div className="mb-12 border-b border-border-main pb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase rounded border border-indigo-500/20">{category}</span>
                      <span className="text-[10px] text-text-muted font-mono uppercase tracking-[0.2em]">Neural Dispatch // Draft</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main mt-0">{title || 'Untitled Knowledge Node'}</h1>
                    <p className="text-xl text-text-muted italic font-light leading-relaxed mt-4">
                      {excerpt || 'No excerpt provided.'}
                    </p>
                  </div>
                  <div className="markdown-body">
                    <ReactMarkdown>{content || '*No content authored yet. Switch back to Edit mode to begin.*'}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border-main bg-bg-main/50 flex items-center justify-between">
              <div className="flex items-center gap-4 text-[10px] text-text-muted font-mono uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <span className={cn("w-2 h-2 rounded-full", content.length > 0 ? "bg-emerald-500" : "bg-zinc-500")}></span>
                  Buffer State: {content.length > 0 ? 'Data Loaded' : 'Empty'}
                </span>
                <span>Byte Count: {new Blob([content]).size} B</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={onClose}
                  className="px-6 py-2 rounded-full text-xs font-bold text-text-muted hover:text-text-main transition-colors"
                >
                  Discard Draft
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={!title || !content}
                  className="flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white text-xs font-black uppercase tracking-widest hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-indigo-600/20 transition-all"
                >
                  <Send size={14} />
                  Transmit Article
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
