// responseHandler.js
exports.successResponse = (res, data, message = 'Success') => {
    return res.status(200).json({ success: true, message, data });
};

exports.errorResponse = (res, message = 'Error', statusCode = 400) => {
    return res.status(statusCode).json({ success: false, message });
};