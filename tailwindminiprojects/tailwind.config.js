/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors:{
        "black-dark": "#00000050",
        "dull-white" : "#FFFFFFB3",
        "white-light" : "#FFFFFF30",
        "white-medium" : "#FFFFFF40",
        "white-tint" : "#FFFFFF10",
        "neon-blue" : "#2FB8FF"
      },
      fontFamily:{
        "cursive" : "Bradley Hand, cursive",
        "font1" : "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif"
      }
    },
  },
  plugins: [],
}

