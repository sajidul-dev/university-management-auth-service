import config from '../../../config';
import { generateUserId } from './user.utils';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto increment user id
  const id = await generateUserId();
  user.id = id;

  //Default user password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);
  if (!createUser) {
    throw new Error('Failed to create user');
  }

  return createdUser;
};

export const UserService = { createUser };
