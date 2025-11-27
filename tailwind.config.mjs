/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#5D4037',    /* 深咖啡色 - 書脊感 */
                secondary: '#D7CCC8',  /* 淺棕色 */
                accent: '#E65100',     /* 活力橘 - 重點標示 */
                paper: '#FDFBF7',      /* 米白色 - 紙張背景 */
                ink: '#263238',        /* 深灰藍 - 文字 */
            },
            fontFamily: {
                sans: ['"Noto Sans TC"', 'sans-serif'],
                serif: ['"Noto Serif TC"', 'serif'],
            },
        },
    },
    plugins: [],
}
