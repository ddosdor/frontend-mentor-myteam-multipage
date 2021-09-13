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
      base: '18px',
      sm: '15px',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        midnightGreen: '#014E56',
        lightCoral: '#F67E7E',
        white: '#FFF',
      },
      secondary: {
        eggshelBlue: '#C4FFFE',
        raptureBlue: '#79C8C7',
        policeBlue: '#2C6269',
        deepJungleGreen: '#004047',
        sacramentoStateGreen: '#012F34',
        darkGreen: '#002529',
      },
    },
    screens: {
      md: '768px',
      lg: '1280px',
    },
    lineHeight: {
      100: '100px',
      56: '56px',
      48: '48px',
      28: '28px',
      25: '25px',
    },
    extend: {
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          maxWidth: '100%',
          paddingInline: '24px',
          '@screen md': {
            maxWidth: '689px',
            padding: 0,
          },
          '@screen lg': {
            maxWidth: '1110px',
            padding: 0,
          },
        },
      });
    },
  ],
};
