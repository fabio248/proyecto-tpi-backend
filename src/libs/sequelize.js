import { Sequelize } from 'sequelize';
import config from '../config/config';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const dbUrl = `posgrest://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: true,
});

export default sequelize;
