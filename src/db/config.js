import config from '../config/config.js';

let dbUrl = '';
if (config.isProd) {
  dbUrl = config.dbUrl;
}
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
dbUrl = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export default {
  development: { url: dbUrl, dialect: 'postgres' },
  production: { url: dbUrl, dialect: 'postgres' },
};
