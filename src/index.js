import express from 'express';
import config from './config/config.js';
import routerAPI from './routes/index.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor de express');
});

routerAPI(app);
app.listen(config.port, () => {
  console.log(`Escuchando en el puerto ${config.port}`);
});
