const path = require('path');
const json5 = require('json5');
const htmlWebPackPlugin = require('html-webpack-plugin');
const webpackManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // filename: 'main.js',
    // filename: 'bundle.js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new htmlWebPackPlugin({
      title: 'Output Management',
    }),
    // new webpackManifestPlugin('./src/index.js'),
  ],
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(csv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
