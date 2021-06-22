const router = require('express').Router()
const { addProduct, checkProduct, checkProductId, updateProduct, deleteProduct } = require('./product.controller')
const { checkBearer } = require('../../middleware/jwt.middleware')

router.post('/', checkBearer, addProduct)
router.get('/', checkProduct)
router.get('/:id', checkProductId)
router.put('/:id', checkBearer, updateProduct)
router.delete('/:id', checkBearer, deleteProduct)

module.exports = router