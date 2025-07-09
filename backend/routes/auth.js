// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/refresh', authController.refresh);

// Admin endpoints
router.get('/pendingUsers', authController.getPendingUsers);
router.post('/approveUser/:id', authController.approveUser);
router.post('/rejectUser/:id', authController.rejectUser);

module.exports = router;
