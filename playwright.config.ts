import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();


export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL!,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['html'], ['list']],
});
