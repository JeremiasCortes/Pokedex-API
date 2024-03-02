/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Honk': ['Honk', 'system-ui'],
        'Sans': ['Open Sans', 'sans-serif'],
      },
      colors:{
        normal: "#BCBCAC",
        fighting: "#BC5442",
        flying: "#669AFF",
        poison: "#AB549A",
        ground: "#DEBC54",
        rock: "#BCAC66",
        bug: "#ABBC1C",
        ghost: "#6666BC",
        steel: "#ABACBC",
        fire: "#FF421C",
        water: "#2F9AFF",
        grass: "#78CD54",
        electric: "#FFCD30",
        phychic: "#FF549A",
        ice: "#78DEFF",
        dragon: "#7866EF",
        dark: "#785442",
        fairy: "#FFACFF",
        unknow: "",
        shadow: "",
      }
    },
  },
  plugins: [],
}

