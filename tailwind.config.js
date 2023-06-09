/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'mobile5': '205px',

      'mobile8': '224px',
      
      'mobile7': '240px',
      
      'mobile6': '280px',

      'mobile10': '334px',

      'mobile9': '360px',

      'mobile4': '410px',
      
      'mobile2': '434px', 

      'mobile3': '465px',
      
      'mobile': '561px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md3': '860px',

      'md2': '905px',

      'md4': '928px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg2': '1180px',

      'lg3': '1200px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

