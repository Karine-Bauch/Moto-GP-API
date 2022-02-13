const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "pilot"');
        return result.rows;
    },

    async findOne(id) {
        const pilotId = Number(id);
        const result = await client.query(`SELECT pilot.lastname AS lastname, pilot.firstname AS firstname,
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
