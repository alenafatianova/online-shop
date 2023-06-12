const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
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
      // {
      //   test: /\.(png|jpeg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new StylelintPlugin({
      files: 'src/{**/*,*}.css',
    }),
    new ESLintPlugin({
      files: 'src/{**/*,*}.{tsx,ts}',
    }),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
}
