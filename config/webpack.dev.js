const webpack = require('webpack'),
  path = require('path'),
  VueLoaderPlugin = require('vue-loader/lib/plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, '..'),

  entry: {
    main: './src/app.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    
    new webpack.HotModuleReplacementPlugin(),

    // 生成一个HTML文件
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],

  resolve: {
    extensions: ['.vue', '.js']
  }
}