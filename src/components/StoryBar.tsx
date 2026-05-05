import { motion } from 'motion/react';
import { MOCK_STORIES } from '../constants';
import { cn } from '../lib/utils';

export default function StoryBar({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex flex-col gap-4">
        {MOCK_STORIES.map((story) => (
          <motion.div
            key={story.id}
            data-story-id={story.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 p-2 rounded-xl border border-white/5 bg-white/5 group cursor-pointer hover:border-indigo-500/30 transition-all"
          >
            <div className={cn(
              "w-10 h-10 rounded-full border-2 p-0.5 shrink-0 transition-colors",
              story.viewed ? "border-slate-700" : "border-indigo-500"
            )}>
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                <img 
                  src={story.userAvatar} 
                  alt={story.userName} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate text-slate-200 group-hover:text-white">{story.userName}</p>
              <p className="text-[10px] text-slate-500 truncate">
                {story.viewed ? "Logged" : "Active Transmission"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-6">
      <div className="flex gap-4">
        {MOCK_STORIES.map((story) => (
          <motion.div
            key={story.id}
            data-story-id={story.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 cursor-pointer min-w-[72px]"
          >
            <div className={cn(
              "p-[3px] rounded-full ring-2 transition-all",
              story.viewed ? "ring-slate-800" : "ring-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
            )}>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-black bg-zinc-900">
                <img 
                  src={story.userAvatar} 
                  alt={story.userName} 
                  className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all"
                />
              </div>
            </div>
            <span className="text-[10px] text-slate-500 font-mono text-center truncate w-20 tracking-tighter">
              {story.userName}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
