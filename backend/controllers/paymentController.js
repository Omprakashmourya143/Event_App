// const Razorpay = require('razorpay');

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// exports.createOrder = async (req, res) => {
//   const { amount, currency } = req.body;
//   try {
//     const options = {
//       amount: amount * 100, // Amount in paisa (INR)
//       currency,
//       receipt: `order_rcpt_${Date.now()}`,
//     };
//     const order = await razorpay.orders.create(options);
//     res.json(order);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// backend/controllers/paymentController.js
// Remove Razorpay import and replace with a mock response

// Comment or remove this line
// const Razorpay = require('razorpay');

// Mock payment creation function
const createOrder = (req, res) => {
  try {
    // Simulate a successful order creation
    const mockOrder = {
      id: 'order_mock12345',
      amount: req.body.amount,
      currency: 'INR',
      status: 'created',
    };
    res.status(200).json(mockOrder);
  } catch (error) {
    res.status(500).json({ error: 'Payment processing is temporarily disabled.' });
  }
};

// Mock payment verification function
const verifyPayment = (req, res) => {
  res.status(200).json({ message: 'Payment verification skipped.' });
};

module.exports = { createOrder, verifyPayment };
