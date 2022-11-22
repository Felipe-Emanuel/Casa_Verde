/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      sm: 16,
      md: 22,
      lg: 32,
      xl: 42,
      '2xl': 82
    },
    fontFamily: {
      'Elsie': 'Elsie Swash Caps',
      'Montserrat': 'Montserrat, sans-serif'
    },
    extend: {
      backgroundColor: {
        'darkBack': "#f4f4f4",
      },
      dropShadow: {
        'xsm': '10px 10px 30px rgba(0, 0, 0, 0.06)'
      },
      colors: {
        'vector': '#FFCB47'
      }
    },
  },
  plugins: [],
}
