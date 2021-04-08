const express = require('express');
const apiRoutes = require('./api');
const router = express.Router();

router.get('/', async (req, res) => {
    let callers = await db.caller.findAll();
    for(let i=0; i < callers.length; i++){
        let caller = callers[i];
        caller.dataValues.team = await caller.getTeam();
        caller.dataValues.calls = await caller.getCalls();
    }

    const clientData = {
        callers,
    };

    res.render(`${__dirname}/views/index`, {
        clientData: JSON.stringify(clientData)
    });
});

router.use('/api', apiRoutes)

module.exports = router;