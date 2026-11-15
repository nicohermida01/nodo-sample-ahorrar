// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Placeholder: replace with the production domain when rebranding.
  site: 'https://ahorrar.example.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
