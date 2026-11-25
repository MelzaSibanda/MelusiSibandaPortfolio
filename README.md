# Melusi Sibanda Portfolio

React and TypeScript portfolio with six routes, built by Vite and hosted as static files on Render. The deployment origin on November 20, 2026 was [melusi-sibanda-portfolio.onrender.com](https://melusi-sibanda-portfolio.onrender.com/).

## Local development

Use Node 22.23.4 or a compatible Node 24 release. Copy `.env.example` to `.env` for production metadata during local builds. Builds without `SITE_URL` generate a local preview marked `noindex`.

```sh
npm ci
npm run dev
```

Run the verification commands in a separate shell.

```sh
npm run lint
npm run type-check
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run lighthouse
```

Use `npm run preview` to inspect the production build. Run the build with `ANALYZE=1` to generate the ignored `bundle-stats.html` treemap. Lighthouse CI writes its HTML and JSON reports to `.lighthouseci/results/`. Husky runs lint-staged during local commits.

On Windows, close any Vite process using this checkout before a clean install if `npm ci` reports an `EPERM` on `esbuild.exe`. The clean install was verified in an isolated checkout.

## What changed

- The home page shows Melusi’s name, role, location and project, CV and contact links immediately. Projects follow the hero. All six routes, the dark space theme, existing project descriptions, certifications and social profiles are retained.
- The portrait uses responsive WebP variants and an early preload. Egumeni Eats and AgriNathi have responsive WebP screenshots of their public screens. The static starfield replaces continuous particles and canvas work. The system font stack requires no font requests.
- Each route has build-time HTML rendered from the same React components used in the browser. Vite keeps the existing application and lazy page chunks. Render serves the output without a Node web service.
- The contact form validates locally and prepares a draft for the visitor’s mail application. Direct email is also available. The site has no public submission endpoint, analytics or tracking cookies. Firebase remains in the portfolio’s project descriptions. The portfolio itself has no Firebase SDK, rules or console setup.
- Keyboard navigation, visible focus, heading order, form feedback and mobile layout are covered by the updated UI and browser checks. The dark palette is the single supported display theme.

## Mobile Lighthouse

Median of three Lighthouse 13.6 mobile runs on the home route of each production build. The original build came from the revision before this branch. Both builds were served locally under the same Lighthouse profile.

| Metric                   | Original | Modernised |
| ------------------------ | -------: | ---------: |
| Performance              |       53 |         99 |
| Accessibility            |       96 |        100 |
| Best Practices           |       96 |        100 |
| SEO                      |      100 |        100 |
| Largest Contentful Paint |  52.55 s |     1.99 s |
| Cumulative Layout Shift  |   0.0024 |          0 |
| Total Blocking Time      |   724 ms |      86 ms |

The final mobile performance scores were 99, 99 and 72. The slow run recorded 1,673 ms of Total Blocking Time. LCP remained below 2.5 s in all three final runs. Lighthouse CI passed the configured assertions.

| Asset                 |           Original |        Modernised |
| --------------------- | -----------------: | ----------------: |
| JS entry, raw / gzip  | 308.62 / 101.69 kB | 189.59 / 63.26 kB |
| CSS entry, raw / gzip |    54.03 / 8.25 kB |   46.53 / 7.75 kB |
| Portrait, raw         |        9,503.82 kB |     7.89–31.26 kB |

The bundle visualiser shows React and React Router dominate the remaining entry. Tailwind, Vitest, Playwright and Lighthouse are development or build dependencies. Mobile INP needs field interaction data. Total Blocking Time is reported as a lab metric.

## Render setup

1. Deploy `master` as a Render Static Site using [render.yaml](render.yaml). For an existing service configured through the dashboard, mirror the build command, publish directory, headers and routes from the Blueprint. A web service needs a new Static Site to migrate.
2. Render builds use the service's public `onrender.com` URL automatically when `SITE_URL` is unset. If you attach a custom domain, verify its DNS and TLS in Render, set `SITE_URL` to that origin, then rebuild. Confirm the canonical URLs, share image and sitemap match the public origin. [Render environment variables](https://render.com/docs/environment-variables)
3. Smoke-test a direct request to `/projects` and an unknown URL on the deployed host. The static fallback serves the `noindex` error page through a rewrite, so the response can be HTTP 200. [Render rewrite rules](https://render.com/docs/redirects-rewrites)

## Content to review

- Your Look opens a first-time setup screen. Confirm the public demo URL and provide a screenshot of the intended recruiter-facing page.
- Egumeni Eats loads publicly. Its logo did not render during review. AgriNathi opens a sign-in screen.
- The Mpumalanga Tourism GitHub link returned HTTP 404. Confirm its visibility or provide the correct URL.
- Add project roles, attributable outcomes or metrics, and approved screenshots for the remaining cards when available. Existing claims were preserved.
- Review older certifications for currency. Both CV download links serve `public/assets/Melusi_Sibanda_CV.pdf`. When replacing the PDF, update the `v` query parameter in both links to the first 12 characters of its SHA-256 hash so browsers request the updated file.
