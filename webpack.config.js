const webpack = require("webpack");
const IS_PROD = process.env.NODE_ENV === "production";

module.exports = {
  mode: IS_PROD ? "production" : "development",
  entry: {
    analyzer: "./src/js/analyzer.jsx",
    react: "./src/js/react.jsx",
    reactDom: "./src/js/reactDom.jsx",
    preact: "./src/js/preact.jsx",
    combat: "./src/js/combat.jsx",
    moment: "./src/js/moment.jsx",
    dateFns: "./src/js/dateFns.jsx",
  },
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
