import { useState } from 'react';
import {
  ContentPanel,
  HolographicTitle,
  PanelSubheading,
} from '../../components/ContentPanel';
import {
  ExternalLink,
  GitBranch,
  MapPin,
  Smartphone,
  Bug,
  Ticket,
  Leaf,
  Hospital,
  Sparkles,
  Pin,
} from 'lucide-react';

type Category = 'Web App' | 'Mobile' | 'Tool';

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: import('lucide-react').LucideIcon;
  gradient: string;
  link?: string;
  github?: string;
  category: Category;
  featured?: boolean;
  screenshot?: { slug: string; alt: string };
};

const PROJECTS: Project[] = [
  {
    title: 'Egumeni Eats',
    description:
      'A modern PWA for digitizing food ordering at Tfokomala Hotel. Features real-time order tracking, inventory management, and role-based dashboards.',
    tech: ['React', 'TypeScript', 'Firebase', 'Supabase', 'PWA'],
    icon: Smartphone,
    gradient: 'from-orange-500/20 to-red-500/20',
    link: 'https://egumeni-eat-gzgq.onrender.com/',
    github: 'https://github.com/MelzaSibanda/hotel-ordering-system.git',
    category: 'Web App',
    featured: true,
    screenshot: {
      slug: 'egumeni',
      alt: 'Egumeni Eats landing page introducing popular dishes and hotel ordering',
    },
  },
  {
    title: 'Your Look – Beauty Platform',
    description:
      'A modern beauty-service platform enabling users to browse professionals, book appointments, and manage beauty service experiences seamlessly.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: Sparkles,
    gradient: 'from-pink-500/20 to-purple-500/20',
    link: 'https://your-look-beauty-platform.onrender.com',
    github: 'https://github.com/MelzaSibanda/YourLookBeauty.git',
    category: 'Web App',
    featured: true,
  },
  {
    title: 'AgriNathi – Farming Solution',
    description:
      'A smart agriculture management system assisting farmers with crop monitoring, resource planning, and data-informed insights.',
    tech: ['React', 'Firebase', 'Python'],
    icon: Leaf,
    gradient: 'from-green-500/20 to-emerald-500/20',
    link: 'https://agrinathiapp.onrender.com/',
    github: 'https://github.com/MelzaSibanda/AgriNathi.git',
    category: 'Web App',
    screenshot: {
      slug: 'agrinathi',
      alt: 'AgriNathi Agricultural Voice Assistant sign-in screen',
    },
  },
  {
    title: 'Mpumalanga Tourism App',
    description:
      'Android application providing comprehensive tourism information for Mpumalanga province with interactive maps, attractions, and travel guides.',
    tech: ['Android', 'Kotlin', 'Firebase'],
    icon: MapPin,
    gradient: 'from-teal-500/20 to-cyan-500/20',
    github: 'https://github.com/MelzaSibanda/MpumalangaTourism.git',
    category: 'Mobile',
  },
  {
    title: 'Bug Tracking System',
    description:
      'A web-based platform for reporting, tracking, and managing software bugs to enhance development quality and streamline team collaboration.',
    tech: ['Java', 'MySQL', 'JavaScript'],
    icon: Bug,
    gradient: 'from-red-500/20 to-orange-500/20',
    github: 'https://github.com/MelzaSibanda/Bug-Tracking-System.git',
    category: 'Tool',
  },
  {
    title: 'Ticketing System',
    description:
      'A complete event ticketing solution for creating, selling, and managing tickets with real-time monitoring and smooth user experiences.',
    tech: ['PHP', 'MySQL', 'Java'],
    icon: Ticket,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    category: 'Tool',
  },
  {
    title: 'ICurate – Hospital Admin',
    description:
      'A healthcare management platform focused on digital patient records, appointment scheduling, and automation of administrative tasks.',
    tech: ['React', 'Node.js', 'Firebase'],
    icon: Hospital,
    gradient: 'from-purple-500/20 to-indigo-500/20',
    category: 'Web App',
  },
];

