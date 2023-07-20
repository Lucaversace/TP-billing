/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      ...colors,
      toto: "#103938",
    },
    extend: {},
  },
  plugins: [],
};
