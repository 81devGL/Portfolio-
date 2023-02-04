/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inconsolata: ["Inconsolata", "sans-serif"],
      impact: ["impact", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#721CFF",
      secondary: "#F8EDFF",
      darkGray: "#1B1A17",
      lightGray: "#21201D",
    },
  },
  plugins: [],
};