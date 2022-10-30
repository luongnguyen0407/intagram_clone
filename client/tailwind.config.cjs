/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM sans", "sans-serif"],
      },
      colors: {
        primary: "#4292FF",
        secondary: "#F0F2F5",
      },
    },
  },
  plugins: [],
};
