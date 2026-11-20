import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="missing-page">
      <h1>Page not found</h1>
      <p>The page you requested could not be found.</p>
      <Link className="portfolio-button" to="/">
        Back to home
      </Link>
    </section>
  );
}
