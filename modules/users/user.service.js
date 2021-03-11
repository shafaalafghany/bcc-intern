const connection = require('../../utils/database')

const tableName = 'users'

module.exports = {
    register: (data, callback) => {
        connection.query(
            `insert into ${tableName} (name, email, password, phone, role) values (?,?,?,?,?)`,
            [
                data.name,
                data.email,
                data.password,
                data.phone,
                data.role,
            ],
            (err, res) => {
                if(err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    signIn: (data, callback) => {
        connection.query(
            `select * from ${tableName} where email = ? and password = ? LIMIT 1`,
            [
                data.email,
                data.password,
            ],
            (err, res) => {
                if(err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    checkUserId: (data, callback) => {
        connection.query(
            `select * from ${tableName} where id = ?`,
            [
                data.id,
            ],
            (err, res) => {
                if(err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    updateUser: (data, callback) => {
        console.log(tableName)
        connection.query(
            `update ${tableName} set name = ?, email = ?, phone = ?, address = ?, gender = ? where id = ?`,
            [
                data.name,
                data.email,
                data.phone,
                data.address,
                data.gender,
                data.id,
            ],
            (err, res) => {
                if(err) { return callback(err) }

                return callback(null, res)
            }
        )
    },
    deleteUser: (data, callback) => {
        connection.query(
            `delete from ${tableName} where id = ?`,
            [
                data.id,
            ],
            (err, res) => {
                if(err) { return callback(err) }

                return callback(null, res)
            }
        )
    }
}