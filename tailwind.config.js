module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'outfit': 'Outfit'
    },
    colors: {
      darkBlue: '#3685FF',
      grayishBlue: '#D5E1EF',
      lightGray: '#7D889E',
      white: '#FFFFFF'
    },
    extend: {
      borderRadius:{
        'xl': '0.625rem',
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
