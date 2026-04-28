import { ContentPanel, HolographicTitle } from './ContentPanel';
import { motion } from 'motion/react';
import {
  Coffee, Code, Code2, Flame, Cloud, Shield, Database,
  MessageCircle, Brain, Crown, Palette, Settings, Headphones, GraduationCap,
  TrendingUp, Smartphone, GitBranch, Atom, Server, Cog,
} from 'lucide-react';

type Skill = { icon: any; label: string; color: string; level?: number };

// ── Skill definition helpers ──────────────────────────────────────────────
const LANGUAGES: Skill[] = [
  { icon: Coffee,   label: 'Java',        color: 'from-orange-500 to-red-500'   },
  { icon: Code,     label: 'C#',          color: 'from-sky-500 to-blue-500'     },
  { icon: Code2,    label: 'C++',         color: 'from-blue-500 to-cyan-500'    },
  { icon: Code,     label: 'Python',      color: 'from-purple-500 to-pink-500'  },
  { icon: Code,     label: 'PHP',         color: 'from-yellow-500 to-orange-500'},
  { icon: Database, label: 'SQL',         color: 'from-cyan-500 to-blue-500'    },
  { icon: Code,     label: 'JavaScript',  color: 'from-yellow-500 to-amber-500' },
  { icon: Code,     label: 'TypeScript',  color: 'from-blue-500 to-cyan-500'    },
  { icon: Code,     label: 'HTML',        color: 'from-red-500 to-pink-500'     },
  { icon: Palette,  label: 'CSS',         color: 'from-green-500 to-teal-500'   },
];

const FRAMEWORKS: Skill[] = [
  { icon: Atom,      label: 'React',          color: 'from-teal-500 to-cyan-500'   },
  { icon: Flame,     label: 'Firebase',       color: 'from-pink-500 to-orange-500' },
  { icon: Database,  label: 'MongoDB',        color: 'from-green-500 to-teal-500'  },
  { icon: Code,      label: 'Node.js',        color: 'from-green-600 to-emerald-500'},
  { icon: GitBranch, label: 'Git',            color: 'from-sky-500 to-blue-500'    },
  { icon: Smartphone,label: 'Android Studio', color: 'from-emerald-500 to-teal-500'},
  { icon: Database,  label: 'Supabase',       color: 'from-violet-500 to-purple-500'},
  { icon: Code,      label: 'Jakarta',        color: 'from-rose-500 to-pink-500'   },
  { icon: Server,    label: 'Glassfish',      color: 'from-amber-500 to-yellow-500'},
  { icon: Server,    label: 'Tomcat',         color: 'from-emerald-500 to-teal-500'},
  { icon: Cog,       label: 'DevOps',         color: 'from-blue-500 to-cyan-500'   },
  { icon: Cloud,     label: 'Cloud Dev',      color: 'from-teal-500 to-green-500'  },
];

const SOFT: Skill[] = [
  { icon: MessageCircle, label: 'Communication',     color: 'from-blue-500 to-cyan-500',   level: 90 },
  { icon: Brain,         label: 'Problem Solving',   color: 'from-purple-500 to-pink-500', level: 92 },
  { icon: Crown,         label: 'Leadership',        color: 'from-yellow-500 to-orange-500', level: 82 },
  { icon: Palette,       label: 'Web Design',        color: 'from-pink-500 to-purple-500', level: 88 },
  { icon: Shield,        label: 'Cyber Security',    color: 'from-red-500 to-pink-500',    level: 75 },
  { icon: Settings,      label: 'System Dev',        color: 'from-green-500 to-teal-500',  level: 85 },
  { icon: Headphones,    label: 'Tech Support',      color: 'from-indigo-500 to-purple-500', level: 87 },
  { icon: Server,        label: 'IT Systems',        color: 'from-lime-500 to-green-500',  level: 83 },
  { icon: GraduationCap, label: 'Coaching',          color: 'from-rose-500 to-pink-500',   level: 78 },
  { icon: TrendingUp,    label: 'Process Improvement',color: 'from-amber-500 to-yellow-500', level: 80 },
];

// ── Sub-components ────────────────────────────────────────────────────────
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ delay: index * 0.06, duration: 0.5, type: 'spring', stiffness: 180 }}
      className="relative group"
    >
      <div className={`relative w-full aspect-square rounded-2xl bg-gradient-to-br ${skill.color} p-[2px] overflow-hidden`}>
        <div className="w-full h-full bg-slate-900/90 rounded-2xl flex flex-col items-center justify-center gap-3
          backdrop-blur-sm group-hover:bg-slate-900/70 transition-all duration-300">
          <skill.icon className="w-10 h-10 text-white drop-shadow-lg" />
          <span className="text-xs font-semibold text-white text-center px-1 leading-tight">{skill.label}</span>
        </div>
        {/* Shimmer on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.25), transparent)', backgroundSize: '200% 200%' }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        whileHover={{ boxShadow: '0 0 35px rgba(20,184,166,0.45)' }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

function SoftSkillRow({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40
        hover:border-teal-400/40 transition-all duration-300"
    >
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0`}>
        <skill.icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between mb-1.5">
          <span className="text-sm font-semibold text-white">{skill.label}</span>
          <span className="text-xs text-teal-400 font-semibold">{skill.level}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-slate-700/60 overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: index * 0.07 + 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ boxShadow: '0 0 8px rgba(20,184,166,0.5)' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function CategorySection({
  label, accentColor, children,
}: { label: string; accentColor: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-5"
      >
        <div className={`h-px flex-1 bg-gradient-to-r from-transparent to-slate-600/50`} />
        <span className={`text-xs font-bold tracking-widest uppercase ${accentColor}`}>{label}</span>
        <div className={`h-px flex-1 bg-gradient-to-l from-transparent to-slate-600/50`} />
      </motion.div>
      {children}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────
export function GalaxySkills({ skillsList }: { skillsList?: Skill[] }) {
  // When a custom list is passed (Home page featured section) → flat ungrouped grid
  if (skillsList) {
    return (
      <ContentPanel delay={0.3}>
        <HolographicTitle>SKILLS</HolographicTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {skillsList.map((skill, i) => <SkillCard key={i} skill={skill} index={i} />)}
        </div>
      </ContentPanel>
    );
  }

  // Full grouped view (Skills page)
  return (
    <ContentPanel delay={0.3}>
      <HolographicTitle>SKILLS</HolographicTitle>

      <div className="mt-8">
        <CategorySection label="Languages" accentColor="text-teal-400">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {LANGUAGES.map((s, i) => <SkillCard key={i} skill={s} index={i} />)}
          </div>
        </CategorySection>

        <CategorySection label="Frameworks & Platforms" accentColor="text-blue-400">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FRAMEWORKS.map((s, i) => <SkillCard key={i} skill={s} index={i} />)}
          </div>
        </CategorySection>

        <CategorySection label="Professional Skills" accentColor="text-purple-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SOFT.map((s, i) => <SoftSkillRow key={i} skill={s} index={i} />)}
          </div>
        </CategorySection>
      </div>
    </ContentPanel>
  );
}
