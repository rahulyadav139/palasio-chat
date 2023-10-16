import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import { socketConnection } from './socketConnection';
import mongoose from 'mongoose';
import userRoutes from './routes/user';
import initializePassport from './middleware/passport';

const app = express();

app.use(cors());
app.use(initializePassport());

app.use('/test', (req, res) => {
  res.status(200).send({ success: true, message: 'test passed!' });
});

app.use('/user', userRoutes);

mongoose
  .connect(process.env.DATABASE_URI!)
  .then(res => {
    const expressServer = app.listen(process.env.PORT || 8008, () => {
      console.log('connected');
    });

    const io = new Server(expressServer, {
      cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
      },
    });

    socketConnection(io);
  })
  .catch(err => console.log(err));
