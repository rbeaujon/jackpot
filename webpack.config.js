const path = require('path');

module.exports = {
  entry: './dist/index.js',  
  output: {
    path: path.resolve(__dirname, 'dist-Webpack'),  
    filename: 'bundle.js',  
  },
  module: {
    rules: [
    
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
