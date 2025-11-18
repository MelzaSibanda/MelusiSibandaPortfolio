import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface NavigationOrbProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  delay?: number;
  color?: string;
}

export function NavigationOrb({ 
  icon: Icon, 
  label, 
  onClick, 
  delay = 0,
  color = 'teal'
}: NavigationOrbProps) {
  const colorClasses = {
    teal: 'from-teal-500/20 to-cyan-500/20 border-teal-400/40 hover:border-teal-400 hover:shadow-teal-400/50',
    purple: 'from-purple-500/20 to-pink-500/20 border-purple-400/40 hover:border-purple-400 hover:shadow-purple-400/50',
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-400/40 hover:border-blue-400 hover:shadow-blue-400/50',
    pink: 'from-pink-500/20 to-rose-500/20 border-pink-400/40 hover:border-pink-400 hover:shadow-pink-400/50',
    yellow: 'from-yellow-500/20 to-orange-500/20 border-yellow-400/40 hover:border-yellow-400 hover:shadow-yellow-400/50'
  };

  const glowColors = {
    teal: 'rgba(20, 184, 166, 0.4)',
    purple: 'rgba(168, 85, 247, 0.4)',
    blue: 'rgba(59, 130, 246, 0.4)',
    pink: 'rgba(236, 72, 153, 0.4)',
    yellow: 'rgba(251, 191, 36, 0.4)'
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]}
        border-2 backdrop-blur-sm flex flex-col items-center justify-center gap-1
        transition-all duration-300 hover:shadow-2xl cursor-pointer group`}
      style={{
        boxShadow: `0 0 30px ${glowColors[color as keyof typeof glowColors]}`
      }}
    >
      {/* Orbital ring */}
      <motion.div
        className={`absolute inset-0 rounded-full border-2 border-dashed opacity-30`}
        style={{ borderColor: glowColors[color as keyof typeof glowColors] }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Pulsing glow */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-20"
        style={{ background: `radial-gradient(circle, ${glowColors[color as keyof typeof glowColors]}, transparent)` }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <Icon className="w-5 h-5 text-white relative z-10 group-hover:animate-pulse" />
      <span className="text-xs text-white/90 font-semibold relative z-10">{label}</span>
    </motion.button>
  );
}
