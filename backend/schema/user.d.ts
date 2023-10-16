import mongoose, { ObjectId } from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

interface WorkSpace {
  workspace_id: ObjectId;
  user_status: {
    status: string;
    updated_at: Date;
    history: { status: string; updated_at: Date }[];
    star_channels: ObjectId[];
  };
}

export interface IUser {
  _id: ObjectId;
  first_name: string;
  last_name: string;
  email: {
    primary: string;
    secondary: string;
  };
  salt: string;
  hash: string;
  about: string;
  username: string;
  workspace: WorkSpace[];
}
