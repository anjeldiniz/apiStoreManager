const productsModel = require('../models/productsModel');
const arrayErrors = require('../helpers/arrayErrors');

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

const getById = async (id) => {
  const [data] = await productsModel.getById(id);
  if (data === undefined) throw arrayErrors[0];
  return data;
};

const insert = async (name) => {
  const data = await productsModel.insert(name);
  const response = { id: data.insertId, name };
  return response;
};

const deleteById = async (id) => {
  await productsModel.deleteById(id);
};

module.exports = {
  getAll,
  getById,
  insert,
  deleteById,
};
