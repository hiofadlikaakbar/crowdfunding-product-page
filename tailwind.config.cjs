module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        neutralBlack: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        comm: ["Commissioner"],
      },
    },
  },
};
