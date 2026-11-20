import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { pages } from '../routes';

export function FloatingNavigation() {
  const [expanded, setExpanded] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!expanded) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setExpanded(false);
      button.current?.focus();
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [expanded]);

  return (
    <header className="site-header">
      <button
        ref={button}
        type="button"
        className="nav-toggle"
        aria-label={expanded ? 'Close navigation' : 'Open navigation'}
        aria-expanded={expanded}
        aria-controls="primary-navigation"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        id="primary-navigation"
        aria-label="Primary"
        data-expanded={expanded}
      >
        {Object.entries(pages).map(([path, { label }]) => (
          <NavLink key={path} to={path} end onClick={() => setExpanded(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
