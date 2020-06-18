const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  watch: true,
  mode: "none",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
    new Dotenv(),
  ],

  ...(process.env.NODE_ENV === "production"
    ? {
        optimization: {
          minimize: true,
          splitChunks: {
            cacheGroups: {
              vendor: {
                test: /node_modules/,
                chunks: "initial",
                name: "vendor",
                enforce: true,
              },
            },
          },
          concatenateModules: true,
        },
      }
    : []),
  devServer: {
    historyApiFallback: true,
    contentBase: "./public",
    hot: true,
    inline: true,
    port: 3000,
  },
};
