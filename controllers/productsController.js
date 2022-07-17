const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const data = await productsService.getAll();
  return res.status(200).json(data);
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

module.exports = {
  getAll,
  getById,
  insert,
  deleteById,
};
