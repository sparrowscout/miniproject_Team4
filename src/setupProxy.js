const { createProxyMiddleware } = require('http-proxy-middleware')


module.exports = function(app) {
    app.use(
      '/',
      createProxyMiddleware({
        target: 'http://3.39.226.189',
        changeOrigin: true,
      })
    );
  };

