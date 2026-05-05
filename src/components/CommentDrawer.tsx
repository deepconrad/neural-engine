import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageSquare } from 'lucide-react';
import { Comment } from '../types';

export default function CommentDrawer({ 
  isOpen, 
  onClose, 
  comments, 
  title = "System Logs" 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  comments: Comment[];
  title?: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-end p-0 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full md:w-[450px] h-[80vh] md:h-full bg-bg-abyss border-t md:border-l border-white/10 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="text-indigo-400" size={20} />
                <h2 className="text-lg font-bold">{title} ({comments.length})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {comments.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-500 opacity-50 space-y-4">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center">
                    <MessageSquare size={32} />
                  </div>
                  <p className="text-sm font-mono uppercase tracking-widest">No logs detected</p>
                </div>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/10 shrink-0 overflow-hidden">
                      <img src={comment.userAvatar} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-white">{comment.userName}</span>
                        <span className="text-[10px] text-slate-500 font-mono italic">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{comment.text}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-white/10 bg-black/20">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Inject new diagnostic log..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none focus:border-indigo-500 transition-colors"
                />
                <button className="absolute right-2 top-1.5 p-1.5 text-indigo-400 hover:text-indigo-300 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
