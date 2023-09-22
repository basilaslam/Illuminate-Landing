/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'sen': ['Sen', 'sans-serif'],
      },
      colors: {
        'page_cream' : '#FFFCF4',
        'secondery': '#FFB900'
      }
    },
  },
  plugins: [],
}