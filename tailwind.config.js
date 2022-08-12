/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      noto: ["Noto Sans TC", "Inter", "Sora", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "bg-pattern": "url('/static/images/bg.svg')",
      },
    },
  },
  plugins: [],
};
