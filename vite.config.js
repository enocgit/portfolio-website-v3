import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist', // output directory
    assetsDir: 'assets', // assets directory
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, '/src/index.html'),
      },
    },
  },
});
