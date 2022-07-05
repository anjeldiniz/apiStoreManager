const express = require('express');
const productsController = require('../controllers/productsController');
// const authorizationMiddleware = require('../middlewares/authorizationMiddleware');
const nameMiddleware = require('../middlewares/nameMiddleware');

const router = express.Router();

router.get('/:id', productsController.getById);

// router.delete('/:id', productsController.getById);

router.get('/', productsController.getAll);

router.post(
  '/',
  // authorizationMiddleware,
  nameMiddleware,
  productsController.insert,
);

module.exports = router;
