import boom from '@hapi/boom';
import config from '../config/config.js';

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey !== config.apiKey) {
    next(boom.unauthorized());
  }
  next();
}

export { checkApiKey };
