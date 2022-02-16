const client = require('../config/db');

/**
 * @typedef {object} pilots
 * @property {number} id pilot id
 * @property {string} lastname pilot lastname
 * @property {string} firstname pilot firstname
 * @property {number} number pilot number
 * @property {string} nationality pilot nationality
 * @property {string} created_at creation date of the record
 * @property {string} updated_at last update date of the record
 */

/**
 * @typedef {object} pilot
 * @property {number} id pilot id
 * @property {string} lastname pilot lastname
 * @property {string} firstname pilot firstname
 * @property {number} number pilot number
 * @property {string} nationality pilot nationality
 * @property {string} team pilot team
 * @property {string} manufacturer pilot manufacturer
 */

module.exports = {

    /**
     * Show all pilots from DB
     * @returns {pilots} all pilots from DB
     */

    async findAll() {
        const result = await client.query('SELECT * FROM "pilot"');
        return result.rows;
    },

    /**
     * Show pilot with te id selected
     * @param {number} id pilot id
     * @returns {pilot} pilot with id selected
     */

    async findOne(id) {
        const pilotId = Number(id);
        const result = await client.query(`SELECT pilot.id, pilot.lastname AS lastname, pilot.firstname AS firstname,
        pilot.number AS "number", pilot.nationality AS nationality,
        team.name AS team, manufacturer.name AS manufacturer
        FROM pilot
        JOIN team_has_pilot ON pilot.id = pilot_id
        JOIN team ON team_id = team.id
        JOIN manufacturer ON manufacturer_id = manufacturer.id
        WHERE pilot.id = ${pilotId}`);
        return result.rows[0];
    },
};
