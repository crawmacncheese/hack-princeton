const path = require('path');
const dotenv = require('dotenv');
const { parsed: envVariables } = dotenv.config();

const webpack = require('webpack');

module.exports = {
  // Your existing webpack configuration
  plugins: [
    new webpack.DefinePlugin({
      'process.env.OPENAI_API_KEY': JSON.stringify(envVariables.OPENAI_API_KEY)
    })
  ]
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify")
    }
  }
};
