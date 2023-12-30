const router = require('express').Router();

router.use('/auth', require('../routes/authRoutes.js'));

module.exports = router;
