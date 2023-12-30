const express = require('express');

const {
  login,
  signup,
  decodeToken,
  logout,
} = require('../controllers/authControllers');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/decode', decodeToken);

module.exports = router;
