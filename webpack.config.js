const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
entry: './src/index.js',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.(png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    assetModuleFilename: '[name][ext]'
  },

  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    static: {
    directory: path.join(__dirname, 'dist'),
    }
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  mode: 'production'
}