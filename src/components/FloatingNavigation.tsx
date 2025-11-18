import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationOrb } from './NavigationOrb';
import { User, Briefcase, Code, Mail, Home, Menu, X, Trophy } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface FloatingNavigationProps {
  onNavigate?: (section: string) => void;
}

export function FloatingNavigation({ onNavigate }: FloatingNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', path: '/', icon: Home, label: 'Home', color: 'teal' },
    { id: 'about', path: '/about', icon: User, label: 'About', color: 'purple' },
    { id: 'skills', path: '/skills', icon: Code, label: 'Skills', color: 'blue' },
    { id: 'projects', path: '/projects', icon: Briefcase, label: 'Projects', color: 'pink' },
    { id: 'achievements', path: '/achievements', icon: Trophy, label: 'Achievements', color: 'yellow' },
    { id: 'contact', path: '/contact', icon: Mail, label: 'Contact', color: 'teal' }
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsExpanded(false);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full 
          bg-gradient-to-br from-teal-500/80 to-cyan-500/80 backdrop-blur-sm
          border-2 border-teal-400/50 flex items-center justify-center
          md:hidden shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)'
        }}
      >
        {isExpanded ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </motion.button>

      {/* Desktop navigation - always visible */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40
          flex-col gap-2"
      >
        {navItems.map((item, index) => (
          <NavigationOrb
            key={item.id}
            icon={item.icon}
            label={item.label}
            color={item.color}
            onClick={() => onNavigate ? onNavigate(item.id) : handleNavigate(item.path)}
            delay={0.7 + index * 0.1}
          />
        ))}
      </motion.div>

      {/* Mobile navigation - expandable */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-40 md:hidden backdrop-blur-xl bg-slate-900/80
              flex items-center justify-center"
          >
            <div className="grid grid-cols-2 gap-6 p-8">
              {navItems.map((item, index) => (
                <NavigationOrb
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  color={item.color}
                  onClick={() => {
                    onNavigate ? onNavigate(item.id) : handleNavigate(item.path);
                    setIsExpanded(false);
                  }}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}