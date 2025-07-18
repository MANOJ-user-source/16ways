/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'font-playfair',
    'font-inter',
    'text-gold-400',
    'text-navy-700',
    'bg-gold-400',
    'bg-navy-700',
    'border-gold-100',
    'border-navy-700',
    'from-gold-400',
    'via-navy-700',
    'to-black',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbea',
          100: '#fceabb',
          400: '#FFD700',
        },
        navy: {
          100: '#e6ecf3',
          700: '#1a2942',
          900: '#0a1833',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
