module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'primary': '#FFCE1A',
        'secondary': "#0D0842",
        'blackBG': '#F3F3F3',
        'Favorite': "#FF5841"
      },
      fontFamily: {
        'primary': ["Montserrat", "serif"],
        'secondary': ["Nunito Sans", "serif"]
      }
    },
  },
  variants: {},
  plugins: [],
}
