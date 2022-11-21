import { Sequelize } from 'sequelize';
import config from '../config/config';
import setUpModels from '../db/models';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const dbUrl = `posgrest://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: true,
});

setUpModels(sequelize);

export default sequelize;
