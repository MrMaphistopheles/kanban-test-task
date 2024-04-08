/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "0.3rem",
          sm: "0.5rem",
          lg: "1rem",
          xl: "2rem",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
