import { register } from '../resolvers/UserResolver';

export const registerUser = (userInfo) => {
  // bussiness logic and auth would go here
  return register(userInfo);
};
