/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #475E88 0%, #1E232C 75.42%, #1E232C 89.37%)'
      }
    },
  },
  plugins: [],
};
