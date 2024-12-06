/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
      997: "997px",
      887: "887px",
      576: "576px",
      480: "480px",
      476: "476px",
      376: "376px",
    },
    extend: {
      colors: {
        primary: {
          100: "#E77400",
        },
        dark: {
          100: "#050505",
        },
        blue: {
          100: "#12234E",
          200: "#4473BA",
        },
        light: {
          100: "#ffff",
          200: "#E7E7E7",
        },
        grey: {
          100: "#888888",
        },
      },
      backgroundColor: {
        primary: {
          100: "#E77400",
        },
        dark: {
          100: "#050505",
        },
        blue: {
          100: "#12234E",
          200: "#4473BA",
        },
        light: {
          100: "#ffff",
          200: "#E7E7E7",
        },
        grey: {
          100: "#888888",
        },
      },
      fontFamily: {
        "playfair-display": ["Playfair Display", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        cta5bg:
          "linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/cta5bg.svg)",
      },
    },
  },
  plugins: [],
};
