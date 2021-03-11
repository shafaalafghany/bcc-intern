const mysql = require('mysql2')

const db = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    connectTimeout: 10000,
    connectionLimit: 1000,
})

module.exports = db
