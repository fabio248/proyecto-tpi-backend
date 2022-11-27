import express from 'express';
import config from './config/config.js';
import routerAPI from './routes/index.js';
import cors from 'cors';
import {
  logErrors,
  boomErrorHandler,
  errorHandler,
  sqlErrorHandler,
} from './middlewares/error.handle.js';

const app = express();
app.use(express.json());
app.use(cors());
//Ejecutando archivos de autentificacion
import './utils/auth/index.js';
app.get('/', (req, res) => {
  res.send('Servidor de express');
});

routerAPI(app);
//Middleware for handle errors
app.use(logErrors);
app.use(sqlErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Escuchando en el puerto ${config.port}`);
});
