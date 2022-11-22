import { Strategy } from 'passport-local';
import AuthService from '../../../services/auth.service.js';

const service = new AuthService();
const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
  },
  async (username, password, done) => {
    try {
      const user = await service.getUser(username, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

export default LocalStrategy;
