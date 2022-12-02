/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkpurple': '#14010c',
        'mypurple': '#1f0114',
        'white': '#ffffff'
      }
    },
  },
  plugins: [],
}
