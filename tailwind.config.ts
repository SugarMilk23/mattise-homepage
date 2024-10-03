import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      height: {
        imageHeight: "800px",
      },
      lineHeight: {
        negative: "-1",
      },
      backgroundImage: {
        image: "url('/background.jpg')",
      },
      fontFamily: {
        fredoka: ["Fredoka", "sans-setif"],
        gowunBatang: ["Gowun Batang", "serif"],
        ptSerif: ["PT Serif", "serif"],
      },
      colors: {
        gray: "#232323",
        gold: "#D4AF37",
        white: "#F7FCFE",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        aurora: "aurora 60s linear infinite",
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
