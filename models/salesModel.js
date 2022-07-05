const connection = require('./connections');

const insert = {
  addSales: async () => {
    const query = 'INSERT INTO sales () VALUES ();';
    const [data] = await connection.execute(query);
    return data.insertId;
  },
  sentSales: async (saleId, productId, quantity) => {
    const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?);';
    const [response] = await connection.execute(query, [
      saleId,
      productId,
      quantity,
    ]);
    return response;
  },
};

// 8
const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.sales;';
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales WHERE id=?;';
  const [data] = await connection.execute(query, [id]);
  return data;
};

module.exports = {
  getAll,
  getById,
  insert,
};
