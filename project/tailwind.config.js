/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#272757',
        secondary: '#8686ac',
        accent: '#505081',
        dark: '#0f0e47',
      },
    },
  },
  plugins: [],
};
