import type { Config } from "tailwindcss";
import { purple } from "@mui/material/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "black-too": "#171717",
        white: "#FCF7FF",
        primary: purple[300],
        secondary: purple[500],
      },
    },
  },
  plugins: [],
};
export default config;
