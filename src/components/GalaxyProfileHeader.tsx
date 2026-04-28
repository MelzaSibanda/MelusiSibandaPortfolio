import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import exampleImage from 'figma:asset/ac6215175db0a1ac187fb408c86c3ee3acd7eee1.png';

const TITLES = [
  'Full Stack Developer',
  'UI/UX Engineer',
  'Open Source Builder',
  'Problem Solver',
];

function useTypewriter(titles: string[], enabled: boolean) {
  const [display, setDisplay] = useState('');
  const [index, setIndex]     = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) { setDisplay(titles[0]); return; }

    const current = titles[index];
    let id: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (display.length < current.length) {
        id = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), 90);
      } else {
        id = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (display.length > 0) {
        id = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), 55);
      } else {
        setDeleting(false);
        setIndex(i => (i + 1) % titles.length);
      }
    }
    return () => clearTimeout(id);
  }, [display, index, deleting, titles, enabled]);

  return display;
}

export function GalaxyProfileHeader() {
  const prefersReduced = useReducedMotion() ?? false;
  const displayTitle   = useTypewriter(TITLES, !prefersReduced);

  return (
    <div className="flex flex-col items-center justify-center text-center mb-12 relative">

      {/* ── Profile image with dual holographic rings ─────────────────── */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="relative mb-8"
        style={{ width: '192px', height: '192px' }}
      >
        {/* Ring 0: wide blurred conic – clockwise */}
        <motion.div
          style={{
            position: 'absolute',
            width: '230px', height: '230px',
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #14b8a6, #a855f7, #3b82f6, #14b8a6)',
            filter: 'blur(9px)',
            opacity: 0.65,
          }}
          animate={prefersReduced ? {} : { rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Ring 1: tilted second ring – counter-clockwise (depth effect) */}
        <div style={{
          position: 'absolute',
          width: '255px', height: '255px',
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%) rotateX(68deg)',
          transformStyle: 'preserve-3d',
        }}>
          <motion.div
            style={{
              width: '100%', height: '100%',
              borderRadius: '50%',
              background: 'conic-gradient(from 45deg, #a855f7, #06b6d4, #ec4899, #a855f7)',
              filter: 'blur(7px)',
              opacity: 0.45,
            }}
            animate={prefersReduced ? {} : { rotate: -360 }}
            transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Ring 2: middle solid border with pulse */}
        <motion.div
          style={{
            position: 'absolute',
            width: '208px', height: '208px',
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            border: '3px solid rgba(20,184,166,0.55)',
            boxShadow: '0 0 40px rgba(20,184,166,0.5), inset 0 0 30px rgba(20,184,166,0.15)',
          }}
          animate={prefersReduced ? {} : { scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Profile image */}
        <div
          className="relative w-48 h-48 rounded-full overflow-hidden z-10"
          style={{
            border: '3px solid rgba(20,184,166,0.8)',
            boxShadow: '0 0 60px rgba(20,184,166,0.6)',
          }}
        >
          <img src={exampleImage} alt="Melusi Sibanda" className="w-full h-full object-cover" />
        </div>

        {/* Orbiting particles */}
        {[0, 120, 240].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-teal-400"
            style={{
              left: '50%', top: '50%',
              marginLeft: '-6px', marginTop: '-6px',
              boxShadow: '0 0 10px rgba(20,184,166,0.9)',
            }}
            animate={prefersReduced ? {} : {
              x: [
                Math.cos((angle * Math.PI) / 180) * 125,
                Math.cos(((angle + 360) * Math.PI) / 180) * 125,
              ],
              y: [
                Math.sin((angle * Math.PI) / 180) * 125,
                Math.sin(((angle + 360) * Math.PI) / 180) * 125,
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
          />
        ))}
      </motion.div>

      {/* ── Name ──────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-4"
      >
        {['MELUSI', 'SIBANDA'].map((word, i) => (
          <h1
            key={word}
            className={`text-7xl font-bold bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent${i === 1 ? ' mt-2' : ''}`}
            style={{ filter: 'drop-shadow(0 0 20px rgba(20,184,166,0.45))' }}
          >
            {word}
          </h1>
        ))}
      </motion.div>

      {/* ── Typewriter title ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative mb-2"
      >
        <p
          className="text-2xl text-teal-400 tracking-widest font-semibold min-h-[1.75rem]"
          style={{ filter: 'drop-shadow(0 0 14px rgba(20,184,166,0.7))' }}
        >
          {displayTitle}
          <span className="typewriter-cursor text-teal-300 ml-0.5">|</span>
        </p>
        <motion.div
          className="h-px mt-2"
          style={{ background: 'linear-gradient(to right, transparent, rgba(20,184,166,0.9), transparent)' }}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.2, duration: 1 }}
        />
      </motion.div>

      {/* ── Tagline ───────────────────────────────────────────────────────── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-4 text-gray-300 text-lg max-w-2xl"
      >
        Exploring the Digital Universe • Creating Tomorrow's Solutions
      </motion.p>

      {/* ── Scroll down indicator ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="mt-14 flex flex-col items-center gap-1 text-teal-400/60 scroll-bounce"
      >
        <span className="text-xs tracking-widest font-semibold uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </div>
  );
}
