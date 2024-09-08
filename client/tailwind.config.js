const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this if your HTML file is not in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
