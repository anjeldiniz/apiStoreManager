const errors = require('../helpers/arrayErrors');

const nameMiddleware = (req, res, next) => {
  const { name } = req.body;
  if (!name) return next(errors[1]);
  if (name.length < 5) return next(errors[2]);
  return next();
};

module.exports = nameMiddleware;