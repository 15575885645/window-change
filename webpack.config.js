const path = require('path');

module.exports = {
  entry: './transfer.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library:'transfer',
    libraryTarget:"umd"
  },
};