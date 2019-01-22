const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/mm-card.js',
  },
  output: {
    filename: 'mm-card.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },
};
