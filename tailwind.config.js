module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '3rem',
        lg: '4rem',
      },
      paddingY: {
        DEFAULT: '2rem',
        sm: '3rem',
        lg: '4rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Lato'],
        emphasis: ['Cormorant'],
      },
      colors: {
        primary: {
          50: '#CCCCCC',
          100: '#B3B3B3',
          200: '#999999',
          300: '#808080',
          400: '#666666',
          500: '#4D4D4D',
          600: '#333333',
          700: '#121212',
          800: '#000000',
        },
        secondary: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#4CAF50',
          500: '#43A047',
          600: '#388E3C',
          700: '#2E7D32',
          800: '#1B5E20',
        },
      },
    },
  },
  plugins: [],
}
