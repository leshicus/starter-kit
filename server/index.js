import Koa from 'koa';
import router from 'koa-router';
import websockify from 'koa-websocket';

const port = 3005;

const http = router();
const ws = router();

const app = websockify(new Koa());

http.get('/api/get1', ctx => {
  ctx.body = 'get1';
});

ws.get('/ws', ctx => {
  ctx.websocket.on('message', function(message) {
    const mes = JSON.parse(message);

    const { type, payload } = mes;
    switch (type) {
      default:
        console.log('Unexpected type');
        break;
    }
  });
});

app.use(http.routes()).use(http.allowedMethods());
app.ws.use(ws.routes()).use(ws.allowedMethods());

app.listen(port, () => {
  console.log('Server listening at port %d', port);
});
