module.exports = {
  theme: {
    extend: {
      fontFamily: {
        k2d: ['K2D', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(180deg, hsla(173, 89%, 70%, 1) 0%, hsla(196, 68%, 38%, 1) 100%)',
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [],
}
