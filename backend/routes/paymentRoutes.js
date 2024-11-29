// const express = require('express');
// const { createOrder } = require('../controllers/paymentController');
// const router = express.Router();

// router.post('/create-order', createOrder);

// module.exports = router;


// backend/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { createOrder, verifyPayment } = require('../controllers/paymentController');

router.post('/create-order', createOrder); // Mocked response
router.post('/verify-payment', verifyPayment); // Mocked response

module.exports = router;
