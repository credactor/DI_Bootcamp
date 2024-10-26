const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

app.get('/api/hello', (req, res) => res.send({ message: 'Hello From Express' }));

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });