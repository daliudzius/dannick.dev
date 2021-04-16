const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
   mode: 'jit',
   purge: {
      content: [
         './pages/**/*.{js,ts,jsx,tsx}',
         './components/**/*.{js,ts,jsx,tsx}',
      ],
      options: {
         keyframes: true,
      },
   },
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            sans: ['Inter', ...fontFamily.sans],
         },
         colors: {
            bluegray: colors.blueGray,
         },
         animation: {
            pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'pulse-subtle':
               'pulse-subtle 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
         },
         keyframes: {
            pulse: {
               '0%, 100%': {
                  opacity: 0.5,
               },
               '50%': {
                  opacity: 1,
               },
            },
            'pulse-subtle': {
               '0%, 100%': {
                  opacity: 0.7,
               },
               '50%': {
                  opacity: 1,
               },
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
