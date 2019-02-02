const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./db.js');

const app = express();
app.use(bodyparser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => {
    console.log("Listening to port 3000..");
});

