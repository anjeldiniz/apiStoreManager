const productsService = require('../services/productsService');

const getAll = async (req, res, next) => {
  try {
    const data = await productsService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productsService.getById(id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  getById,
};
