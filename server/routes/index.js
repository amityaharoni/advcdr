const { DIR_ROOT } = require('../lib/constants');
const express = require('express');
const apiRoutes = require('./api');
const router = express.Router();
const db = require("../models");

router.use('/', async (req, res) => {
    let callers = await db.caller.findAll();
    for(let i=0; i < callers.length; i++){
        let caller = callers[i];
        caller.dataValues.team = await caller.getTeam();
        // caller.dataValues.calls = await caller.getCalls();
    }

    const clientData = {
        callers,
    };

    res.render(`${DIR_ROOT}/views/index`, {
        clientData: JSON.stringify(clientData)
    });
});

router.use('/api', apiRoutes)

router.use('/*', (req, res) => {
    res.sendFile(`${DIR_ROOT}/views/index`, function(err) {
        if (err) {
          res.status(500).send(err)
        }
      })
})

module.exports = router;