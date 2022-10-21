/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          dark: "#163257",
          DEFAULT: "#234d84",
          light: "#285C9F",
        },
        "secondary": {
          dark: "#FFCC00",
          DEFAULT: "#FFDE59",
        },
      }
    },
  },
  plugins: [],
}
