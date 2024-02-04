const defaultTheme= require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports= {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
     screens:{
      'xm':'310px',
      ...defaultTheme.screens,
    },
    extend: {
     
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-bg-mob': "url('../../public/assets/hero-bg-mob.png')",
          'hero-bg-tab': "url('../../public/assets/hero-bg-tab.png')",
          'hero-bg': "url('../../public/assets/rurblist-h-bg.png')",
          'learn-bg': "url('../../public/assets/rurblist-learn-bg.png')",
        'rurb-gradient':"linear-gradient(90deg, #D9FFDE 0%, rgba(161, 255, 174, 0.86) 21.03%, rgba(121, 255, 139, 0.69) 45.96%, #C9FED0 80.24%, rgba(201, 243, 206, 0.30) 105.17%, rgba(46, 255, 73, 0.15) 126.98%, rgba(0, 255, 34, 0.00) 149.57%);"
      },
      transitionProperty: {
        'justify': 'justify-content',
        'spacing': 'margin, padding',
      },
      fontFamily: {
        'prox': ['"Proxima Nova"'],
        'geo': ['"Georgia"'],
        'pop': ['"Poppins"'],
      },
      boxShadow:{
        '3xl': '1px 4px 25px 1px rgba(0, 0, 0, 0.05)',
      }
    },
    colors: {
      'rurb-orange': '#EC6C10',
      'rurb-green': '#0EC128',
      'rurb-dark-green': '#05400D',
      'rurb-black': '#2B2B2B',
      'rurb-txt-black': '#555',
      'rurb-brown': '#4F2405',
      'rurb-grey': '#808080',
      'rurb-white': '#fff',
      'rurb-white-bg': '#FDFDFD',
     },
     
  },
  plugins: [],
}
