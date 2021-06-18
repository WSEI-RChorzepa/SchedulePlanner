import dotenv from 'dotenv';

const env = dotenv.config();

if (env.error) {
  throw new Error('.env file was not found. ');
}

export default {
  port: parseInt(process.env.PORT as string, 10),
};
