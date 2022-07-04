const errors = [
  {
    status: 404,
    message: 'Product not found',
  },
  {
    status: 400,
    message: '"name" is required',
  },
  {
    status: 422,
    message: '"name" length must be at least 5 characters long',
  },
];

module.exports = errors;