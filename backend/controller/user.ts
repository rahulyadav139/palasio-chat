import userMethods from '../crud/user';
import { validator } from '../lib/validator';
import { createUserSchema } from '../validations/user';
import { Request, Response } from 'express';
import userValidations from '../validations/user';
import auth from '../lib/auth';
import { IUser } from '../schema/user';
import workspaceMethod from '../crud/workspace';
import conversationMethod from '../crud/conversation';

const insertUser = async (req: Request, res: Response): Promise<void> => {
  const userData = validator(createUserSchema, req.body);

  await userMethods.createUser(userData);

  res.status(200).send({ success: true, message: 'user account created!' });
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = validator(
    userValidations.loginUserSchema,
    req.body
  );

  const user = await userMethods.findUser({ email });

  if (!user) throw { status: 401, message: 'invalid username or password' };

  const isValid = auth.passwordValidator(password, user.hash, user.salt);

  if (!isValid) throw { status: 401, message: 'invalid username or password' };

  const { token, expiry } = auth.tokenGenerator({
    email: user.email.primary,
    sub: user._id.toString(),
    iat: new Date().toUTCString(),
  });

  res
    .status(200)
    .send({ success: true, message: 'user login successful', token, expiry });
};

const userInit = async (req: Request, res: Response) => {
  const user = req.user as IUser;

  const userId = user._id;
  //get user from token
  //workspace details
  //workspace members
  //workspace channels

  const workspaces = await workspaceMethod.findWorkspace([]).populate([
    {
      path: 'channels',
      populate: {
        path: 'participants',
        select: ['first_name', 'last_name', 'email'],
      },
    },
    {
      path: 'members',
      select: ['first_name', 'last_name', 'email'],
    },
  ]);

  const conversations = await conversationMethod.findConversationForUser(
    userId,
    { type: ['personal', 'group'] }
  );

  //dms
  //last one month level one chat
  //notification

  res.status(200).send({
    workspaces,
    conversations,
    user,
  });
};

export default { insertUser, loginUser, userInit };
