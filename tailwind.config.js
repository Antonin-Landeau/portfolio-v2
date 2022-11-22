/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary-orange': '#D84A01',
      'primary-font': '#434343',
      'secondary-font': '#6F6F6F',
      'terthary-font': '#CECECE',
      'default-white': '#FBFBFB',
      'default-black': '#151517',
      'gb-color-black': '#272727',
      'embelishment-color':'#2C2C2C',
    },
    extend: {},
  },
  plugins: [],
}
