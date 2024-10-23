const webpack = require("webpack");
const path = require("path");
const os = require("os");

const hostname = os.hostname();
const protocol = "https://";
const baseHost = "spotify.com";
const subdomain = hostname.split(".")[0];
const appUrl = `${protocol}${subdomain}.${baseHost}`;

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      APP_URL: JSON.stringify("https://api.spotify.com/v1"),
      API_URL: JSON.stringify("https://api.spotify.com/v1"),
    }),
  ],
};
