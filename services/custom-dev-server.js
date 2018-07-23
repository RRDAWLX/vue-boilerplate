const express = require('express'),
  webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackDevConfig = require('../config/webpack.dev')

const app = express(),
  compiler = webpack(webpackDevConfig)

app.use(webpackDevMiddleware(compiler, {
  index: 'index.html',
  publicPath: webpackDevConfig.publicPath
}))

const server = app.listen(8080, () => {
  console.log('dev server is listening at 8080')
})