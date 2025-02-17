const express = require('express');
const { createPaymentOrder } = require('../controllers/paymentController');
const router = express.Router();

router.post('/create-payment-order', createPaymentOrder);

module.exports = router;
