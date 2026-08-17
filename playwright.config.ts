import { defineConfig } from '@playwright/test';

const baseURL = process.env.AUDIT_URL ?? 'http://localhost:3000';

export default defineConfig({
  testDir: './ux-audit',
  testMatch: 'implementation.spec.ts',
  reporter: 'line',
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'pnpm dev',
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
