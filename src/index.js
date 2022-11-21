import express from 'express';
import config from './config/config.js';
import routerAPI from './routes/index.js';
import {
  logErrors,
  boomErrorHandler,
  errorHandler,
  sqlErrorHandler,
} from './middlewares/error.handle.js';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor de express');
});

routerAPI(app);
//Middleware for handle errors
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(sqlErrorHandler);

app.listen(config.port, () => {
  console.log(`Escuchando en el puerto ${config.port}`);
});
