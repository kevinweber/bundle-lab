const webpack = require("webpack");
const entryConfigs = require("./src/config");
const IS_PROD = process.env.NODE_ENV === "production";

const entry = {};
Object.values(entryConfigs).forEach(({ webpackEntryName }) => {
  entry[webpackEntryName] = `./src/bundles/${webpackEntryName}.jsx`;
});

module.exports = {
  mode: IS_PROD ? "production" : "development",
  entry,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "eslint-loader",
            options: {
              // This option makes ESLint automatically fix minor issues
              fix: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: __dirname + "/dist/assets",
    publicPath: "/",
    filename: "js/[name].js",
  },
  optimization: {
    runtimeChunk: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
    }),
  ],
};
