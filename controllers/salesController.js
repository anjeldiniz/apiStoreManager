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
const getAll = async (req, res) => {
  try {
    const data = await salesService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await salesService.getById(id);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  insert,
};
