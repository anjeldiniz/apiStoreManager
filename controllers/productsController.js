const productsService = require('../services/productsService');

const getAll = async (req, res) => {
  try {
    const data = await productsService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await productsService.getById(id);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const insert = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await productsService.insert(name);
    return res.status(201).json(data);
  } catch (error) {
    return next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productsService.getById(id);
    await productsService.deleteById(id);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   const hasId = await productsService.getById(id);
//   if (hasId.length === 0) {
//     return res.status(404).json({ message: 'Product not found' });
//   }
//   await productsService.deleteById(id);
//   return res.status(204).end();
// };

module.exports = {
  getAll,
  getById,
  insert,
  deleteById,
};
