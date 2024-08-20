module.exports = {
  content: [
    "./src/**/*.{html,vue,js,tsx}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  plugins: [require("preline/plugin")],
};
