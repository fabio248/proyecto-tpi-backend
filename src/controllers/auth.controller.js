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
const recovery = async (req, res, next) => {
  try {
    const { email } = req.body;
    const rta = await service.sendRecoveryPassword(email);
    res.json(rta);
  } catch (error) {
    next(error);
  }
};
const changePassword = async (req, res, next) => {
  try {
    const { newPassword, token } = req.body;
    const rta = await service.changePassword(token, newPassword);
    res.json(rta);
  } catch (error) {
    next(error);
  }
};
export { login, recovery, changePassword };
