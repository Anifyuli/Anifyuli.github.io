/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        sm: "320px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ebdbb2",
          "primary-content": "#3c3836",
          secondary: "#bdae93",
          "secondary-content": "#665c54",
          accent: "#7c6f64",
          "accent-content": "#e4e1de",
          neutral: "#fbf1c7",
          "neutral-content": "#6c6f64",
          "base-100": "#f9f5d7",
          "base-200": "#d9d5bb",
          "base-300": "#b9b69f",
          "base-content": "#282828",
          info: "#076678",
          "info-content": "#f9f5d7",
          success: "#98971a",
          "success-content": "#282828",
          warning: "#d79921",
          "warning-content": "#3c3836",
          error: "#cc241d",
          "error-content": "#f2e5bc",
        },
        dark: {
          primary: "#ebdbb2",
          "primary-content": "#282828",
          secondary: "#928374",
          "secondary-content": "#fbf1c7",
          accent: "#d5c4a1",
          "accent-content": "#3c3836",
          neutral: "#1d2021",
          "neutral-content": "#fbf1c7",
          "base-100": "#282828",
          "base-200": "#32302f",
          "base-300": "#3c3836",
          "base-content": "#fbf1c7",
          info: "#83a598",
          "info-content": "#282828",
          success: "#b8bb26",
          "success-content": "#282828",
          warning: "#fabd2f",
          "warning-content": "#282828",
          error: "#fb4934",
          "error-content": "#282828",
        },
      },
    ],
  },
  plugins: [daisyui],
};
