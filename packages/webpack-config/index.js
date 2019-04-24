const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = root => (env, argv) => {
  const paths = {
    appEntry: path.join(root, './src/index.js'),
    appHtml: path.join(root, './src/index.html'),
    appSrc: path.join(root, './src'),
    dist: path.join(root, './dist'),
  };

  const config = {
    entry: {
      app: ['@babel/polyfill', paths.appEntry],
    },
    output: {
      filename: 'js/[name].[hash:8].js',
      path: paths.dist,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader', 'eslint-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new HtmlWebpackPlugin({ template: paths.appHtml }),
    ],
    devServer: {
      compress: true,
      contentBase: paths.dist,
      historyApiFallback: true,
      hot: true,
      port: 3000,
    },
    resolve: {},
  };

  switch (argv.mode) {
    case 'development': {
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
      config.resolve.alias = {
        'react-dom': '@hot-loader/react-dom',
      };
      break;
    }
    case 'production':
    default: {
      if (argv.analyze) {
        config.plugins.push(new BundleAnalyzerPlugin());
      }
    }
  }

  return config;
};
