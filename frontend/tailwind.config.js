/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        500: "#1A245B",
      },
      yellow: {
        300: "#FFD000",
        400: "#ffc60d",
        500: "#E1A800",
        600: "#C09000",
      },
      white: {
        100: "#ffffff",
        200: "rgba(255,255,255, 0.8)",
      },
    },
    fontFamily: {
      stencil: ["stencilstd", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
