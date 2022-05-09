module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'sunset-orange': '#FF6161',
      'limed-spruce': '#37474F',
      'dark-jungle-green': '#1F2427',
      'white': '#FFFFFF',
      'black': '#000000',
      'star-dust': '#A59E9E',
      'star-dust-light': '#9D9D9D',
      'reef-gold': '#A48111',
      'moccasin': '#8D733F',
      'military-green': '#65793E',
      'flat-blue': '#3074AB',
    },
    fontFamily: {
      regular: ['Roboto-Regular'],
      bold: ['Roboto-Bold'],
      black: ['Roboto-Black'],
      thin: ['Roboto-Light'],
    }
  },
  plugins: [],
}