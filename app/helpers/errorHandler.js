// const logger = require('./logger');
const ApiError = require('../errors/apiError');
const WebsiteError = require('../errors/websiteError');

const errorHandler = (err, res) => {
    let { statusCode, message } = err;

    if (Number.isNaN(Number(statusCode))) {
        statusCode = 500;
    }

    // if (statusCode === 500) {
    //     logger.error(err);
    // }

    if (statusCode === 500 && res.app.get('env') !== 'development') {
        message = 'Internal Server Error';
    }

    if (err instanceof WebsiteError || err.code?.substr(0, 3) === 'PUG' || err.view) {
        res.status(statusCode).render('error', {
            statusCode,
            message,
            title: `Error ${err.statusCode}`,
        });
    } else {
        res.status(statusCode).json({
            status: 'error',
            statusCode,
            // message,
        });
    }
};

module.exports = {
    ApiError,
    WebsiteError,
    errorHandler,
};
