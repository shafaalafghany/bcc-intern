const connection = require('../../utils/database')

const tableName = 'products'

module.exports = {
    addProduct: (data, callback) => {
        connection.query(
            `insert into ${tableName} (product_name, product_price, product_desc, product_netto) values (?,?,?,?)`,
            [
                data.name,
                data.price,
                data.desc,
                data.netto,
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