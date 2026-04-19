import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const siteUrl = (process.env.VITE_SITE_URL || 'https://superior-roofing.invalid').replace(/\/$/, '');
const distDir = resolve(process.cwd(), 'dist');

const pages = [
  '/',
  '/services.html',
  '/gallery.html',
  '/about.html',
  '/contact.html',
  '/privacy.html',
  '/terms.html'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${new URL(page, siteUrl).href}</loc></url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', siteUrl).href}
`;

writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap, 'utf8');
writeFileSync(resolve(distDir, 'robots.txt'), robots, 'utf8');
