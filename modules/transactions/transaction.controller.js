const { addTransaction, getTransactionId, getAllTransaction } = require('./transaction.service')
const {deleteAllCart} = require('./../carts/cart.service')
const { payloadCheck } = require('../../middleware/payload.middleware')
const { ERROR, SUCCESS } = require('../../utils/constant')

let payload
module.exports = {
    addTransaction: (req, res) => {
        payload = {
            date: '',
            totalPrice: 0,
            idUser: 0,
            detail: [{}],
        }

        const verify = payloadCheck(req.body, payload, ['date', 'detail', 'idUser', 'totalPrice'])
        if (!verify.status) return ERROR    (res, 501, false, verify.message)

        const dataSplit = req.body.detail
        let totalPrice = 0

        for (let i = 0; i < dataSplit.length; i++) {
            for (let j = 0; j < dataSplit[i].qty; j++) {
                totalPrice += dataSplit[i].price                
                
            }
        }

        if (req.body.totalPrice != totalPrice) {
            return ERROR(res, 400, false, 'Total price from server doesnt recognize')
        }

        dataFix = {
            date: req.body.date,
            idUser: req.body.idUser,
            totalPrice: totalPrice,
            detail: dataSplit,
        }

        addTransaction(dataFix, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            if (!result) return ERROR(res, 500, false, 'Internal server error')

            console.log(result)
            dataFix.invoice = result.invoice

            deleteAllCart({id: dataFix.idUser}, (error, result) => {

                return SUCCESS(res, 200, true, 'Add transaction successful', dataFix)
            })
        })
    },
    checkTransaction: (req, res) => {
        if(parseInt(req.params.id, 0) !== req.decoded.user.id) {
            return ERROR(res, 501, false, 'User with bearer not match')
        }
        
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
    },
    checkAllTransaction: (req, res) => {
        getAllTransaction((error, result) => {
            if (error) return ERROR(res, 500, false, error)

            return SUCCESS(res, 200, true, result)
        })
    }
}