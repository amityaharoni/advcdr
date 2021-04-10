const { DIR_ROOT } = require('../lib/constants');
const express = require('express');
const apiRoutes = require('./api');
const router = express.Router();
const db = require('../models');
const path = require('path');

router.use('/api', apiRoutes)

router.get('/*', function (req, res) {
    res.render(path.resolve(`${DIR_ROOT}/views/index`))
})

module.exports = router;