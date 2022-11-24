import express from 'express';
import passport from 'passport';
import { checkApiKey, checkRoles } from '../middlewares/auth.handle.js';
import userRouter from './users.routes.js';
import authRouter from './auth.routes.js';
import clientRouter from './client.routes.js';
import hombreInferiorRouter from './hombre-inferior.routes.js';
import hombreSuperiorRouter from './hombre-superior.routes.js';
import mujerInferiorRouter from './mujer-inferior.routes.js';
import mujerSuperiorRouter from './mujer-superior.routes.js';
import taskRouter from './task.routes.js';
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
  router.use(
    '/medidas-hombre-inferior',
    passport.authenticate('jwt', { session: false }),
    checkRoles('ADMIN', 'EMPLOYEE'),
    hombreInferiorRouter
  );
  router.use(
    '/medidas-hombre-superior',
    passport.authenticate('jwt', { session: false }),
    checkRoles('ADMIN', 'EMPLOYEE'),
    hombreSuperiorRouter
  );
  router.use(
    '/medidas-mujer-inferior',
    passport.authenticate('jwt', { session: false }),
    checkRoles('ADMIN', 'EMPLOYEE'),
    mujerInferiorRouter
  );
  router.use(
    '/medidas-mujer-superior',
    passport.authenticate('jwt', { session: false }),
    checkRoles('ADMIN', 'EMPLOYEE'),
    mujerSuperiorRouter
  );
  router.use(
    '/tasks',
    passport.authenticate('jwt', { session: false }),
    checkRoles('ADMIN', 'EMPLOYEE'),
    taskRouter
  );
}

export default routerAPI;
