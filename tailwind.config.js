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
        mainWhite: "#ffffff",
      },
      screens: {
        iphoneSe: "400px",
      },
    },
  },
  plugins: [],
};
