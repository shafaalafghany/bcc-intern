const router = require('express').Router()
const { addTransaction, checkTransaction, checkAllTransaction } = require('./transaction.controller')
const { checkBearer } = require('../../middleware/jwt.middleware')

router.post('/', checkBearer, addTransaction)
router.get('/:id', checkBearer, checkTransaction)
router.get('/', checkAllTransaction)

module.exports = router