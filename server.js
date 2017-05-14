'use strict'

const path = require('path')
const express = require('express')

const Server = {
  app: () => {
    const app = express()
    let indexPath = path.join(__dirname, './dist/index.html')
    if (process.env.NODE_ENV !== 'production') {
      indexPath = path.join(__dirname, './index.html')
    } else {
      app.use(express.static(path.join(__dirname, 'dist')))
    }
    app.get('/', (_, res) => { res.sendFile(indexPath) })
    app.get('/dashboard', (_, res) => { res.sendFile(indexPath) })
    app.get('/appointments', (_, res) => { res.sendFile(indexPath) })

    return app
  },
}

const port = (process.env.PORT || 3000)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.config.development.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    quiet: false,
    stats: {
      chunks: false,
      chunkModules: false,
      colors: true,
    },
    historyApiFallback: true,
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
