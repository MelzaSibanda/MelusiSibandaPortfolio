import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    process.env.ANALYZE === '1' &&
      visualizer({ filename: 'bundle-stats.html', gzipSize: true }),
  ],
  server: { port: 3000 },
});
