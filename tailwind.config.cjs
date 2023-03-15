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

  plugins: [require('flowbite/plugin')]
};

module.exports = config;
