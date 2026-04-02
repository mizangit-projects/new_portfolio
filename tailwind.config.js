/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d3436",
        secondary: "#636e72",
        accent: "#a29bfe",
        background: "#f5f6fa",
      },
    },
  },
  plugins: [],
}
