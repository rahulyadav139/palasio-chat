import mongoose, { Schema } from 'mongoose';
import { IMessage } from '../schema/message';

const messageSchema = new Schema<IMessage>({
  conversation: { type: mongoose.Types.ObjectId, ref: 'Conversation' },
  timestamp: Date,
  author: { type: mongoose.Types.ObjectId, ref: 'User' },
  content: String,
});

export const Message = mongoose.model('Message', messageSchema);
