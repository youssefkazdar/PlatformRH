/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs-small': '10px', // You can adjust this value as needed
      },
  },
},
  plugins: [],
};
