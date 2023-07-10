/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*.{html,js}", 
            "/node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sawarabi: ['Sawarabi Gothic', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
