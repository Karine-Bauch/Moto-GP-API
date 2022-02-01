const bunyan = require('bunyan');

const logger = bunyan.createLogger({
    name: 'motogp',
    streams: [
        {
            level: 'error',
            path: './log/error.log',
            type: 'rotating-file',
            period: '1d',
            count: 3,
        },
    ],
});

module.exports = logger;
