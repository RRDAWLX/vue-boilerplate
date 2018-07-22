const webpack = require('webpack'),
  webpackDevServer = require('webpack-dev-server'),
  config = require('../config/webpack.dev')

const options = {
  contentBase: '../dist',
  port: 8081,
  historyApiFallback: true,   // 支持单页应用，用 index.html 响应 404 请求，不会响应被代理的请求。
  overlay: {    // 在网页中显示编译警告与错误
    warnings: true,
    errors: true
  },
  hot: true   // 开启模块热替换
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(8081, 'localhost', () => {
  console.log('dev server listening on port 8081');
})