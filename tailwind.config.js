const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
   mode: 'jit',
   purge: {
      content: ['./src/pages/**/*.js', './src/components/**/*.js'],
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
         typography: (theme) => ({
            DEFAULT: {
               css: {
                  color: theme('colors.bluegray.800'),
                  'a, a strong': {
                     color: theme('colors.bluegray.800'),
                     '&:hover': {
                        color: theme('colors.purple.600'),
                     },
                  },
                  'h1,h2,h3,h4,ol,ul,code,pre': {
                     color: theme('colors.bluegray.800'),
                  },
                  'pre code': {
                     backgroundColor: theme('colors.transparent'),
                  },
               },
            },
            dark: {
               css: {
                  color: theme('colors.bluegray.50'),
                  'a, a strong': {
                     color: theme('colors.bluegray.50'),
                     '&:hover': {
                        color: theme('colors.purple.400'),
                     },
                  },
                  'h1,h2,h3,h4,ol,ul,code,pre': {
                     color: theme('colors.bluegray.50'),
                  },
                  'pre code': {
                     backgroundColor: theme('colors.transparent'),
                  },
               },
            },
         }),
      },
   },
   variants: {
      extend: {
         borderStyle: ['hover'],
         animation: ['first'],
         borderRadius: ['last'],
      },
      typography: ['dark'],
   },
   plugins: [require('@tailwindcss/typography')],
}
