module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    content: ['./dist/*.html'],
  },
  theme: {
    extend: {
      borderRadius: {
        'lg': '30px',
        'default': '10px',
      },
      fontFamily: {
        'display': ['Manrope', 'sans-serif'],
        'sans': ['Manrope', 'sans-serif'],
        'body': ['Signika', 'sans-serif'],
      },
      colors: {
        aquaforest: '#65A065',
        sanfelix: '#044804',
        parsley: '#166518',
        forestgreen: '#256F24',
      },
    },
  },
  variants: {},
  plugins: [],
}