const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "racetrack"');
        return result.rows;
    },

    async findOne(id) {
        const racetrackId = Number(id);
        const result = await client.query(`SELECT racetrack.name AS racetrack, racetrack.country AS country, racetrack.city AS city,
        array_agg(race.name) AS races
        FROM racetrack
        JOIN race ON racetrack.id = racetrack_id
        WHERE racetrack.id = ${racetrackId}
        GROUP BY racetrack.name, racetrack.country, racetrack.city`);
        return result.rows[0];
    },
};
