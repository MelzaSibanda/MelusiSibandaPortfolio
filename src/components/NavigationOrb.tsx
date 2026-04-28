import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface NavigationOrbProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  delay?: number;
  color?: string;
  isActive?: boolean;
}

const colorMap = {
  teal:   { classes: 'from-teal-500/20 to-cyan-500/20 border-teal-400/40 hover:border-teal-400',   glow: 'rgba(20,184,166,0.45)',  active: 'rgba(20,184,166,0.9)'  },
  purple: { classes: 'from-purple-500/20 to-pink-500/20 border-purple-400/40 hover:border-purple-400', glow: 'rgba(168,85,247,0.45)', active: 'rgba(168,85,247,0.9)' },
  blue:   { classes: 'from-blue-500/20 to-cyan-500/20 border-blue-400/40 hover:border-blue-400',   glow: 'rgba(59,130,246,0.45)',  active: 'rgba(59,130,246,0.9)'  },
  pink:   { classes: 'from-pink-500/20 to-rose-500/20 border-pink-400/40 hover:border-pink-400',   glow: 'rgba(236,72,153,0.45)',  active: 'rgba(236,72,153,0.9)'  },
  yellow: { classes: 'from-yellow-500/20 to-orange-500/20 border-yellow-400/40 hover:border-yellow-400', glow: 'rgba(251,191,36,0.45)', active: 'rgba(251,191,36,0.9)' },
};

export function NavigationOrb({
  icon: Icon,
  label,
  onClick,
  delay = 0,
  color = 'teal',
  isActive = false,
}: NavigationOrbProps) {
  const c = colorMap[color as keyof typeof colorMap] ?? colorMap.teal;

  return (
    /* Wrapper with class nav-orb-group so the CSS tooltip activates */
    <div className="nav-orb-group relative flex items-center">
      {/* Tooltip */}
      <span className="nav-tooltip">{label}</span>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isActive ? 1.12 : 1,
          opacity: 1,
        }}
        whileHover={{ scale: isActive ? 1.15 : 1.1, y: -4 }}
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.5, delay }}
        onClick={onClick}
        className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${c.classes}
          border-2 backdrop-blur-sm flex flex-col items-center justify-center gap-1
          transition-all duration-300 cursor-pointer group`}
        style={{
          boxShadow: isActive
            ? `0 0 0 2px ${c.active}, 0 0 30px ${c.active}, 0 0 60px ${c.glow}`
            : `0 0 25px ${c.glow}`,
        }}
        aria-label={label}
        aria-current={isActive ? 'page' : undefined}
      >
        {/* Rotating dashed orbital ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed"
          style={{
            borderColor: isActive ? c.active : c.glow,
            opacity: isActive ? 0.6 : 0.3,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: isActive ? 10 : 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Pulsing radial glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: `radial-gradient(circle, ${c.glow}, transparent)` }}
          animate={{
            scale:   isActive ? [1, 1.4, 1] : [1, 1.3, 1],
            opacity: isActive ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2],
          }}
          transition={{ duration: isActive ? 1.5 : 2, repeat: Infinity }}
        />

        <Icon className="w-5 h-5 text-white relative z-10" />
        <span className={`text-xs font-semibold relative z-10 ${isActive ? 'text-white' : 'text-white/80'}`}>
          {label}
        </span>
      </motion.button>
    </div>
  );
}
