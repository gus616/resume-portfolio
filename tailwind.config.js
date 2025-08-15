/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fcee09",   // Cyberpunk yellow
        secondary: "#0ff0fc", // Neon cyan
        dark: "#0d0d0d",
        light: "#f1f1f1",
      },
    },
  },
  plugins: [],
};
