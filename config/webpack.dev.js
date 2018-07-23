const webpack = require('webpack'),
  path = require('path'),
  VueLoaderPlugin = require('vue-loader/lib/plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: ['./src/app.js'],

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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.css|less$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
        ]
      },
    ]
  },

  plugins: [
    // 用于解析 .vue 文件
    new VueLoaderPlugin(),

    // 用于开启模块热替换
    new webpack.HotModuleReplacementPlugin(),

    // 生成一个HTML文件
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  resolve: {
    extensions: ['.vue', '.js']
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },

    runtimeChunk: {
      name: 'manifest'
    }
  }
}