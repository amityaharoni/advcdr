const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const port = 3000;

app.use(cors());
app.set('view engine', 'ejs');
app.use('/static', express.static('server/public'))

app.use('/', routes);

app.listen(port, () => console.log('Server is running'));