const webpack = require("webpack");
const entryConfigs = require("./src/bundle-sizes.config");
const IS_PROD = process.env.NODE_ENV === "production";

const entry = {};

// Bundles for bundle size analysis
Object.values(entryConfigs).forEach(({ webpackEntryName }) => {
  entry[
    `bundle-sizes/${webpackEntryName}`
  ] = `./src/bundle-sizes/${webpackEntryName}.jsx`;
});
entry["bundle-sizes/analyze"] = `./src/bundle-sizes.analyze.jsx`;

// Bundles for render performance analysis
entry["render-performance/reactDom"] = `./src/render-performance/reactDom.jsx`;
entry[
  "render-performance/preactCompat"
] = `./src/render-performance/preactCompat.jsx`;
entry["render-performance/analyze"] = `./src/render-performance.analyze.jsx`;

module.exports = {
  mode: IS_PROD ? "production" : "development",
  entry,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
      NODE_ENV: process.env.NODE_ENV || "development",
    }),
  ],
};
