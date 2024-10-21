// const webpack = require("webpack");
// const path = require("path");
// const os = require("os");

// const hostname = os.hostname();
// const protocol = "https://";
// const baseHost = "spotify.com";
// const subdomain = hostname.split(".")[0];
// const appUrl = `${protocol}${subdomain}.${baseHost}`;

// module.exports = {
//   mode: "production",
//   devtool: "source-map",
//   plugins: [
//     new webpack.DefinePlugin({
//       APP_URL: JSON.stringify("https://api.spotify.com/v1"),
//       // APP_URL: JSON.stringify(appUrl),
//       API_URL: JSON
//         .stringify
//         // 'https://api.spotify.com/v1',
//         (),
//       DEV_MODE: JSON.stringify("production"),
//     }),
//   ],
// };

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
      REACT_APP_GOOGLE_MAPS_API_KEY: JSON.stringify(
        "AIzaSyAoGq7BXEXu310Si2Go7nFz1nL4Jwhuy_8"
      ),
    }),
  ],
};
