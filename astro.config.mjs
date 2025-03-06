import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://theooow.github.io/projects/dist',
    //base: '/projects',
    vite: {
        resolve: {
            alias: {
                '@': '/src'
            }
        }
    }
});