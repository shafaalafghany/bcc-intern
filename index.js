const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 8080; // default for deploying in BCC AWS

const app = express()
require('dotenv').config()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//test
app.get('/', (req, res) => {
    res.send("API is ready !")
})

//Route Users
const user = require('./modules/users/user.router')
app.use('/api/users', user)

//Route Products
const product = require('./modules/products/product.router')
app.use('/api/products', product)

app.listen(PORT, () => console.log(`Listen to port ${PORT}`))
