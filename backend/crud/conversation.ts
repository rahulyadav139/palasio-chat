import mongoose, { FilterQuery } from 'mongoose';
import { Conversation } from '../models/conversation';
import { IConversation } from '../schema/conversation';

export const findConversationForUser = (
  userId: mongoose.Schema.Types.ObjectId,
  additionalFilter?: Record<string, unknown>
) => {
  const filter: FilterQuery<IConversation> = {
    participants: userId,
  };

  if (additionalFilter) {
    filter.type = { $in: additionalFilter.type };
  }
  return Conversation.find(filter);
};

export default { findConversationForUser };
