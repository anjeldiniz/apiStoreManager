const salesService = require('../services/salesService');

const insert = async (req, res, next) => {
  try {
    const { date, productId, quantity } = req.body;
    const data = await salesService.insert(date, productId, quantity);
    return res.status(201).json(data);
  } catch (error) {
    return next(error);
  }
};

module.exports = { insert };
