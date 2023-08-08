/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"]
    },
    // extend: {
    //   typography: {
    //     DEFAULT: {
    //       css: {
    //         'h1:has(+h2)': {
    //           marginBottom: 4,
    //         },
    //         'h1 + h2': {
    //           marginTop: 8,
    //         }
    //       }
    //     }
    //   }
    // },
  },
  plugins: [require("@tailwindcss/typography")],
};
