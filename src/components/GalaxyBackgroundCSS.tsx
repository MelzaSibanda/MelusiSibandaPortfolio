import { memo, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

type Star = { x: number; y: number; size: number; speed: number; opacity: number; color: string };

export const GalaxyBackgroundCSS = memo(function GalaxyBackgroundCSS() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Layer 1: large, slow background stars (white/cyan) ──────────────
    const bgStars: Star[] = Array.from({ length: 70 }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      size:    Math.random() * 2 + 1.5,
      speed:   Math.random() * 0.15 + 0.05,
      opacity: Math.random() * 0.35 + 0.15,
      color:   Math.random() > 0.5 ? '220,240,255' : '180,240,240',
    }));

    // ── Layer 2: small, fast foreground stars (teal) ─────────────────────
    const fgStars: Star[] = Array.from({ length: 160 }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      size:    Math.random() * 1.2 + 0.3,
      speed:   Math.random() * 0.7 + 0.4,
      opacity: Math.random() * 0.5 + 0.3,
      color:   '20,184,166',
    }));

    let raf: number;

    const draw = (layer: Star[], clearFirst: boolean) => {
      if (clearFirst) {
        ctx.fillStyle = 'rgba(10, 10, 26, 0.12)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      layer.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`;
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    const animate = () => {
      draw(bgStars, true);   // clears + draws slow layer
      draw(fgStars, false);  // draws fast layer on top without clearing
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #050510, #1a0a2e, #070714)' }}
      />

      {/* Dual-layer animated canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" style={{ opacity: 0.85 }} />

      {/* Orb 1 — teal, breathing */}
      <motion.div
        className="absolute w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(20,184,166,0.35), transparent)',
          left: '10%', top: '20%',
          filter: 'blur(65px)',
        }}
        animate={{ y: [0, 55, 0], x: [0, 28, 0], scale: [1, 1.18, 1], opacity: [0.65, 0.95, 0.65] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — purple, breathing */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.28), transparent)',
          right: '10%', top: '40%',
          filter: 'blur(85px)',
        }}
        animate={{ y: [0, -45, 0], x: [0, -22, 0], scale: [1, 1.22, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Orb 3 — blue, breathing */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.22), transparent)',
          left: '50%', bottom: '10%',
          filter: 'blur(75px)',
        }}
        animate={{ y: [0, 32, 0], scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Subtle teal grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20,184,166,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,184,166,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
});
