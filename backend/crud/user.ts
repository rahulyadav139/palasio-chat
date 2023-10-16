import { User } from '../models/user';
import { genPassword } from '../../lib/genPassword';
import { genRandomString } from '../../lib/genRandomString';
import auth from '../lib/auth';
import { FilterQuery, Query } from 'mongoose';
import { IUser } from '../schema/user';

interface SearchFilter {
  email: string;
}

const createUser = async (userData: any) => {
  const { salt, hash } = genPassword(userData.password);
  const uid = genRandomString();
  const user = new User({
    username: uid,
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: {
      primary: userData.email,
    },
    salt,
    hash,
    workspace: [userData.workspace],
  });

  return user.save();
};

const findUserById = async (userId: string) => {
  return User.findById(userId);
};

const findUser = async (searchData: SearchFilter) => {
  const filter: FilterQuery<IUser> = {
    'email.primary': searchData.email,
  };

  return User.findOne(filter);
};

export default { createUser, findUserById, findUser };
