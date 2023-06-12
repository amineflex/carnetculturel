/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/HomePage.jsx",
  ],
  theme: {
    extend: {
      colors: { 
        'primary': '#49d59c',
        'secondary': '#C7AB82',
        'light' : '#F9F7DC',
        'darkbrown' : '#2c2422',
      }
    },
  },
  plugins: [],
}