const path = require('path');

module.exports = {
  entry: './index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production', 
  resolve: {
    fallback: {
      "fs": false,
      "path": false,
      "crypto": false,
    },
  },
};
