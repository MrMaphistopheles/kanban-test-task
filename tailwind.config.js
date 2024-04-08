/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.3rem",
          sm: "0.5rem",
          lg: "0.7rem",
          xl: "1rem",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
