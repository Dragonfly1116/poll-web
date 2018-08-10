const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const apiRoute = require('./routes/api/');

const app = express();

app.use(bodyParser.json());
app.use(cors());
const db = require('./config/keys').keysURI;
app.use('/api/',apiRoute);

mongoose
    .connect(db)
    .then( () => console.log("Connect Database"))
    .catch( err => console.log(err))

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Run on port ${port}`))

