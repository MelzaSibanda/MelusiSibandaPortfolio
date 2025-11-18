import { ContentPanel, HolographicTitle } from './ContentPanel';
import { motion } from 'motion/react';
import { Coffee, Code, Code2, Flame, Cloud, Monitor, Shield, Database, MessageCircle, Brain, Crown, Palette, Settings, Headphones, GraduationCap, TrendingUp, Smartphone, HardDrive, GitBranch, Atom, Server, Cog } from 'lucide-react';

type Skill = {
  icon: any;
  label: string;
  color: string;
};

export function GalaxySkills({ skillsList }: { skillsList?: Skill[] }) {
  const defaultSkills: Skill[] = [
    { icon: MessageCircle, label: 'Communication', color: 'from-blue-500 to-cyan-500' },
    { icon: Brain, label: 'Problem Solving', color: 'from-purple-500 to-pink-500' },
    { icon: Crown, label: 'Leadership', color: 'from-yellow-500 to-orange-500' },
    { icon: Code, label: 'Software Development', color: 'from-cyan-500 to-blue-500' },
    { icon: Palette, label: 'Web Design', color: 'from-pink-500 to-purple-500' },
    { icon: Cloud, label: 'Cloud Development', color: 'from-teal-500 to-green-500' },
    { icon: Shield, label: 'Cyber Security', color: 'from-red-500 to-pink-500' },
    { icon: Settings, label: 'System Development', color: 'from-green-500 to-teal-500' },
    { icon: Headphones, label: 'Technical Support', color: 'from-indigo-500 to-purple-500' },
    { icon: Server, label: 'IT Systems', color: 'from-lime-500 to-green-500' },
    { icon: GraduationCap, label: 'Coaching & Mentoring', color: 'from-rose-500 to-pink-500' },
    { icon: TrendingUp, label: 'Process Improvement', color: 'from-amber-500 to-yellow-500' },
    { icon: Smartphone, label: 'Android Studio', color: 'from-emerald-500 to-teal-500' },
    { icon: HardDrive, label: 'Desktop Assembly', color: 'from-violet-500 to-purple-500' },
    { icon: Coffee, label: 'Java', color: 'from-orange-500 to-red-500' },
    { icon: Code, label: 'C#', color: 'from-sky-500 to-blue-500' },
    { icon: Code2, label: 'C++', color: 'from-blue-500 to-cyan-500' },
    { icon: Code, label: 'Python', color: 'from-purple-500 to-pink-500' },
    { icon: Code, label: 'PHP', color: 'from-yellow-500 to-orange-500' },
    { icon: Database, label: 'SQL', color: 'from-cyan-500 to-blue-500' },
    { icon: Flame, label: 'Firebase', color: 'from-pink-500 to-purple-500' },
    { icon: Atom, label: 'React', color: 'from-teal-500 to-green-500' },
    { icon: Code, label: 'HTML', color: 'from-red-500 to-pink-500' },
    { icon: Palette, label: 'CSS', color: 'from-green-500 to-teal-500' },
    { icon: Code, label: 'JavaScript', color: 'from-indigo-500 to-purple-500' },
    { icon: Code, label: 'Typescript', color: 'from-lime-500 to-green-500' },
    { icon: Code, label: 'Jakarta', color: 'from-rose-500 to-pink-500' },
    { icon: Server, label: 'Glassfish', color: 'from-amber-500 to-yellow-500' },
    { icon: Server, label: 'Tomcat', color: 'from-emerald-500 to-teal-500' },
    { icon: Database, label: 'MongoDB', color: 'from-violet-500 to-purple-500' },
    { icon: GitBranch, label: 'Git', color: 'from-sky-500 to-blue-500' },
    { icon: Code, label: 'Node.js', color: 'from-orange-500 to-red-500' },
    { icon: Cog, label: 'DevOps', color: 'from-blue-500 to-cyan-500' },
    { icon: Database, label: 'Supabase', color: 'from-purple-500 to-pink-500' }
  ];

  const skills = skillsList || defaultSkills;

  return (
    <ContentPanel delay={0.3}>
      <HolographicTitle>SKILLS</HolographicTitle>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ 
              delay: 0.5 + index * 0.1, 
              duration: 0.6,
              type: 'spring',
              stiffness: 200
            }}
            className="relative group"
          >
            {/* Skill card */}
            <div className={`relative w-full aspect-square rounded-2xl bg-gradient-to-br ${skill.color} 
              p-[2px] overflow-hidden`}
            >
              {/* Inner content */}
              <div className="w-full h-full bg-slate-900/90 rounded-2xl flex flex-col items-center justify-center gap-3
                backdrop-blur-sm group-hover:bg-slate-900/70 transition-all duration-300"
              >
                <skill.icon className="w-12 h-12 text-white drop-shadow-lg" />
                <span className="text-sm font-semibold text-white">{skill.label}</span>
              </div>
              
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)`,
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            </div>

            {/* Floating particles on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: '0 0 20px rgba(20, 184, 166, 0)'
              }}
              whileHover={{
                boxShadow: '0 0 40px rgba(20, 184, 166, 0.4)'
              }}
            />
          </motion.div>
        ))}
      </div>
    </ContentPanel>
  );
}
