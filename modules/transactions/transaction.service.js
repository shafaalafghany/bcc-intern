const db = require('../../utils/database')
const connection = require('../../utils/database')

const tableName = 'transaction'

module.exports = {
    addTransaction: (data, callback) => {
        connection.query(
            `insert into ${tableName} (invoice, product_id, id_user, date, total_price) values (?,?,?,?,?)`,
            [
                data.invoice,
                data.idProduct,
                data.idUser,
                data.date,
                data.totalPrice,
            ],
            (err, res) => {
                if (err) { return callback(err) }
                connection.destroy()
                return callback(null, res)
            }
        )
    },
    getTransactionId: (data, callback) => {
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
}