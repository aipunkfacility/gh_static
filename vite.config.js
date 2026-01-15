import { defineConfig } from 'vite';

export default defineConfig({
    // Base path for deployment (e.g., GitHub Pages)
    base: '/gh_static/',

    // Static assets folder
    publicDir: 'public',

    server: {
        port: 3000,
        open: true
    },

    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Minification and other optimizations are enabled by default in production build
    }
});
