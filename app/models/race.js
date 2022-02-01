const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "race"');
        return result.rows;
    },

    async findOne(id) {
        const raceId = Number(id);
        const result = await client.query(`SELECT * FROM "race" WHERE "id" = ${raceId}`);
        return result.rows[0];
    },
};
