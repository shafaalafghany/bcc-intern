const router = require('express').Router()
const { signIn, createAccount, checkUser, deleteUser } = require('./user.controller')
const { checkBearer } = require('../../middleware/jwt.middleware')

router.post('/signin', signIn)
router.post('/', createAccount)
router.get('/:id', checkBearer, checkUser)
router.delete('/:id', checkBearer, deleteUser)

module.exports = router