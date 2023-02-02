module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
    },
    autoprefixer: {}, // add tailwindcss: {} if it gives issues
  },
};
