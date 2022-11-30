module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: {
          100: "#cdd7e6",
          200: "#9ab0cd",
          300: "#6888b5",
          400: "#35619c",
          500: "#033983",
          600: "#022e69",
          700: "#02224f",
          800: "#011734",
          900: "#010b1a"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}
