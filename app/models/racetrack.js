const client = require('../config/db');

/**
 * @typedef {object} racetracks
 * @property {number} id racetrack id
 * @property {string} name racetrack name
 * @property {string} country racetrack country
 * @property {string} city racetrack city
 * @property {string} created_at creation date of the record
 * @property {string} updated_at last update date of the record
 */

/**
 * @typedef {object} racetrack
 * @property {number} id racetrack id
 * @property {string} racetrack racetrack name
 * @property {string} country racetrack country
 * @property {string} city racetrack city
 * @property {object} races array of races run on this racetrack
 */

module.exports = {

    /**
     * Show all ractracks from DB
     * @returns {racetracks} all racetracks from DB
     */
    async findAll() {
        const result = await client.query('SELECT * FROM "racetrack"');
        return result.rows;
    },

    /**
     * Show racetrack with the id selected
     * @param {number} id racetrack id
     * @returns {racetrack} racetrack with id selected
     */
    async findOne(id) {
        const racetrackId = Number(id);
        const result = await client.query(`SELECT racetrack.id, racetrack.name AS racetrack, racetrack.country AS country, racetrack.city AS city,
        array_agg(race.name) AS races
        FROM racetrack
        JOIN race ON racetrack.id = racetrack_id
        WHERE racetrack.id = ${racetrackId}
        GROUP BY racetrack.id, racetrack.name, racetrack.country, racetrack.city`);
        return result.rows[0];
    },
};
