const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_URL: JSON.stringify("https://api.spotify.com/v1"),
      API_URL: JSON.stringify("https://api.spotify.com/v1"),
    }),
  ],
};
