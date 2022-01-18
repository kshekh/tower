const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        
        primary:{
         DEFAULT: '#00B078',
        },
        dark:{
         DEFAULT: '#242D37',
        },

      


      },



      boxShadow:{
        '1':'0px 0px 40px rgba(190, 204, 202, 0.2)',
        '2':'0px 0px 20px rgba(98, 105, 104, 0.1)',
        '3':'0px 0px 20px rgba(98, 105, 104, 0.2)',
       '4': '#1EA0EB 0px 0px 0px 2px',
       '5': '0px 8px 15px rgba(223, 223, 223, 0.15)',
       '6': '0px 8px 15px rgba(20, 23, 45, 0.08)',
       '7': '0px 0px 16px rgba(198, 199, 201, 0.1)',
       '8': '0px 0px 16px rgba(42, 45, 70, 0.1)',
       
       

      },

      opacity: {
        '4': '.04',
        '15': '.15',
        '35': '.35',
        '42': '.42  ',
        '63': '.63',
        '53': '.53',
        '63': '.63',
        '65': '.65',
        '92': '.92',
        '95': '.95',
      },

      backgroundImage:{
         'stats': 'url(../img/stats.svg)',
         'pettern-light': 'url(../img/pettern-light.svg)',
         'pettern-dark': 'url(../img/pettern-dark.svg)',
         
      },

      spacing: {
        '15': '3.75rem',
        '17': '4.375rem', // navbar height 70px
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '68': '16.875rem', // Sidebar width 270px
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem',
        '102': '25.5rem',
        '106': '26.5rem',
        '110': '27.5rem',
        'xs': '28rem',
        'sm': '32rem',
        'md': '36rem',
        'ml': '40rem',
        'mxg': '44rem',
        'mxl': '46rem',
        'mlg': '48rem',
        'lg': '52rem',
        'llg': '54rem',
        'xl': '60rem',
        '2xl': '72rem',
        '3xl': '80rem',
        '4xl': '96rem',
    },

    minWidth: (theme) => ({
      ...theme('spacing'),
    }),

  minHeight: (theme) => ({
      ...theme('spacing'),
      inherit:'inherit'
    }),
    maxHeight:{
      inherit:'inherit'
    },
    maxWidth:{
      inherit:'inherit'
    },

    borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
    },

    borderRadius: {
      'ml': '0.3125rem', // for 5px rounded
      'sl': '0.625rem', // for 10px rounded
      '4xl': '2.5rem' // for 40px rounded
  },

  zIndex:{
    '999':'999',
    '9999':'9999',
  },

    fontSize: {
        mi: '.75rem',
        xs: '.814rem',
        md: '.9375rem',
        '2.5xl': '1.75rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        '5.5xl': '3.5rem',
        '6.5xl': '4rem',
        '7.5xl': '5rem',
    }


    },
    screens: {
      'mv': '375px',
      // => @media (min-width: 480px) { ... }

      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'ml': '992px', // Medium Large
      // => @media (min-width: 992px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'sl': '1199px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }    

      '3xl': '1922px',
      // => @media (min-width: 1922px) { ... }    

      'wrap': '1210px',
      // => @media (min-width: 1210px) { ... }    

  },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
