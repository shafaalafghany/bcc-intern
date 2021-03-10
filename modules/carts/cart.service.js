const connection = require('../../utils/database')

const tableName = 'carts'

module.exports = {
    addCart: (data, callback) => {
        connection.query(
            `insert into ${tableName} (product_name, id_product, id_user, quantity) values (?,?,?,?)`,
            [
                data.productName,
                data.idProduct,
                data.idUser,
                data.quantity,
            ],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    getAllCarts: (data, callback) => {
        connection.query(
            `select * from ${tableName} where id_user = ?`,
            [
                data.id,
            ],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    getCartAmount: (data, callback) => {
        connection.query(
            `select count(product_name) from ${tableName} where id = ?`,
            [
                data.id,
            ],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    updateCart: (data, callback) => {
        connection.query(
            `update ${tableName} set quantity = ? where id_product = ? and id_user = ?`,
            [
                data.quantity,
                data.idProduct,
                data.idUser,
            ],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    deleteCart: (data, callback) => {
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