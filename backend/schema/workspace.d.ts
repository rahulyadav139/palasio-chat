//   name: String,
//   description: String,
//   owner: { type: mongoose.Types.ObjectId, ref: 'User' },
//   channels: [{ type: mongoose.Types.ObjectId, ref: 'Conversation' }],
//   members: [{ type: mongoose.Types.ObjectId, ref: 'User' }],

import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

export interface IWorkspace {
  name: string;
  description: string;
  owner: ObjectId;
  channels: ObjectId[];
  members: ObjectId[];
}
