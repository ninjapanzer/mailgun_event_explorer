const { resolve } = require('path');
var entry = [
  './app.js'
]

var devtool = ''
if(process.env.webpack == 'dev'){
  devtool = 'inline-source-map'
}

module.exports = {
  entry: entry,

  externals: {},

  output: {
    filename: 'mailgun_ui.js',
    // the output bundle
    path: resolve(__dirname, 'public/js'),
  },

  context: resolve(__dirname, 'mailgun_ui'),

  devtool: devtool,

  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ],
  }

  //plugins: plugins,
};
