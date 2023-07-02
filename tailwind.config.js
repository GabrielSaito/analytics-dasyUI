/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'fundo': 'rgb(23, 20, 42)',
        'barra': 'rgb(40, 37, 59)',
        'graficos':'rgb(40, 37, 59)'
      }
    },
  },
  plugins: [require("daisyui")],
}

