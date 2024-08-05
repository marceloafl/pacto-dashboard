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
        "default-black": "var(--default-black)",
        "default-gray": "var(--default-gray)",
        "default-blue": "var(--default-blue)",
        "secondary-black-bg": "var(--secondary-black-bg)",
      },
    },
  },
  plugins: [],
  important: true,
};

export default config;
