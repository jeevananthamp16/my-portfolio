// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://jeevananthamp16.github.io',
  base: '/my-portfolio',
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});