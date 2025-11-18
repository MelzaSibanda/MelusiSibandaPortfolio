import { motion } from 'motion/react';
import exampleImage from "figma:asset/ac6215175db0a1ac187fb408c86c3ee3acd7eee1.png";

export function GalaxyProfileHeader() {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12">
      {/* Animated profile image with holographic effect */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="relative mb-8"
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '220px',
            height: '220px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'conic-gradient(from 0deg, #14b8a6, #a855f7, #3b82f6, #14b8a6)',
            filter: 'blur(8px)',
            opacity: 0.6
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-teal-400/50"
          style={{
            width: '200px',
            height: '200px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 40px rgba(20, 184, 166, 0.5), inset 0 0 40px rgba(20, 184, 166, 0.2)'
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Profile image */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-teal-400/80 z-10"
          style={{
            boxShadow: '0 0 60px rgba(20, 184, 166, 0.6)'
          }}
        >
          <img
            src={exampleImage}
            alt="Melusi Sibanda"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Orbiting particles */}
        {[0, 120, 240].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-teal-400"
            style={{
              left: '50%',
              top: '50%',
              boxShadow: '0 0 10px rgba(20, 184, 166, 0.8)'
            }}
            animate={{
              x: [
                Math.cos((angle * Math.PI) / 180) * 120,
                Math.cos(((angle + 360) * Math.PI) / 180) * 120
              ],
              y: [
                Math.sin((angle * Math.PI) / 180) * 120,
                Math.sin(((angle + 360) * Math.PI) / 180) * 120
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      {/* Name with glitch effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-4"
      >
        <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent relative"
          style={{
            textShadow: '0 0 30px rgba(20, 184, 166, 0.5)'
          }}
        >
          MELUSI
        </h1>
        <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent relative mt-2"
          style={{
            textShadow: '0 0 30px rgba(20, 184, 166, 0.5)'
          }}
        >
          SIBANDA
        </h1>
      </motion.div>

      {/* Professional title with animated underline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative"
      >
        <p className="text-2xl text-teal-400 tracking-widest font-semibold"
          style={{
            textShadow: '0 0 20px rgba(20, 184, 166, 0.6)'
          }}
        >
          SOFTWARE DEVELOPER
        </p>
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mt-2"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.2, duration: 1 }}
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-6 text-gray-300 text-lg max-w-2xl"
      >
        Exploring the Digital Universe • Creating Tomorrow's Solutions
      </motion.p>
    </div>
  );
}