/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#caf0f8",
        secondary: "#90e0ef",
        tertiary: "#00b4d8",
        "black-100": "#0077b6",
        "black-200": "#03045e",
        "white-100": "#e0f2fe",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #7dd3fc",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
