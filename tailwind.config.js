module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1200': '1200px',
        '90vw': '90vw',
        '60vw': '60vw',
      },
      height: {
        '80vh': '80vh',
        '70vh': '70vh',
        '7vh': '7vh',
        '15vh': '15vh',
      },
      padding: {
        '15vh': '15vh'
       },
      zIndex: {
        '99-': -99,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
