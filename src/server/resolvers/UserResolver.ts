import { client } from '@/server/connectDatabase';
import { User, UserLogin } from '@/constants/sharedTypes';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (userInfo: User) => {
  try {
    console.log('userInfo', userInfo);
    // logic goes here
    await client.connect();
    const database = client.db(process.env.VUE_APP_MONGO_DB_NAME);
    const userCollection = database.collection('users');
    await userCollection.insertOne(userInfo);
    await client.close();
    return userInfo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const login = async (userInfo: UserLogin) => {
  try {
    console.log('userInfo', userInfo);
    await client.connect();
    const database = client.db(process.env.VUE_APP_MONGO_DB_NAME);
    const userCollection = database.collection('users');
    const user = await userCollection.findOne({
      email: userInfo.email,
      password: userInfo.password
    });
    await client.close();
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};
