import { Router } from 'express';
import passport from 'passport';
import {
  login,
  recovery,
  changePassword,
} from '../controllers/auth.controller.js';

const router = Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  login
);
router.post('/recovery', recovery);
router.post('/change-password', changePassword);
export default router;
