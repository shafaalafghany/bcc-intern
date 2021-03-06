const { addProduct, getAllProduct, getProductId, deleteProduct } = require('./product.service')
const { payloadCheck } = require('../../middleware/payload.middleware')
const { ERROR, SUCCESS } = require('../../utils/constant')

let payload
module.exports = {
    addProduct: (req, res) => {
        payload = {
            name: '',
            price: 0,
            desc: '',
            netto: 0,
        }
        console.log(req.body)
        const verify = payloadCheck(req.body, payload, ['name', 'price', 'desc', 'netto'])
        if (!verify.status) return ERROR(res, 501, false, verify.message)

        addProduct(req.body, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            if (!result) return ERROR(res, 500, false, 'Internal server error')

            return SUCCESS(res, 200, 'Add product successful')
        })
    },
    checkProduct: (req, res) => {
        getAllProduct((error, result) => {
            if (error) return ERROR(res, 500, false, error)

            return SUCCESS(res, 200, true, result)
        })
    },
    checkProductId: (req, res) => {
        payload = {
            id: '',
        }

        const verify = payloadCheck(req.params, payload, parseInt(['id']))
        if(!verify.status) return ERROR(res, 501, false, verify.message)
        console.log(req.params.id)

        getProductId({id: req.params.id}, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            if (!result) return ERROR(res, 500, false, error)
            
            return SUCCESS(res, 200, true, result)
        })
    },
    deleteProduct: (req, res) => {

        payload = {
            id: '',
        }

        const verify = payloadCheck(req.params, payload, parseInt(['id']))
        if(!verify.status) return ERROR(res, 501, false, verify.message)

        deleteProduct({ id: req.params.id }, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            return SUCCESS(res, 200, true, 'Product deleted')
        })
    }
}