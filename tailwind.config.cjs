const { join } = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts,scss}'),
  ],
  safelist: ['w-16', 'w-72'],
  theme: {
    extend: {},
  },
  plugins: [],
};
