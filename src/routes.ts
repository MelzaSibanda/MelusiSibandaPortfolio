export const pages = {
  '/': {
    label: 'Home',
    description:
      'Melusi Sibanda, a full stack developer based in South Africa. Explore projects, skills and achievements.',
    load: () => import('./pages/Home').then(({ Home }) => Home),
  },
  '/about': {
    label: 'About',
    description:
      'Meet Melusi Sibanda, a software developer based in South Africa.',
    load: () => import('./pages/About').then(({ About }) => About),
  },
  '/skills': {
    label: 'Skills',
    description:
      'Explore Melusi Sibanda’s development skills and technologies.',
    load: () => import('./pages/Skills').then(({ Skills }) => Skills),
  },
  '/projects': {
    label: 'Projects',
    description: 'Explore Melusi Sibanda’s web, mobile and software projects.',
    load: () => import('./pages/Projects').then(({ Projects }) => Projects),
  },
  '/achievements': {
    label: 'Achievements',
    description: 'Browse Melusi Sibanda’s certifications and achievements.',
    load: () =>
      import('./pages/Achievements').then(({ Achievements }) => Achievements),
  },
  '/contact': {
    label: 'Contact',
    description:
      'Contact Melusi Sibanda, view social profiles or download the CV.',
    load: () => import('./pages/Contact').then(({ Contact }) => Contact),
  },
};

export const missingPage = {
  label: 'Page not found',
  description: 'This page could not be found.',
  load: () => import('./pages/NotFound').then(({ NotFound }) => NotFound),
};

export function getPage(pathname: string) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return Object.hasOwn(pages, path)
    ? pages[path as keyof typeof pages]
    : missingPage;
}

export function pageTitle(label: string) {
  return label === 'Home'
    ? 'Melusi Sibanda | Software Developer'
    : `${label} | Melusi Sibanda`;
}
