/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f28106', // Orange color from original design
        'secondary': '#333',
      }
    },
  },
  plugins: [],
}