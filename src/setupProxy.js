const { createProxyMiddleware } = require('http-proxy-middleware')


// 프록시설정

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://3.39.226.189', 
      changeOrigin: true,
    })
  )
}

