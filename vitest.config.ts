import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    silent: false,
    watch: false,
    include: ['**/*.spec.ts'],
    exclude: [
      '.nuxt',
      'node_modules',
      'dist',
      'assets',
    ],
  },
});
