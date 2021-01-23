module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        serif: ['Frank Ruhl Libre'],
      },
      fontSize: {
        tiny: '10px',
      },
      colors: {
        blackish: '#171717',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
