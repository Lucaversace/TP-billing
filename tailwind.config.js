/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
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
