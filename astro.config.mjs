// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Placeholder: replace with the production domain when rebranding.
  site: 'https://nodo-sample-ahorrar.vercel.app',
  output: 'static',
  integrations: [
    icon({ iconDir: 'src/assets/icons' }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
