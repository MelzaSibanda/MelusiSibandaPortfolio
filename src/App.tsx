import {
  Component,
  createElement,
  lazy,
  Suspense,
  useEffect,
  useRef,
  type ComponentType,
  type ReactNode,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StandalonePage } from './components/ContentPanel';
import { FloatingNavigation } from './components/FloatingNavigation';
import { getPage, missingPage, pageTitle, pages } from './routes';

const lazyPages = new Map(
  [...Object.values(pages), missingPage].map((page) => [
    page,
    lazy(async () => ({ default: await page.load() })),
  ]),
);

class PageBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? (
      <section className="missing-page">
        <h1>Page unavailable</h1>
        <p>Reload the page or return to the portfolio.</p>
        <Link to="/">Back to home</Link>
      </section>
    ) : (
      this.props.children
    );
  }
}

export default function App({
  initial,
}: {
  initial?: { pathname: string; Page: ComponentType };
}) {
  const { pathname } = useLocation();
  const page = getPage(pathname);
  const Page =
    initial?.pathname === pathname ? initial.Page : lazyPages.get(page)!;
  const main = useRef<HTMLElement>(null);
  const first = useRef(true);

  useEffect(() => {
    document.title = pageTitle(page.label);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', page.description);
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    const origin = document.querySelector<HTMLMetaElement>(
      'meta[name="portfolio-origin"]',
    )?.content;
    const url =
      origin && page !== missingPage
        ? new URL(pathname.replace(/\/+$/, '') || '/', origin).href
        : '';
    if (canonical) {
      if (url) canonical.href = url;
      else canonical.removeAttribute('href');
    }
    document
      .querySelector<HTMLMetaElement>('meta[name="robots"]')
      ?.setAttribute('content', url ? 'index, follow' : 'noindex, follow');
    if (!first.current) {
      window.scrollTo(0, 0);
      main.current?.focus({ preventScroll: true });
    }
    first.current = false;
  }, [page, pathname]);

  return (
    <StandalonePage.Provider value={page !== pages['/']}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <FloatingNavigation />
      <main id="main-content" ref={main} tabIndex={-1}>
        <PageBoundary key={pathname}>
          <Suspense
            fallback={
              <p className="missing-page" role="status">
                Loading page…
              </p>
            }
          >
            {createElement(Page)}
          </Suspense>
        </PageBoundary>
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Melusi Sibanda — Exploring the Digital
        Universe.
      </footer>
    </StandalonePage.Provider>
  );
}
