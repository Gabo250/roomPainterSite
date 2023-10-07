/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Bitter': ['Bitter', 'serif']
      },

      animation: {
        'scaleX': 'scaleX .8s',
        'fade-in': 'fade-in 1.5s',
        'fade-out': 'fade-out 1.5s'
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },

        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },

        'scaleX': {
          '0%': { transform: 'scale(0,1)' },
          '100%': { transform: 'scale(1,1)' }
        }
      },

      backgroundImage: {
        'brushes': "url('../public/img/ecsetek.webp')",
        'divide': "url('../public/img/dividing.webp')"
      },

      screens: {
        'xlsm': {'max': '360px'},
        '2xsm': {'max': '420px'},
        'xsm': {'max': '560px'},
        'sm' : {'max': '640px'},
        'md' : {'max': '768px'},
        'mmd': {'min': '769px'},
        'lmd': {'max': '840px'},
        'xmd': {'max': '900px'},
        'lg' : {'max': '1024px'},
        'xl' : {'max': '1280px'},
        '2xl': {'max': '1536px'}
      }
    },
  },
  plugins: [],
}

