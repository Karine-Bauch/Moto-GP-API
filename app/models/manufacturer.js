const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "manufacturer"');
        return result.rows;
    },

    async findOne(id) {
        const manufacturerId = Number(id);
        const result = await client.query(`SELECT * FROM "manufacturer" WHERE id = ${manufacturerId}`);
        return result.rows;
    },
};
