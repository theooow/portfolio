import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://theooow.github.io',
    base: '/portfolio',
    vite: {
        resolve: {
            alias: {
                '@': '/src'
            }
        }
    }
});
