/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDelay: {
        '2000': '2000ms'
      },
    },
  },
  plugins: [],
};
