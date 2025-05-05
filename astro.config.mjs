import { defineConfig } from 'astro/config';
import tina from '@tinacms/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tina({
      publicFolder: 'public',
      contentFolder: 'content',
      documentTypes: ['empowerTemplate', 'glucoseTemplate'],
    }),
  ],
});