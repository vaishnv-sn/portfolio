/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepSpace: '#030014',
        cosmicPurple: '#0F0728',
        starWhite: '#FFFFFF',
        nebulaPink: '#FF61D8',
        cosmicBlue: '#4CC9F0',
      },
      animation: {
        'meteor': 'meteor 1s linear forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #030014, #0F0728)',
      },
    },
  },
  plugins: [],
};