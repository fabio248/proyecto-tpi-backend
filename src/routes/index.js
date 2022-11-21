import express from 'express';
import userRouter from './users.routes.js';

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
}

export default routerAPI;
