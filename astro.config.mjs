// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://aipunkfacility.github.io',
    base: '/gh_static/',
    output: 'static',
    build: {
        assets: 'assets'
    }
});
