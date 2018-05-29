module.exports = {
  mode: 'development',
  entry: "./lib/gameSource.js",
  output: {
    path: __dirname,
    filename: "./lib/bundle.js"
  },
  devtool: "source-map"
};
