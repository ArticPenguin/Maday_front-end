const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://ec2-15-165-17-43.ap-northeast-2.compute.amazonaws.com',
      changeOrigin: true,
    })
  );
};
