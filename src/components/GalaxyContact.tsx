import { ContentPanel, HolographicTitle } from './ContentPanel';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MapPin, FileText } from 'lucide-react';

type ContactMethod = {
  icon: any;
  label: string;
  value: string;
  color: string;
  link?: string;
};

export function GalaxyContact() {

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'melzasibanda@gmail.com', color: 'text-teal-400' },
    { icon: Linkedin, label: 'LinkedIn', value: 'www.linkedin.com/in/melusi-sibanda-1a7288191', color: 'text-blue-400', link: 'https://www.linkedin.com/in/melusi-sibanda-1a7288191' },
    { icon: Github, label: 'GitHub', value: 'https://github.com/MelzaSibanda', color: 'text-purple-400', link: 'https://github.com/MelzaSibanda' },
    { icon: MapPin, label: 'Location', value: 'South Africa', color: 'text-pink-400' }
  ];

  return (
    <ContentPanel delay={0.5}>
      <HolographicTitle>CONTACT</HolographicTitle>
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Contact information */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-300 mb-6"
          >
            Let's connect and explore opportunities in the digital universe together.
          </motion.p>

          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 
                border border-slate-700/50 hover:border-teal-400/50 
                transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 
                flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </div>
              <div>
                <p className="text-sm text-gray-400">{method.label}</p>
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-teal-400 transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-white font-semibold">{method.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="space-y-4"
        >
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto mb-4 text-teal-400" />
            <h3 className="text-xl font-bold text-white mb-4">View My CV</h3>
            <p className="text-gray-400 mb-6">
              Download or view my curriculum vitae to learn more about my experience and qualifications.
            </p>
            <motion.a
              href="/assets/Melusi_Sibanda_Resume_I.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-4
                bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400
                text-white font-bold rounded-lg transition-all duration-300 group"
              style={{
                boxShadow: '0 0 30px rgba(20, 184, 166, 0.4)'
              }}
            >
              <FileText className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>View CV</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="flex justify-center gap-4 mt-8 pt-8 border-t border-slate-700/50"
      >
        {[
          { icon: Github, link: 'https://github.com/MelzaSibanda' },
          { icon: Linkedin, link: 'https://www.linkedin.com/in/melusi-sibanda-1a7288191' }
        ].map(({ icon: Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800
              border border-slate-600 hover:border-teal-400/50 flex items-center justify-center
              transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/30"
          >
            <Icon className="w-5 h-5 text-gray-300 hover:text-teal-400" />
          </motion.a>
        ))}
      </motion.div>
    </ContentPanel>
  );
}
