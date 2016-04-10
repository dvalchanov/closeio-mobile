var path = require('path')
var webpack = require('webpack')
var env = require('envc')();

var config = {
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react': 'react-native',
      io: path.join(__dirname, 'src')
    },
  },
  devtool: 'source-map',
  entry: {
    'index.ios': ['./src/main.js'],
    //'index.android': ['./src/main.android.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx|es6)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'eslint-loader',
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['babel-plugin-transform-decorators-legacy'],
          presets: ['es2015', 'stage-0', 'react']
        },
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/react-native'),
          path.resolve(__dirname, 'node_modules/react-native-linear-gradient'),
          path.resolve(__dirname, 'node_modules/react-native-facebook-login'),
          path.resolve(__dirname, 'node_modules/react-native-overlay'),
        ]
      },
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['babel-plugin-transform-decorators-legacy'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react-native"
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

var exposedEnv = {};

Object.keys(env).forEach((key) => {
  exposedEnv[key] = '"' + env[key] + '"';
});

exposedEnv['VERSION'] = '"' + require('./package.json').version + '"';

config.plugins.push(new webpack.DefinePlugin({
  'process.env': exposedEnv
}));

module.exports = config;
