module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeOut: 'fadeOut 1s linear',
        fadeOutImage: 'fadeOutImage 1s linear',
        fadeOutSocial: 'fadeOutSocial 1s linear'
      },
      keyframes: {
        fadeOut: {
          '0%': { 
                  transform: 'translateY(-25%)',
                  opacity: '0%'
          },
        },
        fadeOutImage: {
          '0%': { 
                  
                  transform: 'translate(-50%, -25%)',
                  opacity: '0%'
          },
        },
        fadeOutSocial: {
          '0%': {   
                  transform: 'translateY(50%)',
                  opacity: '0%',
          },
        }
      }
    },
  },
  plugins: [],
}
