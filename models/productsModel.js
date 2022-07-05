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

const insert = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [data] = await connection.execute(query, [name]);
  return data;
};

// const delete = async (id) => {
//   const query = 'INSERT INTO StoreManager.products WHERE id=?;';
//   const [data] = await connection.execute(query, [id]);
//   return data;
// };

module.exports = {
  getAll,
  getById,
  insert,
};
