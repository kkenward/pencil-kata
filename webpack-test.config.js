var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');
const path = require("path");


var config = {
  mode: 'development',
  entry: './all-tests.js',
  output: {
    path: path.resolve(__dirname, ""),
    filename: 'testBundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    fs: 'empty'
  },


  plugins: [
    new WebpackShellPlugin({
      onBuildExit: "mocha --colors --require spec-helper.js testBundle.js"
    })
  ]
};


module.exports = config;