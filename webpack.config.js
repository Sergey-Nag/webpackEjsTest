const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pagesData = require("./pages-data.json");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.ejs$/i,
        loader: "ejs-loader",
        options: {
          esModule: false
        }
      },
    ],
  },
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/index.js",
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      // templateParameters: pagesData,
      template: path.resolve(__dirname, "src", "index.ejs"),
      filename: path.resolve(__dirname, "build", "index.html"),
    }),
    //   new webpack.ProvidePlugin({
    //     _: "underscore"
    // })
  ],

};
