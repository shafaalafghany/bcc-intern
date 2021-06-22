const jwt = require('jsonwebtoken')
const { genSaltSync, hashSync, compareSync } = require('bcryptjs')
const { register, signIn, checkUserId, checkUserEmail, updateUser, deleteUser } = require('./user.service')
const { payloadCheck } = require('../../middleware/payload.middleware')
const { ERROR, SUCCESS } = require('../../utils/constant')

let payload
const salt = genSaltSync(10)

module.exports = {
    signIn: (req, res) => {
        payload = {
            email: '',
            password: '',
        }

        const verify = payloadCheck(req.body, payload, ['email', 'password'])
        if(!verify.status) return ERROR(res, 501, false, verify.message)

        checkUserEmail({ email: req.body.email }, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            const checkPassword = compareSync(req.body.password, result[0].password)
            if (!checkPassword) return ERROR(res, 403, false, 'Incorrect email or password')

            signIn(req.body, (errors, results) => {
                if(errors) return ERROR(res, 500, false, errors)
                const data = result[0]
                delete data.password
                data.token = jwt.sign({ user: data }, process.env.APP_KEY, {
                    expiresIn: (60 * 60 * 24 * 7),
                    algorithm: 'HS256',
                })
                
                return SUCCESS(res, 200, 'Sign in successful', data)
            })
        })
    },
    createAccount: (req, res) => {
        payload = {
            name: '',
            email: '',
            password: '',
            phone: '',
            role: '',
        }

        const verify = payloadCheck(req.body, payload, ['name', 'email', 'password', 'phone', parseInt(['role'])])
        if(!verify.status) return ERROR(res, 501, false, verify.message)

        const password = hashSync(req.body.password, salt)
        req.body.password = password

        register(req.body, (error, result) => {
            if(error) return ERROR(res, 500, false, error)

            if(!result) return ERROR(res, 500, false, 'Internal server error')

            checkUserId({ id: result.insertId }, (errors, results) => {
                if(errors) return ERROR(res, 500, false, errors)
                const data = results[0]
                delete data.password
                data.token = jwt.sign({ user: data }, process.env.APP_KEY, {
                    expiresIn: (60 * 60 * 24 * 7),
                    algorithm: 'HS256',
                })

                return SUCCESS(res, 200, true, data)
            })
        })
    },
    checkUser: (req, res) => {
        if(parseInt(req.params.id, 0) !== req.decoded.user.id) {
            return ERROR(res, 501, false, 'User with bearer not match')
        }
        payload = {
            id: '',
        }

        const verify = payloadCheck(req.params, payload, parseInt(['id']))
        if(!verify.status) return ERROR(res, 501, false, verify.message)

        checkUserId({ id: req.params.id}, (error, result) => {
            if(error) return ERROR(res, 500, false, error)
            delete result[0].password
            
            return SUCCESS(res, 200, true, result[0])
        })
    },
    updateUser: (req, res) => {
        if(parseInt(req.params.id, 0) !== req.decoded.user.id) {
            return ERROR(res, 501, false, 'User with bearer not match')
        }
        payload = {
            name: '',
            email: '',
            phone: '',
            address: '',
            gender: '',
        }

        const verify = payloadCheck(req.body, payload, ['name', 'email', 'phone', 'address', 'gender'])
        if(!verify.status) return ERROR(res, 501, false, verify.message)
        
        updateUser({ 
            name: req.body.name, email: req.body.email, phone: req.body.phone, address: req.body.address, gender: req.body.gender, id: req.params.id,
        }, (error, result) => {
            if(error) return ERROR(res, 500, false, error)
            
            return SUCCESS(res, 200, true, 'Update successful')
        })
    },
    deleteUser: (req, res) => {
        if(parseInt(req.params.id, 0) !== req.decoded.user.id) {
            return ERROR(res, 501, false, 'User with bearer not match')
        }
        payload = {
            id: '',
        }

        const verify = payloadCheck(req.params, payload, parseInt(['id']))
        if(!verify.status) return ERROR(res, 501, false, verify.message)

        deleteUser({ id: req.params.id }, (error, result) => {
            if(error) return ERROR(res, 500, false, error)

            return SUCCESS(res, 200, true, 'User deleted')
        })
    }
}