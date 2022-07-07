const express = require('express');
const productsController = require('../controllers/productsController');
const nameMiddleware = require('../middlewares/nameMiddleware');

const router = express.Router();

router.get('/:id', productsController.getById);

router.get('/', productsController.getAll);

router.post(
  '/',
  nameMiddleware,
  productsController.insert,
  );

router.put('/:id', productsController.getById);  
  
router.delete('/:id', productsController.deleteById);
  
module.exports = router;
