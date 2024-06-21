import 'dotenv/config';
import express from 'express';
import globalRouter from './global-router';
import { logger } from './logger';
import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';
const app = express();
import cors from 'cors';

const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use('/api/v1/', globalRouter);



const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const wss = new WebSocketServer({ noServer: true });

// Handle WebSocket connections with origin validation
server.on('upgrade', (request, socket, head) => {
  const origin = request.headers.origin;
  if (origin === 'http://localhost:3000') {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
