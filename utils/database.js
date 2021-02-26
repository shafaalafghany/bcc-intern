const mysql = require('mysql2')

const db = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    connectTimeout: 10000,
})

db.query('select 1 + 1 as result', (err) => {
    if(err) return console.log(err)

    return console.log("Connected to Database")
})

module.exports = db