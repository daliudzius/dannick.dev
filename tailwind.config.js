const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
   mode: 'jit',
   purge: {
      content: [
         './src/pages/**/*.{js,ts,jsx,tsx}',
         './src/components/**/*.{js,ts,jsx,tsx}',
         './src/**/*.{js,ts,jsx,tsx}',
      ],
      options: {
         keyframes: true,
      },
   },
   darkMode: 'class',
   theme: {
      extend: {
         fontFamily: {
            sans: ['Inter', ...fontFamily.sans],
         },
         colors: {
            bluegray: colors.blueGray,
            gray: colors.gray,
         },
      },
   },
   variants: {
      extend: {
         borderStyle: ['hover'],
      },
   },
   plugins: [],
}
