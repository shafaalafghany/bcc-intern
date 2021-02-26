const validator = require('payload-validator')

module.exports = {
    payloadCheck: (data, expected, mandatory) => {
        const result = validator.validator(data, expected, mandatory, false)
        if(!result.success){
            return {
                status: false,
                message: result.response.errorMessage,
            }
        }

        return { status: true }
    },
}