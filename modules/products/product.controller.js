const { addProduct, getAllProduct, getProductId, updateProduct, deleteProduct } = require('./product.service')
const { payloadCheck } = require('../../middleware/payload.middleware')
const { ERROR, SUCCESS } = require('../../utils/constant')

let payload
module.exports = {
    addProduct: (req, res) => {
        payload = {
            name: '',
            price: 0,
            img: '',
            desc: '',
        }
        const verify = payloadCheck(req.body, payload, ['name', 'price', 'img', 'desc',])
        if (!verify.status) return ERROR(res, 501, false, verify.message)

        addProduct(req.body, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            if (!result) return ERROR(res, 500, false, 'Internal server error')

            return SUCCESS(res, 200, true, 'Add product successful')
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

        getProductId({id: req.params.id}, (error, result) => {
            if (error) return ERROR(res, 500, false, error)

            if (!result) return ERROR(res, 500, false, 'Internal server error')
            
            return SUCCESS(res, 200, true, result)
        })
    },
    updateProduct: (req, res) => {
        payload = {
            name: '',
            price: 0,
            img: '',
            desc: '',
        }

        const verify = payloadCheck(req.body, payload, ['name', 'price', 'img', 'desc'])
        if (!verify.status) return ERROR(res, 500, false, verify.message)

        updateProduct({ id: req.params.id, name: req.body.name, price: req.body.price, img: req.body.img, desc: req.body.desc },
            (error, result) => {
                if (error) return ERROR(res, 500, false, error)

                if (!result) return ERROR(res, 500, false, 'Internal server error')

                return SUCCESS(res, 200, true, 'Update successful')
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