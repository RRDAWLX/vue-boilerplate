const express = require('express'),
  http = require('http'),
  https = require('https'),
  path = require('path'),
  fs = require('fs'),
  proxy = require('http-proxy-middleware'),
  chalk = require('chalk'),   // https://github.com/chalk/chalk
  webpack = require('webpack'),
  webpackDevConfig = require('../config/webpack.dev')

webpackDevConfig.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&noInfo=true')

const app = express(),
  compiler = webpack(webpackDevConfig),
  port = 8080,
  credentials = {
    key: fs.readFileSync(path.join(__dirname, '../ca/server.key')),
    cert: fs.readFileSync(path.join(__dirname, '../ca/server.crt'))
  },
  msgs = {
    serverStarting: chalk.blue('> Dev server is starting...'),
    serverListening: chalk.blue(`> Dev server is listening at https://localhost:${port}`)
  }

console.log(msgs.serverStarting)

// https://github.com/chimurai/http-proxy-middleware
// api proxy
app.use(proxy((pathname, req) => {
  // console.log(req)
  // 在这里决定是否要代理请求
  if (/api-test/.test(pathname)) {
    return true
  }
  return false
}, {
  target: 'http://localhost:5000',
  logLevel: 'warn'
}))

// https://github.com/bripkens/connect-history-api-fallback
app.use(require('connect-history-api-fallback')())

// https://github.com/webpack/webpack-dev-middleware
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  logLevel: 'silent'
}))

// https://github.com/webpack-contrib/webpack-hot-middleware
app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr',
  heartbeat: 10000,
  log: false
}))

compiler.hooks.done.tap('done', () => {
  console.log(msgs.serverListening)
})

// https
const server = https.createServer(credentials, app).listen(port)
