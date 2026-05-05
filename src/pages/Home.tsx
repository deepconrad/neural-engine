import StoryBar from '../components/StoryBar';
import PostCard from '../components/PostCard';
import CommentDrawer from '../components/CommentDrawer';
import { MOCK_POSTS, MOCK_STORIES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cpu } from 'lucide-react';
import { useState } from 'react';
import { Post } from '../types';

export default function Home() {
  const [activeStory, setActiveStory] = useState<string | null>(null);
  const [activeCommentPost, setActiveCommentPost] = useState<Post | null>(null);

  const selectedStory = MOCK_STORIES.find(s => s.id === activeStory);

  return (
    <div className="max-w-3xl mx-auto pb-24 md:pb-8 pt-6 md:pt-12 px-4 lg:px-8">
      {/* Mobile-only header and stories */}
      <header className="flex items-center justify-between mb-6 lg:hidden">
        <div className="flex items-center gap-2">
          <Cpu className="text-indigo-400 w-5 h-5" />
          <h1 className="font-mono font-bold tracking-tighter text-sm uppercase">Deep Conrad</h1>
        </div>
      </header>

      <section className="mb-8 overflow-hidden lg:hidden">
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          const storyId = target.closest('[data-story-id]')?.getAttribute('data-story-id');
          if (storyId) setActiveStory(storyId);
        }}>
          <StoryBar />
        </div>
      </section>

      <main className="space-y-12">
        <div className="mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-indigo-500/30"></span>
            Global Feed
          </h2>
        </div>
        
        {MOCK_POSTS.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <PostCard 
              post={post} 
              onCommentClick={() => setActiveCommentPost(post)}
            />
          </motion.div>
        ))}
      </main>

      <CommentDrawer 
        isOpen={!!activeCommentPost} 
        onClose={() => setActiveCommentPost(null)} 
        post={activeCommentPost} 
      />

      <AnimatePresence>
        {activeStory && selectedStory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-8"
          >
            <button 
              onClick={() => setActiveStory(null)}
              className="absolute top-6 right-6 text-white z-[120] hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative aspect-[9/16] h-full max-h-[85vh] bg-zinc-900 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.2)] border border-white/10"
            >
              <img src={selectedStory.media} className="w-full h-full object-cover" alt="Story" />
              
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
                  <img src={selectedStory.userAvatar} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">{selectedStory.userName}</div>
                  <div className="text-[10px] text-indigo-400 font-mono flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse"></span>
                    ACTIVE SYNC
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-6 right-6">
                <div className="p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                  <p className="text-white text-sm font-medium leading-relaxed">Neural-Engine v2.4 Integrity: 100%. Node distribution complete.</p>
                </div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 flex gap-1 p-4">
                <div className="h-[2px] flex-1 bg-indigo-500 rounded-full" />
                <div className="h-[2px] flex-1 bg-white/20 rounded-full" />
                <div className="h-[2px] flex-1 bg-white/20 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
