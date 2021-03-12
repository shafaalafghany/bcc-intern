const router = require('express').Router()
const { addTransaction, checkTransaction } = require('./transaction.controller')
const { checkBearer } = require('../../middleware/jwt.middleware')

router.post('/', checkBearer, addTransaction)
router.get('/', checkBearer, checkTransaction)