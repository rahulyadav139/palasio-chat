import mongoose, { Schema } from 'mongoose';
import { IUser } from '../schema/user';

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  first_name: String,
  last_name: String,
  email: {
    primary: { type: String, required: true, unique: true },
    secondary: String,
  },
  salt: String,
  hash: String,
  about: String,
  workspace: [
    {
      workspace_id: { type: mongoose.Types.ObjectId, ref: 'Workspace' },
      user_status: {
        status: String,
        update_at: Date,
        history: [{ status: String, updated_at: Date }],
      },
      star_channels: [{ type: mongoose.Types.ObjectId, ref: 'Conversation' }],
    },
  ],
});

export const User = mongoose.model('User', userSchema);
