const express = require('express');
const app = express();

let port = process.env.PORT || 3000;

const data = require('./data.json');

app.get('/', (req, res, next) => {
    res.send('Hello World!');
})

app.get('/players', (req, res, next) => {
    res.send(data);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})