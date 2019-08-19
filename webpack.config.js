const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.s?[ac]ss$/,
        exclude: /node_modules/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "img"
        }
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "style.css"
    })
  ]
};
