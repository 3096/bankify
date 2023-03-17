const { indigo } = require('tailwindcss/colors');

const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          700: indigo[600],
          800: indigo[700]
        }
      }
    }
  },

  darkMode: 'class',

  daisyui: {
    themes: false
  },

  plugins: [require('flowbite/plugin'), require('daisyui')]
};

module.exports = config;
