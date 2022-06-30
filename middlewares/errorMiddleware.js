const errorMiddleware = (req, res) => {
  res.status(404).json({ message: 'Product not found' });
};

module.exports = errorMiddleware;
