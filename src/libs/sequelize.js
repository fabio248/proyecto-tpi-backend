import config from '../config/config.js';
import { Sequelize } from 'sequelize';
import setUpModels from '../db/models/index.js';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const dbUrl = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: true,
});

setUpModels(sequelize);

export default sequelize;
