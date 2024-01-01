/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease",
        fadeOut: "fadeOut 1s ease",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "100%": { opacity: 1 },
          "0%": { opacity: 0 },
        },
      },
    },
    colors: {
      primary: "#e2d99e",
      secondary: "#60482c",
      border: "#6d4a27",
    },
    listStyleType: {
      roman: "upper-roman",
    },
  },
  plugins: [],
};
