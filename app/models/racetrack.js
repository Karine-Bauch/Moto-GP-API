const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "racetrack"');
        return result.rows;
    },

    async findOne(id) {
        const racetrackId = Number(id);
        const result = await client.query(`SELECT * FROM "racetrack" WHERE id = ${racetrackId}`);
        return result.rows[0];
    },
};
