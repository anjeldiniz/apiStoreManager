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

// const putById = async (id) => {
//   const [prodId] = await productsModel.putById(id);
//   if (prodId === undefined) throw arrayErrors[0];
//   const newProd = 
//   return prodId;
// };

const insert = async (name) => {
  const data = await productsModel.insert(name);
  const response = { id: data.insertId, name };
  return response;
};

const deleteById = async (id) => {
  const hasId = await productsModel.deleteById(id);
  if (hasId.length === 0) throw arrayErrors[0];
  return hasId;
};

module.exports = {
  getAll,
  getById,
  insert,
  deleteById,
  // putById,
};
