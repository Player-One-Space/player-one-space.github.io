import { defineConfig } from 'astro/config';

// Apex custom domain (playeronespace.com) served from root — do NOT set `base`.
export default defineConfig({
  site: 'https://playeronespace.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { assets: '_astro' },
});
