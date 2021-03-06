const router = require('express').Router()
const { signIn, createAccount, checkUser, updateUser, deleteUser } = require('./user.controller')
const { checkBearer, checkAdmin } = require('../../middleware/jwt.middleware')

router.post('/signin', signIn)
router.post('/', createAccount)
router.get('/:id', checkBearer, checkUser)
router.put('/:id', checkBearer, updateUser)
router.delete('/:id', checkBearer, deleteUser)

module.exports = router