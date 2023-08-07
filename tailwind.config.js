module.exports = {
  darkMode: 'class',
  content: [
      "./*.{html,js}",
      "./src/*.{html,js}",
      "./src/scripts/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ravi': ['Ravi'],
        'shabnam': ['Shabnam'],
        'shabnam-bold': ['Shabnam-Bold'],
        'shabnam-medium': ['Shabnam-Medium'],
        'shabnam-light': ['Shabnam-Light'],
      }
    },
  },
  plugins: [],
}