 const path = require('path');

 module.exports = {
   entry: {
     app: './src/mm-card.js',
   },
   output: {
    filename: 'mm-card.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  }
 };
