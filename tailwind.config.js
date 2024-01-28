/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ffeb00",
        red: "#e6500f",
        black: "#290e03"
      },
      fontFamily: {
        'sans': ['Droid sans', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
