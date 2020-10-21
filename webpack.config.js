const path = require("path");

module.exports = {
  entry: [
    "./js/util.js",
    "./js/backend.js",
    "./js/stat.js",
    "./js/render.js",
    "./js/dialog.js",
    "./js/wizard.js",
    "./js/debounce.js",
    "./js/setup.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
