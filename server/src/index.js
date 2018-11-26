import Koa from 'koa';
import { createServer } from 'http';
import createIo from 'socket.io';
import socketHandler from './socket-handler';
import Users from './users';

const app = new Koa();
const http = createServer(app.callback());
const io = createIo(http);
const users = new Users();

io.on('connection', socketHandler(users));

http.listen(8000, () => {
  console.log('Listening...');
});
