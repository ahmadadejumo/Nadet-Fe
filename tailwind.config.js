module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hcolor: "#FFF8E8",
        bcolor: "#FBBC15",
        tcolor: "#555557",
        scolor: "#EFD07C",
      },
      fontFamily: {
        Lato: ["Lato, sans-serif"],
      },
      borderRadius: {
        half: "10000px",
        bleft: "4000px",
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
