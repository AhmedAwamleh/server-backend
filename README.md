# server-backend.


'use strict'
const express = require('express')
const cors = require('cors')
require('dotenv').config();
const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening to port ${port}/`)
})