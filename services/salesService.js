const salesModel = require('../models/salesModel');

const insert = {
  addSales: async (date, productId, quantity) => {
    const data = await salesModel.insert(date, productId, quantity);
    console.log(data);
    const response = { productId: data.productId, quantity: data.quantity };
    return response;
  },
};

module.exports = { insert };
