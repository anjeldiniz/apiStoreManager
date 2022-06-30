const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/:id', productsController.getById);
router.get('/', productsController.getAll);

module.exports = router;