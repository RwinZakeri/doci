/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        purple: {
          mainViolet: "#7B79DC",
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
        lightBgPurple: "#F5F5FF",
        mainWhiteSmoke: "#f5f5f5",
        yellowCol: "#FFB547",
        redred: "#D3304D",
        lightRed: "#FBEAED",
      },
      backgroundImage: {
        "gradient-homePage": "linear-gradient(to bottom, #C8C3FF, #F5F5FF)",
        "gradient-homePage-button":
          "linear-gradient(to right, #A285FF, #7E49FF )",
        "gradient-mainToDark": "linear-gradient(to bottom, #7B79DC, #0A022F)",
      },
      screens: {
        iphoneSe: "400px",
      },
      boxShadow: {
        mainShadow:
          "-10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(45,78,255,0.15)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
