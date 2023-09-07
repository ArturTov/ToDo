/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      light: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      normal: "0px 4px 20px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      maxWidth: {
        container: "1250px",
      },
      backgroundColor: {
        "dark-blue": "#002687",
        "dark-transparent": "rgba(13, 13, 13, 0.29)",
      },
      colors: {
        "dark-blue": "#002687",
        "light-grey": "#f4f5ff",
        black: "#000",
      },
      screens: {
        "med-1440": { max: "1440px" },
        "med-1200": { max: "1200px" },
        "med-900": { max: "1065px" },
        "med-600": { max: "600px" },
        "med-400": { max: "400px" },
      },
    },
  },
  plugins: [],
};
