var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch', // activate HMR for react
    'webpack-dev-server/client?http://localhost:8080', // bundle the client for webpack dev server
    'webpack/hot/only-dev-server', // bundle the client for hot reloading
    './index.js' // the entry point of this application
  ],
  output: {
    filename: "bundle.js",
    path: path.join(path.resolve(__dirname), "publish"),
    publicPath: "/"
  },
  context: path.join(__dirname, "src"),
  devtool: "eval-source-map",
  target: "web",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "publish"),
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/
      },
      {
        test: /\.html$/, loaders: ['file?name=[name].[ext]']
      },
      {
        test: /\.css$/, loaders: ['file?name=[name].[file]']
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract(['css?modules&sourceMap&localIdentName=[local]', 'postcss', 'stylus' ])
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new webpack.NamedModulesPlugin(), // For more readable output module names in browser console
    new ExtractTextPlugin("style.css") // Extract css into separated file
  ]
}
