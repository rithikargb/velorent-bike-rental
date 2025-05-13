/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans your files
  darkMode: "class", // Enable dark mode if needed
  theme: {
    extend: {
      colors: {
          primary: "#FF6060",
          dark: "#111111",
      },
      container: {
          center: true,
          padding: {
              DEFAULT: "1rem",
              sm: "3rem",
          },
      },
    },
  },
  plugins: [],
};
