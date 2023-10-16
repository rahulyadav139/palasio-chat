import crypto from 'crypto';

export const genRandomString = (len: number = 10): string => {
  return crypto.randomBytes(len / 2).toString('hex');
};
