/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        graphikBold: "GraphikBold",
        graphikMedium: "GraphikMedium",
      },
      colors: {
        primary: "#00AD1B",
        "primary-2": "#489955",
        "title-text": "#101828",
        "gray-50": "#F9FAFB",
        "text-subtitle": "#404A5A",
        border: "#DBDCDE",
        'input-field': '#404A5A',
        'input-label': '#667085'
      },
    },
  },
  plugins: [],
};
