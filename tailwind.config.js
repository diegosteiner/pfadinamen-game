/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e6500f",
        secondary: "#f5eeeb",
        black: "#290e03"
      },
      fontFamily: {
        'sans': ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 
                  'Helvetica', 'Arial', "Lucida Grande", 'sans-serif', 'ui-sans-serif', 'system-ui']
      },
      animation: {
        'result': '3s linear 0s infinite alternate none running result'
      },
      keyframes: {
        'result': {
          '0%': 'transform: scale(0) rotate(0)',
          '100%': 'transform: scale(1.2) rotate(3deg)'
        }
      }
    },
  },
  plugins: [],
}
