import { register } from '../resolvers/UserResolver';
import { User, UserLogin } from '@/constants/sharedTypes';

export const registerUser = async (userInfo: User) => {
  // business logic and any data manipulation goes here
  if (!userInfo) {
    return null;
  }
  return await register(userInfo);
};

export const loginUser = async (userInfo: UserLogin) => {
  // business logic and any data manipulation goes here
  if (!userInfo) {
    return null;
  }
  return userInfo;
};
