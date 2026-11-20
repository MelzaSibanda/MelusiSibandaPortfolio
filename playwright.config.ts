import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    viewport: { width: 320, height: 740 },
    channel: process.env.PLAYWRIGHT_CHANNEL,
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --strictPort',
    url: 'http://127.0.0.1:4173',
  },
});
