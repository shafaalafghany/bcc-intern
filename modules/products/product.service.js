const connection = require('../../utils/database')

const tableName = 'products'

module.exports = {
    addProduct: (data, callback) => {
        connection.query(
            `insert into ${tableName} (product_name, product_price, product_desc) values (?,?,?)`,
            [
                data.name,
                data.price,
                data.desc,
            ],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    getAllProduct: (callback) => {
        connection.query(
            `select * from ${tableName}`,
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    getProductId: (data, callback) => {
        connection.query(
            `select * from ${tableName} where id_product = ?`,
            [
                data.id,
            ],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    updateProduct: (data, callback) => {
        connection.query(
            `update ${tableName} set product_name = ?, product_price = ?, product_desc =? where id_product = ?`,
            [
                data.name,
                data.price,
                data.desc,
                data.id,
            ],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    deleteProduct: (data, callback) => {
        connection.query(
            `delete from ${tableName} where id_product = ?`,
            [
                data.id,
            ],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    }
}