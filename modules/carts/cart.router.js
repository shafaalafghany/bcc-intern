const router = require('express').Router()
const { addCart, checkCarts, checkCartAmounts, updateCart, deleteCart } = require('./cart.controller')
const { checkBearer } = require('../../middleware/jwt.middleware')

router.post('/', checkBearer, addCart)
router.get('/:id', checkBearer, checkCarts)
router.get('/amounts/:id', checkBearer, checkCartAmounts)
router.put('/', checkBearer, updateCart)
router.delete('/:id', checkBearer, deleteCart)

module.exports = router