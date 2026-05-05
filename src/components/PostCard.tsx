import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark } from 'lucide-react';
import { Post } from '../types';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function PostCard({ post, onCommentClick }: { post: Post; onCommentClick?: () => void }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleAction = (action: string) => {
    alert(`${action} successful on this neural node.`);
  };

  return (
    <article className="bg-white/5 rounded-3xl border border-white/10 p-1 flex flex-col shadow-2xl group hover:border-indigo-500/30 transition-all duration-500">
      <div className="relative rounded-[calc(1.5rem-4px)] overflow-hidden bg-slate-900 border border-white/5 aspect-[4/3] md:aspect-[16/9]">
        {post.media[0].type === 'video' ? (
          <video 
            src={post.media[0].url} 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
          />
        ) : (
          <img 
            src={post.media[0].url} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        )}
        
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
           <span className="px-2 py-0.5 bg-indigo-500 text-[10px] font-black uppercase rounded mb-3 inline-block shadow-lg shadow-indigo-500/40">Neural Insight</span>
           <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight text-white">{post.title}</h2>
           <p className="text-slate-300 text-sm max-w-xl line-clamp-2 md:line-clamp-none font-light italic">
             "{post.content}"
           </p>
        </div>
      </div>

      <div className="h-16 flex items-center px-6 justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleLike}
              className={cn("transition-all active:scale-125 flex items-center gap-1.5 text-xs font-bold", isLiked ? "text-red-500" : "text-slate-400 hover:text-white")}
            >
              <Heart size={18} className={isLiked ? "fill-current" : ""} />
              {likesCount.toLocaleString()}
            </button>
            <button 
              onClick={onCommentClick}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <MessageCircle size={18} />
              {post.comments.length}
            </button>
          </div>
          <div className="flex -space-x-2 hidden sm:flex">
            <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"></div>
            <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-600"></div>
            <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-500 flex items-center justify-center text-[8px] font-bold">+12</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleAction('Transmission sharing')}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Share2 size={18} />
          </button>
          <button 
            onClick={() => handleAction('Node bookmarking')}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Bookmark size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
