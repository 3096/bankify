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
    themes: [{
      bankify: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        primary: indigo[600],
        'primary-focus': indigo[700],
        // 'primary-content': '#FFFFFF',
        // secondary: '#1E1E1E',
        // 'secondary-focus': '#1E1E1E',
        // 'secondary-content': '#FFFFFF',
        // accent: '#37CDFF',
        // 'accent-focus': '#37CDFF',
        // 'accent-content': '#FFFFFF',
        // neutral: '#1E1E1E',
        // 'neutral-focus': '#1E1E1E',
        // 'neutral-content': '#FFFFFF',
        // 'base-100': '#FFFFFF',
        // 'base-200': '#F9FAFB',
        // 'base-300': '#D1D5DB',
        // 'base-content': '#1E1E1E',
        // info: '#37CDFF',
        // success: '#10B981',
        // warning: '#FBBF24',
        // error: '#EF4444'
      }
    }]
  },

  plugins: [require('flowbite/plugin'), require('daisyui')]
};

module.exports = config;
