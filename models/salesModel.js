const connection = require('./connections');

const insert = {
  addSales: async (date) => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  const [data] = await connection.execute(query, [date]);
  return data;
  },
  sentSales: async (productId, quantity) => {
    const query = 'INSERT INTO StoreManager.sales_products (product_id, quantity) VALUES (?, ?);';
    const [data] = await connection.execute(query, [productId, quantity]);
    return data;
  },
};

module.exports = { insert };
