import { ContentPanel, HolographicTitle } from '../../components/ContentPanel';
import { Sparkles, Rocket, Code, Zap } from 'lucide-react';

export function GalaxyAboutMe() {
  const highlights = [
    { icon: Sparkles, text: 'Creative Problem Solver', color: 'text-teal-400' },
    { icon: Rocket, text: 'Innovation Driven', color: 'text-purple-400' },
    { icon: Code, text: 'Tech Enthusiast', color: 'text-blue-400' },
    { icon: Zap, text: 'Future Focused', color: 'text-pink-400' },
  ];

  return (
    <ContentPanel>
      <HolographicTitle>ABOUT ME</HolographicTitle>

      <p className="text-gray-300 leading-relaxed text-lg mt-6 mb-8">
        I'm a software developer who turns complex problems into clean, scalable
        solutions. Armed with an Advanced Diploma in ICT (Applications
        Development) and real-world internship experience, I build full-stack
        applications that don't just work — they perform. From hackathon sprints
        to production deployments, I've developed a sharp eye for user
        experience, a deep respect for clean code, and a relentless drive to
        ship things that matter.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/50 
              border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300
              hover:shadow-lg hover:shadow-teal-400/20"
          >
            <highlight.icon className={`w-8 h-8 mb-2 ${highlight.color}`} />
            <span className="text-sm text-gray-300">{highlight.text}</span>
          </div>
        ))}
      </div>
    </ContentPanel>
  );
}
