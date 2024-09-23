/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {   
    extend: {
      colors: {
        primary: "var(--theme-primary)",
        secondary: "var(--theme-secondary)",
        titleColor: "var(--theme-title-color)",
        subTitleColor: "var(--theme-sub-title-color)",
        textColor: "var(--theme-text-color)",
        borderColor: "var(--theme-border-color)",
      },
    },
  },
  plugins: [],
}
