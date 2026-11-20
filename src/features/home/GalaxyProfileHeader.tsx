import { Link } from 'react-router-dom';

export function GalaxyProfileHeader() {
  return (
    <header className="portfolio-hero">
      <div className="portrait-ring">
        <img
          src="/portrait-384.webp"
          srcSet="/portrait-192.webp 192w, /portrait-384.webp 384w, /portrait-576.webp 576w"
          sizes="(max-width: 480px) 144px, 192px"
          width={192}
          height={192}
          alt="Melusi Sibanda"
        />
      </div>
      <h1>Melusi Sibanda</h1>
      <p className="hero-role">Full Stack Developer</p>
      <p>I turn complex problems into clean, scalable solutions.</p>
      <p>South Africa</p>
      <div className="hero-actions">
        <Link className="portfolio-button primary" to="/projects">
          View projects
        </Link>
        <a
          className="portfolio-button"
          href="/assets/Melusi_Sibanda_CV.pdf"
          download
        >
          Download CV
        </a>
        <Link className="portfolio-button" to="/contact">
          Contact
        </Link>
      </div>
      <p className="hero-specialties">
        UI/UX Engineer · Open Source Builder · Problem Solver
      </p>
      <p className="hero-specialties">
        Exploring the Digital Universe • Creating Tomorrow's Solutions
      </p>
    </header>
  );
}
