const errors = [
  {
    id: 0,
    status: 404,
    message: 'Product not found',
  },
  {
    id: 1,
    status: 400,
    message: '"name" is required',
  },
  {
    id: 2,
    status: 422,
    message: '"name" length must be at least 5 characters long',
  },
  {
    id: 3,
    status: 400,
    message: '"productId" is required',
  },
  {
    id: 4,
    status: 400,
    message: '"quantity" is required',
  },
  {
    id: 5,
    status: 422,
    message: '"quantity" must be greater than or equal to 1',
  },
];

module.exports = errors;