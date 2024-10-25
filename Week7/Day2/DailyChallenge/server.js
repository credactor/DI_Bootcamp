const express = require('express');
const app = express();
const routes = require('./server/routes/routes.js');
require('dotenv').config();

app.use(express.json());
app.use('/', routes);

const PORT = 3000;

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });