// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://arushima.vercel.app',
  integrations: [sitemap()],
  trailingSlash: 'never',
  server: { port: 4327 },
  vite: {
    plugins: [tailwindcss()],
  },
});
