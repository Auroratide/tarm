import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
    site: 'https://auroratide.github.io/',
    base: '/tarm/',
    markdown: {
        syntaxHighlight: 'prism',
    },
});
