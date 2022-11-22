import boom from '@hapi/boom';
import config from '../config/config.js';

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey !== config.apiKey) {
    next(boom.unauthorized());
  }
  next();
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) next();
    else next(boom.unauthorized());
  };
}

export { checkApiKey, checkRoles };
