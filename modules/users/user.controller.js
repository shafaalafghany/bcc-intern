const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { register, signIn, checkUserId, deleteUser } = require('./user.service')
const { payloadCheck } = require('../../middleware/payload.middleware')
const { ERROR, SUCCESS } = require('../../utils/constant')

let payload

module.exports = {
    signIn: (req, res) => {
        payload = {
            email: '',
            password: '',
        }

        const verify = payloadCheck(req.body, payload, ['email', 'password'])
        if(!verify.status) return ERROR(res, 501, false, verify.message)

        signIn(req.body, (error, result) => {
            if(error) return ERROR(res, 500, false, error)

            if(result.length === 0 ) return ERROR(res, 200, false, 'User not found')
            const data = result[0]
            data.token = jwt.sign({ user: data }, process.env.APP_KEY, {
                expiresIn: (60 * 60 * 24 * 7),
                algorithm: 'HS256',
            })
            return SUCCESS(res, 200, 'Sign in successful', data)
        })
    },
    createAccount: (req, res) => {
        payload = {
            name: '',
            email: '',
            password: '',
            phone: '',
            role: 0,
        }

        const verify = payloadCheck(req.body, payload, ['name', 'email', 'password', 'phone', 'role'])
        if(!verify.status) return ERROR(res, 501, false, verify.message)

        register(req.body, (error, result) => {
            if(error) return ERROR(res, 500, false, error)

            if(!result) return ERROR(res, 500, false, 'Internal server error')

            checkUserId({ id: result.insertId }, (errors, results) => {
                if(errors) return ERROR(res, 500, false, errors)
                const data = results[0]
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
            
            return SUCCESS(res, 200, true, result[0])
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