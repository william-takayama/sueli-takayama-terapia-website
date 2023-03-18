/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react(), { name: '@next/babel-plugin-font' }],
  test: {
    environment: 'jsdom',
    include: ['**/*.(test|spec).(ts|tsx)'],
    root: 'src',
    logHeapUsage: true,
    globals: true,
    cache: {
      dir: fileURLToPath(new URL('./node_modules/.vitest', import.meta.url)),
    },
  },
  resolve: {
    alias: [
      {
        find: '@next/font/google',
        replacement: fileURLToPath(new URL('./src/mocks', import.meta.url)),
      },
      {
        find: '@/',
        replacement: fileURLToPath(new URL('./src/', import.meta.url)),
      },
    ],
  },
});
