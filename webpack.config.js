var path = require('path')

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
      }
    ]
  }
}
