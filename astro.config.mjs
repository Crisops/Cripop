import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://Crisops.github.io',
  base: '/Cripop',
  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'image.tmdb.org'
    }]
  },
  output: 'server',
  integrations: [tailwind(), react()],
  adapter: vercel()
});