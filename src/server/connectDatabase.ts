import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.VUE_APP_MONGODB_URI || '';

export const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1
});

export const connectDatabase = async () => {
  try {
    await client.connect();
    await client.db('spuePublic').command({ ping: 1 });
    console.log('Connected successfully to DB');
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};
