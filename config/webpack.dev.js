const webpack = require('webpack'),
  path = require('path'),
  VueLoaderPlugin = require('vue-loader/lib/plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, '..'),

  entry: {
    main: './src/app'
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
  },

  devServer: {
    contentBase: '../dist',
    port: 8081,
    historyApiFallback: true,   // 支持单页应用，用 index.html 响应 404 请求，不会响应被代理的请求。
    overlay: {    // 在网页中显示编译警告与错误
      warnings: true,
      errors: true
    },
    hot: true   // 开启模块热替换
  }
}