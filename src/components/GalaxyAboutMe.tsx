import { ContentPanel, HolographicTitle } from './ContentPanel';
import { motion } from 'motion/react';
import { Sparkles, Rocket, Code, Zap } from 'lucide-react';

export function GalaxyAboutMe() {
  const highlights = [
    { icon: Sparkles, text: 'Creative Problem Solver', color: 'text-teal-400' },
    { icon: Rocket, text: 'Innovation Driven', color: 'text-purple-400' },
    { icon: Code, text: 'Tech Enthusiast', color: 'text-blue-400' },
    { icon: Zap, text: 'Future Focused', color: 'text-pink-400' }
  ];

  return (
    <ContentPanel delay={0.2}>
      <HolographicTitle>ABOUT ME</HolographicTitle>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-300 leading-relaxed text-lg mt-6 mb-8"
      >
        As a passionate and driven IT professional with hands-on experience as a Software Development Intern, I bring a strong foundation in modern programming languages, web technologies, and system design principles. Having successfully completed my Advanced Diploma in ICT in Applications Development, along with multiple industry certifications and participation in competitive hackathons, I have developed both the academic depth and practical expertise needed to build impactful digital solutions. My work is guided by a user-centric mindset, ensuring that every application I develop is functional, intuitive, and visually compelling. With proven strengths in leadership, analytical thinking, and problem-solving, I am committed to delivering high-quality software solutions that enhance user experience, optimize performance, and contribute meaningfully to organizational success.</motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/50 
              border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300
              hover:shadow-lg hover:shadow-teal-400/20"
          >
            <highlight.icon className={`w-8 h-8 mb-2 ${highlight.color}`} />
            <span className="text-sm text-gray-300">{highlight.text}</span>
          </motion.div>
        ))}
      </div>
    </ContentPanel>
  );
}
