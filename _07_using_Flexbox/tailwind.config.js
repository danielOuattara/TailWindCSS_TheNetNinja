/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        elephant: "10rem",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
    },
    colors: {
      primary: "#ff6363",
      secondary: {
        100: "#e2e2d5",
        200: "#888883",
      },
    },
  },
  plugins: [],
};
