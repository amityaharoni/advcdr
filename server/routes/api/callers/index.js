const express = require('express');
const CallersController = require('./controller');

const router = express.Router();
const callersController = new CallersController();

router.get('/', callersController.getCallers)

module.exports = router;