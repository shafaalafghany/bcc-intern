const db = require('../../utils/database')
const connection = require('../../utils/database')
const { insertDetailTransaction } = require('./transactiondetail.service')

const tableName = 'transaction'

module.exports = {
    addTransaction: (data, callback) => {
            const date = new Date()
            let day, month
            let year = date.getFullYear().toString().substr(2, 4)
        
            if(date.getMonth().toString().length == 1) {
                month = '0' + date.getMonth().toString()
            } else {
                month = date.getMonth().toString()
            }
        
            if(date.getDay().toString().length == 1) {
                day = '0' + date.getDay().toString()
            } else {
                day = date.getDay().toString()
            }

            connection.query(`SELECT COUNT(id) AS total FROM ${tableName}`,
            [],
            (err, res) => {
                let totalRow = res[0].total
                let code = totalRow.toString()
                if (totalRow.toString().length == 1) {
                    code = '000' + totalRow
                } else if (totalRow.toString().length == 2) {
                    code = '00' + totalRow
                } else if (totalRow.toString().length == 3) {
                    code = '0' + totalRow
                }
                let invoice = 'INV/' + year + month + day + code
                
                connection.query(
                    `insert into ${tableName} (invoice, id_user, date, total_price) values (?,?,?,?)`,
                    [
                        invoice,
                        data.id_user,
                        data.date,
                        data.totalPrice,
                    ],
                    (err, res) => {
                        if (err) { return callback(err) }
        
                        let detailData = data.detail
                        
                        for (let i = 0; i < detailData.length; i++) {
                            detailData[i].idTransaction = res.insertId
                        }
        
                        insertDetailTransaction(detailData, (err, res) => {
                            if (err) return callback(err, null)
        
                            res.invoice = invoice
                            return callback(null, res)
                        })
                    }
                )
            })
    },
    getTransactionId: (data, callback) => {
        connection.query(
            `select * from ${tableName} where id_user = ? order by id desc`,
            [
                data.id,
            ],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    getAllTransaction: (callback) => {
        connection.query(
            `select * from transaction_detail order by date desc`,
            [],
            (err, res) => {
                if (err) { return callback(err) }

                return callback(null, res)
            }
        )
    }
}