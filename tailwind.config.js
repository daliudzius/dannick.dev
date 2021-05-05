const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
   mode: 'jit',
   purge: {
      content: [
         './src/pages/**/*.{js,jsx}',
         './src/components/**/*.{js,jsx}',
         './src/**/*.{js,jsx}',
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
         animation: ['first'],
         borderRadius: ['last'],
      },
   },
   plugins: [],
}
