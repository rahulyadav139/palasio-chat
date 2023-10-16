import mongoose, { ObjectId } from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

export interface IConversation {
  type: 'personal' | 'group' | 'channel';
  description: string;
  topic: string;
  created_by: ObjectId;
  participants: ObjectId[];
  archived: {
    status: boolean;
    by: ObjectId;
    timestamp: Date;
  };
}
