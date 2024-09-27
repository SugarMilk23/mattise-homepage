import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

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
      fontFamily: {
        gowunBatang: ["Gowun Batang", "serif"],
        ptSerif: ["PT Serif", "serif"],
      },
      colors: {
        gray: "#363636",
        gold: "#D4AF37",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
