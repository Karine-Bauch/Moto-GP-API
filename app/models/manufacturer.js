const client = require('../config/db');

/**
 * @typedef {object} manufacturers
 * @property {number} id manufacturer id
 * @property {string} name manufacturer name
 * @property {string} created_at creation date of the record
 * @property {string} updated_at last update date of the record
 */

/**
 * @typedef {object} manufacturer
 * @property {number} id manufacturer id
 * @property {string} name manufacturer name
 * @property {object} motos array of motos
 * @property {object} teams array of teams
 */

module.exports = {

    /**
     * Show all manufacturers from DB
     * @returns {manufacturers} all manufacturers from DB
     */

    async findAll() {
        console.log(client);
        const result = await client.query('SELECT * FROM "manufacturer"');
        return result.rows;
    },

    /**
     * Show manufacturer with the id selected
     * @param {number} id manufacturer id
     * @returns {manufacturer} manufacturer with id selected
     */
    async findOne(id) {
        const manufacturerId = Number(id);
        const result = await client.query(`SELECT manufacturer.id, manufacturer.name, array_agg(DISTINCT moto) AS motos, array_agg(team.name) AS teams
        FROM "manufacturer"
        JOIN "team" ON "manufacturer"."id" = "manufacturer_id"
        WHERE "manufacturer"."id" = ${manufacturerId}
        GROUP BY manufacturer.name, manufacturer.id`);
        return result.rows;
    },
};
