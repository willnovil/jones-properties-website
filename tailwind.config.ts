import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006838",
        "primary-dark": "#004D2A",
        "primary-light": "#007A42",
        accent: "#5BA946",
        "accent-light": "#6DBF55",
        background: "#F5F7F5",
        foreground: "#2D2D2D",
        available: "#2E7D32",
        unavailable: "#B71C1C",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
