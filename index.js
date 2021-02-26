const express = require('express')
const morgan = require('morgan')

const app = express()
require('dotenv').config()

app.use(morgan('dev'))
app.use(express.json())

//Route Users
const user = require('./modules/users/user.router')
app.use('/api/users', user)

app.listen(3000, () => console.log("Listen to port 3000"))