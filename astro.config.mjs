// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is served from the custom domain in public/CNAME via GitHub Pages.
export default defineConfig({
  site: 'https://alchemyrecycling.co.in',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Old .html URLs are only redirect stubs, keep them out of the sitemap.
      filter: (page) => !page.endsWith('.html') && !page.includes('/404'),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true },
});
