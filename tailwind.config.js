// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    'tailwindcss',
    'autoprefixer',
  ],
};
