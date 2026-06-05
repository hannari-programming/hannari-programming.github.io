/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        hannari: {
          pink:   '#E8426E',
          mauve:  '#9B3B6A',
          cream:  '#FDF6EE',
          ink:    '#1A1018',
          gold:   '#C89B5A',
        },
      },
      fontFamily: {
        display: ['"Zen Old Mincho"', 'serif'],
        body:    ['"Noto Sans JP"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease forwards',
        'shimmer':   'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
