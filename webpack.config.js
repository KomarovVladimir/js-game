const path = require('path');

module.exports = {
  mode: 'none',
  devtool: 'inline-source-map',
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};