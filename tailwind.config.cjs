/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4180ab",
        secondary: "#8ab3cf",
        tertiary: "#ffffff",
        dark: "#606d80",
      }
    },
  },
  plugins: [],
}