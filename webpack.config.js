const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    port: 8000,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@containers": resolve(__dirname, './src/containers'),
      "@components": resolve(__dirname, './src/components'),
      "@hooks": resolve(__dirname, './src/hooks'),
      "@styles": resolve(__dirname, './src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader', 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ]
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
