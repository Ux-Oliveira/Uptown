/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Bebas Neue', 'sans-serif'], //Sleek font for English
        'arabic': ['Cairo', 'sans-serif'],   //Clean Arabic font
      },
      colors: {
        'ut-red': '#E02B37',
        'ut-blue': '#2B9AE0',
        'ut-dark': '#0A0A0A',
      },
      animation: {
        'flare': 'flare 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-bg-right': 'slideBgRight 30s linear infinite',
        'slide-bg-left': 'slideBgLeft 30s linear infinite',
      },
      keyframes: {
        flare: {
          '0%, 100%': { transform: 'translateX(-100%) skewX(-30deg)' },
          '50%': { transform: 'translateX(200%) skewX(-30deg)' },
        },
        slideBgRight: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
        slideBgLeft: {
          '0%': { backgroundPosition: '100% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      }
    },
  },
  plugins: [],

}
