const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Livvic', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      base: '1.125rem',
      sm: '0.983rem',
    },
    colors: {
      primary: {
        midnightGreen: '#014E56',
        lightCoral: '#F67E7E',
        white: '#FFF',
      },
      secondary: {
        raptureBlue: '#79C8C7',
        policeBlue: '#2C6269',
        deepJungleGreen: '#004047',
        sacramentoStateGreen: '#012F34',
        darkGreen: '#002529',
      },
    },
    lineHeight: {
      100: '100px',
      56: '56px',
      48: '48px',
      28: '28px',
      25: '25px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
