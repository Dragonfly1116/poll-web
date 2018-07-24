const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const poll = require('./routes/api/poll');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').keysURI;

mongoose
    .connect(db)
    .then( () => console.log("Connect Database"))
    .catch( err => console.log(err))

const port = process.env.PORT || 3000;

app.use('/api/',poll);

app.listen(port, () => console.log(`Run on port ${port}`))

