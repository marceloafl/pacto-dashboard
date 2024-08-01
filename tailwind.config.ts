import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        museo: ["var(--font-museo)"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "pactto-charcoal": "var(--pactto-charcoal)",
        "pactto-gray": "var(--pactto-gray)",
        "pactto-light-gray": "var(--pactto-light-gray)",
        "pactto-green": "var(--pactto-green)",
        "pactto-red": "var(--pactto-red)",
        "default-black-bg": "var(--default-black-bg)",
        "default-gray": "var(--default-gray-elements)",
        // primary: "#ffba03",
        // secondary: "#ffdd81",
        // accent: "#1cbaa6",
        // "pactto-charcoal": "#191d1f",
        // "pactto-gray": "#bab8b8",
        // "pactto-light-gray": "#f3f3f2",
        // "pactto-red": "#d92336",
        // "pactto-green": "#7e9c3d",
        // "pactto-black-bg": "#232225",
      },
    },
  },
  plugins: [],
  important: true,
};

export default config;
