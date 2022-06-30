// const Joi = require('joi');
const productsModel = require('../models/productsModel');

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

const getById = async (id) => {
  const result = await productsModel.getById(id);
  return result;
};

module.exports = {
  getAll,
  getById,
};
