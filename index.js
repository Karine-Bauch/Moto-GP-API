const http = require('http');
require('dotenv').config();
const debug = require('debug')('app:server');
const app = require('./app');

const port = process.env.PORT ?? 5000;

const server = http.createSserver(app);

server.listen(port, () => {
    debug(`Listening on port ${port}`);
    console.log(`Listening on port ${port}`);
});
