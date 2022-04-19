import { defineConfig } from 'astro/config';

const dev = process.env.NODE_ENV === 'dev'

// https://astro.build/config
export default defineConfig({
    site: 'https://auroratide.github.io/',
    base: dev ? '' : '/tarm/',
    markdown: {
        syntaxHighlight: 'prism',
    },
});
