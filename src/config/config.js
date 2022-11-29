import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV == 'production',
  port: process.env.PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DB_URL,
  apiKey: process.env.API_KEY,
  secretJwt: process.env.SECRET_JWT,
  smtpPassword: process.env.SMPT_PASSWORD,
  smtpEmail: process.env.SMPT_EMAIL,
  urlFronted: process.env.URL_FRONTEND,
};

export default config;
