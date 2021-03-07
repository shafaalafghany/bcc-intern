const { addCart, getAllCarts, updateCart, deleteCart } = require('./cart.service')
const { payloadCheck } = require('../../middleware/payload.middleware')
const { ERROR, SUCCESS } = require('../../utils/constant')

let payload
module.exports = {
    addCart: (req, res) => {
        payload = {
            productName: '',
            idProduct: 0,
            idUser: 0,
            quantity: 0
        }

        const verify = payloadCheck(req.body, payload, ['productName', 'idProduct', 'idUser', 'quantity'])
        if (!verify.status) return ERROR(res, 501, false, verify.message)

        addCart(req.body, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            if (!result) return ERROR(res, 500, false, 'Internal server error')

            return SUCCESS(res, 200, true, 'Add cart successful')
        })
    },
    checkCarts: (req, res) => {
        payload ={
            idUser: 0,
        }

        const verify = payloadCheck(req.body, payload, ['idUser',])
        if (!verify.status) return ERROR(res, 501, false, verify.message)

        getAllCarts(req.body, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            return SUCCESS(res, 200, true, result)
        })
    },
    updateCart: (req, res) => {
        payload = {
            quantity: 0,
            idUser: 0,
        }

        const verify = payloadCheck(req.body, payload, ['quantity', 'idUser'])
        if (!verify.status) return ERROR(res, 500, false, verify.message)

        updateCart({ quantity: req.body.quantity, idProduct: req.params.id, idUser: req.body.idUser },
            (error, result) => {
                if (error) return ERROR(res, 500, false, error)

                if (!result) return ERROR(res, 500, false, 'Internal server error')

                return SUCCESS(res, 200, true, 'Update successful')
            })
    },
    deleteCart: (req, res) => {

        payload = {
            id: '',
        }

        const verify = payloadCheck(req.params, payload, parseInt(['id']))
        if(!verify.status) return ERROR(res, 501, false, verify.message)

        deleteCart({ id: req.params.id }, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            return SUCCESS(res, 200, true, 'Cart deleted')
        })
    }
}