const { addTransaction, getTransactionId } = require('./transaction.service')
const { payloadCheck } = require('../../middleware/payload.middleware')
const { ERROR, SUCCESS } = require('../../utils/constant')

let payload
module.exports = {
    addTransaction: (req, res) => {
        payload = {
            invoice: '',
            idProduct: 0,
            iduser: 0,
            totalPrice: 0,
        }

        const verify = payloadCheck(req.body, payload, ['invoice', 'idProduct', 'idUser', 'totalPrice'])
        if (!verify.status) return ERROR(res, 501, false, verify.message)

        addTransaction(req.body, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            if (!result) return ERROR(res, 500, false, 'Internal server error')

            return SUCCESS(res, 200, true, 'Add transaction successful')
        })
    },
    checkTransaction: (req, res) => {
        payload = {
            id: '',
        }
        
        const verify = payloadCheck(req.params, payload, parseInt(['id']))
        if(!verify.status) return ERROR(res, 501, false, verify.message)

        getTransactionId({ id: req.params.id }, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            if (!result) return ERROR(res, 500, false, 'Internal server error')

            return SUCCESS(res, 200, true, result)
        })

    }
}