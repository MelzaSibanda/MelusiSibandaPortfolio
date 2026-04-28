import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { GalaxyBackgroundCSS } from './components/GalaxyBackgroundCSS';
import { FloatingNavigation } from './components/FloatingNavigation';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useEffect } from 'react';

// ── Lazy-loaded route components ──────────────────────────────────────────
const Home         = lazy(() => import('./pages/Home').then(m         => ({ default: m.Home         })));
const About        = lazy(() => import('./pages/About').then(m        => ({ default: m.About        })));
const Skills       = lazy(() => import('./pages/Skills').then(m       => ({ default: m.Skills       })));
const Projects     = lazy(() => import('./pages/Projects').then(m     => ({ default: m.Projects     })));
const Achievements = lazy(() => import('./pages/Achievements').then(m => ({ default: m.Achievements })));
const Contact      = lazy(() => import('./pages/Contact').then(m      => ({ default: m.Contact      })));

// ── Loading fallback ──────────────────────────────────────────────────────
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-teal-400/30 border-t-teal-400 animate-spin" />
        <p className="text-teal-400/60 text-sm tracking-widest">LOADING</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<Home />}         />
        <Route path="/about"        element={<About />}        />
        <Route path="/skills"       element={<Skills />}       />
        <Route path="/projects"     element={<Projects />}     />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact"      element={<Contact />}      />
        <Route path="/preview_page_v2.html" element={<Navigate to="/" replace />} />
        <Route path="*"             element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

// ── Floating particles overlay (respects prefers-reduced-motion) ──────────
function ParticleOverlay() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top:  `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">
        <GalaxyBackgroundCSS />
        <FloatingNavigation />
        <ScrollToTop />

        <div className="relative z-10 min-h-screen">
          <Suspense fallback={<PageFallback />}>
            <AnimatedRoutes />
          </Suspense>

          <ParticleOverlay />

          <footer className="relative z-10 py-8 text-center border-t border-teal-400/20 backdrop-blur-sm">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-gray-400 text-sm"
            >
              © {new Date().getFullYear()} Melusi Sibanda — Exploring the Digital Universe.
            </motion.p>
          </footer>
        </div>
      </div>
    </Router>
  );
}
