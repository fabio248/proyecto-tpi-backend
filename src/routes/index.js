import express from 'express';
import passport from 'passport';
import { checkApiKey, checkRoles } from '../middlewares/auth.handle.js';
import userRouter from './users.routes.js';
import authRouter from './auth.routes.js';
import clientRouter from './client.routes.js';
function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', checkApiKey, router);
  router.use('/auth', authRouter);
  router.use(
    '/users',
    passport.authenticate('jwt', { session: false }),
    checkRoles('ADMIN'),
    userRouter
  );
  router.use(
    '/clients',
    passport.authenticate('jwt', { session: false }),
    checkRoles('ADMIN', 'EMPLOYEE'),
    clientRouter
  );
}

export default routerAPI;
