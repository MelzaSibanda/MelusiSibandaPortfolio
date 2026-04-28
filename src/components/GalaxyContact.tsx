import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { ContentPanel, HolographicTitle } from './ContentPanel';
import { motion } from 'motion/react';
import { Mail, Link2, GitBranch, Send, MapPin, FileText, Loader2 } from 'lucide-react';

// Fill these in via .env  (VITE_EMAILJS_SERVICE_ID, etc.)
const SVC_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const TPL_ID  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUB_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

type FormData = { name: string; email: string; message: string };

type ContactMethod = { icon: any; label: string; value: string; color: string; link?: string };

const CONTACT_METHODS: ContactMethod[] = [
  { icon: Mail,      label: 'Email',    value: 'melzasibanda@gmail.com',                          color: 'text-teal-400'   },
  { icon: Link2,  label: 'LinkedIn', value: 'linkedin.com/in/melusi-sibanda-1a7288191',         color: 'text-blue-400',  link: 'https://www.linkedin.com/in/melusi-sibanda-1a7288191' },
  { icon: GitBranch, label: 'GitHub',   value: 'github.com/MelzaSibanda',                         color: 'text-purple-400',link: 'https://github.com/MelzaSibanda' },
  { icon: MapPin,    label: 'Location', value: 'South Africa',                                    color: 'text-pink-400'   },
];

// ── Floating micro-particles on each contact card ─────────────────────────
function CardParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-teal-400/40"
          style={{ left: `${20 + i * 22}%`, top: `${30 + (i % 2) * 40}%` }}
          animate={{ y: [0, -12, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────
export function GalaxyContact() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!SVC_ID || !TPL_ID || !PUB_KEY) {
      toast.warning('Email service not configured yet. Reach out directly at melzasibanda@gmail.com');
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        SVC_ID, TPL_ID,
        { from_name: data.name, from_email: data.email, message: data.message },
        PUB_KEY,
      );
      toast.success('Message sent! I\'ll get back to you soon.');
      reset();
    } catch {
      toast.error('Failed to send. Please try emailing directly.');
    } finally {
      setSending(false);
    }
  };

  const inputClass = `w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3
    text-white placeholder-gray-500 text-sm
    focus:outline-none focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/15
    transition-all duration-200`;

  return (
    <ContentPanel delay={0.5}>
      <HolographicTitle>CONTACT</HolographicTitle>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        {/* ── Left: contact info cards ─────────────────────────────────── */}
        <div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="text-gray-300 mb-6 text-sm leading-relaxed"
          >
            Let's connect and explore opportunities in the digital universe together.
          </motion.p>

          <div className="space-y-3">
            {CONTACT_METHODS.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                className="relative flex items-center gap-4 p-4 rounded-xl bg-slate-800/40
                  border border-slate-700/40 hover:border-teal-400/45
                  transition-all duration-300 group overflow-hidden"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <CardParticles />
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800
                  flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 z-10">
                  <m.icon className={`w-5 h-5 ${m.color}`} />
                </div>
                <div className="z-10 min-w-0">
                  <p className="text-xs text-gray-400 mb-0.5">{m.label}</p>
                  {m.link ? (
                    <a href={m.link} target="_blank" rel="noopener noreferrer"
                      className="text-white text-sm font-semibold hover:text-teal-400 transition-colors truncate block">
                      {m.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-semibold truncate">{m.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CV download */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-6"
          >
            <motion.a
              href="/assets/Melusi_Sibanda_CV.pdf"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3
                bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400
                text-white font-bold rounded-lg transition-all duration-300 text-sm group"
              style={{ boxShadow: '0 0 28px rgba(20,184,166,0.35)' }}
            >
              <FileText className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              View CV / Resume
            </motion.a>
          </motion.div>
        </div>

        {/* ── Right: contact form ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 className="text-lg font-bold text-white mb-5">Send a Message</h3>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">

            {/* Name */}
            <div>
              <input
                {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
                placeholder="Your Name"
                className={inputClass}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                })}
                type="email"
                placeholder="your@email.com"
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                placeholder="Your message..."
                rows={5}
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={sending ? {} : { scale: 1.02 }}
              whileTap={sending ? {} : { scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3
                bg-gradient-to-r from-teal-500/80 to-cyan-500/80
                hover:from-teal-400/90 hover:to-cyan-400/90
                disabled:opacity-60 disabled:cursor-not-allowed
                text-white font-bold rounded-lg border border-teal-400/40 transition-all duration-300 text-sm"
              style={{ boxShadow: '0 0 20px rgba(20,184,166,0.3)' }}
            >
              {sending
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                : <><Send className="w-4 h-4" /> Send Message</>
              }
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="flex justify-center gap-4 mt-8 pt-8 border-t border-slate-700/40"
      >
        {[
          { icon: GitBranch, link: 'https://github.com/MelzaSibanda',                           label: 'GitHub'   },
          { icon: Link2,  link: 'https://www.linkedin.com/in/melusi-sibanda-1a7288191',       label: 'LinkedIn' },
        ].map(({ icon: Icon, link, label }) => (
          <motion.a
            key={label}
            href={link} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}
            aria-label={label}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-700 to-slate-800
              border border-slate-600 hover:border-teal-400/50 flex items-center justify-center
              transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/25"
          >
            <Icon className="w-5 h-5 text-gray-300 hover:text-teal-400 transition-colors" />
          </motion.a>
        ))}
      </motion.div>
    </ContentPanel>
  );
}
