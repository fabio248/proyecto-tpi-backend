import express from 'express';

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);
}

export default routerAPI;
