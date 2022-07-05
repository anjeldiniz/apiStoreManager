const salesService = require('../services/salesService');

const insert = async (req, res, next) => {
  try {
    const products = req.body;
    const data = await salesService.addSales(products);
    return res.status(201).json(data);
  } catch (error) {
    return next(error);
  }
};

// 8
const getAll = async (_req, res) => {
  const sale = await salesService.getAll();
  if (!sale) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(sale);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);
  if (!sale || sale.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }  
  return res.status(200).json(sale);
};

module.exports = {
  getAll,
  getById,
  insert,
};
