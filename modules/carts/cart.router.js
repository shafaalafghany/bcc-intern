const router = require('express').Router()
const { addCart, checkCarts, updateCart, deleteCart } = require('./cart.controller')
const { checkBearer } = require('../../middleware/jwt.middleware')

router.post('/', checkBearer, addCart)
router.get('/', checkBearer, checkCarts)
router.put('/', checkBearer, updateCart)
router.delete('/:id', checkBearer, deleteCart)

module.exports = router