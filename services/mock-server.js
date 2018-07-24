const express = require('express'),
  fs = require('fs'),
  parse = require('url').parse,
  path = require('path')

const port = 5000,
  contentBase = path.join(__dirname, '../mock-files'),
  app = new express()

app.use(function (req, res, next) {
  console.log(req.path)

  let modulePath = path.join(contentBase, parse(req.url).pathname + '.js')
  try {
    res.json(require(modulePath))
    delete require.cache[modulePath] // 删除缓存，以便mock数据文件被修改后服务器能响应最新的数据。
  } catch (e) {
    res.json({ msg: 'no such a file' })
  }
})

const server = app.listen(port, function () {
  console.log(`Mock server is listening at ${port}`)
})

server.on('close', () => {
  console.log(`Mock server at ${port} closed`)
})