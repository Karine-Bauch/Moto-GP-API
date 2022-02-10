const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "manufacturer"');
        return result.rows;
    },

    async findOne(id) {
        const manufacturerId = Number(id);
        const result = await client.query(`SELECT manufacturer.id, manufacturer.name, array_agg(DISTINCT moto) AS motos, array_agg(team.name) AS teams
        FROM "manufacturer"
        JOIN "team" ON "manufacturer"."id" = "manufacturer_id"
        WHERE "manufacturer"."id" = ${manufacturerId}
        GROUP BY manufacturer.name`);
        return result.rows;
    },
};
