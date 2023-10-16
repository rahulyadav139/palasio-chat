import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import passport from 'passport';

const keypath = path.join(__dirname, '..', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(keypath, 'utf-8');

const passwordValidator = (password: string, hash: string, salt: string) => {
  if (!salt || !hash) return false;
  var hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');
  return hash === hashVerify;
};

export const tokenGenerator = (payload: Record<string, string>) => {
  const expiry = '90d';

  const token = jwt.sign(payload, PRIV_KEY, {
    expiresIn: expiry,
    algorithm: 'RS256',
  });

  return { token, expiry };
};

export const passwordGenerator = (password: string) => {
  var salt = crypto.randomBytes(32).toString('hex');
  var hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');

  return {
    salt,
    hash,
  };
};

export const validateUser = () =>
  passport.authenticate('user', { session: false });

export default {
  passwordValidator,
  tokenGenerator,
  passwordGenerator,
  validateUser,
};
