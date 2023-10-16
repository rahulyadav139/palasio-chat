import mongoose, { Schema } from 'mongoose';
import { IWorkspace } from '../schema/workspace';

const workspaceSchema = new Schema<IWorkspace>({
  name: { type: String, required: true },
  description: String,
  owner: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  channels: [{ type: mongoose.Types.ObjectId, ref: 'Conversation' }],
  members: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
});

export const Workspace = mongoose.model('Workspace', workspaceSchema);
