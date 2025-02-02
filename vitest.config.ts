import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      coverage: {
        reporter: ['text', 'html', 'json'],
      },
      include: ['tests/**/*.test.ts'],
      exclude: ['node_modules'],
    },
  }),
);
