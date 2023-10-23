/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js,css}',
  ],
  theme: {
    extend: {
      colors: {
        Primary:'#FF6363',
        Secondary:{
          100: '#E2E2D5',
          200: '#888885',
        }
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./public/*.html"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
