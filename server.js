'use strict'
const express = require('express')
const cors = require('cors')
require('dotenv').config();
const app = express();
app.use(cors());


const port = process.env.PORT || 3003;
const list = ['mohamad', 'ahmed', 'sultan', 'haroon']


app.get('/', (req, res) => {
    res.send('hello from server')
})

app.get('/name', (req, res) => {
    res.send(list)
})

app.get('/userlist', (req, res) => {
    console.log(req.query.name)
    res.json({ 'listOfName': list })
})

app.get('/sendstatus', (req, res) => {

    res.status(200).json({ 'listOfName': list })
})

app.get('*', (req, res) => {
    res.status(404).json({ 'error': 'page not found' })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}/`)
})