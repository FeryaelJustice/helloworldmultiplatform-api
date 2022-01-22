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

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/home');
})

app.get('/about', (req, res) => {
    res.render('pages/about');
})

app.get('/players', (req, res) => {
    res.send(data);
})

app.get('/db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        //const results = { 'results': (result) ? result.rows : null };
        const results = {
            'data': result
        }
        res.render('pages/db', {
            results: results
        });
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

app.get('/dbinsert', async (req, res) => {
    try {
        const client = await pool.connect();
        await client.query('INSERT INTO test_table(name, team, pointsPerGame) VALUES (test_name, test_team, 1)');
        res.send("Row inserted successfully");
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})