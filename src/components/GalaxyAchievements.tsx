import { useState } from 'react';
import { ContentPanel, HolographicTitle } from './ContentPanel';
import { motion, AnimatePresence } from 'motion/react';
import { Star, LayoutGrid, AlignLeft, ExternalLink } from 'lucide-react';

type Achievement = {
  title: string;
  description: string;
  icon: any;
  gradient: string;
  image: string;
  year: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'SAP FI Training – Mentec Foundation',
    description: 'Completed specialised SAP Financial Accounting training, demonstrating strong understanding of enterprise financial systems.',
    icon: Star, gradient: 'from-blue-500/20 to-indigo-500/20',
    image: '/assets/SAP.pdf', year: '2024',
  },
  {
    title: 'Advanced Diploma in ICT – Applications Development',
    description: 'Successfully completed a comprehensive diploma covering software development, database systems, networking, and application design.',
    icon: Star, gradient: 'from-green-500/20 to-emerald-500/20',
    image: '/assets/Melza Diploma cert.pdf', year: '2025',
  },
  {
    title: 'FNB App Academy – Full Stack Developer',
    description: 'Earned a full-stack development certification focusing on building scalable, modern web apps with industry standards.',
    icon: Star, gradient: 'from-yellow-500/20 to-orange-500/20',
    image: '/assets/FNBAcademy.pdf', year: '2024',
  },
  {
    title: 'Microsoft 365 Certified: Fundamentals',
    description: 'Achieved certification in foundational Microsoft 365 competencies including cloud productivity and collaboration tools.',
    icon: Star, gradient: 'from-teal-500/20 to-cyan-500/20',
    image: '/assets/Fundementals.pdf', year: '2024',
  },
  {
    title: 'Microsoft SC-900: Security, Compliance & Identity',
    description: 'Certified in core security, compliance, and identity principles across Microsoft cloud services.',
    icon: Star, gradient: 'from-indigo-500/20 to-violet-500/20',
    image: '/assets/Security.pdf', year: '2024',
  },
  {
    title: 'Microsoft AI Fluency Certification',
    description: "Completed Microsoft's AI Fluency program — AI concepts, ethics, and real-world applications.",
    icon: Star, gradient: 'from-pink-500/20 to-rose-500/20',
    image: '/assets/AIFluencyCertificate.pdf', year: '2024',
  },
  {
    title: 'Microsoft MS-102 – Microsoft 365 Administrator',
    description: 'Showcasing strong skills in Microsoft 365 administration, identity management, security, and organisational cloud services.',
    icon: Star, gradient: 'from-green-500/20 to-emerald-500/20',
    image: '/assets/Ms102.pdf', year: '2025',
  },
];

// ── Grid card ─────────────────────────────────────────────────────────────
function GridCard({ a, index }: { a: Achievement; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative group rounded-2xl bg-gradient-to-br ${a.gradient} p-[2px] overflow-hidden`}
    >
      <div className="relative h-full min-h-[400px] bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6
        border border-slate-700/50 group-hover:border-teal-400/50 transition-all duration-300 flex flex-col"
      >
        <a href={a.image} target="_blank" rel="noopener noreferrer" className="block mb-4">
          <div className="relative rounded-xl overflow-hidden">
            {a.image.endsWith('.pdf') ? (
              <iframe
                src={a.image}
                className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                style={{ border: 'none' }}
                title={a.title}
              />
            ) : (
              <img src={a.image} alt={a.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/20 to-purple-500/20
              flex items-center justify-center border border-teal-400/30"
              style={{ boxShadow: '0 0 16px rgba(20,184,166,0.2)' }}
            >
              <a.icon className="w-5 h-5 text-teal-400" />
            </div>
          </div>
        </a>
        <h3 className="font-bold text-base mb-2 text-white group-hover:text-teal-400 transition-colors leading-snug">
          {a.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{a.description}</p>
        <motion.div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(20,184,166,0.2), transparent)' }} />
      </div>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: '0 0 40px rgba(20,184,166,0.28)' }} />
    </motion.div>
  );
}

// ── Timeline card ─────────────────────────────────────────────────────────
function TimelineCard({ a, index }: { a: Achievement; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative flex items-center justify-center mb-10">
      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10
        bg-gradient-to-br from-teal-400 to-cyan-400 border-2 border-slate-900"
        style={{ boxShadow: '0 0 14px rgba(20,184,166,0.7)' }}
      />

      {/* Year badge */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-10">
        <span className="text-[10px] font-bold text-teal-400 tracking-widest">{a.year}</span>
      </div>

      {/* Card — alternates sides */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        className={`w-[46%] ${isLeft ? 'mr-auto pr-6' : 'ml-auto pl-6'}`}
      >
        <div className={`group relative rounded-2xl bg-gradient-to-br ${a.gradient} p-[2px] overflow-hidden`}>
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50
            group-hover:border-teal-400/45 transition-all duration-300"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500/20 to-purple-500/20
                flex items-center justify-center border border-teal-400/30 flex-shrink-0">
                <a.icon className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-teal-400 transition-colors leading-snug">
                {a.title}
              </h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-3">{a.description}</p>
            <a href={a.image} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal-400 text-xs font-semibold hover:text-teal-300 transition-colors">
              <ExternalLink className="w-3 h-3" /> View Certificate
            </a>
          </div>
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ boxShadow: '0 0 30px rgba(20,184,166,0.22)' }} />
        </div>
      </motion.div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────
export function GalaxyAchievements() {
  const [view, setView] = useState<'grid' | 'timeline'>('grid');

  return (
    <ContentPanel delay={0.5}>
      {/* Header + view toggle */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <HolographicTitle>ACHIEVEMENTS</HolographicTitle>
        <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
          {(['grid', 'timeline'] as const).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${
                view === v
                  ? 'bg-teal-400/20 text-teal-300 border border-teal-400/40'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {v === 'grid'
                ? <><LayoutGrid className="w-3.5 h-3.5" /> Grid</>
                : <><AlignLeft  className="w-3.5 h-3.5" /> Timeline</>
              }
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === 'grid' ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          >
            {ACHIEVEMENTS.map((a, i) => <GridCard key={i} a={a} index={i} />)}
          </motion.div>
        ) : (
          <motion.div
            key="timeline"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative mt-12 hidden md:block"
          >
            {/* Vertical line */}
            <div className="timeline-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px" />
            {ACHIEVEMENTS.map((a, i) => <TimelineCard key={i} a={a} index={i} />)}

            {/* Mobile fallback inside timeline tab */}
            <div className="md:hidden grid grid-cols-1 gap-6">
              {ACHIEVEMENTS.map((a, i) => <GridCard key={i} a={a} index={i} />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile always shows grid regardless of tab */}
      {view === 'timeline' && (
        <div className="md:hidden grid grid-cols-1 gap-6 mt-8">
          {ACHIEVEMENTS.map((a, i) => <GridCard key={i} a={a} index={i} />)}
        </div>
      )}
    </ContentPanel>
  );
}
