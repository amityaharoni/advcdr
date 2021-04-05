const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const db = require("./models");

app.set('view engine', 'ejs');
app.use('/static', express.static('server/public'))

app.get('/callers/', async (req, res) => {
    let callers = await db.caller.findAll();
    for(let i=0; i < callers.length; i++){
        let caller = callers[i];
        caller.dataValues.team = await caller.getTeam();
        caller.dataValues.calls = await caller.getCalls();
    }

    res.json(callers);
});

app.get('/', async (req, res) => {
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

app.listen(port, () => console.log('Server is running'));