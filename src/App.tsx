import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { GalaxyBackgroundCSS } from './components/GalaxyBackgroundCSS';
import { FloatingNavigation } from './components/FloatingNavigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Achievements } from './pages/Achievements';
import { Contact } from './pages/Contact';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/preview_page_v2.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">
        {/* 3D Galaxy Background - Rendered once */}
        <GalaxyBackgroundCSS />

        {/* Floating Navigation Orbs */}
        <FloatingNavigation />

        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Main Content */}
        <div className="relative z-10 min-h-screen">
          <AnimatedRoutes />

          {/* Animated particles overlay */}
          <div className="fixed inset-0 pointer-events-none z-5">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>

          {/* Footer */}
          <footer className="relative z-10 py-8 text-center border-t border-teal-400/20 backdrop-blur-sm">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-gray-400"
            >
              © {new Date().getFullYear()} Melusi Sibanda. Exploring the Digital Universe.
            </motion.p>
          </footer>
        </div>
      </div>
    </Router>
  );
}