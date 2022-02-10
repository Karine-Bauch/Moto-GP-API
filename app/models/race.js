const client = require('../config/db');

module.exports = {
    async findAll() {
        const result = await client.query('SELECT * FROM "race"');
        return result.rows;
    },

    async findOne(id) {
        const raceId = Number(id);
        const result = await client.query(`SELECT "race"."id", "race"."name" AS race_name, "race"."date", "racetrack"."name" AS racetrack_name, "racetrack"."country", "racetrack"."city"
        FROM "race"
        JOIN "racetrack" ON "racetrack_id" = "racetrack"."id"
        WHERE "race"."id" = ${raceId}`);
        return result.rows[0];
    },
};
