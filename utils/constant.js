module.exports = {
    ERROR: (res, code, status, message) => res.status(code).json({
        status,
        message,
        data: null,
    }),
    SUCCESS: (res, code, status, message, data) => res.status(code).json({
        status,
        message,
        data,
    }),
}