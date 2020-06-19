const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, options) => {
  const config = {
    entry: {
      app: ["./src/index.js"],
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_module/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(scss|css)$/,
          use: [
            options.mode === "production"
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
  };

  if (options.mode === "development") {
    config.plugins = [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new CleanWebpackPlugin(),
      new Dotenv(),
    ];

    config.devtool = "inline-source-map";

    config.devServer = {
      historyApiFallback: true,
      contentBase: "./public",
      publicPath: "/",
      hot: true,
      overlay: true,
      inline: true,
      stats: "errors-only",
      port: 8080,
    };
  } else {
    config.plugins = [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: `[name].css` }),
      new Dotenv(),
    ];

    config.optimization = {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    };
  }
  return config;
};
