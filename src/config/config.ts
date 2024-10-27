import dotenv from 'dotenv';

dotenv.config();

export const DEV_API_KEY = process.env.DEV_API_KEY;

if (!DEV_API_KEY) {
  throw new Error('Environment variable DEV_API_KEY is missing');
}
