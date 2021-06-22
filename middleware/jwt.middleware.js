const jwt = require('jsonwebtoken')
const { checkUserId } = require('../modules/users/user.service')

module.exports = {
    checkBearer: (req, res, next) => {
        let token = req.get('Authorization')
        if(!token) {
            return res.status(400).json({
                status: false,
                message: 'Not allowed, user not authenticated',
                data: null,
            })
        }
        token = token.slice(7)
        jwt.verify(token, process.env.APP_KEY, { algorithms: ['HS256'] },
            (err, decoded) => {
                if(err){
                    return res.status(400).json({
                        status: false,
                        message: 'Bearer token invalid',
                        data: err,
                    })
                }
                checkUserId({ id: decoded.user.id }, (error, result) => {
                    if(error) {
                       return res.status(400).json({
                           status: false,
                           message: error,
                           data: null,
                       })
                    }
                    if(!result){
                        return res.status(400).json({
                            status: false,
                            message: 'User with auth key not found',
                            data: null,
                        })
                    }

                    req.decoded = decoded
                    next()
                })
            }
        )
    }
}