const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: '480px',
      sm: '562px',
      md: '768px',
      lg: '976px',
      xl: '1080px',
      '2xl': '1280px',
      '3xl': '1440px',
    },
    extend: {
      minWidth: {
        'xs':	'20rem', /* 320px */
        'sm':	'24rem', /* 384px */
        'md':	'28rem', /* 448px */
        'lg':	'32rem', /* 512px */
        'xl':	'36rem', /* 576px */
        '2xl':	'42rem', /* 672px */
        '3xl':	'48rem', /* 768px */
        '4xl':	'56rem', /* 896px */
        '5xl':	'64rem', /* 1024px */
        '6xl':	'72rem', /* 1152px */ 
        '7xl':	'80rem', /* 1280px */
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
    },
  },
  plugins: [plugin(function({ addUtilities }) {
    addUtilities({
      '.absolute-center': {
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%,-50%)'
      }
    })
  })
],
}

