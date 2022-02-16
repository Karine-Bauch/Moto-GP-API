const client = require('../config/db');

/**
 * @typedef {object} teams
 * @property {number} id team id
 * @property {string} name team name
 * @property {string} moto team moto
 * @property {number} manufacturer_id id of manufacturer who provide the moto
 * @property {string} created_at creation date of the record
 * @property {string} updated_at last update date of the record
 */

/**
 * @typedef {object} team
 * @property {string} name team name
 * @property {number} id team id
 * @property {number} manufacturer_id id of manufacturer who provide the moto
 * @property {string} moto team moto
 * @property {object} pilots_lastname array of lastname of pilots who run in this team
 * @property {object} pilots_firstname array of firstname of pilots who run in this team
 */

module.exports = {

    /**
     * Show all teams from DB
     * @returns {teams} all teams from DB
     */
    async findAll() {
        const result = await client.query('SELECT * FROM "team"');
        return result.rows;
    },

    /**
     * Show team with the id selected
     * @param {number} id team id
     * @returns {team} team with id selected
     */
    async findOne(id) {
        const teamId = Number(id);
        const result = await client.query(`SELECT DISTINCT team.name AS team, team.id, manufacturer.name AS manufacturer, team.moto,
        array_agg(pilot.lastname) AS pilots_lastname,
        array_agg(pilot.firstname) AS pilots_firstname FROM "manufacturer"
        JOIN team ON manufacturer.id = manufacturer_id
        JOIN team_has_pilot ON team.id = team_id
        JOIN pilot ON pilot_id = pilot.id
        WHERE team.id = ${teamId}
        GROUP BY team.id, team.name, team.moto, manufacturer.name
        `);
        return result.rows[0];
    },
};
