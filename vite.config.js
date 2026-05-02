import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const root = process.cwd();

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 4173
  },
  preview: {
    host: '127.0.0.1',
    port: 4174
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        services: resolve(root, 'services.html'),
        gallery: resolve(root, 'gallery.html'),
        about: resolve(root, 'about.html'),
        contact: resolve(root, 'contact.html'),
        privacy: resolve(root, 'privacy.html'),
        terms: resolve(root, 'terms.html'),
        notfound: resolve(root, '404.html')
      }
    }
  }
});
