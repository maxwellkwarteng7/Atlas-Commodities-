/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#583423', 
        secondary: '#F5DEB3', 
        transparent : "rgba(0 , 0 , 0 , 0.15)"
     }
    },
  },
  plugins: [],
}

