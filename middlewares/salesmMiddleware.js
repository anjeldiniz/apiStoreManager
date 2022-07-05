const errors = require('../helpers/arrayErrors');
const productsModel = require('../models/productsModel');

const salesmMiddleware = async (req, res, next) => {
  const produtos = await productsModel.getAll();
  console.log(produtos);
  const prod = req.body;
  for (let i = 0; i <= prod.length; i += 1) {
    const existe = produtos.map((e) => e.id).includes(prod[i].productId);
    if (!existe) return next(errors[0]);
  }
  return next();
};

module.exports = salesmMiddleware;
