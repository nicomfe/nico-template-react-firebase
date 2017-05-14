const path = require('path')
const webpack = require('webpack')
const cssnano = require('cssnano')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
      'process.env.BROWSER': true,
      'process.env.RACCOON_FIREBASE_API_KEY': JSON.stringify(process.env.RACCOON_FIREBASE_API_KEY),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'src/static/favicon.png',
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader?cacheDirectory'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
    },
    {
      test: /(\.scss)$/,
      loaders: [
        'style',
        'css?modules&sourceMap&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
        'postcss',
        'sass',
      ],
    },
    {
      test: /(\.css)$/,
      loaders: [
        'style',
        'css',
      ],
    },
    {
      test: /\.(jpg|jpeg|gif|png|ico|ttf|otf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=[path][name].[ext]',
    }],
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      },
      safe: true,
      discardComments: {
        removeAll: true,
      },
    }),
  ],
}
