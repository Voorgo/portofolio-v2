/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1921px",
      },
      keyframes: {
        first: {
          "50%": { transform: "translateY(8px)" },
          "100%": { transform: "translateY(8px) rotate(45deg)" },
        },
        third: {
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(-8px) rotate(135deg)" },
        },
        second: {
          "50%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        firstReverse: {
          "0%": { transform: "translateY(8px) rotate(45deg)" },
          "50%": { transform: "translateY(8px)" },
        },
        secondReverse: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(0.5)", opacity: "0.5" },
        },
        thirdReverse: {
          "0%": { transform: "translateY(-8px) rotate(135deg)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeIn: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
