const express = require('express');
const cors = require('cors');

const app = express();
const { Server } = require('socket.io');

app.use(cors());

app.use('/test', (req, res) => {
  res.status(200).send({ success: true, message: 'test passed!' });
});

const expressServer = app.listen(process.env.PORT || 8000, () => {
  console.log('connected');
});

const io = new Server(expressServer, {
  cors: {
    domain: 'http://localhost:3000',
  },
});

const socketConnection = io => {
  io.on('connection', socket => {
    socket.on('testConnection', data => {
      console.log(data);
    });
  });
};

socketConnection(io);
