const proxy = require('http-proxy-middleware');
// const WS_URL = require('./config');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:3002' }));
  app.use(proxy('/ws', { target: 'ws://localhost:3005/ws', ws: true }));
};
