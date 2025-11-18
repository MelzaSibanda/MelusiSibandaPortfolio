import { ContentPanel, HolographicTitle } from './ContentPanel';
import { motion } from 'motion/react';
import { Trophy, Award, Medal, Star } from 'lucide-react';

export function GalaxyAchievements() {
  const achievements = [
{

  title: 'SAP FI Training – Mentec Foundation (2024)',
  description: 'Completed specialized SAP Financial Accounting training, demonstrating strong understanding of enterprise financial systems.',
  icon: Star,
  gradient: 'from-blue-500/20 to-indigo-500/20',
  image: '/assets/SAP.pdf'
},
{
  title: 'Certificate of Diploma in ICT in Applications Development (2025)',
  description: 'Successfully completed a comprehensive diploma focused on software development, database systems, networking, and application design, gaining strong practical skills in building real-world applications and modern ICT solutions.',
  icon: Star,
  gradient: 'from-green-500/20 to-emerald-500/20',
  image: '/assets/Melza Diploma cert.pdf'
},

{
  title: 'FNB App Academy – Full Stack Developer Certificate',
  description: 'Earned a full-stack development certification focusing on building scalable, modern web apps with industry standards.',
  icon: Star,
  gradient: 'from-yellow-500/20 to-orange-500/20',
  image: '/assets/FNBAcademy.pdf'
},
{
  title: 'Microsoft 365 Certified: Fundamentals',
  description: 'Achieved certification in foundational Microsoft 365 competencies including cloud productivity and collaboration tools.',
  icon: Star,
  gradient: 'from-teal-500/20 to-cyan-500/20',
  image: '/assets/Fundementals.pdf'
},
{
  title: 'Microsoft Certified: Security, Compliance & Identity (SC-900)',
  description: 'Certified in core security, compliance, and identity principles across Microsoft cloud services.',
  icon: Star,
  gradient: 'from-indigo-500/20 to-violet-500/20',
  image: '/assets/Security.pdf'
},
{
  title: 'Microsoft AI Fluency Certification',
  description: 'Completed Microsoft’s AI Fluency program, demonstrating strong understanding of AI concepts, ethics, and real-world applications.',
  icon: Star,
  gradient: 'from-pink-500/20 to-rose-500/20',
  image: '/assets/AIFluencyCertificate.pdf'
}
  ];

  return (
    <ContentPanel delay={0.5}>
      <HolographicTitle>ACHIEVEMENTS</HolographicTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{
              delay: 0.6 + index * 0.15,
              duration: 0.5
            }}
            className={`relative group rounded-2xl bg-gradient-to-br ${achievement.gradient} p-[2px] overflow-hidden`}
          >
            {/* Card content */}
            <div className="relative h-full bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6
              border border-slate-700/50 group-hover:border-teal-400/50 transition-all duration-300"
            >
              {/* Achievement image */}
              <a href={achievement.image} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  {achievement.image.endsWith('.pdf') ? (
                    <iframe
                      src={achievement.image}
                      className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      style={{ border: 'none' }}
                      title={achievement.title}
                    />
                  ) : (
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-purple-500/20
                    flex items-center justify-center border border-teal-400/30"
                    style={{
                      boxShadow: '0 0 20px rgba(20, 184, 166, 0.2)'
                    }}
                  >
                    <achievement.icon className="w-6 h-6 text-teal-400" />
                  </div>
                </div>
              </a>

              {/* Title */}
              <h3 className="font-bold text-lg mb-3 text-white group-hover:text-teal-400 transition-colors">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity"
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