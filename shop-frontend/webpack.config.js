const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const { ProvidePlugin, DefinePlugin } = require('webpack')
const dotenv = require('dotenv-webpack')

module.exports = () => {
  const env = dotenv.config().parsed
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return {
    mode: 'development',
    entry: './src/Components/script.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'image-webpack-loader'],
        },
        {
          test: /\.(svg|jpg|png|webp)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new StylelintPlugin({
        files: 'src/{**/*,*}.css',
      }),
      new ESLintPlugin({
        files: 'src/{**/*,*}.{tsx,ts}',
      }),
      new ProvidePlugin({
        process: 'process/browser.js',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    devServer: {
      open: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }
}
