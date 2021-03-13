const db = require('./../../utils/database')

module.exports = {
    insertDetailTransaction: (data, callback) => {

        console.log(data)

        dataReady = []

        data.forEach(element => {
            dataReady.push([element.id_product, element.product_price, element.id_user, element.quantity, element.idTransaction])
        });

        console.log(dataReady)

        db.query(
            `INSERT INTO transaction_detail (id_product, price, id_user, qty, id_transaction) VALUES ?`,
            [
                dataReady
            ],
            (err, res) => {
                if (err)
                    return callback(err, null)
                return callback(null, res)
            }
        )
    }
}