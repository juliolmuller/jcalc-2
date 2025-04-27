import vue from '@vitejs/plugin-vue';
import rollupAnalyze from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        rollupAnalyze({
          summaryOnly: true,
          limit: 10,
        }),
      ],
    },
  },
  plugins: [vue()],
});
