import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

export interface IMessage {
  conversation: ObjectId;
  timestamp: Date;
  author: ObjectId;
  content: string;
}
