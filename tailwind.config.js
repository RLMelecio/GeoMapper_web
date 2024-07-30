/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        thin: ["Poppins-Thin", "sans-serif"],
        extralight: ["Poppins-ExtraLight", "sans-serif"],
        light: ["Poppins-Light", "sans-serif"],
        regular: ["Poppins-Regular", "sans-serif"],
        medium: ["Poppins-Medium", "sans-serif"],
        semibold: ["Poppins-SemiBold", "sans-serif"],
        bold: ["Poppins-Bold", "sans-serif"],
        extrabold: ["Poppins-ExtraBold", "sans-serif"],
        black: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}