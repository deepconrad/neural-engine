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
            className="relative w-full md:w-[450px] h-[80vh] md:h-full bg-bg-abyss border-t md:border-l border-border-main shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-border-main flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="text-indigo-500" size={20} />
                <h2 className="text-lg font-bold text-text-main">{title} ({comments.length})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-bg-main rounded-full text-text-muted hover:text-text-main transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {comments.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-text-muted opacity-50 space-y-4">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-border-main flex items-center justify-center">
                    <MessageSquare size={32} />
                  </div>
                  <p className="text-sm font-mono uppercase tracking-widest">No logs detected</p>
                </div>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-border-main shrink-0 overflow-hidden">
                      <img src={comment.userAvatar} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-text-main">{comment.userName}</span>
                        <span className="text-[10px] text-text-muted font-mono italic">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed">{comment.text}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-border-main bg-bg-main/50">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Inject new diagnostic log..."
                  className="w-full bg-bg-main border border-border-main rounded-xl px-4 py-3 text-sm text-text-main outline-none focus:border-indigo-500 transition-colors"
                />
                <button className="absolute right-2 top-1.5 p-1.5 text-indigo-500 hover:text-indigo-600 transition-colors">
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
