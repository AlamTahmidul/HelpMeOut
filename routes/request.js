const express = require('express');
const router = express.Router();

const isAuth = require('../middleware/isAuth');
const requestController = require('../controllers/requestController');

// Add request
router.post('/add', isAuth, requestController.addRequest);

// Delete request
router.delete('/delete/:id', isAuth, requestController.deleteRequest);

// Claim request
router.post('/claim/:id', isAuth, requestController.claimRequest);

// Get all requests
router.get('/', isAuth, requestController.fetchRequests);

module.exports = router;