const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "hamkke_mysql",
    user: "root",
    password: "66356635",
    database: "hamkke"
})

exports.pool = pool;