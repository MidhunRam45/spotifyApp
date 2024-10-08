const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_URL: JSON.stringify('https://development-truckingapp-backend.dreamstechnologies.com/api'),
      API_URL: JSON.stringify(
        'https://development-truckingapp-backend.dreamstechnologies.com/api',
        // 'http://localhost:9000/api/'
      ),
      DEV_MODE: JSON.stringify('development'),
    }),
  ],
};
