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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'vue',
              ['env', {
                targets: {
                  browsers: ['> 1%', 'last 2 versions',]
                }
              }],
              'stage-3',
            ],
            plugins: ['syntax-dynamic-import',]
          },
        }
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
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