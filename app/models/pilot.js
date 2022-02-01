const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "pilot"');
        return result.rows;
    },

    async findOne(id) {
        const pilotId = Number(id);
        const result = await client.query(`SELECT * FROM "pilot" WHERE "id" = ${pilotId}`);
        return result.rows[0];
    },
};
