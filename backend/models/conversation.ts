import mongoose, { Schema } from 'mongoose';
import { IConversation } from '../schema/conversation';

const conversationSchema = new Schema<IConversation>({
  type: {
    type: String,
    enum: ['personal', 'group', 'channel'],
    default: 'personal',
  },
  description: String,
  topic: String,
  created_by: { type: mongoose.Types.ObjectId, ref: 'User' },
  participants: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  archived: {
    status: Boolean,
    by: { type: mongoose.Types.ObjectId, ref: 'User' },
    timestamp: Date,
  },
});

export const Conversation = mongoose.model('Conversation', conversationSchema);
