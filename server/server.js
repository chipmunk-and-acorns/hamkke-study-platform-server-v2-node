const express = require('express');
const bodyParser = require("body-parser");
const db = require('./db');

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    return res.send('Hello World!!!');
})

app.get("/api/values", (req, res) => {
    db.pool.query("SELECT * FROM lists", (err, result) => {
        if(err) return res.status(500).send(err);
        else return res.json(result);
    });
})

app.post("/api/value", (req, res) => {
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`, (err, result) => {
        if(err) return res.status(500).send(err);
        else return res.json( { success: true, value: req.body.value });
    });
})

app.listen(5000, () => {
    console.log("connected hamkke server use PORT 5000!!!");
});