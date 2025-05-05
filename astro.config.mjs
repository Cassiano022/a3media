import { defineConfig } from 'astro/config';
import tina from '@tinacms/astro';

// O nome do seu repositório GitHub. Altere para o nome real do seu repositório
const REPO_NAME = 'a3media-landing-pages';

// https://astro.build/config
export default defineConfig({
  // Adicione o nome do repositório como o caminho base quando implantando no GitHub Pages
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  integrations: [
    tina({
      publicFolder: 'public',
      contentFolder: 'content',
      documentTypes: ['empowerTemplate', 'glucoseTemplate'],
    }),
  ],
  // Defina a pasta de saída como 'docs' para GitHub Pages
  outDir: './docs',
});