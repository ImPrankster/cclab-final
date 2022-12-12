/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        warm: "#FFFFFB",
      },
      fontFamily: {
        title: ["Rubik Maze", "cursive"],
        main: ["Unbounded", "cursive"],
      },
    },
  },
  plugins: [],
};
