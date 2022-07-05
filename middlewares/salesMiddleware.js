const errors = require('../helpers/arrayErrors');
// const productsModel = require('../models/productsModel');

const salesMiddleware = async (req, res, next) => {
  req.body.forEach(({ productId, quantity }) => {
  if (!productId) return next(errors[3]);
  if (quantity === undefined) return next(errors[4]);
  if (quantity <= 0) return next(errors[5]);
}, {});
  return next();
};

module.exports = salesMiddleware;
