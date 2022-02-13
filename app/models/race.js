const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "race"');
        return result.rows;
    },

    async findOne(id) {
        const raceId = Number(id);
        const result = await client.query(`SELECT "race"."id", "race"."name" AS race_name, "race"."date",
        "racetrack"."name" AS racetrack_name, "racetrack"."country", "racetrack"."city",
        array_agg(pilot.lastname) AS pilot_name
        FROM pilot
        JOIN pilot_has_race ON pilot.id = pilot_id
        JOIN "race" ON race_id = race.id
        JOIN "racetrack" ON "racetrack_id" = "racetrack"."id"
        WHERE "race"."id" = ${raceId}
        GROUP BY "race"."id", "race"."name", "race"."date", "racetrack"."name",
        "racetrack"."country", "racetrack"."city"`);
        return result.rows[0];
    },
};
