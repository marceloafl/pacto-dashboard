// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//     fontFamily: {
//       montserrat: ["var(--font-montserrat)"],
//       museo: ["var(--font-museo)"],
//     },
//     colors: {
//       primary: "#ffba03",
//       secondary: "#ffdd81",
//       accent: "#1cbaa6",
//       charcoal: "#191d1f",
//       gray: "#bab8b8",
//       "light-gray": "#f3f3f2",
//       red: "#d92336",
//       green: "#7e9c3d",
//     },
//   },
//   plugins: [],
//   important: true,
// };

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
        primary: "#ffba03",
        secondary: "#ffdd81",
        accent: "#1cbaa6",
        "pactto-charcoal": "#191d1f",
        "pactto-gray": "#bab8b8",
        "pactto-light-gray": "#f3f3f2",
        "pactto-red": "#d92336",
        "pactto-green": "#7e9c3d",
      },
    },
    plugins: [],
    important: true,
  },
};

export default config;
