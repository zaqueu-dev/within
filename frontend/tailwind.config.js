/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Silkscreen: ["Silkscreen-Regular", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        SpaceGrotesk: ["Space-Grotesk", "sans-serif"],
        Dosis: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
