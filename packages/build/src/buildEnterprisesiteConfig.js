// Copyright 2019 Foursquare Labs Inc. All Rights Reserved.

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getBaseConfig(isProd, targetName, dirname) {
  const srcPath = path.join(dirname, './src');
  const webPackagesPath = path.join(dirname, './node_modules/@foursquare');

  return {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          include: srcPath,
          loader: 'eslint-loader'
        },
        {
          test: /\.(mp4|ogg|svg)$/,
          use: 'file-loader'
        },
        {
          test: /\.(png|ico)$/,
          use: 'file-loader?name=[name].[hash].[ext]'
        },
        {
          test: /\.(jpg|gif|woff|woff2)$/,
          use: 'url-loader?limit=1000&name=[name].[hash].[ext]'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              'babel-plugin-styled-components',
              '@babel/plugin-transform-async-to-generator',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-object-rest-spread',
              '@babel/plugin-transform-strict-mode'
            ]
          },
          include: [srcPath, webPackagesPath]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({ browsers: ['> 1%', 'last 2 versions'] }),
                  ...(isProd ? [cssnano({ preset: 'default' })] : [])
                ]
              }
            },
            {
              loader: 'less-loader',
              options: {
                paths: [path.resolve(dirname, 'node_modules')]
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                paths: [path.resolve(dirname, 'node_modules')],
                plugins: [
                  autoprefixer({ browsers: ['> 1%', 'last 2 versions'] }),
                  ...(isProd ? [cssnano({ preset: 'default' })] : [])
                ]
              }
            }
          ]
        }
      ]
    },
    entry: ['@babel/polyfill', 'whatwg-fetch', path.join(dirname, './src/main')],
    resolve: {
      extensions: ['.js']
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true
          }
        }
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(dirname, './src/index.html'),
        favicon: path.join(dirname, './img/favicon.ico')
      })
    ],
    // Don't display all the css output, see:
    // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/39
    stats: { children: false }
  };
}

function buildEnterprisesiteConfig(isProd, targetName, dirname) {
  const baseConfig = getBaseConfig(isProd, targetName, dirname);

  if (isProd) {
    return merge(baseConfig, {
      mode: 'production',
      output: {
        filename: '[name].[hash].js',
        path: path.join(dirname, './dist'),
        publicPath: `https://ss0.4sqi.net/${targetName}/`
      },
      optimization: {
        minimize: true
      },
      plugins: [new MiniCssExtractPlugin({ filename: '[name].[hash].css' })]
    });
  } else {
    return merge(baseConfig, {
      mode: 'development',
      watchOptions: {
        ignored: /node_modules/
      },
      output: {
        filename: '[name].js',
        path: path.join(dirname, './dist'),
        publicPath: `/localstatic/src-js-enterprisesite-${targetName}-dist/`
      },
      devtool: 'cheap-module-source-map',
      optimization: {
        minimize: false
      },
      plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })]
    });
  }
}

module.exports = buildEnterprisesiteConfig;
