import { GalaxyProfileHeader } from '../components/GalaxyProfileHeader';
import { GalaxyAboutMe } from '../components/GalaxyAboutMe';
import { GalaxySkills } from '../components/GalaxySkills';
import { GalaxyProjects } from '../components/GalaxyProjects';
import { GalaxyAchievements } from '../components/GalaxyAchievements';
import { GalaxyContact } from '../components/GalaxyContact';
import { Coffee, Code, Code2, Flame, Database, Atom, Palette, Cog } from 'lucide-react';

export function Home() {
  const featuredSkills = [
    { icon: Coffee, label: 'Java', color: 'from-orange-500 to-red-500' },
    { icon: Code, label: 'C#', color: 'from-sky-500 to-blue-500' },
    { icon: Code2, label: 'C++', color: 'from-blue-500 to-cyan-500' },
    { icon: Code, label: 'Python', color: 'from-purple-500 to-pink-500' },
    { icon: Code2, label: 'Kotlin', color: 'from-purple-500 to-pink-500' },
    { icon: Database, label: 'SQL', color: 'from-cyan-500 to-blue-500' },
    { icon: Flame, label: 'Firebase', color: 'from-pink-500 to-purple-500' },
    { icon: Atom, label: 'React', color: 'from-teal-500 to-green-500' },
    { icon: Code, label: 'HTML', color: 'from-red-500 to-pink-500' },
    { icon: Palette, label: 'CSS', color: 'from-green-500 to-teal-500' },
    { icon: Code, label: 'JavaScript', color: 'from-indigo-500 to-purple-500' },
    { icon: Code, label: 'Typescript', color: 'from-lime-500 to-green-500' },
    { icon: Database, label: 'MongoDB', color: 'from-violet-500 to-purple-500' },
    { icon: Code, label: 'Node.js', color: 'from-orange-500 to-red-500' },
    { icon: Cog, label: 'DevOps', color: 'from-blue-500 to-cyan-500' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <GalaxyProfileHeader />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <GalaxyAboutMe />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <GalaxySkills skillsList={featuredSkills} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <GalaxyProjects />
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <GalaxyAchievements />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <GalaxyContact />
        </div>
      </section>
    </div>
  );
}