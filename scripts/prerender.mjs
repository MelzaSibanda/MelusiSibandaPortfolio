import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { loadEnv } from 'vite';
import { paths, render } from '../.ssr/entry-static.js';

const isRender = process.env.RENDER === 'true';
const configuredUrl = loadEnv('production', process.cwd(), '').SITE_URL;
const value = configuredUrl || (isRender ? process.env.RENDER_EXTERNAL_URL : '');
const origin = value ? new URL(value).origin : '';
if (
  value &&
  (new URL(value).href !== origin + '/' || !origin.startsWith('https://'))
) {
  throw new Error('SITE_URL must be a public HTTPS origin without a path.');
}
if (!origin && isRender)
  throw new Error('Render did not provide RENDER_EXTERNAL_URL. Set SITE_URL.');
const template = await readFile('dist/index.html', 'utf8');
const escape = (s) =>
  s.replace(
    /[<>&"]/g,
    (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c],
  );
const urls = [];
for (const path of paths) {
  const { title, description, indexable, markup } = await render(path);
  const url = origin && indexable ? new URL(path, origin).href : '';
  const meta = (key, name, content) =>
    '<meta ' + key + '="' + name + '" content="' + escape(content) + '">';
  const tags = [
    meta('name', 'description', description),
    meta('name', 'robots', url ? 'index, follow' : 'noindex, follow'),
  ];
  if (origin) tags.push(meta('name', 'portfolio-origin', origin));
  if (path === '/')
    tags.push(
      '<link rel="preload" as="image" imagesrcset="/portrait-192.webp 192w, /portrait-384.webp 384w, /portrait-576.webp 576w" imagesizes="(max-width: 480px) 144px, 192px">',
    );
  if (url) {
    urls.push(url);
    const image = origin + '/og-preview.png';
    const alt = 'Melusi Sibanda, Full Stack Developer';
    tags.push('<link rel="canonical" href="' + escape(url) + '">');
    for (const [k, v] of Object.entries({
      type: 'website',
      title,
      description,
      url,
      image,
      'image:alt': alt,
      'image:width': '1200',
      'image:height': '630',
    }))
      tags.push(meta('property', 'og:' + k, v));
    for (const [k, v] of Object.entries({
      card: 'summary_large_image',
      title,
      description,
      image,
      'image:alt': alt,
    }))
      tags.push(meta('name', 'twitter:' + k, v));
    if (path === '/') {
      const graph = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': url + '#person',
            name: 'Melusi Sibanda',
            jobTitle: 'Full Stack Developer',
            url,
            sameAs: [
              'https://github.com/MelzaSibanda',
              'https://www.linkedin.com/in/melusi-sibanda-1a7288191',
            ],
          },
          {
            '@type': 'WebSite',
            name: 'Melusi Sibanda Portfolio',
            url,
            creator: { '@id': url + '#person' },
          },
        ],
      };
      tags.push(
        '<script type="application/ld+json">' +
          JSON.stringify(graph).replace(/</g, '\\u003c') +
          '</script>',
      );
    }
  }
  const folder = 'dist' + (path === '/' ? '' : path);
  const missing = path === '/404.html';
  if (!missing) await mkdir(folder, { recursive: true });
  await writeFile(
    missing ? folder : folder + '/index.html',
    template
      .replace(
        /<title>.*?<\/title>/,
        () => '<title>' + escape(title) + '</title>',
      )
      .replace('<!-- page-metadata -->', () => tags.join('\n'))
      .replace(
        '<div id="root"></div>',
        () => '<div id="root" data-route="' + path + '">' + markup + '</div>',
      ),
  );
}
await writeFile(
  'dist/robots.txt',
  'User-agent: *\nAllow: /\n' +
    (origin ? 'Sitemap: ' + origin + '/sitemap.xml\n' : ''),
);
if (origin)
  await writeFile(
    'dist/sitemap.xml',
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
      urls.map((url) => '<url><loc>' + escape(url) + '</loc></url>').join('') +
      '</urlset>\n',
  );
