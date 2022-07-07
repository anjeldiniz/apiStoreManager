const connection = require('./connections');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?;';
  const [data] = await connection.execute(query, [id]);
  return data;
};

// const putById = async (id) => {
//   const query = 'SELECT products_id FROM StoreManager.products WHERE products_id=?;';
//   const [prodId] = await connection.execute(query, [id]);
//   return prodId;
// };

const insert = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [data] = await connection.execute(query, [name]);
  return data;
};

const deleteById = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id=?;';
  const hasId = await connection.execute(query, [id]);
  return hasId;
};

module.exports = {
  getAll,
  getById,
  insert,
  deleteById,
  // putById,
};
