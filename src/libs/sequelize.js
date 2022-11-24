import config from '../config/config.js';
import { Sequelize } from 'sequelize';
import setUpModels from '../db/models/index.js';

let dbUrl = '';
const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
};
if (config.isProd) {
  dbUrl = config.dbUrl;
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  dbUrl = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}

const sequelize = new Sequelize(dbUrl, options);

setUpModels(sequelize);

export default sequelize;
