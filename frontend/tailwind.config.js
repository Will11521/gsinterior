/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefefe',
          100: '#fdfcf8',
          200: '#f9f6f0',
          300: '#f3ede1',
          400: '#e8dcc7',
          500: '#bfa67a',
          600: '#a8936b',
          700: '#91805c',
          800: '#7a6d4d',
          900: '#635a3e'
        },
        accent: {
          50: '#faf9f7',
          100: '#f5f2ed',
          200: '#ebe4d6',
          300: '#e0d7bf',
          400: '#d1c3a0',
          500: '#bfa67a',
          600: '#a8936b',
          700: '#91805c',
          800: '#7a6d4d',
          900: '#635a3e'
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#333333',
          900: '#262626'
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(191, 166, 122, 0.08)',
        'glass-lg': '0 16px 40px 0 rgba(191, 166, 122, 0.12)',
        'glass-xl': '0 25px 50px -12px rgba(191, 166, 122, 0.15)',
        'subtle': '0 2px 15px 0 rgba(51, 51, 51, 0.05)',
        'warm': '0 10px 30px 0 rgba(191, 166, 122, 0.1)',
        'soft': '0 4px 20px 0 rgba(51, 51, 51, 0.08)'
      },
      backdropBlur: {
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px'
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.8s ease-out',
        'slideInLeft': 'slideInLeft 0.8s ease-out',
        'slideInRight': 'slideInRight 0.8s ease-out',
        'scaleIn': 'scaleIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    },
  },
  plugins: [],
};