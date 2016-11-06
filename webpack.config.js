var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    filename: "bundle.js",
    path: path.join(path.resolve(__dirname), "publish"),
    publicPath: "/"
  },
  context: path.join(__dirname, "/src"),
  devtool: "eval-source-map",
  devServer: {
    historyAPIFallback: true,
    hot: true,
    inline: true,
    contentBase: "./publish",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel'], exclude: /node_modules/
      },
      {
        test: /\.html$/, loaders: ['file?name=[name].[ext]']
      },
      {
        test: /\.css$/, loaders: ['file?name=[name].[file]']
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract(['css?modules&sourceMap', 'postcss', 'stylus' ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}
