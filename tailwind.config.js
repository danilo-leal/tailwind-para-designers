module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        serif: ['Frank Ruhl Libre'],
        heading: ['Chivo'],
      },
      fontSize: {
        tiny: '10px',
      },
      colors: {
        blackish: `#171717`,
        blackish2: `#262626`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
