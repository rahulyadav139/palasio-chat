import { Server } from 'socket.io';

export const socketConnection = (io: Server) => {
  io.on('connection', socket => {
    socket.on('testConnection', (data: any) => {
      console.log(data);
    });
  });
};
