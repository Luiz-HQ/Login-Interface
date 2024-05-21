/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-facebook': '#0866FF',
        'gray-facebook': '#F0F2F5',
        'green-facebook': '#42B72A'
      },
      spacing: {
        '580': '580px',
        '380': '380px',
      }
    },
  },
  plugins: [],
}

