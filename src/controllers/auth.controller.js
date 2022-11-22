import AuthService from '../services/auth.service.js';

const service = new AuthService();

const login = (req, res, next) => {
  try {
    const user = req.user;
    res.json(service.signToken(user));
  } catch (error) {
    next(error);
  }
};

export { login };
