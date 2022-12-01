/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('main_bg.webp')",
      },
      borderRadius: {
        10: '10px',
      },
      colors: {
        primary: '#CF0F00',
        text: '#461504',
        background: '#FFD9D9',
        background_clear: '#FAAB95',
      },
    },
  },
  plugins: [],
};
