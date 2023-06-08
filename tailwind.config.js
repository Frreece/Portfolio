
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 3s ease-in-out',
        wiggle1: 'wiggle1 1.5s ease-in'
      },
      keyframes: {
        wiggle: {
          '0%':{
          transform: 'translateZ(-100px) scale(0.5)',
          opacity: 0,
          transform: 'translateY(-100px)'
        },
          '100%': {transform: 'translateZ(0) scale(1)', opacity: 1},
        },
        wiggle1: {
          '0%':{
          transform: 'translateZ(-100px) scale(0.7)',
          opacity: 0,
          
        },
          '100%': {transform: 'translateZ(0) scale(1)', opacity: 1},
        }
      }
    },
    screens: {
      'Iphone': '375px',
      // => @media (min-width: 640px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
  ],
}
