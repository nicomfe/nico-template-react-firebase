const path = require('path')
const webpack = require('webpack')
const cssnano = require('cssnano')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pkg = require('../package.json');

const NODE_ENV = 'production'
const FIREBASE_API_KEY = process.env.RACCOON_FIREBASE_API_KEY

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: path.join(__dirname, '../src/index.js'),
    vendors: ['immutable', 'moment', 'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-redux',
      'react-redux-toastr',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-form',
      'redux-immutablejs',
      'redux-thunk',
      'reselect',
      'lodash.foreach',
      'lodash.forin']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest'],
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // ignoring locale of moment to reduce bundle size
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        RACCOON_FIREBASE_API_KEY: JSON.stringify(FIREBASE_API_KEY),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, compress: { warnings: false }}),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, '../src/static/favicon.png'),
    }),
  ],
  progress: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
        test: /\.(jpg|jpeg|gif|png|ico|ttf|otf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
      { test:  /\.json$/, loader: 'json-loader' },
      {
        test: /(\.css)$/,
        loaders: [
          'style',
          'css',
          'postcss',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
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
