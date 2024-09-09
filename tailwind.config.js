/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        varela: ['Varela Round', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },   // At 50% of the animation, the width is 100%
          '100%': { width: '0%' },    // Back to 0% width at 100%
        },
        'pulse-scale': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        bounceSmooth: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)', // Adjust this value for the desired height of the bounce
          },
          '100%': {
            transform: 'translateY(0)', // Returns to the original position
          },
        },
        slideOut: {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
        },
        scaleWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }, // Changed from transform to width
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation:{
        typing: 'typing 4s  infinite alternate, cursor 0.75s steps(2, end) infinite',
        scaleWidth: 'scaleWidth 0.3s ease-out forwards',
        pulseScale: 'pulse-scale 2s infinite',
        slideIn: 'slideIn 0.5s ease-out forwards',
        slideOut: 'slideOut 0.5s ease-in forwards',
        bounceSmooth: 'bounceSmooth 0.5s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
        slideUp: 'slideUp 0.3s ease-in',
      }
    },
  },
  plugins: [],
}