const FILTERS: Array<'All' | Category> = ['All', 'Web App', 'Mobile', 'Tool'];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article style={{ perspective: '900px' }}>
      <div
        className={`relative group rounded-2xl bg-gradient-to-br ${project.gradient} p-[2px] overflow-hidden will-change-transform`}
      >
        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1
            bg-gradient-to-r from-teal-500/80 to-cyan-500/80 rounded-full
            border border-teal-400/60 backdrop-blur-sm"
            style={{ boxShadow: '0 0 12px rgba(20,184,166,0.5)' }}
          >
            <Pin className="w-3 h-3 text-white" />
            <span className="text-[10px] font-bold text-slate-950 tracking-wide">
              FEATURED
            </span>
          </div>
        )}

        {/* Card body */}
        <div
          className="relative h-full bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6
          border border-slate-700/50 group-hover:border-teal-400/50 transition-all duration-300 flex flex-col"
        >
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20
            flex items-center justify-center mb-4 border border-teal-400/30
            group-hover:scale-110 transition-transform duration-300"
            style={{ boxShadow: '0 0 18px rgba(20,184,166,0.18)' }}
          >
            <project.icon className="w-7 h-7 text-teal-400" />
          </div>

          {/* Title */}
          <PanelSubheading className="font-bold text-lg mb-3 text-white group-hover:text-teal-400 transition-colors leading-snug">
            {project.title}
          </PanelSubheading>
          {project.screenshot && (
            <img
              className="project-screenshot"
              src={`/projects/${project.screenshot.slug}-384.webp`}
              srcSet={`/projects/${project.screenshot.slug}-384.webp 384w, /projects/${project.screenshot.slug}-768.webp 768w`}
              sizes="(min-width: 1024px) 310px, (min-width: 768px) 420px, calc(100vw - 112px)"
              width={768}
              height={432}
              loading="lazy"
              decoding="async"
              alt={project.screenshot.alt}
            />
          )}

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold
                bg-teal-400/10 text-teal-400 border border-teal-400/25"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="project-actions flex flex-wrap gap-3 mt-auto">
            {project.link ? (
              <a
                aria-label={'Live demo for ' + project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                  bg-teal-400/20 hover:bg-teal-400/30 text-teal-400 rounded-lg
                  border border-teal-400/30 hover:border-teal-400/55 transition-all text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" /> View
              </a>
            ) : (
              <div
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                bg-slate-700/30 text-gray-500 rounded-lg border border-slate-700/40 text-sm font-semibold cursor-default"
              >
                <ExternalLink className="w-4 h-4" /> View
              </div>
            )}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2
                  bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 rounded-lg
                  border border-slate-700/50 hover:border-slate-500 transition-all"
                aria-label={'GitHub repository for ' + project.title}
              >
                <GitBranch className="w-4 h-4" />
              </a>
            ) : null}
          </div>

          {/* Corner glow on hover */}
          <div
            className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at top right, rgba(20,184,166,0.2), transparent)',
            }}
          />
        </div>

        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: '0 0 40px rgba(20,184,166,0.28)' }}
        />
      </div>
    </article>
  );
}

// ── Main export ───────────────────────────────────────────────────────────
export function GalaxyProjects() {
  const [activeFilter, setActiveFilter] = useState<'All' | Category>('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <ContentPanel>
      <HolographicTitle>PROJECTS</HolographicTitle>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mt-6 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={activeFilter === f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border transition-all duration-250 ${
              activeFilter === f
                ? 'bg-teal-400/20 border-teal-400/70 text-teal-300'
                : 'bg-slate-800/40 border-slate-600/50 text-gray-400 hover:border-teal-400/40 hover:text-teal-400'
            }`}
            style={
              activeFilter === f
                ? { boxShadow: '0 0 14px rgba(20,184,166,0.3)' }
                : {}
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div
        key={activeFilter}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </ContentPanel>
  );
}
