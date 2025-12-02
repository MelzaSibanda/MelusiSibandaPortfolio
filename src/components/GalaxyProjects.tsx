import { ContentPanel, HolographicTitle } from './ContentPanel';
import { motion } from 'motion/react';
import { ExternalLink, Github, MapPin, Code, Smartphone, Bug, Ticket, Leaf, Hospital, Sparkles } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: any;
  gradient: string;
  link?: string;
  github?: string;
};

export function GalaxyProjects() {
  const projects = [
    {
      title: 'Egumeni Eats ',
      description: 'A modern PWA for digitizing food ordering at Tfokomala Hotel, UMP. Features real-time order tracking, inventory management, and role-based dashboards for customers, staff, and admins.',
      tech: ['React', 'TypeScript', 'Firebase', 'Supabase', 'PWA'],
      icon: Smartphone,
      gradient: 'from-orange-500/20 to-red-500/20',
      link: 'https://egumeni-eat-gzgq.onrender.com/',
      github:'https://github.com/MelzaSibanda/hotel-ordering-system.git'
    },
    {
  title: 'Your Look – Beauty Service Platform',
  description: 'A modern beauty-service platform enabling users to browse beauty professionals, book appointments, and manage beauty service experiences seamlessly.',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  icon: Sparkles,
  gradient: 'from-pink-500/20 to-purple-500/20',
  link:'https://your-look-beauty-platform.onrender.com',
  github:'https://github.com/MelzaSibanda/YourLookBeauty.git'
},
{
      title: 'AgriNathi – Farming Solution System',
      description: 'A smart agriculture management system assisting farmers with crop monitoring, resource planning, and data-informed insights.',
      tech: ['React', 'Firebase', 'Python'],
      icon: Leaf,
      gradient: 'from-green-500/20 to-emerald-500/20',
      link: 'https://agrinathiapp.onrender.com//',
      github:'https://github.com/MelzaSibanda/AgriNathi.git'
    },
    {
      title: 'Mpumalanga Tourism Appilcation',
      description: 'Android application providing comprehensive tourism information for Mpumalanga province, featuring interactive maps, attractions, and travel guides.',
      tech: ['Android', 'Kotlin', 'Firebase'],
      icon: MapPin,
      gradient: 'from-teal-500/20 to-cyan-500/20',
      github: 'https://github.com/MelzaSibanda/MpumalangaTourism.git'
    },
    
    {
      title: 'Bug Tracking System – Error Handling Tool',
      description: 'A web-based platform for reporting, tracking, and managing software bugs to enhance development quality and streamline team collaboration.',
      tech: ['Java', 'MySQL', 'JavaScript'],
      icon: Bug,
      gradient: 'from-red-500/20 to-orange-500/20',
      github: 'https://github.com/MelzaSibanda/Bug-Tracking-System.git'
    },
    {
      title: 'Ticketing System – Event Management Platform',
      description: 'A complete event ticketing solution for creating, selling, and managing tickets with real-time monitoring and smooth user experiences.',
      tech: ['PHP', 'MySQL', 'Java'],
      icon: Ticket,
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    
    {
      title: 'ICurate – Hospital Administration System',
      description: 'A healthcare management platform focused on digital patient records, appointment scheduling, and automation of administrative tasks.',
      tech: ['React', 'Node.js', 'Firebase'],
      icon: Hospital,
      gradient: 'from-purple-500/20 to-indigo-500/20'
      
    }
  ];

  return (
    <ContentPanel delay={0.4}>
      <HolographicTitle>PROJECTS</HolographicTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{
              delay: 0.6 + index * 0.15,
              duration: 0.5
            }}
            className={`relative group rounded-2xl bg-gradient-to-br ${project.gradient} p-[2px] overflow-hidden`}
          >
            {/* Card content */}
            <div className="relative h-full min-h-[400px] bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6
              border border-slate-700/50 group-hover:border-teal-400/50 transition-all duration-300 flex flex-col"
            >
              {/* Project icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 
                flex items-center justify-center mb-4 border border-teal-400/30
                group-hover:scale-110 transition-transform duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(20, 184, 166, 0.2)'
                }}
              >
                <project.icon className="w-8 h-8 text-teal-400" />
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl mb-3 text-white group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold
                      bg-teal-400/10 text-teal-400 border border-teal-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-auto">
                {project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                      bg-teal-400/20 hover:bg-teal-400/30 text-teal-400 rounded-lg
                      border border-teal-400/30 hover:border-teal-400/50 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-semibold">View</span>
                  </motion.a>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                      bg-teal-400/20 hover:bg-teal-400/30 text-teal-400 rounded-lg
                      border border-teal-400/30 hover:border-teal-400/50 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-semibold">View</span>
                  </motion.button>
                )}
                {project.github ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-2
                      bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 rounded-lg
                      border border-slate-700/50 hover:border-slate-600 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-2
                      bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 rounded-lg
                      border border-slate-700/50 hover:border-slate-600 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </motion.button>
                )}
              </div>

              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(20, 184, 166, 0.2), transparent)'
                }}
              />
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: '0 0 40px rgba(20, 184, 166, 0.3)'
              }}
            />
          </motion.div>
        ))}
      </div>

    </ContentPanel>
  );
}
