const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
require('dotenv').config()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

// Route Carts
const cart = require('./modules/carts/cart.router')
app.use('/api/carts', cart)

// Route Transactions
const transaction = require('./modules/transactions/transaction.router')
app.use('/api/transactions', transaction)

//Route swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 8080; // default for deploying in BCC AWS
app.listen(PORT, () => console.log(`Listen to port ${PORT}`))
