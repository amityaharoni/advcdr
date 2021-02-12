// const db = require('./models/index');
// const models = require('./models');
// const Caller = require('./modules/caller');

// // Find all users
// Caller.findAll().then(callers => {
//     callers.every(caller => {caller.CalledNumbers().then(res => console.log(res))}); // true
// });

const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use('/static', express.static('server/public'))

app.get('/', (req, res) => {
    const clientData = {
        name: 'potato'
    };
    res.render(`${__dirname}/views/index`, {
        clientData: JSON.stringify(clientData)
    });
});

app.listen(port, () => console.log('Server is anton'));