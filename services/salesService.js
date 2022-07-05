const salesModel = require('../models/salesModel');
// const arrayErrors = require('../helpers/arrayErrors');

const addSales = async (products) => {
  const saleId = await salesModel.insert.addSales();
  const response = products.map(({ productId, quantity }) =>
    salesModel.insert.sentSales(saleId, productId, quantity));
  await Promise.all(response);
  return { id: saleId, itemsSold: products };
};

// 8
const getAll = async () => {
  const data = await salesModel.getAll();
  return data;
};

const getById = async (id) => {
  const data = await salesModel.getById(id);
  return data;
};

module.exports = {
  addSales,
  getAll,
  getById,
};
