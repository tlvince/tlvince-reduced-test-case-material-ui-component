var path = require('path')
const Dotenv = require('dotenv-webpack')
const {getIfUtils} = require('webpack-config-utils')

const {ifProduction, ifNotProduction} = getIfUtils(process.env.NODE_ENV)

module.exports = {
  cache: ifProduction(),
  entry: './src/index.js',
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },

  watch: ifNotProduction(),
  watchOptions: ifNotProduction({
    ignored: './node_modules',
    aggregatedTimeout: 300,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }),

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  node: {
    dns: 'mock',
    net: 'mock'
  },

  plugins: [
    new Dotenv()
  ]
}
