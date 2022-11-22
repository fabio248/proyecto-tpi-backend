import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import UserService from './users.service.js';

const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) throw boom.unauthorized();
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw boom.unauthorized();
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.secretJwt);
    return { user, token };
  }
}

export default AuthService;
