const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const merge = require('webpack-merge');

module.exports = ({ root, targetType, targetName, customConfig }) => (env, argv) => {
  const paths = {
    entry: path.join(root, './src/main.js'),
    html: path.join(root, './src/index.html'),
    src: path.join(root, './src'),
    dist: path.join(root, './dist'),
    fsPackages: path.join(root, './node_modules/@foursquare'),
  };

  const commonConfig = {
    entry: ['@babel/polyfill', 'whatwg-fetch', paths.entry],
    output: {
      filename: '[name].[contenthash].js',
      path: paths.dist,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [paths.src, paths.fsPackages],
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.(jpg|png|gif|svg|mp4|ogg|ttf|eot|woff|woff2)$/,
          use: 'url-loader?limit=1000&name=[name].[contenthash].[ext]',
        },
        {
          test: /\.(less|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: { plugins: [postcssPresetEnv(), cssnano()] },
            },
            'less-loader',
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: paths.html,
      }),
      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    ],
    devtool: 'cheap-module-source-map',
    stats: { children: false },
  };

  if (targetType === 'admin') {
    commonConfig.output.publicPath = '/admin/file/';
  } else if (targetType === 'enterprisesite') {
    commonConfig.output.publicPath = `/localstatic/src-js-enterprisesite-${targetName}-dist/`;
  } else {
    commonConfig.output.publicPath = '';
  }

  if (argv.mode === 'production') {
    commonConfig.mode = 'production';
    commonConfig.optimization = {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            enforce: true,
          },
        },
      },
    };
    if (targetType === 'enterprisesite') {
      commonConfig.output.publicPath = `https://ss0.4sqi.net/${targetName}/`;
    }
    if (argv.analyze) {
      commonConfig.plugins.push(new BundleAnalyzerPlugin());
    }
  } else {
    commonConfig.mode = 'development';
  }

  if (customConfig) {
    return merge(
      commonConfig,
      typeof customConfig === 'function' ? customConfig(env, argv) : customConfig
    );
  }

  return commonConfig;
};
