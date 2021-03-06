const router = require('express').Router()
const { addProduct, checkProduct, checkProductId, deleteProduct } = require('./product.controller')
const { checkAdmin } = require('../../middleware/jwt.middleware')

router.post('/', checkAdmin, addProduct)
router.get('/', checkAdmin, checkProduct)
router.get('/:id', checkAdmin, checkProductId)
router.delete('/:id', checkAdmin, deleteProduct)

module.exports = router