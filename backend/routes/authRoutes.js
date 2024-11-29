const express = require('express');
const { register, login } = require('../controllers/authController');  // Correct function names
const router = express.Router();

router.post('/register', register);  // Route matches controller function
router.post('/login', login);  // Route matches controller function

module.exports = router;
