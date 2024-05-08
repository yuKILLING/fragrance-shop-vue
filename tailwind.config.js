/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop: ['Poppins'],
        main: ['Righteous'],
        mons: ['Montserrat']
      }
    },
  },
  plugins: [],
}

