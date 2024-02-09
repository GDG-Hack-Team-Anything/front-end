/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        black2 :'#1B1C1E',
        primary:'#4807EA'
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        sansBold: ['Helvetica-Bold', 'Arial-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

