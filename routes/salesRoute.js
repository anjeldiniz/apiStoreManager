const express = require('express');
const salesController = require('../controllers/salesController');
const salesMiddleware = require('../middlewares/salesMiddleware');
const salesmMiddleware = require('../middlewares/salesmMiddleware');

const router = express.Router();

router.post('/', salesMiddleware, salesmMiddleware, salesController.insert);

module.exports = router;
