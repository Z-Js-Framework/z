import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
