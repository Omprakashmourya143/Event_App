const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// User routes
router.post('/register', register);                     // User registration
router.post('/login', login);                           // User login
router.get('/profile', authMiddleware, getProfile);     // Get user profile (protected)

module.exports = router;
