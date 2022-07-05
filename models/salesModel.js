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
  const query = `SELECT smsp.sale_id AS saleId, sms.date, 
  smsp.product_id AS productId, smsp.quantity 
  FROM sales AS sms
  INNER JOIN sales_products AS smsp ON sms.id = smsp.sale_id
  ORDER BY saleId, productId;`;
  const [sales] = await connection.execute(query);
  return sales;
};

const getById = async (id) => {
  const query = `SELECT sms.date, smsp.product_id AS productId, smsp.quantity 
  FROM sales AS sms
  INNER JOIN sales_products AS smsp ON sms.id = smsp.sale_id
  WHERE sale_id = ?;`;
  const [sales] = await connection.execute(query, [id]);
   console.log(sales);
  return sales;
};

module.exports = {
  getAll,
  getById,
  insert,
};
