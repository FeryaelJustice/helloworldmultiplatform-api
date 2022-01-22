const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const pool = require('./database/database');
const data = require('./data.json');

app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('Hello World!');
})

app.get('/players', (req, res, next) => {
    res.send(data);
})

app.get('/db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null };
        res.render('pages/db', results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

app.get('/dbcreate', async (req, res) => {
    try {
        const client = await pool.connect();
        await client.query('CREATE TABLE IF NOT EXISTS test_table(id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name VARCHAR(255), team VARCHAR(255), pointsPerGame INTEGER)');
        res.send("Table created successfully");
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})