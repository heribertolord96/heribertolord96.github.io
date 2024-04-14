import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
    },
  },
  // resolve: {
  //   alias: {
  //     'jss-plugin-{}': 'jss-plugin-globalThis',
  //   },
  // },
  plugins: [react()],

  server: {
    port: 3000,
  },
  define: {
    global: 'globalThis',
  },
});
