import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ndalton12.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      // Enable React hydration for interactive components
      include: ['**/components/**/*.tsx'],
    }),
    mdx(),
    sitemap(),
  ],
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
