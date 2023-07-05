const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
              "sans": ["var(--font-sans)","ui-sans-serif", "system-ui"],
              "mono": ["var(--font-mono)", "monospace"],
              "brice": ["var(--font-brice)", "ui-sans-serif", "system-ui"],
              "ginchiest": ["var(--font-ginchiest)", "ui-sans-serif", "system-ui"],
            },
      colors: {
        "pink": "#E9A3BC",
        "hero": "#036CB0",
        "aboutTitle": "#393A41",
        yellow: {
          "50": "#FFFDEB",
          "100": "#FEFAD7",
          "200": "#FEF5AA",
          "300": "#FDF181",
          "400": "#FDEC59", 
          "500": "#FCE72D",
          "600": "#ECD503",
          "700": "#B09F02",
          "800": "#746802",
          "900": "#3C3601",
          "950": "#1E1B00",
        },
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities}){
      const utilities = {
        ".bg-nauval": {
          "background-image": "url(/img/hero-nauval.png)",
        },
        ".shadow-figma":{
          "box-shadow": "0px 15px 30px 0px rgba(0, 0, 0, 0.10)",
        }
      };
      addUtilities(utilities);
    })
  ],
};
