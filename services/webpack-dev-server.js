const webpack = require('webpack'),
  webpackDevServer = require('webpack-dev-server'),
  config = require('../config/webpack.dev'),
  chalk = require('chalk')

const options = {
  contentBase: '../dist',
  host: 'localhost',
  port: 8081,
  historyApiFallback: true,   // 支持单页应用，用 index.html 响应 404 请求，不会响应被代理的请求。
  overlay: {    // 在网页中显示编译警告与错误
    warnings: true,
    errors: true
  },
  hot: true,   // 开启模块热替换
  quiet: true
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(options.port, options.host, () => {
  console.log(chalk.blue(`dev server is listening at ${options.port}`))
})
