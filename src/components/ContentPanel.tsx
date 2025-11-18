import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ContentPanelProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ContentPanel({ children, className = '', delay = 0 }: ContentPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`relative backdrop-blur-md bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 
        rounded-2xl border border-teal-400/30 shadow-2xl overflow-hidden
        hover:border-teal-400/50 transition-all duration-500 ${className}`}
      style={{
        boxShadow: '0 0 40px rgba(20, 184, 166, 0.15), inset 0 0 60px rgba(20, 184, 166, 0.03)'
      }}
    >
      {/* Holographic corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-teal-400/50 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-teal-400/50 rounded-br-2xl" />
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent 
        animate-[shimmer_3s_ease-in-out_infinite]" 
        style={{
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s ease-in-out infinite'
        }}
      />
      
      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  );
}

export function HolographicTitle({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`text-3xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 
        bg-clip-text text-transparent relative inline-block ${className}`}
      style={{
        textShadow: '0 0 20px rgba(20, 184, 166, 0.5)'
      }}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.h2>
  );
}
