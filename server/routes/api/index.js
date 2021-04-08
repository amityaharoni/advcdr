const express = require('express');
const callersRoutes = require('./callers');

const router = express.Router();

router.use('/callers', callersRoutes);

module.exports = router;