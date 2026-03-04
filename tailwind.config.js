/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jenkins: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc5ff',
          400: '#36abff',
          500: '#0b90ff',
          600: '#0070e6',
          700: '#0055c4',
          800: '#00449f',
          900: '#003580',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        'slide-in': {
          'from': { transform: 'translateX(-100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
