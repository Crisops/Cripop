/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif'],
        Noto_Sans: ['Noto Sans', 'sans-serif'],
        Libre_Franklin: ['Libre Franklin', 'sans-serif'],
        sans: [...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
