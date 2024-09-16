/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        purple: {
          950: "#2C0B6A",
          900: "#48169C",
          800: "#5718BF",
          700: "#681EE3",
          600: "#7630F7",
          500: "#7E49FF",
          400: "#A285FF",
          300: "#C1B1FF",
          200: "#DAD4FF",
          100: "#ECE8FF",
          50: "#F5F2FF",
        },
        gray: {
          7: "#F8F8F8",
          6: "#ECECEC",
          5: "#E0E0E0",
          4: "#BDBDBD",
          3: "#828282",
          2: "#4F4F4F",
          1: "#333333",
          0: "#202020",
        },
        goldIco: "#FEF5EA",
        purpleIco: "#F1EAFE",
        greenIco: "#EAFEF9",
        blueIco: "#EAF6FE",
        lowGreenIco: "#EAFEF0",
        highBlueIco: "#E7EEFB",
        redIco: "#FBE7EF",
        orangeIco: "#FBEEE7",
        mainWhite: "#ffffff",
      },
      backgroundImage: {
        "gradient-homePage": "linear-gradient(to bottom, #C8C3FF, #F5F5FF)",
        "gradient-homePage-button":
          "linear-gradient(to right, #A285FF, #7E49FF)",
      },
      screens: {
        iphoneSe: "400px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
