import { useContext, createContext, type ReactNode } from 'react';

export const StandalonePage = createContext(false);

export function PanelSubheading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const Heading = useContext(StandalonePage) ? 'h2' : 'h3';
  return <Heading className={className}>{children}</Heading>;
}

interface ContentPanelProps {
  children: ReactNode;
  className?: string;
}

export function ContentPanel({ children, className = '' }: ContentPanelProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden
        hover:border-teal-400/60 transition-all duration-500 ${className}`}
      style={{
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        background:
          'linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(20,30,55,0.75) 50%, rgba(15,23,42,0.88) 100%)',
        border: '1px solid rgba(20,184,166,0.35)',
        boxShadow: `
          0 0 50px rgba(20,184,166,0.18),
          0 0 100px rgba(20,184,166,0.06),
          inset 0 0 60px rgba(20,184,166,0.05),
          inset 0 1px 0 rgba(20,184,166,0.15)
        `,
      }}
    >
      {/* Holographic corner accents — top-left */}
      <div
        className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
        style={{
          borderTop: '2px solid rgba(20,184,166,0.7)',
          borderLeft: '2px solid rgba(20,184,166,0.7)',
          borderRadius: '1rem 0 0 0',
          boxShadow: '-4px -4px 16px rgba(20,184,166,0.15)',
        }}
      />
      {/* Holographic corner accents — bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
        style={{
          borderBottom: '2px solid rgba(20,184,166,0.7)',
          borderRight: '2px solid rgba(20,184,166,0.7)',
          borderRadius: '0 0 1rem 0',
          boxShadow: '4px 4px 16px rgba(20,184,166,0.15)',
        }}
      />

      <div className="relative z-10 panel-content">{children}</div>
    </div>
  );
}

export function HolographicTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const Heading = useContext(StandalonePage) ? 'h1' : 'h2';
  return (
    <Heading
      className={`text-3xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400
        bg-clip-text text-transparent relative inline-block ${className}`}
      style={{ filter: 'drop-shadow(0 0 12px rgba(20,184,166,0.6))' }}
    >
      {children}
      <div
        className="absolute bottom-0 left-0 h-0.5"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(20,184,166,0.9), transparent)',
        }}
      />
    </Heading>
  );
}
