const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const isAuth = require('../middleware/isAuth');

// Login
router.post('/login', authController.loginUser);

// Signup
router.post('/signup', authController.registerUser);

// Get logged in user
router.get('/user', isAuth, authController.fetchUser);

module.exports = router;