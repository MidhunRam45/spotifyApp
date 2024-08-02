const webpack = require('webpack');
const path = require('path');
const os = require('os');

const hostname = os.hostname();
const protocol = 'https://';
const baseHost = 'dreamstechnologies.com';
const subdomain = hostname.split('.')[0];
const appUrl = `${protocol}${subdomain}.${baseHost}`;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      APP_URL: JSON.stringify(
        'https://dev-truckingapp.dreamstechnologies.com/',
      ),
      // APP_URL: JSON.stringify(appUrl),
      API_URL: JSON.stringify(
        // 'https://dev-cc-apigateway.dreamstechnologies.com/api/',
      ),
      DEV_MODE: JSON.stringify('production'),
    }),
  ],
};
