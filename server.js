const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const massive = require('massive');
require('dotenv').config();

const app = express();

// Serving static files.
app.use(express.static(path.join(__dirname + '/build')));

// Catch all for routing.
app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
      })
});

app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        console.log('DB is up too, yo!')
    }).catch(err => {
        console.log(`ERROR CONTECTING TO DATABASE`, err.message)
    })


app.get('/api/product', (req, res) => {
    const db = req.app.get('db');
    db.product.find()
        .then(result => {
            res.send(result)
        })
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`kickin it on port ${port}`)
})
