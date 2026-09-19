const path = require("path"); // Commonjs module
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entryFolder = "src";
const outputFolder = "dist";
const fileJS = "main.js";

module.exports = {
  target: "web",
  mode: "development",

  experiments: {
    css: true
  },

  entry: path.resolve(__dirname, entryFolder, fileJS),
  output: {
    filename: fileJS,
    path: path.resolve(__dirname, outputFolder)
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.css$/i,
        type: "css"
        // use: ["style-loader"]
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]]
          }
        }
      }
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, outputFolder)
    },
    port: 3000,
    liveReload: true,
    open: true
    // compress: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve(__dirname, entryFolder, "assets/icons", "logo.svg")
    })
  ]
};
