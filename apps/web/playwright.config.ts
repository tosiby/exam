import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '../../tests/web',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list']],
  use: {
    baseURL: process.env.WEB_BASE_URL || 'http://127.0.0.1:3000',
    trace: 'on-first-retry'
  }
});
