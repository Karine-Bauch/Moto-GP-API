const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "team"');
        return result.rows;
    },

    async findOne(id) {
        const teamId = Number(id);
        const result = await client.query(`SELECT DISTINCT team.name AS team, manufacturer.name AS manufacturer, team.moto,
        array_agg(pilot.lastname) AS pilots_lastname,
        array_agg(pilot.firstname) AS pilots_firstname FROM "manufacturer"
        JOIN team ON manufacturer.id = manufacturer_id
        JOIN team_has_pilot ON team.id = team_id
        JOIN pilot ON pilot_id = pilot.id
        WHERE team.id = ${teamId}
        GROUP BY team.name, team.moto, manufacturer.name
        `);
        return result.rows[0];
    },
};
