/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropModal: {
        xs: "2px",
      },
      colors: {
        primary: "#4292FF",
        secondary: "#F0F2F5",
        text: "#65676b",
      },
    },
  },
  plugins: [],
};
